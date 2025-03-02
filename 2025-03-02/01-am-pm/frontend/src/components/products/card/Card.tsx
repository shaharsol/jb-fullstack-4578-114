import Product from '../../../models/product/Product'
import productsService from '../../../services/products';
import './Card.css'

interface CardProps {
    product: Product,
    removeProduct(id: string): void
}
export default function Card(props: CardProps): JSX.Element {

    const {
        id,
        name,
        price,
        expirationTime
    } = props.product;

    async function deleteMe() {
        try {
            await productsService.remove(id)
            props.removeProduct(id)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div className='Card'>
            <h4>{name}</h4>
            <p>price: {price}</p>
            <p>expiration: {(new Date(expirationTime)).toLocaleDateString()}</p>
            <div>
                <button onClick={deleteMe}>delete</button>
            </div>
        </div>
    )
}