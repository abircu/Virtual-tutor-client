import React from "react";

const Container = ({ children }) => {
  return (
    <div className="w-full sm:max-w-6xl sm:px-0 px-4 mx-auto">{children}</div>
  );
};

export default Container;
