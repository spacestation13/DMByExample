# Objects

## ⚠⚠ WIP PAGE ⚠⚠

To check if an object is of a certain type, use `istype(x, /type)`:
```dm
/obj/foo
	var/x = 1

/proc/foobar(obj/passed)
	if (istype(passed, /obj/foo))
		var/obj/bar = passed
		world << bar.x
```

You can also cast (done here in the argument) then implicitly typecheck:
```dm
...
/proc/foobar(obj/foo/bar)
	if (istype(bar))
		world << bar.x
```
