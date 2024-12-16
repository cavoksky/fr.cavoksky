import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer>
        {/*<p>
          Toute information publiée sur ce site n'a pas pour intention ou ne
          sous-entend pas de se substituer à un conseil médical professionnel,
          un diagnostic ou un traitement.<br></br> Tout le contenu, y compris le
          texte, les graphiques, les images et les informations, contenus ou
          disponibles via ce site sont destinés uniquement à des fins
          d'information générale.<br></br> Vous ne devriez prendre aucune action
          avant de consulter un professionnel de la santé.<br></br>©
          fr.CavokSky.com 2020 - 2023
        </p>
        <social>
          <ul>
            <li>
              <a href="https://www.pinterest.fr/INinaBernard/" target="_blank">
                <img
                  src="/pinterest.svg"
                  alt="pinterest icon"
                  width={50}
                  height={50}
                />
              </a>
            </li>
            /*
            <li>
              <a href="https://www.instagram.com" target="_blank">
                <img
                  src="/instagram.svg"
                  alt="instagram icon"
                  width={50}
                  height={50}
                />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com" target="_blank">
                <img
                  src="/youtube.svg"
                  alt="youtube icon"
                  width={60}
                  height={60}
                />
              </a>
            </li>
          </ul>
        </social>*/}
        <footernav>
          <ul>
            <li>
              <Link href="/Privacy-policy">Privacy Policy </Link>
            </li>
            <li>
              <Link href="/Terms-and-conditions">Terms And Conditions</Link>
            </li>
            <li>
              <Link href="/Important-Disclaimer">Important Disclaimer</Link>
            </li>
            <li>
              <Link href="/Contact">Contact</Link>
            </li>
            <li>
              <Link href="/About-us">About</Link>
            </li>
          </ul>
        </footernav>
      </footer>
    </>
  );
}
