# Variables

Variables are data containers which, as the name implies, can get their data changed through assignment operations. If you want to store some data, you'll use a variable. The basic syntax is:

```dm
var/myVariable = initialValue
```

where `var` is the keyword telling the compiler we're defining a new variable.

`myVariable` is the variable's name, which cannot be a reserved word like `var` as we said previously.

`= initialValue` is used to assign an initial value to the variable. This is optional, and if omitted, the variable's value will be `null`, a special value that means the variable holds nothing.

A key difference in other languages, like C, is that primitive variables don't need the user to define their type, which means you can do

```dm
var/myVar = "Hello World"
myVar = 1
```

without any sort of error. Even though this will work with any sort of var type, we will see futher on that it can cause issues when our variables hold objects and we try to access its methods or such, but we'll expand on this [later](./objs.md).

## Activity

>Try using a combination of a variable and a `world << "x"` statement to output the text `"DMBE"` to the chat window.
