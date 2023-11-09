!function() {
    function e(t, r, n) {
        function a(o, s) {
            if (!r[o]) {
                if (!t[o]) {
                    var c = "function" == typeof require && require;
                    if (!s && c)
                        return c(o, !0);
                    if (i)
                        return i(o, !0);
                    var u = new Error("Cannot find module '" + o + "'");
                    throw u.code = "MODULE_NOT_FOUND",
                    u
                }
                var f = r[o] = {
                    exports: {}
                };
                t[o][0].call(f.exports, function(e) {
                    return a(t[o][1][e] || e)
                }, f, f.exports, e, t, r, n)
            }
            return r[o].exports
        }
        for (var i = "function" == typeof require && require, o = 0; o < n.length; o++)
            a(n[o]);
        return a
    }
    return e
}()({
    1: [function(e, t, r) {
        var n = e("./util")
          , a = e("./common/sendBeacon")
          , i = "aokcdqn3ly@e629dabd48a9933"
          , o = function(e, t) {
            var r;
            {
                if ("error" !== t.t || !(r = e.$a1[0]) || "error" !== r.t || t.msg !== r.msg) {
                    if ("behavior" === t.t) {
                        var a = e.$a1 && e.$a1.length;
                        if (a > 0 && "behavior" === e.$a1[a - 1].t) {
                            var i = t.behavior || [];
                            e.$a1[a - 1].behavior.concat(i)
                        } else
                            e.$a1.push(t)
                    } else
                        e.$a1.unshift(t);
                    return e.$a2(function() {
                        e.$a3 = n.delay(function() {
                            e.$a4()
                        }, e.$a1[0] && "error" === e.$a1[0].t ? 3e3 : -1)
                    }),
                    !0
                }
                r.times++
            }
        }
          , s = function(e) {
            return this.ver = "1.8.31",
            this._conf = n.ext({}, s.dftCon),
            this.$a5 = {},
            this.$a1 = [],
            this.$a6 = [],
            this.sdkFlag = !0,
            this.hash = n.seq(),
            this.$a7(),
            this.setConfig(e),
            this.rip = n.getRandIP(),
            this.record = 999,
            this["EagleEye-TraceID"] = this.getTraceId()["EagleEye-TraceID"],
            this._common = {},
            this
        };
        s.dftCon = {
            sample: 1,
            pvSample: 1,
            tag: "",
            imgUrl: "https://arms-retcode.aliyuncs.com/r.png?",
            region: null,
            ignore: {
                ignoreUrls: [],
                ignoreApis: [],
                ignoreErrors: [/^Script error\.?$/],
                ignoreResErrors: []
            },
            release: undefined,
            environment: "prod"
        },
        s.prototype = {
            constructor: s,
            $a2: function(e) {
                return e()
            },
            $a8: function() {
                var e = this._conf.page;
                return n.$a9(e, [], e + "")
            },
            setPage: function() {},
            setConfig: function(e) {
                e && "object" == typeof e && (n.$aa(e),
                e = this.$ab(e),
                this._conf = n.ext({}, this._conf, e))
            },
            $ab: function(e) {
                var t = e.region
                  , r = e.imgUrl;
                if (t) {
                    var a = n.regionMap[t];
                    return e.imgUrl = a || n.defaultImgUrl,
                    e
                }
                return r && (e.imgUrl = r),
                e
            },
            $ac: function(e) {
                if (this.getConfig("debug"))
                    return !0;
                var t = n.regionMap
                  , r = !1;
                for (var a in t)
                    if (t[a] === e) {
                        r = !0;
                        break
                    }
                return !r && n.warn("[retcode] invalid url: " + e),
                r
            },
            $ad: function() {},
            $ae: function(e) {
                a(e, this.getConfig("imgUrl"))
            },
            $af: function() {},
            $ag: function() {
                return {}
            },
            setCommonInfo: function(e) {
                e && "object" == typeof e && (this._common = n.ext({}, this._common, e))
            },
            $a7: function() {
                this.pageview = n.uu(),
                this.sBegin = Date.now()
            },
            $ah: function() {
                if (this.username)
                    return this.username;
                var e = this._conf
                  , t = e && e.setUsername;
                if ("function" == typeof t)
                    try {
                        var r = t();
                        "string" == typeof r && (r = r.substr(0, 40),
                        this.username = r)
                    } catch (a) {
                        n.warn("[arms] setUsername fail", a)
                    }
                return this.username
            },
            getTraceId: function() {
                var e = this.rip
                  , t = Date.now()
                  , r = n.getSortNum(this.record)
                  , a = e + t + r + n.getRandNum(this._conf.pid);
                return this["EagleEye-TraceID"] = a,
                this.record = r,
                {
                    "EagleEye-TraceID": a
                }
            },
            getUberTraceId: function(e) {
                var t = this.rip
                  , r = Date.now()
                  , a = n.getSortNum(this.record)
                  , i = n.getRandNum(this._conf.pid)
                  , o = t + r + a + n.getNum(2) + i
                  , s = o.substring(0, 16);
                return e = e ? "1" : "0",
                {
                    "uber-trace-id": o + ":" + s + ":0:" + e,
                    traceId: o
                }
            },
            getPageviewId: function() {
                return {
                    "EagleEye-SessionID": this.pageview
                }
            },
            getConfig: function(e) {
                return e ? this._conf[e] : n.ext({}, this._conf)
            },
            $ai: function(e) {
                return 1 === e || ("boolean" == typeof this.$a5[e] ? this.$a5[e] : (this.$a5[e] = n.pick(e),
                this.$a5[e]))
            },
            $a4: function(e) {
                var t;
                clearTimeout(this.$a3),
                this.$a3 = null;
                for (var r = this._conf && "function" == typeof this._conf.sendRequest; t = this.$a1.pop(); )
                    "res" === t.t ? this.$af(t, "res") : "error" === t.t ? this.$af(t, "err") : "api" === t.t ? this.$af(t, "apiSnapshot") : "behavior" === t.t ? this.$af(t, "behavior") : "health" === t.t && !r && window && window.navigator && "function" == typeof window.navigator.sendBeacon ? this.$ae(t) : this.$ad(t);
                return e && this.$aj(),
                this
            },
            $aj: function() {
                var e;
                for (clearTimeout(this.$ak),
                this.$ak = null; e = this.$a6.pop(); )
                    this.$af(e, "err");
                return this
            },
            _lg: function(e, t, r, a) {
                var i = this._conf
                  , s = this.$a8()
                  , c = i.ignore || {}
                  , u = c.ignoreErrors
                  , f = c.ignoreResErrors
                  , l = c.ignoreUrls
                  , p = c.ignoreApis;
                if (this._isRobot)
                    return this;
                if (n.$al(s, l) || n.$al(n.decode(s), l))
                    return this;
                if ("error" === e && (n.$al(t.msg, u) || n.$al(n.decode(t.msg), u)))
                    return this;
                if ("resourceError" === e && (n.$al(t.src, f) || n.$al(n.decode(t.src), f)))
                    return this;
                if ("api" === e && (n.$al(t.api, p) || n.$al(n.decode(t.api), p)))
                    return this;
                if (!this.$ac(i.imgUrl))
                    return this;
                if (!t || i.disabled || !i.pid)
                    return this;
                if (0 === a)
                    return this;
                var h = t.dl;
                return delete t.dl,
                t = n.ext({
                    t: e,
                    times: 1,
                    page: s,
                    tag: i.tag || "",
                    release: i.release || "",
                    environment: i.environment,
                    begin: Date.now(),
                    c1: i.c1,
                    c2: i.c2,
                    c3: i.c3
                }, t, this.$ag(), this._common, {
                    pid: i.pid,
                    _v: this.ver,
                    pv_id: this.pageview,
                    username: this.$ah(),
                    sampling: r || 1,
                    dl: h,
                    z: n.seq()
                }),
                1 === a ? o(this, t) : r && !this.$ai(r) ? this : o(this, t)
            },
            _self: function(e, t, r) {
                var a = this
                  , o = a._conf;
                if ("error" !== e)
                    return a;
                if (!a.$ac(o.imgUrl))
                    return a;
                if (!t || o.disabled || !o.pid)
                    return a;
                if (r && !a.$ai(r))
                    return a;
                t = n.ext({
                    t: e,
                    times: 1,
                    page: n.selfErrPage,
                    tag: o.pid,
                    begin: Date.now()
                }, t, {
                    pid: i,
                    _v: a.ver,
                    sampling: r || 1,
                    z: n.seq()
                });
                var s = a.$a6[0];
                if (s) {
                    s.times++;
                    try {
                        if (s.err && t.err && s.err.msg_raw && t.err.msg_raw) {
                            s.err.msg_raw.split("&").indexOf(t.err.msg_raw) < 0 && s.err.msg_raw.length < 1e3 && (s.err.msg_raw += "&" + t.err.msg_raw)
                        }
                    } catch (c) {}
                } else
                    a.$a6.unshift(t),
                    a.$a2(function() {
                        a.sdkFlag && (a.sdkFlag = !1,
                        a.$ak = n.delay(function() {
                            a.$aj()
                        }, 1e4))
                    })
            },
            custom: function(e, t) {
                if (!e || "object" != typeof e)
                    return this;
                var r = !1
                  , a = {
                    begin: Date.now()
                };
                return n.each(e, function(e, t) {
                    return !(r = t && t.length <= 20) && n.warn("[retcode] invalid key: " + t),
                    a["x-" + t] = e,
                    r
                }),
                r ? this._lg("custom", a, t || 1) : this
            }
        },
        t.exports = s
    }
    , {
        "./common/sendBeacon": 12,
        "./util": 16
    }],
    2: [function(e, t, r) {
        var n = e("../util");
        t.exports = function(e, t) {
            var r = []
              , a = null
              , i = t && t.location && t.location.href
              , o = 0
              , s = undefined
              , c = null
              , u = function(e, t, r) {
                if (null !== e) {
                    var n = e[t];
                    e[t] = r(n)
                }
            }
              , f = function(e) {
                var t, r, n, a, i, o = [];
                if (!e || "string" != typeof e.tagName)
                    return "";
                if (o.push(e.tagName.toLowerCase()),
                "string" == typeof e.id && o.push("#".concat(e.id)),
                "string" == typeof (t = e.className))
                    for (r = t.split(/\s+/),
                    i = 0; i < r.length; i++)
                        o.push(".".concat(r[i]));
                var s = ["type", "name", "title", "alt", "data-arms-attr"];
                for (i = 0; i < s.length; i++)
                    n = s[i],
                    "string" == typeof (a = e.getAttribute(n)) && o.push("[".concat(n, '="').concat(a, '"]'));
                return o.join("")
            }
              , l = function(e, t) {
                return function(r) {
                    if (r && r !== c) {
                        c = r;
                        var n;
                        try {
                            n = r.target
                        } catch (u) {
                            n = "<unknown>"
                        }
                        if (0 !== n.length) {
                            var i = {
                                type: "ui.".concat(e),
                                data: {
                                    message: function(e) {
                                        if (!e || 1 !== e.nodeType)
                                            return "";
                                        for (var t = e || null, r = [], n = 0, a = 0, i = " > ".length, o = ""; t && n++ < 5 && !("html" === (o = f(t)) || n > 1 && a + r.length * i + o.length >= 80); )
                                            r.push(o),
                                            a += o.length,
                                            t = t.parentNode;
                                        return r.reverse().join(" > ")
                                    }(n)
                                },
                                timestamp: Date.now()
                            };
                            "click" === e ? (o && clearTimeout(o),
                            t ? o = setTimeout(function() {
                                a && a.addBehavior(i)
                            }, 0) : a && a.addBehavior(i)) : "keypress" === e && (s || a && a.addBehavior(i),
                            clearTimeout(s),
                            s = setTimeout(function() {
                                s = undefined
                            }, 100))
                        }
                    }
                }
            }
              , p = function() {
                if (function() {
                    var e = t && t.chrome
                      , r = e && e.app && e.app.runtime
                      , n = "history"in t && !!t.history.pushState && !!t.history.replaceState;
                    return !r && n
                }()) {
                    var e = function(e, t) {
                        var r = {
                            type: "navigation",
                            data: {
                                from: e,
                                to: t
                            }
                        };
                        a && a.addBehavior(r),
                        i = t
                    }
                      , r = t.onpopstate;
                    t.onpopstate = function() {
                        for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++)
                            a[o] = arguments[o];
                        var s = t.location.href;
                        if (e(i, s),
                        r)
                            return r.apply(this, a)
                    }
                    ;
                    var n = function(t) {
                        return function() {
                            for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
                                n[a] = arguments[a];
                            var o = n.length > 2 ? n[2] : undefined;
                            return o && e(i, String(o)),
                            t.apply(this, n)
                        }
                    };
                    u(t.history, "pushState", n),
                    u(t.history, "replaceState", n)
                }
            };
            n.ext(e.prototype, {
                addBehavior: function(e) {
                    if (this.getConfig("behavior") && e && "object" == typeof e) {
                        var a = {}
                          , i = e.data || {};
                        if (e.type)
                            a = i;
                        else {
                            if ("string" != typeof i.name || "string" != typeof i.message)
                                return;
                            a.name = i.name.substr(0, 20),
                            a.message = i.message.substr(0, 200)
                        }
                        a.message && (a.message = n.encode(a.message));
                        var o = {
                            type: e.type || "custom",
                            data: a || {},
                            timestamp: e.timestamp || Date.now(),
                            page: e.page || t && t.location && t.location.pathname
                        };
                        return r.push(o),
                        r = r.slice(-100)
                    }
                },
                getBehavior: function() {
                    return r || []
                },
                setBehavior: function(e) {
                    return e && (r = e),
                    r
                },
                reportBehavior: function(e) {
                    var t = this;
                    t.getConfig("behavior") && (t.$am && (clearTimeout(t.$am),
                    t.$am = undefined),
                    t.$am = setTimeout(function() {
                        r && r.length > 0 && (t.behavior(r),
                        r = [],
                        t.$am = undefined,
                        e && "function" == typeof e && e())
                    }, 0))
                },
                $an: function() {
                    if (!this.hasInitBehavior && !a) {
                        try {
                            !function() {
                                if (document && document.referrer && document.location) {
                                    var e = document.referrer
                                      , t = document.location.href;
                                    if ("" !== e) {
                                        var r = {
                                            type: "navigation",
                                            data: {
                                                from: e,
                                                to: t
                                            }
                                        };
                                        i = t,
                                        a && a.addBehavior(r)
                                    }
                                }
                            }(),
                            t && t.document && t.document.addEventListener && (t.document.addEventListener("click", l("click"), !1),
                            t.document.addEventListener("keypress", l("keypress"), !1)),
                            p(),
                            this.getConfig("enableConsole") && function() {
                                if (t && t.console)
                                    for (var e = ["debug", "info", "warn", "log", "error", "assert"], r = 0; r < e.length; r++) {
                                        var n = e[r];
                                        t.console[n] && "function" == typeof t.console[n] && u(t.console, n, function(e) {
                                            var r = n;
                                            return function() {
                                                for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++)
                                                    i[o] = arguments[o];
                                                var s = {
                                                    type: "console",
                                                    data: {
                                                        level: r,
                                                        message: i
                                                    }
                                                };
                                                if (a && a.addBehavior(s),
                                                "error" === r)
                                                    for (var c = 0; c < i.length; c++) {
                                                        var u = i[c];
                                                        u && u.message && u.stack && a && a.errorHandler(new ErrorEvent("error",{
                                                            error: u,
                                                            message: u.message
                                                        }))
                                                    }
                                                e && Function.prototype.apply.call(e, t.console, i)
                                            }
                                        })
                                    }
                            }()
                        } catch (e) {
                            n.warn("[arms] error in initBehavior", e)
                        }
                        a = this,
                        this.hasInitBehavior = !0
                    }
                    return this
                }
            })
        }
    }
    , {
        "../util": 16
    }],
    3: [function(e, t, r) {
        var n = e("../util")
          , a = e("../reporter")
          , i = e("../common/sender")
          , o = e("../common/post")
          , s = n.win
          , c = s.document
          , u = /^(error|api|speed|sum|avg|percent|custom|msg|setPage|setConfig|behavior|performance)$/
          , f = function(e) {
            var t = this;
            return a.call(t, e),
            t._initialPage = e.page && n.$a9(e.page, [], e.page + "") || null,
            t._isRobot = n.isRobot(),
            t._health = {
                errcount: 0,
                apisucc: 0,
                apifail: 0
            },
            t.$ao = function(e, r) {
                "error" === e ? t._health.errcount++ : "api" === e && t._health[r.success ? "apisucc" : "apifail"]++
            }
            ,
            !1 !== e.enableInstanceAutoSend && (t.$ap(),
            t.$aq(),
            t.$ar(1e4),
            t._conf && t._conf.behavior && "function" == typeof t.$an && t.$an()),
            Object.defineProperty && s.addEventListener && Object.defineProperty(t, "pipe", {
                set: t.$as
            }),
            t
        };
        f.prototype = n.$at(a.prototype),
        n.ext(a._root.dftCon, {
            uid: null,
            setUsername: null,
            ignoreUrlPath: null,
            ignoreApiPath: null,
            urlHelper: [{
                rule: /\/([a-z\-_]+)?\d{2,20}/g,
                target: "/$1**"
            }, /\/$/],
            apiHelper: {
                rule: /\/([a-z\-_]+)?\d{2,20}/g,
                target: "/$1**"
            },
            ignoreUrlCase: !0,
            imgUrl: "https://arms-retcode.aliyuncs.com/r.png?",
            disableHook: !1,
            autoSendPv: !0,
            autoSendPerf: !0,
            enableSPA: !1,
            enableLinkTrace: !1,
            linkType: "arms",
            enableApiCors: !1,
            sendResource: !0,
            behavior: !0,
            enableConsole: !1,
            parseHash: function(e) {
                return (e ? n.$av(e.replace(/^#\/?/, "")) : "") || "[index]"
            },
            parseResponse: function(e) {
                if (!e || "object" != typeof e)
                    return {};
                var t = e.code
                  , r = e.msg || e.message || e.subMsg || e.errorMsg || e.ret || e.errorResponse || "";
                return "object" == typeof r && (t = t || r.code,
                r = r.msg || r.message || r.info || r.ret || JSON.stringify(r)),
                {
                    msg: r,
                    code: t,
                    success: !0
                }
            }
        }),
        n.ext(f.prototype, {
            constructor: f,
            _super: a,
            $a2: function(e) {
                var t = this;
                if (t.hasReady)
                    return e();
                "complete" === c.readyState ? (t.hasReady = !0,
                e()) : n.on(s, "load", function() {
                    t.hasReady = !0,
                    e()
                }, !0)
            },
            $a8: function(e) {
                var t = this._conf
                  , r = t.page
                  , a = location
                  , i = a.host + a.pathname;
                return r && !e ? n.$a9(r, [], r + "") : this._initialPage || n.$au(t.ignoreUrlCase ? i.toLowerCase() : i, t.ignoreUrlPath ? t.ignoreUrlPath : t.urlHelper)
            },
            setPage: function(e, t) {
                var r = this
                  , n = r.$aw;
                if (!1 !== t) {
                    if (!e || e === n)
                        return r;
                    r.$aw = e,
                    clearTimeout(r.$ax),
                    r.$ay(1),
                    r.$a7(),
                    r.$ax = setTimeout(function() {
                        r.$az()
                    }, 10)
                } else
                    r.$aw = e;
                return r._conf.page = e,
                r
            },
            setConfig: function(e, t) {
                if (e && "object" == typeof e) {
                    n.$aa(e),
                    e = this.$ab(e);
                    var r = this._conf;
                    if (this._conf = n.ext({}, r, e),
                    !t) {
                        var a = "disableHook";
                        a in e && r[a] !== e[a] && (e[a] ? this.removeHook() : this.addHook()),
                        (a = "enableSPA")in e && r[a] !== e[a] && this.$b0(e[a])
                    }
                }
            },
            $ad: function(e) {
                i(e, this.getConfig("imgUrl"))
            },
            $af: function(e, t) {
                var r = {};
                r[t] = e[t],
                delete e[t];
                var a = "";
                "object" == typeof e && (a = n.serialize(e)),
                o(r, this.getConfig("imgUrl") + a + "&post_res=")
            },
            $as: function(e) {
                var t = this;
                if (!e || !e.length)
                    return t;
                try {
                    if ("Array" === n.T(e[0]))
                        return n.each(e, function(e) {
                            return t.$as(e)
                        });
                    if ("Array" !== n.T(e))
                        return t;
                    var r = e.shift();
                    if (!u.test(r))
                        return t;
                    t[r].apply(t, e)
                } catch (a) {
                    return n.warn("[retcode] error in sendPipe", a),
                    t
                }
            },
            $b1: function() {
                var e = n.ext({}, this._health);
                e.healthy = e.errcount > 0 ? 0 : 1,
                e.begin = Date.now();
                var t = e.begin - this.sBegin;
                e.stay = t,
                this._lg("health", e, 1),
                this._health = {
                    errcount: 0,
                    apisucc: 0,
                    apifail: 0
                }
            },
            createInstance: function(e) {
                e = n.ext({
                    pid: this._conf.pid
                }, e);
                var t = this.__proto__.constructor(e);
                return e.page && t.$az(),
                t
            }
        }),
        e("./behavior")(f, s),
        e("./handler")(f, s, c),
        e("./fmp")(f, s, c),
        e("./hook")(f, s),
        e("./hack")(f, s),
        f._super = a,
        f._root = a._root,
        a.Browser = f,
        t.exports = f
    }
    , {
        "../common/post": 10,
        "../common/sender": 13,
        "../reporter": 15,
        "../util": 16,
        "./behavior": 2,
        "./fmp": 4,
        "./hack": 5,
        "./handler": 6,
        "./hook": 7
    }],
    4: [function(e, t, r) {
        var n = e("../util")
          , a = 500;
        t.exports = function(e, t, r) {
            function i(e, t, r) {
                var n = 0
                  , a = e.tagName;
                if ("SCRIPT" !== a && "STYLE" !== a && "META" !== a && "HEAD" !== a) {
                    var o = e.children ? e.children.length : 0;
                    if (o > 0)
                        for (var c = e.children, u = o - 1; u >= 0; u--)
                            n += i(c[u], t + 1, n > 0);
                    if (n <= 0 && !r) {
                        if (!(e.getBoundingClientRect && e.getBoundingClientRect().top < s))
                            return 0
                    }
                    n += 1 + .5 * t
                }
                return n
            }
            function o(e) {
                for (var t = 1; t < e.length; t++)
                    if (e[t].score < e[t - 1].score)
                        return e.splice(t, 1),
                        o(e);
                return e
            }
            var s = t.innerHeight || 0
              , c = []
              , u = null
              , f = 0;
            n.ext(e.prototype, {
                $ar: function(e) {
                    var a = this;
                    if (!a._conf || !a._conf.useFmp)
                        return null;
                    if (!t.MutationObserver)
                        return n.warn("[retcode] first meaningful paint can not be retrieved"),
                        a.$b2(),
                        null;
                    n.on(t, "beforeunload", function() {
                        a.$b3(0, !0)
                    });
                    var o = t.MutationObserver;
                    return (u = new o(function() {
                        !function(e) {
                            var t = Date.now() - e
                              , n = r.querySelector("body");
                            if (n) {
                                var a = 0;
                                a += i(n, 1, !1),
                                c.push({
                                    score: a,
                                    t: t
                                })
                            } else
                                c.push({
                                    score: 0,
                                    t: t
                                })
                        }(a._startTime)
                    }
                    )).observe(document, {
                        childList: !0,
                        subtree: !0
                    }),
                    f = 1,
                    a.$a2(function() {
                        a.$b3(e)
                    }),
                    u
                },
                $b3: function(e, t) {
                    var r = this;
                    if (u && f)
                        if (r.$b4 && (clearTimeout(r.$b4),
                        r.$b4 = null),
                        t || !function(e, t) {
                            var r = Date.now() - e;
                            return !(r > t || r - (c && c.length && c[c.length - 1].t || 0) > 2 * a)
                        }(r._startTime, e)) {
                            u.disconnect(),
                            f = 0,
                            c = o(c);
                            for (var i = null, s = 1; s < c.length; s++)
                                if (c[s].t >= c[s - 1].t) {
                                    var l = c[s].score - c[s - 1].score;
                                    (!i || i.rate <= l) && (i = {
                                        t: c[s].t,
                                        rate: l
                                    })
                                }
                            i && i.t > 0 && i.t < 36e5 ? r.$b2({
                                fmp: i.t
                            }) : r.$b2()
                        } else
                            r.$b4 = n.delay(function() {
                                r.$b3(e)
                            }, a)
                }
            })
        }
    }
    , {
        "../util": 16
    }],
    5: [function(e, t, r) {
        t.exports = function(t, r) {
            var n = e("../util")
              , a = r.history || {}
              , i = r.document
              , o = function(e, t) {
                var n;
                r.CustomEvent ? n = new CustomEvent(e,{
                    detail: t
                }) : ((n = i.createEvent("HTMLEvents")).initEvent(e, !1, !0),
                n.detail = t),
                r.dispatchEvent(n)
            }
              , s = function(e) {
                var t = a[e];
                "function" == typeof t && (a[e] = function(r, i, s) {
                    var c = 1 === arguments.length ? [arguments[0]] : Array.apply(null, arguments)
                      , u = location.href
                      , f = t.apply(a, c);
                    if (!s || "string" != typeof s)
                        return f;
                    if (s === u)
                        return f;
                    try {
                        var l = u.split("#")
                          , p = s.split("#")
                          , h = n.$av(l[0])
                          , g = n.$av(p[0])
                          , d = l[1] && l[1].replace(/^\/?(.*)/, "$1")
                          , v = p[1] && p[1].replace(/^\/?(.*)/, "$1");
                        h !== g ? o("historystatechange", g) : d !== v && o("historystatechange", v)
                    } catch (m) {
                        n.warn("[retcode] error in " + e + ": " + m)
                    }
                    return f
                }
                ,
                a[e].toString = n.$b5(e))
            };
            n.ext(t.prototype, {
                $b6: function() {
                    return this.$b7 ? this : (s("pushState"),
                    s("replaceState"),
                    this.$b7 = !0,
                    this)
                }
            })
        }
    }
    , {
        "../util": 16
    }],
    6: [function(e, t, r) {
        t.exports = function(t, r, n) {
            var a = e("../util")
              , i = e("../common/res")
              , o = e("../common/perf")
              , s = null
              , c = n.documentElement
              , u = r.innerWidth || c.clientWidth || n.body.clientWidth
              , f = r.innerHeight || c.clientHeight || n.body.clientHeight
              , l = r.navigator.connection
              , p = {
                sr: screen.width + "x" + screen.height,
                vp: u + "x" + f,
                ct: l ? l.effectiveType || l.type : ""
            }
              , h = {}
              , g = function(e, t, r, i, o) {
                if (t === undefined) {
                    var s, c;
                    if (!h[e]) {
                        s = new RegExp(e + "=([^;]+)");
                        try {
                            c = s.exec(n.cookie)
                        } catch (f) {
                            return a.warn("[retcode] can not get cookie:", f),
                            null
                        }
                        c && (h[e] = c[1])
                    }
                    return h[e]
                }
                var u = e + "=" + t;
                i && (u += "; domain=" + i),
                u += "; path=" + (o || "/"),
                r && (u += "; max-age=" + r);
                try {
                    return n.cookie = u,
                    !!n.cookie
                } catch (f) {
                    return a.warn("[retcode] can not set cookie: ", f),
                    !1
                }
            }
              , d = function(e) {
                var t = e._conf.uid || g("_nk_") || g("_bl_uid");
                if (!t) {
                    t = a.uu();
                    if (!g("_bl_uid", t, 15552e3))
                        return null
                }
                return t
            };
            return a.ext(t.prototype, {
                activeErrHandler: function(e) {
                    return s && !e ? this : (s = this,
                    this)
                },
                errorHandler: function(e) {
                    if (!e)
                        return this;
                    var t = e.type;
                    if ("error" === t) {
                        var r = e.target || e.srcElement;
                        !(!r || !r.tagName || e.message || e.filename || e.lineno || e.colno) ? this.$b8(e) : this.error(e.error || {
                            message: e.message
                        }, e)
                    } else
                        "unhandledrejection" === t && a.T(e.reason, "Error") && a.$b9(e.reason) && this.error(e.reason);
                    try {
                        this.getConfig("behavior") && this.reportBehavior && this.reportBehavior()
                    } catch (e) {}
                    return this
                },
                $b8: function(e) {
                    var t = this
                      , r = e.target || e.srcElement;
                    try {
                        var n = t.$ba(r)
                          , i = "string" == typeof r.tagName ? r.tagName.toLowerCase() : ""
                          , o = t.$bb(r, 5);
                        return t._lg("resourceError", {
                            src: n && n.substring(0, 1e3),
                            node_name: i,
                            xpath: o
                        }),
                        t
                    } catch (s) {
                        return a.warn("[ARMS] $b8 error :", s),
                        t
                    }
                },
                $ba: function(e) {
                    var t = e.src || e.href;
                    try {
                        if (!t) {
                            var r = "object" === ("string" == typeof e.tagName ? e.tagName.toLowerCase() : "")
                              , n = e.getAttribute("classid") && "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" === e.getAttribute("classid").toLowerCase() || "application/x-shockwave-flash" === e.getAttribute("type");
                            r && n && (t = e.getAttribute("data") || e.getAttribute("codebase")),
                            t || (t = e.outerHTML || e.innerHTML)
                        }
                    } catch (a) {
                        t = ""
                    }
                    return t
                },
                $bb: function(e, t) {
                    var r = e.id ? "#" + e.id : ""
                      , n = "string" == typeof e.className ? "." + e.className.split(" ").join(".") : ""
                      , a = ("string" == typeof e.tagName ? e.tagName.toLowerCase() : "") + r + n;
                    return e.parentNode && e.parentNode.tagName && t - 1 != 0 ? this.$bb(e.parentNode, t - 1) + " > " + a : a
                },
                $b2: function(e) {
                    var t = this;
                    t.$a2(function() {
                        var r = o();
                        r && r.load && r.load > 0 && (r.page = t.$a8(!0),
                        e && (r = a.ext(r, e)),
                        r.autoSend = !0,
                        t.performance(r))
                    })
                },
                $bc: function(e) {
                    var t = this;
                    t.$a2(function() {
                        var r = i();
                        r && r.load && r.load > 0 && (r.load && r.load <= 2e3 || r.load && r.load <= 8e3 && Math.random() > .05 || (r.page = t.$a8(!0),
                        r.dl = location.href,
                        e && (r = a.ext(r, e)),
                        t._lg("res", r, t.getConfig("sample"))))
                    })
                },
                $az: function() {
                    var e = this;
                    e.$a2(function() {
                        var t = function(e) {
                            var t = d(e)
                              , a = r.devicePixelRatio || 1;
                            return {
                                uid: t,
                                dt: n.title,
                                dl: location.href,
                                dr: n.referrer,
                                dpr: a.toFixed(2),
                                de: (n.characterSet || n.defaultCharset || "").toLowerCase(),
                                ul: c.lang,
                                begin: Date.now()
                            }
                        }(e);
                        t && t.uid && e._lg("pv", t, e.getConfig("pvSample"))
                    })
                },
                $ag: function() {
                    return p.uid = d(this),
                    p.sid = function(e) {
                        if (e.session)
                            return e.session;
                        var t;
                        try {
                            if ("object" == typeof window && "object" == typeof sessionStorage && "function" == typeof sessionStorage.getItem)
                                return "string" == typeof (t = sessionStorage.getItem("_bl_sid")) ? (e.session = t,
                                t) : (t = a.uu(),
                                e.session = t,
                                "function" == typeof sessionStorage.setItem && sessionStorage.setItem("_bl_sid", t),
                                t)
                        } catch (r) {
                            a.warn("[ARMS] getSid error :", r)
                        }
                        return e.session = t = a.uu(),
                        t
                    }(this),
                    p
                },
                $ay: function(e) {
                    var t = Date.now();
                    if (t - this._lastUnload < 200)
                        return this;
                    this._lastUnload = t,
                    this.$b1(e),
                    this.$bd && (this._lg("speed", this.$bd),
                    this.$bd = null,
                    clearTimeout(this.$be)),
                    this.$a4(!0)
                },
                $b0: function(e) {
                    var t = this;
                    if (!e ^ t.$bf)
                        return t;
                    e ? (t.$b6(),
                    t.$bf = function(e) {
                        var r = t._conf.parseHash(location.hash);
                        r && t.setPage(r, !1 !== e)
                    }
                    ,
                    t.$bg = function(e) {
                        var r = t._conf.parseHash(e.detail);
                        r && t.setPage(r)
                    }
                    ,
                    a.on(r, "hashchange", t.$bf),
                    a.on(r, "historystatechange", t.$bg),
                    t.$bf(!1)) : (a.off(r, "hashchange", t.$bf),
                    a.off(r, "historystatechange", t.$bg),
                    t.$bf = null,
                    t.$bg = null)
                },
                $ap: function() {
                    var e = this;
                    if (e.$bh)
                        return e;
                    var t = e._conf;
                    return a.on(r, "beforeunload", function() {
                        e.$ay(0)
                    }),
                    e.$b0(t.enableSPA),
                    e.activeErrHandler(!1),
                    e.$bh = !0,
                    e
                }
            }),
            a.on(r, "error", function(e) {
                s && s.errorHandler(e)
            }, !1, !0).on(r, "unhandledrejection", function(e) {
                s && s.errorHandler(e)
            }),
            t
        }
    }
    , {
        "../common/perf": 9,
        "../common/res": 11,
        "../util": 16
    }],
    7: [function(e, t, r) {
        t.exports = function(t, r) {
            var n = e("../util")
              , a = null
              , i = n.getCurDomain()
              , o = function(e, t, r, a, o, s, c, u, f, l, p, h, g) {
                var d = n.J(o) || null
                  , v = n.$a9(t, [d, a], null);
                if (!v)
                    return !1;
                var m = v.code || s
                  , y = !("success"in v) || v.success;
                e.api(r, y, c, m, v.msg, u, f, l, p, i, h, g)
            }
              , s = "fetch"
              , c = "__oFetch_"
              , u = "__oXMLHttpRequest_"
              , f = "XMLHttpRequest";
            return n.ext(t.prototype, {
                removeHook: function(e, t) {
                    return a && (t || this === a) ? (r[c] && (r[s] = r[c],
                    delete r[c]),
                    r[u] && (r[f] = r[u],
                    delete r[u]),
                    a = null,
                    this) : this
                },
                addHook: function(e) {
                    return !e && a ? this : (a || (function() {
                        if ("function" == typeof r[s]) {
                            var e = r[s];
                            r[c] = e,
                            r[s] = function(t, s) {
                                var c = 1 === arguments.length ? [arguments[0]] : Array.apply(null, arguments)
                                  , u = a;
                                if (!u || !u.api)
                                    return e.apply(r, c);
                                if (s && ("HEAD" === s.method || "no-cors" === s.mode))
                                    return e.apply(r, c);
                                var f = Date.now()
                                  , l = u._conf
                                  , p = (t && "string" != typeof t ? t.url : t) || ""
                                  , h = p;
                                p = n.$av(p);
                                var g = (l.ignore || {}).ignoreApis;
                                if (!n.$bi(p, !0) || n.$al(p, g))
                                    return e.apply(r, c);
                                p = n.$au(p, l.ignoreApiPath ? l.ignoreApiPath : l.apiHelper);
                                var d = l.enableLinkTrace
                                  , v = ""
                                  , m = ""
                                  , y = u.getConfig("pid")
                                  , b = null
                                  , $ = u.getConfig("sample")
                                  , w = u.getConfig("linkType")
                                  , _ = 1;
                                if ($ && !u.$ai($) && (_ = 0),
                                d) {
                                    var E = "";
                                    try {
                                        E = location.origin ? location.origin : location.protocol + "//" + location.hostname + (location.port ? ":" + location.port : "")
                                    } catch (j) {
                                        E = ""
                                    }
                                    var S = n.checkSameOrigin(h, E);
                                    if (u.getConfig("enableApiCors") || S) {
                                        if (t && "string" != typeof t)
                                            try {
                                                if (c[0].headers && "function" == typeof c[0].headers.get && "function" == typeof c[0].headers.append)
                                                    switch (w) {
                                                    case "tracing":
                                                        var T = c[0].headers.get("uber-trace-id");
                                                        T ? v = T.split(":")[0] : (T = u.getUberTraceId(_),
                                                        c[0].headers.append("uber-trace-id", T["uber-trace-id"]),
                                                        v = T.traceId),
                                                        m = u.pageview;
                                                        break;
                                                    default:
                                                        var x = c[0].headers.get("EagleEye-TraceID")
                                                          , I = c[0].headers.get("EagleEye-SessionID")
                                                          , k = c[0].headers.get("EagleEye-pAppName");
                                                        x ? v = x : (v = u.getTraceId()["EagleEye-TraceID"],
                                                        c[0].headers.append("EagleEye-TraceID", v)),
                                                        I ? m = I : (m = u.getPageviewId()["EagleEye-SessionID"],
                                                        c[0].headers.append("EagleEye-SessionID", m)),
                                                        k || c[0].headers.append("EagleEye-pAppName", y)
                                                    }
                                            } catch (D) {
                                                n.warn("[retcode] fetch failed to set header, exception is :\n" + D)
                                            }
                                        if (s)
                                            switch (s.headers = s.headers ? s.headers : {},
                                            w) {
                                            case "tracing":
                                                if (s.headers["uber-trace-id"])
                                                    v = s.headers["uber-trace-id"].split(":")[0];
                                                else {
                                                    var C = u.getUberTraceId(_);
                                                    s.headers["uber-trace-id"] = C["uber-trace-id"],
                                                    v = C.traceId
                                                }
                                                m = u.getPageviewId()["EagleEye-SessionID"];
                                                break;
                                            default:
                                                s.headers["EagleEye-TraceID"] ? v = s.headers["EagleEye-TraceID"] : (v = u.getTraceId()["EagleEye-TraceID"],
                                                s.headers["EagleEye-TraceID"] = v),
                                                s.headers["EagleEye-SessionID"] ? m = s.headers["EagleEye-SessionID"] : (m = u.getPageviewId()["EagleEye-SessionID"],
                                                s.headers["EagleEye-SessionID"] = m),
                                                s.headers["EagleEye-pAppName"] || (s.headers["EagleEye-pAppName"] = y)
                                            }
                                    }
                                }
                                return e.apply(r, c).then(function(e) {
                                    if (!u || !u.api)
                                        return e;
                                    try {
                                        if (!e || "function" != typeof e.clone)
                                            return e;
                                        var t = e.clone()
                                          , r = t.headers;
                                        if (r && "function" == typeof r.get) {
                                            var a = r.get("content-type");
                                            if (a && !/(text)|(json)/.test(a))
                                                return e;
                                            if (!v) {
                                                var s = n.parseFetchHeaders(r);
                                                "object" == typeof s && s["eagleeye-traceid"] && (v = s["eagleeye-traceid"],
                                                b = "response")
                                            }
                                        }
                                        var g = Date.now() - f;
                                        return t.text().then(function(e) {
                                            var a = n.getFetchSnapshot(c, e, r);
                                            t.ok ? o(u, l.parseResponse, p, h, e, t.status || 200, g, f, v, m, a, b, _) : u.api(p, !1, g, t.status || 404, t.statusText, f, v, m, a, i, b, _)
                                        }),
                                        e
                                    } catch (j) {
                                        return n.warn("[ARMS] fetch response error :", j),
                                        e
                                    }
                                })["catch"](function(e) {
                                    if (!u || !u.api)
                                        throw e;
                                    var t = Date.now() - f;
                                    throw u.api(p, !1, t, e.name || "Error", e.message, f, v, m, {}, i),
                                    e
                                })
                            }
                            ,
                            r[s].toString = n.$b5(s)
                        }
                    }(),
                    function() {
                        if ("function" == typeof r[f]) {
                            var e, t = r[f];
                            r[u] = t;
                            var s = function(r) {
                                var s = new t(r)
                                  , c = a;
                                if (!c || !c.api || !s.addEventListener)
                                    return s;
                                var u, f, l, p = s.send, h = s.open, g = s.setRequestHeader, d = c._conf, v = (d.ignore || {}).ignoreApis, m = c.getConfig("enableLinkTrace"), y = "", b = "", $ = "", w = null, _ = c.getConfig("sample"), E = c.getConfig("linkType"), S = 1;
                                return _ && !c.$ai(_) && (S = 0),
                                s.open = function(t, r) {
                                    e = t;
                                    var a = 1 === arguments.length ? [arguments[0]] : Array.apply(null, arguments);
                                    h.apply(s, a),
                                    l = r || "",
                                    f = n.$av(l);
                                    var i = !n.$bi(f, !0) || n.$al(f, v);
                                    if (f = f ? n.$au(f, d.ignoreApiPath ? d.ignoreApiPath : d.apiHelper) : "",
                                    !i && m) {
                                        var o = "";
                                        try {
                                            o = location.origin ? location.origin : location.protocol + "//" + location.hostname + (location.port ? ":" + location.port : "")
                                        } catch (w) {
                                            o = ""
                                        }
                                        var u = n.checkSameOrigin(l, o);
                                        if ((c.getConfig("enableApiCors") || u) && g && "function" == typeof g)
                                            switch (E) {
                                            case "tracing":
                                                var p = c.getUberTraceId(S);
                                                g.apply(s, ["uber-trace-id", p["uber-trace-id"]]),
                                                y = p.traceId,
                                                b = c.getPageviewId()["EagleEye-SessionID"];
                                                break;
                                            default:
                                                y = c.getTraceId()["EagleEye-TraceID"],
                                                g.apply(s, ["EagleEye-TraceID", y]),
                                                b = c.getPageviewId()["EagleEye-SessionID"],
                                                g.apply(s, ["EagleEye-SessionID", b]),
                                                $ = c.getConfig("pid"),
                                                g.apply(s, ["EagleEye-pAppName", $])
                                            }
                                    }
                                }
                                ,
                                s.send = function() {
                                    u = Date.now();
                                    var e = 1 === arguments.length ? [arguments[0]] : Array.apply(null, arguments);
                                    p.apply(s, e)
                                }
                                ,
                                n.on(s, "readystatechange", function() {
                                    if (f && 4 === s.readyState) {
                                        var t = Date.now() - u
                                          , r = n.getXhrSnapshot(l, e, s);
                                        if (!y) {
                                            var a = n.parseXhrHeaders("function" == typeof s.getAllResponseHeaders && s.getAllResponseHeaders() || "");
                                            "object" == typeof a && a["eagleeye-traceid"] && (y = a["eagleeye-traceid"],
                                            w = "response")
                                        }
                                        if (s.status >= 200 && s.status <= 299) {
                                            var p = s.status || 200;
                                            if ("function" == typeof s.getResponseHeader) {
                                                var h = s.getResponseHeader("Content-Type");
                                                if (h && !/(text)|(json)/.test(h))
                                                    return
                                            }
                                            s.responseType && "text" !== s.responseType ? c.api(f, !0, t, p, "", u, y, b, {}, i, w, S) : o(c, d.parseResponse, f, l, s.responseText, p, t, u, y, b, r, w, S)
                                        } else
                                            c.api(f, !1, t, s.status || "FAILED", s.statusText, u, y, b, r, i, w, S)
                                    }
                                }),
                                s
                            };
                            s.prototype = t.prototype,
                            r[f] = s,
                            r[f].toString = n.$b5(f)
                        }
                    }()),
                    a = this,
                    this)
                },
                $aq: function() {
                    return this.$bj ? this : (this.getConfig("disableHook") || this.addHook(),
                    this.$bj = !0,
                    this)
                }
            }),
            t
        }
    }
    , {
        "../util": 16
    }],
    8: [function(e, t, r) {
        r.TIMING_KEYS = ["", "fetchStart", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "requestStart", "responseStart", "responseEnd", "", "domInteractive", "", "domContentLoadedEventEnd", "", "loadEventStart", "", "msFirstPaint", "secureConnectionStart"]
    }
    , {}],
    9: [function(e, t, r) {
        var n = e("../util")
          , a = e("./constants").TIMING_KEYS;
        t.exports = function() {
            var e = n.win || {}
              , t = e.performance;
            if (!t || "object" != typeof t)
                return null;
            var r = {}
              , i = t.timing || {}
              , o = Date.now()
              , s = 1;
            if ("function" == typeof e.PerformanceNavigationTiming) {
                var c = t.getEntriesByType("navigation")[0];
                c && (i = c,
                s = 2)
            }
            n.each({
                dns: [3, 2],
                tcp: [5, 4],
                ssl: [5, 17],
                ttfb: [7, 6],
                trans: [8, 7],
                dom: [10, 8],
                res: [14, 12],
                firstbyte: [7, 2],
                fpt: [8, 1],
                tti: [10, 1],
                ready: [12, 1],
                load: [14, 1]
            }, function(e, t) {
                var n = i[a[e[1]]]
                  , o = i[a[e[0]]];
                if (2 === s || n > 0 && o > 0) {
                    var c = Math.round(o - n);
                    c >= 0 && c < 6e5 && (r[t] = c)
                }
            });
            var u = e.navigator.connection
              , f = t.navigation || {};
            r.ct = u ? u.effectiveType || u.type : "";
            var l = u ? u.downlink || u.downlinkMax || u.bandwidth || null : null;
            if ((l = l > 999 ? 999 : l) && (r.bandwidth = l),
            r.navtype = 1 === f.type ? "Reload" : "Other",
            1 === s && i[a[16]] > 0 && i[a[1]] > 0) {
                var p = i[a[16]] - i[a[1]];
                p >= 0 && p < 36e5 && (r.fpt = p)
            }
            return 1 === s && i[a[1]] > 0 ? r.begin = i[a[1]] : 2 === s && r.load > 0 ? r.begin = o - r.load : r.begin = o,
            r
        }
    }
    , {
        "../util": 16,
        "./constants": 8
    }],
    10: [function(e, t, r) {
        var n = e("../util")
          , a = "object" == typeof window ? window : {}
          , i = a.__oXMLHttpRequest_ || a.XMLHttpRequest;
        i = "function" == typeof i ? i : undefined,
        t.exports = function(e, t) {
            try {
                var r = new i;
                r.open("POST", t, !0),
                r.setRequestHeader("Content-Type", "text/plain"),
                r.send(JSON.stringify(e))
            } catch (a) {
                n.warn("[retcode] Failed to log, exception is :\n" + a)
            }
        }
    }
    , {
        "../util": 16
    }],
    11: [function(e, t, r) {
        var n = e("../util")
          , a = e("./constants").TIMING_KEYS;
        t.exports = function() {
            var e = n.win || {}
              , t = e.performance;
            if (!t || "object" != typeof t || "function" != typeof t.getEntriesByType)
                return null;
            var r = {}
              , i = t.timing || {}
              , o = t.getEntriesByType("resource") || [];
            if (r.begin = i[a[1]] || Date.now(),
            "function" == typeof e.PerformanceNavigationTiming) {
                var s = t.getEntriesByType("navigation")[0];
                s && (i = s)
            }
            return n.each({
                dom: [10, 8],
                load: [14, 1]
            }, function(e, t) {
                var n = i[a[e[1]]]
                  , o = i[a[e[0]]];
                if (n > 0 && o > 0) {
                    var s = Math.round(o - n);
                    s >= 0 && s < 6e5 && (r[t] = s)
                }
            }),
            r.res = JSON.stringify(o),
            r
        }
    }
    , {
        "../util": 16,
        "./constants": 8
    }],
    12: [function(e, t, r) {
        var n = e("../util");
        t.exports = function(e, t) {
            "object" == typeof e && (e = n.serialize(e));
            var r = t + e;
            window && window.navigator && "function" == typeof window.navigator.sendBeacon ? window.navigator.sendBeacon(r, "&post_res=") : n.warn("[arms] navigator.sendBeacon not surported")
        }
    }
    , {
        "../util": 16
    }],
    13: [function(e, t, r) {
        var n = e("../util")
          , a = "object" == typeof window ? window : {}
          , i = a.__oFetch_ || a.fetch;
        i = "function" == typeof i ? i : undefined,
        t.exports = function(e, t) {
            var r = -1;
            "object" == typeof e && (r = e.z,
            e = n.serialize(e));
            var o = t + e;
            if (i)
                return i(o, {
                    method: "HEAD",
                    mode: "no-cors"
                })["catch"](n.noop);
            if (a.document && a.document.createElement) {
                var s = "__request_hold_" + r
                  , c = a[s] = new Image;
                c.onload = c.onerror = function() {
                    a[s] = undefined
                }
                ,
                c.src = o,
                c = null
            }
        }
    }
    , {
        "../util": 16
    }],
    14: [function(e, t, r) {
        "use strict";
        function n(e, t) {
            var r = a[o] = new i(e);
            r.$as(t);
            var n = r._conf;
            return !1 !== n.autoSendPv && r.$az(),
            n && n.useFmp || r.$b2(),
            n && n.sendResource && r.$bc(),
            a[s] = !0,
            r
        }
        var a = window
          , i = a.BrowserLogger = e("./biz.browser/clazz")
          , o = e("./util").key
          , s = "__hasInitBlSdk";
        i.singleton = function(e, t) {
            return a[s] ? a[o] : n(e, t)
        }
        ,
        i.createExtraInstance = function(e) {
            e && "object" == typeof e && !0 !== e.enableInstanceAutoSend && (e.enableInstanceAutoSend = !1);
            var t = new i(e)
              , r = t._conf;
            return r.enableInstanceAutoSend && (!1 !== r.autoSendPv && t.$az(),
            r && r.useFmp || t.$b2(),
            r && r.sendResource && t.$bc()),
            t
        }
        ;
        "object" == typeof window && !!window.navigator && a[o] && (i.bl = function() {
            if (a[s])
                return a[o];
            var e = {}
              , t = [];
            return o in a && (e = a[o].config || {},
            t = a[o].pipe || []),
            n(e, t)
        }(a.__hasInitBlSdk)),
        t.exports = i
    }
    , {
        "./biz.browser/clazz": 3,
        "./util": 16
    }],
    15: [function(e, t, r) {
        var n = e("./util")
          , a = e("./base")
          , i = ["api", "success", "time", "code", "msg", "trace", "traceId", "begin", "pv_id", "sid", "seq", "domain", "flag"]
          , o = function(e) {
            var t = (e.key || "default").split("::");
            return t.length > 1 ? n.ext(e, {
                group: t[0],
                key: t[1]
            }) : n.ext(e, {
                group: "default_group",
                key: t[0]
            })
        }
          , s = function(e) {
            a.call(this, e);
            var t;
            try {
                t = "object" == typeof performance ? performance.timing.fetchStart : Date.now()
            } catch (r) {
                t = Date.now()
            }
            return this._startTime = t,
            this
        };
        s.prototype = n.$at(a.prototype),
        n.ext(a.dftCon, {
            startTime: null
        }),
        n.ext(s.prototype, {
            constructor: s,
            _super: a,
            sum: function(e, t, r) {
                try {
                    var a = n.$bk(e, t, 1);
                    return this._lg("sum", o(a), r)
                } catch (i) {
                    n.warn("[retcode] can not get parseStatData: " + i)
                }
            },
            avg: function(e, t, r) {
                try {
                    var a = n.$bk(e, t, 0);
                    return this._lg("avg", o(a), r)
                } catch (i) {
                    n.warn("[retcode] can not get parseStatData: " + i)
                }
            },
            percent: function(e, t, r, a) {
                try {
                    return this._lg("percent", o({
                        key: e,
                        subkey: t,
                        val: r || 0,
                        begin: Date.now()
                    }), a)
                } catch (i) {
                    n.warn("[retcode] can not get parseStatData: " + i)
                }
            },
            msg: function(e, t) {
                if (e && !(e.length > 180))
                    return this.custom({
                        msg: e
                    }, t)
            },
            error: function(e, t) {
                if (!e)
                    return n.warn("[retcode] invalid param e: " + e),
                    this;
                1 === arguments.length ? ("string" == typeof e && (e = {
                    message: e
                },
                t = {}),
                "object" == typeof e && (t = e = e.error || e)) : ("string" == typeof e && (e = {
                    message: e
                }),
                "object" != typeof t && (t = {}));
                var r = e.name || "CustomError"
                  , a = e.message || ""
                  , i = e.stack || "";
                t = t || {};
                var o = "object" == typeof location && "string" == typeof location.href && location.href.substring(0, 500) || "";
                if (n.$bl(a, t.filename)) {
                    var s = /^Script error\.?$/
                      , c = e.msg || e.message;
                    if (n.$al(c, s) || n.$al(n.decode(c), s))
                        return this;
                    var u = {
                        msg: n.selfErrKey,
                        err: {
                            msg_raw: n.encode(e.msg || e.message)
                        }
                    };
                    return this._self("error", u, 1)
                }
                for (var f = {
                    begin: Date.now(),
                    cate: r,
                    msg: a && a.substring(0, 1e3),
                    stack: i && i.substring(0, 1e3),
                    file: n.$bm(t.filename || ""),
                    line: t.lineno || "",
                    col: t.colno || "",
                    err: {
                        msg_raw: n.encode(a),
                        stack_raw: n.encode(i)
                    },
                    dl: o
                }, l = ["tag", "c1", "c2", "c3"], p = 0; p < l.length; p++) {
                    var h = l[p];
                    t[h] && (f[h] = t[h])
                }
                var g = (this.getConfig("ignore") || {}).ignoreErrors;
                return n.$al(f.msg, g) || n.$al(n.decode(f.msg), g) ? this : (this.$ao && this.$ao("error", f),
                this._lg("error", f, 1))
            },
            behavior: function(e) {
                if (e) {
                    var t = "object" == typeof e && e.behavior ? e : {
                        behavior: e
                    };
                    return this.$ao && this.$ao("behavior", t),
                    this._lg("behavior", t, 1)
                }
            },
            api: function(e, t, r, a, o, s, c, u, f, l, p, h) {
                if (!e)
                    return n.warn("[retcode] api is null"),
                    this;
                if (e = "string" == typeof e ? {
                    api: e,
                    success: t,
                    time: r,
                    code: a,
                    msg: o,
                    begin: s,
                    traceId: c,
                    pv_id: u,
                    apiSnapshot: f,
                    domain: l,
                    flag: h
                } : n.sub(e, i),
                !n.$bi(e.api, !0))
                    return this;
                e.code = e.code || "";
                var g = e.msg || "";
                if (g = "string" == typeof g ? g.substring(0, 1e3) : g,
                e.msg = g,
                e.success = e.success ? 1 : 0,
                e.time = +e.time,
                e.begin = e.begin,
                e.traceId = e.traceId || "",
                e.pv_id = e.pv_id || "",
                e.domain = e.domain || "",
                e.flag = e.flag,
                e.dl = "object" == typeof location && "string" == typeof location.href && location.href.substring(0, 500) || "",
                e.success ? e.apiSnapshot && delete e.apiSnapshot : e.apiSnapshot = f,
                p && (e.traceOrigin = p),
                !e.api || isNaN(e.time))
                    return n.warn("[retcode] invalid time or api"),
                    this;
                var d = (this.getConfig("ignore") || {}).ignoreApis;
                return n.$al(e.api, d) || n.$al(n.decode(e.api), d) ? this : (this.$ao && this.$ao("api", e),
                this._lg("api", e, e.success && this.getConfig("sample"), e.flag))
            },
            speed: function(e, t, r) {
                var a = this
                  , i = this.getConfig("startTime") || this._startTime;
                return /^s(\d|1[0])$/.test(e) ? (t = "number" != typeof t ? Date.now() - i : t >= i ? t - i : t,
                a.$bd = a.$bd || {},
                a.$bd[e] = t,
                a.$bd.begin = i,
                clearTimeout(a.$be),
                a.$be = setTimeout(function() {
                    r || (a.$bd.page = a.$a8(!0)),
                    a._lg("speed", a.$bd),
                    a.$bd = null
                }, 5e3),
                a) : (n.warn("[retcode] invalid point: " + e),
                a)
            },
            performance: function(e) {
                if (e && "object" == typeof e && !this.$bn) {
                    var t = {}
                      , r = {}
                      , a = this.getConfig("autoSendPerf");
                    if (e.autoSend && a)
                        return r = n.ext(this.$bo || {}, e),
                        this.$bn = !0,
                        this._lg("perf", r, this.getConfig("sample"));
                    if (e.autoSend && !a)
                        return delete e.autoSend,
                        this.$bo ? (r = n.ext(this.$bo || {}, e),
                        this.$bn = !0,
                        this._lg("perf", r, this.getConfig("sample"))) : void (this.$bo = e);
                    for (var i in e)
                        (/^t([1-9]|1[0])$/.test(i) || "ctti" === i || "cfpt" === i) && (t[i] = e[i]);
                    if (!0 === e.autoSend || !a && (a || this.$bo))
                        return !0 !== e.autoSend && !1 === a && this.$bo ? (t = n.ext(this.$bo || {}, t),
                        this.$bn = !0,
                        this._lg("perf", t, this.getConfig("sample"))) : void 0;
                    this.$bo = n.ext(this.$bo || {}, t)
                }
            },
            resource: function(e, t) {
                if (!e || !n.isPlainObject(e))
                    return n.warn("[arms] invalid param data: " + e),
                    this;
                var r = Object.keys(e)
                  , a = ["begin", "dom", "load", "res", "dl"]
                  , i = !1;
                for (var o in a) {
                    if (r.indexOf(a[o]) < 0) {
                        i = !0;
                        break
                    }
                }
                if (i)
                    return n.warn("[arms] lack param data: " + e),
                    this;
                var s = {
                    begin: e.begin || Date.now(),
                    dom: e.dom || "",
                    load: e.load || "",
                    res: n.isArray(e.res) ? JSON.stringify(e.res) : JSON.stringify([]),
                    dl: e.dl || ""
                };
                return this._lg("res", s, t)
            },
            event: function(e, t) {
                if ("object" == typeof e && e && e.key) {
                    var r = {}
                      , n = ["key", "success", "time", "c1", "c2", "c3"];
                    for (var a in e)
                        n.indexOf(a) > -1 && (r[a] = e[a]);
                    r.success = !1 === e.success ? 0 : 1,
                    this._lg("event", r, t)
                }
            }
        }),
        s._super = a,
        s._root = a,
        a.Reporter = s,
        t.exports = s
    }
    , {
        "./base": 1,
        "./util": 16
    }],
    16: [function(e, t, r) {
        Date.now = Date.now || function() {
            return (new Date).getTime()
        }
        ;
        var n = Date.now()
          , a = function() {}
          , i = {
            noop: a,
            warn: function() {
                var e = "object" == typeof console ? console.warn : a;
                try {
                    var t = {
                        warn: e
                    };
                    t.warn.call(t)
                } catch (r) {
                    return a
                }
                return e
            }(),
            key: "__bl",
            selfErrKey: "ARMS_SDK_ERROR",
            selfErrPage: "ARMSSDK",
            win: "object" == typeof window && window.document ? window : undefined,
            regionMap: {
                cn: "https://arms-retcode.aliyuncs.com/r.png?",
                sg: "https://arms-retcode-sg.aliyuncs.com/r.png?",
                sg_2: "https://retcode-sg-lazada.arms.aliyuncs.com/r.png?",
                daily: "http://arms-retcode-daily.alibaba.net/r.png?",
                daily_2: "https://arms-retcode-daily.alibaba.net/r.png?",
                us: "https://retcode-us-west-1.arms.aliyuncs.com/r.png?",
                tw: "https://arms-retcode.orientalgame.com.tw/r.png?",
                tw_sg: "https://arms-retcode-sg.orientalgame.com.tw/r.png?",
                hz_finance: "https://arms-retcode-hz-finance.aliyuncs.com/r.png?"
            },
            defaultImgUrl: "https://arms-retcode.aliyuncs.com/r.png?",
            $at: function(e) {
                if (Object.create)
                    return Object.create(e);
                var t = function() {};
                return t.prototype = e,
                new t
            },
            each: function(e, t) {
                var r = 0
                  , n = e.length;
                if (this.T(e, "Array"))
                    for (; r < n && !1 !== t.call(e[r], e[r], r); r++)
                        ;
                else
                    for (r in e)
                        if (!1 === t.call(e[r], e[r], r))
                            break;
                return e
            },
            $a9: function(e, t, r) {
                if ("function" != typeof e)
                    return r;
                try {
                    return e.apply(this, t)
                } catch (n) {
                    return r
                }
            },
            T: function(e, t) {
                var r = Object.prototype.toString.call(e).substring(8).replace("]", "");
                return t ? r === t : r
            },
            $au: function(e, t) {
                if (!e)
                    return "";
                if (!t)
                    return e;
                var r = this
                  , n = r.T(t);
                return "Function" === n ? r.$a9(t, [e], e) : "Array" === n ? (this.each(t, function(t) {
                    e = r.$au(e, t)
                }),
                e) : "Object" === n ? e.replace(t.rule, t.target || "") : e.replace(t, "")
            },
            $al: function(e, t) {
                if (!e || !t)
                    return !1;
                if ((this.isString(t) || t.source || "Function" === this.T(t)) && (t = [t]),
                !this.isArray(t))
                    return this.warn("[arms] invalid rules of ignore config, (list of) String/RegExp/Funcitons are available"),
                    !1;
                for (var r, n = [], a = 0, i = t.length; a < i; a++)
                    if (r = t[a],
                    this.isString(r))
                        n.push(r.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1"));
                    else if (r && r.source)
                        n.push(r.source);
                    else if (r && "Function" === this.T(r) && !0 === this.$a9(r, [e], !1))
                        return !0;
                var o = new RegExp(n.join("|"),"i");
                return !!(n.length && o.test && o.test(e))
            },
            J: function(e) {
                if (!e || "string" != typeof e)
                    return e;
                var t = null;
                try {
                    t = JSON.parse(e)
                } catch (r) {}
                return t
            },
            pick: function(e) {
                return 1 === e || 1 === Math.ceil(Math.random() * e)
            },
            $aa: function(e) {
                if ("sample"in e) {
                    var t = e.sample
                      , r = t;
                    t && /^\d+(\.\d+)?%$/.test(t) && (r = parseInt(100 / parseFloat(t))),
                    0 < r && 1 > r && (r = parseInt(1 / r)),
                    r >= 1 && r <= 100 ? e.sample = r : delete e.sample
                }
                return e
            },
            on: function(e, t, r, n, a) {
                return e.addEventListener ? (a = a || !1,
                e.addEventListener(t, function i(o) {
                    n && e.removeEventListener(t, i, a),
                    r.call(this, o)
                }, a)) : e.attachEvent && e.attachEvent("on" + t, function o(a) {
                    n && e.detachEvent("on" + t, o),
                    r.call(this, a)
                }),
                this
            },
            off: function(e, t, r) {
                return r ? (e.removeEventListener ? e.removeEventListener(t, r) : e.detachEvent && e.detachEvent(t, r),
                this) : this
            },
            delay: function(e, t) {
                return -1 === t ? (e(),
                null) : setTimeout(e, t || 0)
            },
            ext: function(e) {
                for (var t = 1, r = arguments.length; t < r; t++) {
                    var n = arguments[t];
                    for (var a in n)
                        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            },
            sub: function(e, t) {
                var r = {};
                return this.each(e, function(e, n) {
                    -1 !== t.indexOf(n) && (r[n] = e)
                }),
                r
            },
            uu: function() {
                for (var e, t, r = 20, n = new Array(r), a = Date.now().toString(36).split(""); r-- > 0; )
                    t = (e = 36 * Math.random() | 0).toString(36),
                    n[r] = e % 3 ? t : t.toUpperCase();
                for (var i = 0; i < 8; i++)
                    n.splice(3 * i + 2, 0, a[i]);
                return n.join("")
            },
            seq: function() {
                return (n++).toString(36)
            },
            decode: function(e) {
                try {
                    e = decodeURIComponent(e)
                } catch (t) {}
                return e
            },
            encode: function(e, t) {
                try {
                    e = t ? encodeURIComponent(e).replace(/\(/g, "%28").replace(/\)/g, "%29") : encodeURIComponent(e)
                } catch (r) {}
                return e
            },
            serialize: function(e) {
                e = e || {};
                var t = [];
                for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && e[r] !== undefined && t.push(r + "=" + this.encode(e[r], "msg" === r));
                return t.join("&")
            },
            $bi: function(e, t) {
                if (!e || "string" != typeof e)
                    return !1;
                var r = /arms-retcode[\w-]*\.aliyuncs/.test(e);
                return !r && t && (r = /(\.png)|(\.gif)|(alicdn\.com)|(mmstat\.com)/.test(e)),
                !r
            },
            $b9: function(e) {
                return !(!e || !e.message) && !/failed[\w\s]+fetch/i.test(e.message)
            },
            $av: function(e) {
                return e && "string" == typeof e ? e.replace(/^(https?:)?\/\//, "").replace(/\?.*$/, "") : ""
            },
            $bm: function(e) {
                return e && "string" == typeof e ? e.replace(/\?.*$/, "") : ""
            },
            $b5: function(e) {
                return function() {
                    return e + "() { [native code] }"
                }
            },
            checkSameOrigin: function(e, t) {
                if (!t || !e)
                    return !1;
                var r = "//" + t.split("/")[2];
                return e === t || e.slice(0, t.length + 1) === t + "/" || e === r || e.slice(0, r.length + 1) === r + "/" || !/^(\/\/|http:|https:).*/.test(e)
            },
            getRandIP: function() {
                for (var e = [], t = 0; t < 4; t++) {
                    var r = Math.floor(256 * Math.random());
                    e[t] = (r > 15 ? "" : "0") + r.toString(16)
                }
                return e.join("").replace(/^0/, "1")
            },
            getSortNum: function(e) {
                return e ? (e += 1) >= 1e3 && e <= 9999 ? e : e < 1e3 ? e + 1e3 : e % 1e4 + 1e3 : 1e3
            },
            getRandNum: function(e) {
                return e && "string" == typeof e ? e.length < 5 ? this.getNum(5) : e.substring(e.length - 5) : this.getNum(5)
            },
            getNum: function(e) {
                for (var t = [], r = 0; r < e; r++) {
                    var n = Math.floor(16 * Math.random());
                    t[r] = n.toString(16)
                }
                return t.join("")
            },
            getCurDomain: function() {
                return location && location.hostname || ""
            },
            parseFetchHeaders: function(e) {
                if (!e)
                    return {};
                var t = {};
                try {
                    if ("function" == typeof e.keys)
                        for (var r = e.keys(), n = r.next(); !n.done; ) {
                            var a = n.value;
                            t[a] = e.get(a),
                            n = r.next()
                        }
                    else
                        t = e
                } catch (i) {
                    t = {}
                }
                return t
            },
            parseXhrHeaders: function(e) {
                if (!e && "string" != typeof e)
                    return {};
                var t = {};
                try {
                    var r = e.split("\r\n");
                    t = r.reduce(function(e, t) {
                        var r = t.split(": ");
                        return e[r[0]] = r[1],
                        e
                    }, {})
                } catch (n) {
                    t = {}
                }
                return t
            },
            getQuerys: function(e) {
                if (!e)
                    return "";
                var t = {}
                  , r = []
                  , n = ""
                  , a = "";
                try {
                    var i = [];
                    if (e.indexOf("?") >= 0 && (i = e.substring(e.indexOf("?") + 1, e.length).split("&")),
                    i.length > 0)
                        for (var o in i)
                            n = (r = i[o].split("="))[0],
                            a = r[1],
                            t[n] = a
                } catch (s) {
                    t = {}
                }
                return t
            },
            getFetchSnapshot: function(e, t, r) {
                var n, a;
                try {
                    var i = (e && "string" != typeof e[0] ? e[0].url : e[0]) || ""
                      , o = (e && "string" != typeof e[0] ? e[0] : e[1]) || {}
                      , s = "POST" === o.method.toUpperCase() ? o.body : this.getQuerys(i);
                    n = {
                        originApi: i,
                        method: o.method || "unknown",
                        params: s,
                        response: t || "",
                        reqHeaders: this.parseFetchHeaders(o.headers || null),
                        resHeaders: this.parseFetchHeaders(r)
                    },
                    a = "function" == typeof encodeURIComponent && JSON && encodeURIComponent(JSON.stringify(n)) || "{}"
                } catch (c) {
                    a = "{}"
                }
                return a
            },
            getXhrSnapshot: function(e, t, r) {
                if (!e || !t || !r)
                    return {};
                var n, a;
                try {
                    var i = "";
                    "" === r.responseType || "text" === r.responseType ? i = r.responseText : "document" === r.responseType && (i = r.responseXML),
                    n = {
                        originApi: e,
                        method: t,
                        params: this.getQuerys(e),
                        response: i,
                        reqHeaders: {},
                        resHeaders: this.parseXhrHeaders("function" == typeof r.getAllResponseHeaders && r.getAllResponseHeaders() || "")
                    },
                    a = "function" == typeof encodeURIComponent && JSON && encodeURIComponent(JSON.stringify(n)) || "{}"
                } catch (o) {
                    a = "{}"
                }
                return a
            },
            isRobot: function() {
                var e = ["nuhk", "googlebot/", "googlebot-image", "yammybot", "openbot", "slurp", "msnbot", "ask jeeves/teoma", "ia_archiver", "baiduspider", "bingbot/", "adsbot"];
                if (!navigator || "string" != typeof navigator.userAgent)
                    return !1;
                try {
                    for (var t = navigator.userAgent.toLowerCase(), r = 0; r < e.length; r++) {
                        var n = e[r];
                        if (t.lastIndexOf(n) >= 0)
                            return !0
                    }
                } catch (a) {
                    this.warn("[arms] useragent parse error")
                }
                return !1
            },
            isFunction: function(e) {
                return "function" == typeof e
            },
            isPlainObject: function(e) {
                return "[object Object]" === Object.prototype.toString.call(e)
            },
            isString: function(e) {
                return "[object String]" === Object.prototype.toString.call(e)
            },
            isArray: function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            },
            joinRegExp: function(e) {
                for (var t, r = [], n = 0, a = e.length; n < a; n++)
                    t = e[n],
                    this.isString(t) ? r.push(t.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")) : t && t.source && r.push(t.source);
                return new RegExp(r.join("|"),"i")
            },
            reWriteMethod: function(e, t, r) {
                if (null !== e) {
                    var n = e[t];
                    e[t] = r(n)
                }
            },
            $bl: function(e, t) {
                if (!e && !t)
                    return !1;
                if (new RegExp(this.selfErrKey,"i").test(e))
                    return !0;
                return !!this.$al(t, [/retcode.alicdn.com\/retcode\/bl.js/, /g.alicdn.com\/retcode\/cloud-sdk\/bl.js/, /laz-g-cdn.alicdn.com\/retcode\/cloud-sdk\/bl.js/, /local.taobao.com:8880\/build\/bl/])
            },
            $bq: function(e) {
                return {
                    msg: e,
                    message: this.selfErrKey
                }
            },
            $bk: function(e, t, r) {
                var n = {};
                try {
                    n = this.isPlainObject(e) ? this.ext({
                        key: e.key || "default",
                        val: e.val || e.value || r
                    }, e, {
                        begin: Date.now()
                    }) : {
                        key: e || "default",
                        val: t || r,
                        begin: Date.now()
                    }
                } catch (a) {
                    this.warn("[retcode] baseLog error: " + a)
                }
                return n
            }
        };
        t.exports = i
    }
    , {}]
}, {}, [14]);
