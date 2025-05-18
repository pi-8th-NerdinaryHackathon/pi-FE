// src/utils/api.ts
import { uuidv4 } from "@/utils/uuidv4";
import axios, { type InternalAxiosRequestConfig } from "axios";
import { postUser } from "./postUser.api";
const BASE_URL = import.meta.env.VITE_API_BASE_URL as string;

export const baseAPI = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

// 1. userID 생성/조회 함수: 반드시 string 반환
async function getOrCreateUserID(): Promise<string> {
  let userID = sessionStorage.getItem("userID");
  if (!userID) {
    userID = uuidv4();
    sessionStorage.setItem("userID", userID);
  }
  return userID;
}

{
  // 2. interceptor 등록: config 받아서 헤더 추가 → config 반환
  baseAPI.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const userID = getOrCreateUserID();
    // headers가 undefined일 때도 안전하게 set
    (config.headers as Record<string, any>)["X-USER-ID"] = userID;
    // X-USER-ID 헤더 추가
    config.headers["X-USER-ID"] = userID;

    return config;
  });
}
