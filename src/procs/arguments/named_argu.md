# Named Arguments

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

## Examples

Named arguments are most useful when a proc has several optional arguments with defaults. Instead of counting commas until you reach the setting you want to change, you can name only the one you care about.

```dm playground
/proc/show_popup(txt, c = "blue", b = FALSE, w = 2, t = 3)
  world.log << "[txt] | c=[c] | b=[b] | w=[w] | t=[t]"

/proc/main()
  show_popup("Testy")
  show_popup("Oh No", c = "teal", b = TRUE)
  show_popup("Quick", t = 10)
  show_popup("Mixed", "blue", t = 5)
```

That last call mixes both styles: `"Mixed"` and `"blue"` are positional, while `t = 5` is named.

This makes longer calls easier to read, easier to change later, and much harder to mix up.

## Mixing Positional and Named Arguments

You do not have to use names for every argument in a call. DM lets you mix positional arguments with named ones.

```dm
proc/Main()
  SomeProc(1, b = 2, c = 3)
```

Here, `1` is still passed into `a` because it is first in the argument list, while `b` and `c` are matched by name.

However, this can be confusing.
