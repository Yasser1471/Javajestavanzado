import { getDataFromApi } from "../promise";

describe('Probando promesas', () => {
    test('Realizar una peticion a una api', done =>{
        const api = 'https://rickandmortyapi.com/api/character/';
        getDataFromApi(api).then(data => {
            console.log(data);
            expect(data.results.length).toBeGreaterThan(0);
            done();
        });
    });
});