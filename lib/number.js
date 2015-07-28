'use strict';

// FUNCTIONS //


// QUANTILE //

/**
* FUNCTION: quantile( p, v )
*	Evaluates the quantile function for a Student t distribution with degrees of freedom `v` at a probability `p`.
*
* @param {Number} p - input value
* @param {Number} v - degrees of freedom
* @returns {Number} evaluated quantile function
*/
function quantile( p, v ) {
	if ( p !== p || p < 0 || p > 1 ) {
		return NaN;
	}
} // end FUNCTION quantile()


// EXPORTS //

module.exports = quantile;
