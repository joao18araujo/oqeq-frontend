import api from '~services/api';

import { GET_OBJECTIVES, OBJECTIVES_ERROR } from '~store/types';

export const getObjectives = () => async (dispatch) => {
  try {
    const res = await api.get('test');
    const objectives = res.data;

    dispatch({
      type: GET_OBJECTIVES,
      payload: { objectives },
    });
  } catch (e) {
    dispatch({
      type: OBJECTIVES_ERROR,
      payload: e,
    });
  }
};
