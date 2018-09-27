import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'
import {Button} from 'antd'

export default class App extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
          <div>
            <h1>App</h1>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/user">User</Link></li>
            </ul>
            {this.props.children}
    
          </div>
        );
    }
}