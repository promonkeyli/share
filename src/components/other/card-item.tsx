/**
 * @description                                 【分类项】组件
 * @author                                      Young
 * @date                                        2022/3/24
 */
import styles from '../../styles/resource/resource.module.scss';
export default function (props: {title: string, description:string, url: string}){
    return (
        <div className={styles.cardBox} onClick={() => window.open(props.url)}>
            <div >{props.title}</div>
            <div className={styles.cardDesc}>{props.description}</div>
        </div>
    )
}
