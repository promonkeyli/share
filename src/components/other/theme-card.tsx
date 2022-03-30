/**
 * @description                                 主题配色卡组件 -- 点击切换会更改当前主题配色（包括字体颜色，主题颜色）
 * @author                                      Young
 * @date                                        2022/2/23
 */

import {circleColorType} from "../../types/common"

function ThemeCard(){
    const circleColorList:Array<circleColorType> = [
        {color: '#62c553'},
        {color: '#ed695e'},
        {color: '#32788a'},
        {color: '#b95a89'},
        {color: '#df7e2f'},
        {color: '#804b95'},
        {color: '#333433'}
    ]
    const handleColorClick = (color: string) => {
        document.body.style.backgroundColor = color
    }
    return(
        <>
            {
                circleColorList.map((item:circleColorType,index) =>
                    <span key={index} className={`${item.color} circle`} style={{backgroundColor: item.color}}
                          onClick={(i) => handleColorClick(item.color)}>
                    </span>)
            }
        </>
    )
}

export default ThemeCard;
