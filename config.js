'use strict';
const path = require('path');
const argv = require('minimist')(process.argv.slice(2));
const fs = require('fs');

if (argv.h || argv.help || !argv.config) {
    console.log(
        `
    Usage: stresser [options]

    Options:
        -h | --help
            Outputs this helpful information

        -v | --verbose <e|b|c>
            Sets verbosity
                - e: Errors
                - c: HTTP Status Codes
                - b: HTTP body
        
        --config
            read from config file, provide file path

`
    );

    process.exit(1);
}

let config;
try {
    config = JSON.parse(fs.readFileSync(argv.config, {encoding:'utf8', flag:'r'}))
}
catch (err) {
    console.error(err);
    process.exit(-1);
}

if (!config.url) {
    console.log('Please provide a url');
    process.exit(-1);
}

const url = config.url;
const html = config.html === false || config.html === 'false' ? null : config.html || path.join(path.dirname(process.argv[1]), 'report', `report-${Date.now()}.html`);
const timeout = config.timeout || 10000;
const count = config.count || 10;
const concurrent = config.concurrent || 100;
const method = config.method || 'get';
const payloadType = config.payloadType || null;
const headers = config.headers || {};
const auth = config.auth || null

const _v = argv.v || argv.verbose || '';
const verbose = {
    e: ~_v.indexOf('e'),
    c: ~_v.indexOf('c'),
    b: ~_v.indexOf('b')
};

const CPUs = config.threads || require('os').cpus().length;
const concurrentPerCPU = Math.floor(concurrent / CPUs);
const force = config.force;

const payloadData = config.payloadData || null;

module.exports = {
    url,
    method,
    count,
    concurrent,
    timeout,
    html,
    verbose,
    concurrentPerCPU,
    CPUs,
    force,
    payloadData,
    payloadType,
    headers,
    auth
};

html && console.error('Will output report file to', html);