'use client'
import { useState } from "react";
import { useSearchParams } from "next/navigation";

import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import TagsToolTip from "./TagsTooltip";
import CardList from "./CardList";
import { ContextCount } from "../utils/FetchHelpers";

export default function Sidebar() {
    const sParams = useSearchParams();
    const update = sParams.has("update") ? sParams.get("update") : "everything";

    const [searchText, setSearchText] = useState(sParams.has("search") ? sParams.get("search") : "");
    const [toolTipVisible, setToolTipVisible] = useState(false);

    const handleTTVisibility = () => { setToolTipVisible(!toolTipVisible); };

    return (
        <div className="sidebar">
            <h1>CARDOPEDIA</h1>
            <Navbar selected={update} />
            
            <p className="card-count">{ContextCount(update)} Total Cards</p>

            <SearchBar searchText={searchText} onSearchTextChange={setSearchText} onTagsClick={handleTTVisibility} />
            <TagsToolTip visibility={toolTipVisible} />
            <CardList update={update} searchText={searchText}/>
        </div>
    );
}