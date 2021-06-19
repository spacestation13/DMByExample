# Constants

## ⚠⚠ WIP PAGE ⚠⚠

Constant is a modifier for vars that define a constant value. This is done by using the `const` keyword.

```dm
var/const/max_cash = 1000
```

They are useful for vars that don't need to be changed and are used multiple times. It also helps reduce the amount of "magic numbers', (e.g. numbers that you don't know what they do/what they are for by looking at them).

For example, you may want something to have a max speed. Instead of writing code to check different objects against an arbitrary number like `100`, you can declare a const var like `var/const/max_speed = 100` that you can use in place of a number. This also provides the ease of only having to change one var instead of potentially hundreds if you decide to change your mind later on.

TODO: explain how different from defines, scoping
