import Storeheader from "../components/Storeheader";
import "../styles/store.scss";
import Storeitem from "../components/Storeitem";

const Storesnack = (props) => {
  const { Stores } = props;
  console.log(Stores);
  const snack = Stores.filter((e) => e.category === "강아지 간식");

  return (
    <div className="Store">
      <Storeheader />
      <div className="storeitem">
        {snack.map((store) => {
          return <Storeitem key={store.id} store={store} />;
        })}
      </div>
    </div>
  );
};

export default Storesnack;
