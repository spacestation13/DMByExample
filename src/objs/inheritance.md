# Inheritance

A key part of DM, being an Object-Oriented language, is the idea of inheritance.

Let's say you have an type with the path `/datum/foo`. If you then define a subtype `/datum/foo/bar`, it will inherit properties from the first.

```dm
/datum/foo
	var/foo_var = 5

/proc/main()
	var/datum/foo/bar/my_subtype = new
	world << my_subtype.foo_var // 5
```

You can also override properties of the parent:

```dm
/datum/foo
	var/foo_var = 5

/datum/foo/bar
	foo_var = 10

/proc/main()
	var/datum/foo/bar/my_subtype = new
	world << my_subtype.foo_var // 10
```

You can do this with procs as well:

```dm
/datum/foo/proc/xyzzy()
	world << "parent"

/datum/foo/bar/xyzzy()
	world << "child"

/proc/main()
	var/datum/foo/bar/my_subtype = new
	my_subtype.xyzzy() // "child"
```

Sometimes, you'll want to have some custom functionality, **in addition to**, the parent's functionality. This is expressed in other languages sometimes as `super()`. Instead, we use `..()` in DM. This can be called at any point in the proc.

```dm
/datum/foo/proc/dream()
	return "yond"

/datum/foo/bar/dream()
	world << "Be" + ..()

/proc/main()
	var/datum/foo/bar/my_subtype = new
	my_subtype.dream() // "Beyond"
```
