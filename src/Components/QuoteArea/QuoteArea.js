import React from 'react';
import './QuoteArea.css';
import {Quote} from '../Quote/Quote';

export class QuoteArea extends React.Component{
    constructor(props){
        super(props);
        this.getRandomQuote = this.getRandomQuote.bind(this);
        this.displayAllQuotes = this.displayAllQuotes.bind(this);
        this.displaySingleQuote = this.displaySingleQuote.bind(this);
        this.addQuote = this.addQuote.bind(this);
        this.checkBackpackQuotes = this.checkBackpackQuotes.bind(this);
        this.deleteAllQuotes = this.deleteAllQuotes.bind(this);
        this.deleteLastQuote = this.deleteLastQuote.bind(this);
        this.displayDeleteButtons = this.displayDeleteButtons.bind(this);
        this.state = {
            quote: null,
            newCeleb: true,
            allQuotes: true,
            backpackQuotes: []
        }
    }
    getRandomQuote(){
        var randomNumber = Math.floor(Math.random()*(this.props.quotesArray.length));
        let quote = this.props.quotesArray[randomNumber];
        this.setState({quote: quote});
        this.setState({newCeleb: false});
        this.setState({allQuotes: false})
    }
    componentWillReceiveProps(nextProps){
        if (this.props.celebrityName !== nextProps.celebrityName){
            this.setState({newCeleb: true});
            this.setState({allQuotes: false});
        }
    }
    displayAllQuotes(){
        this.setState({allQuotes: true});
    }
    displaySingleQuote(){
        this.setState({allQuotes: false});
    }
    addQuote(){
        let backpackQuotes = this.state.backpackQuotes;
        backpackQuotes.push(this.state.quote);
        this.setState({backpackQuotes : backpackQuotes});
    }
    checkBackpackQuotes(){
        if (this.state.backpackQuotes.length === 0){
            alert("You have not added a quote into the Quote Backpack yet!")
        }
    }
    deleteAllQuotes(){
        this.setState({backpackQuotes: []});
    }
    deleteLastQuote(){
        let backpackQuotes = this.state.backpackQuotes;
        backpackQuotes.pop();
        this.setState({backpackQuotes : backpackQuotes})
    }
    displayDeleteButtons(){
        if (this.state.backpackQuotes.length > 0){
            return (
                <div id = "backpackQuotes">
                    <button onClick = {this.deleteAllQuotes}>Delete all Quotes</button>
                    <button onClick = {this.deleteLastQuote}>Delete last Quote</button>
                </div>
            )
        }
    }
    render(){
        if (!this.props.celebrityName){
            return(
                <div className = "QuoteAreaInitial" style ={ { backgroundImage: "url('https://cache.desktopnexus.com/wallpapers/2135/2135314-1920x1080-Impossible-is-Nothing.jpg?st=TRIX_PXLWSnYGGcAw6P2Jw&e=1592522208')" } }>
                    <h1>Genius Quote Machine: Start By Clicking a Genius</h1>
                </div>
            )
        } else {
            let background = this.props.background;
            if (this.state.newCeleb && !this.state.allQuotes){
                return(
                    <div className = "QuoteArea" style ={ { backgroundImage: `url(${background})` } }>
                        <h1>{this.props.celebrityName}</h1>
                        <button onClick = {this.getRandomQuote}>New Quote</button>
                        <button onClick = {this.displayAllQuotes}>All Quotes</button>
                    </div>
                )
            }else if(!this.state.newCeleb && !this.state.allQuotes){
                return(
                    <div className = "QuoteArea" style ={ { backgroundImage: `url(${background})` } }>
                        <div className = "QuoteAreaPage">
                        <h1>{this.props.celebrityName}</h1>
                        <button onClick = {this.getRandomQuote}>New Quote</button>
                        <button onClick = {this.displayAllQuotes}>All Quotes</button>
                        <br></br>
                        <div className = "Quote">
                            <Quote quote = {this.state.quote}/>
                        </div>
                        <button onClick = {this.addQuote} id = "BottomButton">Add quote to Quote Backpack</button>
                        <a href = "#backpackQuotes" onClick = {this.checkBackpackQuotes}>
                            <img src = "https://images.emojiterra.com/google/android-10/512px/1f392.png" alt = "Quote Backpack"></img>
                        </a>
                        </div>
                        <div id = "backpackQuotes">
                        {this.state.backpackQuotes.map((value,index)=>{
                                return <p key = {index}>"{value}"</p>
                            })}
                        {this.displayDeleteButtons()}
                        </div>
                    </div>

                )
            }else if(this.state.allQuotes){
                return(
                    <div className = "QuoteAreaAllQuotes" style ={ { backgroundImage: `url(${background})` } }>
                        <button onClick = {this.displaySingleQuote}>Go Back</button>
                            {this.props.quotesArray.map((value,index)=>{
                                return <p key = {index}>"{value}"</p>
                            })}
                        <button onClick = {this.displaySingleQuote}>Go Back</button>

                    </div>
                    
                )
            }
            
        }

    }
}