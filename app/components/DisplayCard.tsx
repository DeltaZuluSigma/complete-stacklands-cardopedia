'use client';
import { useSearchParams } from "next/navigation";
import Image from "next/image";

import { ValidateCard } from "../utils/FetchHelpers";
import { IMG_PREFIX } from "../utils/GenericHelpers";
import CardDetails from "./CardDetails";

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
                        width={582}
                        height={704}
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