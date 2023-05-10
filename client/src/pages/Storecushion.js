import Storeheader from "../components/Storeheader";
import "../styles/store.scss";
import Storeitem from "../components/Storeitem";

const Storecushion = (props) => {
  const { Stores } = props;
  console.log(Stores);
  const cushoin = Stores.filter((e) => e.category === "강아지 쿠션");

  return (
    <div className="Store">
      <Storeheader />
      <div className="storeitem">
        {cushoin.map((store) => {
          return <Storeitem key={store.id} store={store} />;
        })}
      </div>
    </div>
  );
};

export default Storecushion;
