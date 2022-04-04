import styles from '../../styles/information/information.module.scss';
import Clock from '../../components/other/clock';
function Information(){
    return (
        <div className={styles.infoBox}>
            <div className={styles.tipBox}>
                <div>left</div>
                <div><Clock/></div>
            </div>
            <div className={styles.rankBox}>编程语言排行榜</div>
            <div className={styles.magazineBox}>前端刊物</div>
        </div>
    )
}

export default Information;
