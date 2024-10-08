import { Link } from "react-router-dom"
import ThemeSwitcher from "./ThemeSwitcher"

const Header = () => {
    return (
        <header className="bg-success pb-4">
            <nav className="navbar navbar-expand-lg justify-content-around">
                <div className=" d-flex justify-content-between">
                    <Link className="navbar-brand" to={'/'}>Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav text-white">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to={'/'}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/partidos'}>Resultados</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/resultados'}>Pricing</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <ThemeSwitcher />
            </nav>
            <form className="d-flex justify-content-center align-items-center w-50 m-auto my-3">

                <input type="text" className="form-control" id="input" placeholder="Search" />

                <button type="submit" className="btn btn-outline-success">Submit</button>
            </form>
        </header>

    )
}
export default Header