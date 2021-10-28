import axios from "axios";
import { HTTP_METHOD } from "../constants/httpMethod.js";

export const sendApiRequest = async ({
  data,
  method = HTTP_METHOD.GET,
  thenFunction,
  url,
}) => {
  return await axios({ data, method, url })
    .then((result) => {
      thenFunction && thenFunction(result);
    })
    .catch((error) => {
      console.error(error);
    });
};
