import { AnimeInfo, AnimeInfoDate } from '../../../components/AnimeInfo';
import { PageHero } from '../../../components/PageHero';
import Date from '../../../components/date';
import '../../../styles/globals.css';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import fs from 'fs';
import getPostMetadata from '../../../components/getPostMetadata';

async function getAnime(animeID: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/anime_info/records/${animeID}`,
    {
      next: { revalidate: 10 },
    }
  );
  const data = await res.json();
  return data;
}

export default async function NotePage({ params }: any) {
  const anime = await getAnime(params.id);

  return (
    <div>
      <PageHero
        title={anime.title}
        englishTitle={anime.english_title}
        score={anime.score}
        image={`http://127.0.0.1:8090/api/files/anime_info/${anime.id}/${anime.poster}`}
        bgImage={`http://127.0.0.1:8090/api/files/anime_info/${anime.id}/${anime.banner}`}
      />
      <div className="flex flex-row gap-8 mx-[var(--responsive-margins)]">
        <nav
          role="page-navigation"
          className="flex flex-col gap-2 z-[100] min-w-[16rem] w-64 my-8">
          {[
            ['Details', '#details'],
            ['Characters & Staff', '#characters'],
            ['Episodes', '#episodes'],
            ['Videos', '#videos'],
            ['Stats', '#stats'],
            ['Reviews', '#reviews'],
            ['Recommendations', '#recommendations'],
            ['Interest Stacks', '#interest-stacks'],
            ['News', '#news'],
            ['Forum', '#forum'],
            ['Clubs', '#clubs'],
            ['Pictures', '#pictures'],
            ['More Info', '#more'],
          ].map(([title, url]) => (
            <a
              className="w-full p-4 rounded-lg bg-neutral-800 hover:bg-neutral-600 flex flex-row justify-start items-center gap-4"
              href={url}>
              <div>{`-->`}</div>
              <div className="text-left">{title}</div>
            </a>
          ))}
        </nav>
        <div>
          <h2 className="py-8">Information</h2>
          <div className="animeinfo__container flex flex-row gap-2 flex-wrap w-full min-w-[100%] [&_>_*]:bg-neutral-800">
            <AnimeInfo label="Type" value={anime.type}></AnimeInfo>
            <AnimeInfo label="Episodes" value={anime.episodes}></AnimeInfo>
            <AnimeInfo label="Status" value={anime.status}></AnimeInfo>
            <AnimeInfoDate>
              <div className="text-white/50">Aired:</div>
              <div className="flex flex-row flex-wrap gap-0 justify-end items-center [&_time]:font-semibold">
                <Date dateString={anime.aired_from} />
                <div className="px-2">to</div>
                <Date dateString={anime.aired_to} />
              </div>
            </AnimeInfoDate>
            <AnimeInfo label="Premiered" value={anime.premiered}></AnimeInfo>
            <AnimeInfo label="Broadcast" value={anime.broadcast}></AnimeInfo>
            <AnimeInfo label="Producers" value={anime.producers}></AnimeInfo>
            <AnimeInfo label="Licensors" value={anime.licensors}></AnimeInfo>
            <AnimeInfo label="Studios" value={anime.studios}></AnimeInfo>
            <AnimeInfo label="Source" value={anime.source}></AnimeInfo>
            <AnimeInfo label="Genres" value={anime.genres}></AnimeInfo>
            <AnimeInfo label="Theme" value={anime.theme}></AnimeInfo>
            <AnimeInfo
              label="Duration"
              value={`${anime.duration} min. per ep.`}></AnimeInfo>
            <AnimeInfo label="Rating" value={anime.rating}></AnimeInfo>
          </div>

          <div className="">
            <div className="py-8 [&_>_*]:pb-6 [&_>_*:last-child]:pb-0">
              Text
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
