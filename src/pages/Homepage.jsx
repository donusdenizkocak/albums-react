import React from "react";
//  import Picture from "../components/Picture";
import "../components/picture.css"
 import { SwipperSliderAlbums } from "../components/SwipperSliderAlbums";



const Homepage = () => {
// console.log(data)
  return (
    <div className="container">
      <h1 className="text-center text-success mt-5 mb-4 fs-1 fw-bold">Albums & Swiper Slide</h1>

{/* {data.map((props,id)=>{
    return(
        <Col>
        <Picture  key={id}/>
        </Col>
    )
})} */}

{/* {data.map((props,id)=> <Picture {...props} key={id}/>)} */}

{/* <Picture/> */}
<SwipperSliderAlbums/>
      
    </div>
  );
};

export default Homepage;
