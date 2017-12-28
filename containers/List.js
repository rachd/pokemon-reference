import React, {Component} from 'react';
import get from '../services/api';

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            pokemon: null
        }
    }

    componentDidMount() {
        get("https://pokeapi.co/api/v2/pokemon/?limit=151").then((response) => {
            this.setState({
                isLoaded: true,
                pokemon: JSON.parse(response).results
            });
          }, function(error) {
            this.setState({
                isLoaded: true,
                pokemon: null
            });
            console.error("Failed!", error);
          });
    }

    render () {
        if(this.state.pokemon) {
            return (
                <div className="list">
                    {this.state.pokemon.map((pokemon, index) => <div key={index}>{pokemon.name}</div>)}
                </div>
            );
        } else {
            return (<p>Loading</p>);
        }  
    }
}