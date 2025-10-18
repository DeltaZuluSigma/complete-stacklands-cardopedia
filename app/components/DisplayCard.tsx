'use client';
import { ValidateCard } from "../utils/FetchHelpers";
import CardDetails from "./CardDetails";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Image from "next/image";

export default function DisplayCard() {
    const imageID = useSearchParams().get("card");

    // Valid card check
    if (ValidateCard(imageID)) {
        return (
            <Suspense>
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
            </Suspense>
        );
    }
    
    return (
        <div className="display-area larger"></div>
    );
}