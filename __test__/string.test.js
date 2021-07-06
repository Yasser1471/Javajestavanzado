describe('Comprobar cadenas de texto', () => {
    const text = 'es un bonito texto';
    test('debe contener el siguiente texto', () => {
        expect(text).toMatch(/bonito/);
    });
    test('No contiene el siguiente texto', () => {
        expect(text).no.toMatch(/es/);
    });

    test('Comprobando el tamaño del texto', () => {
        expect(text).toHaveLenght(15);
    });
     
});