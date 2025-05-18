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
// 2) getUser 재시도 래퍼
async function ensureUserRegistered(maxRetries = 3, delayMs = 500) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      await getUser();
      return; // 성공하면 바로 반환
    } catch (err) {
      console.warn(`getUser 실패 (시도 ${attempt}/${maxRetries})`, err);
      if (attempt === maxRetries) {
        console.error("getUser가 최대 시도 횟수만큼 실패했습니다.");
        return; // 혹은 throw err; 로 애플리케이션 레벨에서 핸들링
      }
      // 지연 후 재시도 (단순 선형 백오프)
      await new Promise((res) => setTimeout(res, delayMs * attempt));
    }
  }
}

{
  // 인터셉터를 async로 바꿔서, 최초 한 번만 getUser() API 호출
  baseAPI.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
      const hasID = !!sessionStorage.getItem("userID");
      const userID = getOrCreateUserID();

      // 최초 생성 시에만 서버로 사용자 세션 등록
      if (!hasID) {
        await ensureUserRegistered(/*maxRetries*/ 3, /*initialDelayMs*/ 500);
      }

      // 헤더 세팅
      (config.headers as Record<string, string>)["X-USER-ID"] = userID;
      return config;
    },
    (error) => Promise.reject(error),
  );
}
