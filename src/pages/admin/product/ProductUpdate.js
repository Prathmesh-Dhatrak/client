import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/nav/AdminNav";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { getProduct, updateProduct } from "../../../functions/product";
import { getCategories, getCategorySubs } from "../../../functions/category";
import FileUpload from "../../../components/nav/forms/FileUpload";
import { LoadingOutlined } from "@ant-design/icons";
import ProductUpdateForm from "../../../components/nav/forms/ProductUpdateForm";

const initialState = {
  title: "",
  description: "",
  price: "",
  category: "",
  subs: [],
  shipping: "",
  quantity: "",
  images: [],
  colors: ["Black", "Brown", "Silver", "White", "Blue"],
  brands: ["Apple", "Samsung", "Microsoft", "Lenovo", "ASUS"],
  color: "",
  brand: "",
};

const ProductUpdate = ({ match, history }) => {
  // states

  const [values, setValues] = useState(initialState);
  const [subOptions, setSubOptions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [arrayOfSubs, setArrayOfSubIds] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(false);

  // redux
  const { user } = useSelector((state) => ({ ...state }));

  const { slug } = match.params;

  useEffect(() => {
    loadProduct();
    loadCategories();
  }, []);

  const loadProduct = () => {
    getProduct(slug).then((p) => {
      // 1 .  load single product
      setValues({ ...values, ...p.data });

      // 2 .  load single product sub-category

      getCategorySubs(p.data.category._id).then((res) => {
        setSubOptions(res.data); // on first load default sub categories
      });

      // 3  . prepare array of sub id's  to show as default sub values in ant design select

      let arr = [];

      p.data.subs.map((s) => {
        arr.push(s._id);
      });

      setArrayOfSubIds((prev) => arr); // required for ant design select
    });
  };

  const loadCategories = () =>
    getCategories().then((c) => {
      setCategories(c.data);
    });

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    values.subs = arrayOfSubs;
    values.category = selectedCategory ? selectedCategory : values.category;

    updateProduct(slug, values, user.token)
      .then((res) => {
        setLoading(false);
        toast.success(`${res.data.title} is updated`);
        history.push("/admin/products");
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        toast.error(err.response.data.err);
      });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log(e.target.name, " ----- ", e.target.value);
  };

  const handleCategoryChange = (e) => {
    e.preventDefault();
    console.log("CLICKED CATEGORY", e.target.value);
    setValues({ ...values, subs: [] });

    setSelectedCategory(e.target.value);

    getCategorySubs(e.target.value).then((res) => {
      console.log("SUB OPTIONS ON CATEGORY CLICK", res);
      setSubOptions(res.data);
    });

    // if user click back to the original category then show it's default sub-categories
    if (values.category._id === e.target.value) {
      loadProduct();
    }

    // clear old sub-categories
    setArrayOfSubIds([]);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>

        <div className="col-md-10">
          {loading ? (
            <LoadingOutlined className="text-danger h3" />
          ) : (
            <h4>Product Update</h4>
          )}

          <div className="p-3">
            <FileUpload
              values={values}
              setValues={setValues}
              setLoading={setLoading}
            />
          </div>

          <ProductUpdateForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            setValues={setValues}
            values={values}
            handleCategoryChange={handleCategoryChange}
            categories={categories}
            subOptions={subOptions}
            arrayOfSubs={arrayOfSubs}
            setArrayOfSubIds={setArrayOfSubIds}
            selectedCategory={selectedCategory}
          />
          <hr />
        </div>
      </div>
    </div>
  );
};

export default ProductUpdate;
