import Storeheader from "../components/Storeheader";
import "../styles/store.scss";
import Storeitem from "../components/Storeitem";

const Storelead = (props) => {
  const { Stores } = props;
  console.log(Stores);
  const T = Stores.filter((e) => e.category === "강아지 목줄");

  return (
    <div className="Store">
      <Storeheader />
      <div className="storeitem">
        {T.map((store) => {
          return <Storeitem key={store.id} store={store} />;
        })}
      </div>
    </div>
  );
};

export default Storelead;
