import "./service.css";
import { useEffect } from "react";
import { GetTitlePage, HeadingTitle } from "../../allPagesPaths";
import { BsCheckLg } from 'react-icons/bs';
import WOW from 'wowjs';

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

const Services = () => {

    GetTitlePage('Nader Ghanawi | Services');

    useEffect(() => {

        new WOW.WOW({

            live: false

        }).init();

    }, [])

    return (
        <main>
            <div className="services">
                <HeadingTitle sub='What I Offer?' head='Services' />
                <div className="services-content">
                    <h5 className="wow zoomIn">Front End for Websites</h5>
                    <div className="service-skil-box wow bounceInLeft" data-wow-delay=".5s" data-wow-duration="1s">
                        <span><BsCheckLg /></span>
                        <p>I build websites and full-stack MERN applications that work seamlessly on all devices, ensuring a smooth user experience across desktop, tablet, and mobile.</p>
                    </div>
                    <div className="service-skil-box wow bounceInLeft" data-wow-delay=".7s" data-wow-duration="1.1s">
                        <span><BsCheckLg /></span>
                        <p>I create engaging and user-friendly animations in both websites and MERN projects, making them visually appealing and easy to navigate.</p>
                    </div>
                    <div className="service-skil-box wow bounceInLeft" data-wow-delay=".9s" data-wow-duration="1.2s">
                        <span><BsCheckLg /></span>
                        <p>I provide quality web development services at competitive prices, focusing on learning, improving, and delivering value through both front-end and MERN projects.</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Services;