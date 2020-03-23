const Pet = require('../src/class.js');

describe('constructor', () => {
    let Lyla;
    beforeEach(() => {
        Lyla = new Pet ('Lyla');
    });
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Pet);
    });

    it('sets the name property', () => {
        expect(Lyla.name).toBe('Lyla');
    });

    it('check whether the pet is alive or dead', () => {
        Lyla.hunger = 15;
        expect(Lyla.isAlive()).toBe(false);
        Lyla.hunger = 0;
        Lyla.age = 30;
        expect(Lyla.isAlive()).toBe(false);
        Lyla.age = 1;
        Lyla.fitness = 0;
        expect(Lyla.isAlive()).toBe(false);
    });

    it('growUp throws an error if the pet is not alive', () => {
        Lyla.age = 30; 
        expect(() => Lyla.growUp()).toThrow('Your pet is no longer alive :(');
    });
    it('increases the age property by 1', () => {
        Lyla.growUp();
        expect(Lyla.age).toEqual(1);
    });
    it('increases hunger by 5', () => {
        Lyla.growUp();
        expect(Lyla.hunger).toEqual(5);
    });
      
    it('decreases fitness by 3',() => {
        Lyla.growUp();
        expect(Lyla.fitness).toEqual(7);
    });

    it('increases the fitness level', () => {
        Lyla.fitness = 7;
        Lyla.walk();
        expect(Lyla.fitness).toEqual(10);
        Lyla.fitness = 4;
        Lyla.walk();
        expect(Lyla.fitness).toEqual(8);
    }); 

    it('walk throws an error if the pet is not alive', () => {
        Lyla.age = 30; 
        expect(() => Lyla.walk()).toThrow('Your pet is no longer alive :(');
    });
});

describe('feed', () => {
    let Lyla;
        beforeEach(()=>{
            Lyla = new Pet('Lyla');
        });
       it('throws an error if the pet is not alive', () => {
            Lyla.hunger = 20; 
            expect(() => Lyla.feed()).toThrow('Your pet is no longer alive :(');
        });
    it('decreases hunger', () => {
        Lyla.hunger = 5;
        Lyla.feed();
        expect(Lyla.hunger).toEqual(2);
        Lyla.feed();
        expect(Lyla.hunger).toEqual(0);
    });
})

describe('checkUp', () => {
    let Lyla;
    beforeEach(()=>{
        Lyla = new Pet('Lyla');
    });
it('throws an error if the pet is not alive', () => {
        Lyla.hunger = 20; 
        expect(() => Lyla.checkUp()).toThrow('Your pet is no longer alive :(');
    });
it('lets you know if the pet needs a walk', () => {   
    Lyla.fitness = 2;
    expect(Lyla.checkUp()).toEqual('I need a walk');
});
it('lets you know if the pet is hungry', () => {
    Lyla.fitness = 6;
    Lyla.hunger = 5;
    expect(Lyla.checkUp()).toEqual('I am hungry');
});
it('lets you know if the pet is hungry and it needs a walk', () => {
    Lyla.hunger = 5;
    Lyla.fitness = 2;
    expect(Lyla.checkUp()).toEqual('I am hungry AND I need a walk');
});
it('lets you know if the pet is not deprived of anything', () => {
    Lyla.fitness = 7;
    Lyla.hunger = 0;
    expect(Lyla.checkUp()).toEqual('I feel great!');

});
});


describe('adoptChild', () => {
    it('adopts a child pet', () => {
        const parent = new Pet('Dave');
        const child = new Pet('Amelia');
        parent.adoptChild(child);
        expect(parent.children).toEqual([{name: 'Amelia', age: 0, hunger: 0, fitness: 10, children: []}]);
    });
});


describe('haveBaby', () => {
    it('creates a child', () => {
        const parent = new Pet('Dave');
        parent.haveBaby('Amelia');
        expect(parent.children).toEqual([{name: 'Amelia', children: []}]);
    });
});