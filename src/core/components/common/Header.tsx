import { Link } from 'react-router-dom';
import './header.scss';

function Header() {
  return (
    <div className="top-menu">
      <div className="logo-nest">
        <Link to="/">HA-UET-2017</Link>
      </div>
      <div className="list-menu">
        <ul>
          <li>
            <Link to="/">Trang chủ</Link>

          </li>
          <li>
            <Link to="/bai-viet.html">Bài viết</Link>

          </li>
          <li>
            <Link to="/tin-cong-nghe.html">Tin công nghệ</Link>

          </li>
          <li>
            <Link to="/gioi-thieu.html">Về tôi</Link>

          </li>
          <li className="avatar-menu">
            <img
              src="https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png"
              alt="avatar"
            />
            <ul className="list-options">
              <li>
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                Sign in       
                </li>
              <li>
              <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
                Sign up
                </li>
              <li>
              <i className="fa fa-cog" aria-hidden="true"></i>
                Setting
                </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Header;
