# Loops

Loops are the fundamental way to do repeat actions in a programming language.

One thing in common across all types of loops in DM are the `break` and `continue` statements.

The `break` statement can be used to exit a loop at anytime, whereas the `continue` statement can be used to skip the rest of the iteration and start a new one from the beginning of the loop.

```dm
/mob/Login()
	var/count = 0

	world << "Let's count until infinity!"

	// Infinite loop
	while (TRUE)
		count += 1

		if (count == 3)
			world << "three"

			// Skip the rest of this iteration
			continue

		world << "#[count]"

		if (count == 5)
			world << "OK, that's enough"

			// Exit this loop
			break
```
