function isEmpty(s) {
  return s === null || s === undefined || s === ''
}

function showToast(s) {
}

function showLoading() {
}

function hideLoading() {
}

function getNextSevenDays() {
  let dd = new Date();
  let arr = [];
  arr.push(getYMD(dd));
  for (var i = 0; i < 6; i++) {
    dd.setDate(dd.getDate() + 1);
    arr.push(getYMD(dd));
  }
  return arr;
}

function getNext15Days() {
  let dd = new Date();
  let arr = [];
  arr.push(getYMD(dd));
  for (var i = 0; i < 30; i++) {
    dd.setDate(dd.getDate() + 1);
    arr.push(getYMD(dd));
  }
  return arr;
}

function d2s(d) {
  return d > 9 ? d : ("0" + d);
}

function getYMD(date) {
  return date.getFullYear() + "/" + d2s(date.getMonth() + 1) + "/" + d2s(date.getDate());

}

function isMobile(mobile) {
  return /^1[3|4|5|6|7|8|9]\d{9}$/.test(mobile);
}

function isOrderNo(orderNo) {
  return /^[1-9][0-9]{11}$/.test(orderNo);
}

function findIndexById(list, id) {
  if (!list) {
    return -1;
  }

  for (var i in list) {
    if (id == list[i].id) {
      return i;
    }
  }
  return -1;
}

function emptyMultiArray(list, id) {
  return [
    [],
    []
  ];
}

function uuid() {
  var s = [];
  var hexDigits = "0123456789abcdef";
  for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = "4";
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
  s[8] = s[13] = s[18] = s[23] = "-";

  var uuid = s.join("");
  return uuid;
}

function mid() {
  return new Date().getTime() + "_" + uuid();
}


module.exports = {
  isEmpty: isEmpty,
  showToast: showToast,
  getNextSevenDays: getNextSevenDays,
  getNext15Days: getNext15Days,
  isMobile: isMobile,
  getYMD: getYMD,
  isOrderNo: isOrderNo,
  findIndexById: findIndexById,
  emptyMultiArray: emptyMultiArray,
  uuid: uuid,
  mid: mid,
  showLoading: showLoading,
  hideLoading: hideLoading
}
