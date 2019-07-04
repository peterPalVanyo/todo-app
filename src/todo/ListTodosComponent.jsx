import React, {Component} from 'react'
import TodoDataService from '../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'

class ListTodosComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos:[
/*                 {id: 1, description: 'Learn React', isCompleted: false, targetDate: new Date()},
                {id: 2, description: 'Learn Angular', isCompleted: false, targetDate: new Date()},
                {id: 3, description: 'Learn JavaScript', isCompleted: false, targetDate: new Date()} */
                ]

        }
    }

    componentDidMount() {
        let username = AuthenticationService.getLoggedInUserName()
        TodoDataService.retrieveAllTodos(username)
        .then(
            response => {
                console.log(response)
                this.setState({todos: response.data})
            }
        )
    }

    render() {
        return (
            <div>
                <h1>List todos</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Description</th>
                                <th>Is Completed</th>
                                <th>Target Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo =>
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.completed.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}


export default ListTodosComponent