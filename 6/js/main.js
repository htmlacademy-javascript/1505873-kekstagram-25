import {getNewObjects} from './data.js';
import './util.js';
import './filter.js';
import './editor-file.js';
import './upload-file.js';

const newObjects = Array.from({ length: 25 }, getNewObjects);
window.console.log(newObjects);
