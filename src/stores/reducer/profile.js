const initialState = {
  isError: '',
  isLoading: false,
  msg: '',
  data: {},
};

const profileUser = (state = initialState, action) => {
  switch (action.type) {
    case `PROFILE_PENDING`: {
      return {
        ...state,
        isError: false,
        isLoading: true,
        data: {},
      };
    }

    case `PROFILE_FULFILLED`: {
      return {
        ...state,
        isError: false,
        isLoading: false,
        data: action.payload.data.data[0] || {},
        msg: action.payload.data.msg,
      };
    }

    case `PROFILE_REJECTED`: {
      return {
        ...state,
        isError: true,
        isLoading: false,
        data: {},
        msg: action.payload.response.data.msg,
      };
    }

    case `EDIT_PROFILE_PENDING`: {
      return {
        ...state,
        isError: false,
        isLoading: true,
        data: {},
      };
    }

    case `EDIT_PROFILE_FULFILLED`: {
      return {
        ...state,
        isError: false,
        isLoading: false,
        data: action.payload.data.data[0] || {},
        msg: action.payload.data.msg,
      };
    }

    case `EDIT_PROFILE_REJECTED`: {
      return {
        ...state,
        isError: true,
        isLoading: false,
        data: {},
        msg: action.payload.response.data.msg,
      };
    }

    default: {
      return state;
    }
  }
};

export default profileUser;
