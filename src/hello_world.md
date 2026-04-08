# Hello World

This is the source code of the traditional Hello World program.

```dm playground
// This is a comment, and is ignored by the compiler

// This is a procedure/function named `main()` defined globally.
// We'll learn more about these later.
/proc/main()
  // Print text to the console
  world.log << "Hello World!"
```

`world.log << "xyz"` is the most basic way to output text to the console, using the << [operator].

## Activity

Try adding a new line with a second `world.log <<` so that the output shows:

```text
Hello World!
I'm a Developer!
```

[operator]:./operators.md
