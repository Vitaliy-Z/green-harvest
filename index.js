(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const o={mobileMenu:document.querySelector("[data-mobile-menu]"),openMobileMenuButton:document.querySelector("[data-header-burger-button]"),closeMobileMenuButton:document.querySelector("[data-mobile-menu-close-button]"),closeMobileMenuButton:document.querySelector("[data-mobile-menu-close-button]"),orderBtn:document.querySelector("[data-order-btn]"),orderForm:document.querySelector("[data-order-form]")},l=u=>{u.preventDefault(),o.orderForm.reset()},i=()=>{o.mobileMenu.classList.toggle("is-open")};o.orderForm.addEventListener("submit",l);o.openMobileMenuButton.addEventListener("click",i);o.closeMobileMenuButton.addEventListener("click",i);
//# sourceMappingURL=index.js.map
