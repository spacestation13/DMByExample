# Strings

Like most other languags, DM has text constants. In DM, we use double quotes `"` to denote them:
```dm
var/x = "Hello World!"
```

To place a quote inside a string, escape it with a backslash `\` character. You will also need to escape a backslash if you want to use one on purpose.
```dm
world << "The cow says, \"Hi.\"" // The cow says, "Hi."
```

Backslashes are also used for [special macros and other symbols](https://secure.byond.com/docs/ref/info.html#/DM/text/macros) that are otherwise hard to include. A backslash at the end of a line will ignore the line break, and continue the string on the next line after ignoring any leading spaces:
```dm
var/str = "Multi \
           Line \
           String"
```

We also have the ability to interpolate variables within strings as such:
```dm
var/num = 5
world << "Bob has [num] cows." // Bob has 5 cows.
```

Instead of escaping every line, there is another format for multi-line strings (`{""}`):
```dm
var/an = "an"
var/text = {"
This is how we have
multi
line
text. Also, [an] embedded string.
"}
```

DM also has a format for raw strings, which do not allow escape characters or embedded expressions. There are two main ways to specify a raw string. All of them begin with `@`.

Simple raw strings generally follow `@` with a single-character delimiter, usually `"`. Line breaks are not allowed in simple raw strings.
```dm
world << @"I can say \ or [] without escaping anything!"
```

Complex raw strings use more complicated delimiters, but they let you include line breaks. The main way to do this starts with `@{"` and ends with `"}`, like the familiar multi-line format.
```dm
world << @{"
Now I have absolute freedom to use "quotes"
or [brackets] or line breaks.
"}
```
