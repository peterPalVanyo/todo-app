import Axios from "axios";

class HelloService{
    executeHelloService(){
        return Axios.get('http://localhost:8080/hello');
    }

    executeHelloBeanService(){
        return Axios.get('http://localhost:8080/hellobean');
    }

    executeHelloBeanPathService(name){
        return Axios.get(`http://localhost:8080/hellobean/${name}`);
    }
}   


export default new HelloService()