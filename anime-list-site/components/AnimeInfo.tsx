interface AnimeInfoProps {
  label: string;
  value: string;
}

export const AnimeInfo = ({ label, value }: AnimeInfoProps) => {
  return (
    <div className="animeinfo__item">
      <div className="capitalize text-white/50">{label}:</div>
      <div className="capitalize flex justify-end text-right font-semibold">
        {value}
      </div>
    </div>
  );
};

export const AnimeInfoDate = ({ children }: { children: React.ReactNode }) => {
  return <div className="animeinfo__item">{children}</div>;
};
