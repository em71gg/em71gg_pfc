import picture from '../assets/react.svg'

function RallyCardDisplay() {
    const logo = picture;
  return (
    <ul className="list">
        <li className="item">
            <img src={logo} alt="" className="" />
        </li>
        <li className="item">
            <img src={logo} alt="" className="" />
        </li>
        <li className="item">
            <img src={logo} alt="" className="" />
        </li>
        <li className="item">
            <img src={logo} alt="" className="" />
        </li>
        <li className="item">
            <img src={logo} alt="" className="" />
        </li>
    </ul>
  )
}

export default RallyCardDisplay