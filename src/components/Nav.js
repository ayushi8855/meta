import React from 'react'
import { Button } from 'react-bootstrap'

const Nav = () => {
  return (
    <div className="d-flex justify-content-between fs-2" style={{paddingTop:"10px",paddingBottom:"10px"}}>
        <p>Title</p>
        <div className="d-flex justify-content-between fs-2" style={{width:"50%"}}>
            <p >Home</p>
            <p>About</p>
            <p>Blog</p>
            <p>Contact </p>
            <Button variant="outline-primary">Button</Button>
        </div>
      
    </div>
  )
}

export default Nav