import { Component } from "react";
import {Link} from 'react-router-dom'

class Welcome extends Component{
    render(){
        return(
            <h2 className='welcome'>Welcome , click <Link to='/table/tableData' >here</Link> to see table content</h2>
        )
    }
}

export default Welcome