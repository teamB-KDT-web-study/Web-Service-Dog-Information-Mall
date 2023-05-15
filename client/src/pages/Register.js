import "../styles/Register.scss";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddMyDog from "../components/AddMyDog";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  // 상태 관리 초기값 세팅
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [nickName, setNickName] = useState("");

  const [imgFile, setImgFile] = useState("");
  const imgRef = useRef();

  // 오류 메세지 전달을 위한 상태값 세팅
  const [idMessage, setIdMessage] = useState("");
  const [pwMessage, setPwMessage] = useState("");
  const [nickNameMessage, setNickNameMessage] = useState("");

  // 유효성 검사하기 위한 세팅
  const [isId, setIsId] = useState(false); // 아이디 중복 검사 포함
  const [isPw, setIsPw] = useState(false);
  const [isNickName, setIsNickName] = useState(false); // 닉네임 중복 검사 포함

  // 조건에 따라 message 값 변경
  const onChangeId = async (e) => {
    // 유효성 검사
    const currentId = e.target.value;
    setId(currentId);
    const idRegExp = /^[a-zA-z0-9]{4,12}$/;
    if (!idRegExp.test(id)) {
      setIdMessage("4-12사이 대소문자 또는 숫자만 입력해 주세요.");
      setIsId(false);
    } else {
      // 아이디 중복 검사
      const CheckId = await axios.post(
        process.env.REACT_APP_DB_HOST + "/member/isExist",
        {
          type: "id",
          inputData: id,
        }
      );
      console.log(CheckId.data);

      if (!CheckId.data.isOk) {
        setIdMessage("중복된 아이디입니다.");
        setIsId(false);
        return false;
      } else {
        setIdMessage("");
        setIsId(true);
      }
    }
  };

  const onChangePw = (e) => {
    const currentPw = e.target.value;
    setPw(currentPw);
    const pwRegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

    if (!pwRegExp.test(currentPw)) {
      setPwMessage("영문자+숫자+특수문자 조합으로 8자리 이상 입력해주세요.");
      setIsPw(false);
    } else {
      setPwMessage("");
      setIsPw(true);
    }
  };
  const onChangeNickName = async (e) => {
    // 닉네임 유효성 검사
    const currentNickName = e.target.value;
    setNickName(currentNickName);

    if (currentNickName.length < 2) {
      setNickNameMessage("닉네임은 2글자 이상으로 입력해주세요.");
      setIsNickName(false);
    } else {
      // 닉네임 중복 검사
      const CheckNickName = await axios.post(
        process.env.REACT_APP_DB_HOST + "/member/isExist",
        {
          type: "nickname",
          inputData: nickName,
        }
      );
      console.log(CheckNickName.data);

      if (!CheckNickName.data.isOk) {
        setNickNameMessage("중복된 닉네임입니다.");
        setIsNickName(false);
      } else {
        setNickNameMessage("");
        setIsNickName(true);
      }
    }
  };

  const [countDogList, setCountDogList] = useState([
    {
      id: 0,
      name: "",
      breed: "",
      gender: "",
      age: "",
      weight: "",
    },
  ]);

  useEffect(() => {
    console.log(countDogList);
  });

  // AddMyDog에 전달하는 함수
  // const [myDogForm, setMyDogForm] = useState();
  // const getMyDogInf = (data) => {
  //   setMyDogForm(data);
  // };

  // 강아지 폼 추가
  const onAddDogForm = () => {
    const newData = {
      id: countDogList.length,
      // list: `나의 ${counts.length + 1}번째 강아지`,
      list: "",
      name: "",
      breed: "",
      gender: "",
      age: "",
      weight: "",
    };
    setCountDogList([...countDogList, newData]);
  };

  // 프로필 이미지 업로드 input의 onChange
  const saveImgFile = (e) => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
    // console.log(e.target.files[0]);
    if (e.target.files) {
      setImgFile(e.target.files[0]);
    }
  };

  // 강아지 폼 삭제 버튼 클릭
  const deleteCountDogList = (targetFormId) => {
    const newCountDogList = countDogList.filter((item) => {
      return item.id !== targetFormId;
    });

    setCountDogList(newCountDogList);
  };

  // register 버튼 클릭 이벤트 (백 전송)
  const onRegister = async () => {
    console.log("------------");
    console.log(imgFile);
    let formData = {}; // back 보낼 데이터 (req.body)

    // countDogList: [ {}, {}, {}, {}, {} ]
    const [dog1, dog2, dog3, dog4, dog5] = countDogList;
    const beforeData = [dog1, dog2, dog3, dog4, dog5]; // array
    // console.log("********************");
    // console.log(beforeData);
    // console.log("********************");
    const afterData = {}; // object

    beforeData.forEach((item, idx) => {
      console.log("item >>>", item);
      console.log("item >>>", typeof item);

      if (item !== "undefined") {
        for (let key in item) {
          // console.log("key >>>", key);
          const value = item[key];
          // console.log(
          //   "afterData[key + (idx + 1)] >>",
          //   afterData[key + (idx + 1)]
          // );
          // console.log("value >>", value);
          afterData[key + (idx + 1)] = value;
        }
      }
    });

    if (dog1) {
      // 강아지 폼 입력하는 경우
      formData = {
        // 사람
        id: id,
        password: pw,
        nickname: nickName,
        file: imgFile,
        // 강아지
        afterData,
      };
    } else {
      // 강아지 폼 입력하지 않는 경우
      formData = {
        // 사람
        id: id,
        password: pw,
        nickname: nickName,
        file: imgFile,
      };
    }

    console.log("**************");
    console.log(afterData);

    const res = await axios.post(
      process.env.REACT_APP_DB_HOST + "/member/signup",
      formData,
      {
        "Content-Type": "multipart/form-data",
      }
    );
    console.log(res.data);
    navigate("/Login"); // 로그인 페이지로 이동

    // TODO: file 관련 state 만들어서 db에 저장할 수 있도록
    // 파일이 있으면 그 파일 이름을 보내고, 파일이 없으면 디폴트 이미지 보내고
    // if (!imgFile) {
    //   return;
    // }
    // fetch(process.env.REACT_APP_DB_HOST + "/member/signup", {
    //   method: "POST",
    //   body: imgFile,
    //   headers: {
    //     "content-type": imgFile.type,
    //     "content-length": `${imgFile.size}`,
    //   },
    // }).then((res) => res.json());
    // onRegister();
  };

  const handleDogForm = (dogInfo, formId) => {
    console.log("dogInfo", dogInfo);
    console.log("formId", formId);

    const newCountDogList = [...countDogList];

    newCountDogList[formId].name = dogInfo.name;
    newCountDogList[formId].breed = dogInfo.breed;
    newCountDogList[formId].gender = dogInfo.gender;
    newCountDogList[formId].age = dogInfo.age;
    newCountDogList[formId].weight = dogInfo.weight;

    // console.log(newCountDogList);

    setCountDogList(newCountDogList);
  };

  useEffect(() => {
    console.log(">>>>>>>>>>", countDogList);
  }, [countDogList]);

  return (
    <>
      <div className="RegisterWrap">
        <form className="RegisterBox">
          <h1>회원가입</h1>
          <form>
            <div className="ImgFormBox">
              <div className="MyProfileImg">
                <img
                  src={
                    imgFile
                      ? imgFile
                      : process.env.PUBLIC_URL + "profile_img/default.jpg"
                  }
                  alt="프로필 이미지"
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                  }}
                />
              </div>
              <div className="MyProfileImgSelect">
                <input
                  type="file"
                  accept="image/*"
                  id="profileImg"
                  onChange={saveImgFile}
                  ref={imgRef}
                  style={{ border: "none" }}
                  className="MyProfileImgSelectinput"
                />
              </div>
            </div>
            <div className="formBox">
              <label htmlFor="loginId">ID</label>

              <input
                className="formBoxlogin"
                type="text"
                name="UserId"
                id="loginId"
                value={id}
                placeholder="ID를 입력해주세요"
                onChange={(e) => {
                  setId(e.target.value);
                }}
                onBlur={onChangeId}
                required
              />

              <p className="message" style={{ color: "red" }}>
                {idMessage}
              </p>
            </div>
            <div className="formBox">
              <label htmlFor="loginPw">PASSWORD</label>

              <input
                type="password"
                name="UserPw"
                id="loginPw"
                placeholder="Password를 입력해주세요"
                onChange={onChangePw}
                required
              />
              <p className="message" style={{ color: "red" }}>
                {pwMessage}
              </p>
            </div>
            <div className="formBox">
              <label htmlFor="loginPw">NiCKNAME</label>

              <input
                type="text"
                name="UserNickName"
                id="nickname"
                placeholder="nickname을 입력해주세요"
                onChange={(e) => {
                  setNickName(e.target.value);
                }}
                onBlur={onChangeNickName}
                required
              />

              <p className="message" style={{ color: "red" }}>
                {nickNameMessage}
              </p>
            </div>
            <h2>강아지 정보</h2>
            <p>최대 5마리까지 등록 가능합니다!</p>
            <div className="RegisterYourDog"></div>

            <div className="formBox">
              <div>
                {countDogList?.map((dog) => (
                  <AddMyDog
                    key={dog.id}
                    dog={dog}
                    deleteCountDogList={deleteCountDogList}
                    handleDogForm={handleDogForm}
                    formId={dog.id}
                  />
                ))}
                <div className="onAddDogFormParent">
                  <button
                    className="onAddDogForm"
                    onClick={onAddDogForm}
                    disabled={countDogList.length > 4} // 강아지 등록 폼 최대 5개까지만
                    type="button"
                  >
                    ➕
                  </button>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="SubmitRegister"
              disabled={!(isId && isPw && isNickName)}
              onClick={onRegister}
            >
              회원가입
            </button>
          </form>
        </form>
      </div>
    </>
  );
};

export default Register;
