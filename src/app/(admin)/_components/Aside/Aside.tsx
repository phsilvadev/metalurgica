import Image from "next/image";
import LogoAdmin from "@public/logo.svg";

const Aside = () => {
  const MenusOptions = [
    {
      name: "",
      url: "",
      icon: "",
    },
  ];

  return (
    <div className="w-44 bg-[#fff] h-screen border-r">
      <div className="w-full flex justify-center items-center mt-2">
        <Image src={LogoAdmin} alt="logo admin" width={130} height={130} />
      </div>
      <div className="flex h-16 items-center border-b border-border px-2">
        <div className="flex w-full items-center justify-between rounded-md px-2 py-1 hover:bg-slate-200 mt-3 cursor-pointer">
          <div className="flex items-center">
            <div className="w-[36px] h-[36px] rounded-[100px] bg-[red] me-2"></div>
            <div className="flex flex-col">
              <span className="text-sm font-medium">Pedro</span>
              <span className="text-xs text-muted-foreground">Agent Admin</span>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-chevron-down"
          >
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </div>
      </div>
      <nav className="flex flex-grow flex-col gap-y-1 p-2">
        <a
          className="flex items-center rounded-md px-2 py-1.5 hover:bg-slate-200  bg-[#e7edf5]"
          href="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-gauge mr-2 text-slate-800 "
          >
            <path d="m12 14 4-4"></path>
            <path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
          </svg>
          <span className="text-sm text-slate-700">Dashboard</span>
        </a>
        <a
          className="flex items-center rounded-md px-2 py-1.5 hover:bg-[#e7edf5]  bg-transparent"
          href="/ticket"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-messages-square mr-2 text-slate-800 "
          >
            <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2z"></path>
            <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path>
          </svg>
          <span className="text-sm text-slate-700">Ticket</span>
        </a>
      </nav>
    </div>
  );
};

export default Aside;
