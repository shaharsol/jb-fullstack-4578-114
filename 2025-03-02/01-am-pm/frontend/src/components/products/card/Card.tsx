import Product from '../../../models/product/Product'
import './Card.css'

interface CardProps {
    product: Product
}
export default function Card(props: CardProps): JSX.Element {

    const {
        name,
        price,
        expirationTime
    } = props.product;

    return (
        <div className='Card'>
            <h4>{name}</h4>
            <p>price: {price}</p>
            <p>expiration: {expirationTime.toLocaleTimeString()}</p>
        </div>
    )
}