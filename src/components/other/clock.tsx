import {useState} from "react";
enum Tense {
    AM = 'AM',
    PM = 'PM'
}

const Clock = function (){
    const [tense, setTense] = useState<Tense>();   // 时制
    const [hour, setHour] = useState<string>();    // 时
    const [minute, setMinute] = useState<string>();// 分
    const [second, setSecond] = useState<string>();// 秒
    setInterval(() => {
        const nowDate = new Date();
        const h = String(nowDate.getHours()).padStart(2, '0');
        const m = String(nowDate.getMinutes()).padStart(2, '0');
        const s = String(nowDate.getSeconds()).padStart(2, '0');
        const t = nowDate.getMinutes() < 12 ? Tense.AM : Tense.PM;
        setHour(h);  setMinute(m); setSecond(s); setTense(t);
    }, 1000);
    return (
        <div className='clock-box'>
            <div className='clock-tense'>{tense}</div>
            <div className='clock-item'>
                <div className='clock-number'>{hour}</div>
                <div>Hours</div>
            </div>
            <div>:</div>
            <div className='clock-item'>
                <div className='clock-number'>{minute}</div>
                <div>Minutes</div>
            </div>
            <div>:</div>
            <div className='clock-item'>
                <div className='clock-number'>{second}</div>
                <div>Seconds</div>
            </div>
        </div>
    )
}
export default Clock;
