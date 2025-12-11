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

// Composing Types
// 1. Union Types
type IdFieldType = string | number;

const printId = (id: IdFieldType) => {
  console.log("ID: " + id);
};
printId(2345);

// 2. Intersection Type
interface BusinessPartner {
  name: string;
  creditScore: number;
}
interface UserIdentity {
  id: number;
  email: string;
}
type PartnerUsers = BusinessPartner & UserIdentity;

const signContract = (partnerUsers: PartnerUsers): void => {
  console.log(
    `Contract signed by ${partnerUsers.name} with email: ${partnerUsers.email}`
  );
};
signContract({
  name: "Habeebah",
  creditScore: 1000,
  id: 1001,
  email: "habeebah@gmail.com",
});

// Enums
// Errors can be: unauthorized, user doesn't exist, wrong credentials, iternal, etc

enum LoginError {
  Unauthorized = "unauthorized",
  NoUser = "nouser",
  WrongCredentials = "wrongcredentials",
  Internal = "internal",
}
const printErrorMsg = (error: LoginError) => {
  if (error == LoginError.Unauthorized) {
    console.log("User not authorized");
  } else if (error == LoginError.NoUser) {
    console.log("User does not exist");
  } else if (error == LoginError.WrongCredentials) {
    console.log("Wrong username/password");
  } else {
    console.log("Internal Error");
  }
};
printErrorMsg(LoginError.NoUser)
