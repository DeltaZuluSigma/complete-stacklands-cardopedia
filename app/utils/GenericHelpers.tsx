const IMG_PREFIX = process.env.NEXT_PUBLIC_BASE_PATH || '';
export { IMG_PREFIX };

// Capitalize - Handle capitalizing category & 1 edge case
export function Capitalize( text:string ) {
    const words = text.split(" ");

    words.forEach((word:string, idx:number) => {
        words[idx] = words[idx] == "n" ? "&" : word.charAt(0).toUpperCase() + word.substring(1);
    });

    return words.join(" ");
}

// UnpackNewline - Unpacks newline character separated text
export function UnpackNewline(
    text:string,
    postProcessor:Function = (x)=>{return x},
    noNLBullet:boolean = false,
    endSpace:boolean = false
) {
    const out = [];

    if (text.includes("\n")) {
        const unpacked = text.split("\n");
        
        for (let i = 0; i < unpacked.length; i++) {
            out.push(
                <p key={`newline-sub-${i}`} className={endSpace && (i == unpacked.length - 1) ? "space-after" : ""}>
                    {postProcessor(unpacked[i])}
                </p>
            );
        }
    }
    else {
        out.push(
            <p key={`newline-none`} className={endSpace ? "space-after" : ""}>
                {noNLBullet ? "• " : ""}{postProcessor(text)}
            </p>
        );
    }

    return out;
}