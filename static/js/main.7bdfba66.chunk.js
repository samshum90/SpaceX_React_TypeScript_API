(this.webpackJsonpspacex=this.webpackJsonpspacex||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){},19:function(e,t,c){},21:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),s=c.n(a),A=c(7),i=c.n(A),l=(c(15),c(2)),r=(c(16),c.p+"static/media/spacex-logo.e755fcbf.png"),o=function(e){var t=e.handleReloadClick;return Object(n.jsxs)("header",{className:"header",children:[Object(n.jsxs)("div",{className:"header__title",children:[Object(n.jsx)("img",{className:"header__title-logo",src:r,alt:"Space X logo"}),Object(n.jsx)("h1",{className:"header__title-text",children:"Launches"})]}),Object(n.jsxs)("button",{className:"header__button",type:"button",onClick:function(){return t()},children:["Reload Data",Object(n.jsx)("img",{className:"header__button-icon",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABYWlDQ1BrQ0dDb2xvclNwYWNlRGlzcGxheVAzAAAokWNgYFJJLCjIYWFgYMjNKykKcndSiIiMUmB/yMAOhLwMYgwKicnFBY4BAT5AJQwwGhV8u8bACKIv64LMOiU1tUm1XsDXYqbw1YuvRJsw1aMArpTU4mQg/QeIU5MLikoYGBhTgGzl8pICELsDyBYpAjoKyJ4DYqdD2BtA7CQI+whYTUiQM5B9A8hWSM5IBJrB+API1klCEk9HYkPtBQFul8zigpzESoUAYwKuJQOUpFaUgGjn/ILKosz0jBIFR2AopSp45iXr6SgYGRiaMzCAwhyi+nMgOCwZxc4gxJrvMzDY7v////9uhJjXfgaGjUCdXDsRYhoWDAyC3AwMJ3YWJBYlgoWYgZgpLY2B4dNyBgbeSAYG4QtAPdHFacZGYHlGHicGBtZ7//9/VmNgYJ/MwPB3wv//vxf9//93MVDzHQaGA3kAFSFl7jXH0fsAAAESSURBVCgVjZIxbsJAEEXZEAUqKhpokga4AAUXoESIIlehRkIJHCBVjuCGHkQBBQ20iYRImwukiRAg5317B5DBKCM9z/rv/PV4d10mEWEY1pA6UPFTG/LIObf27xlqGjbWSw6GsIdkSHuFB+hBEBm9sCQr5tCCEpShDQtQfMfpZBx44YV8d2zDD9CyYGaVBmqxCmpFX7owyYuu9s4jMna90kp+KcWk8uCeSdu9VdJIQRZNGxFvxqngR8bU4AgOTH5eK9A/6ZwU9TilP+ngCZ7h8V+bY0thmMIWSpHG4OZxqIiaPijebSGJujXXLkARvQljUMwgfzT6FW9duR2GNyiYydnAMpPnl/wX/QMm7PCX1Sj/AbtKYSawtzbMAAAAAElFTkSuQmCC",alt:"Refresh Icon"})]})]})},u=c(9),d=function(e){var t=e.launch,a=c(17);return Object(n.jsxs)("li",{className:"launch__list-item",children:[Object(n.jsxs)("h2",{className:"launch__list-item-number",children:["#",t.flight_number]}),Object(n.jsx)("h2",{className:"launch__list-item-flight",children:t.mission_name}),Object(n.jsxs)("div",{className:"launch__list-item-end",children:[Object(n.jsx)("span",{className:"launch__list-item-date",children:a("".concat(t.launch_date_utc)).format("Do MMM YYYY",!0)}),Object(n.jsx)("span",{className:"launch__list-item-rocket",children:t.rocket.rocket_name})]})]})},h=function(e){var t=e.filterYears,c=e.selectedYear,s=e.setSelectedYear,A=Object(a.useState)(!1),i=Object(l.a)(A,2),r=i[0],o=i[1];return Object(n.jsxs)("div",{className:"dropdown__wrapper",children:[Object(n.jsxs)("div",{className:"dropdown__header",onClick:function(){return o(!r)},children:[Object(n.jsx)("div",{className:"dropdown__header-title",children:c?"Filtered by ".concat(c):"Filter by Year"}),Object(n.jsx)("img",{className:"dropdown__header-icon",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAABYWlDQ1BrQ0dDb2xvclNwYWNlRGlzcGxheVAzAAAokWNgYFJJLCjIYWFgYMjNKykKcndSiIiMUmB/yMAOhLwMYgwKicnFBY4BAT5AJQwwGhV8u8bACKIv64LMOiU1tUm1XsDXYqbw1YuvRJsw1aMArpTU4mQg/QeIU5MLikoYGBhTgGzl8pICELsDyBYpAjoKyJ4DYqdD2BtA7CQI+whYTUiQM5B9A8hWSM5IBJrB+API1klCEk9HYkPtBQFul8zigpzESoUAYwKuJQOUpFaUgGjn/ILKosz0jBIFR2AopSp45iXr6SgYGRiaMzCAwhyi+nMgOCwZxc4gxJrvMzDY7v////9uhJjXfgaGjUCdXDsRYhoWDAyC3AwMJ3YWJBYlgoWYgZgpLY2B4dNyBgbeSAYG4QtAPdHFacZGYHlGHicGBtZ7//9/VmNgYJ/MwPB3wv//vxf9//93MVDzHQaGA3kAFSFl7jXH0fsAAAApSURBVAgdY/j//38DEBMCDQwgAFSFTzFEEVglbsWoinAoxq4ITTGGIgCuSXKTY4hPngAAAABJRU5ErkJggg==",alt:"Sort Icon"})]}),r&&Object(n.jsx)("ul",{className:"dropdown-list",children:t.map((function(e){return Object(n.jsx)("li",{className:"dropdown-list-item",onClick:function(){return s(e)},children:e},e)}))})]})},j=(c(19),function(e){var t=e.launches,c=e.ascending,s=e.toggleAscending,A=e.selectedYear,i=e.setSelectedYear,r=Object(a.useState)([]),o=Object(l.a)(r,2),j=o[0],g=o[1];Object(a.useEffect)((function(){0===j.length&&Y()}),[t]);var Y=function(){g(Object(u.a)(new Set(t.map((function(e){return e.launch_year})))))};return Object(n.jsxs)("div",{className:"launch",children:[Object(n.jsxs)("div",{className:"launch__header",children:[Object(n.jsx)(h,{filterYears:j,selectedYear:A,setSelectedYear:i}),Object(n.jsxs)("button",{className:"launch__button",onClick:function(){return s()},children:["Sort ",c?"Descending":"Ascending",Object(n.jsx)("img",{className:"launch__button-icon",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAASCAYAAABrXO8xAAABYWlDQ1BrQ0dDb2xvclNwYWNlRGlzcGxheVAzAAAokWNgYFJJLCjIYWFgYMjNKykKcndSiIiMUmB/yMAOhLwMYgwKicnFBY4BAT5AJQwwGhV8u8bACKIv64LMOiU1tUm1XsDXYqbw1YuvRJsw1aMArpTU4mQg/QeIU5MLikoYGBhTgGzl8pICELsDyBYpAjoKyJ4DYqdD2BtA7CQI+whYTUiQM5B9A8hWSM5IBJrB+API1klCEk9HYkPtBQFul8zigpzESoUAYwKuJQOUpFaUgGjn/ILKosz0jBIFR2AopSp45iXr6SgYGRiaMzCAwhyi+nMgOCwZxc4gxJrvMzDY7v////9uhJjXfgaGjUCdXDsRYhoWDAyC3AwMJ3YWJBYlgoWYgZgpLY2B4dNyBgbeSAYG4QtAPdHFacZGYHlGHicGBtZ7//9/VmNgYJ/MwPB3wv//vxf9//93MVDzHQaGA3kAFSFl7jXH0fsAAAB8SURBVDgRtVOLCsAgCGxj/219+HCXdCAUrsU6kMvHZVGm5KCquZoLvS+bCGSYE6O0NIGnErZDpcDuZiADfQnFTFJFP+IzSka5vcLRFfZ2HN11uePldzsA70fr5Y7/C/EEArOvxyPTrznGhoyC75+fO0FcZ5TIjE8xVN2AP2lkn3O+ysT/AAAAAElFTkSuQmCC",alt:"Sort Icon"})]})]}),Object(n.jsx)("ul",{className:"launch__list",children:t.map((function(e,t){return Object(n.jsx)(d,{launch:e},t)}))})]})}),g=(c(6),c(8),"https://api.spacexdata.com/v3/"),Y=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],A=Object(a.useState)(!0),i=Object(l.a)(A,2),r=i[0],u=i[1],d=Object(a.useState)(""),h=Object(l.a)(d,2),Y=h[0],b=h[1];Object(a.useEffect)((function(){B()}),[r,Y]);var B=function(){(function(e,t){return(e?fetch(g+"launches?order=asc&launch_year=".concat(t)):fetch(g+"launches?order=desc&launch_year=".concat(t))).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))})(r,Y).then((function(e){return s(e)}))};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(o,{handleReloadClick:function(){b(""),B()}}),Object(n.jsx)("main",{className:"content",children:Object(n.jsx)(j,{launches:c,ascending:r,toggleAscending:function(){u(!r)},selectedYear:Y,setSelectedYear:b})})]})},b=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,22)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,A=t.getTTFB;c(e),n(e),a(e),s(e),A(e)}))};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(Y,{})}),document.getElementById("root")),b()}},[[21,1,2]]]);
//# sourceMappingURL=main.7bdfba66.chunk.js.map