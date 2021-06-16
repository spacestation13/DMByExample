# Casting

DM provides implicit type conversion (coercion) between primitive types.

```dm
var/x = "string"
world << x // "string"
x = 5
world << x // 5
```

Say you have an `/obj/honk` object, you're fully able to assign it to a type-less var as we did before with our string and number; however, you won't be able to actually access any of the object's data without typecasting it first.

The syntax to cast a variable `varname` to the type `your/type` is as such:

```dm
var/your/type/varname = initialValue
```
