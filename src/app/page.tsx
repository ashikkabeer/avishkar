import Image from "next/image";
import { Globe } from "@/components/world";
export default function Home() {
  return (
    <main className="w-screen max-w-screen overflow-x-hidden">
      <div className="">
        <div className="title">
          <h1>Avishkar</h1>
        </div>
        <div className="animate">
          <Globe />
        </div>
      </div>
    </main>
  );
}
