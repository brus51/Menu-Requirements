import React from 'react';
import ChildCategoryInput from './ChildCategoryInput';
import ProductInput from './ProductInput';

const CategoryInput = ({ category, index, handleCategoryChange, isParent, handleProductChange, handleFeatureChange }) => {
    return (
        <div>
            <label>
                {isParent ? 'Parent Category Name:' : 'Standalone Category Name:'}
                <input
                    type="text"
                    value={category.name}
                    onChange={(e) => handleCategoryChange(e, index)}
                />
            </label>
            {isParent ? (
                category.childCategories.map((childCategory, childIndex) => (
                    <ChildCategoryInput
                        key={childIndex}
                        childCategory={childCategory}
                        childIndex={childIndex}
                        handleChildCategoryChange={handleCategoryChange}
                        handleProductChange={handleProductChange}
                        handleFeatureChange={handleFeatureChange}
                    />
                ))
            ) : (
                category.products.map((product, productIndex) => (
                    <ProductInput
                        key={productIndex}
                        product={product}
                        productIndex={productIndex}
                        childIndex={index} // For standalone categories, the 'childIndex' is effectively the category's index
                        handleProductChange={handleProductChange}
                        handleFeatureChange={handleFeatureChange}
                    />
                ))
            )}
        </div>
    );
};

export default CategoryInput;
