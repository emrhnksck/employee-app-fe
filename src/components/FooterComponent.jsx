import React, { Component } from 'react'


class FooterComponent extends Component {
    
    constructor(props){
        super(props)

        this.state= {

        }
    }
    
    render() {
        return (
            <div>
                <footer className = "footer">
                <div><a href="/" className="navbar-brand">Employee Management App</a></div> 
                </footer>
            </div>
        )
    }
}

export default FooterComponent