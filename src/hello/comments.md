# Comments

Any program requires comments, and DM supports a few different varieties:

* Regular comments which are ignored by the compiler:
	* `// Line comments which go to the end of the line.`
	* `/* Block comments which go to the closing delimiter. */`
* Doc comments which are parsed for SS13 codebase [documentation][doc]:
	* `/// Generate docs for the following item.`
	* `//! Generate docs for the enclosing item.`
	* `/** Generate docs until the closing delimiter. */`

[doc]: ../meta/dmdoc.md

```dm
/proc/test()
	// This is an example of a line comment
	// There are two slashes at the beginning of the line
	// And nothing written inside these will be read by the compiler

	// world.log << "Hello, world!"

	/* 
	 * This is another type of comment, a block comment. In general,
	 * line comments are the recommended comment style. But
	 * block comments are extremely useful for temporarily disabling
	 * chunks of code. /* Block comments can be /* nested, */ */
	 * so it takes only a few keystrokes to comment out everything
	 * in this test() proc.
	 */

	/// This is an example of a doc comment documenting the x variable.
	var/x = "Hi!"

/**
  * Now I'm documenting the other() proc.
  *
  * I can type on multiple lines.
  * `I can embed markdown as well!`
  */
/proc/other()
	world.log << "foo"
```
