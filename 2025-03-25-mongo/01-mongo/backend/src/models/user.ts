import mongoose from "../db/mongoose"

interface User {
    id: string,
    name: string,
    username: string,
    password: string,
    createdAt: Date,
    following: string[]
}

const UserSchema = new mongoose.Schema<User>({
    id: String,
    name: String,
    username: String,
    password: String,
    createdAt: Date,
    following: [String]    
})

export const UserModel = mongoose.model<User>('User', UserSchema, 'users')