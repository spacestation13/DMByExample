# Bitflags

Bitflags, or [bit fields](https://en.wikipedia.org/wiki/Bit_field), are handy ways to compactly store data in a variable.

Since DM only supports floating point numbers, we are restricted to 24 bits (23 explicitly stored) per variable.

```dm
#define DISABILITY_EYE (1<<1) // 1
#define DISABILITY_ARM (1<<2) // 2
#define DISABILITY_LEG (1<<3) // 4

/mob/var/disabilities = 0

/mob/proc/add_disability(dis)
	disabilities |= dis

/mob/proc/check_disability(dis)
	if( disabilities & dis )
		return TRUE
	else
		return FALSE

/mob/proc/remove_disability(dis)
	disabilities &= ~dis
```

For a closer look at the binary math behind this, check out tgstation's [article](https://tgstation13.org/wiki/Binary_flags).

## Activity

>Using the above code snippet as a base, try implementing the ability to toggle a flag easily.
>
>**Hint**: What other binary operators are there?
