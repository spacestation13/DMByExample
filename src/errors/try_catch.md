# Try / Catch

You can prevent exceptions ("runtimes") from terminating a proc utilizing a try/catch block. If an exception occurs in any of the code within the "try" block, or any functions called inside of it, it will "catch" the exception in the "catch" block. 

If an exception occurs within a try/catch block, it will unwind the entire callstack back to the try block.

```
try
 var/foo = ""
 foo += 1

catch(exception/e)
  world.log << "Caught an exception! [e.name]"
```
