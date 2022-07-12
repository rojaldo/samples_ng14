export class HeroForm {
    constructor(private _name: string, private _email: string, private _postalCode: number, private _description = '') { }

    get name(): string {
        return this._name;
    }

    get email(): string {
        return this._email;
    }

    get postalCode(): number {
        return this._postalCode;
    }

    get description(): string {
        return this._description;
    }

    set name(value: string) {
        this._name = value;
    }

    set email(value: string) {
        this._email = value;
    }

    set postalCode(value: number) {
        this._postalCode = value;
    }

    set description(value: string) {
        this._description = value;
    }
}