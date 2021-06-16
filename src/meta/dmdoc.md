# DMDoc

Used by many SS13 codebases, DMDoc automatically generates code documentation from [comments](../hello/comments.md).

Types, macros, vars, and procs can be documented using any of the four different doc comment styles which both block and line comments are supported. Documentation blocks may target their enclosing item or the following item.

```dm
/// This comment applies to the following macro.
#define BLUE rgb(0, 255, 0)

/** Block comments work too. */
/obj/foo
	var/affinity = BLUE  //! Enclosing comments follow their item.

/proc/chemical_reaction()
	/*! Block comments work too. */
```

## Crosslinks

You can also link inside any doc comment or markdown file to another documented piece of code.

Valid forms of crosslinks:

```dm
[DEFINE_NAME]
[/path_to_object]
[/path_to_object/proc/foo]
[/path_to_object/var/bar]
```

You can customize the link text that appears. This is done by prepending the custom link text in brackets, such as: `[some define][DEFINE_NAME]`.

## Titles

The title of a documentation entry is determined by whichever is set first:

* A **# Title** set at the top of a doc block, if present.
* The type's **name var** if present and not disabled in config.
* The last **component** of the typepath.

Example:

```dm
/**
  * # Fubar
  */
/obj/foo
```

Source code for DMDoc can be found [here](https://github.com/SpaceManiac/SpacemanDMM/tree/master/src/dmdoc).
