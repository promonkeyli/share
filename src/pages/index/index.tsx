import {useState} from "react";
import Aside from '../../components/layout/aside';
import {Outlet} from "react-router-dom";
export default function Index(){
    const [isFold, setIsFold] = useState(false); // 导航栏折叠状态，默认是否
    const foldWidth = '50px'; // 折叠宽度
    const unFoldWidth = '250px'; // 展开宽度
    const asideWidth = isFold?foldWidth: unFoldWidth; // aside宽度
    const mainWidth = isFold?`calc(100vw - ${foldWidth})`:`calc(100vw - ${unFoldWidth})`; // main宽度
    const handleFoldCLick = () => { setIsFold(!isFold) }
    return(
        <div className='home-page'>
            {/*style={{width: asideWidth}}*/}
            <aside className='aside'>
                {/*{isFold ? <i className='iconfont icon-zhedie fold' onClick={handleFoldCLick}> </i> : null}*/}
                <div className="page-container"><Aside/></div>
            </aside>
            {/*style={{width: mainWidth}}*/}
            <main className='main'>
                <div className="page-container"><Outlet/></div>
            </main>
        </div>
    )
}
