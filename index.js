'use strict';

/**
 * Convert String to Capitalize
 * @param {boolean} lower
 * This parameter is optional, This converts uppercase to Capitalize in Whole string.
 * @return {string}
 */

String.prototype.toCapitalize = function (lower) {
    return (lower ? this.toLowerCase() : this).replace(/(?:^|\s)\S/g, function (a) {
        return a.toUpperCase()
    })
}