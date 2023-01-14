interface PageHeroProps {
  title: string;
  englishTitle?: string;
  image: string;
  bgImage: string;
  score: number;
}

export const PageHero = ({
  title,
  englishTitle,
  image,
  score,
  bgImage,
}: PageHeroProps) => {
  return (
    <div className="hero relative">
      <div className="absolute left-0 top-0 w-[100vw] h-full -z-10">
        <img className="w-full h-full object-cover" src={bgImage}></img>
      </div>
      <div className="absolute left-0 top-0 w-[100vw] h-full z-[-5]">
        <div className="w-full h-full object-cover bg-black/80 backdrop-blur-sm"></div>
      </div>
      <div className="flex flex-row gap-8 items-end">
        <img className="anime__poster my-8" src={image}></img>
        <div className="flex flex-col flex-grow justify-end items-start gap-2 mb-8">
          <h1 className="text-white">{title}</h1>
          <h2 className="text-white">{englishTitle}</h2>
        </div>
        <div className="text-3xl font-bold mb-8">{score}</div>
      </div>
    </div>
  );
};
