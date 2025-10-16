const person = {
    name: "Abhi",
    age: 24,
    city: "Ambikapur"
};

console.log(person.name, person.city);

// if you had a property name with spaces or that starts with a number, you'd need to use bracket notation:

const dog ={
    name: "haru",
    age: 2,
    "were is he from": "space"
};

console.log("is from " + dog["were is he from"]);

// delete dog.name;
// console.log(dog);

//destructuring 

const {age, name, ...prop } = dog;
console.log("----------" + prop);


console.log(`
    ---------------------------hasOwnPrperty---------------------`
);

const insaan = {
    name: "akash",
    age: 24
};

console.log(insaan.hasOwnProperty("name"));
console.log(insaan.hasOwnProperty("job"));
console.log("name" in insaan);
console.log("bike" in insaan);



console.log(`
    ---------------------------nested object---------------------`
);

const men = {
    name: "One Punch Man",
    age: 30,
    
    contact: {
        email:"abhijeetekka.dev@gamil.com",
        phone: {
            home: "123456778",
            work: "34894798237"
        }
    },
    pet: {
        dog: "haru",
        cat: "chiku"
    }
}

console.log(men.pet.dog);