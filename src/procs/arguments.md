# Arguments

## ⚠⚠ WIP PAGE ⚠⚠

The parameters that are found within the paraentheses of a proc are known as `arguments`. This allows you to make more diverse procs and helps to prevent rewriting similar code as different values can be used in the same proc with arguments.

For instance, let's bring over part of that FizzBuzz proc that was written on the last page.

```dm
/proc/is_divisible_by(lhs, rhs)
    if (rhs == 0)
        return FALSE

    return (lhs % rhs == 0)
```

As you can see, you can call this proc with two arguments. This can be with any set of two numbers which the proc will use in place of `lhs` and `rhs`. For example, if you called `is_divisible_by(10, 5)` then `lhs` will be replaced with the value `10` and `rhs` with `5`. The proc can be reused later on with a different set of arguments so you don't have to manually check/code divisions with other numbers.

## Default Arguments

You can also set a default value for your arguments as well. This means that when that proc is called the caller doesn't have to specify a value for any arguments with a default. Let's take the proc from earlier and add a default value to one of the parameters.

```dm
/proc/is_divisible_by(lhs, rhs = 5)
    if (rhs == 0)
        return FALSE

    return (lhs % rhs == 0)
```

Now when we call this proc we can simply do `is_divisible_by(10)` to get the same answer as before as `5` will be used in the place of `rhs` due to being a default parameter.

>**NOTE:** We can override the default value of an argument simply by defining a value for that parameter. If we wrote `is_divisible_by(10, 7)` then the default `5` will be overwrote by our `7`.

## Argument Specification

There is also the notion of specifing the type of variable that you want to use for your arguments. This helps to keep your statements short and to make sure that the right type of variable is being used within the proc itself.

```dm
proc/set_card_desc(obj/car/C, desc = "Red hatchback")
	C.desc = desc
	world << "Your [C] looks like a [desc]."
```

>Specifing works like declaring a var but `var/` is implied and not needed.

TODO: `...`
