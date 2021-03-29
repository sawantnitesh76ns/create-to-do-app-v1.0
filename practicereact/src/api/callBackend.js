import axios from 'axios'

class CallBackend{
    retrieveAllData(){
        return axios.get("http://localhost:8080/company");
    
    }

    deleteDataById(id){
        return axios.delete(`http://localhost:8080/delete/${id}`)
    }

    callById(id){
        return axios.get(`http://localhost:8080/company/${id}`)
    }

    addData(company){
        return axios.post(`http://localhost:8080/company`,company)
    }

    updateData(id,company){
        return axios.put(`http://localhost:8080/company/${id}`,company)
    }

}

export default new CallBackend();
