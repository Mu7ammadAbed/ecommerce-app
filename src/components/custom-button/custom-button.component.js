import React from "react";

import "./custom-button.styles.scss";

const CustomButtom = ({ children, ...otherButtonProps }) => {
  return (
    <button className="custom-button" {...otherButtonProps}>
      {children}
    </button>
  );
};

export default CustomButtom;
