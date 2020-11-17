function runJewelryCatalogDefer(e) {
    if (25 == ++tries) {
        var t = document.createElement("script");
        (t.src = "https://code.jquery.com/jquery-3.4.1.min.js"), (t.type = "text/javascript"), document.getElementsByTagName("head")[0].appendChild(t);
    }
    window.jQuery
        ? runJewelryCatalog()
        : setTimeout(function () {
              runJewelryCatalogDefer(e);
          }, 50);
}
function runJewelryCatalog() {
    function e(e, t, n, r) {
        e = (e + "").replace(/[^0-9+\-Ee.]/g, "");
        var i = isFinite(+e) ? +e : 0,
            o = isFinite(+t) ? Math.abs(t) : 0,
            a = void 0 === r ? "," : r,
            s = void 0 === n ? "." : n,
            l = "";
        return (
            (l = (o
                ? (function (e, t) {
                      var n = Math.pow(10, t);
                      return "" + Math.round(e * n) / n;
                  })(i, o)
                : "" + Math.round(i)
            ).split("."))[0].length > 3 && (l[0] = l[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, a)),
            (l[1] || "").length < o && ((l[1] = l[1] || ""), (l[1] += new Array(o - l[1].length + 1).join("0"))),
            l.join(s)
        );
    }
    function t(e) {
        var t = window.location.search.match(new RegExp("[?&]" + e + "=([^&]*)(&?)", "i"));
        return t ? t[1] : t;
    }
    !(function (e) {
        var t;
        if (("function" == typeof define && define.amd && (define(e), (t = !0)), "object" == typeof exports && ((module.exports = e()), (t = !0)), !t)) {
            var n = window.JewelryCookies,
                r = (window.JewelryCookies = e());
            r.noConflict = function () {
                return (window.JewelryCookies = n), r;
            };
        }
    })(function () {
        function e() {
            for (var e = 0, t = {}; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) t[r] = n[r];
            }
            return t;
        }
        function t(e) {
            return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
        }
        function n(r) {
            function i() {}
            function o(t, n, o) {
                if ("undefined" != typeof document) {
                    "number" == typeof (o = e({ path: "/" }, i.defaults, o)).expires && (o.expires = new Date(1 * new Date() + 864e5 * o.expires)), (o.expires = o.expires ? o.expires.toUTCString() : "");
                    try {
                        var a = JSON.stringify(n);
                        /^[\{\[]/.test(a) && (n = a);
                    } catch (e) {}
                    (n = r.write ? r.write(n, t) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent)),
                        (t = encodeURIComponent(String(t))
                            .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
                            .replace(/[\(\)]/g, escape));
                    var s = "";
                    for (var l in o) o[l] && ((s += "; " + l), !0 !== o[l] && (s += "=" + o[l].split(";")[0]));
                    return (document.cookie = t + "=" + n + s);
                }
            }
            function a(e, n) {
                if ("undefined" != typeof document) {
                    for (var i = {}, o = document.cookie ? document.cookie.split("; ") : [], a = 0; a < o.length; a++) {
                        var s = o[a].split("="),
                            l = s.slice(1).join("=");
                        n || '"' !== l.charAt(0) || (l = l.slice(1, -1));
                        try {
                            var c = t(s[0]);
                            if (((l = (r.read || r)(l, c) || t(l)), n))
                                try {
                                    l = JSON.parse(l);
                                } catch (e) {}
                            if (((i[c] = l), e === c)) break;
                        } catch (e) {}
                    }
                    return e ? i[e] : i;
                }
            }
            return (
                (i.set = o),
                (i.get = function (e) {
                    return a(e, !1);
                }),
                (i.getJSON = function (e) {
                    return a(e, !0);
                }),
                (i.remove = function (t, n) {
                    o(t, "", e(n, { expires: -1 }));
                }),
                (i.defaults = {}),
                (i.withConverter = n),
                i
            );
        }
        return n(function () {});
    }),
        (function (e, t) {
            "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t(((e = e || self).Popper = {}));
        })(this, function (e) {
            function t(e) {
                return { width: (e = e.getBoundingClientRect()).width, height: e.height, top: e.top, right: e.right, bottom: e.bottom, left: e.left, x: e.left, y: e.top };
            }
            function n(e) {
                return "[object Window]" !== e.toString() ? ((e = e.ownerDocument) ? e.defaultView : window) : e;
            }
            function r(e) {
                return { scrollLeft: (e = n(e)).pageXOffset, scrollTop: e.pageYOffset };
            }
            function i(e) {
                return e instanceof n(e).Element || e instanceof Element;
            }
            function o(e) {
                return e instanceof n(e).HTMLElement || e instanceof HTMLElement;
            }
            function a(e) {
                return e ? (e.nodeName || "").toLowerCase() : null;
            }
            function s(e) {
                return (i(e) ? e.ownerDocument : e.document).documentElement;
            }
            function l(e) {
                return t(s(e)).left + r(e).scrollLeft;
            }
            function c(e) {
                return n(e).getComputedStyle(e);
            }
            function p(e) {
                return (e = c(e)), /auto|scroll|overlay|hidden/.test(e.overflow + e.overflowY + e.overflowX);
            }
            function u(e, i, c) {
                void 0 === c && (c = !1);
                var u = s(i);
                e = t(e);
                var d = { scrollLeft: 0, scrollTop: 0 },
                    f = { x: 0, y: 0 };
                return (
                    c || (("body" !== a(i) || p(u)) && (d = i !== n(i) && o(i) ? { scrollLeft: i.scrollLeft, scrollTop: i.scrollTop } : r(i)), o(i) ? (((f = t(i)).x += i.clientLeft), (f.y += i.clientTop)) : u && (f.x = l(u))),
                    { x: e.left + d.scrollLeft - f.x, y: e.top + d.scrollTop - f.y, width: e.width, height: e.height }
                );
            }
            function d(e) {
                return { x: e.offsetLeft, y: e.offsetTop, width: e.offsetWidth, height: e.offsetHeight };
            }
            function f(e) {
                return "html" === a(e) ? e : e.assignedSlot || e.parentNode || e.host || s(e);
            }
            function h(e, t) {
                void 0 === t && (t = []);
                var r = (function e(t) {
                    return 0 <= ["html", "body", "#document"].indexOf(a(t)) ? t.ownerDocument.body : o(t) && p(t) ? t : e(f(t));
                })(e);
                e = "body" === a(r);
                var i = n(r);
                return (r = e ? [i].concat(i.visualViewport || [], p(r) ? r : []) : r), (t = t.concat(r)), e ? t : t.concat(h(f(r)));
            }
            function m(e) {
                return o(e) && "fixed" !== c(e).position ? e.offsetParent : null;
            }
            function y(e) {
                var t = n(e);
                for (e = m(e); e && 0 <= ["table", "td", "th"].indexOf(a(e)); ) e = m(e);
                return e && "body" === a(e) && "static" === c(e).position ? t : e || t;
            }
            function g(e) {
                return e.split("-")[0];
            }
            function v() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return !t.some(function (e) {
                    return !(e && "function" == typeof e.getBoundingClientRect);
                });
            }
            function w(e) {
                void 0 === e && (e = {});
                var t = e.defaultModifiers,
                    n = void 0 === t ? [] : t,
                    r = void 0 === (e = e.defaultOptions) ? R : e;
                return function (e, t, o) {
                    function a() {
                        l.forEach(function (e) {
                            return e();
                        }),
                            (l = []);
                    }
                    void 0 === o && (o = r);
                    var s = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, R, {}, r), modifiersData: {}, elements: { reference: e, popper: t }, attributes: {}, styles: {} },
                        l = [],
                        c = !1,
                        p = {
                            state: s,
                            setOptions: function (o) {
                                return (
                                    a(),
                                    (s.options = Object.assign({}, r, {}, s.options, {}, o)),
                                    (s.scrollParents = { reference: i(e) ? h(e) : e.contextElement ? h(e.contextElement) : [], popper: h(t) }),
                                    (o = (function (e) {
                                        var t = (function (e) {
                                            var t = new Map(),
                                                n = new Set(),
                                                r = [];
                                            return (
                                                e.forEach(function (e) {
                                                    t.set(e.name, e);
                                                }),
                                                e.forEach(function (e) {
                                                    n.has(e.name) ||
                                                        (function e(i) {
                                                            n.add(i.name),
                                                                [].concat(i.requires || [], i.requiresIfExists || []).forEach(function (r) {
                                                                    n.has(r) || ((r = t.get(r)) && e(r));
                                                                }),
                                                                r.push(i);
                                                        })(e);
                                                }),
                                                r
                                            );
                                        })(e);
                                        return U.reduce(function (e, n) {
                                            return e.concat(
                                                t.filter(function (e) {
                                                    return e.phase === n;
                                                })
                                            );
                                        }, []);
                                    })(
                                        (function (e) {
                                            var t = [].concat(n, s.options.modifiers).reduce(function (e, t) {
                                                var n = e[t.name];
                                                return (e[t.name] = n ? Object.assign({}, n, {}, t, { options: Object.assign({}, n.options, {}, t.options), data: Object.assign({}, n.data, {}, t.data) }) : t), e;
                                            }, {});
                                            return Object.keys(t).map(function (e) {
                                                return t[e];
                                            });
                                        })()
                                    )),
                                    (s.orderedModifiers = o.filter(function (e) {
                                        return e.enabled;
                                    })),
                                    s.orderedModifiers.forEach(function (e) {
                                        var t = e.name,
                                            n = e.options;
                                        (n = void 0 === n ? {} : n), "function" == typeof (e = e.effect) && ((t = e({ state: s, name: t, instance: p, options: n })), l.push(t || function () {}));
                                    }),
                                    p.update()
                                );
                            },
                            forceUpdate: function () {
                                if (!c) {
                                    var e = s.elements,
                                        t = e.reference;
                                    if (v(t, (e = e.popper)))
                                        for (
                                            s.rects = { reference: u(t, y(e), "fixed" === s.options.strategy), popper: d(e) },
                                                s.reset = !1,
                                                s.placement = s.options.placement,
                                                s.orderedModifiers.forEach(function (e) {
                                                    return (s.modifiersData[e.name] = Object.assign({}, e.data));
                                                }),
                                                t = 0;
                                            t < s.orderedModifiers.length;
                                            t++
                                        )
                                            if (!0 === s.reset) (s.reset = !1), (t = -1);
                                            else {
                                                var n = s.orderedModifiers[t];
                                                e = n.fn;
                                                var r = n.options;
                                                (r = void 0 === r ? {} : r), (n = n.name), "function" == typeof e && (s = e({ state: s, options: r, name: n, instance: p }) || s);
                                            }
                                }
                            },
                            update: (function (e) {
                                var t;
                                return function () {
                                    return (
                                        t ||
                                            (t = new Promise(function (n) {
                                                Promise.resolve().then(function () {
                                                    (t = void 0), n(e());
                                                });
                                            })),
                                        t
                                    );
                                };
                            })(function () {
                                return new Promise(function (e) {
                                    p.forceUpdate(), e(s);
                                });
                            }),
                            destroy: function () {
                                a(), (c = !0);
                            },
                        };
                    return v(e, t)
                        ? (p.setOptions(o).then(function (e) {
                              !c && o.onFirstUpdate && o.onFirstUpdate(e);
                          }),
                          p)
                        : p;
                };
            }
            function b(e) {
                return 0 <= ["top", "bottom"].indexOf(e) ? "x" : "y";
            }
            function j(e) {
                var t = e.reference,
                    n = e.element,
                    r = (e = e.placement) ? g(e) : null;
                e = e ? e.split("-")[1] : null;
                var i = t.x + t.width / 2 - n.width / 2,
                    o = t.y + t.height / 2 - n.height / 2;
                switch (r) {
                    case "top":
                        i = { x: i, y: t.y - n.height };
                        break;
                    case "bottom":
                        i = { x: i, y: t.y + t.height };
                        break;
                    case "right":
                        i = { x: t.x + t.width, y: o };
                        break;
                    case "left":
                        i = { x: t.x - n.width, y: o };
                        break;
                    default:
                        i = { x: t.x, y: t.y };
                }
                if (null != (r = r ? b(r) : null))
                    switch (((o = "y" === r ? "height" : "width"), e)) {
                        case "start":
                            i[r] = Math.floor(i[r]) - Math.floor(t[o] / 2 - n[o] / 2);
                            break;
                        case "end":
                            i[r] = Math.floor(i[r]) + Math.ceil(t[o] / 2 - n[o] / 2);
                    }
                return i;
            }
            function x(e) {
                var t,
                    r = e.popper,
                    i = e.popperRect,
                    o = e.placement,
                    a = e.offsets,
                    l = e.position,
                    c = e.gpuAcceleration,
                    p = e.adaptive,
                    u = window.devicePixelRatio || 1;
                (e = Math.round(a.x * u) / u || 0), (u = Math.round(a.y * u) / u || 0);
                var d = a.hasOwnProperty("x");
                a = a.hasOwnProperty("y");
                var f,
                    h = "left",
                    m = "top",
                    g = window;
                if (p) {
                    var v = y(r);
                    v === n(r) && (v = s(r)), "top" === o && ((m = "bottom"), (u -= v.clientHeight - i.height), (u *= c ? 1 : -1)), "left" === o && ((h = "right"), (e -= v.clientWidth - i.width), (e *= c ? 1 : -1));
                }
                return (
                    (r = Object.assign({ position: l }, p && B)),
                    c
                        ? Object.assign({}, r, (((f = {})[m] = a ? "0" : ""), (f[h] = d ? "0" : ""), (f.transform = 2 > (g.devicePixelRatio || 1) ? "translate(" + e + "px, " + u + "px)" : "translate3d(" + e + "px, " + u + "px, 0)"), f))
                        : Object.assign({}, r, (((t = {})[m] = a ? u + "px" : ""), (t[h] = d ? e + "px" : ""), (t.transform = ""), t))
                );
            }
            function S(e) {
                return e.replace(/left|right|bottom|top/g, function (e) {
                    return V[e];
                });
            }
            function C(e) {
                return e.replace(/start|end/g, function (e) {
                    return H[e];
                });
            }
            function E(e, t) {
                var n = !(!t.getRootNode || !t.getRootNode().host);
                if (e.contains(t)) return !0;
                if (n)
                    do {
                        if (t && e.isSameNode(t)) return !0;
                        t = t.parentNode || t.host;
                    } while (t);
                return !1;
            }
            function T(e) {
                return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
            }
            function k(e, i) {
                if ("viewport" === i) {
                    var a = n(e);
                    (e = a.visualViewport), (i = a.innerWidth), (a = a.innerHeight), e && /iPhone|iPod|iPad/.test(navigator.platform) && ((i = e.width), (a = e.height)), (e = T({ width: i, height: a, x: 0, y: 0 }));
                } else o(i) ? (e = t(i)) : ((e = n((a = s(e)))), (i = r(a)), ((a = u(s(a), e)).height = Math.max(a.height, e.innerHeight)), (a.width = Math.max(a.width, e.innerWidth)), (a.x = -i.scrollLeft), (a.y = -i.scrollTop), (e = T(a)));
                return e;
            }
            function O(e, t, r) {
                return (
                    (t =
                        "clippingParents" === t
                            ? (function (e) {
                                  var t = h(e),
                                      n = 0 <= ["absolute", "fixed"].indexOf(c(e).position) && o(e) ? y(e) : e;
                                  return i(n)
                                      ? t.filter(function (e) {
                                            return i(e) && E(e, n);
                                        })
                                      : [];
                              })(e)
                            : [].concat(t)),
                    ((r = (r = [].concat(t, [r])).reduce(function (t, r) {
                        var i = k(e, r),
                            p = n((r = o(r) ? r : s(e))),
                            u = o(r) ? c(r) : {};
                        parseFloat(u.borderTopWidth);
                        var d = parseFloat(u.borderRightWidth) || 0,
                            f = parseFloat(u.borderBottomWidth) || 0,
                            h = parseFloat(u.borderLeftWidth) || 0;
                        u = "html" === a(r);
                        var m = l(r),
                            y = r.clientWidth + d,
                            g = r.clientHeight + f;
                        return (
                            u && 50 < p.innerHeight - r.clientHeight && (g = p.innerHeight - f),
                            (f = u ? 0 : r.clientTop),
                            (d = r.clientLeft > h ? d : u ? p.innerWidth - y - m : r.offsetWidth - y),
                            (p = u ? p.innerHeight - g : r.offsetHeight - g),
                            (r = u ? m : r.clientLeft),
                            (t.top = Math.max(i.top + f, t.top)),
                            (t.right = Math.min(i.right - d, t.right)),
                            (t.bottom = Math.min(i.bottom - p, t.bottom)),
                            (t.left = Math.max(i.left + r, t.left)),
                            t
                        );
                    }, k(e, r[0]))).width = r.right - r.left),
                    (r.height = r.bottom - r.top),
                    (r.x = r.left),
                    (r.y = r.top),
                    r
                );
            }
            function Q(e) {
                return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, {}, e);
            }
            function _(e, t) {
                return t.reduce(function (t, n) {
                    return (t[n] = e), t;
                }, {});
            }
            function A(e, n) {
                void 0 === n && (n = {});
                var r = n;
                n = void 0 === (n = r.placement) ? e.placement : n;
                var o = r.boundary,
                    a = void 0 === o ? "clippingParents" : o,
                    l = void 0 === (o = r.rootBoundary) ? "viewport" : o;
                o = void 0 === (o = r.elementContext) ? "popper" : o;
                var c = r.altBoundary,
                    p = void 0 !== c && c;
                r = Q("number" != typeof (r = void 0 === (r = r.padding) ? 0 : r) ? r : _(r, L));
                var u = e.elements.reference;
                (c = e.rects.popper),
                    (a = O(i((p = e.elements[p ? ("popper" === o ? "reference" : "popper") : o])) ? p : p.contextElement || s(e.elements.popper), a, l)),
                    (p = j({ reference: (l = t(u)), element: c, strategy: "absolute", placement: n })),
                    (c = T(Object.assign({}, c, {}, p))),
                    (l = "popper" === o ? c : l);
                var d = { top: a.top - l.top + r.top, bottom: l.bottom - a.bottom + r.bottom, left: a.left - l.left + r.left, right: l.right - a.right + r.right };
                if (((e = e.modifiersData.offset), "popper" === o && e)) {
                    var f = e[n];
                    Object.keys(d).forEach(function (e) {
                        var t = 0 <= ["right", "bottom"].indexOf(e) ? 1 : -1,
                            n = 0 <= ["top", "bottom"].indexOf(e) ? "y" : "x";
                        d[e] += f[n] * t;
                    });
                }
                return d;
            }
            function P(e, t, n) {
                return void 0 === n && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
            }
            function M(e) {
                return ["top", "right", "bottom", "left"].some(function (t) {
                    return 0 <= e[t];
                });
            }
            var L = ["top", "bottom", "right", "left"],
                D = L.reduce(function (e, t) {
                    return e.concat([t + "-start", t + "-end"]);
                }, []),
                N = [].concat(L, ["auto"]).reduce(function (e, t) {
                    return e.concat([t, t + "-start", t + "-end"]);
                }, []),
                U = "beforeRead read afterRead beforeMain main afterMain beforeWrite write afterWrite".split(" "),
                R = { placement: "bottom", modifiers: [], strategy: "absolute" },
                I = { passive: !0 },
                B = { top: "auto", right: "auto", bottom: "auto", left: "auto" },
                V = { left: "right", right: "left", bottom: "top", top: "bottom" },
                H = { start: "end", end: "start" },
                W = [
                    {
                        name: "eventListeners",
                        enabled: !0,
                        phase: "write",
                        fn: function () {},
                        effect: function (e) {
                            var t = e.state,
                                r = e.instance,
                                i = (e = e.options).scroll,
                                o = void 0 === i || i,
                                a = void 0 === (e = e.resize) || e,
                                s = n(t.elements.popper),
                                l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                            return (
                                o &&
                                    l.forEach(function (e) {
                                        e.addEventListener("scroll", r.update, I);
                                    }),
                                a && s.addEventListener("resize", r.update, I),
                                function () {
                                    o &&
                                        l.forEach(function (e) {
                                            e.removeEventListener("scroll", r.update, I);
                                        }),
                                        a && s.removeEventListener("resize", r.update, I);
                                }
                            );
                        },
                        data: {},
                    },
                    {
                        name: "popperOffsets",
                        enabled: !0,
                        phase: "read",
                        fn: function (e) {
                            var t = e.state;
                            t.modifiersData[e.name] = j({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement });
                        },
                        data: {},
                    },
                    {
                        name: "computeStyles",
                        enabled: !0,
                        phase: "beforeWrite",
                        fn: function (e) {
                            var t = e.state,
                                n = e.options;
                            (e = void 0 === (e = n.gpuAcceleration) || e),
                                (n = void 0 === (n = n.adaptive) || n),
                                (e = { placement: g(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: e }),
                                null != t.modifiersData.popperOffsets &&
                                    (t.styles.popper = Object.assign({}, t.styles.popper, {}, x(Object.assign({}, e, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: n })))),
                                null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, {}, x(Object.assign({}, e, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1 })))),
                                (t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement }));
                        },
                        data: {},
                    },
                    {
                        name: "applyStyles",
                        enabled: !0,
                        phase: "write",
                        fn: function (e) {
                            var t = e.state;
                            Object.keys(t.elements).forEach(function (e) {
                                var n = t.styles[e] || {},
                                    r = t.attributes[e] || {},
                                    i = t.elements[e];
                                o(i) &&
                                    a(i) &&
                                    (Object.assign(i.style, n),
                                    Object.keys(r).forEach(function (e) {
                                        var t = r[e];
                                        !1 === t ? i.removeAttribute(e) : i.setAttribute(e, !0 === t ? "" : t);
                                    }));
                            });
                        },
                        effect: function (e) {
                            var t = e.state,
                                n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
                            return (
                                Object.assign(t.elements.popper.style, n.popper),
                                t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
                                function () {
                                    Object.keys(t.elements).forEach(function (e) {
                                        var r = t.elements[e],
                                            i = t.attributes[e] || {};
                                        (e = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce(function (e, t) {
                                            return (e[t] = ""), e;
                                        }, {})),
                                            o(r) &&
                                                a(r) &&
                                                (Object.assign(r.style, e),
                                                Object.keys(i).forEach(function (e) {
                                                    r.removeAttribute(e);
                                                }));
                                    });
                                }
                            );
                        },
                        requires: ["computeStyles"],
                    },
                    {
                        name: "offset",
                        enabled: !0,
                        phase: "main",
                        requires: ["popperOffsets"],
                        fn: function (e) {
                            var t = e.state,
                                n = e.name,
                                r = void 0 === (e = e.options.offset) ? [0, 0] : e,
                                i = (e = N.reduce(function (e, n) {
                                    var i = t.rects,
                                        o = g(n),
                                        a = 0 <= ["left", "top"].indexOf(o) ? -1 : 1,
                                        s = "function" == typeof r ? r(Object.assign({}, i, { placement: n })) : r;
                                    return (i = (i = s[0]) || 0), (s = ((s = s[1]) || 0) * a), (o = 0 <= ["left", "right"].indexOf(o) ? { x: s, y: i } : { x: i, y: s }), (e[n] = o), e;
                                }, {}))[t.placement],
                                o = i.x;
                            (i = i.y), null != t.modifiersData.popperOffsets && ((t.modifiersData.popperOffsets.x += o), (t.modifiersData.popperOffsets.y += i)), (t.modifiersData[n] = e);
                        },
                    },
                    {
                        name: "flip",
                        enabled: !0,
                        phase: "main",
                        fn: function (e) {
                            var t = e.state,
                                n = e.options;
                            if (((e = e.name), !t.modifiersData[e]._skip)) {
                                var r = n.mainAxis;
                                r = void 0 === r || r;
                                var i = n.altAxis;
                                i = void 0 === i || i;
                                var o = n.fallbackPlacements,
                                    a = n.padding,
                                    s = n.boundary,
                                    l = n.rootBoundary,
                                    c = n.altBoundary,
                                    p = n.flipVariations,
                                    u = void 0 === p || p,
                                    d = n.allowedAutoPlacements;
                                (p = g((n = t.options.placement))),
                                    (o =
                                        o ||
                                        (p !== n && u
                                            ? (function (e) {
                                                  if ("auto" === g(e)) return [];
                                                  var t = S(e);
                                                  return [C(e), t, C(t)];
                                              })(n)
                                            : [S(n)]));
                                var f = [n].concat(o).reduce(function (e, n) {
                                    return e.concat(
                                        "auto" === g(n)
                                            ? (function (e, t) {
                                                  void 0 === t && (t = {});
                                                  var n = t.boundary,
                                                      r = t.rootBoundary,
                                                      i = t.padding,
                                                      o = t.flipVariations,
                                                      a = t.allowedAutoPlacements,
                                                      s = void 0 === a ? N : a,
                                                      l = t.placement.split("-")[1],
                                                      c = (l
                                                          ? o
                                                              ? D
                                                              : D.filter(function (e) {
                                                                    return e.split("-")[1] === l;
                                                                })
                                                          : L
                                                      )
                                                          .filter(function (e) {
                                                              return 0 <= s.indexOf(e);
                                                          })
                                                          .reduce(function (t, o) {
                                                              return (t[o] = A(e, { placement: o, boundary: n, rootBoundary: r, padding: i })[g(o)]), t;
                                                          }, {});
                                                  return Object.keys(c).sort(function (e, t) {
                                                      return c[e] - c[t];
                                                  });
                                              })(t, { placement: n, boundary: s, rootBoundary: l, padding: a, flipVariations: u, allowedAutoPlacements: d })
                                            : n
                                    );
                                }, []);
                                (n = t.rects.reference), (o = t.rects.popper);
                                var h = new Map();
                                p = !0;
                                for (var m = f[0], y = 0; y < f.length; y++) {
                                    var v = f[y],
                                        w = g(v),
                                        b = "start" === v.split("-")[1],
                                        j = 0 <= ["top", "bottom"].indexOf(w),
                                        x = j ? "width" : "height",
                                        E = A(t, { placement: v, boundary: s, rootBoundary: l, altBoundary: c, padding: a });
                                    if (
                                        ((b = j ? (b ? "right" : "left") : b ? "bottom" : "top"),
                                        n[x] > o[x] && (b = S(b)),
                                        (x = S(b)),
                                        (j = []),
                                        r && j.push(0 >= E[w]),
                                        i && j.push(0 >= E[b], 0 >= E[x]),
                                        j.every(function (e) {
                                            return e;
                                        }))
                                    ) {
                                        (m = v), (p = !1);
                                        break;
                                    }
                                    h.set(v, j);
                                }
                                if (p)
                                    for (
                                        r = function (e) {
                                            var t = f.find(function (t) {
                                                if ((t = h.get(t)))
                                                    return t.slice(0, e).every(function (e) {
                                                        return e;
                                                    });
                                            });
                                            if (t) return (m = t), "break";
                                        },
                                            i = u ? 3 : 1;
                                        0 < i && "break" !== r(i);
                                        i--
                                    );
                                t.placement !== m && ((t.modifiersData[e]._skip = !0), (t.placement = m), (t.reset = !0));
                            }
                        },
                        requiresIfExists: ["offset"],
                        data: { _skip: !1 },
                    },
                    {
                        name: "preventOverflow",
                        enabled: !0,
                        phase: "main",
                        fn: function (e) {
                            var t = e.state,
                                n = e.options;
                            e = e.name;
                            var r = n.mainAxis,
                                i = void 0 === r || r;
                            r = void 0 !== (r = n.altAxis) && r;
                            var o = n.tether;
                            o = void 0 === o || o;
                            var a = n.tetherOffset,
                                s = void 0 === a ? 0 : a;
                            (n = A(t, { boundary: n.boundary, rootBoundary: n.rootBoundary, padding: n.padding, altBoundary: n.altBoundary })), (a = g(t.placement));
                            var l = t.placement.split("-")[1],
                                c = !l,
                                p = b(a);
                            a = "x" === p ? "y" : "x";
                            var u = t.modifiersData.popperOffsets,
                                f = t.rects.reference,
                                h = t.rects.popper,
                                m = "function" == typeof s ? s(Object.assign({}, t.rects, { placement: t.placement })) : s;
                            if (((s = { x: 0, y: 0 }), u)) {
                                if (i) {
                                    var v = "y" === p ? "top" : "left",
                                        w = "y" === p ? "bottom" : "right",
                                        j = "y" === p ? "height" : "width";
                                    i = u[p];
                                    var x = u[p] + n[v],
                                        S = u[p] - n[w],
                                        C = o ? -h[j] / 2 : 0,
                                        E = "start" === l ? f[j] : h[j];
                                    (l = "start" === l ? -h[j] : -f[j]), (h = t.elements.arrow), (h = o && h ? d(h) : { width: 0, height: 0 });
                                    var T = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : { top: 0, right: 0, bottom: 0, left: 0 };
                                    (v = T[v]),
                                        (w = T[w]),
                                        (h = Math.max(0, Math.min(f[j], h[j]))),
                                        (E = c ? f[j] / 2 - C - h - v - m : E - h - v - m),
                                        (c = c ? -f[j] / 2 + C + h + w + m : l + h + w + m),
                                        (m = t.elements.arrow && y(t.elements.arrow)),
                                        (f = t.modifiersData.offset ? t.modifiersData.offset[t.placement][p] : 0),
                                        (m = u[p] + E - f - (m ? ("y" === p ? m.clientTop || 0 : m.clientLeft || 0) : 0)),
                                        (c = u[p] + c - f),
                                        (o = Math.max(o ? Math.min(x, m) : x, Math.min(i, o ? Math.max(S, c) : S))),
                                        (u[p] = o),
                                        (s[p] = o - i);
                                }
                                r && ((r = u[a]), (o = Math.max(r + n["x" === p ? "top" : "left"], Math.min(r, r - n["x" === p ? "bottom" : "right"]))), (u[a] = o), (s[a] = o - r)), (t.modifiersData[e] = s);
                            }
                        },
                        requiresIfExists: ["offset"],
                    },
                    {
                        name: "arrow",
                        enabled: !0,
                        phase: "main",
                        fn: function (e) {
                            var t,
                                n = e.state;
                            e = e.name;
                            var r = n.elements.arrow,
                                i = n.modifiersData.popperOffsets,
                                o = g(n.placement),
                                a = b(o);
                            if (((o = 0 <= ["left", "right"].indexOf(o) ? "height" : "width"), r && i)) {
                                var s = n.modifiersData[e + "#persistent"].padding,
                                    l = d(r),
                                    c = "y" === a ? "top" : "left",
                                    p = "y" === a ? "bottom" : "right",
                                    u = n.rects.reference[o] + n.rects.reference[a] - i[a] - n.rects.popper[o];
                                (i = i[a] - n.rects.reference[a]),
                                    (u = (r = (r = y(r)) ? ("y" === a ? r.clientHeight || 0 : r.clientWidth || 0) : 0) / 2 - l[o] / 2 + (u / 2 - i / 2)),
                                    (o = Math.max(s[c], Math.min(u, r - l[o] - s[p]))),
                                    (n.modifiersData[e] = (((t = {})[a] = o), (t.centerOffset = o - u), t));
                            }
                        },
                        effect: function (e) {
                            var t = e.state,
                                n = e.options;
                            e = e.name;
                            var r = n.element;
                            if (((r = void 0 === r ? "[data-popper-arrow]" : r), (n = void 0 === (n = n.padding) ? 0 : n), null != r)) {
                                if ("string" == typeof r && !(r = t.elements.popper.querySelector(r))) return;
                                E(t.elements.popper, r) && ((t.elements.arrow = r), (t.modifiersData[e + "#persistent"] = { padding: Q("number" != typeof n ? n : _(n, L)) }));
                            }
                        },
                        requires: ["popperOffsets"],
                        requiresIfExists: ["preventOverflow"],
                    },
                    {
                        name: "hide",
                        enabled: !0,
                        phase: "main",
                        requiresIfExists: ["preventOverflow"],
                        fn: function (e) {
                            var t = e.state;
                            e = e.name;
                            var n = t.rects.reference,
                                r = t.rects.popper,
                                i = t.modifiersData.preventOverflow,
                                o = A(t, { elementContext: "reference" }),
                                a = A(t, { altBoundary: !0 });
                            (n = P(o, n)),
                                (r = P(a, r, i)),
                                (i = M(n)),
                                (a = M(r)),
                                (t.modifiersData[e] = { referenceClippingOffsets: n, popperEscapeOffsets: r, isReferenceHidden: i, hasPopperEscaped: a }),
                                (t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": i, "data-popper-escaped": a }));
                        },
                    },
                ],
                F = w({ defaultModifiers: W });
            (e.createPopper = F), (e.defaultModifiers = W), (e.detectOverflow = A), (e.popperGenerator = w), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (function (e, t) {
            "object" == typeof exports && "undefined" != typeof module ? (module.exports = t(require("@popperjs/core"))) : "function" == typeof define && define.amd ? define(["@popperjs/core"], t) : ((e = e || self).tippy = t(e.Popper));
        })(this, function (e) {
            "use strict";
            function t(e, t, n) {
                if (Array.isArray(e)) {
                    var r = e[t];
                    return null == r ? (Array.isArray(n) ? n[t] : n) : r;
                }
                return e;
            }
            function n(e, t) {
                var n = {}.toString.call(e);
                return 0 === n.indexOf("[object") && n.indexOf(t + "]") > -1;
            }
            function r(e, t) {
                return "function" == typeof e ? e.apply(void 0, t) : e;
            }
            function i(e, t) {
                return 0 === t
                    ? e
                    : function (r) {
                          clearTimeout(n),
                              (n = setTimeout(function () {
                                  e(r);
                              }, t));
                      };
                var n;
            }
            function o(e, t) {
                var n = Object.assign({}, e);
                return (
                    t.forEach(function (e) {
                        delete n[e];
                    }),
                    n
                );
            }
            function a(e) {
                return [].concat(e);
            }
            function s(e, t) {
                -1 === e.indexOf(t) && e.push(t);
            }
            function l(e) {
                return e.split("-")[0];
            }
            function c(e) {
                return [].slice.call(e);
            }
            function p() {
                return document.createElement("div");
            }
            function u(e) {
                return ["Element", "Fragment"].some(function (t) {
                    return n(e, t);
                });
            }
            function d(e) {
                return n(e, "MouseEvent");
            }
            function f(e) {
                return !(!e || !e._tippy || e._tippy.reference !== e);
            }
            function h(e, t) {
                e.forEach(function (e) {
                    e && (e.style.transitionDuration = t + "ms");
                });
            }
            function m(e, t) {
                e.forEach(function (e) {
                    e && e.setAttribute("data-state", t);
                });
            }
            function y(e) {
                var t = a(e)[0];
                return (t && t.ownerDocument) || document;
            }
            function g(e, t, n) {
                var r = t + "EventListener";
                ["transitionend", "webkitTransitionEnd"].forEach(function (t) {
                    e[r](t, n);
                });
            }
            function v() {
                D.isTouch || ((D.isTouch = !0), window.performance && document.addEventListener("mousemove", w));
            }
            function w() {
                var e = performance.now();
                e - N < 20 && ((D.isTouch = !1), document.removeEventListener("mousemove", w)), (N = e);
            }
            function b() {
                var e = document.activeElement;
                if (f(e)) {
                    var t = e._tippy;
                    e.blur && !t.state.isVisible && e.blur();
                }
            }
            function j(e) {
                var t = (e.plugins || []).reduce(function (t, n) {
                    var r = n.name,
                        i = n.defaultValue;
                    return r && (t[r] = void 0 !== e[r] ? e[r] : i), t;
                }, {});
                return Object.assign({}, e, {}, t);
            }
            function x(e, t) {
                var n = Object.assign(
                    {},
                    t,
                    { content: r(t.content, [e]) },
                    t.ignoreAttributes
                        ? {}
                        : (function (e, t) {
                              return (t ? Object.keys(j(Object.assign({}, U, { plugins: t }))) : R).reduce(function (t, n) {
                                  var r = (e.getAttribute("data-tippy-" + n) || "").trim();
                                  if (!r) return t;
                                  if ("content" === n) t[n] = r;
                                  else
                                      try {
                                          t[n] = JSON.parse(r);
                                      } catch (e) {
                                          t[n] = r;
                                      }
                                  return t;
                              }, {});
                          })(e, t.plugins)
                );
                return (
                    (n.aria = Object.assign({}, U.aria, {}, n.aria)),
                    (n.aria = { expanded: "auto" === n.aria.expanded ? t.interactive : n.aria.expanded, content: "auto" === n.aria.content ? (t.interactive ? null : "describedby") : n.aria.content }),
                    n
                );
            }
            function S(e, t) {
                e.innerHTML = t;
            }
            function C(e) {
                var t = p();
                return !0 === e ? (t.className = "tippy-arrow") : ((t.className = "tippy-svg-arrow"), u(e) ? t.appendChild(e) : S(t, e)), t;
            }
            function E(e, t) {
                u(t.content) ? (S(e, ""), e.appendChild(t.content)) : "function" != typeof t.content && (t.allowHTML ? S(e, t.content) : (e.textContent = t.content));
            }
            function T(e) {
                var t = e.firstElementChild,
                    n = c(t.children);
                return {
                    box: t,
                    content: n.find(function (e) {
                        return e.classList.contains("tippy-content");
                    }),
                    arrow: n.find(function (e) {
                        return e.classList.contains("tippy-arrow") || e.classList.contains("tippy-svg-arrow");
                    }),
                    backdrop: n.find(function (e) {
                        return e.classList.contains("tippy-backdrop");
                    }),
                };
            }
            function k(e) {
                function t(t, r) {
                    var i = T(n),
                        o = i.box,
                        a = i.content,
                        s = i.arrow;
                    r.theme ? o.setAttribute("data-theme", r.theme) : o.removeAttribute("data-theme"),
                        "string" == typeof r.animation ? o.setAttribute("data-animation", r.animation) : o.removeAttribute("data-animation"),
                        r.inertia ? o.setAttribute("data-inertia", "") : o.removeAttribute("data-inertia"),
                        (o.style.maxWidth = "number" == typeof r.maxWidth ? r.maxWidth + "px" : r.maxWidth),
                        r.role ? o.setAttribute("role", r.role) : o.removeAttribute("role"),
                        (t.content === r.content && t.allowHTML === r.allowHTML) || E(a, e.props),
                        r.arrow ? (s ? t.arrow !== r.arrow && (o.removeChild(s), o.appendChild(C(r.arrow))) : o.appendChild(C(r.arrow))) : s && o.removeChild(s);
                }
                var n = p(),
                    r = p();
                (r.className = "tippy-box"), r.setAttribute("data-state", "hidden"), r.setAttribute("tabindex", "-1");
                var i = p();
                return (i.className = "tippy-content"), i.setAttribute("data-state", "hidden"), E(i, e.props), n.appendChild(r), r.appendChild(i), t(e.props, e.props), { popper: n, onUpdate: t };
            }
            function O(n, o) {
                function u() {
                    var e = be.props.touch;
                    return Array.isArray(e) ? e : [e, 0];
                }
                function f() {
                    return "hold" === u()[0];
                }
                function v() {
                    var e;
                    return !!(null == (e = be.props.render) ? void 0 : e.$$tippy);
                }
                function w() {
                    return le || n;
                }
                function b() {
                    return T(xe);
                }
                function S(e) {
                    return (be.state.isMounted && !be.state.isVisible) || D.isTouch || (oe && "focus" === oe.type) ? 0 : t(be.props.delay, e ? 0 : 1, U.delay);
                }
                function C() {
                    (xe.style.pointerEvents = be.props.interactive && be.state.isVisible ? "" : "none"), (xe.style.zIndex = "" + be.props.zIndex);
                }
                function E(e, t, n) {
                    var r;
                    void 0 === n && (n = !0),
                        Ce.forEach(function (n) {
                            n[e] && n[e].apply(void 0, t);
                        }),
                        n && (r = be.props)[e].apply(r, t);
                }
                function k() {
                    var e = be.props.aria;
                    if (e.content) {
                        var t = "aria-" + e.content,
                            r = xe.id;
                        a(be.props.triggerTarget || n).forEach(function (e) {
                            var n = e.getAttribute(t);
                            if (be.state.isVisible) e.setAttribute(t, n ? n + " " + r : r);
                            else {
                                var i = n && n.replace(r, "").trim();
                                i ? e.setAttribute(t, i) : e.removeAttribute(t);
                            }
                        });
                    }
                }
                function O() {
                    !Ee &&
                        be.props.aria.expanded &&
                        a(be.props.triggerTarget || n).forEach(function (e) {
                            be.props.interactive ? e.setAttribute("aria-expanded", be.state.isVisible && e === w() ? "true" : "false") : e.removeAttribute("aria-expanded");
                        });
                }
                function Q() {
                    ge.body.removeEventListener("mouseleave", te),
                        ge.removeEventListener("mousemove", ye),
                        (B = B.filter(function (e) {
                            return e !== ye;
                        }));
                }
                function _(e) {
                    if (!((D.isTouch && (fe || "mousedown" === e.type)) || (be.props.interactive && xe.contains(e.target)))) {
                        if (w().contains(e.target)) {
                            if (D.isTouch) return;
                            if (be.state.isVisible && be.props.trigger.indexOf("click") >= 0) return;
                        } else E("onClickOutside", [be, e]);
                        !0 === be.props.hideOnClick &&
                            ((ue = !1),
                            be.clearDelayTimeouts(),
                            be.hide(),
                            (de = !0),
                            setTimeout(function () {
                                de = !1;
                            }),
                            be.state.isMounted || R());
                    }
                }
                function A() {
                    fe = !0;
                }
                function P() {
                    fe = !1;
                }
                function N() {
                    ge.addEventListener("mousedown", _, !0), ge.addEventListener("touchend", _, L), ge.addEventListener("touchstart", P, L), ge.addEventListener("touchmove", A, L);
                }
                function R() {
                    ge.removeEventListener("mousedown", _, !0), ge.removeEventListener("touchend", _, L), ge.removeEventListener("touchstart", P, L), ge.removeEventListener("touchmove", A, L);
                }
                function H(e, t) {
                    function n(e) {
                        e.target === r && (g(r, "remove", n), t());
                    }
                    var r = b().box;
                    if (0 === e) return t();
                    g(r, "remove", ae), g(r, "add", n), (ae = n);
                }
                function W(e, t, r) {
                    void 0 === r && (r = !1),
                        a(be.props.triggerTarget || n).forEach(function (n) {
                            n.addEventListener(e, t, r), me.push({ node: n, eventType: e, handler: t, options: r });
                        });
                }
                function F() {
                    f() && (W("touchstart", Y, { passive: !0 }), W("touchend", q, { passive: !0 })),
                        be.props.trigger
                            .split(/\s+/)
                            .filter(Boolean)
                            .forEach(function (e) {
                                if ("manual" !== e)
                                    switch ((W(e, Y), e)) {
                                        case "mouseenter":
                                            W("mouseleave", q);
                                            break;
                                        case "focus":
                                            W(M ? "focusout" : "blur", $);
                                            break;
                                        case "focusin":
                                            W("focusout", $);
                                    }
                            });
                }
                function z() {
                    me.forEach(function (e) {
                        var t = e.node,
                            n = e.eventType,
                            r = e.handler,
                            i = e.options;
                        t.removeEventListener(n, r, i);
                    }),
                        (me = []);
                }
                function Y(e) {
                    var t,
                        n = !1;
                    if (be.state.isEnabled && !X(e) && !de) {
                        var r = "focus" === (null == (t = oe) ? void 0 : t.type);
                        (oe = e),
                            (le = e.currentTarget),
                            O(),
                            !be.state.isVisible &&
                                d(e) &&
                                B.forEach(function (t) {
                                    return t(e);
                                }),
                            "click" === e.type && (be.props.trigger.indexOf("mouseenter") < 0 || ue) && !1 !== be.props.hideOnClick && be.state.isVisible ? (n = !0) : ee(e),
                            "click" === e.type && (ue = !n),
                            n && !r && te(e);
                    }
                }
                function J(e) {
                    var t = e.target,
                        r = n.contains(t) || xe.contains(t);
                    ("mousemove" === e.type && r) ||
                        ((function (e, t) {
                            var n = t.clientX,
                                r = t.clientY;
                            return e.every(function (e) {
                                var t = e.popperRect,
                                    i = e.popperState,
                                    o = e.props.interactiveBorder,
                                    a = l(i.placement),
                                    s = i.modifiersData.offset;
                                if (!s) return !0;
                                var c = "bottom" === a ? s.top.y : 0,
                                    p = "top" === a ? s.bottom.y : 0,
                                    u = "right" === a ? s.left.x : 0,
                                    d = "left" === a ? s.right.x : 0,
                                    f = t.top - r + c > o,
                                    h = r - t.bottom - p > o,
                                    m = t.left - n + u > o,
                                    y = n - t.right - d > o;
                                return f || h || m || y;
                            });
                        })(
                            K()
                                .concat(xe)
                                .map(function (e) {
                                    var t,
                                        n = null == (t = e._tippy.popperInstance) ? void 0 : t.state;
                                    return n ? { popperRect: e.getBoundingClientRect(), popperState: n, props: pe } : null;
                                })
                                .filter(Boolean),
                            e
                        ) &&
                            (Q(), te(e)));
                }
                function q(e) {
                    X(e) || (be.props.trigger.indexOf("click") >= 0 && ue) || (be.props.interactive ? be.hideWithInteractivity(e) : te(e));
                }
                function $(e) {
                    (be.props.trigger.indexOf("focusin") < 0 && e.target !== w()) || (be.props.interactive && e.relatedTarget && xe.contains(e.relatedTarget)) || te(e);
                }
                function X(e) {
                    return !!D.isTouch && f() !== e.type.indexOf("touch") >= 0;
                }
                function G() {
                    Z();
                    var t = be.props,
                        r = t.popperOptions,
                        i = t.placement,
                        o = t.offset,
                        a = t.getReferenceClientRect,
                        s = t.moveTransition,
                        l = v() ? T(xe).arrow : null,
                        c = a ? { getBoundingClientRect: a, contextElement: a.contextElement || w() } : n,
                        p = [
                            { name: "offset", options: { offset: o } },
                            { name: "preventOverflow", options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } } },
                            { name: "flip", options: { padding: 5 } },
                            { name: "computeStyles", options: { adaptive: !s } },
                            {
                                name: "$$tippy",
                                enabled: !0,
                                phase: "beforeWrite",
                                requires: ["computeStyles"],
                                fn: function (e) {
                                    var t = e.state;
                                    if (v()) {
                                        var n = b().box;
                                        ["placement", "reference-hidden", "escaped"].forEach(function (e) {
                                            "placement" === e ? n.setAttribute("data-placement", t.placement) : t.attributes.popper["data-popper-" + e] ? n.setAttribute("data-" + e, "") : n.removeAttribute("data-" + e);
                                        }),
                                            (t.attributes.popper = {});
                                    }
                                },
                            },
                        ];
                    v() && l && p.push({ name: "arrow", options: { element: l, padding: 3 } }),
                        p.push.apply(p, (null == r ? void 0 : r.modifiers) || []),
                        (be.popperInstance = e.createPopper(c, xe, Object.assign({}, r, { placement: i, onFirstUpdate: se, modifiers: p })));
                }
                function Z() {
                    be.popperInstance && (be.popperInstance.destroy(), (be.popperInstance = null));
                }
                function K() {
                    return c(xe.querySelectorAll("[data-tippy-root]"));
                }
                function ee(e) {
                    be.clearDelayTimeouts(), e && E("onTrigger", [be, e]), N();
                    var t = S(!0),
                        n = u(),
                        r = n[0],
                        i = n[1];
                    D.isTouch && "hold" === r && i && (t = i),
                        t
                            ? (ne = setTimeout(function () {
                                  be.show();
                              }, t))
                            : be.show();
                }
                function te(e) {
                    if ((be.clearDelayTimeouts(), E("onUntrigger", [be, e]), be.state.isVisible)) {
                        if (!(be.props.trigger.indexOf("mouseenter") >= 0 && be.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(e.type) >= 0 && ue)) {
                            var t = S(!1);
                            t
                                ? (re = setTimeout(function () {
                                      be.state.isVisible && be.hide();
                                  }, t))
                                : (ie = requestAnimationFrame(function () {
                                      be.hide();
                                  }));
                        }
                    } else R();
                }
                var ne,
                    re,
                    ie,
                    oe,
                    ae,
                    se,
                    le,
                    ce,
                    pe = x(n, Object.assign({}, U, {}, j(o))),
                    ue = !1,
                    de = !1,
                    fe = !1,
                    he = !1,
                    me = [],
                    ye = i(J, pe.interactiveDebounce),
                    ge = y(pe.triggerTarget || n),
                    ve = I++,
                    we = (ce = pe.plugins).filter(function (e, t) {
                        return ce.indexOf(e) === t;
                    }),
                    be = {
                        id: ve,
                        reference: n,
                        popper: p(),
                        popperInstance: null,
                        props: pe,
                        state: { isEnabled: !0, isVisible: !1, isDestroyed: !1, isMounted: !1, isShown: !1 },
                        plugins: we,
                        clearDelayTimeouts: function () {
                            clearTimeout(ne), clearTimeout(re), cancelAnimationFrame(ie);
                        },
                        setProps: function (e) {
                            if (!be.state.isDestroyed) {
                                E("onBeforeUpdate", [be, e]), z();
                                var t = be.props,
                                    r = x(n, Object.assign({}, be.props, {}, e, { ignoreAttributes: !0 }));
                                (be.props = r),
                                    F(),
                                    t.interactiveDebounce !== r.interactiveDebounce && (Q(), (ye = i(J, r.interactiveDebounce))),
                                    t.triggerTarget && !r.triggerTarget
                                        ? a(t.triggerTarget).forEach(function (e) {
                                              e.removeAttribute("aria-expanded");
                                          })
                                        : r.triggerTarget && n.removeAttribute("aria-expanded"),
                                    O(),
                                    C(),
                                    Se && Se(t, r),
                                    be.popperInstance &&
                                        (G(),
                                        K().forEach(function (e) {
                                            requestAnimationFrame(e._tippy.popperInstance.forceUpdate);
                                        })),
                                    E("onAfterUpdate", [be, e]);
                            }
                        },
                        setContent: function (e) {
                            be.setProps({ content: e });
                        },
                        show: function () {
                            var e = be.state.isVisible,
                                n = be.state.isDestroyed,
                                i = !be.state.isEnabled,
                                o = D.isTouch && !be.props.touch,
                                a = t(be.props.duration, 0, U.duration);
                            if (!(e || n || i || o || w().hasAttribute("disabled") || (E("onShow", [be], !1), !1 === be.props.onShow(be)))) {
                                if (((be.state.isVisible = !0), v() && (xe.style.visibility = "visible"), C(), N(), be.state.isMounted || (xe.style.transition = "none"), v())) {
                                    var l = b();
                                    h([l.box, l.content], 0);
                                }
                                (se = function () {
                                    if (be.state.isVisible && !he) {
                                        if (((he = !0), xe.offsetHeight, (xe.style.transition = be.props.moveTransition), v() && be.props.animation)) {
                                            var e = b(),
                                                t = e.box,
                                                n = e.content;
                                            h([t, n], a), m([t, n], "visible");
                                        }
                                        k(),
                                            O(),
                                            s(V, be),
                                            (be.state.isMounted = !0),
                                            E("onMount", [be]),
                                            be.props.animation &&
                                                v() &&
                                                H(a, function () {
                                                    (be.state.isShown = !0), E("onShown", [be]);
                                                });
                                    }
                                }),
                                    (function () {
                                        var e,
                                            t = be.props.appendTo,
                                            n = w();
                                        (e = (be.props.interactive && t === U.appendTo) || "parent" === t ? n.parentNode : r(t, [n])).contains(xe) || e.appendChild(xe), G();
                                    })();
                            }
                        },
                        hide: function () {
                            var e = !be.state.isVisible,
                                n = be.state.isDestroyed,
                                r = !be.state.isEnabled,
                                i = t(be.props.duration, 1, U.duration);
                            if (!(e || n || r) && (E("onHide", [be], !1), !1 !== be.props.onHide(be))) {
                                if (((be.state.isVisible = !1), (be.state.isShown = !1), (he = !1), v() && (xe.style.visibility = "hidden"), Q(), R(), C(), v())) {
                                    var o = b(),
                                        a = o.box,
                                        s = o.content;
                                    be.props.animation && (h([a, s], i), m([a, s], "hidden"));
                                }
                                k(),
                                    O(),
                                    be.props.animation
                                        ? v() &&
                                          (function (e, t) {
                                              H(e, function () {
                                                  !be.state.isVisible && xe.parentNode && xe.parentNode.contains(xe) && t();
                                              });
                                          })(i, be.unmount)
                                        : be.unmount();
                            }
                        },
                        hideWithInteractivity: function (e) {
                            ge.body.addEventListener("mouseleave", te), ge.addEventListener("mousemove", ye), s(B, ye), ye(e);
                        },
                        enable: function () {
                            be.state.isEnabled = !0;
                        },
                        disable: function () {
                            be.hide(), (be.state.isEnabled = !1);
                        },
                        unmount: function () {



                            be.state.isVisible && be.hide(),
                                be.state.isMounted &&
                                    (Z(),
                                    K().forEach(function (e) {
                                        e._tippy.unmount();
                                    }),
                                    xe.parentNode && xe.parentNode.removeChild(xe),
                                    (V = V.filter(function (e) {
                                        return e !== be;
                                    })),
                                    (be.state.isMounted = !1),
                                    E("onHidden", [be]));
                        },
                        destroy: function () {
                            be.state.isDestroyed || (be.clearDelayTimeouts(), be.unmount(), z(), delete n._tippy, (be.state.isDestroyed = !0), E("onDestroy", [be]));
                        },
                    };
                if (!pe.render) return be;
                var je = pe.render(be),
                    xe = je.popper,
                    Se = je.onUpdate;
                xe.setAttribute("data-tippy-root", ""), (xe.id = "tippy-" + be.id), (be.popper = xe), (n._tippy = be), (xe._tippy = be);
                var Ce = we.map(function (e) {
                        return e.fn(be);
                    }),
                    Ee = n.hasAttribute("aria-expanded");
                return (
                    F(),
                    O(),
                    C(),
                    E("onCreate", [be]),
                    pe.showOnCreate && ee(),
                    xe.addEventListener("mouseenter", function () {
                        be.props.interactive && be.state.isVisible && be.clearDelayTimeouts();
                    }),
                    xe.addEventListener("mouseleave", function (e) {
                        be.props.interactive && be.props.trigger.indexOf("mouseenter") >= 0 && (ge.addEventListener("mousemove", ye), ye(e));
                    }),
                    be
                );
            }
            function Q(e, t) {
                void 0 === t && (t = {});
                var r = U.plugins.concat(t.plugins || []);
                document.addEventListener("touchstart", v, L), window.addEventListener("blur", b);
                var i = Object.assign({}, t, { plugins: r }),
                    o = (function (e) {
                        return u(e)
                            ? [e]
                            : (function (e) {
                                  return n(e, "NodeList");
                              })(e)
                            ? c(e)
                            : Array.isArray(e)
                            ? e
                            : c(document.querySelectorAll(e));
                    })(e).reduce(function (e, t) {
                        var n = t && O(t, i);
                        return n && e.push(n), e;
                    }, []);
                return u(e) ? o[0] : o;
            }
            function _(e, t) {
                return !e || !t || e.top !== t.top || e.right !== t.right || e.bottom !== t.bottom || e.left !== t.left;
            }
            var A = "undefined" != typeof window && "undefined" != typeof document,
                P = A ? navigator.userAgent : "",
                M = /MSIE |Trident\//.test(P),
                L = { passive: !0, capture: !0 },
                D = { isTouch: !1 },
                N = 0,
                U = Object.assign(
                    {
                        appendTo: function () {
                            return document.body;
                        },
                        aria: { content: "auto", expanded: "auto" },
                        delay: 0,
                        duration: [300, 250],
                        getReferenceClientRect: null,
                        hideOnClick: !0,
                        ignoreAttributes: !1,
                        interactive: !1,
                        interactiveBorder: 2,
                        interactiveDebounce: 0,
                        moveTransition: "",
                        offset: [0, 10],
                        onAfterUpdate: function () {},
                        onBeforeUpdate: function () {},
                        onCreate: function () {},
                        onDestroy: function () {},
                        onHidden: function () {},
                        onHide: function () {},
                        onMount: function () {},
                        onShow: function () {},
                        onShown: function () {},
                        onTrigger: function () {},
                        onUntrigger: function () {},
                        onClickOutside: function () {},
                        placement: "top",
                        plugins: [],
                        popperOptions: {},
                        render: null,
                        showOnCreate: !1,
                        touch: !0,
                        trigger: "mouseenter focus",
                        triggerTarget: null,
                    },
                    { animateFill: !1, followCursor: !1, inlinePositioning: !1, sticky: !1 },
                    {},
                    { allowHTML: !1, animation: "fade", arrow: !0, content: "", inertia: !1, maxWidth: 350, role: "tooltip", theme: "", zIndex: 9999 }
                ),
                R = Object.keys(U);
            k.$$tippy = !0;
            var I = 1,
                B = [],
                V = [];
            (Q.defaultProps = U),
                (Q.setDefaultProps = function (e) {
                    Object.keys(e).forEach(function (t) {
                        U[t] = e[t];
                    });
                }),
                (Q.currentInput = D);
            var H = { mouseover: "mouseenter", focusin: "focus", click: "click" },
                W = {
                    name: "animateFill",
                    defaultValue: !1,
                    fn: function (e) {
                        var t;
                        if (!(null == (t = e.props.render) ? void 0 : t.$$tippy)) return {};
                        var n = T(e.popper),
                            r = n.box,
                            i = n.content,
                            o = e.props.animateFill
                                ? (function () {
                                      var e = p();
                                      return (e.className = "tippy-backdrop"), m([e], "hidden"), e;
                                  })()
                                : null;
                        return {
                            onCreate: function () {
                                o && (r.insertBefore(o, r.firstElementChild), r.setAttribute("data-animatefill", ""), (r.style.overflow = "hidden"), e.setProps({ arrow: !1, animation: "shift-away" }));
                            },
                            onMount: function () {
                                if (o) {
                                    var e = r.style.transitionDuration,
                                        t = Number(e.replace("ms", ""));
                                    (i.style.transitionDelay = Math.round(t / 10) + "ms"), (o.style.transitionDuration = e), m([o], "visible");
                                }
                            },
                            onShow: function () {
                                o && (o.style.transitionDuration = "0ms");
                            },
                            onHide: function () {
                                o && m([o], "hidden");
                            },
                        };
                    },
                },
                F = {
                    name: "followCursor",
                    defaultValue: !1,
                    fn: function (e) {
                        function t() {
                            return "manual" === e.props.trigger.trim();
                        }
                        function n() {
                            var n = !!t() || (null !== c && !(0 === c.clientX && 0 === c.clientY));
                            return e.props.followCursor && n;
                        }
                        function r(t) {
                            t && e.setProps({ getReferenceClientRect: null });
                        }
                        function i() {
                            n() ? l.addEventListener("mousemove", a) : r(e.props.followCursor);
                        }
                        function o() {
                            l.removeEventListener("mousemove", a);
                        }
                        function a(t) {
                            c = { clientX: t.clientX, clientY: t.clientY };
                            var n = !t.target || s.contains(t.target),
                                r = e.props.followCursor,
                                i = t.clientX,
                                a = t.clientY,
                                l = s.getBoundingClientRect(),
                                p = i - l.left,
                                u = a - l.top;
                            (!n && e.props.interactive) ||
                                e.setProps({
                                    getReferenceClientRect: function () {
                                        var e = s.getBoundingClientRect(),
                                            t = i,
                                            n = a;
                                        "initial" === r && ((t = e.left + p), (n = e.top + u));
                                        var o = "horizontal" === r ? e.top : n,
                                            l = "vertical" === r ? e.right : t,
                                            c = "horizontal" === r ? e.bottom : n,
                                            d = "vertical" === r ? e.left : t;
                                        return { width: l - d, height: c - o, top: o, right: l, bottom: c, left: d };
                                    },
                                }),
                                (D.isTouch || ("initial" === e.props.followCursor && e.state.isVisible)) && o();
                        }
                        var s = e.reference,
                            l = y(e.props.triggerTarget || s),
                            c = null;
                        return {
                            onAfterUpdate: function (e, t) {
                                var n = t.followCursor;
                                void 0 === n || n || r(!0);
                            },
                            onMount: function () {
                                n() && a(c);
                            },
                            onShow: function () {
                                t() && ((c = { clientX: 0, clientY: 0 }), i());
                            },
                            onTrigger: function (e, t) {
                                c || (d(t) && (c = { clientX: t.clientX, clientY: t.clientY }), i());
                            },
                            onUntrigger: function () {
                                e.state.isVisible || (o(), (c = null));
                            },
                            onHidden: function () {
                                o(), (c = null);
                            },
                        };
                    },
                },
                z = {
                    name: "inlinePositioning",
                    defaultValue: !1,
                    fn: function (e) {
                        function t() {
                            var t;
                            o ||
                                ((t = (function (e, t) {
                                    var n;
                                    return {
                                        popperOptions: Object.assign({}, e.popperOptions, {
                                            modifiers: [].concat(
                                                ((null == (n = e.popperOptions) ? void 0 : n.modifiers) || []).filter(function (e) {
                                                    return e.name !== t.name;
                                                }),
                                                [t]
                                            ),
                                        }),
                                    };
                                })(e.props, a)),
                                (o = !0),
                                e.setProps(t),
                                (o = !1));
                        }
                        var n,
                            r = e.reference,
                            i = -1,
                            o = !1,
                            a = {
                                name: "tippyInlinePositioning",
                                enabled: !0,
                                phase: "afterWrite",
                                fn: function (t) {
                                    var o = t.state;
                                    e.props.inlinePositioning &&
                                        (n !== o.placement &&
                                            e.setProps({
                                                getReferenceClientRect: function () {
                                                    return (function (e, t, n, r) {
                                                        if (n.length < 2 || null === e) return t;
                                                        if (2 === n.length && r >= 0 && n[0].left > n[1].right) return n[r] || t;
                                                        switch (e) {
                                                            case "top":
                                                            case "bottom":
                                                                var i = n[0],
                                                                    o = n[n.length - 1],
                                                                    a = "top" === e,
                                                                    s = i.top,
                                                                    l = o.bottom,
                                                                    c = a ? i.left : o.left,
                                                                    p = a ? i.right : o.right;
                                                                return { top: s, bottom: l, left: c, right: p, width: p - c, height: l - s };
                                                            case "left":
                                                            case "right":
                                                                var u = Math.min.apply(
                                                                        Math,
                                                                        n.map(function (e) {
                                                                            return e.left;
                                                                        })
                                                                    ),
                                                                    d = Math.max.apply(
                                                                        Math,
                                                                        n.map(function (e) {
                                                                            return e.right;
                                                                        })
                                                                    ),
                                                                    f = n.filter(function (t) {
                                                                        return "left" === e ? t.left === u : t.right === d;
                                                                    }),
                                                                    h = f[0].top,
                                                                    m = f[f.length - 1].bottom;
                                                                return { top: h, bottom: m, left: u, right: d, width: d - u, height: m - h };
                                                            default:
                                                                return t;
                                                        }
                                                    })(l(o.placement), r.getBoundingClientRect(), c(r.getClientRects()), i);
                                                },
                                            }),
                                        (n = o.placement));
                                },
                            };
                        return {
                            onCreate: t,
                            onAfterUpdate: t,
                            onTrigger: function (t, n) {
                                if (d(n)) {
                                    var r = c(e.reference.getClientRects()),
                                        o = r.find(function (e) {
                                            return e.left - 2 <= n.clientX && e.right + 2 >= n.clientX && e.top - 2 <= n.clientY && e.bottom + 2 >= n.clientY;
                                        });
                                    i = r.indexOf(o);
                                }
                            },
                            onUntrigger: function () {
                                i = -1;
                            },
                        };
                    },
                },
                Y = {
                    name: "sticky",
                    defaultValue: !1,
                    fn: function (e) {
                        function t(t) {
                            return !0 === e.props.sticky || e.props.sticky === t;
                        }
                        function n() {
                            var s = t("reference") ? (e.popperInstance ? e.popperInstance.state.elements.reference : r).getBoundingClientRect() : null,
                                l = t("popper") ? i.getBoundingClientRect() : null;
                            ((s && _(o, s)) || (l && _(a, l))) && e.popperInstance && e.popperInstance.update(), (o = s), (a = l), e.state.isMounted && requestAnimationFrame(n);
                        }
                        var r = e.reference,
                            i = e.popper,
                            o = null,
                            a = null;
                        return {
                            onMount: function () {
                                e.props.sticky && n();
                            },
                        };
                    },
                };
            return (
                A &&
                    (function (e) {
                        var t = document.createElement("style");
                        (t.textContent =
                            '.tippy-box[data-animation=fade][data-state=hidden]{opacity:0}[data-tippy-root]{max-width:calc(100vw - 10px)}.tippy-box{position:relative;background-color:#333;color:#fff;border-radius:4px;font-size:14px;line-height:1.4;outline:0;transition-property:transform,visibility,opacity}.tippy-box[data-placement^=top]>.tippy-arrow{bottom:0}.tippy-box[data-placement^=top]>.tippy-arrow:before{bottom:-7px;left:0;border-width:8px 8px 0;border-top-color:initial;transform-origin:center top}.tippy-box[data-placement^=bottom]>.tippy-arrow{top:0}.tippy-box[data-placement^=bottom]>.tippy-arrow:before{top:-7px;left:0;border-width:0 8px 8px;border-bottom-color:initial;transform-origin:center bottom}.tippy-box[data-placement^=left]>.tippy-arrow{right:0}.tippy-box[data-placement^=left]>.tippy-arrow:before{border-width:8px 0 8px 8px;border-left-color:initial;right:-7px;transform-origin:center left}.tippy-box[data-placement^=right]>.tippy-arrow{left:0}.tippy-box[data-placement^=right]>.tippy-arrow:before{left:-7px;border-width:8px 8px 8px 0;border-right-color:initial;transform-origin:center right}.tippy-box[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-arrow{width:16px;height:16px;color:#333}.tippy-arrow:before{content:"";position:absolute;border-color:transparent;border-style:solid}.tippy-content{position:relative;padding:5px 9px;z-index:1}'),
                            t.setAttribute("data-tippy-stylesheet", "");
                        var n = document.head,
                            r = document.querySelector("head>style,head>link");
                        r ? n.insertBefore(t, r) : n.appendChild(t);
                    })(),
                Q.setDefaultProps({ plugins: [W, F, z, Y], render: k }),
                (Q.createSingleton = function (e, t) {
                    function n() {
                        s = a.map(function (e) {
                            return e.reference;
                        });
                    }
                    function r(e) {
                        a.forEach(function (t) {
                            e ? t.enable() : t.disable();
                        });
                    }
                    void 0 === t && (t = {});
                    var i,
                        a = e,
                        s = [],
                        l = t.overrides;
                    r(!1), n();
                    var c = {
                            fn: function () {
                                return {
                                    onDestroy: function () {
                                        r(!0);
                                    },
                                    onTrigger: function (e, t) {
                                        var n = t.currentTarget,
                                            r = s.indexOf(n);
                                        if (n !== i) {
                                            i = n;
                                            var o = (l || []).concat("content").reduce(function (e, t) {
                                                return (e[t] = a[r].props[t]), e;
                                            }, {});
                                            e.setProps(
                                                Object.assign({}, o, {
                                                    getReferenceClientRect: function () {
                                                        return n.getBoundingClientRect();
                                                    },
                                                })
                                            );
                                        }
                                    },
                                };
                            },
                        },
                        u = Q(p(), Object.assign({}, o(t, ["overrides"]), { plugins: [c].concat(t.plugins || []), triggerTarget: s })),
                        d = u.setProps;
                    return (
                        (u.setProps = function (e) {
                            (l = e.overrides || l), d(e);
                        }),
                        (u.setInstances = function (e) {
                            r(!0), (a = e), r(!1), n(), u.setProps({ triggerTarget: s });
                        }),
                        u
                    );
                }),
                (Q.delegate = function (e, t) {
                    function n(e) {
                        if (e.target) {
                            var n = e.target.closest(l);
                            if (n) {
                                var r = n.getAttribute("data-tippy-trigger") || t.trigger || U.trigger;
                                if (!n._tippy && !(("touchstart" === e.type && "boolean" == typeof u.touch) || ("touchstart" !== e.type && r.indexOf(H[e.type])))) {
                                    var i = Q(n, u);
                                    i && (s = s.concat(i));
                                }
                            }
                        }
                    }
                    function r(e, t, n, r) {
                        void 0 === r && (r = !1), e.addEventListener(t, n, r), i.push({ node: e, eventType: t, handler: n, options: r });
                    }
                    var i = [],
                        s = [],
                        l = t.target,
                        c = o(t, ["target"]),
                        p = Object.assign({}, c, { trigger: "manual", touch: !1 }),
                        u = Object.assign({}, c, { showOnCreate: !0 }),
                        d = Q(e, p);
                    return (
                        a(d).forEach(function (e) {
                            var t = e.destroy;
                            (e.destroy = function (e) {
                                void 0 === e && (e = !0),
                                    e &&
                                        s.forEach(function (e) {
                                            e.destroy();
                                        }),
                                    (s = []),
                                    i.forEach(function (e) {
                                        var t = e.node,
                                            n = e.eventType,
                                            r = e.handler,
                                            i = e.options;
                                        t.removeEventListener(n, r, i);
                                    }),
                                    (i = []),
                                    t();
                            }),
                                (function (e) {
                                    var t = e.reference;
                                    r(t, "touchstart", n), r(t, "mouseover", n), r(t, "focusin", n), r(t, "click", n);
                                })(e);
                        }),
                        d
                    );
                }),
                (Q.hideAll = function (e) {
                    var t = void 0 === e ? {} : e,
                        n = t.exclude,
                        r = t.duration;
                    V.forEach(function (e) {
                        var t = !1;
                        if ((n && (t = f(n) ? e.reference === n : e.popper === n.popper), !t)) {
                            var i = e.props.duration;
                            e.setProps({ duration: r }), e.hide(), e.state.isDestroyed || e.setProps({ duration: i });
                        }
                    });
                }),
                (Q.roundArrow = '<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>'),
                Q
            );
        }),
        (function (e, t) {
            "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e.StickySidebar = {}));
        })(this, function (e) {
            "use strict";
            "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
            var t = (function (e, t) {
                    return (t = { exports: {} }), e(t, t.exports), t.exports;
                })(function (e, t) {
                    !(function (e, n) {
                        n(t);
                    })(0, function (e) {
                        Object.defineProperty(e, "__esModule", { value: !0 });
                        var t = (function () {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var r = t[n];
                                        (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                                    }
                                }
                                return function (t, n, r) {
                                    return n && e(t.prototype, n), r && e(t, r), t;
                                };
                            })(),
                            n = (function () {
                                var e = ".stickySidebar",
                                    n = { topSpacing: 0, bottomSpacing: 0, containerSelector: !1, innerWrapperSelector: ".inner-wrapper-sticky", stickyClass: "is-affixed", resizeSensor: !0, minWidth: !1 };
                                return (function () {
                                    function r(e) {
                                        var t = this,
                                            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                        if (
                                            ((function (e, t) {
                                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                            })(this, r),
                                            (this.options = r.extend(n, i)),
                                            (this.sidebar = "string" == typeof e ? document.querySelector(e) : e),
                                            void 0 === this.sidebar)
                                        )
                                            throw new Error("There is no specific sidebar element.");
                                        (this.sidebarInner = !1),
                                            (this.container = this.sidebar.parentElement),
                                            (this.affixedType = "STATIC"),
                                            (this.direction = "down"),
                                            (this.support = { transform: !1, transform3d: !1 }),
                                            (this._initialized = !1),
                                            (this._reStyle = !1),
                                            (this._breakpoint = !1),
                                            (this.dimensions = {
                                                translateY: 0,
                                                maxTranslateY: 0,
                                                topSpacing: 0,
                                                lastTopSpacing: 0,
                                                bottomSpacing: 0,
                                                lastBottomSpacing: 0,
                                                sidebarHeight: 0,
                                                sidebarWidth: 0,
                                                containerTop: 0,
                                                containerHeight: 0,
                                                viewportHeight: 0,
                                                viewportTop: 0,
                                                lastViewportTop: 0,
                                            }),
                                            ["handleEvent"].forEach(function (e) {
                                                t[e] = t[e].bind(t);
                                            }),
                                            this.initialize();
                                    }
                                    return (
                                        t(
                                            r,
                                            [
                                                {
                                                    key: "initialize",
                                                    value: function () {

                                                        var e = this;
                                                        if (
                                                            (this._setSupportFeatures(),
                                                            this.options.innerWrapperSelector && ((this.sidebarInner = this.sidebar.querySelector(this.options.innerWrapperSelector)), null === this.sidebarInner && (this.sidebarInner = !1)),
                                                            !this.sidebarInner)
                                                        ) {
                                                            var t = document.createElement("div");
                                                            for (t.setAttribute("class", "inner-wrapper-sticky"), this.sidebar.appendChild(t); this.sidebar.firstChild != t; ) t.appendChild(this.sidebar.firstChild);
                                                            this.sidebarInner = this.sidebar.querySelector(".inner-wrapper-sticky");
                                                        }
                                                        if (this.options.containerSelector) {
                                                            var n = document.querySelectorAll(this.options.containerSelector);
                                                            if (
                                                                ((n = Array.prototype.slice.call(n)).forEach(function (t, n) {
                                                                    t.contains(e.sidebar) && (e.container = t);
                                                                }),
                                                                !n.length)
                                                            )
                                                                throw new Error("The container does not contains on the sidebar.");
                                                        }
                                                        "function" != typeof this.options.topSpacing && (this.options.topSpacing = parseInt(this.options.topSpacing) || 0),
                                                            "function" != typeof this.options.bottomSpacing && (this.options.bottomSpacing = parseInt(this.options.bottomSpacing) || 0),
                                                            this._widthBreakpoint(),
                                                            this.calcDimensions(),
                                                            this.stickyPosition(),
                                                            this.bindEvents(),
                                                            (this._initialized = !0);
                                                    },
                                                },
                                                {
                                                    key: "bindEvents",
                                                    value: function () {
                                                        window.addEventListener("resize", this, { passive: !0, capture: !1 }),
                                                            window.addEventListener("scroll", this, { passive: !0, capture: !1 }),
                                                            this.sidebar.addEventListener("update" + e, this),
                                                            this.options.resizeSensor && "undefined" != typeof ResizeSensor && (new ResizeSensor(this.sidebarInner, this.handleEvent), new ResizeSensor(this.container, this.handleEvent));
                                                    },
                                                },
                                                {
                                                    key: "handleEvent",
                                                    value: function (e) {
                                                        this.updateSticky(e);
                                                    },
                                                },
                                                {
                                                    key: "calcDimensions",
                                                    value: function () {
                                                        if (!this._breakpoint) {
                                                            var e = this.dimensions;
                                                            (e.containerTop = r.offsetRelative(this.container).top),
                                                                (e.containerHeight = this.container.clientHeight),
                                                                (e.containerBottom = e.containerTop + e.containerHeight),
                                                                (e.sidebarHeight = this.sidebarInner.offsetHeight),
                                                                (e.sidebarWidth = this.sidebarInner.offsetWidth),
                                                                (e.viewportHeight = window.innerHeight),
                                                                (e.maxTranslateY = e.containerHeight - e.sidebarHeight),
                                                                this._calcDimensionsWithScroll();
                                                        }
                                                    },
                                                },
                                                {
                                                    key: "_calcDimensionsWithScroll",
                                                    value: function () {
                                                        var e = this.dimensions;
                                                        (e.sidebarLeft = r.offsetRelative(this.sidebar).left),
                                                            (e.viewportTop = document.documentElement.scrollTop || document.body.scrollTop),
                                                            (e.viewportBottom = e.viewportTop + e.viewportHeight),
                                                            (e.viewportLeft = document.documentElement.scrollLeft || document.body.scrollLeft),
                                                            (e.topSpacing = this.options.topSpacing),
                                                            (e.bottomSpacing = this.options.bottomSpacing),
                                                            "function" == typeof e.topSpacing && (e.topSpacing = parseInt(e.topSpacing(this.sidebar)) || 0),
                                                            "function" == typeof e.bottomSpacing && (e.bottomSpacing = parseInt(e.bottomSpacing(this.sidebar)) || 0),
                                                            "VIEWPORT-TOP" === this.affixedType
                                                                ? e.topSpacing < e.lastTopSpacing && ((e.translateY += e.lastTopSpacing - e.topSpacing), (this._reStyle = !0))
                                                                : "VIEWPORT-BOTTOM" === this.affixedType && e.bottomSpacing < e.lastBottomSpacing && ((e.translateY += e.lastBottomSpacing - e.bottomSpacing), (this._reStyle = !0)),
                                                            (e.lastTopSpacing = e.topSpacing),
                                                            (e.lastBottomSpacing = e.bottomSpacing);
                                                    },
                                                },
                                                {
                                                    key: "isSidebarFitsViewport",
                                                    value: function () {
                                                        var e = this.dimensions,
                                                            t = "down" === this.scrollDirection ? e.lastBottomSpacing : e.lastTopSpacing;
                                                        return this.dimensions.sidebarHeight + t < this.dimensions.viewportHeight;
                                                    },
                                                },
                                                {
                                                    key: "observeScrollDir",
                                                    value: function () {
                                                        var e = this.dimensions;
                                                        if (e.lastViewportTop !== e.viewportTop) {
                                                            var t = "down" === this.direction ? Math.min : Math.max;
                                                            e.viewportTop === t(e.viewportTop, e.lastViewportTop) && (this.direction = "down" === this.direction ? "up" : "down");
                                                        }
                                                    },
                                                },
                                                {
                                                    key: "getAffixType",
                                                    value: function () {
                                                        this._calcDimensionsWithScroll();
                                                        var e = this.dimensions,
                                                            t = e.viewportTop + e.topSpacing,
                                                            n = this.affixedType;
                                                        return (
                                                            t <= e.containerTop || e.containerHeight <= e.sidebarHeight
                                                                ? ((e.translateY = 0), (n = "STATIC"))
                                                                : (n = "up" === this.direction ? this._getAffixTypeScrollingUp() : this._getAffixTypeScrollingDown()),
                                                            (e.translateY = Math.max(0, e.translateY)),
                                                            (e.translateY = Math.min(e.containerHeight, e.translateY)),
                                                            (e.translateY = Math.round(e.translateY)),
                                                            (e.lastViewportTop = e.viewportTop),
                                                            n
                                                        );
                                                    },
                                                },
                                                {
                                                    key: "_getAffixTypeScrollingDown",
                                                    value: function () {
                                                        var e = this.dimensions,
                                                            t = e.sidebarHeight + e.containerTop,
                                                            n = e.viewportTop + e.topSpacing,
                                                            r = e.viewportBottom - e.bottomSpacing,
                                                            i = this.affixedType;
                                                        return (
                                                            this.isSidebarFitsViewport()
                                                                ? e.sidebarHeight + n >= e.containerBottom
                                                                    ? ((e.translateY = e.containerBottom - t), (i = "CONTAINER-BOTTOM"))
                                                                    : n >= e.containerTop && ((e.translateY = n - e.containerTop), (i = "VIEWPORT-TOP"))
                                                                : e.containerBottom <= r
                                                                ? ((e.translateY = e.containerBottom - t), (i = "CONTAINER-BOTTOM"))
                                                                : t + e.translateY <= r
                                                                ? ((e.translateY = r - t), (i = "VIEWPORT-BOTTOM"))
                                                                : e.containerTop + e.translateY <= n && 0 !== e.translateY && e.maxTranslateY !== e.translateY && (i = "VIEWPORT-UNBOTTOM"),
                                                            i
                                                        );
                                                    },
                                                },
                                                {
                                                    key: "_getAffixTypeScrollingUp",
                                                    value: function () {
                                                        var e = this.dimensions,
                                                            t = e.sidebarHeight + e.containerTop,
                                                            n = e.viewportTop + e.topSpacing,
                                                            r = e.viewportBottom - e.bottomSpacing,
                                                            i = this.affixedType;
                                                        return (
                                                            n <= e.translateY + e.containerTop
                                                                ? ((e.translateY = n - e.containerTop), (i = "VIEWPORT-TOP"))
                                                                : e.containerBottom <= r
                                                                ? ((e.translateY = e.containerBottom - t), (i = "CONTAINER-BOTTOM"))
                                                                : this.isSidebarFitsViewport() || (e.containerTop <= n && 0 !== e.translateY && e.maxTranslateY !== e.translateY && (i = "VIEWPORT-UNBOTTOM")),
                                                            i
                                                        );
                                                    },
                                                },
                                                {
                                                    key: "_getStyle",
                                                    value: function (e) {
                                                        if (void 0 !== e) {
                                                            var t = { inner: {}, outer: {} },
                                                                n = this.dimensions;
                                                            switch (e) {
                                                                case "VIEWPORT-TOP":
                                                                    t.inner = { position: "fixed", top: n.topSpacing, left: n.sidebarLeft - n.viewportLeft, width: n.sidebarWidth };
                                                                    break;
                                                                case "VIEWPORT-BOTTOM":
                                                                    t.inner = { position: "fixed", top: "auto", left: n.sidebarLeft, bottom: n.bottomSpacing, width: n.sidebarWidth };
                                                                    break;
                                                                case "CONTAINER-BOTTOM":
                                                                case "VIEWPORT-UNBOTTOM":
                                                                    var i = this._getTranslate(0, n.translateY + "px");
                                                                    t.inner = i ? { transform: i } : { position: "absolute", top: n.translateY, width: n.sidebarWidth };
                                                            }
                                                            switch (e) {
                                                                case "VIEWPORT-TOP":
                                                                case "VIEWPORT-BOTTOM":
                                                                case "VIEWPORT-UNBOTTOM":
                                                                case "CONTAINER-BOTTOM":
                                                                    t.outer = { height: n.sidebarHeight, position: "relative" };
                                                            }
                                                            return (
                                                                (t.outer = r.extend({ height: "", position: "" }, t.outer)), (t.inner = r.extend({ position: "relative", top: "", left: "", bottom: "", width: "", transform: "" }, t.inner)), t
                                                            );
                                                        }
                                                    },
                                                },
                                                {
                                                    key: "stickyPosition",
                                                    value: function (t) {
                                                        if (!this._breakpoint) {
                                                            t = this._reStyle || t || !1;
                                                            this.options.topSpacing, this.options.bottomSpacing;
                                                            var n = this.getAffixType(),
                                                                i = this._getStyle(n);
                                                            if ((this.affixedType != n || t) && n) {
                                                                var o = "affix." + n.toLowerCase().replace("viewport-", "") + e;
                                                                r.eventTrigger(this.sidebar, o), "STATIC" === n ? r.removeClass(this.sidebar, this.options.stickyClass) : r.addClass(this.sidebar, this.options.stickyClass);
                                                                for (var a in i.outer) {
                                                                    var s = "number" == typeof i.outer[a] ? "px" : "";
                                                                    this.sidebar.style[a] = i.outer[a] + s;
                                                                }
                                                                for (var l in i.inner) {
                                                                    var c = "number" == typeof i.inner[l] ? "px" : "";
                                                                    this.sidebarInner.style[l] = i.inner[l] + c;
                                                                }
                                                                var p = "affixed." + n.toLowerCase().replace("viewport-", "") + e;
                                                                r.eventTrigger(this.sidebar, p);
                                                            } else this._initialized && (this.sidebarInner.style.left = i.inner.left);
                                                            this.affixedType = n;
                                                        }
                                                    },
                                                },
                                                {
                                                    key: "_widthBreakpoint",
                                                    value: function () {
                                                        window.innerWidth <= this.options.minWidth
                                                            ? ((this._breakpoint = !0),
                                                              (this.affixedType = "STATIC"),
                                                              this.sidebar.removeAttribute("style"),
                                                              r.removeClass(this.sidebar, this.options.stickyClass),
                                                              this.sidebarInner.removeAttribute("style"))
                                                            : (this._breakpoint = !1);
                                                    },
                                                },
                                                {
                                                    key: "updateSticky",
                                                    value: function () {
                                                        var e = this,
                                                            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                                        this._running ||
                                                            ((this._running = !0),
                                                            (function (t) {
                                                                requestAnimationFrame(function () {
                                                                    switch (t) {
                                                                        case "scroll":
                                                                            e._calcDimensionsWithScroll(), e.observeScrollDir(), e.stickyPosition();
                                                                            break;
                                                                        case "resize":
                                                                        default:
                                                                            e._widthBreakpoint(), e.calcDimensions(), e.stickyPosition(!0);
                                                                    }
                                                                    e._running = !1;
                                                                });
                                                            })(t.type));
                                                    },
                                                },
                                                {
                                                    key: "_setSupportFeatures",
                                                    value: function () {
                                                        var e = this.support;
                                                        (e.transform = r.supportTransform()), (e.transform3d = r.supportTransform(!0));
                                                    },
                                                },
                                                {
                                                    key: "_getTranslate",
                                                    value: function () {
                                                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                                                        return this.support.transform3d ? "translate3d(" + e + ", " + t + ", " + n + ")" : !!this.support.translate && "translate(" + e + ", " + t + ")";
                                                    },
                                                },
                                                {
                                                    key: "destroy",
                                                    value: function () {
                                                        window.removeEventListener("resize", this, { capture: !1 }),
                                                            window.removeEventListener("scroll", this, { capture: !1 }),
                                                            this.sidebar.classList.remove(this.options.stickyClass),
                                                            (this.sidebar.style.minHeight = ""),
                                                            this.sidebar.removeEventListener("update" + e, this);
                                                        var t = { inner: {}, outer: {} };
                                                        (t.inner = { position: "", top: "", left: "", bottom: "", width: "", transform: "" }), (t.outer = { height: "", position: "" });
                                                        for (var n in t.outer) this.sidebar.style[n] = t.outer[n];
                                                        for (var r in t.inner) this.sidebarInner.style[r] = t.inner[r];
                                                        this.options.resizeSensor && "undefined" != typeof ResizeSensor && (ResizeSensor.detach(this.sidebarInner, this.handleEvent), ResizeSensor.detach(this.container, this.handleEvent));
                                                    },
                                                },
                                            ],
                                            [
                                                {
                                                    key: "supportTransform",
                                                    value: function (e) {
                                                        var t = !1,
                                                            n = e ? "perspective" : "transform",
                                                            r = n.charAt(0).toUpperCase() + n.slice(1),
                                                            i = document.createElement("support").style;
                                                        return (
                                                            (n + " " + ["Webkit", "Moz", "O", "ms"].join(r + " ") + r).split(" ").forEach(function (e, n) {
                                                                if (void 0 !== i[e]) return (t = e), !1;
                                                            }),
                                                            t
                                                        );
                                                    },
                                                },
                                                {
                                                    key: "eventTrigger",
                                                    value: function (e, t, n) {
                                                        try {
                                                            r = new CustomEvent(t, { detail: n });
                                                        } catch (e) {
                                                            var r;
                                                            (r = document.createEvent("CustomEvent")).initCustomEvent(t, !0, !0, n);
                                                        }
                                                        e.dispatchEvent(r);
                                                    },
                                                },
                                                {
                                                    key: "extend",
                                                    value: function (e, t) {
                                                        var n = {};
                                                        for (var r in e) void 0 !== t[r] ? (n[r] = t[r]) : (n[r] = e[r]);
                                                        return n;
                                                    },
                                                },
                                                {
                                                    key: "offsetRelative",
                                                    value: function (e) {
                                                        var t = { left: 0, top: 0 };
                                                        do {
                                                            var n = e.offsetTop,
                                                                r = e.offsetLeft;
                                                            isNaN(n) || (t.top += n), isNaN(r) || (t.left += r), (e = "BODY" === e.tagName ? e.parentElement : e.offsetParent);
                                                        } while (e);
                                                        return t;
                                                    },
                                                },
                                                {
                                                    key: "addClass",
                                                    value: function (e, t) {
                                                        r.hasClass(e, t) || (e.classList ? e.classList.add(t) : (e.className += " " + t));
                                                    },
                                                },
                                                {
                                                    key: "removeClass",
                                                    value: function (e, t) {
                                                        r.hasClass(e, t) && (e.classList ? e.classList.remove(t) : (e.className = e.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " ")));
                                                    },
                                                },
                                                {
                                                    key: "hasClass",
                                                    value: function (e, t) {
                                                        return e.classList ? e.classList.contains(t) : new RegExp("(^| )" + t + "( |$)", "gi").test(e.className);
                                                    },
                                                },
                                                {
                                                    key: "defaults",
                                                    get: function () {
                                                        return n;
                                                    },
                                                },
                                            ]
                                        ),
                                        r
                                    );
                                })();
                            })();
                        (e.default = n), (window.StickySidebar = n);
                    });
                }),
                n = (function (e) {
                    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
                })(t);
            (e.default = n), (e.__moduleExports = t), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (function (e) {
            "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? (module.exports = e()) : (window.noUiSlider = e());
        })(function () {
            "use strict";
            function e(e) {
                return null != e;
            }
            function t(e) {
                e.preventDefault();
            }
            function n(e) {
                return "number" == typeof e && !isNaN(e) && isFinite(e);
            }
            function r(e, t, n) {
                0 < n &&
                    (s(e, t),
                    setTimeout(function () {
                        l(e, t);
                    }, n));
            }
            function i(e) {
                return Math.max(Math.min(e, 100), 0);
            }
            function o(e) {
                return Array.isArray(e) ? e : [e];
            }
            function a(e) {
                var t = (e = String(e)).split(".");
                return 1 < t.length ? t[1].length : 0;
            }
            function s(e, t) {
                e.classList ? e.classList.add(t) : (e.className += " " + t);
            }
            function l(e, t) {
                e.classList ? e.classList.remove(t) : (e.className = e.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " "));
            }
            function c(e) {
                var t = void 0 !== window.pageXOffset,
                    n = "CSS1Compat" === (e.compatMode || "");
                return { x: t ? window.pageXOffset : n ? e.documentElement.scrollLeft : e.body.scrollLeft, y: t ? window.pageYOffset : n ? e.documentElement.scrollTop : e.body.scrollTop };
            }
            function p(e, t) {
                return 100 / (t - e);
            }
            function u(e, t) {
                return (100 * t) / (e[1] - e[0]);
            }
            function d(e, t) {
                for (var n = 1; e >= t[n]; ) n += 1;
                return n;
            }
            function f(e, t, r) {
                var i;
                if (("number" == typeof t && (t = [t]), !Array.isArray(t))) throw new Error("noUiSlider (" + R + "): 'range' contains invalid value.");
                if (!n((i = "min" === e ? 0 : "max" === e ? 100 : parseFloat(e))) || !n(t[0])) throw new Error("noUiSlider (" + R + "): 'range' value isn't numeric.");
                r.xPct.push(i), r.xVal.push(t[0]), i ? r.xSteps.push(!isNaN(t[1]) && t[1]) : isNaN(t[1]) || (r.xSteps[0] = t[1]), r.xHighestCompleteStep.push(0);
            }
            function h(e, t, n) {
                if (!t) return !0;
                n.xSteps[e] = u([n.xVal[e], n.xVal[e + 1]], t) / p(n.xPct[e], n.xPct[e + 1]);
                var r = (n.xVal[e + 1] - n.xVal[e]) / n.xNumSteps[e],
                    i = Math.ceil(Number(r.toFixed(3)) - 1),
                    o = n.xVal[e] + n.xNumSteps[e] * i;
                n.xHighestCompleteStep[e] = o;
            }
            function m(e, t, n) {
                var r;
                (this.xPct = []), (this.xVal = []), (this.xSteps = [n || !1]), (this.xNumSteps = [!1]), (this.xHighestCompleteStep = []), (this.snap = t);
                var i = [];
                for (r in e) e.hasOwnProperty(r) && i.push([e[r], r]);
                for (
                    i.length && "object" == typeof i[0][0]
                        ? i.sort(function (e, t) {
                              return e[0][0] - t[0][0];
                          })
                        : i.sort(function (e, t) {
                              return e[0] - t[0];
                          }),
                        r = 0;
                    r < i.length;
                    r++
                )
                    f(i[r][1], i[r][0], this);
                for (this.xNumSteps = this.xSteps.slice(0), r = 0; r < this.xNumSteps.length; r++) h(r, this.xNumSteps[r], this);
            }
            function y(e) {
                if ("object" == typeof (t = e) && "function" == typeof t.to && "function" == typeof t.from) return !0;
                var t;
                throw new Error("noUiSlider (" + R + "): 'format' requires 'to' and 'from' methods.");
            }
            function g(e, t) {
                if (!n(t)) throw new Error("noUiSlider (" + R + "): 'step' is not numeric.");
                e.singleStep = t;
            }
            function v(e, t) {
                if ("object" != typeof t || Array.isArray(t)) throw new Error("noUiSlider (" + R + "): 'range' is not an object.");
                if (void 0 === t.min || void 0 === t.max) throw new Error("noUiSlider (" + R + "): Missing 'min' or 'max' in 'range'.");
                if (t.min === t.max) throw new Error("noUiSlider (" + R + "): 'range' 'min' and 'max' cannot be equal.");
                e.spectrum = new m(t, e.snap, e.singleStep);
            }
            function w(e, t) {
                if (((t = o(t)), !Array.isArray(t) || !t.length)) throw new Error("noUiSlider (" + R + "): 'start' option is incorrect.");
                (e.handles = t.length), (e.start = t);
            }
            function b(e, t) {
                if ("boolean" != typeof (e.snap = t)) throw new Error("noUiSlider (" + R + "): 'snap' option must be a boolean.");
            }
            function j(e, t) {
                if ("boolean" != typeof (e.animate = t)) throw new Error("noUiSlider (" + R + "): 'animate' option must be a boolean.");
            }
            function x(e, t) {
                if ("number" != typeof (e.animationDuration = t)) throw new Error("noUiSlider (" + R + "): 'animationDuration' option must be a number.");
            }
            function S(e, t) {
                var n,
                    r = [!1];
                if (("lower" === t ? (t = [!0, !1]) : "upper" === t && (t = [!1, !0]), !0 === t || !1 === t)) {
                    for (n = 1; n < e.handles; n++) r.push(t);
                    r.push(!1);
                } else {
                    if (!Array.isArray(t) || !t.length || t.length !== e.handles + 1) throw new Error("noUiSlider (" + R + "): 'connect' option doesn't match handle count.");
                    r = t;
                }
                e.connect = r;
            }
            function C(e, t) {
                switch (t) {
                    case "horizontal":
                        e.ort = 0;
                        break;
                    case "vertical":
                        e.ort = 1;
                        break;
                    default:
                        throw new Error("noUiSlider (" + R + "): 'orientation' option is invalid.");
                }
            }
            function E(e, t) {
                if (!n(t)) throw new Error("noUiSlider (" + R + "): 'margin' option must be numeric.");
                if (0 !== t && ((e.margin = e.spectrum.getMargin(t)), !e.margin)) throw new Error("noUiSlider (" + R + "): 'margin' option is only supported on linear sliders.");
            }
            function T(e, t) {
                if (!n(t)) throw new Error("noUiSlider (" + R + "): 'limit' option must be numeric.");
                if (((e.limit = e.spectrum.getMargin(t)), !e.limit || e.handles < 2)) throw new Error("noUiSlider (" + R + "): 'limit' option is only supported on linear sliders with 2 or more handles.");
            }
            function k(e, t) {
                if (!n(t) && !Array.isArray(t)) throw new Error("noUiSlider (" + R + "): 'padding' option must be numeric or array of exactly 2 numbers.");
                if (Array.isArray(t) && 2 !== t.length && !n(t[0]) && !n(t[1])) throw new Error("noUiSlider (" + R + "): 'padding' option must be numeric or array of exactly 2 numbers.");
                if (0 !== t) {
                    if ((Array.isArray(t) || (t = [t, t]), !(e.padding = [e.spectrum.getMargin(t[0]), e.spectrum.getMargin(t[1])]) === e.padding[0] || !1 === e.padding[1]))
                        throw new Error("noUiSlider (" + R + "): 'padding' option is only supported on linear sliders.");
                    if (e.padding[0] < 0 || e.padding[1] < 0) throw new Error("noUiSlider (" + R + "): 'padding' option must be a positive number(s).");
                    if (100 <= e.padding[0] + e.padding[1]) throw new Error("noUiSlider (" + R + "): 'padding' option must not exceed 100% of the range.");
                }
            }
            function O(e, t) {
                switch (t) {
                    case "ltr":
                        e.dir = 0;
                        break;
                    case "rtl":
                        e.dir = 1;
                        break;
                    default:
                        throw new Error("noUiSlider (" + R + "): 'direction' option was not recognized.");
                }
            }
            function Q(e, t) {
                if ("string" != typeof t) throw new Error("noUiSlider (" + R + "): 'behaviour' must be a string containing options.");
                var n = 0 <= t.indexOf("tap"),
                    r = 0 <= t.indexOf("drag"),
                    i = 0 <= t.indexOf("fixed"),
                    o = 0 <= t.indexOf("snap"),
                    a = 0 <= t.indexOf("hover"),
                    s = 0 <= t.indexOf("unconstrained");
                if (i) {
                    if (2 !== e.handles) throw new Error("noUiSlider (" + R + "): 'fixed' behaviour must be used with 2 handles");
                    E(e, e.start[1] - e.start[0]);
                }
                if (s && (e.margin || e.limit)) throw new Error("noUiSlider (" + R + "): 'unconstrained' behaviour cannot be used with margin or limit");
                e.events = { tap: n || o, drag: r, fixed: i, snap: o, hover: a, unconstrained: s };
            }
            function _(e, t) {
                if (!1 !== t)
                    if (!0 === t) {
                        e.tooltips = [];
                        for (var n = 0; n < e.handles; n++) e.tooltips.push(!0);
                    } else {
                        if (((e.tooltips = o(t)), e.tooltips.length !== e.handles)) throw new Error("noUiSlider (" + R + "): must pass a formatter for all handles.");
                        e.tooltips.forEach(function (e) {
                            if ("boolean" != typeof e && ("object" != typeof e || "function" != typeof e.to)) throw new Error("noUiSlider (" + R + "): 'tooltips' must be passed a formatter or 'false'.");
                        });
                    }
            }
            function A(e, t) {
                y((e.ariaFormat = t));
            }
            function P(e, t) {
                y((e.format = t));
            }
            function M(e, t) {
                if ("boolean" != typeof (e.keyboardSupport = t)) throw new Error("noUiSlider (" + R + "): 'keyboardSupport' option must be a boolean.");
            }
            function L(e, t) {
                e.documentElement = t;
            }
            function D(e, t) {
                if ("string" != typeof t && !1 !== t) throw new Error("noUiSlider (" + R + "): 'cssPrefix' must be a string or `false`.");
                e.cssPrefix = t;
            }
            function N(e, t) {
                if ("object" != typeof t) throw new Error("noUiSlider (" + R + "): 'cssClasses' must be an object.");
                if ("string" == typeof e.cssPrefix) for (var n in ((e.cssClasses = {}), t)) t.hasOwnProperty(n) && (e.cssClasses[n] = e.cssPrefix + t[n]);
                else e.cssClasses = t;
            }
            function U(t) {
                var n = { margin: 0, limit: 0, padding: 0, animate: !0, animationDuration: 300, ariaFormat: I, format: I },
                    r = {
                        step: { r: !1, t: g },
                        start: { r: !0, t: w },
                        connect: { r: !0, t: S },
                        direction: { r: !0, t: O },
                        snap: { r: !1, t: b },
                        animate: { r: !1, t: j },
                        animationDuration: { r: !1, t: x },
                        range: { r: !0, t: v },
                        orientation: { r: !1, t: C },
                        margin: { r: !1, t: E },
                        limit: { r: !1, t: T },
                        padding: { r: !1, t: k },
                        behaviour: { r: !0, t: Q },
                        ariaFormat: { r: !1, t: A },
                        format: { r: !1, t: P },
                        tooltips: { r: !1, t: _ },
                        keyboardSupport: { r: !0, t: M },
                        documentElement: { r: !1, t: L },
                        cssPrefix: { r: !0, t: D },
                        cssClasses: { r: !0, t: N },
                    },
                    i = {
                        connect: !1,
                        direction: "ltr",
                        behaviour: "tap",
                        orientation: "horizontal",
                        keyboardSupport: !0,
                        cssPrefix: "noUi-",
                        cssClasses: {
                            target: "target",
                            base: "base",
                            origin: "origin",
                            handle: "handle",
                            handleLower: "handle-lower",
                            handleUpper: "handle-upper",
                            horizontal: "horizontal",
                            vertical: "vertical",
                            background: "background",
                            connect: "connect",
                            connects: "connects",
                            ltr: "ltr",
                            rtl: "rtl",
                            draggable: "draggable",
                            drag: "state-drag",
                            tap: "state-tap",
                            active: "active",
                            tooltip: "tooltip",
                            pips: "pips",
                            pipsHorizontal: "pips-horizontal",
                            pipsVertical: "pips-vertical",
                            marker: "marker",
                            markerHorizontal: "marker-horizontal",
                            markerVertical: "marker-vertical",
                            markerNormal: "marker-normal",
                            markerLarge: "marker-large",
                            markerSub: "marker-sub",
                            value: "value",
                            valueHorizontal: "value-horizontal",
                            valueVertical: "value-vertical",
                            valueNormal: "value-normal",
                            valueLarge: "value-large",
                            valueSub: "value-sub",
                        },
                    };
                t.format && !t.ariaFormat && (t.ariaFormat = t.format),
                    Object.keys(r).forEach(function (o) {
                        if (!e(t[o]) && void 0 === i[o]) {
                            if (r[o].r) throw new Error("noUiSlider (" + R + "): '" + o + "' is required.");
                            return !0;
                        }
                        r[o].t(n, e(t[o]) ? t[o] : i[o]);
                    }),
                    (n.pips = t.pips);
                var o = document.createElement("div"),
                    a = void 0 !== o.style.msTransform,
                    s = void 0 !== o.style.transform;
                return (
                    (n.transformRule = s ? "transform" : a ? "msTransform" : "webkitTransform"),
                    (n.style = [
                        ["left", "top"],
                        ["right", "bottom"],
                    ][n.dir][n.ort]),
                    n
                );
            }
            var R = "12.1.0";
            (m.prototype.getMargin = function (e) {
                var t = this.xNumSteps[0];
                if (t && (e / t) % 1 != 0) throw new Error("noUiSlider (" + R + "): 'limit', 'margin' and 'padding' must be divisible by step.");
                return 2 === this.xPct.length && u(this.xVal, e);
            }),
                (m.prototype.toStepping = function (e) {
                    return (e = (function (e, t, n) {
                        if (n >= e.slice(-1)[0]) return 100;
                        var r,
                            i,
                            o = d(n, e),
                            a = e[o - 1],
                            s = e[o],
                            l = t[o - 1],
                            c = t[o];
                        return l + ((i = n), u((r = [a, s]), r[0] < 0 ? i + Math.abs(r[0]) : i - r[0]) / p(l, c));
                    })(this.xVal, this.xPct, e));
                }),
                (m.prototype.fromStepping = function (e) {
                    return (function (e, t, n) {
                        if (100 <= n) return e.slice(-1)[0];
                        var r,
                            i = d(n, t),
                            o = e[i - 1],
                            a = e[i],
                            s = t[i - 1];
                        return (r = [o, a]), ((n - s) * p(s, t[i]) * (r[1] - r[0])) / 100 + r[0];
                    })(this.xVal, this.xPct, e);
                }),
                (m.prototype.getStep = function (e) {
                    return (e = (function (e, t, n, r) {
                        if (100 === r) return r;
                        var i,
                            o,
                            a = d(r, e),
                            s = e[a - 1],
                            l = e[a];
                        return n ? ((l - s) / 2 < r - s ? l : s) : t[a - 1] ? e[a - 1] + ((i = r - e[a - 1]), (o = t[a - 1]), Math.round(i / o) * o) : r;
                    })(this.xPct, this.xSteps, this.snap, e));
                }),
                (m.prototype.getNearbySteps = function (e) {
                    var t = d(e, this.xPct);
                    return {
                        stepBefore: { startValue: this.xVal[t - 2], step: this.xNumSteps[t - 2], highestStep: this.xHighestCompleteStep[t - 2] },
                        thisStep: { startValue: this.xVal[t - 1], step: this.xNumSteps[t - 1], highestStep: this.xHighestCompleteStep[t - 1] },
                        stepAfter: { startValue: this.xVal[t], step: this.xNumSteps[t], highestStep: this.xHighestCompleteStep[t] },
                    };
                }),
                (m.prototype.countStepDecimals = function () {
                    var e = this.xNumSteps.map(a);
                    return Math.max.apply(null, e);
                }),
                (m.prototype.convert = function (e) {
                    return this.getStep(this.toStepping(e));
                });
            var I = {
                to: function (e) {
                    return void 0 !== e && e.toFixed(2);
                },
                from: Number,
            };
            return {
                __spectrum: m,
                version: R,
                create: function (e, n) {
                    if (!e || !e.nodeName) throw new Error("noUiSlider (" + R + "): create requires a single element, got: " + e);
                    if (e.noUiSlider) throw new Error("noUiSlider (" + R + "): Slider was already initialized.");
                    var a = (function (e, n, a) {
                        function p(e, t) {
                            var n = K.createElement("div");
                            return t && s(n, t), e.appendChild(n), n;
                        }
                        function u(e, t) {
                            return !!t && p(e, n.cssClasses.connect);
                        }
                        function d(e, t, r) {
                            function i(e, t) {
                                var r = t === n.cssClasses.value,
                                    i = r ? a : l;
                                return t + " " + (r ? c : u)[n.ort] + " " + i[e];
                            }
                            var o = K.createElement("div"),
                                a = [];
                            (a[re] = n.cssClasses.valueNormal), (a[ie] = n.cssClasses.valueLarge), (a[oe] = n.cssClasses.valueSub);
                            var l = [];
                            (l[re] = n.cssClasses.markerNormal), (l[ie] = n.cssClasses.markerLarge), (l[oe] = n.cssClasses.markerSub);
                            var c = [n.cssClasses.valueHorizontal, n.cssClasses.valueVertical],
                                u = [n.cssClasses.markerHorizontal, n.cssClasses.markerVertical];
                            return (
                                s(o, n.cssClasses.pips),
                                s(o, 0 === n.ort ? n.cssClasses.pipsHorizontal : n.cssClasses.pipsVertical),
                                Object.keys(e).forEach(function (a) {
                                    !(function (e, a, s) {
                                        if ((s = t ? t(a, s) : s) !== ne) {
                                            var l = p(o, !1);
                                            (l.className = i(s, n.cssClasses.marker)),
                                                (l.style[n.style] = e + "%"),
                                                re < s && (((l = p(o, !1)).className = i(s, n.cssClasses.value)), l.setAttribute("data-value", a), (l.style[n.style] = e + "%"), (l.innerHTML = r.to(a)));
                                        }
                                    })(a, e[a][0], e[a][1]);
                                }),
                                o
                            );
                        }
                        function f() {
                            var e;
                            B && ((e = B).parentElement.removeChild(e), (B = null));
                        }
                        function h(e) {
                            f();
                            var t,
                                n,
                                r,
                                i,
                                o,
                                a,
                                s,
                                l,
                                c,
                                p = e.mode,
                                u = e.density || 1,
                                h = e.filter || !1,
                                m = (function (e, t, n) {
                                    if ("range" === e || "steps" === e) return X.xVal;
                                    if ("count" === e) {
                                        if (t < 2) throw new Error("noUiSlider (" + R + "): 'values' (>= 2) required for mode 'count'.");
                                        var r = t - 1,
                                            i = 100 / r;
                                        for (t = []; r--; ) t[r] = r * i;
                                        t.push(100), (e = "positions");
                                    }
                                    return "positions" === e
                                        ? t.map(function (e) {
                                              return X.fromStepping(n ? X.getStep(e) : e);
                                          })
                                        : "values" === e
                                        ? n
                                            ? t.map(function (e) {
                                                  return X.fromStepping(X.getStep(X.toStepping(e)));
                                              })
                                            : t
                                        : void 0;
                                })(p, e.values || !1, e.stepped || !1),
                                y =
                                    ((t = u),
                                    (n = p),
                                    (r = m),
                                    (i = {}),
                                    (o = X.xVal[0]),
                                    (a = X.xVal[X.xVal.length - 1]),
                                    (l = s = !1),
                                    (c = 0),
                                    (r = r
                                        .slice()
                                        .sort(function (e, t) {
                                            return e - t;
                                        })

                                        .filter(function (e) {
                                            return !this[e] && (this[e] = !0);
                                        }, {}))[0] !== o && (r.unshift(o), (s = !0)),
                                    r[r.length - 1] !== a && (r.push(a), (l = !0)),
                                    r.forEach(function (e, o) {
                                        var a,
                                            p,
                                            u,
                                            d,
                                            f,
                                            h,
                                            m,
                                            y,
                                            g,
                                            v,
                                            w = e,
                                            b = r[o + 1],
                                            j = "steps" === n;
                                        if ((j && (a = X.xNumSteps[o]), a || (a = b - w), !1 !== w && void 0 !== b))
                                            for (a = Math.max(a, 1e-7), p = w; p <= b; p = (p + a).toFixed(7) / 1) {
                                                for (y = (f = (d = X.toStepping(p)) - c) / t, v = f / (g = Math.round(y)), u = 1; u <= g; u += 1) i[(h = c + u * v).toFixed(5)] = [X.fromStepping(h), 0];
                                                (m = -1 < r.indexOf(p) ? ie : j ? oe : re), !o && s && (m = 0), (p === b && l) || (i[d.toFixed(5)] = [p, m]), (c = d);
                                            }
                                    }),
                                    i),
                                g = e.format || { to: Math.round };
                            return (B = Y.appendChild(d(y, h, g)));
                        }
                        function m() {
                            var e = L.getBoundingClientRect(),
                                t = "offset" + ["Width", "Height"][n.ort];
                            return 0 === n.ort ? e.width || L[t] : e.height || L[t];
                        }
                        function y(e, t, r, i) {
                            var o = function (o) {
                                    return (
                                        !!(o = (function (e, t, n) {
                                            var r,
                                                i,
                                                o = 0 === e.type.indexOf("touch"),
                                                a = 0 === e.type.indexOf("mouse"),
                                                s = 0 === e.type.indexOf("pointer");
                                            if ((0 === e.type.indexOf("MSPointer") && (s = !0), o)) {
                                                var l = function (e) {
                                                    return e.target === n || n.contains(e.target);
                                                };
                                                if ("touchstart" === e.type) {
                                                    var p = Array.prototype.filter.call(e.touches, l);
                                                    if (1 < p.length) return !1;
                                                    (r = p[0].pageX), (i = p[0].pageY);
                                                } else {
                                                    var u = Array.prototype.find.call(e.changedTouches, l);
                                                    if (!u) return !1;
                                                    (r = u.pageX), (i = u.pageY);
                                                }
                                            }
                                            return (t = t || c(K)), (a || s) && ((r = e.clientX + t.x), (i = e.clientY + t.y)), (e.pageOffset = t), (e.points = [r, i]), (e.cursor = a || s), e;
                                        })(o, i.pageOffset, i.target || t)) &&
                                        !(Y.hasAttribute("disabled") && !i.doNotReject) &&
                                        ((a = Y),
                                        (s = n.cssClasses.tap),
                                        !((a.classList ? a.classList.contains(s) : new RegExp("\\b" + s + "\\b").test(a.className)) && !i.doNotReject) &&
                                            !(e === F.start && void 0 !== o.buttons && 1 < o.buttons) &&
                                            (!i.hover || !o.buttons) &&
                                            (z || o.preventDefault(), (o.calcPoint = o.points[n.ort]), void r(o, i)))
                                    );
                                    var a, s;
                                },
                                a = [];
                            return (
                                e.split(" ").forEach(function (e) {
                                    t.addEventListener(e, o, !!z && { passive: !0 }), a.push([e, o]);
                                }),
                                a
                            );
                        }
                        function g(e) {
                            var t,
                                r,
                                o,
                                a,
                                s,
                                l,
                                p =
                                    (100 *
                                        (e -
                                            ((t = L),
                                            (r = n.ort),
                                            (o = t.getBoundingClientRect()),
                                            (a = t.ownerDocument),
                                            (s = a.documentElement),
                                            (l = c(a)),
                                            /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (l.x = 0),
                                            r ? o.top + l.y - s.clientTop : o.left + l.x - s.clientLeft))) /
                                    m();
                            return (p = i(p)), n.dir ? 100 - p : p;
                        }
                        function v(e, t) {
                            "mouseout" === e.type && "HTML" === e.target.nodeName && null === e.relatedTarget && b(e, t);
                        }
                        function w(e, t) {
                            if (-1 === navigator.appVersion.indexOf("MSIE 9") && 0 === e.buttons && 0 !== t.buttonsProperty) return b(e, t);
                            var r = (n.dir ? -1 : 1) * (e.calcPoint - t.startCalcPoint);
                            k(0 < r, (100 * r) / t.baseSize, t.locations, t.handleNumbers);
                        }
                        function b(e, r) {
                            r.handle && (l(r.handle, n.cssClasses.active), ($ -= 1)),
                                r.listeners.forEach(function (e) {
                                    ee.removeEventListener(e[0], e[1]);
                                }),
                                0 === $ && (l(Y, n.cssClasses.drag), Q(), e.cursor && ((te.style.cursor = ""), te.removeEventListener("selectstart", t))),
                                r.handleNumbers.forEach(function (e) {
                                    S("change", e), S("set", e), S("end", e);
                                });
                        }
                        function j(e, r) {
                            var i;
                            if (1 === r.handleNumbers.length) {
                                var o = D[r.handleNumbers[0]];
                                if (o.hasAttribute("disabled")) return !1;
                                (i = o.children[0]), ($ += 1), s(i, n.cssClasses.active);
                            }
                            e.stopPropagation();
                            var a = [],
                                l = y(F.move, ee, w, {
                                    target: e.target,
                                    handle: i,
                                    listeners: a,
                                    startCalcPoint: e.calcPoint,
                                    baseSize: m(),
                                    pageOffset: e.pageOffset,
                                    handleNumbers: r.handleNumbers,
                                    buttonsProperty: e.buttons,
                                    locations: J.slice(),
                                }),
                                c = y(F.end, ee, b, { target: e.target, handle: i, listeners: a, doNotReject: !0, handleNumbers: r.handleNumbers }),
                                p = y("mouseout", ee, v, { target: e.target, handle: i, listeners: a, doNotReject: !0, handleNumbers: r.handleNumbers });
                            a.push.apply(a, l.concat(c, p)),
                                e.cursor && ((te.style.cursor = getComputedStyle(e.target).cursor), 1 < D.length && s(Y, n.cssClasses.drag), te.addEventListener("selectstart", t, !1)),
                                r.handleNumbers.forEach(function (e) {
                                    S("start", e);
                                });
                        }
                        function x(e, t) {
                            (Z[e] = Z[e] || []),
                                Z[e].push(t),
                                "update" === e.split(".")[0] &&
                                    D.forEach(function (e, t) {
                                        S("update", t);
                                    });
                        }
                        function S(e, t, r) {
                            Object.keys(Z).forEach(function (i) {
                                var o = i.split(".")[0];
                                e === o &&
                                    Z[i].forEach(function (e) {
                                        e.call(I, G.map(n.format.to), t, G.slice(), r || !1, J.slice());
                                    });
                            });
                        }
                        function C(e) {
                            return e + "%";
                        }
                        function E(e, t, r, o, a, s) {
                            return (
                                1 < D.length && !n.events.unconstrained && (o && 0 < t && (r = Math.max(r, e[t - 1] + n.margin)), a && t < D.length - 1 && (r = Math.min(r, e[t + 1] - n.margin))),
                                1 < D.length && n.limit && (o && 0 < t && (r = Math.min(r, e[t - 1] + n.limit)), a && t < D.length - 1 && (r = Math.max(r, e[t + 1] - n.limit))),
                                n.padding && (0 === t && (r = Math.max(r, n.padding[0])), t === D.length - 1 && (r = Math.min(r, 100 - n.padding[1]))),
                                !((r = i((r = X.getStep(r)))) === e[t] && !s) && r
                            );
                        }
                        function T(e, t) {
                            var r = n.ort;
                            return (r ? t : e) + ", " + (r ? e : t);
                        }
                        function k(e, t, n, r) {
                            var i = n.slice(),
                                o = [!e, e],
                                a = [e, !e];
                            (r = r.slice()),
                                e && r.reverse(),
                                1 < r.length
                                    ? r.forEach(function (e, n) {
                                          var r = E(i, e, i[e] + t, o[n], a[n], !1);
                                          !1 === r ? (t = 0) : ((t = r - i[e]), (i[e] = r));
                                      })
                                    : (o = a = [!0]);
                            var s = !1;
                            r.forEach(function (e, r) {
                                s = _(e, n[e] + t, o[r], a[r]) || s;
                            }),
                                s &&
                                    r.forEach(function (e) {
                                        S("update", e), S("slide", e);
                                    });
                        }
                        function O(e, t) {
                            return n.dir ? 100 - e - t : e;
                        }
                        function Q() {
                            q.forEach(function (e) {
                                var t = 50 < J[e] ? -1 : 1,
                                    n = 3 + (D.length + t * e);
                                D[e].style.zIndex = n;
                            });
                        }
                        function _(e, t, r, i) {
                            return (
                                !1 !== (t = E(J, e, t, r, i, !1)) &&
                                ((function (e, t) {
                                    (J[e] = t), (G[e] = X.fromStepping(t));
                                    var r = "translate(" + T(C(O(t, 0) - ae), "0") + ")";
                                    (D[e].style[n.transformRule] = r), A(e), A(e + 1);
                                })(e, t),
                                !0)
                            );
                        }
                        function A(e) {
                            if (N[e]) {
                                var t = 0,
                                    r = 100;
                                0 !== e && (t = J[e - 1]), e !== N.length - 1 && (r = J[e]);
                                var i = r - t,
                                    o = "translate(" + T(C(O(t, i)), "0") + ")",
                                    a = "scale(" + T(i / 100, "1") + ")";
                                N[e].style[n.transformRule] = o + " " + a;
                            }
                        }
                        function P(e, t) {
                            var i = o(e),
                                a = void 0 === J[0];
                            (t = void 0 === t || !!t),
                                n.animate && !a && r(Y, n.cssClasses.tap, n.animationDuration),
                                q.forEach(function (e) {
                                    var t, r;
                                    _(e, ((t = i[e]), (r = e), null === t || !1 === t || void 0 === t ? J[r] : ("number" == typeof t && (t = String(t)), (t = n.format.from(t)), !1 === (t = X.toStepping(t)) || isNaN(t) ? J[r] : t)), !0, !1);
                                }),
                                q.forEach(function (e) {
                                    _(e, J[e], !0, !0);
                                }),
                                Q(),
                                q.forEach(function (e) {
                                    S("update", e), null !== i[e] && t && S("set", e);
                                });
                        }
                        function M() {
                            var e = G.map(n.format.to);
                            return 1 === e.length ? e[0] : e;
                        }
                        var L,
                            D,
                            N,
                            I,
                            B,
                            V,
                            H,
                            W,
                            F = window.navigator.pointerEnabled
                                ? { start: "pointerdown", move: "pointermove", end: "pointerup" }
                                : window.navigator.msPointerEnabled
                                ? { start: "MSPointerDown", move: "MSPointerMove", end: "MSPointerUp" }
                                : { start: "mousedown touchstart", move: "mousemove touchmove", end: "mouseup touchend" },
                            z =
                                window.CSS &&
                                CSS.supports &&
                                CSS.supports("touch-action", "none") &&
                                (function () {
                                    var e = !1;
                                    try {
                                        var t = Object.defineProperty({}, "passive", {
                                            get: function () {
                                                e = !0;
                                            },
                                        });
                                        window.addEventListener("test", null, t);
                                    } catch (e) {}
                                    return e;
                                })(),
                            Y = e,
                            J = [],
                            q = [],
                            $ = 0,
                            X = n.spectrum,
                            G = [],
                            Z = {},
                            K = e.ownerDocument,
                            ee = n.documentElement || K.documentElement,
                            te = K.body,
                            ne = -1,
                            re = 0,
                            ie = 1,
                            oe = 2,
                            ae = "rtl" === K.dir || 1 === n.ort ? 0 : 100;
                        return (
                            s((V = Y), n.cssClasses.target),
                            0 === n.dir ? s(V, n.cssClasses.ltr) : s(V, n.cssClasses.rtl),
                            0 === n.ort ? s(V, n.cssClasses.horizontal) : s(V, n.cssClasses.vertical),
                            (L = p(V, n.cssClasses.base)),
                            (function (e, t) {
                                var r,
                                    i,
                                    o,
                                    a = p(t, n.cssClasses.connects);
                                (D = []), (N = []).push(u(a, e[0]));
                                for (var l = 0; l < n.handles; l++)
                                    D.push(
                                        ((r = l),
                                        (o = void 0),
                                        (i = p(t, n.cssClasses.origin)),
                                        (o = p(i, n.cssClasses.handle)).setAttribute("data-handle", r),
                                        n.keyboardSupport && o.setAttribute("tabindex", "0"),
                                        o.setAttribute("role", "slider"),
                                        o.setAttribute("aria-orientation", n.ort ? "vertical" : "horizontal"),
                                        0 === r ? s(o, n.cssClasses.handleLower) : r === n.handles - 1 && s(o, n.cssClasses.handleUpper),
                                        i)
                                    ),
                                        (q[l] = l),
                                        N.push(u(a, e[l + 1]));
                            })(n.connect, L),
                            (H = n.events).fixed ||
                                D.forEach(function (e, t) {
                                    y(F.start, e.children[0], j, { handleNumbers: [t] });
                                }),
                            H.tap &&
                                y(
                                    F.start,
                                    L,
                                    function (e) {
                                        e.stopPropagation();
                                        var t,
                                            i,
                                            o,
                                            a = g(e.calcPoint),
                                            s =
                                                ((t = a),
                                                (o = !(i = 100)),
                                                D.forEach(function (e, n) {
                                                    if (!e.hasAttribute("disabled")) {
                                                        var r = Math.abs(J[n] - t);
                                                        (r < i || (100 === r && 100 === i)) && ((o = n), (i = r));
                                                    }
                                                }),
                                                o);
                                        if (!1 === s) return !1;
                                        n.events.snap || r(Y, n.cssClasses.tap, n.animationDuration),
                                            _(s, a, !0, !0),
                                            Q(),
                                            S("slide", s, !0),
                                            S("update", s, !0),
                                            S("change", s, !0),
                                            S("set", s, !0),
                                            n.events.snap && j(e, { handleNumbers: [s] });
                                    },
                                    {}
                                ),
                            H.hover &&
                                y(
                                    F.move,
                                    L,
                                    function (e) {
                                        var t = g(e.calcPoint),
                                            n = X.getStep(t),
                                            r = X.fromStepping(n);
                                        Object.keys(Z).forEach(function (e) {
                                            "hover" === e.split(".")[0] &&
                                                Z[e].forEach(function (e) {
                                                    e.call(I, r);
                                                });
                                        });
                                    },
                                    { hover: !0 }
                                ),
                            H.drag &&
                                N.forEach(function (e, t) {
                                    if (!1 !== e && 0 !== t && t !== N.length - 1) {
                                        var r = D[t - 1],
                                            i = D[t],
                                            o = [e];
                                        s(e, n.cssClasses.draggable),
                                            H.fixed && (o.push(r.children[0]), o.push(i.children[0])),
                                            o.forEach(function (e) {
                                                y(F.start, e, j, { handles: [r, i], handleNumbers: [t - 1, t] });
                                            });
                                    }
                                }),
                            P(n.start),
                            (I = {
                                destroy: function () {
                                    for (var e in n.cssClasses) n.cssClasses.hasOwnProperty(e) && l(Y, n.cssClasses[e]);
                                    for (; Y.firstChild; ) Y.removeChild(Y.firstChild);
                                    delete Y.noUiSlider;
                                },
                                steps: function () {
                                    return J.map(function (e, t) {
                                        var n = X.getNearbySteps(e),
                                            r = G[t],
                                            i = n.thisStep.step,
                                            o = null;
                                        !1 !== i && r + i > n.stepAfter.startValue && (i = n.stepAfter.startValue - r),
                                            (o = r > n.thisStep.startValue ? n.thisStep.step : !1 !== n.stepBefore.step && r - n.stepBefore.highestStep),
                                            100 === e ? (i = null) : 0 === e && (o = null);
                                        var a = X.countStepDecimals();
                                        return null !== i && !1 !== i && (i = Number(i.toFixed(a))), null !== o && !1 !== o && (o = Number(o.toFixed(a))), [o, i];
                                    });
                                },
                                on: x,
                                off: function (e) {
                                    var t = e && e.split(".")[0],
                                        n = t && e.substring(t.length);
                                    Object.keys(Z).forEach(function (e) {
                                        var r = e.split(".")[0],
                                            i = e.substring(r.length);
                                        (t && t !== r) || (n && n !== i) || delete Z[e];
                                    });
                                },
                                get: M,
                                set: P,
                                setHandle: function (e, t, n) {
                                    var r = [];
                                    if (!(0 <= (e = Number(e)) && e < q.length)) throw new Error("noUiSlider (" + R + "): invalid handle number, got: " + e);
                                    for (var i = 0; i < q.length; i++) r[i] = null;
                                    (r[e] = t), P(r, n);
                                },
                                reset: function (e) {
                                    P(n.start, e);
                                },
                                __moveHandles: function (e, t, n) {
                                    k(e, t, J, n);
                                },
                                options: a,
                                updateOptions: function (e, t) {
                                    var r = M(),
                                        i = ["margin", "limit", "padding", "range", "animate", "snap", "step", "format"];
                                    i.forEach(function (t) {
                                        void 0 !== e[t] && (a[t] = e[t]);
                                    });
                                    var o = U(a);
                                    i.forEach(function (t) {
                                        void 0 !== e[t] && (n[t] = o[t]);
                                    }),
                                        (X = o.spectrum),
                                        (n.margin = o.margin),
                                        (n.limit = o.limit),
                                        (n.padding = o.padding),
                                        n.pips && h(n.pips),
                                        (J = []),
                                        P(e.start || r, t);
                                },
                                target: Y,
                                removePips: f,
                                pips: h,
                            }),
                            n.pips && h(n.pips),
                            n.tooltips &&
                                ((W = D.map(function (e, t) {
                                    return !!n.tooltips[t] && p(e.firstChild, n.cssClasses.tooltip);
                                })),
                                x("update", function (e, t, r) {
                                    if (W[t]) {
                                        var i = e[t];
                                        !0 !== n.tooltips[t] && (i = n.tooltips[t].to(r[t])), (W[t].innerHTML = i);
                                    }
                                })),
                            x("update", function (e, t, r, i, o) {
                                q.forEach(function (e) {
                                    var t = D[e],
                                        i = E(J, e, 0, !0, !0, !0),
                                        a = E(J, e, 100, !0, !0, !0),
                                        s = o[e],
                                        l = n.ariaFormat.to(r[e]);
                                    (i = X.fromStepping(i).toFixed(1)),
                                        (a = X.fromStepping(a).toFixed(1)),
                                        (s = X.fromStepping(s).toFixed(1)),
                                        t.children[0].setAttribute("aria-valuemin", i),
                                        t.children[0].setAttribute("aria-valuemax", a),
                                        t.children[0].setAttribute("aria-valuenow", s),
                                        t.children[0].setAttribute("aria-valuetext", l);
                                });
                            }),
                            I
                        );
                    })(e, U(n), n);
                    return (e.noUiSlider = a);
                },
            };
        });
    if (jQuery(".jewelry-catalog-container").length > 0) {
        var n = {},
            r = (function (e) {
                var t = e.replace(/\.[^/.]+$/, "");
                return "/" === t.substr(t.length - 1) && (t = t.substring(0, t.length - 1)), t;
            })(window.location.pathname);
        JewelryCookies.remove("jewelryfilterconfig", { expires: 7, path: r });
        var i = {},
            o = JewelryCookies.getJSON("jewelryfilterenabledfilters", { expires: 7, path: r }) || [],
            a = jQuery(".jewelry-catalog-container"),
            s = a.hasClass("jewelry-catalog-diamonds"),
            l = "popup",
            c = a.data("shop"),
            p = a.data("collection-id"),
            u = a.data("search"),
            d = a.data("language"),
            f = !1,
            h = !1,
            m = !1,
            y = !1,
            g = !1,
            v = "",
            w = !1,
            b = !1,
            j = !1,
            x = setInterval(function () {
                N();
            }, 100),
            S = "https://store.jewelry.systems/catalog/getProducts",
            C = JewelryCookies.get("jewelry_builder_variant_id", { path: "/" });
        "string" != typeof C && (C = !1);
        var E = JewelryCookies.get("jewelry_builder_stone_type", { path: "/" });
        "string" != typeof E && (E = !1);
        var T = JewelryCookies.get("jewelry_builder_stone_id", { path: "/" });
        "string" != typeof T && (T = !1),
            "1" === builderActive &&
                jQuery.post(
                    "https://store.jewelry.systems/catalog/getBuilderHtml",
                    { shop: c, language: d, collection_id: p, builder_variant_id: C, jewelry_builder_stone_type: E, jewelry_builder_stone_id: T, page_type: "collection" },
                    function (e) {
                        jQuery(e).insertAfter(".jewelry-catalog-container .jewelry-header");
                    }
                ),
            jQuery.get("https://store.jewelry.systems/catalog/getFilters", { shop: c, collection_id: p, search_term: u, language: d, force_product_type: a.data("force-product-type") }, function (a) {
                clearInterval(x),
                    jQuery("#jewelry-catalog-filter-form").html(a),
                    (function () {
                        if ("1" === t("builder")) {
                            var a = t("diamond_shape");
                            if (a)
                                if (s) {
                                    var l = a.split(",");
                                    jQuery(".jewelry-diamond-shapes > li").removeClass("active"),
                                        jQuery('input[name="diamond_shape"]').prop("checked", !1),
                                        jQuery.each(l, function () {
                                            var e = jQuery('input[name="diamond_shape"][value="' + this + '"]');
                                            e.parent().addClass("active"), e.prop("checked", !0);
                                        }),
                                        jQuery('input[name="diamond_shape"]:not(:checked)').each(function () {
                                            $(this).parent().remove();
                                        }),
                                        jQuery(".jewelry-filters-applied").remove();
                                } else jQuery('input[name="diamond_shape"][value="' + a + '"]').prop("checked", !0);
                            var c = t("builder_variant_id");
                            c && JewelryCookies.set("jewelry_builder_variant_id", c, { expires: 7, path: "/" });
                            var p = t("center_stone_weight");
                            p && jQuery('div[data-handle="center_stone_weight"]').data("preset", p);
                            var u = t("center_stone_weight");
                            u && jQuery('div[data-handle="center_stone_weight"]').data("preset", u);
                        }
                        jQuery(".jewelry-filters .jewelry-filter .jewelry-filter-select-wrap > span.name").click(function (e) {
                            e.preventDefault();
                            let t = jQuery(this).parent();
                            t.hasClass("open")
                                ? t.removeClass("open")
                                : (t.parent().parent().parent().find(".jewelry-filter-select-wrap").removeClass("open"),
                                  t.addClass("open"),
                                  t.find(".content p").each(function () {
                                      let e = jQuery(this).find("label"),
                                          t = e.find("input"),
                                          n = e.find("span.jewelry-option"),
                                          r = e.find("span.jewelry-count"),
                                          i = e.find("img"),
                                          o = e.outerWidth(!0) - t.outerWidth(!0) - r.outerWidth(!0) - i.outerWidth(!0) - 15;
                                      n.outerWidth(!0) > o && n.css({ "max-width": o, "margin-right": "-2px" });
                                  }));
                        }),
                            jQuery('.jewelry-filters .jewelry-filter[data-type="range"] .slider-inside .slider').each(function () {
                                let t = this;
                                if (!jQuery(t).hasClass("noUi-target")) {
                                    let r = $(this).parent().parent(),
                                        o = r.parent().parent(),
                                        a = r.find('input[data-type="from"]'),
                                        s = r.find('input[data-type="to"]'),
                                        l = o.data("handle"),
                                        c = o.data("min"),
                                        p = o.data("max"),
                                        u = parseFloat(o.data("step")),
                                        d = c,
                                        f = p,
                                        h = o.data("prefix"),
                                        m = o.data("suffix"),
                                        y = o.data("preset");
                                    "string" == typeof y && 1 === (y = y.split(",")).length && (y = [y[0], y[0]]), "object" == typeof i[l] && ((d = i[l][1]), (f = i[l][2])), (c = parseFloat(c)) === (p = parseFloat(p)) && (p = c + 1);
                                    let g = { start: [d, f], connect: !0, step: u, range: { min: c, max: p } };
                                    "object" == typeof y && (g.start = [parseFloat(y[0]), parseFloat(y[1])]),
                                        "price" === l || "price_per_carat" === l
                                            ? (g.format = {
                                                  to: function (t) {
                                                      return h + e(parseInt(t), 0, ".", ",") + m;
                                                  },
                                                  from: function (e) {
                                                      return parseInt(e.replace(/\D+/g, ""));
                                                  },
                                              })
                                            : ("" === h && "" === m) ||
                                              (g.format = {
                                                  to: function (t) {
                                                      return h + e(parseFloat(t), 2, ".", "") + m;
                                                  },
                                                  from: function (e) {
                                                      return parseFloat(e.replace(/[^0-9.]/g, ""));
                                                  },
                                              }),
                                        noUiSlider.create(t, g),
                                        t.noUiSlider.on("update", function (e, t) {
                                            let n = e[0],
                                                r = e[1];
                                            a.val(n), s.val(r), O();
                                        }),
                                        "object" == typeof y
                                            ? t.noUiSlider.on("change", function (e, n) {
                                                  t.noUiSlider.set([parseFloat(y[0]), parseFloat(y[1])]);
                                              })
                                            : (a[0].addEventListener("change", function () {
                                                  t.noUiSlider.set([this.value, null]);
                                              }),
                                              s[0].addEventListener("change", function () {
                                                  t.noUiSlider.set([null, this.value]);
                                              })),
                                        (n[l] = t);
                                }
                            }),
                            jQuery('.jewelry-filters .jewelry-filter[data-type="range-steps"] .slider-inside .slider').each(function () {
                                let e = this;
                                if (!jQuery(e).hasClass("noUi-target")) {
                                    let t = jQuery(this).parent().parent().parent().parent().find(".jewelry-range-values"),
                                        n = [];
                                    t.find("> div").each(function () {
                                        let e = parseInt(jQuery(this).data("value"));
                                        n.push(e);
                                    }),
                                        n.push(n[n.length - 1] + 1);
                                    let r = n[0],
                                        i = n[n.length - 1];
                                    noUiSlider.create(e, { start: [r, i], step: 1, margin: 1, connect: !0, range: { min: r, max: i } }),
                                        e.noUiSlider.on("update", function (e, n) {
                                            let r = parseInt(e[0]),
                                                i = parseInt(e[1]) - 1;
                                            t.find("> div").each(function () {
                                                let e = jQuery(this).data("value");
                                                e >= r && e <= i ? (jQuery(this).addClass("active"), jQuery(this).next().prop("checked", !0)) : (jQuery(this).removeClass("active"), jQuery(this).next().prop("checked", !1));
                                            }),
                                                O();
                                        }),
                                        t.find("> div").click(function (t) {
                                            t.preventDefault();
                                            let n = e.noUiSlider.get(),
                                                r = parseInt(n[0]),
                                                i = parseInt(n[1]) - 1,
                                                o = parseInt(jQuery(this).attr("data-value"));
                                            o >= r && o <= i ? (o === r ? n[0]++ : o === i ? n[1]-- : o - parseInt(n[0]) > parseInt(n[1]) - o ? (n[1] = o + 1) : (n[0] = o)) : o < r ? (n[0] = o) : o >= i && (n[1] = o + 1),
                                                e.noUiSlider.set(n);
                                        });
                                }
                            }),
                            k(),
                            jQuery('.jewelry-filters .jewelry-filter[data-type="shapes-checkboxes"] .jewelry-options > li').click(function (e) {
                                e.preventDefault(), jQuery(this).toggleClass("active"), jQuery(this).hasClass("active") ? jQuery(this).find("input").prop("checked", !0) : jQuery(this).find("input").prop("checked", !1), O();
                            }),
                            jQuery("#jewelry-catalog-filter-form input:not(.jewelry-do-not-update)").change(function () {
                                O();
                            }),
                            jQuery(".jewelry-filters .jewelry-filter:visible").each(function () {
                                let e = jQuery(this).data("handle");
                                void 0 !== e && jQuery('.jewelry-filters .jewelry-filter[data-type="filters"] input[value="' + e + '"]').attr("checked", !0);
                            }),
                            jQuery("#jewelry-show-filter-mobile").click(function () {
                                jQuery("#jewelry-catalog-filter-form").show(), k();
                            }),
                            jQuery("#jewelry-mobile-close-filters").click(function () {
                                jQuery("#jewelry-catalog-filter-form").css({ display: "" });
                            }),
                            jQuery.each(o, function () {
                                let e = jQuery('#jewelry-catalog-filter-form .jewelry-filter[data-handle="' + this + '"]');
                                jQuery('#jewelry-catalog-filter-form .jewelry-filter[data-type="filters"] input[value="' + this + '"]').attr("checked", !0), e.show();
                            }),
                            jQuery('#jewelry-catalog-filter-form .jewelry-filter[data-type="filters"] input').change(function () {
                                let e = jQuery(this),
                                    t = e.val(),
                                    n = e.is(":checked"),
                                    i = jQuery('#jewelry-catalog-filter-form .jewelry-filter[data-handle="' + t + '"]');
                                n ? i.show() : i.hide();
                                let o = [];
                                jQuery("#jewelry-catalog-filter-form .jewelry-filter[data-handle]:visible").each(function () {
                                    o.push(jQuery(this).data("handle"));
                                }),
                                    JewelryCookies.set("jewelryfilterenabledfilters", o, { expires: 7, path: r });
                            }),
                            jQuery(".jewelry-catalog-container .jewelry-filters-select > select").change(function () {
                                A(!0);
                            }),
                            jQuery(".jewelry-catalog-container .jewelry-filters .additional-filters-toggle > span.additional-filters-toggle-more").click(function () {
                                jQuery(this).hide(),
                                    jQuery(".jewelry-catalog-container .jewelry-filters .additional-filters-toggle > span.additional-filters-toggle-less").show(),
                                    jQuery(".jewelry-catalog-container .jewelry-filters .additional-filters").slideDown(),
                                    k();
                            }),
                            jQuery(".jewelry-catalog-container .jewelry-filters .additional-filters-toggle > span.additional-filters-toggle-less").click(function () {
                                jQuery(this).hide(),
                                    jQuery(".jewelry-catalog-container .jewelry-filters .additional-filters-toggle > span.additional-filters-toggle-more").show(),
                                    jQuery(".jewelry-catalog-container .jewelry-filters .additional-filters").slideUp();
                            }),
                            s ||
                                (jQuery(".jewelry-sidebar.fixed-filters").length > 0 &&
                                    (j = new StickySidebar(".jewelry-catalog-container .jewelry-sidebar.fixed-filters", {
                                        topSpacing: 0,
                                        bottomSpacing: 20,
                                        containerSelector: ".jewelry-catalog-container .jewelry-content",
                                        innerWrapperSelector: "#jewelry-catalog-filter-form",
                                    })));
                        jQuery("body").click(function (e) {
                            0 === jQuery(e.target).parents(".jewelry-filter").length && jQuery("#jewelry-catalog-filter-form .jewelry-filter-select-wrap.open").removeClass("open");
                        }),
                            jQuery(".jewelry-catalog-container .jewelry-filters .jewelry-filter .name.has-info").each(function () {
                                var e = jQuery(this),
                                    t = e.find("> i"),
                                    n = e.data("info");
                                tippy(t[0], { interactive: !0, trigger: "click", content: n, allowHTML: !0 });
                            }),
                            jQuery(".jewelry-catalog-container").on("click", ".popup-tabs .tabs-head > span", function (e) {
                                var t = jQuery(this),
                                    n = t.parent(),
                                    r = n.parent(),
                                    i = n.find("> span"),
                                    o = r.find(".tabs-content"),
                                    a = o.find("> span"),
                                    s = t.index();
                                i.removeClass("active"), t.addClass("active"), a.removeClass("active"), o.find("> span:eq(" + s + ")").addClass("active");
                            }),
                            jQuery(".jewelry-filters .jewelry-filter").each(function () {
                                let e = jQuery(this),
                                    n = e.data("handle"),
                                    r = e.data("type"),
                                    i = t(n);
                                if (null !== i)
                                    switch (r) {
                                        case "shapes-checkboxes":
                                            e.find('input[type="checkbox"]').prop("checked", !1), e.find("li.active").removeClass("active", !1);
                                            let t = i.split(",");
                                            jQuery.each(t, function () {
                                                e.find('input[type="checkbox"][value="' + n + "_" + this + '"]').each(function () {
                                                    jQuery(this).prop("checked", !0), jQuery(this).closest("li").addClass("active");
                                                });
                                            }),
                                                !0 === y && 4 !== w.readyState && (w.abort(), clearTimeout(_)),
                                                (_ = setTimeout(function () {
                                                    (y = !1), O(), A(!0);
                                                }, 300));
                                    }
									
                            });
                    })(),
                    Q(),
                    N();
					 $(".jewelry-filters-select").insertBefore("#jewelry-mobile-close-filters");
								alert('test');
            });
        function k() {
            jQuery('.jewelry-filters .jewelry-filter[data-type="range-steps"]:visible').each(function () {
                var e = jQuery(this).find(".slider-inside .slider"),
                    t = jQuery(e).find(".noUi-connects"),
                    n = jQuery(this).find(".jewelry-range-values:not(.lines-added)"),
                    r = "";
                n.find("> div").each(function () {
                    var e = jQuery(this);
                    r += '<span style="width:' + e.width() + 'px"></span>';
                }),
                    t.append('<div class="vertical-lines">' + r + "</div>"),
                    n.addClass("lines-added");
            });
        }
        void 0 !== i
            ? (jQuery.each(i, function (e, t) {
                  let n = e;
                  "string" == typeof t
                      ? jQuery('.jewelry-catalog-container .jewelry-filters .jewelry-filter[data-handle="' + n + '"] .jewelry-filter-select-wrap > .content input[type="checkbox"][value="' + t + '"]').attr("checked", !0)
                      : "object" == typeof t &&
                        jQuery.each(t, function (e, t) {
                            jQuery('.jewelry-catalog-container .jewelry-filters .jewelry-filter[data-handle="' + n + '"] .jewelry-filter-select-wrap > .content input[type="checkbox"][value="' + t + '"]').attr("checked", !0);
                        });
              }),
              Q(),
              A())
            : O();
        function O() {
            let e = {};
            jQuery("#jewelry-catalog-filter-form .jewelry-filter").each(function () {
                let t = jQuery(this),
                    n = t.attr("data-type"),
                    r = t.attr("data-handle");
                if ("filters" === n || "empty " === n);
                else if ("range" === n) {
                    let i = parseFloat(t.attr("data-min")),
                        o = parseFloat(t.attr("data-max")),
                        a = t.find('input[data-type="from"]')[0].value.replace(",", ""),
                        s = t.find('input[data-type="to"]')[0].value.replace(",", "");
                    ("price" !== r && "price_per_carat" !== r) || ((a = a.replace(/\D+/g, "")), (s = s.replace(/\D+/g, "")));
                    let l = parseFloat(a),
                        c = parseFloat(s);
                    i !== l || o !== c ? (t.addClass("jewelry-filter-changed"), (e[r] = [n, l, c])) : (t.removeClass("jewelry-filter-changed"), t.find(".name small").remove());
                } else {
                    let i = [n];
                    t.find('input[type="checkbox"]:checked').each(function () {
                        i.push(jQuery(this).val());
                    }),
                        i.length > 1 && (e[r] = i);
                }
              
            }),
                JewelryCookies.set("jewelryfilterconfig", e, { expires: 7, path: r }),
                A(),
                Q();
        }
        function Q() {
            let e = JewelryCookies.getJSON("jewelryfilterconfig", { expires: 7, path: r }),
                t = [],
                n = {};
            void 0 !== e &&
                jQuery.each(e, function (e, r) {
                    let i = e;
                    if ("product_type" !== i)
                        if ((void 0 === n[i] && (n[i] = -1), "string" == typeof r)) {
                            let e = jQuery('.jewelry-catalog-container .jewelry-filters .jewelry-filter .jewelry-filter-select-wrap > .content input[type="checkbox"][name="' + i + '"]')
                                .parent()
                                .parent()
                                .parent()
                                .parent()
                                .find(".name")
                                .clone()
                                .children()
                                .remove()
                                .end()
                                .text();
                            if ("" !== e) {
                                let o = $('.jewelry-filter input[name="' + i + '"][value="' + r[1] + '"]')
                                        .next(".jewelry-option")
                                        .text(),
                                    a = '<li data-handle="' + i + '">' + e + " - <strong>" + o + '</strong><span class="jewelry-filter-remove">x</span></li>';
                                t.push(a), (n[i] = 1);
                            }
                        } else if ("object" == typeof r) {
                            let e = jQuery('.jewelry-catalog-container .jewelry-filters .jewelry-filter[data-type="range"] .jewelry-filter-select-wrap > .content input[type="text"][name="' + i + '"]')
                                .parent()
                                .parent()
                                .parent()
                                .parent();
                            if (e.length > 0) {
                                let n = e.find(".name"),
                                    r = e.parent(),
                                    o = n.text();
                                if (r.hasClass("jewelry-filter-changed")) {
                                    let e = r.find('input[data-type="from"]').val(),
                                        n = r.find('input[data-type="to"]').val(),
                                        a = '<li data-handle="' + i + '">' + o + " <small>" + e + " - " + n + '</small><span class="jewelry-filter-remove">x</span></li>';
                                    t.push(a);
                                }
                            } else
                                jQuery.each(r, function (e, r) {
                                    let o = jQuery('.jewelry-catalog-container .jewelry-filters .jewelry-filter .jewelry-filter-select-wrap > .content input[type="checkbox"][name="' + i + '"]')
                                        .parent()
                                        .parent()
                                        .parent()
                                        .parent()
                                        .find(".name")
                                        .clone()
                                        .children()
                                        .remove()
                                        .end()
                                        .text();
                                    if ("" !== o) {
                                        let e = $('.jewelry-filter input[name="' + i + '"][value="' + r + '"]')
                                            .next(".jewelry-option")
                                            .text();
                                        if (n[i] >= 0) {
                                            let n = '<li data-handle="' + i + '">' + o + " - <strong>" + e + '</strong><span class="jewelry-filter-remove">x</span></li>';
                                            t.push(n);
                                        }
                                        n[i]++;
                                    }
                                });
                        }
                }),
                jQuery('#jewelry-catalog-filter-form .jewelry-filters .jewelry-filter[data-type="checkboxes"]').each(function () {
                    let e = jQuery(this).data("handle"),
                        t = jQuery(this).find(".name");
                    if (void 0 === n[e]) t.find(" > small").remove();
                    else {
                        t.find("> small").remove();
                        let r = " <small>(" + n[e] + ")</small>",
                            i = t.html().replace("<i>", r + "<i>");
                        t.html(i);
                    }
                });
            let i = t.length,
                o = jQuery(".jewelry-catalog-container .jewelry-filters-applied");
            i > 0
                ? (o.find(".jewelry-current-filter-status").html(i + ' filter(s) applied <span class="jewelry-current-filters-clean-all">Remove All</span>'), o.find(".jewelry-current-filters-enabled").html(t.join("")))
                : (o.find(".jewelry-current-filter-status").text("No filter(s) applied"), o.find(".jewelry-current-filters-enabled").html(""));
        }
        jQuery(".jewelry-content").on("click touchstart", ".jewelry-current-filters-clean-all", function (e) {
            e.preventDefault(),
                e.stopImmediatePropagation(),
                jQuery.each(n, function (e, t) {
                    t.noUiSlider.set([0, 999999999]);
                }),
                jQuery('#jewelry-catalog-filter-form .jewelry-filter[data-type="checkboxes"] input[type="checkbox"]').prop("checked", !1),
                O();
        });
        var _;
        function A(e) {
            void 0 === e && (e = !1);
            let t = JewelryCookies.getJSON("jewelryfilterconfig", { expires: 7, path: r });
            s &&
                "object" == typeof t &&
                jQuery.each(t, function (e, n) {
                    let r = jQuery('.jewelry-filter[data-handle="' + e + '"]');
                    "range" !== r.attr("data-type") && r.find("input").length === n.length - 1 && delete t[e];
                });
            var n = JSON.stringify(v);
            if ((void 0 === n && (n = "{}"), !1 === e && JSON.stringify(t) === n)) return !1;
            if (y) return (f = !0), !1;
            if (
                (!0 === y &&
                    4 !== w.readyState &&
                    (w.abort(),
                    clearTimeout(_),
                    (_ = setTimeout(function () {
                        (y = !1), A(!0);
                    }, 300))),
                (f = !1),
                (y = !0),
                !1 === g)
            )
                g = '<div class="jewelry-products-list-preloading">' + jQuery(".jewelry-products-list-preloading")[0].innerHTML + "</div>";
            else if (s) {
                var i = jQuery(".jewelry-diamond-list-wrapper");
                i.length > 0 ? (jQuery(".jewelry-diamond-listing").html(""), i.append(g)) : jQuery(".jewelry-products-list").html(g);
            } else jQuery(".jewelry-products-list").html(g);
            let o = P();
            !(function () {
                let e = jQuery(".jewelry-catalog-container .jewelry-content");
                if (0 !== e.length) {
                    let t = e.position().top;
                    jQuery(window).scrollTop() > t && jQuery("html, body").stop().animate({ scrollTop: t });
                }
            })(),
                (v = t),
                (w = jQuery.get(S, { shop: c, collection_id: p, filters: t, search_term: u, sorting: o, language: d, ac: a.data("ac"), builder_variant_id: C, force_product_type: a.data("force-product-type") }, function (t) {
                    if ((jQuery(".jewelry-load-more").attr("data-page", 1), s)) {
                        var n = jQuery(t);
                        jQuery(".jewelry-diamond-list-wrapper").length > 0
                            ? (jQuery(".jewelry-diamond-listing").html(n.find(".jewelry-diamond-listing").html()),
                              jQuery(".jewelry-catalog-count").html(n.find(".jewelry-catalog-count").html()),
                              jQuery(".jewelry-products-list-preloading").remove())
                            : jQuery(".jewelry-products-list").html(t);
                    } else jQuery(".jewelry-products-list").html(t);
                    (y = !1),
                        (b = !1),
                        s ||
                            (function () {
                                if (JSON.stringify(JewelryCookies.getJSON("jewelryfilterconfig", { expires: 7, path: r })) === JSON.stringify({}))
                                    return (
                                        jQuery('#jewelry-catalog-filter-form .jewelry-filter[data-type="checkboxes"] .content input').each(function () {
                                            let e = jQuery(this).parent().find(".jewelry-count"),
                                                t = parseInt(jQuery(this).attr("data-count"));
                                            t > 0 && jQuery(this).attr("disabled", !1), e.text("(" + t + ")");
                                        }),
                                        !1
                                    );
                                let e = [];
                                jQuery("#jewelry-catalog-filter-form .jewelry-filter").each(function () {
                                    let t = jQuery(this),
                                        n = { name: t.attr("data-handle"), type: t.attr("data-type") };
                                    "checkboxes" === n.type &&
                                        ((n.values = []),
                                        t.find('input[type="checkbox"]').each(function () {
                                            n.values.push(jQuery(this).val());
                                        })),
                                        e.push(n);
                                });
                            })(),
                        (function () {
                            function e() {
                                var t = jQuery("#jewelry-diamond-details"),
                                    n = t.find(".modal__header").height() + t.find(".modal__content").height() + 100,
                                    r = t.find(".jewelry-product-container")[0].scrollWidth + 100,
                                    i = t.find(".jewelry-product-container")[0];
                                t.find(".modal__container").css("max-height", n + "px"),
                                    i.scrollWidth - i.offsetWidth >= 20 && t.find(".modal__container").css("max-width", r + "px"),
                                    jQuery("#jewelry-diamond-details .jewelry-zoom").on("load", function () {
                                        e();
                                    });
                            }
                            jQuery("body").on("click", ".jewelry-popup .modal__close", function () {
                                jQuery(this).parent().parent().parent().parent().hide();
                            }),
                                jQuery(".jewelry-products-list .jewelry-product").each(function () {
                                    M(jQuery(this).attr("href"));
                                }),
                                jQuery(".jewelry-popup").on("submit", ".diamond-add-to-cart-form", function (e) {
                                    e.preventDefault();
                                    var t = jQuery(this);
                                    if (t.hasClass("loading")) return !1;
                                    var n = t.data("product-id"),
                                        r = (t.find("#AddToCart"), t.find("#AddToCartText")),
                                        i = r.html();
                                    t.addClass("loading"),
                                        r.html("Adding diamond to cart..."),
                                        jQuery.get("https://store.jewelry.systems/catalog/diamond/addToCart", { diamond_id: n, language: d, shopDomain: c, type: "popup" }, function (e) {
                                            t.removeClass("loading"),
                                                r.html(i),
                                                jQuery.post(
                                                    "/cart/add.js",
                                                    { quantity: 1, id: e },
                                                    function (e) {
                                                        location.href = "/cart";
                                                    },
                                                    "json"
                                                );
                                        });
                                }),
                                $("#jewelry-diamond-details").appendTo(document.body);
                            if (s) {
                                jQuery(window).resize(function () {
                                    e();
                                }),
                                    "popup" === l
                                        ? (jQuery(".jewelry-products-list").on("click ", ".jewelry-diamond-item.rapnet-diamond", function (t) {
                                              t.preventDefault();
                                              var n = $(this);
                                              if (!n.hasClass("loading")) {
                                                  var r = n.data("id");
                                                  n.addClass("loading"),
                                                      jQuery.get("https://store.jewelry.systems/catalog/diamond/" + r, { language: d, shopDomain: c, builder_variant_id: C }, function (t) {
                                                          var r = jQuery("#jewelry-diamond-details");
                                                          r.find(".modal__content").html(t), r.show(), e(), n.removeClass("loading");
                                                      });
                                              }
                                          }),
                                          jQuery(".jewelry-products-list").on("click ", ".jewelry-diamond-item:not(.rapnet-diamond)", function (t) {
                                              t.preventDefault();
                                              var n = $(this);
                                              if (!n.hasClass("loading")) {
                                                  var r = n.data("id");
                                                  n.addClass("loading"),
                                                      jQuery.get("https://store.jewelry.systems/catalog/product/" + r, { language: d, popup: !0, builder_variant_id: C, shopDomain: c }, function (t) {
                                                          var r = jQuery("#jewelry-diamond-details");
                                                          r.find(".modal__content").html(t), r.show(), e(), n.removeClass("loading");
                                                          var i = jQuery("#jewelry-report");
                                                          if (i.length > 0) {
                                                              i.clone().appendTo("body"), i.remove();
                                                          }
                                                      });
                                              }
                                          }),
                                          jQuery("body").on("click", "#jewelry-diamond-details .jewelry-show-certificate", function (e) {
                                              e.preventDefault();
                                              var t = $(this).closest(".jewelry-sticky-details").find('input[name="id"]').val(),
                                                  n = $(this).data("certificates")[t];
                                              if ("string" == typeof n) {
                                                  let e = "";
                                                  (e =
                                                      "pdf" === n.split(".").pop().substring(0, 3)
                                                          ? '<div class="certificate-container" style="margin-top: 10px;width: calc(100% - 60px);height: calc(100% - 80px);position: absolute;"><embed src="' +
                                                            n +
                                                            '" type="application/pdf" width="100%" height="100%" /></div>'
                                                          : '<img src="' + n + '"  style="width: 100%;height: auto" />'),
                                                      $("#jewelry-report .modal__content").html(e),
                                                      $("#jewelry-report").show();
                                              }
                                          }),
                                          jQuery("body").on("click", "#builderButton .currentText", function (e) {
                                              jQuery(this).closest("#builderButton").toggleClass("open");
                                          }),
                                          jQuery("body").on("click", "#builderButton .build", function (e) {
                                              let t = jQuery(this),
                                                  n = t.closest("#AddToCartForm"),
                                                  r = n.data("product-id"),
                                                  i = n.data("product-type"),
                                                  o = t.data("product-type");
                                              $("#productSelect").val();
                                              var a = { shop: c, variant_id: r, type: o, product_type: i, language: d };
                                              JewelryCookies.set("jewelry_builder_stone_id", r, { expires: 7, path: "/" }),
                                                  JewelryCookies.set("jewelry_builder_stone_type", i, { expires: 7, path: "/" }),
                                                  $.get("https://store.jewelry.systems/catalog/getBuilderLink", a, function (e) {
                                                      e && (window.location.href = e);
                                                  });
                                          }),
                                          jQuery("body").on("click", "#builderButton.finish-build", function (e) {
                                              e.preventDefault();
                                              let t = jQuery(this).closest("#AddToCartForm"),
                                                  n = t.data("product-type"),
                                                  r = t.data("product-id");
                                              JewelryCookies.set("jewelry_builder_stone_id", r, { expires: 7, path: "/" }), JewelryCookies.set("jewelry_builder_stone_type", n, { expires: 7, path: "/" });
                                              var i = { shop: c, language: d };
                                              $.get("https://store.jewelry.systems/catalog/getBuilderFinishLink", i, function (e) {
                                                  e && (window.location.href = e);
                                              });
                                          }))
                                        : jQuery(".jewelry-products-list").on("click ", ".jewelry-diamond-item.rapnet-diamond", function (e) {
                                              e.preventDefault();
                                              var t = $(this);
                                              if (!t.hasClass("loading")) {
                                                  var n = t.data("id");
                                                  t.addClass("loading"),
                                                      jQuery.get("https://store.jewelry.systems/catalog/diamond/addToCart", { language: d, shopDomain: c, diamond_id: n }, function (e) {
                                                          "new_tab" === l ? window.open(e, "_blank") : "same_tab" === l && (location.href = e), t.removeClass("loading");
                                                      });
                                              }
                                          });
                            }
                            L();
                        })(),
                        !1 === m && ((m = !0), (f = !1), L()),
                        f && A(e);
                }));
        }
        function P() {
            let e = jQuery(".jewelry-catalog-container .jewelry-filters-select select");
            if (e.length > 0) return e.val();
            let t = jQuery(".jewelry-diamond-list-wrapper");
            return t.length > 0 && t.attr("data-sorting");
        }
        jQuery(".jewelry-catalog-container").on("click ", ".jewelry-diamond-list-wrapper .jewelry-diamond-item-sortable", function (e) {
            e.preventDefault();
            var t,
                n,
                r = jQuery(this),
                i = P().split("_"),
                o = r.find(".jewelry-diamond-item-sorting-arrows"),
                a = i[0],
                s = i[1],
                l = r.data("filter");
            l !== a ? ((n = "asc"), (t = l + "_asc"), jQuery(".jewelry-diamond-item-sortable").removeClass("enabled"), r.addClass("enabled")) : ((n = "asc"), "asc" === s && (n = "desc"), (t = l + "_" + n)),
                "asc" === n ? o.html('<span class="arrow up"></span>') : o.html('<span class="arrow down"></span>'),
                jQuery(".jewelry-diamond-list-wrapper").attr("data-sorting", t),
                jQuery(".jewelry-load-more").attr("data-page", 1),
                (b = !1),
                A(!0);
        });
        function M(e) {
            var t = jQuery('.jewelry-products-list .jewelry-product[href="' + e + '"]'),
                n = t.find("> .jewelry-product-images > img:visible").data("variant-id"),
                r = t.find(".jewelry-product-sku");
            if (r.length > 0) {
                var i = r.find('> span[data-variant-id="' + n + '"]');
                i.length > 0 && "" !== i.text() ? (r.find("> span[data-variant-id]").hide(), i.show(), r.show()) : r.hide();
            }
            var o = t.find(".jewelry-product-barcode");
            if (o.length > 0) {
                var a = o.find('> span[data-variant-id="' + n + '"]');
                a.length > 0 && "" !== a.text() ? (o.find("> span[data-variant-id]").hide(), a.show(), o.show()) : o.hide();
            }
        }
        jQuery(".jewelry-products-list").delegate(".jewelry-product .available-variants-hover > span", "click", function (e) {
            e.preventDefault();
			$("<p>test</p>").appendTo('jewelry-product');
            let t = jQuery(this).parent().parent(),
                n = jQuery(this).data("variant-id");
            t.find(".jewelry-product-images > img").hide(),
                t.find('.jewelry-product-images > img[data-variant-id="' + n + '"]').show(),
                t.find(".jewelry-product-price > span").hide(),
                t.find('.jewelry-product-price > span[data-variant-id="' + n + '"]').show(),
                M(t.attr("href"));
        }),
            jQuery(".jewelry-filters-applied").delegate(".jewelry-current-filters-enabled > li > .jewelry-filter-remove", "click", function (e) {
                e.preventDefault();
                let t = jQuery(this).parent(),
                    r = t.data("handle"),
                    i = t.find("> strong").text();
                jQuery("#jewelry-catalog-filter-form .jewelry-filter");
                if (void 0 !== n[r]) n[r].noUiSlider.set([0, 999999999]);
                else {
                    jQuery('.jewelry-filters .jewelry-filter[data-handle="' + r + '"] .jewelry-option[title="' + i + '"]')
                        .prev()
                        .prop("checked", !1);
                }
                O();
            }),
            jQuery(window).scroll(function () {
                L();
            });
        function L() {
            let e = jQuery(".jewelry-catalog-container .jewelry-load-more");
            if (0 === e.length) return !1;
            jQuery(this).scrollTop() + jQuery(window).height() > e.position().top && D();
        }
        jQuery(".jewelry-catalog-container").delegate(".jewelry-products-list .jewelry-load-more", "click", function (e) {
            e.preventDefault(), D();
        });
        function D() {
            if (!1 === m) return !1;
            let e = jQuery(".jewelry-catalog-container .jewelry-load-more");
            if (!b) {
                let t = e,
                    n = jQuery(".jewelry-ajax-loader"),
                    i = parseInt(t.attr("data-page")) + 1,
                    o = P(),
                    l = JewelryCookies.getJSON("jewelryfilterconfig", { expires: 7, path: r });
                if (
                    (s &&
                        "object" == typeof l &&
                        jQuery.each(l, function (e, t) {
                            let n = jQuery('.jewelry-filter[data-handle="' + e + '"]');
                            "range" !== n.attr("data-type") && n.find("input").length === t.length - 1 && delete l[e];
                        }),
                    y)
                )
                    return (h = !0), !1;
                t.hide(),
                    n.show(),
                    (h = !1),
                    (y = !0),
                    jQuery.get(S, { shop: c, collection_id: p, filters: l, search_term: u, sorting: o, page: i, language: d, ac: a.data("ac"), builder_variant_id: C, force_product_type: a.data("force-product-type") }, function (e) {
                        let r = jQuery(e);
                        (y = !1), t.attr("data-page", i);
                        let o = jQuery(".jewelry-catalog-container .jewelry-products-list-inner");
                        o.length > 0 && (o.append(r[0].innerHTML), t.show(), n.hide(), 0 === r.find(".jewelry-product").length && ((b = !0), t.hide()));
                        let a = jQuery(".jewelry-catalog-container .jewelry-diamond-listing");
                        a.length > 0 && (a.append(r.find(".jewelry-diamond-listing").html()), t.show(), n.hide(), 0 === r.find(".jewelry-diamond-item").length && ((b = !0), t.hide())), f ? A(!0) : L();
                    });
            }
        }
        jQuery(window).resize(function () {
            N();
            var e = jQuery('.jewelry-filter[data-type="range-steps"]');
            e.find(".vertical-lines").remove(), e.find(".jewelry-range-values").removeClass("lines-added"), k();
        });
        function N() {
            let e = jQuery(".jewelry-catalog-container");
            e.addClass("jewelry-initialized");
            let t = e.find(".jewelry-products-list");
            t.width() > 800
                ? t.removeClass("jewelry-mobile jewelry-mobile-medium jewelry-mobile-small")
                : t.width() <= 800 && t.width() > 400
                ? (t.removeClass("jewelry-mobile-small"), t.addClass("jewelry-mobile jewelry-mobile-medium"))
                : (t.removeClass("jewelry-mobile-medium"), t.addClass("jewelry-mobile jewelry-mobile-small"));
            let n = !1;
            e.width() <= 800 && (n = !0),
                n
                    ? (!1 !== j && "destroyed" !== j && (j.destroy(), (j = "destroyed")), e.addClass("jewelry-filters-mobile"))
                    : ("destroyed" === j &&
                          jQuery(".jewelry-sidebar.fixed-filters").length > 0 &&
                          (j = new StickySidebar(".jewelry-catalog-container .jewelry-sidebar.fixed-filters", {
                              topSpacing: 0,
                              bottomSpacing: 20,
                              containerSelector: ".jewelry-catalog-container .jewelry-content",
                              innerWrapperSelector: "#jewelry-catalog-filter-form",
                          })),
                      e.removeClass("jewelry-filters-mobile"));
        }
    }
}
var builderActive = "0";
runJewelryCatalogDefer();
var tries = 0;

