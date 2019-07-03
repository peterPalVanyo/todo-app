import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <div>
                        <HeaderComponent/>
                        <Switch>
                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/login" component={LoginComponent} />
                            <Route path="/welcome/:name" component={WelcomeComponent} />
                            <Route path="/todos" component={ListTodosComponent} />
                            <Route component={ErrorComponent}/>
                        </Switch>
                        <FooterComponent/>
                    </div>
                </Router>
            </div>
        )
    }
}

class ListTodosComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos:[
                {id: 1, description: 'Learn React', done: false, targetDate: new Date()},
                {id: 2, description: 'Learn Angular', done: false, targetDate: new Date()},
                {id: 3, description: 'Learn JavaScript', done: false, targetDate: new Date()}
            ]

        }
    }
    render() {
        return (
            <div>
                <h1>List todos</h1>
                <table>
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
                                <tr>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                </tr>
                            )

                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

class HeaderComponent extends Component {
    render() {
        return (
            <div>Header <hr/> </div>
        )
    }
}

class FooterComponent extends Component {
    render() {
        return (
            <div><hr/> Footer </div>
        )
    }
}

class WelcomeComponent extends Component {
    render() {
        return (
            <div>Welcome Home {this.props.match.params.name}. You can managed your todos <Link to="/todos">here</Link></div>
        )
    }
}

function ErrorComponent() {
    return <div>An error occured. Contact us...</div>
}

class LoginComponent extends Component {
    constructor (props) {
        super(props)
        this.state = {
            username: 'username',
            password: 'password',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }
    handleChange(e) {
        console.log(e.target.value);
        this.setState( { [e.target.name]: e.target.value } )
    }
    loginClicked(e) {
        if(this.state.username === "username" && this.state.password === "alma") {
            this.props.history.push(`/welcome/${this.state.username}`)
        }
        else {
            this.setState({hasLoginFailed: true})
            this.setState({showSuccessMessage: false})
        }
    }
    render() {
        return (
            <div>
                {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
                {this.state.showSuccessMessage && <div>Login Sucessful</div>}
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button onClick={this.loginClicked}>Login</button>
            </div>
        )
    }
}



export default TodoApp