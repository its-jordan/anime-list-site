import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function get_random(list: string | any[]) {
  return list[Math.floor(Math.random() * list.length)];
}

export default function Search() {
  const placeholder = get_random([
    'Check out some Anime!',
    'Find a Good Read!',
    'Need an Anime?',
  ]);
  return (
    <div className="relative w-full flex flex-row flex-nowrap items-center">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full py-2 px-4 rounded-md bg-white/10 text-white border-b border-[var(--accent-clr)] appearance-none"></input>
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="absolute right-4 text-white h-3"
      />
    </div>
  );
}
