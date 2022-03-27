import styles from '../../styles/resource/resource.module.scss';
import Tips from '../../components/other/tip';
import CardItem from '../../components/other/card-item';
import configList from "./config";
export default function (){
    return (
        <div className={styles.page} style={{height: document.documentElement.clientHeight - 90}}>
            <div className={styles.hrefBox}>{configList.map(item => <a key={item.id} href={`#${item.id}`}>{`#${item.tipTitle}`}</a>)}</div>
            {
                configList.map(item =>
                    <div className={styles.itemBox} key={item.tipTitle}>
                        {/*锚点链接*/}
                        <div id={item.id} className={styles.itemTipsBox}><Tips title={item.tipTitle}/></div>
                        <div className={styles.itemCardBox}>
                            {item.children.map(subItem =>
                                <span key={subItem.url}><CardItem title={subItem.title} description={subItem.description} url={subItem.url}/></span>
                            )}
                        </div>
                    </div>
                )
            }
        </div>
    )
}
