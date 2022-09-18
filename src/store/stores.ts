import { writable } from "svelte/store"

const authState = writable({})

const stores = {
    authState
}

export default stores