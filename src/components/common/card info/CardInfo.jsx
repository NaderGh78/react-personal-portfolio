import { useEffect } from "react";
import WOW from 'wowjs';

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

const CardInfo = ({ data: { cardIcon, cardTitle, cardAmount, cardLink, cardLinkText } }) => {

    useEffect(() => {

        new WOW.WOW({

            live: false

        }).init();

    }, [])

    return (
        <div className="card-info wow zoomIn">
            <span className="text-white">{cardIcon}</span>
            <h5 className="text-white mt-2">{cardTitle}</h5>
            {cardLink && cardLinkText
                ?
                <a href={cardLink} target="_blank">{cardLinkText}</a>
                :
                <p>{cardAmount}</p>
            }
        </div>
    )
}

export default CardInfo;