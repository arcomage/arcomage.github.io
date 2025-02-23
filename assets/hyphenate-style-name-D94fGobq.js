var r=/[A-Z]/g,e=/^ms-/,t={};function n(r){return"-"+r.toLowerCase()}function a(a){if(t.hasOwnProperty(a))return t[a];var o=a.replace(r,n);return t[a]=e.test(o)?"-"+o:o}export{a as h};
