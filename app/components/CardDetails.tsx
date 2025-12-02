import Image from "next/image";

import { FetchCardDetails } from "../utils/FetchHelpers";
import { IMG_PREFIX, Capitalize, UnpackNewline, DecodeCEText } from "../utils/GenericHelpers";
import Collapsible from "./Collapsible";
import ConvertLink from "./ConvertLink";

export default function CardDetails({ cardID }) {
    const selectedCard = FetchCardDetails(cardID);
    const fields = Object.keys(selectedCard);
    const allDetails = [];

    // Handle card fields
    fields.forEach( field => {
        switch (field) {
            case "flavour-text":    // Flavour Text
                allDetails.push(UnpackNewline(selectedCard[field],FTCurrencyIcons,2));

                break;
            case "combat-text":
            case "equip-text":      // Combat/Equip Text
                const italicsText = DecodeCEText(selectedCard[field], field);

                for (let i = 0; i < italicsText.length; i++) {
                    const space = italicsText[i].endsWith("\n") || i == italicsText.length - 1 ? "space-after" : "";

                    allDetails.push(
                        <p key={`${field}-${i}`} className={`italics ${space}`}>
                            {italicsText[i].trimEnd()}
                        </p>
                    );
                }

                break;
            case "text-ref":        // Text Reference
                const leechCard = FetchCardDetails(selectedCard[field]);
                const addField = Object.keys(leechCard).includes("combat-text") ? "combat-text" :
                    Object.keys(leechCard).includes("equip-text") ? "equip-text" : undefined;

                allDetails.push(
                    <p key={`${field}-flavour-text`} className="space-after">
                        {`\"${leechCard["flavour-text"]}${addField ? "" : "\""}`}
                    </p>
                );

                if (addField) {
                    for (let i = 0; i < leechCard[addField].length; i++) {
                        const space = leechCard[addField][i].endsWith("\n") || i == leechCard[addField].length - 1 ?
                            "space-after" : "";

                        allDetails.push(
                            <p key={`${field}-${addField}-${i}`} className={space}>
                                {leechCard[addField][i].trimEnd()}
                                {i == leechCard[addField].length - 1 ? "\"" : ""}
                            </p>
                        );
                    }
                }
                
                break;
            case "extra-text":      // Extra Text
                allDetails.push(
                        <p key={field} className="underline">
                            Mooore
                        </p>
                );

                selectedCard[field].forEach(ele => {
                    allDetails.push(UnpackNewline(ele,ConvertLink,6));
                });

                break;
            case "drops":
            case "recipe":
            case "sources":
            case "uses":            // Drops; Recipe; Sources; Uses
                const collContent = [];

                selectedCard[field].forEach(line => {
                    collContent.push(UnpackNewline(line,ConvertLink,5));
                });

                allDetails.push(
                    <Collapsible
                        key={field}
                        header={Capitalize(field)}
                        content={collContent}
                    />
                );
                break;
        }
    });

    return (
        <div className="card-detail">
            {allDetails}
        </div>
    );
}

function FTCurrencyIcons( line:string ) {
    if (!line.includes('\"')) return line;
    if (!line.includes('_icon')) return ConvertLink(line);

    const sep = line.split('\"');
    
    return (
        <>
            {sep[0]}
            <Image
                src={`${IMG_PREFIX}/ui/${sep[1]}.png`}
                alt={sep[1]}
                className="inline icon"
                width={256}
                height={256}
            />
            {sep[2]}
        </>
    );
}