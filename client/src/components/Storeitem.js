import { Link } from "react-router-dom";
import "../styles/storeitem.scss";
const Storeitem = (props) => {
  const { store } = props;

  return (
    <div className="Storeitem">
      <Link to={"/store/" + store.title}>
        <div>
          <img src={store.image} className="Storeitemimg" />
        </div>
      </Link>
      <div className="Storeitemh1"> {store.title}</div>
      <div className="Storeitemh1"> {store.price}원</div>
    </div>
  );
};
export default Storeitem;
