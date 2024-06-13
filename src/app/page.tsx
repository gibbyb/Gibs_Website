import Link from "next/link";
import { auth } from "~/auth";
import { SignInGH } from "~/app/_components/auth/sign_in_gh";

export default async function HomePage() {
  const session = await auth();
  if (!session) {
    return (
      <main className="flex flex-col bg-none text-white w-full h-1/2 items-center my-auto">
        <h1 className="flex flex-col text-white text-6xl pb-10 text-center">
        <div className="py-4">
          {new Date().toDateString()}
        </div>
        <div className="py-4">
          {new Date().toLocaleTimeString()}
        </div>
        </h1>
        < SignInGH />
      </main>
    );
  } else {
    return (
      <main className="flex min-h-screen flex-col bg-none text-white">
      </main>
    );
  }
}
