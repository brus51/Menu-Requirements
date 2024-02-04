import React from 'react';

const FeatureInput = ({ feature, handleFeatureChange, featureIndex, childIndex, productIndex }) => {
    return (
        <div>
            <label>
                Feature Type:
                <select
                    value={feature.type}
                    onChange={(e) => handleFeatureChange(e, childIndex, productIndex, featureIndex, 'type')}
                >
                    <option value="">Select Feature</option>
                    <option value="checkbox">Checkbox Feature</option>
                    <option value="quantity">Quantity Feature</option>
                    <option value="other">Other Feature</option>
                </select>
            </label>
            <label>
                Feature Choices:
                <input
                    type="number"
                    value={feature.choices}
                    onChange={(e) => handleFeatureChange(e, childIndex, productIndex, featureIndex, 'choices')}
                />
            </label>
        </div>
    );
};

export default FeatureInput;
