import { useEffect, useState } from 'react'
import './List.css'
import Category from '../../../models/category/Category'
import categoriesService from '../../../services/categeories'
import Product from '../../../models/product/Product'
import Card from '../card/Card'

export default function List(): JSX.Element {

    const [ categories, setCategories ] = useState<Category[]>([])
    const [ products ] = useState<Product[]>([])

    useEffect(() => {
        (async() => {
            try {
                const categories = await categoriesService.getAll()
                setCategories(categories)
            } catch (e) {
                alert(e)
            }
        })()
    }, [])


    return (
        <div className='List'>
            <select>
                <option value="" disabled selected>please select category...</option>
                {categories.map(({id, name}) => <option key={id} value={id}>{name}</option>)}
            </select>

            <div className="CardContainer">
                {products.map(product => <Card key={product.id} product={product}/>)}
            </div>
        </div>
    )
}