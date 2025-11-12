import Link from "next/link";
import Image from "next/image";

import cards from "../data/Cards.json";
import { ContextCount } from "../utils/FetchHelpers";
import { IMG_PREFIX, Capitalize } from "../utils/GenericHelpers";
import Collapsible from "./Collapsible";

export default function CardList({ update, searchText }) {
    const categories = Object.keys(cards);
    const list = [];
    
    // Loop through card categories
    categories.forEach( cat => {
        const catHeader = `${Capitalize(cat)} (${ContextCount(update,cat,searchText)}/${ContextCount(update,cat)})`;
        const catContent = CContentCards(update,cat,searchText);

        if (catContent.length > 0) {
            list.push(
                <Collapsible key={`${cat}-collapsible`} header={catHeader} content={catContent} />
            );
        }
    });
    
    return (
        <div className="card-list">
            {list}
        </div>
    );
}

// CContentCards - Produces the cards that are within the given category, update, and/or containing the search text
function CContentCards( update:string, category:string, searchText:string ) {
    const visibleCards = [];
    cards[category].forEach(card => {
        // Same update check
        if (update != "everything" && update != card.update) return;
        // Tag check
        if (searchText.startsWith('#') && card.tag) {
            let noTag = true;
            const searchTag = searchText.substring(1);

            for (let i = 0; i < card.tag.length; i++) {
                if (card.tag[i].startsWith(searchTag)) {
                    noTag = false;
                    break;
                }
            }

            if (noTag) return;
        }
        else {
            // Containing search text check
            if (card.name.toLowerCase().indexOf(searchText.toLowerCase()) === -1) return;
        }

        // Add card
        visibleCards.push(
            <Link
                key={card["image-id"]}
                href={`?${update != "everything" ? "update="+update+"&" : ""}card=${card["image-id"]}`}
                className="card-block"
            >

                {DollarCheck(card.name)}

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

    return visibleCards;
}

// DollarCheck - Replaces "dollar" for its respective icon
function DollarCheck( cardName:string ) {
    if (cardName.endsWith("\"")) {
        return (
            <>
                {`• ${cardName.substring(0,cardName.indexOf("\"")-1)}`}
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
        return (
            <>
                {`• ${cardName}`}
            </>
        );
    }
}