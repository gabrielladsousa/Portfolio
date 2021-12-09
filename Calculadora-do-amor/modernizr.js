/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-canvas-flash-setclasses !*/
! function(e, n, t) {
    function o(e, n) { return typeof e === n }

    function a() { var e, n, t, a, i, s, r; for (var c in f)
            if (f.hasOwnProperty(c)) { if (e = [], n = f[c], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))
                    for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase()); for (a = o(n.fn, "function") ? n.fn() : n.fn, i = 0; i < e.length; i++) s = e[i], r = s.split("."), 1 === r.length ? Modernizr[r[0]] = a : (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])), Modernizr[r[0]][r[1]] = a), l.push((a ? "" : "no-") + r.join("-")) } }

    function i(e) { var n = d.className,
            t = Modernizr._config.classPrefix || ""; if (p && (n = n.baseVal), Modernizr._config.enableJSClass) { var o = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
            n = n.replace(o, "$1" + t + "js$2") }
        Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), p ? d.className.baseVal = n : d.className = n) }

    function s() { return "function" != typeof n.createElement ? n.createElement(arguments[0]) : p ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments) }

    function r() { var e = n.body; return e || (e = s(p ? "svg" : "body"), e.fake = !0), e }

    function c(e, n) { if ("object" == typeof e)
            for (var t in e) h(e, t) && c(t, e[t]);
        else { e = e.toLowerCase(); var o = e.split("."),
                a = Modernizr[o[0]]; if (2 == o.length && (a = a[o[1]]), "undefined" != typeof a) return Modernizr;
            n = "function" == typeof n ? n() : n, 1 == o.length ? Modernizr[o[0]] = n : (!Modernizr[o[0]] || Modernizr[o[0]] instanceof Boolean || (Modernizr[o[0]] = new Boolean(Modernizr[o[0]])), Modernizr[o[0]][o[1]] = n), i([(n && 0 != n ? "" : "no-") + o.join("-")]), Modernizr._trigger(e, n) } return Modernizr } var l = [],
        f = [],
        u = { _version: "3.6.0", _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 }, _q: [], on: function(e, n) { var t = this;
                setTimeout(function() { n(t[e]) }, 0) }, addTest: function(e, n, t) { f.push({ name: e, fn: n, options: t }) }, addAsyncTest: function(e) { f.push({ name: null, fn: e }) } },
        Modernizr = function() {};
    Modernizr.prototype = u, Modernizr = new Modernizr; var d = n.documentElement,
        p = "svg" === d.nodeName.toLowerCase();
    Modernizr.addTest("canvas", function() { var e = s("canvas"); return !(!e.getContext || !e.getContext("2d")) }); var h;! function() { var e = {}.hasOwnProperty;
        h = o(e, "undefined") || o(e.call, "undefined") ? function(e, n) { return n in e && o(e.constructor.prototype[n], "undefined") } : function(n, t) { return e.call(n, t) } }(), u._l = {}, u.on = function(e, n) { this._l[e] || (this._l[e] = []), this._l[e].push(n), Modernizr.hasOwnProperty(e) && setTimeout(function() { Modernizr._trigger(e, Modernizr[e]) }, 0) }, u._trigger = function(e, n) { if (this._l[e]) { var t = this._l[e];
            setTimeout(function() { var e, o; for (e = 0; e < t.length; e++)(o = t[e])(n) }, 0), delete this._l[e] } }, Modernizr._q.push(function() { u.addTest = c }), Modernizr.addAsyncTest(function() { var t, o, a = function(e) { d.contains(e) || d.appendChild(e) },
            i = function(e) { e.fake && e.parentNode && e.parentNode.removeChild(e) },
            l = function(e, n) { var t = !!e; if (t && (t = new Boolean(t), t.blocked = "blocked" === e), c("flash", function() { return t }), n && g.contains(n)) { for (; n.parentNode !== g;) n = n.parentNode;
                    g.removeChild(n) } }; try { o = "ActiveXObject" in e && "Pan" in new e.ActiveXObject("ShockwaveFlash.ShockwaveFlash") } catch (f) {} if (t = !("plugins" in navigator && "Shockwave Flash" in navigator.plugins || o), t || p) l(!1);
        else { var u, h, v = s("embed"),
                g = r(); if (v.type = "application/x-shockwave-flash", g.appendChild(v), !("Pan" in v || o)) return a(g), l("blocked", v), void i(g);
            u = function() { return a(g), d.contains(g) ? (d.contains(v) ? (h = v.style.cssText, "" !== h ? l("blocked", v) : l(!0, v)) : l("blocked"), void i(g)) : (g = n.body || g, v = s("embed"), v.type = "application/x-shockwave-flash", g.appendChild(v), setTimeout(u, 1e3)) }, setTimeout(u, 10) } }), a(), i(l), delete u.addTest, delete u.addAsyncTest; for (var v = 0; v < Modernizr._q.length; v++) Modernizr._q[v]();
    e.Modernizr = Modernizr }(window, document);