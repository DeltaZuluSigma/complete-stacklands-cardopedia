import Image from "next/image";

import { IMG_PREFIX } from "../utils/GenericHelpers";

export default function SearchBar({ searchText, onSearchTextChange, onTagsClick }) {
    return (
        <form className="search-area">
            <input
                type="text"
                value={searchText}
                placeholder="Search"
                onChange={(ele) => onSearchTextChange(ele.target.value)}
                className="search-bar"
            />
            <Image
                src={`${IMG_PREFIX}/ui/disc_tags.png`}
                alt="tags tooltip"
                className="icon tags-trigger"
                width={58}
                height={58}
                onClick={onTagsClick}
            />
        </form>
    );
}