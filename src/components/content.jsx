import React,{useState,useEffect} from "react";
import '../App'
import axios from 'axios'
const Content = () => {
    const[data,setData]= useState([]);


    useEffect(() => {
axios({
    method:"GET",
    url:`https://www.scorebat.com/video-api/v3/feed/?token=Mjc1ODRfMTY2MzY4Mjk3NV8zZWViMTlkZjc2OTRkNzJkOGZhOTZjMDFmNTliN2M1NmU0MjVjN2Jm`
})
.then( (res) => {
console.log(res.data)
setData(res.data.response);
})
.catch((e)=>console.log(e));
    },[]);

    return (
        <div className="content">
            {data.map((item) => (
                <div className="itemDiv" key={item.title} onClick={()=>window.open(item.matchviewUrl)}> 
                    <div className="itemHeading"><h4>{item.title}</h4></div>
                    <div className="itemImage">
                        
                <img src={item.thumbnail} alt="#" />
                        </div>
                </div>
            ))}
        </div>
    );
}
export default Content;