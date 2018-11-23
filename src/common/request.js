function ajax(options) {
  options = {
    url: options.url || '',
    method: options.method || 'POST',
    type: options.type || 'json',
    asyn: options.asyn || true,
    timeout: options.timeout || '',
    onSuccess: options.onSuccess || function () {},
    onError: options.onError || function () {},
    onComplete: options.onComplete || function () {},
    onTimeout: options.onTimeout || function () {},
    data: options.data || {}
  };

  var requestDone = false;

  try {
    parseInt(timeout);
    setTimeout(function () {
      requestDone = true;
      options.onTimeout();
    }, timeout * 1000);
  } catch (e) {}

  var xhr = createXHR();
  xhr.onreadystatechange = function () {
    console.log('------------1 ');
    if (xhr.readyState === 4 && !requestDone) {
      if (httpSuccess(xhr)) {
        console.log('------------2 ');
        options.onSuccess(httpData(xhr, options.type));
      } else {
        console.log('------------3 ');

        options.onError(httpData(xhr, options.type));
      }
      console.log('------------4');

      options.onComplete();
      xhr = null;
    }
  };

  if (options.method.toLowerCase() === 'post') {
    xhr.open(options.method, options.url, options.aysn);
    xhr.send(serialize(options.data));
  } else {
    options.url = addURLParameters(options.url, serialize(options.data));
    xhr.open(options.method, options.url, options.aysn);
    xhr.send(null);
  }

};

function createXHR() {
  if (typeof XMLHttpRequest !== undefined) {
    return new XMLHttpRequest();
  } else {
    var versions = ['MS2XML.XMLHTTP.6.0', 'MS2XML.XMLHTTP.3.0', 'MS2XML.XMLHTTP', 'Microsoft.XMLHTTP'];

    for (var i = 0; i < versions.length; i++) {
      try {
        return new ActiveXObject(versions[i]);
      } catch (e) {
        continue;
      }
    }
  }
};

function httpSuccess(xhr) {
  try {
    return (200 <= xhr.status < 300) ||
      (xhr.status === 304) ||
      (!xhr.status && location.protocol === 'file:') ||
      (window.userAgent.indexOf('Safari') !== -1 && typeof xhr.status === undefined);
  } catch (e) {
    return false;
  }

  return false;
};

function httpData(xhr, type) {
  var contentType = xhr.getResponseHeader('Content-Type');
  var isXMLType = !type && contentType && contentType.indexOf('xml') >= 0;
  var data = (type === 'xml') || isXMLType ? xhr.responseXML : xhr.responseText;
  if (type === 'script') {
    eval.call(window, data);
  }

  return data;
};

function serialize(data) {
  console.log('===========serialize=============')
  console.log(data)
  var results = [];
  if (Object.prototype.toString.call(data) === '[Object Array]') {
    for (var i = 0; i < data.length; i++) {
      results.push(encodeURIComponent(data[i].name) + '=' + encodeURIComponent(data[i].value));
    }
  } else {
    for (var key in data) {
      results.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
    }
  }

  let r = results.join('&');
  console.log("result ----->   " + r);
  return r;
}

function addURLParameters(url, paramStr) {
  if (url.indexOf('?') === -1) {
    url += '?';
  } else {
    url += '&';
  }
  let r = url + paramStr;
  console.log("addURLParameters ----->   " + r);
  return r;
}

export default ajax
