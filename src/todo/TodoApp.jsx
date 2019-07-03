import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <div>
                        <Switch>
                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/login" component={LoginComponent} />
                            <Route path="/welcome/:name" component={WelcomeComponent} />
                            <Route component={ErrorComponent}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}
class WelcomeComponent extends Component {
    render() {
        return (
            <div>Welcome Home {this.props.match.params.name}</div>
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