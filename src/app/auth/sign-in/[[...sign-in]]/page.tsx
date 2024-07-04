import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="w-full h-screen justify-center flex items-center">
      <SignIn appearance={{
      }} />
    </div>
  );
}