import styles from '../../styles/resource/resource.module.scss';

export default function (){
    const roadClick = () => {
        window.location.href = 'https://shengxinjing.cn/'
    }
    const r2Click = () => {
        window.location.href = 'https://r2coding.com/'
    }


    return (
        <div className={styles.page}>
                <div className={styles.card} onClick={roadClick}>
                    <h3>前端路线</h3>
                </div>
                <div className={styles.card} onClick={r2Click}>
                    <h3>编程自学路线网</h3>
                </div>
        </div>
    )
}
