import React, { useState, useEffect } from "react";
import { getProducts, getProductsCount } from "../../functions/product";
import ProductCart from "../cards/ProductCart";
import LoadingCard from "../cards/LoadingCard";
import { Pagination } from "antd";

const NewArrivals = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [productsCount, setProductsCount] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadAllProducts = () => {
      setLoading(true);
      // sort order limit
      getProducts("createdAt", "desc", page).then((res) => {
        setLoading(false);
        setProducts(res.data);
      });
    };
    loadAllProducts();
  }, [page]);

  useEffect(() => {
    getProductsCount().then((res) => setProductsCount(res.data));
  }, []);

  

  return (
    <>
      <div className="container">
        {loading ? (
          <LoadingCard count={4} />
        ) : (
          <div className="row">
            {products.map((product) => (
              <div key={product._id} className="col-md-4">
                <ProductCart product={product} />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="row">
        <nav className="p-3 pt-5 text-center col-md-4 offset-md-4">
          <Pagination
            current={page}
            total={(productsCount / 3) * 10}
            onChange={(value) => setPage(value)}
          />
        </nav>
      </div>
    </>
  );
};

export default NewArrivals;
