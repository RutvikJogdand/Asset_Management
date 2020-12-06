import {GET_LISTINGS_REQUEST, GET_LISTINGS_SUCCESS, GET_LISTINGS_FAILURE, 
    SINGLE_IMAGE_REQUEST, SINGLE_IMAGE_SUCCESS, SINGLE_IMAGE_FAILURE,
    FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS_FAILURE,
    POST_IMAGE_REQUEST, POST_IMAGE_SUCCESS, POST_IMAGE_FAILURE} from "./mainListingActionTypes"
import axios from "axios"

export const get_listings_req = () => ({
    type: GET_LISTINGS_REQUEST
})

export const get_listings_success = (payload) => ({
    type: GET_LISTINGS_SUCCESS,
    payload
})

export const get_listings_failure = (payload) => ({
    type: GET_LISTINGS_FAILURE,
    payload
})

export const get_listings = () => (dispatch) => {

    dispatch(get_listings_req())
    axios
    .get("https://5fbcebcf3f8f90001638c720.mockapi.io/api/v1/assets")
    .then((res) => {

        console.log(res, "LISTINGS FETCHED")
        dispatch(get_listings_success(res.data))
    })
    .catch((err) => {

        dispatch(get_listings_failure(err))
    })
}

// Actions to get single image below:

export const single_img_req = () => ({
    type: SINGLE_IMAGE_REQUEST
})

export const single_img_success = (payload) => ({
    type: SINGLE_IMAGE_SUCCESS,
    payload
})

export const single_img_failure = (payload) => ({
    type: SINGLE_IMAGE_FAILURE,
    payload
})

export const get_single_img = (payload) => (dispatch) => {

    dispatch(single_img_req())
    axios
    .get(`https://5fbcebcf3f8f90001638c720.mockapi.io/api/v1/assets/${payload}`)
    .then((res) => {

        console.log(res, "SINGLE LISTING FETCHED")
        dispatch(single_img_success(res.data))
    })
    .catch((err) => {

        dispatch(single_img_failure(err))
    })
}

// Get comments actions below:
export const fetch_comments_req = () => ({
    type: FETCH_COMMENTS_REQUEST
})

export const fetch_comments_success = (payload) => ({
    type: FETCH_COMMENTS_SUCCESS,
    payload
})

export const fetch_comments_failure = (payload) => ({
    type: FETCH_COMMENTS_FAILURE,
    payload
})

export const fetch_comments = (payload) => (dispatch) => {

    dispatch(fetch_comments_req())
    axios
    .get(`https://5fbcebcf3f8f90001638c720.mockapi.io/api/v1/assets/${payload}/comments`)
    .then((res) => {

        console.log(res, "SINGLE LISTING COMMENTS FETCHED")
        dispatch(fetch_comments_success(res.data))
    })
    .catch((err) => {

        dispatch(fetch_comments_failure(err))
    })
}

// Post image actions below

export const post_img_req = () => ({
    type: POST_IMAGE_REQUEST
})

export const post_img_success = (payload) => ({
    type: POST_IMAGE_SUCCESS,
    payload
})

export const post_img_failure = (payload) => ({
    type: POST_IMAGE_FAILURE,
    payload
})

export const post_img = (payload) => (dispatch) => {

    dispatch(post_img_req())
    console.log(payload)
    axios({
        method: 'post',
        url: 'https://5fbcebcf3f8f90001638c720.mockapi.io/api/v1/assets/',
        data: {
            "title": payload.image_title,
            "description": payload.description,
            "imageURL": payload.imgURL,
        }
      })
      .then((res)=>{

        dispatch( post_img_success(res) )
      })
      .catch((err)=> {
          
        dispatch( post_img_failure(err) )
      });

}