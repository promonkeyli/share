function Footer(){
    return (
        <div style={{color: '#444'}}>
            <p>@2022 share the knowledge of front-end | design by Young</p>
            <p>
                <a target="_blank"
                   style={{ textDecoration: "none", color: "#444", marginLeft: '10px' }}
                   href="https://beian.miit.gov.cn/">蜀ICP备2022005564号</a> |
                <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=51082402000177"
                style={{ textDecoration: "none", color: "#444", marginLeft: '10px' }}>
                    <img src="	https://www.beian.gov.cn/img/ghs.png" alt='' style={{ verticalAlign: 'middle' }}/>
                    <span style={{marginLeft: '5px'}}>川公网安备 51082402000177号</span>
                </a>
            </p>
        </div>
    )
}
export default Footer;
