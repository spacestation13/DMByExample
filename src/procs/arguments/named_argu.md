# Named Arguments

## ⚠⚠ WIP PAGE ⚠⚠

Another way to pass arguments to a func is to name them when calling. Normally when you call a func, the arguments used will be placed in the func's arguments in the order they are set when you call that func.

```dm
proc/SomeProc(a, b, c)
	world << "[a] is first, [b] is second, [c] is third."

proc/Main()
	SomeProc(1, 2, 3) // 1 goes to a since it's first in the list and so on...
```

However, you can specify the order using named arugments.

```dm
proc/Main()
	SomeProc(c = 3, b = 2, a = 1) // will produce the same result as above...
```

This is mainly useful for ensuring that the right variables go to the right arguments since order doesn't matter when using names.

>**Note:** Named arguments that don't match any of the arguments in the proc you call will produce a `runtime error`. You'll learn more about these later on.

TODO: Stuff...
