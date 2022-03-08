import styles from '../../../styles/aside/aside.module.scss';
import Avatar from '../../../components/other/avatar';
import {NavCardProps} from "../../../types/aside/index.type";
import {useNavigate} from "react-router-dom";

export default function (){
    const navList: Array<NavCardProps> = [
        {
            icon: <>information</>,
            element: <>前端资讯</>,
            path: '/information'
        },
        {
            icon: <>resource</>,
            element: <>前端资源</>,
            path: '/resource'
        },
        {
            icon: <>sample reels</>,
            element: <>作品集</>,
            path: '/sample'
        },
        {
            icon: <>hobby</>,
            element: <>爱好</>,
            path: 'hobby'
        },
        {
            icon: <>about me</>,
            element: <>关于我</>,
            path: 'about'
        }
    ]
    return (
        <div className={styles.pageBox}>
            <div className={styles.avatarBox}>
                <Avatar/>
                <p className={styles.title}>Young`s Home Page</p>
            </div>
            <div className={styles.navBox}>
                {navList.map((item,n) => <NavCard element={item.element} icon={item.icon} key={n} path={item.path} />)}
            </div>
        </div>
    )
}

function NavCard(props: NavCardProps){
    const navigate = useNavigate();
    const {element, icon, path} = props;
    const handleItemClick = () => { navigate(path); }
    return (
        <div className={styles.navItemBox} onClick={handleItemClick}>
            <span>{icon}</span>
            <span>{element}</span>
        </div>
    )
}
