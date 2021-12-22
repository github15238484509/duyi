import Axios from 'axios';
import baseURL, { URLS } from './url';

const appkey = 'dd_1597654682810';

const request = Axios.create({
  baseURL,
  params: {
    appkey,
  },
});
request.interceptors.response.use((value) => value.data);

const getSideList = (type) => request.get(
  URLS.getSide,
  { params: { type } },
);

const getGoodsList = (type, page, size, sort) => request.get(
  URLS.getGoodsList,
  {
    params: {
      type, size, sort, page,
    },
  },
);

export default {
  getSideList,
  getGoodsList,
};
