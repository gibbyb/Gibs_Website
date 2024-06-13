import { Button } from "~/components/ui/button";
import { SignInQuick } from "~/app/_components/ui/sign_in_quick_settings";
import { CiPower } from "react-icons/ci";
import { AiFillSound } from "react-icons/ai";
import { FaNetworkWired } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"

export function Quick_Settings() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="border-none" asChild>
        <Button
          className="bg-black text-white hover:bg-gray-700 rounded-full"
          >
          <FaNetworkWired className="w-5 h-5 mx-2" />
          < AiFillSound className="w-5 h-5 mx-2" />
          < CiPower className="w-5 h-5 ml-1" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="rounded-3xl">
        <div className="flex flex-col p-2">
          <div className="flex flex-row items-center justify-between">
            <DropdownMenuItem className="rounded-full bg-gray-800 mr-10 ml-2">
              <IoIosSettings className="w-8 h-8" />
            </DropdownMenuItem>
            <DropdownMenuItem className="rounded-full bg-gray-800 ml-2">
              < SignInQuick />
            </DropdownMenuItem>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
