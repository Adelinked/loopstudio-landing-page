import styles from "./Footer.module.css";
import NavBar from "../NavBar";
import {
  FaFacebook,
  FaPinterest,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export default () => {
  return (
    <div className={styles.footerDiv}>
      <NavBar footer />
      <div className={styles.iconsAndCopyRightDiv}>
        <div className={styles.iconsDiv}>
          <a title="Facebook link" href="#">
            <FaFacebook />
          </a>
          <a title="Twitter link" href="#">
            <FaTwitter />
          </a>
          <a title="Pinterest link" href="#">
            <FaPinterest />
          </a>
          <a title="Instagram link" href="#">
            <FaInstagram />
          </a>
        </div>
        <p className={styles.copyRight}>
          {" "}
          © 2021 Loopstudios. All rights reserved.
        </p>
      </div>
    </div>
  );
};
