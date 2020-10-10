import React from "react";

import "./custom-button.styles.scss";

const CustomButtom = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherButtonProps
}) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""} ${
        isGoogleSignIn ? "google-sign-in" : ""
      } custom-button`}
      {...otherButtonProps}
    >
      {children}
    </button>
  );
};

export default CustomButtom;
