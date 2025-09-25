import logo from "./assets/logo.svg";

export default function App() {
  return (
    <main className="flex flex-col h-screen p-5">
      <img src={logo} width={40} height={40} alt="Logo" className=""/>
      <div className="w-[680px] mx-auto items-center justify-center flex flex-col h-full gap-6">
        <div className="max-h-[37px] items-center flex px-4 pt-3 pb-[11px] rounded-full uppercase text-[#3f8df2] text-[10px] font-black tracking-[0.26em] leading-6 bg-gradient-to-l from-[#f6f6f6] to-[rgba(246,246,246,0.2)]">
          coming soon
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-6xl text-center">
            A new kind of event management app
          </h1>
          <p className="text-xl font-normal text-center text-[#727375]">
            We are changing the way event collaborate remotely in a radically
            new way, Sign up and get early access.
          </p>
        </div>
      </div>
    </main>
  );
}
