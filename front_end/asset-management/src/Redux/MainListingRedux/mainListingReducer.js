import {GET_LISTINGS_REQUEST, GET_LISTINGS_SUCCESS, GET_LISTINGS_FAILURE, 
    SINGLE_IMAGE_REQUEST, SINGLE_IMAGE_SUCCESS, SINGLE_IMAGE_FAILURE} from "./mainListingActionTypes"

export const initListingsState = {

    all_listings: [],
    single_listing: {},
    err_message: ""
}

const listingsReducer = (state = initListingsState, action) => {

    switch(action.type)
    {
        case GET_LISTINGS_REQUEST:
            return{
                ...state,
                all_listings: [],
                err_message: ""
            }

        case GET_LISTINGS_SUCCESS:
            return{
                ...state,
                all_listings: action.payload,
                err_message: ""
            }    

        case GET_LISTINGS_FAILURE:
            return{
                ...state,
                all_listings: [],
                err_message: "Error fetching listings"
            }

        case SINGLE_IMAGE_REQUEST:
            return{
                ...state,
                single_listing:{}
            }    

        case SINGLE_IMAGE_SUCCESS:
            return{
                ...state,
                single_listing: action.payload
            }   
            
        case SINGLE_IMAGE_FAILURE:
            return{
                ...state,
                err_message: "Error fetching listing"
            }   
            
        default:
            return state    
    }
}

export default listingsReducer