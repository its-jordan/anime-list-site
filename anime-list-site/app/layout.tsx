/* eslint-disable @next/next/no-head-element */

import Image from 'next/image';
import Link from 'next/link';
import { PageContainer } from '../components/Container';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Nav } from '../components/Navigation';
import Search from '../components/Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="bg-neutral-900 text-white flex flex-row flex-nowrap h-[100vh] overflow-hidden">
        <div className="relative nav__container z-50">
          <div className="flex flex-col gap-4 items-start w-full">
            <div className="font-bold text-3xl w-max">MyAnimeList</div>
            <Search />
            <Nav />
          </div>
          <div className="flex flex-col gap-4 items-end w-full border-t border-white/10 pt-2">
            <div className="profile flex flex-row justify-start items-center gap-4 hover:bg-white/10 w-full transition-colors rounded-md pl-3 pr-4 py-2 cursor-pointer">
              <div className="profile__avatar object-cover">
                <img
                  src="https://cdn.myanimelist.net/r/360x360/images/characters/3/148437.jpg?s=dfad8f21cf753eb3b3265a6e19e4913b"
                  alt="user profile picture"
                  className="h-10 aspect-square rounded-full"></img>
              </div>
              <div className="profile__username flex flex-grow font-semibold">
                its_jordan
              </div>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="fa-icon"></FontAwesomeIcon>
            </div>
          </div>
        </div>
        <div className="w-full">{children}</div>
      </body>
    </html>
  );
}
