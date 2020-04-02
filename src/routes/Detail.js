import React from 'react';

class detail extends React.Component{
    componentDidMount(){
        const {location, history } = this.props;
        if( location.state === undefined){
            history.push("/");
        }
        
    }
    render(){
        const { location } = this.props;
        if( location.state){
            return <h1>{location.state.title}</h1>;
        }
        else{
            return null;
        }
        
    }
}

export default detail;