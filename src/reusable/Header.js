import logo from '../assets/image/logo_large.png'
import account_icon from '../assets/image/user.png'
import cart_icon from '../assets/image/Cart.png'
import search_icon_orange from '../assets/image/search_orange.svg'

function Header() {
    return (
        <div className="header-container">
            <div className="header-leftcontent">
                <form>
                    <input type="text" placeholder="Tìm kiếm" className="header-search-bar" />
                    <button>
                        <img src={search_icon_orange} alt="search" />
                    </button>
                </form>
            </div>
            <div className="header-center">
                <img src={logo} alt="nutree" />
            </div>
            <div className="header-rightcontent">
                <button id="header-account">
                    <img src={account_icon} alt="account" />
                </button>
                <button>Đăng nhập</button>
                <button id='header-cart'>
                    <img src={cart_icon} alt="cart" />
                    <span>0</span>
                </button>
            </div>
        </div>
    )
}

export default Header;