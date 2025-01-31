import { GUI } from "dat.gui"

export default class Debug {
    #active

    constructor() {
        this.ui = null
        this.active = window.location.hash === '#debug'

        // Timezone
        this.timezone = 'UTC';
        if (this.active) {
            this.ui.add(this, 'timezone', ['UTC', 'Europe/Paris', 'America/New_York', 'Asia/Tokyo']);
        }
    }


    set active(isUI) {
        this.#active = isUI
        if(this.#active && !!!this.ui) this.ui = new GUI()
    }

    get active() { return this.#active }
}


