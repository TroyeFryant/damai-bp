/*! 2022-12-12 16:17:29 aplus_202619826.js */
!function(e) {
    function t(n) {
        if (a[n])
            return a[n].exports;
        var r = a[n] = {
            exports: {},
            id: n,
            loaded: !1
        };
        return e[n].call(r.exports, r, r.exports, t),
        r.loaded = !0,
        r.exports
    }
    var a = {};
    return t.m = e,
    t.c = a,
    t.p = "",
    t(0)
}([function(e, t, a) {
    e.exports = a(1)
}
, function(e, t, a) {
    "use strict";
    a(2).initGlobal(window),
    function() {
        var e = a(4);
        a(142)(e)
    }()
}
, function(e, t, a) {
    "use strict";
    var n, r = a(3), o = r.APLUS, i = r.APLUS_QUEUE, s = r.GOLDLOG, u = r.GOLDLOG_QUEUE, l = !1;
    try {
        window && (n = window,
        l = !0)
    } catch (e) {
        n = {},
        l = !1
    }
    t.getContext = function() {
        return n
    }
    ,
    t.isWeb = function() {
        return window
    }
    ,
    t.initGlobal = function(e) {
        n = e ? e : {
            v: 1,
            aplus: {},
            aplus_queue: []
        };
        var t, a;
        if (l)
            try {
                t = n.aplus || n.goldlog || (n.aplus = {});
                var r = n.goldlog_queue || (n.goldlog_queue = []);
                a = n.aplus_queue || (n.aplus_queue = []),
                a = r.concat(a)
            } catch (e) {}
        else
            t = n.aplus,
            a = n.aplus_queue;
        return n.aplus = n.goldlog = t,
        n.aplus_queue = n.goldlog_queue = a,
        n
    }
    ;
    var c = function(e) {
        if (e === o || e === s) {
            var t = n[o] || n[s];
            return t || (t = n[o] = n[s] = {}),
            t
        }
        var a = u
          , r = i;
        if (e === r || e === a) {
            var l = n[r] || n[a];
            return l || (l = n[r] = n[a] = []),
            l
        }
    };
    t.getGlobalValue = c,
    t.setGlobalValue = function(e, t) {
        n[e] = t
    }
    ;
    var p = function(e) {
        var t;
        try {
            var a = c(o);
            t = a[e]
        } catch (e) {
            t = ""
        } finally {
            return t
        }
    };
    t.getGoldlogVal = p;
    var f = function(e, t) {
        var a = !1;
        try {
            var n = c(o);
            e && (n[e] = t,
            a = !0)
        } catch (e) {
            a = !1
        } finally {
            return a
        }
    };
    t.setGoldlogVal = f,
    t.getClientInfo = function() {
        return p("_aplus_client") || {}
    }
}
, function(e, t) {
    var a = "aplus"
      , n = "goldlog"
      , r = a + "_queue"
      , o = n + "_queue"
      , i = "mw_change"
      , s = "MetaInfo"
      , u = "append" + s
      , l = "set" + s
      , c = "http"
      , p = "_pubsub"
      , f = "other"
      , g = "2101"
      , d = "2201"
      , m = "2202"
      , h = "19999"
      , _ = "1023"
      , v = "1010"
      , b = 3e4
      , y = 18e5
      , A = "ekvs"
      , P = 1e4
      , w = 1
      , S = 1
      , T = 3e3
      , E = "$$_page_start"
      , x = "$$_page_end"
      , I = "$$_app_start"
      , N = "$$_app_end"
      , M = "aplus_user_profile"
      , C = "imprint"
      , k = "aplus-idtype"
      , U = "aplus-jsbridge-only"
      , O = "aplus-page-config"
      , L = "aplus-skip-apv-rules"
      , V = "aplus-rhost-v"
      , R = "aplus-rhost-g"
      , D = "autoGetOpenid";
    e.exports = {
        PAGE_ENTER: "PAGE_ENTER",
        CURRENT_PAGE_CONFIG: "CURRENT_PAGE_CONFIG",
        _ANONY_ID: "_anony_id",
        _DEV_ID: "_dev_id",
        _USER_ID: "_user_id",
        DEFAULT_CODE: f,
        OTHER: h,
        EVENT_MAP: {
            2101: "click",
            2201: "exposure",
            2202: "exposure",
            19999: f,
            1023: "app_show",
            1010: "app_hide_or_unload"
        },
        EVENT_ID_MAP: {
            EXP: d,
            IMPEXP: m,
            CLK: g,
            OTHER: h,
            SHOW: _,
            H_OR_U: v
        },
        APLUS: a,
        GOLDLOG: n,
        UNSUBSCRIBE: a + "." + a + p + ".unsubscribe",
        SUBSCRIBE: a + "." + a + p + ".subscribe",
        PUBLISH: a + "." + a + p + ".publish",
        CACHE_PUBS: a + "." + a + p + ".cachePubs",
        APLUS_UNIVERSAL: a + "_universal",
        APLUS_QUEUE: r,
        GOLDLOG_QUEUE: o,
        COMPLETE: "complete",
        PV_CODE: "2001",
        EXP_CODE: d,
        CLK_CODE: g,
        OTHER_CODE: h,
        CLK: "CLK",
        EXP: "EXP",
        SPM_CNT: "spm-cnt",
        SPM_URL: "spm-url",
        SPM_PRE: "spm-pre",
        MW_CHANGE_PV: i + "_pv",
        MW_CHANGE_HJLJ: i + "_hjlj",
        HTTP: c + ":",
        HTTPS: "https:",
        APPEND_META_INFO: u,
        SET_META_INFO: l,
        APLUS_APPEND_META_INFO: a + "." + u,
        APLUS_SET_META_INFO: a + "." + l,
        PVID: "pvid",
        APLUS_LOG_PIPE: "aplus-log-pipe",
        openAPIs: ["send", "enter", "sendPV", "record", "combineRecord", "recordUdata", "requestVTConfig", "requestRemoteConfig", "setPageSPM", "setMetaInfo", "appendMetaInfo", "updatePageProperties", "updateNextPageProperties", "updatePageUtparam", "updateNextPageUtparam", "pageAppear", "pageDisappear", "skipPage", "updateSessionProperties", "getPageSpmUrl", "getPageSpmPre", "setPageName", "getElementSPM", "recordAppLink", "setUserProfile", "getUserProfile"],
        SESSION_INTERVAL: b,
        SESSION_PAUSE_TIME: "session_pause_time",
        IMPRINT: "imprint",
        CURRENT_SESSION: "current_session",
        MAX_EVENTID_LENGTH: 128,
        MAX_PROPERTY_KEY_LENGTH: 256,
        MAX_PROPERTY_KEYS_COUNT: 100,
        FAILED_REQUESTS: "failed_requests",
        REQUESTS: "requests",
        SHARES: "shares",
        APLUS_SSRC: "_aplus_ssrc",
        EKVS: A,
        EVENT_MAX_COUNT: P,
        MEMORY_MAX_COUNT: w,
        MAX_QUEUE_COUNT: S,
        EVENT_SEND_DEFAULT_INTERVAL: T,
        PAGE_START: E,
        PAGE_END: x,
        APP_START: I,
        APP_END: N,
        USER_PROFILE_KEY: M,
        SHARE_CACHE_INTERVAL: y,
        IMPRINT: C,
        ID_TYPE: k,
        GLOBAL_PROPERTY: "globalproperty",
        JSBRIDGE_ONLY: U,
        PAGE_CONFIG: O,
        APLUS_SKIP_APV_RULES: L,
        APLUS_PV_DOMAIN: V,
        APLUS_EKV_DOMAIN: R,
        APLUS_IMPRINT_VERSION: "APLUS_IMPRINT_VERSION",
        APLUS_REMOTE_CONFIG: "APLUS_REMOTE_CONFIG",
        RANK: "ekv_rank",
        WEB_EVENT_SUFFIX: "/web_logs",
        WEB_PC_PV_SUFFIX: "v.gif",
        WEB_WAP_PV_SUFFIX: "m.gif",
        PAGE_LEAVE: "$$_page_leave",
        APLUS_AUTOTRACK_ENABLED: "aplus-autotrack-enabled",
        APLUS_AUTOTRACK_ENABLED_REMOTE: "aplus-autotrack-enabled-remote",
        APLUS_AUTOTRACK_CONFIG: "aplus-autotrack-config",
        APLUS_AUTOTRACK_CONFIG_REMOTE: "aplus-autotrack-config-remote",
        APLUS_EVENT_LIMITRATES: "aplus-event-limitrates",
        APLUS_DISABLE_AUTOEVENT: "aplus-disable-autoevent",
        APLUS_DISABLE_AUTOEVENT_REMOTE: "aplus-disable-autoevent",
        APLUS_DISABLE_AUTOPV: "aplus-disable-apv",
        APLUS_DISABLE_AUTOPV_REMOTE: "aplus-disable-apv-remote",
        APLUS_DEVICE_ENABLE: "aplus-device-enable",
        PERFORMANCE_WARING: "$$_perf_warning",
        START_ID: "START_ID",
        AUTO_GET_OPENID: D,
        APLUS_BRIDGE_NAME: "aplus-bridge-name",
        APLUS_MINI_REQUEST_TIMEOUT: "aplus-request-timeout",
        APLUS_LATEAST_UTM: "APLUS_LATEAST_UTM"
    }
}
, function(e, t, a) {
    e.exports = {
        metaInfo: {
            "aplus-ifr-pv": "1",
            "aplus-rhost-v": "log.mmstat.com",
            "aplus-rhost-g": "gm.mmstat.com",
            "aplus-channel": "WS",
            appId: "",
            sdkId: "customSdkId",
            "aplus-cpvdata": {},
            "aplus-exdata": {},
            "aplus-globaldata": {},
            "aplus-mmstat-timeout": "10000",
            "aplus-toUT": "auto",
            "aplus-track-combine": "on",
            "aplus-vt-auto-userfn-enable": "on",
            "aplus-user-profile": {},
            "aplus-report-rate": {},
            customSdkId: "202619826_20221212_161727"
        },
        globalConfig: {
            isAli: !0,
            APLUS_QUEUE: "aplus_queue",
            ETAG_STORAGE_KEY: "__ETAG__CNA__ID__",
            script_name: "aplus.js",
            lver: "1.9.53",
            NAME_STORAGE_KEYS: {
                REFERRER: "wm_referrer",
                REFERRER_PV_ID: "refer_pv_id",
                LOST_PV_PAGE_DURATION: "lost_pv_page_duration",
                LOST_PV_PAGE_SPMAB: "lost_pv_page_spmab",
                LOST_PV_PAGE: "lost_pv_page",
                LOST_PV_PAGE_MSG: "lost_pv_page_msg"
            }
        },
        plugins: [{
            name: "aplus_body_ready",
            path: a(5)
        }, {
            name: "pubsub",
            path: a(6)
        }, {
            name: "aplus_client",
            path: a(11)
        }, {
            name: "aplus_meta_inject",
            path: a(15)
        }, {
            name: "aplus_ac",
            path: a(38)
        }, {
            name: "aplus_ae",
            path: a(52)
        }, {
            name: "name_storage",
            path: a(60)
        }, {
            name: "record_lost_pv",
            path: a(63),
            config: {
                lostPvRecordRatio: .01
            }
        }, {
            name: "aplus_monitor",
            path: a(65),
            config: {
                obsoleteInterRecordRatio: "0.01",
                jsErrorRecordRatio: "0.01",
                browserSupportRatio: "0.01"
            }
        }, {
            name: "aplus_web_http_ali",
            path: a(67)
        }, {
            name: "aplus_log_inject",
            path: a(70),
            deps: ["aplus_meta_inject"],
            config: {
                plugins: {
                    pv: [{
                        name: "etag",
                        path: a(71)
                    }, {
                        name: "pha_trackinfo",
                        path: a(77)
                    }, {
                        name: "when_to_sendpv",
                        path: a(78),
                        config: {
                            aplusWaiting: ""
                        }
                    }, {
                        name: "where_to_send",
                        path: a(79),
                        config: {
                            method: "GET",
                            url: "//log.mmstat.com/v.gif"
                        }
                    }, {
                        name: "what_to_send",
                        path: a(81),
                        config: {
                            pvdataToUt: {}
                        }
                    }, {
                        name: "cookie_data",
                        path: a(82)
                    }, {
                        name: "what_to_sendpv_userdata",
                        path: a(83),
                        deps: ["what_to_send"]
                    }, {
                        name: "what_to_sendpv_userdata_web",
                        path: a(85),
                        deps: ["what_to_send", "what_to_sendpv_userdata"]
                    }, {
                        name: "what_to_sendpv_ut2",
                        path: a(88),
                        deps: ["what_to_send"]
                    }, {
                        name: "can_to_sendpv",
                        path: a(89),
                        config: {
                            flag: "NO"
                        }
                    }, {
                        name: "after_pv",
                        path: a(95)
                    }],
                    hjlj: [{
                        name: "etag",
                        path: a(71)
                    }, {
                        name: "pha_trackinfo",
                        path: a(77)
                    }, {
                        name: "where_to_send",
                        path: a(79),
                        deps: [],
                        config: {
                            method: "GET",
                            url: "//gm.mmstat.com/",
                            ac_atpanel: "//ac.mmstat.com/",
                            tblogUrl: "//log.mmstat.com/"
                        }
                    }, {
                        name: "what_to_send",
                        path: a(81),
                        deps: []
                    }, {
                        name: "cookie_data",
                        path: a(82)
                    }, {
                        name: "what_to_hjlj_userdata",
                        path: a(96),
                        deps: ["what_to_send"]
                    }, {
                        name: "what_to_hjlj_userdata_web",
                        path: a(97),
                        deps: ["what_to_send", "what_to_hjlj_userdata"]
                    }, {
                        name: "what_to_hjlj_ut2",
                        path: a(98),
                        deps: ["what_to_send"]
                    }]
                }
            }
        }, {
            name: "aplus_spm_inject",
            path: a(99)
        }, {
            name: "aplus_api",
            path: a(113)
        }, {
            name: "aplus4my",
            path: a(121),
            deps: ["aplus_api"]
        }, {
            name: "meta_queue",
            path: a(123)
        }, {
            name: "etag",
            path: a(71)
        }, {
            name: "etag_web_sync",
            path: a(125)
        }, {
            name: "aplus4uni_toUT",
            path: a(126),
            deps: ["aplus_api"]
        }, {
            name: "aplus_queue",
            path: a(137)
        }, {
            name: "hot_loader",
            path: a(138),
            config: {
                urlRules: [{
                    rule: "aplus_webvt_messager",
                    cdnPath: ["https://d.alicdn.com/alilog/mlog/aplus_webvt_messager.js", "https://d.alicdn.com/alilog/mlog/aplus_track_debug.js"]
                }, {
                    rule: "aplus_track_debug_id",
                    cdnPath: ["https://d.alicdn.com/alilog/mlog/aplus_track_debug.js"]
                }, {
                    rule: "__aplus__analytics__=true",
                    cdnPath: ["https://g.alicdn.com/alilog/aplus-design/1.3.0/analytics_index.bundle.js"]
                }]
            }
        }, {
            name: "hot_sufei_wap",
            path: a(139)
        }, {
            name: "aplus_apv",
            path: a(140),
            deps: ["aplus_log_inject", "aplus_api"]
        }]
    }
}
, function(e, t) {
    "use strict";
    e.exports = function() {
        return {
            run: function(e, t) {
                var a = setInterval(function() {
                    document.getElementsByTagName("body").length && (clearInterval(a),
                    a = null,
                    t())
                }, 50);
                return setTimeout(function() {
                    a && clearInterval(a)
                }, 1e3),
                1e3
            }
        }
    }
}
, function(e, t, a) {
    var n = a(7)
      , r = a(2);
    e.exports = function() {
        return {
            run: function() {
                var e = r.getGlobalValue("aplus");
                e.aplus_pubsub || (e.aplus_pubsub = n.create())
            }
        }
    }
}
, function(e, t, a) {
    var n = a(8);
    e.exports = n.extend({
        subscribeOnce: function(e, t) {
            this.callable(t);
            var a, n = this;
            return this.subscribe.call(this, e, a = function() {
                n.unsubscribe.call(n, e, a);
                var r = Array.prototype.slice.call(arguments);
                t.apply(n, r)
            }
            ),
            this
        }
    })
}
, function(e, t, a) {
    "use strict";
    var n = a(9)
      , r = a(10)
      , o = function(e) {
        for (var t = e.length, a = new Array(t - 1), n = 1; n < t; n++)
            a[n - 1] = e[n];
        return a
    }
      , i = r.extend({
        callable: function(e) {
            if (!n(e))
                throw new TypeError(e + " is not a function");
            return e
        },
        create: function(e) {
            var t = new this;
            for (var a in e)
                t[a] = e[a];
            return t.handlers = [],
            t.pubs = {},
            t
        },
        setHandlers: function(e) {
            this.handlers = e
        },
        subscribe: function(e, t) {
            this.callable(t);
            var a = this
              , n = a.pubs || {}
              , r = a.handlers || [];
            e in r || (r[e] = []),
            r[e].push(t),
            a.setHandlers(r);
            for (var o = n[e] || [], i = 0; i < o.length; i++) {
                var s = o[i]();
                t.apply(a, s)
            }
            return a
        },
        unsubscribe: function(e, t) {
            this.callable(t);
            try {
                var a = this.handlers[e];
                if (!a)
                    return this;
                if ("object" == typeof a && a.length > 0) {
                    for (var n = 0; n < a.length; n++)
                        t === a[n] && a.splice(n, 1);
                    this.handlers[e] = a
                } else
                    delete this.handlers[e]
            } catch (e) {}
            return this
        },
        publish: function(e) {
            var t = o(arguments)
              , a = this.handlers || []
              , r = a[e] ? a[e].length : 0;
            if (r > 0)
                for (var i = 0; i < r; i++) {
                    var s = a[e][i];
                    n(s) && s.apply(this, t)
                }
            return this
        },
        cachePubs: function(e) {
            var t = this.pubs || {}
              , a = o(arguments);
            t[e] || (t[e] = []),
            t[e].push(function() {
                return a
            })
        }
    });
    e.exports = i
}
, function(e, t) {
    "use strict";
    e.exports = function(e) {
        return "function" == typeof e
    }
}
, function(e, t, a) {
    "use strict";
    function n() {}
    var r = a(9);
    n.prototype.extend = function() {}
    ,
    n.prototype.create = function() {}
    ,
    n.extend = function(e) {
        return this.prototype.extend.call(this, e)
    }
    ,
    n.prototype.create = function(e) {
        var t = new this;
        for (var a in e)
            t[a] = e[a];
        return t
    }
    ,
    n.prototype.extend = function(e) {
        var t = function() {};
        try {
            r(Object.create) || (Object.create = function(e) {
                function t() {}
                return t.prototype = e,
                new t
            }
            ),
            t.prototype = Object.create(this.prototype);
            for (var a in e)
                t.prototype[a] = e[a];
            t.prototype.constructor = t,
            t.extend = t.prototype.extend,
            t.create = t.prototype.create
        } catch (e) {
            console && console.log(e)
        } finally {
            return t
        }
    }
    ,
    e.exports = n
}
, function(e, t, a) {
    "use strict";
    e.exports = function() {
        return {
            run: function() {
                var e = window.aplus || (window.aplus = {});
                e._aplus_client = a(12)()
            }
        }
    }
}
, function(e, t, a) {
    function n(e) {
        function t() {
            for (var t = [["Windows NT 5.1", "winXP"], ["Windows NT 6.1", "win7"], ["Windows NT 6.0", "winVista"], ["Windows NT 6.2", "win8"], ["Windows NT 10.0", "win10"], ["iPad", "ios"], ["iPhone;", "ios"], ["iPod", "ios"], ["Macintosh", "mac"], ["Android", "android"], ["Ubuntu", "ubuntu"], ["Linux", "linux"], ["Windows NT 5.2", "win2003"], ["Windows NT 5.0", "win2000"], ["Windows", "winOther"], ["rhino", "rhino"]], a = 0, n = t.length; a < n; ++a)
                if (e.indexOf(t[a][0]) !== -1)
                    return t[a][1];
            return "other"
        }
        function a(e, t, a, n) {
            var r, o = l.navigator.mimeTypes;
            try {
                for (r in o)
                    if (o.hasOwnProperty(r) && o[r][e] == t) {
                        if (void 0 !== a && n.test(o[r][a]))
                            return !0;
                        if (void 0 === a)
                            return !0
                    }
                return !1
            } catch (e) {
                return !1
            }
        }
        var n, r, o, i, s, c, f, h = "", _ = h, v = h, b = [6, 9], y = "{{version}}", A = "<!--[if IE " + y + "]><s></s><![endif]-->", P = u && u.createElement("div"), w = [], S = {
            isAliapp: !1,
            webkit: void 0,
            edge: void 0,
            trident: void 0,
            gecko: void 0,
            presto: void 0,
            chrome: void 0,
            safari: void 0,
            firefox: void 0,
            ie: void 0,
            ieMode: void 0,
            opera: void 0,
            mobile: void 0,
            core: void 0,
            shell: void 0,
            phantomjs: void 0,
            os: void 0,
            ipad: void 0,
            iphone: void 0,
            ipod: void 0,
            ios: void 0,
            android: void 0,
            nodejs: void 0,
            extraName: void 0,
            extraVersion: void 0
        };
        if (P && P.getElementsByTagName && (P.innerHTML = A.replace(y, ""),
        w = P.getElementsByTagName("s")),
        w.length > 0) {
            for (d(e, S),
            i = b[0],
            s = b[1]; i <= s; i++)
                if (P.innerHTML = A.replace(y, i),
                w.length > 0) {
                    S[v = "ie"] = i;
                    break
                }
            !S.ie && (o = m(e)) && (S[v = "ie"] = o)
        } else
            ((r = e.match(/AppleWebKit\/*\s*([\d.]*)/i)) || (r = e.match(/Safari\/([\d.]*)/))) && r[1] ? (S[_ = "webkit"] = g(r[1]),
            (r = e.match(/OPR\/(\d+\.\d+)/)) && r[1] ? S[v = "opera"] = g(r[1]) : (r = e.match(/Chrome\/([\d.]*)/)) && r[1] ? S[v = "chrome"] = g(r[1]) : (r = e.match(/\/([\d.]*) Safari/)) && r[1] ? S[v = "safari"] = g(r[1]) : S.safari = S.webkit,
            (r = e.match(/Edge\/([\d.]*)/)) && r[1] && (_ = v = "edge",
            S[_] = g(r[1])),
            / Mobile\//.test(e) && e.match(/iPad|iPod|iPhone/) ? (S.mobile = "apple",
            r = e.match(/OS ([^\s]*)/),
            r && r[1] && (S.ios = g(r[1].replace("_", "."))),
            n = "ios",
            r = e.match(/iPad|iPod|iPhone/),
            r && r[0] && (S[r[0].toLowerCase()] = S.ios)) : / Android/i.test(e) ? (/Mobile/.test(e) && (n = S.mobile = "android"),
            r = e.match(/Android ([^\s]*);/),
            r && r[1] && (S.android = g(r[1]))) : (r = e.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/)) && (S.mobile = r[0].toLowerCase()),
            (r = e.match(/PhantomJS\/([^\s]*)/)) && r[1] && (S.phantomjs = g(r[1]))) : (r = e.match(/Presto\/([\d.]*)/)) && r[1] ? (S[_ = "presto"] = g(r[1]),
            (r = e.match(/Opera\/([\d.]*)/)) && r[1] && (S[v = "opera"] = g(r[1]),
            (r = e.match(/Opera\/.* Version\/([\d.]*)/)) && r[1] && (S[v] = g(r[1])),
            (r = e.match(/Opera Mini[^;]*/)) && r ? S.mobile = r[0].toLowerCase() : (r = e.match(/Opera Mobi[^;]*/)) && r && (S.mobile = r[0]))) : (o = m(e)) ? (S[v = "ie"] = o,
            d(e, S)) : (r = e.match(/Gecko/)) && (S[_ = "gecko"] = .1,
            (r = e.match(/rv:([\d.]*)/)) && r[1] && (S[_] = g(r[1]),
            /Mobile|Tablet/.test(e) && (S.mobile = "firefox")),
            (r = e.match(/Firefox\/([\d.]*)/)) && r[1] && (S[v = "firefox"] = g(r[1])));
        if (!S[v]) {
            var T = e.match(/Ali\w+\(\w+\/(\d+\.)+\d+\)/);
            if (T) {
                S.isAliapp = !0;
                var E = T[0]
                  , x = ""
                  , I = ""
                  , N = E.match(/(\d+\.)+\d+/);
                N && (x = N[0],
                I = E.replace("/" + x, "").replace(/\(|\)/g, "")),
                S[v = I] = x
            }
        }
        n || (n = t());
        var M, C, k;
        if (!a("type", "application/vnd.chromium.remoting-viewer")) {
            M = "scoped"in u.createElement("style"),
            k = "v8Locale"in l;
            try {
                C = l.external || void 0
            } catch (e) {}
            if (r = e.match(/360SE/))
                c = "360";
            else if ((r = e.match(/SE\s([\d.]*)/)) || C && "SEVersion"in C)
                c = "sougou",
                f = g(r[1]) || .1;
            else if ((r = e.match(/Maxthon(?:\/)+([\d.]*)/)) && C) {
                c = "maxthon";
                try {
                    f = g(C.max_version || r[1])
                } catch (e) {
                    f = .1
                }
            } else
                M && k ? c = "360se" : M || k || !/Gecko\)\s+Chrome/.test(p) || S.opera || S.edge || (c = "360ee")
        }
        (r = e.match(/TencentTraveler\s([\d.]*)|QQBrowser\/([\d.]*)/)) ? (c = "tt",
        f = g(r[2]) || .1) : (r = e.match(/LBBROWSER/)) || C && "LiebaoGetVersion"in C ? c = "liebao" : (r = e.match(/TheWorld/)) ? (c = "theworld",
        f = 3) : (r = e.match(/TaoBrowser\/([\d.]*)/)) ? (c = "taobao",
        f = g(r[1]) || .1) : (r = e.match(/UCBrowser\/([\d.]*)/)) && (c = "uc",
        f = g(r[1]) || .1),
        S.os = n,
        S.core = S.core || _,
        S.shell = v,
        S.ieMode = S.ie && u.documentMode || S.ie,
        S.extraName = c,
        S.extraVersion = f;
        var U = l.screen.width
          , O = l.screen.height;
        return S.resolution = U + "x" + O,
        S
    }
    function r(e) {
        function t(e) {
            return Object.prototype.toString.call(e)
        }
        function a(e, a, n) {
            if ("[object Function]" == t(a) && (a = a(n)),
            !a)
                return null;
            var r = {
                name: e,
                version: ""
            }
              , o = t(a);
            if (a === !0)
                return r;
            if ("[object String]" === o) {
                if (n.indexOf(a) !== -1)
                    return r
            } else if (a.exec) {
                var i = a.exec(n);
                if (i)
                    return i.length >= 2 && i[1] ? r.version = i[1].replace(/_/g, ".") : r.version = "",
                    r
            }
        }
        var n = {
            name: "other",
            version: ""
        };
        e = (e || "").toLowerCase();
        for (var r = [["nokia", function(e) {
            return e.indexOf("nokia ") !== -1 ? /\bnokia ([0-9]+)?/ : /\bnokia([a-z0-9]+)?/
        }
        ], ["samsung", function(e) {
            return e.indexOf("samsung") !== -1 ? /\bsamsung(?:[ \-](?:sgh|gt|sm))?-([a-z0-9]+)/ : /\b(?:sgh|sch|gt|sm)-([a-z0-9]+)/
        }
        ], ["wp", function(e) {
            return e.indexOf("windows phone ") !== -1 || e.indexOf("xblwp") !== -1 || e.indexOf("zunewp") !== -1 || e.indexOf("windows ce") !== -1
        }
        ], ["pc", "windows"], ["ipad", "ipad"], ["ipod", "ipod"], ["iphone", /\biphone\b|\biph(\d)/], ["mac", "macintosh"], ["mi", /\bmi[ \-]?([a-z0-9 ]+(?= build|\)))/], ["hongmi", /\bhm[ \-]?([a-z0-9]+)/], ["aliyun", /\baliyunos\b(?:[\-](\d+))?/], ["meizu", function(e) {
            return e.indexOf("meizu") >= 0 ? /\bmeizu[\/ ]([a-z0-9]+)\b/ : /\bm([0-9x]{1,3})\b/
        }
        ], ["nexus", /\bnexus ([0-9s.]+)/], ["huawei", function(e) {
            var t = /\bmediapad (.+?)(?= build\/huaweimediapad\b)/;
            return e.indexOf("huawei-huawei") !== -1 ? /\bhuawei\-huawei\-([a-z0-9\-]+)/ : t.test(e) ? t : /\bhuawei[ _\-]?([a-z0-9]+)/
        }
        ], ["lenovo", function(e) {
            return e.indexOf("lenovo-lenovo") !== -1 ? /\blenovo\-lenovo[ \-]([a-z0-9]+)/ : /\blenovo[ \-]?([a-z0-9]+)/
        }
        ], ["zte", function(e) {
            return /\bzte\-[tu]/.test(e) ? /\bzte-[tu][ _\-]?([a-su-z0-9\+]+)/ : /\bzte[ _\-]?([a-su-z0-9\+]+)/
        }
        ], ["vivo", /\bvivo(?: ([a-z0-9]+))?/], ["htc", function(e) {
            return /\bhtc[a-z0-9 _\-]+(?= build\b)/.test(e) ? /\bhtc[ _\-]?([a-z0-9 ]+(?= build))/ : /\bhtc[ _\-]?([a-z0-9 ]+)/
        }
        ], ["oppo", /\boppo[_]([a-z0-9]+)/], ["konka", /\bkonka[_\-]([a-z0-9]+)/], ["sonyericsson", /\bmt([a-z0-9]+)/], ["coolpad", /\bcoolpad[_ ]?([a-z0-9]+)/], ["lg", /\blg[\-]([a-z0-9]+)/], ["android", /\bandroid\b|\badr\b/], ["blackberry", function(e) {
            return e.indexOf("blackberry") >= 0 ? /\bblackberry\s?(\d+)/ : "bb10"
        }
        ]], o = 0; o < r.length; o++) {
            var i = r[o][0]
              , s = r[o][1]
              , u = a(i, s, e);
            if (u) {
                n = u;
                break
            }
        }
        return n
    }
    function o() {
        try {
            var e = n(f)
              , t = r(f)
              , a = e.os
              , o = e.shell
              , i = e.extraName
              , s = e.extraVersion
              , u = {
                o: a ? a + (e[a] ? e[a] : "") : "",
                w: e.core,
                s: e.resolution,
                m: i ? i + (s ? parseInt(s) : "") : "",
                ism: t.name + t.version,
                p: 1
            };
            return u.b = o ? o + parseInt(e[o]) : "other",
            u
        } catch (e) {}
    }
    var i = a(13)
      , s = a(14)
      , u = document
      , l = window
      , c = l.navigator
      , p = c.appVersion
      , f = c ? c.userAgent : ""
      , g = function(e) {
        var t = 0;
        return parseFloat(e.replace(/\./g, function() {
            return 0 === t++ ? "." : ""
        }))
    }
      , d = function(e, t) {
        var a, n;
        t[a = "trident"] = .1,
        (n = e.match(/Trident\/([\d.]*)/)) && n[1] && (t[a] = g(n[1])),
        t.core = a
    }
      , m = function(e) {
        var t, a;
        return (t = e.match(/MSIE ([^;]*)|Trident.*; rv(?:\s|:)?([0-9.]+)/)) && (a = t[1] || t[2]) ? g(a) : 0
    };
    e.exports = function() {
        var e = s();
        return i(e, o())
    }
}
, function(e, t) {
    e.exports = function(e, t) {
        return "function" != typeof Object.assign ? function(e) {
            for (var t = Object(e), a = 1; a < arguments.length; a++) {
                var n = arguments[a];
                if (null !== n)
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        }(e, t) : Object.assign({}, e, t)
    }
}
, function(e, t) {
    "use strict";
    function a(e) {
        for (var t = [["Windows NT 5.1", "winXP"], ["Windows NT 6.1", "win7"], ["Windows NT 6.0", "winVista"], ["Windows NT 6.2", "win8"], ["Windows NT 6.3", "win8.1"], ["Windows NT 10.0", "win10"], ["Ubuntu", "ubuntu"], ["Linux", "linux"], ["Windows NT 5.2", "win2003"], ["Windows NT 5.0", "win2000"], ["Windows", "winOther"], ["rhino", "rhino"]], a = 0, n = t.length; a < n; ++a) {
            var r = t[a][0];
            if (e.indexOf(r) !== -1) {
                var o = r.split(" ")[0];
                return {
                    device_model: o,
                    os: o,
                    os_version: t[a][1]
                }
            }
        }
        var i = "other";
        return {
            device_model: i,
            os: i,
            os_version: i
        }
    }
    function n(e, t) {
        var a = e.substring(e.indexOf("(") + 1, e.indexOf(")"))
          , n = {
            device_model: t
        }
          , r = t.toLowerCase();
        switch (r) {
        case "ipad":
        case "iphone":
        case "ipod":
        case "macintosh":
            "macintosh" === r ? /Mac OS X/.test(a) ? n.os = "Mac OS X" : n.os = "Mac OS" : n.os = "IOS",
            n.os_version = a.match(/[0-9_.]+/)[0];
            break;
        case "android":
            n.os = "Android",
            n.os_version = a.match(/[0-9.]+/)[0]
        }
        return n.os_version = n.os_version.replace(/_/g, "."),
        n
    }
    e.exports = function() {
        var e = navigator.userAgent
          , t = {}
          , r = e.match(/iphone|ipad|android|macintosh/i)
          , o = e.match(/Darwin/i);
        if (r)
            t = n(e, r[0]);
        else if (o) {
            var i = e.split(" ")[2];
            t = {
                os: "Darwin",
                os_version: i.match(/[0-9.]+/)[0],
                device_model: "Darwin"
            }
        } else
            t = a(e);
        var s = screen || {};
        return t.screenWidth = s.width,
        t.screenHeight = s.height,
        navigator && (t.userAgent = navigator.userAgent || "-",
        t.language = navigator.language || navigator.userLanguage || "-"),
        t
    }
}
, function(e, t, a) {
    "use strict";
    e.exports = function() {
        return {
            run: function() {
                a(16)(this.options.context.aplus_config)
            }
        }
    }
}
, function(e, t, a) {
    "use strict";
    function n() {
        var e = document
          , t = "//g.alicdn.com";
        if (e) {
            var a = e.getElementById("beacon-aplus") || e.getElementById("tb-beacon-aplus")
              , n = ["//assets.alicdn.com/g", "//g-assets.daily.taobao.net", "//alidt.oss-cn-hangzhou.aliyuncs.com"];
            if (a)
                for (var r = 0; r < n.length; r++) {
                    var o = new RegExp(n[r]);
                    if (o.test(a.src)) {
                        t = n[r];
                        break
                    }
                }
        }
        return t
    }
    function r() {
        s || (s = n());
        var e = "//assets.alicdn.com/g" === s || "//laz-g-cdn.alicdn.com" === s;
        return e || "int" === f.getMetaInfo("aplus-env")
    }
    function o() {
        if (navigator && navigator.userAgent) {
            var e = /iphone|android/i.test(navigator.userAgent)
              , t = e || /TB\-PD/i.test(navigator.userAgent);
            return t
        }
        return !0
    }
    function i() {
        var e, t = l.getParamFromUrl("utparamcnt", location.href);
        if (t)
            try {
                e = t = JSON.parse(decodeURIComponent(t))
            } catch (e) {}
        return e
    }
    var s, u = a(2), l = a(17), c = a(24), p = a(25), f = a(26);
    e.exports = function(e) {
        var t = u.getGlobalValue("aplus")
          , s = e.globalConfig.NAME_STORAGE_KEYS
          , l = a(37).getRefer(s);
        t.nameStorage = p.nameStorage,
        c.haveNativeFlagInUA();
        var g = t._$ = t._$ || {};
        g.is_terminal = o(),
        g.send_pv_count = 0,
        g.page_referrer = l,
        g.spm = {
            data: {},
            page_referrer: l
        },
        t.globalConfig = e.globalConfig;
        var d = i();
        g.meta_info = f.qGet() || {};
        for (var m in e.metaInfo)
            if (!g.meta_info.hasOwnProperty(m)) {
                var h = e.metaInfo[m];
                "aplus-utparam" === m ? (d && f.appendMetaInfo(m, d),
                f.appendMetaInfo(m, h)) : f.setMetaInfo(m, h)
            }
        t._$ = g,
        t.isInternational = r,
        t.getCdnPath = n
    }
}
, function(e, t, a) {
    "use strict";
    function n(e, t) {
        if (!e || !t)
            return "";
        var a, n = "";
        try {
            var r = new RegExp(e + "=([^&|#|?|/]+)");
            if ("spm" === e || "scm" === e) {
                var o = new RegExp("\\?.*" + e + "=([\\w\\.\\-\\*/]+)")
                  , i = t.match(r)
                  , s = t.match(o)
                  , u = i && 2 === i.length ? i[1] : ""
                  , l = s && 2 === s.length ? s[1] : "";
                n = u > l ? u : l,
                n = decodeURIComponent(n)
            } else
                a = t.match(r),
                n = a && 2 === a.length ? a[1] : ""
        } catch (e) {} finally {
            return n
        }
    }
    function r(e, t) {
        var a, n, r, o, i, u = t || location.href, l = "&", c = [];
        return s(e, function(e, t) {
            new RegExp(e + "=").test(u) || c.push(e + "=" + t)
        }),
        0 === c.length ? u : (u.indexOf("#") !== -1 && (r = u.split("#"),
        u = r.shift(),
        n = r.join("#")),
        o = u.split("?"),
        i = o.length - 1,
        r = o[0].split("//"),
        r = r[r.length - 1].split("/"),
        i > 0 && (a = o.pop(),
        u = o.join("?")),
        a && i > 1 && a.indexOf("&") == -1 && a.indexOf("%") !== -1 && (l = "%26"),
        u = u + "?" + c.join("&") + (a ? l + a : "") + (n ? "#" + n : ""))
    }
    function o(e) {
        var t = location.hash + "";
        u.pushIntoGoldlogQueue("aplus.on", [window, "hashchange", function() {
            t !== location.hash && (t = location.hash + "",
            e && "function" == typeof e && e(t, c))
        }
        ])
    }
    function i(e) {
        function t(t) {
            var n = "";
            if (t) {
                n = t && t.arguments && t.arguments.length > 2 && t.arguments[2];
                var r = /^http|https/.test(n) ? n : location.protocol + "//" + location.host + n;
                location.href !== r && setTimeout(function() {
                    e && "function" == typeof e && e(n, p)
                }, 0)
            } else
                n = location.pathname + location.search,
                n !== a && setTimeout(function() {
                    e && "function" == typeof e && e(n, p)
                }, 0);
            a = n
        }
        var a = location.pathname + location.search;
        if (history.pushState && window.addEventListener) {
            u.pushIntoGoldlogQueue("aplus.on", [window, "pushState", function(e) {
                t(e)
            }
            ]),
            u.pushIntoGoldlogQueue("aplus.on", [window, "popstate", function() {
                t()
            }
            ]);
            var n = l.getMetaCnt("aplus-track-replacestate") || aplus.getMetaInfo("aplus-track-replacestate");
            n && u.pushIntoGoldlogQueue("aplus.on", [window, "replaceState", function(e) {
                t(e)
            }
            ])
        }
    }
    var s = a(18);
    t.addParamsIntoUrl = r,
    t.getParamFromUrl = n,
    t.getSPMFromUrl = function(e) {
        return n("spm", e)
    }
    ,
    t.getQueryFromUrl = function() {
        function e(e) {
            for (var t = decodeURIComponent(e), a = t.indexOf("?") + 1, n = t.substring(a), r = Object.create(null), o = n.split("&"), i = 0; i < o.length; i++)
                r[o[i].split("=")[0]] = decodeURIComponent(o[i].split("=")[1]);
            return r
        }
        try {
            var t = location && location.hash
              , n = location && location.search;
            if (t && t.indexOf("?") !== -1)
                return e(t);
            if (n && n.indexOf("?") !== -1)
                return e(n)
        } catch (e) {
            var r = a(20);
            r().w("url error === ", location.href)
        }
    }
    ;
    var u = a(21)
      , l = a(22)
      , c = "hash"
      , p = "history";
    t.watchHashChange = o,
    t.watchHistoryChange = i
}
, function(e, t, a) {
    "use strict";
    var n = a(19);
    e.exports = function(e, t) {
        if (n(e) && void 0 === e.length)
            for (var a in e)
                e.hasOwnProperty(a) && t(a, e[a], e);
        else {
            var r, o = e.length;
            for (r = 0; r < o; r++) {
                var i = t(e[r], r);
                if ("break" === i)
                    break
            }
        }
    }
}
, function(e, t) {
    e.exports = function(e) {
        if ("object" != typeof e || null === e)
            return !1;
        for (var t = e; null !== Object.getPrototypeOf(t); )
            t = Object.getPrototypeOf(t);
        return Object.getPrototypeOf(e) === t
    }
}
, function(e, t) {
    var a = "[APLUS] -- ";
    e.exports = function() {
        function e() {
            this.setDebug = function(e) {
                n = e
            }
            ,
            this.i = function() {
                if (n)
                    try {
                        "string" == typeof arguments[0] && (arguments[0] = a + arguments[0]),
                        console.info.apply(console, arguments)
                    } catch (e) {}
            }
            ,
            this.e = function() {
                if (n)
                    try {
                        "string" == typeof arguments[0] && (arguments[0] = a + arguments[0]),
                        console.error.apply(console, arguments)
                    } catch (e) {}
            }
            ,
            this.w = function() {
                if (n)
                    try {
                        "string" == typeof arguments[0] && (arguments[0] = a + arguments[0]),
                        console.warn.apply(console, arguments)
                    } catch (e) {}
            }
            ,
            this.v = function() {
                try {
                    "string" == typeof arguments[0] && (arguments[0] = a + arguments[0]),
                    console.warn.apply(console, arguments)
                } catch (e) {}
            }
            ,
            this.tip_w = function(e) {
                try {
                    console.log("%c " + a + e, "background:red; padding: 4px; padding-right: 8px; border-radius: 4px; color: #fff;")
                } catch (e) {}
            }
            ,
            this.repeat = function(e) {
                for (var t = e; t.length < 86; )
                    t += e;
                return t
            }
        }
        var t = null
          , n = !1;
        return function() {
            return null === t && (t = new e),
            t
        }
    }()
}
, function(e, t, a) {
    "use strict";
    var n = a(2);
    t.pushIntoGoldlogQueue = function(e, t) {
        var a = n.getGlobalValue("aplus_queue")
          , r = n.getGlobalValue("aplus")
          , o = e.split(".")
          , i = r[o[1]]
          , s = i ? i[o[2]] : null;
        r && 2 === o.length && i ? i.apply(r, t) : 3 === o.length && s ? s.apply(i, t) : a.push({
            action: e,
            arguments: t
        })
    }
}
, function(e, t, a) {
    "use strict";
    function n(e) {
        return i = i || document.getElementsByTagName("head")[0],
        s && !e ? s : i ? s = i.getElementsByTagName("meta") : []
    }
    function r(e, t) {
        var a, r, o, i = n(), s = i.length;
        for (a = 0; a < s; a++)
            r = i[a],
            u.tryToGetAttribute(r, "name") === e && (o = u.tryToGetAttribute(r, t || "content"));
        return o || ""
    }
    function o(e) {
        var t = {
            isonepage: "-1",
            urlpagename: ""
        }
          , a = e.qGet();
        if (a && a.hasOwnProperty("isonepage_data"))
            t.isonepage = a.isonepage_data.isonepage,
            t.urlpagename = a.isonepage_data.urlpagename;
        else {
            var n = r("isonepage") || "-1"
              , o = n.split("|");
            t.isonepage = o[0],
            t.urlpagename = o[1] ? o[1] : ""
        }
        return t
    }
    var i, s, u = a(23);
    t.getMetaTags = n,
    t.getMetaCnt = r,
    t.getOnePageInfo = o
}
, function(e, t) {
    "use strict";
    t.tryToGetAttribute = function(e, t) {
        return e && e.getAttribute ? e.getAttribute(t) || "" : ""
    }
    ;
    var a = function(e, t, a) {
        if (e && e.setAttribute)
            try {
                e.setAttribute(t, a)
            } catch (e) {}
    };
    t.tryToSetAttribute = a,
    t.tryToRemoveAttribute = function(e, t) {
        if (e && e.removeAttribute)
            try {
                e.removeAttribute(t)
            } catch (n) {
                a(e, t, "")
            }
    }
}
, function(e, t, a) {
    "use strict";
    var n = a(2)
      , r = "UT4Aplus"
      , o = "Umeng4Aplus";
    t.isNative4Aplus = function() {
        var e = n.getGlobalValue("aplus")
          , t = e.getMetaInfo("aplus-toUT")
          , a = e.aplusBridgeName;
        return a === r && t === r || a === o
    }
    ,
    t.haveNativeFlagInUA = function() {
        var e = n.getGlobalValue("aplus")
          , t = e.aplusBridgeName;
        if (!t && "boolean" != typeof t && navigator && navigator.userAgent) {
            var a = new RegExp([r, o].join("|"),"i")
              , i = navigator.userAgent.match(a);
            t = !!i && i[0],
            e.aplusBridgeName = t
        }
        return !!t
    }
}
, function(e, t, a) {
    "use strict";
    var n = a(2)
      , r = function() {
        function e() {
            var e, t = [], a = !0;
            for (var n in f)
                f.hasOwnProperty(n) && (a = !1,
                e = f[n] || "",
                t.push(c(n) + u + c(e)));
            window.name = a ? r : o + c(r) + s + t.join(l)
        }
        function t(e, t, a) {
            e && (e.addEventListener ? e.addEventListener(t, a, !1) : e.attachEvent && e.attachEvent("on" + t, function(t) {
                a.call(e, t)
            }))
        }
        var a = n.getGlobalValue("nameStorage");
        if (a)
            return a;
        var r, o = "nameStorage:", i = /^([^=]+)(?:=(.*))?$/, s = "?", u = "=", l = "&", c = encodeURIComponent, p = decodeURIComponent, f = {}, g = {};
        return function(e) {
            if (e && 0 === e.indexOf(o)) {
                var t = e.split(/[:?]/);
                t.shift(),
                r = p(t.shift()) || "";
                for (var a, n, s, u = t.join(""), c = u.split(l), g = 0, d = c.length; g < d; g++)
                    a = c[g].match(i),
                    a && a[1] && (n = p(a[1]),
                    s = p(a[2]) || "",
                    f[n] = s)
            } else
                r = e || ""
        }(window.name),
        g.setItem = function(t, a) {
            t && "undefined" != typeof a && (f[t] = String(a),
            e())
        }
        ,
        g.getItem = function(e) {
            return f.hasOwnProperty(e) ? f[e] : null
        }
        ,
        g.removeItem = function(t) {
            f.hasOwnProperty(t) && (f[t] = null,
            delete f[t],
            e())
        }
        ,
        g.clear = function() {
            f = {},
            e()
        }
        ,
        g.valueOf = function() {
            return f
        }
        ,
        g.toString = function() {
            var e = window.name;
            return 0 === e.indexOf(o) ? e : o + e
        }
        ,
        t(window, "beforeunload", function() {
            e()
        }),
        g
    }();
    t.nameStorage = r
}
, function(e, t, a) {
    "use strict";
    function n(e) {
        var t, a, n, r = e.length, o = {};
        for (v._microscope_data = o,
        t = 0; t < r; t++)
            a = e[t],
            "microscope-data" === m.tryToGetAttribute(a, "name") && (n = m.tryToGetAttribute(a, "content"),
            f.parseSemicolonContent(n, o),
            v.is_head_has_meta_microscope_data = !0);
        v._microscope_data_params = c.obj2param(o),
        v.ms_data_page_id = o.pageId,
        v.ms_data_shop_id = o.shopId,
        v.ms_data_instance_id = o.siteInstanceId,
        v.ms_data_siteCategoryId = o.siteCategory,
        v.ms_prototype_id = o.prototypeId,
        v.site_instance_id_or_shop_id = v.ms_data_instance_id || v.ms_data_shop_id,
        v._atp_beacon_data = {},
        v._atp_beacon_data_params = ""
    }
    function r(e) {
        var t, a = function() {
            var t;
            return document.querySelector && (t = document.querySelector("meta[name=data-spm]")),
            d(e, function(e) {
                "data-spm" === m.tryToGetAttribute(e, "name") && (t = e)
            }),
            t
        }, n = a();
        return n && (t = m.tryToGetAttribute(n, "data-spm-protocol")),
        t
    }
    function o(e) {
        var t = e.isonepage || "-1"
          , a = t.split("|")
          , n = a[0]
          , r = a[1] ? a[1] : "";
        e.isonepage_data = {
            isonepage: n,
            urlpagename: r
        }
    }
    function i() {
        if (document) {
            var e = h.getMetaTags();
            n(e),
            d(e, function(e) {
                var t = m.tryToGetAttribute(e, "name");
                if (/^aplus/.test(t) && (v[t] = h.getMetaCnt(t),
                t === b))
                    try {
                        u = v[t] = JSON.parse(h.getMetaCnt(t))
                    } catch (e) {}
            }),
            d(y, function(e) {
                v[e] = h.getMetaCnt(e)
            }),
            v.spm_protocol = r(e),
            u && (v = p.assign(v, u));
            var t, a, i = ["aplus-rate-ahot"], s = i.length;
            for (t = 0; t < s; t++)
                a = i[t],
                v[a] = parseFloat(v[a]);
            o(v)
        }
        return l = v || {},
        v
    }
    function s(e) {
        g.logger({
            msg: "please do not repeat setPriorityMetaInfo " + e
        })
    }
    var u, l, c = a(27), p = a(28), f = a(29), g = a(34), d = a(18), m = a(23), h = a(22), _ = a(2), v = {}, b = "aplus-x-settings", y = ["ahot-aplus", "isonepage", "spm-id", "data-spm", "microscope-data"];
    t.getInfo = i,
    t.qGet = function() {
        return l || i()
    }
    ,
    t.setMetaInfo = function(e, t) {
        if (l || (l = {}),
        "object" == typeof u && u[e])
            return s(e),
            !0;
        if (e === b) {
            if (u)
                s(e);
            else
                try {
                    u = "object" == typeof t ? t : JSON.parse(t),
                    l = p.assign(l, u)
                } catch (e) {
                    console && console.log(e)
                }
            return !0
        }
        return "aplus-exinfo" === e ? l[e] = "object" == typeof t ? t : c.param2obj(t) : l[e] = t,
        !0
    }
    ;
    var A = function(e) {
        return l || (l = {}),
        l[e] || ""
    };
    t.getMetaInfo = A,
    t.appendMetaInfo = function(e, t) {
        var a = _.getGlobalValue("aplus");
        if (e && t) {
            var n, r = function(a) {
                try {
                    var n = "string" == typeof t ? JSON.parse(t) : t;
                    s(e, p.assign(a, n))
                } catch (e) {}
            }, o = function(a) {
                try {
                    var n = "string" == typeof t ? JSON.parse(t) : t;
                    s(e, a.concat(n))
                } catch (e) {}
            }, i = function(e) {
                e.constructor === Array ? o(e) : r(e)
            }, s = function(e, t) {
                a.setMetaInfo(e, t, {
                    from: "appendMetaInfo"
                })
            }, u = function(a) {
                var n = c.param2obj(t);
                s(e, p.assign(a, n))
            }, l = a.getMetaInfo(e);
            if ("aplus-exinfo" === e && (u(l),
            n = !0),
            l)
                if ("object" == typeof l)
                    i(l),
                    n = !0;
                else
                    try {
                        var f = JSON.parse(l);
                        "object" == typeof f && (i(f),
                        n = !0)
                    } catch (e) {}
            n || s(e, t)
        }
    }
}
, function(e, t) {
    "use strict";
    function a(e, t) {
        var a, r, o, i = [], s = e.length;
        for (o = 0; o < s; o++) {
            a = e[o][0],
            r = e[o][1];
            var u = 0 === a.indexOf(n)
              , l = u || t ? r : encodeURIComponent(r);
            i.push(u ? l : a + "=" + l)
        }
        return i.join("&")
    }
    t.arr2obj = function(e) {
        var t, a, n, r = {}, o = e.length;
        for (n = 0; n < o; n++)
            t = e[n][0],
            a = e[n][1],
            r[t] = a;
        return r
    }
    ,
    t.param2obj = function(e) {
        if ("object" == typeof e)
            return e;
        var t = {};
        if (!e || "string" != typeof e)
            return t;
        for (var a = e.split("&"), n = 0; n < a.length; n++) {
            var r = a[n]
              , o = r.indexOf("=")
              , i = r.split("=")
              , s = r.length;
            if (2 === i.length)
                t[i[0]] = i[1] || "";
            else if (o > 0) {
                var u = r.slice(0, o)
                  , l = r.slice(o + 1, s) || "";
                t[u] = l
            } else
                t[i[0]] = ""
        }
        return t
    }
    ;
    var n = "::-plain-::";
    t.s_plain_obj = n,
    t.arr2param = a,
    t.obj2param = function(e, t) {
        var a, r, o, i = [];
        for (a in e)
            a && e.hasOwnProperty(a) && ("object" == typeof e[a] ? (r = "" + this.obj2param(e[a]),
            o = r) : (r = "" + e[a],
            o = a + "=" + r),
            t ? i.push(o) : i.push(0 === a.indexOf(n) ? r : o));
        return i.join("&")
    }
    ,
    t.encodeGokeyValue = function(e) {
        return e
    }
}
, function(e, t, a) {
    "use strict";
    t.assign = a(13),
    t.makeCacheNum = function() {
        return Math.floor(268435456 * Math.random()).toString(16)
    }
    ,
    t.isStartWith = function(e, t) {
        return 0 === e.indexOf(t)
    }
    ,
    t.isEndWith = function(e, t) {
        if (String.prototype.endsWith)
            return e.endsWith(t);
        var a = e.length
          , n = t.length;
        return a >= n && e.substring(a - n) === t
    }
    ,
    t.any = function(e, t) {
        var a, n = e.length;
        for (a = 0; a < n; a++)
            if (t(e[a]))
                return !0;
        return !1
    }
    ,
    t.isNumber = function(e) {
        return "number" == typeof e
    }
    ,
    t.isNaN = function(e) {
        return isNaN ? isNaN(e) : e !== e
    }
    ,
    t.isContain = function(e, t) {
        return e.indexOf(t) > -1
    }
    ;
    var n = function(e) {
        var t, a = e.constructor === Array ? [] : {};
        if ("object" == typeof e) {
            if (JSON && JSON.parse)
                t = JSON.stringify(e),
                a = JSON.parse(t);
            else
                for (var r in e)
                    a[r] = "object" == typeof e[r] ? n(e[r]) : e[r];
            return a
        }
    };
    t.cloneDeep = n;
    var r = function() {
        for (var e, t = /[?&]([^=#]+)=([^&#]*)/g, a = window.location.href, n = {}; e = t.exec(a); )
            n[e[1]] = e[2];
        return n
    };
    t.getUrlParams = r;
    var o = function(e) {
        if (!e)
            return !0;
        for (var t in e)
            if (Object.prototype.hasOwnProperty.call(e, t))
                return !1;
        return !0
    };
    t.isEmptyObject = o
}
, function(e, t, a) {
    "use strict";
    var n = a(30)
      , r = a(31)
      , o = a(2)
      , i = a(28)
      , s = a(32)
      , u = a(33);
    e.exports = {
        tryToDecodeURIComponent: function(e, t) {
            var a = t || "";
            if (e)
                try {
                    a = decodeURIComponent(e)
                } catch (e) {}
            return a
        },
        parseSemicolonContent: function(e, t, a) {
            t = t || {};
            var r, o, i = e.split(";"), s = i.length;
            for (r = 0; r < s; r++) {
                o = i[r].split("=");
                var u = n.trim(o.slice(1).join("="));
                t[n.trim(o[0]) || ""] = a ? u : this.tryToDecodeURIComponent(u)
            }
            return t
        },
        nodeListToArray: function(e) {
            var t, a;
            try {
                return t = [].slice.call(e)
            } catch (r) {
                t = [],
                a = e.length;
                for (var n = 0; n < a; n++)
                    t.push(e[n]);
                return t
            }
        },
        getLsCna: function(e, t) {
            if (r.get && r.test()) {
                var a = ""
                  , n = r.get(e);
                if (n) {
                    var o = n.split("_") || [];
                    a = t ? o.length > 1 && t === o[0] ? o[1] : "" : o.length > 1 ? o[1] : ""
                }
                return decodeURIComponent(a)
            }
            return ""
        },
        setLsCna: function(e, t, a) {
            a && r.set && r.test() && r.set(e, t + "_" + encodeURIComponent(a))
        },
        getLsImpv: function(e, t) {
            if (r.get && r.test()) {
                var a = ""
                  , n = r.get(e);
                if (n) {
                    var o = n.split("||") || [];
                    a = t ? o.length > 1 && t === o[0] ? o[1] : "" : o.length > 1 ? o[1] : ""
                }
                return decodeURIComponent(a)
            }
            return ""
        },
        setLsImpv: function(e, t, a) {
            a && r.set && r.test() && r.set(e, t + "||" + encodeURIComponent(a))
        },
        setLsRemoteCfg: function(e, t, a) {
            if (a && r.set && r.test()) {
                var n = i.cloneDeep(a);
                "object" == typeof n && (n = JSON.stringify(n)),
                r.set(e, t + "||" + encodeURIComponent(n))
            }
        },
        getLsRemoteCfg: function(e, t) {
            if (r.get && r.test()) {
                var a = ""
                  , n = r.get(e);
                if (n) {
                    var o = n.split("||") || [];
                    a = t ? o.length > 1 && t === o[0] ? o[1] : "" : o.length > 1 ? o[1] : ""
                }
                return s.parse(decodeURIComponent(a))
            }
            return ""
        },
        getUrl: function(e) {
            var t = o.getGlobalValue("aplus")
              , n = a(3)
              , r = e || "//log.mmstat.com/eg.js";
            try {
                var i = t.getMetaInfo(n.APLUS_PV_DOMAIN);
                i = u.fixDomain(i).replace(/\/\w+.gif$/, ""),
                r = i + "/eg.js"
            } catch (e) {}
            return r
        }
    }
}
, function(e, t) {
    "use strict";
    function a(e) {
        return "string" == typeof e ? e.replace(/^\s+|\s+$/g, "") : ""
    }
    t.trim = a
}
, function(e, t) {
    "use strict";
    e.exports = {
        set: function(e, t) {
            try {
                return localStorage.setItem(e, t),
                !0
            } catch (e) {
                return !1
            }
        },
        get: function(e) {
            try {
                return localStorage.getItem(e)
            } catch (e) {
                return ""
            }
        },
        test: function() {
            var e = "grey_test_key";
            try {
                return localStorage.setItem(e, 1),
                localStorage.removeItem(e),
                !0
            } catch (e) {
                return !1
            }
        },
        remove: function(e) {
            localStorage.removeItem(e)
        }
    }
}
, function(e, t) {
    t.stringfy = function(e) {
        if (e)
            try {
                return JSON.stringify(e)
            } catch (e) {}
        return ""
    }
    ,
    t.parse = function(e) {
        if (e)
            try {
                return JSON.parse(e)
            } catch (e) {}
        return null
    }
    ,
    t.parseToArray = function(e) {
        if (e)
            try {
                return JSON.parse(e)
            } catch (e) {}
        return []
    }
}
, function(e, t, a) {
    "use strict";
    function n(e) {
        var t, a, n, o = [], i = e.length;
        for (n = 0; n < i; n++)
            t = e[n][0],
            a = e[n][1],
            o.push(0 === t.indexOf(r) ? a : t + "=" + encodeURIComponent(a));
        return o.join("&")
    }
    var r = "::-plain-::";
    t.mkPlainKey = function() {
        return r + Math.random()
    }
    ,
    t.s_plain_obj = r,
    t.mkPlainKeyForExparams = function(e) {
        var t = e || r;
        return t + "exparams"
    }
    ,
    t.arr2param = n,
    t.param2arr = function(e) {
        for (var t, a = e.split("&"), n = 0, r = a.length, o = []; n < r; n++)
            t = a[n].split("="),
            o.push([t.shift(), t.join("=")]);
        return o
    }
    ,
    t.arr2obj = function(e) {
        var t, a, n, r = {}, o = e.length;
        for (n = 0; n < o; n++)
            t = e[n][0],
            a = e[n][1],
            r[t] = a;
        return r
    }
    ,
    t.jsonLikeStr2JSON = function(e) {
        if (!e || "string" != typeof e)
            return {};
        for (var t = e.replace(/['"{}]+/g, ""), a = t.split(","), n = [], r = 0; r < a.length; r++)
            n.push(a[r].split(":"));
        var o = this.arr2obj(n);
        return o
    }
    ,
    t.fixDomain = function(e) {
        return e.indexOf("https://") !== -1 || e.indexOf("http://") !== -1 ? e : (e = (/^\/\//.test(e) ? "" : "//") + e,
        /^\/\/(\d+\.){3,}\d+/.test(e) ? "http:" + e : "https:" + e)
    }
    ,
    t.getAppKey = function() {
        var e = a(2).getGlobalValue("aplus");
        return e.getMetaInfo("appkey") || e.getMetaInfo("appId") || e.getMetaInfo("appKey")
    }
    ,
    t.checkEmptyObj = function(e) {
        return "object" != typeof e || 0 === Object.keys(e).length
    }
    ,
    t.checkDomain = function(e) {
        var t = new RegExp(/^((http|https|''):\/\/)?([a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+(:[0-9]{1,5})*)$/)
          , n = (e.match(t) || [])[0];
        if (!e || !n) {
            var r = a(20);
            return r().tip_w(r().repeat("!")),
            r().tip_w("trackDomain error, please check aplus-rhost-v setting, current value is: " + e || "undefined"),
            r().tip_w("we accept these three patterns:"),
            r().tip_w("eg1: https://test-qtracking-xxx.com:port, port is optional"),
            r().tip_w("eg2: http://test-qtracking-xxx.com:port, port is optional"),
            r().tip_w("eg3: test-qtracking-xxx.com:port, port is optional"),
            r().tip_w(r().repeat("!")),
            !1
        }
        return !0
    }
    ,
    t.checkOpenid = function(e) {
        if (!e) {
            var t = a(20);
            return t().tip_w(t().repeat("!")),
            t().tip_w("QT need an unique id as QT's deviceid!!"),
            t().tip_w("setting examples: aplus_queue.push({action: 'aplus.setMetaInfo', arguments: ['_anony_id', xxxxxx]});"),
            t().tip_w("referrence document: https://t.tb.cn/1dTHjTTQF0UjOTNHiCkaCS"),
            t().tip_w(t().repeat("!")),
            !1
        }
        return !0
    }
    ;
    var o = a(18);
    t.mapEventSampleRates = function(e) {
        var t = [];
        return o(e, function(e) {
            e.eventIds && e.eventIds.length > 0 && o(e.eventIds, function(a) {
                t.push({
                    eventId: a,
                    samplingRate: e.samplingRate
                })
            })
        }),
        t
    }
}
, function(e, t, a) {
    "use strict";
    var n = a(35)
      , r = "[APLUS] -- ";
    t.logger = function(e) {
        e || (e = {});
        var t = e.level || "warn";
        console && console[t] && console[t](r + e.msg)
    }
    ,
    t.log = function() {
        var e = n && n.getMetaInfo("debug");
        e && console.log.apply(console, [r].concat(Array.prototype.slice.apply(arguments)))
    }
    ,
    t.debugLog = function(e) {
        var t = a(2).getGlobalValue("aplus");
        t && t.aplusDebug && this.logger(e)
    }
}
, function(e, t, a) {
    "use strict";
    function n() {
        return i = f || {},
        f
    }
    function r() {
        return i || n()
    }
    function o(e, t) {
        return i || (i = {}),
        "aplus-inject-record-gokey" === e && (m("the API aplus-inject-record-gokey is deprecated, if needed please concat APLUS SDK supporter"),
        p.record("/inject.record.gokey", "OTHER", "")),
        i[e] = t,
        !0
    }
    var i, s = a(36), u = a(27), l = a(2), c = a(3), p = l.getGlobalValue(c.APLUS), f = {}, g = "object", d = "string";
    t.getInfo = n,
    t.qGet = r,
    t.setMetaInfo = o;
    var m = function(e) {
        try {
            console && console.error(e)
        } catch (e) {}
    };
    t.catchException = m;
    var h = function(e) {
        return i || (i = {}),
        i[e] || ""
    };
    t.getMetaInfo = h;
    var _ = function(e) {
        var t = h("aplus-inject-record-gokey");
        return "function" == typeof t ? t(e) : e.gokey
    };
    t.getUserInjectGokey = _;
    var v = function(e, t) {
        if (e && t) {
            var a, n = function(a) {
                try {
                    var n = typeof t === d ? JSON.parse(t) : t;
                    i(e, Object.assign({}, a, n))
                } catch (e) {}
            }, r = function(a) {
                try {
                    var n = typeof t === d ? JSON.parse(t) : t;
                    i(e, a.concat(n))
                } catch (e) {}
            }, o = function(e) {
                e.constructor === Array ? r(e) : n(e)
            }, i = function(e, t) {
                b(e, t, {
                    from: "appendMetaInfo"
                })
            }, s = h(e);
            if ("aplus-exinfo" === e && (i(e, Object.assign({}, s, u.param2obj(t))),
            a = !0),
            "aplus-page-properties" === e) {
                var l = t;
                if (s)
                    for (var c in s)
                        t[c] ? l[c] = Object.assign({}, s[c], t[c]) : l[c] = s[c];
                i(e, l),
                a = !0
            }
            if (s)
                if (typeof s === g)
                    o(s),
                    a = !0;
                else
                    try {
                        var p = JSON.parse(s);
                        typeof p === g && (o(p),
                        a = !0)
                    } catch (e) {}
            a || i(e, t)
        }
    };
    t.appendMetaInfo = v;
    var b = function(e, t) {
        var a, n, i = "OVERWRITE", u = i;
        if ("object" == typeof e ? (a = e.metaName,
        n = e.metaValue,
        u = e.mode || i) : (a = e,
        n = t),
        u !== i)
            return v(a, n);
        if (o(a, n)) {
            var c = l.getGoldlogVal("_$") || {};
            c.meta_info = r();
            var p = l.setGoldlogVal("_$", c)
              , f = ["setMetaInfo", a, n, {}];
            return s.doPubMsg(f),
            s.doCachePubs(f),
            p
        }
    };
    t._setMetaInfo = b
}
, function(e, t, a) {
    "use strict";
    var n = a(2)
      , r = "function"
      , o = function() {
        var e = n.getGlobalValue("aplus")
          , t = e.aplus_pubsub || {}
          , a = typeof t.publish === r;
        return a ? t : ""
    };
    t.doPubMsg = function(e) {
        var t = o();
        t && typeof t.publish === r && t.publish.apply(t, e)
    }
    ,
    t.doCachePubs = function(e) {
        var t = o();
        t && typeof t.cachePubs === r && t.cachePubs.apply(t, e)
    }
    ,
    t.doSubMsg = function(e, t) {
        var a = o();
        a && typeof a.subscribe === r && a.subscribe(e, t)
    }
}
, function(e, t, a) {
    "use strict";
    var n = a(25).nameStorage;
    t.getRefer = function(e) {
        return document.referrer || n.getItem(e.REFERRER) || ""
    }
}
, function(e, t, a) {
    "use strict";
    e.exports = function() {
        return {
            run: function() {
                a(39)()
            }
        }
    }
}
, function(e, t, a) {
    "use strict";
    function n(e) {
        var t, a = window.aplus || (window.aplus = {}), n = !1, c = function() {
            n || (r.wrap(function() {
                t = l.getAutoClkConfig();
                var e;
                t && t.length > 0 && (e = u.create({
                    autoClkConfig: t
                }),
                e.init(),
                s.watch_clk()),
                a.aplus_pubsub.subscribe("setMetaInfo", function(a, n, r) {
                    if ("aplus-auto-clk" === a) {
                        var o = l.getAutoClkConfig(n);
                        if (JSON.stringify(o) === JSON.stringify(t))
                            return;
                        t = o,
                        s.clear(),
                        r || (r = {
                            from: "setMetaInfo"
                        }),
                        e && e.clear(r),
                        e && e.clearDom({
                            autoClkConfig: t
                        }, r),
                        n && (e ? e.reset({
                            autoClkConfig: t
                        }, r) : (e = u.create({
                            autoClkConfig: t
                        }),
                        e.init()),
                        s.watch_clk())
                    }
                })
            }, "do_init"),
            n = !0)
        };
        setTimeout(function() {
            n || i().w("aplus_ac_init failed! please check whether aplusJs is loaded correctly!")
        }, 5e3);
        var p = a._$ || {}
          , f = window.g_SPM || {};
        "complete" === p.status && f.spm && c();
        var g = window.aplus_queue || (window.aplus_queue = []);
        g.push({
            action: o.SUBSCRIBE,
            arguments: ["aplusReady", function(e) {
                "complete" === e && c("aplusReady")
            }
            ]
        }),
        "function" == typeof e && e()
    }
    var r = a(40)
      , o = a(3)
      , i = a(20)
      , s = a(41)
      , u = a(51)
      , l = a(50);
    e.exports = function() {
        var e = window.aplus || window.goldlog || (window.aplus = {});
        e._aplus_ac || (e._aplus_ac = {
            status: "init",
            elementSelectorSizeMap: {}
        },
        n(function() {
            e._aplus_ac.status = "complete"
        }))
    }
}
, function(e, t, a) {
    "use strict";
    var n = a(2)
      , r = function(e, t) {
        var a = n.getGlobalValue("aplus_queue", []);
        a.push({
            action: "aplus._aplus_cplugin_track_deb.monitor",
            arguments: [{
                key: "APLUS_PLUGIN_DEBUG",
                title: "aplus_core",
                msg: ["_error_:methodName=" + t + ",params=" + JSON.stringify(e)],
                type: "updateMsg",
                description: t || "aplus_core"
            }]
        })
    }
      , o = function(e, t, a) {
        var r = n.getGlobalValue("aplus_queue", []);
        r.push({
            action: ["aplus", "_aplus_cplugin_m", t].join("."),
            arguments: [e, a]
        })
    };
    t.do_tracker_jserror = function(e, t) {
        var a = "do_tracker_jserror";
        o(e, a, t),
        r(e, a);
        var i = n.getGlobalValue("aplus");
        i && i.aplusDebug && console && console.warn(e)
    }
    ,
    t.wrap = function(e) {
        if ("function" == typeof e)
            try {
                e()
            } catch (e) {
                r({
                    msg: e.message || e
                }, "exception")
            } finally {}
    }
}
, function(e, t, a) {
    "use strict";
    var n = a(42)
      , r = a(23)
      , o = a(43)
      , i = a(2)
      , s = a(28)
      , u = a(44)
      , l = a(18)
      , c = a(27)
      , p = a(45)
      , f = a(47)
      , g = a(50)
      , d = window
      , m = ["iframe", "html", "body", "head"]
      , h = g.DATA_APLUS_AC_KEY
      , _ = function(e) {
        var t = []
          , a = e ? r.tryToGetAttribute(e, h) : "";
        if (a) {
            var n = i.getGoldlogVal("_aplus_ac") || {}
              , o = n._acHashMap || {};
            u(o, function(e, n) {
                l(n, function(e) {
                    e.hash_value === a && t.push(e.clkConfig)
                })
            })
        }
        return {
            clkConfigs: t,
            el: e
        }
    }
      , v = function(e) {
        var t = _(e);
        if (t && t.clkConfigs && t.clkConfigs.length > 0)
            return t;
        for (; (e = e.parentNode) && n.indexof(m, e.tagName ? e.tagName.toLowerCase() : "html") === -1; )
            if (t = _(e),
            t && t.clkConfigs && t.clkConfigs.length > 0)
                return t
    }
      , b = function(e) {
        e = e || d.event;
        var t = e.target || e.srcElement
          , a = v(t) || {}
          , n = a.clkConfigs;
        a && n && a.el && l(n, function(n) {
            var r = n;
            t = a.el;
            var o = aplus.spm_ab ? aplus.spm_ab.join(".") : "0.0"
              , i = o + ".0.0"
              , u = "";
            d.g_SPM && "function" == typeof d.g_SPM.spm && (i = d.g_SPM.spm(t));
            var l = []
              , p = {}
              , m = f.fillPropsData(r, t, p);
            m = f.fillFilterData(r, t, p),
            m = f.fillSpmData(r, t, p),
            m = s.assign(m, f.getDataTrackerParams(t));
            var h = g.getAutoClkUserFn();
            if (h) {
                var _ = f.autoUserFnHandler(h, t, r.elementSelector, r, e);
                if ("object" == typeof _)
                    "object" == typeof _.userdata && (m = s.assign(m, _.userdata)),
                    _.spm && (i = _.spm),
                    _.scm && (u = _.scm);
                else if (_ === !1)
                    return
            }
            if ("on" === aplus.getMetaInfo("aplus-track-combine"))
                l.push("clkdata=" + JSON.stringify([{
                    exargs: m,
                    scm: u,
                    spm: i,
                    aplusContentId: ""
                }]));
            else
                for (var v in m)
                    l.push(v + "=" + m[v]);
            l.push("_is_auto_clk=1");
            var b = r.method || "POST";
            "on" !== aplus.getMetaInfo("aplus-track-combine") && l.push("is_auto=1"),
            "$$_APLUS" !== r.logkey && (aplus.globalConfig.isUM ? aplus_queue.push({
                action: "aplus.record",
                arguments: [r.logkey, "CLK", c.param2obj(l.join("&")), b]
            }) : aplus_queue.push({
                action: "aplus.record",
                arguments: [r.logkey, "CLK", l.join("&"), b]
            }))
        })
    };
    t.watch_clk = function() {
        o.isTouch() ? p.on(document, "tap", b) : p.on(document, "mousedown", b)
    }
    ,
    t.clear = function() {
        o.isTouch() ? p.un(document, "tap", b) : p.un(document, "mousedown", b)
    }
}
, function(e, t) {
    "use strict";
    function a(e) {
        return Array.isArray ? Array.isArray(e) : /Array/.test(Object.prototype.toString.call(e))
    }
    function n(e) {
        var t = [];
        if (a(e))
            for (var r = 0; r < e.length; r++) {
                var o = e[r];
                a(o) ? (e[r] = n(o),
                t = t.concat(e[r])) : t.push(o)
            }
        return t
    }
    function r(e, t) {
        try {
            return e.find(t)
        } catch (r) {
            for (var a = 0; a < e.length; a++) {
                var n = t(e[a]);
                if (n)
                    return e[a]
            }
        }
    }
    t.indexof = function(e, t) {
        var a = -1;
        try {
            a = e.indexOf(t)
        } catch (r) {
            for (var n = 0; n < e.length; n++)
                e[n] === t && (a = n)
        } finally {
            return a
        }
    }
    ,
    t.itemMatch = function(e, t) {
        var a = !1;
        try {
            if (!this.isArray(e))
                return a;
            a = e.some(function(e) {
                return e && e.length > 0 && t.indexOf(e) !== -1
            })
        } catch (r) {
            for (var n = 0; n < e.length; n++)
                if (t.indexOf(e[n]) !== -1) {
                    a = !0;
                    break
                }
        }
        return a
    }
    ,
    t.isArray = a,
    t.flat = n,
    t.find = r
}
, function(e, t, a) {
    "use strict";
    function n() {
        return i || (i = document.getElementById("beacon-aplus") || document.getElementById("tb-beacon-aplus")),
        i
    }
    function r(e) {
        var t = n()
          , a = s.tryToGetAttribute(t, "cspx");
        e && a && (e.nonce = a)
    }
    var o, i, s = a(23), u = a(3), l = a(18);
    t.getCurrentNode = n,
    t.addScript = function(e, t, a) {
        var i = "script"
          , s = document.createElement(i);
        s.type = "text/javascript",
        s.async = !0;
        var l = n()
          , c = l && l.hasAttribute("crossorigin");
        c && (s.crossOrigin = "anonymous");
        var p = u.HTTPS === location.protocol ? t || e : e;
        0 === p.indexOf("//") && (p = u.HTTPS + p),
        s.src = p,
        a && (s.id = a),
        r(s);
        var f = document.getElementsByTagName(i)[0];
        o = o || document.getElementsByTagName("head")[0],
        f ? f.parentNode.insertBefore(s, f) : o && o.appendChild(s)
    }
    ,
    t.loadScript = function(e, t) {
        function a(e) {
            n.onreadystatechange = n.onload = n.onerror = null,
            n = null,
            t(e)
        }
        var n = document.createElement("script");
        if (o = o || document.getElementsByTagName("head")[0],
        n.async = !0,
        "onload"in n)
            n.onload = a;
        else {
            var i = function() {
                /loaded|complete/.test(n.readyState) && a()
            };
            n.onreadystatechange = i,
            i()
        }
        if (n.onerror = function(e) {
            a(e)
        }
        ,
        n.src = e,
        r(n),
        aplus.globalConfig.isUM) {
            n.id = "aplus-setting",
            n.type = "text/javascript",
            n.charset = "utf-8";
            var s = document.getElementsByTagName("script");
            s && s.length > 0 && l(s, function(e) {
                e && "aplus-setting" === e.id && o.removeChild(e)
            })
        }
        o.appendChild(n)
    }
    ,
    t.isTouch = function() {
        return "ontouchend"in document.createElement("div")
    }
}
, function(e, t) {
    "use strict";
    e.exports = function(e, t) {
        if (Object && Object.keys)
            for (var a = Object.keys(e), n = a.length, r = 0; r < n; r++) {
                var o = a[r];
                t(o, e[o])
            }
        else
            for (var i in e)
                t(i, e[i])
    }
}
, function(e, t, a) {
    "use strict";
    function n() {
        var e = aplus._$ || {}
          , t = e.meta_info || {}
          , a = t.aplus_ctap || {};
        return a && "function" == typeof a.on ? a : null
    }
    function r(e, t) {
        var a = n();
        a ? a.on(e, t) : s.on(e, t)
    }
    function o(e, t) {
        var a = n();
        a ? a.un(e, t) : s.un(e, t)
    }
    var i = !!document.attachEvent
      , s = a(46);
    t.on = function(e, t, a) {
        return "tap" === t ? void r(e, a) : void (i ? e.attachEvent(t, a) : e.addEventListener(t, a))
    }
    ,
    t.un = function(e, t, a) {
        return "tap" === t ? void o(e, a) : void (i ? e.detachEvent(t, a) : e.removeEventListener(t, a))
    }
}
, function(e, t) {
    "use strict";
    function a(e, t) {
        return e + Math.floor(Math.random() * (t - e + 1))
    }
    function n(e, t, a) {
        var n = document.createEvent("HTMLEvents");
        if (n.initEvent(t, !0, !0),
        "object" == typeof a)
            for (var r in a)
                n[r] = a[r];
        e.dispatchEvent(n)
    }
    function r(e) {
        var t = document.documentElement;
        0 === Object.keys(c).length && (t.addEventListener(g, o, !1),
        t.addEventListener(f, i, !1),
        t.addEventListener(m, i, !1));
        for (var a = 0; a < e.changedTouches.length; a++) {
            var n = e.changedTouches[a]
              , r = {};
            for (var s in n)
                r[s] = n[s];
            var u = {
                startTouch: r,
                startTime: Date.now(),
                status: d,
                element: e.srcElement || e.target
            };
            c[n.identifier] = u
        }
    }
    function o(e) {
        for (var t = 0; t < e.changedTouches.length; t++) {
            var a = e.changedTouches[t]
              , n = c[a.identifier];
            if (!n)
                return;
            var r = a.clientX - n.startTouch.clientX
              , o = a.clientY - n.startTouch.clientY
              , i = Math.sqrt(Math.pow(r, 2) + Math.pow(o, 2));
            (n.status === d || "pressing" === n.status) && i > 10 && (n.status = "panning")
        }
    }
    function i(e) {
        for (var t = 0; t < e.changedTouches.length; t++) {
            var a = e.changedTouches[t]
              , r = a.identifier
              , s = c[r];
            s && (s.status === d && e.type === f && (s.timestamp = Date.now(),
            n(s.element, h, {
                touch: a,
                touchEvent: e
            })),
            delete c[r])
        }
        var u = document.documentElement;
        0 === Object.keys(c).length && (u.removeEventListener(g, o, !1),
        u.removeEventListener(f, i, !1),
        u.removeEventListener(m, i, !1))
    }
    function s(e) {
        e.__fixTouchEvent || (e.addEventListener(p, function() {}, !1),
        e.__fixTouchEvent = !0)
    }
    function u() {
        if (!l) {
            var e = document.documentElement;
            e.addEventListener(p, r, !1),
            l = !0
        }
    }
    var l = !1
      , c = {}
      , p = "touchstart"
      , f = "touchend"
      , g = "touchmove"
      , d = "tapping"
      , m = "touchcancel"
      , h = "aplus_tap" + a(1, 1e5);
    e.exports = {
        on: function(e, t) {
            u(),
            e && e.addEventListener && t && (s(e),
            e.addEventListener(h, t._aplus_tap_callback = function(e) {
                t(e, e.target)
            }
            , !1))
        },
        un: function(e, t) {
            e && e.removeEventListener && t && t._aplus_tap_callback && e.removeEventListener(h, t._aplus_tap_callback, !1)
        }
    }
}
, function(e, t, a) {
    "use strict";
    function n(e, t, a) {
        var n = t.hash_value
          , r = i.getGoldlogVal(a) || {};
        if (r.hash_value || (r.hash_value = {}),
        r.hash_value[e] || (r.hash_value[e] = o.Map ? new o.Map : {}),
        o.Map) {
            var s = r.hash_value[e].get(n);
            s ? ++s : s = 1,
            r.hash_value[e].set(n, s)
        } else
            r.hash_value[e][n] ? ++r.hash_value[e][n] : r.hash_value[e][n] = 1;
        i.setGoldlogVal(a, r)
    }
    var r = document
      , o = window
      , i = a(2)
      , s = a(20)
      , u = a(48)
      , l = a(18)
      , c = a(44)
      , p = a(49)
      , f = a(50)
      , g = function(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    };
    t.isArray = g,
    t.getXPath = function(e) {
        var t, a, n, o, i, s, u = r.getElementsByTagName("*");
        for (t = []; e && 1 == e.nodeType; e = e.parentNode)
            if (e.id) {
                for (s = e.id,
                o = 0,
                a = 0; a < u.length; a++)
                    if (i = u[a],
                    i.id && i.id == s) {
                        o++;
                        break
                    }
                if (t.unshift(e.tagName.toLowerCase() + '[@id="' + s + '"]'),
                1 == o)
                    return t.unshift("/"),
                    t.join("/")
            } else {
                for (a = 1,
                n = e.previousSibling; n; n = n.previousSibling)
                    n.tagName == e.tagName && a++;
                t.unshift(e.tagName.toLowerCase() + "[" + a + "]")
            }
        return t.length ? "/" + t.join("/") : null
    }
    ;
    var d = function(e, t) {
        if (t && 0 !== t.length || (t = []),
        e && e.length > 0)
            for (var a = 0; a < e.length; a++)
                t.push(e[a]);
        return t
    };
    t.nodelistToArray = d,
    t.getElements = function(e, t) {
        var a = t || r
          , n = [];
        if (a.querySelectorAll)
            n = d(a.querySelectorAll(e.elementSelector) || []);
        else
            for (var o = document.getElementsByTagName(e.tag), i = e.filter.split("="), s = i.length > 0 ? i[0].trim() : "", u = i.length > 1 ? i[1].trim() : "", l = 0; l < o.length; l++) {
                var c = o[l]
                  , p = c.getAttribute(s)
                  , f = c.hasAttribute(s);
                !f || u && u !== p || n.push(c)
            }
        return n
    }
    ;
    var m = function() {
        return /aplusDebug=true/.test(location.search)
    }
      , h = m();
    t.IS_DEBUG = h,
    t.fillPropsData = function(e, t, a) {
        a || (a = {});
        try {
            var n = e.props || [];
            if (n && g(n) && n.length > 0)
                for (var r = 0; r < n.length; r++)
                    if (t && t.getAttribute) {
                        var o = n[r]
                          , i = t.getAttribute(o);
                        if (void 0 !== typeof i && null !== i && "" !== i) {
                            var u = o.toLowerCase().replace(/^data-/, "");
                            aplus.globalConfig && aplus.globalConfig.isUM ? a[u] = i : a[u] = encodeURIComponent(i)
                        }
                    }
        } catch (e) {
            s().w(e && e.message)
        }
        return a
    }
    ;
    var _ = function(e, t, a) {
        a || (a = {});
        try {
            var n = e.filter || ""
              , r = n.split("=");
            if (g(r) && r[1])
                a[r[0]] = r[1];
            else if (r[0] && t && t.getAttribute) {
                var o = t.getAttribute(r[0]) || "";
                void 0 !== typeof o && null !== o && "" !== o && (a[r[0]] = o)
            }
        } catch (e) {
            s().w(e && e.message)
        }
        return a
    };
    t.fillFilterData = _;
    var v = "data-tracker-params";
    t.getDataTrackerParams = function(e) {
        var t = {};
        try {
            var a = _({
                filter: v
            }, e);
            a && a[v] && (t = JSON.parse(a[v]))
        } catch (e) {}
        return t
    }
    ,
    t.fillSpmData = function(e, t, a) {
        a || (a = {});
        var n, r, o;
        return n = e && e.spmB ? e.spmB : document.body.dataset && document.body.dataset.pagename,
        r = e && e.spmC ? e.spmC : t.parentNode && t.parentNode.dataset && t.parentNode.dataset.spmc,
        o = e && e.spmD ? e.spmD : t.dataset && t.dataset.spmd,
        t.dataset && t.dataset.aplusVtPos && (o += "_" + t.dataset.aplusVtPos),
        n && (a.spmB = n),
        r && (a.spmC = r),
        o && (a.spmD = o),
        a
    }
    ;
    var b = function(e) {
        return !!/^POST|GET$/i.test(e)
    };
    t.isMethod = b;
    var y = function(e) {
        var t = !!/^\d+$/.test(e);
        return !!(t && parseInt(e) > 0)
    };
    t.isPkgSize = y,
    t.filterExpConfigRequestCfg = function(e) {
        var t = f.getDefaultRequestCfg() || {};
        try {
            var a = e || {};
            b(a.method) && (t.method = a.method),
            y(a.pkgSize) && (t.pkgSize = parseInt(a.pkgSize))
        } catch (e) {
            s().w(e && e.message)
        }
        return t
    }
    ;
    var A = function(e) {
        var t = e.split("&")
          , a = {};
        return t.length > 0 && l(t, function(e) {
            var t = e.split("=");
            2 === t.length && (a[t[0]] = p.tryToEncodeURIComponent(t[1]))
        }),
        a
    };
    t.autoUserFnHandler = function(e, t, a, n, r) {
        var o = {
            userdata: {},
            spm: "",
            scm: ""
        };
        try {
            var i = e(t, a, n, r);
            i && ("string" == typeof i ? o.userdata = A(i) : "object" == typeof i && "object" == typeof i.userdata && (c(i.userdata, function(e, t) {
                aplus.globalConfig && aplus.globalConfig.isUM ? o.userdata[e] = t : o.userdata[e] = p.tryToEncodeURIComponent(t)
            }),
            o.spm = i.spm,
            o.scm = i.scm))
        } catch (e) {
            s().w(e)
        }
        return o
    }
    ;
    var P = function(e, t) {
        var a = "";
        if (e && t) {
            var n = [e.getAttribute(t.filter)]
              , r = t.props || [];
            if (r)
                for (var o = 0; o < r.length; o++)
                    n.push(e.getAttribute(r[o]));
            a = n.join("_")
        }
        return a
    }
      , w = function(e) {
        var t = e.getAttribute("data-spm-anchor-id");
        if (t) {
            var a = t.split(".");
            return {
                a: a[0],
                b: a[1],
                c: a[2],
                d: a[3],
                e: a[4]
            }
        }
    };
    t.getSpmObj = w,
    t.getElementHash = function(e, t) {
        var a = {};
        "aplus_webvt" !== e.source && (a = w(t.ele) || (window.g_SPM ? window.g_SPM.getParam(t.ele) : {}));
        var n = ""
          , r = "x" + t.index;
        if (a.a && a.b && a.c && a.d) {
            var o = /^i/.test(a.d) ? r : a.d;
            n = a.a + "_" + a.b + "_" + a.c + "_" + o,
            a.e && (n += "_" + a.e)
        } else
            n = r,
            aplus.pvid && (n += aplus.pvid);
        t.ignore_attr || (n += e.logkey + "_",
        n += e.elementSelector + "_",
        n += P(t.ele, e));
        var i = r + "_" + u.hash(n);
        return i
    }
    ,
    t.filterUnloadAttr = function(e) {
        return e && (e = e.replace(/(href|style|data-spm-anchor-id)=[\'|\"][\w|\W|\.]+[\'|\"]/, ""),
        e = e.replace(/\s\>/g, ">"),
        e = e.replace(new RegExp(f.DATA_APLUS_AE_KEY + "=[\\'|\\\"]\\w+[\\'|\\\"]"), ""),
        e = e.replace(new RegExp(f.DATA_APLUS_AC_KEY + "=[\\'|\\\"]\\w+[\\'|\\\"]"), "")),
        e
    }
    ;
    var S = function(e, t) {
        for (var a, n = 0, r = e.length; n < r; ) {
            var o = e[n] || {};
            if (o.hash_value === t.hash_value)
                return e[n] = t,
                a = !0,
                e;
            n++
        }
        return a || e.push(t),
        e
    }
      , T = function(e, t, a, r) {
        if (a || (a = "ADD"),
        e && "object" == typeof t) {
            var o = i.getGoldlogVal(r) || {}
              , s = o._acHashMap || {}
              , u = s[e] || []
              , l = function() {
                for (var e = 0, a = u.length; e < a; ) {
                    var n = u[e] || {};
                    if (n.hash_value === t.hash_value)
                        return e;
                    e++
                }
                return -1
            }
              , c = l();
            "ADD" === a && c === -1 ? (u.push(t),
            n(e, t, r)) : "CLEAR" === a && c > -1 ? u.splice(c, 1) : "UPDATE" === a && (u = S(u, t)),
            s[e] = u,
            o._acHashMap = s,
            i.setGoldlogVal(r, o)
        }
    };
    t.updateExpHashMap = function(e, t, a) {
        T(e, t, a, "_aplus_auto_exp")
    }
    ,
    t.updateClkHashMap = function(e, t, a) {
        T(e, t, a, "_aplus_ac")
    }
    ;
    var E = function() {
        return (new Date).getTime()
    };
    t.throttle = function(e, t, a) {
        var n, r, o, i, s = 0;
        a || (a = {});
        var u = function() {
            s = a.leading === !1 ? 0 : E(),
            n = null,
            i = e.apply(r, o),
            n || (r = o = null)
        }
          , l = function() {
            var l = E();
            s || a.leading !== !1 || (s = l);
            var c = t - (l - s);
            return r = this,
            o = arguments,
            c <= 0 || c > t ? (n && (clearTimeout(n),
            n = null),
            s = l,
            i = e.apply(r, o),
            n || (r = o = null)) : n || a.trailing === !1 || (n = setTimeout(u, c)),
            i
        };
        return l.cancel = function() {
            clearTimeout(n),
            s = 0,
            n = r = o = null
        }
        ,
        l
    }
    ,
    t.checkIsInHashMap = function(e) {
        var t = i.getGoldlogVal(e.aplusKey) || {}
          , a = t.hash_value || {}
          , n = a[e.logkey] || (o.Map ? new o.Map : {})
          , r = n && n.get ? n.get(e.hash_value) : n[e.hash_value];
        if (r > 1)
            return !0;
        for (var s = t._acHashMap || {}, u = s[e.logkey] || [], l = u.length, c = 0; c < l; c++)
            if (u[c].hash_value === e.hash_value)
                return !0;
        return !1
    }
    ,
    t.setRecordSuccess = function(e, t) {
        try {
            var a = e ? e.element : {}
              , n = e.hash_value || "";
            a && a.setAttribute && a.setAttribute(t, n)
        } catch (e) {}
    }
}
, function(e, t) {
    "use strict";
    t.hash = function(e, t) {
        var a, n, r = 1315423911, o = t || r;
        for (a = e.length - 1; a >= 0; a--)
            n = e.charCodeAt(a),
            o ^= (o << 5) + n + (o >> 2);
        var i = (2147483647 & o).toString(16);
        return i
    }
}
, function(e, t) {
    "use strict";
    t.tryToEncodeURIComponent = function(e) {
        var t = e || "";
        if (e)
            try {
                t = encodeURIComponent(decodeURIComponent(e))
            } catch (e) {}
        return t
    }
}
, function(e, t, a) {
    "use strict";
    function n(e) {
        return aplus && aplus.getMetaInfo ? aplus.getMetaInfo(e) : o.getMetaCnt(e)
    }
    var r = a(42)
      , o = a(22)
      , i = a(20);
    t.DATA_APLUS_AE_KEY = "data-aplus-ae",
    t.DATA_APLUS_AC_KEY = "data-aplus-clk",
    t.DATA_APLUS_SPM_ANCHOR_ID_KEY = "data-spm-anchor-id",
    t.DATA_APLUS_VT_ITEM_INDEX_KEY = "data-aplus-vt-pos",
    t.LOOP_TIME = 1e3,
    t.getDefaultRequestCfg = function() {
        return {
            method: "POST",
            pkgSize: 10
        }
    }
    ;
    var s = function(e) {
        var t = e;
        try {
            var a = n("aplus-auto-exp-visible");
            a && (t = parseFloat(a)),
            t <= 0 && (t = e)
        } catch (a) {
            t = e
        } finally {
            return t
        }
    };
    t.AUTO_AT_VIEW_RATE = s(.3);
    var u = function(e) {
        var t = e;
        try {
            var a = n("aplus-auto-exp-duration")
              , r = parseInt(a);
            r + "" != "NaN" && (t = r)
        } catch (e) {} finally {
            return t
        }
    };
    t.EXP_DURATION = u(300);
    var l = function(e, t) {
        var a, o = [], s = [];
        try {
            a = t || n(e);
            var u = [];
            if (a && "string" == typeof a)
                try {
                    u = JSON.parse(a)
                } catch (e) {
                    u = JSON.parse(a.replace(/'/g, '"'))
                }
            else
                "object" == typeof a && a.constructor === Array && (u = a);
            if (u && u.constructor === Array)
                for (var l = 0; l < u.length; l++) {
                    var c = u[l] || {}
                      , p = c.logkey || ""
                      , f = c.tag ? c.tag : ""
                      , g = c.filter
                      , d = c.cssSelector
                      , m = d || f && g;
                    if (!p || !m)
                        throw new Error("meta " + e + " config error, " + JSON.stringify(c));
                    g = "string" == typeof g ? g.split("=") : [];
                    var h = f;
                    if (g.length >= 2 ? h += "[" + g.shift() + '="' + decodeURIComponent(g.join("")) + '"]' : 1 == g.length && g[0] && (h += "[" + decodeURIComponent(g[0]) + "]"),
                    d && (h += d),
                    c.elementSelector = h,
                    r.indexof(s, h) > -1)
                        throw new Error("meta " + e + " config error, tag_filter_cssSelector " + h + " repeated");
                    s.push(h),
                    o.push(c)
                }
        } catch (e) {
            i().w(e)
        } finally {
            return o
        }
    };
    t.getAutoExpConfig = function(e) {
        return l("aplus-auto-exp", e) || []
    }
    ,
    t.getAutoExpUserFn = function() {
        var e = n("aplus-auto-exp-userfn");
        if (e) {
            var t = window[e] || e;
            if ("function" == typeof t)
                return t
        }
        return null
    }
    ,
    t.isThrottleWatchDom = function() {
        var e = !1;
        try {
            e = "throttle" === n("aplus-auto-exp-watchdom")
        } catch (e) {}
        return e
    }
    ,
    t.getAutoClkConfig = function(e) {
        return l("aplus-auto-clk", e) || []
    }
    ,
    t.getAutoClkUserFn = function() {
        var e = n("aplus-auto-clk-userfn");
        if (e) {
            var t = window[e] || e;
            if ("function" == typeof t)
                return t
        }
        return null
    }
}
, function(e, t, a) {
    "use strict";
    var n = a(10)
      , r = a(40)
      , o = a(20)
      , i = a(45)
      , s = a(47)
      , u = a(50)
      , l = window
      , c = document
      , p = n.extend({
        eachElements: function(e, t) {
            for (var a = t.logkey || "", n = 0; n < e.length; n++) {
                var r = e[n];
                t._pos_id && !r.getAttribute("data-aplus-pos-id") && r.setAttribute("data-aplus-pos-id", t._pos_id);
                var o = r.getAttribute(u.DATA_APLUS_AC_KEY);
                if (!(o && o.indexOf("_") > 0)) {
                    isNaN(parseInt(o)) && (o = aplus._aplus_ac.elementSelectorSizeMap[t.elementSelector]++,
                    r.setAttribute(u.DATA_APLUS_AC_KEY, o)),
                    !aplus.globalConfig.isAli && t.spmB && t.spmC && t.spmD && (r.setAttribute(u.DATA_APLUS_SPM_ANCHOR_ID_KEY, [t.spmB, t.spmC, t.spmD + "_" + (n + 1)].join(".")),
                    r.setAttribute(u.DATA_APLUS_VT_ITEM_INDEX_KEY, "" + (n + 1)));
                    var i = s.getElementHash(t, {
                        ignore_attr: !1,
                        index: o,
                        ele: r
                    });
                    if (!s.checkIsInHashMap({
                        logkey: a,
                        hash_value: i,
                        aplusKey: "_aplus_ac"
                    })) {
                        var l = {
                            clkConfig: t,
                            hash_value: i,
                            element: r,
                            status: 0,
                            elementSelector: t.elementSelector
                        };
                        s.updateClkHashMap(a, l, "ADD"),
                        s.setRecordSuccess(l, u.DATA_APLUS_AC_KEY)
                    }
                }
            }
        },
        handler_dom_change: function() {
            for (var e = this, t = e.autoClkConfig || [], a = 0; a < t.length; a++) {
                var n = t[a];
                aplus._aplus_ac.elementSelectorSizeMap[n.elementSelector] || (aplus._aplus_ac.elementSelectorSizeMap[n.elementSelector] = 1);
                var r = s.getElements(n, c);
                e.eachElements(r, n)
            }
        },
        throttle_handler_dom_change: s.throttle(function() {
            this.handler_dom_change()
        }, 200),
        init_observer: function(e, t) {
            var a = new e(function() {
                r.wrap(function() {
                    var e = aplus._aplus_ac || {};
                    ++e.observer_times,
                    t()
                }, "init_observer_init_elements")
            }
            )
              , n = {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0
            };
            a.observe(c.body, n),
            s.IS_DEBUG && o().w("aplus_ac init MutationObserver success!"),
            this._observer = a
        },
        init_watch_dom: function() {
            var e = this
              , t = aplus._aplus_ac || {};
            e._loop_observer = setTimeout(function() {
                "blur" !== t.current_win_status ? (s.IS_DEBUG && o().w("watch_dom in ac LOOP_TIME is " + u.LOOP_TIME + "ms total: " + ++t.watch_times),
                e.throttle_handler_dom_change(),
                e.init_watch_dom()) : t.watch_dom_running = !1
            }, u.LOOP_TIME)
        },
        onFocusHandler: function() {
            var e = this
              , t = aplus._aplus_ac || {};
            t.current_win_status = "focus",
            t.watch_dom_running || e.init_watch_dom()
        },
        onBlurHandler: function() {
            var e = aplus._aplus_ac || {};
            e.current_win_status = "blur"
        },
        onVisibilityChange: function() {
            var e = this;
            "visible" === c.visibilityState ? e.onFocusHandler() : "hidden" === c.visibilityState && e.onBlurHandler()
        },
        addAllListener: function() {
            var e = this
              , t = aplus._aplus_ac || {};
            t.watch_times = 0,
            t.watch_dom_running = !0,
            e.init_watch_dom(),
            l.WindVane && c.addEventListener && (i.on(c, "WV.Event.APP.Active", e.onFocusHandler, !1),
            i.on(c, "WV.Event.APP.Background", e.onBlurHandler, !1)),
            "hidden"in c ? i.on(l, "visibilitychange", e.onVisibilityChange) : (i.on(l, "blur", e.onBlurHandler),
            i.on(l, "focus", e.onFocusHandler))
        },
        removeAllListener: function() {
            var e = this;
            l.WindVane && c.removeEventListener && (i.un(c, "WV.Event.APP.Active", e.onFocusHandler, !1),
            i.un(c, "WV.Event.APP.Background", e.onBlurHandler, !1)),
            "hidden"in c ? i.un(l, "visibilitychange", e.onVisibilityChange) : (i.un(l, "blur", e.onBlurHandler),
            i.un(l, "focus", e.onFocusHandler))
        },
        init: function() {
            var e = this
              , t = aplus._aplus_ac || {};
            e.throttle_handler_dom_change();
            var a = l.MutationObserver || l.WebKitMutationObserver || l.MozMutationObserver;
            a ? (t.observer_times = 0,
            e.init_observer(a, function() {
                e.throttle_handler_dom_change()
            })) : e.addAllListener()
        },
        clearDom: function(e, t) {
            var a = this.autoClkConfig || [];
            if (t && "appendMetaInfo" !== t.from)
                for (var n = 0; n < a.length; n++)
                    try {
                        for (var r = a[n].elementSelector, o = c.querySelectorAll(r), i = 0; i < o.length; i++)
                            o[i].setAttribute(u.DATA_APLUS_AC_KEY, "")
                    } catch (e) {}
            this.autoClkConfig = e && e.autoClkConfig
        },
        clear: function(e) {
            if (!e || "appendMetaInfo" !== e.from) {
                var t = aplus._aplus_ac || {};
                t._acHashMap && (t._acHashMap = {}),
                t.hash_value && (t.hash_value = {}),
                aplus._aplus_ac = t,
                this._loop_observer && (clearTimeout(this._loop_observer),
                this._loop_observer = null),
                this._observer ? this._observer.disconnect() : this.removeAllListener()
            }
        },
        reset: function(e, t) {
            this.clearDom(e, t),
            this.init()
        }
    });
    e.exports = p
}
, function(e, t, a) {
    "use strict";
    e.exports = function() {
        return {
            run: function() {
                a(53)()
            }
        }
    }
}
, function(e, t, a) {
    "use strict";
    function n() {
        o = a(54),
        i = a(window.IntersectionObserver ? 56 : 58),
        s = a(59),
        u = a(50)
    }
    function r(e) {
        var t, a = window.aplus || (window.aplus = {}), n = !1, r = !1, f = function(e) {
            r || (r = e,
            n || (l.wrap(function() {
                t = u.getAutoExpConfig() || [],
                p().w("aplus-auto-exp metaValue init: " + JSON.stringify(t));
                var e;
                t && t.length > 0 && (s.watch_data_change(),
                i.watch_exposure_change(t),
                e = o.create({
                    isThrottleWatch: u.isThrottleWatchDom(),
                    autoExpConfig: t
                }),
                e.init({
                    type: "init"
                })),
                a.aplus_pubsub.subscribe("setMetaInfo", function(a, n, r) {
                    if ("aplus-auto-exp" === a) {
                        p().w("aplus-auto-exp metaVaue change: " + JSON.stringify(n));
                        var l = u.getAutoExpConfig(n);
                        if (JSON.stringify(l) === JSON.stringify(t))
                            return;
                        if (t = l,
                        s.clear(),
                        r || (r = {
                            from: "setMetaInfo"
                        }),
                        i.clear(t, r),
                        e && e.clear(r),
                        n && t && t.length > 0) {
                            s.watch_data_change(),
                            i.watch_exposure_change(t);
                            var c = {
                                isThrottleWatch: u.isThrottleWatchDom(),
                                autoExpConfig: t
                            };
                            e ? e.reset(c, r) : (e = o.create(c),
                            e.init({
                                type: "init"
                            }))
                        }
                    }
                })
            }, "do_init"),
            n = !0))
        };
        setTimeout(function() {
            n || p().w("aplus_auto_exp_init failed! please check whether aplusJs is loaded correctly!")
        }, 5e3);
        var g = a._$ || {}
          , d = window.g_SPM || {};
        "complete" === g.status && d.spm && f();
        var m = window.aplus_queue || (window.aplus_queue = []);
        m.push({
            action: c.SUBSCRIBE,
            arguments: ["aplusReady", function(e) {
                "complete" === e && f("aplusReady")
            }
            ]
        }),
        "function" == typeof e && e()
    }
    var o, i, s, u, l = a(40), c = a(3), p = a(20);
    e.exports = function() {
        var e = window.aplus || window.goldlog || (window.aplus = {});
        e._aplus_auto_exp || (e._aplus_auto_exp = {
            tags: {},
            status: "init",
            exp_times: 0,
            elementSelectorSizeMap: {}
        },
        n(),
        r(function() {
            e._aplus_auto_exp.status = "complete"
        }))
    }
}
, function(e, t, a) {
    "use strict";
    var n = a(10)
      , r = a(40)
      , o = a(20)
      , i = a(45)
      , s = a(55)
      , u = a(47)
      , l = a(50)
      , c = window
      , p = document
      , f = n.extend({
        eachElements: function(e, t) {
            for (var a = t.logkey || "", n = 0; n < e.length; n++) {
                var r = e[n]
                  , o = r.getAttribute(l.DATA_APLUS_AE_KEY);
                if (!(o && o.indexOf("_") > 0)) {
                    isNaN(parseInt(o)) && (o = aplus._aplus_auto_exp.elementSelectorSizeMap[t.elementSelector]++,
                    r.setAttribute(l.DATA_APLUS_AE_KEY, o)),
                    !aplus.globalConfig.isAli && t.spmB && t.spmC && t.spmD && (r.setAttribute(l.DATA_APLUS_SPM_ANCHOR_ID_KEY, [t.spmB, t.spmC, t.spmD + "_" + (n + 1)].join(".")),
                    r.setAttribute(l.DATA_APLUS_VT_ITEM_INDEX_KEY, "" + (n + 1)));
                    var i = u.getElementHash(t, {
                        ignore_attr: !1,
                        index: o,
                        ele: r
                    })
                      , c = s.checkIsRecord(r, i, l.DATA_APLUS_AE_KEY)
                      , p = u.checkIsInHashMap({
                        logkey: a,
                        hash_value: i,
                        aplusKey: "_aplus_auto_exp"
                    });
                    if (!c && !p) {
                        var f = {
                            expConfig: t,
                            hash_value: i,
                            element: r,
                            status: 0,
                            elementSelector: t.elementSelector
                        };
                        u.updateExpHashMap(a, f, "ADD")
                    }
                }
            }
        },
        handler_dom_change: function(e, t) {
            try {
                for (var a = this.autoExpConfig || [], n = 0; n < a.length; n++) {
                    var r = a[n]
                      , i = u.getElements(r, p);
                    aplus._aplus_auto_exp.elementSelectorSizeMap[r.elementSelector] || (aplus._aplus_auto_exp.elementSelectorSizeMap[r.elementSelector] = 1),
                    this.eachElements(i, r)
                }
                aplus.aplus_pubsub.publish("APLUS_AE_DOM_CHANGE", t || {})
            } catch (e) {
                o().w(e && e.message)
            }
        },
        throttle_handler_dom_change: u.throttle(function(e, t) {
            this.handler_dom_change(e, t)
        }, 200),
        init_watch_dom: function() {
            var e = this
              , t = aplus._aplus_auto_exp || {};
            e._loop_observer = setTimeout(function() {
                "blur" !== t.current_win_status ? (o().w("watch_dom in ae LOOP_TIME is " + l.LOOP_TIME + "ms total: " + ++t.watch_times),
                e.handler_dom_change(null, {
                    type: "polling"
                }),
                e.init_watch_dom()) : t.watch_dom_running = !1
            }, l.LOOP_TIME)
        },
        onFocusHandler: function() {
            var e = this
              , t = aplus._aplus_auto_exp || {};
            t.current_win_status = "focus",
            t.watch_dom_running || e.init_watch_dom()
        },
        onBlurHandler: function() {
            var e = aplus._aplus_auto_exp || {};
            e.current_win_status = "blur"
        },
        onVisibilityChange: function() {
            var e = this;
            "visible" === p.visibilityState ? e.onFocusHandler() : "hidden" === p.visibilityState && e.onBlurHandler()
        },
        addAllListener: function() {
            var e = this
              , t = aplus._aplus_auto_exp || {};
            t.watch_times = 0,
            t.watch_dom_running = !0,
            e.init_watch_dom(),
            c.WindVane && p.addEventListener && (i.on(p, "WV.Event.APP.Active", e.onFocusHandler, !1),
            i.on(p, "WV.Event.APP.Background", e.onBlurHandler, !1)),
            "hidden"in p ? i.on(c, "visibilitychange", e.onVisibilityChange) : (i.on(c, "blur", e.onBlurHandler),
            i.on(c, "focus", e.onFocusHandler))
        },
        removeAllListener: function() {
            var e = this;
            c.WindVane && p.removeEventListener && (i.un(p, "WV.Event.APP.Active", e.onFocusHandler, !1),
            i.un(p, "WV.Event.APP.Background", e.onBlurHandler, !1)),
            "hidden"in p ? i.un(c, "visibilitychange", e.onVisibilityChange) : (i.un(c, "blur", e.onBlurHandler),
            i.un(c, "focus", e.onFocusHandler))
        },
        init_observer: function(e, t) {
            var a = ["IFRAME", "BODY", "OBJECT", "SCRIPT", "NOSCRIPT", "LINK", "STYLE", "#comment"]
              , n = ["class", "style"]
              , i = function(e) {
                return "characterData" === e.type ? [e.target] : "attributes" === e.type && n.indexOf(e.attributeName) > -1 ? [e.target] : "childList" !== e.type ? [] : void 0;
            }
              , s = function(e, n) {
                if (e && e.length > 0)
                    for (var o = 0; o < e.length; o++) {
                        var i = e[o] || {}
                          , s = i.nodeName
                          , u = aplus._aplus_auto_exp.tags || {};
                        u[s] || (u[s] = 0),
                        u[s]++,
                        aplus._aplus_auto_exp.tags = u,
                        a.indexOf(s) === -1 && r.wrap(function() {
                            var e = aplus._aplus_auto_exp || {};
                            ++e.observer_times;
                            var a = n.attributeName;
                            t(i, {
                                type: n.type + (a ? "_" + a : "")
                            })
                        }, "init_observer_init_elements")
                    }
            };
            this._observer || (this._observer = new e(function(e) {
                if (e && e.length > 0)
                    for (var t = 0; t < e.length; t++) {
                        var a = e[t] || {}
                          , n = u.nodelistToArray(a.addedNodes || []);
                        n = u.nodelistToArray(i(a), n),
                        s(n, a)
                    }
            }
            ));
            var l = {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0
            };
            this._observer.observe(p.body, l),
            u.IS_DEBUG && o().w("aplus_auto_exp init MutationObserver success!")
        },
        init: function(e) {
            var t = this
              , a = aplus._aplus_auto_exp || {};
            e && "reset" !== e.type && !a.hash_value && (a.hash_value = {}),
            t.handler_dom_change(null, {
                type: "aplus_init"
            });
            var n = c.MutationObserver || c.WebKitMutationObserver || c.MozMutationObserver;
            n ? (a.observer_times = 0,
            t.init_observer(n, function(e, a) {
                var n = e && e.parentElement ? e.parentElement : e;
                t.throttle_handler_dom_change(n, a)
            })) : t.addAllListener()
        },
        clear: function(e) {
            if (!e || "appendMetaInfo" !== e.from) {
                var t = aplus._aplus_auto_exp || {};
                t._acHashMap && (t._acHashMap = {}),
                t.hash_value && (t.hash_value = {}),
                aplus._aplus_auto_exp = t,
                this._loop_observer && (clearTimeout(this._loop_observer),
                this._loop_observer = null),
                this._observer ? (this._observer.takeRecords(),
                this._observer.disconnect()) : this.removeAllListener()
            }
        },
        clearDom: function(e, t) {
            var a = this.autoExpConfig || [];
            if (t && "appendMetaInfo" !== t.from)
                for (var n = 0; n < a.length; n++)
                    try {
                        for (var r = a[n].elementSelector, o = p.querySelectorAll(r), i = 0; i < o.length; i++)
                            o[i].setAttribute(l.DATA_APLUS_AE_KEY, "")
                    } catch (e) {}
            this.autoExpConfig = e && e.autoExpConfig ? e.autoExpConfig : []
        },
        reset: function(e, t) {
            this.clearDom(e, t),
            this.init({
                type: "reset"
            })
        }
    });
    e.exports = f
}
, function(e, t) {
    "use strict";
    var a = document
      , n = function(e, t) {
        return t.x >= e.pLeftTop[0] && t.x <= e.pRightBottom[0] && t.y >= e.pLeftTop[1] && t.y <= e.pRightBottom[1]
    }
      , r = function(e, t) {
        var a = 0
          , r = n(e, t)
          , o = n(e, {
            x: t.x + t.width,
            y: t.y
        })
          , i = n(e, {
            x: t.x,
            y: t.y + t.height
        })
          , s = n(e, {
            x: t.x + t.width,
            y: t.y + t.height
        })
          , u = function() {
            var e = 0;
            return r && s && (e = t.size / t.size),
            e
        }
          , l = function() {
            var a = 0
              , n = 0;
            return r && o && !i && !s ? (a = t.width,
            n = e.pLeftBottom[1] - t.y) : !r && o && !i && s ? (a = e.pLeftTop[0] - t.x,
            n = t.y) : !r && !o && i && s ? (a = t.width,
            n = t.height - Math.abs(e.pLeftTop[1] - t.y)) : r && !o && i && !s && (a = e.pRightTop[0] - t.x,
            n = t.height),
            t.size > 0 ? Math.abs(a * n) / t.size : 0
        }
          , c = function() {
            var a = 0
              , n = 0;
            return !r || o || i || s ? r || !o || i || s ? r || o || !i || s ? r || o || i || !s || (a = e.pLeftTop[0] - t.x,
            n = e.pLeftTop[1] - t.y) : (a = e.pRightTop[0] - t.x,
            n = e.pRightTop[1] - t.y) : (a = e.pLeftBottom[0] - t.x,
            n = e.pLeftBottom[1] - t.y) : (a = e.pRightBottom[0] - t.x,
            n = e.pRightBottom[1] - t.y),
            t.size > 0 ? Math.abs(a * n) / t.size : 0
        };
        return a = u(),
        a > 0 ? a : (a = l(),
        a > 0 ? a : (a = c(),
        a > 0 ? a : a))
    };
    t.wrapViewabilityRate = function(e, t, a) {
        var n = 0;
        if (e)
            for (var o = 0; o < e.length; o++)
                if (n = r(e[o], t),
                n < a)
                    return !1;
        return n
    }
    ;
    var o = function(e) {
        return "number" == typeof e && NaN !== e
    }
      , i = function(e) {
        var t = {};
        return e && ("function" == typeof e.getBoundingClientRect && (t = e.getBoundingClientRect() || {}),
        o(t.x) || o(t.left) && (t.x = t.left),
        o(t.y) || o(t.top) && (t.y = t.top),
        o(t.width) || (t.width = e.offsetWidth),
        o(t.height) || (t.height = e.offsetHeight)),
        t
    };
    t.getElementPosition = i,
    t.getWinPositions = function(e) {
        var t = [];
        if (e && "function" == typeof document.querySelector) {
            var n = document.querySelector(e);
            if (n) {
                var r = i(n) || {};
                o(r.x) && o(r.y) && o(r.width) && o(r.height) && t.push({
                    pLeftTop: [r.x, r.y],
                    pRightTop: [r.x + r.width, r.y],
                    pLeftBottom: [r.x, r.y + r.height],
                    pRightBottom: [r.x + r.width, r.y + r.height]
                })
            }
        }
        var s = a.documentElement
          , u = a.body
          , l = s.clientWidth || u.offsetWidth || 0
          , c = s.clientHeight || u.offsetHeight || 0;
        return t.push({
            pLeftTop: [0, 0],
            pRightTop: [l, 0],
            pLeftBottom: [0, c],
            pRightBottom: [l, c]
        }),
        t
    }
    ,
    t.checkIsRecord = function(e, t, a) {
        var n;
        try {
            if (e && e.getAttribute) {
                var r = e.getAttribute(a) || "";
                n = t ? r === t : !!r
            }
        } catch (e) {}
        return n
    }
    ,
    t.getViewabilityRateInWindow = function(e, t, a) {
        var n = 0;
        if (e)
            for (var r = 0; r < e.length; r++)
                if (n = t / e[r].size,
                n >= a)
                    return n;
        return n
    }
}
, function(e, t, a) {
    "use strict";
    function n(e, t, a) {
        var n = p.getWinPositions()
          , r = 0
          , o = u.getGoldlogVal("_aplus_auto_exp") || {}
          , i = o._acHashMap || {};
        for (var l in i)
            for (var c = i[l] || [], h = 0; h < c.length; h++) {
                var _ = c[h] || {};
                _.eventType = "IObserver";
                var v = !!a || _.element === t.target;
                if (0 === _.status && _.expConfig && v) {
                    var b = t.boundingClientRect || {};
                    if (b.width || b.height || (b = t.target.getBoundingClientRect() || {}),
                    b.width && b.height) {
                        _ = s.assign(_, b),
                        _.x = b.x || b.left,
                        _.y = b.y || b.top,
                        _.width = b.width,
                        _.height = b.height,
                        _.size = b.width * b.height;
                        var y = p.checkIsRecord(_.element, _.hash_value, "_aplus_auto_exp")
                          , A = _.width * _.height * t.intersectionRatio
                          , P = p.getViewabilityRateInWindow(n, A, m);
                        if (!y) {
                            var w = t.intersectionRatio >= d;
                            if (w || P >= m) {
                                _.exposureTime = e,
                                _.status = 1;
                                var S = f.getAutoExpUserFn();
                                S && (_.userParams = g.autoUserFnHandler(S, _.element, _.elementSelector, _.expConfig)),
                                _.viewabilityRate = w ? t.intersectionRatio : P,
                                _.viewability = w ? "intersection" : "fillwindow",
                                f.EXP_DURATION || (_.status = 2),
                                g.updateExpHashMap(l, _, "UPDATE"),
                                ++r
                            } else
                                P && g.updateExpHashMap(l, s.assign(c[h], {
                                    lastEventType: _.eventType
                                }), "UPDATE")
                        }
                    }
                }
            }
        return r
    }
    function r(e, t) {
        var a = "APLUS_AE_EXPOSURE_CHANGE"
          , r = e && e.type ? e.type : "IObserver"
          , o = (new Date).getTime()
          , i = 0;
        i = t ? c.filterStartExposureSize(o, e) : n(o, e),
        i > 0 && (f.EXP_DURATION ? setTimeout(function() {
            i = c.filterEndExposureSize(o, r),
            i > 0 && aplus.aplus_pubsub.publish(a, {
                size: i,
                eventType: r
            })
        }, f.EXP_DURATION) : aplus.aplus_pubsub.publish(a, {
            size: i,
            eventType: r
        }))
    }
    function o(e) {
        var t = {
            root: null,
            rootMargin: "0px",
            threshold: d
        };
        return new _(function(e) {
            l(e, function(e) {
                e.intersectionRatio > 0 && r(e)
            })
        }
        ,s.assign(t, e))
    }
    function i(e) {
        if (_) {
            v.io_base || (v.io_base = o());
            var t = u.getGoldlogVal("_aplus_auto_exp") || {}
              , a = t._acHashMap || {};
            for (var n in a)
                for (var r = a[n] || [], i = 0; i < r.length; i++) {
                    var s = r[i] || {};
                    if (!s.inObserver) {
                        var l, c = "io_v_" + encodeURIComponent(s.positionSelector);
                        s.positionSelector && !v[c] && (l = o({
                            root: document.querySelector(s.positionSelector),
                            expConfig: e
                        }),
                        v[c] = l),
                        l ? l.observe(s.element) : v.io_base.observe(s.element),
                        s.inObserver = !0
                    }
                }
        }
        return !0
    }
    var s = a(28)
      , u = a(2)
      , l = a(18)
      , c = a(57)
      , p = a(55)
      , f = a(50)
      , g = a(47)
      , d = f.AUTO_AT_VIEW_RATE
      , m = f.AUTO_AT_VIEW_RATE_IN_WINDOW
      , h = window
      , _ = h.IntersectionObserver
      , v = {};
    aplus._aplus_auto_exp.iobserverMap = v,
    t.watch_exposure_change = function(e) {
        aplus.aplus_pubsub.subscribe("APLUS_AE_DOM_CHANGE", function() {
            i(e)
        }),
        i(e)
    }
    ,
    t.clear = function(e, t) {
        if (t && "appendMetaInfo" !== t.from)
            for (var a in v) {
                var n = v[a];
                n.disconnect()
            }
    }
}
, function(e, t, a) {
    "use strict";
    var n, r = a(2), o = a(55), i = a(50), s = a(47), u = i.AUTO_AT_VIEW_RATE, l = i.AUTO_AT_VIEW_RATE_IN_WINDOW, c = function(e) {
        for (var t; e && "HTML" !== e.tagName; ) {
            t = e.style.display;
            {
                if ("none" === t)
                    break;
                e = e.parentNode
            }
        }
        return "none" === t
    };
    t.filterStartExposureSize = function(e, t) {
        var a = 0
          , n = o.getWinPositions()
          , p = r.getGoldlogVal("_aplus_auto_exp") || {}
          , f = p._acHashMap || {};
        for (var g in f)
            for (var d = f[g] || [], m = 0; m < d.length; m++) {
                var h = d[m] || {};
                if (0 === h.status && h.expConfig && !c(h.element)) {
                    var _ = o.getElementPosition(h.element);
                    if (_.width && _.height) {
                        h.x = _.x,
                        h.y = _.y,
                        h.eventType = t,
                        h.width = _.width,
                        h.height = _.height,
                        h.size = _.width * _.height;
                        var v;
                        h.expConfig.positionSelector && (v = o.getWinPositions(h.expConfig.positionSelector));
                        var b = o.wrapViewabilityRate(v || n, h, u)
                          , y = b >= u
                          , A = b;
                        v && (A = o.wrapViewabilityRate(n, h, u));
                        var P = h.width * h.height * A
                          , w = o.getViewabilityRateInWindow(n, P, l)
                          , S = o.checkIsRecord(h.element, h.hash_value, "_aplus_auto_exp");
                        if ((y || w >= l) && !S) {
                            h.exposureTime = e,
                            h.status = 1;
                            var T = i.getAutoExpUserFn();
                            T && (h.userParams = s.autoUserFnHandler(T, h.element, h.elementSelector, h.expConfig)),
                            i.EXP_DURATION || (h.viewabilityRate = y ? b : w,
                            h.viewability = y ? "intersection" : "fillwindow",
                            h.status = 2),
                            s.updateExpHashMap(g, h, "UPDATE"),
                            ++a
                        }
                    }
                }
            }
        return a
    }
    ,
    t.filterEndExposureSize = function(e, t) {
        var a = 0;
        n || (n = o.getWinPositions());
        var i = r.getGoldlogVal("_aplus_auto_exp") || {}
          , l = i._acHashMap || {};
        for (var c in l)
            for (var p = l[c] || [], f = 0; f < p.length; f++) {
                var g = p[f] || {};
                if (1 === g.status && g.exposureTime === e && g.expConfig) {
                    g.eventType = t,
                    g.expConfig.positionSelector && (n = o.getWinPositions(g.expConfig.positionSelector));
                    var d = o.wrapViewabilityRate(n, g, u)
                      , m = o.checkIsRecord(g.element, g.hash_value, "_aplus_auto_exp");
                    d && !m ? (g.viewabilityRate = d,
                    g.status = 2,
                    s.updateExpHashMap(c, g, "UPDATE"),
                    ++a) : (g.status = 0,
                    g.exposureTime = "",
                    s.updateExpHashMap(c, g, "UPDATE"))
                }
            }
        return a
    }
}
, function(e, t, a) {
    "use strict";
    var n = a(45)
      , r = a(57)
      , o = a(47)
      , i = a(50)
      , s = function(e) {
        var t = "APLUS_AE_EXPOSURE_CHANGE"
          , a = e && e.type ? e.type : "init"
          , n = (new Date).getTime()
          , o = r.filterStartExposureSize(n, a);
        o > 0 && (i.EXP_DURATION ? setTimeout(function() {
            o = r.filterEndExposureSize(n, a),
            o > 0 && aplus.aplus_pubsub.publish(t, {
                size: o,
                eventType: a
            })
        }, i.EXP_DURATION) : aplus.aplus_pubsub.publish(t, {
            size: o,
            eventType: a
        }))
    }
      , u = o.throttle(function(e) {
        s(e)
    }, 100)
      , l = {}
      , c = function(e, t) {
        if (e && e.forEach && Object.keys && document.querySelector) {
            e.forEach(function(e) {
                e.positionSelector && document.querySelector(e.positionSelector) && (l[e.positionSelector] = !0)
            });
            var a = Object.keys(l);
            a.forEach(function(e) {
                n[t] && n[t](document.querySelector(e), "scroll", function(e) {
                    u(e)
                })
            })
        }
    };
    t.watch_exposure_change = function(e) {
        aplus.aplus_pubsub.subscribe("APLUS_AE_DOM_CHANGE", s),
        n.on(window, "touchmove", u),
        n.on(window, "scroll", u),
        n.on(window, "resize", s),
        c(e, "on")
    }
    ,
    t.clear = function(e) {
        n.un(window, "touchmove", u),
        n.un(window, "scroll", u),
        n.un(window, "resize", s),
        c(e, "un")
    }
}
, function(e, t, a) {
    "use strict";
    function n(e, t, a) {
        var n = "0";
        if (a) {
            if ("spmc" === e) {
                var r = a.split(".");
                n = r[2] ? r[2] : r[3],
                /^(\i|\d)[0-9]+$/.test(n) && (n = "0"),
                a = [r[0], r[1], n].join(".")
            }
        } else {
            a = "";
            var o = window.g_SPM || {};
            if ("function" == typeof o.getParam) {
                var i = o.getParam(t);
                "spmc" === e ? (n = t.getAttribute("data-spm") || "0",
                a = [i.a, i.b, n].join(".")) : a = [i.a, i.b, i.c, i.d].join(".")
            }
        }
        return a
    }
    function r() {
        i || (i = !0,
        aplus.on(window, "beforeunload", function() {
            clearInterval(o);
            for (var e = 0; e < _.length; e++)
                aplus_queue.push(_[e])
        }))
    }
    var o, i, s = a(40), u = a(28), l = a(2), c = a(20), p = a(44), f = a(47), g = a(50), d = function() {
        var e = aplus.aplusDebug
          , t = {}
          , a = g.getDefaultRequestCfg()
          , r = l.getGoldlogVal("_aplus_auto_exp") || {}
          , o = r._acHashMap || {};
        return p(o, function(o, i) {
            for (var s = i || [], l = 0, p = s.length; l < p; l++) {
                var g = s[l] || {};
                if (2 === g.status) {
                    g.status = 3,
                    f.updateExpHashMap(o, g, "UPDATE"),
                    r.exp_times++;
                    var d, m = g.expConfig || {}, h = goldlog.spm_ab ? goldlog.spm_ab.join(".") : "0.0.0.0", _ = n(m.eltype, g.element) || h, v = "";
                    try {
                        var b = new Number(g.viewabilityRate);
                        d = b.toFixed(2)
                    } catch (e) {
                        d = g.viewabilityRate
                    }
                    var y = {
                        _w: g.width,
                        _h: g.height,
                        _x: g.x,
                        _y: g.y,
                        _rate: d,
                        _viewability: g.viewability
                    };
                    "object" == typeof g.userParams && ("object" == typeof g.userParams.userdata && (y = u.assign(y, g.userParams.userdata)),
                    g.userParams.spm && (_ = n(m.eltype, "", g.userParams.spm)),
                    g.userParams.scm && (v = g.userParams.scm)),
                    (f.isMethod(m.method) || f.isPkgSize(m.pkgSize)) && (a = f.filterExpConfigRequestCfg(m));
                    var A = {
                        scm: v,
                        spm: _,
                        aplusContentId: ""
                    }
                      , P = f.fillPropsData(m, g.element, y);
                    if (P = f.fillFilterData(m, g.element, y),
                    P = u.assign(P, f.getDataTrackerParams(g.element)),
                    aplus.globalConfig.isAli)
                        "on" === aplus.getMetaInfo("aplus-track-combine") ? A.exargs = P : A = u.assign(A, P);
                    else {
                        var w = f.fillSpmData(m, g.element, y);
                        P = u.assign(P, w),
                        A = P
                    }
                    t[o] || (t[o] = []),
                    t[o].push(A),
                    e && c().w("logkey = " + o + ", params = " + decodeURIComponent(JSON.stringify(A)))
                }
            }
        }),
        {
            logkeyContainer: t,
            request_cfg: a
        }
    }, m = function(e) {
        for (var t = [], a = 0, n = e.length; a < n; a++) {
            var r = e[a] || {}
              , o = {};
            p(r, function(e, t) {
                "element" !== e && (o[e] = t)
            });
            var i = u.cloneDeep(o);
            i.element = r.element,
            t.push(i)
        }
        return t
    }, h = function(e) {
        var t = l.getGoldlogVal("_aplus_auto_exp") || {}
          , a = t._acHashMap || {}
          , n = [];
        p(a, function(t, a) {
            for (var r = m(a) || [], o = 0, i = r.length; o < i; o++) {
                var s = r[o] || {}
                  , u = a[o] || {};
                if (3 === s.status)
                    try {
                        f.setRecordSuccess(u, g.DATA_APLUS_AE_KEY),
                        aplus.aplus_pubsub.publish("APLUS_ELEMENT_EXPOSURE", {
                            logkey: t,
                            v_origin: u,
                            options: e
                        }),
                        n.push(u)
                    } catch (e) {
                        c().w(e && e.message)
                    }
            }
            for (; n.length > 0; )
                f.updateExpHashMap(t, n.pop(), "CLEAR")
        })
    }, _ = [], v = function() {
        o = setInterval(function() {
            _.length > 0 ? aplus_queue.push(_.pop()) : (clearInterval(o),
            o = null)
        }, 200)
    }, b = function(e, t, a) {
        var n = e.logkeyContainer || []
          , r = e.request_cfg || {};
        s.wrap(function() {
            p(n, function(e, n) {
                if (n && n.length > 0) {
                    for (var o = 0; o < n.length; ) {
                        var i = []
                          , s = n.slice(o, o + r.pkgSize)
                          , u = JSON.stringify(s);
                        i.push("expdata=" + u),
                        i.push("_is_auto_exp=1"),
                        i.push("_eventType=" + t.eventType),
                        i.push("_method=" + r.method),
                        i.push("_pkgSize=" + s.length);
                        var l = r.method || "POST";
                        _.push({
                            action: "aplus.record",
                            arguments: [e, "EXP", i.join("&"), l]
                        }),
                        o += r.pkgSize
                    }
                    a(t)
                }
            })
        }, "recordAplusAtForAli")
    }, y = function(e, t, a) {
        var n = e.logkeyContainer || []
          , r = e.request_cfg || {};
        s.wrap(function() {
            p(n, function(e, n) {
                if (n && n.length > 0) {
                    for (var o = 0; o < n.length; ) {
                        var i = {
                            _is_auto_exp: 1,
                            _eventType: t.eventType,
                            _method: r.method,
                            is_auto: 1
                        }
                          , s = n[o];
                        for (var u in s)
                            i[u] = s[u];
                        var l = r.method || "POST";
                        aplus_queue.push({
                            action: "aplus.record",
                            arguments: [e, "EXP", i, l]
                        }),
                        o += 1
                    }
                    a(t)
                }
            })
        }, "recordAplusAtForAliyun")
    }, A = function(e) {
        if (e.size > 0) {
            o || v();
            var t = d() || {};
            "on" === aplus.getMetaInfo("aplus-track-combine") ? b(t, e, h) : y(t, e, h)
        }
    };
    t.watch_data_change = function() {
        aplus.aplus_pubsub.subscribe("APLUS_AE_EXPOSURE_CHANGE", A),
        r()
    }
    ,
    t.clear = function() {
        aplus.aplus_pubsub.unsubscribe("APLUS_AE_EXPOSURE_CHANGE", A)
    }
}
, function(e, t, a) {
    "use strict";
    var n = a(61)
      , r = a(3)
      , o = a(25).nameStorage
      , i = a(37);
    e.exports = function() {
        return {
            recordValInWindowName: function() {
                var e, t, a = r.HTTPS == location.protocol, n = aplus.globalConfig.NAMESTORAGE_KEYS || {}, s = parent !== self;
                if (!s && a) {
                    var u = location.href
                      , l = a && (u.indexOf("login.taobao.com") >= 0 || u.indexOf("login.tmall.com") >= 0)
                      , c = i.getRefer(n);
                    l && c ? (e = c,
                    t = o.getItem(n.REFERRER_PV_ID)) : (e = u,
                    t = aplus.pvid),
                    o.setItem(n.REFERRER, e),
                    o.setItem(n.REFERRER_PV_ID, t)
                }
            },
            run: function() {
                var e = this;
                n.on(window, "beforeunload", function() {
                    e.recordValInWindowName()
                })
            }
        }
    }
}
, function(e, t, a) {
    "use strict";
    function n(e, t, a) {
        var n = aplus._$ || {}
          , r = n.meta_info || {}
          , o = r.aplus_ctap || {}
          , i = r["aplus-touch"];
        if (o && "function" == typeof o.on)
            o.on(e, t);
        else {
            var s = "ontouchend"in document.createElement("div");
            !s || "tap" !== i && "tapSpm" !== a && "tap" !== a ? u(e, s ? "touchstart" : "mousedown", t) : c.on(e, t)
        }
    }
    function r(e) {
        try {
            document.documentElement.doScroll("left")
        } catch (t) {
            return void setTimeout(function() {
                r(e)
            }, 1)
        }
        e()
    }
    function o(e) {
        var t = 0
          , a = function() {
            0 === t && e(),
            t++
        };
        "complete" === document.readyState && a();
        var n;
        if (document.addEventListener)
            n = function() {
                document.removeEventListener("DOMContentLoaded", n, !1),
                a()
            }
            ,
            document.addEventListener("DOMContentLoaded", n, !1),
            window.addEventListener("load", a, !1);
        else if (document.attachEvent) {
            n = function() {
                "complete" === document.readyState && (document.detachEvent("onreadystatechange", n),
                a())
            }
            ,
            document.attachEvent("onreadystatechange", n),
            window.attachEvent("onload", a);
            var o = !1;
            try {
                o = null === window.frameElement
            } catch (e) {}
            document.documentElement.doScroll && o && r(a)
        }
    }
    function i(e) {
        "complete" === document.readyState ? e() : u(window, "load", e)
    }
    function s(e) {
        var t = history[e];
        return function() {
            var a;
            try {
                a = new Event(e),
                a.arguments = arguments
            } catch (t) {
                a = document.createEvent("Event"),
                a.initEvent(e, !0, !0)
            }
            window.dispatchEvent(a);
            var n = t.apply(this, arguments);
            return n
        }
    }
    function u() {
        var e = window
          , t = arguments;
        if (2 === t.length)
            "DOMReady" === t[0] && o(t[1]),
            "onload" === t[0] && i(t[1]);
        else if (3 === t.length) {
            var a = t[0]
              , r = t[1]
              , u = t[2];
            if ("tap" === r || "tapSpm" === r)
                n(a, u, r);
            else {
                ["pushState", "replaceState"].indexOf(r) > -1 && (history[r] = s(r));
                var c = document.attachEvent ? "attachEvent" : "addEventListener"
                  , p = !!document.attachEvent;
                a[c]((p ? "on" : "") + r, function(t) {
                    t = t || e.event;
                    var a = t.target || t.srcElement;
                    "function" == typeof u && u(t, a)
                }, !!l(r) && {
                    passive: !0
                })
            }
        }
    }
    var l = a(62)
      , c = a(46);
    t.DOMReady = o,
    t.onload = i,
    t.on = u
}
, function(e, t) {
    var a;
    e.exports = function(e) {
        if ("boolean" == typeof a)
            return a;
        if (!/touch|mouse|scroll|wheel/i.test(e))
            return !1;
        a = !1;
        try {
            var t = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            window.addEventListener("test", null, t)
        } catch (e) {}
        return a
    }
}
, function(e, t, a) {
    "use strict";
    var n = a(61)
      , r = a(64);
    e.exports = function() {
        return {
            do_tracker_lostpv: function(e) {
                if (e && e.page) {
                    var t = e.spm_ab ? e.spm_ab.split(".") : []
                      , a = navigator && navigator.sendBeacon ? "post" : "get"
                      , n = "record_lostpv_by" + a + "_" + e.msg
                      , o = new r({
                        ratio: e.ratio || this.options.config.lostPvRecordRatio
                    });
                    o.run({
                        code: 102,
                        page: e.page,
                        msg: n,
                        spm_a: t[0],
                        spm_b: t[1],
                        c1: e.duration,
                        c2: e.page_url
                    })
                }
            },
            recordLostPv: function(e) {
                var t = window.aplus || {}
                  , a = t._$ = t._$ || {}
                  , n = t.spm_ab ? t.spm_ab.join(".") : "0.0"
                  , r = a.send_pv_count || 0;
                if (r < 1 && navigator && navigator.sendBeacon) {
                    var o = location.hostname + location.pathname;
                    this.do_tracker_lostpv({
                        page: o,
                        page_url: location.protocol + "//" + o,
                        duration: e,
                        spm_ab: n,
                        msg: "dom_state=" + document.readyState
                    })
                }
            },
            run: function() {
                var e = this
                  , t = new Date;
                n.on(window, "beforeunload", function() {
                    var a = new Date
                      , n = a.getTime() - t.getTime();
                    e.recordLostPv(n)
                })
            }
        }
    }
}
, function(e, t, a) {
    var n = a(27)
      , r = a(28)
      , o = a(34)
      , i = {
        ratio: 1,
        logkey: "fsp.1.1",
        gmkey: "",
        chksum: "H46747615"
    }
      , s = function(e) {
        e && "object" == typeof e || (e = i),
        this.opts = e,
        this.opts.ratio = e.ratio || i.ratio,
        this.opts.logkey = e.logkey || i.logkey,
        this.opts.gmkey = e.gmkey || i.gmkey,
        this.opts.chksum = e.chksum || i.chksum
    }
      , u = s.prototype;
    u.getRandom = function() {
        return Math.floor(100 * Math.random()) + 1
    }
    ,
    u.run = function(e, t) {
        var a, i, s = {
            pid: "aplus",
            code: 101,
            msg: "异常内容"
        }, u = "";
        try {
            var l = window.aplus || {}
              , c = l._$ || {}
              , p = c.meta_info || {}
              , f = parseFloat(p["aplus-tracker-rate"]);
            if (a = this.opts || {},
            "number" == typeof f && f + "" != "NaN" || (f = a.ratio),
            i = this.getRandom(),
            t || i <= 100 * f) {
                u = "//gm.mmstat.com/" + a.logkey,
                e.rel = l.globalConfig.script_name + "@" + l.globalConfig.lver,
                e.type = e.code,
                e.uid = encodeURIComponent(l.getCookieCna("cna")),
                e = r.assign(s, e);
                var g = n.obj2param(e);
                l.tracker = l.send(u, {
                    cache: r.makeCacheNum(),
                    gokey: g,
                    logtype: "2"
                }, "POST")
            }
        } catch (e) {
            o.logger({
                msg: "tracker.run() exec error: " + e
            })
        }
    }
    ,
    e.exports = s
}
, function(e, t, a) {
    "use strict";
    var n = a(2);
    e.exports = function() {
        return {
            run: function() {
                var e = n.getGlobalValue("aplus");
                if (!e._aplus_cplugin_m) {
                    var t = this.options.config;
                    e._aplus_cplugin_m = a(66).run(t)
                }
            }
        }
    }
}
, function(e, t, a) {
    "use strict";
    var n = a(34)
      , r = a(64)
      , o = navigator && navigator.sendBeacon ? "post" : "get";
    t.run = function(e) {
        return {
            status: "complete",
            do_tracker_jserror: function(t) {
                try {
                    var a = new r({
                        logkey: t ? t.logkey : "",
                        ratio: t && "number" == typeof t.ratio && t.ratio > 0 ? t.ratio : e.jsErrorRecordRatio
                    })
                      , i = ["Message: " + t.message, "Error object: " + t.error].join(" - ")
                      , s = aplus.spm_ab || []
                      , u = location ? location.hostname + location.pathname : "";
                    a.run({
                        code: 110,
                        page: u,
                        msg: "record_jserror_by" + o + "_" + t.message,
                        spm_a: s[0],
                        spm_b: s[1],
                        c1: i,
                        c2: t.filename,
                        c3: location ? location.protocol + "//" + u : ""
                    })
                } catch (e) {
                    n.logger({
                        msg: e
                    })
                }
            },
            do_tracker_browser_support: function(t) {
                var a = !1;
                try {
                    if (t && t.page) {
                        var i = t.spm_ab ? t.spm_ab.split(".") : []
                          , s = new r({
                            ratio: t.ratio || e.browserSupportRatio
                        })
                          , u = aplus._aplus_client || {}
                          , l = u.ua_info || {};
                        s.run({
                            code: 111,
                            page: t.page,
                            msg: t.msg + "_by" + o,
                            spm_a: i[0],
                            spm_b: i[1],
                            c1: [l.o, l.b, l.w].join("_"),
                            c2: t.etag || "",
                            c3: t.cna || ""
                        }),
                        a = !0
                    }
                } catch (e) {
                    n.logger({
                        msg: e
                    })
                }
                return a
            }
        }
    }
}
, function(e, t, a) {
    "use strict";
    e.exports = function() {
        return {
            run: function() {
                var e = a(68)
                  , t = e.create({
                    WS: null,
                    format: "ALI"
                });
                t.run(this.options)
            }
        }
    }
}
, function(e, t, a) {
    "use strict";
    var n = a(10)
      , r = a(69)
      , o = a(21)
      , i = a(3)
      , s = a(2)
      , u = s.getGlobalValue("aplus");
    e.exports = n.extend({
        subscribeLogs: function(e, t) {
            var a = this;
            o.pushIntoGoldlogQueue(i.SUBSCRIBE, [e, function(e) {
                e.status === i.COMPLETE && a._canSendToGroup() && t(e)
            }
            ])
        },
        getLogicSymbol: function() {
            return "ALI" === this.format ? "&" : "||"
        },
        watchLOG: function() {
            var e = this
              , t = function(e, t) {
                var a = u.getMetaInfo(i.APLUS_BRIDGE_NAME);
                if (!a) {
                    var n, o = r.getHttpBasicParams(e.what_to_send.logdata), s = e.where_to_send.method, l = u.getMetaInfo("aplus-first-tracking"), c = s;
                    "POST" === s && navigator && navigator.sendBeacon ? (c = "POST",
                    n = "pv" === t ? o.objStr : JSON.stringify(o.obj)) : (c = "GET",
                    n = o.objStr),
                    l && "pv" === t && u.send(e.where_to_send.url, o.objStr.replace(/a21dvn\.b28762401\.0\.0/, "a1z1d1.26790227.0.0"), "GET"),
                    u.send(e.where_to_send.url, n, c)
                }
            };
            e.subscribeLogs("mw_change_pv", function(e) {
                t(e, "pv")
            }),
            e.subscribeLogs("mw_change_hjlj", function(e) {
                t(e, "aplus")
            })
        },
        _canSendToGroup: function() {
            var e = u.getMetaInfo(i.APLUS_LOG_PIPE);
            return "" === e || /ALIGROUP/.test(e)
        },
        run: function() {
            this.watchLOG()
        }
    })
}
, function(e, t, a) {
    "use strict";
    function n(e, t) {
        var a = e.client || {}
          , n = a.screenWidth || ""
          , r = a.screenHeight || ""
          , o = n + t + r;
        return n && r ? o : "-"
    }
    function r(e, t) {
        return m(t, function(t) {
            delete e[t]
        }),
        e
    }
    function o() {
        if ("boolean" != typeof h) {
            var e = navigator.userAgent;
            h = /Trident/.test(e)
        }
        return h
    }
    function i(e, t) {
        var a = g.cloneDeep(e.gokey);
        return a.cache = e.cache,
        a = g.assign(a, e.sdk_info),
        a = g.assign(a, e.client),
        a = g.assign(a, e.etag),
        delete a.egUrl,
        a = r(a, ["userAgent", "pvid", "cna", "screenWidth", "screenHeight", p.SPM_CNT, p.SPM_URL, p.SPM_PRE]),
        "LOG" === t && (a._g_encode || (a._g_encode = "utf-8")),
        f.encodeGokeyValue(g.cloneDeep(a))
    }
    function s(e, t) {
        return _(e, [[p.SPM_CNT, t[p.SPM_CNT]], [p.SPM_URL, t[p.SPM_URL]], [p.SPM_PRE, t[p.SPM_PRE]]]),
        e
    }
    function u(e, t) {
        var a = e;
        if (e.indexOf("uidaplus=") > -1) {
            var n = e.split("uidaplus=");
            if ("&" === n[1][0])
                a = e.replace(/uidaplus=/, "uidaplus=" + t);
            else {
                var r = n[1].split("&");
                r[0] = t,
                a = n[0] + "uidaplus=" + r.join("&")
            }
        } else
            a = "uidaplus=" + t + "&" + e;
        return a
    }
    function l(e) {
        var t = d.getGoldlogVal("_$") || {}
          , a = t.meta_info || {}
          , r = d.getGlobalValue("aplus")
          , l = e.logtype
          , c = a["aplus-ifr-pv"] + "" == "1"
          , g = parent !== self;
        l = g && !c ? "0" : "1";
        var m = [["logtype", l], ["title", e.title], ["pre", e.pre], ["scr", n(e, "x")]];
        o() || m.push(["_p_url", e.url]),
        _(m, [[f.s_plain_obj, "cna=" + e.cna], ["nick", e._user_nick], ["wm_pageid", a.ms_data_page_id], ["wm_prototypeid", a.ms_prototype_id], ["wm_sid", a.ms_data_shop_id]]),
        m = s(m, e.gokey || {});
        var h = e.exparams || ""
          , v = r.getMetaInfo("aplus-user-profile");
        v.uidaplus && (h = u(h, v.uidaplus)),
        h.indexOf("&aplus&") === -1 ? m.push([f.s_plain_obj, "uidaplus=" + v.uidaplus + "&" + p.APLUS]) : m.push([f.s_plain_obj, h]);
        var b = i(e, "PV");
        for (var y in b)
            _(m, [[y, b[y]]]);
        var A = f.arr2param(m);
        return {
            objStr: A,
            obj: f.param2obj(A)
        }
    }
    function c(e) {
        var t = d.getGlobalValue("aplus")
          , a = [["gmkey", e.gmkey]]
          , n = i(e, "LOG");
        _(a, [["gokey", f.obj2param(n)], [f.s_plain_obj, "cna=" + e.cna]]),
        a = s(a, e.gokey || {});
        var r = t.getMetaInfo("aplus-user-profile")
          , u = r.uidaplus || f.param2obj(e.exparams).uidaplus || "";
        _(a, [["_gr_uid_", u], ["uidaplus", u], ["logtype", e.logtype]]),
        !r.uidaplus && u && (r.uidaplus = u,
        t.setMetaInfo("aplus-user-profile", r)),
        o() || a.push(["_p_url", e.url]);
        var l = f.arr2param(a);
        return {
            objStr: l,
            obj: f.param2obj(l)
        }
    }
    var p = a(3)
      , f = a(27)
      , g = a(28)
      , d = a(2)
      , m = a(18);
    t.getKeyIndex = function(e) {
        var t = {
            protocol: 1,
            event_args: 25
        };
        return t[e]
    }
    ;
    var h, _ = function(e, t) {
        var a, n, r, o, i = t.length;
        for (a = 0; a < i; a++)
            n = t[a],
            r = n[0],
            o = n[1],
            o && e.push([r, o])
    };
    t.getHttpBasicParams = function(e) {
        return "1" === e.logtype ? l(e) : c(e)
    }
    ,
    t.getWSBasicParams = function(e) {
        var t = d.getGlobalValue("aplus")
          , a = e.exparams
          , o = e.sdk_info || {}
          , i = e.client.language || ""
          , u = f.param2obj(a)
          , l = g.assign(u, e.gokey);
        l = g.assign(l, o),
        l = g.assign(l, e.client),
        l = g.assign(l, e.etag),
        l = r(l, ["userAgent", "aplus", "cna"]),
        l.jsver = o.jsver,
        l.lver = o.lver;
        var c = t.getMetaInfo("aplus-user-profile")
          , p = c.uidaplus || f.param2obj(a).uidaplus || ""
          , m = [["cna", e.cna]];
        return _(m, [["gmkey", e.gmkey], ["gokey", f.obj2param(l)], ["lang", i], ["logkey", e.logkey], ["logtype", e.logtype], ["nick", e._user_nick], ["pre", e.pre], ["scr", n(e, "x")], ["title", e.title], ["ua", e.client.userAgent]]),
        m = s(m, e.gokey || {}),
        m.push(["uidaplus", p]),
        !c.uidaplus && p && (c.uidaplus = p,
        t.setMetaInfo("aplus-user-profile", c)),
        _(m, [["_p_url", e.url]]),
        f.arr2obj(m)
    }
}
, function(e, t, a) {
    "use strict";
    var n = a(18);
    e.exports = function() {
        return {
            getLogConfig: function() {
                var e = {}
                  , t = this.options.config.plugins;
                for (var a in t)
                    e[a] = {
                        plugins: t[a],
                        context: {}
                    },
                    n(t[a], function(t) {
                        e[a].context[t.name] = t.config || {}
                    });
                return e
            },
            run: function() {
                this.options.context.logConfig = this.getLogConfig(),
                this.options.context.logConfig.pageLoadTime = this.options.context.PAGE_LOAD_TIME
            }
        }
    }
}
, function(e, t, a) {
    "use strict";
    var n = a(72)
      , r = a(29)
      , o = a(74)
      , i = a(75)
      , s = a(2)
      , u = a(28)
      , l = a(76)
      , c = a(33);
    e.exports = function() {
        var e = a(43);
        return {
            init: function(e) {
                this.options = e;
                var t = this.options.context.etag || {};
                this.cna = t.cna || n.getCookieCna("cna"),
                this.setTag(0),
                this.setStag(-1),
                this.setLsTag("-1"),
                this.setEtag(this.cna || ""),
                this.requesting = !1,
                this.today = o.getFormatDate()
            },
            setLsTag: function(e) {
                this.lstag = e,
                this.options.context.etag.lstag = e
            },
            setTag: function(e) {
                this.tag = e,
                this.options.context.etag.tag = e
            },
            setStag: function(e) {
                this.stag = e,
                this.options.context.etag.stag = e
            },
            setEtag: function(e) {
                this.etag = e,
                this.options.context.etag.cna = e,
                n.getCookieCna("cna") !== e && n.setCookieCna("cna", e, {
                    SameSite: "none"
                })
            },
            setLscnaStatus: function(e) {
                this.options.context.etag.lscnastatus = e
            },
            run: function(t, a) {
                var n = this
                  , o = s.getGlobalValue("aplus");
                if (n.cna)
                    return void n.setTag(1);
                var p = null
                  , f = o._$.meta_info["aplus-rhost-v"];
                if (f) {
                    this.options.context.etag.egUrl = f.replace(/\/\w+.gif$/, "") + "/eg.js";
                    var g = i.getUrl(this.options.context.etag || {});
                    o.globalConfig.isUM && (g = g + "?ak=" + c.getAppKey()),
                    n.requesting = !0;
                    var d = function() {
                        setTimeout(function() {
                            a()
                        }, 20),
                        clearTimeout(p)
                    }
                      , m = this.options.context.etag.unittest
                      , h = m || e.loadScript;
                    h(g, function(e) {
                        var t, a;
                        if (e && "error" === e.type ? (l.toDynamicsNetwork(!0),
                        n.setStag(-3)) : (t = s.getGoldlogVal("Etag"),
                        t && n.setEtag(t),
                        a = s.getGoldlogVal("stag"),
                        "undefined" != typeof a && n.setStag(a)),
                        n.requesting) {
                            var i = o.globalConfig || {};
                            if (2 === a || 4 === a) {
                                var u = r.getLsCna(i.ETAG_STORAGE_KEY);
                                u ? (n.setLsTag(1),
                                n.setEtag(u)) : (n.setLsTag(0),
                                r.setLsCna(i.ETAG_STORAGE_KEY, n.today, t))
                            }
                            d()
                        }
                    });
                    var _ = o.getMetaInfo("aplus-etag-timeout")
                      , v = 200
                      , b = v;
                    try {
                        b = parseInt(_),
                        (u.isNaN(b) || b < 200) && (b = v)
                    } catch (e) {}
                    return p = setTimeout(function() {
                        n.requesting = !1,
                        n.setStag(-2),
                        a()
                    }, b),
                    b
                }
            }
        }
    }
}
, function(e, t, a) {
    "use strict";
    function n(e) {
        if (!document)
            return "";
        var t = document.cookie.match(new RegExp("(?:^|;)\\s*" + e + "=([^;]+)"));
        return t ? t[1] : ""
    }
    function r(e) {
        var t = new Date
          , a = "";
        if ("session" === e.expires)
            ;
        else if (e.expires && ("number" == typeof e.expires || e.expires.toUTCString))
            "number" == typeof e.expires ? t.setTime(t.getTime() + 24 * e.expires * 60 * 60 * 1e3) : t = e.expires,
            a = "expires=" + t.toUTCString();
        else {
            var n = 20;
            l.indexof(["v.youku.com", "www.youku.com", "player.youku.com"], location.hostname) > -1 && (n = 1),
            t.setTime(t.getTime() + 365 * n * 24 * 60 * 60 * 1e3),
            a = "expires=" + t.toUTCString()
        }
        return a
    }
    function o(e, t, a) {
        if (document) {
            a || (a = {}),
            t += ";" + (a.expires || r(a)),
            t += "; path=" + (a.path ? a.path : "/"),
            t += "; domain=" + a.domain,
            document.cookie = e + "=" + t;
            var o = 0;
            try {
                var i = navigator.userAgent.match(/Chrome\/\d+/);
                i && i[0] && (o = i[0].split("/")[1],
                o && (o = parseInt(o)))
            } catch (e) {}
            return a.SameSite && o >= 80 && (t += "; SameSite=" + a.SameSite,
            t += "; Secure",
            document.cookie = e + "=" + t),
            n(e)
        }
    }
    function i(e, t, a) {
        try {
            if (!document)
                return "";
            if (a || (a = {}),
            a.domain)
                o(e, t, a);
            else
                for (var n = u.getDomains(), r = 0; r < n.length; )
                    a.domain = n[r],
                    o(e, t, a) ? r = n.length : r++
        } catch (e) {}
    }
    var s = a(18)
      , u = a(73)
      , l = a(42);
    t.getCookie = n,
    t.trySetCookie = o,
    t.setCookie = i;
    var c = ["tracknick", "thw", "cna"];
    t.getData = function() {
        var e = {};
        if (s(c, function(t) {
            e[t] = n(t)
        }),
        location) {
            var t = location.hostname;
            e.cnaui = /\btanx\.com$/.test(t) ? n("cnaui") : ""
        }
        return e
    }
    ,
    t.getHng = function() {
        return encodeURIComponent(n("hng") || "")
    }
    ,
    t.getCookieCna = function(e) {
        return n(e) || n("_" + e)
    }
    ,
    t.setCookieCna = function(e, t, a) {
        for (var n = u.getDomains(), i = 0; i < n.length; )
            if (a.domain = n[i],
            o(e, t, a))
                i = n.length;
            else {
                if (i === n.length - 1) {
                    var s = t + ";" + r(a);
                    s += "; path=/",
                    document.cookie = "_" + e + "=" + s
                }
                i++
            }
    }
}
, function(e, t) {
    "use strict";
    t.getDomains = function() {
        var e = [];
        try {
            for (var t = location.hostname, a = t.split("."), n = 2; n <= a.length; )
                e.push(a.slice(a.length - n).join(".")),
                n++
        } catch (e) {}
        return e
    }
}
, function(e, t) {
    "use strict";
    function a(e, t, a) {
        var n = "" + Math.abs(e)
          , r = t - n.length
          , o = e >= 0;
        return (o ? a ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + n
    }
    t.getFormatDate = function(e) {
        var t = new Date;
        try {
            return [t.getFullYear(), a(t.getMonth() + 1, 2, 0), a(t.getDate(), 2, 0)].join(e || "")
        } catch (e) {
            return ""
        }
    }
}
, function(e, t, a) {
    "use strict";
    var n = a(29);
    t.getUrl = function(e) {
        var t = n.getUrl(e && e.egUrl);
        return t
    }
}
, function(e, t, a) {
    "use strict";
    function n(e, t) {
        if ("dynamics" === t) {
            var a = ["gm.mmstat.com", "wgo.mmstat.com"];
            return a.indexOf(e) > -1 ? "d-" + e : e
        }
    }
    function r(e) {
        function t() {
            var e = o.getGlobalValue("aplus")
              , t = e.getMetaInfo("aplus-rhost-g")
              , a = n(t, r);
            a !== t && e.setMetaInfo("aplus-rhost-g", a)
        }
        e = e || {};
        var a = e.maxCount || 1
          , r = e.networkType || "static"
          , s = e.directSwitch || !1
          , u = 0;
        return function(e) {
            e = e || s,
            e ? t() : (++u,
            u >= a && (i.logger({
                lever: "warn",
                msg: "日志上报失败，注意，要切成动态网络啦!"
            }),
            t(),
            u = 0))
        }
    }
    var o = a(2)
      , i = a(34);
    t.toDynamicsNetwork = r({
        maxCount: 1,
        networkType: "dynamics",
        directSwitch: !1
    })
}
, function(e, t) {
    "use strict";
    e.exports = function() {
        return {
            getMiniAppTrackInfo: function(e) {
                var t = window;
                t.__megabilityBridge("TinyApp", "getMiniAppTrackInfo", {}, function(t) {
                    var a = (t.data || {}).result
                      , n = {
                        _aplus_luid: a.luid,
                        _aplus_lunick: a.lunick,
                        _aplus_lusite: a.lusite,
                        _aplus_uid: a.uid,
                        _aplus_unick: a.unick,
                        _aplus_usite: a.usite,
                        mini_app_id: a.miniapp_id
                    };
                    e(n)
                }, function() {
                    e({})
                })
            },
            run: function(e, t) {
                var a = this
                  , n = window
                  , r = n && "undefined" != typeof n.__megabilityBridge
                  , o = "{}" !== JSON.stringify(a.options.context.pha_trackinfo);
                if (!o && n.pha && n.pha.environment && "object" == typeof n.pha.environment.miniappAppInfo && r)
                    return a.getMiniAppTrackInfo(function(e) {
                        a.options.context.pha_trackinfo && (a.options.context.pha_trackinfo = e),
                        t()
                    }),
                    200
            }
        }
    }
}
, function(e, t, a) {
    "use strict";
    var n = a(2)
      , r = a(3);
    e.exports = function() {
        return {
            getMetaInfo: function() {
                var e = n.getGoldlogVal("_$") || {}
                  , t = e.meta_info;
                return t
            },
            getAplusWaiting: function() {
                var e = this.getMetaInfo() || {};
                return e["aplus-waiting"]
            },
            run: function(e, t) {
                var a = this.options.config || {}
                  , n = this.getAplusWaiting();
                if (n && a.is_auto)
                    switch (n = this.getAplusWaiting() + "",
                    this.options.context.when_to_sendpv = {
                        aplusWaiting: n
                    },
                    n) {
                    case r._USER_ID:
                    case r._ANONY_ID:
                    case "MAN":
                        return "done";
                    case "1":
                        return this.options.context.when_to_sendpv.isWait = !0,
                        setTimeout(function() {
                            t()
                        }, 6e3),
                        6e3;
                    default:
                        var o = 1 * n;
                        if (o + "" != "NaN")
                            return this.options.context.when_to_sendpv.isWait = !0,
                            setTimeout(function() {
                                t()
                            }, o),
                            o
                    }
            }
        }
    }
}
, function(e, t, a) {
    "use strict";
    var n = a(80)
      , r = a(2)
      , o = a(20)
      , i = "POST"
      , s = "GET";
    e.exports = function() {
        return {
            getMetaInfo: function() {
                var e = r.getGoldlogVal("_$") || {}
                  , t = e.meta_info;
                return t
            },
            getAplusMetaByKey: function(e) {
                var t = this.getMetaInfo() || {};
                return t[e]
            },
            getRhost: function(e) {
                var t = ""
                  , a = "";
                return "PV" === e ? (a = "aplus-rhost-v",
                t = this.getAplusMetaByKey(a)) : (a = "aplus-rhost-g",
                t = this.getAplusMetaByKey(a),
                n.isMobile() && /gm/.test(t) && (t = "wgo.mmstat.com"),
                !n.isMobile() && /wgo/.test(t) && (t = "gm.mmstat.com")),
                t
            },
            getHjljHostUrl: function(e) {
                var t = /^\/\//.test(e) ? "" : "//"
                  , a = /\/$/.test(e) ? "" : "/"
                  , n = t + e + a
                  , r = this.options.context.userdata || {}
                  , i = r.logkey;
                return i ? n += /^(\/)/.test(i) ? i.substr(1) : i : o().w("eventCode " + i + ' is invalid, suggestion: "/aplus.1.1"'),
                n
            },
            getPvHostUrl: function(e) {
                var t = /^\/\//.test(e) ? "" : "//"
                  , a = /\/$/.test(e) ? "" : "/"
                  , o = r.getGoldlogVal("_$") || {}
                  , i = o.meta_info || {}
                  , s = i["aplus-ifr-pv"] + "" == "1"
                  , u = parent !== self;
                if (/\.gif$/.test(e))
                    return t + e;
                var l = "v.gif";
                return n.isMobile() && (l = "m.gif"),
                u && !s && (l = "y.gif"),
                t + e + a + l
            },
            getChannel: function(e) {
                var t, a = this.getAplusMetaByKey("aplus-channel"), n = ["WS", "WS-ONLY", s, i];
                return n.indexOf(e) > -1 && (t = e),
                !t && n.indexOf(a) > -1 && (t = a),
                t
            },
            run: function() {
                var e = !!this.options.context.is_single;
                if (!e) {
                    var t = this.options.config.recordType
                      , a = this.getRhost(t);
                    if (!a)
                        return "done";
                    var n;
                    n = "PV" === t ? this.getPvHostUrl(a) : this.getHjljHostUrl(a);
                    var r = this.options.config || {}
                      , o = this.getChannel(r.method) || i;
                    o !== i || navigator && navigator.sendBeacon || (o = s),
                    this.options.context.where_to_send.method = r.method,
                    this.options.context.where_to_send.url = n
                }
            }
        }
    }
}
, function(e, t) {
    "use strict";
    t.isMobile = function() {
        var e = navigator ? navigator.userAgent : ""
          , t = /AliApp|Yunos|cyclone/i.test(e)
          , a = /iPhone|iPad|iPod/i.test(e)
          , n = /Android/i.test(e)
          , r = /Windows Phone/i.test(e) || /IEMobile/i.test(e) || /WPDesktop/i.test(e)
          , o = /BlackBerry/i.test(e)
          , i = /Opera Mini/i.test(e);
        return t || a || n || r || o || i
    }
}
, function(e, t, a) {
    "use strict";
    var n = a(72)
      , r = a(17)
      , o = a(28)
      , i = a(80)
      , s = a(2)
      , u = a(3)
      , l = s.getGlobalValue("aplus");
    e.exports = function() {
        return {
            getPageId: function() {
                var e = this.options.config || {}
                  , t = this.options.context || {}
                  , a = t.userdata || {};
                return e.page_id || e.pageid || e.pageId || a.page_id
            },
            resetSpmB: function() {
                var e = s.getGlobalValue("aplus");
                if (e.spmAPI) {
                    var t = s.getGoldlogVal("_$") || {}
                      , a = t.spm || {}
                      , n = a.data.b;
                    if (n) {
                        var r = this.getPageId();
                        n = r ? n.split("/")[0] + "/" + r : n.split("/")[0],
                        e.spmAPI && e.spmAPI.setB(n);
                        var o = a.spm_cnt.split(".");
                        o && o.length > 2 && (o[1] = n,
                        a.spm_cnt = o.join("."))
                    }
                }
            },
            getCommonParams: function() {
                var e = this.options.context || {}
                  , t = e.etag || {}
                  , a = e.userdata || {}
                  , u = s.getGoldlogVal("_$") || {}
                  , c = u.spm || {}
                  , p = this.options.config || {}
                  , f = i.isMobile() ? "WAP" : "PC"
                  , g = l.getMetaInfo("aplus-first-tracking")
                  , d = {
                    _f_t: !!g
                };
                e.pha_trackinfo && (d = o.assign(d, e.pha_trackinfo));
                var m = {};
                l.globalConfig.isAli && (m = {
                    "spm-url": c.spm_url || "",
                    "spm-pre": c.spm_pre || "",
                    "spm-cnt": c.spm_cnt || "",
                    pvid: l.pvid || ""
                });
                var h = (l.globalConfig.isDecodeUrl ? "DC_" : "") + Math.floor(268435456 * Math.random()).toString(16)
                  , _ = {
                    appId: l.getMetaInfo("appKey") || l.getMetaInfo("appId"),
                    cache: h,
                    cna: t.cna || n.getCookieCna("cna"),
                    etag: t,
                    pre: u.page_referrer || "-",
                    sdk_info: {
                        jsver: l.globalConfig.script_name,
                        lver: l.globalConfig.lver,
                        customSdkId: l.getMetaInfo("customSdkId") || "",
                        platformType: f.toLowerCase()
                    },
                    trackerEventCode: p.trackerEventCode,
                    title: p.title || document && document.title,
                    url: p.pageUrl || (location ? location.href : "-"),
                    client: l._aplus_client || {},
                    gokey: o.assign(m, d),
                    _user_nick: l.getMetaInfo("_user_nick") || n.getCookie("tracknick"),
                    gmkey: a.gmkey || "",
                    method: this.options.context.where_to_send.method
                }
                  , v = r.getParamFromUrl("scm", location.href) || "";
                return v && (_.scm = v),
                a.gokey && a.gokey.alsc_spm_url && (_.gokey["spm-url"] = a.gokey.alsc_spm_url),
                a.gokey && a.gokey.alsc_spm_pre && (_.gokey["spm-pre"] = a.gokey.alsc_spm_pre),
                a.gokey && a.gokey.alsc_page_name && (_.title = a.gokey.alsc_page_name),
                _
            },
            getPvParams: function() {
                var e = this.options.context.where_to_send.url
                  , t = this.getCommonParams();
                this.options.config.is_auto || (t.sdk_info.mansndlog = 1);
                var a = "/v.gif";
                return /yt\.gif$/.test(e) ? a = "yt.gif" : i.isMobile() && (a = "/m.gif"),
                o.assign(t, {
                    event_code: "2001",
                    logtype: "1",
                    logkey: a,
                    event_timestamp: l._$.send_pv_count > 0 ? new Date : l.logConfig.pageLoadTime
                })
            },
            checkEventCodeLegality: function(e) {
                return /^(([0-9])|([1-9][0-9]{1,5}))$/.test(e)
            },
            getHjljParams: function() {
                var e = this.options.context || {}
                  , t = e.userdata || {}
                  , a = this.checkEventCodeLegality(t.gmkey) ? t.gmkey : u.OTHER
                  , n = {
                    event_code: u.EVENT_ID_MAP[t.gmkey] || a,
                    logtype: "2",
                    logkey: t.logkey,
                    event_timestamp: new Date
                };
                return t["spm-cnt"] && (n["spm-cnt"] = t["spm-cnt"]),
                t["spm-pre"] && (n["spm-pre"] = t["spm-pre"]),
                o.assign(this.getCommonParams(), n)
            },
            run: function() {
                var e = {};
                "PV" === this.options.config.recordType ? (this.resetSpmB(),
                e = this.getPvParams()) : e = this.getHjljParams(),
                this.options.context.what_to_send.logdata = e
            }
        }
    }
}
, function(e, t, a) {
    "use strict";
    var n = a(28)
      , r = a(72);
    e.exports = function() {
        return {
            run: function() {
                var e = {}
                  , t = r.getCookie("workno") || r.getCookie("emplId");
                t && (e.workno = t);
                var a = r.getHng();
                a && (e._hng = r.getHng());
                var o;
                o = this.options.context.what_to_send.logdata,
                o.gokey = n.assign(o.gokey, e)
            }
        }
    }
}
, function(e, t, a) {
    "use strict";
    var n = a(27)
      , r = a(84)
      , o = a(28)
      , i = a(2);
    e.exports = function() {
        return {
            getUserdata: function() {
                var e = i.getGlobalValue("aplus")
                  , t = this.options.config || {}
                  , a = {};
                t && !t.is_auto && t.gokey && ("string" == typeof t.gokey ? a = n.param2obj(t.gokey) : "object" == typeof t.gokey && (a = t.gokey));
                var s = function(e) {
                    r(e) ? e.forEach(function(e) {
                        a = o.assign(a, e)
                    }) : a = o.assign(a, e)
                };
                s(e.getMetaInfo("aplus-globaldata")),
                s(e.getMetaInfo("aplus-cpvdata"));
                var u = this.options.context || {}
                  , l = u.userdata || {};
                return s(l),
                a
            },
            processLodashDollar: function() {
                var e = this.options.config || {}
                  , t = i.getGoldlogVal("_$") || {};
                e && e.referrer && (t.page_referrer = e.referrer),
                i.setGoldlogVal("_$", t)
            },
            updatePre: function(e) {
                var t = i.getGoldlogVal("_$") || {};
                return t.page_referrer && (e.pre = t.page_referrer),
                e
            },
            run: function() {
                var e = this.options.context.what_to_send.logdata
                  , t = o.assign(this.getUserdata(), e.userdata || {});
                this.processLodashDollar(),
                e.gokey = o.assign(e.gokey, t),
                e = this.updatePre(e),
                this.options.context.what_to_send.logdata = e,
                this.options.context.userdata = e.gokey
            }
        }
    }
}
, function(e, t) {
    "use strict";
    e.exports = function(e) {
        return Array.isArray ? Array.isArray(e) : /Array/.test(Object.prototype.toString.call(e))
    }
}
, function(e, t, a) {
    "use strict";
    var n = a(86)
      , r = a(87)
      , o = a(13);
    e.exports = function() {
        return {
            getExParamsInfo: function() {
                var e = n.getExParams();
                return this.options.context.what_to_send.logdata.exparams = e,
                r(e)
            },
            run: function() {
                var e = this.options.context.what_to_send.logdata.gokey;
                e = o(this.getExParamsInfo(), e),
                this.options.context.what_to_send.logdata.gokey = e
            }
        }
    }
}
, function(e, t, a) {
    "use strict";
    function n(e) {
        for (var t, a = e.split("&"), n = 0, r = a.length, o = []; n < r; n++)
            t = a[n].split("="),
            o.push([t.shift(), t.join("=")]);
        return o
    }
    function r(e, t) {
        var a = "aplus&sidx=aplusSidex&ckx=aplusCkx"
          , n = e || a;
        try {
            if (t) {
                var r = u.param2obj(t)
                  , o = [d.APLUS, "cna", d.SPM_CNT, d.SPM_URL, d.SPM_PRE, "logtype", "pre", "uidaplus", "asid", "sidx", "trid", "gokey"];
                s(o, function(e) {
                    r.hasOwnProperty(e) && (g().w("Can not inject keywords: " + e),
                    delete r[e])
                }),
                delete r[""];
                var i = "";
                if (e) {
                    var c = e.match(/aplus&/).index
                      , p = c > 0 ? u.param2obj(e.substring(0, c)) : {};
                    delete p[""],
                    i = u.obj2param(l.assign(p, r)) + "&" + e.substring(c, e.length)
                } else
                    i = u.obj2param(r) + "&" + a;
                return i
            }
            return n
        } catch (e) {
            return n
        }
    }
    function o() {
        var e = aplus && aplus._$ ? aplus._$ : {}
          , t = e.meta_info || {};
        return t["aplus-exparams"] || ""
    }
    function i() {
        var e = c.getCurrentNode()
          , t = p.tryToGetAttribute(e, "exparams")
          , a = r(t, o()) || "";
        return a && a.replace(/&amp;/g, "&").replace(/\buser(i|I)d=/, "uidaplus=")
    }
    var s = a(18)
      , u = a(27)
      , l = a(28)
      , c = a(43)
      , p = a(23)
      , f = a(42)
      , g = a(20)
      , d = a(3);
    t.mergeExparams = r,
    t.getExParams = i,
    t.getExparamsInfos = function(e, t) {
        var a = {}
          , r = e || ["uidaplus", "pc_i", "pu_i"]
          , o = i() || "";
        o = o.replace(/&aplus&/, "&");
        for (var s = n(o) || [], u = function(e) {
            return f.indexof(r, e) > -1
        }, l = 0; l < s.length; l++) {
            var c = s[l]
              , p = c[0] || ""
              , g = c[1] || "";
            p && g && ("EXPARAMS" === t || u(p)) && (a[p] = g)
        }
        return a
    }
}
, function(e, t, a) {
    var n = a(27);
    e.exports = function(e) {
        var t = {};
        try {
            var a = n.param2obj(e.replace(/&amp;/g, "&").replace(/\buser(i|I)d=/, "uidaplus=").replace(/&aplus&/, "&"));
            a.uidaplus && (t.uidaplus = a.uidaplus),
            t.pc_i = a.pc_i,
            t.pu_i = a.pu_i
        } catch (e) {
            console && console.log(e)
        }
        return t
    }
}
, function(e, t, a) {
    "use strict";
    function n(e) {
        var t, a, n, r, i = [], s = {};
        for (t = e.length - 1; t >= 0; t--)
            a = e[t],
            n = a[0],
            n && n.indexOf(o.s_plain_obj) == -1 && s.hasOwnProperty(n) || (r = a[1],
            ("aplus" == n || r) && (i.unshift([n, r]),
            s[n] = 1));
        return i
    }
    function r(e) {
        var t, a, n, r, i = [], u = {
            logtype: !0,
            cache: !0,
            scr: !0,
            "spm-cnt": !0
        };
        for (t = e.length - 1; t >= 0; t--)
            if (a = e[t],
            n = a[0],
            r = a[1],
            !(s.isStartWith(n, o.s_plain_obj) && !s.isStartWith(n, o.mkPlainKeyForExparams()) || u[n]))
                if (s.isStartWith(n, o.mkPlainKeyForExparams())) {
                    var l = o.param2arr(r);
                    if ("object" == typeof l && l.length > 0)
                        for (var c = l.length - 1; c >= 0; c--) {
                            var p = l[c];
                            p && p[1] && i.unshift([p[0], p[1]])
                        }
                } else
                    i.unshift([n, r]);
        return i
    }
    var o = a(33)
      , i = a(42)
      , s = a(28)
      , u = a(2)
      , l = a(72)
      , c = a(17)
      , p = a(3);
    e.exports = function() {
        return {
            keyIsAvailable: function(e) {
                var t = ["functype", "funcId", "spm-cnt", "spm-url", "spm-pre", "_ish5", "_is_g2u", "_h5url", "cna", "isonepage", "lver", "jsver"];
                return i.indexof(t, e) === -1
            },
            valIsAvailable: function(e) {
                return "object" != typeof e && "function" != typeof e
            },
            upUtData: function(e, t) {
                var a = this;
                if (e = e ? e : {},
                t && "object" == typeof t)
                    for (var n in t) {
                        var r = t[n];
                        n && a.valIsAvailable(r) && a.keyIsAvailable(n) && (e[n] = r)
                    }
                return e
            },
            getToUtData: function() {
                var e = u.getGoldlogVal("_$") || {}
                  , t = u.getGlobalValue(p.APLUS)
                  , a = e.spm || {}
                  , i = this.options.context || {}
                  , s = this.options.config || {}
                  , f = i.what_to_send || {}
                  , g = f.logdata || {}
                  , d = g.sdk_info || {}
                  , m = this.options.context.etag || {}
                  , h = r(n(g.exparams || []));
                h = o.arr2obj(h);
                var _ = i.userdata
                  , v = location.href
                  , b = {}
                  , y = c.getParamFromUrl("scm", v) || "";
                y && (b.scm = y);
                var A = c.getParamFromUrl("pg1stepk", v) || "";
                A && (b.pg1stepk = A);
                var P = c.getParamFromUrl("point", v) || "";
                P && (b.issb = 1),
                d && d.mansndlog && (b.mansndlog = d.mansndlog),
                b = this.upUtData(b, h),
                b = this.upUtData(b, g.gokey),
                b = this.upUtData(b, _),
                b.functype = "page",
                b.funcId = "2001",
                t && t.globalConfig && t.globalConfig.isAli ? b.url = (location.protocol || "https:") + "//" + location.host + location.pathname : b.url = location.href,
                s.pageName && (b.url = s.pageName),
                b._ish5 = "1",
                b._h5url = v,
                b._toUT = 2,
                b._bridgeName = "WindVane",
                b._bridgeVersion = "3.0.7",
                a.spm_cnt && (b[p.SPM_CNT] = a.spm_cnt || ""),
                a.spm_url && (b[p.SPM_URL] = a.spm_url || ""),
                a.spm_pre && (b[p.SPM_PRE] = a.spm_pre || ""),
                b.cna = m.cna || l.getCookieCna("cna"),
                b.lver = d.lver,
                b.jsver = d.jsver,
                b.pver = "1.0.0",
                b.isonepage = -1;
                var w = t.getMetaInfo("aplus-utparam");
                return w && (b["utparam-cnt"] = JSON.stringify(w)),
                b._is_g2u_ = 1,
                b._slog = 1,
                b
            },
            run: function() {
                var e = this.options.context || {}
                  , t = e.what_to_send || {};
                t.pvdataToUt = this.getToUtData(),
                this.options.context.what_to_send = t
            }
        }
    }
}
, function(e, t, a) {
    "use strict";
    var n = a(2)
      , r = a(90);
    e.exports = function() {
        return {
            run: function() {
                var e = n.getGoldlogVal("_$") || {}
                  , t = this.options.context.can_to_sendpv || {}
                  , a = e.send_pv_count || 0
                  , o = this.options.config || {};
                return o.is_auto && a > 0 || !r.canSendPV(o.track_type) ? "done" : (t.flag = "YES",
                this.options.context.can_to_sendpv = t,
                e.send_pv_count = ++a,
                void n.setGoldlogVal("_$", e))
            }
        }
    }
}
, function(e, t, a) {
    function n(e) {
        var t = o.getGlobalValue(i.APLUS)
          , a = t.getMetaInfo(i.APLUS_EVENT_LIMITRATES);
        if (a && a.length > 0) {
            var n = l.find(a, function(t) {
                return t.eventId === e
            });
            if (n) {
                var r = Math.ceil(1e3 * Math.random());
                return r < 1e3 * n.samplingRate
            }
            return !0
        }
        return !0
    }
    function r() {
        var e = o.getGlobalValue("aplus")
          , t = e.globalConfig.isUM;
        return !!t
    }
    var o = a(2)
      , i = a(3)
      , s = a(91)
      , u = a(94)
      , l = a(42)
      , c = a(93)
      , p = a(28)
      , f = a(33);
    t.canToSendHJLJ = function(e, t) {
        var a = s.getDeviceStatus();
        if (!a)
            try {
                var r = c.getContext();
                return p.isEmptyObject(r) ? void 0 : t === i.APP_START || t === i.APP_END
            } catch (e) {}
        var o = s.getAutoTrackStatus()
          , l = s.getAutoEventStatus()
          , g = u.getAutoTrackStatus()
          , d = {};
        if (d = "string" == typeof e ? f.arr2obj(f.param2arr(e)) : e,
        d.auto_element) {
            if (2 === l || 2 === o)
                return;
            if (!o && !g)
                return
        }
        if (n(t))
            return !0
    }
    ,
    t.canSendPV = function(e) {
        if (!r())
            return !0;
        var t = s.getDeviceStatus()
          , a = s.getAutoPageStatus()
          , n = u.localAutoPVDisabled()
          , o = !0;
        if (t) {
            if ("1" === e)
                return !(2 === a || !a && n)
        } else
            o = !1;
        return o
    }
}
, function(e, t, a) {
    "use strict";
    function n(e) {
        var t;
        return t = c.isWeb() ? p.getLsRemoteCfg(g) : f().getSync(l.APLUS_REMOTE_CONFIG),
        t && t[e]
    }
    function r(e) {
        var t = c.getContext();
        t.aplus_queue.push({
            action: "aplus.setMetaInfo",
            arguments: [l.APLUS_DISABLE_AUTOEVENT_REMOTE, e]
        })
    }
    function o(e) {
        var t = c.getContext();
        t.aplus_queue.push({
            action: "aplus.setMetaInfo",
            arguments: [l.APLUS_DEVICE_ENABLE, e]
        })
    }
    function i(e) {
        var t = c.getContext();
        t.aplus_queue.push({
            action: "aplus.setMetaInfo",
            arguments: [l.APLUS_DISABLE_AUTOPV_REMOTE, e]
        })
    }
    function s(e) {
        var t = c.getContext();
        t.aplus_queue.push({
            action: "aplus.setMetaInfo",
            arguments: [l.APLUS_AUTOTRACK_ENABLED_REMOTE, e]
        })
    }
    var u = a(33)
      , l = a(3)
      , c = a(2)
      , p = a(29)
      , f = a(92)
      , g = "APLUS_REMOTE_CONFIG";
    t.getAutoEventStatus = function() {
        var e = c.getGlobalValue("aplus")
          , t = e.getMetaInfo(l.APLUS_DISABLE_AUTOEVENT_REMOTE) || n("codelessClickEventStatus");
        return t
    }
    ,
    t.getDeviceStatus = function() {
        var e = c.getGlobalValue("aplus");
        return n("currentDeviceEnable") || e.getMetaInfo(l.APLUS_DEVICE_ENABLE)
    }
    ,
    t.getAutoPageStatus = function() {
        var e = c.getGlobalValue("aplus")
          , t = e.getMetaInfo(l.APLUS_DISABLE_AUTOPV_REMOTE) || n("codelessCollectorPageStatus");
        return t
    }
    ,
    t.getAutoTrackStatus = function() {
        var e = c.getGlobalValue("aplus")
          , t = e.getMetaInfo(l.APLUS_AUTOTRACK_ENABLED_REMOTE) || n("codelessStatus");
        return t
    }
    ,
    t.enableCfg = function(e) {
        var t = c.getContext();
        e && (r(e.codelessClickEventStatus),
        i(e.codelessCollectorPageStatus),
        s(e.codelessStatus),
        o(e.currentDeviceEnable),
        e.eventSamplingRate && e.eventSamplingRate.length > 0 && t.aplus_queue.push({
            action: "aplus.setMetaInfo",
            arguments: [l.APLUS_EVENT_LIMITRATES, u.mapEventSampleRates(e.eventSamplingRate)]
        }),
        e.codelessIgnoreComponent && e.codelessIgnoreComponent.length > 0 && t.aplus_queue.push({
            action: "aplus.setMetaInfo",
            arguments: [l.APLUS_AUTOTRACK_CONFIG_REMOTE, e.codelessIgnoreComponent]
        }))
    }
}
, function(e, t, a) {
    var n = a(93)
      , r = a(9)
      , o = a(32)
      , i = a(33)
      , s = a(3);
    e.exports = function() {
        function e() {
            var e = n.getContext();
            this.load = function(t) {
                u ? (e.removeStorage({
                    key: a
                }),
                r(t) && t()) : (a = "aplus_cache_" + i.getAppKey() || "",
                e.getStorage({
                    key: a,
                    success: function(n) {
                        u = n && n.data ? o.parse(n.data) || {} : {},
                        l = !0,
                        e.removeStorage({
                            key: a
                        }),
                        r(t) && t()
                    },
                    fail: function() {
                        u = {},
                        l = !0,
                        e.removeStorage({
                            key: a
                        }),
                        r(t) && t()
                    }
                }))
            }
            ,
            this.save = function() {
                u && e.setStorage({
                    key: a,
                    data: o.stringfy(u)
                })
            }
            ,
            this.set = function(e, t) {
                u && (u[e] = t)
            }
            ,
            this.get = function(e) {
                return (u || {})[e]
            }
            ,
            this.remove = function(e) {
                u && u[e] && delete u[e]
            }
            ,
            this.getAll = function() {
                return u
            }
            ,
            this.clear = function() {
                u = null
            }
            ,
            this.has = function(e) {
                return !!this.get(e)
            }
            ,
            this.isLoaded = function() {
                return l
            }
            ,
            this.getSync = function(e) {
                try {
                    var t = n.getStorageSync(e);
                    return e === s.APLUS_IMPRINT_VERSION ? t : "string" == typeof t ? o.parse(t) : t
                } catch (e) {}
            }
            ,
            this.setSync = function(e, t) {
                try {
                    "object" == typeof t ? n.setStorageSync(e, JSON.stringify(t)) : n.setStorageSync(e, t)
                } catch (e) {}
            }
        }
        var t = null
          , a = ""
          , u = null
          , l = !1;
        return function() {
            return t || (t = new e),
            t
        }
    }()
}
, function(e, t, a) {
    "use strict";
    function n() {
        if ("boolean" == typeof l)
            return l;
        var e = !1;
        try {
            var t = navigator ? navigator.userAgent || navigator.swuserAgent : "";
            if (e = !!/AliApp/i.test(t),
            /AliApp\((AP|DingTalk|AMAP|UC|QUARK)/i.test(t) && (e = !1),
            /AliApp\(KB/i.test(t) && (e = !!/Mist/.test(t)),
            /AlipayIDE Taobao/.test(t) && (e = !0),
            e) {
                var a = c().ctx;
                o(a.canIUse) && (e = !!a.canIUse("callUserTrack"))
            }
        } catch (e) {}
        return l = e,
        e
    }
    function r() {
        return "boolean" == typeof l ? !!l : n()
    }
    var o = a(9)
      , i = a(2)
      , s = a(33)
      , u = a(3);
    t.getCurrentPage = function() {
        var e = getCurrentPages();
        return e[e.length - 1] || {}
    }
    ,
    t.getReferrerPage = function() {
        var e = getCurrentPages();
        return e[e.length - 2] || {}
    }
    ;
    var l;
    t.resetIsTB = function(e) {
        l = e
    }
    ,
    t.initIsTB = n;
    var c = function() {
        try {
            return {
                ctx: dd,
                platType: "dd",
                sdkType: "ddmp",
                logDomain: "/ddm_logs"
            }
        } catch (e) {
            try {
                return {
                    ctx: my,
                    platType: my && my.tb ? "taobao" : "my",
                    sdkType: my && my.tb ? "taobaomp" : "mymp",
                    logDomain: "/alipaym_logs"
                }
            } catch (e) {
                try {
                    return {
                        ctx: tt,
                        platType: "tt",
                        sdkType: "ttmp",
                        logDomain: "/bytedancem_logs"
                    }
                } catch (e) {
                    try {
                        return {
                            ctx: swan,
                            platType: "bd",
                            sdkType: "bdmp",
                            logDomain: "/baidum_logs"
                        }
                    } catch (e) {
                        try {
                            return {
                                ctx: wx,
                                platType: "wx",
                                sdkType: "wxmp",
                                logDomain: "/wxm_logs"
                            }
                        } catch (e) {
                            return {
                                ctx: {},
                                platType: "UNKNOW",
                                sdkType: "UNKNOW"
                            }
                        }
                    }
                }
            }
        }
    };
    t.isTB = r,
    t.getPlatformType = function() {
        return c().platType
    }
    ,
    t.getSdkType = function() {
        return c().sdkType
    }
    ,
    t.getContext = function() {
        return c().ctx
    }
    ,
    t.getLogDomain = function() {
        return c().logDomain
    }
    ;
    var p = "httpRequest"
      , f = "request"
      , g = function() {};
    t.request = function(e, t, a, n) {
        var r = i.getGlobalValue("aplus")
          , l = c().ctx;
        o(n) || (n = g),
        o(a) || (a = g);
        var d = t.requestMethodName || f
          , m = l[d];
        o(m) || d === f || (d = f,
        m = l[d]),
        o(m) || d === p || (d = p,
        m = l[d]);
        var h, _ = t && t.dataType ? t.dataType : "base64", v = t && t.timeout ? t.timeout : 3e3, b = t.method || "GET", y = r.getMetaInfo(u.APLUS_MINI_REQUEST_TIMEOUT);
        e = s.fixDomain(e);
        var A;
        if (o(m)) {
            var P = {
                url: e,
                method: b,
                dataType: _,
                timeout: y || v,
                success: function(e) {
                    h || (h = !0,
                    a(e))
                },
                fail: function(e) {
                    h || (h = !0,
                    n({
                        failure: !0,
                        data: e
                    }))
                }
            };
            "POST" === b && t.data && (p === d ? (P.headers = {
                "Content-Type": "application/json"
            },
            P.dataType = "json",
            P.data = JSON.stringify(t.data)) : P.data = t.data);
            var w = r.getMetaInfo("aplus-request-extinfo");
            "object" == typeof w && (P._extInfo = w),
            m(P)
        } else
            h || (h = !0,
            n({
                failure: !0,
                data: A
            }));
        setTimeout(function() {
            h || (h = !0,
            A = 'aplus log request"' + e + ' timeout", time spend' + v + "ms",
            console && console.warn(A),
            n({
                failure: !0,
                data: A
            }))
        }, v)
    }
    ,
    t.setStorageSync = function(e, t) {
        try {
            var a = c().platType
              , n = c().ctx;
            "my" === a || "taobao" === a ? n.setStorageSync({
                key: e,
                data: t
            }) : n.setStorageSync(e, t)
        } catch (e) {}
    }
    ,
    t.getStorageSync = function(e) {
        try {
            var t = c().platType
              , a = c().ctx;
            return "my" === t || "taobao" === t ? a.getStorageSync({
                key: e
            }).data : a.getStorageSync(e)
        } catch (e) {}
    }
}
, function(e, t, a) {
    "use strict";
    var n = a(3)
      , r = a(2);
    t.localAutoEventDisabled = function() {
        var e = r.getGlobalValue("aplus");
        return !!e.getMetaInfo(n.APLUS_DISABLE_AUTOEVENT)
    }
    ,
    t.localAutoPVDisabled = function() {
        var e = r.getGlobalValue("aplus");
        return !(!e.getMetaInfo(n.APLUS_DISABLE_AUTOPV) && "MAN" !== e.getMetaInfo("aplus-waiting"))
    }
    ,
    t.getAutoTrackStatus = function() {
        var e = r.getGlobalValue("aplus");
        return !!e.getMetaInfo(n.APLUS_AUTOTRACK_ENABLED)
    }
}
, function(e, t, a) {
    "use strict";
    var n = a(36)
      , r = a(2);
    e.exports = function() {
        return {
            run: function() {
                var e = r.getGlobalValue("aplus")
                  , t = e._$ || {}
                  , a = this.options.context || {};
                r.setGoldlogVal("pv_context", a);
                var o = e.spm_ab || []
                  , i = o.join(".")
                  , s = t.send_pv_count
                  , u = {
                    cna: a.etag ? a.etag.cna : "",
                    count: s,
                    spmab_pre: e.spmab_pre
                };
                n.doPubMsg(["sendPV", "complete", i, u]),
                n.doCachePubs(["sendPV", "complete", i, u])
            }
        }
    }
}
, function(e, t, a) {
    "use strict";
    var n = a(27)
      , r = a(84)
      , o = a(28)
      , i = a(2);
    e.exports = function() {
        return {
            getUserData: function() {
                var e = i.getGlobalValue("aplus")
                  , t = this.options.context || {}
                  , a = t.userdata || {}
                  , s = t.what_to_send.logdata.gokey;
                s = o.assign(s, e.getMetaInfo("aplus-globaldata")),
                s = o.assign(s, n.param2obj(a.gokey));
                var u = e.getMetaInfo("aplus-exinfo");
                u && (s = o.assign(s, n.param2obj(u)));
                var l = e.getMetaInfo("aplus-exdata");
                return r(l) ? l.forEach(function(e) {
                    s = o.assign(s, e)
                }) : s = o.assign(s, e.getMetaInfo("aplus-exdata")),
                s
            },
            run: function() {
                this.options.context.what_to_send.logdata.gokey = this.getUserData()
            }
        }
    }
}
, function(e, t, a) {
    "use strict";
    var n = a(86)
      , r = a(87)
      , o = a(28);
    e.exports = function() {
        return {
            getExParamsInfo: function() {
                var e = n.getExParams();
                return this.options.context.what_to_send.logdata.exparams = e,
                r(e)
            },
            run: function() {
                var e = this.options.context.what_to_send.logdata.gokey;
                e = o.assign(this.getExParamsInfo(), e),
                this.options.context.what_to_send.logdata.gokey = e
            }
        }
    }
}
, function(e, t, a) {
    "use strict";
    var n = a(2)
      , r = a(3);
    e.exports = function() {
        return {
            getToUtData: function() {
                var e = n.getGoldlogVal("_$") || {}
                  , t = n.getGlobalValue(r.APLUS)
                  , a = e.spm || {}
                  , o = this.options.context || {}
                  , i = o.userdata || {}
                  , s = o.etag || {}
                  , u = o.what_to_send || {}
                  , l = u.logdata || {}
                  , c = l.sdk_info || {}
                  , p = l.gokey || {}
                  , f = []
                  , g = "";
                for (var d in p)
                    if ([r.SPM_CNT, r.SPM_URL, r.SPM_PRE].indexOf(d) === -1) {
                        var m = p[d];
                        "undefined" !== p[d] && void 0 !== p[d] || (m = ""),
                        f.push(d + "=" + m)
                    }
                f.length > 0 && (g = f.join("&"));
                var h = location.href
                  , _ = {};
                _.functype = "ctrl",
                _.funcId = l.event_code,
                t && t.globalConfig && t.globalConfig.isAli ? _.url = (location.protocol || "https:") + "//" + location.host + location.pathname : _.url = location.href,
                p.pageName && (_.url = p.pageName),
                _.logkey = l.logkey,
                _.gokey = encodeURIComponent(g),
                _.gmkey = l.gmkey,
                _._ish5 = "1",
                _._h5url = h,
                _._is_g2u_ = 1,
                _._slog = 1,
                _._toUT = 2,
                _._bridgeName = "WindVane",
                _._bridgeVersion = "3.0.7",
                a.spm_cnt && (_[r.SPM_CNT] = a.spm_cnt || ""),
                a.spm_url && (_[r.SPM_URL] = a.spm_url || ""),
                a.spm_pre && (_[r.SPM_PRE] = a.spm_pre || ""),
                _.cna = s.cna,
                _.lver = c.lver,
                _.jsver = c.jsver,
                i.hasOwnProperty("autosend") && (_.autosend = i.autosend);
                var v = t.getMetaInfo("aplus-utparam");
                return v && (_["utparam-cnt"] = JSON.stringify(v)),
                _
            },
            run: function() {
                var e = this.options.context || {}
                  , t = e.what_to_send || {};
                t.pvdataToUt = this.getToUtData(),
                this.options.context.what_to_send = t
            }
        }
    }
}
, function(e, t, a) {
    "use strict";
    e.exports = function() {
        return {
            run: function() {
                a(100)()
            }
        }
    }
}
, function(e, t, a) {
    "use strict";
    var n = a(43)
      , r = a(2)
      , o = a(101)
      , i = a(108)
      , s = a(109)
      , u = a(110)
      , l = a(111)
      , c = a(112);
    e.exports = function() {
        var e = r.getGoldlogVal("_$") || {}
          , t = e.meta_info
          , a = t["aplus-touch"]
          , p = {
            isTouchEnabled: n.isTouch() || "1" === a || "tap" === a,
            isTerminal: e.is_terminal || /WindVane/i.test(navigator.userAgent)
        };
        window.g_SPM = {
            spm_d_for_ad: {},
            resetModule: o.spm_resetModule,
            anchorBeacon: o.spm_spmAnchorChk,
            getParam: o.spm_getSPMParam,
            spm: o.spm_forwap
        },
        r.setGoldlogVal("spmAPI", c.run()),
        i.run(p),
        s.run(p),
        u.run(p),
        l.run(p)
    }
}
, function(e, t, a) {
    "use strict";
    function n(e) {
        if (e && 1 === e.nodeType) {
            s.tryToRemoveAttribute(e, "data-spm-max-idx"),
            s.tryToRemoveAttribute(e, "data-auto-spmd-max-idx");
            for (var t = l.nodeListToArray(e.getElementsByTagName("a")), a = l.nodeListToArray(e.getElementsByTagName("area")), n = t.concat(a), r = 0; r < n.length; r++)
                s.tryToRemoveAttribute(n[r], p)
        }
    }
    function r(e, t) {
        var a = s.tryToGetAttribute(e, p)
          , n = "0";
        if (a && c.spm_isSPMAnchorIdMatch(a))
            c.spm_anchorEnsureSPMId_inHref(e, a, t);
        else {
            var r = c.spm_spmGetParentSPMId(e.parentNode);
            if (n = r.spm_c,
            !n)
                return void c.spm_dealNoneSPMLink(e, t);
            c.spm_initSPMModule(r.el, n, t),
            c.spm_initSPMModule(r.el, n, t, !0)
        }
    }
    function o(e) {
        var t, a = e.tagName;
        "A" !== a && "AREA" !== a ? t = c.spm_getParamForAD(e) : (r(e, !0),
        t = s.tryToGetAttribute(e, p)),
        t || (t = "0.0.0.0");
        var n = u.getPvId();
        4 === t.split(".").length && n && (t += "." + n),
        "A" !== a && "AREA" !== a && s.tryToSetAttribute(e, p, t),
        t = t.split(".");
        var o = {
            a: t[0],
            b: t[1],
            c: t[2],
            d: t[3]
        };
        return t[4] && (o.e = t[4]),
        o
    }
    function i(e, t) {
        var a = o(e)
          , n = [a.a, a.b, a.c, a.d];
        return t && a.e && n.push(a.e),
        n.join(".")
    }
    var s = a(23)
      , u = a(102)
      , l = a(29)
      , c = a(104)
      , p = "data-spm-anchor-id";
    t.spm_resetModule = n,
    t.spm_spmAnchorChk = r,
    t.spm_getSPMParam = o,
    t.spm_forwap = i
}
, function(e, t, a) {
    "use strict";
    function n() {
        var e, t = i.getGlobalValue("aplus");
        try {
            var a = t.getMetaInfo("aplus-disable-pvid") + "";
            "true" === a ? e = !0 : "false" === a && (e = !1)
        } catch (e) {}
        return e
    }
    function r() {
        var e = i.getGlobalValue("aplus");
        return n() ? "" : e.pvid
    }
    var o = a(36)
      , i = a(2)
      , s = a(103);
    t.isDisablePvid = n,
    t.makePVId = function() {
        var e = i.getGlobalValue("aplus")
          , t = e.pvid
          , a = location && location.href
          , u = document && document.title;
        e.pvid = s.getLogId(a, u),
        e.getPvId = r;
        var l = ["pvidChange", {
            pre_pvid: t,
            pvid: e.pvid
        }];
        return o.doPubMsg(l),
        o.doCachePubs(l),
        n() ? "" : e.pvid
    }
    ,
    t.getPvId = r
}
, function(e, t, a) {
    "use strict";
    function n(e, t, a) {
        return e ? r.hash(encodeURIComponent(e)).substr(0, t) : a
    }
    var r = a(48)
      , o = function(e) {
        function t(e) {
            var t = "0123456789abcdefhijklmnopqrstuvwxyzABCDEFHIJKLMNOPQRSTUVWXYZ"
              , a = "0123456789abcdefghijkmnopqrstuvwxyzABCDEFGHIJKMNOPQRSTUVWXYZ";
            return 1 == e ? t.substr(Math.floor(60 * Math.random()), 1) : 2 == e ? a.substr(Math.floor(60 * Math.random()), 1) : "0"
        }
        for (var a, n = "", r = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", o = !1; n.length < e; )
            a = r.substr(Math.floor(62 * Math.random()), 1),
            !o && n.length <= 2 && ("g" == a.toLowerCase() || "l" == a.toLowerCase()) && (0 === n.length && "g" == a.toLowerCase() ? Math.random() < .5 && (a = t(1),
            o = !0) : 1 == n.length && "l" == a.toLowerCase() && "g" == n.charAt(0).toLowerCase() && (a = t(2),
            o = !0)),
            n += a;
        return n
    };
    t.getLogId = function(e, t) {
        var a = o(8)
          , r = a.substr(0, 4)
          , i = a.substr(0, 6);
        return [n(e, 4, r), n(t, 4, r), i].join("")
    }
}
, function(e, t, a) {
    "use strict";
    function n(e) {
        for (var t, a = "data-spm-ab-max-idx", n = {}, r = ""; e && e.tagName != S && e.tagName != w; ) {
            if (!r && (r = v.tryToGetAttribute(e, "data-spm-ab"))) {
                t = parseInt(v.tryToGetAttribute(e, a)) || 0,
                n.a_spm_ab = r,
                n.ab_idx = ++t,
                e.setAttribute(a, t);
                break
            }
            if (v.tryToGetAttribute(e, "data-spm"))
                break;
            e = e.parentNode
        }
        return n
    }
    function r() {
        var e = b.getGoldlogVal("_$") || {}
          , t = e.spm.data;
        return [t.a, t.b].join(".")
    }
    function o(e) {
        var t = r()
          , a = e.split(".");
        return a[0] + "." + a[1] == t
    }
    function i(e, t) {
        var a = b.getGlobalValue("aplus") || {};
        if (!a.isUT4Aplus || "UT4Aplus" !== a.getMetaInfo("aplus-toUT")) {
            if (e && /&?\bspm=[^&#]*/.test(e) && (e = e.replace(/&?\bspm=[^&#]*/g, "").replace(/&{2,}/g, "&").replace(/\?&/, "?").replace(/\?$/, "")),
            !t)
                return e;
            var n, r, o, i, s, u, l, c = "&";
            e.indexOf("#") !== -1 && (o = e.split("#"),
            e = o.shift(),
            r = o.join("#")),
            i = e.split("?"),
            s = i.length - 1,
            o = i[0].split("//"),
            o = o[o.length - 1].split("/"),
            u = o.length > 1 ? o.pop() : "",
            s > 0 && (n = i.pop(),
            e = i.join("?")),
            n && s > 1 && n.indexOf("&") == -1 && n.indexOf("%") !== -1 && (c = "%26");
            var p = "";
            if (e = e + "?spm=" + p + t + (n ? c + n : "") + (r ? "#" + r : ""),
            l = h.isContain(u, ".") ? u.split(".").pop().toLowerCase() : "") {
                if ({
                    png: 1,
                    jpg: 1,
                    jpeg: 1,
                    gif: 1,
                    bmp: 1,
                    swf: 1
                }.hasOwnProperty(l))
                    return 0;
                !n && s <= 1 && (r || {
                    htm: 1,
                    html: 1,
                    php: 1,
                    aspx: 1,
                    shtml: 1,
                    xhtml: 1
                }.hasOwnProperty(l) || (e += "&file=" + u))
            }
            return e
        }
    }
    function s(e, t) {
        var a = b.getGlobalValue("aplus") || {};
        if (!a.isUT4Aplus || "UT4Aplus" !== a.getMetaInfo("aplus-toUT")) {
            var n, r = e.innerHTML;
            r && r.indexOf("<") == -1 && (n = document.createElement("b"),
            n.style.display = "none",
            e.appendChild(n)),
            e.href = t,
            n && e.removeChild(n)
        }
    }
    function u(e, t, a) {
        if (!/^0\.0\.?/.test(t)) {
            var n = y.tryToGetHref(e)
              , o = r()
              , u = P.is_ignore_spm(e);
            if (u) {
                var l = m.param2obj(n);
                if (l.spm && l.spm.split)
                    for (var c = l.spm.split("."), p = t.split("."), f = 0; f < 3 && p[f] === c[f]; f++)
                        2 === f && c[3] && (t = l.spm)
            }
            e.setAttribute("data-spm-anchor-id", t);
            var g = A.getPvId();
            g && (t += "." + g);
            var d = "0.0";
            (g || o && o != d) && (u || a || (n = i(n, t)) && s(e, n))
        }
    }
    function l(e) {
        var t = v.tryToGetAttribute(e, E)
          , a = _.parseSemicolonContent(t) || {};
        return a
    }
    function c(e) {
        var t, a = b.getGoldlogVal("_$") || {}, n = a.spm.data;
        return "0" == n.a && "0" == n.b ? t = "0" : (t = v.tryToGetAttribute(e, T),
        t && t.match(/^d\w+$/) || (t = "")),
        t
    }
    function p(e, t) {
        for (var a = [], n = _.nodeListToArray(e.getElementsByTagName("a")), r = _.nodeListToArray(e.getElementsByTagName("area")), o = n.concat(r), i = 0; i < o.length; i++) {
            for (var s = !1, u = o[i], l = o[i]; (u = u.parentNode) && u != e; )
                if (v.tryToGetAttribute(u, T)) {
                    s = !0;
                    break
                }
            if (!s) {
                var c = v.tryToGetAttribute(l, x);
                t || "t" === c ? t && "t" === c && a.push(l) : a.push(l)
            }
        }
        return a
    }
    function f(e) {
        for (var t, a = e; e && e.tagName !== S && e.tagName !== w && e.getAttribute; ) {
            var n = e.getAttribute(T);
            if (n) {
                t = n,
                a = e;
                break
            }
            if (!(e = e.parentNode))
                break
        }
        return t && !/^[\w\-\.\/]+$/.test(t) && (t = "0"),
        {
            spm_c: t,
            el: a
        }
    }
    function g(e, t) {
        var a = parent !== self;
        if (!a && t)
            return [e, t].join(".");
        if (e && t)
            return e + ".i" + t;
        var n = window.g_SPM || (window.g_SPM = {})
          , r = n.spm_d_for_ad || {};
        return "number" == typeof r[e] ? r[e]++ : r[e] = 0,
        n.spm_d_for_ad = r,
        e + ".i" + r[e]
    }
    function d(e) {
        var t;
        return e && (t = e.match(/&?\bspm=([^&#]*)/)) ? t[1] : ""
    }
    var m = a(27)
      , h = a(28)
      , _ = a(29)
      , v = a(23)
      , b = a(2)
      , y = a(105)
      , A = a(102)
      , P = a(106)
      , w = "BODY"
      , S = "HTML"
      , T = "data-spm"
      , E = "data-spm-click"
      , x = "data-auto-spmd"
      , I = "data-spm-anchor-id";
    t.getGlobalSPMId = r,
    t.spm_isSPMAnchorIdMatch = o,
    t.spm_updateHrefWithSPMId = i,
    t.spm_writeHref = s,
    t.spm_anchorEnsureSPMId_inHref = u,
    t.getElDataSpm = l,
    t.spm_getAnchor4thId_spm_d = c,
    t.spm_getModuleLinks = p,
    t.spm_spmGetParentSPMId = f,
    t.get_spm_for_ad = g,
    t.spm_getParamForAD = function(e) {
        var t = v.tryToGetAttribute(e, I);
        if (!t) {
            var a = r()
              , n = e.parentNode;
            if (!n)
                return "";
            var o = l(e) || {}
              , i = o.locaid || ""
              , s = e.getAttribute(T) || i
              , u = f(n)
              , c = u.spm_c || 0;
            c && c.indexOf(".") !== -1 && (c = c.split("."),
            c = c[c.length - 1]),
            t = g(a + "." + c, s)
        }
        return t
    }
    ,
    t.spm_initSPMModule = function(e, t, a, i) {
        var s;
        if (t = t || e.getAttribute("data-spm") || "") {
            var f = p(e, i);
            if (0 !== f.length) {
                var g = t.split(".")
                  , d = h.isStartWith(t, "110") && 3 == g.length;
                d && (s = g[2],
                g[2] = "w" + (s || "0"),
                t = g.join("."));
                var m = r();
                if (m && m.match(/^[\w\-\*]+(\.[\w\-\*\/]+)?$/))
                    if (h.isContain(t, ".")) {
                        if (!h.isStartWith(t, m)) {
                            var _ = m.split(".");
                            g = t.split(".");
                            for (var b = 0; b < _.length; b++)
                                g[b] = _[b];
                            t = g.join(".")
                        }
                    } else
                        h.isContain(m, ".") || (m += ".0"),
                        t = m + "." + t;
                if (t.match && t.match(/^[\w\-\*]+\.[\w\-\*\/]+\.[\w\-\*\/]+$/)) {
                    for (var A = "data-auto-spmd-max-idx", P = "data-spm-max-idx", w = i ? A : P, S = parseInt(v.tryToGetAttribute(e, w)) || 0, T = 0; T < f.length; T++) {
                        var x = f[T]
                          , N = y.tryToGetHref(x)
                          , M = v.tryToGetAttribute(x, E);
                        if (i || N || M) {
                            d && x.setAttribute("data-spm-wangpu-module-id", s);
                            var C = x.getAttribute(I);
                            if (C && o(C))
                                u(x, C, a);
                            else {
                                var k, U, O = n(x.parentNode);
                                O.a_spm_ab ? (U = O.a_spm_ab,
                                k = O.ab_idx) : (U = void 0,
                                S++,
                                k = S);
                                var L, V = l(x) || {}, R = V.locaid || "";
                                R ? L = R : (L = c(x) || k,
                                i && (L = "at" + ((h.isNumber(L) ? 1e3 : "") + L))),
                                C = U ? t + "-" + U + "." + L : t + "." + L,
                                u(x, C, a)
                            }
                        }
                    }
                    e.setAttribute(w, S)
                }
            }
        }
    }
    ,
    t.spm_dealNoneSPMLink = function(e, t) {
        var a = b.getGlobalValue("aplus") || {}
          , n = a.getMetaInfo("aplus-getspmcd")
          , o = r()
          , i = y.tryToGetHref(e)
          , l = d(i)
          , p = null
          , f = o && 2 == o.split(".").length;
        if (f) {
            var g;
            return "function" == typeof n && (g = n(e, null, o)),
            p = g && "0" !== g.spm_c ? [o, g.spm_c, g.spm_d] : [o, 0, c(e) || 0],
            void u(e, p.join("."), t)
        }
        i && l && (i = i.replace(/&?\bspm=[^&#]*/g, "").replace(/&{2,}/g, "&").replace(/\?&/, "?").replace(/\?$/, "").replace(/\?#/, "#"),
        s(e, i))
    }
}
, function(e, t, a) {
    "use strict";
    var n = a(30);
    t.tryToGetHref = function(e) {
        var t;
        try {
            t = n.trim(e.getAttribute("href", 2))
        } catch (e) {}
        return t || ""
    }
}
, function(e, t, a) {
    "use strict";
    function n(e) {
        return !!e && !!e.match(/^[^\?]*\balipay\.(?:com|net)\b/i)
    }
    function r(e) {
        return !!e && !!e.match(/^[^\?]*\balipay\.(?:com|net)\/.*\?.*\bsign=.*/i)
    }
    function o(e) {
        var t = location.href;
        return e && t.split("#")[0] === e.split("#")[0]
    }
    function i(e) {
        for (var t; (e = e.parentNode) && "BODY" !== e.tagName; )
            if (t = u.tryToGetAttribute(e, g))
                return t;
        return ""
    }
    function s(e) {
        for (var t = ["mclick.simba.taobao.com", "click.simba.taobao.com", "click.tanx.com", "click.mz.simba.taobao.com", "click.tz.simba.taobao.com", "redirect.simba.taobao.com", "rdstat.tanx.com", "stat.simba.taobao.com", "s.click.taobao.com"], a = 0; a < t.length; a++)
            if (e.indexOf(t[a]) !== -1)
                return !0;
        return !1
    }
    var u = a(23)
      , l = a(28)
      , c = a(105)
      , p = a(2)
      , f = a(107)
      , g = "data-spm-protocol";
    t.is_ignore_spm = function(e) {
        var t = p.getGoldlogVal("_$") || {}
          , a = t.meta_info || {}
          , d = c.tryToGetHref(e)
          , m = i(e)
          , h = u.tryToGetAttribute(e, g)
          , _ = "i" === (h || m || a.spm_protocol);
        if (!d || s(d))
            return !0;
        var v = o(d) || f.isStartWithProtocol(d.toLowerCase())
          , b = n(d) || r(d)
          , y = v || b;
        return !(_ || !l.isStartWith(d, "#") && !y) || _
    }
}
, function(e, t, a) {
    var n = a(28);
    t.isStartWithProtocol = function(e) {
        for (var t = ["javascript:", "tel:", "sms:", "mailto:", "tmall://", "#"], a = 0, r = t.length; a < r; a++)
            if (n.isStartWith(e, t[a]))
                return !0;
        return !1
    }
}
, function(e, t, a) {
    "use strict";
    function n(e, t, a) {
        var n = u.parseSemicolonContent(t, {}, !0)
          , r = n.gostr || ""
          , o = n.locaid || ""
          , f = e.getAttribute("data-spm") || o
          , g = "CLK"
          , d = n.gokey || ""
          , m = p.spm_getSPMParam(e)
          , h = [m.a, m.b, m.c, f].join(".")
          , _ = r + "." + h;
        0 !== _.indexOf("/") && (_ = "/" + _);
        var v = []
          , b = ["gostr", "locaid", "gmkey", "gokey", "spm-cnt", "cna"];
        for (var y in n)
            n.hasOwnProperty(y) && l.indexof(b, y) === -1 && v.push(y + "=" + n[y]);
        v.push("_g_et=" + a),
        v.push("autosend=1"),
        d && v.length > 0 && (d += "&"),
        d += v.length > 0 ? v.join("&") : "",
        aplus && s(aplus.recordUdata) ? aplus.recordUdata(_, g, d, "GET", function() {}) : c().w("aplus.recordUdata is not function!"),
        i.tryToSetAttribute(e, "data-spm-anchor-id", h)
    }
    function r(e, t) {
        var a = t;
        window.g_SPM && (g_SPM._current_spm = p.spm_getSPMParam(t));
        for (var r; t && "HTML" !== t.tagName; ) {
            r = i.tryToGetAttribute(t, "data-spm-click");
            {
                if (r) {
                    n(t, r, "mousedown" === e.type ? e.type : "tap");
                    break
                }
                t = t.parentNode
            }
        }
        if (!r) {
            var o = f.getGlobalSPMId()
              , s = aplus.getMetaInfo("aplus-getspmcd");
            "function" == typeof s && s(a, e, o)
        }
    }
    var o = a(61)
      , i = a(23)
      , s = a(9)
      , u = a(29)
      , l = a(42)
      , c = a(20)
      , p = a(101)
      , f = a(104);
    t.run = function(e) {
        e && e.isTouchEnabled ? o.on(document, "tap", r) : o.on(document, "mousedown", r)
    }
}
, function(e, t, a) {
    "use strict";
    function n() {
        for (var e = document.getElementsByTagName("iframe"), t = 0; t < e.length; t++) {
            var a = e[t]
              , n = o.tryToGetAttribute(a, "data-spm-src");
            if (!a.src && n) {
                var r = s.spm_getSPMParam(a);
                if (r) {
                    var u = [r.a, r.b, r.c, r.d];
                    r.e && u.push(r.e),
                    r = u.join("."),
                    a.src = i.spm_updateHrefWithSPMId(n, r)
                } else
                    a.src = n
            }
        }
    }
    function r() {
        function e() {
            t++,
            t > 10 && (a = 3e3),
            n(),
            setTimeout(e, a)
        }
        var t = 0
          , a = 500;
        e()
    }
    var o = a(23)
      , i = a(104)
      , s = a(101);
    t.run = function(e) {
        e && !e.isTerminal && r()
    }
}
, function(e, t, a) {
    "use strict";
    function n(e, t) {
        for (var a, n = window; t && (a = t.tagName); ) {
            if ("A" === a || "AREA" === a) {
                o.spm_spmAnchorChk(t, !1);
                var r = n.g_SPM || (n.g_SPM = {})
                  , i = r._current_spm = o.spm_getSPMParam(t)
                  , s = [];
                try {
                    s = [i.a, i.b, i.c, i.d];
                    var u = i.e || aplus.pvid || "";
                    u && s.push(u)
                } catch (e) {}
                break
            }
            if ("BODY" == a || "HTML" == a)
                break;
            t = t.parentNode
        }
    }
    var r = a(61)
      , o = a(101);
    t.run = function(e) {
        var t = document;
        e && e.isTouchEnabled ? r.on(t, "tapSpm", n) : (r.on(t, "mousedown", n),
        r.on(t, "keydown", n))
    }
}
, function(e, t, a) {
    "use strict";
    function n(e, t) {
        if (t || (t = p),
        p.evaluate)
            return t.evaluate(e, p, null, 9, null).singleNodeValue;
        for (var a, r = e.split("/"); !a && r.length > 0; )
            a = r.shift();
        var o, i = /^.+?\[@id='(.+?)']$/i, s = /^(.+?)\[(\d+)]$/i;
        return (o = a.match(i)) ? t = t.getElementById(o[1]) : (o = a.match(s)) && (t = t.getElementsByTagName(o[1])[parseInt(o[2]) - 1]),
        t ? 0 === r.length ? t : n(r.join("/"), t) : null
    }
    function r() {
        var e = {};
        for (var t in c)
            if (c.hasOwnProperty(t)) {
                var a = n(t);
                if (a) {
                    e[t] = 1;
                    var r = c[t]
                      , o = "A" === a.tagName ? r.spmd : r.spmc;
                    s.tryToSetAttribute(a, "data-spm", o || "")
                }
            }
        for (var i in e)
            e.hasOwnProperty(i) && delete c[i]
    }
    function o() {
        if (!l && f.spmData) {
            l = !0;
            var e = f.spmData.data;
            if (e && i.isArray(e)) {
                for (var t = 0; t < e.length; t++) {
                    var a = e[t]
                      , n = a.xpath;
                    n = n.replace(/^id\('(.+?)'\)(.*)/g, "//*[@id='$1']$2"),
                    c[n] = {
                        spmc: a.spmc,
                        spmd: a.spmd
                    }
                }
                r()
            }
        }
    }
    var i = a(42)
      , s = a(23)
      , u = a(61)
      , l = !1
      , c = {}
      , p = document
      , f = window;
    t.wh_updateXPathElements = r,
    t.init_wh = o,
    t.run = function() {
        u.DOMReady(function() {
            o()
        })
    }
}
, function(e, t, a) {
    "use strict";
    function n() {
        if (!s.data.a || !s.data.b) {
            var e = o._SPM_a
              , t = o._SPM_b;
            if (e && t)
                return e = e.replace(/^{(\w+\/)}$/g, "$1"),
                t = t.replace(/^{(\w+\/)}$/g, "$1"),
                s.is_wh_in_page = !0,
                void l.setAB(e, t);
            var a = aplus._$.meta_info;
            e = a["data-spm"] || a["spm-id"] || "0";
            var n = e.split(".");
            n.length > 1 && (e = n[0],
            t = n[1]),
            l.setA(e),
            t && l.setB(t);
            var r = i.getElementsByTagName("body");
            r = r && r.length ? r[0] : null,
            r && (t = c.tryToGetAttribute(r, "data-spm"),
            t ? l.setB(t) : 1 === n.length && l.setAB("0", "0"))
        }
    }
    function r() {
        var e = s.data.a
          , t = s.data.b;
        e && t && (aplus.spm_ab = [e, t])
    }
    var o = window
      , i = document
      , s = {}
      , u = {};
    s.data = u;
    var l = {}
      , c = a(23)
      , p = a(17)
      , f = a(102)
      , g = a(37)
      , d = location.href;
    l.setA = function(e) {
        s.data.a = e,
        r()
    }
    ,
    l.setB = function(e) {
        s.data.b = e,
        r()
    }
    ,
    l.setAB = function(e, t) {
        s.data.a = e,
        s.data.b = t,
        r()
    }
    ;
    var m = function(e) {
        var t = e.aplus || window.aplus || {}
          , a = t.meta_info || {};
        s.meta_protocol = a.spm_protocol;
        var r, o = t.spm_ab || [], i = o[0] || "0", u = o[1] || "0";
        "0" === i && "0" === u && (n(),
        i = s.data.a || "0",
        u = s.data.b || "0"),
        r = [s.data.a, s.data.b].join("."),
        s.spm_cnt = (r || "0.0") + ".0.0";
        var l = e.send_pv_count > 0 ? f.makePVId() : t.pvid;
        return l && (s.spm_cnt += "." + l),
        t._$.spm = s,
        l
    };
    l.spaInit = function(e, t, a) {
        var n = s.spm_url
          , r = window.g_SPM || {}
          , o = e._$ || {}
          , i = o.send_pv_count
          , u = m({
            aplus: e,
            meta_info: t,
            send_pv_count: i
        });
        s.spm_cnt = s.data.a + "." + s.data.b + ".0.0" + (u ? "." + u : "");
        var l = t["aplus-spm-fixed"];
        if ("1" !== l) {
            s.spm_pre = p.getSPMFromUrl(g.getRefer(e.globalConfig.NAME_STORAGE_KEYS)),
            s.origin_spm_pre = s.spm_pre,
            s.spm_url = p.getSPMFromUrl(location.href),
            s.origin_spm_url = s.spm_url;
            var c = r._current_spm || {};
            c && c.a && "0" !== c.a && c.b && "0" !== c.b ? (s.spm_url = [c.a, c.b, c.c, c.d, c.e].join("."),
            s.spm_pre = n) : i > 0 && a && "0" !== a[0] && "0" !== a[1] && (s.spm_url = a.concat(["0", "0"]).join("."),
            s.spm_pre = n),
            r._current_spm = {}
        }
    }
    ,
    l.init = function(e, t) {
        return s.spm_url = p.getSPMFromUrl(d),
        s.spm_pre = p.getSPMFromUrl(g.getRefer(e.globalConfig.NAME_STORAGE_KEYS)),
        m({
            aplus: e,
            meta_info: t
        })
    }
    ,
    l.resetSpmCntPvid = function() {
        var e = aplus.spm_ab;
        if (e && 2 === e.length) {
            var t = e.join(".") + ".0.0"
              , a = f.makePVId();
            a && (t = t + "." + a),
            s.spm_cnt = t,
            s.spm_url = t,
            aplus._$.spm = s
        }
    }
    ,
    t.run = function() {
        var e = aplus._$ || {}
          , t = e.meta_info;
        return l.init(aplus, t),
        l
    }
}
, function(e, t, a) {
    "use strict";
    e.exports = function() {
        return {
            run: function() {
                a(114)(this.options.context.logConfig)
            }
        }
    }
}
, function(e, t, a) {
    "use strict";
    var n = a(36)
      , r = a(2);
    e.exports = function(e) {
        var t = r.getGlobalValue("aplus");
        if (!t._aplus_api) {
            t._aplus_api = {
                status: "complete"
            };
            var o = a(115).run.create({
                logConfig: e
            });
            for (var i in o)
                t[i] = o[i];
            a(102).makePVId();
            var s = ["aplusReady", "complete"];
            n.doPubMsg(s),
            n.doCachePubs(s)
        }
    }
}
, function(e, t, a) {
    "use strict";
    function n() {
        var e = 5e3;
        try {
            var t = g.getGlobalValue("aplus")
              , a = t.getMetaInfo("aplus-mmstat-timeout");
            if (a) {
                var n = parseInt(a);
                n >= 1e3 && n <= 1e4 && (e = n)
            }
        } catch (e) {}
        return e
    }
    function r(e, t, a) {
        var n = e[0]
          , r = e[1]
          , o = (a || {}).spm
          , i = (a || {}).logkey
          , s = 1;
        if (o && o[n]) {
            var u = o[n];
            s = u.cp,
            u[r] && (s = u[r].cp)
        } else
            i && i[t] && (s = i[t]);
        var l = Math.ceil(Math.random() * Math.floor(1 / s));
        return l
    }
    var o = document
      , i = a(10)
      , s = a(72)
      , u = a(61)
      , l = a(34)
      , c = a(20)
      , p = a(36)
      , f = a(28)
      , g = a(2)
      , d = a(9)
      , m = a(3)
      , h = a(21)
      , _ = a(116)
      , v = a(42)
      , b = a(90)
      , y = a(119)
      , A = a(26)
      , P = a(120)
      , w = []
      , S = []
      , T = []
      , E = []
      , x = function() {};
    t.run = i.extend({
        beforeSendPV: function(e) {
            w.push(e)
        },
        afterSendPV: function(e) {
            S.push(e)
        },
        launch: function() {
            l.logger({
                msg: "warning: This interface is deprecated, can not send pv log, please use goldlog.sendPV instead! API: http://log.alibaba-inc.com/log/info.htm?type=2277&id=31"
            })
        },
        send: function(e, t, a) {
            var r, o = g.getGlobalValue("aplus");
            if (/^\/\//.test(e)) {
                var i = m.HTTPS;
                /^\/\/(\d+\.){3,}\d+/.test(e) && (i = "http:"),
                e = i + e
            }
            return r = "POST" === a && navigator && navigator.sendBeacon ? P.postData(e, t) : P.sendImg(e + "?" + t, n()),
            o.req = r,
            r
        },
        sendPV: function(e, t) {
            if (e = e || {},
            f.any(w, function(t) {
                return t(a, e) === !1
            }))
                return !1;
            var a = g.getGlobalValue("aplus")
              , n = a.getMetaInfo(m.APLUS_SKIP_APV_RULES) || [];
            if (!v.itemMatch(n, location.href) || !e.is_auto) {
                var r = new _;
                e.recordType = "PV";
                var o = a.globalConfig.isUM
                  , i = a.globalConfig.isAli;
                (i || o) && "GET" !== e.method && (e.method = "POST");
                var s = a.logConfig.pv;
                return r.run({
                    plugins: s.plugins,
                    context: f.cloneDeep(s.context)
                }, {
                    config: e,
                    userdata: t,
                    pubsubType: "pv",
                    messageFnQueue: S,
                    middlewareMessageKey: "mw_change_pv"
                }),
                !0
            }
        },
        pageEnter: function(e) {
            h.pushIntoGoldlogQueue(m.PUBLISH, [m.PAGE_ENTER, e]),
            h.pushIntoGoldlogQueue(m.CACHE_PUBS, [m.PAGE_ENTER, e])
        },
        getParam: function(e) {
            var t = window.WindVane || {}
              , a = t && "function" == typeof t.getParam ? t.getParam(e) : "";
            return a
        },
        beforeRecord: function(e) {
            T.push(e)
        },
        afterRecord: function(e) {
            E.push(e)
        },
        record: function(e, t, a, n, o) {
            var i = g.getGlobalValue("aplus")
              , s = i.globalConfig.isAli
              , u = i.globalConfig.isUM;
            if (e && 0 !== e.indexOf("/") && s && (e = "/" + e),
            f.any(T, function(e) {
                return e(i) === !1
            }))
                return !1;
            var l = 1
              , c = i.spm_ab instanceof Array;
            if (s && c && i.spm_ab.length > 1 && (l = r(i.spm_ab, e, i.getMetaInfo("aplus-report-rate"))),
            1 === l) {
                var p = new _
                  , m = i.logConfig.hjlj;
                return u ? (b.canToSendHJLJ(a, e) && p.run({
                    plugins: m.plugins,
                    context: f.cloneDeep(m.context)
                }, {
                    config: {
                        recordType: "COMMON_HJLJ",
                        method: u ? n || "POST" : n
                    },
                    userdata: {
                        logkey: e,
                        gmkey: t,
                        gokey: a || {}
                    },
                    pubsubType: "hjlj",
                    messageFnQueue: E,
                    middlewareMessageKey: "mw_change_hjlj"
                }, function() {
                    d(o) && o()
                }),
                !0) : (p.run({
                    plugins: m.plugins,
                    context: f.cloneDeep(m.context)
                }, {
                    config: {
                        recordType: "COMMON_HJLJ",
                        method: u ? n || "POST" : n
                    },
                    userdata: {
                        logkey: e,
                        gmkey: t,
                        gokey: a || {}
                    },
                    pubsubType: "hjlj",
                    messageFnQueue: E,
                    middlewareMessageKey: "mw_change_hjlj"
                }, function() {
                    d(o) && o()
                }),
                !0)
            }
            return !1
        },
        recordUdata: function(e, t, a, n, r) {
            var o = g.getGlobalValue("aplus")
              , i = new _
              , s = o.logConfig.hjlj
              , u = o.globalConfig.isAli;
            return i.run({
                plugins: s.plugins,
                context: f.cloneDeep(s.context)
            }, {
                config: {
                    recordType: "DATACLICK_HJLJ",
                    method: u ? n : n || "POST"
                },
                userdata: {
                    logkey: e,
                    gmkey: t,
                    gokey: a || {}
                },
                pubsubType: "hjlj",
                messageFnQueue: E,
                middlewareMessageKey: "mw_change_hjlj"
            }, function() {
                d(r) && r()
            }),
            !0
        },
        setPageSPM: function(e, t, a) {
            var n = g.getGlobalValue("aplus")
              , r = n.getMetaInfo("aplus-spm-fixed")
              , o = "function" == typeof a ? a : function() {}
            ;
            n.spm_ab = n.spm_ab || [];
            var i = f.cloneDeep(n.spm_ab);
            e && (n.spm_ab[0] = "" + e,
            n._$.spm.data.a = "" + e),
            t && (n.spm_ab[1] = "" + t,
            n._$.spm.data.b = "" + t);
            var s = A.qGet();
            if (n.spmAPI && n.spmAPI.spaInit(n, s, i),
            "1" !== r) {
                var u = i.join(".");
                n.spmab_pre = u
            }
            var l = ["setPageSPM", {
                spmab_pre: n.spmab_pre,
                spmab: n.spm_ab.join(".")
            }];
            p.doPubMsg(l),
            p.doCachePubs(l),
            y.resetMetaAndBody(),
            y.resetModules(),
            o()
        },
        getPageSPM: function() {
            var e = g.getGlobalValue("aplus");
            return e.spm_ab
        },
        setMetaInfo: function(e, t, a) {
            var n, r, o = "OVERWRITE", i = o;
            if ("object" == typeof e ? (n = e.metaName,
            r = e.metaValue,
            i = e.mode || o) : (n = e,
            r = t),
            i !== o)
                return this.appendMetaInfo(n, r);
            if (A.setMetaInfo(n, r, a)) {
                var s = g.getGoldlogVal("_$") || {};
                s.meta_info = A.qGet();
                var u = g.setGoldlogVal("_$", s)
                  , l = ["setMetaInfo", n, r, a];
                return p.doPubMsg(l),
                p.doCachePubs(l),
                u
            }
        },
        appendMetaInfo: A.appendMetaInfo,
        updatePageProperties: function(e) {
            var t = g.getGlobalValue("aplus");
            e && "object" == typeof e ? (e._page && (e.pageName = e._page,
            t.setMetaInfo("aplus-pagename", e.pageName),
            delete e._page),
            t.appendMetaInfo("aplus-cpvdata", e)) : c().w("warning: typeof updatePageProperties's params must be object")
        },
        updateNextPageProperties: function(e) {
            var t = g.getGlobalValue("aplus");
            "object" == typeof e ? t.appendMetaInfo("aplus-nextpage-properties", e) : c().w("warning: typeof updateNextPageProperties's params must be object")
        },
        setUserProfile: function(e) {
            var t = g.getGlobalValue("aplus");
            "object" == typeof e ? t.setMetaInfo("aplus-user-profile", e) : c().w("warning: typeof setUserProfile's params must be object")
        },
        getUserProfile: function() {
            var e = g.getGlobalValue("aplus");
            return e.getMetaInfo("aplus-user-profile")
        },
        getMetaInfo: function(e) {
            return A.getMetaInfo(e)
        },
        on: u.on,
        cloneDeep: f.cloneDeep,
        setCookie: s.setCookie,
        getCookie: s.getCookie,
        pageAppear: x,
        pageDisappear: x,
        updatePageUtparam: x,
        updateNextPageUtparam: x,
        updateSessionProperties: function(e) {
            var t = g.getGlobalValue("aplus");
            "object" == typeof e && t.setMetaInfo("_session_args", e)
        },
        setPageName: function(e) {
            if (!e || "string" != typeof e)
                return void c().w("setPageName failed:  pagename=" + e);
            var t = o.querySelector("body");
            try {
                t.setAttribute("data-pagename", e)
            } catch (e) {
                c().w("setPageName failed:  err=" + e)
            }
        },
        getPageName: function() {
            return window.document.body && window.document.body.dataset && window.document.body.dataset.pagename ? window.document.body.dataset.pagename : ""
        },
        getElementSPM: function(e) {
            if (e && e.dataset)
                return e.getAttribute("data-spm-anchor-id")
        },
        recordAppLink: function(e, t, a) {
            if (!e.targetAppKey)
                return c().w("send $$_app_link failed: targetAppKey is null"),
                !1;
            var n = g.getGlobalValue("aplus");
            return n.record("$$_app_link", "OTHER", e, t, a)
        }
    })
}
, function(e, t, a) {
    "use strict";
    var n = a(18)
      , r = a(2)
      , o = a(9)
      , i = a(36)
      , s = a(34)
      , u = a(3)
      , l = a(117)
      , c = a(118)
      , p = function() {};
    p.prototype.run = function(e, t, a) {
        var p = new c;
        p.init({
            middleware: [],
            config: t.config,
            plugins: e.plugins
        });
        var f = p.run()
          , g = o(e.context) ? new e.context : e.context;
        g.userdata = t.userdata,
        g.logger = s.logger;
        var d = {
            context: g,
            pubsub: r.getGoldlogVal("aplus_pubsub"),
            pubsubType: t && t.pubsubType
        }
          , m = new l;
        m.create(d),
        m.wrap(f, function() {
            d.context.status = u.COMPLETE,
            t && (t.middlewareMessageKey && i.doPubMsg([t.middlewareMessageKey, d.context]),
            t.messageFnQueue && n(t.messageFnQueue, function(t) {
                t(r.getGlobalValue(u.APLUS), e)
            })),
            o(a) && a(d.context)
        })()
    }
    ,
    e.exports = p
}
, function(e, t, a) {
    "use strict";
    function n() {}
    var r = a(9)
      , o = a(42)
      , i = a(20);
    n.prototype.create = function(e) {
        for (var t in e)
            "undefined" == typeof this[t] && (this[t] = e[t]);
        return this
    }
    ,
    n.prototype.calledList = [],
    n.prototype.setCalledList = function(e) {
        o.indexof(this.calledList, e) === -1 && this.calledList.push(e)
    }
    ,
    n.prototype.resetCalledList = function() {
        this.calledList = []
    }
    ,
    n.prototype.wrap = function(e, t) {
        var a = this
          , n = this.context || {}
          , s = n.compose || {}
          , u = s.maxTimeout || 1e4;
        return function(n) {
            var s, l = e.length, c = 0, p = 0, f = function(g, d) {
                if (c === l)
                    return n = "done",
                    a.resetCalledList(),
                    r(t) && d !== n && t.call(a, n),
                    void clearTimeout(s);
                if (o.indexof(a.calledList, c) === -1) {
                    if (a.setCalledList && a.setCalledList(c),
                    !(e && e[c] && r(e[c][0])))
                        return;
                    try {
                        n = e[c][0].call(a, n, function() {
                            c++,
                            p = 1,
                            f(c)
                        })
                    } catch (e) {
                        i().w(e)
                    }
                }
                var m = "number" == typeof n;
                if ("pause" === n || m) {
                    p = 0;
                    var h = m ? n : u
                      , _ = e[c] ? e[c][1] : "";
                    s = setTimeout(function() {
                        0 === p && (i().w("jump the middleware about " + _ + ", because waiting timeout maxTimeout = " + h),
                        n = null,
                        c++,
                        f(c))
                    }, h)
                } else
                    "done" === n ? (c = l,
                    f(c, n)) : (c++,
                    f(c))
            };
            return a.calledList && a.calledList.length > 0 && a.resetCalledList(),
            f(c)
        }
    }
    ,
    e.exports = n
}
, function(e, t, a) {
    "use strict";
    var n = a(13)
      , r = a(20);
    e.exports = function() {
        return {
            init: function(e) {
                this.opts = e,
                e && "object" == typeof e.middleware && e.middleware.length > 0 ? this.middleware = e.middleware : this.middleware = [],
                this.plugins_name = []
            },
            pubsubInfo: function(e, t) {
                try {
                    var a = e.pubsub;
                    a && a.publish("plugins_change_" + e.pubsubType, t)
                } catch (e) {
                    r().w(e)
                }
            },
            run: function(e) {
                e || (e = 0);
                var t = this
                  , a = this.middleware
                  , r = this.opts || {}
                  , o = r.plugins;
                if (o && "object" == typeof o && o.length > 0) {
                    var i = o[e];
                    if (this.plugins_name.push(i.name),
                    a.push([function(e, a) {
                        t.pubsubInfo(this, i);
                        var o = new i.path;
                        return o.init || (o.init = function(e) {
                            this.options = e
                        }
                        ),
                        o.init({
                            context: this.context,
                            config: n(i.config || {}, r.config)
                        }),
                        o.run(e, function(e) {
                            setTimeout(function() {
                                a(i, e)
                            }, 1)
                        })
                    }
                    , i.name]),
                    e++,
                    o[e])
                        return this.run(e)
                }
                return a
            }
        }
    }
}
, function(e, t, a) {
    function n(e) {
        var t, a, n, r, o = u.getElementsByTagName("meta");
        for (t = 0,
        a = o.length; t < a; t++)
            if (n = o[t],
            r = n.getAttribute("name"),
            r === e)
                return n
    }
    function r() {
        var e = u.createElement("meta");
        e.setAttribute("name", "data-spm");
        var t = u.getElementsByTagName("head")[0];
        return t && t.insertBefore(e, t.firstChild),
        e
    }
    function o() {
        var e = s.getGlobalValue("aplus")
          , t = n("data-spm")
          , a = n("spm-id")
          , o = t || a;
        o || (t = r()),
        t && t.setAttribute("content", e.spm_ab[0] || ""),
        a && a.setAttribute("content", (e.spm_ab || []).join("."));
        var i = u.getElementsByTagName("body")[0];
        i && i.setAttribute("data-spm", e.spm_ab[1] || "")
    }
    function i() {
        var e, t, a, n = u.getElementsByTagName("*");
        for (e = 0,
        t = n.length; e < t; e++)
            a = n[e],
            a.getAttribute("data-spm-max-idx") && a.setAttribute("data-spm-max-idx", ""),
            a.getAttribute("data-spm-anchor-id") && a.setAttribute("data-spm-anchor-id", "")
    }
    var s = a(2)
      , u = document;
    t.resetMetaAndBody = o,
    t.resetModules = i
}
, function(e, t, a) {
    "use strict";
    function n(e, t, a, n) {
        var r = window || {}
          , o = new Image
          , i = "_img_" + Math.random();
        r[i] = o;
        var s = function() {
            if (r[i])
                try {
                    delete r[i]
                } catch (e) {
                    r[i] = void 0
                }
        };
        return o.onload = function() {
            s(),
            a && a()
        }
        ,
        o.onerror = function() {
            s(),
            n && n()
        }
        ,
        setTimeout(function() {
            window[i] && (window[i].src = "",
            s())
        }, t || 5e3),
        o.src = e,
        o = null,
        e
    }
    var r = a(76)
      , o = a(34);
    t.sendImgCore = n,
    t.sendImg = function(e, t) {
        var a = function() {
            o.log("日志上报成功！")
        }
          , i = function() {
            r.toDynamicsNetwork()
        };
        n(e, t, a, i)
    }
    ,
    t.postData = function(e, t) {
        return navigator.sendBeacon(e, t),
        e
    }
}
, function(e, t, a) {
    var n = a(2)
      , r = a(84)
      , o = a(122)
      , i = a(3)
      , s = a(9);
    e.exports = function() {
        return {
            ready: function(e) {
                window.AlipayJSBridge ? e && e() : document.addEventListener("AlipayJSBridgeReady", e, !1)
            },
            createTimer: function(e, t) {
                var a = setTimeout(function() {
                    s(e) && e(),
                    clearTimeout(a),
                    a = null
                }, t ? t : 1e3)
            },
            canSendToMy: function() {
                var e = n.getGlobalValue(i.APLUS, {})
                  , t = e.getMetaInfo(i.APLUS_LOG_PIPE);
                return !t || /ANT/.test(t)
            },
            getActionId: function(e, t) {
                var a = {
                    EXP: "exposure",
                    CLK: "clicked"
                }
                  , n = t._aplus_actionid;
                return "OTHER" === e ? n : a[e]
            },
            toGroup: function() {
                var e = this
                  , t = !1;
                AlipayJSBridge.call("handleLoggingAction", {
                    actionType: "getAntLogInfo"
                }, function(a) {
                    var r = n.getGlobalValue(i.APLUS, {});
                    t = !0;
                    var o = a.data
                      , s = a.status;
                    if ("success" === s && o) {
                        r._$.spm.spm_url || (r._$.spm.spm_url = o[i.SPM_URL]),
                        r._$.spm.spm_orign = o[i.SPM_URL];
                        var u = {};
                        o.deviceId && (u.pc_i = o.deviceId),
                        o.sessionId && (u.ps_i = o.sessionId),
                        o.userId && (u.pu_i = o.userId),
                        r.appendMetaInfo("aplus-exdata", u),
                        r.appendMetaInfo("aplus-cpvdata", u)
                    }
                    e.toHold("START")
                }),
                this.createTimer(function() {
                    t || e.toHold("START")
                })
            },
            getSpmAB: function(e) {
                return o(e) ? e.split(".").slice(0, 2).join(".") : ""
            },
            toMy: function() {
                var e = n.getGlobalValue(i.APLUS, {})
                  , t = n.getGlobalValue(i.APLUS_QUEUE, [])
                  , a = this;
                t.push({
                    action: i.SUBSCRIBE,
                    arguments: ["mw_change_pv", function(t) {
                        if ("complete" === t.status && a.canSendToMy()) {
                            var n = t.what_to_send || {}
                              , r = n.logdata || {}
                              , o = Object.assign({}, r.gokey);
                            o[i.SPM_CNT] && (o[i.SPM_CNT] = a.getSpmAB(o[i.SPM_CNT]));
                            var s = Object.assign({}, o, {
                                _logType: "aplus",
                                _aplus_spm_pre: o[i.SPM_PRE],
                                _aplus_spm_url: o[i.SPM_URL],
                                _aplus_page_name: r.title,
                                _aplus_page_url: r.url,
                                _aplus_log_key: r.logkey,
                                _aplus_log_referurl: r.pre
                            })
                              , u = {
                                spm: {
                                    url: r.url,
                                    bizType: o.bizType ? o.bizType : i.APLUS,
                                    isSPM: !0,
                                    spmId: o[i.SPM_CNT],
                                    chInfo: o.chInfo
                                },
                                spmDetail: s
                            };
                            e.aplusDebug && console.log("reportData params is ", u),
                            AlipayJSBridge.call("reportData", u)
                        }
                    }
                    ]
                }),
                t.push({
                    action: i.SUBSCRIBE,
                    arguments: ["mw_change_hjlj", function(t) {
                        if ("complete" === t.status && a.canSendToMy()) {
                            var n = t.what_to_send || {}
                              , o = n.logdata || {}
                              , s = o.gmkey
                              , u = Object.assign({}, o.gokey)
                              , l = a.getActionId(s, u);
                            if (l) {
                                u[i.SPM_CNT] && (u[i.SPM_CNT] = a.getSpmAB(u[i.SPM_CNT]));
                                var c = {
                                    _logType: i.APLUS,
                                    _aplus_spm_pre: u[i.SPM_PRE],
                                    _aplus_spm_url: u[i.SPM_URL],
                                    _aplus_page_name: o.title,
                                    _aplus_page_url: o.url,
                                    _aplus_log_key: o.logkey,
                                    _aplus_log_referurl: o.pre
                                };
                                if ("EXP" === s && u.expdata) {
                                    var p = JSON.parse(u.expdata);
                                    r(p) && p.forEach(function(e) {
                                        var t = Object.assign({}, u, e, c)
                                          , a = {
                                            type: "behavior",
                                            bizType: u.bizType ? u.bizType : i.APLUS,
                                            spmId: e.spm || u.spm,
                                            scm: e.scm || u.scm,
                                            eventTime: Date.now(),
                                            actionId: l,
                                            param4: t
                                        };
                                        AlipayJSBridge.call("remoteLog", a)
                                    })
                                } else {
                                    var f = Object.assign({}, u, c)
                                      , g = {
                                        type: "behavior",
                                        bizType: u.bizType ? u.bizType : i.APLUS,
                                        spmId: u.spm,
                                        scm: u.scm,
                                        eventTime: Date.now(),
                                        actionId: l,
                                        param4: f
                                    };
                                    e.aplusDebug && console.log("remoteLog params is ", g),
                                    AlipayJSBridge.call("remoteLog", g)
                                }
                            }
                        }
                    }
                    ]
                })
            },
            toHold: function(e) {
                var t = n.getGlobalValue(i.APLUS);
                t.setMetaInfo("_hold", e)
            },
            run: function() {
                var e = this;
                if (this.toHold("BLOCK"),
                /Nebula/.test(navigator.userAgent)) {
                    var t = !1;
                    e.ready(function() {
                        t = !0,
                        e.toGroup(),
                        e.toMy()
                    }),
                    e.createTimer(function() {
                        t || e.toHold("START")
                    })
                } else
                    e.toHold("START")
            }
        }
    }
}
, function(e, t) {
    function a(e) {
        return "[object String]" === Object.prototype.toString.call(e)
    }
    e.exports = a
}
, function(e, t, a) {
    "use strict";
    var n = a(124)
      , r = a(2);
    e.exports = function() {
        return {
            run: function() {
                var e = this.options.context.aplus_config
                  , t = e.globalConfig.APLUS_QUEUE
                  , a = r.getContext()
                  , o = a[t] || []
                  , i = n.getFormatQueue(o, "metaQueue");
                a[t] = i.queue,
                n.processGoldlogQueue(i.formatQueue, this.options.config)
            }
        }
    }
}
, function(e, t, a) {
    function n() {
        var e = u.getGoldlogVal("_$") || {}
          , t = e.meta_info;
        return t
    }
    function r() {
        var e = n() || {}
          , t = e.uaid + "";
        return "1" !== t || e._anony_id ? e._hold || e["aplus-waiting"] : "BLOCK"
    }
    function o(e) {
        var t = r()
          , a = n() || {}
          , o = !0
          , i = e.arguments || []
          , s = i[0]
          , u = i[1]
          , l = "START";
        if ("_hold" === s && u === l)
            return l;
        if ("_anony_id" === s && u)
            return l;
        if (e && /sendPV|record|setPageSPM|setMetaInfo|appendMetaInfo$/.test(e.action))
            switch (t) {
            case "BLOCK":
                a[t] || (h.push(e),
                o = !1)
            }
        return o
    }
    function i(e) {
        g(d, e),
        g(m, e),
        g(h, e)
    }
    function s(e, t) {
        return t && f.openAPIs.indexOf(e) > -1 && (e = "_" + e),
        e
    }
    var u = a(2)
      , l = a(42)
      , c = a(9)
      , p = a(20)
      , f = a(3)
      , g = function(e, t) {
        function a() {
            if (e && l.isArray(e) && e.length) {
                for (var a = v(e).queue, n = {}, r = []; n = a.shift(); )
                    _(n, t, function(e) {
                        r.push(e)
                    });
                r.length > 0 && setTimeout(function() {
                    for (; n = r.shift(); )
                        _(n, t)
                }, 100)
            }
        }
        try {
            a()
        } catch (e) {
            p().w(e)
        }
    };
    t.processGoldlogQueue = g;
    var d = []
      , m = []
      , h = [];
    t.subscribeAndProcessQueue = function(e, t) {
        var a = u.getGlobalValue(e);
        a.push({
            action: f.SUBSCRIBE,
            arguments: [f.SET_META_INFO, function(e, a) {
                e === f._USER_ID && a ? g(d, t) : e === f._ANONY_ID && a ? g(m, t) : "_hold" === e && "START" === a && i(t)
            }
            ]
        })
    }
    ;
    var _ = function(e, t, a) {
        var n = !!t.isOpenApi
          , r = e ? e.action : ""
          , f = e ? e.arguments : ""
          , g = o(e);
        if (g) {
            var d = u.getContext();
            try {
                if (r && f && l.isArray(f)) {
                    var m, h = r.split("."), _ = d, v = d;
                    if (3 === h.length)
                        _ = d[h[0]][h[1]] || {},
                        m = s(h[2], n),
                        v = _[m] ? _[m] : "";
                    else
                        for (; h.length; )
                            if (m = s(h.shift(), n),
                            v = _ = _[m],
                            !_)
                                return void (c(a) && a(e));
                    c(v) && v.apply(_, f),
                    "START" === g && i(t)
                }
            } catch (e) {
                p().w(e)
            }
        }
    };
    t.processTask = _;
    var v = function(e, t) {
        for (var a = {
            subscribeMwChangeQueue: [],
            subscribeMetaQueue: [],
            subscribeQueue: [],
            metaQueue: [],
            othersQueue: []
        }, n = [], r = {}; r = e.shift(); )
            try {
                var o = r.action
                  , i = r.arguments[0];
                /subscribe/.test(o) ? "setMetaInfo" === i ? a.subscribeMetaQueue.push(r) : i === f.MW_CHANGE_PV || i === f.MW_CHANGE_HJLJ ? a.subscribeMwChangeQueue.push(r) : a.subscribeQueue.push(r) : /MetaInfo/.test(o) ? a.metaQueue.push(r) : a.othersQueue.push(r)
            } catch (e) {
                p().w(e),
                a.othersQueue.push(r)
            }
        var s;
        return t && a[t] && (s = a[t],
        a[t] = []),
        n = a.subscribeMwChangeQueue.concat(a.metaQueue),
        n = n.concat(a.subscribeQueue),
        n = n.concat(a.subscribeMetaQueue, a.othersQueue),
        {
            queue: n,
            formatQueue: s
        }
    };
    t.getFormatQueue = v
}
, function(e, t, a) {
    "use strict";
    var n = a(29)
      , r = a(43)
      , o = a(75)
      , i = a(31);
    e.exports = function() {
        return {
            run: function() {
                var e = this
                  , t = this.options.context.aplus_config;
                if (i.test()) {
                    var a = n.getLsCna(t.globalConfig.ETAG_STORAGE_KEY, e.today);
                    a || setTimeout(function() {
                        var a = aplus._$.meta_info["aplus-rhost-v"];
                        if (a) {
                            e.options.context.etag.egUrl = a.replace(/\/\w+.gif$/, "") + "/eg.js";
                            var i = o.getUrl(e.options.context.etag || {});
                            r.loadScript(i, function(a) {
                                a && "error" !== a.type && n.setLsCna(t.globalConfig.ETAG_STORAGE_KEY, e.today, aplus.Etag)
                            })
                        }
                    }, 1e3)
                }
            }
        }
    }
}
, function(e, t, a) {
    var n = a(2)
      , r = a(9)
      , o = a(19);
    e.exports = function() {
        return {
            getAvailableAplusbridges: function() {
                var e = window.navigator.userAgent
                  , t = [];
                return /WindVane/.test(e) && t.push({
                    name: "WindVane",
                    run: a(127)().run
                }),
                /UT4Aplus/.test(e) && t.push({
                    name: "UT4Aplus",
                    run: a(129)
                }),
                t
            },
            findAplusBridge: function(e) {
                "2" === e && (e = "WindVane");
                var t, a = this.getAvailableAplusbridges();
                if (a.length > 0) {
                    t = a[0];
                    for (var n = 0; n < a.length; n++) {
                        var r = a[n];
                        if (r.name === e) {
                            t = r;
                            break
                        }
                    }
                }
                return t
            },
            run: function() {
                var e = n.getGoldlogVal("_$") || {}
                  , t = e.meta_info || {}
                  , a = t["aplus-toUT"];
                if ("off" !== a) {
                    var i = this.findAplusBridge(a);
                    if (o(i)) {
                        var s = i.name
                          , u = i.run;
                        s && r(u) && u()
                    }
                }
            }
        }
    }
}
, function(e, t, a) {
    "use strict";
    function n(e, t) {
        c.aplus_pubsub.subscribe(e, function(e) {
            "complete" === e.status && t(e)
        })
    }
    function r(e) {
        c && c.aplusDebug && console && console.log(e)
    }
    function o(e, t) {
        window.WindVane.call(p, e, t, r, r, 5e3)
    }
    function i() {
        n("mw_change_pv", function(e) {
            var t = e.what_to_send || {}
              , a = t.pvdataToUt || {};
            o("toUT2", a)
        }),
        n("mw_change_hjlj", function(e) {
            var t = e.what_to_send || {}
              , a = t.pvdataToUt || {};
            o("toUT2", a)
        })
    }
    function s() {
        c.aplus_pubsub.subscribe("setMetaInfo", function(e, t) {
            "_session_args" === e && "object" == typeof t && o("updateSessionProperties", /Android/.test(navigator.userAgent) ? JSON.stringify(t) : t)
        })
    }
    var u = a(2)
      , l = a(3)
      , c = u.getGlobalValue(l.APLUS, {})
      , p = "WVTBUserTrack";
    e.exports = function() {
        return {
            run: function() {
                window.WindVane || a(128)();
                var e = /WindVane/i.test(window.navigator.userAgent);
                e && (c.setMetaInfo(l.APLUS_BRIDGE_NAME, "WindVane"),
                i(),
                s())
            }
        }
    }
}
, function(e, t) {
    "use strict";
    function a(e, t) {
        function a(e, t) {
            e = e.toString().split("."),
            t = t.toString().split(".");
            for (var a = 0; a < e.length || a < t.length; a++) {
                var n = parseInt(e[a], 10)
                  , r = parseInt(t[a], 10);
                if (window.isNaN(n) && (n = 0),
                window.isNaN(r) && (r = 0),
                n < r)
                    return -1;
                if (n > r)
                    return 1
            }
            return 0
        }
        var n = e.Promise
          , r = e.document
          , o = e.navigator.userAgent
          , i = /Windows\sPhone\s(?:OS\s)?[\d\.]+/i.test(o) || /Windows\sNT\s[\d\.]+/i.test(o)
          , s = i && e.WindVane_Win_Private && e.WindVane_Win_Private.call
          , u = /iPhone|iPad|iPod/i.test(o)
          , l = /Android/i.test(o)
          , c = o.match(/WindVane[\/\s](\d+[._]\d+[._]\d+)/)
          , p = Object.prototype.hasOwnProperty
          , f = t.windvane = e.WindVane || (e.WindVane = {
            version: "3.0.7"
        })
          , g = Math.floor(65536 * Math.random())
          , d = 1
          , m = []
          , h = 3
          , _ = "hybrid"
          , v = "wv_hybrid"
          , b = "iframe_"
          , y = "param_"
          , A = 6e5
          , P = 6e4;
        c = c ? (c[1] || "0.0.0").replace(/\_/g, ".") : "0.0.0";
        var w = {
            isAvailable: 1 === a(c, "0"),
            isNewBridgeAvailable: 1 === a(c, l ? "8.3.0" : "8.2.0"),
            call2: function(e, t, a, n, r) {
                var o = e.indexOf(".");
                return w.call(e.substr(0, o), e.substr(o + 1), t, a, n, r)
            },
            call: function(t, a, r, o, i, s) {
                var u, c;
                "number" == typeof arguments[arguments.length - 1] && (s = arguments[arguments.length - 1]),
                "function" != typeof o && (o = null),
                "function" != typeof i && (i = null),
                !n || o || i || (c = new n(function(e, t) {
                    o = e,
                    i = t
                }
                ));
                var p = ("" + a).indexOf(".") > -1;
                if ((!l || !p) && w.isNewBridgeAvailable && e.__windvane__ && (!e.__windvane__.call && e.__windvane__.windVaneCoreJs && new Function(e.__windvane__.windVaneCoreJs())(),
                e.__windvane__.call))
                    return e.__windvane__.call(t + "." + a, r, o, i, s),
                    c;
                u = S.getSid();
                var f = {
                    success: o,
                    failure: i
                };
                return s > 0 && (f.timeout = setTimeout(function() {
                    w.onFailure(u, {
                        ret: "HY_TIMEOUT"
                    })
                }, s)),
                S.registerCall(u, f),
                S.registerGC(u, s),
                w.isAvailable ? S.callMethod(t, a, r, u) : w.onFailure(u, {
                    ret: "HY_NOT_IN_WINDVANE"
                }),
                c
            },
            fireEvent: function(e, t, a) {
                var n = r.createEvent("HTMLEvents");
                n.initEvent(e, !1, !0),
                n.param = S.parseData(t),
                r.dispatchEvent(n)
            },
            getParam: function(e) {
                return S.getParam(e)
            },
            setData: function(e, t) {},
            find: function(e, t) {
                t || S.unregisterCall(e, !1)
            },
            onSuccess: function(e, t, a) {
                S.onComplete(e, t, "success", a)
            },
            onFailure: function(e, t) {
                S.onComplete(e, t, "failure")
            }
        };
        w.isNewBridgeAvailable && e.__windvane__ && e.__windvane__.callSync && (w.callSync = function(t, a) {
            if (u)
                return e.__windvane__.callSync(t, a);
            if (l) {
                var n = {
                    name: t
                };
                a && (n.params = JSON.stringify(a));
                var r = e.__windvane__.callSync(n);
                if (r)
                    try {
                        return JSON.parse(r)
                    } catch (e) {}
            }
        }
        );
        var S = {
            params: {},
            calls: {},
            getSid: function() {
                return (g + d++) % 65536 + ""
            },
            buildParam: function(e) {
                return e && "object" == typeof e ? JSON.stringify(e) : e || ""
            },
            getParam: function(e) {
                return this.params[y + e] || ""
            },
            setParam: function(e, t) {
                this.params[y + e] = t
            },
            parseData: function(e) {
                var t;
                if (e && "string" == typeof e)
                    try {
                        t = JSON.parse(e)
                    } catch (a) {
                        t = {
                            ret: "HY_RESULT_PARSE_ERROR",
                            originValue: e
                        }
                    }
                else
                    t = e || {};
                return t
            },
            registerCall: function(e, t) {
                this.calls[e] = t
            },
            unregisterCall: function(e, t) {
                var a = this.calls[e] || {}
                  , n = a.timeout;
                return n && clearTimeout(n),
                t || delete this.calls[e],
                a
            },
            useIframe: function(e, t) {
                var a = b + e
                  , n = m.pop();
                n || (n = r.createElement("iframe"),
                n.setAttribute("frameborder", "0"),
                n.style.cssText = "width:0;height:0;border:0;display:none;"),
                n.setAttribute("id", a),
                n.setAttribute("src", t),
                n.parentNode || setTimeout(function() {
                    r.body.appendChild(n)
                }, 5)
            },
            retrieveIframe: function(e) {
                var t = b + e
                  , a = r.querySelector("#" + t);
                if (a)
                    if (m.length >= h)
                        try {
                            r.body.removeChild(a)
                        } catch (e) {}
                    else
                        m.indexOf(a) < 0 && m.push(a)
            },
            callMethod: function(t, a, n, r) {
                var o = S.buildParam(n);
                if (i)
                    s ? e.WindVane_Win_Private.call(t, a, r, o) : this.onComplete(r, {
                        ret: "HY_NO_HANDLER_ON_WP"
                    }, "failure");
                else if (u) {
                    this.setParam(r, o);
                    var c = _ + "://" + t + ":" + r + "/" + a + "?" + encodeURIComponent(o);
                    this.useIframe(r, c)
                } else if (l) {
                    this.setParam(r, n);
                    var c = _ + "://" + t + ":" + r + "/" + a + "?" + o
                      , p = v + ":";
                    window.prompt(c, p)
                } else
                    this.onComplete(r, {
                        ret: "HY_NOT_SUPPORT_DEVICE"
                    }, "failure")
            },
            registerGC: function(e, t) {
                var a = this
                  , n = Math.max(t || 0, A)
                  , r = Math.max(t || 0, P);
                setTimeout(function() {
                    a.unregisterCall(e)
                }, n),
                u && setTimeout(function() {
                    a.params[y + e] && delete a.params[y + e]
                }, r)
            },
            onComplete: function(e, t, a, n) {
                var r = this.unregisterCall(e, n)
                  , o = r.success
                  , i = r.failure;
                t = this.parseData(t);
                var s = t.ret;
                "string" == typeof s && (t = t.value || t,
                t.ret || (t.ret = [s])),
                "success" === a ? o && o(t) : "failure" === a && i && i(t),
                u && (this.retrieveIframe(e),
                this.params[y + e] && delete this.params[y + e])
            }
        };
        for (var T in w)
            p.call(f, T) || (f[T] = w[T])
    }
    e.exports = function() {
        var e = window.navigator.userAgent
          , t = /WindVane/i.test(e);
        !window.WindVane && t && a(window, window.lib || (window.lib = {}))
    }
}
, function(e, t, a) {
    e.exports = function() {
        function e(e, a) {
            if (e)
                try {
                    n._aplus4native = {
                        status: "complete"
                    };
                    var o = r.match(new RegExp(a + "/(\\d+\\.\\d+\\.\\d+)","i"));
                    n._aplus4native.bridgeName = a;
                    var i = o && o.length > 1 ? o[1] : "";
                    n._aplus4native.bridgeVersion = i
                } catch (e) {
                    t.console && t.console.log(e)
                }
            return e
        }
        var t = window
          , n = t.aplus || (t.aplus = {});
        if (!n._aplus4native) {
            var r = t.navigator.userAgent
              , o = {
                UT: {
                    nativeVariableKey: "UT4Aplus",
                    webVariableKey: "Aplus4UT",
                    envMethodName: "UTEnv",
                    callbackName: "onUTCallBack",
                    customEventName: "utCustomEvent"
                },
                UM: {
                    nativeVariableKey: "Umeng4Aplus",
                    webVariableKey: "Aplus4Native",
                    envMethodName: "env",
                    callbackName: "onCallBack",
                    customEventName: "customEvent"
                }
            }
              , i = o.UT.nativeVariableKey
              , s = o.UM.nativeVariableKey
              , u = !0
              , l = new RegExp(s,"i").test(r)
              , c = e(u, i) || e(l, s);
            if (c)
                try {
                    a(130).run(u ? o.UT : o.UM)
                } catch (e) {
                    t.console && t.console.log(e)
                }
            else
                n._aplus4native = {
                    status: "NO_SDK"
                }
        }
    }
}
, function(e, t, a) {
    "use strict";
    function n(e, t) {
        var a = 0;
        if ("object" == typeof t) {
            for (var n in t)
                a++,
                t[n] = decodeURIComponent(t[n]);
            e.prePageParams = g.cloneDeep(t)
        } else
            e.prePageParams = {};
        return {
            size: a,
            aplusParams: t
        }
    }
    function r(e) {
        var t = e.target_expression
          , a = e.current_referrer
          , n = location.href.replace(location.hash, "");
        return t !== location.href && (a === location.href || a === n)
    }
    function o(e) {
        return e.current_url === location.href
    }
    function i(e) {
        var t;
        return e.target_expression !== location.href && e.current_url !== P || (t = !0),
        !!t
    }
    function s(e) {
        e.setAplus4NativeVariable("getPageSpmUrl", function(t, a) {
            e.getPageSpmUrl(t, a)
        }),
        e.setAplus4NativeVariable("getPageSpmPre", function(t, a) {
            e.getPageSpmPre(t, a)
        }),
        e.setAplus4NativeVariable("updateSessionProperties", function(t, a, n) {
            e.updateSessionProperties(t, a, n)
        }),
        e.setAplus4NativeVariable("updatePageProperties", function(t, a) {
            e.updatePageProperties(t, a)
        }),
        e.setAplus4NativeVariable("updatePageName", function(t) {
            e.updatePageName(t)
        }),
        e.setAplus4NativeVariable("turnOnRealtimeDebug", function(t, a) {
            e.turnOnRealtimeDebug(t, a)
        }),
        S.aplus_pubsub.subscribe("setMetaInfo", function(t, a) {
            "aplus-cpvdata" === t && a ? e.updatePageProperties(a) : "aplus-pagename" === t && a ? e.updatePageName(a) : "aplus-nextpage-properties" === t && a ? e.updateNextPageProperties(a) : "aplus-session-properties" === t && a && e.updateSessionProperties(a)
        })
    }
    function u(e) {
        e.initWebView(),
        e.getAplus4NativeVariableValue("isAvailable") && (s(e),
        e.setAplus4UT(),
        e.getAplusParams(function(t) {
            try {
                e.removeAplusParams(),
                e.setAplusParams(_.getBaseParams());
                var a = t && 0 === t.code ? t.result : ""
                  , s = n(e, a)
                  , u = "isForward";
                s && s.size > 0 && (r(a) && (u = "isBack"),
                i(a) && (u = "isForward"),
                o(a) && (u = "isRefresh")),
                e.startLifeCycle({
                    caseName: u,
                    eventType: "init"
                })
            } catch (e) {
                console.log(e),
                _.track({
                    errorInfo: e.message,
                    methodName: "aplus4ut_main_init"
                })
            }
        }, 1e3))
    }
    function l(e) {
        if (!f)
            try {
                f = !0,
                P = document.referrer;
                var t, a = v.init(e), n = function() {
                    a.setAplus4NativeVariable(w, !0),
                    u(a, e),
                    S.setMetaInfo(m.APLUS_BRIDGE_NAME, e.nativeVariableKey);
                    var t = [w, "complete"];
                    d.doPubMsg(t),
                    d.doCachePubs(t)
                }, r = 0;
                a.initAplus4NativeIsAvailable() ? n() : t = setInterval(function() {
                    r > 50 && (clearInterval(t),
                    _.track({
                        errorInfo: "timeout",
                        methodName: "aplus4native_main_run_timeout"
                    })),
                    r++,
                    !a.getAplus4NativeVariableValue(w) && a.initAplus4NativeIsAvailable() && (clearInterval(t),
                    n())
                }, 200)
            } catch (e) {
                console.log(e),
                _.track({
                    errorInfo: e.message,
                    methodName: "aplus4native_main_run"
                })
            }
    }
    function c(e) {
        var t = b.aplus_queue || (b.aplus_queue = []);
        t.push({
            action: m.SUBSCRIBE,
            arguments: ["setMetaInfo", function(t, a) {
                "aplus-toUT" === t && a === e.nativeVariableKey && l(e)
            }
            ]
        })
    }
    function p(e) {
        if (!T) {
            T = !0;
            var t = function() {};
            _.setWinVariableKeyValue(e.webVariableKey, e.callbackName, t),
            _.setWinVariableKeyValue(e.webVariableKey, "onPageShow", t),
            _.setWinVariableKeyValue(e.webVariableKey, "onPageHide", t)
        }
    }
    var f, g = a(28), d = a(36), m = a(3), h = a(2), _ = a(131), v = a(133), b = window, y = document, A = b.navigator.userAgent, P = y.referrer, w = "Native4AplusExecReady", S = h.getGlobalValue(m.APLUS, {}), T = !1;
    t.run = function(e) {
        p(e);
        var t = b.aplus_queue || (b.aplus_queue = []);
        t.push({
            action: m.SUBSCRIBE,
            arguments: ["aplusReady", function(t) {
                if ("complete" === t) {
                    var a = new RegExp(e.nativeVariableKey,"i").test(A);
                    a ? l(e) : c(e)
                }
            }
            ]
        })
    }
}
, function(e, t, a) {
    "use strict";
    function n(e, t) {
        return 0 === e.indexOf(t)
    }
    function r(e) {
        var t;
        try {
            e && "object" != typeof e && (e = JSON.parse(e)),
            t = e
        } catch (a) {
            h({
                errorInfo: a.message,
                methodName: "util_parseUtParam",
                params: e
            }),
            t = {}
        }
        return t
    }
    function o() {
        var e = aplus.getMetaInfo("isonepage_data")
          , t = aplus.getMetaInfo("aplus-waiting")
          , a = aplus._$ || {};
        return "1" === e.isonepage || "MAN" === t && a.send_pv_count > 1
    }
    function i() {
        var e = aplus.getMetaInfo("isonepage") || ""
          , t = e.split("|");
        return t && 2 === t.length ? t[1] : ""
    }
    function s(e) {
        try {
            var t = p.g_SPM || (p.g_SPM = {})
              , a = []
              , n = t.getParam(e);
            if (n.a + "" == "0" || n.b + "" == "0")
                return "";
            a = [n.a, n.b, n.c, n.d];
            var r = n.e || aplus.pvid || "";
            return r && a.push(r),
            a.join(".")
        } catch (t) {
            h({
                errorInfo: t.message,
                methodName: "util_getElementSpm",
                params: encodeURIComponent(e.outerHTML)
            })
        }
    }
    function u() {
        var e = (new Date).getTime();
        return {
            id: aplus.pvid + "_" + e,
            timestamp: e,
            log_id: aplus.pvid,
            current_url: location.href,
            current_referrer: document.referrer,
            isSPA: o()
        }
    }
    function l() {
        var e = {
            isonepage: "-1",
            urlpagename: ""
        }
          , t = aplus._$.meta_info;
        if (t && t.hasOwnProperty("isonepage_data"))
            e.isonepage = t.isonepage_data.isonepage,
            e.urlpagename = t.isonepage_data.urlpagename;
        else {
            var a = d.getMetaCnt("isonepage") || "-1"
              , n = a.split("|");
            e.isonepage = n[0],
            e.urlpagename = n[1] ? n[1] : ""
        }
        return e
    }
    function c(e, t) {
        var a = l()
          , n = aplus._aplus4native || {}
          , r = f(e);
        if (r._aplusfrom = "toUT2",
        r._bridgeName = n.bridgeName,
        r._bridgeVersion = n.bridgeVersion,
        r._webviewType = t,
        /^0.0/.test(r["spm-cnt"]) && delete r["spm-cnt"],
        a.isonepage) {
            r.isonepage = a.isonepage;
            var o = i();
            o && (r.urlpagename = o)
        }
        return r
    }
    var p = window
      , f = a(132)
      , g = a(21)
      , d = a(22)
      , m = a(3)
      , h = function(e) {
        try {
            var t = location.protocol + "//wgo.mmstat.com/mm.ut4aplus.toutTrack";
            aplus.send(t, e, "POST")
        } catch (e) {}
    };
    t.track = h,
    t.aplustrack = function(e) {
        var t = window.aplus_queue || (window.aplus_queue = []);
        t.push({
            action: "aplus._aplus_cplugin_track_deb.monitor",
            arguments: [{
                key: "APLUS_PLUGIN_DEBUG",
                title: "aplus4ut",
                msg: ["_info_:methodName=" + e.methodName + ",params=" + JSON.stringify(e.params)],
                type: "updateMsg",
                description: e.methodName || "aplus4ut"
            }]
        })
    }
    ,
    t.isStartWith = n,
    t.parseUtParam = r,
    t.getUtparamFromMetaInfo = function(e) {
        var t = aplus.getMetaInfo(e);
        return r(t)
    }
    ,
    t.isOnePage = o,
    t.getElementSpm = s,
    t.getBaseParams = u,
    t.getAllParams = function(e, t) {
        var a = s(e);
        if (!a)
            return "";
        var r = "href"
          , o = e.getAttribute(r);
        o || (r = "data-href",
        o = e.getAttribute(r)),
        o && n(o, "//") && (o = location.protocol + o);
        var i = u();
        return i.target_expression_type = r,
        i.target_expression = o,
        i.spm_id = a || "",
        t && t.spm_id && "undefined" !== i.spm_pre && (i.spm_pre = t.spm_id),
        i.tracking_param = "",
        i
    }
    ,
    t.subscribeLogs = function(e, t) {
        g.pushIntoGoldlogQueue(m.SUBSCRIBE, [e, function(e) {
            e.status === m.COMPLETE && t(e)
        }
        ])
    }
    ,
    t.processData = function(e, t) {
        var a = c(e, t);
        for (var n in a)
            null !== a[n] && void 0 !== a[n] && "" !== a[n] || delete a[n];
        return a
    }
    ,
    t.objSize = function(e) {
        if ("object" == typeof e) {
            if (Object.keys)
                return Object.keys(e).length;
            var t = [];
            for (var a in e)
                t.push(a);
            return t.length
        }
        return 0
    }
    ,
    t.processLogData = function(e, t, a) {
        var n = aplus._aplus4native || {}
          , r = f(e);
        return t.pageSpmUrl && (r["spm-url"] = t.pageSpmUrl),
        t.pageSpmPre && (r["spm-pre"] = t.pageSpmPre),
        r._bridgeName = n.bridgeName,
        r._bridgeVersion = n.bridgeVersion,
        r._webviewType = a,
        {
            eventId: r.funcId,
            pageName: i() || r.url,
            args: r,
            arg1: r.logkey
        }
    }
    ;
    var _ = function(e) {
        return p[e] || (p[e] = {})
    };
    t.getWinVariable = _,
    t.setWinVariableKeyValue = function(e, t, a) {
        var n = _(e);
        n[t] = a
    }
}
, function(e, t) {
    function a(e) {
        var t, n = Array.isArray(e) ? [] : {};
        if ("object" == typeof e) {
            if (JSON && JSON.parse)
                t = JSON.stringify(e),
                n = JSON.parse(t);
            else
                for (var r in e)
                    n[r] = "object" == typeof e[r] ? a(e[r]) : e[r];
            return n
        }
    }
    e.exports = a
}
, function(e, t, a) {
    "use strict";
    function n() {
        var e = u.getGlobalValue("aplus")
          , t = "on" === e.getMetaInfo("aplus-prompt-mode-enable");
        return t
    }
    function r(e) {
        return e.extend({
            spmObj: {},
            isRefresh: !1,
            isBack: !1,
            isWatch: !1,
            lastPostData: "",
            lastClickAllParams: {},
            prePageParams: {},
            pageStatus: "",
            getAplus4NativeVariable: function() {
                return l.getWinVariable(this.webVariableKey)
            },
            getAplus4NativeVariableValue: function(e) {
                var t = l.getWinVariable(this.webVariableKey);
                return t[e]
            },
            setAplus4NativeVariable: function(e, t) {
                l.setWinVariableKeyValue(this.webVariableKey, e, t)
            },
            getNative4AplusVariable: function() {
                return l.getWinVariable(this.nativeVariableKey)
            },
            watchPageShow: function() {
                var e = this
                  , t = function(t) {
                    var a = l.isOnePage();
                    a && (t.isSPA = !0);
                    var n = e.pageAppear(t);
                    n && e.lastPostData && e.updateAllProperties(e.lastPostData)
                };
                e.setAplus4NativeVariable("onPageShow", function() {
                    t({
                        caseName: "isBack",
                        eventType: "webviewPageShow"
                    }),
                    "webviewPageHide" === e.pageStatus && (e.pageStatus = "webviewPageShow",
                    e.setAplusParams(l.getBaseParams()))
                }),
                "onpageshow"in f && f.addEventListener("pageshow", function() {
                    t({
                        caseName: "isBack",
                        eventType: "pageshow"
                    })
                }, !1)
            },
            resetCurrentSpm: function() {
                window.g_SPM && window.g_SPM._current_spm && (window.g_SPM._current_spm = {})
            },
            watchPageHide: function() {
                var e = this;
                e.setAplus4NativeVariable("onPageHide", function() {
                    e.resetCurrentSpm(),
                    e.pageStatus = "webviewPageHide",
                    e.pageDisAppear({
                        eventType: "webviewPageHide",
                        isPrompt: n()
                    }),
                    e.removeAplusParams()
                }),
                aplus.on(f, "beforeunload", function() {
                    e.resetCurrentSpm(),
                    e.pageDisAppear({
                        eventType: "beforeunload",
                        isPrompt: n()
                    })
                }),
                aplus.on(f, "pagehide", function() {
                    e.resetCurrentSpm(),
                    e.pageDisAppear({
                        eventType: "pagehide",
                        isPrompt: n()
                    })
                })
            },
            updateAllProperties: function(e) {
                this.updatePageProperties(e, {
                    isBack: this.isBack,
                    isRefresh: this.isRefresh
                }),
                this.updatePageName({
                    pageName: e.pageName || e.urlpagename || location.protocol + "//" + location.hostname + location.pathname
                }),
                this.updatePageURL({
                    pageURL: e._h5url
                }),
                this.updatePageUtparam(l.getUtparamFromMetaInfo("aplus-utparam")),
                this.updateNextPageUtparam(l.getUtparamFromMetaInfo("aplus-nextpage-utparam"))
            },
            initAplus4Native: function() {
                var e = this;
                e.setAplus4NativeVariable(e.callbackName, function(t, a) {
                    var n;
                    try {
                        n = "object" == typeof a ? a : JSON.parse(a)
                    } catch (e) {}
                    e.publish(t, n)
                })
            },
            updateNextParams: function(e, t, a) {
                var n = this;
                if (e && e.id && n.setAplusParams(e),
                a) {
                    var r = {
                        pre: location.href
                    };
                    e.spm_id && !/^0.0/.test(e.spm_id) && (r["spm-url"] = e.spm_id),
                    e.spm_pre && !/^0.0/.test(e.spm_pre) && (r["spm-pre"] = e.spm_pre),
                    r._aplusinsource = t,
                    n.updateNextPageProperties(r)
                }
            },
            handlerClick: function(e, t) {
                for (var a, n = e; n.parentNode; ) {
                    if ("A" === n.tagName || n.getAttribute("data-href")) {
                        a = !0;
                        break
                    }
                    n = n.parentNode
                }
                t(n, a)
            },
            initLinkClickParams: function(e, t) {
                this.lastClickAllParams = l.getAllParams(e, this.prePageParams),
                this.lastClickAllParams && this.updateNextParams(this.lastClickAllParams, t, !0)
            },
            watchClick: function() {
                var e, t = this;
                aplus.on(document, "tap", function(a, n) {
                    if ("mousedown" !== a.type || !e) {
                        e = !1;
                        var r = [];
                        "touchstart" === a.type && n && "querySelectorAll"in n && (r = n.querySelectorAll("a")),
                        t.handlerClick(n, function(n, o) {
                            o ? (e = !0,
                            t.initLinkClickParams(n, a.type)) : "touchstart" === a.type && 1 === r.length && (e = !0,
                            t.initLinkClickParams(r[0], a.type + "_child")),
                            o || "mousedown" !== a.type || t.removeAplusParams()
                        })
                    }
                })
            },
            watchSPM: function() {
                var e = this;
                aplus.aplus_pubsub.subscribe("setPageSPM", function() {
                    e.lastClickAllParams.target_expression = location.href;
                    var t = aplus._$ || {}
                      , a = t.spm || {};
                    a.spm_url && (e.lastClickAllParams.spm_id = a.spm_url),
                    a.spm_pre && (e.lastClickAllParams.spm_pre = a.spm_pre),
                    e.updateNextParams(e.lastClickAllParams, "watchSPM", !1)
                })
            },
            handlerPV: function(e, t, a, r) {
                var s = this;
                if ("complete" === a.status) {
                    var u = a.what_to_send.pvdataToUt
                      , c = n();
                    if ("pv" === e && u) {
                        var p = l.isOnePage()
                          , f = {
                            isPrompt: c
                        }
                          , g = {
                            isPrompt: c
                        };
                        p ? (g.eventType = "spaSwitch",
                        f.isSPA = p,
                        f.caseName = s.isBack ? "isBack" : "isForward",
                        f.eventType = "spaSwitch") : (g.eventType = "pageinit",
                        f = o.assign(f, t)),
                        s.pageDisAppear(g),
                        s.pageAppear(f);
                        var d = s.getAplus4NativeVariableValue("webviewType") || "";
                        s.lastPostData = l.processData(u, d),
                        s.updateAllProperties(s.lastPostData),
                        i(r) && r.call(this, !0)
                    } else
                        i(r) && r.call(this, !1)
                }
            },
            getPageSpm: function(e) {
                var t = this;
                t.spmObj && t.spmObj.pageSpmUrl ? e(t.spmObj) : t.getPageSpmUrl(function(a) {
                    var n = a && a.result ? a.result : {};
                    t.spmObj.pageSpmUrl = n.pageSpmUrl || "",
                    t.getPageSpmPre(function(a) {
                        var n = a && a.result ? a.result : {};
                        t.spmObj.pageSpmPre = n.pageSpmPre || "",
                        e(t.spmObj)
                    }, 500)
                }, 500)
            },
            watchLOG: function() {
                var e = this;
                l.subscribeLogs(s.MW_CHANGE_HJLJ, function(t) {
                    e.getPageSpm(function(a) {
                        var n = e.getAplus4NativeVariableValue("webviewType") || ""
                          , r = t.what_to_send.pvdataToUt || {}
                          , o = l.processLogData(r, a, n);
                        e.customEvent(o)
                    })
                })
            },
            watchCallUTByMethod: function() {
                var e = this;
                aplus.aplus_pubsub.subscribe("setMetaInfo", function(t, a) {
                    "_session_args" === t && "object" == typeof a && e.updateSessionProperties(a)
                })
            },
            startLifeCycle: function(e) {
                var t = this;
                t.isRefresh = !!e.isRefresh,
                t.isBack = !!e.isBack,
                t.observerUT4AplusReady(),
                t.watchClick(),
                t.watchLOG(),
                t.watchPV(e, function(e) {
                    e && !t.isWatch && (t.isWatch = !0,
                    t.watchSPM(),
                    t.watchPageShow(),
                    t.watchPageHide(),
                    t.watchCallUTByMethod())
                })
            }
        })
    }
    var o = a(28)
      , i = a(9)
      , s = a(3)
      , u = a(2)
      , l = a(131)
      , c = a(134)
      , p = a(136)
      , f = window
      , g = f.navigator.userAgent;
    t.init = function(e) {
        var t, a = /iPhone|iPad|iPod/i, n = a.test(g) || a.test(navigator.platform);
        t = n ? c : p;
        var i = r(t).create(o.assign({
            isPageDisAppear: !0,
            isPageAppear: !1
        }, e));
        return i.initAplus4Native(),
        i
    }
}
, function(e, t, a) {
    "use strict";
    var n = a(9)
      , r = a(3)
      , o = a(131)
      , i = a(135)
      , s = window
      , u = "complete"
      , l = "0.0.5";
    e.exports = i.extend({
        logsQueue: [],
        UT4AplusReadyStatus: "",
        observerUT4AplusReady: function() {
            var e = this
              , t = this.getNative4AplusVariable();
            if (t.bridgeVersion >= l) {
                var a = function() {
                    if (e.logsQueue.length > 0)
                        for (var t = 0; t < e.logsQueue.length; t++)
                            e.logsQueue[t].call(e)
                };
                e.ut4aplusReady(function(t) {
                    var n = t ? t.result : {};
                    n && n.status === u ? (e.UT4AplusReadyStatus = u,
                    a()) : document.addEventListener("ut4aplusReady", function(t) {
                        var n = t.detail || {};
                        n.status === u && (e.UT4AplusReadyStatus = u,
                        a())
                    })
                }, 1e3)
            }
        },
        filterHandlerPV: function(e, t, a, n) {
            var r = this
              , o = this.getNative4AplusVariable();
            o.bridgeVersion >= l ? r.UT4AplusReadyStatus === u ? r.handlerPV(e, t, a, n) : r.logsQueue.push(function() {
                r.handlerPV(e, t, a, n)
            }) : r.handlerPV(e, t, a, n)
        },
        watchPV: function(e, t) {
            var a = this;
            aplus.pv_context && a.filterHandlerPV("pv", e, aplus.pv_context, t),
            o.subscribeLogs(r.MW_CHANGE_PV, function(n) {
                a.filterHandlerPV("pv", e, n, t)
            })
        },
        CALL: function(e) {
            var t = this.getAplus4NativeVariable()
              , a = this.getNative4AplusVariable();
            "WKWebView" === t.webviewType ? this.getWkNative4Aplus().postMessage(e) : "UIWebView" === t.webviewType && a.CALL(e)
        },
        getWkNative4Aplus: function() {
            var e = s.webkit || {}
              , t = e.messageHandlers || {};
            return t[this.nativeVariableKey] || {}
        },
        initAplus4NativeIsAvailable: function() {
            var e = this.getNative4AplusVariable()
              , t = e && n(e.CALL)
              , a = this.getWkNative4Aplus()
              , r = n(a.postMessage) || t;
            return this.setAplus4NativeVariable("isAvailable", r),
            r
        },
        initWebView: function() {
            var e = this.getNative4AplusVariable();
            this.setAplus4NativeVariable("webviewType", e[this.envMethodName]);
            var t = e.bridgeVersion;
            this.setAplus4NativeVariable("bridgeVersion", t),
            aplus._aplus4native.bridgeVersion = t,
            "WKWebView" === e[this.envMethodName] && (e.CALL = this.getWkNative4Aplus().postMessage),
            this.setAplus4NativeVariable("toUT", this.toUT.bind(this))
        }
    })
}
, function(e, t, a) {
    "use strict";
    var n = a(9)
      , r = a(7)
      , o = a(131);
    e.exports = r.extend({
        id: 1,
        isPageDisAppear: !0,
        isPageAppear: !1,
        CALL: function() {},
        observerUT4AplusReady: function() {},
        setAplus4UT: function() {},
        nativeVariableKey: "UT4Aplus",
        webVariableKey: "Aplus4UT",
        callbackName: "onUTCallBack",
        envMethodName: "UTEnv",
        customEventName: "utCustomEvent",
        getCallbackName: function() {
            return [this.webVariableKey, this.callbackName].join(".")
        },
        toUT: function(e, t, a) {
            var r, i = this, s = !1;
            e.sid || (e.sid = this.getSid(e)),
            aplus.aplusDebug && (window.console.log(JSON.stringify(e)),
            navigator.sendBeacon && navigator.sendBeacon("//log.mmstat.com/toUT?methodName=" + e.methodName)),
            this.subscribeOnce(e.sid, function(a) {
                !s && n(t) && (aplus.aplusDebug && window.console.log(JSON.stringify(e) + ", result is " + JSON.stringify(a)),
                s = !0,
                r && clearTimeout(r),
                o.aplustrack({
                    methodName: i.callbackName,
                    params: e.params ? JSON.stringify(e.params) : ""
                }),
                t(a))
            });
            var u = a || 5e3;
            r = setTimeout(function() {
                !s && n(t) && (aplus.aplusDebug && window.console.log(JSON.stringify(e) + ", wait timeout " + u),
                o.aplustrack({
                    methodName: e.methodName + "_timeout_" + u,
                    params: e.params ? JSON.stringify(e.params) : ""
                }),
                s = !0,
                t())
            }, u),
            this.CALL(e),
            o.aplustrack({
                methodName: e.methodName,
                params: e.params
            })
        },
        getId: function() {
            return this.id += 1,
            this.id > 1e5 && (this.id = 1),
            this.id
        },
        getRandom: function() {
            return Math.floor(1e5 * Math.random())
        },
        getSid: function(e) {
            return [e.methodName, this.getId(), this.getRandom()].join("_")
        },
        pageDisAppear: function(e) {
            if (this.getAplus4NativeVariableValue("isAvailable") && this.isPageAppear) {
                this.isPageDisAppear = !0,
                this.isPageAppear = !1;
                var t = {
                    className: this.nativeVariableKey,
                    methodName: "pageDisAppear"
                };
                e && (t.params = e),
                this.toUT(t)
            }
        },
        pageAppear: function(e) {
            if (this.getAplus4NativeVariableValue("isAvailable") && this.isPageDisAppear) {
                this.isPageDisAppear = !1,
                this.isPageAppear = !0;
                var t = {
                    className: this.nativeVariableKey,
                    methodName: "pageAppear",
                    callback: this.getCallbackName()
                };
                return "object" == typeof e && (t.params = e),
                this.toUT(t),
                !0
            }
            return !1
        },
        getParams: function(e, t) {
            this.toUT({
                className: this.nativeVariableKey,
                methodName: "getParams",
                callback: this.getCallbackName()
            }, e, t)
        },
        getAplusParams: function(e, t) {
            this.toUT({
                className: this.nativeVariableKey,
                methodName: "getAplusParams",
                callback: this.getCallbackName()
            }, e, t)
        },
        setAplusParams: function(e) {
            for (var t in e)
                e[t] = encodeURIComponent(e[t]);
            this.toUT({
                className: this.nativeVariableKey,
                methodName: "setAplusParams",
                params: e,
                callback: this.getCallbackName()
            })
        },
        removeAplusParams: function() {
            this.toUT({
                className: this.nativeVariableKey,
                methodName: "removeAplusParams",
                callback: this.getCallbackName()
            })
        },
        updateNextPageUtparam: function(e) {
            this.toUT({
                className: this.nativeVariableKey,
                methodName: "updateNextPageUtparam",
                params: e
            })
        },
        updatePageProperties: function(e) {
            this.toUT({
                className: this.nativeVariableKey,
                methodName: "updatePageProperties",
                params: e,
                callback: this.getCallbackName()
            })
        },
        updatePageName: function(e) {
            this.toUT({
                className: this.nativeVariableKey,
                methodName: "updatePageName",
                params: e,
                callback: this.getCallbackName()
            })
        },
        updatePageURL: function(e) {
            this.toUT({
                className: this.nativeVariableKey,
                methodName: "updatePageURL",
                params: e,
                callback: this.getCallbackName()
            })
        },
        updatePageUtparam: function(e) {
            this.toUT({
                className: this.nativeVariableKey,
                methodName: "updatePageUtparam",
                params: e,
                callback: this.getCallbackName()
            })
        },
        updateNextPageProperties: function(e) {
            this.toUT({
                className: this.nativeVariableKey,
                methodName: "updateNextPageProperties",
                params: e
            })
        },
        customEvent: function(e) {
            this.toUT({
                className: this.nativeVariableKey,
                methodName: this.customEventName,
                params: e,
                callback: this.getCallbackName()
            })
        },
        getPageSpmUrl: function(e, t) {
            this.toUT({
                className: this.nativeVariableKey,
                methodName: "getPageSpmUrl",
                callback: this.getCallbackName()
            }, e, t)
        },
        getPageSpmPre: function(e, t) {
            this.toUT({
                className: this.nativeVariableKey,
                methodName: "getPageSpmPre",
                callback: this.getCallbackName()
            }, e, t)
        },
        updateSessionProperties: function(e, t, a) {
            this.toUT({
                className: this.nativeVariableKey,
                methodName: "updateSessionProperties",
                params: e,
                callback: this.getCallbackName()
            }, t, a)
        },
        ut4aplusReady: function(e, t) {
            this.toUT({
                className: this.nativeVariableKey,
                methodName: "ut4aplusReady",
                params: {},
                callback: this.getCallbackName()
            }, e, t)
        },
        turnOnRealtimeDebug: function(e, t, a) {
            this.toUT({
                className: this.nativeVariableKey,
                methodName: "turnOnRealtimeDebug",
                params: e,
                callback: this.getCallbackName()
            }, t, a)
        }
    })
}
, function(e, t, a) {
    "use strict";
    var n = a(9)
      , r = a(3)
      , o = a(135)
      , i = a(131);
    e.exports = o.extend({
        CALL: function(e) {
            var t = this.getNative4AplusVariable();
            t.CALL(JSON.stringify(e))
        },
        watchPV: function(e, t) {
            var a = this;
            aplus.pv_context && a.handlerPV("pv", e, aplus.pv_context, t),
            i.subscribeLogs(r.MW_CHANGE_PV, function(n) {
                a.handlerPV("pv", e, n, t)
            })
        },
        initAplus4NativeIsAvailable: function() {
            var e = this.getNative4AplusVariable()
              , t = e && n(e.CALL);
            return this.setAplus4NativeVariable("isAvailable", t),
            t
        },
        initWebView: function() {
            var e = this.getNative4AplusVariable()
              , t = "AndroidWebview";
            if (e && ("function" == typeof e[this.envMethodName] && (t = e[this.envMethodName]()),
            "function" == typeof e.bridgeVersion)) {
                var a = e.bridgeVersion();
                this.setAplus4NativeVariable("bridgeVersion", a),
                aplus._aplus4native.bridgeVersion = a
            }
            this.setAplus4NativeVariable("webviewType", t),
            this.setAplus4NativeVariable("toUT", this.toUT.bind(this))
        },
        updatePageProperties: function(e, t) {
            t && (t.isBack || t.isRefresh) && (e["spm-cnt"] && (e["force-spm-cnt"] = e["spm-cnt"],
            delete e["spm-cnt"]),
            e["spm-url"] && (e["force-spm-url"] = e["spm-url"],
            delete e["spm-url"])),
            this.toUT({
                className: this.nativeVariableKey,
                methodName: "updatePageProperties",
                params: e,
                callback: this.getCallbackName()
            })
        },
        setAplus4UT: function() {
            this.toUT({
                className: this.nativeVariableKey,
                methodName: "setAplus4UT",
                params: {},
                callback: this.getCallbackName()
            })
        }
    })
}
, function(e, t, a) {
    "use strict";
    var n = a(10)
      , r = a(2)
      , o = a(124)
      , i = n.extend({
        push: function(e) {
            this.length++,
            o.processTask(e, this.opts)
        }
    });
    e.exports = function() {
        return {
            processAplusQueue: function(e) {
                var t = this.options.config || {}
                  , a = r.getGlobalValue(e);
                o.processGoldlogQueue(a, t),
                r.setGlobalValue(e, i.create({
                    opts: t,
                    startLength: a.length,
                    length: 0
                }))
            },
            run: function() {
                var e = this.options.context.aplus_config
                  , t = e.globalConfig.APLUS_QUEUE;
                this.processAplusQueue(t),
                "aplus_queue" === t && this.processAplusQueue("goldlog_queue"),
                o.subscribeAndProcessQueue(t, this.options.config)
            }
        }
    }
}
, function(e, t, a) {
    "use strict";
    var n = a(18)
      , r = a(43)
      , o = a(42);
    e.exports = function() {
        return {
            init: function(e) {
                this.options = e
            },
            addStyle: function(e, t) {
                var a = e + "_style"
                  , n = document.getElementById(a);
                n || (n = document.createElement("link"),
                n.id = a,
                n.href = t,
                n.rel = "stylesheet",
                n.type = "text/css",
                document.getElementsByTagName("head").item(0).appendChild(n))
            },
            run: function() {
                var e = this
                  , t = parent !== self
                  , a = this.options.config || {};
                !t && a.urlRules && n(a.urlRules, function(t) {
                    var a, i = new RegExp(t.rule);
                    try {
                        a = t.id ? window.sessionStorage.getItem(t.id) : ""
                    } catch (e) {}
                    if (i.test(location.href) || a) {
                        try {
                            window.sessionStorage.setItem(t.id, !0)
                        } catch (e) {}
                        o.isArray(t.cdnPath) ? n(t.cdnPath, function(a) {
                            /\.css$/.test(a) ? e.addStyle(t.id, a) : /\.js/.test(a) && r.addScript(a)
                        }) : r.addScript(t.cdnPath)
                    }
                })
            }
        }
    }
}
, function(e, t, a) {
    "use strict";
    var n = a(43)
      , r = a(61)
      , o = a(3);
    e.exports = function() {
        return {
            run: function() {
                var e = this.options.config || {}
                  , t = aplus._$ || {}
                  , a = document.getElementById("aplus-sufei")
                  , i = aplus && aplus.getCdnPath ? aplus.getCdnPath() : e.cdnPath
                  , s = o.HTTPS + i + "/secdev/sufei_data/3.9.9/index.js";
                r.onload(function() {
                    try {
                        var e = t.meta_info
                          , r = e["aplus-xplug"];
                        "NONE" !== r && setTimeout(function() {
                            a && "script" === a.tagName.toLowerCase() || n.addScript(s, "", "aplus-sufei")
                        }, 10)
                    } catch (e) {}
                })
            }
        }
    }
}
, function(e, t, a) {
    "use strict";
    e.exports = function() {
        return {
            run: function() {
                aplus._aplus_cplugin_webvt || a(141)()
            }
        }
    }
}
, function(e, t, a) {
    "use strict";
    var n = a(2);
    e.exports = function() {
        var e = n.getGlobalValue("aplus")
          , t = n.getGlobalValue("aplus_queue");
        e._aplus_apv || (e._aplus_apv = {
            status: "complete"
        },
        t.push({
            action: "aplus.sendPV",
            arguments: [{
                is_auto: !0
            }]
        }))
    }
}
, function(e, t, a) {
    "use strict";
    e.exports = function(e) {
        try {
            var t = window
              , n = "g_tb_aplus_loaded";
            if (t[n])
                return;
            t[n] = 1,
            a(143).isDebugAplus();
            var r = a(20)
              , o = a(36)
              , i = a(28)
              , s = a(18)
              , u = a(144)
              , l = "running"
              , c = ["aplusReady", l];
            o.doPubMsg(c),
            u.run({
                plugins: e.plugins,
                context: function() {
                    var t = {
                        PAGE_LOAD_TIME: new Date
                    }
                      , a = [];
                    return s(e.plugins, function(e) {
                        t[e.name] = e.config || {},
                        "aplus_log_inject" === e.name && e.config && e.config.plugins && (a = e.config.plugins.pv,
                        s(a, function(e) {
                            t[e.name] = e.config
                        }))
                    }),
                    i.assign(t, {
                        aplus_config: e
                    })
                }
            }, function() {
                r().v("APLUS INIT SUCCESS")
            })
        } catch (e) {}
    }
}
, function(e, t, a) {
    "use strict";
    var n, r = a(2), o = a(20);
    t.isDebugAplus = function(e) {
        if ("boolean" == typeof n)
            return n;
        if ("boolean" == typeof e && (n = e),
        localStorage && location) {
            var t = location.href.match(/aplusDebug=(true|false)/);
            t && t.length > 0 && localStorage.setItem("aplusDebug", t[1]),
            n = "true" === localStorage.getItem("aplusDebug")
        } else
            n = !1;
        return r.setGoldlogVal("aplusDebug", n),
        n && o().setDebug(n),
        n
    }
}
, function(e, t, a) {
    "use strict";
    var n = a(116)
      , r = a(9)
      , o = a(36);
    t.run = function(e, t) {
        var a = new n;
        a.run({
            plugins: e.plugins,
            context: e.context
        }, {
            config: {},
            userdata: {},
            pubsubType: "aplusinit",
            messageFnQueue: [],
            middlewareMessageKey: "mw_change_aplusinit"
        }, function(e) {
            var a = ["aplusInitContext", e];
            o.doPubMsg(a),
            o.doCachePubs(a),
            r(t) && t(e)
        })
    }
}
]);
