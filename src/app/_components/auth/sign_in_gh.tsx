import { signIn, signOut, auth } from "~/auth"
import Image from "next/image";
 
export async function SignInGH() {
  const session = await auth();
  if (session) {
    return (
      <div className="">
        <form className="" 
          action={async () => {
            "use server";
            await signOut();
          }}>
          <button className="" type="submit">
            <div className="flex flex-col items-center">
              <Image
                className="rounded-full"
                src={session.user?.image ? session.user.image : ""}
                alt="Profile Picture"
                width={50} height={50}
              />
              <div>Sign Out</div>
            </div>
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <form className="" 
        action={async () => {
          "use server";
          await signIn("github");
        }}>
        <button className="" type="submit">
          <div className="flex flex-col items-center">
            <Image
              className="rounded-full"
              src="/images/github-mark-white.svg"
              alt="GitHub"
              width={50} height={50}
            />
            <div>Sign In</div>
          </div>
        </button>
      </form>
    );
  }
}
