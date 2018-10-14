import React from "react";

export default ({ phone }) => (
  <div>
    <h2>
      {phone.manufacturer} {phone.model}
    </h2>
  </div>
);
