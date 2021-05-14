# Preprocessor

## #define / #undef

Sometimes, you'll want to have shared values across your project, instead of copy-pasting them everywhere. This is where `#define` comes in.

The `#define Name Value` statement substitues the `Name` for `Value` for as long as the define is not `#undef`ined. Substitution only applies to whole words. Text inside of double or single quotes is not processed for substitution, so `"This is BIG."` would not be modified even if a define named `BIG` were defined. That is different from `"This is [BIG]."`, where `BIG` is an embedded expression, which does get processed for macro substitution.

Example:
```dm
#define DAY   0
#define NIGHT 1
var/daytime = NIGHT  // daytime = 1
```

### Macros

There also exists a subset of defines called Macros. These are in the format: `#define Name(Parameters) Value`. These are basically like procs, but without the ability to really have variables within. These are great for common operations, such as checking conditions.
```dm
/// Returns true if given is a client
#define isclient(x) istype(x, /client)

/proc/hello(client/bar)
	if (isclient(bar))
		world << "Hello there!"
```

## #if / #elif / #else / #ifdef / #endif

## #include

## #error / #warn

Both `#error` and `#warn` automatically display messages when compiling if they are reached. Like normal, errors prevent projects from compiling wheras warnings do not. Example usage:
```dm
#if DM_VERSION < 513
#error This compiler is too far out of date!
#endif
...
#ifdef USE_LIGHTING
#warn The lighting feature is experimental.
#endif
```
