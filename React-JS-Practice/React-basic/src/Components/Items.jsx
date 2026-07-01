import React from "react";

const Items = () => {
  const age = 2;
  const Adhar = true;
  const gmail = false;
  return (
    <>
      <div>
        {/* {
            (age>18)?(
            <>
            <h1>you can drive</h1>
            </>
            ):(
             <>
            <h1>you are not eligible to drive</h1>
            </>
            )
        } */}
      </div>
      {Adhar && <h1>you can open bank account</h1>}
      {gmail && <h1>you can make youtube channel</h1>}
    </>
  );
};

export default Items;
