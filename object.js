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

delete dog.name;
console.log(dog);

//desructuring 

