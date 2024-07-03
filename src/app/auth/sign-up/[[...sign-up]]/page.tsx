import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="w-full h-screen justify-center flex items-center">
      <SignUp  appearance={{}} />
    </div>
  );
}
