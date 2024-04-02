import React from "react";
import { Helmet } from "react-helmet-async";

const Halmet = ({ pagename }) => {
  return (
    <div>
      <Helmet>
        <title>Virtual Tutor । {pagename}</title>
      </Helmet>
    </div>
  );
};

export default Halmet;
