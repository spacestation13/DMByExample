# DM By Example

This repository contains the markdown files used to build DM By Example, in the style of [Rust By Example]

## Requirements

Building the book requires [rust] and cargo, which comes pre-packaged with rust. It also requires [mdBook], which can be installed through cargo:

[rust]: https://www.rust-lang.org/en-US/
[mdBook]: https://github.com/azerupi/mdBook

```bash
$ cargo install mdbook
```

## Building

To build the book, get a copy of this repository by downloading it in any way you want. Once done, open a command prompt and `cd` in the root of the repository folder, with the src folder and the book.toml, then type:

```bash
$ mdbook build
```

The output will be in the `book` subdirectory. To check it out, open the index.html file in your web browser.

## Contributing

You can make new pages in the src folder, you can follow [this format] to see how to.
Any kind of page is well accepted, but generally you should restrict yourself to explaining general concepts, instead of very specific things such as the functionality of an item.
At this point, this project is focusing on native DM syntax and not specific SS13 concepts.

This guide was originally based off of [the Green Book project].

[this format]: https://rust-lang-nursery.github.io/mdBook/format/index.html
[Rust By Example]: https://doc.rust-lang.org/rust-by-example/
[the Green Book project]: https://github.com/Carbonhell/The-green-book
