import axios from 'axios';
import {
  SET_AUTH,
  DELETE_AUTH,
  SET_CREATORS,
  UPDATE_CREATOR,
  DELETE_CREATOR,
  SET_BUSINESS,
  UPDATE_BUSINESS,
  DELETE_BUSINESS
} from './constants';

const attemptFBLogin = (auth, history) => async dispatch => {
  (await axios.post('/auth/facebook/', auth)).data;
  dispatch({
    type: SET_AUTH,
    auth
  });
  history.push('/creators');
};

const logout = history => async dispatch => {
  dispatch({
    type: DELETE_AUTH,
    auth: {}
  });
  history.push('/');
};

const fetchCreators = () => async dispatch => {
  const creators = (await axios.get('/api/creators')).data;
  dispatch({
    type: SET_CREATORS,
    creators
  });
};

const createCreatorInsight = (creatorInsight, history) => async dispatch => {
  const created = (await axios.post('api/creatorinsights', { creatorInsight }))
    .data;
  dispatch({ type: CREATE_CREATORINSIGHT, creatorInsight: created });
  history.push('/account');
};

export { attemptFBLogin, logout, fetchCreators, createCreatorInsight };
