import { callbackHell } from "../callbacks";

describe('Probando un CallBack', () => {
    test('Callback',done => {
        function otherCallback(data){
            expect(data).toBe('Hola javascripters')
            done();
        };
        callbackHell(otherCallback);
    });
});