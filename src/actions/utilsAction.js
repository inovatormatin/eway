import {
    FETCH_SEARCH,
    SEARCH_RESULT,
    SEARCH_FAIL
} from "./index";

import axios from "axios";
import { searchKeyword } from "../constant/routes";

export const getSearchData = (keyword) => async (dispatch) => {
    dispatch({
        type: FETCH_SEARCH,
    });
    // get all search result
    const searchData = await axios.get(searchKeyword + keyword)
    .then(res => res)
    .catch(error => error.response.data.error);

    if(searchData.status === 200){
        dispatch({
            type : SEARCH_RESULT,
            payload: searchData.data,
        });
    } else {
        dispatch({
            type: SEARCH_FAIL,
            payload: 'search failed',
        });
    };
}