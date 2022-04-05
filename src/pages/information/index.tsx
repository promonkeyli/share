import styles from '../../styles/information/information.module.scss';
import Clock from '../../components/other/clock';
import Weather from "../../components/other/weather";

function Information(){
    return (
        <div className={styles.infoBox}>
            <div className={styles.tipBox}>
                <div><Weather/></div>
                <div><Clock/></div>
            </div>
            <div style={{padding:'10px'}}><div className={styles.rankBox}>编程语言排行榜</div></div>
            <div style={{padding: '10px'}}><div className={styles.magazineBox}>前端刊物</div></div>
        </div>
    )
}

export default Information;
