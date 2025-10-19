import Link from 'next/link';
import Image from 'next/image';
import { IMG_PREFIX } from '../utils/GenericHelpers';

const UPDATES = [
    {
        "update":"All Cards",
        "image":"nav_update_everything"
    },
    {
        "update":"Original",
        "image":"nav_update_original"
    },
    {
        "update":"The Island",
        "image":"nav_update_island"
    },
    {
        "update":"Dark Forest",
        "image":"nav_update_dark_forest"
    },
    {
        "update":"Order & Structure",
        "image":"nav_update_order_structure"
    },
    {
        "update":"Cursed Worlds",
        "image":"nav_update_cursed_worlds"
    },
    {
        "update":"2000",
        "image":"nav_update_cities"
    }
]

export default function Navbar() {
    const links = [];

    UPDATES.forEach(upd => {
        const linkText = upd.update.trim().toLowerCase();

        links.push(
            <Link key={linkText} href="#" className="nav-item">
                <Image
                    src={`${IMG_PREFIX}/ui/${upd.image}.png`}
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