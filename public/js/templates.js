!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.templates=e()}}(function(){var define,module,exports;
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,n.jade=e()}}(function(){return function e(n,t,r){function o(a,f){if(!t[a]){if(!n[a]){var s="function"==typeof require&&require;if(!f&&s)return s(a,!0);if(i)return i(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var l=t[a]={exports:{}};n[a][0].call(l.exports,function(e){var t=n[a][1][e];return o(t?t:e)},l,l.exports,e,n,t,r)}return t[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,n,t){"use strict";function r(e){return null!=e&&""!==e}function o(e){return(Array.isArray(e)?e.map(o):e&&"object"==typeof e?Object.keys(e).filter(function(n){return e[n]}):[e]).filter(r).join(" ")}function i(e){return f[e]||e}function a(e){var n=String(e).replace(s,i);return n===""+e?e:n}t.merge=function u(e,n){if(1===arguments.length){for(var t=e[0],o=1;o<e.length;o++)t=u(t,e[o]);return t}var i=e["class"],a=n["class"];(i||a)&&(i=i||[],a=a||[],Array.isArray(i)||(i=[i]),Array.isArray(a)||(a=[a]),e["class"]=i.concat(a).filter(r));for(var f in n)"class"!=f&&(e[f]=n[f]);return e},t.joinClasses=o,t.cls=function(e,n){for(var r=[],i=0;i<e.length;i++)n&&n[i]?r.push(t.escape(o([e[i]]))):r.push(o(e[i]));var a=o(r);return a.length?' class="'+a+'"':""},t.style=function(e){return e&&"object"==typeof e?Object.keys(e).map(function(n){return n+":"+e[n]}).join(";"):e},t.attr=function(e,n,r,o){return"style"===e&&(n=t.style(n)),"boolean"==typeof n||null==n?n?" "+(o?e:e+'="'+e+'"'):"":0==e.indexOf("data")&&"string"!=typeof n?(-1!==JSON.stringify(n).indexOf("&")&&console.warn("Since Jade 2.0.0, ampersands (`&`) in data attributes will be escaped to `&amp;`"),n&&"function"==typeof n.toISOString&&console.warn("Jade will eliminate the double quotes around dates in ISO form after 2.0.0")," "+e+"='"+JSON.stringify(n).replace(/'/g,"&apos;")+"'"):r?(n&&"function"==typeof n.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+e+'="'+t.escape(n)+'"'):(n&&"function"==typeof n.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+e+'="'+n+'"')},t.attrs=function(e,n){var r=[],i=Object.keys(e);if(i.length)for(var a=0;a<i.length;++a){var f=i[a],s=e[f];"class"==f?(s=o(s))&&r.push(" "+f+'="'+s+'"'):r.push(t.attr(f,s,!1,n))}return r.join("")};var f={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"},s=/[&<>"]/g;t.escape=a,t.rethrow=function l(n,t,r,o){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&t||o))throw n.message+=" on line "+r,n;try{o=o||e("fs").readFileSync(t,"utf8")}catch(i){l(n,null,r)}var a=3,f=o.split("\n"),s=Math.max(r-a,0),u=Math.min(f.length,r+a),a=f.slice(s,u).map(function(e,n){var t=n+s+1;return(t==r?"  > ":"    ")+t+"| "+e}).join("\n");throw n.path=t,n.message=(t||"Jade")+":"+r+"\n"+a+"\n\n"+n.message,n},t.DebugItem=function(e,n){this.lineno=e,this.filename=n}},{fs:2}],2:[function(e,n,t){},{}]},{},[1])(1)});return {"gallery_inner": function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

jade_mixins["display-artwork"] = jade_interp = function(mediums, show_dates){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var last_date = -1
// iterate locals.sorted_artwork
;(function(){
  var $$obj = locals.sorted_artwork;
  if ('number' == typeof $$obj.length) {

    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
      var art = $$obj[index];

var display = false
// iterate mediums
;(function(){
  var $$obj = mediums;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var medium = $$obj[$index];

if ( art._attributes['data-medium'] == medium)
{
display = true
break
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var medium = $$obj[$index];

if ( art._attributes['data-medium'] == medium)
{
display = true
break
}
    }

  }
}).call(this);

if ( !display)
{
buf.push("<continue></continue>");
}
if ( show_dates && (last_date == -1 || art.date < last_date))
{
last_date = art.date
buf.push("<div" + (jade.attr("data-date", last_date, true, false)) + " class=\"artwork date\"><img src=\"img/gallery/white-square.gif\"/><div class=\"date-container\">" + (jade.escape(null == (jade_interp = last_date) ? "" : jade_interp)) + "</div></div>");
}
buf.push("<figure" + (jade.attrs(jade.merge([{"data-index": (typeof (jade_interp = index) == "string" ? jade.escape(jade_interp) : jade_interp),"class": "artwork"},art._attributes]), false)) + "><a href=\"#\"><img" + (jade.attr("src", art._categories.join('/')+'/assets/'+art._img.replace('.jpg','-400x400.jpg'), true, false)) + "/><figcaption><div class=\"caption-container\"><div class=\"caption-content\">");
if ( art.title)
{
buf.push("<p class=\"title\">" + (jade.escape(null == (jade_interp = art.title) ? "" : jade_interp)) + "</p>");
}
if ( art.medium)
{
buf.push("<p class=\"medium\">" + (jade.escape(null == (jade_interp = art.medium) ? "" : jade_interp)) + "</p>");
}
buf.push("</div></div></figcaption></a></figure>");
    }

  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;      var art = $$obj[index];

var display = false
// iterate mediums
;(function(){
  var $$obj = mediums;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var medium = $$obj[$index];

if ( art._attributes['data-medium'] == medium)
{
display = true
break
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var medium = $$obj[$index];

if ( art._attributes['data-medium'] == medium)
{
display = true
break
}
    }

  }
}).call(this);

if ( !display)
{
buf.push("<continue></continue>");
}
if ( show_dates && (last_date == -1 || art.date < last_date))
{
last_date = art.date
buf.push("<div" + (jade.attr("data-date", last_date, true, false)) + " class=\"artwork date\"><img src=\"img/gallery/white-square.gif\"/><div class=\"date-container\">" + (jade.escape(null == (jade_interp = last_date) ? "" : jade_interp)) + "</div></div>");
}
buf.push("<figure" + (jade.attrs(jade.merge([{"data-index": (typeof (jade_interp = index) == "string" ? jade.escape(jade_interp) : jade_interp),"class": "artwork"},art._attributes]), false)) + "><a href=\"#\"><img" + (jade.attr("src", art._categories.join('/')+'/assets/'+art._img.replace('.jpg','-400x400.jpg'), true, false)) + "/><figcaption><div class=\"caption-container\"><div class=\"caption-content\">");
if ( art.title)
{
buf.push("<p class=\"title\">" + (jade.escape(null == (jade_interp = art.title) ? "" : jade_interp)) + "</p>");
}
if ( art.medium)
{
buf.push("<p class=\"medium\">" + (jade.escape(null == (jade_interp = art.medium) ? "" : jade_interp)) + "</p>");
}
buf.push("</div></div></figcaption></a></figure>");
    }

  }
}).call(this);

if ( locals.sorted_artwork.length == 0)
{
buf.push("<p><em>No results found.</em></p>");
}
};
buf.push("<section>");
jade_mixins["display-artwork"](['oil', 'digital'], true);
buf.push("</section>");;return buf.join("");
},"gallery_modal": function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (artwork, console, index) {
var art = artwork[index]
buf.push("<div class=\"content\"><img" + (jade.attr("src", art._categories.join('/')+'/assets/'+art._img, true, false)) + "/></div><div class=\"caption\">");
for (var key in art) {
{
console.log(key);
if ( key != 'content' && !(key.indexOf('_') === 0))
{
buf.push("<p><span>" + (jade.escape(null == (jade_interp = key + ':') ? "" : jade_interp)) + "</span>" + (jade.escape(null == (jade_interp = art[key]) ? "" : jade_interp)) + "</p>");
}
}
}
if ( !(art.content.indexOf('---') === 0))
{
buf.push(null == (jade_interp = art.content) ? "" : jade_interp);
}
buf.push("</div>");}.call(this,"artwork" in locals_for_with?locals_for_with.artwork:typeof artwork!=="undefined"?artwork:undefined,"console" in locals_for_with?locals_for_with.console:typeof console!=="undefined"?console:undefined,"index" in locals_for_with?locals_for_with.index:typeof index!=="undefined"?index:undefined));;return buf.join("");
},"words_inner": function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (undefined) {
function slugify(name) {
{
return name.toLowerCase().replace(/[^\w]+/g, '-');
}
}
if ( !locals.display_type)
{
locals.display_type = 'poetry'
}
jade_mixins["display-nav"] = jade_interp = function(type){
var block = (this && this.block), attributes = (this && this.attributes) || {};
// iterate locals.words[type]
;(function(){
  var $$obj = locals.words[type];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var article = $$obj[$index];

buf.push("<li><a" + (jade.attr("href", '#'+slugify(article.title), true, false)) + "><span>" + (jade.escape(null == (jade_interp = article.title) ? "" : jade_interp)) + "</span></a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var article = $$obj[$index];

buf.push("<li><a" + (jade.attr("href", '#'+slugify(article.title), true, false)) + "><span>" + (jade.escape(null == (jade_interp = article.title) ? "" : jade_interp)) + "</span></a></li>");
    }

  }
}).call(this);

};
buf.push("<a name=\"top\"></a><h2>" + (jade.escape(null == (jade_interp = locals.display_type) ? "" : jade_interp)) + "</h2><nav class=\"wordsnav\"><ul>");
jade_mixins["display-nav"](locals.display_type);
buf.push("</ul></nav><div" + (jade.attr("data-loaded", locals.display_type, true, false)) + " class=\"articles\">");
function slugify(name) {
{
return name.toLowerCase().replace(/[^\w]+/g, '-');
}
}
if ( !locals.display_article)
{
locals.display_article = slugify(locals.words[locals.display_type][0].title)
}
// iterate locals.words[locals.display_type]
;(function(){
  var $$obj = locals.words[locals.display_type];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var article = $$obj[$index];

if ( locals.display_article == slugify(article.title))
{
buf.push("<article>" + (null == (jade_interp = article.content) ? "" : jade_interp) + "</article><a href=\"#top\" class=\"top\"><i class=\"fa fa-arrow-up\"></i><span>back to top</span></a>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var article = $$obj[$index];

if ( locals.display_article == slugify(article.title))
{
buf.push("<article>" + (null == (jade_interp = article.content) ? "" : jade_interp) + "</article><a href=\"#top\" class=\"top\"><i class=\"fa fa-arrow-up\"></i><span>back to top</span></a>");
}
    }

  }
}).call(this);

buf.push("</div>");}.call(this,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
},"words_inner_article": function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (undefined) {
function slugify(name) {
{
return name.toLowerCase().replace(/[^\w]+/g, '-');
}
}
if ( !locals.display_article)
{
locals.display_article = slugify(locals.words[locals.display_type][0].title)
}
// iterate locals.words[locals.display_type]
;(function(){
  var $$obj = locals.words[locals.display_type];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var article = $$obj[$index];

if ( locals.display_article == slugify(article.title))
{
buf.push("<article>" + (null == (jade_interp = article.content) ? "" : jade_interp) + "</article><a href=\"#top\" class=\"top\"><i class=\"fa fa-arrow-up\"></i><span>back to top</span></a>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var article = $$obj[$index];

if ( locals.display_article == slugify(article.title))
{
buf.push("<article>" + (null == (jade_interp = article.content) ? "" : jade_interp) + "</article><a href=\"#top\" class=\"top\"><i class=\"fa fa-arrow-up\"></i><span>back to top</span></a>");
}
    }

  }
}).call(this);
}.call(this,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
}};
});