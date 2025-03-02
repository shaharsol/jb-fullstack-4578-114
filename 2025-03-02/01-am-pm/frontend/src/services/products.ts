import Draft from "../models/product/Draft"
import Product from "../models/product/Product"
import axios from 'axios'

class Products {

    async getPerCategory(categoryId: string): Promise<Product[]> {
        const response = await axios<Product[]>(`${import.meta.env.VITE_REST_SERVER_URL}/products/${categoryId}`)
        const products = response.data
        return products
    }

    async add(draft: Draft): Promise<Product> {
        const response = await axios.post<Product>(`${import.meta.env.VITE_REST_SERVER_URL}/products`, draft)
        const newProduct = response.data
        return newProduct
    }

    async remove(id: string): Promise<boolean> {
        const response = await axios.delete<boolean>(`${import.meta.env.VITE_REST_SERVER_URL}/products/${id}`)
        const isDeleted = response.data
        return isDeleted
    }
}

const productsService = new Products()
export default productsService