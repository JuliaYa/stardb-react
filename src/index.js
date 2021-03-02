import SwapiService from './services/swapi';

const swapi = new SwapiService();

swapi.getAllPeople().then((people) => {
  people.forEach(p => {
    console.log(p.name);
  });
});
