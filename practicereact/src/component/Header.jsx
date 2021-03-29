import { Component } from "react";
import './component.css';

class Header extends Component{
    render(){
        return(
            <ul>
                <li><a className='active' href="https://www.google.com/webhp?authuser=1">Google</a></li>
                <li><a href="https://www.facebook.com/">Facebook</a></li>
                <li><a href="https://twitter.com/?lang=en">Twitter</a></li>
                <li><a href="https://www.instagram.com/">Instagram</a></li>
                
            </ul>
        )
    }
}

export default Header;