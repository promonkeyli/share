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
            <aside className='aside' style={{width: asideWidth}}>
                {/*<i className='iconfont icon-zhedie fold' onClick={handleFoldCLick}> </i>*/}
                <Aside/>
            </aside>
            <main className='main' style={{width: mainWidth}}>
               <Outlet/>
            </main>
        </div>
    )
}
