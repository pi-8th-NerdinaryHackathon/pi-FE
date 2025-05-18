// src/utils/api.ts
import { uuidv4 } from "@/utils/uuidv4";
import axios, { type InternalAxiosRequestConfig } from "axios";
import { getUser } from "./getUser.api";
const BASE_URL = import.meta.env.VITE_API_BASE_URL as string;

export const baseAPI = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

// 유저 생성/조회만 담당: 동기적으로 ID string 반환
function getOrCreateUserID(): string {
  let userID = sessionStorage.getItem("userID");
  if (!userID) {
    userID = uuidv4();
    sessionStorage.setItem("userID", userID);
  }
  return userID;
}

{
  // 인터셉터를 async로 바꿔서, 최초 한 번만 getUser() API 호출
  baseAPI.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
      const hasID = !!sessionStorage.getItem("userID");
      const userID = getOrCreateUserID();

      // 최초 생성 시에만 서버로 사용자 세션 등록
      if (!hasID) {
        try {
          await getUser(); // 이제 Promise를 await으로 안전하게 처리
        } catch (err) {
          console.error("getUser 실패", err);
        }
      }

      // 헤더 세팅
      (config.headers as Record<string, string>)["X-USER-ID"] = userID;
      return config;
    },
    (error) => Promise.reject(error),
  );
}
