import cards from "../data/Cards.json";
import details from "../data/Details.json";
import { FetchImageId } from "./GenericHelpers";

// ValidateCard - Validates that the card exists
export function ValidateCard( target:string ) {
    return Object.keys(cards).some(category => {
        return cards[category].some(card => target == FetchImageId(card));
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
        categories.pop();
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
    // Tag context
    else if (conText.startsWith('#')) {
        return cards[category].filter(card => {
            if (card.tag && (update == "everything" || card.update == update)) {
                let noTag = true;
                const searchTag = conText.substring(1);

                for (let i = 0; i < card.tag.length; i++) {
                    if (card.tag[i].startsWith(searchTag)) {
                        return true;
                    }
                }

                if (noTag) return false;
            }
            return false;
        }).length;
    }
    // Name context
    else {
        return cards[category].filter(card =>
            (update == "everything" || card.update == update) &&
            card.name.toLowerCase().indexOf(conText.toLowerCase()) !== -1
        ).length;
    }
}