import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <p>This is Header</p>
      <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
    </div>
  );
}
