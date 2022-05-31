import React,{Component} from "react"
import "./NavBar.css" 
import "./Button.css"
import {Button} from "./Button"



class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
     items : [
        {
          title:"Home",
          url:"#",
          cName:"nav-links"
        },
    
        {
            title:"Services",
            url:"#",
            cName:"nav-links"
          },
          {
            title:"Products",
            url:"#",
            cName:"nav-links"
          },
          {
            title:"Contact-Us",
            url:"#",
            cName:"nav-links"
          },
          {
            title:"Sign up",
            url:"#",
            cName:"nav-links"
          },
    
    ]}
  }
    render(){
        return(
            <nav className="navbar-items">
            <div className="nav-bar">React</div>
            <div className="menu-icon">
            
            </div>
            <ul className="navbar-menus">
            {this.state.items.map((value,index)=>
            {
                return (
                    <li key ={index}>
                    <a className ={value.cName} href={value.url}>{value.title}</a>
                    </li>)
                      })}
                      </ul>
          
            </nav>
        )



    }
      
    
}

export default NavBar