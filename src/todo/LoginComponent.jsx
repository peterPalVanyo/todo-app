import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService.js'

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
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
            this.props.history.push(`/welcome/${this.state.username}`)
        }
        else {
            this.setState({hasLoginFailed: true})
            this.setState({showSuccessMessage: false})
        }
    }
    render() {
        return (
            <div className="container">
                <h1>Login</h1>
                <div>
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Sucessful</div>}
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        )
    }
}

export default LoginComponent