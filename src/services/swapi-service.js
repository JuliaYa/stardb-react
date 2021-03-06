export default class SwapiService {

  _apiBase = 'https://swapi.dev/api';

  getResource = async (url) => {
    const res = await fetch(`${ this._apiBase }${ url }`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${ url }, received ${ res.status }`);
    }
    return await res.json();
  };
  
  async getAllPeople() { 
    const res = await this.getResource('/people/');
    return res.results;
  };

  async getPerson(id) {
    const res = await this.getResource(`/people/${ id }/`);
    return this._transformPerson(res); 
  };

  async getAllPlanets() { 
    const res = await this.getResource('/planets/');
    return res.results.map(this._transformPlanet);;
  };

  async getPlanet(id) {
    const res = await this.getResource(`/planets/${ id }/`);
    return this._transformPlanet(res);
  };

  async getAllStarShips() { 
    const res = await this.getResource('/starships/');
    return res.results;
  };

  async getStarShip(id) {
    const res = await this.getResource(`/starships/${ id }/`);
    return this._transformStarship(res);
  };

  _extractId(url) {
    const idRegExp = /\/([0-9]*)\/$/;
    return url.match(idRegExp)[1];
  };

  _transformPlanet(planet) {
    return {
      id: this._extractId(planet.url),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    }
  };

  _transformStarship(starship) {
    return {
      id: this._extractId(starship.url),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity
    };
  };

  _transformPerson(person) {
    return {
      id: this._extractId(person.url),
      name: person.name,
      gender: person.gender,
      birthYear: person.birthYear,
      eyeColor: person.eyeColor
    };
  };
};
