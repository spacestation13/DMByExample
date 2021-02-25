# while

The while keyword can be used to run a loop while a condition is true.

Let's write the infamous [FizzBuzz](https://en.wikipedia.org/wiki/Fizz_buzz) using a `while` loop.

```dm
/mob/Login()
	// A counter variable
	var/n = 1

	// Loop while `n` is less than 101
	while (n < 101)
		if (n % 15 == 0)
			world << "fizzbuzz"
		else if (n % 3 == 0)
			world << "fizz"
		else if (n % 5 == 0)
			world << "buzz"
		else
			world << "[n]"

		// Increment counter
		n += 1
```

