/**
 * @fileoverview Adds a {@link Array#clean} method.
 * @author Arunjit Singh <arunjit@me.com>
 * @copyright Copyright 2011 Arunjit Singh. All Rights Reserved.
 * @license MIT license. This notice must be included in all distributions.
 *     @see //LICENSE for details.
 *     @see http://www.opensource.org/licenses/mit-license.php for details.
 */

if (!Array.prototype.clean) {
  /**
   * Filters out {null} and {undefined} values from an array. Optionally, it can
   * also filter out falsy values like {0}, {''}.
   * @param {boolean} falsy Whether to filter out falsy values too.
   * @return {Array} The cleaned array. The original array is left intact.
   */
  Array.prototype.clean = function clean(falsy) {
    falsy = falsy || false;
    return this.filter(function(i) {
      if (falsy) {
        return i;
      } else if (i === null || i === undefined) {
        return false;
      }
      return true;
    });
  };
}
