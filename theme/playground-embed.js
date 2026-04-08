// Replace marked ```dm playground code blocks with dm-playground embeds.
(function(){
  function utf8ToBase64(str){
    var bytes = new TextEncoder().encode(str);
    var binary = String.fromCharCode.apply(null, Array.from(bytes));
    return btoa(binary);
  }
  function makePlaygroundURL(code){
    return 'https://play.dm-lang.org/?embed&code=' + encodeURIComponent(utf8ToBase64(code));
  }
  function createIframe(src){
    var ifr = document.createElement('iframe');
    ifr.src = src;
    ifr.className = 'dm-playground-iframe';
    return ifr;
  }

  document.addEventListener('DOMContentLoaded', function(){
    const codeBlocks = Array.from(document.querySelectorAll('pre > code'));
    codeBlocks.forEach(function(code){
      const cls = code.className || '';
      const parentCls = code.parentElement && code.parentElement.className ? code.parentElement.className : '';
      if (cls.indexOf('language-dm') === -1) return;
      if (cls.indexOf('playground') === -1 && parentCls.indexOf('playground') === -1) return;

      const codeText = code.textContent || '';
      var wrapper = document.createElement('div');
      wrapper.className = 'dm-playground-container';

      try {
        var ifr = createIframe(makePlaygroundURL(codeText));
        // Auto-height: estimate based on code lines
        const lines = (codeText.match(/\n/g) || []).length + 1;
        const estimated = Math.min(Math.max(lines * 17 + 92, 200), 900);
        wrapper.style.height = estimated + 'px';
        wrapper.style.minHeight = '200px';
        wrapper.appendChild(ifr);
      } catch (e) {
        var err = document.createElement('div');
        wrapper.appendChild(err);
      }

      // Replace the <pre> element with the playground wrapper
      var pre = code.parentElement;
      if (pre?.parentElement) {
        try {
          pre.parentElement.replaceChild(wrapper, pre);
        } catch (e) {
          // fallback: append after if replaceChild fails
          pre.parentElement.insertBefore(wrapper, pre.nextSibling);
        }
      }
    });
  });
})();
