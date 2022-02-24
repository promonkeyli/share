import React from "react";

const ThemeCard = React.lazy(() => import('../../components/other/theme-card'))
const TitleCard = React.lazy(() => import('../../components/other/title-card'))
const PersonalCard = React.lazy(() => import('../../components/other/personal-card'))
const PoetryCard = React.lazy(() => import('../../components/other/poetry-card'))

export default function Index(){
    return(
        <>
            <div className='theme-box'>
                <ThemeCard/>
            </div>
            <div className='title-box'>
                <TitleCard/>
            </div>
            <div>
                <PersonalCard/>
            </div>
        </>
    )
}
