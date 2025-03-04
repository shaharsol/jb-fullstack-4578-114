import Draft from "./Draft";

export default interface Product extends Draft {
    id: string
    createdAt: Date
    updatedAt: Date
}