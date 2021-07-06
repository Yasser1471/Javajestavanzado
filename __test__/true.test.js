import { isNull, isTrue} from '../true';
import { isFalse, isUndefined} from '../true';

describe('Probando resultados nulos', () =>{
    test('null',() =>{
        expect(isNull()).toBeNull();
    });
});
describe('Probando resultados Verdaderos', () =>{
    test('verdadero',() =>{
        expect(isTrue()).toBeTruthy();
    });
});
describe('Probando resultados falsos', () =>{
    test('falsos',() =>{
        expect(isFalse()).toBeFalsy();
    });
});
describe('Probando resultados undifined', () =>{
    test('undifined',() =>{
        expect(isUndefined()).toBeUndifined();
    });
});

describe('Probando resultados no verdaderos', () =>{
    test('Falso o Verdadero',() =>{
        expect(isFalse()).not.toBeTruthy();
    });
});