import { Search } from 'lucide-react';

interface SearchBarProps{
    city: string;
    setCity: (city: string) => void;
    onSearch: () => void;
}

const SearchBar = ({ city, setCity, onSearch }: SearchBarProps) => {
  return (
    <div className="flex w-full mx-auto relative group">
        <input
            type="text"
            placeholder="Search for a city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && onSearch()}
            className="w-full pl-6 pr-16 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-white/50 transition-all shadow-lg"
        />

        <button
            onClick={onSearch}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-300"
            aria-label="Search"
        >
            <Search size={20} className="text-white" />
        </button>
    </div>
  );
}

export default SearchBar;