import { Link } from "react-router-dom"

const Navbar = () => {
    return <div className="nav">
        <div className="log-flex">
            <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoTMbb_jDMSO9POq4OyT5EGl625TlJKsCxQA&usqp=CAU"></img>
            <h1>swiggy</h1>
        </div>
        <ul>
            <Link className="remove" to='/'><li>Home</li></Link>
            <Link className="remove" to='/search'><li>Search</li></Link>
            <Link className="remove" to='/offers'><li>Offers</li></Link>                      `
            <Link className="remove" to='/help'><li>Help</li></Link>
            <Link className="remove" to='/about'><li>About</li></Link>
            <Link className="remove" to='/contact'><li>Contact</li></Link>
            <Link className="remove" to='/addcart'><li>AddCart</li></Link>

        </ul>
    </div>
}
export default Navbar