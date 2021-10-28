import { STORE_ACTION_TYPE } from "../../constants/storeActionType";

const initialState = {
  newsList: [],
  newsListLoading: false,
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_ACTION_TYPE.READ_NEWS_LIST: {
      return {
        ...state,
        newsList: action.payload.newsList.map((news) => ({ id: news })),
      };
    }
    case STORE_ACTION_TYPE.READ_NEWS_DETAILS: {
      const foundIndex = state.newsList.findIndex(
        (news) => news.id === action.payload.id
      );
      state.newsList[foundIndex] = {
        ...state.newsList[foundIndex],
        ...action.payload.details,
      };
      return state;
    }
    default: {
      return state;
    }
  }
};

export default newsReducer;
