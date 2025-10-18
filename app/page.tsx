import Sidebar from "./components/Sidebar";
import DisplayCard from './components/DisplayCard';
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <main>
        <Sidebar />
        <DisplayCard />
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