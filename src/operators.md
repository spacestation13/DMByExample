# Operators

The operators available in DM are very similar to other C-like languages. Their [precedence](http://www.byond.com/docs/ref/#/operator) is also similar.

Here's the base operators:
```dm
Addition = "+"
Subtraction = "-"
Multiplication = "*"
Division = "/"
Powower = "**"
Modulo = "%"
```

Conditional operators:
```dm
Equal = "=="
Not Equal = "!="
And = "&&"
Or = "||"
Less Than = "<"
Greater Than = ">"
Less Than or Equal = "<="
Greater Than or Equal = ">="
```

Unary operators:
```dm
Not = "!"
Binary Not = "~"
Negate = "-"
Increment = "++"
Decrement = "--"
```

Assignment operators:
```dm
Assign = "="
Addition Assign = "+="
Subtract Assign = "-="
Multiply Assign = "*="
Divide Assign = "/="
Modulo Assign = "%="
Assign Into = ":=" // walrus operator
And Assign = "&&="
Or Assign = "||="
```

Binary operators:
```dm
Binary And = "&"
Binary Or = "|"
Binary Xor = "^"
Left Shift = "<<"
Right Shift = ">>"
```

Binary assignment operators:
```dm
Binary And Assign = "&="
Binary Xor Assign = "^="
Binary Or Assign = "|="
Left Shift Assign = "<<="
Right Shift Assign = ">>="
```

[Equivalence](http://www.byond.com/docs/ref/info.html#/operator/~=) operators:
```dm
Equivalent = "~="
Not Equivalent = "~!"
```

Special BYOND operators
```dm
In = "in" // Used for ranges ex. `for(var/x in 1 to 5)`
To = "to" // Only appears in the RHS of `In`, above
Step = "step" // Only in for loops, ex. `for(var/x in 10 to 1 step -1)`
```

There is also the C-style ternary operator expression: `condition ? if_true : if_false`.

## Activity

Go over the following snippet. What will the value of N be at each line?
```dm
var/N
N = 0
N += 1+1*2
if(N - 1 == 2) N = 2
if(N==2 && 1/2==0.5) N = 0.5
```
