(function (B9, BB) {
    "use strict";
  
    if (typeof module == "object" && typeof module.exports == "object") {
      module.exports = B9.document
        ? BB(B9, true)
        : function (Bm) {
            if (Bm.document) {
              return BB(Bm);
            }
            throw new Error("jQuery requires a window with a document");
          };
    } else {
      BB(B9);
    }
  })(typeof window != "undefined" ? window : this, function (B9, BB) {
    "use strict";
  
    function Bm(Jz) {
      return typeof Jz == "function" && typeof Jz.nodeType != "number";
    }
    function BJ(Jz) {
      return Jz != null && Jz === Jz.window;
    }
    var Bh = [];
    var BH = B9.document;
    var Bq = Object.getPrototypeOf;
    var Bw = Bh.slice;
    var Bp = Bh.concat;
    var Bx = Bh.push;
    var Br = Bh.indexOf;
    var BO = {};
    var BY = BO.toString;
    var BS = BO.hasOwnProperty;
    var Bb = BS.toString;
    var BU = Bb.call(Object);
    var Bn = {};
    var BK = {
      type: true,
      src: true,
      noModule: true,
    };
    function Bf(Jz, JM, JX) {
      var JP;
      var JF = (JM = JM || BH).createElement("script");
      JF.text = Jz;
      if (JX) {
        for (JP in BK) {
          if (JX[JP]) {
            JF[JP] = JX[JP];
          }
        }
      }
      JM.head.appendChild(JF).parentNode.removeChild(JF);
    }
    function Bo(Jz) {
      if (Jz == null) {
        return Jz + "";
      } else if (typeof Jz == "object" || typeof Jz == "function") {
        return BO[BY.call(Jz)] || "object";
      } else {
        return typeof Jz;
      }
    }
    function BD(Jz, JM) {
      return new BD.fn.init(Jz, JM);
    }
    var BN = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    function Bk(Jz) {
      var JM = !!Jz && "length" in Jz && Jz.length;
      var JX = Bo(Jz);
      return (
        !Bm(Jz) &&
        !BJ(Jz) &&
        (JX === "array" ||
          JM === 0 ||
          (typeof JM == "number" && JM > 0 && JM - 1 in Jz))
      );
    }
    BD.fn = BD.prototype = {
      jquery: "3.3.1",
      constructor: BD,
      length: 0,
      toArray: function () {
        return Bw.call(this);
      },
      get: function (Jz) {
        if (Jz == null) {
          return Bw.call(this);
        } else if (Jz < 0) {
          return this[Jz + this.length];
        } else {
          return this[Jz];
        }
      },
      pushStack: function (Jz) {
        Jz = BD.merge(this.constructor(), Jz);
        Jz.prevObject = this;
        return Jz;
      },
      each: function (Jz) {
        return BD.each(this, Jz);
      },
      map: function (Jz) {
        return this.pushStack(
          BD.map(this, function (JM, JX) {
            return Jz.call(JM, JX, JM);
          })
        );
      },
      slice: function () {
        return this.pushStack(Bw.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (Jz) {
        var JM = this.length;
        var Jz = +Jz + (Jz < 0 ? JM : 0);
        return this.pushStack(Jz >= 0 && Jz < JM ? [this[Jz]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: Bx,
      sort: Bh.sort,
      splice: Bh.splice,
    };
    BD.extend = BD.fn.extend = function () {
      var Jz;
      var JM;
      var JX;
      var JP;
      var JF;
      var Js = arguments[0] || {};
      var Jy = 1;
      var JZ = arguments.length;
      var JG = false;
      if (typeof Js == "boolean") {
        JG = Js;
        Js = arguments[Jy] || {};
        Jy++;
      }
      if (typeof Js != "object" && !Bm(Js)) {
        Js = {};
      }
      if (Jy === JZ) {
        Js = this;
        Jy--;
      }
      for (; Jy < JZ; Jy++) {
        if ((Jz = arguments[Jy]) != null) {
          for (JM in Jz) {
            JF = Js[JM];
            if (Js !== (JX = Jz[JM])) {
              if (
                JG &&
                JX &&
                (BD.isPlainObject(JX) || (JP = Array.isArray(JX)))
              ) {
                JF = JP
                  ? ((JP = false), JF && Array.isArray(JF) ? JF : [])
                  : JF && BD.isPlainObject(JF)
                  ? JF
                  : {};
                Js[JM] = BD.extend(JG, JF, JX);
              } else if (JX !== undefined) {
                Js[JM] = JX;
              }
            }
          }
        }
      }
      return Js;
    };
    BD.extend({
      expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
      isReady: true,
      error: function (Jz) {
        throw new Error(Jz);
      },
      noop: function () {},
      isPlainObject: function (Jz) {
        return (
          !!Jz &&
          BY.call(Jz) === "[object Object]" &&
          (!(Jz = Bq(Jz)) ||
            (typeof (Jz = BS.call(Jz, "constructor") && Jz.constructor) ==
              "function" &&
              Bb.call(Jz) === BU))
        );
      },
      isEmptyObject: function (Jz) {
        for (var JM in Jz) {
          return false;
        }
        return true;
      },
      globalEval: function (Jz) {
        Bf(Jz);
      },
      each: function (Jz, JM) {
        var JX;
        var JP = 0;
        if (Bk(Jz)) {
          for (
            JX = Jz.length;
            JP < JX && JM.call(Jz[JP], JP, Jz[JP]) !== false;
            JP++
          );
        } else {
          for (JP in Jz) {
            if (JM.call(Jz[JP], JP, Jz[JP]) === false) {
              break;
            }
          }
        }
        return Jz;
      },
      trim: function (Jz) {
        if (Jz == null) {
          return "";
        } else {
          return (Jz + "").replace(BN, "");
        }
      },
      makeArray: function (Jz, JM) {
        JM = JM || [];
        if (Jz != null) {
          if (Bk(Object(Jz))) {
            BD.merge(JM, typeof Jz == "string" ? [Jz] : Jz);
          } else {
            Bx.call(JM, Jz);
          }
        }
        return JM;
      },
      inArray: function (Jz, JM, JX) {
        if (JM == null) {
          return -1;
        } else {
          return Br.call(JM, Jz, JX);
        }
      },
      merge: function (Jz, JM) {
        for (var JX = +JM.length, JP = 0, JF = Jz.length; JP < JX; JP++) {
          Jz[JF++] = JM[JP];
        }
        Jz.length = JF;
        return Jz;
      },
      grep: function (Jz, JM, JX) {
        var JP = [];
        for (var JF = 0, Js = Jz.length, Jy = !JX; JF < Js; JF++) {
          if (!JM(Jz[JF], JF) != Jy) {
            JP.push(Jz[JF]);
          }
        }
        return JP;
      },
      map: function (Jz, JM, JX) {
        var JP;
        var JF;
        var Js = 0;
        var Jy = [];
        if (Bk(Jz)) {
          for (JP = Jz.length; Js < JP; Js++) {
            if ((JF = JM(Jz[Js], Js, JX)) != null) {
              Jy.push(JF);
            }
          }
        } else {
          for (Js in Jz) {
            if ((JF = JM(Jz[Js], Js, JX)) != null) {
              Jy.push(JF);
            }
          }
        }
        return Bp.apply([], Jy);
      },
      guid: 1,
      support: Bn,
    });
    if (typeof Symbol == "function") {
      BD.fn[Symbol.iterator] = Bh[Symbol.iterator];
    }
    BD.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (Jz, JM) {
        BO["[object " + JM + "]"] = JM.toLowerCase();
      }
    );
    function BL(Jz, JM, JX) {
      var JP = [];
      var JF = JX !== undefined;
      while ((Jz = Jz[JM]) && Jz.nodeType !== 9) {
        if (Jz.nodeType === 1) {
          if (JF && BD(Jz).is(JX)) {
            break;
          }
          JP.push(Jz);
        }
      }
      return JP;
    }
    function Bg(Jz, JM) {
      var JX = [];
      for (; Jz; Jz = Jz.nextSibling) {
        if (Jz.nodeType === 1 && Jz !== JM) {
          JX.push(Jz);
        }
      }
      return JX;
    }
    var Bh = (function (Jz) {
      function JM(H2, H3, H4) {
        var H5 = "0x" + H3 - 65536;
        if (H5 != H5 || H4) {
          return H3;
        } else if (H5 < 0) {
          return String.fromCharCode(65536 + H5);
        } else {
          return String.fromCharCode((H5 >> 10) | 55296, (H5 & 1023) | 56320);
        }
      }
      function JX(H2, H3) {
        if (H3) {
          if (H2 === "\0") {
            return "�";
          } else {
            return (
              H2.slice(0, -1) +
              "\\" +
              H2.charCodeAt(H2.length - 1).toString(16) +
              " "
            );
          }
        } else {
          return "\\" + H2;
        }
      }
      function JP() {
        h2();
      }
      var JF;
      var Js;
      var Jy;
      var JZ;
      var JG;
      var Jv;
      var JA;
      var JI;
      var Ju;
      var h0;
      var h1;
      var h2;
      var h3;
      var h4;
      var h5;
      var h6;
      var h7;
      var h8;
      var h9;
      var hB = "sizzle" + +new Date();
      var hm = Jz.document;
      var hJ = 0;
      var hh = 0;
      var hH = hz();
      var hq = hz();
      var hw = hz();
      function hp(H2, H3) {
        if (H2 === H3) {
          h1 = true;
        }
        return 0;
      }
      var hx = {}.hasOwnProperty;
      var hr = [];
      var hO = hr.pop;
      var hY = hr.push;
      var hS = hr.push;
      var hb = hr.slice;
      function hU(H2, H3) {
        for (var H4 = 0, H5 = H2.length; H4 < H5; H4++) {
          if (H2[H4] === H3) {
            return H4;
          }
        }
        return -1;
      }
      var hn =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped";
      var hK = "[\\x20\\t\\r\\n\\f]";
      var hf = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+";
      var ho =
        "\\[" +
        hK +
        "*(" +
        hf +
        ")(?:" +
        hK +
        "*([*^$|!~]?=)" +
        hK +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        hf +
        "))|)" +
        hK +
        "*\\]";
      var hD =
        ":(" +
        hf +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        ho +
        ")*)|.*)\\)|)";
      var hN = new RegExp(hK + "+", "g");
      var hk = new RegExp(
        "^" + hK + "+|((?:^|[^\\\\])(?:\\\\.)*)" + hK + "+$",
        "g"
      );
      var hL = new RegExp("^" + hK + "*," + hK + "*");
      var hg = new RegExp("^" + hK + "*([>+~]|" + hK + ")" + hK + "*");
      var ha = new RegExp("=" + hK + "*([^\\]'\"]*?)" + hK + "*\\]", "g");
      var hd = new RegExp(hD);
      var hc = new RegExp("^" + hf + "$");
      var hR = {
        ID: new RegExp("^#(" + hf + ")"),
        CLASS: new RegExp("^\\.(" + hf + ")"),
        TAG: new RegExp("^(" + hf + "|[*])"),
        ATTR: new RegExp("^" + ho),
        PSEUDO: new RegExp("^" + hD),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            hK +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            hK +
            "*(?:([+-]|)" +
            hK +
            "*(\\d+)|))" +
            hK +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + hn + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            hK +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            hK +
            "*((?:-\\d)?\\d*)" +
            hK +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      };
      var hQ = /^(?:input|select|textarea|button)$/i;
      var hV = /^h\d$/i;
      var hE = /^[^{]+\{\s*\[native \w/;
      var hW = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/;
      var hT = /[+~]/;
      var hl = new RegExp("\\\\([\\da-f]{1,6}" + hK + "?|(" + hK + ")|.)", "ig");
      var hC = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g;
      var hj = hA(
        function (H2) {
          return H2.disabled === true && ("form" in H2 || "label" in H2);
        },
        {
          dir: "parentNode",
          next: "legend",
        }
      );
      try {
        hS.apply((hr = hb.call(hm.childNodes)), hm.childNodes);
        hr[hm.childNodes.length].nodeType;
      } catch (H2) {
        hS = {
          apply: hr.length
            ? function (H3, H4) {
                hY.apply(H3, hb.call(H4));
              }
            : function (H3, H4) {
                for (var H5 = H3.length, H6 = 0; (H3[H5++] = H4[H6++]); );
                H3.length = H5 - 1;
              },
        };
      }
      function hi(H3, H4, H5, H6) {
        var H7;
        var H8;
        var H9;
        var HB;
        var Hm;
        var HJ;
        var Hh;
        var HH = H4 && H4.ownerDocument;
        var Hq = H4 ? H4.nodeType : 9;
        H5 = H5 || [];
        if (typeof H3 != "string" || !H3 || (Hq !== 1 && Hq !== 9 && Hq !== 11)) {
          return H5;
        }
        if (
          !H6 &&
          ((H4 ? H4.ownerDocument || H4 : hm) !== h3 && h2(H4),
          (H4 = H4 || h3),
          h5)
        ) {
          if (Hq !== 11 && (Hm = hW.exec(H3))) {
            if ((H7 = Hm[1])) {
              if (Hq === 9) {
                if (!(H9 = H4.getElementById(H7))) {
                  return H5;
                }
                if (H9.id === H7) {
                  H5.push(H9);
                  return H5;
                }
              } else if (
                HH &&
                (H9 = HH.getElementById(H7)) &&
                h9(H4, H9) &&
                H9.id === H7
              ) {
                H5.push(H9);
                return H5;
              }
            } else {
              if (Hm[2]) {
                hS.apply(H5, H4.getElementsByTagName(H3));
                return H5;
              }
              if (
                (H7 = Hm[3]) &&
                Js.getElementsByClassName &&
                H4.getElementsByClassName
              ) {
                hS.apply(H5, H4.getElementsByClassName(H7));
                return H5;
              }
            }
          }
          if (Js.qsa && !hw[H3 + " "] && (!h6 || !h6.test(H3))) {
            if (Hq !== 1) {
              HH = H4;
              Hh = H3;
            } else if (H4.nodeName.toLowerCase() !== "object") {
              if ((HB = H4.getAttribute("id"))) {
                HB = HB.replace(hC, JX);
              } else {
                H4.setAttribute("id", (HB = hB));
              }
              H8 = (HJ = Jv(H3)).length;
              while (H8--) {
                HJ[H8] = "#" + HB + " " + hv(HJ[H8]);
              }
              Hh = HJ.join(",");
              HH = (hT.test(H3) && hZ(H4.parentNode)) || H4;
            }
            if (Hh) {
              try {
                hS.apply(H5, HH.querySelectorAll(Hh));
                return H5;
              } catch (Hw) {
              } finally {
                if (HB === hB) {
                  H4.removeAttribute("id");
                }
              }
            }
          }
        }
        return JI(H3.replace(hk, "$1"), H4, H5, H6);
      }
      function hz() {
        var H3 = [];
        function H4(H5, H6) {
          if (H3.push(H5 + " ") > Jy.cacheLength) {
            delete H4[H3.shift()];
          }
          return (H4[H5 + " "] = H6);
        }
        return H4;
      }
      function hM(H3) {
        H3[hB] = true;
        return H3;
      }
      function hX(H3) {
        var H4 = h3.createElement("fieldset");
        try {
          return !!H3(H4);
        } catch (H5) {
          return false;
        } finally {
          if (H4.parentNode) {
            H4.parentNode.removeChild(H4);
          }
        }
      }
      function hP(H3, H4) {
        var H5 = H3.split("|");
        for (var H6 = H5.length; H6--; ) {
          Jy.attrHandle[H5[H6]] = H4;
        }
      }
      function hF(H3, H4) {
        var H5 = H4 && H3;
        var H6 =
          H5 &&
          H3.nodeType === 1 &&
          H4.nodeType === 1 &&
          H3.sourceIndex - H4.sourceIndex;
        if (H6) {
          return H6;
        }
        if (H5) {
          while ((H5 = H5.nextSibling)) {
            if (H5 === H4) {
              return -1;
            }
          }
        }
        if (H3) {
          return 1;
        } else {
          return -1;
        }
      }
      function hs(H3) {
        return function (H4) {
          if ("form" in H4) {
            if (H4.parentNode && H4.disabled === false) {
              if ("label" in H4) {
                if ("label" in H4.parentNode) {
                  return H4.parentNode.disabled === H3;
                } else {
                  return H4.disabled === H3;
                }
              } else {
                return (
                  H4.isDisabled === H3 || (H4.isDisabled !== !H3 && hj(H4) === H3)
                );
              }
            } else {
              return H4.disabled === H3;
            }
          } else {
            return "label" in H4 && H4.disabled === H3;
          }
        };
      }
      function hy(H3) {
        return hM(function (H4) {
          H4 = +H4;
          return hM(function (H5, H6) {
            var H7;
            var H8 = H3([], H5.length, H4);
            for (var H9 = H8.length; H9--; ) {
              if (H5[(H7 = H8[H9])]) {
                H5[H7] = !(H6[H7] = H5[H7]);
              }
            }
          });
        });
      }
      function hZ(H3) {
        return H3 && H3.getElementsByTagName !== undefined && H3;
      }
      Js = hi.support = {};
      JG = hi.isXML = function (H3) {
        H3 = H3 && (H3.ownerDocument || H3).documentElement;
        return !!H3 && H3.nodeName !== "HTML";
      };
      h2 = hi.setDocument = function (H3) {
        var H3 = H3 ? H3.ownerDocument || H3 : hm;
        if (H3 !== h3 && H3.nodeType === 9 && H3.documentElement) {
          h4 = (h3 = H3).documentElement;
          h5 = !JG(h3);
          if (hm !== h3 && (H3 = h3.defaultView) && H3.top !== H3) {
            if (H3.addEventListener) {
              H3.addEventListener("unload", JP, false);
            } else if (H3.attachEvent) {
              H3.attachEvent("onunload", JP);
            }
          }
          Js.attributes = hX(function (H4) {
            H4.className = "i";
            return !H4.getAttribute("className");
          });
          Js.getElementsByTagName = hX(function (H4) {
            H4.appendChild(h3.createComment(""));
            return !H4.getElementsByTagName("*").length;
          });
          Js.getElementsByClassName = hE.test(h3.getElementsByClassName);
          Js.getById = hX(function (H4) {
            h4.appendChild(H4).id = hB;
            return !h3.getElementsByName || !h3.getElementsByName(hB).length;
          });
          if (Js.getById) {
            Jy.filter.ID = function (H4) {
              var H5 = H4.replace(hl, JM);
              return function (H6) {
                return H6.getAttribute("id") === H5;
              };
            };
            Jy.find.ID = function (H4, H5) {
              if (H5.getElementById !== undefined && h5) {
                if ((H5 = H5.getElementById(H4))) {
                  return [H5];
                } else {
                  return [];
                }
              }
            };
          } else {
            Jy.filter.ID = function (H4) {
              var H5 = H4.replace(hl, JM);
              return function (H6) {
                H6 =
                  H6.getAttributeNode !== undefined && H6.getAttributeNode("id");
                return H6 && H6.value === H5;
              };
            };
            Jy.find.ID = function (H4, H5) {
              if (H5.getElementById !== undefined && h5) {
                var H6;
                var H7;
                var H8;
                var H9 = H5.getElementById(H4);
                if (H9) {
                  if ((H6 = H9.getAttributeNode("id")) && H6.value === H4) {
                    return [H9];
                  }
                  H8 = H5.getElementsByName(H4);
                  H7 = 0;
                  while ((H9 = H8[H7++])) {
                    if ((H6 = H9.getAttributeNode("id")) && H6.value === H4) {
                      return [H9];
                    }
                  }
                }
                return [];
              }
            };
          }
          Jy.find.TAG = Js.getElementsByTagName
            ? function (H4, H5) {
                if (H5.getElementsByTagName !== undefined) {
                  return H5.getElementsByTagName(H4);
                } else if (Js.qsa) {
                  return H5.querySelectorAll(H4);
                } else {
                  return undefined;
                }
              }
            : function (H4, H5) {
                var H6;
                var H7 = [];
                var H8 = 0;
                var H9 = H5.getElementsByTagName(H4);
                if (H4 !== "*") {
                  return H9;
                }
                while ((H6 = H9[H8++])) {
                  if (H6.nodeType === 1) {
                    H7.push(H6);
                  }
                }
                return H7;
              };
          Jy.find.CLASS =
            Js.getElementsByClassName &&
            function (H4, H5) {
              if (H5.getElementsByClassName !== undefined && h5) {
                return H5.getElementsByClassName(H4);
              }
            };
          h7 = [];
          h6 = [];
          if ((Js.qsa = hE.test(h3.querySelectorAll))) {
            hX(function (H4) {
              h4.appendChild(H4).innerHTML =
                "<a id='" +
                hB +
                "'></a><select id='" +
                hB +
                "-\r\\' msallowcapture=''><option selected=''></option></select>";
              if (H4.querySelectorAll("[msallowcapture^='']").length) {
                h6.push("[*^$]=" + hK + "*(?:''|\"\")");
              }
              if (!H4.querySelectorAll("[selected]").length) {
                h6.push("\\[" + hK + "*(?:value|" + hn + ")");
              }
              if (!H4.querySelectorAll("[id~=" + hB + "-]").length) {
                h6.push("~=");
              }
              if (!H4.querySelectorAll(":checked").length) {
                h6.push(":checked");
              }
              if (!H4.querySelectorAll("a#" + hB + "+*").length) {
                h6.push(".#.+[+~]");
              }
            });
            hX(function (H4) {
              H4.innerHTML =
                "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
              var H5 = h3.createElement("input");
              H5.setAttribute("type", "hidden");
              H4.appendChild(H5).setAttribute("name", "D");
              if (H4.querySelectorAll("[name=d]").length) {
                h6.push("name" + hK + "*[*^$|!~]?=");
              }
              if (H4.querySelectorAll(":enabled").length !== 2) {
                h6.push(":enabled", ":disabled");
              }
              h4.appendChild(H4).disabled = true;
              if (H4.querySelectorAll(":disabled").length !== 2) {
                h6.push(":enabled", ":disabled");
              }
              H4.querySelectorAll("*,:x");
              h6.push(",.*:");
            });
          }
          if (
            (Js.matchesSelector = hE.test(
              (h8 =
                h4.matches ||
                h4.webkitMatchesSelector ||
                h4.mozMatchesSelector ||
                h4.oMatchesSelector ||
                h4.msMatchesSelector)
            ))
          ) {
            hX(function (H4) {
              Js.disconnectedMatch = h8.call(H4, "*");
              h8.call(H4, "[s!='']:x");
              h7.push("!=", hD);
            });
          }
          h6 = h6.length && new RegExp(h6.join("|"));
          h7 = h7.length && new RegExp(h7.join("|"));
          H3 = hE.test(h4.compareDocumentPosition);
          h9 =
            H3 || hE.test(h4.contains)
              ? function (H4, H5) {
                  var H6 = H4.nodeType === 9 ? H4.documentElement : H4;
                  var H5 = H5 && H5.parentNode;
                  return (
                    H4 === H5 ||
                    (!!H5 &&
                      H5.nodeType === 1 &&
                      !!(H6.contains
                        ? H6.contains(H5)
                        : H4.compareDocumentPosition &&
                          H4.compareDocumentPosition(H5) & 16))
                  );
                }
              : function (H4, H5) {
                  if (H5) {
                    while ((H5 = H5.parentNode)) {
                      if (H5 === H4) {
                        return true;
                      }
                    }
                  }
                  return false;
                };
          hp = H3
            ? function (H4, H5) {
                var H6;
                if (H4 === H5) {
                  h1 = true;
                  return 0;
                } else {
                  return (
                    !H4.compareDocumentPosition - !H5.compareDocumentPosition ||
                    ((H6 =
                      (H4.ownerDocument || H4) === (H5.ownerDocument || H5)
                        ? H4.compareDocumentPosition(H5)
                        : 1) & 1 ||
                    (!Js.sortDetached && H5.compareDocumentPosition(H4) === H6)
                      ? H4 === h3 || (H4.ownerDocument === hm && h9(hm, H4))
                        ? -1
                        : H5 === h3 || (H5.ownerDocument === hm && h9(hm, H5))
                        ? 1
                        : h0
                        ? hU(h0, H4) - hU(h0, H5)
                        : 0
                      : H6 & 4
                      ? -1
                      : 1)
                  );
                }
              }
            : function (H4, H5) {
                if (H4 === H5) {
                  h1 = true;
                  return 0;
                }
                var H6;
                var H7 = 0;
                var H8 = H4.parentNode;
                var H9 = H5.parentNode;
                var HB = [H4];
                var Hm = [H5];
                if (!H8 || !H9) {
                  if (H4 === h3) {
                    return -1;
                  } else if (H5 === h3) {
                    return 1;
                  } else if (H8) {
                    return -1;
                  } else if (H9) {
                    return 1;
                  } else if (h0) {
                    return hU(h0, H4) - hU(h0, H5);
                  } else {
                    return 0;
                  }
                }
                if (H8 === H9) {
                  return hF(H4, H5);
                }
                for (H6 = H4; (H6 = H6.parentNode); ) {
                  HB.unshift(H6);
                }
                for (H6 = H5; (H6 = H6.parentNode); ) {
                  Hm.unshift(H6);
                }
                while (HB[H7] === Hm[H7]) {
                  H7++;
                }
                if (H7) {
                  return hF(HB[H7], Hm[H7]);
                } else if (HB[H7] === hm) {
                  return -1;
                } else if (Hm[H7] === hm) {
                  return 1;
                } else {
                  return 0;
                }
              };
        }
        return h3;
      };
      hi.matches = function (H3, H4) {
        return hi(H3, null, null, H4);
      };
      hi.matchesSelector = function (H3, H4) {
        if ((H3.ownerDocument || H3) !== h3) {
          h2(H3);
        }
        H4 = H4.replace(ha, "='$1']");
        if (
          Js.matchesSelector &&
          h5 &&
          !hw[H4 + " "] &&
          (!h7 || !h7.test(H4)) &&
          (!h6 || !h6.test(H4))
        ) {
          try {
            var H5 = h8.call(H3, H4);
            if (
              H5 ||
              Js.disconnectedMatch ||
              (H3.document && H3.document.nodeType !== 11)
            ) {
              return H5;
            }
          } catch (H6) {}
        }
        return hi(H4, h3, null, [H3]).length > 0;
      };
      hi.contains = function (H3, H4) {
        if ((H3.ownerDocument || H3) !== h3) {
          h2(H3);
        }
        return h9(H3, H4);
      };
      hi.attr = function (H3, H4) {
        if ((H3.ownerDocument || H3) !== h3) {
          h2(H3);
        }
        var H5 = Jy.attrHandle[H4.toLowerCase()];
        var H5 =
          H5 && hx.call(Jy.attrHandle, H4.toLowerCase())
            ? H5(H3, H4, !h5)
            : undefined;
        if (H5 !== undefined) {
          return H5;
        } else if (Js.attributes || !h5) {
          return H3.getAttribute(H4);
        } else if ((H5 = H3.getAttributeNode(H4)) && H5.specified) {
          return H5.value;
        } else {
          return null;
        }
      };
      hi.escape = function (H3) {
        return (H3 + "").replace(hC, JX);
      };
      hi.error = function (H3) {
        throw new Error("Syntax error, unrecognized expression: " + H3);
      };
      hi.uniqueSort = function (H3) {
        var H4;
        var H5 = [];
        var H6 = 0;
        var H7 = 0;
        h1 = !Js.detectDuplicates;
        h0 = !Js.sortStable && H3.slice(0);
        H3.sort(hp);
        if (h1) {
          while ((H4 = H3[H7++])) {
            if (H4 === H3[H7]) {
              H6 = H5.push(H7);
            }
          }
          while (H6--) {
            H3.splice(H5[H6], 1);
          }
        }
        h0 = null;
        return H3;
      };
      JZ = hi.getText = function (H3) {
        var H4;
        var H5 = "";
        var H6 = 0;
        var H7 = H3.nodeType;
        if (H7) {
          if (H7 === 1 || H7 === 9 || H7 === 11) {
            if (typeof H3.textContent == "string") {
              return H3.textContent;
            }
            for (H3 = H3.firstChild; H3; H3 = H3.nextSibling) {
              H5 += JZ(H3);
            }
          } else if (H7 === 3 || H7 === 4) {
            return H3.nodeValue;
          }
        } else {
          while ((H4 = H3[H6++])) {
            H5 += JZ(H4);
          }
        }
        return H5;
      };
      (Jy = hi.selectors =
        {
          cacheLength: 50,
          createPseudo: hM,
          match: hR,
          attrHandle: {},
          find: {},
          relative: {
            ">": {
              dir: "parentNode",
              first: true,
            },
            " ": {
              dir: "parentNode",
            },
            "+": {
              dir: "previousSibling",
              first: true,
            },
            "~": {
              dir: "previousSibling",
            },
          },
          preFilter: {
            ATTR: function (H3) {
              H3[1] = H3[1].replace(hl, JM);
              H3[3] = (H3[3] || H3[4] || H3[5] || "").replace(hl, JM);
              if (H3[2] === "~=") {
                H3[3] = " " + H3[3] + " ";
              }
              return H3.slice(0, 4);
            },
            CHILD: function (H3) {
              H3[1] = H3[1].toLowerCase();
              if (H3[1].slice(0, 3) === "nth") {
                if (!H3[3]) {
                  hi.error(H3[0]);
                }
                H3[4] = +(H3[4]
                  ? H3[5] + (H3[6] || 1)
                  : (H3[3] === "even" || H3[3] === "odd") * 2);
                H3[5] = +(H3[7] + H3[8] || H3[3] === "odd");
              } else if (H3[3]) {
                hi.error(H3[0]);
              }
              return H3;
            },
            PSEUDO: function (H3) {
              var H4;
              var H5 = !H3[6] && H3[2];
              if (hR.CHILD.test(H3[0])) {
                return null;
              } else {
                if (H3[3]) {
                  H3[2] = H3[4] || H3[5] || "";
                } else if (
                  H5 &&
                  hd.test(H5) &&
                  (H4 =
                    (H4 = Jv(H5, true)) &&
                    H5.indexOf(")", H5.length - H4) - H5.length)
                ) {
                  H3[0] = H3[0].slice(0, H4);
                  H3[2] = H5.slice(0, H4);
                }
                return H3.slice(0, 3);
              }
            },
          },
          filter: {
            TAG: function (H3) {
              var H4 = H3.replace(hl, JM).toLowerCase();
              if (H3 === "*") {
                return function () {
                  return true;
                };
              } else {
                return function (H5) {
                  return H5.nodeName && H5.nodeName.toLowerCase() === H4;
                };
              }
            },
            CLASS: function (H3) {
              var H4 = hH[H3 + " "];
              return (
                H4 ||
                ((H4 = new RegExp("(^|" + hK + ")" + H3 + "(" + hK + "|$)")) &&
                  hH(H3, function (H5) {
                    return H4.test(
                      (typeof H5.className == "string" && H5.className) ||
                        (H5.getAttribute !== undefined &&
                          H5.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (H3, H4, H5) {
              return function (H6) {
                H6 = hi.attr(H6, H3);
                if (H6 == null) {
                  return H4 === "!=";
                } else {
                  return (
                    !H4 ||
                    ((H6 += ""),
                    H4 === "="
                      ? H6 === H5
                      : H4 === "!="
                      ? H6 !== H5
                      : H4 === "^="
                      ? H5 && H6.indexOf(H5) === 0
                      : H4 === "*="
                      ? H5 && H6.indexOf(H5) > -1
                      : H4 === "$="
                      ? H5 && H6.slice(-H5.length) === H5
                      : H4 === "~="
                      ? (" " + H6.replace(hN, " ") + " ").indexOf(H5) > -1
                      : H4 === "|=" &&
                        (H6 === H5 || H6.slice(0, H5.length + 1) === H5 + "-"))
                  );
                }
              };
            },
            CHILD: function (H3, H4, H5, H6, H7) {
              var H8 = H3.slice(0, 3) !== "nth";
              var H9 = H3.slice(-4) !== "last";
              var HB = H4 === "of-type";
              if (H6 === 1 && H7 === 0) {
                return function (Hm) {
                  return !!Hm.parentNode;
                };
              } else {
                return function (Hm, HJ, Hh) {
                  var HH;
                  var Hq;
                  var Hw;
                  var Hp;
                  var Hx;
                  var Hr;
                  var HO = H8 != H9 ? "nextSibling" : "previousSibling";
                  var HY = Hm.parentNode;
                  var HS = HB && Hm.nodeName.toLowerCase();
                  var Hb = !Hh && !HB;
                  var HU = false;
                  if (HY) {
                    if (H8) {
                      while (HO) {
                        for (Hp = Hm; (Hp = Hp[HO]); ) {
                          if (
                            HB
                              ? Hp.nodeName.toLowerCase() === HS
                              : Hp.nodeType === 1
                          ) {
                            return false;
                          }
                        }
                        Hr = HO = H3 === "only" && !Hr && "nextSibling";
                      }
                      return true;
                    }
                    Hr = [H9 ? HY.firstChild : HY.lastChild];
                    if (H9 && Hb) {
                      HU =
                        (Hx =
                          (HH =
                            (Hq =
                              (Hw = (Hp = HY)[hB] || (Hp[hB] = {}))[
                                Hp.uniqueID
                              ] || (Hw[Hp.uniqueID] = {}))[H3] || [])[0] === hJ &&
                          HH[1]) && HH[2];
                      Hp = Hx && HY.childNodes[Hx];
                      while (
                        (Hp = (++Hx && Hp && Hp[HO]) || ((HU = Hx = 0), Hr.pop()))
                      ) {
                        if (Hp.nodeType === 1 && ++HU && Hp === Hm) {
                          Hq[H3] = [hJ, Hx, HU];
                          break;
                        }
                      }
                    } else if (
                      (HU = Hb
                        ? (Hx =
                            (HH =
                              (Hq =
                                (Hw = (Hp = Hm)[hB] || (Hp[hB] = {}))[
                                  Hp.uniqueID
                                ] || (Hw[Hp.uniqueID] = {}))[H3] || [])[0] ===
                              hJ && HH[1])
                        : HU) === false
                    ) {
                      while (
                        (Hp =
                          (++Hx && Hp && Hp[HO]) || ((HU = Hx = 0), Hr.pop())) &&
                        ((HB
                          ? Hp.nodeName.toLowerCase() !== HS
                          : Hp.nodeType !== 1) ||
                          !++HU ||
                          (Hb &&
                            ((Hq =
                              (Hw = Hp[hB] ||= {})[Hp.uniqueID] ||
                              (Hw[Hp.uniqueID] = {}))[H3] = [hJ, HU]),
                          Hp !== Hm))
                      );
                    }
                    return (HU -= H7) === H6 || (HU % H6 == 0 && HU / H6 >= 0);
                  }
                };
              }
            },
            PSEUDO: function (H3, H4) {
              var H5;
              var H6 =
                Jy.pseudos[H3] ||
                Jy.setFilters[H3.toLowerCase()] ||
                hi.error("unsupported pseudo: " + H3);
              if (H6[hB]) {
                return H6(H4);
              } else if (H6.length > 1) {
                H5 = [H3, H3, "", H4];
                if (Jy.setFilters.hasOwnProperty(H3.toLowerCase())) {
                  return hM(function (H7, H8) {
                    var H9;
                    var HB = H6(H7, H4);
                    for (var Hm = HB.length; Hm--; ) {
                      H7[(H9 = hU(H7, HB[Hm]))] = !(H8[H9] = HB[Hm]);
                    }
                  });
                } else {
                  return function (H7) {
                    return H6(H7, 0, H5);
                  };
                }
              } else {
                return H6;
              }
            },
          },
          pseudos: {
            not: hM(function (H3) {
              var H4 = [];
              var H5 = [];
              var H6 = JA(H3.replace(hk, "$1"));
              if (H6[hB]) {
                return hM(function (H7, H8, H9, HB) {
                  var Hm;
                  var HJ = H6(H7, null, HB, []);
                  for (var Hh = H7.length; Hh--; ) {
                    if ((Hm = HJ[Hh])) {
                      H7[Hh] = !(H8[Hh] = Hm);
                    }
                  }
                });
              } else {
                return function (H7, H8, H9) {
                  H4[0] = H7;
                  H6(H4, null, H9, H5);
                  H4[0] = null;
                  return !H5.pop();
                };
              }
            }),
            has: hM(function (H3) {
              return function (H4) {
                return hi(H3, H4).length > 0;
              };
            }),
            contains: hM(function (H3) {
              H3 = H3.replace(hl, JM);
              return function (H4) {
                return (
                  (H4.textContent || H4.innerText || JZ(H4)).indexOf(H3) > -1
                );
              };
            }),
            lang: hM(function (H3) {
              if (!hc.test(H3 || "")) {
                hi.error("unsupported lang: " + H3);
              }
              H3 = H3.replace(hl, JM).toLowerCase();
              return function (H4) {
                var H5;
                do {
                  if (
                    (H5 = h5
                      ? H4.lang
                      : H4.getAttribute("xml:lang") || H4.getAttribute("lang"))
                  ) {
                    return (
                      (H5 = H5.toLowerCase()) === H3 || H5.indexOf(H3 + "-") === 0
                    );
                  }
                } while ((H4 = H4.parentNode) && H4.nodeType === 1);
                return false;
              };
            }),
            target: function (H3) {
              var H4 = Jz.location && Jz.location.hash;
              return H4 && H4.slice(1) === H3.id;
            },
            root: function (H3) {
              return H3 === h4;
            },
            focus: function (H3) {
              return (
                H3 === h3.activeElement &&
                (!h3.hasFocus || h3.hasFocus()) &&
                (!!H3.type || !!H3.href || !!~H3.tabIndex)
              );
            },
            enabled: hs(false),
            disabled: hs(true),
            checked: function (H3) {
              var H4 = H3.nodeName.toLowerCase();
              return (
                (H4 === "input" && !!H3.checked) ||
                (H4 === "option" && !!H3.selected)
              );
            },
            selected: function (H3) {
              if (H3.parentNode) {
                H3.parentNode.selectedIndex;
              }
              return H3.selected === true;
            },
            empty: function (H3) {
              for (H3 = H3.firstChild; H3; H3 = H3.nextSibling) {
                if (H3.nodeType < 6) {
                  return false;
                }
              }
              return true;
            },
            parent: function (H3) {
              return !Jy.pseudos.empty(H3);
            },
            header: function (H3) {
              return hV.test(H3.nodeName);
            },
            input: function (H3) {
              return hQ.test(H3.nodeName);
            },
            button: function (H3) {
              var H4 = H3.nodeName.toLowerCase();
              return (H4 === "input" && H3.type === "button") || H4 === "button";
            },
            text: function (H3) {
              return (
                H3.nodeName.toLowerCase() === "input" &&
                H3.type === "text" &&
                ((H3 = H3.getAttribute("type")) == null ||
                  H3.toLowerCase() === "text")
              );
            },
            first: hy(function () {
              return [0];
            }),
            last: hy(function (H3, H4) {
              return [H4 - 1];
            }),
            eq: hy(function (H3, H4, H5) {
              return [H5 < 0 ? H5 + H4 : H5];
            }),
            even: hy(function (H3, H4) {
              for (var H5 = 0; H5 < H4; H5 += 2) {
                H3.push(H5);
              }
              return H3;
            }),
            odd: hy(function (H3, H4) {
              for (var H5 = 1; H5 < H4; H5 += 2) {
                H3.push(H5);
              }
              return H3;
            }),
            lt: hy(function (H3, H4, H5) {
              for (var H6 = H5 < 0 ? H5 + H4 : H5; --H6 >= 0; ) {
                H3.push(H6);
              }
              return H3;
            }),
            gt: hy(function (H3, H4, H5) {
              for (var H6 = H5 < 0 ? H5 + H4 : H5; ++H6 < H4; ) {
                H3.push(H6);
              }
              return H3;
            }),
          },
        }).pseudos.nth = Jy.pseudos.eq;
      for (JF in {
        radio: true,
        checkbox: true,
        file: true,
        password: true,
        image: true,
      }) {
        Jy.pseudos[JF] = (function (H3) {
          return function (H4) {
            return H4.nodeName.toLowerCase() === "input" && H4.type === H3;
          };
        })(JF);
      }
      for (JF in {
        submit: true,
        reset: true,
      }) {
        Jy.pseudos[JF] = (function (H3) {
          return function (H4) {
            var H5 = H4.nodeName.toLowerCase();
            return (H5 === "input" || H5 === "button") && H4.type === H3;
          };
        })(JF);
      }
      function hG() {}
      function hv(H3) {
        for (var H4 = 0, H5 = H3.length, H6 = ""; H4 < H5; H4++) {
          H6 += H3[H4].value;
        }
        return H6;
      }
      function hA(H3, H4, H5) {
        var H6 = H4.dir;
        var H7 = H4.next;
        var H8 = H7 || H6;
        var H9 = H5 && H8 === "parentNode";
        var HB = hh++;
        if (H4.first) {
          return function (Hm, HJ, Hh) {
            while ((Hm = Hm[H6])) {
              if (Hm.nodeType === 1 || H9) {
                return H3(Hm, HJ, Hh);
              }
            }
            return false;
          };
        } else {
          return function (Hm, HJ, Hh) {
            var HH;
            var Hq;
            var Hw = [hJ, HB];
            if (Hh) {
              while ((Hm = Hm[H6])) {
                if ((Hm.nodeType === 1 || H9) && H3(Hm, HJ, Hh)) {
                  return true;
                }
              }
            } else {
              while ((Hm = Hm[H6])) {
                if (Hm.nodeType === 1 || H9) {
                  Hq =
                    (Hq = Hm[hB] ||= {})[Hm.uniqueID] || (Hq[Hm.uniqueID] = {});
                  if (H7 && H7 === Hm.nodeName.toLowerCase()) {
                    Hm = Hm[H6] || Hm;
                  } else {
                    if ((HH = Hq[H8]) && HH[0] === hJ && HH[1] === HB) {
                      return (Hw[2] = HH[2]);
                    }
                    if (((Hq[H8] = Hw)[2] = H3(Hm, HJ, Hh))) {
                      return true;
                    }
                  }
                }
              }
            }
            return false;
          };
        }
      }
      function hI(H3) {
        if (H3.length > 1) {
          return function (H4, H5, H6) {
            for (var H7 = H3.length; H7--; ) {
              if (!H3[H7](H4, H5, H6)) {
                return false;
              }
            }
            return true;
          };
        } else {
          return H3[0];
        }
      }
      function hu(H3, H4, H5, H6, H7) {
        var H8;
        var H9 = [];
        for (var HB = 0, Hm = H3.length, HJ = H4 != null; HB < Hm; HB++) {
          if (!!(H8 = H3[HB]) && (!H5 || !!H5(H8, H6, H7))) {
            H9.push(H8);
            if (HJ) {
              H4.push(HB);
            }
          }
        }
        return H9;
      }
      function H0(H3, H4, H5, H6, H7, H8) {
        if (H6 && !H6[hB]) {
          H6 = H0(H6);
        }
        if (H7 && !H7[hB]) {
          H7 = H0(H7, H8);
        }
        return hM(function (H9, HB, Hm, HJ) {
          var Hh;
          var HH;
          var Hq;
          var Hw = [];
          var Hp = [];
          var Hx = HB.length;
          var Hr =
            H9 ||
            (function (HS, Hb, HU) {
              for (var Hn = 0, HK = Hb.length; Hn < HK; Hn++) {
                hi(HS, Hb[Hn], HU);
              }
              return HU;
            })(H4 || "*", Hm.nodeType ? [Hm] : Hm, []);
          var HO = !H3 || (!H9 && H4) ? Hr : hu(Hr, Hw, H3, Hm, HJ);
          var HY = H5 ? (H7 || (H9 ? H3 : Hx || H6) ? [] : HB) : HO;
          if (H5) {
            H5(HO, HY, Hm, HJ);
          }
          if (H6) {
            Hh = hu(HY, Hp);
            H6(Hh, [], Hm, HJ);
            HH = Hh.length;
            while (HH--) {
              if ((Hq = Hh[HH])) {
                HY[Hp[HH]] = !(HO[Hp[HH]] = Hq);
              }
            }
          }
          if (H9) {
            if (H7 || H3) {
              if (H7) {
                Hh = [];
                HH = HY.length;
                while (HH--) {
                  if ((Hq = HY[HH])) {
                    Hh.push((HO[HH] = Hq));
                  }
                }
                H7(null, (HY = []), Hh, HJ);
              }
              for (HH = HY.length; HH--; ) {
                if ((Hq = HY[HH]) && (Hh = H7 ? hU(H9, Hq) : Hw[HH]) > -1) {
                  H9[Hh] = !(HB[Hh] = Hq);
                }
              }
            }
          } else {
            HY = hu(HY === HB ? HY.splice(Hx, HY.length) : HY);
            if (H7) {
              H7(null, HB, HY, HJ);
            } else {
              hS.apply(HB, HY);
            }
          }
        });
      }
      function H1(H3, H4) {
        function H5(H8, H9, HB, Hm, HJ) {
          var Hh;
          var HH;
          var Hq;
          var Hw = 0;
          var Hp = "0";
          var Hx = H8 && [];
          var Hr = [];
          var HO = Ju;
          var HY = H8 || (H7 && Jy.find.TAG("*", HJ));
          var HS = (hJ += HO == null ? 1 : Math.random() || 0.1);
          var Hb = HY.length;
          for (
            HJ && (Ju = H9 === h3 || H9 || HJ);
            Hp !== Hb && (Hh = HY[Hp]) != null;
            Hp++
          ) {
            if (H7 && Hh) {
              HH = 0;
              if (!H9 && Hh.ownerDocument !== h3) {
                h2(Hh);
                HB = !h5;
              }
              while ((Hq = H3[HH++])) {
                if (Hq(Hh, H9 || h3, HB)) {
                  Hm.push(Hh);
                  break;
                }
              }
              if (HJ) {
                hJ = HS;
              }
            }
            if (H6 && ((Hh = !Hq && Hh) && Hw--, H8)) {
              Hx.push(Hh);
            }
          }
          Hw += Hp;
          if (H6 && Hp !== Hw) {
            for (HH = 0; (Hq = H4[HH++]); ) {
              Hq(Hx, Hr, H9, HB);
            }
            if (H8) {
              if (Hw > 0) {
                while (Hp--) {
                  if (!Hx[Hp] && !Hr[Hp]) {
                    Hr[Hp] = hO.call(Hm);
                  }
                }
              }
              Hr = hu(Hr);
            }
            hS.apply(Hm, Hr);
            if (HJ && !H8 && Hr.length > 0 && Hw + H4.length > 1) {
              hi.uniqueSort(Hm);
            }
          }
          if (HJ) {
            hJ = HS;
            Ju = HO;
          }
          return Hx;
        }
        var H6 = H4.length > 0;
        var H7 = H3.length > 0;
        if (H6) {
          return hM(H5);
        } else {
          return H5;
        }
      }
      hG.prototype = Jy.filters = Jy.pseudos;
      Jy.setFilters = new hG();
      Jv = hi.tokenize = function (H3, H4) {
        var H5;
        var H6;
        var H7;
        var H8;
        var H9;
        var HB;
        var Hm;
        var HJ = hq[H3 + " "];
        if (HJ) {
          if (H4) {
            return 0;
          } else {
            return HJ.slice(0);
          }
        }
        H9 = H3;
        HB = [];
        Hm = Jy.preFilter;
        while (H9) {
          if (!H5 || !!(H6 = hL.exec(H9))) {
            if (H6) {
              H9 = H9.slice(H6[0].length) || H9;
            }
            HB.push((H7 = []));
          }
          H5 = false;
          if ((H6 = hg.exec(H9))) {
            H5 = H6.shift();
            H7.push({
              value: H5,
              type: H6[0].replace(hk, " "),
            });
            H9 = H9.slice(H5.length);
          }
          for (H8 in Jy.filter) {
            if (!!(H6 = hR[H8].exec(H9)) && (!Hm[H8] || !!(H6 = Hm[H8](H6)))) {
              H5 = H6.shift();
              H7.push({
                value: H5,
                type: H8,
                matches: H6,
              });
              H9 = H9.slice(H5.length);
            }
          }
          if (!H5) {
            break;
          }
        }
        if (H4) {
          return H9.length;
        } else if (H9) {
          return hi.error(H3);
        } else {
          return hq(H3, HB).slice(0);
        }
      };
      JA = hi.compile = function (H3, H4) {
        var H5;
        var H6 = [];
        var H7 = [];
        var H8 = hw[H3 + " "];
        if (!H8) {
          for (H5 = (H4 = H4 || Jv(H3)).length; H5--; ) {
            ((H8 = (function H9(HB) {
              var Hm;
              var HJ;
              var Hh;
              for (
                var HH = HB.length,
                  Hq = Jy.relative[HB[0].type],
                  Hw = Hq || Jy.relative[" "],
                  Hp = Hq ? 1 : 0,
                  Hx = hA(
                    function (HY) {
                      return HY === Hm;
                    },
                    Hw,
                    true
                  ),
                  Hr = hA(
                    function (HY) {
                      return hU(Hm, HY) > -1;
                    },
                    Hw,
                    true
                  ),
                  HO = [
                    function (HY, HS, Hb) {
                      HY =
                        (!Hq && (Hb || HS !== Ju)) ||
                        ((Hm = HS).nodeType ? Hx : Hr)(HY, HS, Hb);
                      Hm = null;
                      return HY;
                    },
                  ];
                Hp < HH;
                Hp++
              ) {
                if ((HJ = Jy.relative[HB[Hp].type])) {
                  HO = [hA(hI(HO), HJ)];
                } else {
                  if (
                    (HJ = Jy.filter[HB[Hp].type].apply(null, HB[Hp].matches))[hB]
                  ) {
                    for (Hh = ++Hp; Hh < HH && !Jy.relative[HB[Hh].type]; Hh++);
                    return H0(
                      Hp > 1 && hI(HO),
                      Hp > 1 &&
                        hv(
                          HB.slice(0, Hp - 1).concat({
                            value: HB[Hp - 2].type === " " ? "*" : "",
                          })
                        ).replace(hk, "$1"),
                      HJ,
                      Hp < Hh && H9(HB.slice(Hp, Hh)),
                      Hh < HH && H9((HB = HB.slice(Hh))),
                      Hh < HH && hv(HB)
                    );
                  }
                  HO.push(HJ);
                }
              }
              return hI(HO);
            })(H4[H5]))[hB]
              ? H6
              : H7
            ).push(H8);
          }
          (H8 = hw(H3, H1(H7, H6))).selector = H3;
        }
        return H8;
      };
      JI = hi.select = function (H3, H4, H5, H6) {
        var H7;
        var H8;
        var H9;
        var HB;
        var Hm;
        var HJ = typeof H3 == "function" && H3;
        var Hh = !H6 && Jv((H3 = HJ.selector || H3));
        H5 = H5 || [];
        if (Hh.length === 1) {
          if (
            (H8 = Hh[0] = Hh[0].slice(0)).length > 2 &&
            (H9 = H8[0]).type === "ID" &&
            H4.nodeType === 9 &&
            h5 &&
            Jy.relative[H8[1].type]
          ) {
            if (
              !(H4 = (Jy.find.ID(H9.matches[0].replace(hl, JM), H4) || [])[0])
            ) {
              return H5;
            }
            if (HJ) {
              H4 = H4.parentNode;
            }
            H3 = H3.slice(H8.shift().value.length);
          }
          for (
            H7 = hR.needsContext.test(H3) ? 0 : H8.length;
            H7-- && ((H9 = H8[H7]), !Jy.relative[(HB = H9.type)]);
  
          ) {
            if (
              (Hm = Jy.find[HB]) &&
              (H6 = Hm(
                H9.matches[0].replace(hl, JM),
                (hT.test(H8[0].type) && hZ(H4.parentNode)) || H4
              ))
            ) {
              H8.splice(H7, 1);
              if ((H3 = H6.length && hv(H8))) {
                break;
              }
              hS.apply(H5, H6);
              return H5;
            }
          }
        }
        (HJ || JA(H3, Hh))(
          H6,
          H4,
          !h5,
          H5,
          !H4 || (hT.test(H3) && hZ(H4.parentNode)) || H4
        );
        return H5;
      };
      Js.sortStable = hB.split("").sort(hp).join("") === hB;
      Js.detectDuplicates = !!h1;
      h2();
      Js.sortDetached = hX(function (H3) {
        return H3.compareDocumentPosition(h3.createElement("fieldset")) & 1;
      });
      if (
        !hX(function (H3) {
          H3.innerHTML = "<a href='#'></a>";
          return H3.firstChild.getAttribute("href") === "#";
        })
      ) {
        hP("type|href|height|width", function (H3, H4, H5) {
          if (!H5) {
            return H3.getAttribute(H4, H4.toLowerCase() === "type" ? 1 : 2);
          }
        });
      }
      if (
        !Js.attributes ||
        !hX(function (H3) {
          H3.innerHTML = "<input/>";
          H3.firstChild.setAttribute("value", "");
          return H3.firstChild.getAttribute("value") === "";
        })
      ) {
        hP("value", function (H3, H4, H5) {
          if (!H5 && H3.nodeName.toLowerCase() === "input") {
            return H3.defaultValue;
          }
        });
      }
      if (
        !hX(function (H3) {
          return H3.getAttribute("disabled") == null;
        })
      ) {
        hP(hn, function (H3, H4, H5) {
          if (!H5) {
            if (H3[H4] === true) {
              return H4.toLowerCase();
            } else if ((H5 = H3.getAttributeNode(H4)) && H5.specified) {
              return H5.value;
            } else {
              return null;
            }
          }
        });
      }
      return hi;
    })(B9);
    BD.find = Bh;
    BD.expr = Bh.selectors;
    BD.expr[":"] = BD.expr.pseudos;
    BD.uniqueSort = BD.unique = Bh.uniqueSort;
    BD.text = Bh.getText;
    BD.isXMLDoc = Bh.isXML;
    BD.contains = Bh.contains;
    BD.escapeSelector = Bh.escape;
    var Ba = BD.expr.match.needsContext;
    function Bd(Jz, JM) {
      return Jz.nodeName && Jz.nodeName.toLowerCase() === JM.toLowerCase();
    }
    var Bc = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function BR(Jz, JM, JX) {
      if (Bm(JM)) {
        return BD.grep(Jz, function (JP, JF) {
          return !!JM.call(JP, JF, JP) !== JX;
        });
      } else if (JM.nodeType) {
        return BD.grep(Jz, function (JP) {
          return (JP === JM) !== JX;
        });
      } else if (typeof JM != "string") {
        return BD.grep(Jz, function (JP) {
          return Br.call(JM, JP) > -1 !== JX;
        });
      } else {
        return BD.filter(JM, Jz, JX);
      }
    }
    BD.filter = function (Jz, JM, JX) {
      var JP = JM[0];
      if (JX) {
        Jz = ":not(" + Jz + ")";
      }
      if (JM.length === 1 && JP.nodeType === 1) {
        if (BD.find.matchesSelector(JP, Jz)) {
          return [JP];
        } else {
          return [];
        }
      } else {
        return BD.find.matches(
          Jz,
          BD.grep(JM, function (JF) {
            return JF.nodeType === 1;
          })
        );
      }
    };
    BD.fn.extend({
      find: function (Jz) {
        var JM;
        var JX;
        var JP = this.length;
        var JF = this;
        if (typeof Jz != "string") {
          return this.pushStack(
            BD(Jz).filter(function () {
              for (JM = 0; JM < JP; JM++) {
                if (BD.contains(JF[JM], this)) {
                  return true;
                }
              }
            })
          );
        }
        JX = this.pushStack([]);
        JM = 0;
        for (; JM < JP; JM++) {
          BD.find(Jz, JF[JM], JX);
        }
        if (JP > 1) {
          return BD.uniqueSort(JX);
        } else {
          return JX;
        }
      },
      filter: function (Jz) {
        return this.pushStack(BR(this, Jz || [], false));
      },
      not: function (Jz) {
        return this.pushStack(BR(this, Jz || [], true));
      },
      is: function (Jz) {
        return !!BR(
          this,
          typeof Jz == "string" && Ba.test(Jz) ? BD(Jz) : Jz || [],
          false
        ).length;
      },
    });
    var BQ;
    var BV = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (BD.fn.init = function (Jz, JM, JX) {
      if (Jz) {
        JX = JX || BQ;
        if (typeof Jz != "string") {
          if (Jz.nodeType) {
            this[0] = Jz;
            this.length = 1;
            return this;
          } else if (Bm(Jz)) {
            if (JX.ready !== undefined) {
              return JX.ready(Jz);
            } else {
              return Jz(BD);
            }
          } else {
            return BD.makeArray(Jz, this);
          }
        }
        if (
          !(JP =
            Jz[0] === "<" && Jz[Jz.length - 1] === ">" && Jz.length >= 3
              ? [null, Jz, null]
              : BV.exec(Jz)) ||
          (!JP[1] && JM)
        ) {
          return (!JM || JM.jquery ? JM || JX : this.constructor(JM)).find(Jz);
        }
        if (JP[1]) {
          JM = JM instanceof BD ? JM[0] : JM;
          BD.merge(
            this,
            BD.parseHTML(
              JP[1],
              JM && JM.nodeType ? JM.ownerDocument || JM : BH,
              true
            )
          );
          if (Bc.test(JP[1]) && BD.isPlainObject(JM)) {
            for (var JP in JM) {
              if (Bm(this[JP])) {
                this[JP](JM[JP]);
              } else {
                this.attr(JP, JM[JP]);
              }
            }
          }
        } else if ((JX = BH.getElementById(JP[2]))) {
          this[0] = JX;
          this.length = 1;
        }
      }
      return this;
    }).prototype = BD.fn;
    BQ = BD(BH);
    var BE = /^(?:parents|prev(?:Until|All))/;
    var BW = {
      children: true,
      contents: true,
      next: true,
      prev: true,
    };
    function BT(Jz, JM) {
      while ((Jz = Jz[JM]) && Jz.nodeType !== 1);
      return Jz;
    }
    BD.fn.extend({
      has: function (Jz) {
        var JM = BD(Jz, this);
        var JX = JM.length;
        return this.filter(function () {
          for (var JP = 0; JP < JX; JP++) {
            if (BD.contains(this, JM[JP])) {
              return true;
            }
          }
        });
      },
      closest: function (Jz, JM) {
        var JX;
        var JP = 0;
        var JF = this.length;
        var Js = [];
        var Jy = typeof Jz != "string" && BD(Jz);
        if (!Ba.test(Jz)) {
          for (; JP < JF; JP++) {
            for (JX = this[JP]; JX && JX !== JM; JX = JX.parentNode) {
              if (
                JX.nodeType < 11 &&
                (Jy
                  ? Jy.index(JX) > -1
                  : JX.nodeType === 1 && BD.find.matchesSelector(JX, Jz))
              ) {
                Js.push(JX);
                break;
              }
            }
          }
        }
        return this.pushStack(Js.length > 1 ? BD.uniqueSort(Js) : Js);
      },
      index: function (Jz) {
        if (Jz) {
          if (typeof Jz == "string") {
            return Br.call(BD(Jz), this[0]);
          } else {
            return Br.call(this, Jz.jquery ? Jz[0] : Jz);
          }
        } else if (this[0] && this[0].parentNode) {
          return this.first().prevAll().length;
        } else {
          return -1;
        }
      },
      add: function (Jz, JM) {
        return this.pushStack(BD.uniqueSort(BD.merge(this.get(), BD(Jz, JM))));
      },
      addBack: function (Jz) {
        return this.add(
          Jz == null ? this.prevObject : this.prevObject.filter(Jz)
        );
      },
    });
    BD.each(
      {
        parent: function (Jz) {
          Jz = Jz.parentNode;
          if (Jz && Jz.nodeType !== 11) {
            return Jz;
          } else {
            return null;
          }
        },
        parents: function (Jz) {
          return BL(Jz, "parentNode");
        },
        parentsUntil: function (Jz, JM, JX) {
          return BL(Jz, "parentNode", JX);
        },
        next: function (Jz) {
          return BT(Jz, "nextSibling");
        },
        prev: function (Jz) {
          return BT(Jz, "previousSibling");
        },
        nextAll: function (Jz) {
          return BL(Jz, "nextSibling");
        },
        prevAll: function (Jz) {
          return BL(Jz, "previousSibling");
        },
        nextUntil: function (Jz, JM, JX) {
          return BL(Jz, "nextSibling", JX);
        },
        prevUntil: function (Jz, JM, JX) {
          return BL(Jz, "previousSibling", JX);
        },
        siblings: function (Jz) {
          return Bg((Jz.parentNode || {}).firstChild, Jz);
        },
        children: function (Jz) {
          return Bg(Jz.firstChild);
        },
        contents: function (Jz) {
          if (Bd(Jz, "iframe")) {
            return Jz.contentDocument;
          } else {
            if (Bd(Jz, "template")) {
              Jz = Jz.content || Jz;
            }
            return BD.merge([], Jz.childNodes);
          }
        },
      },
      function (Jz, JM) {
        BD.fn[Jz] = function (JX, JP) {
          var JF = BD.map(this, JM, JX);
          if (
            (JP = Jz.slice(-5) !== "Until" ? JX : JP) &&
            typeof JP == "string"
          ) {
            JF = BD.filter(JP, JF);
          }
          if (this.length > 1 && (BW[Jz] || BD.uniqueSort(JF), BE.test(Jz))) {
            JF.reverse();
          }
          return this.pushStack(JF);
        };
      }
    );
    var Bl = /[^\x20\t\r\n\f]+/g;
    function BC(Jz) {
      return Jz;
    }
    function Bj(Jz) {
      throw Jz;
    }
    function Bi(Jz, JM, JX, JP) {
      var JF;
      try {
        if (Jz && Bm((JF = Jz.promise))) {
          JF.call(Jz).done(JM).fail(JX);
        } else if (Jz && Bm((JF = Jz.then))) {
          JF.call(Jz, JM, JX);
        } else {
          JM.apply(undefined, [Jz].slice(JP));
        }
      } catch (Js) {
        JX.apply(undefined, [Js]);
      }
    }
    BD.Callbacks = function (Jz) {
      var JM;
      var JX;
      Jz =
        typeof Jz == "string"
          ? ((JM = Jz),
            (JX = {}),
            BD.each(JM.match(Bl) || [], function (Ju, h0) {
              JX[h0] = true;
            }),
            JX)
          : BD.extend({}, Jz);
      function JP() {
        JZ = JZ || Jz.once;
        Jy = JF = true;
        for (; Jv.length; JA = -1) {
          for (Js = Jv.shift(); ++JA < JG.length; ) {
            if (JG[JA].apply(Js[0], Js[1]) === false && Jz.stopOnFalse) {
              JA = JG.length;
              Js = false;
            }
          }
        }
        if (!Jz.memory) {
          Js = false;
        }
        JF = false;
        if (JZ) {
          JG = Js ? [] : "";
        }
      }
      var JF;
      var Js;
      var Jy;
      var JZ;
      var JG = [];
      var Jv = [];
      var JA = -1;
      var JI = {
        add: function () {
          if (
            JG &&
            (Js && !JF && ((JA = JG.length - 1), Jv.push(Js)),
            (function Ju(h0) {
              BD.each(h0, function (h1, h2) {
                if (Bm(h2)) {
                  if (!Jz.unique || !JI.has(h2)) {
                    JG.push(h2);
                  }
                } else if (h2 && h2.length && Bo(h2) !== "string") {
                  Ju(h2);
                }
              });
            })(arguments),
            Js) &&
            !JF
          ) {
            JP();
          }
          return this;
        },
        remove: function () {
          BD.each(arguments, function (Ju, h0) {
            for (var h1; (h1 = BD.inArray(h0, JG, h1)) > -1; ) {
              JG.splice(h1, 1);
              if (h1 <= JA) {
                JA--;
              }
            }
          });
          return this;
        },
        has: function (Ju) {
          if (Ju) {
            return BD.inArray(Ju, JG) > -1;
          } else {
            return JG.length > 0;
          }
        },
        empty: function () {
          JG = JG && [];
          return this;
        },
        disable: function () {
          JZ = Jv = [];
          JG = Js = "";
          return this;
        },
        disabled: function () {
          return !JG;
        },
        lock: function () {
          JZ = Jv = [];
          if (!Js && !JF) {
            JG = Js = "";
          }
          return this;
        },
        locked: function () {
          return !!JZ;
        },
        fireWith: function (Ju, h0) {
          if (
            !JZ &&
            !((h0 = [Ju, (h0 = h0 || []).slice ? h0.slice() : h0]),
            Jv.push(h0),
            JF)
          ) {
            JP();
          }
          return this;
        },
        fire: function () {
          JI.fireWith(this, arguments);
          return this;
        },
        fired: function () {
          return !!Jy;
        },
      };
      return JI;
    };
    BD.extend({
      Deferred: function (Jz) {
        var JM = [
          [
            "notify",
            "progress",
            BD.Callbacks("memory"),
            BD.Callbacks("memory"),
            2,
          ],
          [
            "resolve",
            "done",
            BD.Callbacks("once memory"),
            BD.Callbacks("once memory"),
            0,
            "resolved",
          ],
          [
            "reject",
            "fail",
            BD.Callbacks("once memory"),
            BD.Callbacks("once memory"),
            1,
            "rejected",
          ],
        ];
        var JX = "pending";
        var JP = {
          state: function () {
            return JX;
          },
          always: function () {
            JF.done(arguments).fail(arguments);
            return this;
          },
          catch: function (Js) {
            return JP.then(null, Js);
          },
          pipe: function () {
            var Js = arguments;
            return BD.Deferred(function (Jy) {
              BD.each(JM, function (JZ, JG) {
                var Jv = Bm(Js[JG[4]]) && Js[JG[4]];
                JF[JG[1]](function () {
                  var JA = Jv && Jv.apply(this, arguments);
                  if (JA && Bm(JA.promise)) {
                    JA.promise()
                      .progress(Jy.notify)
                      .done(Jy.resolve)
                      .fail(Jy.reject);
                  } else {
                    Jy[JG[0] + "With"](this, Jv ? [JA] : arguments);
                  }
                });
              });
              Js = null;
            }).promise();
          },
          then: function (Js, Jy, JZ) {
            var JG = 0;
            function Jv(JA, JI, Ju, h0) {
              return function () {
                function h1() {
                  var h5;
                  var h6;
                  if (!(JA < JG)) {
                    if ((h5 = Ju.apply(h2, h3)) === JI.promise()) {
                      throw new TypeError("Thenable self-resolution");
                    }
                    h6 =
                      h5 &&
                      (typeof h5 == "object" || typeof h5 == "function") &&
                      h5.then;
                    if (Bm(h6)) {
                      if (h0) {
                        h6.call(h5, Jv(JG, JI, BC, h0), Jv(JG, JI, Bj, h0));
                      } else {
                        JG++;
                        h6.call(
                          h5,
                          Jv(JG, JI, BC, h0),
                          Jv(JG, JI, Bj, h0),
                          Jv(JG, JI, BC, JI.notifyWith)
                        );
                      }
                    } else {
                      if (Ju !== BC) {
                        h2 = undefined;
                        h3 = [h5];
                      }
                      (h0 || JI.resolveWith)(h2, h3);
                    }
                  }
                }
                var h2 = this;
                var h3 = arguments;
                var h4 = h0
                  ? h1
                  : function () {
                      try {
                        h1();
                      } catch (h5) {
                        if (BD.Deferred.exceptionHook) {
                          BD.Deferred.exceptionHook(h5, h4.stackTrace);
                        }
                        if (JG <= JA + 1) {
                          if (Ju !== Bj) {
                            h2 = undefined;
                            h3 = [h5];
                          }
                          JI.rejectWith(h2, h3);
                        }
                      }
                    };
                if (JA) {
                  h4();
                } else {
                  if (BD.Deferred.getStackHook) {
                    h4.stackTrace = BD.Deferred.getStackHook();
                  }
                  B9.setTimeout(h4);
                }
              };
            }
            return BD.Deferred(function (JA) {
              JM[0][3].add(Jv(0, JA, Bm(JZ) ? JZ : BC, JA.notifyWith));
              JM[1][3].add(Jv(0, JA, Bm(Js) ? Js : BC));
              JM[2][3].add(Jv(0, JA, Bm(Jy) ? Jy : Bj));
            }).promise();
          },
          promise: function (Js) {
            if (Js != null) {
              return BD.extend(Js, JP);
            } else {
              return JP;
            }
          },
        };
        var JF = {};
        BD.each(JM, function (Js, Jy) {
          var JZ = Jy[2];
          var JG = Jy[5];
          JP[Jy[1]] = JZ.add;
          if (JG) {
            JZ.add(
              function () {
                JX = JG;
              },
              JM[3 - Js][2].disable,
              JM[3 - Js][3].disable,
              JM[0][2].lock,
              JM[0][3].lock
            );
          }
          JZ.add(Jy[3].fire);
          JF[Jy[0]] = function () {
            JF[Jy[0] + "With"](this === JF ? undefined : this, arguments);
            return this;
          };
          JF[Jy[0] + "With"] = JZ.fireWith;
        });
        JP.promise(JF);
        if (Jz) {
          Jz.call(JF, JF);
        }
        return JF;
      },
      when: function (Jz) {
        function JM(JZ) {
          return function (JG) {
            JF[JZ] = this;
            Js[JZ] = arguments.length > 1 ? Bw.call(arguments) : JG;
            if (!--JX) {
              Jy.resolveWith(JF, Js);
            }
          };
        }
        var JX = arguments.length;
        var JP = JX;
        var JF = Array(JP);
        var Js = Bw.call(arguments);
        var Jy = BD.Deferred();
        if (
          JX <= 1 &&
          (Bi(Jz, Jy.done(JM(JP)).resolve, Jy.reject, !JX),
          Jy.state() === "pending" || Bm(Js[JP] && Js[JP].then))
        ) {
          return Jy.then();
        }
        while (JP--) {
          Bi(Js[JP], JM(JP), Jy.reject);
        }
        return Jy.promise();
      },
    });
    var Bz = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    BD.Deferred.exceptionHook = function (Jz, JM) {
      if (B9.console && B9.console.warn && Jz && Bz.test(Jz.name)) {
        B9.console.warn("jQuery.Deferred exception: " + Jz.message, Jz.stack, JM);
      }
    };
    BD.readyException = function (Jz) {
      B9.setTimeout(function () {
        throw Jz;
      });
    };
    var BM = BD.Deferred();
    function BX() {
      BH.removeEventListener("DOMContentLoaded", BX);
      B9.removeEventListener("load", BX);
      BD.ready();
    }
    BD.fn.ready = function (Jz) {
      BM.then(Jz).catch(function (JM) {
        BD.readyException(JM);
      });
      return this;
    };
    BD.extend({
      isReady: false,
      readyWait: 1,
      ready: function (Jz) {
        if (
          !(Jz === true ? --BD.readyWait : BD.isReady) &&
          ((BD.isReady = true) === Jz || !(--BD.readyWait > 0))
        ) {
          BM.resolveWith(BH, [BD]);
        }
      },
    });
    BD.ready.then = BM.then;
    if (
      BH.readyState === "complete" ||
      (BH.readyState !== "loading" && !BH.documentElement.doScroll)
    ) {
      B9.setTimeout(BD.ready);
    } else {
      BH.addEventListener("DOMContentLoaded", BX);
      B9.addEventListener("load", BX);
    }
    function BP(Jz, JM, JX, JP, JF, Js, Jy) {
      var JZ = 0;
      var JG = Jz.length;
      var Jv = JX == null;
      if (Bo(JX) === "object") {
        JF = true;
        for (JZ in JX) {
          BP(Jz, JM, JZ, JX[JZ], true, Js, Jy);
        }
      } else if (
        JP !== undefined &&
        ((JF = true),
        Bm(JP) || (Jy = true),
        (JM = Jv
          ? Jy
            ? (JM.call(Jz, JP), null)
            : ((Jv = JM),
              function (JA, JI, Ju) {
                return Jv.call(BD(JA), Ju);
              })
          : JM))
      ) {
        for (; JZ < JG; JZ++) {
          JM(Jz[JZ], JX, Jy ? JP : JP.call(Jz[JZ], JZ, JM(Jz[JZ], JX)));
        }
      }
      if (JF) {
        return Jz;
      } else if (Jv) {
        return JM.call(Jz);
      } else if (JG) {
        return JM(Jz[0], JX);
      } else {
        return Js;
      }
    }
    var BF = /^-ms-/;
    var Bs = /-([a-z])/g;
    function By(Jz, JM) {
      return JM.toUpperCase();
    }
    function BZ(Jz) {
      return Jz.replace(BF, "ms-").replace(Bs, By);
    }
    function BG(Jz) {
      return Jz.nodeType === 1 || Jz.nodeType === 9 || !+Jz.nodeType;
    }
    function Bv() {
      this.expando = BD.expando + Bv.uid++;
    }
    Bv.uid = 1;
    Bv.prototype = {
      cache: function (Jz) {
        var JM = Jz[this.expando];
        if (!JM) {
          JM = {};
          if (BG(Jz)) {
            if (Jz.nodeType) {
              Jz[this.expando] = JM;
            } else {
              Object.defineProperty(Jz, this.expando, {
                value: JM,
                configurable: true,
              });
            }
          }
        }
        return JM;
      },
      set: function (Jz, JM, JX) {
        var JP;
        var JF = this.cache(Jz);
        if (typeof JM == "string") {
          JF[BZ(JM)] = JX;
        } else {
          for (JP in JM) {
            JF[BZ(JP)] = JM[JP];
          }
        }
        return JF;
      },
      get: function (Jz, JM) {
        if (JM === undefined) {
          return this.cache(Jz);
        } else {
          return Jz[this.expando] && Jz[this.expando][BZ(JM)];
        }
      },
      access: function (Jz, JM, JX) {
        if (
          JM === undefined ||
          (JM && typeof JM == "string" && JX === undefined)
        ) {
          return this.get(Jz, JM);
        } else {
          this.set(Jz, JM, JX);
          if (JX !== undefined) {
            return JX;
          } else {
            return JM;
          }
        }
      },
      remove: function (Jz, JM) {
        var JX;
        var JP = Jz[this.expando];
        if (JP !== undefined) {
          if (JM !== undefined) {
            JX = (JM = Array.isArray(JM)
              ? JM.map(BZ)
              : (JM = BZ(JM)) in JP
              ? [JM]
              : JM.match(Bl) || []).length;
            while (JX--) {
              delete JP[JM[JX]];
            }
          }
          if (JM === undefined || !!BD.isEmptyObject(JP)) {
            if (Jz.nodeType) {
              Jz[this.expando] = undefined;
            } else {
              delete Jz[this.expando];
            }
          }
        }
      },
      hasData: function (Jz) {
        Jz = Jz[this.expando];
        return Jz !== undefined && !BD.isEmptyObject(Jz);
      },
    };
    var BA = new Bv();
    var BI = new Bv();
    var Bu = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/;
    var m0 = /[A-Z]/g;
    function m1(Jz, JM, JX) {
      var JP;
      var JF;
      if (JX === undefined && Jz.nodeType === 1) {
        JP = "data-" + JM.replace(m0, "-$&").toLowerCase();
        if (typeof (JX = Jz.getAttribute(JP)) == "string") {
          try {
            JX =
              (JF = JX) === "true" ||
              (JF !== "false" &&
                (JF === "null"
                  ? null
                  : JF === +JF + ""
                  ? +JF
                  : Bu.test(JF)
                  ? JSON.parse(JF)
                  : JF));
          } catch (Js) {}
          BI.set(Jz, JM, JX);
        } else {
          JX = undefined;
        }
      }
      return JX;
    }
    BD.extend({
      hasData: function (Jz) {
        return BI.hasData(Jz) || BA.hasData(Jz);
      },
      data: function (Jz, JM, JX) {
        return BI.access(Jz, JM, JX);
      },
      removeData: function (Jz, JM) {
        BI.remove(Jz, JM);
      },
      _data: function (Jz, JM, JX) {
        return BA.access(Jz, JM, JX);
      },
      _removeData: function (Jz, JM) {
        BA.remove(Jz, JM);
      },
    });
    BD.fn.extend({
      data: function (Jz, JM) {
        var JX;
        var JP;
        var JF;
        var Js = this[0];
        var Jy = Js && Js.attributes;
        if (Jz !== undefined) {
          if (typeof Jz == "object") {
            return this.each(function () {
              BI.set(this, Jz);
            });
          } else {
            return BP(
              this,
              function (JZ) {
                var JG;
                if (Js && JZ === undefined) {
                  if (
                    (JG = BI.get(Js, Jz)) !== undefined ||
                    (JG = m1(Js, Jz)) !== undefined
                  ) {
                    return JG;
                  } else {
                    return undefined;
                  }
                }
                this.each(function () {
                  BI.set(this, Jz, JZ);
                });
              },
              null,
              JM,
              arguments.length > 1,
              null,
              true
            );
          }
        }
        if (
          this.length &&
          ((JF = BI.get(Js)), Js.nodeType === 1) &&
          !BA.get(Js, "hasDataAttrs")
        ) {
          for (JX = Jy.length; JX--; ) {
            if (Jy[JX] && (JP = Jy[JX].name).indexOf("data-") === 0) {
              JP = BZ(JP.slice(5));
              m1(Js, JP, JF[JP]);
            }
          }
          BA.set(Js, "hasDataAttrs", true);
        }
        return JF;
      },
      removeData: function (Jz) {
        return this.each(function () {
          BI.remove(this, Jz);
        });
      },
    });
    BD.extend({
      queue: function (Jz, JM, JX) {
        var JP;
        if (Jz) {
          JP = BA.get(Jz, (JM = (JM || "fx") + "queue"));
          if (JX) {
            if (!JP || Array.isArray(JX)) {
              JP = BA.access(Jz, JM, BD.makeArray(JX));
            } else {
              JP.push(JX);
            }
          }
          return JP || [];
        }
      },
      dequeue: function (Jz, JM) {
        JM = JM || "fx";
        var JX = BD.queue(Jz, JM);
        var JP = JX.length;
        var JF = JX.shift();
        var Js = BD._queueHooks(Jz, JM);
        if (JF === "inprogress") {
          JF = JX.shift();
          JP--;
        }
        if (JF) {
          if (JM === "fx") {
            JX.unshift("inprogress");
          }
          delete Js.stop;
          JF.call(
            Jz,
            function () {
              BD.dequeue(Jz, JM);
            },
            Js
          );
        }
        if (!JP && Js) {
          Js.empty.fire();
        }
      },
      _queueHooks: function (Jz, JM) {
        var JX = JM + "queueHooks";
        return (
          BA.get(Jz, JX) ||
          BA.access(Jz, JX, {
            empty: BD.Callbacks("once memory").add(function () {
              BA.remove(Jz, [JM + "queue", JX]);
            }),
          })
        );
      },
    });
    BD.fn.extend({
      queue: function (Jz, JM) {
        var JX = 2;
        if (typeof Jz != "string") {
          JM = Jz;
          Jz = "fx";
          JX--;
        }
        if (arguments.length < JX) {
          return BD.queue(this[0], Jz);
        } else if (JM === undefined) {
          return this;
        } else {
          return this.each(function () {
            var JP = BD.queue(this, Jz, JM);
            BD._queueHooks(this, Jz);
            if (Jz === "fx" && JP[0] !== "inprogress") {
              BD.dequeue(this, Jz);
            }
          });
        }
      },
      dequeue: function (Jz) {
        return this.each(function () {
          BD.dequeue(this, Jz);
        });
      },
      clearQueue: function (Jz) {
        return this.queue(Jz || "fx", []);
      },
      promise: function (Jz, JM) {
        function JX() {
          if (!--JF) {
            Js.resolveWith(Jy, [Jy]);
          }
        }
        var JP;
        var JF = 1;
        var Js = BD.Deferred();
        var Jy = this;
        var JZ = this.length;
        if (typeof Jz != "string") {
          JM = Jz;
          Jz = undefined;
        }
        Jz = Jz || "fx";
        while (JZ--) {
          if ((JP = BA.get(Jy[JZ], Jz + "queueHooks")) && JP.empty) {
            JF++;
            JP.empty.add(JX);
          }
        }
        JX();
        return Js.promise(JM);
      },
    });
    function m2(Jz, JM) {
      return (
        (Jz = JM || Jz).style.display === "none" ||
        (Jz.style.display === "" &&
          BD.contains(Jz.ownerDocument, Jz) &&
          BD.css(Jz, "display") === "none")
      );
    }
    function m3(Jz, JM, JX, JP) {
      var JF;
      var Js = {};
      for (JF in JM) {
        Js[JF] = Jz.style[JF];
        Jz.style[JF] = JM[JF];
      }
      JX = JX.apply(Jz, JP || []);
      for (JF in JM) {
        Jz.style[JF] = Js[JF];
      }
      return JX;
    }
    var Bh = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
    var m4 = new RegExp("^(?:([+-])=|)(" + Bh + ")([a-z%]*)$", "i");
    var m5 = ["Top", "Right", "Bottom", "Left"];
    function m6(Jz, JM, JX, JP) {
      var JF;
      var Js;
      var Jy = 20;
      var JZ = JP
        ? function () {
            return JP.cur();
          }
        : function () {
            return BD.css(Jz, JM, "");
          };
      var JG = JZ();
      var Jv = (JX && JX[3]) || (BD.cssNumber[JM] ? "" : "px");
      var JA =
        (BD.cssNumber[JM] || (Jv !== "px" && +JG)) && m4.exec(BD.css(Jz, JM));
      if (JA && JA[3] !== Jv) {
        Jv = Jv || JA[3];
        JA = +(JG /= 2) || 1;
        while (Jy--) {
          BD.style(Jz, JM, JA + Jv);
          if ((1 - Js) * (1 - (Js = JZ() / JG || 0.5)) <= 0) {
            Jy = 0;
          }
          JA /= Js;
        }
        BD.style(Jz, JM, (JA *= 2) + Jv);
        JX = JX || [];
      }
      if (
        JX &&
        ((JA = +JA || +JG || 0),
        (JF = JX[1] ? JA + (JX[1] + 1) * JX[2] : +JX[2]),
        JP)
      ) {
        JP.unit = Jv;
        JP.start = JA;
        JP.end = JF;
      }
      return JF;
    }
    var m7 = {};
    function m8(Jz, JM) {
      var JX;
      var JP;
      var JF;
      var Js;
      var Jy;
      var JZ = [];
      for (var JG = 0, Jv = Jz.length; JG < Jv; JG++) {
        if ((JP = Jz[JG]).style) {
          JX = JP.style.display;
          if (JM) {
            if (JX === "none") {
              JZ[JG] = BA.get(JP, "display") || null;
              if (!JZ[JG]) {
                JP.style.display = "";
              }
            }
            if (JP.style.display === "" && m2(JP)) {
              Jy = Js = undefined;
              Js = (JF = JP).ownerDocument;
              JF = JF.nodeName;
              JZ[JG] =
                (Jy = m7[JF]) ||
                ((Js = Js.body.appendChild(Js.createElement(JF))),
                (Jy = BD.css(Js, "display")),
                Js.parentNode.removeChild(Js),
                (m7[JF] = Jy = Jy === "none" ? "block" : Jy));
            }
          } else if (JX !== "none") {
            JZ[JG] = "none";
            BA.set(JP, "display", JX);
          }
        }
      }
      for (JG = 0; JG < Jv; JG++) {
        if (JZ[JG] != null) {
          Jz[JG].style.display = JZ[JG];
        }
      }
      return Jz;
    }
    BD.fn.extend({
      show: function () {
        return m8(this, true);
      },
      hide: function () {
        return m8(this);
      },
      toggle: function (Jz) {
        if (typeof Jz == "boolean") {
          if (Jz) {
            return this.show();
          } else {
            return this.hide();
          }
        } else {
          return this.each(function () {
            if (m2(this)) {
              BD(this).show();
            } else {
              BD(this).hide();
            }
          });
        }
      },
    });
    var m9 = /^(?:checkbox|radio)$/i;
    var mB = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i;
    var mm = /^$|^module$|\/(?:java|ecma)script/i;
    var mJ = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
    function mh(Jz, JM) {
      var JX =
        Jz.getElementsByTagName !== undefined
          ? Jz.getElementsByTagName(JM || "*")
          : Jz.querySelectorAll !== undefined
          ? Jz.querySelectorAll(JM || "*")
          : [];
      if (JM === undefined || (JM && Bd(Jz, JM))) {
        return BD.merge([Jz], JX);
      } else {
        return JX;
      }
    }
    function mH(Jz, JM) {
      for (var JX = 0, JP = Jz.length; JX < JP; JX++) {
        BA.set(Jz[JX], "globalEval", !JM || BA.get(JM[JX], "globalEval"));
      }
    }
    mJ.optgroup = mJ.option;
    mJ.tbody = mJ.tfoot = mJ.colgroup = mJ.caption = mJ.thead;
    mJ.th = mJ.td;
    var mq = /<|&#?\w+;/;
    function mw(Jz, JM, JX, JP, JF) {
      var Js;
      var Jy;
      var JZ;
      var JG;
      var Jv;
      var JA = JM.createDocumentFragment();
      var JI = [];
      for (var Ju = 0, h0 = Jz.length; Ju < h0; Ju++) {
        if ((Js = Jz[Ju]) || Js === 0) {
          if (Bo(Js) === "object") {
            BD.merge(JI, Js.nodeType ? [Js] : Js);
          } else if (mq.test(Js)) {
            Jy = Jy || JA.appendChild(JM.createElement("div"));
            JZ = (mB.exec(Js) || ["", ""])[1].toLowerCase();
            JZ = mJ[JZ] || mJ._default;
            Jy.innerHTML = JZ[1] + BD.htmlPrefilter(Js) + JZ[2];
            Jv = JZ[0];
            while (Jv--) {
              Jy = Jy.lastChild;
            }
            BD.merge(JI, Jy.childNodes);
            (Jy = JA.firstChild).textContent = "";
          } else {
            JI.push(JM.createTextNode(Js));
          }
        }
      }
      JA.textContent = "";
      Ju = 0;
      while ((Js = JI[Ju++])) {
        if (JP && BD.inArray(Js, JP) > -1) {
          if (JF) {
            JF.push(Js);
          }
        } else {
          JG = BD.contains(Js.ownerDocument, Js);
          Jy = mh(JA.appendChild(Js), "script");
          if (JG) {
            mH(Jy);
          }
          if (JX) {
            for (Jv = 0; (Js = Jy[Jv++]); ) {
              if (mm.test(Js.type || "")) {
                JX.push(Js);
              }
            }
          }
        }
      }
      return JA;
    }
    J4 = BH.createDocumentFragment().appendChild(BH.createElement("div"));
    (J3 = BH.createElement("input")).setAttribute("type", "radio");
    J3.setAttribute("checked", "checked");
    J3.setAttribute("name", "t");
    J4.appendChild(J3);
    Bn.checkClone = J4.cloneNode(true).cloneNode(true).lastChild.checked;
    J4.innerHTML = "<textarea>x</textarea>";
    Bn.noCloneChecked = !!J4.cloneNode(true).lastChild.defaultValue;
    var mp = BH.documentElement;
    var mx = /^key/;
    var mr = /^(?:mouse|pointer|contextmenu|drag|drop)|click/;
    var mO = /^([^.]*)(?:\.(.+)|)/;
    function mY() {
      return true;
    }
    function mS() {
      return false;
    }
    function mb() {
      try {
        return BH.activeElement;
      } catch (Jz) {}
    }
    function mU(Jz, JM, JX, JP, JF, Js) {
      var Jy;
      var JZ;
      if (typeof JM == "object") {
        if (typeof JX != "string") {
          JP = JP || JX;
          JX = undefined;
        }
        for (JZ in JM) {
          mU(Jz, JZ, JX, JP, JM[JZ], Js);
        }
        return Jz;
      }
      if (JP == null && JF == null) {
        JF = JX;
        JP = JX = undefined;
      } else if (JF == null) {
        if (typeof JX == "string") {
          JF = JP;
          JP = undefined;
        } else {
          JF = JP;
          JP = JX;
          JX = undefined;
        }
      }
      if (JF === false) {
        JF = mS;
      } else if (!JF) {
        return Jz;
      }
      if (Js === 1) {
        Jy = JF;
        (JF = function (JG) {
          BD().off(JG);
          return Jy.apply(this, arguments);
        }).guid = Jy.guid ||= BD.guid++;
      }
      return Jz.each(function () {
        BD.event.add(this, JM, JF, JP, JX);
      });
    }
    BD.event = {
      global: {},
      add: function (Jz, JM, JX, JP, JF) {
        var Js;
        var Jy;
        var JZ;
        var JG;
        var Jv;
        var JA;
        var JI;
        var Ju;
        var h0;
        var h1 = BA.get(Jz);
        if (h1) {
          if (JX.handler) {
            JX = (Js = JX).handler;
            JF = Js.selector;
          }
          if (JF) {
            BD.find.matchesSelector(mp, JF);
          }
          JX.guid ||= BD.guid++;
          JZ = (JZ = h1.events) || (h1.events = {});
          Jy =
            (Jy = h1.handle) ||
            (h1.handle = function (h2) {
              if (BD !== undefined && BD.event.triggered !== h2.type) {
                return BD.event.dispatch.apply(Jz, arguments);
              } else {
                return undefined;
              }
            });
          JG = (JM = (JM || "").match(Bl) || [""]).length;
          while (JG--) {
            JI = h0 = (Ju = mO.exec(JM[JG]) || [])[1];
            Ju = (Ju[2] || "").split(".").sort();
            if (JI) {
              Jv = BD.event.special[JI] || {};
              JI = (JF ? Jv.delegateType : Jv.bindType) || JI;
              Jv = BD.event.special[JI] || {};
              h0 = BD.extend(
                {
                  type: JI,
                  origType: h0,
                  data: JP,
                  handler: JX,
                  guid: JX.guid,
                  selector: JF,
                  needsContext: JF && BD.expr.match.needsContext.test(JF),
                  namespace: Ju.join("."),
                },
                Js
              );
              if (
                !(JA = JZ[JI]) &&
                !(((JA = JZ[JI] = []).delegateCount = 0),
                Jv.setup && Jv.setup.call(Jz, JP, Ju, Jy) !== false)
              ) {
                if (Jz.addEventListener) {
                  Jz.addEventListener(JI, Jy);
                }
              }
              if (Jv.add) {
                Jv.add.call(Jz, h0);
                h0.handler.guid ||= JX.guid;
              }
              if (JF) {
                JA.splice(JA.delegateCount++, 0, h0);
              } else {
                JA.push(h0);
              }
              BD.event.global[JI] = true;
            }
          }
        }
      },
      remove: function (Jz, JM, JX, JP, JF) {
        var Js;
        var Jy;
        var JZ;
        var JG;
        var Jv;
        var JA;
        var JI;
        var Ju;
        var h0;
        var h1;
        var h2;
        var h3 = BA.hasData(Jz) && BA.get(Jz);
        if (h3 && (JG = h3.events)) {
          for (Jv = (JM = (JM || "").match(Bl) || [""]).length; Jv--; ) {
            h0 = h2 = (JZ = mO.exec(JM[Jv]) || [])[1];
            h1 = (JZ[2] || "").split(".").sort();
            if (h0) {
              JI = BD.event.special[h0] || {};
              Ju = JG[(h0 = (JP ? JI.delegateType : JI.bindType) || h0)] || [];
              JZ =
                JZ[2] &&
                new RegExp("(^|\\.)" + h1.join("\\.(?:.*\\.|)") + "(\\.|$)");
              Jy = Js = Ju.length;
              while (Js--) {
                JA = Ju[Js];
                if (
                  (!!JF || h2 === JA.origType) &&
                  (!JX || JX.guid === JA.guid) &&
                  (!JZ || !!JZ.test(JA.namespace)) &&
                  (!JP || JP === JA.selector || (JP === "**" && !!JA.selector))
                ) {
                  Ju.splice(Js, 1);
                  if (JA.selector) {
                    Ju.delegateCount--;
                  }
                  if (JI.remove) {
                    JI.remove.call(Jz, JA);
                  }
                }
              }
              if (Jy && !Ju.length) {
                if (
                  !JI.teardown ||
                  JI.teardown.call(Jz, h1, h3.handle) === false
                ) {
                  BD.removeEvent(Jz, h0, h3.handle);
                }
                delete JG[h0];
              }
            } else {
              for (h0 in JG) {
                BD.event.remove(Jz, h0 + JM[Jv], JX, JP, true);
              }
            }
          }
          if (BD.isEmptyObject(JG)) {
            BA.remove(Jz, "handle events");
          }
        }
      },
      dispatch: function (Jz) {
        var JM;
        var JX;
        var JP;
        var JF;
        var Js;
        var Jy = BD.event.fix(Jz);
        var JZ = new Array(arguments.length);
        var Jz = (BA.get(this, "events") || {})[Jy.type] || [];
        var JG = BD.event.special[Jy.type] || {};
        JZ[0] = Jy;
        JM = 1;
        for (; JM < arguments.length; JM++) {
          JZ[JM] = arguments[JM];
        }
        Jy.delegateTarget = this;
        if (!JG.preDispatch || JG.preDispatch.call(this, Jy) !== false) {
          Js = BD.event.handlers.call(this, Jy, Jz);
          JM = 0;
          while ((JP = Js[JM++]) && !Jy.isPropagationStopped()) {
            Jy.currentTarget = JP.elem;
            JX = 0;
            while (
              (JF = JP.handlers[JX++]) &&
              !Jy.isImmediatePropagationStopped()
            ) {
              if (!Jy.rnamespace || !!Jy.rnamespace.test(JF.namespace)) {
                Jy.handleObj = JF;
                Jy.data = JF.data;
                if (
                  (JF = (
                    (BD.event.special[JF.origType] || {}).handle || JF.handler
                  ).apply(JP.elem, JZ)) !== undefined &&
                  (Jy.result = JF) === false
                ) {
                  Jy.preventDefault();
                  Jy.stopPropagation();
                }
              }
            }
          }
          if (JG.postDispatch) {
            JG.postDispatch.call(this, Jy);
          }
          return Jy.result;
        }
      },
      handlers: function (Jz, JM) {
        var JX;
        var JP;
        var JF;
        var Js;
        var Jy;
        var JZ = [];
        var JG = JM.delegateCount;
        var Jv = Jz.target;
        if (JG && Jv.nodeType && (Jz.type !== "click" || !(Jz.button >= 1))) {
          for (; Jv !== this; Jv = Jv.parentNode || this) {
            if (
              Jv.nodeType === 1 &&
              (Jz.type !== "click" || Jv.disabled !== true)
            ) {
              Js = [];
              Jy = {};
              JX = 0;
              for (; JX < JG; JX++) {
                if (Jy[(JF = (JP = JM[JX]).selector + " ")] === undefined) {
                  Jy[JF] = JP.needsContext
                    ? BD(JF, this).index(Jv) > -1
                    : BD.find(JF, this, null, [Jv]).length;
                }
                if (Jy[JF]) {
                  Js.push(JP);
                }
              }
              if (Js.length) {
                JZ.push({
                  elem: Jv,
                  handlers: Js,
                });
              }
            }
          }
        }
        Jv = this;
        if (JG < JM.length) {
          JZ.push({
            elem: Jv,
            handlers: JM.slice(JG),
          });
        }
        return JZ;
      },
      addProp: function (Jz, JM) {
        Object.defineProperty(BD.Event.prototype, Jz, {
          enumerable: true,
          configurable: true,
          get: Bm(JM)
            ? function () {
                if (this.originalEvent) {
                  return JM(this.originalEvent);
                }
              }
            : function () {
                if (this.originalEvent) {
                  return this.originalEvent[Jz];
                }
              },
          set: function (JX) {
            Object.defineProperty(this, Jz, {
              enumerable: true,
              configurable: true,
              writable: true,
              value: JX,
            });
          },
        });
      },
      fix: function (Jz) {
        if (Jz[BD.expando]) {
          return Jz;
        } else {
          return new BD.Event(Jz);
        }
      },
      special: {
        load: {
          noBubble: true,
        },
        focus: {
          trigger: function () {
            if (this !== mb() && this.focus) {
              this.focus();
              return false;
            }
          },
          delegateType: "focusin",
        },
        blur: {
          trigger: function () {
            if (this === mb() && this.blur) {
              this.blur();
              return false;
            }
          },
          delegateType: "focusout",
        },
        click: {
          trigger: function () {
            if (this.type === "checkbox" && this.click && Bd(this, "input")) {
              this.click();
              return false;
            }
          },
          _default: function (Jz) {
            return Bd(Jz.target, "a");
          },
        },
        beforeunload: {
          postDispatch: function (Jz) {
            if (Jz.result !== undefined && Jz.originalEvent) {
              Jz.originalEvent.returnValue = Jz.result;
            }
          },
        },
      },
    };
    BD.removeEvent = function (Jz, JM, JX) {
      if (Jz.removeEventListener) {
        Jz.removeEventListener(JM, JX);
      }
    };
    BD.Event = function (Jz, JM) {
      if (!(this instanceof BD.Event)) {
        return new BD.Event(Jz, JM);
      }
      if (Jz && Jz.type) {
        this.originalEvent = Jz;
        this.type = Jz.type;
        this.isDefaultPrevented =
          Jz.defaultPrevented ||
          (Jz.defaultPrevented === undefined && Jz.returnValue === false)
            ? mY
            : mS;
        this.target =
          Jz.target && Jz.target.nodeType === 3
            ? Jz.target.parentNode
            : Jz.target;
        this.currentTarget = Jz.currentTarget;
        this.relatedTarget = Jz.relatedTarget;
      } else {
        this.type = Jz;
      }
      if (JM) {
        BD.extend(this, JM);
      }
      this.timeStamp = (Jz && Jz.timeStamp) || Date.now();
      this[BD.expando] = true;
    };
    BD.Event.prototype = {
      constructor: BD.Event,
      isDefaultPrevented: mS,
      isPropagationStopped: mS,
      isImmediatePropagationStopped: mS,
      isSimulated: false,
      preventDefault: function () {
        var Jz = this.originalEvent;
        this.isDefaultPrevented = mY;
        if (Jz && !this.isSimulated) {
          Jz.preventDefault();
        }
      },
      stopPropagation: function () {
        var Jz = this.originalEvent;
        this.isPropagationStopped = mY;
        if (Jz && !this.isSimulated) {
          Jz.stopPropagation();
        }
      },
      stopImmediatePropagation: function () {
        var Jz = this.originalEvent;
        this.isImmediatePropagationStopped = mY;
        if (Jz && !this.isSimulated) {
          Jz.stopImmediatePropagation();
        }
        this.stopPropagation();
      },
    };
    BD.each(
      {
        altKey: true,
        bubbles: true,
        cancelable: true,
        changedTouches: true,
        ctrlKey: true,
        detail: true,
        eventPhase: true,
        metaKey: true,
        pageX: true,
        pageY: true,
        shiftKey: true,
        view: true,
        char: true,
        charCode: true,
        key: true,
        keyCode: true,
        button: true,
        buttons: true,
        clientX: true,
        clientY: true,
        offsetX: true,
        offsetY: true,
        pointerId: true,
        pointerType: true,
        screenX: true,
        screenY: true,
        targetTouches: true,
        toElement: true,
        touches: true,
        which: function (Jz) {
          var JM = Jz.button;
          if (Jz.which == null && mx.test(Jz.type)) {
            return Jz.charCode ?? Jz.keyCode;
          } else if (!Jz.which && JM !== undefined && mr.test(Jz.type)) {
            if (JM & 1) {
              return 1;
            } else if (JM & 2) {
              return 3;
            } else if (JM & 4) {
              return 2;
            } else {
              return 0;
            }
          } else {
            return Jz.which;
          }
        },
      },
      BD.event.addProp
    );
    BD.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (Jz, JM) {
        BD.event.special[Jz] = {
          delegateType: JM,
          bindType: JM,
          handle: function (JX) {
            var JP;
            var JF = JX.relatedTarget;
            var Js = JX.handleObj;
            if (!JF || (JF !== this && !BD.contains(this, JF))) {
              JX.type = Js.origType;
              JP = Js.handler.apply(this, arguments);
              JX.type = JM;
            }
            return JP;
          },
        };
      }
    );
    BD.fn.extend({
      on: function (Jz, JM, JX, JP) {
        return mU(this, Jz, JM, JX, JP);
      },
      one: function (Jz, JM, JX, JP) {
        return mU(this, Jz, JM, JX, JP, 1);
      },
      off: function (Jz, JM, JX) {
        var JP;
        var JF;
        if (Jz && Jz.preventDefault && Jz.handleObj) {
          JP = Jz.handleObj;
          BD(Jz.delegateTarget).off(
            JP.namespace ? JP.origType + "." + JP.namespace : JP.origType,
            JP.selector,
            JP.handler
          );
        } else {
          if (typeof Jz != "object") {
            if (JM === false || typeof JM == "function") {
              JX = JM;
              JM = undefined;
            }
            if (JX === false) {
              JX = mS;
            }
            return this.each(function () {
              BD.event.remove(this, Jz, JX, JM);
            });
          }
          for (JF in Jz) {
            this.off(JF, JM, Jz[JF]);
          }
        }
        return this;
      },
    });
    var mn =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi;
    var mK = /<script|<style|<link/i;
    var mf = /checked\s*(?:[^=]|=\s*.checked.)/i;
    var mo = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function mD(Jz, JM) {
      return (
        (Bd(Jz, "table") &&
          Bd(JM.nodeType !== 11 ? JM : JM.firstChild, "tr") &&
          BD(Jz).children("tbody")[0]) ||
        Jz
      );
    }
    function mN(Jz) {
      Jz.type = (Jz.getAttribute("type") !== null) + "/" + Jz.type;
      return Jz;
    }
    function mk(Jz) {
      if ((Jz.type || "").slice(0, 5) === "true/") {
        Jz.type = Jz.type.slice(5);
      } else {
        Jz.removeAttribute("type");
      }
      return Jz;
    }
    function mL(Jz, JM) {
      var JX;
      var JP;
      var JF;
      var Js;
      var Jy;
      var JZ;
      if (JM.nodeType === 1) {
        if (
          BA.hasData(Jz) &&
          ((Js = BA.access(Jz)), (Jy = BA.set(JM, Js)), (JZ = Js.events))
        ) {
          delete Jy.handle;
          Jy.events = {};
          for (JF in JZ) {
            JX = 0;
            JP = JZ[JF].length;
            for (; JX < JP; JX++) {
              BD.event.add(JM, JF, JZ[JF][JX]);
            }
          }
        }
        if (BI.hasData(Jz)) {
          Js = BI.access(Jz);
          Jy = BD.extend({}, Js);
          BI.set(JM, Jy);
        }
      }
    }
    function mg(Jz, JM, JX, JP) {
      JM = Bp.apply([], JM);
      var JF;
      var Js;
      var Jy;
      var JZ;
      var JG;
      var Jv;
      var JA = 0;
      var JI = Jz.length;
      var Ju = JI - 1;
      var h0 = JM[0];
      var h1 = Bm(h0);
      if (
        h1 ||
        (JI > 1 && typeof h0 == "string" && !Bn.checkClone && mf.test(h0))
      ) {
        return Jz.each(function (h2) {
          var h3 = Jz.eq(h2);
          if (h1) {
            JM[0] = h0.call(this, h2, h3.html());
          }
          mg(h3, JM, JX, JP);
        });
      }
      if (
        JI &&
        ((Js = (JF = mw(JM, Jz[0].ownerDocument, false, Jz, JP)).firstChild),
        JF.childNodes.length === 1 && (JF = Js),
        Js || JP)
      ) {
        for (JZ = (Jy = BD.map(mh(JF, "script"), mN)).length; JA < JI; JA++) {
          JG = JF;
          if (JA !== Ju && ((JG = BD.clone(JG, true, true)), JZ)) {
            BD.merge(Jy, mh(JG, "script"));
          }
          JX.call(Jz[JA], JG, JA);
        }
        if (JZ) {
          Jv = Jy[Jy.length - 1].ownerDocument;
          BD.map(Jy, mk);
          JA = 0;
          for (; JA < JZ; JA++) {
            JG = Jy[JA];
            if (
              mm.test(JG.type || "") &&
              !BA.access(JG, "globalEval") &&
              BD.contains(Jv, JG)
            ) {
              if (JG.src && (JG.type || "").toLowerCase() !== "module") {
                if (BD._evalUrl) {
                  BD._evalUrl(JG.src);
                }
              } else {
                Bf(JG.textContent.replace(mo, ""), Jv, JG);
              }
            }
          }
        }
      }
      return Jz;
    }
    function ma(Jz, JM, JX) {
      for (
        var JP, JF = JM ? BD.filter(JM, Jz) : Jz, Js = 0;
        (JP = JF[Js]) != null;
        Js++
      ) {
        if (!JX && JP.nodeType === 1) {
          BD.cleanData(mh(JP));
        }
        if (JP.parentNode) {
          if (JX && BD.contains(JP.ownerDocument, JP)) {
            mH(mh(JP, "script"));
          }
          JP.parentNode.removeChild(JP);
        }
      }
      return Jz;
    }
    BD.extend({
      htmlPrefilter: function (Jz) {
        return Jz.replace(mn, "<$1></$2>");
      },
      clone: function (Jz, JM, JX) {
        var JP;
        var JF;
        var Js;
        var Jy;
        var JZ;
        var JG;
        var Jv;
        var JA = Jz.cloneNode(true);
        var JI = BD.contains(Jz.ownerDocument, Jz);
        if (
          !Bn.noCloneChecked &&
          (Jz.nodeType === 1 || Jz.nodeType === 11) &&
          !BD.isXMLDoc(Jz)
        ) {
          Jy = mh(JA);
          JP = 0;
          JF = (Js = mh(Jz)).length;
          for (; JP < JF; JP++) {
            JZ = Js[JP];
            JG = Jy[JP];
            Jv = undefined;
            if (
              (Jv = JG.nodeName.toLowerCase()) === "input" &&
              m9.test(JZ.type)
            ) {
              JG.checked = JZ.checked;
            } else if (Jv === "input" || Jv === "textarea") {
              JG.defaultValue = JZ.defaultValue;
            }
          }
        }
        if (JM) {
          if (JX) {
            Js = Js || mh(Jz);
            Jy = Jy || mh(JA);
            JP = 0;
            JF = Js.length;
            for (; JP < JF; JP++) {
              mL(Js[JP], Jy[JP]);
            }
          } else {
            mL(Jz, JA);
          }
        }
        if ((Jy = mh(JA, "script")).length > 0) {
          mH(Jy, !JI && mh(Jz, "script"));
        }
        return JA;
      },
      cleanData: function (Jz) {
        var JM;
        for (
          var JX, JP, JF = BD.event.special, Js = 0;
          (JX = Jz[Js]) !== undefined;
          Js++
        ) {
          if (BG(JX)) {
            if ((JM = JX[BA.expando])) {
              if (JM.events) {
                for (JP in JM.events) {
                  if (JF[JP]) {
                    BD.event.remove(JX, JP);
                  } else {
                    BD.removeEvent(JX, JP, JM.handle);
                  }
                }
              }
              JX[BA.expando] = undefined;
            }
            JX[BI.expando] &&= undefined;
          }
        }
      },
    });
    BD.fn.extend({
      detach: function (Jz) {
        return ma(this, Jz, true);
      },
      remove: function (Jz) {
        return ma(this, Jz);
      },
      text: function (Jz) {
        return BP(
          this,
          function (JM) {
            if (JM === undefined) {
              return BD.text(this);
            } else {
              return this.empty().each(function () {
                if (
                  this.nodeType === 1 ||
                  this.nodeType === 11 ||
                  this.nodeType === 9
                ) {
                  this.textContent = JM;
                }
              });
            }
          },
          null,
          Jz,
          arguments.length
        );
      },
      append: function () {
        return mg(this, arguments, function (Jz) {
          if (
            this.nodeType === 1 ||
            this.nodeType === 11 ||
            this.nodeType === 9
          ) {
            mD(this, Jz).appendChild(Jz);
          }
        });
      },
      prepend: function () {
        return mg(this, arguments, function (Jz) {
          var JM;
          if (
            this.nodeType === 1 ||
            this.nodeType === 11 ||
            this.nodeType === 9
          ) {
            (JM = mD(this, Jz)).insertBefore(Jz, JM.firstChild);
          }
        });
      },
      before: function () {
        return mg(this, arguments, function (Jz) {
          if (this.parentNode) {
            this.parentNode.insertBefore(Jz, this);
          }
        });
      },
      after: function () {
        return mg(this, arguments, function (Jz) {
          if (this.parentNode) {
            this.parentNode.insertBefore(Jz, this.nextSibling);
          }
        });
      },
      empty: function () {
        for (var Jz, JM = 0; (Jz = this[JM]) != null; JM++) {
          if (Jz.nodeType === 1) {
            BD.cleanData(mh(Jz, false));
            Jz.textContent = "";
          }
        }
        return this;
      },
      clone: function (Jz, JM) {
        Jz = Jz != null && Jz;
        JM = JM == null ? Jz : JM;
        return this.map(function () {
          return BD.clone(this, Jz, JM);
        });
      },
      html: function (Jz) {
        return BP(
          this,
          function (JM) {
            var JX = this[0] || {};
            var JP = 0;
            var JF = this.length;
            if (JM === undefined && JX.nodeType === 1) {
              return JX.innerHTML;
            }
            if (
              typeof JM == "string" &&
              !mK.test(JM) &&
              !mJ[(mB.exec(JM) || ["", ""])[1].toLowerCase()]
            ) {
              JM = BD.htmlPrefilter(JM);
              try {
                for (; JP < JF; JP++) {
                  if ((JX = this[JP] || {}).nodeType === 1) {
                    BD.cleanData(mh(JX, false));
                    JX.innerHTML = JM;
                  }
                }
                JX = 0;
              } catch (Js) {}
            }
            if (JX) {
              this.empty().append(JM);
            }
          },
          null,
          Jz,
          arguments.length
        );
      },
      replaceWith: function () {
        var Jz = [];
        return mg(
          this,
          arguments,
          function (JM) {
            var JX = this.parentNode;
            if (BD.inArray(this, Jz) < 0 && (BD.cleanData(mh(this)), JX)) {
              JX.replaceChild(JM, this);
            }
          },
          Jz
        );
      },
    });
    BD.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (Jz, JM) {
        BD.fn[Jz] = function (JX) {
          var JP;
          var JF = [];
          var Js = BD(JX);
          for (var Jy = Js.length - 1, JZ = 0; JZ <= Jy; JZ++) {
            JP = JZ === Jy ? this : this.clone(true);
            BD(Js[JZ])[JM](JP);
            Bx.apply(JF, JP.get());
          }
          return this.pushStack(JF);
        };
      }
    );
    function mc(Jz) {
      var JM = Jz.ownerDocument.defaultView;
      return (JM = JM && JM.opener ? JM : B9).getComputedStyle(Jz);
    }
    var mR;
    var mQ;
    var mV;
    var mE;
    var mW;
    var mT;
    var ml;
    var mC = new RegExp("^(" + Bh + ")(?!px)[a-z%]+$", "i");
    var mj = new RegExp(m5.join("|"), "i");
    function mi() {
      var Jz;
      if (ml) {
        mT.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
        ml.style.cssText =
          "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
        mp.appendChild(mT).appendChild(ml);
        Jz = B9.getComputedStyle(ml);
        mR = Jz.top !== "1%";
        mW = mz(Jz.marginLeft) === 12;
        ml.style.right = "60%";
        mE = mz(Jz.right) === 36;
        mQ = mz(Jz.width) === 36;
        ml.style.position = "absolute";
        mV = ml.offsetWidth === 36 || "absolute";
        mp.removeChild(mT);
        ml = null;
      }
    }
    function mz(Jz) {
      return Math.round(parseFloat(Jz));
    }
    function mM(Jz, JM, JX) {
      var JP;
      var JF;
      var Js = Jz.style;
      if (
        (JX = JX || mc(Jz)) &&
        ((JF = JX.getPropertyValue(JM) || JX[JM]) !== "" ||
          BD.contains(Jz.ownerDocument, Jz) ||
          (JF = BD.style(Jz, JM)),
        !Bn.pixelBoxStyles()) &&
        mC.test(JF) &&
        mj.test(JM)
      ) {
        Jz = Js.width;
        JM = Js.minWidth;
        JP = Js.maxWidth;
        Js.minWidth = Js.maxWidth = Js.width = JF;
        JF = JX.width;
        Js.width = Jz;
        Js.minWidth = JM;
        Js.maxWidth = JP;
      }
      if (JF !== undefined) {
        return JF + "";
      } else {
        return JF;
      }
    }
    function mX(Jz, JM) {
      return {
        get: function () {
          if (!Jz()) {
            return (this.get = JM).apply(this, arguments);
          }
          delete this.get;
        },
      };
    }
    mT = BH.createElement("div");
    if ((ml = BH.createElement("div")).style) {
      ml.style.backgroundClip = "content-box";
      ml.cloneNode(true).style.backgroundClip = "";
      Bn.clearCloneStyle = ml.style.backgroundClip === "content-box";
      BD.extend(Bn, {
        boxSizingReliable: function () {
          mi();
          return mQ;
        },
        pixelBoxStyles: function () {
          mi();
          return mE;
        },
        pixelPosition: function () {
          mi();
          return mR;
        },
        reliableMarginLeft: function () {
          mi();
          return mW;
        },
        scrollboxSize: function () {
          mi();
          return mV;
        },
      });
    }
    var mP = /^(none|table(?!-c[ea]).+)/;
    var mF = /^--/;
    var ms = {
      position: "absolute",
      visibility: "hidden",
      display: "block",
    };
    var my = {
      letterSpacing: "0",
      fontWeight: "400",
    };
    var mZ = ["Webkit", "Moz", "ms"];
    var mG = BH.createElement("div").style;
    function mv(Jz) {
      return (BD.cssProps[Jz] ||=
        (function (JM) {
          if (JM in mG) {
            return JM;
          }
          var JX = JM[0].toUpperCase() + JM.slice(1);
          for (var JP = mZ.length; JP--; ) {
            if ((JM = mZ[JP] + JX) in mG) {
              return JM;
            }
          }
        })(Jz) || Jz);
    }
    function mA(Jz, JM, JX) {
      var JP = m4.exec(JM);
      if (JP) {
        return Math.max(0, JP[2] - (JX || 0)) + (JP[3] || "px");
      } else {
        return JM;
      }
    }
    function mI(Jz, JM, JX, JP, JF, Js) {
      var Jy = JM === "width" ? 1 : 0;
      var JZ = 0;
      var JG = 0;
      if (JX === (JP ? "border" : "content")) {
        return 0;
      }
      for (; Jy < 4; Jy += 2) {
        if (JX === "margin") {
          JG += BD.css(Jz, JX + m5[Jy], true, JF);
        }
        if (JP) {
          if (JX === "content") {
            JG -= BD.css(Jz, "padding" + m5[Jy], true, JF);
          }
          if (JX !== "margin") {
            JG -= BD.css(Jz, "border" + m5[Jy] + "Width", true, JF);
          }
        } else {
          JG += BD.css(Jz, "padding" + m5[Jy], true, JF);
          if (JX !== "padding") {
            JG += BD.css(Jz, "border" + m5[Jy] + "Width", true, JF);
          } else {
            JZ += BD.css(Jz, "border" + m5[Jy] + "Width", true, JF);
          }
        }
      }
      if (!JP && Js >= 0) {
        JG += Math.max(
          0,
          Math.ceil(
            Jz["offset" + JM[0].toUpperCase() + JM.slice(1)] - Js - JG - JZ - 0.5
          )
        );
      }
      return JG;
    }
    function mu(Jz, JM, JX) {
      var JP = mc(Jz);
      var JF = mM(Jz, JM, JP);
      var Js = BD.css(Jz, "boxSizing", false, JP) === "border-box";
      var Jy = Js;
      if (mC.test(JF)) {
        if (!JX) {
          return JF;
        }
        JF = "auto";
      }
      Jy = Jy && (Bn.boxSizingReliable() || JF === Jz.style[JM]);
      if (
        JF === "auto" ||
        (!parseFloat(JF) && BD.css(Jz, "display", false, JP) === "inline")
      ) {
        JF = Jz["offset" + JM[0].toUpperCase() + JM.slice(1)];
        Jy = true;
      }
      return (
        (JF = parseFloat(JF) || 0) +
        mI(Jz, JM, JX || (Js ? "border" : "content"), Jy, JP, JF) +
        "px"
      );
    }
    function J0(Jz, JM, JX, JP, JF) {
      return new J0.prototype.init(Jz, JM, JX, JP, JF);
    }
    BD.extend({
      cssHooks: {
        opacity: {
          get: function (Jz, JM) {
            if (JM) {
              if ((JM = mM(Jz, "opacity")) === "") {
                return "1";
              } else {
                return JM;
              }
            }
          },
        },
      },
      cssNumber: {
        animationIterationCount: true,
        columnCount: true,
        fillOpacity: true,
        flexGrow: true,
        flexShrink: true,
        fontWeight: true,
        lineHeight: true,
        opacity: true,
        order: true,
        orphans: true,
        widows: true,
        zIndex: true,
        zoom: true,
      },
      cssProps: {},
      style: function (Jz, JM, JX, JP) {
        if (Jz && Jz.nodeType !== 3 && Jz.nodeType !== 8 && Jz.style) {
          var JF;
          var Js;
          var Jy;
          var JZ = BZ(JM);
          var JG = mF.test(JM);
          var Jv = Jz.style;
          if (!JG) {
            JM = mv(JZ);
          }
          Jy = BD.cssHooks[JM] || BD.cssHooks[JZ];
          if (JX === undefined) {
            if (Jy && "get" in Jy && (JF = Jy.get(Jz, false, JP)) !== undefined) {
              return JF;
            } else {
              return Jv[JM];
            }
          }
          if ((Js = typeof JX) == "string" && (JF = m4.exec(JX)) && JF[1]) {
            JX = m6(Jz, JM, JF);
            Js = "number";
          }
          if (JX != null && JX == JX) {
            if (Js === "number") {
              JX += (JF && JF[3]) || (BD.cssNumber[JZ] ? "" : "px");
            }
            if (
              !Bn.clearCloneStyle &&
              JX === "" &&
              JM.indexOf("background") === 0
            ) {
              Jv[JM] = "inherit";
            }
            if (
              !Jy ||
              !("set" in Jy) ||
              (JX = Jy.set(Jz, JX, JP)) !== undefined
            ) {
              if (JG) {
                Jv.setProperty(JM, JX);
              } else {
                Jv[JM] = JX;
              }
            }
          }
        }
      },
      css: function (Jz, JM, JX, JP) {
        var JF;
        var Js = BZ(JM);
        if (!mF.test(JM)) {
          JM = mv(Js);
        }
        if (
          (JF =
            (JF =
              (Js = BD.cssHooks[JM] || BD.cssHooks[Js]) && "get" in Js
                ? Js.get(Jz, true, JX)
                : JF) === undefined
              ? mM(Jz, JM, JP)
              : JF) === "normal" &&
          JM in my
        ) {
          JF = my[JM];
        }
        if (
          (JX === "" || JX) &&
          ((Js = parseFloat(JF)), JX === true || isFinite(Js))
        ) {
          return Js || 0;
        } else {
          return JF;
        }
      },
    });
    BD.each(["height", "width"], function (Jz, JM) {
      BD.cssHooks[JM] = {
        get: function (JX, JP, JF) {
          if (JP) {
            if (
              !mP.test(BD.css(JX, "display")) ||
              (JX.getClientRects().length && JX.getBoundingClientRect().width)
            ) {
              return mu(JX, JM, JF);
            } else {
              return m3(JX, ms, function () {
                return mu(JX, JM, JF);
              });
            }
          }
        },
        set: function (JX, JP, JF) {
          var Js = mc(JX);
          var Jy = BD.css(JX, "boxSizing", false, Js) === "border-box";
          var JF = JF && mI(JX, JM, JF, Jy, Js);
          if (Jy && Bn.scrollboxSize() === Js.position) {
            JF -= Math.ceil(
              JX["offset" + JM[0].toUpperCase() + JM.slice(1)] -
                parseFloat(Js[JM]) -
                mI(JX, JM, "border", false, Js) -
                0.5
            );
          }
          if (JF && (Jy = m4.exec(JP)) && (Jy[3] || "px") !== "px") {
            JX.style[JM] = JP;
            JP = BD.css(JX, JM);
          }
          return mA(0, JP, JF);
        },
      };
    });
    BD.cssHooks.marginLeft = mX(Bn.reliableMarginLeft, function (Jz, JM) {
      if (JM) {
        return (
          (parseFloat(mM(Jz, "marginLeft")) ||
            Jz.getBoundingClientRect().left -
              m3(
                Jz,
                {
                  marginLeft: 0,
                },
                function () {
                  return Jz.getBoundingClientRect().left;
                }
              )) + "px"
        );
      }
    });
    BD.each(
      {
        margin: "",
        padding: "",
        border: "Width",
      },
      function (Jz, JM) {
        BD.cssHooks[Jz + JM] = {
          expand: function (JX) {
            for (
              var JP = 0,
                JF = {},
                Js = typeof JX == "string" ? JX.split(" ") : [JX];
              JP < 4;
              JP++
            ) {
              JF[Jz + m5[JP] + JM] = Js[JP] || Js[JP - 2] || Js[0];
            }
            return JF;
          },
        };
        if (Jz !== "margin") {
          BD.cssHooks[Jz + JM].set = mA;
        }
      }
    );
    BD.fn.extend({
      css: function (Jz, JM) {
        return BP(
          this,
          function (JX, JP, JF) {
            var Js;
            var Jy;
            var JZ = {};
            var JG = 0;
            if (Array.isArray(JP)) {
              Js = mc(JX);
              Jy = JP.length;
              for (; JG < Jy; JG++) {
                JZ[JP[JG]] = BD.css(JX, JP[JG], false, Js);
              }
              return JZ;
            }
            if (JF !== undefined) {
              return BD.style(JX, JP, JF);
            } else {
              return BD.css(JX, JP);
            }
          },
          Jz,
          JM,
          arguments.length > 1
        );
      },
    });
    ((BD.Tween = J0).prototype = {
      constructor: J0,
      init: function (Jz, JM, JX, JP, JF, Js) {
        this.elem = Jz;
        this.prop = JX;
        this.easing = JF || BD.easing._default;
        this.options = JM;
        this.start = this.now = this.cur();
        this.end = JP;
        this.unit = Js || (BD.cssNumber[JX] ? "" : "px");
      },
      cur: function () {
        var Jz = J0.propHooks[this.prop];
        return (Jz && Jz.get ? Jz : J0.propHooks._default).get(this);
      },
      run: function (Jz) {
        var JM;
        var JX = J0.propHooks[this.prop];
        if (this.options.duration) {
          this.pos = JM = BD.easing[this.easing](
            Jz,
            this.options.duration * Jz,
            0,
            1,
            this.options.duration
          );
        } else {
          this.pos = JM = Jz;
        }
        this.now = (this.end - this.start) * JM + this.start;
        if (this.options.step) {
          this.options.step.call(this.elem, this.now, this);
        }
        (JX && JX.set ? JX : J0.propHooks._default).set(this);
        return this;
      },
    }).init.prototype = J0.prototype;
    (J0.propHooks = {
      _default: {
        get: function (Jz) {
          if (
            Jz.elem.nodeType !== 1 ||
            (Jz.elem[Jz.prop] != null && Jz.elem.style[Jz.prop] == null)
          ) {
            return Jz.elem[Jz.prop];
          } else if ((Jz = BD.css(Jz.elem, Jz.prop, "")) && Jz !== "auto") {
            return Jz;
          } else {
            return 0;
          }
        },
        set: function (Jz) {
          if (BD.fx.step[Jz.prop]) {
            BD.fx.step[Jz.prop](Jz);
          } else if (
            Jz.elem.nodeType !== 1 ||
            (Jz.elem.style[BD.cssProps[Jz.prop]] == null && !BD.cssHooks[Jz.prop])
          ) {
            Jz.elem[Jz.prop] = Jz.now;
          } else {
            BD.style(Jz.elem, Jz.prop, Jz.now + Jz.unit);
          }
        },
      },
    }).scrollTop = J0.propHooks.scrollLeft = {
      set: function (Jz) {
        if (Jz.elem.nodeType && Jz.elem.parentNode) {
          Jz.elem[Jz.prop] = Jz.now;
        }
      },
    };
    BD.easing = {
      linear: function (Jz) {
        return Jz;
      },
      swing: function (Jz) {
        return 0.5 - Math.cos(Jz * Math.PI) / 2;
      },
      _default: "swing",
    };
    BD.fx = J0.prototype.init;
    BD.fx.step = {};
    var J1;
    var J2;
    var J3;
    var J4;
    var J5 = /^(?:toggle|show|hide)$/;
    var J6 = /queueHooks$/;
    function J7() {
      if (J2) {
        if (BH.hidden === false && B9.requestAnimationFrame) {
          B9.requestAnimationFrame(J7);
        } else {
          B9.setTimeout(J7, BD.fx.interval);
        }
        BD.fx.tick();
      }
    }
    function J8() {
      B9.setTimeout(function () {
        J1 = undefined;
      });
      return (J1 = Date.now());
    }
    function J9(Jz, JM) {
      var JX;
      var JP = 0;
      var JF = {
        height: Jz,
      };
      for (JM = JM ? 1 : 0; JP < 4; JP += 2 - JM) {
        JF["margin" + (JX = m5[JP])] = JF["padding" + JX] = Jz;
      }
      if (JM) {
        JF.opacity = JF.width = Jz;
      }
      return JF;
    }
    function JB(Jz, JM, JX) {
      var JP;
      var JF = (Jm.tweeners[JM] || []).concat(Jm.tweeners["*"]);
      for (var Js = 0, Jy = JF.length; Js < Jy; Js++) {
        if ((JP = JF[Js].call(JX, JM, Jz))) {
          return JP;
        }
      }
    }
    function Jm(Jz, JM, JX) {
      var JP;
      var JF;
      var Js;
      var Jy;
      var JZ;
      var JG;
      var Jv;
      var JA = 0;
      var JI = Jm.prefilters.length;
      var Ju = BD.Deferred().always(function () {
        delete h0.elem;
      });
      function h0() {
        if (JF) {
          return false;
        }
        var h5 = J1 || J8();
        var h5 = Math.max(0, h1.startTime + h1.duration - h5);
        var h6 = 1 - (h5 / h1.duration || 0);
        for (var h7 = 0, h8 = h1.tweens.length; h7 < h8; h7++) {
          h1.tweens[h7].run(h6);
        }
        Ju.notifyWith(Jz, [h1, h6, h5]);
        if (h6 < 1 && h8) {
          return h5;
        } else {
          if (!h8) {
            Ju.notifyWith(Jz, [h1, 1, 0]);
          }
          Ju.resolveWith(Jz, [h1]);
          return false;
        }
      }
      var h1 = Ju.promise({
        elem: Jz,
        props: BD.extend({}, JM),
        opts: BD.extend(
          true,
          {
            specialEasing: {},
            easing: BD.easing._default,
          },
          JX
        ),
        originalProperties: JM,
        originalOptions: JX,
        startTime: J1 || J8(),
        duration: JX.duration,
        tweens: [],
        createTween: function (h5, h6) {
          h6 = BD.Tween(
            Jz,
            h1.opts,
            h5,
            h6,
            h1.opts.specialEasing[h5] || h1.opts.easing
          );
          h1.tweens.push(h6);
          return h6;
        },
        stop: function (h5) {
          var h6 = 0;
          var h7 = h5 ? h1.tweens.length : 0;
          if (!JF) {
            for (JF = true; h6 < h7; h6++) {
              h1.tweens[h6].run(1);
            }
            if (h5) {
              Ju.notifyWith(Jz, [h1, 1, 0]);
              Ju.resolveWith(Jz, [h1, h5]);
            } else {
              Ju.rejectWith(Jz, [h1, h5]);
            }
          }
          return this;
        },
      });
      var h2 = h1.props;
      var h3 = h2;
      var h4 = h1.opts.specialEasing;
      for (Js in h3) {
        Jy = BZ(Js);
        JZ = h4[Jy];
        JG = h3[Js];
        if (Array.isArray(JG)) {
          JZ = JG[1];
          JG = h3[Js] = JG[0];
        }
        if (Js !== Jy) {
          h3[Jy] = JG;
          delete h3[Js];
        }
        if ((Jv = BD.cssHooks[Jy]) && "expand" in Jv) {
          JG = Jv.expand(JG);
          delete h3[Jy];
          for (Js in JG) {
            if (!(Js in h3)) {
              h3[Js] = JG[Js];
              h4[Js] = JZ;
            }
          }
        } else {
          h4[Jy] = JZ;
        }
      }
      for (; JA < JI; JA++) {
        if ((JP = Jm.prefilters[JA].call(h1, Jz, h2, h1.opts))) {
          if (Bm(JP.stop)) {
            BD._queueHooks(h1.elem, h1.opts.queue).stop = JP.stop.bind(JP);
          }
          return JP;
        }
      }
      BD.map(h2, JB, h1);
      if (Bm(h1.opts.start)) {
        h1.opts.start.call(Jz, h1);
      }
      h1.progress(h1.opts.progress)
        .done(h1.opts.done, h1.opts.complete)
        .fail(h1.opts.fail)
        .always(h1.opts.always);
      BD.fx.timer(
        BD.extend(h0, {
          elem: Jz,
          anim: h1,
          queue: h1.opts.queue,
        })
      );
      return h1;
    }
    BD.Animation = BD.extend(Jm, {
      tweeners: {
        "*": [
          function (Jz, JM) {
            var JX = this.createTween(Jz, JM);
            m6(JX.elem, Jz, m4.exec(JM), JX);
            return JX;
          },
        ],
      },
      tweener: function (Jz, JM) {
        var JX;
        for (
          var JP = 0,
            JF = (Jz = Bm(Jz) ? ((JM = Jz), ["*"]) : Jz.match(Bl)).length;
          JP < JF;
          JP++
        ) {
          JX = Jz[JP];
          Jm.tweeners[JX] = Jm.tweeners[JX] || [];
          Jm.tweeners[JX].unshift(JM);
        }
      },
      prefilters: [
        function (Jz, JM, JX) {
          var JP;
          var JF;
          var Js;
          var Jy;
          var JZ;
          var JG;
          var Jv;
          var JA = "width" in JM || "height" in JM;
          var JI = this;
          var Ju = {};
          var h0 = Jz.style;
          var h1 = Jz.nodeType && m2(Jz);
          var h2 = BA.get(Jz, "fxshow");
          if (!JX.queue) {
            if ((Jy = BD._queueHooks(Jz, "fx")).unqueued == null) {
              Jy.unqueued = 0;
              JZ = Jy.empty.fire;
              Jy.empty.fire = function () {
                if (!Jy.unqueued) {
                  JZ();
                }
              };
            }
            Jy.unqueued++;
            JI.always(function () {
              JI.always(function () {
                Jy.unqueued--;
                if (!BD.queue(Jz, "fx").length) {
                  Jy.empty.fire();
                }
              });
            });
          }
          for (JP in JM) {
            JF = JM[JP];
            if (J5.test(JF)) {
              delete JM[JP];
              Js = Js || JF === "toggle";
              if (JF === (h1 ? "hide" : "show")) {
                if (JF !== "show" || !h2 || h2[JP] === undefined) {
                  continue;
                }
                h1 = true;
              }
              Ju[JP] = (h2 && h2[JP]) || BD.style(Jz, JP);
            }
          }
          if ((JG = !BD.isEmptyObject(JM)) || !BD.isEmptyObject(Ju)) {
            if (
              JA &&
              Jz.nodeType === 1 &&
              ((JX.overflow = [h0.overflow, h0.overflowX, h0.overflowY]),
              (Jv = h2 && h2.display) == null && (Jv = BA.get(Jz, "display")),
              (JA = BD.css(Jz, "display")) === "none" &&
                (Jv
                  ? (JA = Jv)
                  : (m8([Jz], true),
                    (Jv = Jz.style.display || Jv),
                    (JA = BD.css(Jz, "display")),
                    m8([Jz]))),
              JA === "inline" || (JA === "inline-block" && Jv != null)) &&
              BD.css(Jz, "float") === "none"
            ) {
              if (!JG) {
                JI.done(function () {
                  h0.display = Jv;
                });
                if (Jv == null) {
                  JA = h0.display;
                  Jv = JA === "none" ? "" : JA;
                }
              }
              h0.display = "inline-block";
            }
            if (JX.overflow) {
              h0.overflow = "hidden";
              JI.always(function () {
                h0.overflow = JX.overflow[0];
                h0.overflowX = JX.overflow[1];
                h0.overflowY = JX.overflow[2];
              });
            }
            JG = false;
            for (JP in Ju) {
              if (!JG) {
                if (h2) {
                  if ("hidden" in h2) {
                    h1 = h2.hidden;
                  }
                } else {
                  h2 = BA.access(Jz, "fxshow", {
                    display: Jv,
                  });
                }
                if (Js) {
                  h2.hidden = !h1;
                }
                if (h1) {
                  m8([Jz], true);
                }
                JI.done(function () {
                  if (!h1) {
                    m8([Jz]);
                  }
                  BA.remove(Jz, "fxshow");
                  for (JP in Ju) {
                    BD.style(Jz, JP, Ju[JP]);
                  }
                });
              }
              JG = JB(h1 ? h2[JP] : 0, JP, JI);
              if (!(JP in h2)) {
                h2[JP] = JG.start;
                if (h1) {
                  JG.end = JG.start;
                  JG.start = 0;
                }
              }
            }
          }
        },
      ],
      prefilter: function (Jz, JM) {
        if (JM) {
          Jm.prefilters.unshift(Jz);
        } else {
          Jm.prefilters.push(Jz);
        }
      },
    });
    BD.speed = function (Jz, JM, JX) {
      var JP =
        Jz && typeof Jz == "object"
          ? BD.extend({}, Jz)
          : {
              complete: JX || (!JX && JM) || (Bm(Jz) && Jz),
              duration: Jz,
              easing: (JX && JM) || (JM && !Bm(JM) && JM),
            };
      if (BD.fx.off) {
        JP.duration = 0;
      } else if (typeof JP.duration != "number") {
        if (JP.duration in BD.fx.speeds) {
          JP.duration = BD.fx.speeds[JP.duration];
        } else {
          JP.duration = BD.fx.speeds._default;
        }
      }
      if (JP.queue == null || JP.queue === true) {
        JP.queue = "fx";
      }
      JP.old = JP.complete;
      JP.complete = function () {
        if (Bm(JP.old)) {
          JP.old.call(this);
        }
        if (JP.queue) {
          BD.dequeue(this, JP.queue);
        }
      };
      return JP;
    };
    BD.fn.extend({
      fadeTo: function (Jz, JM, JX, JP) {
        return this.filter(m2).css("opacity", 0).show().end().animate(
          {
            opacity: JM,
          },
          Jz,
          JX,
          JP
        );
      },
      animate: function (Jz, JM, JX, JP) {
        function JF() {
          var JZ = Jm(this, BD.extend({}, Jz), Jy);
          if (Js || BA.get(this, "finish")) {
            JZ.stop(true);
          }
        }
        var Js = BD.isEmptyObject(Jz);
        var Jy = BD.speed(JM, JX, JP);
        JF.finish = JF;
        if (Js || Jy.queue === false) {
          return this.each(JF);
        } else {
          return this.queue(Jy.queue, JF);
        }
      },
      stop: function (Jz, JM, JX) {
        function JP(JF) {
          var Js = JF.stop;
          delete JF.stop;
          Js(JX);
        }
        if (typeof Jz != "string") {
          JX = JM;
          JM = Jz;
          Jz = undefined;
        }
        if (JM && Jz !== false) {
          this.queue(Jz || "fx", []);
        }
        return this.each(function () {
          var JF = true;
          var Js = Jz != null && Jz + "queueHooks";
          var Jy = BD.timers;
          var JZ = BA.get(this);
          if (Js) {
            if (JZ[Js] && JZ[Js].stop) {
              JP(JZ[Js]);
            }
          } else {
            for (Js in JZ) {
              if (JZ[Js] && JZ[Js].stop && J6.test(Js)) {
                JP(JZ[Js]);
              }
            }
          }
          for (Js = Jy.length; Js--; ) {
            if (Jy[Js].elem === this && (Jz == null || Jy[Js].queue === Jz)) {
              Jy[Js].anim.stop(JX);
              JF = false;
              Jy.splice(Js, 1);
            }
          }
          if (!!JF || !JX) {
            BD.dequeue(this, Jz);
          }
        });
      },
      finish: function (Jz) {
        if (Jz !== false) {
          Jz = Jz || "fx";
        }
        return this.each(function () {
          var JM;
          var JX = BA.get(this);
          var JP = JX[Jz + "queue"];
          var JF = JX[Jz + "queueHooks"];
          var Js = BD.timers;
          var Jy = JP ? JP.length : 0;
          JX.finish = true;
          BD.queue(this, Jz, []);
          if (JF && JF.stop) {
            JF.stop.call(this, true);
          }
          JM = Js.length;
          while (JM--) {
            if (Js[JM].elem === this && Js[JM].queue === Jz) {
              Js[JM].anim.stop(true);
              Js.splice(JM, 1);
            }
          }
          for (JM = 0; JM < Jy; JM++) {
            if (JP[JM] && JP[JM].finish) {
              JP[JM].finish.call(this);
            }
          }
          delete JX.finish;
        });
      },
    });
    BD.each(["toggle", "show", "hide"], function (Jz, JM) {
      var JX = BD.fn[JM];
      BD.fn[JM] = function (JP, JF, Js) {
        if (JP == null || typeof JP == "boolean") {
          return JX.apply(this, arguments);
        } else {
          return this.animate(J9(JM, true), JP, JF, Js);
        }
      };
    });
    BD.each(
      {
        slideDown: J9("show"),
        slideUp: J9("hide"),
        slideToggle: J9("toggle"),
        fadeIn: {
          opacity: "show",
        },
        fadeOut: {
          opacity: "hide",
        },
        fadeToggle: {
          opacity: "toggle",
        },
      },
      function (Jz, JM) {
        BD.fn[Jz] = function (JX, JP, JF) {
          return this.animate(JM, JX, JP, JF);
        };
      }
    );
    BD.timers = [];
    BD.fx.tick = function () {
      var Jz;
      var JM = 0;
      var JX = BD.timers;
      for (J1 = Date.now(); JM < JX.length; JM++) {
        if (!(Jz = JX[JM])() && JX[JM] === Jz) {
          JX.splice(JM--, 1);
        }
      }
      if (!JX.length) {
        BD.fx.stop();
      }
      J1 = undefined;
    };
    BD.fx.timer = function (Jz) {
      BD.timers.push(Jz);
      BD.fx.start();
    };
    BD.fx.interval = 13;
    BD.fx.start = function () {
      if (!J2) {
        J2 = true;
        J7();
      }
    };
    BD.fx.stop = function () {
      J2 = null;
    };
    BD.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400,
    };
    BD.fn.delay = function (Jz, JM) {
      Jz = (BD.fx && BD.fx.speeds[Jz]) || Jz;
      return this.queue((JM = JM || "fx"), function (JX, JP) {
        var JF = B9.setTimeout(JX, Jz);
        JP.stop = function () {
          B9.clearTimeout(JF);
        };
      });
    };
    J3 = BH.createElement("input");
    J4 = BH.createElement("select").appendChild(BH.createElement("option"));
    J3.type = "checkbox";
    Bn.checkOn = J3.value !== "";
    Bn.optSelected = J4.selected;
    (J3 = BH.createElement("input")).value = "t";
    J3.type = "radio";
    Bn.radioValue = J3.value === "t";
    var JJ;
    var Jh = BD.expr.attrHandle;
    BD.fn.extend({
      attr: function (Jz, JM) {
        return BP(this, BD.attr, Jz, JM, arguments.length > 1);
      },
      removeAttr: function (Jz) {
        return this.each(function () {
          BD.removeAttr(this, Jz);
        });
      },
    });
    BD.extend({
      attr: function (Jz, JM, JX) {
        var JP;
        var JF;
        var Js = Jz.nodeType;
        if (Js !== 3 && Js !== 8 && Js !== 2) {
          if (Jz.getAttribute === undefined) {
            return BD.prop(Jz, JM, JX);
          } else {
            if (Js !== 1 || !BD.isXMLDoc(Jz)) {
              JF =
                BD.attrHooks[JM.toLowerCase()] ||
                (BD.expr.match.bool.test(JM) ? JJ : undefined);
            }
            if (JX !== undefined) {
              if (JX === null) {
                BD.removeAttr(Jz, JM);
                return;
              } else if (
                JF &&
                "set" in JF &&
                (JP = JF.set(Jz, JX, JM)) !== undefined
              ) {
                return JP;
              } else {
                Jz.setAttribute(JM, JX + "");
                return JX;
              }
            } else if (
              (!JF || !("get" in JF) || (JP = JF.get(Jz, JM)) === null) &&
              (JP = BD.find.attr(Jz, JM)) == null
            ) {
              return undefined;
            } else {
              return JP;
            }
          }
        }
      },
      attrHooks: {
        type: {
          set: function (Jz, JM) {
            var JX;
            if (!Bn.radioValue && JM === "radio" && Bd(Jz, "input")) {
              JX = Jz.value;
              Jz.setAttribute("type", JM);
              if (JX) {
                Jz.value = JX;
              }
              return JM;
            }
          },
        },
      },
      removeAttr: function (Jz, JM) {
        var JX;
        var JP = 0;
        var JF = JM && JM.match(Bl);
        if (JF && Jz.nodeType === 1) {
          while ((JX = JF[JP++])) {
            Jz.removeAttribute(JX);
          }
        }
      },
    });
    JJ = {
      set: function (Jz, JM, JX) {
        if (JM === false) {
          BD.removeAttr(Jz, JX);
        } else {
          Jz.setAttribute(JX, JX);
        }
        return JX;
      },
    };
    BD.each(BD.expr.match.bool.source.match(/\w+/g), function (Jz, JM) {
      var JX = Jh[JM] || BD.find.attr;
      Jh[JM] = function (JP, JF, Js) {
        var Jy;
        var JZ;
        var JG = JF.toLowerCase();
        if (!Js) {
          JZ = Jh[JG];
          Jh[JG] = Jy;
          Jy = JX(JP, JF, Js) != null ? JG : null;
          Jh[JG] = JZ;
        }
        return Jy;
      };
    });
    var JH = /^(?:input|select|textarea|button)$/i;
    var Jq = /^(?:a|area)$/i;
    function Jw(Jz) {
      return (Jz.match(Bl) || []).join(" ");
    }
    function Jp(Jz) {
      return (Jz.getAttribute && Jz.getAttribute("class")) || "";
    }
    function Jx(Jz) {
      if (Array.isArray(Jz)) {
        return Jz;
      } else {
        return (typeof Jz == "string" && Jz.match(Bl)) || [];
      }
    }
    BD.fn.extend({
      prop: function (Jz, JM) {
        return BP(this, BD.prop, Jz, JM, arguments.length > 1);
      },
      removeProp: function (Jz) {
        return this.each(function () {
          delete this[BD.propFix[Jz] || Jz];
        });
      },
    });
    BD.extend({
      prop: function (Jz, JM, JX) {
        var JP;
        var JF;
        var Js = Jz.nodeType;
        if (Js !== 3 && Js !== 8 && Js !== 2) {
          if (Js !== 1 || !BD.isXMLDoc(Jz)) {
            JM = BD.propFix[JM] || JM;
            JF = BD.propHooks[JM];
          }
          if (JX !== undefined) {
            if (JF && "set" in JF && (JP = JF.set(Jz, JX, JM)) !== undefined) {
              return JP;
            } else {
              return (Jz[JM] = JX);
            }
          } else if (JF && "get" in JF && (JP = JF.get(Jz, JM)) !== null) {
            return JP;
          } else {
            return Jz[JM];
          }
        }
      },
      propHooks: {
        tabIndex: {
          get: function (Jz) {
            var JM = BD.find.attr(Jz, "tabindex");
            if (JM) {
              return parseInt(JM, 10);
            } else if (
              JH.test(Jz.nodeName) ||
              (Jq.test(Jz.nodeName) && Jz.href)
            ) {
              return 0;
            } else {
              return -1;
            }
          },
        },
      },
      propFix: {
        for: "htmlFor",
        class: "className",
      },
    });
    if (!Bn.optSelected) {
      BD.propHooks.selected = {
        get: function (Jz) {
          Jz = Jz.parentNode;
          if (Jz && Jz.parentNode) {
            Jz.parentNode.selectedIndex;
          }
          return null;
        },
        set: function (Jz) {
          Jz = Jz.parentNode;
          if (Jz && (Jz.selectedIndex, Jz.parentNode)) {
            Jz.parentNode.selectedIndex;
          }
        },
      };
    }
    BD.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        BD.propFix[this.toLowerCase()] = this;
      }
    );
    BD.fn.extend({
      addClass: function (Jz) {
        var JM;
        var JX;
        var JP;
        var JF;
        var Js;
        var Jy;
        var JZ = 0;
        if (Bm(Jz)) {
          return this.each(function (JG) {
            BD(this).addClass(Jz.call(this, JG, Jp(this)));
          });
        }
        if ((JM = Jx(Jz)).length) {
          while ((JX = this[JZ++])) {
            Jy = Jp(JX);
            if ((JP = JX.nodeType === 1 && " " + Jw(Jy) + " ")) {
              for (Js = 0; (JF = JM[Js++]); ) {
                if (JP.indexOf(" " + JF + " ") < 0) {
                  JP += JF + " ";
                }
              }
              if (Jy !== (Jy = Jw(JP))) {
                JX.setAttribute("class", Jy);
              }
            }
          }
        }
        return this;
      },
      removeClass: function (Jz) {
        var JM;
        var JX;
        var JP;
        var JF;
        var Js;
        var Jy;
        var JZ = 0;
        if (Bm(Jz)) {
          return this.each(function (JG) {
            BD(this).removeClass(Jz.call(this, JG, Jp(this)));
          });
        }
        if (!arguments.length) {
          return this.attr("class", "");
        }
        if ((JM = Jx(Jz)).length) {
          while ((JX = this[JZ++])) {
            Jy = Jp(JX);
            if ((JP = JX.nodeType === 1 && " " + Jw(Jy) + " ")) {
              for (Js = 0; (JF = JM[Js++]); ) {
                while (JP.indexOf(" " + JF + " ") > -1) {
                  JP = JP.replace(" " + JF + " ", " ");
                }
              }
              if (Jy !== (Jy = Jw(JP))) {
                JX.setAttribute("class", Jy);
              }
            }
          }
        }
        return this;
      },
      toggleClass: function (Jz, JM) {
        var JX = typeof Jz;
        var JP = JX == "string" || Array.isArray(Jz);
        if (typeof JM == "boolean" && JP) {
          if (JM) {
            return this.addClass(Jz);
          } else {
            return this.removeClass(Jz);
          }
        } else if (Bm(Jz)) {
          return this.each(function (JF) {
            BD(this).toggleClass(Jz.call(this, JF, Jp(this), JM), JM);
          });
        } else {
          return this.each(function () {
            var JF;
            var Js;
            var Jy;
            var JZ;
            if (JP) {
              Js = 0;
              Jy = BD(this);
              JZ = Jx(Jz);
              while ((JF = JZ[Js++])) {
                if (Jy.hasClass(JF)) {
                  Jy.removeClass(JF);
                } else {
                  Jy.addClass(JF);
                }
              }
            } else if (Jz === undefined || JX == "boolean") {
              if ((JF = Jp(this))) {
                BA.set(this, "__className__", JF);
              }
              if (this.setAttribute) {
                this.setAttribute(
                  "class",
                  (!JF && Jz !== false && BA.get(this, "__className__")) || ""
                );
              }
            }
          });
        }
      },
      hasClass: function (Jz) {
        for (var JM, JX = 0, JP = " " + Jz + " "; (JM = this[JX++]); ) {
          if (JM.nodeType === 1 && (" " + Jw(Jp(JM)) + " ").indexOf(JP) > -1) {
            return true;
          }
        }
        return false;
      },
    });
    function Jr(Jz) {
      Jz.stopPropagation();
    }
    var JO = /\r/g;
    BD.fn.extend({
      val: function (Jz) {
        var JM;
        var JX;
        var JP;
        var JF = this[0];
        if (arguments.length) {
          JP = Bm(Jz);
          return this.each(function (Js) {
            if (this.nodeType === 1) {
              if ((Js = JP ? Jz.call(this, Js, BD(this).val()) : Jz) == null) {
                Js = "";
              } else if (typeof Js == "number") {
                Js += "";
              } else if (Array.isArray(Js)) {
                Js = BD.map(Js, function (Jy) {
                  if (Jy == null) {
                    return "";
                  } else {
                    return Jy + "";
                  }
                });
              }
              if (
                !(JM =
                  BD.valHooks[this.type] ||
                  BD.valHooks[this.nodeName.toLowerCase()]) ||
                !("set" in JM) ||
                JM.set(this, Js, "value") === undefined
              ) {
                this.value = Js;
              }
            }
          });
        } else if (JF) {
          if (
            (JM =
              BD.valHooks[JF.type] || BD.valHooks[JF.nodeName.toLowerCase()]) &&
            "get" in JM &&
            (JX = JM.get(JF, "value")) !== undefined
          ) {
            return JX;
          } else if (typeof (JX = JF.value) == "string") {
            return JX.replace(JO, "");
          } else if (JX == null) {
            return "";
          } else {
            return JX;
          }
        } else {
          return undefined;
        }
      },
    });
    BD.extend({
      valHooks: {
        option: {
          get: function (Jz) {
            var JM = BD.find.attr(Jz, "value");
            return JM ?? Jw(BD.text(Jz));
          },
        },
        select: {
          get: function (Jz) {
            var JM;
            var JX = Jz.options;
            var JP = Jz.selectedIndex;
            var JF = Jz.type === "select-one";
            var Js = JF ? null : [];
            for (
              var Jy = JF ? JP + 1 : JX.length, JZ = JP < 0 ? Jy : JF ? JP : 0;
              JZ < Jy;
              JZ++
            ) {
              if (
                ((JM = JX[JZ]).selected || JZ === JP) &&
                !JM.disabled &&
                (!JM.parentNode.disabled || !Bd(JM.parentNode, "optgroup"))
              ) {
                JM = BD(JM).val();
                if (JF) {
                  return JM;
                }
                Js.push(JM);
              }
            }
            return Js;
          },
          set: function (Jz, JM) {
            var JX;
            var JP;
            var JF = Jz.options;
            var Js = BD.makeArray(JM);
            for (var Jy = JF.length; Jy--; ) {
              if (
                ((JP = JF[Jy]).selected =
                  BD.inArray(BD.valHooks.option.get(JP), Js) > -1)
              ) {
                JX = true;
              }
            }
            if (!JX) {
              Jz.selectedIndex = -1;
            }
            return Js;
          },
        },
      },
    });
    BD.each(["radio", "checkbox"], function () {
      BD.valHooks[this] = {
        set: function (Jz, JM) {
          if (Array.isArray(JM)) {
            return (Jz.checked = BD.inArray(BD(Jz).val(), JM) > -1);
          }
        },
      };
      if (!Bn.checkOn) {
        BD.valHooks[this].get = function (Jz) {
          if (Jz.getAttribute("value") === null) {
            return "on";
          } else {
            return Jz.value;
          }
        };
      }
    });
    Bn.focusin = "onfocusin" in B9;
    var JY = /^(?:focusinfocus|focusoutblur)$/;
    BD.extend(BD.event, {
      trigger: function (Jz, JM, JX, JP) {
        var JF;
        var Js;
        var Jy;
        var JZ;
        var JG;
        var Jv;
        var JA;
        var JI = [JX || BH];
        var Ju = BS.call(Jz, "type") ? Jz.type : Jz;
        var h0 = BS.call(Jz, "namespace") ? Jz.namespace.split(".") : [];
        var h1 = (JA = Js = JX = JX || BH);
        if (
          JX.nodeType !== 3 &&
          JX.nodeType !== 8 &&
          !JY.test(Ju + BD.event.triggered) &&
          (Ju.indexOf(".") > -1 &&
            ((Ju = (h0 = Ju.split(".")).shift()), h0.sort()),
          (JZ = Ju.indexOf(":") < 0 && "on" + Ju),
          ((Jz = Jz[BD.expando]
            ? Jz
            : new BD.Event(Ju, typeof Jz == "object" && Jz)).isTrigger = JP
            ? 2
            : 3),
          (Jz.namespace = h0.join(".")),
          (Jz.rnamespace = Jz.namespace
            ? new RegExp("(^|\\.)" + h0.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (Jz.result = undefined),
          (Jz.target ||= JX),
          (JM = JM == null ? [Jz] : BD.makeArray(JM, [Jz])),
          (Jv = BD.event.special[Ju] || {}),
          JP || !Jv.trigger || Jv.trigger.apply(JX, JM) !== false)
        ) {
          if (!JP && !Jv.noBubble && !BJ(JX)) {
            Jy = Jv.delegateType || Ju;
            if (!JY.test(Jy + Ju)) {
              h1 = h1.parentNode;
            }
            for (; h1; h1 = h1.parentNode) {
              JI.push(h1);
              Js = h1;
            }
            if (Js === (JX.ownerDocument || BH)) {
              JI.push(Js.defaultView || Js.parentWindow || B9);
            }
          }
          for (JF = 0; (h1 = JI[JF++]) && !Jz.isPropagationStopped(); ) {
            JA = h1;
            Jz.type = JF > 1 ? Jy : Jv.bindType || Ju;
            if (
              (JG = (BA.get(h1, "events") || {})[Jz.type] && BA.get(h1, "handle"))
            ) {
              JG.apply(h1, JM);
            }
            if (
              (JG = JZ && h1[JZ]) &&
              JG.apply &&
              BG(h1) &&
              ((Jz.result = JG.apply(h1, JM)), Jz.result === false)
            ) {
              Jz.preventDefault();
            }
          }
          Jz.type = Ju;
          if (
            !JP &&
            !Jz.isDefaultPrevented() &&
            (!Jv._default || Jv._default.apply(JI.pop(), JM) === false) &&
            !!BG(JX)
          ) {
            if (
              JZ &&
              Bm(JX[Ju]) &&
              !BJ(JX) &&
              ((Js = JX[JZ]) && (JX[JZ] = null),
              (BD.event.triggered = Ju),
              Jz.isPropagationStopped() && JA.addEventListener(Ju, Jr),
              JX[Ju](),
              Jz.isPropagationStopped() && JA.removeEventListener(Ju, Jr),
              (BD.event.triggered = undefined),
              Js)
            ) {
              JX[JZ] = Js;
            }
          }
          return Jz.result;
        }
      },
      simulate: function (Jz, JM, JX) {
        JX = BD.extend(new BD.Event(), JX, {
          type: Jz,
          isSimulated: true,
        });
        BD.event.trigger(JX, null, JM);
      },
    });
    BD.fn.extend({
      trigger: function (Jz, JM) {
        return this.each(function () {
          BD.event.trigger(Jz, JM, this);
        });
      },
      triggerHandler: function (Jz, JM) {
        var JX = this[0];
        if (JX) {
          return BD.event.trigger(Jz, JM, JX, true);
        }
      },
    });
    if (!Bn.focusin) {
      BD.each(
        {
          focus: "focusin",
          blur: "focusout",
        },
        function (Jz, JM) {
          function JX(JP) {
            BD.event.simulate(JM, JP.target, BD.event.fix(JP));
          }
          BD.event.special[JM] = {
            setup: function () {
              var JP = this.ownerDocument || this;
              var JF = BA.access(JP, JM);
              if (!JF) {
                JP.addEventListener(Jz, JX, true);
              }
              BA.access(JP, JM, (JF || 0) + 1);
            },
            teardown: function () {
              var JP = this.ownerDocument || this;
              var JF = BA.access(JP, JM) - 1;
              if (JF) {
                BA.access(JP, JM, JF);
              } else {
                JP.removeEventListener(Jz, JX, true);
                BA.remove(JP, JM);
              }
            },
          };
        }
      );
    }
    var JS = B9.location;
    var Jb = Date.now();
    var JU = /\?/;
    BD.parseXML = function (Jz) {
      var JM;
      if (!Jz || typeof Jz != "string") {
        return null;
      }
      try {
        JM = new B9.DOMParser().parseFromString(Jz, "text/xml");
      } catch (JX) {
        JM = undefined;
      }
      if (!JM || !!JM.getElementsByTagName("parsererror").length) {
        BD.error("Invalid XML: " + Jz);
      }
      return JM;
    };
    var Jn = /\[\]$/;
    var JK = /\r?\n/g;
    var Jf = /^(?:submit|button|image|reset|file)$/i;
    var Jo = /^(?:input|select|textarea|keygen)/i;
    BD.param = function (Jz, JM) {
      function JX(Js, Jy) {
        Jy = Bm(Jy) ? Jy() : Jy;
        JF[JF.length] =
          encodeURIComponent(Js) + "=" + encodeURIComponent(Jy == null ? "" : Jy);
      }
      var JP;
      var JF = [];
      if (Array.isArray(Jz) || (Jz.jquery && !BD.isPlainObject(Jz))) {
        BD.each(Jz, function () {
          JX(this.name, this.value);
        });
      } else {
        for (JP in Jz) {
          (function Js(Jy, JZ, JG, Jv) {
            if (Array.isArray(JZ)) {
              BD.each(JZ, function (JI, Ju) {
                if (JG || Jn.test(Jy)) {
                  Jv(Jy, Ju);
                } else {
                  Js(
                    Jy +
                      "[" +
                      (typeof Ju == "object" && Ju != null ? JI : "") +
                      "]",
                    Ju,
                    JG,
                    Jv
                  );
                }
              });
            } else if (JG || Bo(JZ) !== "object") {
              Jv(Jy, JZ);
            } else {
              for (var JA in JZ) {
                Js(Jy + "[" + JA + "]", JZ[JA], JG, Jv);
              }
            }
          })(JP, Jz[JP], JM, JX);
        }
      }
      return JF.join("&");
    };
    BD.fn.extend({
      serialize: function () {
        return BD.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var Jz = BD.prop(this, "elements");
          if (Jz) {
            return BD.makeArray(Jz);
          } else {
            return this;
          }
        })
          .filter(function () {
            var Jz = this.type;
            return (
              this.name &&
              !BD(this).is(":disabled") &&
              Jo.test(this.nodeName) &&
              !Jf.test(Jz) &&
              (this.checked || !m9.test(Jz))
            );
          })
          .map(function (Jz, JM) {
            var JX = BD(this).val();
            if (JX == null) {
              return null;
            } else if (Array.isArray(JX)) {
              return BD.map(JX, function (JP) {
                return {
                  name: JM.name,
                  value: JP.replace(JK, "\r\n"),
                };
              });
            } else {
              return {
                name: JM.name,
                value: JX.replace(JK, "\r\n"),
              };
            }
          })
          .get();
      },
    });
    var JD = /%20/g;
    var JN = /#.*$/;
    var Jk = /([?&])_=[^&]*/;
    var JL = /^(.*?):[ \t]*([^\r\n]*)$/gm;
    var Jg = /^(?:GET|HEAD)$/;
    var Ja = /^\/\//;
    var Jd = {};
    var Jt = {};
    var Jc = `*/*`;
    var JR = BH.createElement("a");
    function JQ(Jz) {
      return function (JM, JX) {
        if (typeof JM != "string") {
          JX = JM;
          JM = "*";
        }
        var JP;
        var JF = 0;
        var Js = JM.toLowerCase().match(Bl) || [];
        if (Bm(JX)) {
          while ((JP = Js[JF++])) {
            if (JP[0] === "+") {
              JP = JP.slice(1) || "*";
              (Jz[JP] = Jz[JP] || []).unshift(JX);
            } else {
              (Jz[JP] = Jz[JP] || []).push(JX);
            }
          }
        }
      };
    }
    function JV(Jz, JM, JX, JP) {
      var JF = {};
      var Js = Jz === Jt;
      function Jy(JZ) {
        var JG;
        JF[JZ] = true;
        BD.each(Jz[JZ] || [], function (Jv, JA) {
          JA = JA(JM, JX, JP);
          if (typeof JA != "string" || Js || JF[JA]) {
            if (Js) {
              return !(JG = JA);
            } else {
              return undefined;
            }
          } else {
            JM.dataTypes.unshift(JA);
            Jy(JA);
            return false;
          }
        });
        return JG;
      }
      return Jy(JM.dataTypes[0]) || (!JF["*"] && Jy("*"));
    }
    function JE(Jz, JM) {
      var JX;
      var JP;
      var JF = BD.ajaxSettings.flatOptions || {};
      for (JX in JM) {
        if (JM[JX] !== undefined) {
          (JF[JX] ? Jz : (JP = JP || {}))[JX] = JM[JX];
        }
      }
      if (JP) {
        BD.extend(true, Jz, JP);
      }
      return Jz;
    }
    JR.href = JS.href;
    BD.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: JS.href,
        type: "GET",
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
          JS.protocol
        ),
        global: true,
        processData: true,
        async: true,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Jc,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/,
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": true,
          "text json": JSON.parse,
          "text xml": BD.parseXML,
        },
        flatOptions: {
          url: true,
          context: true,
        },
      },
      ajaxSetup: function (Jz, JM) {
        if (JM) {
          return JE(JE(Jz, BD.ajaxSettings), JM);
        } else {
          return JE(BD.ajaxSettings, Jz);
        }
      },
      ajaxPrefilter: JQ(Jd),
      ajaxTransport: JQ(Jt),
      ajax: function (Jz, JM) {
        if (typeof Jz == "object") {
          JM = Jz;
          Jz = undefined;
        }
        var JX;
        var JP;
        var JF;
        var Js;
        var Jy;
        var JZ;
        var JG;
        var Jv;
        var JA = BD.ajaxSetup({}, (JM = JM || {}));
        var JI = JA.context || JA;
        var Ju = JA.context && (JI.nodeType || JI.jquery) ? BD(JI) : BD.event;
        var h0 = BD.Deferred();
        var h1 = BD.Callbacks("once memory");
        var h2 = JA.statusCode || {};
        var h3 = {};
        var h4 = {};
        var h5 = "canceled";
        var h6 = {
          readyState: 0,
          getResponseHeader: function (h8) {
            var h9;
            if (JZ) {
              if (!Js) {
                for (Js = {}; (h9 = JL.exec(JF)); ) {
                  Js[h9[1].toLowerCase()] = h9[2];
                }
              }
              h9 = Js[h8.toLowerCase()];
            }
            if (h9 == null) {
              return null;
            } else {
              return h9;
            }
          },
          getAllResponseHeaders: function () {
            if (JZ) {
              return JF;
            } else {
              return null;
            }
          },
          setRequestHeader: function (h8, h9) {
            if (JZ == null) {
              h8 = h4[h8.toLowerCase()] = h4[h8.toLowerCase()] || h8;
              h3[h8] = h9;
            }
            return this;
          },
          overrideMimeType: function (h8) {
            if (JZ == null) {
              JA.mimeType = h8;
            }
            return this;
          },
          statusCode: function (h8) {
            if (h8) {
              if (JZ) {
                h6.always(h8[h6.status]);
              } else {
                for (var h9 in h8) {
                  h2[h9] = [h2[h9], h8[h9]];
                }
              }
            }
            return this;
          },
          abort: function (h8) {
            h8 = h8 || h5;
            if (JX) {
              JX.abort(h8);
            }
            h7(0, h8);
            return this;
          },
        };
        h0.promise(h6);
        JA.url = ((Jz || JA.url || JS.href) + "").replace(Ja, JS.protocol + "//");
        JA.type = JM.method || JM.type || JA.method || JA.type;
        JA.dataTypes = (JA.dataType || "*").toLowerCase().match(Bl) || [""];
        if (JA.crossDomain == null) {
          Jz = BH.createElement("a");
          try {
            Jz.href = JA.url;
            Jz.href = Jz.href;
            JA.crossDomain =
              JR.protocol + "//" + JR.host != Jz.protocol + "//" + Jz.host;
          } catch (h8) {
            JA.crossDomain = true;
          }
        }
        if (JA.data && JA.processData && typeof JA.data != "string") {
          JA.data = BD.param(JA.data, JA.traditional);
        }
        JV(Jd, JA, JM, h6);
        if (!JZ) {
          if ((JG = BD.event && JA.global) && BD.active++ == 0) {
            BD.event.trigger("ajaxStart");
          }
          JA.type = JA.type.toUpperCase();
          JA.hasContent = !Jg.test(JA.type);
          JP = JA.url.replace(JN, "");
          if (JA.hasContent) {
            if (
              JA.data &&
              JA.processData &&
              (JA.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) === 0
            ) {
              JA.data = JA.data.replace(JD, "+");
            }
          } else {
            Jz = JA.url.slice(JP.length);
            if (JA.data && (JA.processData || typeof JA.data == "string")) {
              JP += (JU.test(JP) ? "&" : "?") + JA.data;
              delete JA.data;
            }
            if (JA.cache === false) {
              JP = JP.replace(Jk, "$1");
              Jz = (JU.test(JP) ? "&" : "?") + "_=" + Jb++ + Jz;
            }
            JA.url = JP + Jz;
          }
          if (
            JA.ifModified &&
            (BD.lastModified[JP] &&
              h6.setRequestHeader("If-Modified-Since", BD.lastModified[JP]),
            BD.etag[JP])
          ) {
            h6.setRequestHeader("If-None-Match", BD.etag[JP]);
          }
          if (
            (JA.data && JA.hasContent && JA.contentType !== false) ||
            JM.contentType
          ) {
            h6.setRequestHeader("Content-Type", JA.contentType);
          }
          h6.setRequestHeader(
            "Accept",
            JA.dataTypes[0] && JA.accepts[JA.dataTypes[0]]
              ? JA.accepts[JA.dataTypes[0]] +
                  (JA.dataTypes[0] !== "*" ? ", " + Jc + "; q=0.01" : "")
              : JA.accepts["*"]
          );
          for (Jv in JA.headers) {
            h6.setRequestHeader(Jv, JA.headers[Jv]);
          }
          if (JA.beforeSend && (JA.beforeSend.call(JI, h6, JA) === false || JZ)) {
            return h6.abort();
          }
          h5 = "abort";
          h1.add(JA.complete);
          h6.done(JA.success);
          h6.fail(JA.error);
          if ((JX = JV(Jt, JA, JM, h6))) {
            h6.readyState = 1;
            if (JG) {
              Ju.trigger("ajaxSend", [h6, JA]);
            }
            if (JZ) {
              return h6;
            }
            if (JA.async && JA.timeout > 0) {
              Jy = B9.setTimeout(function () {
                h6.abort("timeout");
              }, JA.timeout);
            }
            try {
              JZ = false;
              JX.send(h3, h7);
            } catch (h9) {
              if (JZ) {
                throw h9;
              }
              h7(-1, h9);
            }
          } else {
            h7(-1, "No Transport");
          }
        }
        return h6;
        function h7(hB, hm, hJ, hh) {
          var hH;
          var hq;
          var hw;
          var hp = hm;
          if (!JZ) {
            JZ = true;
            if (Jy) {
              B9.clearTimeout(Jy);
            }
            JX = undefined;
            JF = hh || "";
            h6.readyState = hB > 0 ? 4 : 0;
            hh = (hB >= 200 && hB < 300) || hB === 304;
            if (hJ) {
              hw = (function (hx, hr, hO) {
                var hY;
                var hS;
                var hb;
                var hU;
                var hn = hx.contents;
                for (var hK = hx.dataTypes; hK[0] === "*"; ) {
                  hK.shift();
                  if (hY === undefined) {
                    hY = hx.mimeType || hr.getResponseHeader("Content-Type");
                  }
                }
                if (hY) {
                  for (hS in hn) {
                    if (hn[hS] && hn[hS].test(hY)) {
                      hK.unshift(hS);
                      break;
                    }
                  }
                }
                if (hK[0] in hO) {
                  hb = hK[0];
                } else {
                  for (hS in hO) {
                    if (!hK[0] || hx.converters[hS + " " + hK[0]]) {
                      hb = hS;
                      break;
                    }
                    hU = hU || hS;
                  }
                  hb = hb || hU;
                }
                if (hb) {
                  if (hb !== hK[0]) {
                    hK.unshift(hb);
                  }
                  return hO[hb];
                }
              })(JA, h6, hJ);
            }
            hw = (function (hx, hr, hO, hY) {
              var hS;
              var hb;
              var hU;
              var hn;
              var hK;
              var hf = {};
              var ho = hx.dataTypes.slice();
              if (ho[1]) {
                for (hU in hx.converters) {
                  hf[hU.toLowerCase()] = hx.converters[hU];
                }
              }
              for (hb = ho.shift(); hb; ) {
                if (hx.responseFields[hb]) {
                  hO[hx.responseFields[hb]] = hr;
                }
                if (!hK && hY && hx.dataFilter) {
                  hr = hx.dataFilter(hr, hx.dataType);
                }
                hK = hb;
                if ((hb = ho.shift())) {
                  if (hb === "*") {
                    hb = hK;
                  } else if (hK !== "*" && hK !== hb) {
                    if (!(hU = hf[hK + " " + hb] || hf["* " + hb])) {
                      for (hS in hf) {
                        if (
                          (hn = hS.split(" "))[1] === hb &&
                          (hU = hf[hK + " " + hn[0]] || hf["* " + hn[0]])
                        ) {
                          if (hU === true) {
                            hU = hf[hS];
                          } else if (hf[hS] !== true) {
                            hb = hn[0];
                            ho.unshift(hn[1]);
                          }
                          break;
                        }
                      }
                    }
                    if (hU !== true) {
                      if (hU && hx.throws) {
                        hr = hU(hr);
                      } else {
                        try {
                          hr = hU(hr);
                        } catch (hD) {
                          return {
                            state: "parsererror",
                            error: hU
                              ? hD
                              : "No conversion from " + hK + " to " + hb,
                          };
                        }
                      }
                    }
                  }
                }
              }
              return {
                state: "success",
                data: hr,
              };
            })(JA, hw, h6, hh);
            if (hh) {
              if (
                JA.ifModified &&
                ((hJ = h6.getResponseHeader("Last-Modified")) &&
                  (BD.lastModified[JP] = hJ),
                (hJ = h6.getResponseHeader("etag")))
              ) {
                BD.etag[JP] = hJ;
              }
              if (hB === 204 || JA.type === "HEAD") {
                hp = "nocontent";
              } else if (hB === 304) {
                hp = "notmodified";
              } else {
                hp = hw.state;
                hH = hw.data;
                hh = !(hq = hw.error);
              }
            } else {
              hq = hp;
              if (!!hB || !hp) {
                hp = "error";
                if (hB < 0) {
                  hB = 0;
                }
              }
            }
            h6.status = hB;
            h6.statusText = (hm || hp) + "";
            if (hh) {
              h0.resolveWith(JI, [hH, hp, h6]);
            } else {
              h0.rejectWith(JI, [h6, hp, hq]);
            }
            h6.statusCode(h2);
            h2 = undefined;
            if (JG) {
              Ju.trigger(hh ? "ajaxSuccess" : "ajaxError", [
                h6,
                JA,
                hh ? hH : hq,
              ]);
            }
            h1.fireWith(JI, [h6, hp]);
            if (JG) {
              Ju.trigger("ajaxComplete", [h6, JA]);
              if (!--BD.active) {
                BD.event.trigger("ajaxStop");
              }
            }
          }
        }
      },
      getJSON: function (Jz, JM, JX) {
        return BD.get(Jz, JM, JX, "json");
      },
      getScript: function (Jz, JM) {
        return BD.get(Jz, undefined, JM, "script");
      },
    });
    BD.each(["get", "post"], function (Jz, JM) {
      BD[JM] = function (JX, JP, JF, Js) {
        if (Bm(JP)) {
          Js = Js || JF;
          JF = JP;
          JP = undefined;
        }
        return BD.ajax(
          BD.extend(
            {
              url: JX,
              type: JM,
              dataType: Js,
              data: JP,
              success: JF,
            },
            BD.isPlainObject(JX) && JX
          )
        );
      };
    });
    BD._evalUrl = function (Jz) {
      return BD.ajax({
        url: Jz,
        type: "GET",
        dataType: "script",
        cache: true,
        async: false,
        global: false,
        throws: true,
      });
    };
    BD.fn.extend({
      wrapAll: function (Jz) {
        if (this[0]) {
          if (Bm(Jz)) {
            Jz = Jz.call(this[0]);
          }
          Jz = BD(Jz, this[0].ownerDocument).eq(0).clone(true);
          if (this[0].parentNode) {
            Jz.insertBefore(this[0]);
          }
          Jz.map(function () {
            for (var JM = this; JM.firstElementChild; ) {
              JM = JM.firstElementChild;
            }
            return JM;
          }).append(this);
        }
        return this;
      },
      wrapInner: function (Jz) {
        if (Bm(Jz)) {
          return this.each(function (JM) {
            BD(this).wrapInner(Jz.call(this, JM));
          });
        } else {
          return this.each(function () {
            var JM = BD(this);
            var JX = JM.contents();
            if (JX.length) {
              JX.wrapAll(Jz);
            } else {
              JM.append(Jz);
            }
          });
        }
      },
      wrap: function (Jz) {
        var JM = Bm(Jz);
        return this.each(function (JX) {
          BD(this).wrapAll(JM ? Jz.call(this, JX) : Jz);
        });
      },
      unwrap: function (Jz) {
        this.parent(Jz)
          .not("body")
          .each(function () {
            BD(this).replaceWith(this.childNodes);
          });
        return this;
      },
    });
    BD.expr.pseudos.hidden = function (Jz) {
      return !BD.expr.pseudos.visible(Jz);
    };
    BD.expr.pseudos.visible = function (Jz) {
      return (
        !!Jz.offsetWidth || !!Jz.offsetHeight || !!Jz.getClientRects().length
      );
    };
    BD.ajaxSettings.xhr = function () {
      try {
        return new B9.XMLHttpRequest();
      } catch (Jz) {}
    };
    var JW = {
      0: 200,
      1223: 204,
    };
    var JT = BD.ajaxSettings.xhr();
    Bn.cors = !!JT && "withCredentials" in JT;
    Bn.ajax = JT = !!JT;
    BD.ajaxTransport(function (Jz) {
      var JM;
      var JX;
      if (Bn.cors || (JT && !Jz.crossDomain)) {
        return {
          send: function (JP, JF) {
            var Js;
            var Jy = Jz.xhr();
            Jy.open(Jz.type, Jz.url, Jz.async, Jz.username, Jz.password);
            if (Jz.xhrFields) {
              for (Js in Jz.xhrFields) {
                Jy[Js] = Jz.xhrFields[Js];
              }
            }
            if (Jz.mimeType && Jy.overrideMimeType) {
              Jy.overrideMimeType(Jz.mimeType);
            }
            if (!Jz.crossDomain && !JP["X-Requested-With"]) {
              JP["X-Requested-With"] = "XMLHttpRequest";
            }
            for (Js in JP) {
              Jy.setRequestHeader(Js, JP[Js]);
            }
            JM = function (JZ) {
              return function () {
                if (JM) {
                  JM =
                    JX =
                    Jy.onload =
                    Jy.onerror =
                    Jy.onabort =
                    Jy.ontimeout =
                    Jy.onreadystatechange =
                      null;
                  if (JZ === "abort") {
                    Jy.abort();
                  } else if (JZ === "error") {
                    if (typeof Jy.status != "number") {
                      JF(0, "error");
                    } else {
                      JF(Jy.status, Jy.statusText);
                    }
                  } else {
                    JF(
                      JW[Jy.status] || Jy.status,
                      Jy.statusText,
                      (Jy.responseType || "text") !== "text" ||
                        typeof Jy.responseText != "string"
                        ? {
                            binary: Jy.response,
                          }
                        : {
                            text: Jy.responseText,
                          },
                      Jy.getAllResponseHeaders()
                    );
                  }
                }
              };
            };
            Jy.onload = JM();
            JX = Jy.onerror = Jy.ontimeout = JM("error");
            if (Jy.onabort !== undefined) {
              Jy.onabort = JX;
            } else {
              Jy.onreadystatechange = function () {
                if (Jy.readyState === 4) {
                  B9.setTimeout(function () {
                    if (JM) {
                      JX();
                    }
                  });
                }
              };
            }
            JM = JM("abort");
            try {
              Jy.send((Jz.hasContent && Jz.data) || null);
            } catch (JZ) {
              if (JM) {
                throw JZ;
              }
            }
          },
          abort: function () {
            if (JM) {
              JM();
            }
          },
        };
      }
    });
    BD.ajaxPrefilter(function (Jz) {
      if (Jz.crossDomain) {
        Jz.contents.script = false;
      }
    });
    BD.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: {
        script: /\b(?:java|ecma)script\b/,
      },
      converters: {
        "text script": function (Jz) {
          BD.globalEval(Jz);
          return Jz;
        },
      },
    });
    BD.ajaxPrefilter("script", function (Jz) {
      if (Jz.cache === undefined) {
        Jz.cache = false;
      }
      if (Jz.crossDomain) {
        Jz.type = "GET";
      }
    });
    BD.ajaxTransport("script", function (Jz) {
      var JM;
      var JX;
      if (Jz.crossDomain) {
        return {
          send: function (JP, JF) {
            JM = BD("<script>")
              .prop({
                charset: Jz.scriptCharset,
                src: Jz.url,
              })
              .on(
                "load error",
                (JX = function (Js) {
                  JM.remove();
                  JX = null;
                  if (Js) {
                    JF(Js.type === "error" ? 404 : 200, Js.type);
                  }
                })
              );
            BH.head.appendChild(JM[0]);
          },
          abort: function () {
            if (JX) {
              JX();
            }
          },
        };
      }
    });
    var Jl = [];
    var JC = /(=)\?(?=&|$)|\?\?/;
    BD.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var Jz = Jl.pop() || BD.expando + "_" + Jb++;
        this[Jz] = true;
        return Jz;
      },
    });
    BD.ajaxPrefilter("json jsonp", function (Jz, JM, JX) {
      var JP;
      var JF;
      var Js;
      var Jy =
        Jz.jsonp !== false &&
        (JC.test(Jz.url)
          ? "url"
          : typeof Jz.data == "string" &&
            (Jz.contentType || "").indexOf(
              "application/x-www-form-urlencoded"
            ) === 0 &&
            JC.test(Jz.data) &&
            "data");
      if (Jy || Jz.dataTypes[0] === "jsonp") {
        JP = Jz.jsonpCallback = Bm(Jz.jsonpCallback)
          ? Jz.jsonpCallback()
          : Jz.jsonpCallback;
        if (Jy) {
          Jz[Jy] = Jz[Jy].replace(JC, "$1" + JP);
        } else if (Jz.jsonp !== false) {
          Jz.url += (JU.test(Jz.url) ? "&" : "?") + Jz.jsonp + "=" + JP;
        }
        Jz.converters["script json"] = function () {
          if (!Js) {
            BD.error(JP + " was not called");
          }
          return Js[0];
        };
        Jz.dataTypes[0] = "json";
        JF = B9[JP];
        B9[JP] = function () {
          Js = arguments;
        };
        JX.always(function () {
          if (JF === undefined) {
            BD(B9).removeProp(JP);
          } else {
            B9[JP] = JF;
          }
          if (Jz[JP]) {
            Jz.jsonpCallback = JM.jsonpCallback;
            Jl.push(JP);
          }
          if (Js && Bm(JF)) {
            JF(Js[0]);
          }
          Js = JF = undefined;
        });
        return "script";
      }
    });
    (Bh = BH.implementation.createHTMLDocument("").body).innerHTML =
      "<form></form><form></form>";
    Bn.createHTMLDocument = Bh.childNodes.length === 2;
    BD.parseHTML = function (Jz, JM, JX) {
      var JP;
      if (typeof Jz != "string") {
        return [];
      } else {
        if (typeof JM == "boolean") {
          JX = JM;
          JM = false;
        }
        if (!JM) {
          if (Bn.createHTMLDocument) {
            (JP = (JM = BH.implementation.createHTMLDocument("")).createElement(
              "base"
            )).href = BH.location.href;
            JM.head.appendChild(JP);
          } else {
            JM = BH;
          }
        }
        JP = !JX && [];
        if ((JX = Bc.exec(Jz))) {
          return [JM.createElement(JX[1])];
        } else {
          JX = mw([Jz], JM, JP);
          if (JP && JP.length) {
            BD(JP).remove();
          }
          return BD.merge([], JX.childNodes);
        }
      }
    };
    BD.fn.load = function (Jz, JM, JX) {
      var JP;
      var JF;
      var Js;
      var Jy = this;
      var JZ = Jz.indexOf(" ");
      if (JZ > -1) {
        JP = Jw(Jz.slice(JZ));
        Jz = Jz.slice(0, JZ);
      }
      if (Bm(JM)) {
        JX = JM;
        JM = undefined;
      } else if (JM && typeof JM == "object") {
        JF = "POST";
      }
      if (Jy.length > 0) {
        BD.ajax({
          url: Jz,
          type: JF || "GET",
          dataType: "html",
          data: JM,
        })
          .done(function (JG) {
            Js = arguments;
            Jy.html(JP ? BD("<div>").append(BD.parseHTML(JG)).find(JP) : JG);
          })
          .always(
            JX &&
              function (JG, Jv) {
                Jy.each(function () {
                  JX.apply(this, Js || [JG.responseText, Jv, JG]);
                });
              }
          );
      }
      return this;
    };
    BD.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (Jz, JM) {
        BD.fn[JM] = function (JX) {
          return this.on(JM, JX);
        };
      }
    );
    BD.expr.pseudos.animated = function (Jz) {
      return BD.grep(BD.timers, function (JM) {
        return Jz === JM.elem;
      }).length;
    };
    BD.offset = {
      setOffset: function (Jz, JM, JX) {
        var JP;
        var JF;
        var Js;
        var Jy;
        var JZ = BD.css(Jz, "position");
        var JG = BD(Jz);
        var Jv = {};
        if (JZ === "static") {
          Jz.style.position = "relative";
        }
        Js = JG.offset();
        JP = BD.css(Jz, "top");
        Jy = BD.css(Jz, "left");
        JZ =
          (JZ === "absolute" || JZ === "fixed") && (JP + Jy).indexOf("auto") > -1
            ? ((JF = (JZ = JG.position()).top), JZ.left)
            : ((JF = parseFloat(JP) || 0), parseFloat(Jy) || 0);
        if ((JM = Bm(JM) ? JM.call(Jz, JX, BD.extend({}, Js)) : JM).top != null) {
          Jv.top = JM.top - Js.top + JF;
        }
        if (JM.left != null) {
          Jv.left = JM.left - Js.left + JZ;
        }
        if ("using" in JM) {
          JM.using.call(Jz, Jv);
        } else {
          JG.css(Jv);
        }
      },
    };
    BD.fn.extend({
      offset: function (Jz) {
        var JM;
        var JX;
        if (arguments.length) {
          if (Jz === undefined) {
            return this;
          } else {
            return this.each(function (JP) {
              BD.offset.setOffset(this, Jz, JP);
            });
          }
        } else if ((JX = this[0])) {
          if (JX.getClientRects().length) {
            JM = JX.getBoundingClientRect();
            JX = JX.ownerDocument.defaultView;
            return {
              top: JM.top + JX.pageYOffset,
              left: JM.left + JX.pageXOffset,
            };
          } else {
            return {
              top: 0,
              left: 0,
            };
          }
        } else {
          return undefined;
        }
      },
      position: function () {
        if (this[0]) {
          var Jz;
          var JM;
          var JX;
          var JP = this[0];
          var JF = {
            top: 0,
            left: 0,
          };
          if (BD.css(JP, "position") === "fixed") {
            JM = JP.getBoundingClientRect();
          } else {
            JM = this.offset();
            JX = JP.ownerDocument;
            Jz = JP.offsetParent || JX.documentElement;
            while (
              Jz &&
              (Jz === JX.body || Jz === JX.documentElement) &&
              BD.css(Jz, "position") === "static"
            ) {
              Jz = Jz.parentNode;
            }
            if (Jz && Jz !== JP && Jz.nodeType === 1) {
              (JF = BD(Jz).offset()).top += BD.css(Jz, "borderTopWidth", true);
              JF.left += BD.css(Jz, "borderLeftWidth", true);
            }
          }
          return {
            top: JM.top - JF.top - BD.css(JP, "marginTop", true),
            left: JM.left - JF.left - BD.css(JP, "marginLeft", true),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var Jz = this.offsetParent;
            Jz && BD.css(Jz, "position") === "static";
  
          ) {
            Jz = Jz.offsetParent;
          }
          return Jz || mp;
        });
      },
    });
    BD.each(
      {
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset",
      },
      function (Jz, JM) {
        var JX = JM === "pageYOffset";
        BD.fn[Jz] = function (JP) {
          return BP(
            this,
            function (JF, Js, Jy) {
              var JZ;
              if (BJ(JF)) {
                JZ = JF;
              } else if (JF.nodeType === 9) {
                JZ = JF.defaultView;
              }
              if (Jy === undefined) {
                if (JZ) {
                  return JZ[JM];
                } else {
                  return JF[Js];
                }
              }
              if (JZ) {
                JZ.scrollTo(JX ? JZ.pageXOffset : Jy, JX ? Jy : JZ.pageYOffset);
              } else {
                JF[Js] = Jy;
              }
            },
            Jz,
            JP,
            arguments.length
          );
        };
      }
    );
    BD.each(["top", "left"], function (Jz, JM) {
      BD.cssHooks[JM] = mX(Bn.pixelPosition, function (JX, JP) {
        if (JP) {
          JP = mM(JX, JM);
          if (mC.test(JP)) {
            return BD(JX).position()[JM] + "px";
          } else {
            return JP;
          }
        }
      });
    });
    BD.each(
      {
        Height: "height",
        Width: "width",
      },
      function (Jz, JM) {
        BD.each(
          {
            padding: "inner" + Jz,
            content: JM,
            "": "outer" + Jz,
          },
          function (JX, JP) {
            BD.fn[JP] = function (JF, Js) {
              var Jy = arguments.length && (JX || typeof JF != "boolean");
              var JZ = JX || (JF === true || Js === true ? "margin" : "border");
              return BP(
                this,
                function (JG, Jv, JA) {
                  var JI;
                  if (BJ(JG)) {
                    if (JP.indexOf("outer") === 0) {
                      return JG["inner" + Jz];
                    } else {
                      return JG.document.documentElement["client" + Jz];
                    }
                  } else if (JG.nodeType === 9) {
                    JI = JG.documentElement;
                    return Math.max(
                      JG.body["scroll" + Jz],
                      JI["scroll" + Jz],
                      JG.body["offset" + Jz],
                      JI["offset" + Jz],
                      JI["client" + Jz]
                    );
                  } else if (JA === undefined) {
                    return BD.css(JG, Jv, JZ);
                  } else {
                    return BD.style(JG, Jv, JA, JZ);
                  }
                },
                JM,
                Jy ? JF : undefined,
                Jy
              );
            };
          }
        );
      }
    );
    BD.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (Jz, JM) {
        BD.fn[JM] = function (JX, JP) {
          if (arguments.length > 0) {
            return this.on(JM, null, JX, JP);
          } else {
            return this.trigger(JM);
          }
        };
      }
    );
    BD.fn.extend({
      hover: function (Jz, JM) {
        return this.mouseenter(Jz).mouseleave(JM || Jz);
      },
    });
    BD.fn.extend({
      bind: function (Jz, JM, JX) {
        return this.on(Jz, null, JM, JX);
      },
      unbind: function (Jz, JM) {
        return this.off(Jz, null, JM);
      },
      delegate: function (Jz, JM, JX, JP) {
        return this.on(JM, Jz, JX, JP);
      },
      undelegate: function (Jz, JM, JX) {
        if (arguments.length === 1) {
          return this.off(Jz, "**");
        } else {
          return this.off(JM, Jz || "**", JX);
        }
      },
    });
    BD.proxy = function (Jz, JM) {
      var JX;
      var JP;
      if (typeof JM == "string") {
        JP = Jz[JM];
        JM = Jz;
        Jz = JP;
      }
      if (Bm(Jz)) {
        JX = Bw.call(arguments, 2);
        (JP = function () {
          return Jz.apply(JM || this, JX.concat(Bw.call(arguments)));
        }).guid = Jz.guid = Jz.guid || BD.guid++;
        return JP;
      }
    };
    BD.holdReady = function (Jz) {
      if (Jz) {
        BD.readyWait++;
      } else {
        BD.ready(true);
      }
    };
    BD.isArray = Array.isArray;
    BD.parseJSON = JSON.parse;
    BD.nodeName = Bd;
    BD.isFunction = Bm;
    BD.isWindow = BJ;
    BD.camelCase = BZ;
    BD.type = Bo;
    BD.now = Date.now;
    BD.isNumeric = function (Jz) {
      var JM = BD.type(Jz);
      return (JM === "number" || JM === "string") && !isNaN(Jz - parseFloat(Jz));
    };
    if (typeof define == "function" && define.amd) {
      define("jquery", [], function () {
        return BD;
      });
    }
    var Jj = B9.jQuery;
    var Ji = B9.$;
    BD.noConflict = function (Jz) {
      if (B9.$ === BD) {
        B9.$ = Ji;
      }
      if (Jz && B9.jQuery === BD) {
        B9.jQuery = Jj;
      }
      return BD;
    };
    if (!BB) {
      B9.jQuery = B9.$ = BD;
    }
    return BD;
  });
  