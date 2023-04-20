# Basic Types

Even though variables do not need to have their types defined for primitive data, different types still exist, and variables need their type defined if you are going to assign them to an object and if you plan to use the variable to access some of the object's properties.

## Primitive types

Primitive types are types that do not need variables to be typecasted anyhow. This includes:

* Numeric values: `1, 24.3, 3.14` (WARNING: DM doesn't use integers, it uses floats. Watch out for floating point precision errors.)
* Strings: `"a", "abc"` (These can use single or double quotes, although usually a codebase will have a general form which you should follow.)
* Booleans: `TRUE, FALSE` (These aren't anything different than the numerical values 1 and 0, but are cleaner visually.)
* Null: `null`

You can simply assign them to your variable, and access the variable's contents.

In particular, notice how lists (`/list`) aren't considered a primitive type. Even though assigning a list to a var won't cause an error normally, it's bad practice to not typecast it since a list is essentially an object. You also won't be able to access list methods and properties on a non-typecasted list.

Null (`null`) is considered a primitive type because it can be assigned to any var, and since null basically means no value you aren't going to access any of its properties since it has none. Forgetting that it exists can cause a lot of issues. A common thing to see in procs is the following check for null value:
```
if (isnull(variable)
	return
```

## Object types

Object types are the core of any object oriented programming language like DM. These will be covered further [later](../objs.md).
