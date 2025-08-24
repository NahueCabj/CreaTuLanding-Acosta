import React from "react";
import Item from "./Item"

const ItemList = ({data}) => {
    return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(18rem,1fr))]">
        {data.map((prod) => (
          <Item key={prod.id} prod={prod} />
        ))}
      </div>
    </div>
  );
};


export default ItemList