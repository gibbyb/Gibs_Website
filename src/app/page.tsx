import Link from "next/link";
import { auth } from "~/auth";
import { SignInGH } from "~/app/_components/auth/sign_in_gh";

export default async function HomePage() {
  const session = await auth();
  if (!session) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-none text-white">
        <h1 className="flex flex-col text-white text-5xl pb-10 text-center">
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
      <main className="flex min-h-screen flex-col items-center justify-center bg-none text-white">
      </main>
    );
  }
}
