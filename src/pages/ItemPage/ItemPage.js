import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Comments from "../../components/Comments/Comments";
import NewComment from "../../components/NewComment/NewComment";
import OneNews from "../../components/OneNews/OneNews";

const ItemPage = ({
  news: { newsList },
  match: {
    params: { id },
  },
}) => {
  const foundNews = newsList.find((news) => +news.id === +id);

  return (
    <>
      <OneNews news={foundNews} hideOrdinalNumber />
      <NewComment />
      <Comments
        comments={newsList.filter(
          (item) => foundNews?.kids.indexOf(item) !== -1
        )}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ItemPage));
