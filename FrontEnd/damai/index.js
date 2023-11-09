(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.lib = global.lib || {}, global.lib.env = factory());
}(this, (function () { 'use strict';

	var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	var win;

	if (typeof window !== "undefined") {
	    win = window;
	} else if (typeof commonjsGlobal !== "undefined") {
	    win = commonjsGlobal;
	} else if (typeof self !== "undefined"){
	    win = self;
	} else {
	    win = {};
	}

	var window_1 = win;

	var Version =
	/*#__PURE__*/
	function () {
	  function Version(v) {
	    this.val = v.toString();

	    if (!this.val.match(/^([^.]+\.)*[^.]+$/) || this.val.match(/^[^\d\w]|\.[^\d\w]|[^\d\w]$/i)) {
	      throw new Error('invalid version');
	    }
	  }

	  var _proto = Version.prototype;

	  _proto.gt = function gt(v) {
	    return Version.compare(this.val, v) > 0;
	  };

	  _proto.gte = function gte(v) {
	    return Version.compare(this.val, v) >= 0;
	  };

	  _proto.lt = function lt(v) {
	    return Version.compare(this.val, v) < 0;
	  };

	  _proto.lte = function lte(v) {
	    return Version.compare(this.val, v) <= 0;
	  };

	  _proto.eq = function eq(v) {
	    return Version.compare(this.val, v) === 0;
	  };

	  _proto.toString = function toString() {
	    return this.val;
	  };

	  Version.compare = function compare(v1, v2) {
	    var val1 = v1.toString().split('.');
	    var val2 = v2.toString().split('.');

	    for (var i = 0; i < val1.length || i < val2.length; i += 1) {
	      var n1 = parseInt(val1[i], 10);
	      var n2 = parseInt(val2[i], 10); // eslint-disable-next-line

	      if (isNaN(n1)) {
	        n1 = 0;
	      } // eslint-disable-next-line


	      if (isNaN(n2)) {
	        n2 = 0;
	      }

	      if (n1 < n2) {
	        return -1;
	      }

	      if (n1 > n2) {
	        return 1;
	      }
	    }

	    return 0;
	  };

	  return Version;
	}();

	var parseParams = (function (queryString) {
	  var params = {};
	  var search = queryString.replace(/^\?/, '');

	  if (search) {
	    var args = search.split('&');

	    for (var i = 0; i < args.length; i += 1) {
	      var key = args[i].split('=')[0];
	      var value = args[i].split(key + "=")[1];

	      if (key) {
	        try {
	          params[key] = decodeURIComponent(value || '');
	          /* istanbul ignore next */
	        } catch (e) {
	          params[key] = value || '';
	        }
	      }
	    }
	  }

	  return params;
	});

	var parseOS = (function (ua) {
	  var os = {
	    name: 'unknown',
	    version: new Version('0.0.0')
	  };
	  var matched = ua.match(/Windows\sPhone\s(?:OS\s)?([\d.]+)/);

	  if (matched) {
	    os.name = 'Windows Phone';
	    os.isWindowsPhone = true;
	    os.version = new Version(matched[1]);
	    return os;
	  }

	  matched = ua.match(/Android[\s/]([\d.]+)/);

	  if (matched) {
	    os.name = 'Android';
	    os.isAndroid = true;
	    os.version = new Version(matched[1]);
	    return os;
	  }

	  matched = ua.match(/(iPhone|iPad|iPod)/);

	  if (matched) {
	    var _matched = matched,
	        name = _matched[1];
	    matched = ua.match(/OS ([\d_.]+) like Mac OS X/);

	    if (matched) {
	      os.name = name;
	      os.isIPhone = name === 'iPhone' || name === 'iPod';
	      os.isIPad = name === 'iPad';
	      os.isIOS = true;
	      os.version = new Version(matched[1].split('_').join('.'));
	    }

	    return os;
	  }

	  matched = ua.match(/Mac OS X ([\d_.]+)/);

	  if (ua.match(/Macintosh/) && matched) {
	    os.name = 'Mac';
	    os.isMac = true;
	    os.version = new Version(matched[1].replace(/_/g, '.'));
	    return os;
	  }

	  matched = ua.match(/Windows NT ([\d_.]+)/);

	  if (matched) {
	    os.name = 'Windows';
	    os.isWindows = true;
	    os.version = new Version(matched[1].replace(/_/g, '.'));
	    return os;
	  }

	  return os;
	});

	var parseBrowser = (function (ua) {
	  var matched;
	  var browser = {
	    name: 'unknown',
	    version: new Version('0.0.0')
	  };
	  matched = ua.match(/(?:UCWEB|UCBrowser\/)([\d.]+)/);

	  if (matched) {
	    browser.name = 'UC';
	    browser.isUC = true;
	    browser.version = new Version(matched[1]);
	    return browser;
	  }

	  matched = ua.match(/MQQBrowser\/([\d.]+)/);

	  if (matched) {
	    browser.name = 'QQ';
	    browser.isQQ = true;
	    browser.version = new Version(matched[1]);
	    return browser;
	  }

	  matched = ua.match(/(?:Firefox|FxiOS)\/([\d.]+)/);

	  if (matched) {
	    browser.name = 'Firefox';
	    browser.isFirefox = true;
	    browser.version = new Version(matched[1]);
	    return browser;
	  }

	  matched = ua.match(/Edge\/([\d.]+)/);

	  if (matched) {
	    browser.name = 'Edge';
	    browser.isEdge = true;
	    browser.version = new Version(matched[1]);
	    return browser;
	  }

	  matched = ua.match(/MSIE\s([\d.]+)/) || ua.match(/IEMobile\/([\d.]+)/);

	  if (matched) {
	    browser.version = new Version(matched[1]);
	    /* istanbul ignore else */

	    if (ua.match(/IEMobile/)) {
	      browser.name = 'IEMobile';
	      browser.isIEMobile = true;
	    } else {
	      browser.name = 'IE';
	      browser.isIE = true;
	    }

	    return browser;
	  }

	  matched = ua.match(/(?:Chrome|CriOS)\/([\d.]+)/);

	  if (matched) {
	    browser.name = 'Chrome';
	    browser.isChrome = true;
	    browser.version = new Version(matched[1]);

	    if (ua.match(/Version\/[\d+.]+\s*Chrome/)) {
	      browser.isWebview = true;
	    }

	    return browser;
	  }

	  if (ua.match(/Safari/)) {
	    matched = ua.match(/Android[\s/]([\d.]+)/);

	    if (matched) {
	      browser.name = 'Android';
	      browser.isAndroid = true;
	      browser.version = new Version(matched[1]);
	      return browser;
	    }

	    matched = ua.match(/Version\/([\d.]+)/);

	    if (matched) {
	      browser.name = 'Safari';
	      browser.isSafari = true;
	      browser.version = new Version(matched[1]);
	      return browser;
	    }
	  }

	  matched = ua.match(/OS ([\d_.]+) like Mac OS X/);

	  if (ua.match(/iPhone|iPod|iPad/) && matched) {
	    browser.name = 'Safari';
	    browser.isWebview = true;
	    browser.isSafari = true;
	    browser.version = new Version(matched[1].replace(/_/g, '.'));

	    if (ua.match(/WK$/)) {
	      browser.isWKWebview = true;
	    }

	    return browser;
	  }

	  return browser;
	});

	var parseAliApp = (function (ua) {
	  var windvane = '0.0.0';
	  var aliapp = false;
	  var name = 'unkown';
	  var version = '0.0.0';
	  var matched = ua.match(/WindVane[/\s]([\d._]+)/);

	  if (matched) {
	    var _matched = matched;
	    windvane = _matched[1];
	  }
	  /* istanbul ignore else */


	  matched = ua.match(/AliApp\(([A-Z-\d]+)\/([\d.]+)\)/i);

	  if (matched) {
	    aliapp = {};
	    var _matched2 = matched;
	    name = _matched2[1];
	    version = _matched2[2];
	  } else if (ua.indexOf('TBIOS') > 0) {
	    // 兼容手淘的一个bug，在webview初始化异常时，在ua中只包含TBIOS字样，也认为是手淘webview。
	    name = 'TB';
	  }

	  if (aliapp) {
	    aliapp.name = name;
	    aliapp.windvane = new Version(windvane || '0.0.0');
	    aliapp.version = new Version(version);
	    Object.defineProperties(aliapp, {
	      // Breaking change
	      appname: {
	        get: function get() {
	          throw new Error('Deprecated! Use env.aliapp.name instead');
	        },
	        enumerable: false
	      },
	      platform: {
	        get: function get() {
	          throw new Error('Deprecated! Use env.os.name instead');
	        },
	        enumerable: false
	      },
	      poplayer: {
	        get: function get() {
	          throw new Error('Deprecated! Use WindVane API: WVPopLayer.getPopLayerVersion');
	        },
	        enumerable: false
	      },
	      poplayerVersion: {
	        get: function get() {
	          throw new Error('Deprecated! Use WindVane API: WVPopLayer.getPopLayerVersion');
	        },
	        enumerable: false
	      }
	    });
	  }

	  return aliapp;
	});

	var parseThirdApp = (function (ua) {
	  if (ua.match(/Weibo/i)) {
	    return {
	      name: 'Weibo',
	      isWeibo: true,
	      version: new Version('0.0.0')
	    };
	  }

	  var matched = ua.match(/MicroMessenger\/([\d_.]+)/i);

	  if (matched) {
	    return {
	      name: 'Weixin',
	      isWeixin: true,
	      version: new Version(matched[1].replace(/_/g, '.'))
	    };
	  }

	  return false;
	});

	var parseEnv = function parseEnv(ua, search) {
	  var env = {};
	  env.params = parseParams(search);
	  env.os = parseOS(ua);
	  env.browser = parseBrowser(ua);
	  env.aliapp = parseAliApp(ua);
	  env.thirdapp = parseThirdApp(ua);
	  return env;
	};

	var env = parseEnv(window_1.navigator.userAgent, window_1.location.search);

	return env;

})));
//# sourceMappingURL=index.js.map
