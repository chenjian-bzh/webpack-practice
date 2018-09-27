import React, {Component} from 'react'
import Loadable from 'react-loadable'

const LoadableUser = Loadable({
    loader: () => import(/* webpackChunkName: "user" */ '../component/User'),
    loading: () => <div>loading...</div>
})

export default class UserWrapper extends Component {
    render(){
        return <LoadableUser/>
    }
}