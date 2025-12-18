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

interface User {
    name: string
    userId: number
}

interface Admin {
    adminId: number
}

type AdminUser = User & Admin

