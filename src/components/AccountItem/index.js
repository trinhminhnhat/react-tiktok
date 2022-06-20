import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import Image from '~/components/Image';
import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles);

const AccountItem = ({data}) => {
  return (
    <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
        <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
        <div className={cx('info')}>
            <h4 className={cx('username')}>{data.nickname}
                { data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
            </h4>
            <div className={cx('name')}>{data.full_name}</div>
        </div>
    </Link>
  )
}

export default AccountItem