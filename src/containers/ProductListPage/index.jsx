import React from "react";
import Layout from "../../components/Layout";
import getParams from "../../utils/getParams";
import ProductPage from "./ProductPage/ProductPage";
import ProductStore from "./ProductStore";
import './style.css'

const ProductListPage = (props) => {
  const renderProduct = () => {
    const params = getParams(window.location.search);
    console.log(params.type);
    let content = null;
    switch (params.type) {
      case "store":
        content = <ProductStore {...props} />;
        break;
      case "page":
        content = <ProductPage {...props} />;
        console.log(content);
        break;
      default:
        content = null;
    }
    return content;
  };

  return <Layout>{renderProduct()}</Layout>;
};

export default ProductListPage;
