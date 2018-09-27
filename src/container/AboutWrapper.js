import Loadable from 'react-loadable'
import React from 'react'

const LoadableAbout = Loadable({
    loader: () => import(/* webpackChunkName: "about" */ '../component/About'),
    loading: () => <div>loading...</div>
})

export default class extends React.Component {
    render() {
        return <LoadableAbout/>
    }
}