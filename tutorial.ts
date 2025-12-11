// Introduction to TypeScript
const concatenateValues = (a: string, b: string): string => {
  return a + b;
};
console.log(concatenateValues("Hello ", "World"));
console.log(concatenateValues("5", "10")); //510

// Basic knowledge of interface
interface UserInterface {
  id: number;
  name: string;
  age?: number;
  greet(message: string): void;
}

const user: UserInterface = {
  id: 2,
  name: "Habeebah",
  greet(message) {
    console.log(message);
  },
};
if (!user.age) {
  console.log("Age not stated");
} else {
  console.log(user.age);
}
user.greet("Hello");
