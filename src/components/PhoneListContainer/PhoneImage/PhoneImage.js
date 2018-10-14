import React from "react";

const makeImageUrl = image => `/images/${image}`;

export default ({ phone }) => (
  <div>
    <img src={makeImageUrl(phone.image)} alt={phone.model} />
  </div>
);
