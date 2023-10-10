import { axiosInstance } from "../config/axiosInstance"

export const users = [
    {
        _id:'1',
        nombre: 'Juan Pablo Salomon',
        dni: '31425746',
        celular: '3814520265',
        username: 'juanpablosalomon@gmail.com',
        password: '123456',
        rol: 'user',
        state: 'active'
    },
    {
        _id:'2',
        nombre: 'Federico Alfaro',
        dni: '31425333',
        celular: '3814520265',
        username: 'jfalfaro@gmail.com',
        password: '123456',
        rol: 'user',
        state: 'active'
    },    
    {
        _id:'3',
        nombre: 'Jorge Almiron',
        dni: '31425733',
        celular: '3814520111',
        username: 'jorgito@gmail.com',
        password: '123456',
        rol: 'user',
        state: 'active'
    },
]

// export const getAllUsers = async () => {
//     const response = await axiosInstance.get("/usuarios");
//     console.log(response);
//     console.log(response.data);
//     console.log(response.data.users);
//     return response.data.users
// }