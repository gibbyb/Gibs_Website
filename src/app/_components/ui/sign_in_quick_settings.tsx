import { signIn, signOut, auth } from "~/auth"
import { CiPower } from "react-icons/ci";
import Image from "next/image";
 
export async function SignInQuick() {
  const session = await auth();
  return (
      <form
        action={async () => {
          "use server";
          await signOut();
        }}>
        <button type="submit">
          <CiPower className="w-8 h-8 pt-1" />
        </button>
      </form>
  );
}
