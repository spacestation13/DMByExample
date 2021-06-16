# Disposal

Once an object is created in DM, you'll want to eventually get rid of it to free up resources.
There's two ways about this:

1. Explicit deletion (`Del`)
2. Garbage collection

The second is much preferable, as how the explicit deletion mechanic works is that it has to scan the entire game for references to that object to clear which is quite resource-intensive. SS13 does not use explicit deletion for this reason. However, you would do it as such:

```dm
var/obj/foo = new
Del(foo)
```

**A primer on DM garbage collection:**

The garbage collector works by using a reference counting system. Once an object is no longer referenced, it gets deleted.

>**Important to Note**: Circular references will never be deleted by the garbage collector. This is defined as a pair of objects with variables that point to each other, or even an object with a variable that points to itself. Also, an object with running or sleeping procs will not be deleted.

So, let's do a GC-ing version of the above snippet:

```dm
var/obj/foo = new
foo = null
```

Since we've gotten rid of the only reference to the object we created, it'll get garbage collected on the next pass.

**A note for SS13:**

>SS13 uses a pair of procs named `qdel()` and `disposing()` for ease of reference removal.

To delete an object, you will call `qdel()` on it. To implement custom reference removal for an object, you would override `disposing()`. For example:

```dm
/obj/baz
	var/datum/my_new_ref

/obj/baz/New()
	. = ..()
	my_new_ref = new

/obj/baz/disposing()
	. = ..()
	my_new_ref = null


/mob/Login()
	..()
	var/obj/baz/bork = new
	sleep(100) // do whatever with the object
	qdel(bork)
```

By doing the above, the datum reference created by the object will be automatically removed when we queue the object for deletion.
