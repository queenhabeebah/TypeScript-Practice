// Task 1
interface SuccessResponse<T> {
  status: "success";
  data: T;
}

interface ErrorResponse {
  status: "error";
  message: "string";
}

type ApiResponse<T> = SuccessResponse <T> | ErrorResponse

interface UserInfo {
    username: string
    userId: number
}

interface Admin {
    adminId: number
}

type AdminUser = UserInfo & Admin


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
console.log(user);
