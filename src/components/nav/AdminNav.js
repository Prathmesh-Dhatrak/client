import React from "react";
import { Link } from "react-router-dom";

const AdminNav = () => (
  <nav>
    <ul className="nav flex-column ">
      <li className="nav-item">
        <Link to="/admin/dashboard" className="nav-link">
          Dashboard
        </Link>
        <Link to="/admin/product" className="nav-link">
          Product
        </Link>

        <Link to="/admin/products" className="nav-link">
          Products
        </Link>

        <Link to="/admin/category" className="nav-link">
          Category
        </Link>

        <Link to="/admin/sub" className="nav-link">
          Sub Category
        </Link>

        <Link to="/admin/coupon" className="nav-link">
          Coupon
        </Link>

        <Link to="/user/password" className="nav-link">
          Password
        </Link>
      </li>
    </ul>
  </nav>
);

export default AdminNav;
