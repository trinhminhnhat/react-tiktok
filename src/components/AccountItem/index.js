import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Image from '~/components/Image';
import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles);

const AccountItem = () => {
  return (
    <div className={cx('wrapper')}>
        <Image className={cx('avatar')} src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/cccc77c366c4ace26eea507b8b52b9d1~c5_300x300.webp?x-expires=1652767200&x-signature=jdZ8oe2SXK7w2M3k%2BxH7tZ80TX0%3D" alt="" />
        <div className={cx('info')}>
            <h4 className={cx('username')}>aa
                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </h4>
            <div className={cx('name')}>Trinh Minh Nhat</div>
        </div>
    </div>
  )
}

export default AccountItem