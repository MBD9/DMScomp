import express, { Router } from "express";
const router = express.Router();
import { signInController, getCategory, makeComplaint, getCompalints, findInvoice, reopen, statusComplaint } from '../controller/Dealer.controller.js'
import Subcategory from "../model/Subcategory.model.js";
import { upload } from "../middlewares/multer.middleware.js";
router.post('/signin', signInController)
router.post('/complaint', upload.fields([
    { name: 'Image1', maxCount: 1 },
    { name: 'Image2', maxCount: 1 },
    { name: 'Image3', maxCount: 1 }
]), makeComplaint);
router.post('/statusComplaint', statusComplaint)
router.post('/reopen', reopen)
router.get('/categories/:categoryId/subcategories', async (req, res) => {

    const { categoryId } = req.params;
    try {
        const subcategories = await Subcategory.findAll({ where: { categoryId } });
        res.json(subcategories);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }
});
router.post('/check-Invoice', findInvoice)
// Get all categories
router.get('/categories', getCategory);

router.post('/MyComplints', getCompalints)
export default router;