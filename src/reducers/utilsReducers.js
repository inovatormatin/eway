import {
    FETCH_SEARCH,
    SEARCH_RESULT,
    SEARCH_FAIL
} from "../actions/index";

const initialState = {
    loading: false,
    results: null
}

export const getSearchResult = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SEARCH:
            return { ...state, loading: true };
        case SEARCH_RESULT:
            return { ...state, loading: false, results: action.payload, error: null };
        case SEARCH_FAIL:
            return { ...state, loading: false, results: null, error: action.payload };
        default:
            return state;
    }
}