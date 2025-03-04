import { ChangeEvent, useEffect, useState } from 'react'
import './List.css'
import Category from '../../../models/category/Category'
import categoriesService from '../../../services/categeories'
import Product from '../../../models/product/Product'
import Card from '../card/Card'
import productsService from '../../../services/products'

export default function List(): JSX.Element {

    const [ categories, setCategories ] = useState<Category[]>([])
    const [ products, setProducts ] = useState<Product[]>([])

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

    async function categoryChanged(event: ChangeEvent<HTMLSelectElement>) {
        try {
            const selectedCategoryId = event.currentTarget.value
            const products = await productsService.getPerCategory(selectedCategoryId)
            setProducts(products)
        } catch (e) {
            alert(e)
        }
    }

    function removeProduct(id: string) {
        setProducts(products.filter(p => p.id !== id))
    }

    return (
        <div className='List'>
            <select onChange={categoryChanged}>
                <option value="" disabled selected>please select category...</option>
                {categories.map(({id, name}) => <option key={id} value={id}>{name}</option>)}
            </select>

            <div className="CardContainer">
                {products.map(product => <Card key={product.id} product={product} removeProduct={removeProduct}/>)}
            </div>

        </div>
    )
}