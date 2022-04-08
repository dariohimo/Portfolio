import React from 'react';
import Loader from 'react-loaders';
import {RViewerTrigger, RViewer} from 'react-viewerjs';

function Work() {
  
    let imageWorks = [
        
        require("../../assets/images/logo1.png"),
        require("../../assets/images/logo2.png"),
        require("../../assets/images/logo3.png")
       


    ];

 return (
  <>
    <RViewer imageUrls={imageWorks}>

      <div style={{marginTop: "80px", marginLeft: "150px", display: "flex"}}>

       {imageWorks.map((image, index)=>{
          return(
              
            <RViewerTrigger index={index} >

               <img src={image}  style={{ width: "150px", height: "150px", marginLeft: "5px", border: "2px solid white" }} alt="" />
            
            </RViewerTrigger>
          
          )
      
      })}

      </div>
      
      </RViewer>
      
      <Loader type="pacman" />

      </>
    
 )

 

}





export default Work;

