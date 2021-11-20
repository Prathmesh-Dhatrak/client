import React from "react";
import { Card } from "antd";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import laptop from "../../images/laptop.png";
import { Link } from "react-router-dom";

const { Meta } = Card;

const ProductCart = ({ product }) => {
  // destrucure
  const { images, title, description, slug } = product;
  return (
    <Card
      cover={
        <img
          src={images && images.length ? images[0].url : laptop}
          style={{ height: "150px", objectFit: "cover" }}
          className="p-1"
          alt=""
        />
      }
      actions={[
        <Link to={`/product/${slug}`}>
          <EyeOutlined className="text-warning" /> <br /> View Product
        </Link>,
        <>
          {" "}
          <ShoppingCartOutlined className="text-danger" /> <br />
          Add to Cart
        </>,
      ]}
    >
      {" "}
      <Meta
        title={title}
        description={`${description && description.substring(0, 20)}...`}
      />
    </Card>
  );
};

export default ProductCart;
