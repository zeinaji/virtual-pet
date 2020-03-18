const Pet = require('../src/pet');


describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
    it('sets the name property', () => {
        const pet = new Pet('Fido');

        expect(pet.name).toEqual('Fido');
    });
    it('increases the age property by 1', () => {
        const Lyla = new Pet('Lyla');
        expect(Lyla.growUp()).toEqual(undefined);
        expect(Lyla.age).toEqual(1);
    })
});

