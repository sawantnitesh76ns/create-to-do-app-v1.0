import { Field, Formik,Form } from "formik";
import { Component } from "react";
import DbService from '../api/callBackend'
import './component.css';

class Update extends Component{
    constructor(props){
        super(props)
        this.state={
            id:this.props.match.params.id,
            name:'',
            duration:0,
            profile:'',
            stipend:0,
            workFromHome:'',
        }
        this.onSubmit=this.onSubmit.bind(this)
    }

    componentDidMount(){
        console.log(this.state.id)
        if(this.state.id===-1){
            return
        }

        DbService.callById(this.state.id)
        .then(response=>
            this.setState({
                name:response.data.name,
                duration:response.data.duration,
                profile:response.data.profile,
                stipend:response.data.stipend,
                workFromHome:String(response.data.workFromHome)
            })
        )


    }

    onSubmit(values){
        let company={
            id:this.state.id,
            name:values.name,
            duration:parseInt(values.duration),
            profile:values.profile,
            stipend:parseInt(values.stipend),
            workFromHome:(values.workFromHome.toLowerCase() === 'true')
        }
        if(this.state.id==="-1"){
            DbService.addData(company)
            .then(()=>
                this.props.history.push('/table/tableData')
            )
        }

        DbService.updateData(this.state.id,company)
        .then(()=>
            this.props.history.push('/table/tableData')
        )

    }

    render(){
        let{name,duration,profile,stipend,workFromHome}=this.state
        return(
            <div className='updateContainer'>
                <h1>Update Data</h1>
                <div>
                    <Formik
                    initialValues={{name,duration,profile,stipend,workFromHome}}
                    validateOnChange={false}
                    validateOnBlur={false}
                    onSubmit={this.onSubmit}
                    enableReinitialize={true}

                    
                    >
                        {
                            (props)=>(
                                <Form>
                                        <fieldset >
                                            <label>Name</label><br></br>
                                            <Field  className="feild" type='text' name='name'></Field>
                                        </fieldset>
                                        <fieldset >
                                            <label>Duration</label>
                                                <Field className='form-control' type='int' name='duration'></Field>
                                        </fieldset>
                                        <fieldset className='form-group'>
                                        <label>Profile</label>
                                            <Field className='form-control' type='text' name='profile'></Field>
                                        </fieldset>
                                        <fieldset className='form-group'>
                                        <label>Stipend</label>
                                            <Field className='form-control' type='text' name='stipend'></Field>
                                        </fieldset>
                                        <fieldset className='form-group'>
                                        <label>workFromHome</label>
                                            <Field className='form-control' type='text' name='workFromHome'></Field>
                                        </fieldset>
                                        <button  className="btn" type="submit">SAVE</button> 
                                </Form>
                                
                            )
                        }

                    </Formik>
                </div>
            </div>

        )
    }
}

export default Update;