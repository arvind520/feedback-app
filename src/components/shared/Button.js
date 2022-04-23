import React from "react";

const Button = ({ children, type, version, isDisable }) => {
  return (
    <button type={type} disabled={isDisable} className={`btn btn-${version}`}>
      {children}
    </button>
  );
};

export default Button;
