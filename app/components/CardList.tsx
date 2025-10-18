import Link from "next/link";
import Image from "next/image";

import cards from "../data/Cards.json";

export default function CardList() {
    const categories = Object.keys(cards);
    const list = [];
    
    // Loop through card categories
    categories.forEach( cate => {
        list.push(
            <Link key={cate} href="#" className="card-list-item category">
                {`${Capitalize(cate)} (X/${cards[cate].length})`}
                <Image
                    src="/ui/minus.png"
                    alt="collapse icon"
                    className="right icon"
                    width={90}
                    height={90}
                />
            </Link>
        );

        // Loop through cards per category
        cards[cate].forEach(card => {
            const interm = [];

            // Handle inline icons
            if (card["card-title"].endsWith("\"")) {
                interm.push(
                    <>
                        {`• ${card["card-title"].substring(0,card["card-title"].indexOf("\"")-1)}`}
                        <Image
                            src="/ui/dark_dollar.png"
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
                        {`• ${card["card-title"]}`}
                    </>
                );
            }

            // Card Output
            list.push(
                <Link key={card["image-id"]} href="#" className="card-list-item ind-card">
                    {interm}
                    <Image
                        src={`/ui/list_update_${card.update}.png`}
                        alt={`${card.update} icon`}
                        className="right icon"
                        width={256}
                        height={256}
                    />
                </Link>
            );
        });
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
