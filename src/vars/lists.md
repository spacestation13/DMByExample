# Lists

Lists are used to represent groups of objects. Like objects, in order to properly use their methods and vars, they must be declared of type `/list`.

```dm
var/list/L         // list reference
L = world.contents // assign to existing list
L = list()         // make a new list
L += "futz"        // L = {"futz"}
```

By default, lists start with a length of 0. However, we can create a list with a predetermined size via these methods:

```dm
var/tenlist[10] // empty list of size 10 (c-style)
var/fivelist = new/list(5) // empty list of size 5
```

We can also initalize lists with content included:

```dm
var/list/L = list("foo", "bar") // L = {"foo", "bar"}
```

>**Important:** List indices range from `1` to `len`.

To access an item in a list:

```dm
var/list/L = list("foo", "bar")
world << L[1] // "foo"
```

To resize a list at runtime, we use the `len` variable.

If the length of the list is changed, existing elements in the list will be preserved if they are less than the new length. New elements in the list will be given the initial value of `null`:

```dm
var/list/L[5]
for (var/i in 1 to length(L))
	L[i] = i // L = {1, 2, 3, 4, 5}

L.len = 7 // L = {1, 2, 3, 4, 5, null, null}
```

To get the length of a list (the first way is faster):

```dm
var/list/L = list(1, 2, 3, 4)
world << length(L) // 4
world << L.len // 4
```

For multi-dimensional lists, both of these produce the same list (`{{}, {1, 2}}`):

```dm
var/grid[1][2]
grid[1][1] = 1
grid[1][2] = 2

var/list/same = list()
same += list(1, 2)
```
