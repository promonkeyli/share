import styles from '../../styles/resource/resource.module.scss';
import Tips from '../../components/other/tip';
export default function (){
    const roadClick = () => { window.open('https://shengxinjing.cn/'); }
    const r2Click = () => { window.open('https://r2coding.com/'); }
    return (
        <div className={styles.page}><Tips/></div>
    )
}
