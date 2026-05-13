interface SearchBarProps{
    city: string;
    setCity: (city: string) => void;
    onSearch: () => void;
}

const SearchBar = ({ city, setCity, onSearch }: SearchBarProps) => {
  return (
    <div className="flex gap-4 w-full max-w-xl">
        <input
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg text-black bg-white outline-none"
        />

        <button
            onClick={onSearch}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg"
        >
            Search
        </button>
    </div>
  );
}

export default SearchBar