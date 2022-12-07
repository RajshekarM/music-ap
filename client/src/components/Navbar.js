function Navbar() {
    return (
     
        <div>


                        <nav className="navbar" role="navigation" aria-label="main navigation">
                            <div className="navbar-brand">
                                <a className="navbar-item" href="https://bulma.io">
                                  <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28"/>
                                </a>
                                <a href="adasdsa" role="button" className="navbar-burger  is-active" aria-label="menu" aria-expanded="false">
                                    <span aria-hidden="true"></span>
                                    <span aria-hidden="true"></span>
                                    <span aria-hidden="true"></span>
                                </a>
                                <div className="navbar-menu" id="navMenu">
                                    <div className="navbar-item has-dropdown is-hoverable">
                                            <a href="" className="navbar-link"> Docs </a>
                                            <div className="navbar-dropdown">
                                                <div className="navbar-item">Versionas 0.9.4</div>
                                                <div className="navbar-item">Version 0.9.4</div>
                                                <div className="navbar-item">Version 0.9.4</div>
                                                <hr className="navbar-divider"/>
                                                <div className="navbar-item">Version 0.9.4</div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
        </div>
    );
  }
  
  export default Navbar;
  