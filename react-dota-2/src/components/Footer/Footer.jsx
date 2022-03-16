import "./Footer.css"
import valveLogo from "../../Images/Valve.png"
import { useTranslation } from "react-i18next"

const Footer = () => {
    const { t } = useTranslation();
    
    return (
        <footer>
            <div className="footer">
                <div className="items">
                    <div className="footerItem-1">
                        <a href="https://www.valvesoftware.com/en/about">
                            <span>
                                <img src={valveLogo} alt="valveLogo"></img>
                            </span>
                        </a>
                    </div>
                    <div className="footerItem-2">
                        <a href="https://www.dota2.com/">
                            <span>
                                <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/footer_logo.png" alt="dotaLogo"></img>
                            </span>
                            
                        </a>
                    </div>
                </div>
            
                <div className="parDiv">
                    <p className="footersPar">{t("footer_text")}</p>
                </div>
            </div>
        </footer>
    )
}


export default Footer