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


    const { register, handleSubmit, formState } = useForm<Draft>()

    const navigate = useNavigate()

    async function submit(draft: Draft) {
        try {
            await productsService.add(draft)
            alert('added product')
            navigate('/products/list')
        } catch (e) {
            alert(e)
        }
    }


    return (
        <div className='Add'>
            <form onSubmit={handleSubmit(submit)}>
                <input placeholder='product name' {...register('name', {
                    required: {
                        value: true,
                        message: 'name is a must'
                    }
                })}/>
                <span className='error'>{formState.errors.name?.message}</span>

                <input type="number" placeholder='price' {...register('price', {
                    required: {
                        value: true,
                        message: 'price is a must'
                    }
                })} />
                <span className='error'>{formState.errors.price?.message}</span>

                <select defaultValue={''} {...register('categoryId', {
                    required: {
                        value: true,
                        message: 'category is a must'
                    }
                })}>
                    <option value="" disabled>please select category...</option>
                    {categories.map(({id, name}) => <option key={id} value={id}>{name}</option>)}
                </select>
                <span className='error'>{formState.errors.categoryId?.message}</span>

                <label>production date</label>
                <input type="datetime-local"  {...register('productionTime', {
                    required: {
                        value: true,
                        message: 'production time is a must'
                    }
                })}/>
                <span className='error'>{formState.errors.productionTime?.message}</span>

                <label>expiration date</label>
                <input type="datetime-local"  {...register('expirationTime', {
                    required: {
                        value: true,
                        message: 'expiration time is a must'
                    }
                })}/>
                <span className='error'>{formState.errors.expirationTime?.message}</span>

                <button>Add Product</button>
            </form>
        </div>
    )
}