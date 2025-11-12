import cards from "../data/Cards.json";
import details from "../data/Details.json";

// ValidateCard - Validates that the card exists
export function ValidateCard( target:string ) {
    return Object.keys(cards).some(category => {
        return cards[category].some(card => target == card["image-id"]);
    });
}

// FetchCardDetails - Fetches the details object of the card/image id
export function FetchCardDetails( target:string ) {
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

// ContextCount - Counts the number of cards given the update and category/text
export function ContextCount( update:string, category:string = "", conText:string = "" ) {
    // Update context
    if (category.length == 0) {
        const categories = Object.keys(cards);
        let count = 0;

        categories.forEach(c => {
            count += cards[c].filter(card => update == "everything" || card.update == update).length;
        });

        return count;
    }
    // Category context
    else if (conText.length == 0) {
        return cards[category].filter(card => update == "everything" || card.update == update).length;
    }
    // Name context
    else {
        return cards[category].filter(card =>
            (update == "everything" || card.update == update) &&
            card.name.toLowerCase().indexOf(conText.toLowerCase()) !== -1
        ).length;
    }
}