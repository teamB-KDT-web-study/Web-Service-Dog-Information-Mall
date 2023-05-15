import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getData } from '../store/mainReducer';
import { Training } from '../pages/Training';

export const TrainingContainer = () => {
  const navigate = useNavigate();

  const mostLikeList = useSelector((state) => state.main.data);
  const dispatch = useDispatch();
  useEffect(() => {
    const getMostLikeData = async () => {
      const res = await axios.get(process.env.REACT_APP_DB_HOST + '/getMostLike');
      const data = res.data.map((el) => {
        return {
          id: el.id,
          nickname: el.nickname,
          title: el.title.slice(0, 13),
          body: el.body.slice(0, 50),
          like_count: el.like_count,
          view_count: el.view_count,
        };
      });
      dispatch(getData(data));
    };
    getMostLikeData();
  }, []);
  const onNavigate = (url) => {
    navigate(url);
  };
  return <Training mostLikeList={mostLikeList} onNavigate={onNavigate} />;
};
