console.log("This is a typescript file!!!");

type StringArray = string[];

interface User {
    name: string;
    id: number;
    isAdmin: boolean;
  }

let newUser: User = {
    name: "Jane",
    id: 1,
    isAdmin: false
};

console.log(newUser);