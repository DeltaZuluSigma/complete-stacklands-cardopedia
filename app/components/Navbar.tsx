import Link from 'next/link';
import Image from 'next/image';

import refs from '../data/References.json';
import { IMG_PREFIX } from '../utils/GenericHelpers';

// UPDATES map
const UPDATES = new Map([
    ["everything","All Cards"],
    ["original","Original"],
    ["island","The Island"],
    ["dark_forest","Dark Forest"],
    ["order_structure","Order & Structure"],
    ["cursed_worlds","Cursed Worlds"],
    ["cities","Cities"]
]);

export default function Navbar({ selected }) {
    const links = [];

    UPDATES.forEach(( label, id ) => {
        links.push(
            <Link
                key={id}
                href={`?update=${id}`}
                title={label}
                className={`nav-item ${selected == id ? "selected" : ""}`}
            >
                
                <Image
                    src={`${IMG_PREFIX}/ui/nav_update_${id}.png`}
                    alt={label}
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