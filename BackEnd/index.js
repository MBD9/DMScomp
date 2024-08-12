
import express from "express";
import DealerRoute from './routes/Dealer.routes.js';
import sequelize from "./DB/dbConfig.js";
import seedDatabase from "./Service/SeedData.js";
import { upload } from "./middlewares/multer.middleware.js";
import cors from 'cors';
import department from "./model/DepartMent.model.js";

import Subcategory from "./model/Subcategory.model.js";
import Complaints from "./model/Compalaints.model.js";

const app = express();
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());
// await Complaints.destroy({ where: {} })
// await sequelize.query("DBCC CHECKIDENT ('Complaints', RESEED, 0)", {
//     type: sequelize.QueryTypes.RAW
// });
app.use("/dealer", DealerRoute);
app.get('/dep', async (req, res) => {
    const dep = await department.findAll()
    if (!dep) {
        res.status(404).json({ message: "There is not any deaprtment" })
    }
    res.status(200).json(dep)
})
app.get('/cat', async (req, res) => {
    const dep = await Subcategory.findAll()
    if (!dep) {
        res.status(404).json({ message: "There is not any deaprtment" })
    }
    res.status(200).json(dep)
})
sequelize.sync({ force: false }) // This will drop existing tables and create new ones
    .then(() => {
        console.log('Database & tables created!');
        return seedDatabase();
    })
    .then(() => {
        console.log('Database seeded!');
    })
    .catch(error => console.log('This error occurred', error));

app.listen(8000, () => {
    console.log("Server started...");
});









// import express from "express";
// import DealerRoute from './routes/Dealer.routes.js';
// import sequelize from "./DB/dbConfig.js";
// import seedDatabase from "./Service/SeedData.js";
// import { upload } from "./middlewares/multer.middleware.js";
// import cors from 'cors';
// import department from "./model/DepartMent.model.js";
// import Category from "./model/Category.model.js";
// import Subcategory from "./model/Subcategory.model.js";

// const app = express();
// const resetData = true; // Set this to true to delete data and reset IDs

// if (resetData) {
//     (async () => {
//         try {
//             // Destroy all records in Subcategories table
//             await Subcategory.destroy({ where: {} });

//             // Reset the auto-increment ID for Subcategories
//             await sequelize.query("DBCC CHECKIDENT ('Subcategories', RESEED, 0)", {
//                 type: sequelize.QueryTypes.RAW
//             });

//             // Destroy all records in Categories table
//             await Category.destroy({ where: {} });

//             // Reset the auto-increment ID for Categories
//             await sequelize.query("DBCC CHECKIDENT ('Categories', RESEED, 0)", {
//                 type: sequelize.QueryTypes.RAW
//             });

//             // Destroy all records in Departments table
//             await department.destroy({ where: {} });

//             // Reset the auto-increment ID for Departments
//             await sequelize.query("DBCC CHECKIDENT ('Departments', RESEED, 0)", {
//                 type: sequelize.QueryTypes.RAW
//             });

//             console.log("All data deleted and IDs reset.");
//         } catch (error) {
//             console.error("Error deleting data and resetting IDs:", error);
//         }
//     })();
// }

// app.use(express.json({ limit: '50mb' }));
// app.use(express.urlencoded({ limit: '50mb', extended: true }));
// app.use(cors());

// app.use("/dealer", DealerRoute);

// app.get('/dep', async (req, res) => {
//     const dep = await department.findAll();
//     if (!dep) {
//         res.status(404).json({ message: "There is not any department" });
//     }
//     res.status(200).json(dep);
// });

// app.get('/cat', async (req, res) => {
//     const dep = await Subcategory.findAll();
//     if (!dep) {
//         res.status(404).json({ message: "There is not any department" });
//     }
//     res.status(200).json(dep);
// });

// sequelize.sync({ force: false })
//     .then(() => {
//         console.log('Database & tables synced!');
//         if (resetData) {
//             return seedDatabase();
//         }
//     })
//     .then(() => {
//         if (resetData) {
//             console.log('Database seeded!');
//         }
//     })
//     .catch(error => console.log('This error occurred', error));

// app.listen(8000, () => {
//     console.log("Server started...");
// });

