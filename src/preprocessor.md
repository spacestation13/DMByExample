# Preprocessor

## ⚠⚠ WIP PAGE ⚠⚠

## #define / #undef

Sometimes, you'll want to have shared values across your project instead of copy-pasting them everywhere. This is where `#define` comes in.

The `#define Name Value` statement substitues the `Name` for `Value` as long for as the define is not `#undef`-ined. Substitution only applies to whole words. Text inside of double or single quotes is not processed for substitution, so `"This is BIG."` would not be modified even if a define named `BIG` were to be defined. That's different from `"This is [BIG]."`, whereas `BIG` is an embedded expression, which does get processed for macro substitution.

Example:

```dm
#define DAY   0
#define NIGHT 1
var/daytime = NIGHT  // daytime = 1
```

## Macros

There also exists a subset of defines called Macros. These are in the format: `#define Name(Parameters) Value`. These are basically like procs, but without the ability to have variables stored within. These are great for common operations, such as checking conditions.

```dm
/// Returns true if given is a client
#define isclient(x) istype(x, /client)

/proc/hello(client/bar)
	if (isclient(bar))
		world << "Hello there!"
```

## #if / #elif / #else / #ifdef / #endif

These conditional defines work very similarly to the regular `if()` and `else` logic that we saw earlier, except that you have to close the code block with `#endif`. The code within the true statements gets compiled, while the others do not compile. Like defines, they get sort of 'swapped out' before the code is run, so they're not typically used with variables, but with other defines.
`#elif` is equivalent to `else if`, and `#if` and `#else` are self explanatory.
`#ifdef DEFINE` is a special case which substitutes in its code block when the define in the argument is defined, and is false otherwise. It's functionally identical to `#if defined(DEFINE)`. `#ifndef DEFINE` meanwhile, is the same as `#if !defined(DEFINE)`.
Like all defines, the indentation does not matter. It does matter that the code block's indentation matches the code around it, however.

```dm
// some random defines that get determined before the code compiles.
#define LOGIC_A 1
#define LOGIC_B 2
#define LOGIC_C 3

#ifdef LOGIC_C // LOGIC_C is defined, so this code will run.
world << "Logic C is in place"
#endif

#ifdef LOGIC_D // this code will not run, since LOGIC_D isn't defined
world << "Logic D is in place"
#endif

#if LOGIC_A > LOGIC_B // this generally isn't how you'd use defines
world << "Logic A is larger than B"
#elif LOGIC_A < LOGIC
world << "Logic A is smaller than B"
#endif
```

You can use these to help define large groups of defines at once.

```dm
// in this example, you define the one that you want by uncommenting it in the code, before the code compiles
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
// the defines FULL_BOOT and etc would then be used by later parts of code.
```

## #include

TODO

## #error / #warn

Both `#error` and `#warn` automatically display messages when compiling if they are reached. Like normal, errors prevent projects from compiling whereas warnings do not. Example usage:

```dm
#if DM_VERSION < 513
#error This compiler is too far out of date!
#endif
...
#ifdef USE_LIGHTING
#warn The lighting feature is experimental.
#endif
```
