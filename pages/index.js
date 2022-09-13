import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";
import Logo from "../components/Logo";
import NavBar from "../components/NavBar";
import CreactionPad from "../components/CreactionPad";
import Footer from "../components/Footer";
const creations = [
  { title: "Deep earth" },
  { title: "Night arcade" },
  { title: "Soccer team VR" },
  { title: "The grid" },
  { title: "From up above VR" },
  { title: "Pocket borealis" },
  { title: "The curiosity" },
  { title: "Make it fisheye" },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./images/favicon-32x32.png"
        />
      </Head>
      <header className={styles.header}>
        <NavBar />
        <div>
          <h1 className={styles.hero}>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
        </div>
      </header>
      <section className={styles.leaderSection}>
        <div className={styles.interactiveDiv}></div>
        <div className={styles.leaderDiv}>
          <h2 className={styles.leaderDivTitle}>
            THE LEADER IN INTERACTIVE VR
          </h2>
          <p className={styles.leaderDivText}>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </section>
      <section className={styles.creationsSection}>
        <div className={styles.creactionsTitleAndButton}>
          <h2 className={styles.creationsTitle}>OUR CREATIONS</h2>

          <button className={styles.seeAllButton}>SEE ALL</button>
        </div>
        <div className={styles.creactionsDiv}>
          {creations.map((i) => (
            <CreactionPad key={i.title} {...i} />
          ))}
        </div>
        <button className={styles.seeAllButton2}>SEE ALL</button>
      </section>
      <Footer />
      <div class="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://adelinked.netlify.app" rel="noreferrer">
          Adelinked
        </a>
        .
      </div>
    </div>
  );
}
