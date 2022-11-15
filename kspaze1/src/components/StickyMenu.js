import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function StickyMenu() {
    return (
        <div className="icon-menu fade-in">
      <a href="#navbar">
        <FontAwesomeIcon className="my-button menu" icon={faBars}/>
      </a>
        </div>
    );
}