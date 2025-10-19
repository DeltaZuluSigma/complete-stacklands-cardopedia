const IMG_PREFIX = process.env.NEXT_PUBLIC_BASE_PATH || '';
export { IMG_PREFIX };

// Capitalize - Handle capitalizing category & 1 edge case
export function Capitalize(text:string) {
    const words = text.split(" ");

    words.forEach((word:string, idx:number) => {
        words[idx] = words[idx] == "n" ? "&" : word.charAt(0).toUpperCase() + word.substring(1);
    });

    return words.join(" ");
}