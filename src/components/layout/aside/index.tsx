import styles from '../../../styles/aside/aside.module.scss';
import Avatar from '../../../components/other/avatar';
import {NavCardProps} from "../../../types/aside/index.type";
import {useNavigate} from "react-router-dom";
import navList, {socialList} from "./config";
import {ReactElement} from "react";

export default function (){
    return (
        <>
            <div className={styles.avatarBox}>
                <Avatar/>
                <p className={styles.title}>Young`s Home Page</p>
            </div>
            <div className={styles.navBox}>
                {navList.map((item,n) => <NavCard title={item.title} icon={item.icon} key={n} path={item.path} />)}
            </div>
            {/*社交工具*/}
            <div className={styles.socialBox}>
                {socialList.map(item => <SocialIcon key={item.url} icon={item.icon} url={item.url}/> )}
            </div>
        </>
    )
}

function NavCard(props: NavCardProps){
    const navigate = useNavigate();
    const {title, icon, path} = props;
    const handleItemClick = () => { navigate(path); }
    return (
        <div className={styles.navItemBox} onClick={handleItemClick}>
            <span className={styles.icon}>{icon}</span>
            <span className={styles.title}>{title}</span>
        </div>
    )
}
function SocialIcon(props:{icon: ReactElement, url: string}): ReactElement {
    const handleIconClick = () => {window.open(props.url)}
    return <span onClick={handleIconClick} className={styles.icon}>{props.icon}</span>
}
