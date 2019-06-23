#!/usr/bin/env node
 
const Generator = require('./dist/generator');
const CheckUpdates = require('./check-update');

Generator();
CheckUpdates();
