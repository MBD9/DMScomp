import Department from '../model/Department.model.js';
import sequelize from '../DB/dbConfig.js';


const departmentsC = [
    { departmentName: 'Account', departmentCode: 'ACC' },
    { departmentName: 'Sales', departmentCode: 'SAL' },
    { departmentName: 'Marketing', departmentCode: 'MAR' },
    { departmentName: 'Logistic', departmentCode: 'LOG' },
    { departmentName: 'Quality', departmentCode: 'QUA' },
    { departmentName: 'Other', departmentCode: 'OTH' },
    // Add other departments as needed
];

async function seedDepartments() {
    try {
        // Check if there are existing records in the Department table
        
        const count = await Department.count();

        if (count === 0) {
            // If no records, seed the data
            for (const departmentData of departmentsC) {
                await Department.create(departmentData);
            }
            console.log('Departments seeded!');
        } else {
            console.log('Departments table already populated. Skipping seed.');
        }
    } catch (error) {
        console.log('Error seeding departments:', error);
    }
}

seedDepartments().catch(error => console.log('Error seeding departments:', error));


import Category from '../model/Category.model.js';
import Subcategory from '../model/Subcategory.model.js';

const departments = [
    { departmentName: 'Account', departmentCode: 'ACC' },
    { departmentName: 'Sales', departmentCode: 'SAL' },
    { departmentName: 'Marketing', departmentCode: 'MAR' },
    { departmentName: 'Logistic', departmentCode: 'LOG' },
    { departmentName: 'Quality', departmentCode: 'QUA' },
    { departmentName: 'Other', departmentCode: 'OTH' },
];

const categories = [
    { name: 'Account', subcategories: ['credit not issue', 'debit not issue', 'payment update delay', 'ed reverse'], departmentName: 'Account' },
    { name: 'Availability', subcategories: ['Availability'], departmentName: 'Sales' },
    { name: 'Branding', subcategories: ['POP Material late Recived', 'Quality of flex', 'Quality of painting'], departmentName: 'Marketing' },
    { name: 'Breaking & Damage', subcategories: ['Breaking & Damage'], departmentName: 'Logistic' },
    { name: 'Claim', subcategories: ['additional support', 'credit note', 'claim'], departmentName: 'Logistic' },
    { name: 'Logistic', subcategories: ['Dispatch Delay', 'Bill not recived', 'Documents Delay'], departmentName: 'Logistic' },
    { name: 'Packaging', subcategories: ['Packaging'], departmentName: 'Logistic' },
    { name: 'Quality', subcategories: ['Quality'], departmentName: 'Quality' },
    { name: 'Short - Supply', subcategories: ['Short - Supply'], departmentName: 'Logistic' },
    { name: 'Other', subcategories: ['Other'], departmentName: 'Other' },
];

async function seedDatabase() {
    try {
        const catCount = await Category.count()
        const subCount = await Subcategory.count();
        if (catCount == 0 || subCount == 0) {
            for (const [index, categoryData] of categories.entries()) {
                const category = await Category.create({
                    name: categoryData.name,
                    departmentName: categoryData.departmentName,
                    Ccode: `C${index + 1}`
                });

                for (const [subIndex, subcategoryName] of categoryData.subcategories.entries()) {
                    await Subcategory.create({
                        name: subcategoryName,
                        categoryId: category.id,
                        Scode: `S${subIndex + 1}`
                    });
                }
            }

            console.log('Database seeded!');
        }
        else {
            console.log('Database Already seeded!');
        }


    } catch (error) {
        console.log('Error seeding database:', error);
    }
}

seedDatabase().catch(error => console.log('Error seeding database:', error));
export default seedDatabase;












// import Category from '../model/Category.model.js';
// import Subcategory from '../model/Subcategory.model.js';

// const categories = [
//     { name: 'Account', subcategories: ['credit not issue', 'debit not issue', 'payment update delay', 'ed reverse'], departmentName: 'Account' },
//     { name: 'Availability', subcategories: ['Availability'], departmentName: 'Sales' },
//     { name: 'Branding', subcategories: ['POP Material late Recived', 'Quality of flex', 'Quality of painting'], departmentName: 'Marketing' },
//     { name: 'Breaking & Damage', subcategories: ['Breaking & Damage'], departmentName: 'Logistic' },
//     { name: 'Claim', subcategories: ['additional support', 'credit note', 'claim'], departmentName: 'Logistic' },
//     { name: 'Logistic', subcategories: ['Dispatch Delay', 'Bill not recived', 'Documents Delay'], departmentName: 'Logistic' },
//     { name: 'Packaging', subcategories: ['Packaging'], departmentName: 'Logistic' },
//     { name: 'Quality', subcategories: ['Quality'], departmentName: 'Quality' },
//     { name: 'Short - Supply', subcategories: ['Short - Supply'], departmentName: 'Logistic' },
//     { name: 'Other', subcategories: ['Other'], departmentName: 'Other' },


// ];

// async function seedDatabase() {
//     try {
//         // First, clear existing data
//         await Subcategory.destroy({ where: {} });
//         await Category.destroy({ where: {} });

//         // Seed categories and subcategories
//         for (const [index, categoryData] of categories.entries()) {
//             const category = await Category.create({
//                 name: categoryData.name,
//                 departmentName: categoryData.departmentName,
//                 Ccode: `C${index + 1}`  // Assign Ccode like C1, C2, etc.
//             });

//             for (const [subIndex, subcategoryName] of categoryData.subcategories.entries()) {
//                 await Subcategory.create({
//                     name: subcategoryName,
//                     categoryId: category.id,
//                     Scode: `S${subIndex + 1}`  // Assign Scode like S1, S2, etc.
//                 });
//             }
//         }
//         console.log('Database seeded!');
//     } catch (error) {
//         console.log('Error seeding database:', error);
//     }
// }

// export default seedDatabase;

