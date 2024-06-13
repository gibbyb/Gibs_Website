import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"

export function Notifications() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="border-none" asChild>
        <Button className="bg-black text-white hover:bg-gray-700 rounded-full">
          {new Date().toLocaleTimeString()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="rounded-3xl">
        <DropdownMenuItem>
        Hallo
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
