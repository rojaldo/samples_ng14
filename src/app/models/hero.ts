export class Hero {
    constructor(private _name = '', private _description = '') { }

    get name(): string {
        return this._name;
    }

    get description(): string {
        return this._description;
    }

    set name(value: string) {
        this._name = value;
    }

    set description(value: string) {
        this._description = value;
    }
}