!function(n){function r(r){for(var i,a,p=r[0],s=r[1],d=r[2],c=0,f=[];c<p.length;c++)a=p[c],Object.prototype.hasOwnProperty.call(e,a)&&e[a]&&f.push(e[a][0]),e[a]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(n[i]=s[i]);for(l&&l(r);f.length;)f.shift()();return o.push.apply(o,d||[]),t()}function t(){for(var n,r=0;r<o.length;r++){for(var t=o[r],i=!0,p=1;p<t.length;p++){var s=t[p];0!==e[s]&&(i=!1)}i&&(o.splice(r--,1),n=a(a.s=t[0]))}return n}var i={},e={3:0},o=[];function a(r){if(i[r])return i[r].exports;var t=i[r]={i:r,l:!1,exports:{}};return n[r].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=n,a.c=i,a.d=function(n,r,t){a.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:t})},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,r){if(1&r&&(n=a(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var i in n)a.d(t,i,function(r){return n[r]}.bind(null,i));return t},a.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(r,"a",r),r},a.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},a.p="";var p=window.webpackJsonp=window.webpackJsonp||[],s=p.push.bind(p);p.push=r,p=p.slice();for(var d=0;d<p.length;d++)r(p[d]);var l=s;o.push([25,1,0,2,4]),t()}({14:function(n,r,t){"use strict";var i=t(3),e=t.n(i),o=t(7),a={insert:"head",singleton:!1};e()(o.a,a),o.a.locals},15:function(n,r,t){"use strict";var i=t(3),e=t.n(i),o=t(8),a={insert:"head",singleton:!1};e()(o.a,a),o.a.locals},7:function(n,r,t){"use strict";var i=t(4),e=t.n(i)()((function(n){return n[1]}));e.push([n.i,"@import url(https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Indie+Flower&display=swap);"]),e.push([n.i,"* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\na {\n    min-width: 44px;\n    min-height: 44px;\n}\nbody, html {\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    height: 100%;\n    background-color: whitesmoke;\n}\n\nbody {\n    font-family: \"Roboto\", sans-serif;\n    font-size: 12px;\n    color: #424242;\n}\nheader{\n    display: block;\n    width: 100%;\n    min-width: 60px;\n    box-sizing: border-box;\n    background-color: white;\n}\nmain{\nwidth: 100%;\nmargin: 6px auto;\npadding: 20px;\nbackground-color: white;\n}\n\n\n.logo_app{\n    display: inline-block;\n    text-align: start;\n    margin-left:5%;\n}\n.logo_app > p {\n    font-size: 18px;\n    /* font-family: 'Indie Flower', cursive; */\n    font-family: 'Dancing Script', cursive;\n    font-size: x-large;\n}\n.hero{\n    display: flex;\n    align-items: center;\n    min-height: 380px;\n    width: 100%;\n    text-align: center;\n    background-position: center;\n    background-color: green;\n}\n.hero >  div {\n    margin: 0 auto;\n}\n\n.hero > div > h1{\n    color: white;\n    bottom: 200px;\n    font-family: 'Indie Flower', cursive;\n    font-weight: 500;\n    font-size: 36px;\n}\n\n.hero > div > p {\n    color: white;\n    margin-top: 16px;\n    bottom: 200px;\n    font-family: 'Dancing Script', cursive;\n    font-size: 30px;\n    font-weight: 300;\n}\nnav{\n    display: block;\n    padding: 10px;\n    width: 100%;\n    text-align: center;\n    background-color: white;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n}\nnav div{\ndisplay: grid;\ngrid-template-columns: 1fr 1fr;\n}\n\nnav > div > ul{\n    width: 100%;\n    padding: 0;\n    margin: 0;\n}\nnav > div > ul > li{\n    box-sizing: border-box;\n    display: inline;\n    text-align: center;\n    padding-right: 60px;\n    line-height: 24px;\n    min-width: 44px;\n    min-height: 44px;\n    font-family: 'Dancing Script', cursive;\n    font-size:large;\n    \n}\nnav > div > ul> li > a{\n    padding: 1.3em;\n    text-decoration: none;\n    color: #616161;\n}\n nav > div > ul > li > a:hover{\n    text-decoration: underline;\n    color: #000;\n }\n .header__menu {\n    font-size: 32px;\n    padding: 10px;\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    background-color: white;\n    \n\n}\n.header__menu > a{\n    text-decoration: none;\n}\n.header__menu > #menu{\n    min-width: 44px;\n    min-height: 44px;\n    background-color: white;\n    border:none;\n    font-size: 24px;\n    box-sizing: border-box;\n\n}\n.header__menu > div {\n    text-align: center;\n    padding-right: 20%;\n}\n.header__menu > div > span {\n    font-weight: 600;\n    font-size: 20px;\n    font-family: 'Dancing Script', cursive;\n}\n\n\n/*\n * headline\n */\n.headline{\n    margin: 60px auto;\n}\n.headline__figure {\n    width: 100%;\n    \n}\n\n.headline__figure img {\n    width: 100%;\n}\n\n.headline__figure figcaption {\n    text-align: center;\n    color: #666666;\n    font-size: 16px;\n    font-weight:600;\n    margin-top: 8px;\n    font-family: 'Indie Flower', cursive;\n}\n\n.headline__content {\n    width: 100%;\n    padding: 16px 0;\n}\n\n.headline__title {\n    font-size: 24px;\n    font-weight: 500;\n    font-family: 'Dancing Script', cursive;\n}\n\n.headline__description {\n    font-size: 12px;\n    margin-top: 12px;\n    font-family: 'Indie Flower', cursive;\n    /* font-family: 'Dancing Script', cursive; */\n}\n\n.headline__button {\n    font-family: 'Dancing Script', cursive;\n    text-transform: uppercase;\n    margin-top: 24px;\n    cursor: pointer;\n    padding: 8px 16px;\n    color: white;\n    border: none;\n    border-radius: 5px;\n    min-width: 44px;\n    min-height: 44px;\n    background-color: #2c3e50;\n    transition: opacity 0.3s;\n}\n\n.headline__button:hover {\n    opacity: 0.8;\n}\n.menus_restaurant {\n    width: 100%;\n    padding: 20px 0;\n}\n.menus_restaurant > h3 {\n    font-weight: 600;\n    font-size: 24px;\n    margin: 5px 0;\n    font-family: 'Dancing Script', cursive;\n}\n.menus_restaurant > h4 {\n    font-weight: 600;\n    font-size: 20px;\n    font-family: 'Indie Flower', cursive;\n    margin-top: 16px;\n    margin: 10px 0;\n}\n.menus {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    margin: 10px auto;\n    gap: 20px;\n}\nfood-list {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    padding: 10px auto;\n    gap: 20px;\n}\nfood-list food-item {\n    width: 100%;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n    border-radius: 5px;\n    padding: 20px; \n}\nfood-list food-item img {\n    width: 100%;\n}\nfood-list food-item h4 {\n    font-weight: 600;\n    font-size: 18px;\n    font-family: 'Indie Flower', cursive;\n    margin-top: 16px;\n    margin: 10px 0;\n}\ncategory-list {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    padding: 10px auto;\n    gap: 20px;\n}\ncategory-list category-item {\n    width: 100%;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n    border-radius: 5px;\n    padding: 20px; \n}\ncategory-list category-item img {\n    width: 100%;\n}\ncategory-list category-item h4 {\n    font-weight: 600;\n    font-size: 18px;\n    font-family: 'Indie Flower', cursive;\n    margin-top: 16px;\n    margin: 10px 0;\n}\ndrink-list {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    padding: 10px auto;\n    gap: 20px;\n}\ndrink-list drink-item {\n    width: 100%;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n    border-radius: 5px;\n    padding: 20px; \n}\ndrink-list drink-item img {\n    width: 100%;\n}\ndrink-list drink-item h4 {\n    font-weight: 600;\n    font-size: 18px;\n    font-family: 'Indie Flower', cursive;\n    margin-top: 16px;\n    margin: 10px 0;\n}\ncustomer-list{\n    width: 100%;\n}\n\ncustomer-list customer-item {\n    display: block;\n    width: 100%;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n    border-radius: 5px;\n    padding: 20px; \n}\ncustomer-list customer-item h4 {\n    font-weight: 800;\n    font-size: 20px;\n    font-family: 'Dancing Script', cursive;\n    margin-top: 20px;\n}\ncustomer-list customer-item h5 {\n    font-weight: 600;\n    font-size: 20px;\n    margin-top: 16px;\n    font-family: 'Indie Flower', cursive;\n}\n\n.menus .menus_item {\n    width: 100%;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n    border-radius: 5px;\n    padding: 20px;\n}\n.menus .menus_item img {\n    width: 100%;\n}\n.menus .menus_item h4 {\n    font-weight: 600;\n    font-size: 20px;\n    font-family: 'Dancing Script', cursive;\n    margin-top: 16px;\n}\n.menus .menus_item h5{\n    font-weight: 600;\n    font-size: 20px;\n    margin-top: 16px;\n    font-family: 'Indie Flower', cursive;\n}\n\n\n .posts{\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    gap: 20px;\n    margin: 32px auto auto;\n    \n}\n\n.posts > article{\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n    width: 100%;\n    border-radius: 5px;\n    overflow: hidden;\n    padding: 20px;\n\n}\n.posts > article > picture img,source{\n    width: 100%;\n}\n.posts > article > .posts_content{\n    padding: 2%;\n}\n.posts > article > .posts_content > div{\n   display: grid;\n   grid-template-columns: 2fr 1fr;\n}\n.posts > article > .posts_content > div > span{\n    font-weight: 600;\n    font-size: 16px;\n    /* font-family: 'Dancing Script', cursive; */\n    font-family: 'Indie Flower', cursive;\n    margin-top: 16px;\n    transition: 0.3s opacity;\n}\n.posts > article > .posts_content > a{\n    display: inline-block;\n    font-weight: 600;\n    font-size: 20px;\n    font-family: 'Dancing Script', cursive;\n    margin-top: 16px;\n    transition: 0.3s opacity;\n    min-width: 44px;\n    min-height: 44px;\n    text-decoration: none;\n    color: inherit;\n}\n.posts > article > .posts_content > a:hover{\n    opacity: 0.5;\n}\n.posts > article > .posts_content > p{\n    margin-top: 16px;\n    font-size: 14px;\n    line-height: 1.5em;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-weight: 400;\n    font-family: cursive;\n}\n\n.title_explore{\n    margin: 20px 0;\n    text-align: center;\n    display: block;\n    font-size: medium;\n    font-family: 'Indie Flower', cursive;\n}\n\n.skip-link {\n    position: absolute;\n    top: -45px;\n    left: 0;\n    background-color: burlywood;\n    color: white;\n    font-family: 'Indie Flower', cursive;\n    padding: 8px;\n    z-index: 100;\n }\n .skip-link:focus {\n    top: 0;\n }\n .restaurant {\n    margin: 40px auto;\n    width: 100%;\n    max-width: 800px;\n  }\n  .restaurant .restaurant_package {\n      display: grid;\n      grid-template-columns: 1fr 1fr;\n      width: 100%;\n      gap:10px;\n      margin-bottom: 30px;\n}\n  .restaurant .restaurant__title {\n    margin: 12px 0;\n    font-size:25px;\n    font-family: 'Dancing Script', cursive; \n  }\n   .restaurant .restaurant__info{\n       padding: 0 16px;\n   }\n  .restaurant .restaurant__poster {\n    width: 100%;\n   max-width: 600px;\n  }\n  .restaurant .restaurant__info h3 {\n    margin: 12px 0;\n    font-size:24px;\n    font-family: 'Dancing Script', cursive; \n  }\n  .restaurant .restaurant__info h4 {\n    margin: 12px 0;\n    font-size:16px;\n    font-family: 'Dancing Script', cursive; \n  }\n  .restaurant .restaurant__overview h3{\n    font-family: 'Dancing Script', cursive; \n    font-size:24px;\n  }\n  .restaurant p{\n    font-family: 'Indie Flower', cursive;\n    font-size:18px;\n  }\n  \n\n  .content {\n    margin: 0 auto;\n    min-height: 100%;\n    width: 100%;\n  }\n   \n  .content .content__heading {\n    font-weight: normal;\n    font-family: 'Dancing Script', cursive; \n    padding-left: 5%;\n    padding-top: 3%;\n    font-size: 30px;\n    \n  }\n    .nonExistContent {\n    font-weight: normal;\n    font-family: 'Indie Flower', cursive;\n    padding-left: 5%;\n    padding-top: 3%;\n    margin : 20% 25%;\n    font-size: 20px;\n    \n  }\n   \n   \n  .restaurants {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 30px;\n    margin: 30px auto;\n  }\n  .like {\n    font-size: 18px;\n    position: fixed;\n    bottom: 16px;\n    right: 16px;\n    background-color: #db0000;\n    color: white;\n    border: 0;\n    border-radius: 50%;\n    width: 55px;\n    height: 55px;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n#review {\n    display: block;\n    width: 100%;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n    border-radius: 5px;\n    padding: 20px 50px; \n}\n#review label{\n    font-family: 'Dancing Script', cursive; \n    font-size:20px;\n    font-weight: 600;\n}\n\n\ninput[type=text] {\n    width: 130px;\n    box-sizing: border-box;\n    border: 2px solid #ccc;\n    border-radius: 4px;\n    font-size: 16px;\n    background-color: white;\n    background-position: 10px 10px; \n    background-repeat: no-repeat;\n    padding: 12px 20px 12px 40px;\n    font-family: 'Indie Flower', cursive;\n    transition: width 0.4s ease-in-out;\n  }\n  .button {\n    background-color: #4CAF50; /* Green */\n    border: none;\n    min-width: 44px;\n    min-height: 44px;\n    color: white;\n    padding: 16px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin: 4px 2px;\n    transition-duration: 0.4s;\n    cursor: pointer;\n    border-radius: 10px;\n    font-family: 'Dancing Script', cursive; \n  }\n  \n  .button1 {\n    background-color: green; \n    color: white; \n    \n  }\n  \n  .button1:hover {\n    background-color: white;\n    color: black;\n    border: 2px solid #4CAF50;\n  }\n  \n  input[type=text]:focus {\n    width: 100%;\n  }\n\n.input_form {\n    box-sizing: border-box;\n    display: grid;\n    grid-template-columns: 1fr;\n    width: 100%;\n    margin-bottom: 10px;\n}\n.loading {\n    width: 100%;\n    margin: 20% 40%;\n}\n.loading h2{\n    font-weight: 600;\n    font-size: 20px;\n    /* font-family: 'Dancing Script', cursive; */\n    font-family: 'Indie Flower', cursive;\n}\n\n.loader {\n    border: 16px solid #f3f3f3;\n    border-radius: 50%;\n    border-top: 16px solid #3498db;\n    width: 120px;\n    height: 120px;\n    -webkit-animation: spin 2s linear infinite; /* Safari */\n    animation: spin 2s linear infinite;\n  }\n  \n  /* Safari */\n  @-webkit-keyframes spin {\n    0% { -webkit-transform: rotate(0deg); }\n    100% { -webkit-transform: rotate(360deg); }\n  }\n  \n  @keyframes spin {\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n  }\nfooter{\n    display: block;\n    width: 100%;\n    padding: 2em;\n    /* font-family: 'Dancing Script', cursive; */\n    font-family: 'Indie Flower', cursive;\n    font-size: 14px;\n    text-align: center;\n    background-color: white;\n}",""]),r.a=e},8:function(n,r,t){"use strict";var i=t(4),e=t.n(i)()((function(n){return n[1]}));e.push([n.i,".posts {\r\n    display: grid;\r\n    grid-row-gap: 16px;\r\n}\r\n\r\n@media screen and (max-width: 499px) {\r\n    nav {\r\n        z-index: 10;\r\n        background-color: #fff;\r\n        width: 250px;\r\n        position: absolute;\r\n\r\n        /* This trasform moves the drawer off canvas. */\r\n        -webkit-transform: translate(-300px, 0);\r\n        transform: translate(-300px, 0);\r\n\r\n        /* Optionally, we animate the drawer. */\r\n        transition: transform 0.3s ease;\r\n    }\r\n\r\n    .open {\r\n        -webkit-transform: translate(0, 0);\r\n        transform: translate(0, 0);\r\n    }\r\n    \r\n    nav > div > ul > li {\r\n        display: list-item;\r\n        border-bottom: 1px solid #E0E0E0;\r\n        width: 100%;\r\n        text-align: left;\r\n    }\r\n    nav > div > .logo_app {\r\n       display: none;\r\n    }\r\n    .menus {\r\n        grid-template-columns: 1fr;\r\n    }\r\n    food-list {\r\n        grid-template-columns: 1fr;\r\n    }\r\n    category-list {\r\n        grid-template-columns: 1fr;\r\n    }\r\n    drink-list {\r\n        grid-template-columns: 1fr;\r\n    }\r\n    customer-list customer-item h4{\r\n        font-size: 18px;\r\n    }\r\n    customer-list customer-item h5{\r\n        font-size: 14px;\r\n    }\r\n    .button {\r\n        font-size: 14x;\r\n    }\r\n    label {\r\n        font-size: 14px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 455px) {\r\n   \r\n    .headline__figure figcaption{\r\n        font-size:14px;\r\n    }\r\n    .posts_content {\r\n        padding: 16px 32px 32px 32px;\r\n    }\r\n\r\n    .posts > article > .posts_content > h3 {\r\n        font-size: 16px;\r\n    }\r\n\r\n    .posts > article > .posts_content > p {\r\n        font-size: 12px;\r\n    }\r\n    .posts > article > .posts_content > div > span{\r\n        font-size: 13px;\r\n        /* font-family: 'Dancing Script', cursive; */\r\n    }\r\n}\r\n@media screen and (min-width: 455px) {\r\n    .headline__content {\r\n        padding: 16px 16px;\r\n    }\r\n\r\n    .headline__title {\r\n        font-size: 24px;\r\n    }\r\n\r\n    .headline__description {\r\n        font-size: 15px;\r\n    }\r\n    .posts > article > .posts_content > h3 {\r\n        font-size: 18px;\r\n    }\r\n\r\n    .posts > article > .posts_content > p {\r\n        font-size: 14px;\r\n    }\r\n    .posts > article > .posts_content > div > span{\r\n        font-size: 15px;\r\n        /* font-family: 'Dancing Script', cursive; */\r\n    }\r\n   \r\n}\r\n\r\n@media screen and (min-width: 500px) {\r\n    \r\n    .header__menu {\r\n        display: none;\r\n    }\r\n    .menus {\r\n        grid-template-columns: 1fr 1fr;\r\n    }\r\n    food-list {\r\n        grid-template-columns: 1fr 1fr;\r\n    }\r\n    category-list {\r\n        grid-template-columns: 1fr 1fr;\r\n    }\r\n    drink-list {\r\n        grid-template-columns: 1fr 1fr;\r\n    }\r\n    customer-list customer-item h4{\r\n        font-size: 20px;\r\n    }\r\n    customer-list customer-item h5{\r\n        font-size: 15px;\r\n    }\r\n    .button {\r\n        font-size: 15px;\r\n    }\r\n    label {\r\n        font-size: 16px;\r\n    }\r\n    \r\n}\r\n@media screen and (max-width: 600px) {\r\n    nav > div > ul > li {\r\n        font-size: 15px;\r\n    }\r\n    nav > div > .logo_app > p{\r\n        font-size : 18px;\r\n    }\r\n    .hero > div > h1{\r\n        font-size: 26px;\r\n    }\r\n    .hero > div > p{\r\n        font-size: 24px;\r\n    }\r\n    .title_explore > h2{\r\n        font-size: 20px;\r\n    }\r\n    .restaurant .restaurant_package {\r\n        grid-template-columns: 1fr;\r\n    }\r\n   \r\n} \r\n@media screen and (min-width: 650px) {\r\n    .headline__content {\r\n        margin: 0 auto;\r\n        max-width: 650px;\r\n    }\r\n\r\n    .posts_content {\r\n        padding: 16px 32px 32px 32px;\r\n    }\r\n\r\n    .post > article > .posts_content > h3 {\r\n        font-size: 18px;\r\n    }\r\n\r\n    .post > article > .posts_content > p {\r\n        font-size: 13px;\r\n    }\r\n    .posts > article > .posts_content > div > span{\r\n        font-size: 15px;\r\n        /* font-family: 'Dancing Script', cursive; */\r\n    }\r\n    .restaurant {\r\n        grid-template-columns: auto 1fr;\r\n    }\r\n   \r\n    .restaurant .restaurant__title {\r\n        grid-column-start: 1;\r\n        grid-column-end: 3;\r\n    }\r\n   \r\n    .restaurant .restaurant__overview {\r\n        grid-column-start: 1;\r\n        grid-column-end: 3;\r\n    }\r\n    \r\n}\r\n\r\n@media screen and (max-width: 400px) {\r\n    .posts {\r\n        display: grid;\r\n        grid-template-columns: 1fr;\r\n        grid-row-gap: 16px;\r\n    }\r\n} \r\n@media screen and (min-width: 400px) {\r\n    .posts {\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr;\r\n        grid-column-gap: 10px;\r\n        grid-row-gap: 16px;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 800px) {\r\n    nav > div > ul > li {\r\n        max-width: 800px;\r\n        margin: 0 auto;\r\n    }\r\n    .menus {\r\n        grid-template-columns: 1fr 1fr 1fr;\r\n    }\r\n    food-list {\r\n        grid-template-columns: 1fr 1fr 1fr;\r\n    }\r\n    category-list {\r\n        grid-template-columns: 1fr 1fr 1fr;\r\n    }\r\n    drink-list {\r\n        grid-template-columns: 1fr 1fr 1fr;\r\n    }\r\n    customer-list customer-item h4{\r\n        font-size: 24px;\r\n    }\r\n    customer-list customer-item h5{\r\n        font-size: 16px;\r\n    }\r\n    .button {\r\n        font-size: 16px;\r\n    }\r\n    label {\r\n        font-size: 20px;\r\n    }\r\n    \r\n}\r\n\r\n@media screen and (min-width: 1000px) {\r\n    .headline {\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr;\r\n    }\r\n\r\n    .headline__content {\r\n        padding: 16px 32px;\r\n    }\r\n\r\n    .posts {\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr 1fr;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 1200px) {\r\n    main {\r\n        max-width: 1200px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 960px) {\r\n    nav > div > ul > li{\r\n        text-align: start;\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n}\r\n",""]),r.a=e}});