import {GlobalManager} from './global/index.js';

// Global Manager Instance
export let GM;

export const debug = true;

function init() {
    GM = new GlobalManager();
    GM.startEnvironment();
}

window.addEventListener('DOMContentLoaded', init);