import { SignInGH } from "~/app/_components/auth/sign_in_gh";
import { GoDotFill } from "react-icons/go";
import { CiPower } from "react-icons/ci";
import { AiFillSound } from "react-icons/ai";
import { FaNetworkWired } from "react-icons/fa";
import { Button } from "~/components/ui/button";

export function Top_Bar() {
  return (
    <div className="top-bar w-full h-10 flex flex-row bg-black text-white rounded-full m">
      <div className="Workspaces flex w-1/3 justify-start pl-4 my-auto">
        <Button className="bg-black text-white hover:bg-slate-900 rounded-full">
          <GoDotFill />
          <GoDotFill />
        </Button>
      </div>
      <div className="Notifications flex w-1/3 justify-center my-auto">
        <Button className="bg-black text-white hover:bg-slate-900 rounded-full">
          {new Date().toLocaleTimeString()}
        </Button>
      </div>
      <div className="Quick_Settings flex w-1/3 justify-end my-auto px-4">
        <Button className="bg-black text-white hover:bg-slate-900 rounded-full">
          <FaNetworkWired className="w-5 h-5 mx-2" />
          < AiFillSound className="w-5 h-5 mx-2" />
          < CiPower className="w-5 h-5 ml-1" />
        </Button>
      </div>
    </div>
  );
};
