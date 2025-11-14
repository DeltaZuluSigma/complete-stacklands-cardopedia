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
    // noNLBullet; endSpace; noLeadBullet
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