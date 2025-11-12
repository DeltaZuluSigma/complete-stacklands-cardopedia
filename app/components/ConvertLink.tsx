import Link from "next/link";

import cards from '../data/Cards.json';
import refs from '../data/References.json';

// ConvertLinks - Converts quoted text into their respective link with JSON references
export default function ConvertLinks(
    { convertLine }: { convertLine:string }
) {
    if (!convertLine.includes("\"")) return convertLine;

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
                fetches.set(card["image-id"],card["name"]);
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