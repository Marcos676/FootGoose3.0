import React,{useState, useEffect} from 'react'

function Header() {

    function replaceClass(oldClass, newClass, element) {
        element.classList.remove(oldClass);
        element.classList.add(newClass);
    }

    let [darkMode, setDarkMode] = useState(false)
    
        let handleDarkMode = (darkModeState) => {
            let switchDarkMode = document.getElementById('switch-dark-mode')

            let darkModeIcon = document.getElementById('dark-mode-icon')

            if(darkModeState){
                setDarkMode(false)
                switchDarkMode.classList.add('dark-mode-active');

                replaceClass('fa-sun', 'fa-moon', darkModeIcon);
                replaceClass('text-warning', 'text-light', darkModeIcon);
                darkModeIcon.style.left = '33px'

            } else {
                setDarkMode(true)
                switchDarkMode.classList.remove('dark-mode-active');
                replaceClass('fa-moon', 'fa-sun', darkModeIcon);
                replaceClass('text-light', 'text-warning', darkModeIcon)
                darkModeIcon.style.left = '2px'
            }
        }

    useEffect(() => {
        handleDarkMode(darkMode)
    }, []);

    return (
        <header className="header-user d-flex flex-wrap flex-row justify-content-center">

            <nav className="w-100 navbar navbar-expand-sm navbar-light py-0 flex-wrap">
                <div className="d-flex p-1 justify-content-around w-100">

                    {/* <!-- logo --> */}
                    <div className="logo w-25 d-flex align-content-center flex-wrap"><img className='w-100' src="http://localhost:4000/images/logo/logo.png" alt="logo" /></div>

                    <div className='d-flex align-content-around justify-content-between flex-wrap search-navbar-content'>

                        {/* <!-- search --> */}
                        <div className="search d-flex align-content-around flex-wrap">
                            <form className="w-100 d-flex" action="#" method="get">
                                <input className="input-search form-control rounded-left flex-xl-grow-1" type="text" name="" id="" placeholder='¿Qué estas buscando?' />
                                <button className="btn bg-light border border-left rounded-right flex-ms-grow-1" type="submit"><i
                                    className="fas fa-search"></i></button>
                            </form>
                        </div>

                        <a className="btn-ingresar btn btn-secondary " >
                            Ingresar
                        </a>

                        {/* start burguer button */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                    </div>
                </div>
                <div className="collapse navbar-collapse text-center w-100" id="navbarNav">

                    <ul className="navbar-links navbar-nav d-flex justify-content-around flex-wrap">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Tienda</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Refugio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Nosotros</a>
                        </li>
                    </ul>

                    <ul className="navbar-cart navbar-nav d-flex justify-content-around flex-wrap">
                        <li className="nav-item py-2">
                            <a href="#"><i className="fas fa-shopping-cart"></i>
                            </a>
                        </li>
                        <li className="nav-item py-2">
                            <div id='switch-dark-mode' className='switch-dark-mode position-relative' onClick={()=>handleDarkMode(darkMode)}>
                            <i id="dark-mode-icon" className="fas position-absolute top-50 translate-middle-y"></i>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
            {/* end burguer button */}


        </header >
    )
}

export default Header
