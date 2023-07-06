## Basic Object Types
In Object Oriented programming, objects inherit behaviour from parents. DM has some built in ancestors which share certain behaviours. These will be gone over individually and in more detail in their own pages, but here is the general overview.
### Datums
The first is the Datum (`/datum/`). It's the ancestor of all the other types (except for /world, /client, /list, and /savefile) that we will see. It's essentially pure data, hence the name, and can have pretty much any vars you like. When you define a new "top level" object, if you do not specify a parent_type, it defaults to /datum.
```dm
MyType
	var/myvar = "test"
// this "mytype object" is a datum. Normally, though, you'd put it as datum/MyType or /datum/MyType
```
### Atoms
Atoms (`/atom/`) are the direct child of datums, and they represent objects that can go on a map and therefore in the world. It's an abstract parent which shouldn't really be used by itself, but it gives important information to its children, mainly areas, turfs, objs, and mobs.
`/atom/movable` defines behaviour related to moving things, and is the parent of `/obj` and `/mob`. Again, this is an abstract parent, so you shouldn't define objects of its type.
#### Areas
An area (`/area/`) is how the game controls rooms and certain zones. Every tile on a map has exactly one area, and if you don't set one in the map editor, it defaults to `/area/space`.
When the game starts, one object is created per area, and it's treated as a single object. All tiles with the same area are connected to the same single instance of that area.
```dm
/area/Entered(O)
	.=..() // makes sure that the parent stuff is called when the function returns, for instance, from /atom.
	if(desc)
		O << desc // makes it so that entering any area will return the description, if there is one.
/area/outside
	desc = "What a lovely day."
/area/inside
	desc = "Wonder what the weather's like."
```
#### Turfs
A turf (`/turf/`is essentially the tile itself. They can't be moved, only replaced with new ones (which removes the old one). Depending on what game or what server you're running, these are generally used as floors, walls and windows (although, of course, it varies).
When you do src.loc on an atom, the return value is actually the turf.
```dm
/turf/wall
	desc = "A steel wall."
	density = 1 // it can't be walked through.
/turf/floor
	desc = "A steel tiled floor"
	specialfloor
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
```dm
/obj/egg
	desc = "A chicken egg."
```
