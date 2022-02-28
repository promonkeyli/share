import React from "react";

const ThemeCard = React.lazy(() => import('../../components/other/theme-card'))
const TitleCard = React.lazy(() => import('../../components/other/title-card'))
const PersonalCard = React.lazy(() => import('../../components/other/personal-card'))
const PoetryCard = React.lazy(() => import('../../components/other/poetry-card'))

export default function Index(){
    return(
        <>
            <div className='theme-box'><ThemeCard/></div>
            <div  className='content'>
                <div className='title'>
                    <TitleCard/>
                </div>
                <div className='nav-box'>
                    <button>Home</button>
                </div>
            </div>
                {/*<div className='personal'>
                    <PersonalCard/>
                </div>*/}
        </>
    )
}
