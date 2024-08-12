// Assuming you are using React
import { useState, useEffect } from 'react';
import axios from 'axios';

const CategorySelect = () => {
    const [categories, setCategories] = useState([]);
    const [subcategories, setSubcategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await axios.get('http://localhost:8000/dealer/categories');
            setCategories(response.data);
            console.log(response.data);
        };
        fetchCategories();
    }, []);

    const handleCategoryChange = async (e) => {
        const categoryId = e.target.value;
        alert(categoryId)
        setSelectedCategory(categoryId);
        const response = await axios.get(`http://localhost:8000/dealer/categories/${categoryId}/subcategories`);
        setSubcategories(response.data);
        console.log(response.data);
    };
    return (
        <div>
            <select className='border rounded p-2 w-full' onChange={handleCategoryChange}>
                <option value="">Select Category</option>
                {categories.map(category => (
                    <option key={category.id} value={category.id}>
                        {category.name}
                    </option>
                ))}
            </select>

            {selectedCategory && (
                <select>
                    <option value="">Select Subcategory</option>
                    {subcategories.map(subcategory => (
                        <option key={subcategory.id} value={subcategory.id}>
                            {subcategory.name}
                        </option>
                    ))}
                </select>
            )}
        </div>
    );
};

export default CategorySelect;
