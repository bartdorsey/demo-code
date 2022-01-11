const JSONString = '{ "name": "Bart", "role" : "Instructor" }';

const user = JSON.parse(JSONString);

console.log(user.name);

const response = {
  products: [
    {
      name: "Gibson Les Paul",
      price: 1000.23
    },
    {
      name: "Fender Telecaster",
      price: 600.99
    }
  ]
}

const responseString = JSON.stringify(response);

console.log(typeof responseString);

const response2 = JSON.parse(responseString);

console.log(typeof response2);