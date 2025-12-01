const CE_CODES = {
    "effects": {
        "CHT": "do a Critical Hit on target",
        "CHR": "do a Critical Hit on random target",
        "CHS": "do a Critical Hit on self",
        "CHA": "do a Critical Hit on all enemies",
        "BLT": "Bleed target",
        "BLS": "Bleed self",
        "HLS": "Heal friendly with lowest health",
        "HAF": "Heal all friendlies",
        "HRF": "Heal random friendly",
        "HSL": "Heal self",
        "FSL": "Frenzy self",
        "FRF": "Frenzy random friendly",
        "SRD": "Stun random enemy",
        "STG": "Stun target",
        "SAL": "Stun all enemies",
        "PTG": "Poison target",
        "PRD": "Poison random enemy",
        "PAL": "Poison all enemies",
        "LST": "Lifesteal from target",
        "LSR": "Lifesteal from random enemy",
        "IRF": "make random friendly Invulnerable",
        "ISL": "make self Invulnerable",
        "DGA": "Damage all enemies",
        "DGR": "Damage random enemy",
        "AXS": "making self Anxious",
        "AXT": "making target Anxious",
        "SKA": "make all enemies Sick"
    },
    "stats":{
        "AT": "Attack Type",
        "AS": "Attack Speed",
        "HC": "Hit Chance",
        "DA": "Damage",
        "DF": "Defense",
        "MH": "Max Health"
    },
    "AT": {
        "ME": "Melee",
        "RG": "Ranged",
        "MG": "Magic",
        "AI": "Air",
        "FT": "Foot",
        "AR": "Armour"
    },
    "AS": {
        1: "Very Slow (3.5s)",
        2: "Slow (2.9s)",
        3: "Normal (2.3s)",
        4: "Fast (1.7s)",
        5: "Very Fast (1.1s)"
    },
    "HC": {
        1: "Very Small (50%)",
        2: "Small (59%)",
        3: "Normal (68%)",
        4: "High (77%)",
        5: "Very High (86%)",
        6: "Extremely High (95%)"
    },
    "D": {
        1: "Very Weak (1)",
        2: "Weak (2)",
        3: "Normal (3)",
        4: "Strong (4)",
        5: "Very Strong (5)",
        6: "Extremely Strong (6)"
    }
};

const IMG_PREFIX = process.env.NEXT_PUBLIC_BASE_PATH || '';
export { IMG_PREFIX };

// Capitalize - Handle capitalizing category & 1 edge case
export function Capitalize( text:string, delimiter:string = " " ) {
    const words = text.split(delimiter);

    words.forEach((word:string, idx:number) => {
        words[idx] = words[idx] == "n" ? "&" : word[0].toUpperCase() + word.substring(1);
    });

    return words.join(" ");
}

// UnpackNewline - Unpacks newline character separated text
export function UnpackNewline(
    text:string,
    postProcessor:Function = (x)=>{return x},
    encodedFlags:number = 0
) {
    const out = [];

    if (encodedFlags < 0 || encodedFlags > 7) encodedFlags = 0;
    // NLBullet; endSpace; noLeadBullet
    const strFlags = encodedFlags.toString(2).split('').reverse();
    const flags = [strFlags[0] == '1',strFlags[1] == '1',strFlags[2] == '1'];

    if (text.includes("\n")) {
        const unpacked = text.split("\n");
        
        if (flags[2] && !unpacked[0].includes(":")) flags[2] = false;

        for (let i = 0; i < unpacked.length; i++) {
            out.push(
                <p key={`newline-sub-${i}`} className={flags[1] && (i == unpacked.length - 1) ? "space-after" : ""}>
                    {flags[2] && i != 0 ? "• " : ""}
                    {postProcessor(unpacked[i])}
                </p>
            );
        }
    }
    else {
        out.push(
            <p key={`newline-none`} className={flags[1] ? "space-after" : ""}>
                {flags[0] ? "• " : ""}{postProcessor(text)}
            </p>
        );
    }

    return out;
}

// FetchImageId - Converts/fetches the image id for a card
export function FetchImageId( card:object ) {
    if (card["image-id"]) return card["image-id"];
    
    const parts = card["name"].toLowerCase().split(' ');

    if (parts[0].indexOf(':') > -1) parts[0] = parts[0].slice(0,parts[0].length-1);

    return parts.join('_');
}

// DecodeCEText - Decodes combat/equip text in full
export function DecodeCEText( code:string, type:string ) {
    const separated = code.split('|');
    const out = [
        `${type == 'combat-text' ? "Combat" : "Item"} Level ${separated[0]}\n`
    ];

    // Effects condition
    if (separated.length == 3) {
        const effects = separated[1].split(',');

        effects.forEach((effect, idx) => {
            out.push(`${parseInt(effect.slice(3))}% chance to ${CE_CODES.effects[effect.slice(0,3)]}${idx == effects.length - 1 ? '\n' : ''}`);
        });
    }

    // Stats handling
    const stats = separated[separated.length - 1].split(',');

    stats.forEach(stat => {
        let val = "";
        if (type == 'combat-text' || stat.slice(0,2) == 'AT') {
            val = CE_CODES[stat[0] == 'D' ? 'D' : stat.slice(0,2)][stat.slice(2)];
        }
        else {
            val = parseInt(stat.slice(1)) > 0 ? '+'+stat.slice(2) : stat.slice(2);
        }

        out.push(`${CE_CODES.stats[stat.slice(0,2)]}: ${val}`);
    });

    return out;
}

// BinarySearch - Standard binary search
// export function BinarySearch( libName:string, lib:object, targetName:string ) {

// }