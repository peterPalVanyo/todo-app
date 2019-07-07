import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import HelloService from '../api/todo/HelloService.js'

class WelcomeComponent extends Component {
    constructor(props) {
        super(props)
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
        this.handleSuccessfulRespond = this.handleSuccessfulRespond.bind(this)
        this.handleError = this.handleError.bind(this)
        this.state = {
            welcomeMessage: ''
        }
    }
    render() {
        return (
            <>
                <h1>Welcome</h1>
                <div className="container">
                    <div>Welcome Home {this.props.match.params.name}. You can managed your todos <Link to="/todos">here</Link>.</div>
                </div>
                <div className="container">
                    Click here to costumized message.
                    <button onClick={this.retrieveWelcomeMessage} className="btn btn-success">Get message</button>
                </div>
                <div className="container">
                    {this.state.welcomeMessage}
                </div>
            </>
        )
    }
    retrieveWelcomeMessage() {
        HelloService.executeHelloBeanPathService(this.props.match.params.name)
            .then(r => this.handleSuccessfulRespond(r))
            .catch(error => this.handleError(error))
    }

    handleSuccessfulRespond(res) {
        this.setState({ welcomeMessage: res.data.message })
    }

    handleError(error) {
        let errorMessage = ''
        if(error.message) errorMessage += error.message
        if(error.response && error.response.data) errorMessage += error.response.data.message 
        this.setState( { welcomeMessage: errorMessage } )
    }
}

export default WelcomeComponent