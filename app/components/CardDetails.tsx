import { FetchCardDetails } from "../utils/FetchHelpers";
import { Capitalize, UnpackNewline } from "../utils/GenericHelpers";
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
                allDetails.push(UnpackNewline(selectedCard[field],undefined,false,true));

                break;
            case "combat-text":
            case "equip-text":      // Combat/Equip Text
                allDetails.push(
                    <HandleItalics key={field} cardText={selectedCard[field]} toggleItalics="italics" />
                );

                break;
            case "text-ref":        // Text Reference
                const leechCard = FetchCardDetails(selectedCard["text-ref"]);
                const closeQuote = Object.keys(leechCard).includes("combat-text") ||
                    Object.keys(leechCard).includes("equip-text") ? "" : "\"";

                allDetails.push(
                    <p key={"clone-flavour-text"} className="space-after">
                        {`\"${leechCard["flavour-text"]}${closeQuote}`}
                    </p>
                );

                if (!closeQuote.length) {
                    allDetails.push(
                        <HandleItalics key={field+"end"} cardText={selectedCard[field]} toggleItalics="" />
                    );
                }
                
                break;
            case "extra-text":      // Extra Text
                allDetails.push(
                        <p key={field} className="underline">
                            Mooore
                        </p>
                );

                selectedCard[field].forEach(( ele, idx ) => {
                    allDetails.push(
                        <p key={`${field}-${idx}`} className="space-after">
                            {ConvertLink(ele)}
                        </p>
                    );
                });

                break;
            case "drops":
            case "recipe":
            case "sources":
            case "uses":            // Drops; Recipe; Sources; Uses
                const collContent = [];

                selectedCard[field].forEach(line => {
                    collContent.push(UnpackNewline(line,ConvertLink,true));
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