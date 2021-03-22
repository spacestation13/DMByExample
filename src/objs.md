# Objects

## ⚠⚠ WIP PAGE ⚠⚠

To check if an object is of a certain type, use `istype(x, /type)`:
```dm
/obj/foo
	var/x = 1

/proc/foobar(obj/passed)
	if (istype(passed, /obj/foo))
		var/obj/foo = passed
		world << foo.x
```

You can also cast then implicitly typecheck:
```dm
...
/proc/foobar(obj/passed)
	var/obj/foo = passed
	if (istype(foo))
		world << foo.x
```
