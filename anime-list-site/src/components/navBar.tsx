import Link from "next/link";

const NavBar = () => {
  return (
    <div className="flex h-16 flex-row flex-nowrap items-center justify-between bg-neutral-900 px-4 text-white">
      <div className="flex flex-row flex-nowrap items-center gap-2">
        <div className="text-3xl font-bold">AnimeListSite</div>
        <nav className="flex flex-row flex-nowrap">
          <Link className="flex items-center p-2" href="">
            Anime
          </Link>
          <Link className="flex items-center p-2" href="">
            Manga
          </Link>
          <Link className="flex items-center p-2" href="">
            Songs
          </Link>
          <Link className="flex items-center p-2" href="">
            People
          </Link>
          <Link className="flex items-center p-2" href="">
            Community
          </Link>
          <Link className="flex items-center p-2" href="">
            News
          </Link>
        </nav>
      </div>
      <div className="flex flex-row flex-nowrap items-center gap-4">
        <div className="text-lg font-semibold">username</div>
        <img
          className="aspect-square h-12 rounded-full object-cover"
          src="./images/ichigo.jpg"
          alt="user-img"
        ></img>
      </div>
    </div>
  );
};

export default NavBar;
