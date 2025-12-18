// Task 3 -- Enums vs Literal Unions

enum RoleEnum {
    admin= 'admin',
    manager= 'manager',
    worker= 'worker',
}

type Role = 'admin' | 'manager' | 'worker'

const canManageUsers = (role: Role | RoleEnum) => {
    console.log(role);
    
}

canManageUsers(RoleEnum.admin)
canManageUsers("manager")