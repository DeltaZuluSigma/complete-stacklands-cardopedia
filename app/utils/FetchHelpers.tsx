import Link from "next/link";

import cards from "../data/Cards.json";
import details from "../data/Details.json";

const shortList = [];

// ValidateCard - Validates that the card exists
export function ValidateCard(target:string) {
    return Object.keys(cards).some(category => {
        return cards[category].some(card => target == card["image-id"]);
    });
}

// FetchCardDetails - Fetches the details object of the card/image id
export function FetchCardDetails(target:string) {
    let targetCard;

    details.some(card => {
        if (target == card["card-id"]) {
            targetCard = card;
            return true;
        }
        return false;
    });

    return targetCard;
}

// InternalLink - Converts the quoted card/image id into its respective
export function InternalLink({textLine}) {
    if (!textLine.includes("\"")) return textLine;

    const disassembled = textLine.split("\"");
    const fetches = new Map();
    const output = [];

    for (let i = 1; i < disassembled.length; i += 2) {
         fetches.set(disassembled[i],"");
    }

    // Fetch card name
    const searchResult = Object.keys(cards).some(category => {
        return cards[category].some(card => {
            if (fetches.has(card["image-id"])) {
                fetches.set(card["image-id"],card["card-title"]);
            }

            // Exit condition
            let endSearch = false;
            fetches.values().some((val,idx) => {
                if (val.length == 0) {
                    return true;
                }
                else if (idx == fetches.size - 1 && val.length > 0) {
                    endSearch = true;
                    return true;
                }
            });
            return endSearch;
        });
    });

    // Empty result fill
    if (!searchResult) {
        fetches.forEach((val,key) => {
            if (val.length == 0) {
                fetches.set(key,key+"*");
            }
        });
    }

    // Output
    for (let i = 0; i < disassembled.length; i++) {
        if (i % 2 == 0) {
            output.push(disassembled[i]);
        }
        else {
            output.push(
                <Link href={`?card=${disassembled[i]}`}>{fetches.get(disassembled[i])}</Link>
            );
        }
    }
    return (
        <>
            {output}
        </>
    );
}