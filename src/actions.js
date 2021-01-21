import Axios from "axios";
// export const fetchPosts = () => {
//   return async (dispatch, getState) => {
//     const response = await Axios.get(
//       "https://jsonplaceholder.typicode.com/posts"
//     );
//     console.log("response>", response);
//     dispatch({
//       type: "FETCH_POSTS",
//       payload: response.data,
//     });
//   };
// };

// same mathi ko but ali short line ma gareko tai async fxn return garxa.

// export const fetchPosts = () => async (dispatch, getState) => {
//   const response = await Axios.get(
//     "https://jsonplaceholder.typicode.com/posts"
//   );
//   console.log("response>", response);
//   dispatch({
//     type: "FETCH_POSTS",
//     payload: response.data,
//   });
// };

export const fetchPosts = () => async (dispatch, getState) => {
  dispatch({ type: "FETCH_POSTS_REQUEST" });

  try {
    const response = await Axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    dispatch({ type: "FETCH_POSTS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "FETCH_POSTS_FAILURE", payload: error });
  }
};
