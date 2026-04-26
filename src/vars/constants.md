# Constants

Constant is a modifier for vars that define a constant value. This is done by using the `const` keyword.

```dm
var/const/max_cash = 1000
```

They are useful for vars that don't need to be changed and are used multiple times. It also helps reduce the amount of "magic numbers', (e.g. numbers that you don't know what they do/what they are for by looking at them).

For example, you may want something to have a max speed. Instead of writing code to check different objects against an arbitrary number like `100`, you can declare a const var like `var/const/max_speed = 100` that you can use in place of a number. This also provides the ease of only having to change one var instead of potentially hundreds if you decide to change your mind later on.

## `const` vs `#define`

`const` and `#define` both help you avoid magic numbers, but they are not the same thing.

A `const` is a normal DM variable declaration whose value is meant to stay fixed. Because it is still a real variable, it follows the usual scoping rules.

A `#define` is a preprocessor directive. Before the compiler parses your code, the preprocessor replaces the defined name with the text you gave it. It is not a variable, does not belong to an object, and does not obey normal variable scope.

## Scope

Because `const` is still a variable, you can declare it in different places depending on how widely it should be used.

- A global `const` can be read anywhere.
- An object `const` belongs to that type.
- A proc-local `const` only exists inside that proc.

```dm playground
#define SALES_TAX 0.07

var/const/MAX_CARRY_WEIGHT = 50

/obj/stack
  var/const/stack_limit = 20

/proc/main()
  var/const/local_discount = 0.10
  var/price = 100

  world.log << "From #define: [price * SALES_TAX]"
  world.log << "Local const: [price * local_discount]"
  world.log << "Global const: [MAX_CARRY_WEIGHT]"
  world.log << "Object const: [/obj/stack::stack_limit]"
```

