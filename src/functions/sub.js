import axios from "axios";

export const getSubs = async () => {
  return await axios.get(`${"https://two-meter-square.herokuapp.com/api"}/subs`);
};

export const getSub = async (slug) => {
  return await axios.get(`${"https://two-meter-square.herokuapp.com/api"}/sub/${slug}`);
};

export const removeSub = async (slug, authtoken) => {
  return await axios.delete(`${"https://two-meter-square.herokuapp.com/api"}/sub/${slug}`, {
    headers: {
      authtoken,
    },
  });
};

export const updateSub = async (slug, sub, authtoken) => {
  return await axios.put(`${"https://two-meter-square.herokuapp.com/api"}/sub/${slug}`, sub, {
    headers: {
      authtoken,
    },
  });
};

export const createSub = async (sub, authtoken) => {
  return await axios.post(`${"https://two-meter-square.herokuapp.com/api"}/sub/`, sub, {
    headers: {
      authtoken,
    },
  });
};
