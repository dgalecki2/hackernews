import { withRouter } from "react-router-dom";
import { APP_NAME } from "../../constants/app";
import { MENU } from "../../constants/menu";
import Logo from "../Logo/Logo";
import "./Header.scss";

const Header = ({ history }) => {
  return (
    <div className="header" onClick={() => history.push(MENU.HOME_PAGE)}>
      <Logo />
      <span className="header__appName">{APP_NAME}</span>
    </div>
  );
};

export default withRouter(Header);
