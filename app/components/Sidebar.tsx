// import cards from "../data/Cards.json";

import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import CardList from "./CardList";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <h1>CARDOPEDIA</h1>
            <Navbar/>
            <p className="card-count"># Total Cards</p>
            <SearchBar/>
            <CardList/>
        </div>
    );
}