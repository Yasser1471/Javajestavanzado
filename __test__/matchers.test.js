import { TestWatcher } from "jest"

describe('Comparadores comunes', () => {
    const user = {
        name: "Omar",
        lastname: "Martinez"
    }
    const user2 = {
        name: "Omar2",
        lastname: "Martinez2"
    }

    test('igualdad de elementos', () => {
        expect(user).toEqual(user2);
    });

    test('No son exactamente iguales', () => {
        expect(user).not.toEqual(user2);
    });
})