var e=document.querySelector(".container"),l=document.querySelector(".field"),n=document.querySelector(".append-row"),d=document.querySelector(".remove-row"),o=document.querySelector(".append-column"),s=document.querySelector(".remove-column");e.addEventListener("click",function(e){var r=e.target;!r.classList.contains("button").disabled&&(r.classList.contains("append-row")&&l.rows.length<10&&(function(e){for(var l=e.insertRow(-1),n=0;n<e.rows.item(0).children.length;n++)l.insertCell(n)}(l),10!==l.rows.length||n.disabled||(n.disabled=!0),d.disabled&&(d.disabled=!1)),r.classList.contains("remove-row")&&l.rows.length>2&&(function(e){e.deleteRow(-1)}(l),2!==l.rows.length||d.disabled||(d.disabled=!0),n.disabled&&(n.disabled=!1)),r.classList.contains("append-column")&&l.rows[0].children.length<10&&(function(e){for(var l=0;l<e.rows.length;l++)e.rows[l].insertCell(-1)}(l),10!==l.rows[0].children.length||o.disabled||(o.disabled=!0),s.disabled&&(s.disabled=!1)),r.classList.contains("remove-column")&&l.rows[0].children.length>2&&(function(e){for(var l=0;l<e.rows.length;l++)e.rows[l].deleteCell(-1)}(l),2!==l.rows[0].children.length||s.disabled||(s.disabled=!0),o.disabled&&(o.disabled=!1)))});
//# sourceMappingURL=index.46b9cd58.js.map
