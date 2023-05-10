import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "./app-config";
import { useNavigate } from "react-router-dom";
import { getData } from "../store/mainReducer";
import { ChatBot } from "../components/ChatBot";

export const ChatBotContainer = () => {
  return <ChatBot />;
};
