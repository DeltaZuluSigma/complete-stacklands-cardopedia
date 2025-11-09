import Link from 'next/link';
import Image from 'next/image';

import { IMG_PREFIX } from '../utils/GenericHelpers';

const UPDATES = [
    {
        "update":"All Cards",
        "image":"everything"
    },
    {
        "update":"Original",
        "image":"original"
    },
    {
        "update":"The Island",
        "image":"island"
    },
    {
        "update":"Dark Forest",
        "image":"dark_forest"
    },
    {
        "update":"Order & Structure",
        "image":"order_structure"
    },
    {
        "update":"Cursed Worlds",
        "image":"cursed_worlds"
    },
    {
        "update":"2000",
        "image":"cities"
    }
]

export default function Navbar({ selected }) {
    const links = [];

    UPDATES.forEach(upd => {
        const linkText = upd.update.trim().toLowerCase();

        links.push(
            <Link
                key={linkText}
                href={`?update=${upd.image}`}
                title={upd.update}
                className={`nav-item ${selected == upd.image ? "selected" : ""}`}
                >
                
                <Image
                    src={`${IMG_PREFIX}/ui/nav_update_${upd.image}.png`}
                    alt={upd.update}
                    className="nav-image"
                    width={256}
                    height={256}
                />
            </Link>
        );
    });

    return (
        <nav className="desktop-nav">
            {links}
        </nav>
    );
}