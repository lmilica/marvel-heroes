import { Hero } from "../entities/Hero";

const API_KEY = "0dfccc7db9074a09fe2e824015d07e04";

class HeroService {
  static fetchAll() {
    return fetch(
      `https://gateway.marvel.com/v1/public/characters?apikey=${API_KEY}`
    )
      .then((rawResponse) => rawResponse.json())
      .then((response) => response.data.results)
      .then((apiHeroes) => apiHeroes.map((apiHero) => new Hero(apiHero)));
  }

  static search(value) {
    return fetch(
      `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${value}&apikey=${API_KEY}`
    )
    .then(response => response.json())
    .then(response => response.data.results)
    .then((apiHeroes) => apiHeroes.map((apiHero) => new Hero(apiHero)))
  }
  
}

export default HeroService;
