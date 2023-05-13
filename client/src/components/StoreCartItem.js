import { Link } from "react-router-dom";

function StoreCartItem() {
    return ( 
        <Link to={'/store/item/' + itemId} className="StoreCartItem"></Link>
     );
}

export default StoreCartItem;