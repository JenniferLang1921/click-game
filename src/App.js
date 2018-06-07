import React, { Component } from 'react';
import CountryCard from "./components/CountryCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import countries from "./countries.json";
import './App.css';

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    countries
  };

  removeCountry= id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const countries = this.state.countries.filter(country => country.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ countries });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Travel Around The World In Twelve Clicks</Title>
        {this.state.countries.map(country => (
          <CountryCard
            removeCountry={this.removeCountry}
            id={country.id}
            key={country.id}
            name={country.name}
            image={country.url}
            
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;