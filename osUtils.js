var osUtils = (function () {
  var osType = {
    Android: 'android',
    iOS: 'ios',
    ETC: 'etc',
  };

  var ua = navigator.userAgent.toLowerCase();
  var os = _getOS();
  var check = {
    android: os === osType.Android,
    ios: os === osType.iOS,
    etc: os === osType.etc,
    chrome: !!ua.match(/Chrome/i),
    mobile: os === osType.Android || os === osType.iOS
  };

  function _getOS() {
    if (ua.match(/android/)) {
      return osType.Android;
    } else if (ua.match(/iphone|ipad|ipod/)) {
      return osType.iOS;
    }
    return osType.ETC;
  }

  return {
    getOS: function () {
      return os;
    },
    isAndroid: function () {
      return check.android;
    },
    isiOS: function () {
      return check.ios;
    },
    isChrome: function () {
      return check.chrome;
    },
    isMobile: function () {
      return check.mobile;
    }
  };
})();
