# for

For loops are the other core type of loop in DM.

There's two main syntaxes for iteration, one traditional and one cleaner:

```dm
for (var/x = 0; x < 10; x++)
	...

for (var/x in 0 to 10)
	...
```

You can use also variables instead of constant iteration numbers:

```dm
var/number = rand(5,10) // gives a random number from 5-10

for (var/i in 1 to number)
	...
```

However, keep in mind that for the `for-in-to` syntax you cannot modify the iterator within the loop as you can with a traditional-style one:

```dm
for (var/x = 0; x < 10; x++)
	x++ // valid

for (var/y in 0 to 10)
	y++ // invalid
```

Let's rewrite our FizzBuzz example from [while](./while.md) as a for loop this time!

```dm
/mob/Login()
  // `n` will take the values: 1, 2, ..., 100 in each iteration
  for (var/n in 1 to 101) {
		if (n % 15 == 0)
			world << "fizzbuzz"
		else if (n % 3 == 0)
			world << "fizz"
		else if (n % 5 == 0)
			world << "buzz"
		else
			world << "[n]"
```
