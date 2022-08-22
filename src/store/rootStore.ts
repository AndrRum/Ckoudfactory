import {QuotesStore} from "./quotesStore";
import makeInspectable from "mobx-devtools-mst";

class RootStore {
    quotesStore: QuotesStore;

    constructor() {
        this.quotesStore = new QuotesStore()
    }
}

export const rootStore = new RootStore();

makeInspectable(RootStore);
