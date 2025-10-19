'use client';
import { ValidateCard } from "../utils/FetchHelpers";
import { IMG_PREFIX } from "../utils/GenericHelpers";
import CardDetails from "./CardDetails";

import { useSearchParams } from "next/navigation";
import Image from "next/image";

export default function DisplayCard() {
    const imageID = useSearchParams().get("card");

    // Valid card check
    if (ValidateCard(imageID)) {
        return (
            <>
                <div className="display-area">
                    <Image
                        src={`${IMG_PREFIX}/cards/${imageID}.png`}
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