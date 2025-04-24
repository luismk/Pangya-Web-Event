var _____WB$wombat$assign$function_____ = function(name) {
    return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name];
};
if (!self.__WB_pmw) {
    self.__WB_pmw = function(obj) {
        this.__WB_source = obj;
        return this;
    }
}
{
    let window = _____WB$wombat$assign$function_____("window");
    let self = _____WB$wombat$assign$function_____("self");
    let document = _____WB$wombat$assign$function_____("document");
    let location = _____WB$wombat$assign$function_____("location");
    let top = _____WB$wombat$assign$function_____("top");
    let parent = _____WB$wombat$assign$function_____("parent");
    let frames = _____WB$wombat$assign$function_____("frames");
    let opener = _____WB$wombat$assign$function_____("opener");

    /////////////////////////////////////////////////////
    //  gamerage.base.js include belows.
    //
    //  1. jquery (all)
    //  2. jquery plugin - cycle min (all)
    //  3. jquery plugin - cookie min (all)
    //  4. jquery plugin - scrollTo min (all)
    //  5. jquery plugin - easing (all)
    //  6. jquery plugin - countdown (all)
    //  7. jquery plugin - Thickbox (gc,py,tr )
    //  8. jquery plugin - Easy News-items.js( gc,py,tr)
    //  9. jquery plugin - popupWindow.js (pb,gc,py,tr)
    //  10. jquery plugin - popupWindow_fb.js (gc,py,tr)
    //  11. popwindow.js - Elliot Oh   (pb)
    /////////////////////////////////////////////////////

    // jQuery v1.7.1
    (function(a, b) {
        function cy(a) {
            return f.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
        }
        function cv(a) {
            if (!ck[a]) {
                var b = c.body
                  , d = f("<" + a + ">").appendTo(b)
                  , e = d.css("display");
                d.remove();
                if (e === "none" || e === "") {
                    cl || (cl = c.createElement("iframe"),
                    cl.frameBorder = cl.width = cl.height = 0),
                    b.appendChild(cl);
                    if (!cm || !cl.createElement)
                        cm = (cl.contentWindow || cl.contentDocument).document,
                        cm.write((c.compatMode === "CSS1Compat" ? "<!doctype html>" : "") + "<html><body>"),
                        cm.close();
                    d = cm.createElement(a),
                    cm.body.appendChild(d),
                    e = f.css(d, "display"),
                    b.removeChild(cl)
                }
                ck[a] = e
            }
            return ck[a]
        }
        function cu(a, b) {
            var c = {};
            f.each(cq.concat.apply([], cq.slice(0, b)), function() {
                c[this] = a
            });
            return c
        }
        function ct() {
            cr = b
        }
        function cs() {
            setTimeout(ct, 0);
            return cr = f.now()
        }
        function cj() {
            try {
                return new a.ActiveXObject("Microsoft.XMLHTTP")
            } catch (b) {}
        }
        function ci() {
            try {
                return new a.XMLHttpRequest
            } catch (b) {}
        }
        function cc(a, c) {
            a.dataFilter && (c = a.dataFilter(c, a.dataType));
            var d = a.dataTypes, e = {}, g, h, i = d.length, j, k = d[0], l, m, n, o, p;
            for (g = 1; g < i; g++) {
                if (g === 1)
                    for (h in a.converters)
                        typeof h == "string" && (e[h.toLowerCase()] = a.converters[h]);
                l = k,
                k = d[g];
                if (k === "*")
                    k = l;
                else if (l !== "*" && l !== k) {
                    m = l + " " + k,
                    n = e[m] || e["* " + k];
                    if (!n) {
                        p = b;
                        for (o in e) {
                            j = o.split(" ");
                            if (j[0] === l || j[0] === "*") {
                                p = e[j[1] + " " + k];
                                if (p) {
                                    o = e[o],
                                    o === !0 ? n = p : p === !0 && (n = o);
                                    break
                                }
                            }
                        }
                    }
                    !n && !p && f.error("No conversion from " + m.replace(" ", " to ")),
                    n !== !0 && (c = n ? n(c) : p(o(c)))
                }
            }
            return c
        }
        function cb(a, c, d) {
            var e = a.contents, f = a.dataTypes, g = a.responseFields, h, i, j, k;
            for (i in g)
                i in d && (c[g[i]] = d[i]);
            while (f[0] === "*")
                f.shift(),
                h === b && (h = a.mimeType || c.getResponseHeader("content-type"));
            if (h)
                for (i in e)
                    if (e[i] && e[i].test(h)) {
                        f.unshift(i);
                        break
                    }
            if (f[0]in d)
                j = f[0];
            else {
                for (i in d) {
                    if (!f[0] || a.converters[i + " " + f[0]]) {
                        j = i;
                        break
                    }
                    k || (k = i)
                }
                j = j || k
            }
            if (j) {
                j !== f[0] && f.unshift(j);
                return d[j]
            }
        }
        function ca(a, b, c, d) {
            if (f.isArray(b))
                f.each(b, function(b, e) {
                    c || bE.test(a) ? d(a, e) : ca(a + "[" + (typeof e == "object" || f.isArray(e) ? b : "") + "]", e, c, d)
                });
            else if (!c && b != null && typeof b == "object")
                for (var e in b)
                    ca(a + "[" + e + "]", b[e], c, d);
            else
                d(a, b)
        }
        function b_(a, c) {
            var d, e, g = f.ajaxSettings.flatOptions || {};
            for (d in c)
                c[d] !== b && ((g[d] ? a : e || (e = {}))[d] = c[d]);
            e && f.extend(!0, a, e)
        }
        function b$(a, c, d, e, f, g) {
            f = f || c.dataTypes[0],
            g = g || {},
            g[f] = !0;
            var h = a[f], i = 0, j = h ? h.length : 0, k = a === bT, l;
            for (; i < j && (k || !l); i++)
                l = h[i](c, d, e),
                typeof l == "string" && (!k || g[l] ? l = b : (c.dataTypes.unshift(l),
                l = b$(a, c, d, e, l, g)));
            (k || !l) && !g["*"] && (l = b$(a, c, d, e, "*", g));
            return l
        }
        function bZ(a) {
            return function(b, c) {
                typeof b != "string" && (c = b,
                b = "*");
                if (f.isFunction(c)) {
                    var d = b.toLowerCase().split(bP), e = 0, g = d.length, h, i, j;
                    for (; e < g; e++)
                        h = d[e],
                        j = /^\+/.test(h),
                        j && (h = h.substr(1) || "*"),
                        i = a[h] = a[h] || [],
                        i[j ? "unshift" : "push"](c)
                }
            }
        }
        function bC(a, b, c) {
            var d = b === "width" ? a.offsetWidth : a.offsetHeight
              , e = b === "width" ? bx : by
              , g = 0
              , h = e.length;
            if (d > 0) {
                if (c !== "border")
                    for (; g < h; g++)
                        c || (d -= parseFloat(f.css(a, "padding" + e[g])) || 0),
                        c === "margin" ? d += parseFloat(f.css(a, c + e[g])) || 0 : d -= parseFloat(f.css(a, "border" + e[g] + "Width")) || 0;
                return d + "px"
            }
            d = bz(a, b, b);
            if (d < 0 || d == null)
                d = a.style[b] || 0;
            d = parseFloat(d) || 0;
            if (c)
                for (; g < h; g++)
                    d += parseFloat(f.css(a, "padding" + e[g])) || 0,
                    c !== "padding" && (d += parseFloat(f.css(a, "border" + e[g] + "Width")) || 0),
                    c === "margin" && (d += parseFloat(f.css(a, c + e[g])) || 0);
            return d + "px"
        }
        function bp(a, b) {
            b.src ? f.ajax({
                url: b.src,
                async: !1,
                dataType: "script"
            }) : f.globalEval((b.text || b.textContent || b.innerHTML || "").replace(bf, "/*$0*/")),
            b.parentNode && b.parentNode.removeChild(b)
        }
        function bo(a) {
            var b = c.createElement("div");
            bh.appendChild(b),
            b.innerHTML = a.outerHTML;
            return b.firstChild
        }
        function bn(a) {
            var b = (a.nodeName || "").toLowerCase();
            b === "input" ? bm(a) : b !== "script" && typeof a.getElementsByTagName != "undefined" && f.grep(a.getElementsByTagName("input"), bm)
        }
        function bm(a) {
            if (a.type === "checkbox" || a.type === "radio")
                a.defaultChecked = a.checked
        }
        function bl(a) {
            return typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : typeof a.querySelectorAll != "undefined" ? a.querySelectorAll("*") : []
        }
        function bk(a, b) {
            var c;
            if (b.nodeType === 1) {
                b.clearAttributes && b.clearAttributes(),
                b.mergeAttributes && b.mergeAttributes(a),
                c = b.nodeName.toLowerCase();
                if (c === "object")
                    b.outerHTML = a.outerHTML;
                else if (c !== "input" || a.type !== "checkbox" && a.type !== "radio") {
                    if (c === "option")
                        b.selected = a.defaultSelected;
                    else if (c === "input" || c === "textarea")
                        b.defaultValue = a.defaultValue
                } else
                    a.checked && (b.defaultChecked = b.checked = a.checked),
                    b.value !== a.value && (b.value = a.value);
                b.removeAttribute(f.expando)
            }
        }
        function bj(a, b) {
            if (b.nodeType === 1 && !!f.hasData(a)) {
                var c, d, e, g = f._data(a), h = f._data(b, g), i = g.events;
                if (i) {
                    delete h.handle,
                    h.events = {};
                    for (c in i)
                        for (d = 0,
                        e = i[c].length; d < e; d++)
                            f.event.add(b, c + (i[c][d].namespace ? "." : "") + i[c][d].namespace, i[c][d], i[c][d].data)
                }
                h.data && (h.data = f.extend({}, h.data))
            }
        }
        function bi(a, b) {
            return f.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
        }
        function U(a) {
            var b = V.split("|")
              , c = a.createDocumentFragment();
            if (c.createElement)
                while (b.length)
                    c.createElement(b.pop());
            return c
        }
        function T(a, b, c) {
            b = b || 0;
            if (f.isFunction(b))
                return f.grep(a, function(a, d) {
                    var e = !!b.call(a, d, a);
                    return e === c
                });
            if (b.nodeType)
                return f.grep(a, function(a, d) {
                    return a === b === c
                });
            if (typeof b == "string") {
                var d = f.grep(a, function(a) {
                    return a.nodeType === 1
                });
                if (O.test(b))
                    return f.filter(b, d, !c);
                b = f.filter(b, d)
            }
            return f.grep(a, function(a, d) {
                return f.inArray(a, b) >= 0 === c
            })
        }
        function S(a) {
            return !a || !a.parentNode || a.parentNode.nodeType === 11
        }
        function K() {
            return !0
        }
        function J() {
            return !1
        }
        function n(a, b, c) {
            var d = b + "defer"
              , e = b + "queue"
              , g = b + "mark"
              , h = f._data(a, d);
            h && (c === "queue" || !f._data(a, e)) && (c === "mark" || !f._data(a, g)) && setTimeout(function() {
                !f._data(a, e) && !f._data(a, g) && (f.removeData(a, d, !0),
                h.fire())
            }, 0)
        }
        function m(a) {
            for (var b in a) {
                if (b === "data" && f.isEmptyObject(a[b]))
                    continue;
                if (b !== "toJSON")
                    return !1
            }
            return !0
        }
        function l(a, c, d) {
            if (d === b && a.nodeType === 1) {
                var e = "data-" + c.replace(k, "-$1").toLowerCase();
                d = a.getAttribute(e);
                if (typeof d == "string") {
                    try {
                        d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null : f.isNumeric(d) ? parseFloat(d) : j.test(d) ? f.parseJSON(d) : d
                    } catch (g) {}
                    f.data(a, c, d)
                } else
                    d = b
            }
            return d
        }
        function h(a) {
            var b = g[a] = {}, c, d;
            a = a.split(/\s+/);
            for (c = 0,
            d = a.length; c < d; c++)
                b[a[c]] = !0;
            return b
        }
        var c = a.document
          , d = a.navigator
          , e = a.location
          , f = function() {
            function J() {
                if (!e.isReady) {
                    try {
                        c.documentElement.doScroll("left")
                    } catch (a) {
                        setTimeout(J, 1);
                        return
                    }
                    e.ready()
                }
            }
            var e = function(a, b) {
                return new e.fn.init(a,b,h)
            }, f = a.jQuery, g = a.$, h, i = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, j = /\S/, k = /^\s+/, l = /\s+$/, m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, n = /^[\],:{}\s]*$/, o = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, p = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, q = /(?:^|:|,)(?:\s*\[)+/g, r = /(webkit)[ \/]([\w.]+)/, s = /(opera)(?:.*version)?[ \/]([\w.]+)/, t = /(msie) ([\w.]+)/, u = /(mozilla)(?:.*? rv:([\w.]+))?/, v = /-([a-z]|[0-9])/ig, w = /^-ms-/, x = function(a, b) {
                return (b + "").toUpperCase()
            }, y = d.userAgent, z, A, B, C = Object.prototype.toString, D = Object.prototype.hasOwnProperty, E = Array.prototype.push, F = Array.prototype.slice, G = String.prototype.trim, H = Array.prototype.indexOf, I = {};
            e.fn = e.prototype = {
                constructor: e,
                init: function(a, d, f) {
                    var g, h, j, k;
                    if (!a)
                        return this;
                    if (a.nodeType) {
                        this.context = this[0] = a,
                        this.length = 1;
                        return this
                    }
                    if (a === "body" && !d && c.body) {
                        this.context = c,
                        this[0] = c.body,
                        this.selector = a,
                        this.length = 1;
                        return this
                    }
                    if (typeof a == "string") {
                        a.charAt(0) !== "<" || a.charAt(a.length - 1) !== ">" || a.length < 3 ? g = i.exec(a) : g = [null, a, null];
                        if (g && (g[1] || !d)) {
                            if (g[1]) {
                                d = d instanceof e ? d[0] : d,
                                k = d ? d.ownerDocument || d : c,
                                j = m.exec(a),
                                j ? e.isPlainObject(d) ? (a = [c.createElement(j[1])],
                                e.fn.attr.call(a, d, !0)) : a = [k.createElement(j[1])] : (j = e.buildFragment([g[1]], [k]),
                                a = (j.cacheable ? e.clone(j.fragment) : j.fragment).childNodes);
                                return e.merge(this, a)
                            }
                            h = c.getElementById(g[2]);
                            if (h && h.parentNode) {
                                if (h.id !== g[2])
                                    return f.find(a);
                                this.length = 1,
                                this[0] = h
                            }
                            this.context = c,
                            this.selector = a;
                            return this
                        }
                        return !d || d.jquery ? (d || f).find(a) : this.constructor(d).find(a)
                    }
                    if (e.isFunction(a))
                        return f.ready(a);
                    a.selector !== b && (this.selector = a.selector,
                    this.context = a.context);
                    return e.makeArray(a, this)
                },
                selector: "",
                jquery: "1.7.1",
                length: 0,
                size: function() {
                    return this.length
                },
                toArray: function() {
                    return F.call(this, 0)
                },
                get: function(a) {
                    return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
                },
                pushStack: function(a, b, c) {
                    var d = this.constructor();
                    e.isArray(a) ? E.apply(d, a) : e.merge(d, a),
                    d.prevObject = this,
                    d.context = this.context,
                    b === "find" ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")");
                    return d
                },
                each: function(a, b) {
                    return e.each(this, a, b)
                },
                ready: function(a) {
                    e.bindReady(),
                    A.add(a);
                    return this
                },
                eq: function(a) {
                    a = +a;
                    return a === -1 ? this.slice(a) : this.slice(a, a + 1)
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                slice: function() {
                    return this.pushStack(F.apply(this, arguments), "slice", F.call(arguments).join(","))
                },
                map: function(a) {
                    return this.pushStack(e.map(this, function(b, c) {
                        return a.call(b, c, b)
                    }))
                },
                end: function() {
                    return this.prevObject || this.constructor(null)
                },
                push: E,
                sort: [].sort,
                splice: [].splice
            },
            e.fn.init.prototype = e.fn,
            e.extend = e.fn.extend = function() {
                var a, c, d, f, g, h, i = arguments[0] || {}, j = 1, k = arguments.length, l = !1;
                typeof i == "boolean" && (l = i,
                i = arguments[1] || {},
                j = 2),
                typeof i != "object" && !e.isFunction(i) && (i = {}),
                k === j && (i = this,
                --j);
                for (; j < k; j++)
                    if ((a = arguments[j]) != null)
                        for (c in a) {
                            d = i[c],
                            f = a[c];
                            if (i === f)
                                continue;
                            l && f && (e.isPlainObject(f) || (g = e.isArray(f))) ? (g ? (g = !1,
                            h = d && e.isArray(d) ? d : []) : h = d && e.isPlainObject(d) ? d : {},
                            i[c] = e.extend(l, h, f)) : f !== b && (i[c] = f)
                        }
                return i
            }
            ,
            e.extend({
                noConflict: function(b) {
                    a.$ === e && (a.$ = g),
                    b && a.jQuery === e && (a.jQuery = f);
                    return e
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function(a) {
                    a ? e.readyWait++ : e.ready(!0)
                },
                ready: function(a) {
                    if (a === !0 && !--e.readyWait || a !== !0 && !e.isReady) {
                        if (!c.body)
                            return setTimeout(e.ready, 1);
                        e.isReady = !0;
                        if (a !== !0 && --e.readyWait > 0)
                            return;
                        A.fireWith(c, [e]),
                        e.fn.trigger && e(c).trigger("ready").off("ready")
                    }
                },
                bindReady: function() {
                    if (!A) {
                        A = e.Callbacks("once memory");
                        if (c.readyState === "complete")
                            return setTimeout(e.ready, 1);
                        if (c.addEventListener)
                            c.addEventListener("DOMContentLoaded", B, !1),
                            a.addEventListener("load", e.ready, !1);
                        else if (c.attachEvent) {
                            c.attachEvent("onreadystatechange", B),
                            a.attachEvent("onload", e.ready);
                            var b = !1;
                            try {
                                b = a.frameElement == null
                            } catch (d) {}
                            c.documentElement.doScroll && b && J()
                        }
                    }
                },
                isFunction: function(a) {
                    return e.type(a) === "function"
                },
                isArray: Array.isArray || function(a) {
                    return e.type(a) === "array"
                }
                ,
                isWindow: function(a) {
                    return a && typeof a == "object" && "setInterval"in a
                },
                isNumeric: function(a) {
                    return !isNaN(parseFloat(a)) && isFinite(a)
                },
                type: function(a) {
                    return a == null ? String(a) : I[C.call(a)] || "object"
                },
                isPlainObject: function(a) {
                    if (!a || e.type(a) !== "object" || a.nodeType || e.isWindow(a))
                        return !1;
                    try {
                        if (a.constructor && !D.call(a, "constructor") && !D.call(a.constructor.prototype, "isPrototypeOf"))
                            return !1
                    } catch (c) {
                        return !1
                    }
                    var d;
                    for (d in a)
                        ;
                    return d === b || D.call(a, d)
                },
                isEmptyObject: function(a) {
                    for (var b in a)
                        return !1;
                    return !0
                },
                error: function(a) {
                    throw new Error(a)
                },
                parseJSON: function(b) {
                    if (typeof b != "string" || !b)
                        return null;
                    b = e.trim(b);
                    if (a.JSON && a.JSON.parse)
                        return a.JSON.parse(b);
                    if (n.test(b.replace(o, "@").replace(p, "]").replace(q, "")))
                        return (new Function("return " + b))();
                    e.error("Invalid JSON: " + b)
                },
                parseXML: function(c) {
                    var d, f;
                    try {
                        a.DOMParser ? (f = new DOMParser,
                        d = f.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"),
                        d.async = "false",
                        d.loadXML(c))
                    } catch (g) {
                        d = b
                    }
                    (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && e.error("Invalid XML: " + c);
                    return d
                },
                noop: function() {},
                globalEval: function(b) {
                    b && j.test(b) && (a.execScript || function(b) {
                        a.eval.call(a, b)
                    }
                    )(b)
                },
                camelCase: function(a) {
                    return a.replace(w, "ms-").replace(v, x)
                },
                nodeName: function(a, b) {
                    return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
                },
                each: function(a, c, d) {
                    var f, g = 0, h = a.length, i = h === b || e.isFunction(a);
                    if (d) {
                        if (i) {
                            for (f in a)
                                if (c.apply(a[f], d) === !1)
                                    break
                        } else
                            for (; g < h; )
                                if (c.apply(a[g++], d) === !1)
                                    break
                    } else if (i) {
                        for (f in a)
                            if (c.call(a[f], f, a[f]) === !1)
                                break
                    } else
                        for (; g < h; )
                            if (c.call(a[g], g, a[g++]) === !1)
                                break;
                    return a
                },
                trim: G ? function(a) {
                    return a == null ? "" : G.call(a)
                }
                : function(a) {
                    return a == null ? "" : (a + "").replace(k, "").replace(l, "")
                }
                ,
                makeArray: function(a, b) {
                    var c = b || [];
                    if (a != null) {
                        var d = e.type(a);
                        a.length == null || d === "string" || d === "function" || d === "regexp" || e.isWindow(a) ? E.call(c, a) : e.merge(c, a)
                    }
                    return c
                },
                inArray: function(a, b, c) {
                    var d;
                    if (b) {
                        if (H)
                            return H.call(b, a, c);
                        d = b.length,
                        c = c ? c < 0 ? Math.max(0, d + c) : c : 0;
                        for (; c < d; c++)
                            if (c in b && b[c] === a)
                                return c
                    }
                    return -1
                },
                merge: function(a, c) {
                    var d = a.length
                      , e = 0;
                    if (typeof c.length == "number")
                        for (var f = c.length; e < f; e++)
                            a[d++] = c[e];
                    else
                        while (c[e] !== b)
                            a[d++] = c[e++];
                    a.length = d;
                    return a
                },
                grep: function(a, b, c) {
                    var d = [], e;
                    c = !!c;
                    for (var f = 0, g = a.length; f < g; f++)
                        e = !!b(a[f], f),
                        c !== e && d.push(a[f]);
                    return d
                },
                map: function(a, c, d) {
                    var f, g, h = [], i = 0, j = a.length, k = a instanceof e || j !== b && typeof j == "number" && (j > 0 && a[0] && a[j - 1] || j === 0 || e.isArray(a));
                    if (k)
                        for (; i < j; i++)
                            f = c(a[i], i, d),
                            f != null && (h[h.length] = f);
                    else
                        for (g in a)
                            f = c(a[g], g, d),
                            f != null && (h[h.length] = f);
                    return h.concat.apply([], h)
                },
                guid: 1,
                proxy: function(a, c) {
                    if (typeof c == "string") {
                        var d = a[c];
                        c = a,
                        a = d
                    }
                    if (!e.isFunction(a))
                        return b;
                    var f = F.call(arguments, 2)
                      , g = function() {
                        return a.apply(c, f.concat(F.call(arguments)))
                    };
                    g.guid = a.guid = a.guid || g.guid || e.guid++;
                    return g
                },
                access: function(a, c, d, f, g, h) {
                    var i = a.length;
                    if (typeof c == "object") {
                        for (var j in c)
                            e.access(a, j, c[j], f, g, d);
                        return a
                    }
                    if (d !== b) {
                        f = !h && f && e.isFunction(d);
                        for (var k = 0; k < i; k++)
                            g(a[k], c, f ? d.call(a[k], k, g(a[k], c)) : d, h);
                        return a
                    }
                    return i ? g(a[0], c) : b
                },
                now: function() {
                    return (new Date).getTime()
                },
                uaMatch: function(a) {
                    a = a.toLowerCase();
                    var b = r.exec(a) || s.exec(a) || t.exec(a) || a.indexOf("compatible") < 0 && u.exec(a) || [];
                    return {
                        browser: b[1] || "",
                        version: b[2] || "0"
                    }
                },
                sub: function() {
                    function a(b, c) {
                        return new a.fn.init(b,c)
                    }
                    e.extend(!0, a, this),
                    a.superclass = this,
                    a.fn = a.prototype = this(),
                    a.fn.constructor = a,
                    a.sub = this.sub,
                    a.fn.init = function(d, f) {
                        f && f instanceof e && !(f instanceof a) && (f = a(f));
                        return e.fn.init.call(this, d, f, b)
                    }
                    ,
                    a.fn.init.prototype = a.fn;
                    var b = a(c);
                    return a
                },
                browser: {}
            }),
            e.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(a, b) {
                I["[object " + b + "]"] = b.toLowerCase()
            }),
            z = e.uaMatch(y),
            z.browser && (e.browser[z.browser] = !0,
            e.browser.version = z.version),
            e.browser.webkit && (e.browser.safari = !0),
            j.test(" ") && (k = /^[\s\xA0]+/,
            l = /[\s\xA0]+$/),
            h = e(c),
            c.addEventListener ? B = function() {
                c.removeEventListener("DOMContentLoaded", B, !1),
                e.ready()
            }
            : c.attachEvent && (B = function() {
                c.readyState === "complete" && (c.detachEvent("onreadystatechange", B),
                e.ready())
            }
            );
            return e
        }()
          , g = {};
        f.Callbacks = function(a) {
            a = a ? g[a] || h(a) : {};
            var c = [], d = [], e, i, j, k, l, m = function(b) {
                var d, e, g, h, i;
                for (d = 0,
                e = b.length; d < e; d++)
                    g = b[d],
                    h = f.type(g),
                    h === "array" ? m(g) : h === "function" && (!a.unique || !o.has(g)) && c.push(g)
            }, n = function(b, f) {
                f = f || [],
                e = !a.memory || [b, f],
                i = !0,
                l = j || 0,
                j = 0,
                k = c.length;
                for (; c && l < k; l++)
                    if (c[l].apply(b, f) === !1 && a.stopOnFalse) {
                        e = !0;
                        break
                    }
                i = !1,
                c && (a.once ? e === !0 ? o.disable() : c = [] : d && d.length && (e = d.shift(),
                o.fireWith(e[0], e[1])))
            }, o = {
                add: function() {
                    if (c) {
                        var a = c.length;
                        m(arguments),
                        i ? k = c.length : e && e !== !0 && (j = a,
                        n(e[0], e[1]))
                    }
                    return this
                },
                remove: function() {
                    if (c) {
                        var b = arguments
                          , d = 0
                          , e = b.length;
                        for (; d < e; d++)
                            for (var f = 0; f < c.length; f++)
                                if (b[d] === c[f]) {
                                    i && f <= k && (k--,
                                    f <= l && l--),
                                    c.splice(f--, 1);
                                    if (a.unique)
                                        break
                                }
                    }
                    return this
                },
                has: function(a) {
                    if (c) {
                        var b = 0
                          , d = c.length;
                        for (; b < d; b++)
                            if (a === c[b])
                                return !0
                    }
                    return !1
                },
                empty: function() {
                    c = [];
                    return this
                },
                disable: function() {
                    c = d = e = b;
                    return this
                },
                disabled: function() {
                    return !c
                },
                lock: function() {
                    d = b,
                    (!e || e === !0) && o.disable();
                    return this
                },
                locked: function() {
                    return !d
                },
                fireWith: function(b, c) {
                    d && (i ? a.once || d.push([b, c]) : (!a.once || !e) && n(b, c));
                    return this
                },
                fire: function() {
                    o.fireWith(this, arguments);
                    return this
                },
                fired: function() {
                    return !!e
                }
            };
            return o
        }
        ;
        var i = [].slice;
        f.extend({
            Deferred: function(a) {
                var b = f.Callbacks("once memory"), c = f.Callbacks("once memory"), d = f.Callbacks("memory"), e = "pending", g = {
                    resolve: b,
                    reject: c,
                    notify: d
                }, h = {
                    done: b.add,
                    fail: c.add,
                    progress: d.add,
                    state: function() {
                        return e
                    },
                    isResolved: b.fired,
                    isRejected: c.fired,
                    then: function(a, b, c) {
                        i.done(a).fail(b).progress(c);
                        return this
                    },
                    always: function() {
                        i.done.apply(i, arguments).fail.apply(i, arguments);
                        return this
                    },
                    pipe: function(a, b, c) {
                        return f.Deferred(function(d) {
                            f.each({
                                done: [a, "resolve"],
                                fail: [b, "reject"],
                                progress: [c, "notify"]
                            }, function(a, b) {
                                var c = b[0], e = b[1], g;
                                f.isFunction(c) ? i[a](function() {
                                    g = c.apply(this, arguments),
                                    g && f.isFunction(g.promise) ? g.promise().then(d.resolve, d.reject, d.notify) : d[e + "With"](this === i ? d : this, [g])
                                }) : i[a](d[e])
                            })
                        }).promise()
                    },
                    promise: function(a) {
                        if (a == null)
                            a = h;
                        else
                            for (var b in h)
                                a[b] = h[b];
                        return a
                    }
                }, i = h.promise({}), j;
                for (j in g)
                    i[j] = g[j].fire,
                    i[j + "With"] = g[j].fireWith;
                i.done(function() {
                    e = "resolved"
                }, c.disable, d.lock).fail(function() {
                    e = "rejected"
                }, b.disable, d.lock),
                a && a.call(i, i);
                return i
            },
            when: function(a) {
                function m(a) {
                    return function(b) {
                        e[a] = arguments.length > 1 ? i.call(arguments, 0) : b,
                        j.notifyWith(k, e)
                    }
                }
                function l(a) {
                    return function(c) {
                        b[a] = arguments.length > 1 ? i.call(arguments, 0) : c,
                        --g || j.resolveWith(j, b)
                    }
                }
                var b = i.call(arguments, 0)
                  , c = 0
                  , d = b.length
                  , e = Array(d)
                  , g = d
                  , h = d
                  , j = d <= 1 && a && f.isFunction(a.promise) ? a : f.Deferred()
                  , k = j.promise();
                if (d > 1) {
                    for (; c < d; c++)
                        b[c] && b[c].promise && f.isFunction(b[c].promise) ? b[c].promise().then(l(c), j.reject, m(c)) : --g;
                    g || j.resolveWith(j, b)
                } else
                    j !== a && j.resolveWith(j, d ? [a] : []);
                return k
            }
        }),
        f.support = function() {
            var b, d, e, g, h, i, j, k, l, m, n, o, p, q = c.createElement("div"), r = c.documentElement;
            q.setAttribute("className", "t"),
            q.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",
            d = q.getElementsByTagName("*"),
            e = q.getElementsByTagName("a")[0];
            if (!d || !d.length || !e)
                return {};
            g = c.createElement("select"),
            h = g.appendChild(c.createElement("option")),
            i = q.getElementsByTagName("input")[0],
            b = {
                leadingWhitespace: q.firstChild.nodeType === 3,
                tbody: !q.getElementsByTagName("tbody").length,
                htmlSerialize: !!q.getElementsByTagName("link").length,
                style: /top/.test(e.getAttribute("style")),
                hrefNormalized: e.getAttribute("href") === "/a",
                opacity: /^0.55/.test(e.style.opacity),
                cssFloat: !!e.style.cssFloat,
                checkOn: i.value === "on",
                optSelected: h.selected,
                getSetAttribute: q.className !== "t",
                enctype: !!c.createElement("form").enctype,
                html5Clone: c.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
                submitBubbles: !0,
                changeBubbles: !0,
                focusinBubbles: !1,
                deleteExpando: !0,
                noCloneEvent: !0,
                inlineBlockNeedsLayout: !1,
                shrinkWrapBlocks: !1,
                reliableMarginRight: !0
            },
            i.checked = !0,
            b.noCloneChecked = i.cloneNode(!0).checked,
            g.disabled = !0,
            b.optDisabled = !h.disabled;
            try {
                delete q.test
            } catch (s) {
                b.deleteExpando = !1
            }
            !q.addEventListener && q.attachEvent && q.fireEvent && (q.attachEvent("onclick", function() {
                b.noCloneEvent = !1
            }),
            q.cloneNode(!0).fireEvent("onclick")),
            i = c.createElement("input"),
            i.value = "t",
            i.setAttribute("type", "radio"),
            b.radioValue = i.value === "t",
            i.setAttribute("checked", "checked"),
            q.appendChild(i),
            k = c.createDocumentFragment(),
            k.appendChild(q.lastChild),
            b.checkClone = k.cloneNode(!0).cloneNode(!0).lastChild.checked,
            b.appendChecked = i.checked,
            k.removeChild(i),
            k.appendChild(q),
            q.innerHTML = "",
            a.getComputedStyle && (j = c.createElement("div"),
            j.style.width = "0",
            j.style.marginRight = "0",
            q.style.width = "2px",
            q.appendChild(j),
            b.reliableMarginRight = (parseInt((a.getComputedStyle(j, null) || {
                marginRight: 0
            }).marginRight, 10) || 0) === 0);
            if (q.attachEvent)
                for (o in {
                    submit: 1,
                    change: 1,
                    focusin: 1
                })
                    n = "on" + o,
                    p = n in q,
                    p || (q.setAttribute(n, "return;"),
                    p = typeof q[n] == "function"),
                    b[o + "Bubbles"] = p;
            k.removeChild(q),
            k = g = h = j = q = i = null,
            f(function() {
                var a, d, e, g, h, i, j, k, m, n, o, r = c.getElementsByTagName("body")[0];
                !r || (j = 1,
                k = "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",
                m = "visibility:hidden;border:0;",
                n = "style='" + k + "border:5px solid #000;padding:0;'",
                o = "<div " + n + "><div></div></div>" + "<table " + n + " cellpadding='0' cellspacing='0'>" + "<tr><td></td></tr></table>",
                a = c.createElement("div"),
                a.style.cssText = m + "width:0;height:0;position:static;top:0;margin-top:" + j + "px",
                r.insertBefore(a, r.firstChild),
                q = c.createElement("div"),
                a.appendChild(q),
                q.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",
                l = q.getElementsByTagName("td"),
                p = l[0].offsetHeight === 0,
                l[0].style.display = "",
                l[1].style.display = "none",
                b.reliableHiddenOffsets = p && l[0].offsetHeight === 0,
                q.innerHTML = "",
                q.style.width = q.style.paddingLeft = "1px",
                f.boxModel = b.boxModel = q.offsetWidth === 2,
                typeof q.style.zoom != "undefined" && (q.style.display = "inline",
                q.style.zoom = 1,
                b.inlineBlockNeedsLayout = q.offsetWidth === 2,
                q.style.display = "",
                q.innerHTML = "<div style='width:4px;'></div>",
                b.shrinkWrapBlocks = q.offsetWidth !== 2),
                q.style.cssText = k + m,
                q.innerHTML = o,
                d = q.firstChild,
                e = d.firstChild,
                h = d.nextSibling.firstChild.firstChild,
                i = {
                    doesNotAddBorder: e.offsetTop !== 5,
                    doesAddBorderForTableAndCells: h.offsetTop === 5
                },
                e.style.position = "fixed",
                e.style.top = "20px",
                i.fixedPosition = e.offsetTop === 20 || e.offsetTop === 15,
                e.style.position = e.style.top = "",
                d.style.overflow = "hidden",
                d.style.position = "relative",
                i.subtractsBorderForOverflowNotVisible = e.offsetTop === -5,
                i.doesNotIncludeMarginInBodyOffset = r.offsetTop !== j,
                r.removeChild(a),
                q = a = null,
                f.extend(b, i))
            });
            return b
        }();
        var j = /^(?:\{.*\}|\[.*\])$/
          , k = /([A-Z])/g;
        f.extend({
            cache: {},
            uuid: 0,
            expando: "jQuery" + (f.fn.jquery + Math.random()).replace(/\D/g, ""),
            noData: {
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
                applet: !0
            },
            hasData: function(a) {
                a = a.nodeType ? f.cache[a[f.expando]] : a[f.expando];
                return !!a && !m(a)
            },
            data: function(a, c, d, e) {
                if (!!f.acceptData(a)) {
                    var g, h, i, j = f.expando, k = typeof c == "string", l = a.nodeType, m = l ? f.cache : a, n = l ? a[j] : a[j] && j, o = c === "events";
                    if ((!n || !m[n] || !o && !e && !m[n].data) && k && d === b)
                        return;
                    n || (l ? a[j] = n = ++f.uuid : n = j),
                    m[n] || (m[n] = {},
                    l || (m[n].toJSON = f.noop));
                    if (typeof c == "object" || typeof c == "function")
                        e ? m[n] = f.extend(m[n], c) : m[n].data = f.extend(m[n].data, c);
                    g = h = m[n],
                    e || (h.data || (h.data = {}),
                    h = h.data),
                    d !== b && (h[f.camelCase(c)] = d);
                    if (o && !h[c])
                        return g.events;
                    k ? (i = h[c],
                    i == null && (i = h[f.camelCase(c)])) : i = h;
                    return i
                }
            },
            removeData: function(a, b, c) {
                if (!!f.acceptData(a)) {
                    var d, e, g, h = f.expando, i = a.nodeType, j = i ? f.cache : a, k = i ? a[h] : h;
                    if (!j[k])
                        return;
                    if (b) {
                        d = c ? j[k] : j[k].data;
                        if (d) {
                            f.isArray(b) || (b in d ? b = [b] : (b = f.camelCase(b),
                            b in d ? b = [b] : b = b.split(" ")));
                            for (e = 0,
                            g = b.length; e < g; e++)
                                delete d[b[e]];
                            if (!(c ? m : f.isEmptyObject)(d))
                                return
                        }
                    }
                    if (!c) {
                        delete j[k].data;
                        if (!m(j[k]))
                            return
                    }
                    f.support.deleteExpando || !j.setInterval ? delete j[k] : j[k] = null,
                    i && (f.support.deleteExpando ? delete a[h] : a.removeAttribute ? a.removeAttribute(h) : a[h] = null)
                }
            },
            _data: function(a, b, c) {
                return f.data(a, b, c, !0)
            },
            acceptData: function(a) {
                if (a.nodeName) {
                    var b = f.noData[a.nodeName.toLowerCase()];
                    if (b)
                        return b !== !0 && a.getAttribute("classid") === b
                }
                return !0
            }
        }),
        f.fn.extend({
            data: function(a, c) {
                var d, e, g, h = null;
                if (typeof a == "undefined") {
                    if (this.length) {
                        h = f.data(this[0]);
                        if (this[0].nodeType === 1 && !f._data(this[0], "parsedAttrs")) {
                            e = this[0].attributes;
                            for (var i = 0, j = e.length; i < j; i++)
                                g = e[i].name,
                                g.indexOf("data-") === 0 && (g = f.camelCase(g.substring(5)),
                                l(this[0], g, h[g]));
                            f._data(this[0], "parsedAttrs", !0)
                        }
                    }
                    return h
                }
                if (typeof a == "object")
                    return this.each(function() {
                        f.data(this, a)
                    });
                d = a.split("."),
                d[1] = d[1] ? "." + d[1] : "";
                if (c === b) {
                    h = this.triggerHandler("getData" + d[1] + "!", [d[0]]),
                    h === b && this.length && (h = f.data(this[0], a),
                    h = l(this[0], a, h));
                    return h === b && d[1] ? this.data(d[0]) : h
                }
                return this.each(function() {
                    var b = f(this)
                      , e = [d[0], c];
                    b.triggerHandler("setData" + d[1] + "!", e),
                    f.data(this, a, c),
                    b.triggerHandler("changeData" + d[1] + "!", e)
                })
            },
            removeData: function(a) {
                return this.each(function() {
                    f.removeData(this, a)
                })
            }
        }),
        f.extend({
            _mark: function(a, b) {
                a && (b = (b || "fx") + "mark",
                f._data(a, b, (f._data(a, b) || 0) + 1))
            },
            _unmark: function(a, b, c) {
                a !== !0 && (c = b,
                b = a,
                a = !1);
                if (b) {
                    c = c || "fx";
                    var d = c + "mark"
                      , e = a ? 0 : (f._data(b, d) || 1) - 1;
                    e ? f._data(b, d, e) : (f.removeData(b, d, !0),
                    n(b, c, "mark"))
                }
            },
            queue: function(a, b, c) {
                var d;
                if (a) {
                    b = (b || "fx") + "queue",
                    d = f._data(a, b),
                    c && (!d || f.isArray(c) ? d = f._data(a, b, f.makeArray(c)) : d.push(c));
                    return d || []
                }
            },
            dequeue: function(a, b) {
                b = b || "fx";
                var c = f.queue(a, b)
                  , d = c.shift()
                  , e = {};
                d === "inprogress" && (d = c.shift()),
                d && (b === "fx" && c.unshift("inprogress"),
                f._data(a, b + ".run", e),
                d.call(a, function() {
                    f.dequeue(a, b)
                }, e)),
                c.length || (f.removeData(a, b + "queue " + b + ".run", !0),
                n(a, b, "queue"))
            }
        }),
        f.fn.extend({
            queue: function(a, c) {
                typeof a != "string" && (c = a,
                a = "fx");
                if (c === b)
                    return f.queue(this[0], a);
                return this.each(function() {
                    var b = f.queue(this, a, c);
                    a === "fx" && b[0] !== "inprogress" && f.dequeue(this, a)
                })
            },
            dequeue: function(a) {
                return this.each(function() {
                    f.dequeue(this, a)
                })
            },
            delay: function(a, b) {
                a = f.fx ? f.fx.speeds[a] || a : a,
                b = b || "fx";
                return this.queue(b, function(b, c) {
                    var d = setTimeout(b, a);
                    c.stop = function() {
                        clearTimeout(d)
                    }
                })
            },
            clearQueue: function(a) {
                return this.queue(a || "fx", [])
            },
            promise: function(a, c) {
                function m() {
                    --h || d.resolveWith(e, [e])
                }
                typeof a != "string" && (c = a,
                a = b),
                a = a || "fx";
                var d = f.Deferred(), e = this, g = e.length, h = 1, i = a + "defer", j = a + "queue", k = a + "mark", l;
                while (g--)
                    if (l = f.data(e[g], i, b, !0) || (f.data(e[g], j, b, !0) || f.data(e[g], k, b, !0)) && f.data(e[g], i, f.Callbacks("once memory"), !0))
                        h++,
                        l.add(m);
                m();
                return d.promise()
            }
        });
        var o = /[\n\t\r]/g, p = /\s+/, q = /\r/g, r = /^(?:button|input)$/i, s = /^(?:button|input|object|select|textarea)$/i, t = /^a(?:rea)?$/i, u = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, v = f.support.getSetAttribute, w, x, y;
        f.fn.extend({
            attr: function(a, b) {
                return f.access(this, a, b, !0, f.attr)
            },
            removeAttr: function(a) {
                return this.each(function() {
                    f.removeAttr(this, a)
                })
            },
            prop: function(a, b) {
                return f.access(this, a, b, !0, f.prop)
            },
            removeProp: function(a) {
                a = f.propFix[a] || a;
                return this.each(function() {
                    try {
                        this[a] = b,
                        delete this[a]
                    } catch (c) {}
                })
            },
            addClass: function(a) {
                var b, c, d, e, g, h, i;
                if (f.isFunction(a))
                    return this.each(function(b) {
                        f(this).addClass(a.call(this, b, this.className))
                    });
                if (a && typeof a == "string") {
                    b = a.split(p);
                    for (c = 0,
                    d = this.length; c < d; c++) {
                        e = this[c];
                        if (e.nodeType === 1)
                            if (!e.className && b.length === 1)
                                e.className = a;
                            else {
                                g = " " + e.className + " ";
                                for (h = 0,
                                i = b.length; h < i; h++)
                                    ~g.indexOf(" " + b[h] + " ") || (g += b[h] + " ");
                                e.className = f.trim(g)
                            }
                    }
                }
                return this
            },
            removeClass: function(a) {
                var c, d, e, g, h, i, j;
                if (f.isFunction(a))
                    return this.each(function(b) {
                        f(this).removeClass(a.call(this, b, this.className))
                    });
                if (a && typeof a == "string" || a === b) {
                    c = (a || "").split(p);
                    for (d = 0,
                    e = this.length; d < e; d++) {
                        g = this[d];
                        if (g.nodeType === 1 && g.className)
                            if (a) {
                                h = (" " + g.className + " ").replace(o, " ");
                                for (i = 0,
                                j = c.length; i < j; i++)
                                    h = h.replace(" " + c[i] + " ", " ");
                                g.className = f.trim(h)
                            } else
                                g.className = ""
                    }
                }
                return this
            },
            toggleClass: function(a, b) {
                var c = typeof a
                  , d = typeof b == "boolean";
                if (f.isFunction(a))
                    return this.each(function(c) {
                        f(this).toggleClass(a.call(this, c, this.className, b), b)
                    });
                return this.each(function() {
                    if (c === "string") {
                        var e, g = 0, h = f(this), i = b, j = a.split(p);
                        while (e = j[g++])
                            i = d ? i : !h.hasClass(e),
                            h[i ? "addClass" : "removeClass"](e)
                    } else if (c === "undefined" || c === "boolean")
                        this.className && f._data(this, "__className__", this.className),
                        this.className = this.className || a === !1 ? "" : f._data(this, "__className__") || ""
                })
            },
            hasClass: function(a) {
                var b = " " + a + " "
                  , c = 0
                  , d = this.length;
                for (; c < d; c++)
                    if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(o, " ").indexOf(b) > -1)
                        return !0;
                return !1
            },
            val: function(a) {
                var c, d, e, g = this[0];
                {
                    if (!!arguments.length) {
                        e = f.isFunction(a);
                        return this.each(function(d) {
                            var g = f(this), h;
                            if (this.nodeType === 1) {
                                e ? h = a.call(this, d, g.val()) : h = a,
                                h == null ? h = "" : typeof h == "number" ? h += "" : f.isArray(h) && (h = f.map(h, function(a) {
                                    return a == null ? "" : a + ""
                                })),
                                c = f.valHooks[this.nodeName.toLowerCase()] || f.valHooks[this.type];
                                if (!c || !("set"in c) || c.set(this, h, "value") === b)
                                    this.value = h
                            }
                        })
                    }
                    if (g) {
                        c = f.valHooks[g.nodeName.toLowerCase()] || f.valHooks[g.type];
                        if (c && "get"in c && (d = c.get(g, "value")) !== b)
                            return d;
                        d = g.value;
                        return typeof d == "string" ? d.replace(q, "") : d == null ? "" : d
                    }
                }
            }
        }),
        f.extend({
            valHooks: {
                option: {
                    get: function(a) {
                        var b = a.attributes.value;
                        return !b || b.specified ? a.value : a.text
                    }
                },
                select: {
                    get: function(a) {
                        var b, c, d, e, g = a.selectedIndex, h = [], i = a.options, j = a.type === "select-one";
                        if (g < 0)
                            return null;
                        c = j ? g : 0,
                        d = j ? g + 1 : i.length;
                        for (; c < d; c++) {
                            e = i[c];
                            if (e.selected && (f.support.optDisabled ? !e.disabled : e.getAttribute("disabled") === null) && (!e.parentNode.disabled || !f.nodeName(e.parentNode, "optgroup"))) {
                                b = f(e).val();
                                if (j)
                                    return b;
                                h.push(b)
                            }
                        }
                        if (j && !h.length && i.length)
                            return f(i[g]).val();
                        return h
                    },
                    set: function(a, b) {
                        var c = f.makeArray(b);
                        f(a).find("option").each(function() {
                            this.selected = f.inArray(f(this).val(), c) >= 0
                        }),
                        c.length || (a.selectedIndex = -1);
                        return c
                    }
                }
            },
            attrFn: {
                val: !0,
                css: !0,
                html: !0,
                text: !0,
                data: !0,
                width: !0,
                height: !0,
                offset: !0
            },
            attr: function(a, c, d, e) {
                var g, h, i, j = a.nodeType;
                if (!!a && j !== 3 && j !== 8 && j !== 2) {
                    if (e && c in f.attrFn)
                        return f(a)[c](d);
                    if (typeof a.getAttribute == "undefined")
                        return f.prop(a, c, d);
                    i = j !== 1 || !f.isXMLDoc(a),
                    i && (c = c.toLowerCase(),
                    h = f.attrHooks[c] || (u.test(c) ? x : w));
                    if (d !== b) {
                        if (d === null) {
                            f.removeAttr(a, c);
                            return
                        }
                        if (h && "set"in h && i && (g = h.set(a, d, c)) !== b)
                            return g;
                        a.setAttribute(c, "" + d);
                        return d
                    }
                    if (h && "get"in h && i && (g = h.get(a, c)) !== null)
                        return g;
                    g = a.getAttribute(c);
                    return g === null ? b : g
                }
            },
            removeAttr: function(a, b) {
                var c, d, e, g, h = 0;
                if (b && a.nodeType === 1) {
                    d = b.toLowerCase().split(p),
                    g = d.length;
                    for (; h < g; h++)
                        e = d[h],
                        e && (c = f.propFix[e] || e,
                        f.attr(a, e, ""),
                        a.removeAttribute(v ? e : c),
                        u.test(e) && c in a && (a[c] = !1))
                }
            },
            attrHooks: {
                type: {
                    set: function(a, b) {
                        if (r.test(a.nodeName) && a.parentNode)
                            f.error("type property can't be changed");
                        else if (!f.support.radioValue && b === "radio" && f.nodeName(a, "input")) {
                            var c = a.value;
                            a.setAttribute("type", b),
                            c && (a.value = c);
                            return b
                        }
                    }
                },
                value: {
                    get: function(a, b) {
                        if (w && f.nodeName(a, "button"))
                            return w.get(a, b);
                        return b in a ? a.value : null
                    },
                    set: function(a, b, c) {
                        if (w && f.nodeName(a, "button"))
                            return w.set(a, b, c);
                        a.value = b
                    }
                }
            },
            propFix: {
                tabindex: "tabIndex",
                readonly: "readOnly",
                "for": "htmlFor",
                "class": "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            },
            prop: function(a, c, d) {
                var e, g, h, i = a.nodeType;
                if (!!a && i !== 3 && i !== 8 && i !== 2) {
                    h = i !== 1 || !f.isXMLDoc(a),
                    h && (c = f.propFix[c] || c,
                    g = f.propHooks[c]);
                    return d !== b ? g && "set"in g && (e = g.set(a, d, c)) !== b ? e : a[c] = d : g && "get"in g && (e = g.get(a, c)) !== null ? e : a[c]
                }
            },
            propHooks: {
                tabIndex: {
                    get: function(a) {
                        var c = a.getAttributeNode("tabindex");
                        return c && c.specified ? parseInt(c.value, 10) : s.test(a.nodeName) || t.test(a.nodeName) && a.href ? 0 : b
                    }
                }
            }
        }),
        f.attrHooks.tabindex = f.propHooks.tabIndex,
        x = {
            get: function(a, c) {
                var d, e = f.prop(a, c);
                return e === !0 || typeof e != "boolean" && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
            },
            set: function(a, b, c) {
                var d;
                b === !1 ? f.removeAttr(a, c) : (d = f.propFix[c] || c,
                d in a && (a[d] = !0),
                a.setAttribute(c, c.toLowerCase()));
                return c
            }
        },
        v || (y = {
            name: !0,
            id: !0
        },
        w = f.valHooks.button = {
            get: function(a, c) {
                var d;
                d = a.getAttributeNode(c);
                return d && (y[c] ? d.nodeValue !== "" : d.specified) ? d.nodeValue : b
            },
            set: function(a, b, d) {
                var e = a.getAttributeNode(d);
                e || (e = c.createAttribute(d),
                a.setAttributeNode(e));
                return e.nodeValue = b + ""
            }
        },
        f.attrHooks.tabindex.set = w.set,
        f.each(["width", "height"], function(a, b) {
            f.attrHooks[b] = f.extend(f.attrHooks[b], {
                set: function(a, c) {
                    if (c === "") {
                        a.setAttribute(b, "auto");
                        return c
                    }
                }
            })
        }),
        f.attrHooks.contenteditable = {
            get: w.get,
            set: function(a, b, c) {
                b === "" && (b = "false"),
                w.set(a, b, c)
            }
        }),
        f.support.hrefNormalized || f.each(["href", "src", "width", "height"], function(a, c) {
            f.attrHooks[c] = f.extend(f.attrHooks[c], {
                get: function(a) {
                    var d = a.getAttribute(c, 2);
                    return d === null ? b : d
                }
            })
        }),
        f.support.style || (f.attrHooks.style = {
            get: function(a) {
                return a.style.cssText.toLowerCase() || b
            },
            set: function(a, b) {
                return a.style.cssText = "" + b
            }
        }),
        f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, {
            get: function(a) {
                var b = a.parentNode;
                b && (b.selectedIndex,
                b.parentNode && b.parentNode.selectedIndex);
                return null
            }
        })),
        f.support.enctype || (f.propFix.enctype = "encoding"),
        f.support.checkOn || f.each(["radio", "checkbox"], function() {
            f.valHooks[this] = {
                get: function(a) {
                    return a.getAttribute("value") === null ? "on" : a.value
                }
            }
        }),
        f.each(["radio", "checkbox"], function() {
            f.valHooks[this] = f.extend(f.valHooks[this], {
                set: function(a, b) {
                    if (f.isArray(b))
                        return a.checked = f.inArray(f(a).val(), b) >= 0
                }
            })
        });
        var z = /^(?:textarea|input|select)$/i
          , A = /^([^\.]*)?(?:\.(.+))?$/
          , B = /\bhover(\.\S+)?\b/
          , C = /^key/
          , D = /^(?:mouse|contextmenu)|click/
          , E = /^(?:focusinfocus|focusoutblur)$/
          , F = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/
          , G = function(a) {
            var b = F.exec(a);
            b && (b[1] = (b[1] || "").toLowerCase(),
            b[3] = b[3] && new RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)"));
            return b
        }
          , H = function(a, b) {
            var c = a.attributes || {};
            return (!b[1] || a.nodeName.toLowerCase() === b[1]) && (!b[2] || (c.id || {}).value === b[2]) && (!b[3] || b[3].test((c["class"] || {}).value))
        }
          , I = function(a) {
            return f.event.special.hover ? a : a.replace(B, "mouseenter$1 mouseleave$1")
        };
        f.event = {
            add: function(a, c, d, e, g) {
                var h, i, j, k, l, m, n, o, p, q, r, s;
                if (!(a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(h = f._data(a)))) {
                    d.handler && (p = d,
                    d = p.handler),
                    d.guid || (d.guid = f.guid++),
                    j = h.events,
                    j || (h.events = j = {}),
                    i = h.handle,
                    i || (h.handle = i = function(a) {
                        return typeof f != "undefined" && (!a || f.event.triggered !== a.type) ? f.event.dispatch.apply(i.elem, arguments) : b
                    }
                    ,
                    i.elem = a),
                    c = f.trim(I(c)).split(" ");
                    for (k = 0; k < c.length; k++) {
                        l = A.exec(c[k]) || [],
                        m = l[1],
                        n = (l[2] || "").split(".").sort(),
                        s = f.event.special[m] || {},
                        m = (g ? s.delegateType : s.bindType) || m,
                        s = f.event.special[m] || {},
                        o = f.extend({
                            type: m,
                            origType: l[1],
                            data: e,
                            handler: d,
                            guid: d.guid,
                            selector: g,
                            quick: G(g),
                            namespace: n.join(".")
                        }, p),
                        r = j[m];
                        if (!r) {
                            r = j[m] = [],
                            r.delegateCount = 0;
                            if (!s.setup || s.setup.call(a, e, n, i) === !1)
                                a.addEventListener ? a.addEventListener(m, i, !1) : a.attachEvent && a.attachEvent("on" + m, i)
                        }
                        s.add && (s.add.call(a, o),
                        o.handler.guid || (o.handler.guid = d.guid)),
                        g ? r.splice(r.delegateCount++, 0, o) : r.push(o),
                        f.event.global[m] = !0
                    }
                    a = null
                }
            },
            global: {},
            remove: function(a, b, c, d, e) {
                var g = f.hasData(a) && f._data(a), h, i, j, k, l, m, n, o, p, q, r, s;
                if (!!g && !!(o = g.events)) {
                    b = f.trim(I(b || "")).split(" ");
                    for (h = 0; h < b.length; h++) {
                        i = A.exec(b[h]) || [],
                        j = k = i[1],
                        l = i[2];
                        if (!j) {
                            for (j in o)
                                f.event.remove(a, j + b[h], c, d, !0);
                            continue
                        }
                        p = f.event.special[j] || {},
                        j = (d ? p.delegateType : p.bindType) || j,
                        r = o[j] || [],
                        m = r.length,
                        l = l ? new RegExp("(^|\\.)" + l.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
                        for (n = 0; n < r.length; n++)
                            s = r[n],
                            (e || k === s.origType) && (!c || c.guid === s.guid) && (!l || l.test(s.namespace)) && (!d || d === s.selector || d === "**" && s.selector) && (r.splice(n--, 1),
                            s.selector && r.delegateCount--,
                            p.remove && p.remove.call(a, s));
                        r.length === 0 && m !== r.length && ((!p.teardown || p.teardown.call(a, l) === !1) && f.removeEvent(a, j, g.handle),
                        delete o[j])
                    }
                    f.isEmptyObject(o) && (q = g.handle,
                    q && (q.elem = null),
                    f.removeData(a, ["events", "handle"], !0))
                }
            },
            customEvent: {
                getData: !0,
                setData: !0,
                changeData: !0
            },
            trigger: function(c, d, e, g) {
                if (!e || e.nodeType !== 3 && e.nodeType !== 8) {
                    var h = c.type || c, i = [], j, k, l, m, n, o, p, q, r, s;
                    if (E.test(h + f.event.triggered))
                        return;
                    h.indexOf("!") >= 0 && (h = h.slice(0, -1),
                    k = !0),
                    h.indexOf(".") >= 0 && (i = h.split("."),
                    h = i.shift(),
                    i.sort());
                    if ((!e || f.event.customEvent[h]) && !f.event.global[h])
                        return;
                    c = typeof c == "object" ? c[f.expando] ? c : new f.Event(h,c) : new f.Event(h),
                    c.type = h,
                    c.isTrigger = !0,
                    c.exclusive = k,
                    c.namespace = i.join("."),
                    c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + i.join("\\.(?:.*\\.)?") + "(\\.|$)") : null,
                    o = h.indexOf(":") < 0 ? "on" + h : "";
                    if (!e) {
                        j = f.cache;
                        for (l in j)
                            j[l].events && j[l].events[h] && f.event.trigger(c, d, j[l].handle.elem, !0);
                        return
                    }
                    c.result = b,
                    c.target || (c.target = e),
                    d = d != null ? f.makeArray(d) : [],
                    d.unshift(c),
                    p = f.event.special[h] || {};
                    if (p.trigger && p.trigger.apply(e, d) === !1)
                        return;
                    r = [[e, p.bindType || h]];
                    if (!g && !p.noBubble && !f.isWindow(e)) {
                        s = p.delegateType || h,
                        m = E.test(s + h) ? e : e.parentNode,
                        n = null;
                        for (; m; m = m.parentNode)
                            r.push([m, s]),
                            n = m;
                        n && n === e.ownerDocument && r.push([n.defaultView || n.parentWindow || a, s])
                    }
                    for (l = 0; l < r.length && !c.isPropagationStopped(); l++)
                        m = r[l][0],
                        c.type = r[l][1],
                        q = (f._data(m, "events") || {})[c.type] && f._data(m, "handle"),
                        q && q.apply(m, d),
                        q = o && m[o],
                        q && f.acceptData(m) && q.apply(m, d) === !1 && c.preventDefault();
                    c.type = h,
                    !g && !c.isDefaultPrevented() && (!p._default || p._default.apply(e.ownerDocument, d) === !1) && (h !== "click" || !f.nodeName(e, "a")) && f.acceptData(e) && o && e[h] && (h !== "focus" && h !== "blur" || c.target.offsetWidth !== 0) && !f.isWindow(e) && (n = e[o],
                    n && (e[o] = null),
                    f.event.triggered = h,
                    e[h](),
                    f.event.triggered = b,
                    n && (e[o] = n));
                    return c.result
                }
            },
            dispatch: function(c) {
                c = f.event.fix(c || a.event);
                var d = (f._data(this, "events") || {})[c.type] || [], e = d.delegateCount, g = [].slice.call(arguments, 0), h = !c.exclusive && !c.namespace, i = [], j, k, l, m, n, o, p, q, r, s, t;
                g[0] = c,
                c.delegateTarget = this;
                if (e && !c.target.disabled && (!c.button || c.type !== "click")) {
                    m = f(this),
                    m.context = this.ownerDocument || this;
                    for (l = c.target; l != this; l = l.parentNode || this) {
                        o = {},
                        q = [],
                        m[0] = l;
                        for (j = 0; j < e; j++)
                            r = d[j],
                            s = r.selector,
                            o[s] === b && (o[s] = r.quick ? H(l, r.quick) : m.is(s)),
                            o[s] && q.push(r);
                        q.length && i.push({
                            elem: l,
                            matches: q
                        })
                    }
                }
                d.length > e && i.push({
                    elem: this,
                    matches: d.slice(e)
                });
                for (j = 0; j < i.length && !c.isPropagationStopped(); j++) {
                    p = i[j],
                    c.currentTarget = p.elem;
                    for (k = 0; k < p.matches.length && !c.isImmediatePropagationStopped(); k++) {
                        r = p.matches[k];
                        if (h || !c.namespace && !r.namespace || c.namespace_re && c.namespace_re.test(r.namespace))
                            c.data = r.data,
                            c.handleObj = r,
                            n = ((f.event.special[r.origType] || {}).handle || r.handler).apply(p.elem, g),
                            n !== b && (c.result = n,
                            n === !1 && (c.preventDefault(),
                            c.stopPropagation()))
                    }
                }
                return c.result
            },
            props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(a, b) {
                    a.which == null && (a.which = b.charCode != null ? b.charCode : b.keyCode);
                    return a
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(a, d) {
                    var e, f, g, h = d.button, i = d.fromElement;
                    a.pageX == null && d.clientX != null && (e = a.target.ownerDocument || c,
                    f = e.documentElement,
                    g = e.body,
                    a.pageX = d.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0),
                    a.pageY = d.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)),
                    !a.relatedTarget && i && (a.relatedTarget = i === a.target ? d.toElement : i),
                    !a.which && h !== b && (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0);
                    return a
                }
            },
            fix: function(a) {
                if (a[f.expando])
                    return a;
                var d, e, g = a, h = f.event.fixHooks[a.type] || {}, i = h.props ? this.props.concat(h.props) : this.props;
                a = f.Event(g);
                for (d = i.length; d; )
                    e = i[--d],
                    a[e] = g[e];
                a.target || (a.target = g.srcElement || c),
                a.target.nodeType === 3 && (a.target = a.target.parentNode),
                a.metaKey === b && (a.metaKey = a.ctrlKey);
                return h.filter ? h.filter(a, g) : a
            },
            special: {
                ready: {
                    setup: f.bindReady
                },
                load: {
                    noBubble: !0
                },
                focus: {
                    delegateType: "focusin"
                },
                blur: {
                    delegateType: "focusout"
                },
                beforeunload: {
                    setup: function(a, b, c) {
                        f.isWindow(this) && (this.onbeforeunload = c)
                    },
                    teardown: function(a, b) {
                        this.onbeforeunload === b && (this.onbeforeunload = null)
                    }
                }
            },
            simulate: function(a, b, c, d) {
                var e = f.extend(new f.Event, c, {
                    type: a,
                    isSimulated: !0,
                    originalEvent: {}
                });
                d ? f.event.trigger(e, null, b) : f.event.dispatch.call(b, e),
                e.isDefaultPrevented() && c.preventDefault()
            }
        },
        f.event.handle = f.event.dispatch,
        f.removeEvent = c.removeEventListener ? function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1)
        }
        : function(a, b, c) {
            a.detachEvent && a.detachEvent("on" + b, c)
        }
        ,
        f.Event = function(a, b) {
            if (!(this instanceof f.Event))
                return new f.Event(a,b);
            a && a.type ? (this.originalEvent = a,
            this.type = a.type,
            this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? K : J) : this.type = a,
            b && f.extend(this, b),
            this.timeStamp = a && a.timeStamp || f.now(),
            this[f.expando] = !0
        }
        ,
        f.Event.prototype = {
            preventDefault: function() {
                this.isDefaultPrevented = K;
                var a = this.originalEvent;
                !a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
            },
            stopPropagation: function() {
                this.isPropagationStopped = K;
                var a = this.originalEvent;
                !a || (a.stopPropagation && a.stopPropagation(),
                a.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = K,
                this.stopPropagation()
            },
            isDefaultPrevented: J,
            isPropagationStopped: J,
            isImmediatePropagationStopped: J
        },
        f.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(a, b) {
            f.event.special[a] = {
                delegateType: b,
                bindType: b,
                handle: function(a) {
                    var c = this, d = a.relatedTarget, e = a.handleObj, g = e.selector, h;
                    if (!d || d !== c && !f.contains(c, d))
                        a.type = e.origType,
                        h = e.handler.apply(this, arguments),
                        a.type = b;
                    return h
                }
            }
        }),
        f.support.submitBubbles || (f.event.special.submit = {
            setup: function() {
                if (f.nodeName(this, "form"))
                    return !1;
                f.event.add(this, "click._submit keypress._submit", function(a) {
                    var c = a.target
                      , d = f.nodeName(c, "input") || f.nodeName(c, "button") ? c.form : b;
                    d && !d._submit_attached && (f.event.add(d, "submit._submit", function(a) {
                        this.parentNode && !a.isTrigger && f.event.simulate("submit", this.parentNode, a, !0)
                    }),
                    d._submit_attached = !0)
                })
            },
            teardown: function() {
                if (f.nodeName(this, "form"))
                    return !1;
                f.event.remove(this, "._submit")
            }
        }),
        f.support.changeBubbles || (f.event.special.change = {
            setup: function() {
                if (z.test(this.nodeName)) {
                    if (this.type === "checkbox" || this.type === "radio")
                        f.event.add(this, "propertychange._change", function(a) {
                            a.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                        }),
                        f.event.add(this, "click._change", function(a) {
                            this._just_changed && !a.isTrigger && (this._just_changed = !1,
                            f.event.simulate("change", this, a, !0))
                        });
                    return !1
                }
                f.event.add(this, "beforeactivate._change", function(a) {
                    var b = a.target;
                    z.test(b.nodeName) && !b._change_attached && (f.event.add(b, "change._change", function(a) {
                        this.parentNode && !a.isSimulated && !a.isTrigger && f.event.simulate("change", this.parentNode, a, !0)
                    }),
                    b._change_attached = !0)
                })
            },
            handle: function(a) {
                var b = a.target;
                if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox")
                    return a.handleObj.handler.apply(this, arguments)
            },
            teardown: function() {
                f.event.remove(this, "._change");
                return z.test(this.nodeName)
            }
        }),
        f.support.focusinBubbles || f.each({
            focus: "focusin",
            blur: "focusout"
        }, function(a, b) {
            var d = 0
              , e = function(a) {
                f.event.simulate(b, a.target, f.event.fix(a), !0)
            };
            f.event.special[b] = {
                setup: function() {
                    d++ === 0 && c.addEventListener(a, e, !0)
                },
                teardown: function() {
                    --d === 0 && c.removeEventListener(a, e, !0)
                }
            }
        }),
        f.fn.extend({
            on: function(a, c, d, e, g) {
                var h, i;
                if (typeof a == "object") {
                    typeof c != "string" && (d = c,
                    c = b);
                    for (i in a)
                        this.on(i, c, d, a[i], g);
                    return this
                }
                d == null && e == null ? (e = c,
                d = c = b) : e == null && (typeof c == "string" ? (e = d,
                d = b) : (e = d,
                d = c,
                c = b));
                if (e === !1)
                    e = J;
                else if (!e)
                    return this;
                g === 1 && (h = e,
                e = function(a) {
                    f().off(a);
                    return h.apply(this, arguments)
                }
                ,
                e.guid = h.guid || (h.guid = f.guid++));
                return this.each(function() {
                    f.event.add(this, a, e, d, c)
                })
            },
            one: function(a, b, c, d) {
                return this.on.call(this, a, b, c, d, 1)
            },
            off: function(a, c, d) {
                if (a && a.preventDefault && a.handleObj) {
                    var e = a.handleObj;
                    f(a.delegateTarget).off(e.namespace ? e.type + "." + e.namespace : e.type, e.selector, e.handler);
                    return this
                }
                if (typeof a == "object") {
                    for (var g in a)
                        this.off(g, c, a[g]);
                    return this
                }
                if (c === !1 || typeof c == "function")
                    d = c,
                    c = b;
                d === !1 && (d = J);
                return this.each(function() {
                    f.event.remove(this, a, d, c)
                })
            },
            bind: function(a, b, c) {
                return this.on(a, null, b, c)
            },
            unbind: function(a, b) {
                return this.off(a, null, b)
            },
            live: function(a, b, c) {
                f(this.context).on(a, this.selector, b, c);
                return this
            },
            die: function(a, b) {
                f(this.context).off(a, this.selector || "**", b);
                return this
            },
            delegate: function(a, b, c, d) {
                return this.on(b, a, c, d)
            },
            undelegate: function(a, b, c) {
                return arguments.length == 1 ? this.off(a, "**") : this.off(b, a, c)
            },
            trigger: function(a, b) {
                return this.each(function() {
                    f.event.trigger(a, b, this)
                })
            },
            triggerHandler: function(a, b) {
                if (this[0])
                    return f.event.trigger(a, b, this[0], !0)
            },
            toggle: function(a) {
                var b = arguments
                  , c = a.guid || f.guid++
                  , d = 0
                  , e = function(c) {
                    var e = (f._data(this, "lastToggle" + a.guid) || 0) % d;
                    f._data(this, "lastToggle" + a.guid, e + 1),
                    c.preventDefault();
                    return b[e].apply(this, arguments) || !1
                };
                e.guid = c;
                while (d < b.length)
                    b[d++].guid = c;
                return this.click(e)
            },
            hover: function(a, b) {
                return this.mouseenter(a).mouseleave(b || a)
            }
        }),
        f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
            f.fn[b] = function(a, c) {
                c == null && (c = a,
                a = null);
                return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
            }
            ,
            f.attrFn && (f.attrFn[b] = !0),
            C.test(b) && (f.event.fixHooks[b] = f.event.keyHooks),
            D.test(b) && (f.event.fixHooks[b] = f.event.mouseHooks)
        }),
        function() {
            function x(a, b, c, e, f, g) {
                for (var h = 0, i = e.length; h < i; h++) {
                    var j = e[h];
                    if (j) {
                        var k = !1;
                        j = j[a];
                        while (j) {
                            if (j[d] === c) {
                                k = e[j.sizset];
                                break
                            }
                            if (j.nodeType === 1) {
                                g || (j[d] = c,
                                j.sizset = h);
                                if (typeof b != "string") {
                                    if (j === b) {
                                        k = !0;
                                        break
                                    }
                                } else if (m.filter(b, [j]).length > 0) {
                                    k = j;
                                    break
                                }
                            }
                            j = j[a]
                        }
                        e[h] = k
                    }
                }
            }
            function w(a, b, c, e, f, g) {
                for (var h = 0, i = e.length; h < i; h++) {
                    var j = e[h];
                    if (j) {
                        var k = !1;
                        j = j[a];
                        while (j) {
                            if (j[d] === c) {
                                k = e[j.sizset];
                                break
                            }
                            j.nodeType === 1 && !g && (j[d] = c,
                            j.sizset = h);
                            if (j.nodeName.toLowerCase() === b) {
                                k = j;
                                break
                            }
                            j = j[a]
                        }
                        e[h] = k
                    }
                }
            }
            var a = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g
              , d = "sizcache" + (Math.random() + "").replace(".", "")
              , e = 0
              , g = Object.prototype.toString
              , h = !1
              , i = !0
              , j = /\\/g
              , k = /\r\n/g
              , l = /\W/;
            [0, 0].sort(function() {
                i = !1;
                return 0
            });
            var m = function(b, d, e, f) {
                e = e || [],
                d = d || c;
                var h = d;
                if (d.nodeType !== 1 && d.nodeType !== 9)
                    return [];
                if (!b || typeof b != "string")
                    return e;
                var i, j, k, l, n, q, r, t, u = !0, v = m.isXML(d), w = [], x = b;
                do {
                    a.exec(""),
                    i = a.exec(x);
                    if (i) {
                        x = i[3],
                        w.push(i[1]);
                        if (i[2]) {
                            l = i[3];
                            break
                        }
                    }
                } while (i);
                if (w.length > 1 && p.exec(b))
                    if (w.length === 2 && o.relative[w[0]])
                        j = y(w[0] + w[1], d, f);
                    else {
                        j = o.relative[w[0]] ? [d] : m(w.shift(), d);
                        while (w.length)
                            b = w.shift(),
                            o.relative[b] && (b += w.shift()),
                            j = y(b, j, f)
                    }
                else {
                    !f && w.length > 1 && d.nodeType === 9 && !v && o.match.ID.test(w[0]) && !o.match.ID.test(w[w.length - 1]) && (n = m.find(w.shift(), d, v),
                    d = n.expr ? m.filter(n.expr, n.set)[0] : n.set[0]);
                    if (d) {
                        n = f ? {
                            expr: w.pop(),
                            set: s(f)
                        } : m.find(w.pop(), w.length === 1 && (w[0] === "~" || w[0] === "+") && d.parentNode ? d.parentNode : d, v),
                        j = n.expr ? m.filter(n.expr, n.set) : n.set,
                        w.length > 0 ? k = s(j) : u = !1;
                        while (w.length)
                            q = w.pop(),
                            r = q,
                            o.relative[q] ? r = w.pop() : q = "",
                            r == null && (r = d),
                            o.relative[q](k, r, v)
                    } else
                        k = w = []
                }
                k || (k = j),
                k || m.error(q || b);
                if (g.call(k) === "[object Array]")
                    if (!u)
                        e.push.apply(e, k);
                    else if (d && d.nodeType === 1)
                        for (t = 0; k[t] != null; t++)
                            k[t] && (k[t] === !0 || k[t].nodeType === 1 && m.contains(d, k[t])) && e.push(j[t]);
                    else
                        for (t = 0; k[t] != null; t++)
                            k[t] && k[t].nodeType === 1 && e.push(j[t]);
                else
                    s(k, e);
                l && (m(l, h, e, f),
                m.uniqueSort(e));
                return e
            };
            m.uniqueSort = function(a) {
                if (u) {
                    h = i,
                    a.sort(u);
                    if (h)
                        for (var b = 1; b < a.length; b++)
                            a[b] === a[b - 1] && a.splice(b--, 1)
                }
                return a
            }
            ,
            m.matches = function(a, b) {
                return m(a, null, null, b)
            }
            ,
            m.matchesSelector = function(a, b) {
                return m(b, null, null, [a]).length > 0
            }
            ,
            m.find = function(a, b, c) {
                var d, e, f, g, h, i;
                if (!a)
                    return [];
                for (e = 0,
                f = o.order.length; e < f; e++) {
                    h = o.order[e];
                    if (g = o.leftMatch[h].exec(a)) {
                        i = g[1],
                        g.splice(1, 1);
                        if (i.substr(i.length - 1) !== "\\") {
                            g[1] = (g[1] || "").replace(j, ""),
                            d = o.find[h](g, b, c);
                            if (d != null) {
                                a = a.replace(o.match[h], "");
                                break
                            }
                        }
                    }
                }
                d || (d = typeof b.getElementsByTagName != "undefined" ? b.getElementsByTagName("*") : []);
                return {
                    set: d,
                    expr: a
                }
            }
            ,
            m.filter = function(a, c, d, e) {
                var f, g, h, i, j, k, l, n, p, q = a, r = [], s = c, t = c && c[0] && m.isXML(c[0]);
                while (a && c.length) {
                    for (h in o.filter)
                        if ((f = o.leftMatch[h].exec(a)) != null && f[2]) {
                            k = o.filter[h],
                            l = f[1],
                            g = !1,
                            f.splice(1, 1);
                            if (l.substr(l.length - 1) === "\\")
                                continue;
                            s === r && (r = []);
                            if (o.preFilter[h]) {
                                f = o.preFilter[h](f, s, d, r, e, t);
                                if (!f)
                                    g = i = !0;
                                else if (f === !0)
                                    continue
                            }
                            if (f)
                                for (n = 0; (j = s[n]) != null; n++)
                                    j && (i = k(j, f, n, s),
                                    p = e ^ i,
                                    d && i != null ? p ? g = !0 : s[n] = !1 : p && (r.push(j),
                                    g = !0));
                            if (i !== b) {
                                d || (s = r),
                                a = a.replace(o.match[h], "");
                                if (!g)
                                    return [];
                                break
                            }
                        }
                    if (a === q)
                        if (g == null)
                            m.error(a);
                        else
                            break;
                    q = a
                }
                return s
            }
            ,
            m.error = function(a) {
                throw new Error("Syntax error, unrecognized expression: " + a)
            }
            ;
            var n = m.getText = function(a) {
                var b, c, d = a.nodeType, e = "";
                if (d) {
                    if (d === 1 || d === 9) {
                        if (typeof a.textContent == "string")
                            return a.textContent;
                        if (typeof a.innerText == "string")
                            return a.innerText.replace(k, "");
                        for (a = a.firstChild; a; a = a.nextSibling)
                            e += n(a)
                    } else if (d === 3 || d === 4)
                        return a.nodeValue
                } else
                    for (b = 0; c = a[b]; b++)
                        c.nodeType !== 8 && (e += n(c));
                return e
            }
              , o = m.selectors = {
                order: ["ID", "NAME", "TAG"],
                match: {
                    ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                    CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                    NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                    ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                    TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                    CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                    POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                    PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                },
                leftMatch: {},
                attrMap: {
                    "class": "className",
                    "for": "htmlFor"
                },
                attrHandle: {
                    href: function(a) {
                        return a.getAttribute("href")
                    },
                    type: function(a) {
                        return a.getAttribute("type")
                    }
                },
                relative: {
                    "+": function(a, b) {
                        var c = typeof b == "string"
                          , d = c && !l.test(b)
                          , e = c && !d;
                        d && (b = b.toLowerCase());
                        for (var f = 0, g = a.length, h; f < g; f++)
                            if (h = a[f]) {
                                while ((h = h.previousSibling) && h.nodeType !== 1)
                                    ;
                                a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b
                            }
                        e && m.filter(b, a, !0)
                    },
                    ">": function(a, b) {
                        var c, d = typeof b == "string", e = 0, f = a.length;
                        if (d && !l.test(b)) {
                            b = b.toLowerCase();
                            for (; e < f; e++) {
                                c = a[e];
                                if (c) {
                                    var g = c.parentNode;
                                    a[e] = g.nodeName.toLowerCase() === b ? g : !1
                                }
                            }
                        } else {
                            for (; e < f; e++)
                                c = a[e],
                                c && (a[e] = d ? c.parentNode : c.parentNode === b);
                            d && m.filter(b, a, !0)
                        }
                    },
                    "": function(a, b, c) {
                        var d, f = e++, g = x;
                        typeof b == "string" && !l.test(b) && (b = b.toLowerCase(),
                        d = b,
                        g = w),
                        g("parentNode", b, f, a, d, c)
                    },
                    "~": function(a, b, c) {
                        var d, f = e++, g = x;
                        typeof b == "string" && !l.test(b) && (b = b.toLowerCase(),
                        d = b,
                        g = w),
                        g("previousSibling", b, f, a, d, c)
                    }
                },
                find: {
                    ID: function(a, b, c) {
                        if (typeof b.getElementById != "undefined" && !c) {
                            var d = b.getElementById(a[1]);
                            return d && d.parentNode ? [d] : []
                        }
                    },
                    NAME: function(a, b) {
                        if (typeof b.getElementsByName != "undefined") {
                            var c = []
                              , d = b.getElementsByName(a[1]);
                            for (var e = 0, f = d.length; e < f; e++)
                                d[e].getAttribute("name") === a[1] && c.push(d[e]);
                            return c.length === 0 ? null : c
                        }
                    },
                    TAG: function(a, b) {
                        if (typeof b.getElementsByTagName != "undefined")
                            return b.getElementsByTagName(a[1])
                    }
                },
                preFilter: {
                    CLASS: function(a, b, c, d, e, f) {
                        a = " " + a[1].replace(j, "") + " ";
                        if (f)
                            return a;
                        for (var g = 0, h; (h = b[g]) != null; g++)
                            h && (e ^ (h.className && (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[g] = !1));
                        return !1
                    },
                    ID: function(a) {
                        return a[1].replace(j, "")
                    },
                    TAG: function(a, b) {
                        return a[1].replace(j, "").toLowerCase()
                    },
                    CHILD: function(a) {
                        if (a[1] === "nth") {
                            a[2] || m.error(a[0]),
                            a[2] = a[2].replace(/^\+|\s*/g, "");
                            var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                            a[2] = b[1] + (b[2] || 1) - 0,
                            a[3] = b[3] - 0
                        } else
                            a[2] && m.error(a[0]);
                        a[0] = e++;
                        return a
                    },
                    ATTR: function(a, b, c, d, e, f) {
                        var g = a[1] = a[1].replace(j, "");
                        !f && o.attrMap[g] && (a[1] = o.attrMap[g]),
                        a[4] = (a[4] || a[5] || "").replace(j, ""),
                        a[2] === "~=" && (a[4] = " " + a[4] + " ");
                        return a
                    },
                    PSEUDO: function(b, c, d, e, f) {
                        if (b[1] === "not")
                            if ((a.exec(b[3]) || "").length > 1 || /^\w/.test(b[3]))
                                b[3] = m(b[3], null, null, c);
                            else {
                                var g = m.filter(b[3], c, d, !0 ^ f);
                                d || e.push.apply(e, g);
                                return !1
                            }
                        else if (o.match.POS.test(b[0]) || o.match.CHILD.test(b[0]))
                            return !0;
                        return b
                    },
                    POS: function(a) {
                        a.unshift(!0);
                        return a
                    }
                },
                filters: {
                    enabled: function(a) {
                        return a.disabled === !1 && a.type !== "hidden"
                    },
                    disabled: function(a) {
                        return a.disabled === !0
                    },
                    checked: function(a) {
                        return a.checked === !0
                    },
                    selected: function(a) {
                        a.parentNode && a.parentNode.selectedIndex;
                        return a.selected === !0
                    },
                    parent: function(a) {
                        return !!a.firstChild
                    },
                    empty: function(a) {
                        return !a.firstChild
                    },
                    has: function(a, b, c) {
                        return !!m(c[3], a).length
                    },
                    header: function(a) {
                        return /h\d/i.test(a.nodeName)
                    },
                    text: function(a) {
                        var b = a.getAttribute("type")
                          , c = a.type;
                        return a.nodeName.toLowerCase() === "input" && "text" === c && (b === c || b === null)
                    },
                    radio: function(a) {
                        return a.nodeName.toLowerCase() === "input" && "radio" === a.type
                    },
                    checkbox: function(a) {
                        return a.nodeName.toLowerCase() === "input" && "checkbox" === a.type
                    },
                    file: function(a) {
                        return a.nodeName.toLowerCase() === "input" && "file" === a.type
                    },
                    password: function(a) {
                        return a.nodeName.toLowerCase() === "input" && "password" === a.type
                    },
                    submit: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return (b === "input" || b === "button") && "submit" === a.type
                    },
                    image: function(a) {
                        return a.nodeName.toLowerCase() === "input" && "image" === a.type
                    },
                    reset: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return (b === "input" || b === "button") && "reset" === a.type
                    },
                    button: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return b === "input" && "button" === a.type || b === "button"
                    },
                    input: function(a) {
                        return /input|select|textarea|button/i.test(a.nodeName)
                    },
                    focus: function(a) {
                        return a === a.ownerDocument.activeElement
                    }
                },
                setFilters: {
                    first: function(a, b) {
                        return b === 0
                    },
                    last: function(a, b, c, d) {
                        return b === d.length - 1
                    },
                    even: function(a, b) {
                        return b % 2 === 0
                    },
                    odd: function(a, b) {
                        return b % 2 === 1
                    },
                    lt: function(a, b, c) {
                        return b < c[3] - 0
                    },
                    gt: function(a, b, c) {
                        return b > c[3] - 0
                    },
                    nth: function(a, b, c) {
                        return c[3] - 0 === b
                    },
                    eq: function(a, b, c) {
                        return c[3] - 0 === b
                    }
                },
                filter: {
                    PSEUDO: function(a, b, c, d) {
                        var e = b[1]
                          , f = o.filters[e];
                        if (f)
                            return f(a, c, b, d);
                        if (e === "contains")
                            return (a.textContent || a.innerText || n([a]) || "").indexOf(b[3]) >= 0;
                        if (e === "not") {
                            var g = b[3];
                            for (var h = 0, i = g.length; h < i; h++)
                                if (g[h] === a)
                                    return !1;
                            return !0
                        }
                        m.error(e)
                    },
                    CHILD: function(a, b) {
                        var c, e, f, g, h, i, j, k = b[1], l = a;
                        switch (k) {
                        case "only":
                        case "first":
                            while (l = l.previousSibling)
                                if (l.nodeType === 1)
                                    return !1;
                            if (k === "first")
                                return !0;
                            l = a;
                        case "last":
                            while (l = l.nextSibling)
                                if (l.nodeType === 1)
                                    return !1;
                            return !0;
                        case "nth":
                            c = b[2],
                            e = b[3];
                            if (c === 1 && e === 0)
                                return !0;
                            f = b[0],
                            g = a.parentNode;
                            if (g && (g[d] !== f || !a.nodeIndex)) {
                                i = 0;
                                for (l = g.firstChild; l; l = l.nextSibling)
                                    l.nodeType === 1 && (l.nodeIndex = ++i);
                                g[d] = f
                            }
                            j = a.nodeIndex - e;
                            return c === 0 ? j === 0 : j % c === 0 && j / c >= 0
                        }
                    },
                    ID: function(a, b) {
                        return a.nodeType === 1 && a.getAttribute("id") === b
                    },
                    TAG: function(a, b) {
                        return b === "*" && a.nodeType === 1 || !!a.nodeName && a.nodeName.toLowerCase() === b
                    },
                    CLASS: function(a, b) {
                        return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
                    },
                    ATTR: function(a, b) {
                        var c = b[1]
                          , d = m.attr ? m.attr(a, c) : o.attrHandle[c] ? o.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c)
                          , e = d + ""
                          , f = b[2]
                          , g = b[4];
                        return d == null ? f === "!=" : !f && m.attr ? d != null : f === "=" ? e === g : f === "*=" ? e.indexOf(g) >= 0 : f === "~=" ? (" " + e + " ").indexOf(g) >= 0 : g ? f === "!=" ? e !== g : f === "^=" ? e.indexOf(g) === 0 : f === "$=" ? e.substr(e.length - g.length) === g : f === "|=" ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && d !== !1
                    },
                    POS: function(a, b, c, d) {
                        var e = b[2]
                          , f = o.setFilters[e];
                        if (f)
                            return f(a, c, b, d)
                    }
                }
            }
              , p = o.match.POS
              , q = function(a, b) {
                return "\\" + (b - 0 + 1)
            };
            for (var r in o.match)
                o.match[r] = new RegExp(o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source),
                o.leftMatch[r] = new RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[r].source.replace(/\\(\d+)/g, q));
            var s = function(a, b) {
                a = Array.prototype.slice.call(a, 0);
                if (b) {
                    b.push.apply(b, a);
                    return b
                }
                return a
            };
            try {
                Array.prototype.slice.call(c.documentElement.childNodes, 0)[0].nodeType
            } catch (t) {
                s = function(a, b) {
                    var c = 0
                      , d = b || [];
                    if (g.call(a) === "[object Array]")
                        Array.prototype.push.apply(d, a);
                    else if (typeof a.length == "number")
                        for (var e = a.length; c < e; c++)
                            d.push(a[c]);
                    else
                        for (; a[c]; c++)
                            d.push(a[c]);
                    return d
                }
            }
            var u, v;
            c.documentElement.compareDocumentPosition ? u = function(a, b) {
                if (a === b) {
                    h = !0;
                    return 0
                }
                if (!a.compareDocumentPosition || !b.compareDocumentPosition)
                    return a.compareDocumentPosition ? -1 : 1;
                return a.compareDocumentPosition(b) & 4 ? -1 : 1
            }
            : (u = function(a, b) {
                if (a === b) {
                    h = !0;
                    return 0
                }
                if (a.sourceIndex && b.sourceIndex)
                    return a.sourceIndex - b.sourceIndex;
                var c, d, e = [], f = [], g = a.parentNode, i = b.parentNode, j = g;
                if (g === i)
                    return v(a, b);
                if (!g)
                    return -1;
                if (!i)
                    return 1;
                while (j)
                    e.unshift(j),
                    j = j.parentNode;
                j = i;
                while (j)
                    f.unshift(j),
                    j = j.parentNode;
                c = e.length,
                d = f.length;
                for (var k = 0; k < c && k < d; k++)
                    if (e[k] !== f[k])
                        return v(e[k], f[k]);
                return k === c ? v(a, f[k], -1) : v(e[k], b, 1)
            }
            ,
            v = function(a, b, c) {
                if (a === b)
                    return c;
                var d = a.nextSibling;
                while (d) {
                    if (d === b)
                        return -1;
                    d = d.nextSibling
                }
                return 1
            }
            ),
            function() {
                var a = c.createElement("div")
                  , d = "script" + (new Date).getTime()
                  , e = c.documentElement;
                a.innerHTML = "<a name='" + d + "'/>",
                e.insertBefore(a, e.firstChild),
                c.getElementById(d) && (o.find.ID = function(a, c, d) {
                    if (typeof c.getElementById != "undefined" && !d) {
                        var e = c.getElementById(a[1]);
                        return e ? e.id === a[1] || typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b : []
                    }
                }
                ,
                o.filter.ID = function(a, b) {
                    var c = typeof a.getAttributeNode != "undefined" && a.getAttributeNode("id");
                    return a.nodeType === 1 && c && c.nodeValue === b
                }
                ),
                e.removeChild(a),
                e = a = null
            }(),
            function() {
                var a = c.createElement("div");
                a.appendChild(c.createComment("")),
                a.getElementsByTagName("*").length > 0 && (o.find.TAG = function(a, b) {
                    var c = b.getElementsByTagName(a[1]);
                    if (a[1] === "*") {
                        var d = [];
                        for (var e = 0; c[e]; e++)
                            c[e].nodeType === 1 && d.push(c[e]);
                        c = d
                    }
                    return c
                }
                ),
                a.innerHTML = "<a href='#'></a>",
                a.firstChild && typeof a.firstChild.getAttribute != "undefined" && a.firstChild.getAttribute("href") !== "#" && (o.attrHandle.href = function(a) {
                    return a.getAttribute("href", 2)
                }
                ),
                a = null
            }(),
            c.querySelectorAll && function() {
                var a = m
                  , b = c.createElement("div")
                  , d = "__sizzle__";
                b.innerHTML = "<p class='TEST'></p>";
                if (!b.querySelectorAll || b.querySelectorAll(".TEST").length !== 0) {
                    m = function(b, e, f, g) {
                        e = e || c;
                        if (!g && !m.isXML(e)) {
                            var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                            if (h && (e.nodeType === 1 || e.nodeType === 9)) {
                                if (h[1])
                                    return s(e.getElementsByTagName(b), f);
                                if (h[2] && o.find.CLASS && e.getElementsByClassName)
                                    return s(e.getElementsByClassName(h[2]), f)
                            }
                            if (e.nodeType === 9) {
                                if (b === "body" && e.body)
                                    return s([e.body], f);
                                if (h && h[3]) {
                                    var i = e.getElementById(h[3]);
                                    if (!i || !i.parentNode)
                                        return s([], f);
                                    if (i.id === h[3])
                                        return s([i], f)
                                }
                                try {
                                    return s(e.querySelectorAll(b), f)
                                } catch (j) {}
                            } else if (e.nodeType === 1 && e.nodeName.toLowerCase() !== "object") {
                                var k = e
                                  , l = e.getAttribute("id")
                                  , n = l || d
                                  , p = e.parentNode
                                  , q = /^\s*[+~]/.test(b);
                                l ? n = n.replace(/'/g, "\\$&") : e.setAttribute("id", n),
                                q && p && (e = e.parentNode);
                                try {
                                    if (!q || p)
                                        return s(e.querySelectorAll("[id='" + n + "'] " + b), f)
                                } catch (r) {} finally {
                                    l || k.removeAttribute("id")
                                }
                            }
                        }
                        return a(b, e, f, g)
                    }
                    ;
                    for (var e in a)
                        m[e] = a[e];
                    b = null
                }
            }(),
            function() {
                var a = c.documentElement
                  , b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
                if (b) {
                    var d = !b.call(c.createElement("div"), "div")
                      , e = !1;
                    try {
                        b.call(c.documentElement, "[test!='']:sizzle")
                    } catch (f) {
                        e = !0
                    }
                    m.matchesSelector = function(a, c) {
                        c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                        if (!m.isXML(a))
                            try {
                                if (e || !o.match.PSEUDO.test(c) && !/!=/.test(c)) {
                                    var f = b.call(a, c);
                                    if (f || !d || a.document && a.document.nodeType !== 11)
                                        return f
                                }
                            } catch (g) {}
                        return m(c, null, null, [a]).length > 0
                    }
                }
            }(),
            function() {
                var a = c.createElement("div");
                a.innerHTML = "<div class='test e'></div><div class='test'></div>";
                if (!!a.getElementsByClassName && a.getElementsByClassName("e").length !== 0) {
                    a.lastChild.className = "e";
                    if (a.getElementsByClassName("e").length === 1)
                        return;
                    o.order.splice(1, 0, "CLASS"),
                    o.find.CLASS = function(a, b, c) {
                        if (typeof b.getElementsByClassName != "undefined" && !c)
                            return b.getElementsByClassName(a[1])
                    }
                    ,
                    a = null
                }
            }(),
            c.documentElement.contains ? m.contains = function(a, b) {
                return a !== b && (a.contains ? a.contains(b) : !0)
            }
            : c.documentElement.compareDocumentPosition ? m.contains = function(a, b) {
                return !!(a.compareDocumentPosition(b) & 16)
            }
            : m.contains = function() {
                return !1
            }
            ,
            m.isXML = function(a) {
                var b = (a ? a.ownerDocument || a : 0).documentElement;
                return b ? b.nodeName !== "HTML" : !1
            }
            ;
            var y = function(a, b, c) {
                var d, e = [], f = "", g = b.nodeType ? [b] : b;
                while (d = o.match.PSEUDO.exec(a))
                    f += d[0],
                    a = a.replace(o.match.PSEUDO, "");
                a = o.relative[a] ? a + "*" : a;
                for (var h = 0, i = g.length; h < i; h++)
                    m(a, g[h], e, c);
                return m.filter(f, e)
            };
            m.attr = f.attr,
            m.selectors.attrMap = {},
            f.find = m,
            f.expr = m.selectors,
            f.expr[":"] = f.expr.filters,
            f.unique = m.uniqueSort,
            f.text = m.getText,
            f.isXMLDoc = m.isXML,
            f.contains = m.contains
        }();
        var L = /Until$/
          , M = /^(?:parents|prevUntil|prevAll)/
          , N = /,/
          , O = /^.[^:#\[\.,]*$/
          , P = Array.prototype.slice
          , Q = f.expr.match.POS
          , R = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        f.fn.extend({
            find: function(a) {
                var b = this, c, d;
                if (typeof a != "string")
                    return f(a).filter(function() {
                        for (c = 0,
                        d = b.length; c < d; c++)
                            if (f.contains(b[c], this))
                                return !0
                    });
                var e = this.pushStack("", "find", a), g, h, i;
                for (c = 0,
                d = this.length; c < d; c++) {
                    g = e.length,
                    f.find(a, this[c], e);
                    if (c > 0)
                        for (h = g; h < e.length; h++)
                            for (i = 0; i < g; i++)
                                if (e[i] === e[h]) {
                                    e.splice(h--, 1);
                                    break
                                }
                }
                return e
            },
            has: function(a) {
                var b = f(a);
                return this.filter(function() {
                    for (var a = 0, c = b.length; a < c; a++)
                        if (f.contains(this, b[a]))
                            return !0
                })
            },
            not: function(a) {
                return this.pushStack(T(this, a, !1), "not", a)
            },
            filter: function(a) {
                return this.pushStack(T(this, a, !0), "filter", a)
            },
            is: function(a) {
                return !!a && (typeof a == "string" ? Q.test(a) ? f(a, this.context).index(this[0]) >= 0 : f.filter(a, this).length > 0 : this.filter(a).length > 0)
            },
            closest: function(a, b) {
                var c = [], d, e, g = this[0];
                if (f.isArray(a)) {
                    var h = 1;
                    while (g && g.ownerDocument && g !== b) {
                        for (d = 0; d < a.length; d++)
                            f(g).is(a[d]) && c.push({
                                selector: a[d],
                                elem: g,
                                level: h
                            });
                        g = g.parentNode,
                        h++
                    }
                    return c
                }
                var i = Q.test(a) || typeof a != "string" ? f(a, b || this.context) : 0;
                for (d = 0,
                e = this.length; d < e; d++) {
                    g = this[d];
                    while (g) {
                        if (i ? i.index(g) > -1 : f.find.matchesSelector(g, a)) {
                            c.push(g);
                            break
                        }
                        g = g.parentNode;
                        if (!g || !g.ownerDocument || g === b || g.nodeType === 11)
                            break
                    }
                }
                c = c.length > 1 ? f.unique(c) : c;
                return this.pushStack(c, "closest", a)
            },
            index: function(a) {
                if (!a)
                    return this[0] && this[0].parentNode ? this.prevAll().length : -1;
                if (typeof a == "string")
                    return f.inArray(this[0], f(a));
                return f.inArray(a.jquery ? a[0] : a, this)
            },
            add: function(a, b) {
                var c = typeof a == "string" ? f(a, b) : f.makeArray(a && a.nodeType ? [a] : a)
                  , d = f.merge(this.get(), c);
                return this.pushStack(S(c[0]) || S(d[0]) ? d : f.unique(d))
            },
            andSelf: function() {
                return this.add(this.prevObject)
            }
        }),
        f.each({
            parent: function(a) {
                var b = a.parentNode;
                return b && b.nodeType !== 11 ? b : null
            },
            parents: function(a) {
                return f.dir(a, "parentNode")
            },
            parentsUntil: function(a, b, c) {
                return f.dir(a, "parentNode", c)
            },
            next: function(a) {
                return f.nth(a, 2, "nextSibling")
            },
            prev: function(a) {
                return f.nth(a, 2, "previousSibling")
            },
            nextAll: function(a) {
                return f.dir(a, "nextSibling")
            },
            prevAll: function(a) {
                return f.dir(a, "previousSibling")
            },
            nextUntil: function(a, b, c) {
                return f.dir(a, "nextSibling", c)
            },
            prevUntil: function(a, b, c) {
                return f.dir(a, "previousSibling", c)
            },
            siblings: function(a) {
                return f.sibling(a.parentNode.firstChild, a)
            },
            children: function(a) {
                return f.sibling(a.firstChild)
            },
            contents: function(a) {
                return f.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : f.makeArray(a.childNodes)
            }
        }, function(a, b) {
            f.fn[a] = function(c, d) {
                var e = f.map(this, b, c);
                L.test(a) || (d = c),
                d && typeof d == "string" && (e = f.filter(d, e)),
                e = this.length > 1 && !R[a] ? f.unique(e) : e,
                (this.length > 1 || N.test(d)) && M.test(a) && (e = e.reverse());
                return this.pushStack(e, a, P.call(arguments).join(","))
            }
        }),
        f.extend({
            filter: function(a, b, c) {
                c && (a = ":not(" + a + ")");
                return b.length === 1 ? f.find.matchesSelector(b[0], a) ? [b[0]] : [] : f.find.matches(a, b)
            },
            dir: function(a, c, d) {
                var e = []
                  , g = a[c];
                while (g && g.nodeType !== 9 && (d === b || g.nodeType !== 1 || !f(g).is(d)))
                    g.nodeType === 1 && e.push(g),
                    g = g[c];
                return e
            },
            nth: function(a, b, c, d) {
                b = b || 1;
                var e = 0;
                for (; a; a = a[c])
                    if (a.nodeType === 1 && ++e === b)
                        break;
                return a
            },
            sibling: function(a, b) {
                var c = [];
                for (; a; a = a.nextSibling)
                    a.nodeType === 1 && a !== b && c.push(a);
                return c
            }
        });
        var V = "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
          , W = / jQuery\d+="(?:\d+|null)"/g
          , X = /^\s+/
          , Y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig
          , Z = /<([\w:]+)/
          , $ = /<tbody/i
          , _ = /<|&#?\w+;/
          , ba = /<(?:script|style)/i
          , bb = /<(?:script|object|embed|option|style)/i
          , bc = new RegExp("<(?:" + V + ")","i")
          , bd = /checked\s*(?:[^=]|=\s*.checked.)/i
          , be = /\/(java|ecma)script/i
          , bf = /^\s*<!(?:\[CDATA\[|\-\-)/
          , bg = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        }
          , bh = U(c);
        bg.optgroup = bg.option,
        bg.tbody = bg.tfoot = bg.colgroup = bg.caption = bg.thead,
        bg.th = bg.td,
        f.support.htmlSerialize || (bg._default = [1, "div<div>", "</div>"]),
        f.fn.extend({
            text: function(a) {
                if (f.isFunction(a))
                    return this.each(function(b) {
                        var c = f(this);
                        c.text(a.call(this, b, c.text()))
                    });
                if (typeof a != "object" && a !== b)
                    return this.empty().append((this[0] && this[0].ownerDocument || c).createTextNode(a));
                return f.text(this)
            },
            wrapAll: function(a) {
                if (f.isFunction(a))
                    return this.each(function(b) {
                        f(this).wrapAll(a.call(this, b))
                    });
                if (this[0]) {
                    var b = f(a, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && b.insertBefore(this[0]),
                    b.map(function() {
                        var a = this;
                        while (a.firstChild && a.firstChild.nodeType === 1)
                            a = a.firstChild;
                        return a
                    }).append(this)
                }
                return this
            },
            wrapInner: function(a) {
                if (f.isFunction(a))
                    return this.each(function(b) {
                        f(this).wrapInner(a.call(this, b))
                    });
                return this.each(function() {
                    var b = f(this)
                      , c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a)
                })
            },
            wrap: function(a) {
                var b = f.isFunction(a);
                return this.each(function(c) {
                    f(this).wrapAll(b ? a.call(this, c) : a)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    f.nodeName(this, "body") || f(this).replaceWith(this.childNodes)
                }).end()
            },
            append: function() {
                return this.domManip(arguments, !0, function(a) {
                    this.nodeType === 1 && this.appendChild(a)
                })
            },
            prepend: function() {
                return this.domManip(arguments, !0, function(a) {
                    this.nodeType === 1 && this.insertBefore(a, this.firstChild)
                })
            },
            before: function() {
                if (this[0] && this[0].parentNode)
                    return this.domManip(arguments, !1, function(a) {
                        this.parentNode.insertBefore(a, this)
                    });
                if (arguments.length) {
                    var a = f.clean(arguments);
                    a.push.apply(a, this.toArray());
                    return this.pushStack(a, "before", arguments)
                }
            },
            after: function() {
                if (this[0] && this[0].parentNode)
                    return this.domManip(arguments, !1, function(a) {
                        this.parentNode.insertBefore(a, this.nextSibling)
                    });
                if (arguments.length) {
                    var a = this.pushStack(this, "after", arguments);
                    a.push.apply(a, f.clean(arguments));
                    return a
                }
            },
            remove: function(a, b) {
                for (var c = 0, d; (d = this[c]) != null; c++)
                    if (!a || f.filter(a, [d]).length)
                        !b && d.nodeType === 1 && (f.cleanData(d.getElementsByTagName("*")),
                        f.cleanData([d])),
                        d.parentNode && d.parentNode.removeChild(d);
                return this
            },
            empty: function() {
                for (var a = 0, b; (b = this[a]) != null; a++) {
                    b.nodeType === 1 && f.cleanData(b.getElementsByTagName("*"));
                    while (b.firstChild)
                        b.removeChild(b.firstChild)
                }
                return this
            },
            clone: function(a, b) {
                a = a == null ? !1 : a,
                b = b == null ? a : b;
                return this.map(function() {
                    return f.clone(this, a, b)
                })
            },
            html: function(a) {
                if (a === b)
                    return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(W, "") : null;
                if (typeof a == "string" && !ba.test(a) && (f.support.leadingWhitespace || !X.test(a)) && !bg[(Z.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(Y, "<$1></$2>");
                    try {
                        for (var c = 0, d = this.length; c < d; c++)
                            this[c].nodeType === 1 && (f.cleanData(this[c].getElementsByTagName("*")),
                            this[c].innerHTML = a)
                    } catch (e) {
                        this.empty().append(a)
                    }
                } else
                    f.isFunction(a) ? this.each(function(b) {
                        var c = f(this);
                        c.html(a.call(this, b, c.html()))
                    }) : this.empty().append(a);
                return this
            },
            replaceWith: function(a) {
                if (this[0] && this[0].parentNode) {
                    if (f.isFunction(a))
                        return this.each(function(b) {
                            var c = f(this)
                              , d = c.html();
                            c.replaceWith(a.call(this, b, d))
                        });
                    typeof a != "string" && (a = f(a).detach());
                    return this.each(function() {
                        var b = this.nextSibling
                          , c = this.parentNode;
                        f(this).remove(),
                        b ? f(b).before(a) : f(c).append(a)
                    })
                }
                return this.length ? this.pushStack(f(f.isFunction(a) ? a() : a), "replaceWith", a) : this
            },
            detach: function(a) {
                return this.remove(a, !0)
            },
            domManip: function(a, c, d) {
                var e, g, h, i, j = a[0], k = [];
                if (!f.support.checkClone && arguments.length === 3 && typeof j == "string" && bd.test(j))
                    return this.each(function() {
                        f(this).domManip(a, c, d, !0)
                    });
                if (f.isFunction(j))
                    return this.each(function(e) {
                        var g = f(this);
                        a[0] = j.call(this, e, c ? g.html() : b),
                        g.domManip(a, c, d)
                    });
                if (this[0]) {
                    i = j && j.parentNode,
                    f.support.parentNode && i && i.nodeType === 11 && i.childNodes.length === this.length ? e = {
                        fragment: i
                    } : e = f.buildFragment(a, this, k),
                    h = e.fragment,
                    h.childNodes.length === 1 ? g = h = h.firstChild : g = h.firstChild;
                    if (g) {
                        c = c && f.nodeName(g, "tr");
                        for (var l = 0, m = this.length, n = m - 1; l < m; l++)
                            d.call(c ? bi(this[l], g) : this[l], e.cacheable || m > 1 && l < n ? f.clone(h, !0, !0) : h)
                    }
                    k.length && f.each(k, bp)
                }
                return this
            }
        }),
        f.buildFragment = function(a, b, d) {
            var e, g, h, i, j = a[0];
            b && b[0] && (i = b[0].ownerDocument || b[0]),
            i.createDocumentFragment || (i = c),
            a.length === 1 && typeof j == "string" && j.length < 512 && i === c && j.charAt(0) === "<" && !bb.test(j) && (f.support.checkClone || !bd.test(j)) && (f.support.html5Clone || !bc.test(j)) && (g = !0,
            h = f.fragments[j],
            h && h !== 1 && (e = h)),
            e || (e = i.createDocumentFragment(),
            f.clean(a, i, e, d)),
            g && (f.fragments[j] = h ? e : 1);
            return {
                fragment: e,
                cacheable: g
            }
        }
        ,
        f.fragments = {},
        f.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(a, b) {
            f.fn[a] = function(c) {
                var d = []
                  , e = f(c)
                  , g = this.length === 1 && this[0].parentNode;
                if (g && g.nodeType === 11 && g.childNodes.length === 1 && e.length === 1) {
                    e[b](this[0]);
                    return this
                }
                for (var h = 0, i = e.length; h < i; h++) {
                    var j = (h > 0 ? this.clone(!0) : this).get();
                    f(e[h])[b](j),
                    d = d.concat(j)
                }
                return this.pushStack(d, a, e.selector)
            }
        }),
        f.extend({
            clone: function(a, b, c) {
                var d, e, g, h = f.support.html5Clone || !bc.test("<" + a.nodeName) ? a.cloneNode(!0) : bo(a);
                if ((!f.support.noCloneEvent || !f.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !f.isXMLDoc(a)) {
                    bk(a, h),
                    d = bl(a),
                    e = bl(h);
                    for (g = 0; d[g]; ++g)
                        e[g] && bk(d[g], e[g])
                }
                if (b) {
                    bj(a, h);
                    if (c) {
                        d = bl(a),
                        e = bl(h);
                        for (g = 0; d[g]; ++g)
                            bj(d[g], e[g])
                    }
                }
                d = e = null;
                return h
            },
            clean: function(a, b, d, e) {
                var g;
                b = b || c,
                typeof b.createElement == "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || c);
                var h = [], i;
                for (var j = 0, k; (k = a[j]) != null; j++) {
                    typeof k == "number" && (k += "");
                    if (!k)
                        continue;
                    if (typeof k == "string")
                        if (!_.test(k))
                            k = b.createTextNode(k);
                        else {
                            k = k.replace(Y, "<$1></$2>");
                            var l = (Z.exec(k) || ["", ""])[1].toLowerCase()
                              , m = bg[l] || bg._default
                              , n = m[0]
                              , o = b.createElement("div");
                            b === c ? bh.appendChild(o) : U(b).appendChild(o),
                            o.innerHTML = m[1] + k + m[2];
                            while (n--)
                                o = o.lastChild;
                            if (!f.support.tbody) {
                                var p = $.test(k)
                                  , q = l === "table" && !p ? o.firstChild && o.firstChild.childNodes : m[1] === "<table>" && !p ? o.childNodes : [];
                                for (i = q.length - 1; i >= 0; --i)
                                    f.nodeName(q[i], "tbody") && !q[i].childNodes.length && q[i].parentNode.removeChild(q[i])
                            }
                            !f.support.leadingWhitespace && X.test(k) && o.insertBefore(b.createTextNode(X.exec(k)[0]), o.firstChild),
                            k = o.childNodes
                        }
                    var r;
                    if (!f.support.appendChecked)
                        if (k[0] && typeof (r = k.length) == "number")
                            for (i = 0; i < r; i++)
                                bn(k[i]);
                        else
                            bn(k);
                    k.nodeType ? h.push(k) : h = f.merge(h, k)
                }
                if (d) {
                    g = function(a) {
                        return !a.type || be.test(a.type)
                    }
                    ;
                    for (j = 0; h[j]; j++)
                        if (e && f.nodeName(h[j], "script") && (!h[j].type || h[j].type.toLowerCase() === "text/javascript"))
                            e.push(h[j].parentNode ? h[j].parentNode.removeChild(h[j]) : h[j]);
                        else {
                            if (h[j].nodeType === 1) {
                                var s = f.grep(h[j].getElementsByTagName("script"), g);
                                h.splice.apply(h, [j + 1, 0].concat(s))
                            }
                            d.appendChild(h[j])
                        }
                }
                return h
            },
            cleanData: function(a) {
                var b, c, d = f.cache, e = f.event.special, g = f.support.deleteExpando;
                for (var h = 0, i; (i = a[h]) != null; h++) {
                    if (i.nodeName && f.noData[i.nodeName.toLowerCase()])
                        continue;
                    c = i[f.expando];
                    if (c) {
                        b = d[c];
                        if (b && b.events) {
                            for (var j in b.events)
                                e[j] ? f.event.remove(i, j) : f.removeEvent(i, j, b.handle);
                            b.handle && (b.handle.elem = null)
                        }
                        g ? delete i[f.expando] : i.removeAttribute && i.removeAttribute(f.expando),
                        delete d[c]
                    }
                }
            }
        });
        var bq = /alpha\([^)]*\)/i, br = /opacity=([^)]*)/, bs = /([A-Z]|^ms)/g, bt = /^-?\d+(?:px)?$/i, bu = /^-?\d/, bv = /^([\-+])=([\-+.\de]+)/, bw = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, bx = ["Left", "Right"], by = ["Top", "Bottom"], bz, bA, bB;
        f.fn.css = function(a, c) {
            if (arguments.length === 2 && c === b)
                return this;
            return f.access(this, a, c, !0, function(a, c, d) {
                return d !== b ? f.style(a, c, d) : f.css(a, c)
            })
        }
        ,
        f.extend({
            cssHooks: {
                opacity: {
                    get: function(a, b) {
                        if (b) {
                            var c = bz(a, "opacity", "opacity");
                            return c === "" ? "1" : c
                        }
                        return a.style.opacity
                    }
                }
            },
            cssNumber: {
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": f.support.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(a, c, d, e) {
                if (!!a && a.nodeType !== 3 && a.nodeType !== 8 && !!a.style) {
                    var g, h, i = f.camelCase(c), j = a.style, k = f.cssHooks[i];
                    c = f.cssProps[i] || i;
                    if (d === b) {
                        if (k && "get"in k && (g = k.get(a, !1, e)) !== b)
                            return g;
                        return j[c]
                    }
                    h = typeof d,
                    h === "string" && (g = bv.exec(d)) && (d = +(g[1] + 1) * +g[2] + parseFloat(f.css(a, c)),
                    h = "number");
                    if (d == null || h === "number" && isNaN(d))
                        return;
                    h === "number" && !f.cssNumber[i] && (d += "px");
                    if (!k || !("set"in k) || (d = k.set(a, d)) !== b)
                        try {
                            j[c] = d
                        } catch (l) {}
                }
            },
            css: function(a, c, d) {
                var e, g;
                c = f.camelCase(c),
                g = f.cssHooks[c],
                c = f.cssProps[c] || c,
                c === "cssFloat" && (c = "float");
                if (g && "get"in g && (e = g.get(a, !0, d)) !== b)
                    return e;
                if (bz)
                    return bz(a, c)
            },
            swap: function(a, b, c) {
                var d = {};
                for (var e in b)
                    d[e] = a.style[e],
                    a.style[e] = b[e];
                c.call(a);
                for (e in b)
                    a.style[e] = d[e]
            }
        }),
        f.curCSS = f.css,
        f.each(["height", "width"], function(a, b) {
            f.cssHooks[b] = {
                get: function(a, c, d) {
                    var e;
                    if (c) {
                        if (a.offsetWidth !== 0)
                            return bC(a, b, d);
                        f.swap(a, bw, function() {
                            e = bC(a, b, d)
                        });
                        return e
                    }
                },
                set: function(a, b) {
                    if (!bt.test(b))
                        return b;
                    b = parseFloat(b);
                    if (b >= 0)
                        return b + "px"
                }
            }
        }),
        f.support.opacity || (f.cssHooks.opacity = {
            get: function(a, b) {
                return br.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
            },
            set: function(a, b) {
                var c = a.style
                  , d = a.currentStyle
                  , e = f.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : ""
                  , g = d && d.filter || c.filter || "";
                c.zoom = 1;
                if (b >= 1 && f.trim(g.replace(bq, "")) === "") {
                    c.removeAttribute("filter");
                    if (d && !d.filter)
                        return
                }
                c.filter = bq.test(g) ? g.replace(bq, e) : g + " " + e
            }
        }),
        f(function() {
            f.support.reliableMarginRight || (f.cssHooks.marginRight = {
                get: function(a, b) {
                    var c;
                    f.swap(a, {
                        display: "inline-block"
                    }, function() {
                        b ? c = bz(a, "margin-right", "marginRight") : c = a.style.marginRight
                    });
                    return c
                }
            })
        }),
        c.defaultView && c.defaultView.getComputedStyle && (bA = function(a, b) {
            var c, d, e;
            b = b.replace(bs, "-$1").toLowerCase(),
            (d = a.ownerDocument.defaultView) && (e = d.getComputedStyle(a, null)) && (c = e.getPropertyValue(b),
            c === "" && !f.contains(a.ownerDocument.documentElement, a) && (c = f.style(a, b)));
            return c
        }
        ),
        c.documentElement.currentStyle && (bB = function(a, b) {
            var c, d, e, f = a.currentStyle && a.currentStyle[b], g = a.style;
            f === null && g && (e = g[b]) && (f = e),
            !bt.test(f) && bu.test(f) && (c = g.left,
            d = a.runtimeStyle && a.runtimeStyle.left,
            d && (a.runtimeStyle.left = a.currentStyle.left),
            g.left = b === "fontSize" ? "1em" : f || 0,
            f = g.pixelLeft + "px",
            g.left = c,
            d && (a.runtimeStyle.left = d));
            return f === "" ? "auto" : f
        }
        ),
        bz = bA || bB,
        f.expr && f.expr.filters && (f.expr.filters.hidden = function(a) {
            var b = a.offsetWidth
              , c = a.offsetHeight;
            return b === 0 && c === 0 || !f.support.reliableHiddenOffsets && (a.style && a.style.display || f.css(a, "display")) === "none"
        }
        ,
        f.expr.filters.visible = function(a) {
            return !f.expr.filters.hidden(a)
        }
        );
        var bD = /%20/g, bE = /\[\]$/, bF = /\r?\n/g, bG = /#.*$/, bH = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, bI = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, bJ = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, bK = /^(?:GET|HEAD)$/, bL = /^\/\//, bM = /\?/, bN = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, bO = /^(?:select|textarea)/i, bP = /\s+/, bQ = /([?&])_=[^&]*/, bR = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, bS = f.fn.load, bT = {}, bU = {}, bV, bW, bX = ["*/"] + ["*"];
        try {
            bV = e.href
        } catch (bY) {
            bV = c.createElement("a"),
            bV.href = "",
            bV = bV.href
        }
        bW = bR.exec(bV.toLowerCase()) || [],
        f.fn.extend({
            load: function(a, c, d) {
                if (typeof a != "string" && bS)
                    return bS.apply(this, arguments);
                if (!this.length)
                    return this;
                var e = a.indexOf(" ");
                if (e >= 0) {
                    var g = a.slice(e, a.length);
                    a = a.slice(0, e)
                }
                var h = "GET";
                c && (f.isFunction(c) ? (d = c,
                c = b) : typeof c == "object" && (c = f.param(c, f.ajaxSettings.traditional),
                h = "POST"));
                var i = this;
                f.ajax({
                    url: a,
                    type: h,
                    dataType: "html",
                    data: c,
                    complete: function(a, b, c) {
                        c = a.responseText,
                        a.isResolved() && (a.done(function(a) {
                            c = a
                        }),
                        i.html(g ? f("<div>").append(c.replace(bN, "")).find(g) : c)),
                        d && i.each(d, [c, b, a])
                    }
                });
                return this
            },
            serialize: function() {
                return f.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    return this.elements ? f.makeArray(this.elements) : this
                }).filter(function() {
                    return this.name && !this.disabled && (this.checked || bO.test(this.nodeName) || bI.test(this.type))
                }).map(function(a, b) {
                    var c = f(this).val();
                    return c == null ? null : f.isArray(c) ? f.map(c, function(a, c) {
                        return {
                            name: b.name,
                            value: a.replace(bF, "\r\n")
                        }
                    }) : {
                        name: b.name,
                        value: c.replace(bF, "\r\n")
                    }
                }).get()
            }
        }),
        f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
            f.fn[b] = function(a) {
                return this.on(b, a)
            }
        }),
        f.each(["get", "post"], function(a, c) {
            f[c] = function(a, d, e, g) {
                f.isFunction(d) && (g = g || e,
                e = d,
                d = b);
                return f.ajax({
                    type: c,
                    url: a,
                    data: d,
                    success: e,
                    dataType: g
                })
            }
        }),
        f.extend({
            getScript: function(a, c) {
                return f.get(a, b, c, "script")
            },
            getJSON: function(a, b, c) {
                return f.get(a, b, c, "json")
            },
            ajaxSetup: function(a, b) {
                b ? b_(a, f.ajaxSettings) : (b = a,
                a = f.ajaxSettings),
                b_(a, b);
                return a
            },
            ajaxSettings: {
                url: bV,
                isLocal: bJ.test(bW[1]),
                global: !0,
                type: "GET",
                contentType: "application/x-www-form-urlencoded",
                processData: !0,
                async: !0,
                accepts: {
                    xml: "application/xml, text/xml",
                    html: "text/html",
                    text: "text/plain",
                    json: "application/json, text/javascript",
                    "*": bX
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText"
                },
                converters: {
                    "* text": a.String,
                    "text html": !0,
                    "text json": f.parseJSON,
                    "text xml": f.parseXML
                },
                flatOptions: {
                    context: !0,
                    url: !0
                }
            },
            ajaxPrefilter: bZ(bT),
            ajaxTransport: bZ(bU),
            ajax: function(a, c) {
                function w(a, c, l, m) {
                    if (s !== 2) {
                        s = 2,
                        q && clearTimeout(q),
                        p = b,
                        n = m || "",
                        v.readyState = a > 0 ? 4 : 0;
                        var o, r, u, w = c, x = l ? cb(d, v, l) : b, y, z;
                        if (a >= 200 && a < 300 || a === 304) {
                            if (d.ifModified) {
                                if (y = v.getResponseHeader("Last-Modified"))
                                    f.lastModified[k] = y;
                                if (z = v.getResponseHeader("Etag"))
                                    f.etag[k] = z
                            }
                            if (a === 304)
                                w = "notmodified",
                                o = !0;
                            else
                                try {
                                    r = cc(d, x),
                                    w = "success",
                                    o = !0
                                } catch (A) {
                                    w = "parsererror",
                                    u = A
                                }
                        } else {
                            u = w;
                            if (!w || a)
                                w = "error",
                                a < 0 && (a = 0)
                        }
                        v.status = a,
                        v.statusText = "" + (c || w),
                        o ? h.resolveWith(e, [r, w, v]) : h.rejectWith(e, [v, w, u]),
                        v.statusCode(j),
                        j = b,
                        t && g.trigger("ajax" + (o ? "Success" : "Error"), [v, d, o ? r : u]),
                        i.fireWith(e, [v, w]),
                        t && (g.trigger("ajaxComplete", [v, d]),
                        --f.active || f.event.trigger("ajaxStop"))
                    }
                }
                typeof a == "object" && (c = a,
                a = b),
                c = c || {};
                var d = f.ajaxSetup({}, c), e = d.context || d, g = e !== d && (e.nodeType || e instanceof f) ? f(e) : f.event, h = f.Deferred(), i = f.Callbacks("once memory"), j = d.statusCode || {}, k, l = {}, m = {}, n, o, p, q, r, s = 0, t, u, v = {
                    readyState: 0,
                    setRequestHeader: function(a, b) {
                        if (!s) {
                            var c = a.toLowerCase();
                            a = m[c] = m[c] || a,
                            l[a] = b
                        }
                        return this
                    },
                    getAllResponseHeaders: function() {
                        return s === 2 ? n : null
                    },
                    getResponseHeader: function(a) {
                        var c;
                        if (s === 2) {
                            if (!o) {
                                o = {};
                                while (c = bH.exec(n))
                                    o[c[1].toLowerCase()] = c[2]
                            }
                            c = o[a.toLowerCase()]
                        }
                        return c === b ? null : c
                    },
                    overrideMimeType: function(a) {
                        s || (d.mimeType = a);
                        return this
                    },
                    abort: function(a) {
                        a = a || "abort",
                        p && p.abort(a),
                        w(0, a);
                        return this
                    }
                };
                h.promise(v),
                v.success = v.done,
                v.error = v.fail,
                v.complete = i.add,
                v.statusCode = function(a) {
                    if (a) {
                        var b;
                        if (s < 2)
                            for (b in a)
                                j[b] = [j[b], a[b]];
                        else
                            b = a[v.status],
                            v.then(b, b)
                    }
                    return this
                }
                ,
                d.url = ((a || d.url) + "").replace(bG, "").replace(bL, bW[1] + "//"),
                d.dataTypes = f.trim(d.dataType || "*").toLowerCase().split(bP),
                d.crossDomain == null && (r = bR.exec(d.url.toLowerCase()),
                d.crossDomain = !(!r || r[1] == bW[1] && r[2] == bW[2] && (r[3] || (r[1] === "http:" ? 80 : 443)) == (bW[3] || (bW[1] === "http:" ? 80 : 443)))),
                d.data && d.processData && typeof d.data != "string" && (d.data = f.param(d.data, d.traditional)),
                b$(bT, d, c, v);
                if (s === 2)
                    return !1;
                t = d.global,
                d.type = d.type.toUpperCase(),
                d.hasContent = !bK.test(d.type),
                t && f.active++ === 0 && f.event.trigger("ajaxStart");
                if (!d.hasContent) {
                    d.data && (d.url += (bM.test(d.url) ? "&" : "?") + d.data,
                    delete d.data),
                    k = d.url;
                    if (d.cache === !1) {
                        var x = f.now()
                          , y = d.url.replace(bQ, "$1_=" + x);
                        d.url = y + (y === d.url ? (bM.test(d.url) ? "&" : "?") + "_=" + x : "")
                    }
                }
                (d.data && d.hasContent && d.contentType !== !1 || c.contentType) && v.setRequestHeader("Content-Type", d.contentType),
                d.ifModified && (k = k || d.url,
                f.lastModified[k] && v.setRequestHeader("If-Modified-Since", f.lastModified[k]),
                f.etag[k] && v.setRequestHeader("If-None-Match", f.etag[k])),
                v.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + (d.dataTypes[0] !== "*" ? ", " + bX + "; q=0.01" : "") : d.accepts["*"]);
                for (u in d.headers)
                    v.setRequestHeader(u, d.headers[u]);
                if (d.beforeSend && (d.beforeSend.call(e, v, d) === !1 || s === 2)) {
                    v.abort();
                    return !1
                }
                for (u in {
                    success: 1,
                    error: 1,
                    complete: 1
                })
                    v[u](d[u]);
                p = b$(bU, d, c, v);
                if (!p)
                    w(-1, "No Transport");
                else {
                    v.readyState = 1,
                    t && g.trigger("ajaxSend", [v, d]),
                    d.async && d.timeout > 0 && (q = setTimeout(function() {
                        v.abort("timeout")
                    }, d.timeout));
                    try {
                        s = 1,
                        p.send(l, w)
                    } catch (z) {
                        if (s < 2)
                            w(-1, z);
                        else
                            throw z
                    }
                }
                return v
            },
            param: function(a, c) {
                var d = []
                  , e = function(a, b) {
                    b = f.isFunction(b) ? b() : b,
                    d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                };
                c === b && (c = f.ajaxSettings.traditional);
                if (f.isArray(a) || a.jquery && !f.isPlainObject(a))
                    f.each(a, function() {
                        e(this.name, this.value)
                    });
                else
                    for (var g in a)
                        ca(g, a[g], c, e);
                return d.join("&").replace(bD, "+")
            }
        }),
        f.extend({
            active: 0,
            lastModified: {},
            etag: {}
        });
        var cd = f.now()
          , ce = /(\=)\?(&|$)|\?\?/i;
        f.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                return f.expando + "_" + cd++
            }
        }),
        f.ajaxPrefilter("json jsonp", function(b, c, d) {
            var e = b.contentType === "application/x-www-form-urlencoded" && typeof b.data == "string";
            if (b.dataTypes[0] === "jsonp" || b.jsonp !== !1 && (ce.test(b.url) || e && ce.test(b.data))) {
                var g, h = b.jsonpCallback = f.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, i = a[h], j = b.url, k = b.data, l = "$1" + h + "$2";
                b.jsonp !== !1 && (j = j.replace(ce, l),
                b.url === j && (e && (k = k.replace(ce, l)),
                b.data === k && (j += (/\?/.test(j) ? "&" : "?") + b.jsonp + "=" + h))),
                b.url = j,
                b.data = k,
                a[h] = function(a) {
                    g = [a]
                }
                ,
                d.always(function() {
                    a[h] = i,
                    g && f.isFunction(i) && a[h](g[0])
                }),
                b.converters["script json"] = function() {
                    g || f.error(h + " was not called");
                    return g[0]
                }
                ,
                b.dataTypes[0] = "json";
                return "script"
            }
        }),
        f.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /javascript|ecmascript/
            },
            converters: {
                "text script": function(a) {
                    f.globalEval(a);
                    return a
                }
            }
        }),
        f.ajaxPrefilter("script", function(a) {
            a.cache === b && (a.cache = !1),
            a.crossDomain && (a.type = "GET",
            a.global = !1)
        }),
        f.ajaxTransport("script", function(a) {
            if (a.crossDomain) {
                var d, e = c.head || c.getElementsByTagName("head")[0] || c.documentElement;
                return {
                    send: function(f, g) {
                        d = c.createElement("script"),
                        d.async = "async",
                        a.scriptCharset && (d.charset = a.scriptCharset),
                        d.src = a.url,
                        d.onload = d.onreadystatechange = function(a, c) {
                            if (c || !d.readyState || /loaded|complete/.test(d.readyState))
                                d.onload = d.onreadystatechange = null,
                                e && d.parentNode && e.removeChild(d),
                                d = b,
                                c || g(200, "success")
                        }
                        ,
                       // e.insertBefore(d, e.firstChild)
                    },
                    abort: function() {
                        d && d.onload(0, 1)
                    }
                }
            }
        });
        var cf = a.ActiveXObject ? function() {
            for (var a in ch)
                ch[a](0, 1)
        }
        : !1, cg = 0, ch;
        f.ajaxSettings.xhr = a.ActiveXObject ? function() {
            return !this.isLocal && ci() || cj()
        }
        : ci,
        function(a) {
            f.extend(f.support, {
                ajax: !!a,
                cors: !!a && "withCredentials"in a
            })
        }(f.ajaxSettings.xhr()),
        f.support.ajax && f.ajaxTransport(function(c) {
            if (!c.crossDomain || f.support.cors) {
                var d;
                return {
                    send: function(e, g) {
                        var h = c.xhr(), i, j;
                        c.username ? h.open(c.type, c.url, c.async, c.username, c.password) : h.open(c.type, c.url, c.async);
                        if (c.xhrFields)
                            for (j in c.xhrFields)
                                h[j] = c.xhrFields[j];
                        c.mimeType && h.overrideMimeType && h.overrideMimeType(c.mimeType),
                        !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (j in e)
                                h.setRequestHeader(j, e[j])
                        } catch (k) {}
                        h.send(c.hasContent && c.data || null),
                        d = function(a, e) {
                            var j, k, l, m, n;
                            try {
                                if (d && (e || h.readyState === 4)) {
                                    d = b,
                                    i && (h.onreadystatechange = f.noop,
                                    cf && delete ch[i]);
                                    if (e)
                                        h.readyState !== 4 && h.abort();
                                    else {
                                        j = h.status,
                                        l = h.getAllResponseHeaders(),
                                        m = {},
                                        n = h.responseXML,
                                        n && n.documentElement && (m.xml = n),
                                        m.text = h.responseText;
                                        try {
                                            k = h.statusText
                                        } catch (o) {
                                            k = ""
                                        }
                                        !j && c.isLocal && !c.crossDomain ? j = m.text ? 200 : 404 : j === 1223 && (j = 204)
                                    }
                                }
                            } catch (p) {
                                e || g(-1, p)
                            }
                            m && g(j, k, m, l)
                        }
                        ,
                        !c.async || h.readyState === 4 ? d() : (i = ++cg,
                        cf && (ch || (ch = {},
                        f(a).unload(cf)),
                        ch[i] = d),
                        h.onreadystatechange = d)
                    },
                    abort: function() {
                        d && d(0, 1)
                    }
                }
            }
        });
        var ck = {}, cl, cm, cn = /^(?:toggle|show|hide)$/, co = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i, cp, cq = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]], cr;
        f.fn.extend({
            show: function(a, b, c) {
                var d, e;
                if (a || a === 0)
                    return this.animate(cu("show", 3), a, b, c);
                for (var g = 0, h = this.length; g < h; g++)
                    d = this[g],
                    d.style && (e = d.style.display,
                    !f._data(d, "olddisplay") && e === "none" && (e = d.style.display = ""),
                    e === "" && f.css(d, "display") === "none" && f._data(d, "olddisplay", cv(d.nodeName)));
                for (g = 0; g < h; g++) {
                    d = this[g];
                    if (d.style) {
                        e = d.style.display;
                        if (e === "" || e === "none")
                            d.style.display = f._data(d, "olddisplay") || ""
                    }
                }
                return this
            },
            hide: function(a, b, c) {
                if (a || a === 0)
                    return this.animate(cu("hide", 3), a, b, c);
                var d, e, g = 0, h = this.length;
                for (; g < h; g++)
                    d = this[g],
                    d.style && (e = f.css(d, "display"),
                    e !== "none" && !f._data(d, "olddisplay") && f._data(d, "olddisplay", e));
                for (g = 0; g < h; g++)
                    this[g].style && (this[g].style.display = "none");
                return this
            },
            _toggle: f.fn.toggle,
            toggle: function(a, b, c) {
                var d = typeof a == "boolean";
                f.isFunction(a) && f.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || d ? this.each(function() {
                    var b = d ? a : f(this).is(":hidden");
                    f(this)[b ? "show" : "hide"]()
                }) : this.animate(cu("toggle", 3), a, b, c);
                return this
            },
            fadeTo: function(a, b, c, d) {
                return this.filter(":hidden").css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                function g() {
                    e.queue === !1 && f._mark(this);
                    var b = f.extend({}, e), c = this.nodeType === 1, d = c && f(this).is(":hidden"), g, h, i, j, k, l, m, n, o;
                    b.animatedProperties = {};
                    for (i in a) {
                        g = f.camelCase(i),
                        i !== g && (a[g] = a[i],
                        delete a[i]),
                        h = a[g],
                        f.isArray(h) ? (b.animatedProperties[g] = h[1],
                        h = a[g] = h[0]) : b.animatedProperties[g] = b.specialEasing && b.specialEasing[g] || b.easing || "swing";
                        if (h === "hide" && d || h === "show" && !d)
                            return b.complete.call(this);
                        c && (g === "height" || g === "width") && (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY],
                        f.css(this, "display") === "inline" && f.css(this, "float") === "none" && (!f.support.inlineBlockNeedsLayout || cv(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1))
                    }
                    b.overflow != null && (this.style.overflow = "hidden");
                    for (i in a)
                        j = new f.fx(this,b,i),
                        h = a[i],
                        cn.test(h) ? (o = f._data(this, "toggle" + i) || (h === "toggle" ? d ? "show" : "hide" : 0),
                        o ? (f._data(this, "toggle" + i, o === "show" ? "hide" : "show"),
                        j[o]()) : j[h]()) : (k = co.exec(h),
                        l = j.cur(),
                        k ? (m = parseFloat(k[2]),
                        n = k[3] || (f.cssNumber[i] ? "" : "px"),
                        n !== "px" && (f.style(this, i, (m || 1) + n),
                        l = (m || 1) / j.cur() * l,
                        f.style(this, i, l + n)),
                        k[1] && (m = (k[1] === "-=" ? -1 : 1) * m + l),
                        j.custom(l, m, n)) : j.custom(l, h, ""));
                    return !0
                }
                var e = f.speed(b, c, d);
                if (f.isEmptyObject(a))
                    return this.each(e.complete, [!1]);
                a = f.extend({}, a);
                return e.queue === !1 ? this.each(g) : this.queue(e.queue, g)
            },
            stop: function(a, c, d) {
                typeof a != "string" && (d = c,
                c = a,
                a = b),
                c && a !== !1 && this.queue(a || "fx", []);
                return this.each(function() {
                    function h(a, b, c) {
                        var e = b[c];
                        f.removeData(a, c, !0),
                        e.stop(d)
                    }
                    var b, c = !1, e = f.timers, g = f._data(this);
                    d || f._unmark(!0, this);
                    if (a == null)
                        for (b in g)
                            g[b] && g[b].stop && b.indexOf(".run") === b.length - 4 && h(this, g, b);
                    else
                        g[b = a + ".run"] && g[b].stop && h(this, g, b);
                    for (b = e.length; b--; )
                        e[b].elem === this && (a == null || e[b].queue === a) && (d ? e[b](!0) : e[b].saveState(),
                        c = !0,
                        e.splice(b, 1));
                    (!d || !c) && f.dequeue(this, a)
                })
            }
        }),
        f.each({
            slideDown: cu("show", 1),
            slideUp: cu("hide", 1),
            slideToggle: cu("toggle", 1),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            f.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }),
        f.extend({
            speed: function(a, b, c) {
                var d = a && typeof a == "object" ? f.extend({}, a) : {
                    complete: c || !c && b || f.isFunction(a) && a,
                    duration: a,
                    easing: c && b || b && !f.isFunction(b) && b
                };
                d.duration = f.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in f.fx.speeds ? f.fx.speeds[d.duration] : f.fx.speeds._default;
                if (d.queue == null || d.queue === !0)
                    d.queue = "fx";
                d.old = d.complete,
                d.complete = function(a) {
                    f.isFunction(d.old) && d.old.call(this),
                    d.queue ? f.dequeue(this, d.queue) : a !== !1 && f._unmark(this)
                }
                ;
                return d
            },
            easing: {
                linear: function(a, b, c, d) {
                    return c + d * a
                },
                swing: function(a, b, c, d) {
                    return (-Math.cos(a * Math.PI) / 2 + .5) * d + c
                }
            },
            timers: [],
            fx: function(a, b, c) {
                this.options = b,
                this.elem = a,
                this.prop = c,
                b.orig = b.orig || {}
            }
        }),
        f.fx.prototype = {
            update: function() {
                this.options.step && this.options.step.call(this.elem, this.now, this),
                (f.fx.step[this.prop] || f.fx.step._default)(this)
            },
            cur: function() {
                if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null))
                    return this.elem[this.prop];
                var a, b = f.css(this.elem, this.prop);
                return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0 : b : a
            },
            custom: function(a, c, d) {
                function h(a) {
                    return e.step(a)
                }
                var e = this
                  , g = f.fx;
                this.startTime = cr || cs(),
                this.end = c,
                this.now = this.start = a,
                this.pos = this.state = 0,
                this.unit = d || this.unit || (f.cssNumber[this.prop] ? "" : "px"),
                h.queue = this.options.queue,
                h.elem = this.elem,
                h.saveState = function() {
                    e.options.hide && f._data(e.elem, "fxshow" + e.prop) === b && f._data(e.elem, "fxshow" + e.prop, e.start)
                }
                ,
                h() && f.timers.push(h) && !cp && (cp = setInterval(g.tick, g.interval))
            },
            show: function() {
                var a = f._data(this.elem, "fxshow" + this.prop);
                this.options.orig[this.prop] = a || f.style(this.elem, this.prop),
                this.options.show = !0,
                a !== b ? this.custom(this.cur(), a) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()),
                f(this.elem).show()
            },
            hide: function() {
                this.options.orig[this.prop] = f._data(this.elem, "fxshow" + this.prop) || f.style(this.elem, this.prop),
                this.options.hide = !0,
                this.custom(this.cur(), 0)
            },
            step: function(a) {
                var b, c, d, e = cr || cs(), g = !0, h = this.elem, i = this.options;
                if (a || e >= i.duration + this.startTime) {
                    this.now = this.end,
                    this.pos = this.state = 1,
                    this.update(),
                    i.animatedProperties[this.prop] = !0;
                    for (b in i.animatedProperties)
                        i.animatedProperties[b] !== !0 && (g = !1);
                    if (g) {
                        i.overflow != null && !f.support.shrinkWrapBlocks && f.each(["", "X", "Y"], function(a, b) {
                            h.style["overflow" + b] = i.overflow[a]
                        }),
                        i.hide && f(h).hide();
                        if (i.hide || i.show)
                            for (b in i.animatedProperties)
                                f.style(h, b, i.orig[b]),
                                f.removeData(h, "fxshow" + b, !0),
                                f.removeData(h, "toggle" + b, !0);
                        d = i.complete,
                        d && (i.complete = !1,
                        d.call(h))
                    }
                    return !1
                }
                i.duration == Infinity ? this.now = e : (c = e - this.startTime,
                this.state = c / i.duration,
                this.pos = f.easing[i.animatedProperties[this.prop]](this.state, c, 0, 1, i.duration),
                this.now = this.start + (this.end - this.start) * this.pos),
                this.update();
                return !0
            }
        },
        f.extend(f.fx, {
            tick: function() {
                var a, b = f.timers, c = 0;
                for (; c < b.length; c++)
                    a = b[c],
                    !a() && b[c] === a && b.splice(c--, 1);
                b.length || f.fx.stop()
            },
            interval: 13,
            stop: function() {
                clearInterval(cp),
                cp = null
            },
            speeds: {
                slow: 600,
                fast: 200,
                _default: 400
            },
            step: {
                opacity: function(a) {
                    f.style(a.elem, "opacity", a.now)
                },
                _default: function(a) {
                    a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now
                }
            }
        }),
        f.each(["width", "height"], function(a, b) {
            f.fx.step[b] = function(a) {
                f.style(a.elem, b, Math.max(0, a.now) + a.unit)
            }
        }),
        f.expr && f.expr.filters && (f.expr.filters.animated = function(a) {
            return f.grep(f.timers, function(b) {
                return a === b.elem
            }).length
        }
        );
        var cw = /^t(?:able|d|h)$/i
          , cx = /^(?:body|html)$/i;
        "getBoundingClientRect"in c.documentElement ? f.fn.offset = function(a) {
            var b = this[0], c;
            if (a)
                return this.each(function(b) {
                    f.offset.setOffset(this, a, b)
                });
            if (!b || !b.ownerDocument)
                return null;
            if (b === b.ownerDocument.body)
                return f.offset.bodyOffset(b);
            try {
                c = b.getBoundingClientRect()
            } catch (d) {}
            var e = b.ownerDocument
              , g = e.documentElement;
            if (!c || !f.contains(g, b))
                return c ? {
                    top: c.top,
                    left: c.left
                } : {
                    top: 0,
                    left: 0
                };
            var h = e.body
              , i = cy(e)
              , j = g.clientTop || h.clientTop || 0
              , k = g.clientLeft || h.clientLeft || 0
              , l = i.pageYOffset || f.support.boxModel && g.scrollTop || h.scrollTop
              , m = i.pageXOffset || f.support.boxModel && g.scrollLeft || h.scrollLeft
              , n = c.top + l - j
              , o = c.left + m - k;
            return {
                top: n,
                left: o
            }
        }
        : f.fn.offset = function(a) {
            var b = this[0];
            if (a)
                return this.each(function(b) {
                    f.offset.setOffset(this, a, b)
                });
            if (!b || !b.ownerDocument)
                return null;
            if (b === b.ownerDocument.body)
                return f.offset.bodyOffset(b);
            var c, d = b.offsetParent, e = b, g = b.ownerDocument, h = g.documentElement, i = g.body, j = g.defaultView, k = j ? j.getComputedStyle(b, null) : b.currentStyle, l = b.offsetTop, m = b.offsetLeft;
            while ((b = b.parentNode) && b !== i && b !== h) {
                if (f.support.fixedPosition && k.position === "fixed")
                    break;
                c = j ? j.getComputedStyle(b, null) : b.currentStyle,
                l -= b.scrollTop,
                m -= b.scrollLeft,
                b === d && (l += b.offsetTop,
                m += b.offsetLeft,
                f.support.doesNotAddBorder && (!f.support.doesAddBorderForTableAndCells || !cw.test(b.nodeName)) && (l += parseFloat(c.borderTopWidth) || 0,
                m += parseFloat(c.borderLeftWidth) || 0),
                e = d,
                d = b.offsetParent),
                f.support.subtractsBorderForOverflowNotVisible && c.overflow !== "visible" && (l += parseFloat(c.borderTopWidth) || 0,
                m += parseFloat(c.borderLeftWidth) || 0),
                k = c
            }
            if (k.position === "relative" || k.position === "static")
                l += i.offsetTop,
                m += i.offsetLeft;
            f.support.fixedPosition && k.position === "fixed" && (l += Math.max(h.scrollTop, i.scrollTop),
            m += Math.max(h.scrollLeft, i.scrollLeft));
            return {
                top: l,
                left: m
            }
        }
        ,
        f.offset = {
            bodyOffset: function(a) {
                var b = a.offsetTop
                  , c = a.offsetLeft;
                f.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(f.css(a, "marginTop")) || 0,
                c += parseFloat(f.css(a, "marginLeft")) || 0);
                return {
                    top: b,
                    left: c
                }
            },
            setOffset: function(a, b, c) {
                var d = f.css(a, "position");
                d === "static" && (a.style.position = "relative");
                var e = f(a), g = e.offset(), h = f.css(a, "top"), i = f.css(a, "left"), j = (d === "absolute" || d === "fixed") && f.inArray("auto", [h, i]) > -1, k = {}, l = {}, m, n;
                j ? (l = e.position(),
                m = l.top,
                n = l.left) : (m = parseFloat(h) || 0,
                n = parseFloat(i) || 0),
                f.isFunction(b) && (b = b.call(a, c, g)),
                b.top != null && (k.top = b.top - g.top + m),
                b.left != null && (k.left = b.left - g.left + n),
                "using"in b ? b.using.call(a, k) : e.css(k)
            }
        },
        f.fn.extend({
            position: function() {
                if (!this[0])
                    return null;
                var a = this[0]
                  , b = this.offsetParent()
                  , c = this.offset()
                  , d = cx.test(b[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : b.offset();
                c.top -= parseFloat(f.css(a, "marginTop")) || 0,
                c.left -= parseFloat(f.css(a, "marginLeft")) || 0,
                d.top += parseFloat(f.css(b[0], "borderTopWidth")) || 0,
                d.left += parseFloat(f.css(b[0], "borderLeftWidth")) || 0;
                return {
                    top: c.top - d.top,
                    left: c.left - d.left
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    var a = this.offsetParent || c.body;
                    while (a && !cx.test(a.nodeName) && f.css(a, "position") === "static")
                        a = a.offsetParent;
                    return a
                })
            }
        }),
        f.each(["Left", "Top"], function(a, c) {
            var d = "scroll" + c;
            f.fn[d] = function(c) {
                var e, g;
                if (c === b) {
                    e = this[0];
                    if (!e)
                        return null;
                    g = cy(e);
                    return g ? "pageXOffset"in g ? g[a ? "pageYOffset" : "pageXOffset"] : f.support.boxModel && g.document.documentElement[d] || g.document.body[d] : e[d]
                }
                return this.each(function() {
                    g = cy(this),
                    g ? g.scrollTo(a ? f(g).scrollLeft() : c, a ? c : f(g).scrollTop()) : this[d] = c
                })
            }
        }),
        f.each(["Height", "Width"], function(a, c) {
            var d = c.toLowerCase();
            f.fn["inner" + c] = function() {
                var a = this[0];
                return a ? a.style ? parseFloat(f.css(a, d, "padding")) : this[d]() : null
            }
            ,
            f.fn["outer" + c] = function(a) {
                var b = this[0];
                return b ? b.style ? parseFloat(f.css(b, d, a ? "margin" : "border")) : this[d]() : null
            }
            ,
            f.fn[d] = function(a) {
                var e = this[0];
                if (!e)
                    return a == null ? null : this;
                if (f.isFunction(a))
                    return this.each(function(b) {
                        var c = f(this);
                        c[d](a.call(this, b, c[d]()))
                    });
                if (f.isWindow(e)) {
                    var g = e.document.documentElement["client" + c]
                      , h = e.document.body;
                    return e.document.compatMode === "CSS1Compat" && g || h && h["client" + c] || g
                }
                if (e.nodeType === 9)
                    return Math.max(e.documentElement["client" + c], e.body["scroll" + c], e.documentElement["scroll" + c], e.body["offset" + c], e.documentElement["offset" + c]);
                if (a === b) {
                    var i = f.css(e, d)
                      , j = parseFloat(i);
                    return f.isNumeric(j) ? j : i
                }
                return this.css(d, typeof a == "string" ? a : a + "px")
            }
        }),
        a.jQuery = a.$ = f,
        typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
            return f
        })
    }
    )(window);

    // jQuery Cycle Lite Plugin
    ;(function($, undefined) {
        "use strict";
        var ver = '2.9999.5';
        if ($.support === undefined) {
            $.support = {
                opacity: !($.browser.msie)
            }
        }
        function debug(s) {
            if ($.fn.cycle.debug)
                log(s)
        }
        function log() {
            if (window.console && console.log)
                console.log('[cycle] ' + Array.prototype.join.call(arguments, ' '))
        }
        $.expr[':'].paused = function(el) {
            return el.cyclePause
        }
        ;
        $.fn.cycle = function(options, arg2) {
            var o = {
                s: this.selector,
                c: this.context
            };
            if (this.length === 0 && options != 'stop') {
                if (!$.isReady && o.s) {
                    log('DOM not ready, queuing slideshow');
                    $(function() {
                        $(o.s, o.c).cycle(options, arg2)
                    });
                    return this
                }
                log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)'));
                return this
            }
            return this.each(function() {
                var opts = handleArguments(this, options, arg2);
                if (opts === false)
                    return;
                opts.updateActivePagerLink = opts.updateActivePagerLink || $.fn.cycle.updateActivePagerLink;
                if (this.cycleTimeout)
                    clearTimeout(this.cycleTimeout);
                this.cycleTimeout = this.cyclePause = 0;
                this.cycleStop = 0;
                var $cont = $(this);
                var $slides = opts.slideExpr ? $(opts.slideExpr, this) : $cont.children();
                var els = $slides.get();
                if (els.length < 2) {
                    log('terminating; too few slides: ' + els.length);
                    return
                }
                var opts2 = buildOptions($cont, $slides, els, opts, o);
                if (opts2 === false)
                    return;
                var startTime = opts2.continuous ? 10 : getTimeout(els[opts2.currSlide], els[opts2.nextSlide], opts2, !opts2.backwards);
                if (startTime) {
                    startTime += (opts2.delay || 0);
                    if (startTime < 10)
                        startTime = 10;
                    debug('first timeout: ' + startTime);
                    this.cycleTimeout = setTimeout(function() {
                        go(els, opts2, 0, !opts.backwards)
                    }, startTime)
                }
            })
        }
        ;
        function triggerPause(cont, byHover, onPager) {
            var opts = $(cont).data('cycle.opts');
            var paused = !!cont.cyclePause;
            if (paused && opts.paused)
                opts.paused(cont, opts, byHover, onPager);
            else if (!paused && opts.resumed)
                opts.resumed(cont, opts, byHover, onPager)
        }
        function handleArguments(cont, options, arg2) {
            if (cont.cycleStop === undefined)
                cont.cycleStop = 0;
            if (options === undefined || options === null)
                options = {};
            if (options.constructor == String) {
                switch (options) {
                case 'destroy':
                case 'stop':
                    var opts = $(cont).data('cycle.opts');
                    if (!opts)
                        return false;
                    cont.cycleStop++;
                    if (cont.cycleTimeout)
                        clearTimeout(cont.cycleTimeout);
                    cont.cycleTimeout = 0;
                    if (opts.elements)
                        $(opts.elements).stop();
                    $(cont).removeData('cycle.opts');
                    if (options == 'destroy')
                        destroy(cont, opts);
                    return false;
                case 'toggle':
                    cont.cyclePause = (cont.cyclePause === 1) ? 0 : 1;
                    checkInstantResume(cont.cyclePause, arg2, cont);
                    triggerPause(cont);
                    return false;
                case 'pause':
                    cont.cyclePause = 1;
                    triggerPause(cont);
                    return false;
                case 'resume':
                    cont.cyclePause = 0;
                    checkInstantResume(false, arg2, cont);
                    triggerPause(cont);
                    return false;
                case 'prev':
                case 'next':
                    opts = $(cont).data('cycle.opts');
                    if (!opts) {
                        log('options not found, "prev/next" ignored');
                        return false
                    }
                    $.fn.cycle[options](opts);
                    return false;
                default:
                    options = {
                        fx: options
                    }
                }
                return options
            } else if (options.constructor == Number) {
                var num = options;
                options = $(cont).data('cycle.opts');
                if (!options) {
                    log('options not found, can not advance slide');
                    return false
                }
                if (num < 0 || num >= options.elements.length) {
                    log('invalid slide index: ' + num);
                    return false
                }
                options.nextSlide = num;
                if (cont.cycleTimeout) {
                    clearTimeout(cont.cycleTimeout);
                    cont.cycleTimeout = 0
                }
                if (typeof arg2 == 'string')
                    options.oneTimeFx = arg2;
                go(options.elements, options, 1, num >= options.currSlide);
                return false
            }
            return options;
            function checkInstantResume(isPaused, arg2, cont) {
                if (!isPaused && arg2 === true) {
                    var options = $(cont).data('cycle.opts');
                    if (!options) {
                        log('options not found, can not resume');
                        return false
                    }
                    if (cont.cycleTimeout) {
                        clearTimeout(cont.cycleTimeout);
                        cont.cycleTimeout = 0
                    }
                    go(options.elements, options, 1, !options.backwards)
                }
            }
        }
        function removeFilter(el, opts) {
            if (!$.support.opacity && opts.cleartype && el.style.filter) {
                try {
                    el.style.removeAttribute('filter')
                } catch (smother) {}
            }
        }
        function destroy(cont, opts) {
            if (opts.next)
                $(opts.next).unbind(opts.prevNextEvent);
            if (opts.prev)
                $(opts.prev).unbind(opts.prevNextEvent);
            if (opts.pager || opts.pagerAnchorBuilder)
                $.each(opts.pagerAnchors || [], function() {
                    this.unbind().remove()
                });
            opts.pagerAnchors = null;
            $(cont).unbind('mouseenter.cycle mouseleave.cycle');
            if (opts.destroy)
                opts.destroy(opts)
        }
        function buildOptions($cont, $slides, els, options, o) {
            var startingSlideSpecified;
            var opts = $.extend({}, $.fn.cycle.defaults, options || {}, $.metadata ? $cont.metadata() : $.meta ? $cont.data() : {});
            var meta = $.isFunction($cont.data) ? $cont.data(opts.metaAttr) : null;
            if (meta)
                opts = $.extend(opts, meta);
            if (opts.autostop)
                opts.countdown = opts.autostopCount || els.length;
            var cont = $cont[0];
            $cont.data('cycle.opts', opts);
            opts.$cont = $cont;
            opts.stopCount = cont.cycleStop;
            opts.elements = els;
            opts.before = opts.before ? [opts.before] : [];
            opts.after = opts.after ? [opts.after] : [];
            if (!$.support.opacity && opts.cleartype)
                opts.after.push(function() {
                    removeFilter(this, opts)
                });
            if (opts.continuous)
                opts.after.push(function() {
                    go(els, opts, 0, !opts.backwards)
                });
            saveOriginalOpts(opts);
            if (!$.support.opacity && opts.cleartype && !opts.cleartypeNoBg)
                clearTypeFix($slides);
            if ($cont.css('position') == 'static')
                $cont.css('position', 'relative');
            if (opts.width)
                $cont.width(opts.width);
            if (opts.height && opts.height != 'auto')
                $cont.height(opts.height);
            if (opts.startingSlide !== undefined) {
                opts.startingSlide = parseInt(opts.startingSlide, 10);
                if (opts.startingSlide >= els.length || opts.startSlide < 0)
                    opts.startingSlide = 0;
                else
                    startingSlideSpecified = true
            } else if (opts.backwards)
                opts.startingSlide = els.length - 1;
            else
                opts.startingSlide = 0;
            if (opts.random) {
                opts.randomMap = [];
                for (var i = 0; i < els.length; i++)
                    opts.randomMap.push(i);
                opts.randomMap.sort(function(a, b) {
                    return Math.random() - 0.5
                });
                if (startingSlideSpecified) {
                    for (var cnt = 0; cnt < els.length; cnt++) {
                        if (opts.startingSlide == opts.randomMap[cnt]) {
                            opts.randomIndex = cnt
                        }
                    }
                } else {
                    opts.randomIndex = 1;
                    opts.startingSlide = opts.randomMap[1]
                }
            } else if (opts.startingSlide >= els.length)
                opts.startingSlide = 0;
            opts.currSlide = opts.startingSlide || 0;
            var first = opts.startingSlide;
            $slides.css({
                position: 'absolute',
                top: 0,
                left: 0
            }).hide().each(function(i) {
                var z;
                if (opts.backwards)
                    z = first ? i <= first ? els.length + (i - first) : first - i : els.length - i;
                else
                    z = first ? i >= first ? els.length - (i - first) : first - i : els.length - i;
                $(this).css('z-index', z)
            });
            $(els[first]).css('opacity', 1).show();
            removeFilter(els[first], opts);
            if (opts.fit) {
                if (!opts.aspect) {
                    if (opts.width)
                        $slides.width(opts.width);
                    if (opts.height && opts.height != 'auto')
                        $slides.height(opts.height)
                } else {
                    $slides.each(function() {
                        var $slide = $(this);
                        var ratio = (opts.aspect === true) ? $slide.width() / $slide.height() : opts.aspect;
                        if (opts.width && $slide.width() != opts.width) {
                            $slide.width(opts.width);
                            $slide.height(opts.width / ratio)
                        }
                        if (opts.height && $slide.height() < opts.height) {
                            $slide.height(opts.height);
                            $slide.width(opts.height * ratio)
                        }
                    })
                }
            }
            if (opts.center && ((!opts.fit) || opts.aspect)) {
                $slides.each(function() {
                    var $slide = $(this);
                    $slide.css({
                        "margin-left": opts.width ? ((opts.width - $slide.width()) / 2) + "px" : 0,
                        "margin-top": opts.height ? ((opts.height - $slide.height()) / 2) + "px" : 0
                    })
                })
            }
            if (opts.center && !opts.fit && !opts.slideResize) {
                $slides.each(function() {
                    var $slide = $(this);
                    $slide.css({
                        "margin-left": opts.width ? ((opts.width - $slide.width()) / 2) + "px" : 0,
                        "margin-top": opts.height ? ((opts.height - $slide.height()) / 2) + "px" : 0
                    })
                })
            }
            var reshape = opts.containerResize && !$cont.innerHeight();
            if (reshape) {
                var maxw = 0
                  , maxh = 0;
                for (var j = 0; j < els.length; j++) {
                    var $e = $(els[j])
                      , e = $e[0]
                      , w = $e.outerWidth()
                      , h = $e.outerHeight();
                    if (!w)
                        w = e.offsetWidth || e.width || $e.attr('width');
                    if (!h)
                        h = e.offsetHeight || e.height || $e.attr('height');
                    maxw = w > maxw ? w : maxw;
                    maxh = h > maxh ? h : maxh
                }
                if (maxw > 0 && maxh > 0)
                    $cont.css({
                        width: maxw + 'px',
                        height: maxh + 'px'
                    })
            }
            var pauseFlag = false;
            if (opts.pause)
                $cont.bind('mouseenter.cycle', function() {
                    pauseFlag = true;
                    this.cyclePause++;
                    triggerPause(cont, true)
                }).bind('mouseleave.cycle', function() {
                    if (pauseFlag)
                        this.cyclePause--;
                    triggerPause(cont, true)
                });
            if (supportMultiTransitions(opts) === false)
                return false;
            var requeue = false;
            options.requeueAttempts = options.requeueAttempts || 0;
            $slides.each(function() {
                var $el = $(this);
                this.cycleH = (opts.fit && opts.height) ? opts.height : ($el.height() || this.offsetHeight || this.height || $el.attr('height') || 0);
                this.cycleW = (opts.fit && opts.width) ? opts.width : ($el.width() || this.offsetWidth || this.width || $el.attr('width') || 0);
                if ($el.is('img')) {
                    var loadingIE = ($.browser.msie && this.cycleW == 28 && this.cycleH == 30 && !this.complete);
                    var loadingFF = ($.browser.mozilla && this.cycleW == 34 && this.cycleH == 19 && !this.complete);
                    var loadingOp = ($.browser.opera && ((this.cycleW == 42 && this.cycleH == 19) || (this.cycleW == 37 && this.cycleH == 17)) && !this.complete);
                    var loadingOther = (this.cycleH === 0 && this.cycleW === 0 && !this.complete);
                    if (loadingIE || loadingFF || loadingOp || loadingOther) {
                        if (o.s && opts.requeueOnImageNotLoaded && ++options.requeueAttempts < 100) {
                            log(options.requeueAttempts, ' - img slide not loaded, requeuing slideshow: ', this.src, this.cycleW, this.cycleH);
                            setTimeout(function() {
                                $(o.s, o.c).cycle(options)
                            }, opts.requeueTimeout);
                            requeue = true;
                            return false
                        } else {
                            log('could not determine size of image: ' + this.src, this.cycleW, this.cycleH)
                        }
                    }
                }
                return true
            });
            if (requeue)
                return false;
            opts.cssBefore = opts.cssBefore || {};
            opts.cssAfter = opts.cssAfter || {};
            opts.cssFirst = opts.cssFirst || {};
            opts.animIn = opts.animIn || {};
            opts.animOut = opts.animOut || {};
            $slides.not(':eq(' + first + ')').css(opts.cssBefore);
            $($slides[first]).css(opts.cssFirst);
            if (opts.timeout) {
                opts.timeout = parseInt(opts.timeout, 10);
                if (opts.speed.constructor == String)
                    opts.speed = $.fx.speeds[opts.speed] || parseInt(opts.speed, 10);
                if (!opts.sync)
                    opts.speed = opts.speed / 2;
                var buffer = opts.fx == 'none' ? 0 : opts.fx == 'shuffle' ? 500 : 250;
                while ((opts.timeout - opts.speed) < buffer)
                    opts.timeout += opts.speed
            }
            if (opts.easing)
                opts.easeIn = opts.easeOut = opts.easing;
            if (!opts.speedIn)
                opts.speedIn = opts.speed;
            if (!opts.speedOut)
                opts.speedOut = opts.speed;
            opts.slideCount = els.length;
            opts.currSlide = opts.lastSlide = first;
            if (opts.random) {
                if (++opts.randomIndex == els.length)
                    opts.randomIndex = 0;
                opts.nextSlide = opts.randomMap[opts.randomIndex]
            } else if (opts.backwards)
                opts.nextSlide = opts.startingSlide === 0 ? (els.length - 1) : opts.startingSlide - 1;
            else
                opts.nextSlide = opts.startingSlide >= (els.length - 1) ? 0 : opts.startingSlide + 1;
            if (!opts.multiFx) {
                var init = $.fn.cycle.transitions[opts.fx];
                if ($.isFunction(init))
                    init($cont, $slides, opts);
                else if (opts.fx != 'custom' && !opts.multiFx) {
                    log('unknown transition: ' + opts.fx, '; slideshow terminating');
                    return false
                }
            }
            var e0 = $slides[first];
            if (!opts.skipInitializationCallbacks) {
                if (opts.before.length)
                    opts.before[0].apply(e0, [e0, e0, opts, true]);
                if (opts.after.length)
                    opts.after[0].apply(e0, [e0, e0, opts, true])
            }
            if (opts.next)
                $(opts.next).bind(opts.prevNextEvent, function() {
                    return advance(opts, 1)
                });
            if (opts.prev)
                $(opts.prev).bind(opts.prevNextEvent, function() {
                    return advance(opts, 0)
                });
            if (opts.pager || opts.pagerAnchorBuilder)
                buildPager(els, opts);
            exposeAddSlide(opts, els);
            return opts
        }
        function saveOriginalOpts(opts) {
            opts.original = {
                before: [],
                after: []
            };
            opts.original.cssBefore = $.extend({}, opts.cssBefore);
            opts.original.cssAfter = $.extend({}, opts.cssAfter);
            opts.original.animIn = $.extend({}, opts.animIn);
            opts.original.animOut = $.extend({}, opts.animOut);
            $.each(opts.before, function() {
                opts.original.before.push(this)
            });
            $.each(opts.after, function() {
                opts.original.after.push(this)
            })
        }
        function supportMultiTransitions(opts) {
            var i, tx, txs = $.fn.cycle.transitions;
            if (opts.fx.indexOf(',') > 0) {
                opts.multiFx = true;
                opts.fxs = opts.fx.replace(/\s*/g, '').split(',');
                for (i = 0; i < opts.fxs.length; i++) {
                    var fx = opts.fxs[i];
                    tx = txs[fx];
                    if (!tx || !txs.hasOwnProperty(fx) || !$.isFunction(tx)) {
                        log('discarding unknown transition: ', fx);
                        opts.fxs.splice(i, 1);
                        i--
                    }
                }
                if (!opts.fxs.length) {
                    log('No valid transitions named; slideshow terminating.');
                    return false
                }
            } else if (opts.fx == 'all') {
                opts.multiFx = true;
                opts.fxs = [];
                for (var p in txs) {
                    if (txs.hasOwnProperty(p)) {
                        tx = txs[p];
                        if (txs.hasOwnProperty(p) && $.isFunction(tx))
                            opts.fxs.push(p)
                    }
                }
            }
            if (opts.multiFx && opts.randomizeEffects) {
                var r1 = Math.floor(Math.random() * 20) + 30;
                for (i = 0; i < r1; i++) {
                    var r2 = Math.floor(Math.random() * opts.fxs.length);
                    opts.fxs.push(opts.fxs.splice(r2, 1)[0])
                }
                debug('randomized fx sequence: ', opts.fxs)
            }
            return true
        }
        function exposeAddSlide(opts, els) {
            opts.addSlide = function(newSlide, prepend) {
                var $s = $(newSlide)
                  , s = $s[0];
                if (!opts.autostopCount)
                    opts.countdown++;
                els[prepend ? 'unshift' : 'push'](s);
                if (opts.els)
                    opts.els[prepend ? 'unshift' : 'push'](s);
                opts.slideCount = els.length;
                if (opts.random) {
                    opts.randomMap.push(opts.slideCount - 1);
                    opts.randomMap.sort(function(a, b) {
                        return Math.random() - 0.5
                    })
                }
                $s.css('position', 'absolute');
                $s[prepend ? 'prependTo' : 'appendTo'](opts.$cont);
                if (prepend) {
                    opts.currSlide++;
                    opts.nextSlide++
                }
                if (!$.support.opacity && opts.cleartype && !opts.cleartypeNoBg)
                    clearTypeFix($s);
                if (opts.fit && opts.width)
                    $s.width(opts.width);
                if (opts.fit && opts.height && opts.height != 'auto')
                    $s.height(opts.height);
                s.cycleH = (opts.fit && opts.height) ? opts.height : $s.height();
                s.cycleW = (opts.fit && opts.width) ? opts.width : $s.width();
                $s.css(opts.cssBefore);
                if (opts.pager || opts.pagerAnchorBuilder)
                    $.fn.cycle.createPagerAnchor(els.length - 1, s, $(opts.pager), els, opts);
                if ($.isFunction(opts.onAddSlide))
                    opts.onAddSlide($s);
                else
                    $s.hide()
            }
        }
        $.fn.cycle.resetState = function(opts, fx) {
            fx = fx || opts.fx;
            opts.before = [];
            opts.after = [];
            opts.cssBefore = $.extend({}, opts.original.cssBefore);
            opts.cssAfter = $.extend({}, opts.original.cssAfter);
            opts.animIn = $.extend({}, opts.original.animIn);
            opts.animOut = $.extend({}, opts.original.animOut);
            opts.fxFn = null;
            $.each(opts.original.before, function() {
                opts.before.push(this)
            });
            $.each(opts.original.after, function() {
                opts.after.push(this)
            });
            var init = $.fn.cycle.transitions[fx];
            if ($.isFunction(init))
                init(opts.$cont, $(opts.elements), opts)
        }
        ;
        function go(els, opts, manual, fwd) {
            var p = opts.$cont[0]
              , curr = els[opts.currSlide]
              , next = els[opts.nextSlide];
            if (manual && opts.busy && opts.manualTrump) {
                debug('manualTrump in go(), stopping active transition');
                $(els).stop(true, true);
                opts.busy = 0;
                clearTimeout(p.cycleTimeout)
            }
            if (opts.busy) {
                debug('transition active, ignoring new tx request');
                return
            }
            if (p.cycleStop != opts.stopCount || p.cycleTimeout === 0 && !manual)
                return;
            if (!manual && !p.cyclePause && !opts.bounce && ((opts.autostop && (--opts.countdown <= 0)) || (opts.nowrap && !opts.random && opts.nextSlide < opts.currSlide))) {
                if (opts.end)
                    opts.end(opts);
                return
            }
            var changed = false;
            if ((manual || !p.cyclePause) && (opts.nextSlide != opts.currSlide)) {
                changed = true;
                var fx = opts.fx;
                curr.cycleH = curr.cycleH || $(curr).height();
                curr.cycleW = curr.cycleW || $(curr).width();
                next.cycleH = next.cycleH || $(next).height();
                next.cycleW = next.cycleW || $(next).width();
                if (opts.multiFx) {
                    if (fwd && (opts.lastFx === undefined || ++opts.lastFx >= opts.fxs.length))
                        opts.lastFx = 0;
                    else if (!fwd && (opts.lastFx === undefined || --opts.lastFx < 0))
                        opts.lastFx = opts.fxs.length - 1;
                    fx = opts.fxs[opts.lastFx]
                }
                if (opts.oneTimeFx) {
                    fx = opts.oneTimeFx;
                    opts.oneTimeFx = null
                }
                $.fn.cycle.resetState(opts, fx);
                if (opts.before.length)
                    $.each(opts.before, function(i, o) {
                        if (p.cycleStop != opts.stopCount)
                            return;
                        o.apply(next, [curr, next, opts, fwd])
                    });
                var after = function() {
                    opts.busy = 0;
                    $.each(opts.after, function(i, o) {
                        if (p.cycleStop != opts.stopCount)
                            return;
                        o.apply(next, [curr, next, opts, fwd])
                    });
                    if (!p.cycleStop) {
                        queueNext()
                    }
                };
                debug('tx firing(' + fx + '); currSlide: ' + opts.currSlide + '; nextSlide: ' + opts.nextSlide);
                opts.busy = 1;
                if (opts.fxFn)
                    opts.fxFn(curr, next, opts, after, fwd, manual && opts.fastOnEvent);
                else if ($.isFunction($.fn.cycle[opts.fx]))
                    $.fn.cycle[opts.fx](curr, next, opts, after, fwd, manual && opts.fastOnEvent);
                else
                    $.fn.cycle.custom(curr, next, opts, after, fwd, manual && opts.fastOnEvent)
            } else {
                queueNext()
            }
            if (changed || opts.nextSlide == opts.currSlide) {
                var roll;
                opts.lastSlide = opts.currSlide;
                if (opts.random) {
                    opts.currSlide = opts.nextSlide;
                    if (++opts.randomIndex == els.length) {
                        opts.randomIndex = 0;
                        opts.randomMap.sort(function(a, b) {
                            return Math.random() - 0.5
                        })
                    }
                    opts.nextSlide = opts.randomMap[opts.randomIndex];
                    if (opts.nextSlide == opts.currSlide)
                        opts.nextSlide = (opts.currSlide == opts.slideCount - 1) ? 0 : opts.currSlide + 1
                } else if (opts.backwards) {
                    roll = (opts.nextSlide - 1) < 0;
                    if (roll && opts.bounce) {
                        opts.backwards = !opts.backwards;
                        opts.nextSlide = 1;
                        opts.currSlide = 0
                    } else {
                        opts.nextSlide = roll ? (els.length - 1) : opts.nextSlide - 1;
                        opts.currSlide = roll ? 0 : opts.nextSlide + 1
                    }
                } else {
                    roll = (opts.nextSlide + 1) == els.length;
                    if (roll && opts.bounce) {
                        opts.backwards = !opts.backwards;
                        opts.nextSlide = els.length - 2;
                        opts.currSlide = els.length - 1
                    } else {
                        opts.nextSlide = roll ? 0 : opts.nextSlide + 1;
                        opts.currSlide = roll ? els.length - 1 : opts.nextSlide - 1
                    }
                }
            }
            if (changed && opts.pager)
                opts.updateActivePagerLink(opts.pager, opts.currSlide, opts.activePagerClass);
            function queueNext() {
                var ms = 0
                  , timeout = opts.timeout;
                if (opts.timeout && !opts.continuous) {
                    ms = getTimeout(els[opts.currSlide], els[opts.nextSlide], opts, fwd);
                    if (opts.fx == 'shuffle')
                        ms -= opts.speedOut
                } else if (opts.continuous && p.cyclePause)
                    ms = 10;
                if (ms > 0)
                    p.cycleTimeout = setTimeout(function() {
                        go(els, opts, 0, !opts.backwards)
                    }, ms)
            }
        }
        $.fn.cycle.updateActivePagerLink = function(pager, currSlide, clsName) {
            $(pager).each(function() {
                $(this).children().removeClass(clsName).eq(currSlide).addClass(clsName)
            })
        }
        ;
        function getTimeout(curr, next, opts, fwd) {
            if (opts.timeoutFn) {
                var t = opts.timeoutFn.call(curr, curr, next, opts, fwd);
                while (opts.fx != 'none' && (t - opts.speed) < 250)
                    t += opts.speed;
                debug('calculated timeout: ' + t + '; speed: ' + opts.speed);
                if (t !== false)
                    return t
            }
            return opts.timeout
        }
        $.fn.cycle.next = function(opts) {
            advance(opts, 1)
        }
        ;
        $.fn.cycle.prev = function(opts) {
            advance(opts, 0)
        }
        ;
        function advance(opts, moveForward) {
            var val = moveForward ? 1 : -1;
            var els = opts.elements;
            var p = opts.$cont[0]
              , timeout = p.cycleTimeout;
            if (timeout) {
                clearTimeout(timeout);
                p.cycleTimeout = 0
            }
            if (opts.random && val < 0) {
                opts.randomIndex--;
                if (--opts.randomIndex == -2)
                    opts.randomIndex = els.length - 2;
                else if (opts.randomIndex == -1)
                    opts.randomIndex = els.length - 1;
                opts.nextSlide = opts.randomMap[opts.randomIndex]
            } else if (opts.random) {
                opts.nextSlide = opts.randomMap[opts.randomIndex]
            } else {
                opts.nextSlide = opts.currSlide + val;
                if (opts.nextSlide < 0) {
                    if (opts.nowrap)
                        return false;
                    opts.nextSlide = els.length - 1
                } else if (opts.nextSlide >= els.length) {
                    if (opts.nowrap)
                        return false;
                    opts.nextSlide = 0
                }
            }
            var cb = opts.onPrevNextEvent || opts.prevNextClick;
            if ($.isFunction(cb))
                cb(val > 0, opts.nextSlide, els[opts.nextSlide]);
            go(els, opts, 1, moveForward);
            return false
        }
        function buildPager(els, opts) {
            var $p = $(opts.pager);
            $.each(els, function(i, o) {
                $.fn.cycle.createPagerAnchor(i, o, $p, els, opts)
            });
            opts.updateActivePagerLink(opts.pager, opts.startingSlide, opts.activePagerClass)
        }
        $.fn.cycle.createPagerAnchor = function(i, el, $p, els, opts) {
            var a;
            if ($.isFunction(opts.pagerAnchorBuilder)) {
                a = opts.pagerAnchorBuilder(i, el);
                debug('pagerAnchorBuilder(' + i + ', el) returned: ' + a)
            } else
                a = '<a href="#">' + (i + 1) + '</a>';
            if (!a)
                return;
            var $a = $(a);
            if ($a.parents('body').length === 0) {
                var arr = [];
                if ($p.length > 1) {
                    $p.each(function() {
                        var $clone = $a.clone(true);
                        $(this).append($clone);
                        arr.push($clone[0])
                    });
                    $a = $(arr)
                } else {
                    $a.appendTo($p)
                }
            }
            opts.pagerAnchors = opts.pagerAnchors || [];
            opts.pagerAnchors.push($a);
            var pagerFn = function(e) {
                e.preventDefault();
                opts.nextSlide = i;
                var p = opts.$cont[0]
                  , timeout = p.cycleTimeout;
                if (timeout) {
                    clearTimeout(timeout);
                    p.cycleTimeout = 0
                }
                var cb = opts.onPagerEvent || opts.pagerClick;
                if ($.isFunction(cb))
                    cb(opts.nextSlide, els[opts.nextSlide]);
                go(els, opts, 1, opts.currSlide < i)
            };
            if (/mouseenter|mouseover/i.test(opts.pagerEvent)) {
                $a.hover(pagerFn, function() {})
            } else {
                $a.bind(opts.pagerEvent, pagerFn)
            }
            if (!/^click/.test(opts.pagerEvent) && !opts.allowPagerClickBubble)
                $a.bind('click.cycle', function() {
                    return false
                });
            var cont = opts.$cont[0];
            var pauseFlag = false;
            if (opts.pauseOnPagerHover) {
                $a.hover(function() {
                    pauseFlag = true;
                    cont.cyclePause++;
                    triggerPause(cont, true, true)
                }, function() {
                    if (pauseFlag)
                        cont.cyclePause--;
                    triggerPause(cont, true, true)
                })
            }
        }
        ;
        $.fn.cycle.hopsFromLast = function(opts, fwd) {
            var hops, l = opts.lastSlide, c = opts.currSlide;
            if (fwd)
                hops = c > l ? c - l : opts.slideCount - l;
            else
                hops = c < l ? l - c : l + opts.slideCount - c;
            return hops
        }
        ;
        function clearTypeFix($slides) {
            debug('applying clearType background-color hack');
            function hex(s) {
                s = parseInt(s, 10).toString(16);
                return s.length < 2 ? '0' + s : s
            }
            function getBg(e) {
                for (; e && e.nodeName.toLowerCase() != 'html'; e = e.parentNode) {
                    var v = $.css(e, 'background-color');
                    if (v && v.indexOf('rgb') >= 0) {
                        var rgb = v.match(/\d+/g);
                        return '#' + hex(rgb[0]) + hex(rgb[1]) + hex(rgb[2])
                    }
                    if (v && v != 'transparent')
                        return v
                }
                return '#ffffff'
            }
            $slides.each(function() {
                $(this).css('background-color', getBg(this))
            })
        }
        $.fn.cycle.commonReset = function(curr, next, opts, w, h, rev) {
            $(opts.elements).not(curr).hide();
            if (typeof opts.cssBefore.opacity == 'undefined')
                opts.cssBefore.opacity = 1;
            opts.cssBefore.display = 'block';
            if (opts.slideResize && w !== false && next.cycleW > 0)
                opts.cssBefore.width = next.cycleW;
            if (opts.slideResize && h !== false && next.cycleH > 0)
                opts.cssBefore.height = next.cycleH;
            opts.cssAfter = opts.cssAfter || {};
            opts.cssAfter.display = 'none';
            $(curr).css('zIndex', opts.slideCount + (rev === true ? 1 : 0));
            $(next).css('zIndex', opts.slideCount + (rev === true ? 0 : 1))
        }
        ;
        $.fn.cycle.custom = function(curr, next, opts, cb, fwd, speedOverride) {
            var $l = $(curr)
              , $n = $(next);
            var speedIn = opts.speedIn
              , speedOut = opts.speedOut
              , easeIn = opts.easeIn
              , easeOut = opts.easeOut;
            $n.css(opts.cssBefore);
            if (speedOverride) {
                if (typeof speedOverride == 'number')
                    speedIn = speedOut = speedOverride;
                else
                    speedIn = speedOut = 1;
                easeIn = easeOut = null
            }
            var fn = function() {
                $n.animate(opts.animIn, speedIn, easeIn, function() {
                    cb()
                })
            };
            $l.animate(opts.animOut, speedOut, easeOut, function() {
                $l.css(opts.cssAfter);
                if (!opts.sync)
                    fn()
            });
            if (opts.sync)
                fn()
        }
        ;
        $.fn.cycle.transitions = {
            fade: function($cont, $slides, opts) {
                $slides.not(':eq(' + opts.currSlide + ')').css('opacity', 0);
                opts.before.push(function(curr, next, opts) {
                    $.fn.cycle.commonReset(curr, next, opts);
                    opts.cssBefore.opacity = 0
                });
                opts.animIn = {
                    opacity: 1
                };
                opts.animOut = {
                    opacity: 0
                };
                opts.cssBefore = {
                    top: 0,
                    left: 0
                }
            }
        };
        $.fn.cycle.ver = function() {
            return ver
        }
        ;
        $.fn.cycle.defaults = {
            activePagerClass: 'activeSlide',
            after: null,
            allowPagerClickBubble: false,
            animIn: null,
            animOut: null,
            aspect: false,
            autostop: 0,
            autostopCount: 0,
            backwards: false,
            before: null,
            center: null,
            cleartype: !$.support.opacity,
            cleartypeNoBg: false,
            containerResize: 1,
            continuous: 0,
            cssAfter: null,
            cssBefore: null,
            delay: 0,
            easeIn: null,
            easeOut: null,
            easing: null,
            end: null,
            fastOnEvent: 0,
            fit: 0,
            fx: 'fade',
            fxFn: null,
            height: 'auto',
            manualTrump: true,
            metaAttr: 'cycle',
            next: null,
            nowrap: 0,
            onPagerEvent: null,
            onPrevNextEvent: null,
            pager: null,
            pagerAnchorBuilder: null,
            pagerEvent: 'click.cycle',
            pause: 0,
            pauseOnPagerHover: 0,
            prev: null,
            prevNextEvent: 'click.cycle',
            random: 0,
            randomizeEffects: 1,
            requeueOnImageNotLoaded: true,
            requeueTimeout: 250,
            rev: 0,
            shuffle: null,
            skipInitializationCallbacks: false,
            slideExpr: null,
            slideResize: 1,
            speed: 1000,
            speedIn: null,
            speedOut: null,
            startingSlide: undefined,
            sync: 1,
            timeout: 4000,
            timeoutFn: null,
            updateActivePagerLink: null,
            width: null
        }
    }
    )(jQuery);
    (function($) {
        "use strict";
        $.fn.cycle.transitions.none = function($cont, $slides, opts) {
            opts.fxFn = function(curr, next, opts, after) {
                $(next).show();
                $(curr).hide();
                after()
            }
        }
        ;
        $.fn.cycle.transitions.fadeout = function($cont, $slides, opts) {
            $slides.not(':eq(' + opts.currSlide + ')').css({
                display: 'block',
                'opacity': 1
            });
            opts.before.push(function(curr, next, opts, w, h, rev) {
                $(curr).css('zIndex', opts.slideCount + (rev !== true ? 1 : 0));
                $(next).css('zIndex', opts.slideCount + (rev !== true ? 0 : 1))
            });
            opts.animIn.opacity = 1;
            opts.animOut.opacity = 0;
            opts.cssBefore.opacity = 1;
            opts.cssBefore.display = 'block';
            opts.cssAfter.zIndex = 0
        }
        ;
        $.fn.cycle.transitions.scrollUp = function($cont, $slides, opts) {
            $cont.css('overflow', 'hidden');
            opts.before.push($.fn.cycle.commonReset);
            var h = $cont.height();
            opts.cssBefore.top = h;
            opts.cssBefore.left = 0;
            opts.cssFirst.top = 0;
            opts.animIn.top = 0;
            opts.animOut.top = -h
        }
        ;
        $.fn.cycle.transitions.scrollDown = function($cont, $slides, opts) {
            $cont.css('overflow', 'hidden');
            opts.before.push($.fn.cycle.commonReset);
            var h = $cont.height();
            opts.cssFirst.top = 0;
            opts.cssBefore.top = -h;
            opts.cssBefore.left = 0;
            opts.animIn.top = 0;
            opts.animOut.top = h
        }
        ;
        $.fn.cycle.transitions.scrollLeft = function($cont, $slides, opts) {
            $cont.css('overflow', 'hidden');
            opts.before.push($.fn.cycle.commonReset);
            var w = $cont.width();
            opts.cssFirst.left = 0;
            opts.cssBefore.left = w;
            opts.cssBefore.top = 0;
            opts.animIn.left = 0;
            opts.animOut.left = 0 - w
        }
        ;
        $.fn.cycle.transitions.scrollRight = function($cont, $slides, opts) {
            $cont.css('overflow', 'hidden');
            opts.before.push($.fn.cycle.commonReset);
            var w = $cont.width();
            opts.cssFirst.left = 0;
            opts.cssBefore.left = -w;
            opts.cssBefore.top = 0;
            opts.animIn.left = 0;
            opts.animOut.left = w
        }
        ;
        $.fn.cycle.transitions.scrollHorz = function($cont, $slides, opts) {
            $cont.css('overflow', 'hidden').width();
            opts.before.push(function(curr, next, opts, fwd) {
                if (opts.rev)
                    fwd = !fwd;
                $.fn.cycle.commonReset(curr, next, opts);
                opts.cssBefore.left = fwd ? (next.cycleW - 1) : (1 - next.cycleW);
                opts.animOut.left = fwd ? -curr.cycleW : curr.cycleW
            });
            opts.cssFirst.left = 0;
            opts.cssBefore.top = 0;
            opts.animIn.left = 0;
            opts.animOut.top = 0
        }
        ;
        $.fn.cycle.transitions.scrollVert = function($cont, $slides, opts) {
            $cont.css('overflow', 'hidden');
            opts.before.push(function(curr, next, opts, fwd) {
                if (opts.rev)
                    fwd = !fwd;
                $.fn.cycle.commonReset(curr, next, opts);
                opts.cssBefore.top = fwd ? (1 - next.cycleH) : (next.cycleH - 1);
                opts.animOut.top = fwd ? curr.cycleH : -curr.cycleH
            });
            opts.cssFirst.top = 0;
            opts.cssBefore.left = 0;
            opts.animIn.top = 0;
            opts.animOut.left = 0
        }
        ;
        $.fn.cycle.transitions.slideX = function($cont, $slides, opts) {
            opts.before.push(function(curr, next, opts) {
                $(opts.elements).not(curr).hide();
                $.fn.cycle.commonReset(curr, next, opts, false, true);
                opts.animIn.width = next.cycleW
            });
            opts.cssBefore.left = 0;
            opts.cssBefore.top = 0;
            opts.cssBefore.width = 0;
            opts.animIn.width = 'show';
            opts.animOut.width = 0
        }
        ;
        $.fn.cycle.transitions.slideY = function($cont, $slides, opts) {
            opts.before.push(function(curr, next, opts) {
                $(opts.elements).not(curr).hide();
                $.fn.cycle.commonReset(curr, next, opts, true, false);
                opts.animIn.height = next.cycleH
            });
            opts.cssBefore.left = 0;
            opts.cssBefore.top = 0;
            opts.cssBefore.height = 0;
            opts.animIn.height = 'show';
            opts.animOut.height = 0
        }
        ;
        $.fn.cycle.transitions.shuffle = function($cont, $slides, opts) {
            var i, w = $cont.css('overflow', 'visible').width();
            $slides.css({
                left: 0,
                top: 0
            });
            opts.before.push(function(curr, next, opts) {
                $.fn.cycle.commonReset(curr, next, opts, true, true, true)
            });
            if (!opts.speedAdjusted) {
                opts.speed = opts.speed / 2;
                opts.speedAdjusted = true
            }
            opts.random = 0;
            opts.shuffle = opts.shuffle || {
                left: -w,
                top: 15
            };
            opts.els = [];
            for (i = 0; i < $slides.length; i++)
                opts.els.push($slides[i]);
            for (i = 0; i < opts.currSlide; i++)
                opts.els.push(opts.els.shift());
            opts.fxFn = function(curr, next, opts, cb, fwd) {
                if (opts.rev)
                    fwd = !fwd;
                var $el = fwd ? $(curr) : $(next);
                $(next).css(opts.cssBefore);
                var count = opts.slideCount;
                $el.animate(opts.shuffle, opts.speedIn, opts.easeIn, function() {
                    var hops = $.fn.cycle.hopsFromLast(opts, fwd);
                    for (var k = 0; k < hops; k++) {
                        if (fwd)
                            opts.els.push(opts.els.shift());
                        else
                            opts.els.unshift(opts.els.pop())
                    }
                    if (fwd) {
                        for (var i = 0, len = opts.els.length; i < len; i++)
                            $(opts.els[i]).css('z-index', len - i + count)
                    } else {
                        var z = $(curr).css('z-index');
                        $el.css('z-index', parseInt(z, 10) + 1 + count)
                    }
                    $el.animate({
                        left: 0,
                        top: 0
                    }, opts.speedOut, opts.easeOut, function() {
                        $(fwd ? this : curr).hide();
                        if (cb)
                            cb()
                    })
                })
            }
            ;
            $.extend(opts.cssBefore, {
                display: 'block',
                opacity: 1,
                top: 0,
                left: 0
            })
        }
        ;
        $.fn.cycle.transitions.turnUp = function($cont, $slides, opts) {
            opts.before.push(function(curr, next, opts) {
                $.fn.cycle.commonReset(curr, next, opts, true, false);
                opts.cssBefore.top = next.cycleH;
                opts.animIn.height = next.cycleH;
                opts.animOut.width = next.cycleW
            });
            opts.cssFirst.top = 0;
            opts.cssBefore.left = 0;
            opts.cssBefore.height = 0;
            opts.animIn.top = 0;
            opts.animOut.height = 0
        }
        ;
        $.fn.cycle.transitions.turnDown = function($cont, $slides, opts) {
            opts.before.push(function(curr, next, opts) {
                $.fn.cycle.commonReset(curr, next, opts, true, false);
                opts.animIn.height = next.cycleH;
                opts.animOut.top = curr.cycleH
            });
            opts.cssFirst.top = 0;
            opts.cssBefore.left = 0;
            opts.cssBefore.top = 0;
            opts.cssBefore.height = 0;
            opts.animOut.height = 0
        }
        ;
        $.fn.cycle.transitions.turnLeft = function($cont, $slides, opts) {
            opts.before.push(function(curr, next, opts) {
                $.fn.cycle.commonReset(curr, next, opts, false, true);
                opts.cssBefore.left = next.cycleW;
                opts.animIn.width = next.cycleW
            });
            opts.cssBefore.top = 0;
            opts.cssBefore.width = 0;
            opts.animIn.left = 0;
            opts.animOut.width = 0
        }
        ;
        $.fn.cycle.transitions.turnRight = function($cont, $slides, opts) {
            opts.before.push(function(curr, next, opts) {
                $.fn.cycle.commonReset(curr, next, opts, false, true);
                opts.animIn.width = next.cycleW;
                opts.animOut.left = curr.cycleW
            });
            $.extend(opts.cssBefore, {
                top: 0,
                left: 0,
                width: 0
            });
            opts.animIn.left = 0;
            opts.animOut.width = 0
        }
        ;
        $.fn.cycle.transitions.zoom = function($cont, $slides, opts) {
            opts.before.push(function(curr, next, opts) {
                $.fn.cycle.commonReset(curr, next, opts, false, false, true);
                opts.cssBefore.top = next.cycleH / 2;
                opts.cssBefore.left = next.cycleW / 2;
                $.extend(opts.animIn, {
                    top: 0,
                    left: 0,
                    width: next.cycleW,
                    height: next.cycleH
                });
                $.extend(opts.animOut, {
                    width: 0,
                    height: 0,
                    top: curr.cycleH / 2,
                    left: curr.cycleW / 2
                })
            });
            opts.cssFirst.top = 0;
            opts.cssFirst.left = 0;
            opts.cssBefore.width = 0;
            opts.cssBefore.height = 0
        }
        ;
        $.fn.cycle.transitions.fadeZoom = function($cont, $slides, opts) {
            opts.before.push(function(curr, next, opts) {
                $.fn.cycle.commonReset(curr, next, opts, false, false);
                opts.cssBefore.left = next.cycleW / 2;
                opts.cssBefore.top = next.cycleH / 2;
                $.extend(opts.animIn, {
                    top: 0,
                    left: 0,
                    width: next.cycleW,
                    height: next.cycleH
                })
            });
            opts.cssBefore.width = 0;
            opts.cssBefore.height = 0;
            opts.animOut.opacity = 0
        }
        ;
        $.fn.cycle.transitions.blindX = function($cont, $slides, opts) {
            var w = $cont.css('overflow', 'hidden').width();
            opts.before.push(function(curr, next, opts) {
                $.fn.cycle.commonReset(curr, next, opts);
                opts.animIn.width = next.cycleW;
                opts.animOut.left = curr.cycleW
            });
            opts.cssBefore.left = w;
            opts.cssBefore.top = 0;
            opts.animIn.left = 0;
            opts.animOut.left = w
        }
        ;
        $.fn.cycle.transitions.blindY = function($cont, $slides, opts) {
            var h = $cont.css('overflow', 'hidden').height();
            opts.before.push(function(curr, next, opts) {
                $.fn.cycle.commonReset(curr, next, opts);
                opts.animIn.height = next.cycleH;
                opts.animOut.top = curr.cycleH
            });
            opts.cssBefore.top = h;
            opts.cssBefore.left = 0;
            opts.animIn.top = 0;
            opts.animOut.top = h
        }
        ;
        $.fn.cycle.transitions.blindZ = function($cont, $slides, opts) {
            var h = $cont.css('overflow', 'hidden').height();
            var w = $cont.width();
            opts.before.push(function(curr, next, opts) {
                $.fn.cycle.commonReset(curr, next, opts);
                opts.animIn.height = next.cycleH;
                opts.animOut.top = curr.cycleH
            });
            opts.cssBefore.top = h;
            opts.cssBefore.left = w;
            opts.animIn.top = 0;
            opts.animIn.left = 0;
            opts.animOut.top = h;
            opts.animOut.left = w
        }
        ;
        $.fn.cycle.transitions.growX = function($cont, $slides, opts) {
            opts.before.push(function(curr, next, opts) {
                $.fn.cycle.commonReset(curr, next, opts, false, true);
                opts.cssBefore.left = this.cycleW / 2;
                opts.animIn.left = 0;
                opts.animIn.width = this.cycleW;
                opts.animOut.left = 0
            });
            opts.cssBefore.top = 0;
            opts.cssBefore.width = 0
        }
        ;
        $.fn.cycle.transitions.growY = function($cont, $slides, opts) {
            opts.before.push(function(curr, next, opts) {
                $.fn.cycle.commonReset(curr, next, opts, true, false);
                opts.cssBefore.top = this.cycleH / 2;
                opts.animIn.top = 0;
                opts.animIn.height = this.cycleH;
                opts.animOut.top = 0
            });
            opts.cssBefore.height = 0;
            opts.cssBefore.left = 0
        }
        ;
        $.fn.cycle.transitions.curtainX = function($cont, $slides, opts) {
            opts.before.push(function(curr, next, opts) {
                $.fn.cycle.commonReset(curr, next, opts, false, true, true);
                opts.cssBefore.left = next.cycleW / 2;
                opts.animIn.left = 0;
                opts.animIn.width = this.cycleW;
                opts.animOut.left = curr.cycleW / 2;
                opts.animOut.width = 0
            });
            opts.cssBefore.top = 0;
            opts.cssBefore.width = 0
        }
        ;
        $.fn.cycle.transitions.curtainY = function($cont, $slides, opts) {
            opts.before.push(function(curr, next, opts) {
                $.fn.cycle.commonReset(curr, next, opts, true, false, true);
                opts.cssBefore.top = next.cycleH / 2;
                opts.animIn.top = 0;
                opts.animIn.height = next.cycleH;
                opts.animOut.top = curr.cycleH / 2;
                opts.animOut.height = 0
            });
            opts.cssBefore.height = 0;
            opts.cssBefore.left = 0
        }
        ;
        $.fn.cycle.transitions.cover = function($cont, $slides, opts) {
            var d = opts.direction || 'left';
            var w = $cont.css('overflow', 'hidden').width();
            var h = $cont.height();
            opts.before.push(function(curr, next, opts) {
                $.fn.cycle.commonReset(curr, next, opts);
                if (d == 'right')
                    opts.cssBefore.left = -w;
                else if (d == 'up')
                    opts.cssBefore.top = h;
                else if (d == 'down')
                    opts.cssBefore.top = -h;
                else
                    opts.cssBefore.left = w
            });
            opts.animIn.left = 0;
            opts.animIn.top = 0;
            opts.cssBefore.top = 0;
            opts.cssBefore.left = 0
        }
        ;
        $.fn.cycle.transitions.uncover = function($cont, $slides, opts) {
            var d = opts.direction || 'left';
            var w = $cont.css('overflow', 'hidden').width();
            var h = $cont.height();
            opts.before.push(function(curr, next, opts) {
                $.fn.cycle.commonReset(curr, next, opts, true, true, true);
                if (d == 'right')
                    opts.animOut.left = w;
                else if (d == 'up')
                    opts.animOut.top = -h;
                else if (d == 'down')
                    opts.animOut.top = h;
                else
                    opts.animOut.left = -w
            });
            opts.animIn.left = 0;
            opts.animIn.top = 0;
            opts.cssBefore.top = 0;
            opts.cssBefore.left = 0
        }
        ;
        $.fn.cycle.transitions.toss = function($cont, $slides, opts) {
            var w = $cont.css('overflow', 'visible').width();
            var h = $cont.height();
            opts.before.push(function(curr, next, opts) {
                $.fn.cycle.commonReset(curr, next, opts, true, true, true);
                if (!opts.animOut.left && !opts.animOut.top)
                    $.extend(opts.animOut, {
                        left: w * 2,
                        top: -h / 2,
                        opacity: 0
                    });
                else
                    opts.animOut.opacity = 0
            });
            opts.cssBefore.left = 0;
            opts.cssBefore.top = 0;
            opts.animIn.left = 0
        }
        ;
        $.fn.cycle.transitions.wipe = function($cont, $slides, opts) {
            var w = $cont.css('overflow', 'hidden').width();
            var h = $cont.height();
            opts.cssBefore = opts.cssBefore || {};
            var clip;
            if (opts.clip) {
                if (/l2r/.test(opts.clip))
                    clip = 'rect(0px 0px ' + h + 'px 0px)';
                else if (/r2l/.test(opts.clip))
                    clip = 'rect(0px ' + w + 'px ' + h + 'px ' + w + 'px)';
                else if (/t2b/.test(opts.clip))
                    clip = 'rect(0px ' + w + 'px 0px 0px)';
                else if (/b2t/.test(opts.clip))
                    clip = 'rect(' + h + 'px ' + w + 'px ' + h + 'px 0px)';
                else if (/zoom/.test(opts.clip)) {
                    var top = parseInt(h / 2, 10);
                    var left = parseInt(w / 2, 10);
                    clip = 'rect(' + top + 'px ' + left + 'px ' + top + 'px ' + left + 'px)'
                }
            }
            opts.cssBefore.clip = opts.cssBefore.clip || clip || 'rect(0px 0px 0px 0px)';
            var d = opts.cssBefore.clip.match(/(\d+)/g);
            var t = parseInt(d[0], 10)
              , r = parseInt(d[1], 10)
              , b = parseInt(d[2], 10)
              , l = parseInt(d[3], 10);
            opts.before.push(function(curr, next, opts) {
                if (curr == next)
                    return;
                var $curr = $(curr)
                  , $next = $(next);
                $.fn.cycle.commonReset(curr, next, opts, true, true, false);
                opts.cssAfter.display = 'block';
                var step = 1
                  , count = parseInt((opts.speedIn / 13), 10) - 1;
                (function f() {
                    var tt = t ? t - parseInt(step * (t / count), 10) : 0;
                    var ll = l ? l - parseInt(step * (l / count), 10) : 0;
                    var bb = b < h ? b + parseInt(step * ((h - b) / count || 1), 10) : h;
                    var rr = r < w ? r + parseInt(step * ((w - r) / count || 1), 10) : w;
                    $next.css({
                        clip: 'rect(' + tt + 'px ' + rr + 'px ' + bb + 'px ' + ll + 'px)'
                    });
                    (step++ <= count) ? setTimeout(f, 13) : $curr.css('display', 'none')
                }
                )()
            });
            $.extend(opts.cssBefore, {
                display: 'block',
                opacity: 1,
                top: 0,
                left: 0
            });
            opts.animIn = {
                left: 0
            };
            opts.animOut = {
                left: 0
            }
        }
    }
    )(jQuery);

    // jQuery Cookie Plugin
    (function($) {
        $.cookie = function(key, value, options) {
            if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(value)) || value === null || value === undefined)) {
                options = $.extend({}, options);
                if (value === null || value === undefined) {
                    options.expires = -1
                }
                if (typeof options.expires === 'number') {
                    var days = options.expires
                      , t = options.expires = new Date();
                    t.setDate(t.getDate() + days)
                }
                value = String(value);
                return (document.cookie = [encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value), options.expires ? '; expires=' + options.expires.toUTCString() : '', options.path ? '; path=' + options.path : '', options.domain ? '; domain=' + options.domain : '', options.secure ? '; secure' : ''].join(''))
            }
            options = value || {};
            var decode = options.raw ? function(s) {
                return s
            }
            : decodeURIComponent;
            var pairs = document.cookie.split('; ');
            for (var i = 0, pair; pair = pairs[i] && pairs[i].split('='); i++) {
                if (decode(pair[0]) === key)
                    return decode(pair[1] || '')
            }
            return null
        }
    }
    )(jQuery);

    // jQuery.ScrollTo
    ;(function(d) {
        var k = d.scrollTo = function(a, i, e) {
            d(window).scrollTo(a, i, e)
        }
        ;
        k.defaults = {
            axis: 'xy',
            duration: parseFloat(d.fn.jquery) >= 1.3 ? 0 : 1
        };
        k.window = function(a) {
            return d(window)._scrollable()
        }
        ;
        d.fn._scrollable = function() {
            return this.map(function() {
                var a = this
                  , i = !a.nodeName || d.inArray(a.nodeName.toLowerCase(), ['iframe', '#document', 'html', 'body']) != -1;
                if (!i)
                    return a;
                var e = (a.contentWindow || a).document || a.ownerDocument || a;
                return d.browser.safari || e.compatMode == 'BackCompat' ? e.body : e.documentElement
            })
        }
        ;
        d.fn.scrollTo = function(n, j, b) {
            if (typeof j == 'object') {
                b = j;
                j = 0
            }
            if (typeof b == 'function')
                b = {
                    onAfter: b
                };
            if (n == 'max')
                n = 9e9;
            b = d.extend({}, k.defaults, b);
            j = j || b.speed || b.duration;
            b.queue = b.queue && b.axis.length > 1;
            if (b.queue)
                j /= 2;
            b.offset = p(b.offset);
            b.over = p(b.over);
            return this._scrollable().each(function() {
                var q = this, r = d(q), f = n, s, g = {}, u = r.is('html,body');
                switch (typeof f) {
                case 'number':
                case 'string':
                    if (/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)) {
                        f = p(f);
                        break
                    }
                    f = d(f, this);
                case 'object':
                    if (f.is || f.style)
                        s = (f = d(f)).offset()
                }
                d.each(b.axis.split(''), function(a, i) {
                    var e = i == 'x' ? 'Left' : 'Top'
                      , h = e.toLowerCase()
                      , c = 'scroll' + e
                      , l = q[c]
                      , m = k.max(q, i);
                    if (s) {
                        g[c] = s[h] + (u ? 0 : l - r.offset()[h]);
                        if (b.margin) {
                            g[c] -= parseInt(f.css('margin' + e)) || 0;
                            g[c] -= parseInt(f.css('border' + e + 'Width')) || 0
                        }
                        g[c] += b.offset[h] || 0;
                        if (b.over[h])
                            g[c] += f[i == 'x' ? 'width' : 'height']() * b.over[h]
                    } else {
                        var o = f[h];
                        g[c] = o.slice && o.slice(-1) == '%' ? parseFloat(o) / 100 * m : o
                    }
                    if (/^\d+$/.test(g[c]))
                        g[c] = g[c] <= 0 ? 0 : Math.min(g[c], m);
                    if (!a && b.queue) {
                        if (l != g[c])
                            t(b.onAfterFirst);
                        delete g[c]
                    }
                });
                t(b.onAfter);
                function t(a) {
                    r.animate(g, j, b.easing, a && function() {
                        a.call(this, n, b)
                    }
                    )
                }
            }).end()
        }
        ;
        k.max = function(a, i) {
            var e = i == 'x' ? 'Width' : 'Height'
              , h = 'scroll' + e;
            if (!d(a).is('html,body'))
                return a[h] - d(a)[e.toLowerCase()]();
            var c = 'client' + e
              , l = a.ownerDocument.documentElement
              , m = a.ownerDocument.body;
            return Math.max(l[h], m[h]) - Math.min(l[c], m[c])
        }
        ;
        function p(a) {
            return typeof a == 'object' ? a : {
                top: a,
                left: a
            }
        }
    }
    )(jQuery);

    // jQuery Easing v1.3
    jQuery.easing['jswing'] = jQuery.easing['swing'];
    jQuery.extend(jQuery.easing, {
        def: 'easeOutQuad',
        swing: function(x, t, b, c, d) {
            return jQuery.easing[jQuery.easing.def](x, t, b, c, d)
        },
        easeInQuad: function(x, t, b, c, d) {
            return c * (t /= d) * t + b
        },
        easeOutQuad: function(x, t, b, c, d) {
            return -c * (t /= d) * (t - 2) + b
        },
        easeInOutQuad: function(x, t, b, c, d) {
            if ((t /= d / 2) < 1)
                return c / 2 * t * t + b;
            return -c / 2 * ((--t) * (t - 2) - 1) + b
        },
        easeInCubic: function(x, t, b, c, d) {
            return c * (t /= d) * t * t + b
        },
        easeOutCubic: function(x, t, b, c, d) {
            return c * ((t = t / d - 1) * t * t + 1) + b
        },
        easeInOutCubic: function(x, t, b, c, d) {
            if ((t /= d / 2) < 1)
                return c / 2 * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t + 2) + b
        },
        easeInQuart: function(x, t, b, c, d) {
            return c * (t /= d) * t * t * t + b
        },
        easeOutQuart: function(x, t, b, c, d) {
            return -c * ((t = t / d - 1) * t * t * t - 1) + b
        },
        easeInOutQuart: function(x, t, b, c, d) {
            if ((t /= d / 2) < 1)
                return c / 2 * t * t * t * t + b;
            return -c / 2 * ((t -= 2) * t * t * t - 2) + b
        },
        easeInQuint: function(x, t, b, c, d) {
            return c * (t /= d) * t * t * t * t + b
        },
        easeOutQuint: function(x, t, b, c, d) {
            return c * ((t = t / d - 1) * t * t * t * t + 1) + b
        },
        easeInOutQuint: function(x, t, b, c, d) {
            if ((t /= d / 2) < 1)
                return c / 2 * t * t * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t * t * t + 2) + b
        },
        easeInSine: function(x, t, b, c, d) {
            return -c * Math.cos(t / d * (Math.PI / 2)) + c + b
        },
        easeOutSine: function(x, t, b, c, d) {
            return c * Math.sin(t / d * (Math.PI / 2)) + b
        },
        easeInOutSine: function(x, t, b, c, d) {
            return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b
        },
        easeInExpo: function(x, t, b, c, d) {
            return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b
        },
        easeOutExpo: function(x, t, b, c, d) {
            return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b
        },
        easeInOutExpo: function(x, t, b, c, d) {
            if (t == 0)
                return b;
            if (t == d)
                return b + c;
            if ((t /= d / 2) < 1)
                return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b
        },
        easeInCirc: function(x, t, b, c, d) {
            return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b
        },
        easeOutCirc: function(x, t, b, c, d) {
            return c * Math.sqrt(1 - (t = t / d - 1) * t) + b
        },
        easeInOutCirc: function(x, t, b, c, d) {
            if ((t /= d / 2) < 1)
                return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
            return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b
        },
        easeInElastic: function(x, t, b, c, d) {
            var s = 1.70158;
            var p = 0;
            var a = c;
            if (t == 0)
                return b;
            if ((t /= d) == 1)
                return b + c;
            if (!p)
                p = d * .3;
            if (a < Math.abs(c)) {
                a = c;
                var s = p / 4
            } else
                var s = p / (2 * Math.PI) * Math.asin(c / a);
            return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b
        },
        easeOutElastic: function(x, t, b, c, d) {
            var s = 1.70158;
            var p = 0;
            var a = c;
            if (t == 0)
                return b;
            if ((t /= d) == 1)
                return b + c;
            if (!p)
                p = d * .3;
            if (a < Math.abs(c)) {
                a = c;
                var s = p / 4
            } else
                var s = p / (2 * Math.PI) * Math.asin(c / a);
            return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b
        },
        easeInOutElastic: function(x, t, b, c, d) {
            var s = 1.70158;
            var p = 0;
            var a = c;
            if (t == 0)
                return b;
            if ((t /= d / 2) == 2)
                return b + c;
            if (!p)
                p = d * (.3 * 1.5);
            if (a < Math.abs(c)) {
                a = c;
                var s = p / 4
            } else
                var s = p / (2 * Math.PI) * Math.asin(c / a);
            if (t < 1)
                return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
            return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b
        },
        easeInBack: function(x, t, b, c, d, s) {
            if (s == undefined)
                s = 1.70158;
            return c * (t /= d) * t * ((s + 1) * t - s) + b
        },
        easeOutBack: function(x, t, b, c, d, s) {
            if (s == undefined)
                s = 1.70158;
            return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b
        },
        easeInOutBack: function(x, t, b, c, d, s) {
            if (s == undefined)
                s = 1.70158;
            if ((t /= d / 2) < 1)
                return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
            return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b
        },
        easeInBounce: function(x, t, b, c, d) {
            return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b
        },
        easeOutBounce: function(x, t, b, c, d) {
            if ((t /= d) < (1 / 2.75)) {
                return c * (7.5625 * t * t) + b
            } else if (t < (2 / 2.75)) {
                return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b
            } else if (t < (2.5 / 2.75)) {
                return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b
            } else {
                return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b
            }
        },
        easeInOutBounce: function(x, t, b, c, d) {
            if (t < d / 2)
                return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
            return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b
        }
    });

    // Countdown for jQuery v1.5.11
    (function($) {
        function Countdown() {
            this.regional = [];
            this.regional[''] = {
                labels: ['Years', 'Months', 'Weeks', 'Days', 'Hours', 'Minutes', 'Seconds'],
                labels1: ['Year', 'Month', 'Week', 'Day', 'Hour', 'Minute', 'Second'],
                compactLabels: ['y', 'm', 'w', 'd'],
                whichLabels: null,
                timeSeparator: ':',
                isRTL: false
            };
            this._defaults = {
                until: null,
                since: null,
                timezone: null,
                serverSync: null,
                format: 'dHMS',
                layout: '',
                compact: false,
                significant: 0,
                description: '',
                expiryUrl: '',
                expiryText: '',
                alwaysExpire: false,
                onExpiry: null,
                onTick: null,
                tickInterval: 1
            };
            $.extend(this._defaults, this.regional['']);
            this._serverSyncs = [];
            function timerCallBack(a) {
                var b = (a || new Date().getTime());
                if (b - d >= 1000) {
                    $.countdown._updateTargets();
                    d = b
                }
                c(timerCallBack)
            }
            var c = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || null;
            var d = 0;
            if (!c) {
                setInterval(function() {
                    $.countdown._updateTargets()
                }, 980)
            } else {
                d = window.mozAnimationStartTime || new Date().getTime();
                c(timerCallBack)
            }
        }
        var w = 'countdown';
        var Y = 0;
        var O = 1;
        var W = 2;
        var D = 3;
        var H = 4;
        var M = 5;
        var S = 6;
        $.extend(Countdown.prototype, {
            markerClassName: 'hasCountdown',
            _timerTargets: [],
            setDefaults: function(a) {
                this._resetExtraLabels(this._defaults, a);
                extendRemove(this._defaults, a || {})
            },
            UTCDate: function(a, b, c, e, f, g, h, i) {
                if (typeof b == 'object' && b.constructor == Date) {
                    i = b.getMilliseconds();
                    h = b.getSeconds();
                    g = b.getMinutes();
                    f = b.getHours();
                    e = b.getDate();
                    c = b.getMonth();
                    b = b.getFullYear()
                }
                var d = new Date();
                d.setUTCFullYear(b);
                d.setUTCDate(1);
                d.setUTCMonth(c || 0);
                d.setUTCDate(e || 1);
                d.setUTCHours(f || 0);
                d.setUTCMinutes((g || 0) - (Math.abs(a) < 30 ? a * 60 : a));
                d.setUTCSeconds(h || 0);
                d.setUTCMilliseconds(i || 0);
                return d
            },
            periodsToSeconds: function(a) {
                return a[0] * 31557600 + a[1] * 2629800 + a[2] * 604800 + a[3] * 86400 + a[4] * 3600 + a[5] * 60 + a[6]
            },
            _settingsCountdown: function(a, b) {
                if (!b) {
                    return $.countdown._defaults
                }
                var c = $.data(a, w);
                return (b == 'all' ? c.options : c.options[b])
            },
            _attachCountdown: function(a, b) {
                var c = $(a);
                if (c.hasClass(this.markerClassName)) {
                    return
                }
                c.addClass(this.markerClassName);
                var d = {
                    options: $.extend({}, b),
                    _periods: [0, 0, 0, 0, 0, 0, 0]
                };
                $.data(a, w, d);
                this._changeCountdown(a)
            },
            _addTarget: function(a) {
                if (!this._hasTarget(a)) {
                    this._timerTargets.push(a)
                }
            },
            _hasTarget: function(a) {
                return ($.inArray(a, this._timerTargets) > -1)
            },
            _removeTarget: function(b) {
                this._timerTargets = $.map(this._timerTargets, function(a) {
                    return (a == b ? null : a)
                })
            },
            _updateTargets: function() {
                for (var i = this._timerTargets.length - 1; i >= 0; i--) {
                    this._updateCountdown(this._timerTargets[i])
                }
            },
            _updateCountdown: function(a, b) {
                var c = $(a);
                b = b || $.data(a, w);
                if (!b) {
                    return
                }
                c.html(this._generateHTML(b));
                c[(this._get(b, 'isRTL') ? 'add' : 'remove') + 'Class']('countdown_rtl');
                var d = this._get(b, 'onTick');
                if (d) {
                    var e = b._hold != 'lap' ? b._periods : this._calculatePeriods(b, b._show, this._get(b, 'significant'), new Date());
                    var f = this._get(b, 'tickInterval');
                    if (f == 1 || this.periodsToSeconds(e) % f == 0) {
                        d.apply(a, [e])
                    }
                }
                var g = b._hold != 'pause' && (b._since ? b._now.getTime() < b._since.getTime() : b._now.getTime() >= b._until.getTime());
                if (g && !b._expiring) {
                    b._expiring = true;
                    if (this._hasTarget(a) || this._get(b, 'alwaysExpire')) {
                        this._removeTarget(a);
                        var h = this._get(b, 'onExpiry');
                        if (h) {
                            h.apply(a, [])
                        }
                        var i = this._get(b, 'expiryText');
                        if (i) {
                            var j = this._get(b, 'layout');
                            b.options.layout = i;
                            this._updateCountdown(a, b);
                            b.options.layout = j
                        }
                        var k = this._get(b, 'expiryUrl');
                        if (k) {
                            window.location = k
                        }
                    }
                    b._expiring = false
                } else if (b._hold == 'pause') {
                    this._removeTarget(a)
                }
                $.data(a, w, b)
            },
            _changeCountdown: function(a, b, c) {
                b = b || {};
                if (typeof b == 'string') {
                    var d = b;
                    b = {};
                    b[d] = c
                }
                var e = $.data(a, w);
                if (e) {
                    this._resetExtraLabels(e.options, b);
                    extendRemove(e.options, b);
                    this._adjustSettings(a, e);
                    $.data(a, w, e);
                    var f = new Date();
                    if ((e._since && e._since < f) || (e._until && e._until > f)) {
                        this._addTarget(a)
                    }
                    this._updateCountdown(a, e)
                }
            },
            _resetExtraLabels: function(a, b) {
                var c = false;
                for (var n in b) {
                    if (n != 'whichLabels' && n.match(/[Ll]abels/)) {
                        c = true;
                        break
                    }
                }
                if (c) {
                    for (var n in a) {
                        if (n.match(/[Ll]abels[0-9]/)) {
                            a[n] = null
                        }
                    }
                }
            },
            _adjustSettings: function(a, b) {
                var c;
                var d = this._get(b, 'serverSync');
                var e = 0;
                var f = null;
                for (var i = 0; i < this._serverSyncs.length; i++) {
                    if (this._serverSyncs[i][0] == d) {
                        f = this._serverSyncs[i][1];
                        break
                    }
                }
                if (f != null) {
                    e = (d ? f : 0);
                    c = new Date()
                } else {
                    var g = (d ? d.apply(a, []) : null);
                    c = new Date();
                    e = (g ? c.getTime() - g.getTime() : 0);
                    this._serverSyncs.push([d, e])
                }
                var h = this._get(b, 'timezone');
                h = (h == null ? -c.getTimezoneOffset() : h);
                b._since = this._get(b, 'since');
                if (b._since != null) {
                    b._since = this.UTCDate(h, this._determineTime(b._since, null));
                    if (b._since && e) {
                        b._since.setMilliseconds(b._since.getMilliseconds() + e)
                    }
                }
                b._until = this.UTCDate(h, this._determineTime(this._get(b, 'until'), c));
                if (e) {
                    b._until.setMilliseconds(b._until.getMilliseconds() + e)
                }
                b._show = this._determineShow(b)
            },
            _destroyCountdown: function(a) {
                var b = $(a);
                if (!b.hasClass(this.markerClassName)) {
                    return
                }
                this._removeTarget(a);
                b.removeClass(this.markerClassName).empty();
                $.removeData(a, w)
            },
            _pauseCountdown: function(a) {
                this._hold(a, 'pause')
            },
            _lapCountdown: function(a) {
                this._hold(a, 'lap')
            },
            _resumeCountdown: function(a) {
                this._hold(a, null)
            },
            _hold: function(a, b) {
                var c = $.data(a, w);
                if (c) {
                    if (c._hold == 'pause' && !b) {
                        c._periods = c._savePeriods;
                        var d = (c._since ? '-' : '+');
                        c[c._since ? '_since' : '_until'] = this._determineTime(d + c._periods[0] + 'y' + d + c._periods[1] + 'o' + d + c._periods[2] + 'w' + d + c._periods[3] + 'd' + d + c._periods[4] + 'h' + d + c._periods[5] + 'm' + d + c._periods[6] + 's');
                        this._addTarget(a)
                    }
                    c._hold = b;
                    c._savePeriods = (b == 'pause' ? c._periods : null);
                    $.data(a, w, c);
                    this._updateCountdown(a, c)
                }
            },
            _getTimesCountdown: function(a) {
                var b = $.data(a, w);
                return (!b ? null : (!b._hold ? b._periods : this._calculatePeriods(b, b._show, this._get(b, 'significant'), new Date())))
            },
            _get: function(a, b) {
                return (a.options[b] != null ? a.options[b] : $.countdown._defaults[b])
            },
            _determineTime: function(k, l) {
                var m = function(a) {
                    var b = new Date();
                    b.setTime(b.getTime() + a * 1000);
                    return b
                };
                var n = function(a) {
                    a = a.toLowerCase();
                    var b = new Date();
                    var c = b.getFullYear();
                    var d = b.getMonth();
                    var e = b.getDate();
                    var f = b.getHours();
                    var g = b.getMinutes();
                    var h = b.getSeconds();
                    var i = /([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g;
                    var j = i.exec(a);
                    while (j) {
                        switch (j[2] || 's') {
                        case 's':
                            h += parseInt(j[1], 10);
                            break;
                        case 'm':
                            g += parseInt(j[1], 10);
                            break;
                        case 'h':
                            f += parseInt(j[1], 10);
                            break;
                        case 'd':
                            e += parseInt(j[1], 10);
                            break;
                        case 'w':
                            e += parseInt(j[1], 10) * 7;
                            break;
                        case 'o':
                            d += parseInt(j[1], 10);
                            e = Math.min(e, $.countdown._getDaysInMonth(c, d));
                            break;
                        case 'y':
                            c += parseInt(j[1], 10);
                            e = Math.min(e, $.countdown._getDaysInMonth(c, d));
                            break
                        }
                        j = i.exec(a)
                    }
                    return new Date(c,d,e,f,g,h,0)
                };
                var o = (k == null ? l : (typeof k == 'string' ? n(k) : (typeof k == 'number' ? m(k) : k)));
                if (o)
                    o.setMilliseconds(0);
                return o
            },
            _getDaysInMonth: function(a, b) {
                return 32 - new Date(a,b,32).getDate()
            },
            _normalLabels: function(a) {
                return a
            },
            _generateHTML: function(c) {
                var d = this._get(c, 'significant');
                c._periods = (c._hold ? c._periods : this._calculatePeriods(c, c._show, d, new Date()));
                var e = false;
                var f = 0;
                var g = d;
                var h = $.extend({}, c._show);
                for (var i = Y; i <= S; i++) {
                    e |= (c._show[i] == '?' && c._periods[i] > 0);
                    h[i] = (c._show[i] == '?' && !e ? null : c._show[i]);
                    f += (h[i] ? 1 : 0);
                    g -= (c._periods[i] > 0 ? 1 : 0)
                }
                var j = [false, false, false, false, false, false, false];
                for (var i = S; i >= Y; i--) {
                    if (c._show[i]) {
                        if (c._periods[i]) {
                            j[i] = true
                        } else {
                            j[i] = g > 0;
                            g--
                        }
                    }
                }
                var k = this._get(c, 'compact');
                var l = this._get(c, 'layout');
                var m = (k ? this._get(c, 'compactLabels') : this._get(c, 'labels'));
                var n = this._get(c, 'whichLabels') || this._normalLabels;
                var o = this._get(c, 'timeSeparator');
                var p = this._get(c, 'description') || '';
                var q = function(a) {
                    var b = $.countdown._get(c, 'compactLabels' + n(c._periods[a]));
                    return (h[a] ? c._periods[a] + (b ? b[a] : m[a]) + ' ' : '')
                };
                var r = function(a) {
                    var b = $.countdown._get(c, 'labels' + n(c._periods[a]));
                    return ((!d && h[a]) || (d && j[a]) ? '<span class="countdown_section"><span class="countdown_amount">' + c._periods[a] + '</span><br/>' + (b ? b[a] : m[a]) + '</span>' : '')
                };
                return (l ? this._buildLayout(c, h, l, k, d, j) : ((k ? '<span class="countdown_row countdown_amount' + (c._hold ? ' countdown_holding' : '') + '">' + q(Y) + q(O) + q(W) + q(D) + (h[H] ? this._minDigits(c._periods[H], 2) : '') + (h[M] ? (h[H] ? o : '') + this._minDigits(c._periods[M], 2) : '') + (h[S] ? (h[H] || h[M] ? o : '') + this._minDigits(c._periods[S], 2) : '') : '<span class="countdown_row countdown_show' + (d || f) + (c._hold ? ' countdown_holding' : '') + '">' + r(Y) + r(O) + r(W) + r(D) + r(H) + r(M) + r(S)) + '</span>' + (p ? '<span class="countdown_row countdown_descr">' + p + '</span>' : '')))
            },
            _buildLayout: function(c, d, e, f, g, h) {
                var j = this._get(c, (f ? 'compactLabels' : 'labels'));
                var k = this._get(c, 'whichLabels') || this._normalLabels;
                var l = function(a) {
                    return ($.countdown._get(c, (f ? 'compactLabels' : 'labels') + k(c._periods[a])) || j)[a]
                };
                var m = function(a, b) {
                    return Math.floor(a / b) % 10
                };
                var o = {
                    desc: this._get(c, 'description'),
                    sep: this._get(c, 'timeSeparator'),
                    yl: l(Y),
                    yn: c._periods[Y],
                    ynn: this._minDigits(c._periods[Y], 2),
                    ynnn: this._minDigits(c._periods[Y], 3),
                    y1: m(c._periods[Y], 1),
                    y10: m(c._periods[Y], 10),
                    y100: m(c._periods[Y], 100),
                    y1000: m(c._periods[Y], 1000),
                    ol: l(O),
                    on: c._periods[O],
                    onn: this._minDigits(c._periods[O], 2),
                    onnn: this._minDigits(c._periods[O], 3),
                    o1: m(c._periods[O], 1),
                    o10: m(c._periods[O], 10),
                    o100: m(c._periods[O], 100),
                    o1000: m(c._periods[O], 1000),
                    wl: l(W),
                    wn: c._periods[W],
                    wnn: this._minDigits(c._periods[W], 2),
                    wnnn: this._minDigits(c._periods[W], 3),
                    w1: m(c._periods[W], 1),
                    w10: m(c._periods[W], 10),
                    w100: m(c._periods[W], 100),
                    w1000: m(c._periods[W], 1000),
                    dl: l(D),
                    dn: c._periods[D],
                    dnn: this._minDigits(c._periods[D], 2),
                    dnnn: this._minDigits(c._periods[D], 3),
                    d1: m(c._periods[D], 1),
                    d10: m(c._periods[D], 10),
                    d100: m(c._periods[D], 100),
                    d1000: m(c._periods[D], 1000),
                    hl: l(H),
                    hn: c._periods[H],
                    hnn: this._minDigits(c._periods[H], 2),
                    hnnn: this._minDigits(c._periods[H], 3),
                    h1: m(c._periods[H], 1),
                    h10: m(c._periods[H], 10),
                    h100: m(c._periods[H], 100),
                    h1000: m(c._periods[H], 1000),
                    ml: l(M),
                    mn: c._periods[M],
                    mnn: this._minDigits(c._periods[M], 2),
                    mnnn: this._minDigits(c._periods[M], 3),
                    m1: m(c._periods[M], 1),
                    m10: m(c._periods[M], 10),
                    m100: m(c._periods[M], 100),
                    m1000: m(c._periods[M], 1000),
                    sl: l(S),
                    sn: c._periods[S],
                    snn: this._minDigits(c._periods[S], 2),
                    snnn: this._minDigits(c._periods[S], 3),
                    s1: m(c._periods[S], 1),
                    s10: m(c._periods[S], 10),
                    s100: m(c._periods[S], 100),
                    s1000: m(c._periods[S], 1000)
                };
                var p = e;
                for (var i = Y; i <= S; i++) {
                    var q = 'yowdhms'.charAt(i);
                    var r = new RegExp('\\{' + q + '<\\}(.*)\\{' + q + '>\\}','g');
                    p = p.replace(r, ((!g && d[i]) || (g && h[i]) ? '$1' : ''))
                }
                $.each(o, function(n, v) {
                    var a = new RegExp('\\{' + n + '\\}','g');
                    p = p.replace(a, v)
                });
                return p
            },
            _minDigits: function(a, b) {
                a = '' + a;
                if (a.length >= b) {
                    return a
                }
                a = '0000000000' + a;
                return a.substr(a.length - b)
            },
            _determineShow: function(a) {
                var b = this._get(a, 'format');
                var c = [];
                c[Y] = (b.match('y') ? '?' : (b.match('Y') ? '!' : null));
                c[O] = (b.match('o') ? '?' : (b.match('O') ? '!' : null));
                c[W] = (b.match('w') ? '?' : (b.match('W') ? '!' : null));
                c[D] = (b.match('d') ? '?' : (b.match('D') ? '!' : null));
                c[H] = (b.match('h') ? '?' : (b.match('H') ? '!' : null));
                c[M] = (b.match('m') ? '?' : (b.match('M') ? '!' : null));
                c[S] = (b.match('s') ? '?' : (b.match('S') ? '!' : null));
                return c
            },
            _calculatePeriods: function(c, d, e, f) {
                c._now = f;
                c._now.setMilliseconds(0);
                var g = new Date(c._now.getTime());
                if (c._since) {
                    if (f.getTime() < c._since.getTime()) {
                        c._now = f = g
                    } else {
                        f = c._since
                    }
                } else {
                    g.setTime(c._until.getTime());
                    if (f.getTime() > c._until.getTime()) {
                        c._now = f = g
                    }
                }
                var h = [0, 0, 0, 0, 0, 0, 0];
                if (d[Y] || d[O]) {
                    var i = $.countdown._getDaysInMonth(f.getFullYear(), f.getMonth());
                    var j = $.countdown._getDaysInMonth(g.getFullYear(), g.getMonth());
                    var k = (g.getDate() == f.getDate() || (g.getDate() >= Math.min(i, j) && f.getDate() >= Math.min(i, j)));
                    var l = function(a) {
                        return (a.getHours() * 60 + a.getMinutes()) * 60 + a.getSeconds()
                    };
                    var m = Math.max(0, (g.getFullYear() - f.getFullYear()) * 12 + g.getMonth() - f.getMonth() + ((g.getDate() < f.getDate() && !k) || (k && l(g) < l(f)) ? -1 : 0));
                    h[Y] = (d[Y] ? Math.floor(m / 12) : 0);
                    h[O] = (d[O] ? m - h[Y] * 12 : 0);
                    f = new Date(f.getTime());
                    var n = (f.getDate() == i);
                    var o = $.countdown._getDaysInMonth(f.getFullYear() + h[Y], f.getMonth() + h[O]);
                    if (f.getDate() > o) {
                        f.setDate(o)
                    }
                    f.setFullYear(f.getFullYear() + h[Y]);
                    f.setMonth(f.getMonth() + h[O]);
                    if (n) {
                        f.setDate(o)
                    }
                }
                var p = Math.floor((g.getTime() - f.getTime()) / 1000);
                var q = function(a, b) {
                    h[a] = (d[a] ? Math.floor(p / b) : 0);
                    p -= h[a] * b
                };
                q(W, 604800);
                q(D, 86400);
                q(H, 3600);
                q(M, 60);
                q(S, 1);
                if (p > 0 && !c._since) {
                    var r = [1, 12, 4.3482, 7, 24, 60, 60];
                    var s = S;
                    var t = 1;
                    for (var u = S; u >= Y; u--) {
                        if (d[u]) {
                            if (h[s] >= t) {
                                h[s] = 0;
                                p = 1
                            }
                            if (p > 0) {
                                h[u]++;
                                p = 0;
                                s = u;
                                t = 1
                            }
                        }
                        t *= r[u]
                    }
                }
                if (e) {
                    for (var u = Y; u <= S; u++) {
                        if (e && h[u]) {
                            e--
                        } else if (!e) {
                            h[u] = 0
                        }
                    }
                }
                return h
            }
        });
        function extendRemove(a, b) {
            $.extend(a, b);
            for (var c in b) {
                if (b[c] == null) {
                    a[c] = null
                }
            }
            return a
        }
        $.fn.countdown = function(a) {
            var b = Array.prototype.slice.call(arguments, 1);
            if (a == 'getTimes' || a == 'settings') {
                return $.countdown['_' + a + 'Countdown'].apply($.countdown, [this[0]].concat(b))
            }
            return this.each(function() {
                if (typeof a == 'string') {
                    $.countdown['_' + a + 'Countdown'].apply($.countdown, [this].concat(b))
                } else {
                    $.countdown._attachCountdown(this, a)
                }
            })
        }
        ;
        $.countdown = new Countdown()
    }
    )(jQuery);

    // Thickbox 3.1
    var tb_pathToImage = "./imgs/loadingAnimation.gif";
    eval(function(p, a, c, k, e, r) {
        e = function(c) {
            return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
        }
        ;
        if (!''.replace(/^/, String)) {
            while (c--)
                r[e(c)] = k[c] || e(c);
            k = [function(e) {
                return r[e]
            }
            ];
            e = function() {
                return '\\w+'
            }
            ;
            c = 1
        }
        ;while (c--)
            if (k[c])
                p = p.replace(new RegExp('\\b' + e(c) + '\\b','g'), k[c]);
        return p
    }('$.1g.1Y=$.1g.3q&&/2l 6\\.0/i.2t(1c.1q.1v)&&!/2l 7\\.0/i.2t(1c.1q.1v);$(p).2H(n(){1E(\'a.19, 3f.19, 3b.19\');1x=1r 1B();1x.M=2O});n 1E(b){$(b).u(n(){8 t=R.16||R.1I||P;8 a=R.A||R.2u;8 g=R.2q||V;1j(t,a,g);R.3c();L V}).3a(\'19\')}n 1j(d,f,g){35{3(1Z p.z.J.2i==="1X"){$("z","12").r({D:"1R%",v:"1R%"});$("12").r("1P","2I");3(p.1N("1y")===P){$("z").s("<T 5=\'1y\'></T><4 5=\'B\'></4><4 5=\'9\'></4>");$("#B").u(I)}}o{3(p.1N("B")===P){$("z").s("<4 5=\'B\'></4><4 5=\'9\'></4>");$("#B").u(I)}}3(2A()){$("#B").2y("3o")}o{$("#B").2y("3m")}3(d===P){d=""}$("z").s("<4 5=\'H\'><2s M=\'"+1x.M+"\' /></4>");$(\'#H\').3k();8 h;3(f.O("?")!==-1){h=f.3e(0,f.O("?"))}o{h=f}8 i=/\\.2j$|\\.2h$|\\.2g$|\\.2f$|\\.2c$/;8 j=h.1n().26(i);3(j==\'.2j\'||j==\'.2h\'||j==\'.2g\'||j==\'.2f\'||j==\'.2c\'){1u="";1p="";18="";1t="";1s="";U="";1C="";1w=V;3(g){F=$("a[@2q="+g+"]").2V();25(E=0;((E<F.1i)&&(U===""));E++){8 k=F[E].A.1n().26(i);3(!(F[E].A==f)){3(1w){1t=F[E].16;1s=F[E].A;U="<1h 5=\'1W\'>&1f;&1f;<a A=\'#\'>2N &2M;</a></1h>"}o{1u=F[E].16;1p=F[E].A;18="<1h 5=\'1T\'>&1f;&1f;<a A=\'#\'>&2L; 2K</a></1h>"}}o{1w=1b;1C="1B "+(E+1)+" 2J "+(F.1i)}}}Q=1r 1B();Q.1a=n(){Q.1a=P;8 a=1Q();8 x=a[0]-1O;8 y=a[1]-1O;8 b=Q.v;8 c=Q.D;3(b>x){c=c*(x/b);b=x;3(c>y){b=b*(y/c);c=y}}o 3(c>y){b=b*(y/c);c=y;3(b>x){c=c*(x/b);b=x}}14=b+30;1e=c+2G;$("#9").s("<2s 5=\'1L\' M=\'"+f+"\' v=\'"+b+"\' D=\'"+c+"\' 2u=\'"+d+"\'/>"+"<4 5=\'2F\'>"+d+"<4 5=\'2E\'>"+1C+18+U+"</4></4><4 5=\'2D\'><a A=\'#\' 5=\'S\' 16=\'2B\'>1K</a> 1J 1H 1G</4>");$("#S").u(I);3(!(18==="")){n 15(){3($(p).N("u",15)){$(p).N("u",15)}$("#9").C();$("z").s("<4 5=\'9\'></4>");1j(1u,1p,g);L V}$("#1T").u(15)}3(!(U==="")){n 1F(){$("#9").C();$("z").s("<4 5=\'9\'></4>");1j(1t,1s,g);L V}$("#1W").u(1F)}p.1k=n(e){3(e==P){K=2z.2x}o{K=e.2w}3(K==27){I()}o 3(K==3n){3(!(U=="")){p.1k="";1F()}}o 3(K==3l){3(!(18=="")){p.1k="";15()}}};13();$("#H").C();$("#1L").u(I);$("#9").r({Y:"W"})};Q.M=f}o{8 l=f.2r(/^[^\\?]+\\??/,\'\');8 m=2p(l);14=(m[\'v\']*1)+30||3j;1e=(m[\'D\']*1)+3i||3h;X=14-30;Z=1e-3g;3(f.O(\'2k\')!=-1){1A=f.1D(\'3d\');$("#11").C();3(m[\'1m\']!="1b"){$("#9").s("<4 5=\'1M\'><4 5=\'1l\'>"+d+"</4><4 5=\'2e\'><a A=\'#\' 5=\'S\' 16=\'2B\'>1K</a> 1J 1H 1G</4></4><T 2d=\'0\' 1S=\'0\' M=\'"+1A[0]+"\' 5=\'11\' 1I=\'11"+1d.2b(1d.1z()*2a)+"\' 1a=\'1o()\' J=\'v:"+(X+29)+"q;D:"+(Z+17)+"q;\' > </T>")}o{$("#B").N();$("#9").s("<T 2d=\'0\' 1S=\'0\' M=\'"+1A[0]+"\' 5=\'11\' 1I=\'11"+1d.2b(1d.1z()*2a)+"\' 1a=\'1o()\' J=\'v:"+(X+29)+"q;D:"+(Z+17)+"q;\'> </T>")}}o{3($("#9").r("Y")!="W"){3(m[\'1m\']!="1b"){$("#9").s("<4 5=\'1M\'><4 5=\'1l\'>"+d+"</4><4 5=\'2e\'><a A=\'#\' 5=\'S\'>1K</a> 1J 1H 1G</4></4><4 5=\'G\' J=\'v:"+X+"q;D:"+Z+"q\'></4>")}o{$("#B").N();$("#9").s("<4 5=\'G\' 39=\'38\' J=\'v:"+X+"q;D:"+Z+"q;\'></4>")}}o{$("#G")[0].J.v=X+"q";$("#G")[0].J.D=Z+"q";$("#G")[0].37=0;$("#1l").12(d)}}$("#S").u(I);3(f.O(\'36\')!=-1){$("#G").s($(\'#\'+m[\'23\']).22());$("#9").21(n(){$(\'#\'+m[\'23\']).s($("#G").22())});13();$("#H").C();$("#9").r({Y:"W"})}o 3(f.O(\'2k\')!=-1){13();3($.1g.34){$("#H").C();$("#9").r({Y:"W"})}}o{$("#G").33(f+="&1z="+(1r 32().31()),n(){13();$("#H").C();1E("#G a.19");$("#9").r({Y:"W"})})}}3(!m[\'1m\']){p.20=n(e){3(e==P){K=2z.2x}o{K=e.2w}3(K==27){I()}}}}2Z(e){}}n 1o(){$("#H").C();$("#9").r({Y:"W"})}n I(){$("#2Y").N("u");$("#S").N("u");$("#9").2X("2W",n(){$(\'#9,#B,#1y\').2U("21").N().C()});$("#H").C();3(1Z p.z.J.2i=="1X"){$("z","12").r({D:"28",v:"28"});$("12").r("1P","")}p.1k="";p.20="";L V}n 13(){$("#9").r({2T:\'-\'+24((14/2),10)+\'q\',v:14+\'q\'});3(!(2S.1g.1Y)){$("#9").r({2R:\'-\'+24((1e/2),10)+\'q\'})}}n 2p(a){8 b={};3(!a){L b}8 c=a.1D(/[;&]/);25(8 i=0;i<c.1i;i++){8 d=c[i].1D(\'=\');3(!d||d.1i!=2){2Q}8 e=2C(d[0]);8 f=2C(d[1]);f=f.2r(/\\+/g,\' \');b[e]=f}L b}n 1Q(){8 a=p.2P;8 w=1c.2n||2m.2n||(a&&a.1V)||p.z.1V;8 h=1c.2o||2m.2o||(a&&a.1U)||p.z.1U;2v=[w,h];L 2v}n 2A(){8 a=1q.1v.1n();3(a.O(\'3p\')!=-1&&a.O(\'3r\')!=-1){L 1b}}', 62, 214, '|||if|div|id|||var|TB_window||||||||||||||function|else|document|px|css|append||click|width||||body|href|TB_overlay|remove|height|TB_Counter|TB_TempArray|TB_ajaxContent|TB_load|tb_remove|style|keycode|return|src|unbind|indexOf|null|imgPreloader|this|TB_closeWindowButton|iframe|TB_NextHTML|false|block|ajaxContentW|display|ajaxContentH||TB_iframeContent|html|tb_position|TB_WIDTH|goPrev|title||TB_PrevHTML|thickbox|onload|true|window|Math|TB_HEIGHT|nbsp|browser|span|length|tb_show|onkeydown|TB_ajaxWindowTitle|modal|toLowerCase|tb_showIframe|TB_PrevURL|navigator|new|TB_NextURL|TB_NextCaption|TB_PrevCaption|userAgent|TB_FoundURL|imgLoader|TB_HideSelect|random|urlNoQuery|Image|TB_imageCount|split|tb_init|goNext|Key|Esc|name|or|close|TB_Image|TB_title|getElementById|150|overflow|tb_getPageSize|100|hspace|TB_prev|clientHeight|clientWidth|TB_next|undefined|msie6|typeof|onkeyup|unload|children|inlineId|parseInt|for|match||auto||1000|round|bmp|frameborder|TB_closeAjaxWindow|gif|png|jpeg|maxHeight|jpg|TB_iframe|MSIE|self|innerWidth|innerHeight|tb_parseQuery|rel|replace|img|test|alt|arrayPageSize|which|keyCode|addClass|event|tb_detectMacXFF|Close|unescape|TB_closeWindow|TB_secondLine|TB_caption|60|ready|hidden|of|Prev|lt|gt|Next|tb_pathToImage|documentElement|continue|marginTop|jQuery|marginLeft|trigger|get|fast|fadeOut|TB_imageOff|catch||getTime|Date|load|safari|try|TB_inline|scrollTop|TB_modal|class|removeClass|input|blur|TB_|substr|area|45|440|40|630|show|188|TB_overlayBG|190|TB_overlayMacFFBGHack|mac|msie|firefox'.split('|'), 0, {}));

    // Easy News
    eval(function(p, a, c, k, e, r) {
        e = function(c) {
            return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
        }
        ;
        if (!''.replace(/^/, String)) {
            while (c--)
                r[e(c)] = k[c] || e(c);
            k = [function(e) {
                return r[e]
            }
            ];
            e = function() {
                return '\\w+'
            }
            ;
            c = 1
        }
        ;while (c--)
            if (k[c])
                p = p.replace(new RegExp('\\b' + e(c) + '\\b','g'), k[c]);
        return p
    }('1u.1h({1v:g(m){m=$.1h({u:"",7:"",6:"",j:"",r:"1w 1x:",k:"1y 1i:",o:"1z 1i:",L:1A,G:0,W:x,h:1B,z:"",p:"",A:x,X:1C},m);8 u=m.u;8 7=m.7;8 6=m.6;8 j=m.j;8 L=m.L;8 G=m.G;8 r=m.r;8 k=m.k;8 o=m.o;8 W=m.W;8 h=m.h;8 z=m.z;8 p=m.p;8 A=m.A;8 X=m.X;4(p){8 e=1}4(X===x){8 9=1}G=1j(G,10);h=1j(h,10);8 H=$(\'#I\').c(\'i\');4(!H){H=z+\'1D.M\'}8 B=$(\'#J\').c(\'i\');4(!B){B=z+\'1E.M\'}8 N=$(\'#O\').c(\'i\');4(!N){N=z+\'1F.M\'}8 P=$(\'#1G\').c(\'i\');4(!P){P=z+\'1H.M\'}8 Q=$(\'#1I\').c(\'i\');4(!Q){Q=z+\'1J.M\'}8 R=$(\'#1K\').c(\'i\');4(!R){R=z+\'1L.M\'}8 S,Y,b,19,1a,l,v,1M;b=$(\'#\'+u+\' .K\').1b();19=$(\'#\'+u+\' .K\').C(0).5();1a=$(\'#\'+u+\' .K\').C(1).c(\'1c\');l=0;$(\'#\'+7).s(19);4(e===1&&9!=1){$(\'#\'+p).5(\'1/\'+b)}4(e!=1&&9!=1){$(\'#\'+6).5(r+\'1/\'+b+\'<w>\')}$(\'#\'+6).s(k+1a);$(\'#\'+j+\' #J\').T(g(){Z(v);$(1d).c({i:Q});$(\'#\'+j+\' #I\').c({i:H});$(\'#\'+j+\' #O\').c({i:N});l=l+1;4(l==b){l=0}8 d=l+1;8 t=$(\'#\'+u+\' .K\').C(l).5();8 11=d;4(11==b){11=0}8 a=$(\'#\'+u+\' .K\').C(11).c(\'1c\');1k(G){D 0:$(\'#\'+7).12(h,g(){$(\'#\'+7).n();$(\'#\'+7).5(t);4(e===1&&9!=1){$(\'#\'+p).5(d+\'/\'+b);$(\'#\'+6).5(k+a)}4(e!=1&&9!=1){$(\'#\'+6).n().5(r+\'\'+d+\'/\'+b+\'<w>\');$(\'#\'+6).s(k+a)}4(9===1){$(\'#\'+6).5(k+a)}$(\'#\'+7).13(h)});y;D 1:$(\'#\'+7).1l(h,g(){$(\'#\'+7).n();$(\'#\'+7).5(t);4(e===1&&9!=1){$(\'#\'+p).5(d+\'/\'+b);$(\'#\'+6).5(k+a)}4(e!=1&&9!=1){$(\'#\'+6).n().5(r+\'\'+d+\'/\'+b+\'<w>\');$(\'#\'+6).s(k+a)}4(9===1){$(\'#\'+6).5(k+a)}$(\'#\'+7).1m(h)});y;D 2:$(\'#\'+7).14({15:"1n",16:0.1o},h,g(){$(\'#\'+7).n();$(\'#\'+7).5(t);$(\'#\'+7).14({15:"U%",16:1},h,g(){4(e===1&&9!=1){$(\'#\'+p).5(d+\'/\'+b);$(\'#\'+6).5(k+a)}4(e!=1&&9!=1){$(\'#\'+6).n().5(r+\'\'+d+\'/\'+b+\'<w>\');$(\'#\'+6).s(k+a)}4(9===1){$(\'#\'+6).5(k+a)}})});y;D 3:$(\'#\'+7).5(t);4(e===1&&9!=1){$(\'#\'+p).5(d+\'/\'+b);$(\'#\'+6).5(k+a)}4(e!=1&&9!=1){$(\'#\'+6).n().5(r+\'\'+d+\'/\'+b+\'<w>\');$(\'#\'+6).s(k+a)}4(9===1){$(\'#\'+6).5(k+a)}y;1p:$(\'#\'+7).12(h,g(){$(\'#\'+7).n();$(\'#\'+7).5(t);4(e===1&&9!=1){$(\'#\'+p).5(d+\'/\'+b);$(\'#\'+6).5(k+a)}4(e!=1&&9!=1){$(\'#\'+6).n().5(r+\'\'+d+\'/\'+b+\'<w>\');$(\'#\'+6).s(k+a)}4(9===1){$(\'#\'+6).5(k+a)}$(\'#\'+7).13(h)});y}4(A===x){v=E(V,L,l)}});$(\'#\'+j+\' #I\').T(g(){Z(v);$(1d).c({i:P});$(\'#\'+j+\' #J\').c({i:B});$(\'#\'+j+\' #O\').c({i:N});l=l-1;4(l<0){l=b-1}8 d=l+1;8 17=d-2;4(17<0){17=b-1}8 t=$(\'#\'+u+\' .K\').C(l).5();8 a=$(\'#\'+u+\' .K\').C(17).c(\'1c\');1k(G){D 0:$(\'#\'+7).12(h,g(){$(\'#\'+7).n();$(\'#\'+7).5(t);4(e===1&&9!=1){$(\'#\'+p).5(d+\'/\'+b);$(\'#\'+6).5(o+a)}4(e!=1&&9!=1){$(\'#\'+6).n().5(r+\'\'+d+\'/\'+b+\'<w>\');$(\'#\'+6).s(o+a)}4(9===1){$(\'#\'+6).5(o+a)}$(\'#\'+7).13(h)});y;D 1:$(\'#\'+7).1l(h,g(){$(\'#\'+7).n();$(\'#\'+7).5(t);4(e===1&&9!=1){$(\'#\'+p).5(d+\'/\'+b);$(\'#\'+6).5(o+a)}4(e!=1&&9!=1){$(\'#\'+6).n().5(r+\'\'+d+\'/\'+b+\'<w>\');$(\'#\'+6).s(o+a)}4(9===1){$(\'#\'+6).5(o+a)}$(\'#\'+7).1m(h)});y;D 2:$(\'#\'+7).14({15:"1n",16:0.1o},h,g(){$(\'#\'+7).n();$(\'#\'+7).5(t);$(\'#\'+7).14({15:"U%",16:1},h,g(){4(e===1&&9!=1){$(\'#\'+p).5(d+\'/\'+b);$(\'#\'+6).5(o+a)}4(e!=1&&9!=1){$(\'#\'+6).n().5(r+\'\'+d+\'/\'+b+\'<w>\');$(\'#\'+6).s(o+a)}4(9===1){$(\'#\'+6).5(o+a)}})});y;D 3:$(\'#\'+7).5(t);4(e===1&&9!=1){$(\'#\'+p).5(d+\'/\'+b);$(\'#\'+6).5(o+a)}4(e!=1&&9!=1){$(\'#\'+6).n().5(r+\'\'+d+\'/\'+b+\'<w>\');$(\'#\'+6).s(o+a)}4(9===1){$(\'#\'+6).5(o+a)}y;1p:$(\'#\'+7).12(h,g(){$(\'#\'+7).n();$(\'#\'+7).5(t);4(e===1&&9!=1){$(\'#\'+p).5(d+\'/\'+b);$(\'#\'+6).5(k+a)}4(e!=1&&9!=1){$(\'#\'+6).n().5(r+\'\'+d+\'/\'+b+\'<w>\');$(\'#\'+6).s(o+a)}4(9===1){$(\'#\'+6).5(o+a)}$(\'#\'+7).13(h)});y}4(A===x){v=E(1e,L,l)}});$(\'#\'+j+\' #O\').T(g(){$(1d).c({i:R});$(\'#\'+j+\' #J\').c({i:B});$(\'#\'+j+\' #I\').c({i:H});Z(v)});4(W===x){$(\'#\'+7).1N(g(){Z(v);S=$(\'#\'+j+\' #J\').c(\'i\');Y=$(\'#\'+j+\' #I\').c(\'i\');$(\'#\'+j+\' #O\').c({i:R});$(\'#\'+j+\' #J\').c({i:B});$(\'#\'+j+\' #I\').c({i:H})},g(){$(\'#\'+j+\' #O\').c({i:N});4(S==B&&Y==H){4(A===x){v=E(V,U,l)}}4(S===Q&&A===x){v=E(V,U,l)}4(S===B&&Y===P&&A===x){v=E(1e,U,l)}})}8 1f=1q.E;1q.E=g(18,1g){4(1O 18==\'g\'){8 1r=1P.1Q.1R.1S(1T,2);8 f=(g(){18.1U(1V,1r)});1s 1f(f,1g)}1s 1f(18,1g)};g V(q){4(!q){q=0}F=$(\'#\'+u+\' .1t\').1b();F=F-1;4(q>=F){q=0}$(\'#\'+j+\' #J\').C(q).T();q=q+1}g 1e(q){4(!q){q=0}F=$(".1t").1b();F=F-1;4(q>=F){q=0}$(\'#\'+j+\' #I\').C(q).T();q=q+1}4(A===x){v=E(V,L,1)}}});', 62, 120, '||||if|html|thirdname|secondname|var|news_dis|mynow_explain|mysize|attr|mynum|news_sp||function|effectspeed|src|fourthname|nexttitle|active|option|empty|prevtitle|newscountname||playingtitle|append|mynow|firstname|timer|br|true|break|imagedir|isauto|mynextimg|eq|case|setTimeout|myend|effectis|myprevimg|news_prev|news_next|news_style|newsspeed|gif|mypauseimg|news_pause|myprevimg0|mynextimg0|mypauseimg0|activechk|click|100|autonext|mouseover|disablenewscount|activechkmore|clearTimeout||nextnum|fadeOut|fadeIn|animate|width|opacity|myprevnum|fRef|myfirst|myfirst_explain|size|rel|this|autoprev|_st|mDelay|extend|News|parseInt|switch|slideUp|slideDown|0px|33|default|window|argu|return|news_hide_style|jQuery|init_news|Now|Playing|Next|Prev|6000|600|false|prev|next|pause|news_prev0|http://image.ntreev.net/gc/contents/images/common/btn/prev0|news_next0|http://image.ntreev.net/gc/contents/images/common/btn/next0|news_pause0|pause0|splaynum|hover|typeof|Array|prototype|slice|call|arguments|apply|null'.split('|'), 0, {}));

    // popupWindow.js
    (function($) {
        $.fn.popupWindow = function(instanceSettings) {
            return this.each(function() {
                $(this).click(function() {
                    $.fn.popupWindow.defaultSettings = {
                        centerBrowser: 0,
                        centerScreen: 1,
                        height: 553,
                        left: 0,
                        location: 0,
                        menubar: 0,
                        resizable: 0,
                        scrollbars: 1,
                        status: 0,
                        width: 800,
                        windowName: null,
                        windowURL: null,
                        top: 0,
                        toolbar: 0
                    };
                    settings = $.extend({}, $.fn.popupWindow.defaultSettings, instanceSettings || {});
                    var windowFeatures = 'height=' + settings.height + ',width=' + settings.width + ',toolbar=' + settings.toolbar + ',scrollbars=' + settings.scrollbars + ',status=' + settings.status + ',resizable=' + settings.resizable + ',location=' + settings.location + ',menuBar=' + settings.menubar;
                    settings.windowName = this.name || settings.windowName;
                    settings.windowURL = this.href || settings.windowURL;
                    var centeredY, centeredX;
                    if (settings.centerBrowser) {
                        if ($.browser.msie) {
                            centeredY = (window.screenTop - 120) + ((((document.documentElement.clientHeight + 120) / 2) - (settings.height / 2)));
                            centeredX = window.screenLeft + ((((document.body.offsetWidth + 20) / 2) - (settings.width / 2)))
                        } else {
                            centeredY = window.screenY + (((window.outerHeight / 2) - (settings.height / 2)));
                            centeredX = window.screenX + (((window.outerWidth / 2) - (settings.width / 2)))
                        }
                        window.open(settings.windowURL, settings.windowName, windowFeatures + ',left=' + centeredX + ',top=' + centeredY).focus()
                    } else if (settings.centerScreen) {
                        centeredY = (screen.height - settings.height) / 2;
                        centeredX = (screen.width - settings.width) / 2;
                        window.open(settings.windowURL, settings.windowName, windowFeatures + ',left=' + centeredX + ',top=' + centeredY).focus()
                    } else {
                        window.open(settings.windowURL, settings.windowName, windowFeatures + ',left=' + settings.left + ',top=' + settings.top).focus()
                    }
                    return false
                })
            })
        }
    }
    )(jQuery);

    // popupWindow_fb.js
    (function($) {
        $.fn.popupWindowfb = function(instanceSettings) {
            return this.each(function() {
                $(this).click(function() {
                    $.fn.popupWindowfb.defaultSettings = {
                        centerBrowser: 0,
                        centerScreen: 1,
                        height: 600,
                        left: 0,
                        location: 0,
                        menubar: 0,
                        resizable: 0,
                        scrollbars: 1,
                        status: 0,
                        width: 950,
                        windowName: null,
                        windowURL: null,
                        top: 0,
                        toolbar: 0
                    };
                    settings = $.extend({}, $.fn.popupWindowfb.defaultSettings, instanceSettings || {});
                    var windowFeatures = 'height=' + settings.height + ',width=' + settings.width + ',toolbar=' + settings.toolbar + ',scrollbars=' + settings.scrollbars + ',status=' + settings.status + ',resizable=' + settings.resizable + ',location=' + settings.location + ',menuBar=' + settings.menubar;
                    settings.windowName = this.name || settings.windowName;
                    settings.windowURL = this.href || settings.windowURL;
                    var centeredY, centeredX;
                    if (settings.centerBrowser) {
                        if ($.browser.msie) {
                            centeredY = (window.screenTop - 120) + ((((document.documentElement.clientHeight + 120) / 2) - (settings.height / 2)));
                            centeredX = window.screenLeft + ((((document.body.offsetWidth + 20) / 2) - (settings.width / 2)))
                        } else {
                            centeredY = window.screenY + (((window.outerHeight / 2) - (settings.height / 2)));
                            centeredX = window.screenX + (((window.outerWidth / 2) - (settings.width / 2)))
                        }
                        window.open(settings.windowURL, settings.windowName, windowFeatures + ',left=' + centeredX + ',top=' + centeredY).focus()
                    } else if (settings.centerScreen) {
                        centeredY = (screen.height - settings.height) / 2;
                        centeredX = (screen.width - settings.width) / 2;
                        window.open(settings.windowURL, settings.windowName, windowFeatures + ',left=' + centeredX + ',top=' + centeredY).focus()
                    } else {
                        window.open(settings.windowURL, settings.windowName, windowFeatures + ',left=' + settings.left + ',top=' + settings.top).focus()
                    }
                    return false
                })
            })
        }
    }
    )(jQuery);

    // popwindow.js - Elliot Oh
    var popWindow = {
        parent: "body",
        windowId: null,
        content: null,
        width: null,
        height: null,
        close: function() {
            $(".popup-window").remove();
            $(".popup-overlay").remove()
        },
        mode: null,
        iframe: false,
        open: function() {
            var modal = "";
            modal += "<div class=\"popup-overlay\"></div>";
            modal += "<div id=\"" + this.windowId + "\" class=\"popup-window\" style=\"width:" + this.width + "px; height:" + this.height + "px; margin-top:-" + (this.height / 2) + "px; margin-left:-" + (this.width / 2) + "px;\">";
            modal += this.content;
            modal += "</div>";
            $(this.parent).append(modal);
            if (this.mode != null) {
                $(".popup-window").append("<div class=\"close-" + this.mode + "\"></div>");
                $(".close-" + this.mode).click(function() {
                    popWindow.close()
                })
            } else {
                $(".popup-window").append("<a class=\"close-window\"></a>");
                $(".popup-window").append("<a class=\"btn_skip\"></a>");
                $(".close-window").click(function() {
                    popWindow.close()
                });
                $(".btn_skip").click(function() {
                    popWindow.close()
                })
            }
        }
    };
    var openPopWindow = function(wid, wwidth, wheight, wmode, source, isframe) {
        popWindow.windowId = wid;
        popWindow.width = wwidth;
        popWindow.height = wheight;
        popWindow.mode = wmode;
        popWindow.iframe = isframe;
        if (popWindow.iframe) {
            popWindow.content = ""
        } else {
            popWindow.content = "<div><img src=\"" + source + "\" ></div>"
        }
        popWindow.open()
    };
    $.fn.hoverMenu = function(instanceSettings) {
        $.fn.hoverMenu.defaultSettings = {
            sHeight: 0,
            eHeight: '158px',
            navTime: 100,
            expandThis: '.top_nav_slider'
        };
        var settings = $.extend({}, $.fn.hoverMenu.defaultSettings, instanceSettings || {});
        return this.each(function() {
            $(settings.expandThis).hide().css({
                height: settings.sHeight
            });
            $(this).hover(function(e) {
                e.preventDefault();
                $(settings.expandThis).show().stop().animate({
                    height: settings.eHeight
                }, settings.navTime)
            }, function(e) {
                e.preventDefault();
                $(settings.expandThis).stop().animate({
                    height: settings.sHeight
                }, settings.navTime, 'linear', function() {
                    $(this).hide()
                })
            })
        })
    }
    ;

}
 