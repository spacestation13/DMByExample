# Objects

Most values you have seen so far have been primitive values such as numbers, text, or `null`.

Objects are different: they can have their own vars and procs attached to them.

In DM, most user-defined objects ultimately descend from `/datum`, and more specific kinds of objects are described with **type paths**.

## Type Paths

Type paths are how DM names object types.

```dm
/obj
/obj/weapon
/obj/weapon/sword
```

Each extra step in the path makes the type more specific. A `/obj/weapon/sword` is a kind of `/obj/weapon`, which is itself a kind of `/obj`. Just like a file system.

## Creating Objects

Use `new` to create an object.

```dm
var/obj/weapon/W = new /obj/weapon
```

If the variable already has a type, DM can infer the type for `new`:

```dm
var/obj/weapon/W = new
```

## Typed Variables

Typing an object variable is important because it tells the compiler what vars and procs you expect that object to have.

```dm
/obj/weapon
  var/title = "Weapon"
  var/damage = 0

/proc/main()
  var/obj/weapon/W = new
  W.title = "Sword"
  W.damage = 15
  world.log << "[W.title] deals [W.damage] damage."
```

If `W` were not typed as `obj/weapon`, the compiler would not know whether `title` and `damage` were valid to access.

## Checking Types

Sometimes you are given a more general object and need to see whether it is really the kind you want.

For that, use `istype()`:

```dm
/obj/weapon
  var/damage = 10

/proc/show_damage(obj/thing)
  if (istype(thing, /obj/weapon))
    var/obj/weapon/W = thing
    world.log << W.damage
```

## Casting

If you want to convert a general object reference into a more specific typed one, `astype()` can help:

```dm
/proc/show_damage(obj/thing)
  var/obj/weapon/W = astype(thing, /obj/weapon)
  world.log << W?.damage
```

If `thing` is not actually a `/obj/weapon`, then `W` becomes `null`.

## Putting It Together

```dm playground
/obj/weapon
  var/title = "Weapon"
  var/damage = 0

  proc/describe()
    return "[title] deals [damage] damage."

/obj/weapon/sword
  title = "Longsword"
  damage = 15

/proc/print_weapon(obj/thing)
  var/obj/weapon/W = astype(thing, /obj/weapon)
  world.log << W?.describe()

/proc/main()
  var/obj/weapon/sword/my_sword = new
  print_weapon(my_sword)
```

Objects become much more powerful once you start inheriting from existing types and overriding their behaviour, which is what the next few pages cover.
