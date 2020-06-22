import React from 'react';
import './CelebrityLeft.css';

export class CelebrityLeft extends React.Component{
    constructor(props){
        super(props);
        this.getShakespeareQuotesArray = this.getShakespeareQuotesArray.bind(this);
        this.getEinsteinQuotesArray = this.getEinsteinQuotesArray.bind(this);
        this.getGandhiQuotesArray = this.getGandhiQuotesArray.bind(this);
        this.getJobsQuotesArray = this.getJobsQuotesArray.bind(this);
        this.getDisneyQuotesArray = this.getDisneyQuotesArray.bind(this);
        this.getJordanQuotesArray = this.getJordanQuotesArray.bind(this);
        this.getRowlingQuotesArray = this.getRowlingQuotesArray.bind(this);
        this.getAristotleQuotesArray = this.getAristotleQuotesArray.bind(this);
        this.getMuskQuotesArray = this.getMuskQuotesArray.bind(this);
        this.getPicassoQuotesArray = this.getPicassoQuotesArray.bind(this);
    }

    getShakespeareQuotesArray(){
        let shakespeareData = this.props.getQuote('William Shakespeare');
        return shakespeareData;
    }
    getEinsteinQuotesArray(){
        let einsteinData = this.props.getQuote('Albert Einstein');
        return einsteinData;
    }
    getGandhiQuotesArray(){
        let gandhiData = this.props.getQuote('Mahatma Gandhi');
        return gandhiData;
    }
    getJordanQuotesArray(){
        let jordanData = this.props.getQuote('Michael Jordan');
        return jordanData;
    }
    getJobsQuotesArray(){
        let jobsData = this.props.getQuote('Steve Jobs');
        return jobsData;
    }
    getDisneyQuotesArray(){
        let disneyData = this.props.getQuote('Walt Disney');
        return disneyData;
    }
    getRowlingQuotesArray(){
        let rowlingData = this.props.getQuote('J.K. Rowling');
        return rowlingData;
    }
    getAristotleQuotesArray(){
        let aristotleData = this.props.getQuote('Aristotle');
        return aristotleData;
    }
    getMuskQuotesArray(){
        let muskData = this.props.getQuote('Elon Musk');
        return muskData;
    }
    getPicassoQuotesArray(){
        let picassoData = this.props.getQuote('Pablo Picasso');
        return picassoData;
    }
    render(){
        return(
            <div className = "Celebrity">
                    <button onClick = {this.getShakespeareQuotesArray}>William Shakespeare</button>
                    <button onClick = {this.getEinsteinQuotesArray}>Albert Einstein</button>
                    <button onClick = {this.getGandhiQuotesArray}>Mahatma Gandhi</button>
                    <button onClick = {this.getJordanQuotesArray}>Michael Jordan</button>
                    <button onClick = {this.getJobsQuotesArray}>Steve Jobs</button>
                    <button onClick = {this.getDisneyQuotesArray}>Walt Disney</button>
                    <button onClick = {this.getRowlingQuotesArray}>J.K. Rowling</button>
                    <button onClick = {this.getAristotleQuotesArray}>Aristotle</button>
                    <button onClick = {this.getMuskQuotesArray}>Elon Musk</button>
                    <button onClick = {this.getPicassoQuotesArray}>Pablo Picasso</button>
            </div>
        )
    }
}
