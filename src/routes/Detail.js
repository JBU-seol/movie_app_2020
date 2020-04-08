import React from 'react';

import './Detail.css'

class detail extends React.Component{
    componentDidMount(){
        const {location, history } = this.props;
        if( location.state === undefined){
            history.push("/");
        }
        
    }
    //render 되는 부분 꾸미기 !
    render(){
        const { location:{state} } = this.props;
        if( state ){
            return (
                <div className="movies_info">
                    <h1 className="movies__title">{state.title}</h1>
                    <h1 className="movies__year">{state.year}</h1>
                    <h1 className="movies__summary">{state.summary}</h1>
                </div>
            );
        }
        else{
            return null;
        }
        
    }
}

export default detail;