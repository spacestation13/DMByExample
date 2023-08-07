## Primitive Types

In Object Oriented programming, objects inherit behaviour from parents. DM has some built in ancestors which share certain behaviours. These will be gone over individually and in more detail in their own pages, but here is the general overview.

### Datums

The first is the Datum (`/datum/`). It's the ancestor of all the other types (except for some types like /world, /client, /list, and more) that we will see. It's essentially pure data, hence the name, and can have pretty much any vars you like.
> Note: When you define a new "top level" object, if you do not specify a parent_type, it defaults to /datum.

```dm
MyType
	var/myvar = "test"
// this "mytype object" is a datum. Normally, though, you'd put it as datum/MyType or /datum/MyType
```

### Atoms

Atoms (`/atom/`) are the direct child of datums, and they represent objects that can go on a map and therefore in the world. It gives important information to its children, mainly **a**reas, **t**urfs, **o**bjs, and **m**obs.
Similarly, `/atom/movable` defines behaviour related to moving things, and is the parent of `/obj` and `/mob`.
```dm
/atom/movable/car
	//don't do this
```

#### Areas

An area (`/area/`) is how the game controls rooms and certain zones. Every tile on a map should have exactly one area.

```dm
/area/Entered(O)
	.=..() // makes sure that the parent stuff is called when the function returns, for instance, from /atom.
	if (desc)
		O << desc // makes it so that entering any area will return the description, if there is one.
/area/outside
	desc = "What a lovely day."
/area/inside
	desc = "Wonder what the weather's like."
```

#### Turfs

A turf (`/turf/`) is essentially the tile itself. They can't be moved, only replaced with new ones (which removes the old one). Depending on what game or what server you're running, these are generally used as floors, walls and windows (although, of course, it varies).
> Note: the return value of .loc on an atom is usually the turf that the atom is on. Unless its location is null, of course.

```dm
/turf/wall
	desc = "A steel wall."
	density = 1 // it can't be walked through.
/turf/floor
	desc = "A steel tiled floor"
/turf/floor/specialfloor
	desc = "Something seems strange about this floor."
	Entered() // when the tile is walked over, do a special thing
		doSpecialThing()
	proc/doSpecialThing()
		// the thing that the tile would do when walked on would go here.
```

#### Mobs

Living things that can move around, deriving from the word "mobile". These are what the player controls, and are slightly more complicated than objs since they can have a /client attached to them (i.e. a player).

```dm
/mob/human
	desc = "A regular old human."
```
#### Objs

Objs (NOT the same as objects) are general purpose items and things that you can find in a map. Everything that's not a turf or a mob on a map is almost certainly an obj.
> **Objects vs Objs**: A programming object is a type of thing that can hold multiple kinds of data (i.e. a datum). An obj on the other hand is a "physical" object that you'd find within the world. Not the same concept.

```dm
/obj/egg
	desc = "A chicken egg."
```
