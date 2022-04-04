import {NavCardProps} from "../../../types/aside/index.type";
import {ReactElement} from "react";

const InfoIcon     = <i className='iconfont icon-fuwuzixun'> </i>;                      // 资讯图标
const programIcon  = <i className='iconfont icon-ziyuan1'> </i>;                        // 资源图标
const sampleIcon   = <i className='iconfont icon-wodezuopinxueshengzuopin-moren'> </i>; // 作品图标
const aboutIcon    = <i className='iconfont icon-guanyuwomen'> </i>;                    // 关于图标
const hobbyIcon    = <i className='iconfont icon-xingquaihao'> </i>;                    // 爱好图标
const githubIcon   = <i className='iconfont icon-github1 github'> </i>;                 // github图标
const xhsIcon      = <i className='iconfont icon-xiaohongshu1 xhs'> </i>;               // 小红书图标
const douBanIcon   = <i className='iconfont icon-shejiaotubiao-48 douban'> </i>;        // 豆瓣图标
const bIcon        = <i className='iconfont icon-bilibili bilibili'> </i>;              // b站图标
const hexoIcon     = <i className='iconfont icon-hexo hexo'> </i>;                           // hexo博客图标

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
export const socialList: Array<{icon: ReactElement, url: string}> = [
    {
        icon: githubIcon,
        url: 'https://github.com/promonkeyli'
    },
    {
        icon: douBanIcon,
        url: 'https://www.douban.com/people/171162057/?_i=8303513EMWigXk'
    },
    {
        icon: xhsIcon,
        url: 'https://www.xiaohongshu.com/user/profile/5c89d9b0000000001200763c?xhsshare=CopyLink&appuid=5c89d9b0000000001200763c&apptime=1648303657'
    },
    {
        icon: bIcon,
        url: 'https://space.bilibili.com/125441145'
    },
    {
        icon: hexoIcon,
        url: 'https://promonkeyli.github.io/'
    },
]

export default navList;
