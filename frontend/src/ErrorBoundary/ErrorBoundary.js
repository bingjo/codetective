import React from 'react'

export default class ErrorBoundary extends React.Component{
    
    state = {
        HasError: false
    }

    componentDidCatch(error, info){
        this.setState({HasError: true})
    }
    
    render(){
        if(this.state.HasError){
            return <h1>Unknown Error Occurred</h1>
        }

        return this.props.children
    }
}