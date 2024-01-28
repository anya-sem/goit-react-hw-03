export const SearchBox = ({inputValue, handleChange}) => {
    return (
        <div>
            <p>Find contacts by name</p>
            <input
                type="text"
                name="search"
                value={inputValue}
                onChange={handleChange}
            />
        </div>
    )
}