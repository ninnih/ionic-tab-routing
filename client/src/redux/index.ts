import Store from '../redux/store/index';

declare global {
	interface Window { store: any; }
}

window.store = Store;