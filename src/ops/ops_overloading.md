# Operator Overloading

## ## ⚠⚠ WIP PAGE ⚠⚠

Operator overloading is a special way to define a different process for operators to use when working with datums/objects. It's similar to [object overriding](../objs/inheritance.md) which you'll learn about later. This is yet another way to save you some time and writing if you have to perform an operation multiple times.

An example would be if you have two objs that you wanted to have the vars within added up. Without operator overloading it would look something like this:

```dm
/obj/foo
	var/a = 1
	var/b = 2

	proc/showvars()
		return "a = [a], b = [b]"

/obj/bar
	var/a = 4
	var/b = 5

/proc/main()
	var/obj/foo/newfoo = new
	var/obj/bar/newbar = new

	newfoo.a += newbar.a
	newfoo.b += newbar.b

	world << newfoo.showvars()
```

Operator overloading would allow you to define how the `+=` should act differently when we want to add our vars together since normally it wouldn't do what we want it to. This is done through defining a proc inside of a datum/obj using the keyword `operator` almost always immediately followed by the operator we want to override with new functionality.

```dm
/obj/foo
	var/a = 1
	var/b = 2

	proc/showvars()
		return "a = [a], b = [b]"

	proc/operator+=(obj/temp)
		a += temp.a
		b += temp.b


/obj/bar
	var/a = 4
	var/b = 5

/proc/main()
	var/obj/foo/newfoo = new
	var/obj/bar/newbar = new

	newfoo += newbar

	world << newfoo.showvars()
```

While this didn't save us much work for this small example, with more complex datums/objs this can help eliminate a lot of headache as you can take care of a lot of different operations with a single overload.
