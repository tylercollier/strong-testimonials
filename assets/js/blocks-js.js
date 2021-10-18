!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var a=wp.element.Fragment,r=wp.components.Spinner,s=function(e){return"loading"==e.status?[React.createElement(a,null,React.createElement("div",{className:"st-block-preview"},React.createElement("div",{className:"st-block-preview__content"},React.createElement("div",{className:"st-block-preview__logo"}," "),React.createElement(r,null))))]:null},o=function(e,t){return"strong-view strong-view-id-".concat(e," ").concat(t," wpmtst-").concat(t)},i=function(e,t){var n="strong-content strong-".concat(e," columns-").concat(t);return""==e?n="strong-content strong-normal columns-1":"masonry"==e&&(n+=" masonry"),n},l=function(e){return React.createElement("h3",{class:"wpmtst-testimonial-heading testimonial-heading"},React.createElement("a",{href:e.meta.meta.company_website[0],rel:"bookmark"},e.title.rendered))},c=function(e){switch(e){case"widget-thumbnail":return"75";case"thumbnail":return"150";case"medium":return"300";case"large":return"1024"}},u=wp.element,m=(u.Component,u.Fragment,u.useEffect),p=function(e){var t,n,a,r=e.testimonial,s=e.attributes,o=e.viewType,i=(e.layout,r.id);r.title,r.content,r.meta.meta;if("display"==o){var u=s.layout;s.columns;m((function(){var e;"masonry"==u&&((e=jQuery('.strong-view[data-state="idle"] .strong-masonry')).prepend('<div class="grid-sizer"></div><div class="gutter-sizer"></div>'),e.masonry({columnWidth:".grid-sizer",gutter:".gutter-sizer",itemSelector:".wpmtst-testimonial",percentPosition:!0}),e.closest(".strong-view").attr("data-state","init"))}))}return[React.createElement("div",{className:"wpmtst-testimonial testimonial post-".concat(i," t-slide")},React.createElement("div",{className:"wpmtst-testimonial-inner testimonial-inner"},React.createElement("div",{className:"wpmtst-testimonial-content testimonial-content"},l(r),React.createElement("p",null,r.content.raw.replace(/(<([^>]+)>)/gi,""))),(t=r.meta.featured_image,n=st_views.gravatar,a=c("thumbnail"),0==t?React.createElement("div",{class:"wpmtst-testimonial-image testimonial-image"},React.createElement("img",{alt:"",src:n,srcset:n,class:"avatar avatar-".concat(a," photo"),height:a,width:a,loading:"lazy"})):React.createElement("div",{class:"wpmtst-testimonial-image testimonial-image"},React.createElement("img",{width:a,height:a,src:t,class:"attachment-thumbnail size-thumbnail wp-post-image",alt:"",srcset:t,sizes:"(max-width: ".concat(a,"px) 100vw, ").concat(a,"px")}))),React.createElement("div",{class:"clear"})))]},d=function(e){return[React.createElement("div",{className:"pagination"},React.createElement("a",{className:"st-previous"},React.createElement("span",null,"Previous Page")),React.createElement("div",{className:"pages"},React.createElement("a",{className:"page-numbers"},"1"),React.createElement("a",{className:"page-numbers"},"2"),React.createElement("a",{className:"page-numbers"},"3"),React.createElement("a",{className:"page-numbers"},"4"),React.createElement("a",{className:"page-numbers"},"5"),React.createElement("a",{className:"page-numbers dots"},"..."),React.createElement("a",{className:"page-numbers"},"8")),React.createElement("a",{className:"st-next"},React.createElement("span",null,"Next Page")))]};function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var y=wp.element,f=y.Fragment,b=y.useEffect,v=function(e){var t=e.attributes,n=e.initMasonry,a=e.setMasonryObj,r=(e.test,t.id),s=t.template,l=t.layout,c=t.columns,u=t.testimonials,m=t.pagination;t.testimonialsToShow;return b((function(){"masonry"==l&&n(r,a)}),[l,c]),[React.createElement("div",{className:o(r,s),"data-count":u.length,"data-state":"idle"},React.createElement("div",{className:i(l,c)},React.createElement(f,null,u.map((function(t,a){return[React.createElement(p,g({testimonial:t,index:a,initMasonry:n},e))]})))),m&&React.createElement(React.Fragment,null,React.createElement(d,null)))]},h=wp.element.useEffect,w=function(e){var t=e.allTestimonialsCategories,n=e.selectedCategories,a=e.setAttributes,r=e.dispatch;return h((function(){var e=[];if(t.forEach((function(t){e.push({value:t.id,label:t.name,count:t.count,slug:t.slug})})),!jQuery(".st-testimonial-categories-input").hasClass("selectize-control"))jQuery(".st-testimonial-categories-input").selectize({valueField:"value",plugins:["remove_button"],labelField:"label",searchField:["label","value"],multiple:!0,create:!1,placeholder:"Search for category...",preload:!0,allowEmptyOptions:!0,closeAfterSelect:!0,options:n.concat(e),render:{option:function(e,t){return'<div class="st-categories"><p class="st-category-name">'+t(e.label)+'</p><p class="st-category-count">'+t(e.count)+"</p></div>"}},onChange:function(e){e=e.split(","),r({type:"SELECTEDCATEGORYCHANGE",payload:{value:e,setAttributes:a}})}})}),[]),React.createElement("input",{className:"st-testimonial-categories-input",value:0==n.length?"":n.join()})},E=wp.i18n.__,R=wp.element,_=(R.Fragment,R.useState,wp.blockEditor.InspectorControls),O=wp.components,S=(O.Button,O.PanelBody),C=O.RangeControl,j=O.SelectControl,T=O.__experimentalNumberControl,A=O.__experimentalInputControl,N=O.ToggleControl,k=O.__experimentalRadio,P=O.__experimentalRadioGroup,x=function(e){var t=e.attributes,n=e.setAttributes,a=e.testimonialsFetch,r=e.dispatch,s=e.destroyMasonry,o=e.masonryObj,i=t.id,l=t.layout,c=t.columns,u=t.testimonialsToShow,m=t.allTestimonialsCategories,p=t.selectedCategories,d=t.pagination,g=t.orderBy,y=t.query,f=t.template,b=function(){return React.createElement(P,{label:E("Type","strong-testimonials"),onChange:function(e){n({template:e})},checked:f},React.createElement(k,{value:"default"},E("Default","strong-testimonials")),React.createElement(k,{value:"modern"},E("Modern","strong-testimonials")),React.createElement(k,{value:"bold"},E("Bold","strong-testimonials")),React.createElement(k,{value:"simple"},E("Simple","strong-testimonials")),React.createElement(k,{value:"unstyled"},E("Unstyled","strong-testimonials")))};return React.createElement(React.Fragment,null,React.createElement(_,null,React.createElement(S,{title:E("Layout Settings","strong-testimonials"),initialOpen:!0},React.createElement(j,{label:E("Type","strong-testimonials"),value:l,options:[{label:E("List","strong-testimonials"),value:""},{label:E("Masonry","strong-testimonials"),value:"masonry"}],onChange:function(e){"masonry"!=e&&s(i,o),n({layout:e})}}),""!=l&&React.createElement(C,{label:E("Columns","strong-testimonials"),value:c,onChange:function(e){return n({columns:e})},min:2,max:4}),React.createElement(React.Fragment,null,React.createElement("label",null,"No. of testimonials"),React.createElement(T,{isShiftStepEnabled:!0,onChange:function(e){r({type:"TESTIMONIALSTOSHOWCHANGE",payload:{value:e,setAttributes:n}})},shiftStep:10,value:u,min:0,max:100}))),React.createElement(S,{title:E("Testimonial Category","strong-testimonials"),initialOpen:!0},null!=m&&React.createElement(React.Fragment,null,React.createElement(w,{setAttributes:n,allTestimonialsCategories:m,selectedCategories:p,testimonialsFetch:a,dispatch:r}))),React.createElement(S,{title:E("Order By","strong-testimonials"),initialOpen:!0},React.createElement(j,{value:g,options:[{label:E("Newest First","strong-testimonials"),value:"desc"},{label:E("Oldest First","strong-testimonials"),value:"asc"}],onChange:function(e){r({type:"ORDERBYCHANGE",payload:{value:e,setAttributes:n}})}})),React.createElement(S,{title:E("Pagination","strong-testimonials"),initialOpen:!0},React.createElement(N,{label:E("Toggle Pagination","strong-testimonials"),checked:d,help:E(d?"Pagination is turned on":"Pagination is turned off","strong-testimonials"),onChange:function(){return n({pagination:!d})}}),d&&React.createElement(React.Fragment,null,React.createElement(A,{type:"number",label:E("Items Per Page","strong-testimonials"),min:1,max:100,value:u,onChange:function(e){r({type:"TESTIMONIALSTOSHOWCHANGE",payload:{value:e,setAttributes:n}})}}),React.createElement(A,{type:"number",label:E("Offset","strong-testimonials"),min:0,max:100,onChange:function(e){r({type:"OFFSETCHANGE",payload:{value:e,setAttributes:n,query:y}})},value:y.offset}),React.createElement(A,{type:"number",label:E("Max Pages To Show","strong-testimonials"),min:0,max:100,value:y.pages,onChange:function(e){r({type:"PAGESCHANGE",payload:{value:e,setAttributes:n,query:y}})}}))),React.createElement(S,{initialOpen:!0,title:E("Template Settings","strong-testimonials")},b)))},F=function(e,t,n){0==e.testimonials.length&&t({testimonials:n})};function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function B(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var a,r,s=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(a=n.next()).done)&&(s.push(a.value),!t||s.length!==t);o=!0);}catch(e){i=!0,r=e}finally{try{o||null==n.return||n.return()}finally{if(i)throw r}}return s}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return H(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return H(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(Object(n),!0).forEach((function(t){I(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}wp.i18n.__;var z=wp.element,q=(z.Component,z.Fragment,z.useEffect),L=z.useReducer,Q=z.useState,W=(z.useRef,wp.data),Y=(W.withSelect,W.useSelect),U=wp.components;U.SelectControl,U.Spinner,U.Toolbar,U.Button,wp.blockEditor.BlockControls,wp.compose.compose;function V(e,t){switch(t.type){case"ORDERBYCHANGE":return e.orderBy=t.payload.value,t.payload.setAttributes({orderBy:t.payload.value,testimonials:[]}),e;case"SELECTEDCATEGORYCHANGE":return t.payload.setAttributes({selectedCategories:t.payload.value,testimonials:[]}),e;case"TESTIMONIALSTOSHOWCHANGE":return""!=t.payload.value&&t.payload.setAttributes({testimonialsToShow:parseInt(t.payload.value),testimonials:[]}),e;case"OFFSETCHANGE":return t.payload.setAttributes({query:D(D({},t.payload.query),{},{offset:parseInt(t.payload.value)}),testimonials:[]}),e;case"PAGESCHANGE":return t.payload.setAttributes({query:D(D({},t.payload.query),{},{pages:parseInt(t.payload.value)}),testimonials:[]}),e;default:return e}}var $=function(e){var t=e.setAttributes,n=e.attributes,a=n.status,r=n.testimonials,o=n.testimonialsToShow,i=n.selectedCategories,l=n.orderBy,c=(n.id,n.query),u=B(L(V,{orderBy:l,selectedCategories:i,testimonialsToShow:o}),2),m=(u[0],u[1]),p=Y((function(e){var t=e("core").getEntityRecords,n={post_status:"publish",per_page:0==o?-1:o,order:"asc"==l?"asc":"desc",offset:c.offset,pages:c.pages};return 0!=i.length&&""!=i.join()&&(n["wpm-testimonial-category"]=i),t("postType","wpm-testimonial",n)||[]})),d=B(Q(!1),2),g=d[0],y=d[1],f=function(e,t){e.currentTarget.setMasonryObj(e.currentTarget)},b=function(e,t){return 0!=t&&(jQuery(t).masonry("destroy"),!0)};return q((function(){0==n.id&&(!function(e){wp.apiFetch({path:"wp/v2/wpm-testimonial-category"}).then((function(t){e({allTestimonialsCategories:t})}))}(t),t({id:Math.floor(1e4*Math.random())+1,layout:"",template:"default",columns:2}))}),[]),q((function(){0!=r.length||(0==p.length?t({status:"loading"}):0!=p.length&&0==r.length&&t({status:"ready",testimonials:p}))})),q((function(){F(n,t,p)}),[l,i,o]),"loading"===a?[React.createElement(React.Fragment,null,React.createElement(x,M({},e,{testimonialsFetch:p,dispatch:m,getTestimonials:F,destroyMasonry:b,masonryObj:g})),React.createElement(s,{status:a}))]:React.createElement(React.Fragment,null,React.createElement(x,M({},e,{testimonialsFetch:p,dispatch:m,getTestimonials:F,destroyMasonry:b,masonryObj:g})),React.createElement(v,M({},e,{initMasonry:function(e,t){var n=jQuery(".strong-view-id-".concat(e," .strong-masonry"));0==jQuery(".grid-sizer").length&&n.prepend('<div class="grid-sizer"></div><div class="gutter-sizer"></div>');var a=n.masonry({columnWidth:".grid-sizer",gutter:".gutter-sizer",itemSelector:".wpmtst-testimonial",percentPosition:!0});a[0].setMasonryObj=t,a.on("layoutComplete",f),n.closest(".strong-view-id-".concat(e)).attr("data-state","init")},setMasonryObj:y})))},J=function(e,t,n){var a="strong-view strong-view-id-".concat(e," ").concat(t," wpmtst-").concat(t," slider-container slider-mode-").concat(n.effect);return 1==n.adapt_height&&(a+=" slider-adaptive"),"none"!=n.controls_type&&("sides"==n.controls_type?a+=" controls-type-sides controls-style-".concat(n.controls_style):"simple"!=n.controls_type&&"full"!=n.controls_type||(a+=" nav-position-".concat(n.nav_position," controls-style-").concat(n.controls_style)),"full"==n.pager_type&&(a+=" pager-type-full pager-style-".concat(n.pager_style))),a},K=wp.element,X=K.Fragment,Z=K.useEffect,ee=function(e){var t=e.attributes,n=t.id,a=t.template,r=t.testimonials,s=t.config,o=t.viewType;Z((function(){!1!==s&&i(function(e,t){return{mode:e.effect,speed:e.speed,pause:e.pause,autoHover:e.auto_hover,autoStart:0,infiniteLoop:e.continuous_sliding,stopAutoOnClick:e.stop_auto_on_click,adaptiveHeight:e.adapt_height,adaptiveHeightSpeed:e.adapt_height_speed,controls:1,autoControls:1,pager:"full"==e.pager_type?1:0,slideCount:t.length,debug:!1,type:e.type,breakpoints:{single:{maxSlides:e.show_single.max_slides,moveSlides:e.show_single.move_slides,slideMargin:e.show_single.margin},multiple:e.breakpoints},startText:"text"==e.controls_style?"Start":"",stopText:"text"==e.controls_style?"Stop":"",prevText:"text"==e.controls_style?"Prev":"",nextText:"text"==e.controls_style?"Next":"",buildPager:"text"==e.pager_style?null:"icons",simpleSetPager:1}}(s,r))}));var i=function(e){console.log(e);var t=jQuery('.strong-view.slider-container[data-state="idle"]');t.length&&t.each((function(){var t=jQuery(this),n=t.data("count");void 0!==n&&1===n||t.strongSlider(e)}))};return React.createElement(X,null,React.createElement("div",{className:J(n,a,s),"data-count":r.length,"data-slider-var":"strong_slider_id_".concat(n),"data-state":"idle"}," ",React.createElement("div",{class:"strong-content wpmslider-content"},r.length>0&&React.createElement(X,null,r.map((function(e,t){return[React.createElement(p,{testimonial:e,index:t,viewType:o})]}))))))},te=wp.element,ne=(te.Component,te.Fragment,te.useEffect),ae=wp.data,re=ae.withSelect,se=ae.useSelect,oe=wp.components,ie=(oe.SelectControl,oe.Spinner,oe.Toolbar,oe.Button,wp.blockEditor.BlockControls,wp.compose.compose,re((function(e,t){return{testimonials:(0,e("core").getEntityRecords)("postType","wpm-testimonial",{post_status:"publish",per_page:-1})||[]}})),wp.components.withFilters("wpst.StrongTestimonialViewEdit"),function(e){var t=e.setAttributes,n=e.attributes,a=n.status,r=n.testimonials,o=n.id,i=n.template,l=n.config,c=se((function(e){return(0,e("core").getEntityRecords)("postType","wpm-testimonial",{post_status:"publish",per_page:-1})||[]}));return ne((function(){0!=r||(0==c.length?t({status:"loading"}):0!=c.length&&0==r.length&&t({status:"ready",testimonials:c}))})),ne((function(){0==o&&""==i&&t({id:Math.floor(1e4*Math.random())+1,template:"default"}),0==l&&t({config:{type:"show_single",show_single:{max_slides:1,move_slides:1,margin:1},breakpoints:{desktop:{description:"Desktop",width:1200,max_slides:2,move_slides:1,margin:20},large:{description:"Large",width:1024,max_slides:2,move_slides:1,margin:20},medium:{description:"Medium",width:640,max_slides:1,move_slides:1,margin:10},small:{description:"Small",width:480,max_slides:1,move_slides:1,margin:1}},effect:"fade",speed:1,pause:8,auto_start:!0,continuous_sliding:!0,auto_hover:!0,adapt_height:!0,adapt_height_speed:.5,stretch:0,stop_auto_on_click:!0,controls_type:"simple",controls_style:"buttons",pager_type:"none",pager_style:"buttons",nav_position:"inside"}})})),"loading"===a?[React.createElement(s,{status:a})]:React.createElement(ee,e)});function le(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ce(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?le(Object(n),!0).forEach((function(t){ue(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):le(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ue(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function me(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function pe(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function de(e,t,n){return t&&pe(e.prototype,t),n&&pe(e,n),e}var ge=wp.i18n.__,ye=wp.blocks.registerBlockType,fe=wp.blocks.createBlock,be=function(){function e(){me(this,e),this.registerBlock()}return de(e,[{key:"registerBlock",value:function(){this.blockName="strongtestimonials/view",this.blockAttributes={id:{type:"number",default:0},viewType:{type:"string",default:"display"},status:{type:"string",default:"ready"},template:{type:"string",default:""},layout:{type:"string",default:""},columns:{type:"number",default:2},testimonialsToShow:{type:"number",default:0},testimonials:{type:"array",default:[]},allTestimonialsCategories:{type:"array",default:[]},selectedCategories:{type:"array",default:[]},orderBy:{type:"string",default:"desc"},pagination:{type:"boolean",default:!1},query:{type:"object",default:{per_page:-1,pages:0,offset:0,order:"desc",orderBy:"date"}}},ye(this.blockName,{title:"Display",description:ge("A beatiful display to show all your testimonials","strong-testimonials"),icon:"editor-quote",category:"strong-testimonials-view",supports:{align:!0,customClassName:!1},attributes:this.blockAttributes,transforms:{to:[{attributes:ce({},this.attributes),type:"block",priority:7,blocks:["strongtestimonials/slideshow"],transform:function(e){return fe("strongtestimonials/slideshow",{id:e.id,status:e.status,template:e.template,testimonials:e.testimonials})}}]},edit:$,save:function(){return null}})}}]),e}(),ve=function(){function e(){me(this,e),this.registerBlock()}return de(e,[{key:"registerBlock",value:function(){this.blockName="strongtestimonials/slideshow",this.blockAttributes={id:{type:"number",default:0},viewType:{type:"string",default:"slideshow"},status:{type:"string",default:"ready"},template:{type:"string",default:""},testimonials:{type:"array",default:[]},config:{type:"object",default:!1}},ye(this.blockName,{title:"Slideshow",description:ge("A beautiful slideshow to show all your testimonials","strong-testimonials"),icon:"editor-quote",category:"strong-testimonials-view",supports:{customClassName:!1},attributes:this.blockAttributes,transforms:{to:[{attributes:ce({},this.attributes),type:"block",priority:7,blocks:["strongtestimonials/view"],transform:function(e){return fe("strongtestimonials/view",{id:e.id,status:e.status,template:e.template,testimonials:e.testimonials})}}]},edit:ie,save:function(){return null}})}}]),e}();new be,new ve}]);