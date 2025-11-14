import { Capitalize } from "../utils/GenericHelpers";

const TAGS = {
    boards: [ "#mainland", "#island", "#death", "#greed", "#sadness", "#cities" ],
    combat: [ "#melee", "#ranged", "#magic", "#head", "#chest" ],
    misc: [
        "#source - Harvestables / Brown Cards",
        "#shiny - Chance of being Shiny",
        "#farming - Related to Farming",
        "#animal - Related to domestic Animals",
        "#power - Power-related",
        "#npc - NPCs",
        "#currency - Currencies"
    ]
};

export default function TagsToolTip({ visibility }) {
    const tagCategories = Object.keys(TAGS);
    const out = [];

    tagCategories.forEach(category => {
        out.push(
            <p key={`tag-header-${category}`} className="underline">
                {Capitalize(category)}
            </p>
        );


        TAGS[category].forEach((fullTag, idx) => {
            const tag = fullTag.split(' ')[0];

            out.push(
                <p key={`tag-${tag}`} className={idx == TAGS[category].length -1 && fullTag.indexOf('-') === -1 ? "space-after" : ""}>
                    {tag}
                </p>
            );

            if (fullTag.indexOf('-') > -1) {
                const desc = fullTag.substring(fullTag.indexOf('-')+1);

                out.push(
                    <p key={`tag-sub-${tag}`} className={`subscript ${idx == TAGS[category].length -1}`}>
                        {desc}
                    </p>
                );
            }
        });
    });

    return (
        <div className={`tags-tooltip ${visibility ? "visible" : ""}`}>
            <h3>TAGS</h3>
            {out}
        </div>
    );
}