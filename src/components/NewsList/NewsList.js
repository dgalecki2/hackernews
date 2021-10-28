import { useCallback, useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { ITEMS_PER_PAGE } from "../../constants/list";
import { readNewsList, readOneNewsDetails } from "../../store/actions/news.js";
import OneNews from "../OneNews/OneNews";

const NewsList = ({
  news: { newsList },
  page,
  readNewsList,
  readOneNewsDetails,
}) => {
  const currentPage = page - 1;
  const itemsPerPage = ITEMS_PER_PAGE;
  const sliceStart = currentPage * itemsPerPage;
  const sliceEnd = sliceStart + itemsPerPage;

  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  useEffect(() => {
    if (!newsList) {
      readNewsList();
    }
  }, [newsList, readNewsList]);

  useEffect(() => {
    let counter = 0;
    newsList.forEach((news) => {
      readOneNewsDetails(news.id).then(() => {
        counter += 1;
        if (counter === 30) {
          forceUpdate();
        }
      });
    });
  }, [forceUpdate, newsList, readOneNewsDetails]);

  return newsList.slice(sliceStart, sliceEnd).map((news, index) => {
    return (
      <OneNews
        key={news.id}
        news={news}
        ordinalNumber={sliceStart + index + 1}
      />
    );
  });
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    readNewsList: () => dispatch(readNewsList()),
    readOneNewsDetails: (id) => dispatch(readOneNewsDetails(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(NewsList));
