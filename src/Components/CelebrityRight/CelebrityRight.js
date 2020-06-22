import React from 'react';
import './CelebrityRight.css';

export class CelebrityRight extends React.Component{
    constructor(props){
        super(props);
        this.getGatesQuotesArray = this.getGatesQuotesArray.bind(this);
        this.getKingQuotesArray = this.getKingQuotesArray.bind(this);
        this.getWinfreyQuotesArray = this.getWinfreyQuotesArray.bind(this);
        this.getSeussQuotesArray = this.getSeussQuotesArray.bind(this);
        this.getPresleyQuotesArray = this.getPresleyQuotesArray.bind(this);
        this.getPhelpsQuotesArray = this.getPhelpsQuotesArray.bind(this);
        this.getLeeQuotesArray = this.getLeeQuotesArray.bind(this);
        this.getSmithQuotesArray = this.getSmithQuotesArray.bind(this);
        this.getAliQuotesArray = this.getAliQuotesArray.bind(this);
        this.getTeresaQuotesArray = this.getTeresaQuotesArray.bind(this);
    }
    getGatesQuotesArray(){
        let gatesData = this.props.getQuote('Bill Gates');
        return gatesData;
    }
    getKingQuotesArray(){
        let kingData = this.props.getQuote('Martin Luther King Jr.');
        return kingData;
    }
    getWinfreyQuotesArray(){
        let winfreyData = this.props.getQuote('Oprah Winfrey');
        return winfreyData;
    }
    getSeussQuotesArray(){
        let seussData = this.props.getQuote('Dr. Seuss');
        return seussData;
    }
    getPresleyQuotesArray(){
        let presleyData = this.props.getQuote('Elvis Presley');
        return presleyData;
    }
    getPhelpsQuotesArray(){
        let phelpsData = this.props.getQuote('Michael Phelps');
        return phelpsData;
    }
    getLeeQuotesArray(){
        let leeData = this.props.getQuote('Bruce Lee');
        return leeData;
    }
    getSmithQuotesArray(){
        let smithData = this.props.getQuote('Will Smith');
        return smithData;
    }
    getAliQuotesArray(){
        let aliData = this.props.getQuote('Muhammad Ali');
        return aliData;
    }
    getTeresaQuotesArray(){
        let teresaData = this.props.getQuote('Mother Teresa');
        return teresaData;
    }
    render(){
        return(
            <div className = "Celebrity">
                <button onClick = {this.getGatesQuotesArray}>Bill Gates</button>
                <button onClick = {this.getKingQuotesArray}>Martin Luther King Jr.</button>
                <button onClick = {this.getWinfreyQuotesArray}>Oprah Winfrey</button>
                <button onClick = {this.getSeussQuotesArray}>Dr. Seuss</button>
                <button onClick = {this.getPresleyQuotesArray}>Elvis Presley</button>
                <button onClick = {this.getPhelpsQuotesArray}>Michael Phelps</button>
                <button onClick = {this.getLeeQuotesArray}>Bruce Lee</button>
                <button onClick = {this.getSmithQuotesArray}>Will Smith</button>
                <button onClick = {this.getAliQuotesArray}>Muhammad Ali</button>
                <button onClick = {this.getTeresaQuotesArray}>Mother Teresa</button>
            </div>
        )
    }
}