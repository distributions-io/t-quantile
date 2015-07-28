'use strict';

// FUNCTIONS //


// PARTIAL //

/**
* FUNCTION: partial( v )
*	Partially applies degrees of freedom `v` and returns a function for evaluating the quantile function for a Student t distribution.
*
* @param {Number} v - degrees of freedom
* @returns {Function} quantile function
*/
function partial( v ) {

	/**
	* FUNCTION: quantile( p )
	*	Evaluates the quantile function for a Student t distribution.
	*
	* @private
	* @param {Number} p - input value
	* @returns {Number} evaluated quantile function
	*/
	return function quantile( p ) {
		if ( p !== p || p < 0 || p > 1 ) {
			return NaN;
		}
	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
