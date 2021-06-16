# Advanced Usage

## Advanced Macros

The last parameter of a macro can end in `...` which means that it, and all other arguments following it, count as a single argument. This is called a variadic macro because it lets you use a variable number of arguments. The last parameter will also become optional.

```dm
#define LAZY_LIST(n, items...) if(!n) n = list(items)
```

In a macro's body, if you precede a parameter by `#`, the replacement value will be turned into a string. For instance, `2` would become `"2"`.

```dm
#define DEBUG_VAR(v) world.log << #v + " = [v]"
DEBUG_VAR(x)   // world.log << "x" + " = [x]"
```

A parameter preceded by `##` in the macro body is substituted directly, without any spaces. If you use this with the last argument in a variadic macro, any preceding spaces, and a comma (if found), will be removed if the replacement is empty.

```dm
#define MACROVAR(k) var/macro_state_##k
MACROVAR(right) // becomes `var/macro_state_right`
```

Using `###` in the macro body, preceded by a number, will repeat the replacement a certain number of times.

```dm
#define SAYTWICE(t) 2###t
#define TOTEXT(t) #t
world << "[TOTEXT(SAYTWICE(hi))]"   // world << "hihi"
```
