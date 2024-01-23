import React from 'react'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom'

const Base = ({title,discription,children}) =>{
  const history = useHistory();
  return (
    <div className="App">
    <div className="App-container">
    <div className="lay-out">
      <div className="head">
        <Button><i class="fa fa-long-arrow-left fa-1x" aria-hidden="true"></i>Overview Page</Button>
        <div>
        <Button className="g"><i class="fa fa-github-square fa-1x" aria-hidden="true"></i></Button>
        <Button><i class="fa fa-download fa-1x" aria-hidden="true"></i>Free Download</Button>
        </div>
      </div>
      <hr></hr>
      <div className="lay-container">
        <div className="nav">
          <div><Button className="sb" onClick={()=>history.push("/dashboard")}><i class="fa fa-smile-o fa-3x " aria-hidden="true"></i>SB-ADMIN<sup>2</sup></Button></div>
          <hr></hr>
          <div><Button className="sb" onClick={()=>history.push("/dashboard")}><i class="fa fa-tachometer fa-1x" aria-hidden="true"></i>Dashbord</Button></div>
          <hr></hr>
          <div><Button className="sb" onClick={()=>history.push("/buttons")}><i class="fa fa-cog fa-1x" aria-hidden="true"></i>Buttons</Button></div>
          <hr></hr>
          <div><Button className="sb" onClick={()=>history.push("/utilites")}><i class="fa fa-wrench fa-1x" aria-hidden="true"></i>Utilities</Button></div>
          <hr></hr>
          <div><Button className="sb" onClick={()=>history.push("/signup")}> <i class="fa fa-folder fa-1x" aria-hidden="true"></i>Signup</Button></div>
          <hr></hr>
          <div><Button className="sb" onClick={()=>history.push("/login")}> <i class="fa fa-folder fa-1x" aria-hidden="true"></i>Login</Button></div>
          <hr></hr>
                    
        </div>
        <div className="dis">
          <div className="fo-item">
            <div className="search">
              <input type="text" placeholder="Search for" />
              <button className="b"><i class="fa fa-search fa-1x"   aria-hidden="true"></i></button>
            </div>
            <div className="icon">
              <div><Button><i class="fa fa-envelope fa-1x" aria-hidden="true"></i></Button></div>
              <div><Button><i class="fa fa-bell-o fa-1x" aria-hidden="true"></i></Button></div>
              <div><Button><i class="fa fa-sign-in fa-1x" aria-hidden="true"></i></Button></div>
            </div>
          </div>
          <div className="top1">
            <h1 className="title">{title}</h1>
            <Button> <i class="fa fa-download fa-1x" aria-hidden="true"></i>Generate Report</Button>
          </div><div>
           <h3>{discription}</h3> 
          </div>
          <div>
            {children}
          </div>
          
          
        </div>
        

      </div>
      
      <div>
        <p className="foot"> Copyright <i class="fa fa-copyright fa-1x" aria-hidden="true"></i> your website 2023</p>
      </div>

    </div>
    </div>
    </div>
  )
}

export default Base