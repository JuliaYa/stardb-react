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
    return res; 
  };

  async getAllPlanets() { 
    const res = await this.getResource('/planets/');
    return res.results;
  };

  async getPlanet(id) {
    const res = await this.getResource(`/planets/${ id }/`);
    return res;
  };

  async getAllStarShips() { 
    const res = await this.getResource('/starships/');
    return res.results;
  };

  async getStarShip(id) {
    const res = await this.getResource(`/starships/${ id }/`);
    return res;
  };
};
