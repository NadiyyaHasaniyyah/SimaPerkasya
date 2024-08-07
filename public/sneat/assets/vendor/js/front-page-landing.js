"use strict";window.isRtl=window.Helpers.isRtl(),window.isDarkStyle=window.Helpers.isDarkStyle(),function(){const t=document.getElementById("navbarSupportedContent"),o=document.querySelector(".layout-navbar"),e=document.querySelectorAll(".navbar-nav .nav-link");function a(){t.classList.remove("show")}setTimeout(function(){window.Helpers.initCustomOptionCheck()},1e3),[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function(e){return new bootstrap.Tooltip(e)}),isRtl&&Helpers._addClass("dropdown-menu-end",document.querySelectorAll("#layout-navbar .dropdown-menu")),window.addEventListener("scroll",e=>{10<window.scrollY?o.classList.add("navbar-active"):o.classList.remove("navbar-active")}),window.addEventListener("load",e=>{10<window.scrollY?o.classList.add("navbar-active"):o.classList.remove("navbar-active")}),document.addEventListener("click",function(e){t.contains(e.target)||a()}),e.forEach(t=>{t.addEventListener("click",e=>{t.classList.contains("dropdown-toggle")?e.preventDefault():a()})}),isRtl&&Helpers._addClass("dropdown-menu-end",document.querySelectorAll(".dropdown-menu"));var l,n=document.querySelectorAll(".nav-link.mega-dropdown"),n=(n&&n.forEach(e=>{new MegaDropdown(e)}),document.querySelector(".dropdown-style-switcher")),s=localStorage.getItem("templateCustomizer-"+templateName+"--Style")||(window.templateCustomizer?.settings?.defaultStyle??"light");window.templateCustomizer&&n&&([].slice.call(n.children[1].querySelectorAll(".dropdown-item")).forEach(function(e){e.addEventListener("click",function(){var e=this.getAttribute("data-theme");"light"===e?window.templateCustomizer.setStyle("light"):"dark"===e?window.templateCustomizer.setStyle("dark"):window.templateCustomizer.setStyle("system")})}),n=n.querySelector("i"),"light"===s?(n.classList.add("bx-sun"),new bootstrap.Tooltip(n,{title:"Light Mode",fallbackPlacements:["bottom"]})):"dark"===s?(n.classList.add("bx-moon"),new bootstrap.Tooltip(n,{title:"Dark Mode",fallbackPlacements:["bottom"]})):(n.classList.add("bx-desktop"),new bootstrap.Tooltip(n,{title:"System Mode",fallbackPlacements:["bottom"]}))),"system"===(l=s)&&(l=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),[].slice.call(document.querySelectorAll("[data-app-"+l+"-img]")).map(function(e){var t=e.getAttribute("data-app-"+l+"-img");e.src=assetsPath+"img/"+t})}();

document.addEventListener('DOMContentLoaded', function() {
    // Fungsi untuk menambahkan atau menghapus kelas 'scrolled' berdasarkan jarak pengguliran
    function onScroll() {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) { // Ganti angka ini sesuai kebutuhan
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // Tambahkan event listener untuk peristiwa pengguliran
    window.addEventListener('scroll', onScroll);
  });

