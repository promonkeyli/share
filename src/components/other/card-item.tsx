/**
 * @description                                 【分类项】组件
 * @author                                      Young
 * @date                                        2022/3/24
 */
import styles from '../../styles/resource/resource.module.scss';
export default function (props: {title: string, url: string}){
    return (
        <div className={styles.cardBox} onClick={() => window.open(props.url)}>{props.title}</div>
    )
}
