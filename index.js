'use strict';
const hasha = require('hasha');

// test
module.exports = {
    sha1(dataToHash) {
        return hasha(JSON.stringify(dataToHash), { algorithm: 'sha1', encoding: 'hex' });
    }
};
