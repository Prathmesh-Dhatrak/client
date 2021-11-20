import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { createOrUpdateUser } from "../../functions/auth";

const RegisterComplete = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const { user } = useSelector((state) => ({ ...state }));

  let dispatch = useDispatch();

  useEffect(() => {
    setEmail(window.localStorage.getItem("emailForRegisteration"));
  }, [history]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // validation

    if (!email || !password) {
      toast.error("Email and Password is required");
      return;
    }

    if (password.length < 6) {
      toast.error("Password Cannot be less than 6 characters");
      return;
    }

    try {
      const result = await auth.signInWithEmailLink(
        email,
        window.location.href
      );

      if (result.user.emailVerified) {
        // remove user email from local storage because it is of no use

        window.localStorage.removeItem("emailForRegisteration");

        // get user id token

        let user = auth.currentUser;

        await user.updatePassword(password);
        const idTokenResult = await user.getIdTokenResult();
        // redux store

        createOrUpdateUser(idTokenResult.token)
          .then((res) => {
            dispatch({
              type: "LOGGED_IN_USER",
              payload: {
                name: res.data.name,
                email: res.data.email,
                token: idTokenResult.token,
                role: res.data.role,
                _id: res.data._id,
              },
            });
          })
          .catch((err) => console.log(err));

        // redirect

        history.push("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const completeRegisterationForm = () => (
    <form onSubmit={handleSubmit}>
      <input type="email" className="form-control" value={email} disabled />

      <input
        type="password"
        className="form-control"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoFocus
        placeholder="Password"
      />

      <br />
      <button type="submit" className="btn btn-raised">
        Complete Registeration
      </button>
    </form>
  );

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Register Complete</h4>
          {completeRegisterationForm()}
        </div>
      </div>
    </div>
  );
};

export default RegisterComplete;
