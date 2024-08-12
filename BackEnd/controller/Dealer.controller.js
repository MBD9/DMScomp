import express from "express";
import Dealer from "../model/Dealer.model.js";
import Category from "../model/Category.model.js";
import Complaints from "../model/Compalaints.model.js";

const router = express.Router();
export const signInController = async (req, res) => {
    try {

        const dealer = await Dealer.findOne({ where: { UserName: req.body.UserName } });
        if (!dealer) {
            return res.status(404).json({ message: "Dealer not found" });
        }
        res.status(200).json({ dealer })
    }
    catch (err) {
        // console.error(err);
        res.status(500).json({ message: "Server error" });
    }
};

export const makeComplaint = async (req, res) => {
    try {
        const { UserName, batchNo, InvoiceNo, IssueDescription, SKUCode, DealerRemark, Quantity, category, subCategory, Repetitive, InvoiceDate, ConcernedDept } = req.body;
        const files = req.files || {};
        let Image1 = files.Image1 ? files.Image1[0].buffer : null;
        let Image2 = files.Image2 ? files.Image2[0].buffer : null;
        let Image3 = files.Image3 ? files.Image3[0].buffer : null;
        const complaint = await Complaints.create({
            UserName,
            ConcernedDept,
            batchNo: batchNo || '',
            InvoiceNo: InvoiceNo || null,
            InvoiceDate: InvoiceDate,
            IssueDescription,
            SKUCode: SKUCode || 0, // Default value for undefined SKUCode
            DealerRemark,
            Quantity: Quantity || 0, // Default value for undefined Quantity
            category,
            subCategory,
            Repetitive: Repetitive || 'No',
            Image1: Image1,
            Image2: Image2,
            Image3: Image3,
            state: "Pending"
        });



        if (!complaint) {
            return res.status(403).json({ message: "Credential Missing" });
        }

        return res.status(200).json(complaint);
    } catch (error) {
        console.log(error);
        return res.status(400).json({ error: error.message });
    }
};
export const getCategory = async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.json(categories);
    } catch (error) {
        // console.log(error);
        res.status(500).json({ error: error.message });
    }
}

export const getCompalints = async (req, res) => {
    const { UserName } = req.body
    console.log(req.body);
    try {
        const complaints = await Complaints.findAll({ UserName })
        if (!complaints) {
            return res.status(200).json({ message: "You Not Have Any Complaint" })
        }
        return res.status(200).json(complaints)
    } catch (error) {
        console.log(error);
        return res.status(200).json(error)
    }
}

export const findInvoice = async (req, res) => {
    const { InvoiceNo } = req.body
    const invoiceNumber = String(InvoiceNo);
    try {
        // const complain = await Complaints.findOne({ InvoiceNo })
        // const complain = await Complaints.findOne({ where: { InvoiceNo } });
        const complain = await Complaints.findOne({ where: { InvoiceNo: invoiceNumber } });
        if (complain) {
            return res.status(201).json({ message: "Complaint Already Registed  with this Invoice Number" })
        }
        return res.status(200).json({ message: "No" })
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Error checking invoice" });
    }

}

export const reopen = async (req, res) => {
    try {
        // Find the complaint by primary key
        console.log(req.body.ComplaintID);

        const complaint = await Complaints.findByPk(req.body.ComplaintID);
        console.log(complaint);


        // If complaint is not found, send a 404 response
        if (!complaint) {
            return res.status(200).json({ message: "Complaint Not Found" });
        }
        // Update the complaint state to "Pending"
        complaint.state = "Pending";
        await complaint.save();

        // Send a success response
        return res.status(200).json({ message: "Complaint Reopened", complaint });

    } catch (error) {
        // Send an error response in case of exceptions
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error", error });
    }
}


export const statusComplaint = async (req, res) => {
    const { status } = req.body;

    try {
        const complaints = await Complaints.findAll({ where: { state: status } });

        if (complaints.length === 0) {
            return res.status(200).json({ message: "You Have Not Complaints" });
        }

        return res.status(200).json({ message: "Complaints retrieved successfully", complaints });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error", error });
    }
};

export default router;
