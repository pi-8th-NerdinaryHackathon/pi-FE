import {
  getTestHeadServerHelath,
  getServerHelath,
} from "@/apis/getServerHealth.api";

function TestBtn() {
  const handleServerHealth = () => {
    getTestHeadServerHelath();
  };
  return (
    <button
      onClick={() => handleServerHealth()}
      className="h-10 w-20 rounded-2xl bg-black"
    >
      테스트
    </button>
  );
}
export default TestBtn;
