import "./footerSection.css";
import { footerData } from "../../../allPagesPaths";

/*===============================*/
/*===============================*/
/*===============================*/

const FooterSection = () => {
    return (
        <footer className="footer-section">
            <div className="container-fluid h-100">
                <div className="footer-section-content">
                    <div className="left">
                        <div className="copyrights" >
                            Copyright<sup>© </sup>2025 Nader Ghanawi</div>
                        <div className="signature">
                            Designed, made, and deployed by <span className="fw-bolder">Nader Ghanawi</span>
                        </div>
                    </div>
                    <div className="right links">
                        <ul className="">
                            {footerData.map(d => (
                                <li key={d.id}>
                                    <a href={d.hrefTo} target="_blank">{d.footerIcon}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterSection;