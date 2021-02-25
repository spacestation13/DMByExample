# Statements

A DM program is (mostly) made up of a series of statements:

```dm
/mob/Login()
	// statement
	// statement
```
There are a few kinds of statements in DM. Statements can stand alone, but an expression cannot.

An expression:
```dm
x + 5
```

A statement:
```dm
x += 5
```

Statements can be part of other statements, and expressions must be part of a statement.
```dm
// variable binding
var/x = 5

// this line is a statement, and there is a (expression) in it
x = (x + 5)

var/lessThan3 = x < 3
world.log << lessThan3
```

## Activity
Try making a statement of your own from a total of three expressions. It should be true (1) if a variable `y` is greater than 3 but less than 10.
> Hint: Think of nested expressions.
