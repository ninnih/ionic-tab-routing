export let key: any = {};

if(process.env.NODE_ENV === 'production') {
	key = require('./prod')
} else {
	key = require('./development')
}
