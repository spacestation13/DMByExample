# Associated lists

## ⚠⚠ WIP PAGE ⚠⚠

Associated lists, or list associations, add a unique functionality to regular lists by allowing you to associate values within the list with another value often referred to in other languages as a `key-value pair`. This can be done as such:

```dm
var/list/L = list()

L["fizz"] = "buzz" // "fizz" is the key, "buzz" is the value
L["money"] = 100 // "money" is the key, 100 is the value
```

The above list `L` now contains the keys `"fizz"` and `"money"` which are associated with the values `"buzz"` and `100` respectively.

Now the question becomes, "What does this actually do for us that a regular list can't do?" The biggest answer to that is now you can retrieve items from the list by the name of the key rather than a generic indicies.

```dm
world << L["fizz"] // "buzz"
world << L["money"] // 100
```

This is especially helpful for lists that have values which move in and out constantly since there is no guarantee that something at index `[1]` will be the same value you call for at the same index later on. However, as long as you don't delete a key or its value from the list, it doesn't matter how the items are shifted as you'll get the value associated with the proper key.

As with regular lists, you can initalize an associated list with nearly the same syntax.

```dm
var/list/L = list("fizz" = "buzz", "money" = 100)
```

This can also be done in shorthand if your key is a text string that meets the requirements for a variable name.

```dm
var/list/L = list(fizz = "buzz", money = 100)
```

>**Notice:** See how the keys don't have double quotes around them?

TODO: Associated lists and their loops, cursed numerical keys, and list->assoc list conversion funtimes
