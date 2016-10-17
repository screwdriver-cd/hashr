'use strict';

const hasha = require('hasha');

module.exports = {
    sha1(dataToHash) {
        return hasha(JSON.stringify(dataToHash), { algorithm: 'sha1', encoding: 'hex' });
    }
};
