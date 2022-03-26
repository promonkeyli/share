import styles from '../../styles/resource/resource.module.scss';
import Tips from '../../components/other/tip';
import CardItem from '../../components/other/card-item';
import configList from "./config";
export default function (){
    return (
        <div className={styles.page}>
            {
                configList.map(item =>
                    <div className={styles.itemBox} key={item.tipTitle}>
                        <div className={styles.itemTipsBox}><Tips title={item.tipTitle}/></div>
                        <div className={styles.itemCardBox}>
                            {item.children.map(subItem =><span key={subItem.url}><CardItem title={subItem.title} url={subItem.url}/></span>)}
                        </div>
                    </div>
                )
            }
        </div>
    )
}
