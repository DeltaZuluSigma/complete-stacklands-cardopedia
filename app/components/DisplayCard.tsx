'use client';

import { ValidateCard } from "../utils/FetchHelpers";
import CardDetails from "./CardDetails";

//import { useSearchParams } from "next/navigation";
import { use } from "react";
import Image from "next/image";

export default function DisplayCard({
    searchParams,
}:{
    searchParams: Promise<{ card?: string }>
}) {
    const imageID = use(searchParams).card;

    // Valid card check
    if (ValidateCard(imageID)) {
        return (
            <>
                <div className="display-area">
                    <Image
                        src={`/cards/${imageID}.png`}
                        alt={imageID}
                        className="display-card"
                        width={1000}
                        height={1210}
                    />
                </div>
                <CardDetails cardID={imageID}/>
            </>
        );
    }
    
    return (
        <div className="display-area larger"></div>
    );
}