import { FetchCardDetails } from "../utils/FetchHelpers";
import { Capitalize } from "../utils/GenericHelpers";

import CollapsibleCategory from "./CollapsibleCategory";

export default function CardDetails({ cardID }) {
    const selectedCard = FetchCardDetails(cardID);
    const fields = Object.keys(selectedCard);
    const sideDetails = [];

    // Handle card fields
    fields.forEach( field => {
        switch (field) {
            case "flavour-text":    // Flavour Text
                sideDetails.push(
                    <p key={field} className="space-after">
                        {selectedCard["flavour-text"]}
                    </p>
                );
                break;
            case "combat-text":
            case "equip-text":      // Combat/Equip Text
                sideDetails.push(
                    <HandleItalics key={field} cardText={selectedCard[field]} toggleItalics="italics" />
                );
                break;
            case "text-ref":        // Text Reference
                const leechCard = FetchCardDetails(selectedCard["text-ref"]);
                const closeQuote = Object.keys(leechCard).includes("combat-text") ||
                    Object.keys(leechCard).includes("equip-text") ? "" : "\"";

                sideDetails.push(
                    <p key={"clone-flavour-text"} className="space-after">
                        {`\"${leechCard["flavour-text"]}${closeQuote}`}
                    </p>
                );

                if (!closeQuote.length) {
                    sideDetails.push(
                        <HandleItalics key={field+"end"} cardText={selectedCard[field]} toggleItalics="" />
                    );
                }
                
                break;
            case "extra-text":      // Extra Text
                sideDetails.push(
                    <>
                        <p className="underline">Mooore</p>
                        <p className="space-after">{selectedCard[field]}</p>
                    </>
                );
                break;
            case "drops":
            case "recipe":
            case "sources":
            case "uses":            // Drops; Recipe; Sources; Uses
                sideDetails.push(
                    <CollapsibleCategory
                        key={`${field}-comp`}
                        category={Capitalize(field)}
                        details={selectedCard[field]}
                    />
                );
                break;
        }
    });

    return (
        <div className="card-detail">
            {sideDetails}
        </div>
    );
}

// HandleItalics - Handle combat/equip text fields
function HandleItalics({ cardText, toggleItalics }) {
    const itl = [];

    for (let i = 0; i < cardText.length; i++) {
        const space = cardText[i].endsWith("\n") || i == cardText.length - 1 ? "space-after" : "";

        itl.push(
            <p key={`combat-text-${i}`} className={`${toggleItalics} ${space}`}>
                {space.length ? cardText[i].trimEnd() : cardText[i]}
                {i == cardText.length - 1 && toggleItalics.length == 0 ? "\"" : ""}
            </p>
        );
    }

    return itl;
}