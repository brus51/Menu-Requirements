import React from 'react';
import ProductInput from './ProductInput';

const ChildCategoryInput = ({ childCategory, handleChildCategoryChange, childIndex, handleProductChange, handleFeatureChange }) => {
    return (
        <div>
            <label>
                Child Category Name:
                <input
                    type="text"
                    value={childCategory.name}
                    onChange={(e) => handleChildCategoryChange(e, childIndex)}
                />
            </label>
            {childCategory.products.map((product, productIndex) => (
                <ProductInput
                    key={productIndex}
                    product={product}
                    productIndex={productIndex}
                    childIndex={childIndex}
                    handleProductChange={handleProductChange}
                    handleFeatureChange={handleFeatureChange}
                />
            ))}
            {/* Logic to add more products to the child category */}
        </div>
    );
};

export default ChildCategoryInput;
