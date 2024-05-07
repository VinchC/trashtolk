import "../../style/stylesheets/navbar.css";
import menu from "../../assets/menu.svg";
import news from "../../assets/news.svg";
import teams from "../../assets/teams.svg";
import players from "../../assets/players.svg";
import apero from "../../assets/apero.svg";
import playoffs from "../../assets/playoffs.svg";
import stats from "../../assets/stats.svg";
import hot from "../../assets/hot.svg";

function Navbar() {
  let content = [
    {
      name: "Menu",
      link: "/",
      picture: menu,
    },
    {
      name: "News NBA",
      link: "/category/news-nba",
      picture: news,
    },
    {
      name: "Equipes NBA",
      link: "/equipe-nba",
      picture: teams,
    },
    {
      name: "Joueurs NBA",
      link: "/",
      picture: players,
    },
    {
      name: "L'Apéro",
      link: "/",
      picture: apero,
    },
    {
      name: "Playoffs",
      link: "/",
      picture: playoffs,
    },
    {
      name: "Statistiques",
      link: "/",
      picture: stats,
    },
    {
      name: "Hot",
      link: "/",
      picture: hot,
    },
  ];
  return (
    <>
      <nav>
        <ul>
          {console.log(content)}
          {content.map((navbarLink, index) => (
            <li key={navbarLink.name}>
              <a href={navbarLink.link}>
                <div className="navLink">
                  <img src={navbarLink.picture} />
                  <p>{navbarLink.name}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
