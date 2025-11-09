export default function SearchBar({ searchText, onSearchTextChange }) {
    return (
        <form>
            <input
                type="text"
                value={searchText}
                placeholder="Search"
                onChange={(ele) => onSearchTextChange(ele.target.value)}
                className="search-bar"
            />
        </form>
    );
}