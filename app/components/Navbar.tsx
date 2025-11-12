import Link from 'next/link';
import Image from 'next/image';

import { updates } from '../data/References.json';
import { IMG_PREFIX } from '../utils/GenericHelpers';

export default function Navbar({ selected }) {
    const links = [];

    updates.forEach(upd => {
        const linkText = upd.name.trim().toLowerCase();

        links.push(
            <Link
                key={linkText}
                href={`?update=${upd.image}`}
                title={upd.name}
                className={`nav-item ${selected == upd.image ? "selected" : ""}`}
            >
                
                <Image
                    src={`${IMG_PREFIX}/ui/nav_update_${upd.image}.png`}
                    alt={upd.name}
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