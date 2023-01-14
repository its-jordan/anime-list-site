import Link from 'next/link';
import '../../styles/globals.css';

async function getAnime() {
  const res = await fetch(
    'http://127.0.0.1:8090/api/collections/anime_info/records?page=1&perPage=30',
    { cache: 'no-store' }
  );
  const data = await res.json();
  return data?.items as any[];
}

export default async function AnimePage() {
  const anime = await getAnime();

  return (
    <div>
      <h1>Anime</h1>
      <div>
        {anime?.map((anime_info) => {
          return <Note key={anime_info.id} anime={anime_info} />;
        })}
      </div>
    </div>
  );
}

function Note({ anime }: any) {
  const { id, title, content, created } = anime || {};

  return (
    <Link href={`/anime/${id}`}>
      <div>
        <h2>{title}</h2>
        <h5>{content}</h5>
        <p>{created}</p>
      </div>
    </Link>
  );
}
