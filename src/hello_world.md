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

## Starting Dream Maker

Open up BYOND and click on the gear icon in the top right corner. Then just start Dream Maker. Once it loads you'll need to create a new environment to start playing with the code. This is done by going to the top left corner and clicking on `File` then `New Environment`.

Save it to where ever you want by using the `[...]` button on the side, (by default it will save the folder to your desktop), and give it a name like `DM By Example`. After clicking okay you'll be asked to create a new file by picking a type and name. Simply rename it as `Hello_World` and leave the type as a Code File (`.dm`).

>**Note:** You don't have to name the file the same as Hello_World, (or your procs), but it's good practice to name your files whereas anyone who simply looks at the name can give a decent guess at the purpose of whatever file.

All that's left now is to copy the code and run it. It's recommended that you retype the code out on your own to help you get used to the syntax. Just write the hello_world code that you see underneath the last pre-generated line. Afterwards, go up to the top and click on `Build` and then `Compile and Run`.

If all goes well you should see "Hello World" appear in the box that pops up. If you get any errors double click on them in the box on the bottom to see where they are. You can also customize your workspace by going to the top and clicking on `Options` where you can choose to see tabs and line numbers.

## Activity

Try adding a new line with a second `world << "x"` so that the output shows:

```dm
Hello World!
I'm a Developer!
```

[operator]:./operators.md
