import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faTv } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export const Nav = () => {
  return (
    <nav className="">
      <Link href="/" className="nav__link active">
        <div className="nav__icon">
          <FontAwesomeIcon icon={faHouse} className="fa-icon"></FontAwesomeIcon>
        </div>
        <div className="nav__title">Home</div>
      </Link>
      <Link href="/anime" className="nav__link">
        <div className="nav__icon">
          <FontAwesomeIcon icon={faTv} className="fa-icon"></FontAwesomeIcon>
        </div>
        <div className="nav__title">Anime</div>
      </Link>
      <Link href="/manga" className="nav__link">
        <div className="nav__icon">
          <FontAwesomeIcon icon={faBook} className="fa-icon"></FontAwesomeIcon>
        </div>
        <div className="nav__title">Manga</div>
      </Link>
      <Link href="/community" className="nav__link">
        <div className="nav__icon">
          <FontAwesomeIcon icon={faUsers} className="fa-icon"></FontAwesomeIcon>
        </div>
        <div className="nav__title">Community</div>
      </Link>
      <Link href="/industry" className="nav__link">
        <div className="nav__icon">
          <FontAwesomeIcon
            icon={faBuilding}
            className="fa-icon"></FontAwesomeIcon>
        </div>
        <div className="nav__title">Industry</div>
      </Link>
      <Link href="/watch" className="nav__link">
        <div className="nav__icon">
          <FontAwesomeIcon icon={faPlay} className="fa-icon"></FontAwesomeIcon>
        </div>
        <div className="nav__title">Watch</div>
      </Link>
      <Link href="/read" className="nav__link">
        <div className="nav__icon">
          <FontAwesomeIcon
            icon={faBookOpen}
            className="fa-icon"></FontAwesomeIcon>
        </div>
        <div className="nav__title">Read</div>
      </Link>
      <Link href="/help" className="nav__link">
        <div className="nav__icon">
          <FontAwesomeIcon
            icon={faCircleQuestion}
            className="fa-icon"></FontAwesomeIcon>
        </div>
        <div className="nav__title">Help</div>
      </Link>
    </nav>
  );
};
