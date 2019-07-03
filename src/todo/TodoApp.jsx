import React, {Component} from 'react'

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <LoginComponent/>
            </div>
        )
    }
}

class LoginComponent extends Component {
    constructor (props) {
        super(props)
        this.state = {
            username: 'username',
            password: 'password'
        }
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
    }
    handleUsernameChange(e) {
        console.log(e.target.value);
        this.setState( { username: e.target.value } )
    }
    handlePasswordChange(e) {
        this.setState( { password: e.target.value } )
    }
    render() {
        return (
            <div>
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleUsernameChange}/>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange}/>
                <button>Login</button>
            </div>
        )
    }
}

export default TodoApp