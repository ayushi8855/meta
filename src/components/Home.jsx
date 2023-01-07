import React from 'react'
import { Button } from 'react-bootstrap'
// import class from "./class.json"
export const Home = () => {
    const data = require("./class.json")
    console.log(data)
  return (
    <div>
        <div style={{ height:"300px" ,color:"white",paddingTop:"50px",marginBottom:"50px"}} className="bg-primary">
            <h2 >Title</h2>
            <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
            <h4>Lorem Ipsum is simply dummy </h4>
            <Button variant="light">Read More</Button>
        </div>
        <div>
        <p className="fs-2">Classes</p>
        <p style={{color:"grey",fontSize:"20px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy</p>
        </div>
        <div className='d-flex justify-content-around flex-wrap w-75 m-auto'>
        { data.map((e)=>(
        
        <div style={{width:"300px" ,padding:"40px",margin:"20px",textAlign:"left"}} className="shadow p-3">
            <img src={e.ImageUrl} alt="er" />
            <h4>{e.Name}</h4>
            <div style={{height:"200px",overflow:"hidden",marginBottom:"10px"}}>
            <p>{e.ShortDesc}</p>
           
            </div>
            <Button variant="outline-secondary" >View</Button>
        </div>
    ))}
        </div>
      <div className='d-flex justify-content-between p-4'>
        <p style={{color:"grey"}}>Copyright @ 2021. All Right Reserved</p>
        <p className='text-primary'>Back To Top</p>
      </div>
    </div>
  )
}
