import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import cards from "../data/Cards.json";
import { ContextCount } from "../utils/FetchHelpers";
import { IMG_PREFIX } from "../utils/GenericHelpers";

export default function CardList({ update, searchText }) {
    const categories = Object.keys(cards);
    const list = [];
    
    // Loop through card categories
    categories.forEach( cate => {
        const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

        const toggleCollapsible = () => {
            setIsCollapsed(!isCollapsed);
        };

        list.push(
            <Link key={cate} href="#" className="card-list-item category" onClick={toggleCollapsible}>
                {`${Capitalize(cate)} (${ContextCount(update,cate,searchText)}/${ContextCount(update,cate)})`}
                <Image
                    src={`${IMG_PREFIX}/ui/${isCollapsed ? "plus" : "minus"}.png`}
                    alt="collapse icon"
                    className="right icon"
                    width={90}
                    height={90}
                />
            </Link>
        );

        // Loop through cards per category
        const wrapper = [];

        cards[cate].forEach(card => {
            if (update != "everything" && update != card.update) return;
            if (card.name.toLowerCase().indexOf(searchText.toLowerCase()) === -1) return;

            let interm = [];

            // Handle inline icons
            if (card.name.endsWith("\"")) {
                interm.push(
                    <>
                        {`• ${card.name.substring(0,card.name.indexOf("\"")-1)}`}
                        <Image
                            src={`${IMG_PREFIX}/ui/dark_dollar.png`}
                            alt="dollar"
                            className="inline icon"
                            width={256}
                            height={256}
                        />
                    </>
                );
            }
            else {
                interm.push(
                    <>
                        {`• ${card.name}`}
                    </>
                );
            }

            // Card Output
            wrapper.push(
                <Link
                    key={card["image-id"]}
                    href={`?${update != "everything" ? "update="+update+"&" : ""}card=${card["image-id"]}`}
                    className="card-list-item ind-card">
                    {interm}
                    <Image
                        src={`${IMG_PREFIX}/ui/list_update_${card.update}.png`}
                        alt={`${card.update} icon`}
                        className="right icon"
                        width={256}
                        height={256}
                    />
                </Link>
            );
        });

        // Populated category check
        if (wrapper.length > 0) {
            list.push(
                <div key={`${cate}wrapper`} className={`collapsible-content ${isCollapsed ? "" : "open"}`}>
                    {wrapper}
                </div>
            );
        }
        else {
            list.pop();
        }
    });
    
    return (
        <div className="card-list">
            {list}
        </div>
    );
}

// Capitalize - Handle capitalizing category & 1 edge case
function Capitalize(text:string) {
    const words = text.split(" ");

    words.forEach((word:string, idx:number) => {
        words[idx] = words[idx] == "n" ? "&" : word.charAt(0).toUpperCase() + word.substring(1);
    });

    return words.join(" ");
}
