import Menu from "./Menu";

let stores = {};

export function initializeStore() {
    // Always make a new store if server, otherwise state is shared between requests

    stores = {
        Menu: new Menu()
    };

    return stores;
}
