import {action, makeObservable, observable} from "mobx";
import {PoloniexResponse} from "../models/poloniex.model";

export class QuotesStore {
    responseData: PoloniexResponse = [];
    isError: boolean = false;

    constructor() {
        makeObservable(this, {
            responseData: observable,
            isError: observable,
            fetchApiData: action,
            setResponseData: action,
            setError: action,
        });
    }

    async fetchApiData() {
        try {
            this.setError(false);
            const url = "https://poloniex.com/public?command=returnTicker";
            const request = await fetch(url);
            const response: PoloniexResponse = await request.json();
            let arr: PoloniexResponse = [];
            for (let key in response) {
                response[key].name = key;
                arr.push(response[key]);
            }
            this.setResponseData(arr);

        } catch (e) {
            this.setError(true);
            console.log("Error", e);
        }
    }

    setResponseData(response: PoloniexResponse) {
        this.responseData = response;
    }

    setError(isErrValue: boolean) {
        this.isError = isErrValue;
    }
}
