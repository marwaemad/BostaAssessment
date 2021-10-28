import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
function Header() {
  return (
    <header className="App-header">
      <div className="row">
        <div className="header-container">
          <div className="logo">
            <img
              src="https://bosta.co/wp-content/uploads/2019/08/bosta_logo_en_red.svg"
              alt="logo"
            />
          </div>
          <div className="nav-container left-nav">
            <nav>
              <ul>
                <li>
                  <a href="./home">home</a>
                </li>
                <li>
                  <a href="./pricing">pricing</a>
                </li>
                <li>
                  <a href="./contact sales">contact sales</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="nav-container right-nav">
            <nav>
              <ul>
                <li>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      tracking shipment
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li>
                  <a href="./pricing">sign in</a>
                </li>
                <li>
                  <a href="./contact sales">عربى</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
