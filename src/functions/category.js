import axios from "axios";

export const getCategories = async () => {
  return await axios.get(`${"https://two-meter-square.herokuapp.com/api"}/categories`);
};

export const getCategory = async (slug) => {
  return await axios.get(`${"https://two-meter-square.herokuapp.com/api"}/category/${slug}`);
};

export const removeCategory = async (slug, authtoken) => {
  return await axios.delete(`${"https://two-meter-square.herokuapp.com/api"}/category/${slug}`, {
    headers: {
      authtoken,
    },
  });
};

export const updateCategory = async (slug, category, authtoken) => {
  return await axios.put(
    `${"https://two-meter-square.herokuapp.com/api"}/category/${slug}`,
    category,
    {
      headers: {
        authtoken,
      },
    }
  );
};

export const createCategory = async (category, authtoken) => {
  return await axios.post(`${"https://two-meter-square.herokuapp.com/api"}/category/`, category, {
    headers: {
      authtoken,
    },
  });
};

export const getCategorySubs = async (_id) => {
  return await axios.get(`${"https://two-meter-square.herokuapp.com/api"}/category/subs/${_id}`);
};
