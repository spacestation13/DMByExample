// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="introduction.html">Introduction</a></li><li class="chapter-item expanded affix "><a href="installation.html">Installation</a></li><li class="chapter-item expanded "><a href="hello_world.html"><strong aria-hidden="true">1.</strong> Hello World</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="hello/comments.html"><strong aria-hidden="true">1.1.</strong> Comments</a></li><li class="chapter-item expanded "><a href="hello/types.html"><strong aria-hidden="true">1.2.</strong> Basic Types</a></li></ol></li><li class="chapter-item expanded "><a href="variables.html"><strong aria-hidden="true">2.</strong> Variables</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="vars/strings.html"><strong aria-hidden="true">2.1.</strong> Strings</a></li><li class="chapter-item expanded "><a href="vars/lists.html"><strong aria-hidden="true">2.2.</strong> Lists</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="vars/lists/assoc_lists.html"><strong aria-hidden="true">2.2.1.</strong> Associated Lists</a></li></ol></li><li class="chapter-item expanded "><a href="vars/casting.html"><strong aria-hidden="true">2.3.</strong> Casting</a></li><li class="chapter-item expanded "><a href="vars/constants.html"><strong aria-hidden="true">2.4.</strong> Constants</a></li></ol></li><li class="chapter-item expanded "><a href="operators.html"><strong aria-hidden="true">3.</strong> Operators</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="ops/bitflags.html"><strong aria-hidden="true">3.1.</strong> Bitflags</a></li><li class="chapter-item expanded "><a href="ops/ops_overloading.html"><strong aria-hidden="true">3.2.</strong> Operator Overloading</a></li></ol></li><li class="chapter-item expanded "><a href="statements.html"><strong aria-hidden="true">4.</strong> Statements</a></li><li class="chapter-item expanded "><a href="flow_control.html"><strong aria-hidden="true">5.</strong> Control Flow</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="flow/if_else.html"><strong aria-hidden="true">5.1.</strong> if/else</a></li><li class="chapter-item expanded "><a href="flow/loops.html"><strong aria-hidden="true">5.2.</strong> loops</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="flow/loops/while.html"><strong aria-hidden="true">5.2.1.</strong> while</a></li><li class="chapter-item expanded "><a href="flow/loops/for.html"><strong aria-hidden="true">5.2.2.</strong> for</a></li><li class="chapter-item expanded "><a href="flow/loops/nesting.html"><strong aria-hidden="true">5.2.3.</strong> Nesting</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.3.</strong> Advanced loops</div></li></ol></li><li class="chapter-item expanded "><a href="procs.html"><strong aria-hidden="true">6.</strong> Procedures</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="procs/arguments.html"><strong aria-hidden="true">6.1.</strong> Arguments</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="procs/arguments/named_argu.html"><strong aria-hidden="true">6.1.1.</strong> Named Arguments</a></li></ol></li><li class="chapter-item expanded "><a href="procs/returns.html"><strong aria-hidden="true">6.2.</strong> Return Values</a></li></ol></li><li class="chapter-item expanded "><a href="objs.html"><strong aria-hidden="true">7.</strong> Objects</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="objs/disposal.html"><strong aria-hidden="true">7.1.</strong> Disposal</a></li><li class="chapter-item expanded "><a href="objs/inheritance.html"><strong aria-hidden="true">7.2.</strong> Inheritance</a></li><li class="chapter-item expanded "><a href="objs/primitive_types.html"><strong aria-hidden="true">7.3.</strong> Primitive Types</a></li></ol></li><li class="chapter-item expanded "><a href="preprocessor.html"><strong aria-hidden="true">8.</strong> Preprocessor</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="preprocessor/advancedpre.html"><strong aria-hidden="true">8.1.</strong> Advanced Usage</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.</strong> I/O</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">9.1.</strong> File I/O</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.2.</strong> HTTP</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.3.</strong> FFI</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">10.</strong> Error Handling</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="errors/try_catch.html"><strong aria-hidden="true">10.1.</strong> Try/Catch</a></li></ol></li><li class="chapter-item expanded "><a href="meta.html"><strong aria-hidden="true">11.</strong> Meta</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="meta/lang_server.html"><strong aria-hidden="true">11.1.</strong> Language Server</a></li><li class="chapter-item expanded "><a href="meta/dmdoc.html"><strong aria-hidden="true">11.2.</strong> DMDoc</a></li><li class="chapter-item expanded "><a href="meta/strongdmm.html"><strong aria-hidden="true">11.3.</strong> StrongDMM</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
