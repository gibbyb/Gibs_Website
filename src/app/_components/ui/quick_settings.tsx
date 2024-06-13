import { Button } from "~/components/ui/button";
import { SignInGH } from "~/app/_components/auth/sign_in_gh";
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
            <DropdownMenuItem className="rounded-full bg-gray-800 w-20 h-20 justify-center">
              <SignInGH />
            </DropdownMenuItem>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
