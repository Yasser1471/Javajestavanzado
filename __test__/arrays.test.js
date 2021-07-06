import { arrayFruits, arrayColors } from "../arrays";

describe('Comprovaremos que existe un elemento', () => {

    test('¿Tiene una banana?', () => {
        expect(arrayFruits()).toContain('banana');
    }); 
    test('¿No Tiene un platano?', () => {
        expect(arrayFruits()).no.toContain('platano');
    }); 
    test('Comprobar el tamaño de arreglo', () => {
        expect(arrayFruits()).toHaveLength(5);
    }); 
    test('Comprobando que existe un color', () => {
        expect(arrayColors()).toContain('azul');
    }); 
});