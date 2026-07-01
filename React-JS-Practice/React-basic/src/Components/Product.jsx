import React from "react";
import './Product.css'

const Product = ({ name, price, color, data = {} }) => {
  //console.log(data);
  const myStyle={
    backgroundColor:'pink',
    color:'black',
    padding:'10px',
    margin:'10px'
  }
  return (
    //Inline styling

    <div
    //   style={{
    //     backgroundColor: "blue",
    //     padding: "10px",
    //     margin: "10px",
    //     border: "1px solid yellow",
    //     borderRadius:"10px",
    //   }}
     //style={myStyle}
    className="con"
    >
      <h1>Brand-{name}</h1>
      <h3>price-{price}</h3>
      <h3>color-{color}</h3>
      {/* {data.ram && <>
<p>ram={data.ram}</p>
<p>rom={data.rom}</p>
<p>chip={data.chip}</p></>
} */}
    </div>
  );
};

export default Product;

// import React from 'react'

// const Product = (props) => {
//   return (
//     <div>
//         <h1>Brand-{props.name}</h1>
//         <h3>Price-{props.price}</h3>
//         <h3>color-{props.color}</h3>
//     </div>
//   )
// }

// export default Product
