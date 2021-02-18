import { Faction } from './Faction';
import { Torn } from './Torn';
import { User } from './User';

class TornAPI {

    constructor(private apiKey: string) {
    }

    private _torn: Torn | null = null;
    get torn(): Torn {
        if (!this._torn) {
            this._torn = new Torn(this.apiKey);
        }

        return this._torn;
    }

    private _user: User | null = null;
    get user(): User {
        if (!this._user) {
            this._user = new User(this.apiKey);
        }

        return this._user;
    }

    private _faction: Faction | null = null;
    get faction(): Faction {
        if (!this._faction) {
            this._faction = new Faction(this.apiKey);
        }

        return this._faction;
    }
}

export { TornAPI };
