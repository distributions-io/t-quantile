options( digits = 16 )
library( jsonlite )

v = 1
probs = 0:24 / 25
y = qt( probs, v )

cat( y, sep = ",\n" )

data = list(
	v = v,
	data = probs,
	expected = y
)


write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/matrix.json" )
