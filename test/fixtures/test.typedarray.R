options( digits = 16 )
library( jsonlite )


v = 16
probs = seq( 0, 1, 0.01 )
y = qt( probs, v )

cat( y, sep = ",\n" )

data = list(
	v = v,
	data = probs,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/typedarray.json" )
