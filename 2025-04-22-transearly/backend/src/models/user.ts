import mongoose from "../db/mongoose"

export interface User {
    id: string,
    name: string,
    email: string,
    dropbox: {
        id: string,
        accessToken: string,
        cursor: string
    },
    createdAt: Date,
    paymentIntent: string | null
    
}

const UserSchema = new mongoose.Schema<User>({
    name: String,
    email: String,
    dropbox: {
        id: String,
        accessToken: String,
        cursor: String
    },
    createdAt: Date,
    paymentIntent: String
}, {
    toObject: {
        transform: function(doc, ret) {
            ret.id = ret._id
            delete ret._id
            delete ret.__v
        }
    }

})

export const UserModel = mongoose.model<User>('User', UserSchema, 'users')
