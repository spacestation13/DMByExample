# Hello World

This is the source code of the traditional Hello World program.

```dm
// This is a comment, and is ignored by the compiler

// This is a proc `Login()` defined on a base mob. We'll learn more about those later.
/mob/Login()

    // Statements here are executed when a mob logs into the game

    // Print text to world
    world << "Hello World!"
```

`world << "x"` is the most basic way to output text to the default window, using the << [operator].

To run this, simply open up a blank BYOND project and compile it.

When you log into the game, you'll see the text in the side chat bar!

## Activity

Try adding a new line with a second `world << "x"` so that the output shows:

```dm
Hello World!
I'm a Developer!
```

[operator]:./operators.md
