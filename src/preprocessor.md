# Preprocessor

## #define / #undef

Sometimes, you'll want to have shared values across your project instead of copy-pasting them everywhere. This is where `#define` comes in.

The `#define Name Value` statement substitutes `Name` with `Value` wherever it appears as a whole word, before the code is compiled.

Text inside double or single quotes is not processed for substitution, so `"This is BIG."` would not be modified even if a define named `BIG` were defined.
That's different from `"This is [BIG]."`, where `BIG` is an embedded expression, which *does* get processed for substitution.

Defines can be removed with `#undef Name`, after which substitution no longer applies.

```dm
#define DAY   0
#define NIGHT 1
var/daytime = NIGHT  // daytime = 1
```

## Macros

Macros are defines with parameters, in the format `#define Name(Parameters) Value`.
They are **purely textual substitution** — the preprocessor replaces every call site with the expanded text before compilation.
There is no function call at runtime, no scope, no type checking, and no local variables.

```dm playground
#define isred(x) ((x).color == "#ff0000")

/proc/main()
  var/obj/dog = new /obj{color = "#ff0000"}
  if (isred(dog))
    world.log << "Hello there!"
```

Because arguments are substituted as raw text, always wrap parameters in parentheses to avoid operator precedence issues:

```dm
#define double(x) x * 2    // BAD:  double(1+1) expands to 1+1 * 2 = 3
#define double(x) (x) * 2  // GOOD: double(1+1) expands to (1+1) * 2 = 4
```

## #if / #elif / #else / #ifdef / #endif

These conditional preprocessor directives work similarly to the regular `if()` and `else()` logic, except that you close the block with `#endif`. 

The code within the true branch gets compiled; untrue branches are excluded entirely before the compiler ever sees them.
They can only be used with other defines and constants, not runtime variables.

`#elif` is equivalent to `else if()`.

```dm playground
#define LOGIC_A 1
#define LOGIC_B 2
#define LOGIC_C 3
/proc/main()
#ifdef LOGIC_C // LOGIC_C is defined, so this code will run.
  world.log << "Logic C is in place"
#endif

#ifdef LOGIC_D // this will not run, since LOGIC_D isn't defined
  world.log << "Logic D is in place"
#endif

#if LOGIC_A > LOGIC_B
  world.log << "Logic A is larger than B" // this isn't compiled
#elif LOGIC_A < LOGIC_B
  world.log << "Logic A is smaller than B" // this is compiled
#endif
```


`#ifdef DEFINE` is true when the named define exists, regardless of its value.
It is functionally similar to `#if defined(DEFINE)`, but there is no `#elsedef` — chains must use `#elif defined(...)` instead.

`#ifndef DEFINE` is the inverse, similar to `#if !defined(DEFINE)`.

A common use is grouping defines under a single "build setting" flag:

```dm
// Uncomment the one setting you want before compiling.
// This is a common pattern for 'build' defines.
//#define STARTUP_SETTING_A
#define STARTUP_SETTING_B  // we're defining setting b
//#define STARTUP_SETTING_C

#ifdef STARTUP_SETTING_A
  #define FULL_BOOT
  #define TRACKING_SETTINGS
  #define OTHER_NONSENSE
#elif defined(STARTUP_SETTING_B)
  #define FULL_BOOT
  #define OTHER_NONSENSE
#elif defined(STARTUP_SETTING_C)
  #define FULL_BOOT
#endif
```

## #include

`#include "file.dm"` includes another file into the current compilation unit.
The included file's contents are processed as if they were written inline at that point.

This is how DM projects split code across multiple files.

```dm
#include "defines.dm"
#include "objects/furniture.dm"
```

## #error / #warn

Both `#error` and `#warn` automatically display messages when compiling if they are reached. Like normal, errors prevent projects from compiling whereas warnings do not.

```dm
#if DM_VERSION < 513
#error This compiler is too far out of date!
#endif
...
#ifdef USE_LIGHTING
#warn The lighting feature is experimental.
#endif
```
