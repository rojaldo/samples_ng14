export class Beer{
    private _id!: number;
    private _name!: string;
    private _tagline!: string;
    private _firstBrewed!: string;
    private _description!: string;
    private _imageURL!: string;
    private _abv!: number;

    constructor(json: any){
        this._id = json.id;
        this._name = json.name;
        this._tagline = json.tagline;
        this._firstBrewed = json.first_brewed;
        this._description = json.description;
        this._imageURL = json.image_url;
        this._abv = json.abv;
    }

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get tagline(): string {
        return this._tagline;
    }

    get firstBrewed(): string {
        return this._firstBrewed;
    }

    get description(): string {
        return this._description;
    }

    get imageURL(): string {
        return this._imageURL;
    }

    get abv(): number {
        return this._abv;
    }
    
}