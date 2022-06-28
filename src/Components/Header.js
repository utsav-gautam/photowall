import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Header extends Component{
    render(){
        return <h1>{this.props.name}</h1>
    }
}

export default Header