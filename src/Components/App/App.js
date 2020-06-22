import React from 'react';
import './App.css';
import {CelebrityLeft} from '../CelebrityLeft/CelebrityLeft';
import {CelebrityRight} from '../CelebrityRight/CelebrityRight';
import {QuoteArea} from '../QuoteArea/QuoteArea';
import findCelebrityQuotes from '../../Util/Celebrities';

export class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      quotesArray : [],
      celebrity : null,
      background: null
    };
    this.getCelebrityQuotes = this.getCelebrityQuotes.bind(this);
  }

  getCelebrityQuotes(celebrityName){
    let quotesFromCelebrity = findCelebrityQuotes(celebrityName)[0];
    let celebrityBackground = findCelebrityQuotes(celebrityName)[1];
    this.setState({celebrity : celebrityName});
    this.setState({quotesArray : quotesFromCelebrity});
    this.setState({background: celebrityBackground});
  }
  render(){
    return (
      <div className="App">
        <CelebrityLeft getQuote = {this.getCelebrityQuotes}/>
        <QuoteArea celebrityName = {this.state.celebrity} 
        quotesArray = {this.state.quotesArray}
        background = {this.state.background}/>
        <CelebrityRight getQuote = {this.getCelebrityQuotes}/>
      </div>
    );
  }
}
