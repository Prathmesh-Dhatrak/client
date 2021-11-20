import axios from "axios";

export const createProduct = async (product, authtoken) => {
  return await axios.post(`${"https://two-meter-square.herokuapp.com/api"}/product`, product, {
    headers: {
      authtoken,
    },
  });
};

export const getProductsByCount = async (count) => {
  return await axios.get(`${"https://two-meter-square.herokuapp.com/api"}/products/${count}`);
};

export const removeProduct = async (slug, authtoken) => {
  return await axios.delete(`${"https://two-meter-square.herokuapp.com/api"}/product/${slug}`, {
    headers: {
      authtoken,
    },
  });
};

export const getProduct = async (slug) => {
  return await axios.get(`${"https://two-meter-square.herokuapp.com/api"}/product/${slug}`);
};

export const updateProduct = async (slug, product, authtoken) => {
  return await axios.put(
    `${"https://two-meter-square.herokuapp.com/api"}/product/${slug}`,
    product,
    {
      headers: {
        authtoken,
      },
    }
  );
};

export const getProducts = async (sort, order, page) => {
  return await axios.post(`${"https://two-meter-square.herokuapp.com/api"}/products`, {
    sort: sort,
    order: order,
    page: page,
  });
};

export const getProductsCount = async () => {
  return await axios.get(`${"https://two-meter-square.herokuapp.com/api"}/products/total`);
};
