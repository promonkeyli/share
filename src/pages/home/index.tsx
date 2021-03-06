import React from "react";
import {useNavigate} from "react-router-dom";

// const ThemeCard = React.lazy(() => import('../../components/other/theme-card'))
const TitleCard = React.lazy(() => import('../../components/other/title-card'))
// const PersonalCard = React.lazy(() => import('../../components/other/personal-card'))
// const PoetryCard = React.lazy(() => import('../../components/other/poetry-card'))
const Footer = React.lazy(() => import('../../components/layout/footer'))

function Home(){
    const navigate = useNavigate();
    const homeClick = () => { navigate('/information') }
    return(
        <div className='index-page'>
            {/*<div className='theme-box'><ThemeCard/></div>*/}
            <div className='content' style={{height: document.documentElement.clientHeight}}>
                <div className='title'>
                    <TitleCard/>
                </div>
                <div className='nav-box'>
                    <button onClick={homeClick}>Home</button>
                </div>
            </div>
                {/*<div className='personal'>
                    <PersonalCard/>
                </div>*/}
            <div className='footer-box'>
                <Footer/>
            </div>
        </div>
    )
}

export default Home;
