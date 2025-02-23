import Login from "./Login";

export default interface User extends Login {
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string
}