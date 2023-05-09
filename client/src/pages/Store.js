import Storeheader from "../components/Storeheader";
import "../styles/store.scss";
import Storeitem from "../components/Storeitem";

const Store = (props) => {
  const { Stores } = props;
  return (
    <div className="Store">
      <Storeheader />
      <div className="storeitem">
        {Stores.map((store) => {
          return <Storeitem key={store.id} store={store} />;
        })}
      </div>
    </div>
  );
};
export default Store;
