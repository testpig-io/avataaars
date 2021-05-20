"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** Used to generate unique IDs. */
var idCounter = {};
/**
 * Generates a unique ID. If `prefix` is given, the ID is appended to it.
 *
 * @since 0.1.0
 * @category Util
 * @param {string} [prefix=''] The value to prefix the ID with.
 * @returns {string} Returns the unique ID.
 * @see random
 * @example
 *
 * uniqueId('contact_')
 * // => 'contact_104'
 *
 * uniqueId()
 * // => '105'
 */
function uniqueId(prefix) {
    if (!idCounter[prefix]) {
        idCounter[prefix] = 0;
    }
    var id = ++idCounter[prefix];
    return "" + prefix + id;
}
exports.default = uniqueId;
