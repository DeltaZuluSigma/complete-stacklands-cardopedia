import Link from "next/link";
import Image from "next/image";
// import { useState } from "react";

import { InternalLink } from "../utils/FetchHelpers";
import { IMG_PREFIX } from "../utils/GenericHelpers";

export default function CollapsibleCategory ({ category, details }) {
    const collapsible = [];

    // Trigger/Header
    collapsible.push(
            <Link key={category+"trigger"} href="#" className="collapsible-header">
                {category}
                <Image
                    src={`${IMG_PREFIX}/ui/minus.png`}
                    alt="collapse icon"
                    className="right icon"
                    width={90}
                    height={90}
                />
            </Link>
    );

    // Content
    collapsible.push(
        <div key={category+"content"} className="collapsible-content">
            <ProcessText category={category} strArr={details}/>
        </div>
    );

    return (
        <div key={category+"wrapper"}>
            {collapsible}
        </div>
    );
}

// ProcessText - Formats text within a collapsible
function ProcessText({ category, strArr }) {
    const content = [];

    strArr.forEach((text, idx) => {
        if (text.includes("\n")) {
            const recipe = text.split("\n");
            
            recipe.forEach((line, subIdx) => {
                content.push(
                    <p key={category+"line"+idx+subIdx}>
                        <InternalLink textLine={line}/>
                    </p>
                );
            });
        }
        else {
            content.push(
                <p key={category+"line"+idx}>
                    {`• `}
                    <InternalLink textLine={text}/>
                </p>
            );
        }
    });

    return (
        <>
            {content}
        </>
    );
}

