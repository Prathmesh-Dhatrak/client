import axios from "axios";

export const createOrUpdateUser = async (authtoken) => {
  return await axios.post(
    `${"https://two-meter-square.herokuapp.com/api"}/create-or-update-user`,
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
};

export const currentUser = async (authtoken) => {
  return await axios.post(
    `${"https://two-meter-square.herokuapp.com/api"}/current-user`,
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
};

export const currentAdmin = async (authtoken) => {
  return await axios.post(
    `${"https://two-meter-square.herokuapp.com/api"}/current-admin`,
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
};
