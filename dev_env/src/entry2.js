/*
    Should contain some code which is dependant on ./services/dependantService.js
**/

import _ from 'lodash';
import dependantService from './service/dependantService';

(() => {
    dependantService.console(_.partition([100, 1, 200], n => n > 90));
})();
