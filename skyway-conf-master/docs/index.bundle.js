! function(e) {
  function t(t) {
      for (var n, o, c = t[0], s = t[1], l = t[2], f = 0, d = []; f < c.length; f++) o = c[f], Object.prototype.hasOwnProperty.call(a, o) && a[o] && d.push(a[o][0]), a[o] = 0;
      for (n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
      for (u && u(t); d.length;) d.shift()();
      return i.push.apply(i, l || []), r()
  }

  function r() {
      for (var e, t = 0; t < i.length; t++) {
          for (var r = i[t], n = !0, c = 1; c < r.length; c++) {
              var s = r[c];
              0 !== a[s] && (n = !1)
          }
          n && (i.splice(t--, 1), e = o(o.s = r[0]))
      }
      return e
  }
  var n = {},
      a = {
          2: 0
      },
      i = [];

  function o(t) {
      if (n[t]) return n[t].exports;
      var r = n[t] = {
          i: t,
          l: !1,
          exports: {}
      };
      return e[t].call(r.exports, r, r.exports, o), r.l = !0, r.exports
  }
  o.m = e, o.c = n, o.d = function(e, t, r) {
      o.o(e, t) || Object.defineProperty(e, t, {
          enumerable: !0,
          get: r
      })
  }, o.r = function(e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
      }), Object.defineProperty(e, "__esModule", {
          value: !0
      })
  }, o.t = function(e, t) {
      if (1 & t && (e = o(e)), 8 & t) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (o.r(r), Object.defineProperty(r, "default", {
              enumerable: !0,
              value: e
          }), 2 & t && "string" != typeof e)
          for (var n in e) o.d(r, n, function(t) {
              return e[t]
          }.bind(null, n));
      return r
  }, o.n = function(e) {
      var t = e && e.__esModule ? function() {
          return e.default
      } : function() {
          return e
      };
      return o.d(t, "a", t), t
  }, o.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
  }, o.p = "";
  var c = window.webpackJsonp = window.webpackJsonp || [],
      s = c.push.bind(c);
  c.push = t, c = c.slice();
  for (var l = 0; l < c.length; l++) t(c[l]);
  var u = s;
  i.push([31, 0]), r()
}([function(e, t, r) {
  "use strict";
  r.d(t, "b", (function() {
      return p.a
  })), r.d(t, "a", (function() {
      return C
  })), r.d(t, "c", (function() {
      return x
  })), r.d(t, "d", (function() {
      return A
  }));
  var n = r(13),
      a = r.n(n),
      i = r(1);
  var o = function() {
      function e(e) {
          this.isSpeedy = void 0 === e.speedy || e.speedy, this.tags = [], this.ctr = 0, this.nonce = e.nonce, this.key = e.key, this.container = e.container, this.before = null
      }
      var t = e.prototype;
      return t.insert = function(e) {
          if (this.ctr % (this.isSpeedy ? 65e3 : 1) == 0) {
              var t, r = function(e) {
                  var t = document.createElement("style");
                  return t.setAttribute("data-emotion", e.key), void 0 !== e.nonce && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t
              }(this);
              t = 0 === this.tags.length ? this.before : this.tags[this.tags.length - 1].nextSibling, this.container.insertBefore(r, t), this.tags.push(r)
          }
          var n = this.tags[this.tags.length - 1];
          if (this.isSpeedy) {
              var a = function(e) {
                  if (e.sheet) return e.sheet;
                  for (var t = 0; t < document.styleSheets.length; t++)
                      if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
              }(n);
              try {
                  var i = 105 === e.charCodeAt(1) && 64 === e.charCodeAt(0);
                  a.insertRule(e, i ? 0 : a.cssRules.length)
              } catch (e) {
                  0
              }
          } else n.appendChild(document.createTextNode(e));
          this.ctr++
      }, t.flush = function() {
          this.tags.forEach((function(e) {
              return e.parentNode.removeChild(e)
          })), this.tags = [], this.ctr = 0
      }, e
  }();
  var c = function(e) {
      function t(e, t, n) {
          var a = t.trim().split(b);
          t = a;
          var i = a.length,
              o = e.length;
          switch (o) {
              case 0:
              case 1:
                  var c = 0;
                  for (e = 0 === o ? "" : e[0] + " "; c < i; ++c) t[c] = r(e, t[c], n).trim();
                  break;
              default:
                  var s = c = 0;
                  for (t = []; c < i; ++c)
                      for (var l = 0; l < o; ++l) t[s++] = r(e[l] + " ", a[c], n).trim()
          }
          return t
      }

      function r(e, t, r) {
          var n = t.charCodeAt(0);
          switch (33 > n && (n = (t = t.trim()).charCodeAt(0)), n) {
              case 38:
                  return t.replace(p, "$1" + e.trim());
              case 58:
                  return e.trim() + t.replace(p, "$1" + e.trim());
              default:
                  if (0 < 1 * r && 0 < t.indexOf("\f")) return t.replace(p, (58 === e.charCodeAt(0) ? "" : "$1") + e.trim())
          }
          return e + t
      }

      function n(e, t, r, i) {
          var o = e + ";",
              c = 2 * t + 3 * r + 4 * i;
          if (944 === c) {
              e = o.indexOf(":", 9) + 1;
              var s = o.substring(e, o.length - 1).trim();
              return s = o.substring(0, e).trim() + s + ";", 1 === T || 2 === T && a(s, 1) ? "-webkit-" + s + s : s
          }
          if (0 === T || 2 === T && !a(o, 1)) return o;
          switch (c) {
              case 1015:
                  return 97 === o.charCodeAt(10) ? "-webkit-" + o + o : o;
              case 951:
                  return 116 === o.charCodeAt(3) ? "-webkit-" + o + o : o;
              case 963:
                  return 110 === o.charCodeAt(5) ? "-webkit-" + o + o : o;
              case 1009:
                  if (100 !== o.charCodeAt(4)) break;
              case 969:
              case 942:
                  return "-webkit-" + o + o;
              case 978:
                  return "-webkit-" + o + "-moz-" + o + o;
              case 1019:
              case 983:
                  return "-webkit-" + o + "-moz-" + o + "-ms-" + o + o;
              case 883:
                  if (45 === o.charCodeAt(8)) return "-webkit-" + o + o;
                  if (0 < o.indexOf("image-set(", 11)) return o.replace(j, "$1-webkit-$2") + o;
                  break;
              case 932:
                  if (45 === o.charCodeAt(4)) switch (o.charCodeAt(5)) {
                      case 103:
                          return "-webkit-box-" + o.replace("-grow", "") + "-webkit-" + o + "-ms-" + o.replace("grow", "positive") + o;
                      case 115:
                          return "-webkit-" + o + "-ms-" + o.replace("shrink", "negative") + o;
                      case 98:
                          return "-webkit-" + o + "-ms-" + o.replace("basis", "preferred-size") + o
                  }
                  return "-webkit-" + o + "-ms-" + o + o;
              case 964:
                  return "-webkit-" + o + "-ms-flex-" + o + o;
              case 1023:
                  if (99 !== o.charCodeAt(8)) break;
                  return "-webkit-box-pack" + (s = o.substring(o.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify")) + "-webkit-" + o + "-ms-flex-pack" + s + o;
              case 1005:
                  return d.test(o) ? o.replace(f, ":-webkit-") + o.replace(f, ":-moz-") + o : o;
              case 1e3:
                  switch (t = (s = o.substring(13).trim()).indexOf("-") + 1, s.charCodeAt(0) + s.charCodeAt(t)) {
                      case 226:
                          s = o.replace(y, "tb");
                          break;
                      case 232:
                          s = o.replace(y, "tb-rl");
                          break;
                      case 220:
                          s = o.replace(y, "lr");
                          break;
                      default:
                          return o
                  }
                  return "-webkit-" + o + "-ms-" + s + o;
              case 1017:
                  if (-1 === o.indexOf("sticky", 9)) break;
              case 975:
                  switch (t = (o = e).length - 10, c = (s = (33 === o.charCodeAt(t) ? o.substring(0, t) : o).substring(e.indexOf(":", 7) + 1).trim()).charCodeAt(0) + (0 | s.charCodeAt(7))) {
                      case 203:
                          if (111 > s.charCodeAt(8)) break;
                      case 115:
                          o = o.replace(s, "-webkit-" + s) + ";" + o;
                          break;
                      case 207:
                      case 102:
                          o = o.replace(s, "-webkit-" + (102 < c ? "inline-" : "") + "box") + ";" + o.replace(s, "-webkit-" + s) + ";" + o.replace(s, "-ms-" + s + "box") + ";" + o
                  }
                  return o + ";";
              case 938:
                  if (45 === o.charCodeAt(5)) switch (o.charCodeAt(6)) {
                      case 105:
                          return s = o.replace("-items", ""), "-webkit-" + o + "-webkit-box-" + s + "-ms-flex-" + s + o;
                      case 115:
                          return "-webkit-" + o + "-ms-flex-item-" + o.replace(O, "") + o;
                      default:
                          return "-webkit-" + o + "-ms-flex-line-pack" + o.replace("align-content", "").replace(O, "") + o
                  }
                  break;
              case 973:
              case 989:
                  if (45 !== o.charCodeAt(3) || 122 === o.charCodeAt(4)) break;
              case 931:
              case 953:
                  if (!0 === C.test(e)) return 115 === (s = e.substring(e.indexOf(":") + 1)).charCodeAt(0) ? n(e.replace("stretch", "fill-available"), t, r, i).replace(":fill-available", ":stretch") : o.replace(s, "-webkit-" + s) + o.replace(s, "-moz-" + s.replace("fill-", "")) + o;
                  break;
              case 962:
                  if (o = "-webkit-" + o + (102 === o.charCodeAt(5) ? "-ms-" + o : "") + o, 211 === r + i && 105 === o.charCodeAt(13) && 0 < o.indexOf("transform", 10)) return o.substring(0, o.indexOf(";", 27) + 1).replace(h, "$1-webkit-$2") + o
          }
          return o
      }

      function a(e, t) {
          var r = e.indexOf(1 === t ? ":" : "{"),
              n = e.substring(0, 3 !== t ? r : 10);
          return r = e.substring(r + 1, e.length - 1), P(2 !== t ? n : n.replace(x, "$1"), r, t)
      }

      function i(e, t) {
          var r = n(t, t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2));
          return r !== t + ";" ? r.replace(k, " or ($1)").substring(4) : "(" + t + ")"
      }

      function o(e, t, r, n, a, i, o, c, l, u) {
          for (var f, d = 0, h = t; d < z; ++d) switch (f = M[d].call(s, e, h, r, n, a, i, o, c, l, u)) {
              case void 0:
              case !1:
              case !0:
              case null:
                  break;
              default:
                  h = f
          }
          if (h !== t) return h
      }

      function c(e) {
          return void 0 !== (e = e.prefix) && (P = null, e ? "function" != typeof e ? T = 1 : (T = 2, P = e) : T = 0), c
      }

      function s(e, r) {
          var c = e;
          if (33 > c.charCodeAt(0) && (c = c.trim()), c = [c], 0 < z) {
              var s = o(-1, r, c, c, S, A, 0, 0, 0, 0);
              void 0 !== s && "string" == typeof s && (r = s)
          }
          var f = function e(r, c, s, f, d) {
              for (var h, b, p, y, k, O = 0, x = 0, C = 0, j = 0, M = 0, P = 0, $ = p = h = 0, I = 0, R = 0, L = 0, F = 0, W = s.length, D = W - 1, q = "", B = "", G = "", J = ""; I < W;) {
                  if (b = s.charCodeAt(I), I === D && 0 !== x + j + C + O && (0 !== x && (b = 47 === x ? 10 : 47), j = C = O = 0, W++, D++), 0 === x + j + C + O) {
                      if (I === D && (0 < R && (q = q.replace(u, "")), 0 < q.trim().length)) {
                          switch (b) {
                              case 32:
                              case 9:
                              case 59:
                              case 13:
                              case 10:
                                  break;
                              default:
                                  q += s.charAt(I)
                          }
                          b = 59
                      }
                      switch (b) {
                          case 123:
                              for (h = (q = q.trim()).charCodeAt(0), p = 1, F = ++I; I < W;) {
                                  switch (b = s.charCodeAt(I)) {
                                      case 123:
                                          p++;
                                          break;
                                      case 125:
                                          p--;
                                          break;
                                      case 47:
                                          switch (b = s.charCodeAt(I + 1)) {
                                              case 42:
                                              case 47:
                                                  e: {
                                                      for ($ = I + 1; $ < D; ++$) switch (s.charCodeAt($)) {
                                                          case 47:
                                                              if (42 === b && 42 === s.charCodeAt($ - 1) && I + 2 !== $) {
                                                                  I = $ + 1;
                                                                  break e
                                                              }
                                                              break;
                                                          case 10:
                                                              if (47 === b) {
                                                                  I = $ + 1;
                                                                  break e
                                                              }
                                                      }
                                                      I = $
                                                  }
                                          }
                                          break;
                                      case 91:
                                          b++;
                                      case 40:
                                          b++;
                                      case 34:
                                      case 39:
                                          for (; I++ < D && s.charCodeAt(I) !== b;);
                                  }
                                  if (0 === p) break;
                                  I++
                              }
                              switch (p = s.substring(F, I), 0 === h && (h = (q = q.replace(l, "").trim()).charCodeAt(0)), h) {
                                  case 64:
                                      switch (0 < R && (q = q.replace(u, "")), b = q.charCodeAt(1)) {
                                          case 100:
                                          case 109:
                                          case 115:
                                          case 45:
                                              R = c;
                                              break;
                                          default:
                                              R = E
                                      }
                                      if (F = (p = e(c, R, p, b, d + 1)).length, 0 < z && (k = o(3, p, R = t(E, q, L), c, S, A, F, b, d, f), q = R.join(""), void 0 !== k && 0 === (F = (p = k.trim()).length) && (b = 0, p = "")), 0 < F) switch (b) {
                                          case 115:
                                              q = q.replace(w, i);
                                          case 100:
                                          case 109:
                                          case 45:
                                              p = q + "{" + p + "}";
                                              break;
                                          case 107:
                                              p = (q = q.replace(m, "$1 $2")) + "{" + p + "}", p = 1 === T || 2 === T && a("@" + p, 3) ? "@-webkit-" + p + "@" + p : "@" + p;
                                              break;
                                          default:
                                              p = q + p, 112 === f && (B += p, p = "")
                                      } else p = "";
                                      break;
                                  default:
                                      p = e(c, t(c, q, L), p, f, d + 1)
                              }
                              G += p, p = L = R = $ = h = 0, q = "", b = s.charCodeAt(++I);
                              break;
                          case 125:
                          case 59:
                              if (1 < (F = (q = (0 < R ? q.replace(u, "") : q).trim()).length)) switch (0 === $ && (h = q.charCodeAt(0), 45 === h || 96 < h && 123 > h) && (F = (q = q.replace(" ", ":")).length), 0 < z && void 0 !== (k = o(1, q, c, r, S, A, B.length, f, d, f)) && 0 === (F = (q = k.trim()).length) && (q = "\0\0"), h = q.charCodeAt(0), b = q.charCodeAt(1), h) {
                                  case 0:
                                      break;
                                  case 64:
                                      if (105 === b || 99 === b) {
                                          J += q + s.charAt(I);
                                          break
                                      }
                                      default:
                                          58 !== q.charCodeAt(F - 1) && (B += n(q, h, b, q.charCodeAt(2)))
                              }
                              L = R = $ = h = 0, q = "", b = s.charCodeAt(++I)
                      }
                  }
                  switch (b) {
                      case 13:
                      case 10:
                          47 === x ? x = 0 : 0 === 1 + h && 107 !== f && 0 < q.length && (R = 1, q += "\0"), 0 < z * N && o(0, q, c, r, S, A, B.length, f, d, f), A = 1, S++;
                          break;
                      case 59:
                      case 125:
                          if (0 === x + j + C + O) {
                              A++;
                              break
                          }
                          default:
                              switch (A++, y = s.charAt(I), b) {
                                  case 9:
                                  case 32:
                                      if (0 === j + O + x) switch (M) {
                                          case 44:
                                          case 58:
                                          case 9:
                                          case 32:
                                              y = "";
                                              break;
                                          default:
                                              32 !== b && (y = " ")
                                      }
                                      break;
                                  case 0:
                                      y = "\\0";
                                      break;
                                  case 12:
                                      y = "\\f";
                                      break;
                                  case 11:
                                      y = "\\v";
                                      break;
                                  case 38:
                                      0 === j + x + O && (R = L = 1, y = "\f" + y);
                                      break;
                                  case 108:
                                      if (0 === j + x + O + _ && 0 < $) switch (I - $) {
                                          case 2:
                                              112 === M && 58 === s.charCodeAt(I - 3) && (_ = M);
                                          case 8:
                                              111 === P && (_ = P)
                                      }
                                      break;
                                  case 58:
                                      0 === j + x + O && ($ = I);
                                      break;
                                  case 44:
                                      0 === x + C + j + O && (R = 1, y += "\r");
                                      break;
                                  case 34:
                                  case 39:
                                      0 === x && (j = j === b ? 0 : 0 === j ? b : j);
                                      break;
                                  case 91:
                                      0 === j + x + C && O++;
                                      break;
                                  case 93:
                                      0 === j + x + C && O--;
                                      break;
                                  case 41:
                                      0 === j + x + O && C--;
                                      break;
                                  case 40:
                                      if (0 === j + x + O) {
                                          if (0 === h) switch (2 * M + 3 * P) {
                                              case 533:
                                                  break;
                                              default:
                                                  h = 1
                                          }
                                          C++
                                      }
                                      break;
                                  case 64:
                                      0 === x + C + j + O + $ + p && (p = 1);
                                      break;
                                  case 42:
                                  case 47:
                                      if (!(0 < j + O + C)) switch (x) {
                                          case 0:
                                              switch (2 * b + 3 * s.charCodeAt(I + 1)) {
                                                  case 235:
                                                      x = 47;
                                                      break;
                                                  case 220:
                                                      F = I, x = 42
                                              }
                                              break;
                                          case 42:
                                              47 === b && 42 === M && F + 2 !== I && (33 === s.charCodeAt(F + 2) && (B += s.substring(F, I + 1)), y = "", x = 0)
                                      }
                              }
                              0 === x && (q += y)
                  }
                  P = M, M = b, I++
              }
              if (0 < (F = B.length)) {
                  if (R = c, 0 < z && (void 0 !== (k = o(2, B, R, r, S, A, F, f, d, f)) && 0 === (B = k).length)) return J + B + G;
                  if (B = R.join(",") + "{" + B + "}", 0 != T * _) {
                      switch (2 !== T || a(B, 2) || (_ = 0), _) {
                          case 111:
                              B = B.replace(v, ":-moz-$1") + B;
                              break;
                          case 112:
                              B = B.replace(g, "::-webkit-input-$1") + B.replace(g, "::-moz-$1") + B.replace(g, ":-ms-input-$1") + B
                      }
                      _ = 0
                  }
              }
              return J + B + G
          }(E, c, r, 0, 0);
          return 0 < z && (void 0 !== (s = o(-2, f, c, c, S, A, f.length, 0, 0, 0)) && (f = s)), "", _ = 0, A = S = 1, f
      }
      var l = /^\0+/g,
          u = /[\0\r\f]/g,
          f = /: */g,
          d = /zoo|gra/,
          h = /([,: ])(transform)/g,
          b = /,\r+?/g,
          p = /([\t\r\n ])*\f?&/g,
          m = /@(k\w+)\s*(\S*)\s*/,
          g = /::(place)/g,
          v = /:(read-only)/g,
          y = /[svh]\w+-[tblr]{2}/,
          w = /\(\s*(.*)\s*\)/g,
          k = /([\s\S]*?);/g,
          O = /-self|flex-/g,
          x = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
          C = /stretch|:\s*\w+\-(?:conte|avail)/,
          j = /([^-])(image-set\()/,
          A = 1,
          S = 1,
          _ = 0,
          T = 1,
          E = [],
          M = [],
          z = 0,
          P = null,
          N = 0;
      return s.use = function e(t) {
          switch (t) {
              case void 0:
              case null:
                  z = M.length = 0;
                  break;
              default:
                  if ("function" == typeof t) M[z++] = t;
                  else if ("object" == typeof t)
                      for (var r = 0, n = t.length; r < n; ++r) e(t[r]);
                  else N = 0 | !!t
          }
          return e
      }, s.set = c, void 0 !== e && c(e), s
  };

  function s(e) {
      e && l.current.insert(e + "}")
  }
  var l = {
          current: null
      },
      u = function(e, t, r, n, a, i, o, c, u, f) {
          switch (e) {
              case 1:
                  switch (t.charCodeAt(0)) {
                      case 64:
                          return l.current.insert(t + ";"), "";
                      case 108:
                          if (98 === t.charCodeAt(2)) return ""
                  }
                  break;
              case 2:
                  if (0 === c) return t + "/*|*/";
                  break;
              case 3:
                  switch (c) {
                      case 102:
                      case 112:
                          return l.current.insert(r[0] + t), "";
                      default:
                          return t + (0 === f ? "/*|*/" : "")
                  }
                  case -2:
                      t.split("/*|*/}").forEach(s)
          }
      },
      f = function(e) {
          void 0 === e && (e = {});
          var t, r = e.key || "css";
          void 0 !== e.prefix && (t = {
              prefix: e.prefix
          });
          var n = new c(t);
          var a, i = {};
          a = e.container || document.head;
          var s, f = document.querySelectorAll("style[data-emotion-" + r + "]");
          Array.prototype.forEach.call(f, (function(e) {
              e.getAttribute("data-emotion-" + r).split(" ").forEach((function(e) {
                  i[e] = !0
              })), e.parentNode !== a && a.appendChild(e)
          })), n.use(e.stylisPlugins)(u), s = function(e, t, r, a) {
              var i = t.name;
              l.current = r, n(e, t.styles), a && (d.inserted[i] = !0)
          };
          var d = {
              key: r,
              sheet: new o({
                  key: r,
                  container: a,
                  nonce: e.nonce,
                  speedy: e.speedy
              }),
              nonce: e.nonce,
              inserted: i,
              registered: {},
              insert: s
          };
          return d
      };

  function d(e, t, r) {
      var n = "";
      return r.split(" ").forEach((function(r) {
          void 0 !== e[r] ? t.push(e[r]) : n += r + " "
      })), n
  }
  var h = function(e, t, r) {
          var n = e.key + "-" + t.name;
          if (!1 === r && void 0 === e.registered[n] && (e.registered[n] = t.styles), void 0 === e.inserted[t.name]) {
              var a = t;
              do {
                  e.insert("." + n, a, e.sheet, !0);
                  a = a.next
              } while (void 0 !== a)
          }
      },
      b = r(9),
      p = r(8),
      m = Object(i.createContext)("undefined" != typeof HTMLElement ? f() : null),
      g = Object(i.createContext)({}),
      v = (m.Provider, function(e) {
          return Object(i.forwardRef)((function(t, r) {
              return Object(i.createElement)(m.Consumer, null, (function(n) {
                  return e(t, n, r)
              }))
          }))
      }),
      y = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
      w = Object.prototype.hasOwnProperty,
      k = function(e, t, r, n) {
          var a = null === r ? t.css : t.css(r);
          "string" == typeof a && void 0 !== e.registered[a] && (a = e.registered[a]);
          var o = t[y],
              c = [a],
              s = "";
          "string" == typeof t.className ? s = d(e.registered, c, t.className) : null != t.className && (s = t.className + " ");
          var l = Object(b.a)(c);
          h(e, l, "string" == typeof o);
          s += e.key + "-" + l.name;
          var u = {};
          for (var f in t) w.call(t, f) && "css" !== f && f !== y && (u[f] = t[f]);
          return u.ref = n, u.className = s, Object(i.createElement)(o, u)
      },
      O = v((function(e, t, r) {
          return "function" == typeof e.css ? Object(i.createElement)(g.Consumer, null, (function(n) {
              return k(t, e, n, r)
          })) : k(t, e, null, r)
      }));
  var x = function(e, t) {
          var r = arguments;
          if (null == t || !w.call(t, "css")) return i.createElement.apply(void 0, r);
          var n = r.length,
              a = new Array(n);
          a[0] = O;
          var o = {};
          for (var c in t) w.call(t, c) && (o[c] = t[c]);
          o[y] = e, a[1] = o;
          for (var s = 2; s < n; s++) a[s] = r[s];
          return i.createElement.apply(null, a)
      },
      C = v((function(e, t) {
          var r = e.styles;
          if ("function" == typeof r) return Object(i.createElement)(g.Consumer, null, (function(e) {
              var n = Object(b.a)([r(e)]);
              return Object(i.createElement)(j, {
                  serialized: n,
                  cache: t
              })
          }));
          var n = Object(b.a)([r]);
          return Object(i.createElement)(j, {
              serialized: n,
              cache: t
          })
      })),
      j = function(e) {
          function t(t, r, n) {
              return e.call(this, t, r, n) || this
          }
          a()(t, e);
          var r = t.prototype;
          return r.componentDidMount = function() {
              this.sheet = new o({
                  key: this.props.cache.key + "-global",
                  nonce: this.props.cache.sheet.nonce,
                  container: this.props.cache.sheet.container
              });
              var e = document.querySelector("style[data-emotion-" + this.props.cache.key + '="' + this.props.serialized.name + '"]');
              null !== e && this.sheet.tags.push(e), this.props.cache.sheet.tags.length && (this.sheet.before = this.props.cache.sheet.tags[0]), this.insertStyles()
          }, r.componentDidUpdate = function(e) {
              e.serialized.name !== this.props.serialized.name && this.insertStyles()
          }, r.insertStyles = function() {
              if (void 0 !== this.props.serialized.next && h(this.props.cache, this.props.serialized.next, !0), this.sheet.tags.length) {
                  var e = this.sheet.tags[this.sheet.tags.length - 1].nextElementSibling;
                  this.sheet.before = e, this.sheet.flush()
              }
              this.props.cache.insert("", this.props.serialized, this.sheet, !1)
          }, r.componentWillUnmount = function() {
              this.sheet.flush()
          }, r.render = function() {
              return null
          }, t
      }(i.Component),
      A = function() {
          var e = p.a.apply(void 0, arguments),
              t = "animation-" + e.name;
          return {
              name: t,
              styles: "@keyframes " + t + "{" + e.styles + "}",
              anim: 1,
              toString: function() {
                  return "_EMO_" + this.name + "_" + this.styles + "_EMO_"
              }
          }
      },
      S = function e(t) {
          for (var r = t.length, n = 0, a = ""; n < r; n++) {
              var i = t[n];
              if (null != i) {
                  var o = void 0;
                  switch (typeof i) {
                      case "boolean":
                          break;
                      case "object":
                          if (Array.isArray(i)) o = e(i);
                          else
                              for (var c in o = "", i) i[c] && c && (o && (o += " "), o += c);
                          break;
                      default:
                          o = i
                  }
                  o && (a && (a += " "), a += o)
              }
          }
          return a
      };

  function _(e, t, r) {
      var n = [],
          a = d(e, n, r);
      return n.length < 2 ? r : a + t(n)
  }
  v((function(e, t) {
      return Object(i.createElement)(g.Consumer, null, (function(r) {
          var n = function() {
                  for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                  var a = Object(b.a)(r, t.registered);
                  return h(t, a, !1), t.key + "-" + a.name
              },
              a = {
                  css: n,
                  cx: function() {
                      for (var e = arguments.length, r = new Array(e), a = 0; a < e; a++) r[a] = arguments[a];
                      return _(t.registered, n, S(r))
                  },
                  theme: r
              },
              i = e.children(a);
          return !0, i
      }))
  }))
}, , , function(e, t, r) {
  "use strict";
  r.d(t, "b", (function() {
      return a
  })), r.d(t, "c", (function() {
      return i
  })), r.d(t, "a", (function() {
      return o
  })), r.d(t, "d", (function() {
      return c
  }));
  var n = r(0);
  const a = 16,
      i = {
          blue: "#005ece",
          lightblue: "#039be5",
          red: "#ff6673",
          gray: "#eee",
          white: "#fff",
          black: "#111"
      },
      o = {
          moveBackground: n.d `
    0% { background-position: top left; }
  100% { background-position: top right; }
`
      },
      c = Object(n.b)({
          html: {
              WebkitFontSmoothing: "antialiased"
          },
          body: {
              margin: 0,
              fontSize: a,
              fontFamily: '"Open Sans", sans-serif',
              fontWeight: "lighter",
              lineHeight: 1.5,
              height: "100vh",
              background: `linear-gradient(45deg, ${i.lightblue}, ${i.blue})`
          },
          "#app-root": {
              height: "100vh",
              overflow: "hidden"
          }
      }, ";label:globalStyle;")
}, , , , , function(e, t, r) {
  "use strict";
  var n = r(9);
  t.a = function() {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
      return Object(n.a)(t)
  }
}, function(e, t, r) {
  "use strict";
  r.d(t, "a", (function() {
      return b
  }));
  var n = function(e) {
          for (var t, r = e.length, n = r ^ r, a = 0; r >= 4;) t = 1540483477 * (65535 & (t = 255 & e.charCodeAt(a) | (255 & e.charCodeAt(++a)) << 8 | (255 & e.charCodeAt(++a)) << 16 | (255 & e.charCodeAt(++a)) << 24)) + ((1540483477 * (t >>> 16) & 65535) << 16), n = 1540483477 * (65535 & n) + ((1540483477 * (n >>> 16) & 65535) << 16) ^ (t = 1540483477 * (65535 & (t ^= t >>> 24)) + ((1540483477 * (t >>> 16) & 65535) << 16)), r -= 4, ++a;
          switch (r) {
              case 3:
                  n ^= (255 & e.charCodeAt(a + 2)) << 16;
              case 2:
                  n ^= (255 & e.charCodeAt(a + 1)) << 8;
              case 1:
                  n = 1540483477 * (65535 & (n ^= 255 & e.charCodeAt(a))) + ((1540483477 * (n >>> 16) & 65535) << 16)
          }
          return n = 1540483477 * (65535 & (n ^= n >>> 13)) + ((1540483477 * (n >>> 16) & 65535) << 16), ((n ^= n >>> 15) >>> 0).toString(36)
      },
      a = {
          animationIterationCount: 1,
          borderImageOutset: 1,
          borderImageSlice: 1,
          borderImageWidth: 1,
          boxFlex: 1,
          boxFlexGroup: 1,
          boxOrdinalGroup: 1,
          columnCount: 1,
          columns: 1,
          flex: 1,
          flexGrow: 1,
          flexPositive: 1,
          flexShrink: 1,
          flexNegative: 1,
          flexOrder: 1,
          gridRow: 1,
          gridRowEnd: 1,
          gridRowSpan: 1,
          gridRowStart: 1,
          gridColumn: 1,
          gridColumnEnd: 1,
          gridColumnSpan: 1,
          gridColumnStart: 1,
          msGridRow: 1,
          msGridRowSpan: 1,
          msGridColumn: 1,
          msGridColumnSpan: 1,
          fontWeight: 1,
          lineHeight: 1,
          opacity: 1,
          order: 1,
          orphans: 1,
          tabSize: 1,
          widows: 1,
          zIndex: 1,
          zoom: 1,
          WebkitLineClamp: 1,
          fillOpacity: 1,
          floodOpacity: 1,
          stopOpacity: 1,
          strokeDasharray: 1,
          strokeDashoffset: 1,
          strokeMiterlimit: 1,
          strokeOpacity: 1,
          strokeWidth: 1
      };
  var i = /[A-Z]|^ms/g,
      o = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
      c = function(e) {
          return 45 === e.charCodeAt(1)
      },
      s = function(e) {
          return null != e && "boolean" != typeof e
      },
      l = function(e) {
          var t = {};
          return function(r) {
              return void 0 === t[r] && (t[r] = e(r)), t[r]
          }
      }((function(e) {
          return c(e) ? e : e.replace(i, "-$&").toLowerCase()
      })),
      u = function(e, t) {
          switch (e) {
              case "animation":
              case "animationName":
                  if ("string" == typeof t) return t.replace(o, (function(e, t, r) {
                      return d = {
                          name: t,
                          styles: r,
                          next: d
                      }, t
                  }))
          }
          return 1 === a[e] || c(e) || "number" != typeof t || 0 === t ? t : t + "px"
      };

  function f(e, t, r, n) {
      if (null == r) return "";
      if (void 0 !== r.__emotion_styles) return r;
      switch (typeof r) {
          case "boolean":
              return "";
          case "object":
              if (1 === r.anim) return d = {
                  name: r.name,
                  styles: r.styles,
                  next: d
              }, r.name;
              if (void 0 !== r.styles) {
                  var a = r.next;
                  if (void 0 !== a)
                      for (; void 0 !== a;) d = {
                          name: a.name,
                          styles: a.styles,
                          next: d
                      }, a = a.next;
                  return r.styles + ";"
              }
              return function(e, t, r) {
                  var n = "";
                  if (Array.isArray(r))
                      for (var a = 0; a < r.length; a++) n += f(e, t, r[a], !1);
                  else
                      for (var i in r) {
                          var o = r[i];
                          if ("object" != typeof o) null != t && void 0 !== t[o] ? n += i + "{" + t[o] + "}" : s(o) && (n += l(i) + ":" + u(i, o) + ";");
                          else if (!Array.isArray(o) || "string" != typeof o[0] || null != t && void 0 !== t[o[0]]) {
                              var c = f(e, t, o, !1);
                              switch (i) {
                                  case "animation":
                                  case "animationName":
                                      n += l(i) + ":" + c + ";";
                                      break;
                                  default:
                                      n += i + "{" + c + "}"
                              }
                          } else
                              for (var d = 0; d < o.length; d++) s(o[d]) && (n += l(i) + ":" + u(i, o[d]) + ";")
                      }
                  return n
              }(e, t, r);
          case "function":
              if (void 0 !== e) {
                  var i = d,
                      o = r(e);
                  return d = i, f(e, t, o, n)
              }
              break;
          case "string":
      }
      if (null == t) return r;
      var c = t[r];
      return void 0 === c || n ? r : c
  }
  var d, h = /label:\s*([^\s;\n{]+)\s*;/g;
  var b = function(e, t, r) {
      if (1 === e.length && "object" == typeof e[0] && null !== e[0] && void 0 !== e[0].styles) return e[0];
      var a = !0,
          i = "";
      d = void 0;
      var o = e[0];
      null == o || void 0 === o.raw ? (a = !1, i += f(r, t, o, !1)) : i += o[0];
      for (var c = 1; c < e.length; c++) i += f(r, t, e[c], 46 === i.charCodeAt(i.length - 1)), a && (i += o[c]);
      h.lastIndex = 0;
      for (var s, l = ""; null !== (s = h.exec(i));) l += "-" + s[1];
      return {
          name: n(i) + l,
          styles: i,
          next: d
      }
  }
}, function(e, t, r) {
  "use strict";
  r.d(t, "b", (function() {
      return n
  })), r.d(t, "c", (function() {
      return a
  })), r.d(t, "d", (function() {
      return i
  })), r.d(t, "a", (function() {
      return o
  }));
  const n = e => "sfu" === e || "mesh" === e,
      a = 16,
      i = "^[0-9a-z_-]{4,16}$",
      o = e => new RegExp(i).test(e)
}, , function(e) {
  e.exports = JSON.parse('{"a":"skyway-conference-dev","b":"3.0.1"}')
}, function(e, t) {
  e.exports = function(e, t) {
      e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
  }
}, , , function(e, t, r) {
  "use strict";
  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
  var n = Object.getOwnPropertySymbols,
      a = Object.prototype.hasOwnProperty,
      i = Object.prototype.propertyIsEnumerable;

  function o(e) {
      if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
      return Object(e)
  }
  e.exports = function() {
      try {
          if (!Object.assign) return !1;
          var e = new String("abc");
          if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
          for (var t = {}, r = 0; r < 10; r++) t["_" + String.fromCharCode(r)] = r;
          if ("0123456789" !== Object.getOwnPropertyNames(t).map((function(e) {
                  return t[e]
              })).join("")) return !1;
          var n = {};
          return "abcdefghijklmnopqrst".split("").forEach((function(e) {
              n[e] = e
          })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
      } catch (e) {
          return !1
      }
  }() ? Object.assign : function(e, t) {
      for (var r, c, s = o(e), l = 1; l < arguments.length; l++) {
          for (var u in r = Object(arguments[l])) a.call(r, u) && (s[u] = r[u]);
          if (n) {
              c = n(r);
              for (var f = 0; f < c.length; f++) i.call(r, c[f]) && (s[c[f]] = r[c[f]])
          }
      }
      return s
  }
}, function(e, t, r) {
  "use strict";
  /** @license React v0.19.1
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var n, a, i, o, c;
  if ("undefined" == typeof window || "function" != typeof MessageChannel) {
      var s = null,
          l = null,
          u = function() {
              if (null !== s) try {
                  var e = t.unstable_now();
                  s(!0, e), s = null
              } catch (e) {
                  throw setTimeout(u, 0), e
              }
          },
          f = Date.now();
      t.unstable_now = function() {
          return Date.now() - f
      }, n = function(e) {
          null !== s ? setTimeout(n, 0, e) : (s = e, setTimeout(u, 0))
      }, a = function(e, t) {
          l = setTimeout(e, t)
      }, i = function() {
          clearTimeout(l)
      }, o = function() {
          return !1
      }, c = t.unstable_forceFrameRate = function() {}
  } else {
      var d = window.performance,
          h = window.Date,
          b = window.setTimeout,
          p = window.clearTimeout;
      if ("undefined" != typeof console) {
          var m = window.cancelAnimationFrame;
          "function" != typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"), "function" != typeof m && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")
      }
      if ("object" == typeof d && "function" == typeof d.now) t.unstable_now = function() {
          return d.now()
      };
      else {
          var g = h.now();
          t.unstable_now = function() {
              return h.now() - g
          }
      }
      var v = !1,
          y = null,
          w = -1,
          k = 5,
          O = 0;
      o = function() {
          return t.unstable_now() >= O
      }, c = function() {}, t.unstable_forceFrameRate = function(e) {
          0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported") : k = 0 < e ? Math.floor(1e3 / e) : 5
      };
      var x = new MessageChannel,
          C = x.port2;
      x.port1.onmessage = function() {
          if (null !== y) {
              var e = t.unstable_now();
              O = e + k;
              try {
                  y(!0, e) ? C.postMessage(null) : (v = !1, y = null)
              } catch (e) {
                  throw C.postMessage(null), e
              }
          } else v = !1
      }, n = function(e) {
          y = e, v || (v = !0, C.postMessage(null))
      }, a = function(e, r) {
          w = b((function() {
              e(t.unstable_now())
          }), r)
      }, i = function() {
          p(w), w = -1
      }
  }

  function j(e, t) {
      var r = e.length;
      e.push(t);
      e: for (;;) {
          var n = r - 1 >>> 1,
              a = e[n];
          if (!(void 0 !== a && 0 < _(a, t))) break e;
          e[n] = t, e[r] = a, r = n
      }
  }

  function A(e) {
      return void 0 === (e = e[0]) ? null : e
  }

  function S(e) {
      var t = e[0];
      if (void 0 !== t) {
          var r = e.pop();
          if (r !== t) {
              e[0] = r;
              e: for (var n = 0, a = e.length; n < a;) {
                  var i = 2 * (n + 1) - 1,
                      o = e[i],
                      c = i + 1,
                      s = e[c];
                  if (void 0 !== o && 0 > _(o, r)) void 0 !== s && 0 > _(s, o) ? (e[n] = s, e[c] = r, n = c) : (e[n] = o, e[i] = r, n = i);
                  else {
                      if (!(void 0 !== s && 0 > _(s, r))) break e;
                      e[n] = s, e[c] = r, n = c
                  }
              }
          }
          return t
      }
      return null
  }

  function _(e, t) {
      var r = e.sortIndex - t.sortIndex;
      return 0 !== r ? r : e.id - t.id
  }
  var T = [],
      E = [],
      M = 1,
      z = null,
      P = 3,
      N = !1,
      $ = !1,
      I = !1;

  function R(e) {
      for (var t = A(E); null !== t;) {
          if (null === t.callback) S(E);
          else {
              if (!(t.startTime <= e)) break;
              S(E), t.sortIndex = t.expirationTime, j(T, t)
          }
          t = A(E)
      }
  }

  function L(e) {
      if (I = !1, R(e), !$)
          if (null !== A(T)) $ = !0, n(F);
          else {
              var t = A(E);
              null !== t && a(L, t.startTime - e)
          }
  }

  function F(e, r) {
      $ = !1, I && (I = !1, i()), N = !0;
      var n = P;
      try {
          for (R(r), z = A(T); null !== z && (!(z.expirationTime > r) || e && !o());) {
              var c = z.callback;
              if (null !== c) {
                  z.callback = null, P = z.priorityLevel;
                  var s = c(z.expirationTime <= r);
                  r = t.unstable_now(), "function" == typeof s ? z.callback = s : z === A(T) && S(T), R(r)
              } else S(T);
              z = A(T)
          }
          if (null !== z) var l = !0;
          else {
              var u = A(E);
              null !== u && a(L, u.startTime - r), l = !1
          }
          return l
      } finally {
          z = null, P = n, N = !1
      }
  }

  function W(e) {
      switch (e) {
          case 1:
              return -1;
          case 2:
              return 250;
          case 5:
              return 1073741823;
          case 4:
              return 1e4;
          default:
              return 5e3
      }
  }
  var D = c;
  t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(e) {
      e.callback = null
  }, t.unstable_continueExecution = function() {
      $ || N || ($ = !0, n(F))
  }, t.unstable_getCurrentPriorityLevel = function() {
      return P
  }, t.unstable_getFirstCallbackNode = function() {
      return A(T)
  }, t.unstable_next = function(e) {
      switch (P) {
          case 1:
          case 2:
          case 3:
              var t = 3;
              break;
          default:
              t = P
      }
      var r = P;
      P = t;
      try {
          return e()
      } finally {
          P = r
      }
  }, t.unstable_pauseExecution = function() {}, t.unstable_requestPaint = D, t.unstable_runWithPriority = function(e, t) {
      switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
              break;
          default:
              e = 3
      }
      var r = P;
      P = e;
      try {
          return t()
      } finally {
          P = r
      }
  }, t.unstable_scheduleCallback = function(e, r, o) {
      var c = t.unstable_now();
      if ("object" == typeof o && null !== o) {
          var s = o.delay;
          s = "number" == typeof s && 0 < s ? c + s : c, o = "number" == typeof o.timeout ? o.timeout : W(e)
      } else o = W(e), s = c;
      return e = {
          id: M++,
          callback: r,
          priorityLevel: e,
          startTime: s,
          expirationTime: o = s + o,
          sortIndex: -1
      }, s > c ? (e.sortIndex = s, j(E, e), null === A(T) && e === A(E) && (I ? i() : I = !0, a(L, s - c))) : (e.sortIndex = o, j(T, e), $ || N || ($ = !0, n(F))), e
  }, t.unstable_shouldYield = function() {
      var e = t.unstable_now();
      R(e);
      var r = A(T);
      return r !== z && null !== z && null !== r && null !== r.callback && r.startTime <= e && r.expirationTime < z.expirationTime || o()
  }, t.unstable_wrapCallback = function(e) {
      var t = P;
      return function() {
          var r = P;
          P = t;
          try {
              return e.apply(this, arguments)
          } finally {
              P = r
          }
      }
  }
}, function(e, t) {
  var r, n, a = e.exports = {};

  function i() {
      throw new Error("setTimeout has not been defined")
  }

  function o() {
      throw new Error("clearTimeout has not been defined")
  }

  function c(e) {
      if (r === setTimeout) return setTimeout(e, 0);
      if ((r === i || !r) && setTimeout) return r = setTimeout, setTimeout(e, 0);
      try {
          return r(e, 0)
      } catch (t) {
          try {
              return r.call(null, e, 0)
          } catch (t) {
              return r.call(this, e, 0)
          }
      }
  }! function() {
      try {
          r = "function" == typeof setTimeout ? setTimeout : i
      } catch (e) {
          r = i
      }
      try {
          n = "function" == typeof clearTimeout ? clearTimeout : o
      } catch (e) {
          n = o
      }
  }();
  var s, l = [],
      u = !1,
      f = -1;

  function d() {
      u && s && (u = !1, s.length ? l = s.concat(l) : f = -1, l.length && h())
  }

  function h() {
      if (!u) {
          var e = c(d);
          u = !0;
          for (var t = l.length; t;) {
              for (s = l, l = []; ++f < t;) s && s[f].run();
              f = -1, t = l.length
          }
          s = null, u = !1,
              function(e) {
                  if (n === clearTimeout) return clearTimeout(e);
                  if ((n === o || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
                  try {
                      n(e)
                  } catch (t) {
                      try {
                          return n.call(null, e)
                      } catch (t) {
                          return n.call(this, e)
                      }
                  }
              }(e)
      }
  }

  function b(e, t) {
      this.fun = e, this.array = t
  }

  function p() {}
  a.nextTick = function(e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
          for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
      l.push(new b(e, t)), 1 !== l.length || u || c(h)
  }, b.prototype.run = function() {
      this.fun.apply(null, this.array)
  }, a.title = "browser", a.browser = !0, a.env = {}, a.argv = [], a.version = "", a.versions = {}, a.on = p, a.addListener = p, a.once = p, a.off = p, a.removeListener = p, a.removeAllListeners = p, a.emit = p, a.prependListener = p, a.prependOnceListener = p, a.listeners = function(e) {
      return []
  }, a.binding = function(e) {
      throw new Error("process.binding is not supported")
  }, a.cwd = function() {
      return "/"
  }, a.chdir = function(e) {
      throw new Error("process.chdir is not supported")
  }, a.umask = function() {
      return 0
  }
}, function(e, t, r) {
  "use strict";
  e.exports = r(17)
}, function(e, t) {
  var r = 1e3,
      n = 6e4,
      a = 60 * n,
      i = 24 * a;

  function o(e, t, r, n) {
      var a = t >= 1.5 * r;
      return Math.round(e / r) + " " + n + (a ? "s" : "")
  }
  e.exports = function(e, t) {
      t = t || {};
      var c = typeof e;
      if ("string" === c && e.length > 0) return function(e) {
          if ((e = String(e)).length > 100) return;
          var t = /^((?:\d+)?\-?\d?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
          if (!t) return;
          var o = parseFloat(t[1]);
          switch ((t[2] || "ms").toLowerCase()) {
              case "years":
              case "year":
              case "yrs":
              case "yr":
              case "y":
                  return 315576e5 * o;
              case "weeks":
              case "week":
              case "w":
                  return 6048e5 * o;
              case "days":
              case "day":
              case "d":
                  return o * i;
              case "hours":
              case "hour":
              case "hrs":
              case "hr":
              case "h":
                  return o * a;
              case "minutes":
              case "minute":
              case "mins":
              case "min":
              case "m":
                  return o * n;
              case "seconds":
              case "second":
              case "secs":
              case "sec":
              case "s":
                  return o * r;
              case "milliseconds":
              case "millisecond":
              case "msecs":
              case "msec":
              case "ms":
                  return o;
              default:
                  return
          }
      }(e);
      if ("number" === c && !1 === isNaN(e)) return t.long ? function(e) {
          var t = Math.abs(e);
          if (t >= i) return o(e, t, i, "day");
          if (t >= a) return o(e, t, a, "hour");
          if (t >= n) return o(e, t, n, "minute");
          if (t >= r) return o(e, t, r, "second");
          return e + " ms"
      }(e) : function(e) {
          var t = Math.abs(e);
          if (t >= i) return Math.round(e / i) + "d";
          if (t >= a) return Math.round(e / a) + "h";
          if (t >= n) return Math.round(e / n) + "m";
          if (t >= r) return Math.round(e / r) + "s";
          return e + "ms"
      }(e);
      throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
  }
}, , , , , , , , , , , function(e, t, r) {
  "use strict";
  r.r(t);
  var n = r(1),
      a = r(14),
      i = r(0),
      o = r(6),
      c = r.n(o),
      s = r(12),
      l = r(3);
  var u = ({
      children: e
  }) => Object(i.c)("div", {
      css: f
  }, Object(i.c)("h1", {
      css: h
  }, "COCNO Live"), Object(i.c)("p", {
      css: b
  }, ""), Object(i.c)("div", {
      css: d
  }, e), Object(i.c)("p", {
      css: b
  }, "4人以下はsfu:5人以上はmeshを選んでください"), Object(i.c)("a", {
      css: p,
      href: "",
      target: "_blank",
      rel: "noopener noreferrer"
  }, Object(i.c)("img", {
      src: "",
      alt: ""
  })));
  const f = Object(i.b)({
          background: "#eedcb3",
          backgroundSize: "cover",
          animation: l.a.moveBackground + " 30s linear infinite alternate",
          height: "100vh",
          position: "relative",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
      }, ";label:wrapperStyle;"),
      d = {
          name: "1bt27t6-contentStyle",
          styles: "width:90%;max-width:400px;margin:0 auto;;label:contentStyle;"
      },
      h = Object(i.b)({
          margin: 0,
          marginBottom: -8,
          color: l.c.lightblue,
          fontSize: "2.5rem"
      }, ";label:headStyle;"),
      b = Object(i.b)({
          margin: "16px auto",
          color: l.c.lightblue,
          fontSize: "1.2rem"
      }, ";label:pStyle;"),
      p = {
          name: "192nr37-logoStyle",
          styles: "position:absolute;bottom:10px;right:10px;& > img{height:40px;};label:logoStyle;"
      };
  var m = r(10);
  var g = e => {
      const [t, r] = Object(n.useState)(""), [a, o] = Object(n.useState)("sfu"), [c, s] = Object(n.useState)(!0);
      return Object(i.c)("form", {
          css: v,
          onSubmit: r => {
              r.preventDefault(), e.onSubmit({
                  mode: a,
                  id: t
              })
          }
      }, Object(i.c)("div", {
          css: y
      }, Object(i.c)("div", null, "ルームID"), Object(i.c)("input", {
          type: "text",
          value: t,
          placeholder: "ルーム名を入力",
          onChange: e => r(e.target.value),
          onBlur: () => s(Object(m.a)(t)),
          required: !0,
          maxLength: m.c,
          pattern: m.d,
          css: w
      })), Object(i.c)("span", {
          css: k
      }, c ? "" : "半角英数4文字以上16文字以下"), Object(i.c)("div", {
          css: y
      }, Object(i.c)("div", null, "人数"), Object(i.c)("div", null,["sfu", "mesh"].map(e => Object(i.c)("label", {
          key: e,
          css: O
      }, Object(i.c)("input", {
          type: "radio",
          onChange: () => o(e),
          value: a,
          checked: a === e,
          name: "room-type"
      }), " ", e)))), Object(i.c)("div", {
          css: x
      }, Object(i.c)("button", {
          css: C,
          type: "submit",
          disabled: !Object(m.a)(t)
      }, "部屋に参加")))
  };
  const v = Object(i.b)({
          backgroundColor: l.c.white,
          border: "1px solid " + l.c.gray,
          padding: 16,
          borderRadius: 2
      }, ";label:wrapperStyle;"),
      y = {
          name: "gz04jy-itemStyle",
          styles: "display:grid;align-items:center;grid-template-columns:88px 1fr;height:40px;margin-bottom:4px;;label:itemStyle;"
      },
      w = Object(i.b)({
          width: "100%",
          boxSizing: "border-box",
          appearance: "none",
          border: 0,
          borderBottom: "1px solid " + l.c.gray,
          fontSize: "1.2rem",
          padding: "4px 8px",
          "&:focus": {
              borderColor: l.c.blue
          }
      }, ";label:roomIdStyle;"),
      k = Object(i.b)({
          color: l.c.red,
          fontSize: ".8rem"
      }, ";label:tipStyle;"),
      O = {
          name: "1cytv4i-roomTypeStyle",
          styles: "margin:0 8px;font-size:1.2rem;& > input{vertical-align:middle;};label:roomTypeStyle;"
      },
      x = {
          name: "hqok2y-buttonWrapStyle",
          styles: "margin-top:24px;;label:buttonWrapStyle;"
      },
      C = Object(i.b)({
          backgroundColor: l.c.blue,
          color: l.c.white,
          height: 40,
          border: 0,
          cursor: "pointer",
          padding: "0 24px",
          fontSize: "1.2rem",
          borderRadius: 2,
          "&:disabled": {
              backgroundColor: l.c.gray,
              cursor: "not-allowed"
          }
      }, ";label:createButtonStyle;");
  var j = () => {
      const e = {
          enterConference(e) {
              location.href = `conf.html#!/${e.mode}/${e.id}`
          }
      };
      return Object(i.c)(u, null, Object(i.c)(g, {
          onSubmit: t => e.enterConference(t)
      }))
  };
  const A = c()("main");
  (async () => {
      A(`${s.a} v${s.b}`), document.title += " v" + s.b, Object(a.render)(Object(i.c)(n.StrictMode, null, Object(i.c)(i.a, {
          styles: l.d
      }), Object(i.c)(j, null)), document.getElementById("app-root"))
  })().catch(e => console.error(e))
}]);