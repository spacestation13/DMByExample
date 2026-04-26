# Advanced Loops

Basic `while` and numeric `for` loops cover a lot of ground, but DM also has some very useful loop forms for working with lists and other collections.

## Looping Over Lists

If you already have a list, you can loop over its contents directly:

```dm playground
/proc/main()
  var/list/items = list("crowbar", "wrench", "cable")

  for (var/item in items)
    world.log << item
```

This is usually cleaner than manually working with indexes.

>**NOTE:** When you loop through a list, DM loops over a copy of that list. If the original list changes during the loop, the current loop will not suddenly start using the new contents.

## Typed Loop Variables

Loop variables can have types too.

That means DM will filter out values that do not match the type you asked for:

```dm playground
/datum/coin

/proc/main()
  var/list/mixed = list(
    new /datum/coin,
    "hello",
    5,
    new /datum/coin
  )

  for (var/datum/coin/coin in mixed)
    world.log << "Ooh! A coin!"
```

Even though `mixed` contains text and a number, only the `/datum/coin` values are handled inside the loop.

## Looping Over Contents

You can also loop over objects exist in the world and contain things:

```dm
for (var/obj/O in turf.contents)
  world << "There's a [O] here."
```

This is a common ways to find mobs, objs, turfs, and other map objects.

## Key/Value Loops

Associative lists can be looped through as key/value pairs:

```dm playground
/proc/main()
  var/list/prices = list(
    "apple" = 2,
    "banana" = 3,
    "pear" = 5
  )

  for (var/name, price in prices)
    world.log << "[name] costs [price]"
```

This is nicer than writing `prices[name]` each time when you need both the key and the value.

## Labeled `break` and `continue`

When loops get nested, sometimes you want to break out of an outer loop rather than just the innermost one.

DM supports labels for that:

```dm
finding_key:
  for (var/mob/M in world)
    for (var/obj/O in M.contents)
      if (O.name == "gold key")
        world << "Found the key on [M]."
        break finding_key
```

Likewise, `continue` can jump to the next iteration of a labeled loop:

```dm
finding_enemies:
  for (var/mob/M in world)
    for (var/mob/G in world)
      if (M in G.friends)
        continue finding_enemies

    world.log << "[M] has no enemies"
```
