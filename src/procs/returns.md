# Return Values

Every proc has a return value associated with it. This defaults to a value of `null`.
To call a proc and store its return value in a variable, you can do this:

```dm
var/value = foo()
```

To return specific values from a proc, you use the `return` keyword along with an **optional** argument value, (defaulting to `null` without one).

```dm
/proc/foo(arg)
	switch (arg)
		if (1)
			return "good!"
		else
			return "bad!"
```

There also exists a special variable for each proc called the 'dot variable', accessed via the `.` symbol.
What’s special about the dot variable is that it's automatically `return`-ed at the end of a proc, provided that the proc does not already manually return, (e.g. `return x`).

To re-code the above more tersely:

```dm
/proc/foo(arg)
	. = "bad!"
	if (arg == 1)
		return "good!"
```

With `.` being present in every proc, we use it as a temporary variable. However, the `.` variable cannot replace a typecasted variable - it can hold data as any other var in DM can, but it just can’t be accessed as one. Although, the `.` variable **is** compatible with a few operators that look weird but work perfectly fine, such as: `.++` for incrementing `.`'s value.
