import Link from "next/link";

import cards from '../data/Cards.json';
import { FetchImageId } from "../utils/GenericHelpers";

// BOARDS dictionary
const BOARDS = new Map([
    ["mainland","Mainland"],
    ["island","Island"],
    ["death","World of Death"],
    ["greed","World of Greed"],
    ["sadness","World of Sadness"]
]);

// ConvertLinks - Converts quoted text into their respective link with JSON references
export default function ConvertLinks( convertLine:string ) {
    if (!convertLine.includes("\"")) return convertLine;

    const disassembled = convertLine.split("\"");
    const fetches = new Map();
    const output = [];

    for (let i = 1; i < disassembled.length; i += 2) {
        fetches.set(disassembled[i],"");
    }

    // Fetch card names
    let fills = 0;

    Object.keys(cards).some(category => {
        return cards[category].some(card => {
            if (fetches.has(FetchImageId(card))) {
                fetches.set(FetchImageId(card),card["name"]);
                fills++;
            }

            return fills == fetches.size;
        });
    });

    // Empty result fill
    if (fills != fetches.size) {
        fetches.forEach(( val, key ) => {
            if (key.startsWith("board_")) {
                fetches.set(key,BOARDS.get(key.substring(6)));
            }
            else if (key.startsWith("packs_")) {
                fetches.set(key,BOARDS.get(key.substring(6))+" Packs");
            }
            else {
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
            const linkText = disassembled[i].startsWith("board_") || disassembled[i].startsWith("packs_") ?
                `?search=%23${disassembled[i].substring(6)}` :
                `?card=${disassembled[i]}`;
            
            output.push(
                <Link key={disassembled[i]} href={linkText}>
                    {fetches.get(disassembled[i])}
                </Link>
            );
        }
    }

    return output;
}