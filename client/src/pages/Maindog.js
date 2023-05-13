import "../styles/maindog.scss";
import { useNavigate } from "react-router-dom";

const Maindog = () => {
  const navigate = useNavigate();
  return (
    <div className="maindogbox">
      <div class="box dog1">
        <img
          src={process.env.PUBLIC_URL + `/SlickImages/maindog5.png`}
          className="maindog"
          onClick={() => navigate("/mydog/mydoginfo")}
        />
      </div>
      <div class="box men">
        <img
          src={process.env.PUBLIC_URL + `/SlickImages/maindog4.png`}
          className="maindog"
        />
      </div>
      <div class="box text1"></div>
      <div class="box text2"></div>
      <div class="box heart">
        <img
          src={process.env.PUBLIC_URL + `/SlickImages/maindog7.png`}
          className="maindog"
        />
      </div>
    </div>
  );
};

export default Maindog;
