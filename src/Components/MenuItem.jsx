import React from "react";

const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex gap-3  ">
      <img
        className="w-16 h-16 rounded-br-full rounded-tr-full rounded-bl-full"
        src={image}
        alt=""
      />
      <div>
        <h1 className="uppercase">{name}--------</h1>
        <p>{recipe}</p>
      </div>
      <p className="text">{price}</p>
    </div>
  );
};

export default MenuItem;
