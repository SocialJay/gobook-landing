import { Button } from "../ui/Button/Button";

export default function Navigation() {
  return (
    <div className="flex justify-between w-[311px] sm:w-full h-[56px] sm:max-w-[798px] py-2">
      <div className="flex flex-row items-center gap-1 px-3 py-1 h-[40px]">
        <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[19px] h-[16px] text-[#FFFFFF]">
          <path d="M12.901 12.8L9.5 10.5L6.099 12.8L7.125 8.68L3.9995 6L8.037 5.74L9.5 1.8L10.963 5.74L15.0005 6L11.875 8.68M17.1 8C17.1 7.46957 17.3002 6.96086 17.6565 6.58579C18.0128 6.21071 18.4961 6 19 6V2C19 1.46957 18.7998 0.960859 18.4435 0.585786C18.0872 0.210714 17.6039 0 17.1 0H1.9C1.39609 0 0.912816 0.210714 0.556497 0.585786C0.200178 0.960859 0 1.46957 0 2V6C0.503911 6 0.987184 6.21071 1.3435 6.58579C1.69982 6.96086 1.9 7.46957 1.9 8C1.9 8.53043 1.69982 9.03914 1.3435 9.41421C0.987184 9.78929 0.503911 10 0 10V14C0 14.5304 0.200178 15.0391 0.556497 15.4142C0.912816 15.7893 1.39609 16 1.9 16H17.1C17.6039 16 18.0872 15.7893 18.4435 15.4142C18.7998 15.0391 19 14.5304 19 14V10C18.4961 10 18.0128 9.78929 17.6565 9.41421C17.3002 9.03914 17.1 8.53043 17.1 8Z" fill="white"/>
        </svg>
        <span className="web-subheadline text-[#FFFFFF] font-medium text-[14px]">Beta</span>
      </div>
      
      <Button
        hierarchy="secondary"
        onClick={() => (window.location.href = "https://app.gobook.lk/auth")}
      >
        Sign in
      </Button>
    </div>
  );
}
