# Operator Overloading

Operator overloading lets a datum define what an operator should do when that datum is used on the left-hand side of an operation.

This is useful when your type has a natural meaning for operations such as `+`, `+=`, `==`, or `[]`.

The overload is written as a proc named `operator` immediately followed by the operator itself.

For example:

- `proc/operator+()` overloads `+`
- `proc/operator+=()` overloads `+=`
- `proc/operator==()` overloads `==`

Without operator overloading, combining two custom values means manually touching each field yourself:

```dm
/datum/stats
  var/strength = 0
  var/agility = 0

  proc/as_text()
    return "STR [strength], AGI [agility]"

/proc/main()
  var/datum/stats/base_stats = new
  var/datum/stats/boots_bonus = new

  base_stats.strength = 3
  base_stats.agility = 4
  boots_bonus.strength = 1
  boots_bonus.agility = 2

  base_stats.strength += boots_bonus.strength
  base_stats.agility += boots_bonus.agility

  world.log << base_stats.as_text()
```

That works, but it gets repetitive quickly.

With overloads, we can teach the datum what `+` and `+=` mean instead:

```dm playground
/datum/stats
  var/strength = 0
  var/agility = 0

  proc/as_text()
    return "STR [strength], AGI [agility]"

  proc/operator+(datum/stats/other)
    var/datum/stats/result = new
    result.strength = strength + other.strength
    result.agility = agility + other.agility
    return result

  proc/operator+=(datum/stats/other)
    strength += other.strength
    agility += other.agility

/proc/main()
  var/datum/stats/base_stats = new
  var/datum/stats/ring_bonus = new

  base_stats.strength = 3
  base_stats.agility = 4
  ring_bonus.strength = 1
  ring_bonus.agility = 2

  var/datum/stats/combined = base_stats + ring_bonus
  world.log << "base + ring = [combined.as_text()]"

  base_stats += ring_bonus
  world.log << "base stats are now [base_stats.as_text()]"
```

As a rule of thumb, overload operators only when the meaning is obvious.

>**NOTE:** If you overload `+` but not `+=`, DM can still fall back to `a = a + b` for datums. Writing a dedicated `operator+=()` is clearer.
