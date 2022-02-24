import React from "react";

const TitleCard = React.lazy(() => import('../../components/other/title-card'))
const PersonalCard = React.lazy(() => import('../../components/other/personal-card'))
const PoetryCard = React.lazy(() => import('../../components/other/poetry-card'))

export default function Index(){
    return(
        <div className='index-box'>
            <TitleCard/>
            <PersonalCard/>
            <PoetryCard/>
        </div>
    )
}
