function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
    this.children = [];
} 

Pet.prototype = {
    get isAlive() {
        return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    }
}


Pet.prototype.growUp = function () {
   if(!this.isAlive){
        throw new Error('Your pet is no longer alive :(');
    } else {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
    }
}

const max_fitness = 10;
Pet.prototype.walk = function () {
    if(!this.isAlive){
        throw new Error('Your pet is no longer alive :(');
    } else if(this.fitness + 4 <= 10){
        this.fitness += 4;
    } else {
        this.fitness = max_fitness;
    }
}

const min_hunger = 0;
Pet.prototype.feed = function () {
    if(!this.isAlive){
        throw new Error('Your pet is no longer alive :(');
    } else if(this.hunger -3 >= 0){
        this.hunger -= 3;
    } else {
        this.hunger = min_hunger;
    }
}

Pet.prototype.checkUp = function () {
    if(!this.isAlive){
        throw new Error('Your pet is no longer alive :(');
    } else if(this.fitness <= 3 && this.hunger >= 5){
      return "I am hungry AND I need a walk";
  } else if(this.fitness <= 3){
        return "I need a walk";
    } else if(this.hunger >= 5) {
        return "I am hungry";
    } else {
        return "I feel great!";
    }
}

Pet.prototype.adoptChild = function (child) {
   let array = this.children;
   array.unshift(child);
}

Pet.prototype.haveBaby = function (Name) {
    let child = {'name': Name, 'children': []};
    let array = this.children; 
    array.unshift(child);
}


module.exports = Pet;