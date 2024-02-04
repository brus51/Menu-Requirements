import React, { useState } from 'react';
import CategoryInput from './componets/CategoryInput';
import ChildCategoryInput from './componets/ChildCategoryInput';
import FeatureInput from './componets/FeatureInput';
import ProductInput from './componets/ProductInput';


function App() {
  const [parentCategory, setParentCategory] = useState({
    name: '',
    childCategories: [{ name: '', products: [{ name: '', features: [{ type: '', choices: 0 }] }] }]
  });
  const [standaloneCategories, setStandaloneCategories] = useState([{ name: '', products: [{ name: '', features: [{ type: '', choices: 0 }] }] }]);

  // Handlers for parent category changes
  const handleParentCategoryChange = (e) => {
    setParentCategory({ ...parentCategory, name: e.target.value });
  };

  // Handlers for child categories, products, and features of the parent category
  const handleChildCategoryChange = (e, childIndex) => {
    const updatedChildren = parentCategory.childCategories.map((child, index) => {
      if (index === childIndex) {
        return { ...child, name: e.target.value };
      }
      return child;
    });
    setParentCategory({ ...parentCategory, childCategories: updatedChildren });
  };

  const handleProductChange = (e, childIndex, productIndex) => {
    const updatedChildren = parentCategory.childCategories.map((child, cIndex) => {
      if (cIndex === childIndex) {
        const updatedProducts = child.products.map((product, pIndex) => {
          if (pIndex === productIndex) {
            return { ...product, name: e.target.value };
          }
          return product;
        });
        return { ...child, products: updatedProducts };
      }
      return child;
    });
    setParentCategory({ ...parentCategory, childCategories: updatedChildren });
  };

  const handleFeatureChange = (e, childIndex, productIndex, featureIndex, key) => {
    const updatedChildren = parentCategory.childCategories.map((child, cIndex) => {
      if (cIndex === childIndex) {
        const updatedProducts = child.products.map((product, pIndex) => {
          if (pIndex === productIndex) {
            const updatedFeatures = product.features.map((feature, fIndex) => {
              if (fIndex === featureIndex) {
                return { ...feature, [key]: e.target.value };
              }
              return feature;
            });
            return { ...product, features: updatedFeatures };
          }
          return product;
        });
        return { ...child, products: updatedProducts };
      }
      return child;
    });
    setParentCategory({ ...parentCategory, childCategories: updatedChildren });
  };

  // Handlers for standalone categories
  const handleStandaloneCategoryChange = (e, index) => {
    const updatedStandaloneCategories = standaloneCategories.map((category, i) => {
      if (i === index) {
        return { ...category, name: e.target.value };
      }
      return category;
    });
    setStandaloneCategories(updatedStandaloneCategories);
  };

  const handleAddChildCategory = () => {
    setParentCategory({
      ...parentCategory,
      childCategories: [...parentCategory.childCategories, { name: '', products: [{ name: '', features: [{ type: '', choices: 0 }] }] }]
    });
  };

  // Handler to add a new standalone category
  const handleAddStandaloneCategory = () => {
    setStandaloneCategories([...standaloneCategories, { name: '', products: [{ name: '', features: [{ type: '', choices: 0 }] }] }]);
  };

  return (
    <div className="App">
      <h1>Menu Requirements Form</h1>
      <form>
        {/* Parent Category Input */}
        <CategoryInput
          category={parentCategory}
          handleCategoryChange={handleParentCategoryChange}
          isParent={true}
        />

        {/* Child Categories Inputs */}
        {parentCategory.childCategories.map((childCategory, childIndex) => (
          <CategoryInput
            key={childIndex}
            category={childCategory}
            index={childIndex}
            handleCategoryChange={(e) => handleChildCategoryChange(e, childIndex)}
            isParent={false}
          />
        ))}
        <button type="button" onClick={handleAddChildCategory}>Add Child Category</button>

        {/* Standalone Categories Inputs */}
        {standaloneCategories.map((category, index) => (
          <CategoryInput
            key={index}
            category={category}
            index={index}
            handleCategoryChange={(e) => handleStandaloneCategoryChange(e, index)}
            isParent={false}
          />
        ))}
        <button type="button" onClick={handleAddStandaloneCategory}>Add Standalone Category</button>

        {/* Additional form elements... */}
      </form>
    </div>
  );
}

export default App;
