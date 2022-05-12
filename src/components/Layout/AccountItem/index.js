import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import className from "classnames/bind";
import styles from "./AccountItem.module.scss";

const cx = className.bind(styles);
function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/30607fe990d5bc4debe258bd4a11d97c~c5_300x300.webp?x-expires=1652515200&x-signature=HyUOd14H%2FIcu2RzMb437vBl6sqE%3D"
        className={cx("avatar")}
        alt="duong"
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>Bùi Trọng Dương</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <span className={cx("username")}>buitrongduong</span>
      </div>
    </div>
  );
}

export default AccountItem;
