import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import gData from "../../data/gallery/gallery.js";
import { toast } from "react-toastify";
const Gal = () => {
  const [data,setData] = useState({img:'', i:0});
  const viewImage=(img,i)=>{
    setData({img,i})
  }
  const imgAction=(action)=>{
    let i = data.i;
   
    if(action === 'next-img'){
      
       try {
        let imgs = (gData[i+1].image===null )?'':gData[i+1].image;
        setData({img:imgs,i:i+1})
       } catch (error) {
       toast.info("There is no more images !");
       }
    
    }
    if(action === 'prev-img'){
      try {
        let imgs = (gData[i-1].image===null )?'':gData[i-1].image;
        setData({img:imgs,i:i-1})
       } catch (error) {
       toast.info("There is no more images !");
       }
    }
     if(!action){
      setData({img:'', i:0})
    }
    console.log(i);
  }
  return (
    <Layout title={"Gallery-SOMES"} >
       
      {
        data.img && 
            <div style={{
              width:"100%",
              height:"60vh",
              background:"black",
              position:"fixed",
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              overflow:"hidden"


            }} >
               
                <img src={data.img} style={{
                  width:"auto",
                  maxWidth:"90%",
                  maxHeight:"90%"
                }} alt="loading .." />
               <button type="button" onClick={()=>imgAction() } className="btn-close btn-close-white btn-primary" style={{position:"absolute",top:"5%", color:"green"}} aria-label="Close">
                </button>
                 <button onClick={()=>imgAction("prev-img")} className="carousel-control-prev" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  </button>
                  <button onClick={()=>imgAction("next-img")} className="carousel-control-next" data-slide="next">
                 <span className="carousel-control-next-icon" aria-hidden="true"></span>
                 </button>
            </div>
      }
       <div className="gallery-title">
        <h1 className="text-center shadow-sm my-5">Mech-Camp 2.0 Gallery</h1>
      </div>
      <div style={{padding:"10px"}} >
    <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry gutter="10px">
                    {gData.map((image, i) => (
                        <img
                            key={i}
                            src={image.image}
                            style={{width: "100%", display: "block", cursor:"pointer"}}
                            alt=""
                            onClick={()=>viewImage(image.image,i)}
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
            </div>
    </Layout>
  );
};

export default Gal;
