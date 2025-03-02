import { useEffect, useState } from 'react'
import './List.css'
import Category from '../../../models/category/Category'
import categoriesService from '../../../services/categeories'
import Product from '../../../models/product/Product'

export default function List(): JSX.Element {

    const [ categories, setCategories ] = useState<Category[]>([])
    const [ products, setProducts ] = useState<Product[]>([])

    useEffect(() => {
        (async() => {
            const categories = await categoriesService.getAll()
            setCategories(categories)
        })()
    }, [])


    return (
        <div className='List'>
            <select>
                <option value="" disabled selected>please select category...</option>
                {categories.map(({id, name}) => <option key={id} value={id}>{name}</option>)}
            </select>
        </div>
    )
}