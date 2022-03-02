import './orderhistory.css';
import arrow_back from '../assets/image/arrow_back.svg'
import search_icon from '../assets/image/search_black.svg'

function OrderHistory() {
  return (
    <div className="order-history-container">
      <div className='order-history-header'>
        <button>
          <img src={arrow_back} alt="back" />
        </button>
        <h4>Order History</h4>
      </div>
      <div className='order-history-navigation-bar'>
        <ul>
          <li><button className='navigation-btn-93w'>New</button></li>
          <li><button className='navigation-btn-127w'>In process</button></li>
          <li><button className='navigation-btn-127w'>Completed</button></li>
          <li><button className='navigation-btn-127w'>Cancelled</button></li>
        </ul>
      </div>
      <div className='order-history-body'>
        <div className='order-history-search-bar'>
          <button>
            <img src={search_icon} alt="find" />
          </button>
          <input type="text" placeholder='Tìm kiếm theo mã đơn hàng hoặc tên người nhận'
          />
        </div>
      </div>
    </div>
  );
}

export default OrderHistory;
