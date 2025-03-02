import { useEffect, useState } from 'react'
import './Add.css'
import categoriesService from '../../../services/categeories'
import Category from '../../../models/category/Category'
import { useForm } from 'react-hook-form'
import Draft from '../../../models/product/Draft'
import productsService from '../../../services/products'
import { useNavigate } from 'react-router-dom'

export default function Add(): JSX.Element {
    const [ categories, setCategories ] = useState<Category[]>([])

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


    const { register, handleSubmit, formState, reset } = useForm<Draft>()

    const navigate = useNavigate()

    async function submit(draft: Draft) {
        try {
            const newProduct= await productsService.add(draft)
            alert('added product')
            navigate('/products/list')
        } catch (e) {
            alert(e)
        }
    }


    return (
        <div className='Add'>
            <form onSubmit={handleSubmit(submit)}>
                <input placeholder='product name' {...register('name')}/>

                <input type="number" placeholder='price' {...register('price')} />

                <select {...register('categoryId')}>
                    <option value="" disabled selected>please select category...</option>
                    {categories.map(({id, name}) => <option key={id} value={id}>{name}</option>)}
                </select>

                <label>production date</label>
                <input type="datetime-local"  {...register('productionTime')}/>

                <label>expiration date</label>
                <input type="datetime-local"  {...register('expirationTime')}/>

                <button>Add Product</button>
            </form>
        </div>
    )
}