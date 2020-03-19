const Pet = require('../src/pet');


describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });

    it('sets the name property', () => {
        const pet = new Pet('Fido');

        expect(pet.name).toEqual('Fido');
    });

describe('growUp', () => {
    it('increases the age property by 1', () => {
        const Lyla = new Pet('Lyla');
        Lyla.growUp();
        expect(Lyla.age).toEqual(1);
        expect(Lyla.hunger).toEqual(5);
        expect(Lyla.fitness).toEqual(7);
    });
});


describe('walk', () => {
    it('increases the fitness level', () => {
        const Lyla = new Pet('Lyla');
        Lyla.growUp();
        Lyla.walk();
        expect(Lyla.fitness).toEqual(10);
        Lyla.growUp();
        Lyla.growUp();
        Lyla.walk();
        expect(Lyla.fitness).toEqual(8);
    });
});

    describe('feed', () => {
    it('decreases hunger', () => {
        const Lyla = new Pet('Lyla');
        Lyla.growUp();
        Lyla.feed();
        expect(Lyla.hunger).toEqual(2);
        Lyla.feed();
        expect(Lyla.hunger).toEqual(0);
    });
});

describe('checkUp', () => {
    it('lets you know how the pet is feeling', () => {
        const Lyla = new Pet('Lyla');
        Lyla.fitness = 2;
        expect(Lyla.checkUp()).toEqual('I need a walk');
        Lyla.walk();
        Lyla.hunger = 5;
        expect(Lyla.checkUp()).toEqual('I am hungry');
        Lyla.fitness = 2;
        expect(Lyla.checkUp()).toEqual('I am hungry AND I need a walk');
        Lyla.fitness = 7;
        Lyla.hunger = 0;
        expect(Lyla.checkUp()).toEqual('I feel great!');

        
    });
})
});