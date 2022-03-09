// 左侧导航nav item组件入参
import React, {ReactElement} from "react";

export interface NavCardProps{
    title: string;
    icon: ReactElement;
    path: string;
}
