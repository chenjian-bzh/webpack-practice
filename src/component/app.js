import React from 'react'
import Title from './title'
import moment from 'moment'
import _ from 'lodash'


export default class App extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return <div>
            <Title></Title>
            <div>time : {new moment().toLocalString()}</div>
            <div>this is main body </div>
        </div>
    }
}