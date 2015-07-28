options( digits = 16 )
library( jsonlite )


v = 4.3
probs = c( 0, 0.25, 0.5, 0.75, 1 )
y = qt( probs, v )

cat( y, sep = ",\n" )

data = list(
	v = v,
	data = probs,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/partial.json" )
