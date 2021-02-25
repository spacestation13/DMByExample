# Basic Types

Even though variables do not need to have their types defined for primitive data, different types still exist, and variables need their type defined if you are going to assign them an object and you plan to use the variable to access some of the object's properties.

## Primitive types
Primitive types are types that do not need variables to be typecasted anyhow. This includes:

* Numeric values `1, 24.3, 3.14`
* Strings `"a", "abc"`
* Booleans `TRUE, FALSE` (which aren't anything different than the numeric value 1 and 0)
* Null `null`

You can simply assign them to your variable, and access the variable content. 

In particular, notice how lists (`/list`) aren't considered a primitive type. Even though assigning a list to a var won't cause an error normally, it's bad practice to not typecast it, since a list is essentially an object, and you won't be able to access list methods and properties on a non-typecasted list.

Null is considered a primitive type because it can be assigned to any var, and since null means basically no value, you aren't going to access any of its properties since it has none.

## Object types
Object types are the core of any object oriented programming language, like DM. These will be covered further [later](./Objects.md).
