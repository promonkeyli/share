import {NavCardProps} from "../../../types/aside/index.type";

const InfoIcon     = <i className='iconfont icon-fuwuzixun'> </i>;                      // 资讯图标
const programIcon  = <i className='iconfont icon-ziyuan1'> </i>;                        // 资源图标
const sampleIcon   = <i className='iconfont icon-wodezuopinxueshengzuopin-moren'> </i>; // 作品图标
const hobbyIcon    = <i className='iconfont icon-xingquaihao'> </i>;                    // 爱好图标
const aboutIcon    = <i className='iconfont icon-guanyuwomen'> </i>;                    // 关于图标

const navList: Array<NavCardProps> = [
    {
        icon: InfoIcon,
        title: '前沿资讯',
        path: '/information'
    },
    {
        icon: programIcon,
        title: '编程资源',
        path: '/resource'
    },
    {
        icon: sampleIcon,
        title: '作品/简历',
        path: '/sample'
    },
    {
        icon: hobbyIcon,
        title: '生活爱好',
        path: '/hobby'
    },
    {
        icon: aboutIcon,
        title: '关于我',
        path: '/about'
    },
]

export default navList;
