import mongoose from "../db/mongoose"

export interface Furniture {
    id: string,
    type: string,
    size: string,
    color: string,
    price: number,
    metadata: {amount: number, interest?: number}
}

const FurnitureSchema = new mongoose.Schema<Furniture>({
    type: String,
    size: String,
    color: String,
    price: Number,
    metadata: mongoose.Schema.Types.Mixed
}, {
    toObject: {
        transform: function(doc, ret) {
            ret.id = ret._id
            delete ret._id
            delete ret.__v
        }
    }

})

export const FurnitureModel = mongoose.model<Furniture>('Furniture', FurnitureSchema, 'furnitures')


db.operations.insertOne({acocuntId: 'wert1234', type: 'loan', data: {amount: 100, interest: 12, paymanets: 4}})
db.operations.insertOne({acocuntId: 'wert1234', type: 'deposit', data: {amount: 100}})