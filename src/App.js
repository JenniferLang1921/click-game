import React, { Component } from 'react';
import './App.css';
import CountryCard from "./components/CountryCard";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import countries from "./countries.json";


class App extends Component {
  state = {
    cards: [],
    score: 0,
    topScore: 0,
    guessed: [],
    info: 'Click an image to begin guessing!'
  };

  componentDidMount() {
    this.setState({cards: countries});
  }

  cardShuffler(){
    this.state.cards.sort(() => {
      return 0.5 - Math.random();
  });
  }

  handleOnClick(id) {
    this.setState({
      guessed: [
        ...this.state.guessed,
        id
      ]
    });



    //if score is greater than top score then make top score the score
    if (this.state.guessed.includes(id)) {
      if (this.state.score > this.state.topScore){
        this.setState({topScore: this.state.score});
      }

      this.setState({score: 0, guessed: [], info: 'Incorrect Guess! You LOSE! Try again!'});
      this.cardShuffler();
    
    }  else
      this.setState({
        score: (this.state.score + 1),
        info: 'Correct! Guess again!'
      });
    this.cardShuffler();
  }
  

  render() {
    this.cardShuffler();
    return (
      <div>
        <Jumbotron
          info={this.state.info}
          score={this.state.score}
          topScore={this.state.topScore}/>
        
        <Container>
       
          {this
            .state
            .cards
            .map((country) => {
              return (<CountryCard 
                key={country.id} 
                id={country.id} 
                image={country.url} 
                
                onClick={() => this.handleOnClick(country.id)}/>);
            })}
          
        </Container>
        <Footer/>
      </div>
    )
  }
}

export default App;