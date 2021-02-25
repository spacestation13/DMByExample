# Casting

Say you have an `/obj/honk` object, you're fully able to assign it to a type-less var as we did before with our string and number, but you won't be able to actually access any of the object's data without typecasting it first. 

The syntax to cast a variable `varname` to the type `your/type` is as such:
```dm
var/your/type/varname = initialValue
```
