import Axios from "axios";
import { API_URL } from "../../Constants"

class TodoDataService {
    retrieveAllTodos(name) {
        return Axios.get(`${API_URL}/users/${name}/todos`);
    }

    retrieveTodo(name, id) {
        return Axios.get(`${API_URL}/users/${name}/todos/${id}`)
    }

    deleteTodo(name, id) {
        return Axios.delete(`${API_URL}/users/${name}/todos/${id}`);
    }

    updateTodo(name, id, todo) {
        return Axios.put(`${API_URL}/users/${name}/todos/${id}`, todo);
    }

    createTodo(name, todo) {
        return Axios.post(`${API_URL}/users/${name}/todos/`, todo);
    }



}

export default new TodoDataService()