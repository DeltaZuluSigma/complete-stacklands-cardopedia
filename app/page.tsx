import { Suspense } from "react";
import Link from "next/link";

import Sidebar from "./components/Sidebar";
import DisplayCard from './components/DisplayCard';

export default function HomePage({
  searchParams,
}:{
  searchParams: Promise<{card?: string}>
}) {
  return (
    <>
      <main>
        <Sidebar />
        <Suspense>
          <DisplayCard searchParams={searchParams} />
        </Suspense>
      </main>
      <footer>
        <p>
          Thanks to: <Link href="https://sokpop.co/">sokpop</Link> for making <Link href="https://store.steampowered.com/app/1948280/Stacklands/">Stacklands</Link>,
          the Stacklands' mod community and Stacklands' wiki contributers for documenting the game.
        </p>
      </footer>
    </>
  );
}