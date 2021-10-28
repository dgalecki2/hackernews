import { API_ENDPOINT } from "../../constants/apiEndpoint";
import { STORE_ACTION_TYPE } from "../../constants/storeActionType";
import { sendApiRequest } from "../../utils/api";

export function readNewsList() {
  return async (dispatch) => {
    try {
      await dispatch({
        newsListLoading: true,
        type: STORE_ACTION_TYPE.LOADING_NEWS_LIST,
      });
      return await sendApiRequest({
        thenFunction: (result) => {
          dispatch({
            payload: {
              newsList: result.data,
            },
            type: STORE_ACTION_TYPE.READ_NEWS_LIST,
          });
        },
        url: `${API_ENDPOINT.READ_NEWS_LIST}.json`,
      });
    } catch (error) {
      console.error(error);
    } finally {
      dispatch({
        newsListLoading: false,
        type: STORE_ACTION_TYPE.LOADING_NEWS_LIST,
      });
    }
  };
}

export function readOneNewsDetails(id) {
  return async (dispatch) => {
    try {
      return await sendApiRequest({
        thenFunction: (result) => {
          dispatch({
            payload: {
              id,
              details: result.data,
            },
            type: STORE_ACTION_TYPE.READ_NEWS_DETAILS,
          });
        },
        url: `${API_ENDPOINT.READ_NEWS_DETAILS}/${id}.json`,
      });
    } catch (error) {
      console.error(error);
    }
  };
}
