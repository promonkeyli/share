import styles from '../../../styles/aside/aside.module.scss';
import Avatar from '../../../components/other/avatar';
import {NavCardProps} from "../../../types/aside/index.type";
import {useNavigate} from "react-router-dom";
import navList from "./config";

export default function (){
    return (
        <>
           <div className={styles.innerBox}>
               <div className={styles.avatarBox}>
                   <Avatar/>
                   <p className={styles.title}>Young`s Home Page</p>
               </div>
               <div className={styles.navBox}>
                   {navList.map((item,n) => <NavCard title={item.title} icon={item.icon} key={n} path={item.path} />)}
               </div>
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
