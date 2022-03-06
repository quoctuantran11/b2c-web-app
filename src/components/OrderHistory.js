import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import arrow_back from '../assets/image/arrow_back.svg'
import search_icon from '../assets/image/search_black.svg'
import expand_less from '../assets/image/expand_less.svg'
import expand_more from '../assets/image/expand_more.svg'

function OrderHistory() {
  const [expandItem, setExpandItem] = useState(false)
  const [expandDetail, setExpandDetail] = useState(false)

  const { t, i18n } = useTranslation()

  const orderDatasets = [
    {
      id: "8550491",
      dateTime: "21/02/2022 20:59",
      customer: "Thảo Anh - 98/1B Bạch Đằng, Phường 2, Quận Tân Bình, TP.HCM",
      detail: [
        {
          product: "Cải xoăn",
          quantity: 3,
          price: 40000
        },
        {
          product: "Cải xoăn",
          quantity: 2,
          price: 20000
        }
      ],
      provisional: 160000,
      shipping_fee: 25000,
      discount: 50000
    }
  ]

  const LanguageSelector = () => {

    const { t, i18n } = useTranslation();


    const changeLanguage = (lang) => {

      i18n.changeLanguage(lang);

    };


    return (
      <div>
        <button onClick={() => changeLanguage('vi')}>VI</button>
        <button onClick={() => changeLanguage('en')}>EN</button>
      </div>

    );

  };

  return (
    <div className="order-history-container">
      <LanguageSelector />
      <div className='order-history-header'>
        <button>
          <img src={arrow_back} alt="back" />
        </button>
        <h3>{t("title")}</h3>
      </div>
      <div className='order-history-navigation-bar'>
        <ul>
          <li>
            <button className='navigation-btn-93w'>{t("navigation.new")}</button>
            <div className='quantity-notification'>1</div>
          </li>
          <li>
            <button className='navigation-btn-127w'>{t("navigation.inProcess")}</button>
            <div className='quantity-notification'>3</div>
          </li>
          <li>
            <button className='navigation-btn-127w'>{t("navigation.completed")}</button>
          </li>
          <li>
            <button className='navigation-btn-127w'>{t("navigation.cancelled")}</button>
          </li>
        </ul>
      </div>
      <div className='order-history-body'>
        <form className='order-history-search-bar'>
          <button>
            <img src={search_icon} alt="find" />
          </button>
          <input type="text" placeholder='Tìm kiếm theo mã đơn hàng hoặc tên người nhận'
          />
        </form>
        <div className='order-history-orderlist'>
          <div className='order-history-orderTitle'>
            <p>Mã đơn hàng:</p>
            <p>Thời gian tạo:</p>
            <p>Thông tin KH:</p>
          </div>
          <div className='order-history-orderContent' >
            <p className='orderId'>8550491</p>
            <p>21/02/2022 20:59</p>
            <p>Thảo Anh - 98/1B Bạch Đằng, Phường 2, Quận Tân Bình, TP.HCM</p>
          </div>
          <p className='order-history-detailTitle'>Thông tin đơn hàng:</p>
          <div className='order-history-detail'>
            <div className='detail-grid'>
              <div className='detail-product-name grid-child'>
                <p><b>3</b> x Cải xoăn</p>
                <p className='hidden-content' style={{ maxHeight: expandItem ? '20px' : 0 }}>
                  <b>2</b> x Cải xoăn
                </p>
              </div>
              <div className='detail-product-price grid-child'>
                <p>VND 40,000</p>
                <p className='hidden-content' style={{ maxHeight: expandItem ? '20px' : 0 }}>VND 20,000</p>
              </div>
            </div>
            {!expandItem ?
              <button onClick={() => setExpandItem(!expandItem)} className='btn-link-center'>Xem thêm sản phẩm</button>
              : <button onClick={() => setExpandItem(!expandItem)} className='btn-link-center'>Thu gọn</button>}
          </div>
          <div className='order-history-detail-price'>
            <div className='order-history-detail'>
              <div className='detail-grid'>
                <div className='detail-product-name grid-child hidden-content'
                  style={{ maxHeight: expandDetail ? '150px' : 0 }}>
                  <p>Tổng tiền hàng</p>
                  <p>Phí vận chuyển</p>
                  <p>Giảm giá</p>
                </div>
                <div className='detail-product-price grid-child hidden-content'
                  style={{ maxHeight: expandDetail ? '150px' : 0 }}>
                  <p>VND 160,000</p>
                  <p>VND 25,000</p>
                  <p className="light orange">-VND 50,000</p>
                </div>
              </div>
            </div>
            <div className='order-history-detail'>
              <div className='detail-grid'>
                <div className='detail-product-name grid-child'>
                  <p>5 sản phẩm</p>
                </div>
                <div className='detail-product-price grid-child total-price'>
                  <p className='strong orange'>Tổng cộng: VND 135,000</p>
                  {!expandDetail ? <button onClick={() => setExpandDetail(!expandDetail)}>
                    <img src={expand_more} alt="expand" />
                  </button>
                    : <button onClick={() => setExpandDetail(!expandDetail)}>
                      <img src={expand_less} alt="expand" />
                    </button>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderHistory;
