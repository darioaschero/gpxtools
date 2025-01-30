import { auth } from "@/app/lib/auth";
import LoginButton from "@/app/components/LoginButton";
import ActivityConverter from "@/app/components/ActivityConverter";

export default async function Home() {
  const session = await auth();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="max-w-2xl w-full space-y-8">
        <h1 className="text-4xl font-bold text-center">
          Strava GPX Converter
        </h1>
        {!session ? (
          <LoginButton />
        ) : (
          <ActivityConverter />
        )}
      </div>
    </main>
  );
}
