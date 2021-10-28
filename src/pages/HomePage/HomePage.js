import { withRouter } from "react-router-dom";
import Button from "../../components/Button/Button";
import NewsList from "../../components/NewsList/NewsList";
import { MENU } from "../../constants/menu";

const HomePage = ({
  history,
  match: {
    params: { page = 1 },
  },
}) => {
  return (
    <>
      <NewsList page={page} />
      <Button
        onClick={() => history.push(`${MENU.HOME_PAGE}/${+page + 1}`)}
        text="More"
      />
    </>
  );
};

export default withRouter(HomePage);
