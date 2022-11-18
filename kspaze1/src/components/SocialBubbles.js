import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter,  faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function SocialBubbles() {
    return (
        <div className="icon-container" id='Contact'>
      <a href="https://www.instagram.com/kindgotospace" className="social" target='blank'>
        <FontAwesomeIcon icon={faInstagram} className="my-button"/>
      </a>
      <a href="https://www.twitter.com/kspaze1" className="social" target='blank' >
        <FontAwesomeIcon icon={faTwitter} className="my-button" />
      </a>
      <a href="mailto:kspaze1@gmail.com" className="social" target='blank' >
        <FontAwesomeIcon icon={faEnvelope} className="my-button"/>
      </a>
        </div>
    );
}