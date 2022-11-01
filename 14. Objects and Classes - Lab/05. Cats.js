function cat(catsAssString) {

    class Cat {
        constructor (name, age) {
            this.name = name;
            this.age = age;
        }

        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }

    for (const catAssString of catsAssString) {
        let [catName, catAge] = catAssString.split(' ');
        let newCat = new Cat (catName, catAge);
        newCat.meow(); 
    }
}

cat (['Mellow 2', 'Tom 5'])
