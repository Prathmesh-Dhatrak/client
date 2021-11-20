import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const LoadingToRedirect = () => {
  const [count, setCount] = useState(5);
  let history = useHistory();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => --count);
    }, 1000);

    count === 0 && history.push("/");

    return () => clearInterval(interval);
  }, [count, history]);

  return (
    <div className="container p-5 text-center">
      {" "}
      Redirecting within {count} seconds
    </div>
  );
};

export default LoadingToRedirect;
