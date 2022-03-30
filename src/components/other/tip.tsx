/**
 * @description                                 【tips】分类提示组件
 * @author                                      Young
 * @date                                        2022/3/24
 */
import styles from '../../styles/resource/resource.module.scss';
function Tips(props: { title: string }){
    return (
        <div className={styles.tipsBox}>
            <span> </span>
            <span>{props.title}</span>
        </div>
    )
}

export default Tips;
