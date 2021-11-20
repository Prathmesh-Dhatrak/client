import React, { useEffect, useState } from "react";
import { getProduct } from "../functions/product";
import SingleProduct from "../components/cards/SingleProduct";

const Product = ({ match }) => {
  const [product, setProduct] = useState({});

  const { slug } = match.params;

  useEffect(() => {
    const loadSingleProduct = () =>
    getProduct(slug).then((res) => setProduct(res.data));
    loadSingleProduct();
  }, [slug]);



  return (
    <div className="container-fluid">
      <div className="pt-4 row">
        <SingleProduct product={product} />
      </div>

      <div className="row ">
        <div className="pt-5 pb-5 text-center col">
          <hr />
          <h4>Related Products</h4>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Product;
