import { Component } from "react";
import DbService from '../api/callBackend'
import './component.css';

class Table extends Component{
    constructor(props){
        super(props)
        this.state={
            data:[],
            message:null
        }
        this.refreshData=this.refreshData.bind(this)
        this.addDataCliked=this.addDataCliked.bind(this)
        this.deleteDataClicked=this.deleteDataClicked.bind(this)
        this.updateDataCliked=this.updateDataCliked.bind(this)

        
    }

    componentDidMount(){
        this.refreshData()
    }

    refreshData(){
        DbService.retrieveAllData()
        .then(
            response=>{
                this.setState({
                    data:response.data
                })
            }
        )
    }

    updateDataCliked(id){
        console.log("Update Clicked")
        this.props.history.push(`/update/${id}`)
    }

    deleteDataClicked(id){
        DbService.deleteDataById(id)
        .then(response=>{
            this.setState({message:`Data get delete of ${id}`})
            this.refreshData()

        }
        )
    }

    addDataCliked(){
        this.props.history.push(`/update/-1`)
    }

    
    render(){
        return(
            <div>
                <div>
                    <h1 className='text-center'>Table Content</h1>
                </div>
                {this.state.message && <div className="successMessage">{this.state.message}</div>}

                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Duration</th>
                                <th>Profile</th>
                                <th>Stipend</th>
                                <th>Work From Home</th>
                                <th></th>
                                <th></th>
                            </tr>

                        </thead>

                        <tbody>
                            {
                                this.state.data.map(
                                    data=>
                                    <tr key={data.id}>
                                        <td>{data.id}</td>
                                        <td>{data.name}</td>
                                        <td>{data.duration}</td>
                                        <td>{data.profile}</td>
                                        <td>{data.stipend}</td>
                                        <td>{String(data.workFromHome)}</td>
                                        <td><button className="updateButton" onClick={()=> this.updateDataCliked(data.id) }>Update</button></td>
                                        <td><button className="deleteButton" onClick={()=>this.deleteDataClicked(data.id)}>delete</button></td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>
                <div className="addButtonContainer">
                    <button className="addButton" onClick={()=>this.addDataCliked()}>Add</button>
                </div>

            </div>
            
            
        )
    }
}

export default Table;