import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="">
      <div>
         <ul>
           <li>
             <Link href="/about">About</Link>
           </li>
         </ul>
      </div>
    </main>
  );
}
