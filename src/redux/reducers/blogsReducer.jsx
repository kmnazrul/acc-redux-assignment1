import * as actionTypes from "../actions/type";

const initialState = {
  blogs: [],
};

export const blogsReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CONTENT:
      return {
        ...state,
        blogs: action.payload,
      };

    case actionTypes.ADD_CONTENT:
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
      };

    case actionTypes.UPDATE_CONTENT:
      return state.blogs.map((blog) =>
        blog._id === action.payload._id
          ? { ...blog, data: action.payload._id }
          : blog
      );

    case actionTypes.DELETE_CONTENT:
      return {
        ...state,
        blogs: state.blogs.filter((blog) => blog._id !== action.payload),
      };

    default:
      return state;
  }
};
