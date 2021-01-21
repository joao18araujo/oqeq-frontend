import { GET_OBJECTIVES } from '~store/types';

const INITIAL_STATE = {
  objectives: [],
};

const objectivesReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case GET_OBJECTIVES: {
      return { ...state };
    }

    default: {
      return state;
    }
  }
};

export default objectivesReducer;
