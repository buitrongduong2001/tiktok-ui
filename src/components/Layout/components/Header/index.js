import classNames from "classnames/bind";
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
  faSignIn,
  faEllipsisVertical,
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
} from "@fortawesome/free-solid-svg-icons";
import "tippy.js/dist/tippy.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Tippy from "@tippyjs/react/headless";

import styles from "./Header.module.scss";
import images from "~/assets/images";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/Layout/AccountItem";
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";

const cx = classNames.bind(styles);
function Header() {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResults([]);
    }, 0);
  }, []);

  const MENU_ITEM = [
    {
      icon: <FontAwesomeIcon icon={faEarthAsia} />,
      title: "English",
    },
    {
      icon: <FontAwesomeIcon icon={faCircleQuestion} />,
      title: "Feedback and Help",
      to: "/feedback",
    },
    {
      icon: <FontAwesomeIcon icon={faKeyboard} />,
      title: "Keyboard shortcuts",
    },
  ];

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="logo" />
        </div>
        <Tippy
          interactive
          visible={searchResults.length > 0}
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx("search-title")}>Account</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <input
              placeholder="Search accounts and videos"
              spellCheck={false}
            />
            <button className={cx("clear")}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />

            <button className={cx("search-btn")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>

        <div className={cx("action")}>
          <Button text>Upload</Button>
          <Button primary leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
            Log in
          </Button>

          <Menu items={MENU_ITEM}>
            <button className={cx("more-btn")}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
