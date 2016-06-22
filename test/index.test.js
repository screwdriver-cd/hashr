'use strict';
const assert = require('chai').assert;
const sinon = require('sinon');
const mockery = require('mockery');

sinon.assert.expose(assert, { prefix: '' });

describe('index test', () => {
    let hashaMock;
    let index;
    let sha1Options;

    before(() => {
        mockery.enable({
            useCleanCache: true,
            warnOnUnregistered: false
        });
    });

    beforeEach(() => {
        hashaMock = sinon.stub();
        mockery.registerMock('hasha', hashaMock);

        /* eslint-disable global-require */
        index = require('../');
        /* eslint-enable global-require */

        sha1Options = {
            algorithm: 'sha1',
            encoding: 'hex'
        };
    });

    afterEach(() => {
        mockery.deregisterAll();
        mockery.resetCache();
    });

    after(() => {
        mockery.disable();
    });

    it('handles objects', () => {
        const object = {
            value1: '1',
            value2: '2'
        };

        index.sha1(object);
        assert.calledWith(hashaMock, JSON.stringify(object), sha1Options);
    });

    it('handles strings', () => {
        const str = 'foo';

        index.sha1(str);
        assert.calledWith(hashaMock, JSON.stringify(str), sha1Options);
    });
});
