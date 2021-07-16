# Associated lists

Associated lists, or list associations, add a unique functionality to regular lists by allowing you to associate values within the list with another value often referred to in other languages as a `key-value pair`, `map`, or `dictionary`. This can be done as such:

```dm
var/list/L = list()

L["fizz"] = "buzz" // "fizz" is the key, "buzz" is the value
L["money"] = 100 // "money" is the key, 100 is the value

//L = {"fizz" = "buzz", "money" = 100}
```

The above list `L` now contains the keys `"fizz"` and `"money"` which are associated with the values `"buzz"` and `100` respectively.

Now the question becomes, "What does this actually do for us that a regular list can't do?" The biggest answer to that is now you can retrieve items from the list by the name of the key rather than a generic index.

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

## Associated List Loops

Looping through associated lists is fairly straightforward. You can either loop through the list items,

```dm
var/list/exlist = list(fizz = "buzz", money = 100)
var/i

for(i in exlist)
	world << "[i] = [exlist[i]]"
```

which will print out the key while using it to grab value associated with it, or you can loop through the array indicies.

```dm
var/j
var/k

for(j = 1, j <= length(exlist), j++)
	k = exlist[j]
	world << "[k] = [exlist[k]]"
```

The second option is useful if you need to only grab certain items from the list while the first is best if you need to grab everything.

>**Note:** Using a key that doesn't have an associated value or a key that doesn't exist will return `null`.

## Determining list type

It might sometimes come up that you need to check whether the list you're working with is associative or not. Unfortunately DM does not provide a convenient and reliable way of doing this.

The two common ways that this is approached are:
* Use the DM proc `json_encode()` - if the JSON representation of the list starts with an open curly bracket `{` that means it's a JSON object, so it has to be an associative list.
* Iterate over the entire list and make sure all values are null. This is usually faster, but can yield a false positive - associative lists with all values set to `null` are unlikely to come up in practice, but legal.

## Conversion to Associative

Conversion to an associative list is hassle-free, though serves limited purpose. Probably best avoided if you're trying to write clean code.

If you assign a value to any existing or new key using the `list[key] = value` syntax the list will turn into an associative one, where all existing items will become keys without set values.

```dm
var/list/mylist = list("jim", "angela")

mylist["stacey"] = "apple"

//mylist = {"jim" = null, "angela" = null, "stacey" = "apple"}
```


## Conversion From Associative and Numerical Keys

DM makes certain relevant operations here possible, but it's really not a good idea to use this outside of very unique scenarios. You can safely skip this section.

The way DM differentiates associative lists from non-associative ones is by checking if every key has an associated value. This is not the same as checking if the value is `null`. From the point of view of the programmer there is no way to differentiate between a non-existent value and a value equal to `null`.

There is, however, a way to remove a value from a list - using a numerical key during assignment.

This will assign the provided value as a key of that index, not value, while removing the existing value altogether.

```dm
var/list/mylist = list()
mylist["foo"] = "bar"
mylist["soup"] = "barszcz"

mylist[1] = "sandwich"
                           ↓ this null is not a null, but a non-existent value
//mylist = {"sandwich" = null, "soup" = "barszcz"}

mylist[2] = "barszcz"
//mylist = ["sandwich", "barszcz"]
```

You can use this method to supply numerical keys, however they will be interpreted as empty string keys until the list stops being associative. You can't actually access any item by those numerical keys, since accessing by number refers to indexes and not keys, so their use is limited.

```dm
var/list/mylist = list()
mylist["foo"] = "bar"
mylist["test"] = "test"

mylist[1] = 5

//mylist = {"":null,"test":"test"}

mylist[2] = 6

//mylist = [5, 6]
```
