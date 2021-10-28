import { withRouter } from "react-router-dom";
import { MENU } from "../../constants/menu";
import { renderUrlDomain } from "../../utils/text.js";
import { timeSince } from "../../utils/time.js";
import Anchor from "../Anchor/Anchor";
import "./OneNews.scss";

const OneNews = ({
  history,
  news,
  ordinalNumber,
  hideOrdinalNumber = false,
}) => {
  const goToDetailsPage = () => history.push(`${MENU.ITEM}/${news.id}`);

  return (
    <div className="oneNews" key={news?.id}>
      <div className="oneNews__row oneNews__row--one">
        {!hideOrdinalNumber && (
          <span className="oneNews__info oneNews__info--ordinalNumber">
            {ordinalNumber}.
          </span>
        )}
        <Anchor noStyles url={news?.url}>
          <span className="oneNews__info oneNews__info--title">
            {news?.title}
          </span>
        </Anchor>
        <span className="oneNews__info oneNews__info--url">
          <Anchor url={news?.url}>({renderUrlDomain(news?.url)})</Anchor>
        </span>
      </div>
      <div className="oneNews__row oneNews__row--two">
        <span className="oneNews__info oneNews__info--points">
          {news?.score} points
        </span>
        <span
          className="oneNews__info oneNews__info--author"
          onClick={goToDetailsPage}
        >
          by {news?.by}
        </span>
        <span
          className="oneNews__info oneNews__info--time"
          onClick={goToDetailsPage}
        >
          {`${timeSince(news?.time)} ago`}
        </span>
        {news?.kids?.length && (
          <span
            className="oneNews__info oneNews__info--comments"
            onClick={goToDetailsPage}
          >
            {news.kids.length} comments
          </span>
        )}
      </div>
    </div>
  );
};

export default withRouter(OneNews);
