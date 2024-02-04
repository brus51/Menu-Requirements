import React from 'react';
import FeatureInput from './FeatureInput';

const ProductInput = ({ product, handleProductChange, productIndex, childIndex, handleFeatureChange }) => {
    return (
        <div>
            <label>
                Product Name:
                <input
                    type="text"
                    value={product.name}
                    onChange={(e) => handleProductChange(e, childIndex, productIndex)}
                />
            </label>
            {product.features.map((feature, featureIndex) => (
                <FeatureInput
                    key={featureIndex}
                    feature={feature}
                    handleFeatureChange={(e, key) => handleFeatureChange(e, childIndex, productIndex, featureIndex, key)}
                />
            ))}
            {/* Logic to add more features */}
        </div>
    );
};

export default ProductInput;
