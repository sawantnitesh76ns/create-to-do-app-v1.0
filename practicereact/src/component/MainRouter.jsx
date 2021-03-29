import { Component } from "react";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import WelcomePage from './Welcome'
import Table from "./Table";
import update from './update'

class MainRoute extends Component{
    render(){
        return(
            <div>
                <Router className='route'>
                    <>
                        <Header/>
                        <Switch>
                            <Route path='/' exact component={WelcomePage}/>
                            <Route path='/table/tableData'  component={Table}/>
                            <Route path='/update/:id'  component={update}/>
                            
                        </Switch>
                        <Footer/>
                    </>
                </Router>

            </div>
            
            
        )
    }
}


export default MainRoute;