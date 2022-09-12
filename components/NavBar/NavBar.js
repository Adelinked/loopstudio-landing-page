import { useState } from "react";
import Link from "next/link";
import styles from "./NavBar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";

import Logo from "../Logo";
export default ({ footer }) => {
  const [show, setShow] = useState(true);

  const openVertNav = () => {
    if (show) {
      document.getElementById("vertNavbar").style.right = "0";
      document.getElementById("navbar").style.top = "-12vh";
    } else {
      document.getElementById("vertNavbar").style.right = "100%";
      document.getElementById("navbar").style.top = "0";
    }

    setShow((show) => !show);
  };
  return (
    <>
      <nav
        className={footer ? styles.navBarFooter : styles.navbar}
        id={`navbar${footer ? "footer" : ""}`}
      >
        <Logo logoText="loopstudios" footer={footer} />

        <div className={footer ? styles.linksDivFooter : styles.linksDiv}>
          <Link href="#">
            <a title="About">About</a>
          </Link>
          <Link href="#">
            <a title="Careers">Careers</a>
          </Link>
          <Link href="#">
            <a title="Events">Events</a>
          </Link>
          <Link href="#">
            <a title="Products">Products</a>
          </Link>
          <Link href="#">
            <a title="Support">Support</a>
          </Link>
        </div>
        {!footer && (
          <span className={styles.openNav} onClick={openVertNav}>
            <FaBars />
          </span>
        )}
      </nav>
      {!footer && (
        <nav className={styles.vertNavbar} id="vertNavbar">
          <div className={styles.logoAndClose}>
            <Logo logoText="loopstudios" />
            <span className={styles.closeNav} onClick={openVertNav}>
              <FaTimes />
            </span>
          </div>
          <div className={styles.verticalLinksDiv}>
            {/*<div className="ruler" />*/}
            <Link href="#">
              <a title="About">ABOUT</a>
            </Link>
            <Link href="#">
              <a title="Careers">CAREERS</a>
            </Link>
            <Link href="#">
              <a title="Events">EVENTS</a>
            </Link>
            <Link href="#">
              <a title="Products">PRODUCTS</a>
            </Link>
            <Link href="#">
              <a title="Support">SUPPORT</a>
            </Link>
          </div>
        </nav>
      )}
    </>
  );
};
