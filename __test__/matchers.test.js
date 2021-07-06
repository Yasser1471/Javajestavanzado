import { TestWatcher } from "jest"

describe('Comparadores comunes', () => {
    const user = {
        name: "Omar",
        lastname: "Martinez"
    }
    const user2 = {
        name: "Omar",
        lastname: "Martinez"
    }

    test('igualdad de elementos', () => {
        expect(user).toEqual(user2);
    })
})