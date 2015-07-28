'use strict';

// MODULES //

var betaincinv = require( 'compute-betaincinv/lib/ibeta_inv_imp.js' ),
	sign = require( 'compute-signum/lib/number.js' );


// FUNCTIONS //

var sqrt = Math.sqrt;


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
	var xVals, prob, x1, x2;
	if ( p !== p || p < 0 || p > 1 ) {
		return NaN;
	}
	prob = ( p > 0.5 ) ? 1 - p : p;
	xVals = betaincinv( v / 2, 0.5, 2 * prob, 1 - 2 * prob );
	x1 = xVals[ 0 ];
	x2 = xVals[ 1 ];
	return sign( p - 0.5 ) * sqrt( v * x2 / x1 );
} // end FUNCTION quantile()


// EXPORTS //

module.exports = quantile;
