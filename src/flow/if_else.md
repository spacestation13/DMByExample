# if/else

Branching with `if-else` is similar to other languages. The boolean condition needs to be surrounded by parentheses and each condition is followed by a block. `if-else` conditionals are expressions.

```dm
/mob/Login()
	var/n = 5

	if (n < 0)
		world << "[n] is negative"
	else if (n > 0)
		world << "[n] is positive"
	else
		world << "[n] is zero"
```

You can also construct if statements on a single line, as such:

```dm
if (n == 7) world.log << "Special number!"
```

## Activity

>Using the code in the first block, try adding a condition to check if the number is divisible by two.
