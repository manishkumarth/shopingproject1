import { FaFacebookMessenger } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa6';
import { IoLogoTwitter } from 'react-icons/io5';
import styles from './footer.module.css';
function Footer() {
  return (
    <div className="s_main mt-1 text-light">
      <div className="container-flued bg-dark bg-gradient ">
        <div className="container ">
          <div className={`${styles.row} row `}>
            <div className={`${styles.left} col`}>
              <h3 className="text-light ">footer page</h3>
              <ul>
                <li>
                  <FaFacebook /> <span className="text-primary">read more</span>
                </li>
                <li className="nav-item">
                  <a className="nav-link">
                    <FaFacebookMessenger /> <span className="text-primary">click here</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">
                    <FaFacebookMessenger /> <span className="text-primary">latest news</span>
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link">
                    <IoLogoTwitter /> <span className="text-primary">fast api</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className={`${styles.right} col text-center`}>
              <h3 className="text-light ">right page</h3>
              <span className={`${styles.rightfoot} border rounded p-2`}> hey!!  babay ??</span>
            </div>
            <p className="text-center">privacy policy @ don't share data hereOthers who use this device won’t see your activity, so you can browse more privately. This won't change how data <br/ >is  that you visit and the services that they use, including Google. Downloads, bookmarks and reading list items will be saved</p>

            <p className="text-center"> bookmarks and reading list items will be saved</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
