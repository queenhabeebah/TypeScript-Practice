// Task 2

interface User {
  readonly id: number;
  email: Required<string>;
  name?: string;
}

type UserDTO = {
  readonly id: number;
  email: Required<string>;
  name?: string;
};

type rMandatory = Readonly<Required<User>>;

const user:rMandatory = {
    id: 1,
    email: "user@email.com",
    name: 'Habeebah'
}