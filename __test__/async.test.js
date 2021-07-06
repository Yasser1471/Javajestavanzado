import { getDataFromApi } from "../promise";

describe('Probar Ansyc/Await', () => {
    test('Realizar una peticion a una api', async () => {
        const api = 'https://rickandmortyapi.com/api/character/';
        const getRick = 'https://rickandmortyapi.com/api/character/1'
        await getDataFromApi(api).then(data => {
            expect(data.results.length).toBeGreaterThan(0);
        });
        await getDataFromApi(getRick).then(data => {
            expect(data.name).toEqual('Rick Sanchez');
        });
    });
    test('Realiza una peticion a una api con error', async () => {
        const apiError = 'http://httpstat.us/500';
        const peticion = getDataFromApi(apiError);
        await expect(peticion).rejects.toEqual(Error('Request failed with status code 500'))
    });
    test('Resuelve un hola', async () => {
        await expect(Promise.resolve('Hola!')).resolves.toBe('Hola!');
        await expect(Promise.resolve('Error')).rejects.toBe('Error');
    });
});