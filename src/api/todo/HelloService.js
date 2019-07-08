import Axios from "axios";

class HelloService{
    executeHelloService(){
        return Axios.get('http://localhost:8080/hello');
    }

    executeHelloBeanService(){
        return Axios.get('http://localhost:8080/hellobean');
    }

    executeHelloBeanPathService(name){
        let username = 'user'
        let password = 'password'
        let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)
        return Axios.get(`http://localhost:8080/hellobean/${name}`
         ,{
            headers : {
                authorization: basicAuthHeader
            }
        } 
        );
    }
}   


export default new HelloService()