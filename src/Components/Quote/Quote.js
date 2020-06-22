import React from 'react';
import './Quote.css';

export class Quote extends React.Component{
    render(){
        if (this.props.quote){
            return (
                <div className = "Quote">
                    <p>"{this.props.quote}"</p>
                </div>
            )
        }else{
            return(
                <div></div>
            )
        }

    }
}