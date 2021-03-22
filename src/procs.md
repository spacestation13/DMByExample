# Procedures

Procedures, or procs, are declared using the `proc` keyword. These are also known by other names in other languages, such as functions or methods. Its arguments come after in parentheses. DM does not have return type annotation like other languages.

If you are not declaring (therefore, you would be overriding) a new proc, you omit the `proc` keyword. See: `/mob/Login()` below.

The `return` statement can be used to return a value from within the proc, even from inside loops or if statements.

Let's rewrite FizzBuzz using a proc!

```dm
// Unlike C/C++, there's no restriction on the order of function definitions
/mob/Login()
	fizzbuzz_to(100)

// Returns a boolean value
/proc/is_divisible_by(lhs, rhs)
	// Edge case, early return
	if (rhs == 0)
		return FALSE

	return (lhs % rhs == 0)

/proc/fizzbuzz(n)
	if (is_divisible_by(n, 15))
		world << "fizzbuzz"
	else if (is_divisible_by(n, 3))
		world << "fizz"
	else if (is_divisible_by(n, 5))
		world << "buzz"
	else
		world << "[n]"

/proc/fizzbuzz_to(n)
	for (var/p in 1 to n+1)
		fizzbuzz(p)
```
