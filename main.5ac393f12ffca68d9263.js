(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2lKY":function(e,n){var t="light-theme",a="dark-theme",i=document.querySelector("#theme-switch-toggle");document.body.classList.add(t),localStorage.getItem("themeKey")===a?document.body.classList.add(a):document.body.classList.add(t),document.body.classList.contains(a)?document.querySelector("input").checked=!0:document.querySelector("input").checked=!1;i.addEventListener("change",(function(e){document.body.classList.toggle(a),document.body.classList.toggle(t),e.target.checked?localStorage.setItem("themeKey",a):localStorage.setItem("themeKey",t)}))},"4cH7":function(e,n,t){var a=t("mp5j");e.exports=(a.default||a).template({1:function(e,n,t,a,i){return'            <li class="tag-list__item">'+e.escapeExpression(e.lambda(n,n))+"</li>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,n,t,a,i){var c,s,o=null!=n?n:e.nullContext||{},r=e.hooks.helperMissing,l="function",d=e.escapeExpression,p=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'    <li class="menu__item">\r\n      <article class="card">\r\n        <img\r\n          src='+d(typeof(s=null!=(s=p(t,"image")||(null!=n?p(n,"image"):n))?s:r)===l?s.call(o,{name:"image",hash:{},data:i,loc:{start:{line:4,column:14},end:{line:4,column:23}}}):s)+"\r\n          alt="+d(typeof(s=null!=(s=p(t,"name")||(null!=n?p(n,"name"):n))?s:r)===l?s.call(o,{name:"name",hash:{},data:i,loc:{start:{line:5,column:14},end:{line:5,column:22}}}):s)+'\r\n          class="card__image"\r\n        />\r\n        <div class="card__content">\r\n          <h2 class="card__name">'+d(typeof(s=null!=(s=p(t,"name")||(null!=n?p(n,"name"):n))?s:r)===l?s.call(o,{name:"name",hash:{},data:i,loc:{start:{line:9,column:33},end:{line:9,column:41}}}):s)+'</h2>\r\n          <p class="card__price">\r\n            <i class="material-icons"></i>\r\n            '+d(typeof(s=null!=(s=p(t,"price")||(null!=n?p(n,"price"):n))?s:r)===l?s.call(o,{name:"price",hash:{},data:i,loc:{start:{line:12,column:12},end:{line:12,column:21}}}):s)+' кредитов\r\n          </p>\r\n    \r\n          <p class="card__descr">\r\n            '+d(typeof(s=null!=(s=p(t,"description")||(null!=n?p(n,"description"):n))?s:r)===l?s.call(o,{name:"description",hash:{},data:i,loc:{start:{line:16,column:12},end:{line:16,column:27}}}):s)+'\r\n          </p>\r\n    \r\n          <ul class="tag-list">\r\n'+(null!=(c=p(t,"each").call(o,null!=n?p(n,"ingredients"):n,{name:"each",hash:{},fn:e.program(1,i,0),inverse:e.noop,data:i,loc:{start:{line:20,column:10},end:{line:22,column:21}}}))?c:"")+'          </ul>\r\n        </div>\r\n    \r\n        <button class="card__button button">\r\n          <i class="material-icons button__icon"> shopping_cart </i>\r\n          В корзину\r\n        </button>\r\n      </article>\r\n    </li>\r\n'},useData:!0})},L1EO:function(e,n,t){},QfWi:function(e,n,t){"use strict";t.r(n);t("lmye"),t("L1EO");var a=t("4cH7"),i=t.n(a),c=t("s5gr"),s=(t("2lKY"),document.querySelector(".js-menu"));c.map((function(e){var n=i()(e);s.insertAdjacentHTML("beforeend",n)})),console.log(s)},s5gr:function(e){e.exports=JSON.parse('[{"id":"XWaQXcbk0","name":"Картофель, запеченный в мундире","description":"Ароматный, сытный, шипящий домашний картофель, фаршированный сметанно-беконной начинкой, — это очень простой и очень эффектный способ накормить большое количество человек, практически не потратив на готовку ни сил, ни времени. Обычную картошку при желании тут можно заменить на сладкий батат, а в начинку добавить, к примеру, кукурузу или сладкий красный перец.","image":"https://s1.eda.ru/StaticContent/Photos/140812180013/140820212258/p_O.jpg","price":100,"ingredients":["Картофель","Чеснок","Сметана","Бекон","Твердый сыр","Зеленый лук"]},{"id":"pkXzyRp1P","name":"Томатный магрибский суп","description":"Томатный магрибский суп особенно распространен в Марокко и Тунисе. Он весьма прост в приготовлении и сам по себе легкий — в основе томаты и куриный бульон. Кроме них в супе только необходимые специи, мед и лимон, которые все вместе и передают тот самый восточный колорит. Вкус супа всецело зависит от качества томатов. Дополнят блюдо свежая кинза и отдельные дольки лимона.","image":"https://www.go-cook.ru/wp-content/uploads/2014/11/magribskij-tomatnyj-sup.jpg","price":150,"ingredients":["Помидоры","Куриный бульон","Мед","Петрушка","Кинза","Паприка"]},{"id":"QMom9q4Ku","name":"Крем-суп из тыквы","description":"Портрет этой оранжевой похлебки украшает обложку книги «La Cuisine du Marché» Поля Бокюза. Бокюз, придумавший так называемую новую кухню, считал тыкву одной из основ этого миропорядка, а тыквенный суп — эдакой околоплодной водой гастрономии.","image":"https://s1.eda.ru/StaticContent/Photos/121114213720/151024152626/p_O.png","price":100,"ingredients":["Тыква","Петрушка","Сливки","Бренди","Куриный бульон"]},{"id":"k2k0UrjZG","name":"Салат из красной фасоли с творожным сыром","description":"Тосканский салат, выдержанный в колористике итальянского флага. Буквально нескольких ложек хватает, чтобы в желудке образовалась приятная тяжесть. Очень полезная штука с точки зрения утра, когда трудно запихнуть в себя крупные дозы биомассы, а есть при этом хочется.","image":"https://s.mediasole.ru/cache/content/data/images/1393/1393226/original.jpg","price":150,"ingredients":["Фасоль","Соль","Чеснок","Оливковое масло","Творожный сыр","Красный лук"]},{"id":"j2k8U1jZd","name":"Классический греческий салат ","description":"Это рецепт из старой, привезенной из Греции, кулинарной книги. Секрет салата — свежайшие овощи и хорошая фета. Для салата используют только оливковое масло, а такие специи, как орегано и базилик, являются визитной карточкой греческой кухни.","image":"https://dietdo.ru/wp-content/uploads/2017/03/Grecheskiy-salat-retsept-klassicheskiy-s-foto-poshagovo-min.jpg","price":350,"ingredients":["Оливковое масло","Лимонный сок","Чеснок","Помидоры","Красный лук","Сыр фета","Маслины"]},{"id":"X2aQ7cvkd","name":"Маффины с голубикой и мускатным орехом","description":"Культовая ягода, которую научились производить круглый год, в сочетании с рыхлым тестом — это абсолютно беспроигрышный вариант. Маффины с голубикой стали популярным десертом в Англии и Америке, хотя происхождение их французское. Да и вообще эти маленькие сладкие кексы, какими мы их знаем сейчас, задумывались как обычный хлеб и на вкус были нейтральны.","image":"https://s1.eda.ru/StaticContent/Photos/120131111301/140324110953/p_O.jpg","price":170,"ingredients":["Сливочное масло","Пшеничная мука","Голубика","Ванильный экстракт","Мускатный орех"]},{"id":"nk3zy1pf8","name":"Азу по‑татарски","description":"Одно из немногих блюд, удостоившихся в советской продуктовой традиции продажи с именной нарезкой. И до сих пор в кулинариях и супермаркетах можно найти говядину, которую режут соломкой и продают как азу. Насчет самого блюда до сих пор идут споры, как и с чем готовить: использовать говядину или баранину, топленое или обычное масло, тушить в казане или сотейнике с толстым дном. Редакций этого блюда может быть много, но основа его всегда неизменна — это нарезанное соломкой мясо, картофель и томатный соус.","image":"https://s2.eda.ru/StaticContent/Photos/160105153525/160110193232/p_O.jpg","price":270,"ingredients":["Говядина","Соленые огурцы","Картофель","Мясной бульон","Чеснок"]},{"id":"b7k2U13fd","name":"Жареный рис с яйцом по‑китайски","description":"Жареный рис — довольно распространенный ингредиент блюд восточноазиатской кухни — готовить, в сущности, можно из остатков вчерашнего ужина. Только хорошо остывший, заранее сваренный рис, в идеале простоявший всю ночь в холодильнике, при попадании в раскаленный вок не расползется до состояния каши и не превратит содержимое сковородки в неповоротливый бесформенный ком.","image":"https://s2.eda.ru/StaticContent/Photos/150428090447/150505141508/p_O.jpg","price":240,"ingredients":["Круглый рис","Мини цукини","Тертый имбирь","Грибы шиитаке","Соевый соус","Кунжутное масло"]}]')}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.5ac393f12ffca68d9263.js.map