import { GoDotFill } from "react-icons/go";
import { Button } from "~/components/ui/button";
import { Quick_Settings } from "~/app/_components/ui/quick_settings";
import { Notifications } from "~/app/_components/ui/notifications";

export function Top_Bar() {
  return (
    <div className="top-bar w-full h-10 flex flex-row bg-black text-white rounded-full m">
      <div className="Workspaces flex w-1/3 justify-start my-auto">
        <Button className="bg-black text-white hover:bg-gray-700 rounded-full">
          <GoDotFill />
          <GoDotFill />
        </Button>
      </div>
      <div className="Notifications flex w-1/3 justify-center my-auto">
        < Notifications />
      </div>
      <div className="Quick_Settings flex w-1/3 justify-end my-auto">
        < Quick_Settings />
      </div>
    </div>
  );
};
