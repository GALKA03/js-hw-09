!function(){var e=document.querySelector("[data-start]"),o=document.querySelector("[data-stop]"),t=null;e.addEventListener("click",(function(n){t=setInterval((function(){var e="#".concat(Math.floor(16777215*Math.random()).toString(16));document.body.style.backgroundColor=e,console.log(e)}),1e3),e.disabled=!0,console.log(o.disabled=!1)})),o.addEventListener("click",(function(n){clearInterval(t),o.disabled=!0,console.log(e.disabled=!1)}))}();
//# sourceMappingURL=01-color-switcher.15383dd3.js.map
