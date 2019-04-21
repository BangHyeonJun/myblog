import HeaderItem from "./HeaderItem";

let stores = {};

export function initializeStore() {
    // Always make a new store if server, otherwise state is shared between requests

    stores = {
        MenuItem: new HeaderItem()
    };

    return stores;
}
