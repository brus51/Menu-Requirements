import React from 'react';

const TotalsDisplay = ({ parentCategory }) => {
  const calculateTotals = () => {
    let totalCategories = 1; // 1 for the parent category
    let totalProducts = 0;
    let totalFeatures = 0;
    let totalFeatureChoices = 0;

    parentCategory.childCategories.forEach(childCategory => {
      totalCategories += 1; // Each child category
      childCategory.products.forEach(product => {
        totalProducts += 1;
        product.features.forEach(feature => {
          totalFeatures += 1;
          totalFeatureChoices += parseInt(feature.choices, 10) || 0;
        });
      });
    });

    return { totalCategories, totalProducts, totalFeatures, totalFeatureChoices };
  };

  const { totalCategories, totalProducts, totalFeatures, totalFeatureChoices } = calculateTotals();

  return (
    <div>
      <h3>Totals:</h3>
      <p>Categories: {totalCategories}</p>
      <p>Products: {totalProducts}</p>
      <p>Features: {totalFeatures}</p>
      <p>Feature Choices: {totalFeatureChoices}</p>
    </div>
  );
};

export default TotalsDisplay;
