import {useEffect, useState} from "react";

const weatherCodeMap = new Map()
const Weather = function (){
    const [location, setLocation] = useState<string>('sichuan chengdu');
    const [weatherInfo, setWeatherInfo] = useState<any>();
    const getWeather = (location: string): Promise<any> => fetch(`https://api.seniverse.com/v3/weather/now.json?key=SqRbjztcdAGmtbKdn&location=${location}&language=zh-Hans&unit=c`).then(res => res.json())
    const getAir = (location: string): Promise<any> => fetch(`https://api.seniverse.com/v3/air/now.json?key=SqRbjztcdAGmtbKdn&location=${location}&language=zh-Hans&scope=city`).then(res => res.json())
    useEffect( () => { getWeather(location).then(d => { setWeatherInfo(d?.results[0]) });  },[])

    return (
        <div className='weather-box'>
            <i className="iconfont icon-tianqi1 w-icon"> </i>
            <div className='name-box'>{weatherInfo?.location.name}</div>
            <div className='item-box'>
                <div className='item'>
                    <span>温度</span>
                    <span>{weatherInfo?.now.temperature}</span>
                </div>
                <div className='item'>
                    <span>天气</span>
                    <span>{weatherInfo?.now.text}</span>
                </div>
                <div className='item'>
                    <span>空气质量</span>
                    <span>良好</span>
                </div>
                <div className='item'>
                    <span>紫外线</span>
                    <span>强</span>
                </div>
            </div>
        </div>
    )
}
/**
 * @desc                         获取当前设备经纬度
 */
function getLocation(): any {
    navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position.coords.latitude, position.coords.longitude);
    });
}
export default Weather;