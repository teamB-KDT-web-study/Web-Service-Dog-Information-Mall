import Storeheader from "../components/Storeheader";
import "../styles/store.scss";
import Storeitem from "../components/Storeitem";

const Storefood = (props) => {
  const { Stores } = props;
  console.log(Stores);
  const food = Stores.filter((e) => e.category === "강아지 사료");

  return (
    <div className="Store">
      <Storeheader />
      <div className="storeitem">
        {food.map((store) => {
          return <Storeitem key={store.id} store={store} />;
        })}
      </div>
    </div>
  );
};

export default Storefood;
