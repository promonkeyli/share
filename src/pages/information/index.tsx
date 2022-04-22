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
            {/*<div style={{padding:'10px'}}><div className={styles.rankBox}>编程语言排行榜</div></div>*/}
            {/*<div style={{padding: '10px'}}><div className={styles.magazineBox}>前端刊物</div></div>*/}
            <div className={styles.magazineBox}>
                <div>
                    <span>前端周刊推荐</span>
                    <ul>
                        <li><label>前端精读周刊</label><a href="https://github.com/ascoders/weekly" target='_blank'>https://github.com/ascoders/weekly</a></li>
                        <li><label>科技爱好者周刊</label><a href="https://github.com/ruanyf/weekly" target='_blank'>https://github.com/ruanyf/weekly</a></li>
                        <li><label>前端好文汇总</label><a href="https://github.com/zenany/weekly" target='_blank'>https://github.com/zenany/weekly</a></li>
                        <li><label>阿里云前端技术周刊</label><a href="https://github.com/aliyunfe/weekly" target='_blank'>https://github.com/aliyunfe/weekly</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Information;
