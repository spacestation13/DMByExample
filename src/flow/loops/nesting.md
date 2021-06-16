# Nesting

In addition to having stand-alone loops, you can also nest them as such (iterator variables cannot be the same):

```dm
for (var/x in 1 to 10)
	for (var/y in 1 to 10)
		...
```

This forms the backbone of many things, such as working with multi-dimensional lists.

```dm
var/list/my_list[3][3]
for (var/i in 1 to length(my_list))
    for(var/j in 1 to length(my_list))
        my_list[i][j] = "[i],[j]"
world << json_encode(my_list)
```

## Activity

>Try fixing the code above so it works with non-square multi-dimensional lists.
