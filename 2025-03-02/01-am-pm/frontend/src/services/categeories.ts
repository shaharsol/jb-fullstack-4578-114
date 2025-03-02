import axios from "axios"
import Category from "../models/category/Category"

class Categories {
    async getAll(): Promise<Category[]> {
        const response = await axios(`${import.meta.env.VITE_REST_SERVER_URL}/categories`)
        const categories = response.data
        return categories
    }
}

const categoriesService = new Categories()
export default categoriesService