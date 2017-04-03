import dispatcher from "../Dispatcher";

export function fetchData() {
    dispatcher.dispatch({
        type : "FETCH_DATA"
    });
}

export function search(text) {
    dispatcher.dispatch({
        type : "SEARCH_ITEMS",
        text
    })
}