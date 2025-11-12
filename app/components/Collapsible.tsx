import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { IMG_PREFIX } from "../utils/GenericHelpers";

// Collapsible - Abstract collapsible component
export default function Collapsible(
    { header, content }: { header:string, content:any }
) {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

    const toggleCollapsible = () => {
        setIsCollapsed(!isCollapsed);
    };

    const keyHeader = header.toLowerCase();

    return (
        <div key={`${keyHeader}-collapsible-wrapper`}>
            <Link
                key={`${keyHeader}-collapsible-header`}
                href="#"
                className="collapsible-header"
                onClick={toggleCollapsible}
            >

                {header}
                
                <Image
                    src={`${IMG_PREFIX}/ui/${isCollapsed ? "plus" : "minus"}.png`}
                    alt="collapse icon"
                    className="right icon"
                    width={90}
                    height={90}
                />
            </Link>

            <div key={`${keyHeader}-collapsible-content`} className={`collapsible-content ${isCollapsed ? "" : "open"}`}>
                {content}
            </div>
        </div>
    );
}