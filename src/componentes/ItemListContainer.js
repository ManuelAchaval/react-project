import ItemCount from './ItemCount';

const ItemListContainer = ({greeting}) => {

    return (
        <div>
            <h2>{greeting}</h2>
        <ItemCount  stock ={10} inicial= {0} />
        </div>
    )
}
export default ItemListContainer