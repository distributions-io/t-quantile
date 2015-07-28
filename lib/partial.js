'use strict';

// MODULES //

var betaincinv = require( 'compute-betaincinv/lib/ibeta_inv_imp.js' ),
	sign = require( 'compute-signum/lib/number.js' );


// FUNCTIONS //

var sqrt = Math.sqrt;


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
		var xVals, prob, x1, x2;
		if ( p !== p || p < 0 || p > 1 ) {
			return NaN;
		}

		prob = ( p > 0.5 ) ? 1 - p : p;
		xVals = betaincinv( v / 2, 0.5, 2 * prob, 1 - 2 * prob );
		x1 = xVals[ 0 ];
		x2 = xVals[ 1 ];
		return sign( p - 0.5 ) * sqrt( v * x2 / x1 );
	};
} // end FUNCTION partial()

// EXPORTS //

module.exports = partial;
