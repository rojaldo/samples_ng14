import * as moment from "moment";

export class Apod {
    private _date!: string;
    private _explanation!: string;
    private _mediaType!: string;
    private _serviceVersion!: string;
    private _title!: string;
    private _url!: string;
    private _hdUrl!: string;

    constructor(data: any) {
        this._date = data.date;
        this._explanation = data.explanation;
        this._mediaType = data.media_type;
        this._serviceVersion = data.service_version;
        this._title = data.title;
        this._url = data.url;
        this._hdUrl = data.hdurl;
    }

    get date(): string {
        return this._date;
    }

    get explanation(): string {
        return this._explanation;
    }

    get mediaType(): string {
        return this._mediaType;
    }

    get serviceVersion(): string {
        return this._serviceVersion;
    }

    get title(): string {
        return this._title;
    }

    get url(): string {
        return this._url;
    }

    get hdUrl(): string {
        return this._hdUrl;
    }

    isSameDate(strDate: string | undefined): boolean {
        if (strDate === undefined) {
            return false;
        }
        return moment(this._date).isSame(strDate, 'day');
    }

}