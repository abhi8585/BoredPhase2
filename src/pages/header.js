// import { color } from 'd3-color';
import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {

    constructor(props){
        super(props)
        this.connectWalletHandler = this.connectWalletHandler.bind(this)
        
    }

    async connectWalletHandler() {
      
      // if (networkId != 137 && networkId != 80001){
      //   alert("Please switch to Polygon Network!")
      //   return
      // }
      // console.log(networkId)
        console.log("button clicked")
        console.log(this.props.provider)
        // console.log(this.props.provider?.selectedAddress)
        console.log(this.props.accounts)
        if(this.props.accounts.length > 0){
          alert("Wallet already connected!!")
          return
        }
        this.props.provider.request({ method: 'eth_requestAccounts' })
        // alert("Wallet connected successfully!!")
      }

    render() {
        
        return (
            <div>
                {/* header */}
                <header className="header">
    <div className="header__content">
      <div className="header__menu">
        <ul className="header__nav">
          <li className="header__nav-item" style={{color:"white"}}>
          <Link to={`/`}>BoredWineClub
                    </Link>
          </li>
        </ul>
     
      </div>
      {/* <form action="#" class="header__search">
				<input type="text" placeholder="Search items, collections, and creators">
				<button type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"/></svg></button>
				<button type="button" class="close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"/></svg></button>
			</form> */}
      <div className="header__menu">
        <ul className="header__nav">
          {/* <li className="header__nav-item">
         
            <Link to={`/wine`}>Home
                    </Link>
          </li> */}
          {/* <li className="header__nav-item">
          <Link to={`/explore`}>Explore
                    </Link>
          
          </li> */}
          {/* <li className="header__nav-item">
            <a href="activity.html" className="header__nav-link">
              Activity
            </a>
          </li> */}
          {/* <li className="header__nav-item">
            <a
              className="header__nav-link"
              href="#"
              role="button"
              id="dropdownMenu0"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Community{" "}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z" />
              </svg>
            </a>
            <ul
              className="dropdown-menu header__nav-menu"
              aria-labelledby="dropdownMenu0"
            >
              <li>
                <a href="token.html">Unitok</a>
              </li>
              <li className="dropdown-submenu">
                <a
                  className="dropdown-item"
                  href="#"
                  role="button"
                  id="dropdownMenuSub"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Blog{" "}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z" />
                  </svg>
                </a>
                <ul
                  className="dropdown-menu header__nav-menu"
                  aria-labelledby="dropdownMenuSub"
                >
                  <li>
                    <a href="blog.html">Blog style 1</a>
                  </li>
                  <li>
                    <a href="blog2.html">Blog style 2</a>
                  </li>
                  <li>
                    <a href="article.html">Article</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="faq.html">Help center</a>
              </li>
              <li>
                <a href="contacts.html">Contacts</a>
              </li>
            </ul>
          </li> */}
          {/* <li className="header__nav-item">
            <a
              className="header__nav-link"
              href="#"
              role="button"
              id="dropdownMenu1"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Pages{" "}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z" />
              </svg>
            </a>
            <ul
              className="dropdown-menu header__nav-menu"
              aria-labelledby="dropdownMenu1"
            >
              <li>
                <a href="authors.html">Authors</a>
              </li>
              <li>
                <a href="author.html">Author</a>
              </li>
              <li>
                <a href="collection.html">Collection</a>
              </li>
              <li>
                <a href="create.html">Create</a>
              </li>
            </ul>
          </li> */}
          {/* <li className="header__nav-item">
            <a
              className="header__nav-link header__nav-link--menu"
              href="#"
              role="button"
              id="dropdownMenu2"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12,10a2,2,0,1,0,2,2A2,2,0,0,0,12,10ZM5,10a2,2,0,1,0,2,2A2,2,0,0,0,5,10Zm14,0a2,2,0,1,0,2,2A2,2,0,0,0,19,10Z" />
              </svg>
            </a>
            <ul
              className="dropdown-menu header__nav-menu"
              aria-labelledby="dropdownMenu2"
            >
              <li>
                <a href="signin.html">Sign in</a>
              </li>
              <li>
                <a href="signup.html">Sign up</a>
              </li>
              <li>
                <a href="forgot.html">Forgot password</a>
              </li>
              <li>
                <a href="404.html">404 Page</a>
              </li>
              <li>
                <a href="privacy.html">Privacy policy</a>
              </li>
            </ul>
          </li> */}
        </ul>
      </div>
      <div className="header__actions">
        {/* <div className="header__action header__action--search">
          <button className="header__action-btn" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" />
            </svg>
          </button>
        </div> */}
        <div className="header__action header__action--profile">
          {/* <a
            className="header__profile-btn header__profile-btn--verified"
            href="#"
            role="button"
            id="dropdownMenuProfile"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          > */}
            {/* <img src="img/avatars/avatar5.jpg" alt /> */}
            <div>
            {!this.props.accounts.length && <a onClick={this.connectWalletHandler}
                className="header__action-btn header__action-btn--signin"
                
                >
                <span>Connect Wallet</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wallet-fill" viewBox="0 0 16 16">
  <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542.637 0 .987-.254 1.194-.542.226-.314.306-.705.306-.958a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2h-13z"/>
  <path d="M16 6.5h-5.551a2.678 2.678 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5c-.963 0-1.613-.412-2.006-.958A2.679 2.679 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6z"/>
</svg>
                </a>}
            {this.props.accounts.length && <a onClick={this.connectWalletHandler}
                className="header__action-btn header__action-btn--signin"
                
                >
                <span>Wallet Connected</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wallet-fill" viewBox="0 0 16 16">
  <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542.637 0 .987-.254 1.194-.542.226-.314.306-.705.306-.958a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2h-13z"/>
  <path d="M16 6.5h-5.551a2.678 2.678 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5c-.963 0-1.613-.412-2.006-.958A2.679 2.679 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6z"/>
</svg>
                </a>}
            {/* <a onClick={this.connectWalletHandler}
                className="header__action-btn header__action-btn--signin"
                
                >
                <span>Connect Wallet</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M20,12a1,1,0,0,0-1-1H11.41l2.3-2.29a1,1,0,1,0-1.42-1.42l-4,4a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l4,4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L11.41,13H19A1,1,0,0,0,20,12ZM17,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V16a1,1,0,0,0-2,0v3a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V8a1,1,0,0,0,2,0V5A3,3,0,0,0,17,2Z" />
                </svg>
                </a> */}
            </div>
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z" />
            </svg> */}
          {/* </a> */}
          <ul
            className="dropdown-menu header__profile-menu"
            aria-labelledby="dropdownMenuProfile"
          >
            <li>
              <a href="author.html">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z" />
                </svg>{" "}
                <span>Profile</span>
              </a>
            </li>
            <li>
              <a  href="author.html">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M3.71,16.29a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21,1,1,0,0,0-.21.33,1,1,0,0,0,.21,1.09,1.15,1.15,0,0,0,.33.21.94.94,0,0,0,.76,0,1.15,1.15,0,0,0,.33-.21,1,1,0,0,0,.21-1.09A1,1,0,0,0,3.71,16.29ZM7,8H21a1,1,0,0,0,0-2H7A1,1,0,0,0,7,8ZM3.71,11.29a1,1,0,0,0-1.09-.21,1.15,1.15,0,0,0-.33.21,1,1,0,0,0-.21.33.94.94,0,0,0,0,.76,1.15,1.15,0,0,0,.21.33,1.15,1.15,0,0,0,.33.21.94.94,0,0,0,.76,0,1.15,1.15,0,0,0,.33-.21,1.15,1.15,0,0,0,.21-.33.94.94,0,0,0,0-.76A1,1,0,0,0,3.71,11.29ZM21,11H7a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2ZM3.71,6.29a1,1,0,0,0-.33-.21,1,1,0,0,0-1.09.21,1.15,1.15,0,0,0-.21.33.94.94,0,0,0,0,.76,1.15,1.15,0,0,0,.21.33,1.15,1.15,0,0,0,.33.21,1,1,0,0,0,1.09-.21,1.15,1.15,0,0,0,.21-.33.94.94,0,0,0,0-.76A1.15,1.15,0,0,0,3.71,6.29ZM21,16H7a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z" />
                </svg>{" "}
                <span>Activity</span>
              </a>
            </li>
            <li>
              <a href="create.html">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M10,13H4a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V14A1,1,0,0,0,10,13ZM9,19H5V15H9ZM20,3H14a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V4A1,1,0,0,0,20,3ZM19,9H15V5h4Zm1,7H18V14a1,1,0,0,0-2,0v2H14a1,1,0,0,0,0,2h2v2a1,1,0,0,0,2,0V18h2a1,1,0,0,0,0-2ZM10,3H4A1,1,0,0,0,3,4v6a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V4A1,1,0,0,0,10,3ZM9,9H5V5H9Z" />
                </svg>{" "}
                <span>Add Asset</span>
              </a>
            </li>
            <li>
              <a href="author.html">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M19.9,12.66a1,1,0,0,1,0-1.32L21.18,9.9a1,1,0,0,0,.12-1.17l-2-3.46a1,1,0,0,0-1.07-.48l-1.88.38a1,1,0,0,1-1.15-.66l-.61-1.83A1,1,0,0,0,13.64,2h-4a1,1,0,0,0-1,.68L8.08,4.51a1,1,0,0,1-1.15.66L5,4.79A1,1,0,0,0,4,5.27L2,8.73A1,1,0,0,0,2.1,9.9l1.27,1.44a1,1,0,0,1,0,1.32L2.1,14.1A1,1,0,0,0,2,15.27l2,3.46a1,1,0,0,0,1.07.48l1.88-.38a1,1,0,0,1,1.15.66l.61,1.83a1,1,0,0,0,1,.68h4a1,1,0,0,0,.95-.68l.61-1.83a1,1,0,0,1,1.15-.66l1.88.38a1,1,0,0,0,1.07-.48l2-3.46a1,1,0,0,0-.12-1.17ZM18.41,14l.8.9-1.28,2.22-1.18-.24a3,3,0,0,0-3.45,2L12.92,20H10.36L10,18.86a3,3,0,0,0-3.45-2l-1.18.24L4.07,14.89l.8-.9a3,3,0,0,0,0-4l-.8-.9L5.35,6.89l1.18.24a3,3,0,0,0,3.45-2L10.36,4h2.56l.38,1.14a3,3,0,0,0,3.45,2l1.18-.24,1.28,2.22-.8.9A3,3,0,0,0,18.41,14ZM11.64,8a4,4,0,1,0,4,4A4,4,0,0,0,11.64,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,11.64,14Z" />
                </svg>{" "}
                <span>Settings</span>
              </a>
            </li>
            <li>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M4,12a1,1,0,0,0,1,1h7.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H5A1,1,0,0,0,4,12ZM17,2H7A3,3,0,0,0,4,5V8A1,1,0,0,0,6,8V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Z" />
                </svg>{" "}
                <span>Sign out</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <button className="header__btn" type="button">
        <span />
        <span />
        <span />
      </button> */}
    </div>
  </header>
  {/* end header */}
  
            </div>
        )
    }
}

export default Header;