! function(e) {
  function t(t) {
      for (var r, o, s = t[0], c = t[1], l = t[2], u = 0, b = []; u < s.length; u++) o = s[u], Object.prototype.hasOwnProperty.call(i, o) && i[o] && b.push(i[o][0]), i[o] = 0;
      for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
      for (d && d(t); b.length;) b.shift()();
      return a.push.apply(a, l || []), n()
  }

  function n() {
      for (var e, t = 0; t < a.length; t++) {
          for (var n = a[t], r = !0, s = 1; s < n.length; s++) {
              var c = n[s];
              0 !== i[c] && (r = !1)
          }
          r && (a.splice(t--, 1), e = o(o.s = n[0]))
      }
      return e
  }
  var r = {},
      i = {
          1: 0
      },
      a = [];

  function o(t) {
      if (r[t]) return r[t].exports;
      var n = r[t] = {
          i: t,
          l: !1,
          exports: {}
      };
      return e[t].call(n.exports, n, n.exports, o), n.l = !0, n.exports
  }
  o.m = e, o.c = r, o.d = function(e, t, n) {
      o.o(e, t) || Object.defineProperty(e, t, {
          enumerable: !0,
          get: n
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
      var n = Object.create(null);
      if (o.r(n), Object.defineProperty(n, "default", {
              enumerable: !0,
              value: e
          }), 2 & t && "string" != typeof e)
          for (var r in e) o.d(n, r, function(t) {
              return e[t]
          }.bind(null, r));
      return n
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
  var s = window.webpackJsonp = window.webpackJsonp || [],
      c = s.push.bind(s);
  s.push = t, s = s.slice();
  for (var l = 0; l < s.length; l++) t(s[l]);
  var d = c;
  a.push([30, 0]), n()
}([function(e, t, n) {
          "use strict";
          n.d(t, "b", (function() {
              return f.a
          })), n.d(t, "a", (function() {
              return C
          })), n.d(t, "c", (function() {
              return j
          })), n.d(t, "d", (function() {
              return x
          }));
          var r = n(13),
              i = n.n(r),
              a = n(1);
          var o = function() {
              function e(e) {
                  this.isSpeedy = void 0 === e.speedy || e.speedy, this.tags = [], this.ctr = 0, this.nonce = e.nonce, this.key = e.key, this.container = e.container, this.before = null
              }
              var t = e.prototype;
              return t.insert = function(e) {
                  if (this.ctr % (this.isSpeedy ? 65e3 : 1) == 0) {
                      var t, n = function(e) {
                          var t = document.createElement("style");
                          return t.setAttribute("data-emotion", e.key), void 0 !== e.nonce && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t
                      }(this);
                      t = 0 === this.tags.length ? this.before : this.tags[this.tags.length - 1].nextSibling, this.container.insertBefore(n, t), this.tags.push(n)
                  }
                  var r = this.tags[this.tags.length - 1];
                  if (this.isSpeedy) {
                      var i = function(e) {
                          if (e.sheet) return e.sheet;
                          for (var t = 0; t < document.styleSheets.length; t++)
                              if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
                      }(r);
                      try {
                          var a = 105 === e.charCodeAt(1) && 64 === e.charCodeAt(0);
                          i.insertRule(e, a ? 0 : i.cssRules.length)
                      } catch (e) {
                          0
                      }
                  } else r.appendChild(document.createTextNode(e));
                  this.ctr++
              }, t.flush = function() {
                  this.tags.forEach((function(e) {
                      return e.parentNode.removeChild(e)
                  })), this.tags = [], this.ctr = 0
              }, e
          }();
          var s = function(e) {
              function t(e, t, r) {
                  var i = t.trim().split(p);
                  t = i;
                  var a = i.length,
                      o = e.length;
                  switch (o) {
                      case 0:
                      case 1:
                          var s = 0;
                          for (e = 0 === o ? "" : e[0] + " "; s < a; ++s) t[s] = n(e, t[s], r).trim();
                          break;
                      default:
                          var c = s = 0;
                          for (t = []; s < a; ++s)
                              for (var l = 0; l < o; ++l) t[c++] = n(e[l] + " ", i[s], r).trim()
                  }
                  return t
              }

              function n(e, t, n) {
                  var r = t.charCodeAt(0);
                  switch (33 > r && (r = (t = t.trim()).charCodeAt(0)), r) {
                      case 38:
                          return t.replace(f, "$1" + e.trim());
                      case 58:
                          return e.trim() + t.replace(f, "$1" + e.trim());
                      default:
                          if (0 < 1 * n && 0 < t.indexOf("\f")) return t.replace(f, (58 === e.charCodeAt(0) ? "" : "$1") + e.trim())
                  }
                  return e + t
              }

              function r(e, t, n, a) {
                  var o = e + ";",
                      s = 2 * t + 3 * n + 4 * a;
                  if (944 === s) {
                      e = o.indexOf(":", 9) + 1;
                      var c = o.substring(e, o.length - 1).trim();
                      return c = o.substring(0, e).trim() + c + ";", 1 === A || 2 === A && i(c, 1) ? "-webkit-" + c + c : c
                  }
                  if (0 === A || 2 === A && !i(o, 1)) return o;
                  switch (s) {
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
                          if (0 < o.indexOf("image-set(", 11)) return o.replace(S, "$1-webkit-$2") + o;
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
                          return "-webkit-box-pack" + (c = o.substring(o.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify")) + "-webkit-" + o + "-ms-flex-pack" + c + o;
                      case 1005:
                          return b.test(o) ? o.replace(u, ":-webkit-") + o.replace(u, ":-moz-") + o : o;
                      case 1e3:
                          switch (t = (c = o.substring(13).trim()).indexOf("-") + 1, c.charCodeAt(0) + c.charCodeAt(t)) {
                              case 226:
                                  c = o.replace(y, "tb");
                                  break;
                              case 232:
                                  c = o.replace(y, "tb-rl");
                                  break;
                              case 220:
                                  c = o.replace(y, "lr");
                                  break;
                              default:
                                  return o
                          }
                          return "-webkit-" + o + "-ms-" + c + o;
                      case 1017:
                          if (-1 === o.indexOf("sticky", 9)) break;
                      case 975:
                          switch (t = (o = e).length - 10, s = (c = (33 === o.charCodeAt(t) ? o.substring(0, t) : o).substring(e.indexOf(":", 7) + 1).trim()).charCodeAt(0) + (0 | c.charCodeAt(7))) {
                              case 203:
                                  if (111 > c.charCodeAt(8)) break;
                              case 115:
                                  o = o.replace(c, "-webkit-" + c) + ";" + o;
                                  break;
                              case 207:
                              case 102:
                                  o = o.replace(c, "-webkit-" + (102 < s ? "inline-" : "") + "box") + ";" + o.replace(c, "-webkit-" + c) + ";" + o.replace(c, "-ms-" + c + "box") + ";" + o
                          }
                          return o + ";";
                      case 938:
                          if (45 === o.charCodeAt(5)) switch (o.charCodeAt(6)) {
                              case 105:
                                  return c = o.replace("-items", ""), "-webkit-" + o + "-webkit-box-" + c + "-ms-flex-" + c + o;
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
                          if (!0 === C.test(e)) return 115 === (c = e.substring(e.indexOf(":") + 1)).charCodeAt(0) ? r(e.replace("stretch", "fill-available"), t, n, a).replace(":fill-available", ":stretch") : o.replace(c, "-webkit-" + c) + o.replace(c, "-moz-" + c.replace("fill-", "")) + o;
                          break;
                      case 962:
                          if (o = "-webkit-" + o + (102 === o.charCodeAt(5) ? "-ms-" + o : "") + o, 211 === n + a && 105 === o.charCodeAt(13) && 0 < o.indexOf("transform", 10)) return o.substring(0, o.indexOf(";", 27) + 1).replace(h, "$1-webkit-$2") + o
                  }
                  return o
              }

              function i(e, t) {
                  var n = e.indexOf(1 === t ? ":" : "{"),
                      r = e.substring(0, 3 !== t ? n : 10);
                  return n = e.substring(n + 1, e.length - 1), R(2 !== t ? r : r.replace(j, "$1"), n, t)
              }

              function a(e, t) {
                  var n = r(t, t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2));
                  return n !== t + ";" ? n.replace(k, " or ($1)").substring(4) : "(" + t + ")"
              }

              function o(e, t, n, r, i, a, o, s, l, d) {
                  for (var u, b = 0, h = t; b < M; ++b) switch (u = E[b].call(c, e, h, n, r, i, a, o, s, l, d)) {
                      case void 0:
                      case !1:
                      case !0:
                      case null:
                          break;
                      default:
                          h = u
                  }
                  if (h !== t) return h
              }

              function s(e) {
                  return void 0 !== (e = e.prefix) && (R = null, e ? "function" != typeof e ? A = 1 : (A = 2, R = e) : A = 0), s
              }

              function c(e, n) {
                  var s = e;
                  if (33 > s.charCodeAt(0) && (s = s.trim()), s = [s], 0 < M) {
                      var c = o(-1, n, s, s, T, x, 0, 0, 0, 0);
                      void 0 !== c && "string" == typeof c && (n = c)
                  }
                  var u = function e(n, s, c, u, b) {
                      for (var h, p, f, y, k, O = 0, j = 0, C = 0, S = 0, E = 0, R = 0, _ = f = h = 0, $ = 0, N = 0, z = 0, L = 0, P = c.length, F = P - 1, U = "", q = "", J = "", G = ""; $ < P;) {
                          if (p = c.charCodeAt($), $ === F && 0 !== j + S + C + O && (0 !== j && (p = 47 === j ? 10 : 47), S = C = O = 0, P++, F++), 0 === j + S + C + O) {
                              if ($ === F && (0 < N && (U = U.replace(d, "")), 0 < U.trim().length)) {
                                  switch (p) {
                                      case 32:
                                      case 9:
                                      case 59:
                                      case 13:
                                      case 10:
                                          break;
                                      default:
                                          U += c.charAt($)
                                  }
                                  p = 59
                              }
                              switch (p) {
                                  case 123:
                                      for (h = (U = U.trim()).charCodeAt(0), f = 1, L = ++$; $ < P;) {
                                          switch (p = c.charCodeAt($)) {
                                              case 123:
                                                  f++;
                                                  break;
                                              case 125:
                                                  f--;
                                                  break;
                                              case 47:
                                                  switch (p = c.charCodeAt($ + 1)) {
                                                      case 42:
                                                      case 47:
                                                          e: {
                                                              for (_ = $ + 1; _ < F; ++_) switch (c.charCodeAt(_)) {
                                                                  case 47:
                                                                      if (42 === p && 42 === c.charCodeAt(_ - 1) && $ + 2 !== _) {
                                                                          $ = _ + 1;
                                                                          break e
                                                                      }
                                                                      break;
                                                                  case 10:
                                                                      if (47 === p) {
                                                                          $ = _ + 1;
                                                                          break e
                                                                      }
                                                              }
                                                              $ = _
                                                          }
                                                  }
                                                  break;
                                              case 91:
                                                  p++;
                                              case 40:
                                                  p++;
                                              case 34:
                                              case 39:
                                                  for (; $++ < F && c.charCodeAt($) !== p;);
                                          }
                                          if (0 === f) break;
                                          $++
                                      }
                                      switch (f = c.substring(L, $), 0 === h && (h = (U = U.replace(l, "").trim()).charCodeAt(0)), h) {
                                          case 64:
                                              switch (0 < N && (U = U.replace(d, "")), p = U.charCodeAt(1)) {
                                                  case 100:
                                                  case 109:
                                                  case 115:
                                                  case 45:
                                                      N = s;
                                                      break;
                                                  default:
                                                      N = D
                                              }
                                              if (L = (f = e(s, N, f, p, b + 1)).length, 0 < M && (k = o(3, f, N = t(D, U, z), s, T, x, L, p, b, u), U = N.join(""), void 0 !== k && 0 === (L = (f = k.trim()).length) && (p = 0, f = "")), 0 < L) switch (p) {
                                                  case 115:
                                                      U = U.replace(w, a);
                                                  case 100:
                                                  case 109:
                                                  case 45:
                                                      f = U + "{" + f + "}";
                                                      break;
                                                  case 107:
                                                      f = (U = U.replace(m, "$1 $2")) + "{" + f + "}", f = 1 === A || 2 === A && i("@" + f, 3) ? "@-webkit-" + f + "@" + f : "@" + f;
                                                      break;
                                                  default:
                                                      f = U + f, 112 === u && (q += f, f = "")
                                              } else f = "";
                                              break;
                                          default:
                                              f = e(s, t(s, U, z), f, u, b + 1)
                                      }
                                      J += f, f = z = N = _ = h = 0, U = "", p = c.charCodeAt(++$);
                                      break;
                                  case 125:
                                  case 59:
                                      if (1 < (L = (U = (0 < N ? U.replace(d, "") : U).trim()).length)) switch (0 === _ && (h = U.charCodeAt(0), 45 === h || 96 < h && 123 > h) && (L = (U = U.replace(" ", ":")).length), 0 < M && void 0 !== (k = o(1, U, s, n, T, x, q.length, u, b, u)) && 0 === (L = (U = k.trim()).length) && (U = "\0\0"), h = U.charCodeAt(0), p = U.charCodeAt(1), h) {
                                          case 0:
                                              break;
                                          case 64:
                                              if (105 === p || 99 === p) {
                                                  G += U + c.charAt($);
                                                  break
                                              }
                                              default:
                                                  58 !== U.charCodeAt(L - 1) && (q += r(U, h, p, U.charCodeAt(2)))
                                      }
                                      z = N = _ = h = 0, U = "", p = c.charCodeAt(++$)
                              }
                          }
                          switch (p) {
                              case 13:
                              case 10:
                                  47 === j ? j = 0 : 0 === 1 + h && 107 !== u && 0 < U.length && (N = 1, U += "\0"), 0 < M * V && o(0, U, s, n, T, x, q.length, u, b, u), x = 1, T++;
                                  break;
                              case 59:
                              case 125:
                                  if (0 === j + S + C + O) {
                                      x++;
                                      break
                                  }
                                  default:
                                      switch (x++, y = c.charAt($), p) {
                                          case 9:
                                          case 32:
                                              if (0 === S + O + j) switch (E) {
                                                  case 44:
                                                  case 58:
                                                  case 9:
                                                  case 32:
                                                      y = "";
                                                      break;
                                                  default:
                                                      32 !== p && (y = " ")
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
                                              0 === S + j + O && (N = z = 1, y = "\f" + y);
                                              break;
                                          case 108:
                                              if (0 === S + j + O + I && 0 < _) switch ($ - _) {
                                                  case 2:
                                                      112 === E && 58 === c.charCodeAt($ - 3) && (I = E);
                                                  case 8:
                                                      111 === R && (I = R)
                                              }
                                              break;
                                          case 58:
                                              0 === S + j + O && (_ = $);
                                              break;
                                          case 44:
                                              0 === j + C + S + O && (N = 1, y += "\r");
                                              break;
                                          case 34:
                                          case 39:
                                              0 === j && (S = S === p ? 0 : 0 === S ? p : S);
                                              break;
                                          case 91:
                                              0 === S + j + C && O++;
                                              break;
                                          case 93:
                                              0 === S + j + C && O--;
                                              break;
                                          case 41:
                                              0 === S + j + O && C--;
                                              break;
                                          case 40:
                                              if (0 === S + j + O) {
                                                  if (0 === h) switch (2 * E + 3 * R) {
                                                      case 533:
                                                          break;
                                                      default:
                                                          h = 1
                                                  }
                                                  C++
                                              }
                                              break;
                                          case 64:
                                              0 === j + C + S + O + _ + f && (f = 1);
                                              break;
                                          case 42:
                                          case 47:
                                              if (!(0 < S + O + C)) switch (j) {
                                                  case 0:
                                                      switch (2 * p + 3 * c.charCodeAt($ + 1)) {
                                                          case 235:
                                                              j = 47;
                                                              break;
                                                          case 220:
                                                              L = $, j = 42
                                                      }
                                                      break;
                                                  case 42:
                                                      47 === p && 42 === E && L + 2 !== $ && (33 === c.charCodeAt(L + 2) && (q += c.substring(L, $ + 1)), y = "", j = 0)
                                              }
                                      }
                                      0 === j && (U += y)
                          }
                          R = E, E = p, $++
                      }
                      if (0 < (L = q.length)) {
                          if (N = s, 0 < M && (void 0 !== (k = o(2, q, N, n, T, x, L, u, b, u)) && 0 === (q = k).length)) return G + q + J;
                          if (q = N.join(",") + "{" + q + "}", 0 != A * I) {
                              switch (2 !== A || i(q, 2) || (I = 0), I) {
                                  case 111:
                                      q = q.replace(g, ":-moz-$1") + q;
                                      break;
                                  case 112:
                                      q = q.replace(v, "::-webkit-input-$1") + q.replace(v, "::-moz-$1") + q.replace(v, ":-ms-input-$1") + q
                              }
                              I = 0
                          }
                      }
                      return G + q + J
                  }(D, s, n, 0, 0);
                  return 0 < M && (void 0 !== (c = o(-2, u, s, s, T, x, u.length, 0, 0, 0)) && (u = c)), "", I = 0, x = T = 1, u
              }
              var l = /^\0+/g,
                  d = /[\0\r\f]/g,
                  u = /: */g,
                  b = /zoo|gra/,
                  h = /([,: ])(transform)/g,
                  p = /,\r+?/g,
                  f = /([\t\r\n ])*\f?&/g,
                  m = /@(k\w+)\s*(\S*)\s*/,
                  v = /::(place)/g,
                  g = /:(read-only)/g,
                  y = /[svh]\w+-[tblr]{2}/,
                  w = /\(\s*(.*)\s*\)/g,
                  k = /([\s\S]*?);/g,
                  O = /-self|flex-/g,
                  j = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
                  C = /stretch|:\s*\w+\-(?:conte|avail)/,
                  S = /([^-])(image-set\()/,
                  x = 1,
                  T = 1,
                  I = 0,
                  A = 1,
                  D = [],
                  E = [],
                  M = 0,
                  R = null,
                  V = 0;
              return c.use = function e(t) {
                  switch (t) {
                      case void 0:
                      case null:
                          M = E.length = 0;
                          break;
                      default:
                          if ("function" == typeof t) E[M++] = t;
                          else if ("object" == typeof t)
                              for (var n = 0, r = t.length; n < r; ++n) e(t[n]);
                          else V = 0 | !!t
                  }
                  return e
              }, c.set = s, void 0 !== e && s(e), c
          };

          function c(e) {
              e && l.current.insert(e + "}")
          }
          var l = {
                  current: null
              },
              d = function(e, t, n, r, i, a, o, s, d, u) {
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
                          if (0 === s) return t + "/*|*/";
                          break;
                      case 3:
                          switch (s) {
                              case 102:
                              case 112:
                                  return l.current.insert(n[0] + t), "";
                              default:
                                  return t + (0 === u ? "/*|*/" : "")
                          }
                          case -2:
                              t.split("/*|*/}").forEach(c)
                  }
              },
              u = function(e) {
                  void 0 === e && (e = {});
                  var t, n = e.key || "css";
                  void 0 !== e.prefix && (t = {
                      prefix: e.prefix
                  });
                  var r = new s(t);
                  var i, a = {};
                  i = e.container || document.head;
                  var c, u = document.querySelectorAll("style[data-emotion-" + n + "]");
                  Array.prototype.forEach.call(u, (function(e) {
                      e.getAttribute("data-emotion-" + n).split(" ").forEach((function(e) {
                          a[e] = !0
                      })), e.parentNode !== i && i.appendChild(e)
                  })), r.use(e.stylisPlugins)(d), c = function(e, t, n, i) {
                      var a = t.name;
                      l.current = n, r(e, t.styles), i && (b.inserted[a] = !0)
                  };
                  var b = {
                      key: n,
                      sheet: new o({
                          key: n,
                          container: i,
                          nonce: e.nonce,
                          speedy: e.speedy
                      }),
                      nonce: e.nonce,
                      inserted: a,
                      registered: {},
                      insert: c
                  };
                  return b
              };

          function b(e, t, n) {
              var r = "";
              return n.split(" ").forEach((function(n) {
                  void 0 !== e[n] ? t.push(e[n]) : r += n + " "
              })), r
          }
          var h = function(e, t, n) {
                  var r = e.key + "-" + t.name;
                  if (!1 === n && void 0 === e.registered[r] && (e.registered[r] = t.styles), void 0 === e.inserted[t.name]) {
                      var i = t;
                      do {
                          e.insert("." + r, i, e.sheet, !0);
                          i = i.next
                      } while (void 0 !== i)
                  }
              },
              p = n(9),
              f = n(8),
              m = Object(a.createContext)("undefined" != typeof HTMLElement ? u() : null),
              v = Object(a.createContext)({}),
              g = (m.Provider, function(e) {
                  return Object(a.forwardRef)((function(t, n) {
                      return Object(a.createElement)(m.Consumer, null, (function(r) {
                          return e(t, r, n)
                      }))
                  }))
              }),
              y = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
              w = Object.prototype.hasOwnProperty,
              k = function(e, t, n, r) {
                  var i = null === n ? t.css : t.css(n);
                  "string" == typeof i && void 0 !== e.registered[i] && (i = e.registered[i]);
                  var o = t[y],
                      s = [i],
                      c = "";
                  "string" == typeof t.className ? c = b(e.registered, s, t.className) : null != t.className && (c = t.className + " ");
                  var l = Object(p.a)(s);
                  h(e, l, "string" == typeof o);
                  c += e.key + "-" + l.name;
                  var d = {};
                  for (var u in t) w.call(t, u) && "css" !== u && u !== y && (d[u] = t[u]);
                  return d.ref = r, d.className = c, Object(a.createElement)(o, d)
              },
              O = g((function(e, t, n) {
                  return "function" == typeof e.css ? Object(a.createElement)(v.Consumer, null, (function(r) {
                      return k(t, e, r, n)
                  })) : k(t, e, null, n)
              }));
          var j = function(e, t) {
                  var n = arguments;
                  if (null == t || !w.call(t, "css")) return a.createElement.apply(void 0, n);
                  var r = n.length,
                      i = new Array(r);
                  i[0] = O;
                  var o = {};
                  for (var s in t) w.call(t, s) && (o[s] = t[s]);
                  o[y] = e, i[1] = o;
                  for (var c = 2; c < r; c++) i[c] = n[c];
                  return a.createElement.apply(null, i)
              },
              C = g((function(e, t) {
                  var n = e.styles;
                  if ("function" == typeof n) return Object(a.createElement)(v.Consumer, null, (function(e) {
                      var r = Object(p.a)([n(e)]);
                      return Object(a.createElement)(S, {
                          serialized: r,
                          cache: t
                      })
                  }));
                  var r = Object(p.a)([n]);
                  return Object(a.createElement)(S, {
                      serialized: r,
                      cache: t
                  })
              })),
              S = function(e) {
                  function t(t, n, r) {
                      return e.call(this, t, n, r) || this
                  }
                  i()(t, e);
                  var n = t.prototype;
                  return n.componentDidMount = function() {
                      this.sheet = new o({
                          key: this.props.cache.key + "-global",
                          nonce: this.props.cache.sheet.nonce,
                          container: this.props.cache.sheet.container
                      });
                      var e = document.querySelector("style[data-emotion-" + this.props.cache.key + '="' + this.props.serialized.name + '"]');
                      null !== e && this.sheet.tags.push(e), this.props.cache.sheet.tags.length && (this.sheet.before = this.props.cache.sheet.tags[0]), this.insertStyles()
                  }, n.componentDidUpdate = function(e) {
                      e.serialized.name !== this.props.serialized.name && this.insertStyles()
                  }, n.insertStyles = function() {
                      if (void 0 !== this.props.serialized.next && h(this.props.cache, this.props.serialized.next, !0), this.sheet.tags.length) {
                          var e = this.sheet.tags[this.sheet.tags.length - 1].nextElementSibling;
                          this.sheet.before = e, this.sheet.flush()
                      }
                      this.props.cache.insert("", this.props.serialized, this.sheet, !1)
                  }, n.componentWillUnmount = function() {
                      this.sheet.flush()
                  }, n.render = function() {
                      return null
                  }, t
              }(a.Component),
              x = function() {
                  var e = f.a.apply(void 0, arguments),
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
              T = function e(t) {
                  for (var n = t.length, r = 0, i = ""; r < n; r++) {
                      var a = t[r];
                      if (null != a) {
                          var o = void 0;
                          switch (typeof a) {
                              case "boolean":
                                  break;
                              case "object":
                                  if (Array.isArray(a)) o = e(a);
                                  else
                                      for (var s in o = "", a) a[s] && s && (o && (o += " "), o += s);
                                  break;
                              default:
                                  o = a
                          }
                          o && (i && (i += " "), i += o)
                      }
                  }
                  return i
              };

          function I(e, t, n) {
              var r = [],
                  i = b(e, r, n);
              return r.length < 2 ? n : i + t(r)
          }
          g((function(e, t) {
              return Object(a.createElement)(v.Consumer, null, (function(n) {
                  var r = function() {
                          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                          var i = Object(p.a)(n, t.registered);
                          return h(t, i, !1), t.key + "-" + i.name
                      },
                      i = {
                          css: r,
                          cx: function() {
                              for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                              return I(t.registered, r, T(n))
                          },
                          theme: n
                      },
                      a = e.children(i);
                  return !0, a
              }))
          }))
      }, , , function(e, t, n) {
          "use strict";
          n.d(t, "b", (function() {
              return i
          })), n.d(t, "c", (function() {
              return a
          })), n.d(t, "a", (function() {
              return o
          })), n.d(t, "d", (function() {
              return s
          }));
          var r = n(0);
          const i = 16,
              a = {
                  blue: "#005ece",
                  lightblue: "#039be5",
                  red: "#ff6673",
                  gray: "#eee",
                  white: "#fff",
                  black: "#111"
              },
              o = {
                  moveBackground: r.d `
    0% { background-position: top left; }
  100% { background-position: top right; }
`
              },
              s = Object(r.b)({
                  html: {
                      WebkitFontSmoothing: "antialiased"
                  },
                  body: {
                      margin: 0,
                      fontSize: i,
                      fontFamily: '"Open Sans", sans-serif',
                      fontWeight: "lighter",
                      lineHeight: 1.5,
                      height: "100vh",
                      background: `linear-gradient(45deg, ${a.lightblue}, ${a.blue})`
                  },
                  "#app-root": {
                      height: "100vh",
                      overflow: "hidden"
                  }
              }, ";label:globalStyle;")
      }, function(e, t, n) {
          "use strict";
          n.d(t, "b", (function() {
              return a
          })), n.d(t, "a", (function() {
              return o
          })), n.d(t, "c", (function() {
              return s
          }));
          n(1);
          var r = n(0),
              i = n(3);
          const a = ({
                  name: e,
                  showEdge: t
              }) => Object(r.c)("i", {
                  className: "material-icons",
                  css: t ? [c, l] : c
              }, e),
              o = ({
                  name: e,
                  version: t
              }) => {
                  let n = null;
                  switch (e) {
                      case "Chrome":
                      case "Firefox":
                      case "Safari":
                          n = `./images/conf/icon-${e.toLowerCase()}.svg`;
                          break;
                      case "Microsoft Edge":
                          n = "./images/conf/icon-edge.svg"
                  }
                  const i = `${e} v${t}`;
                  return null !== n ? Object(r.c)("img", {
                      css: d,
                      src: n,
                      alt: i,
                      title: i
                  }) : Object(r.c)(a, {
                      name: "info"
                  })
              },
              s = ({
                  name: e,
                  showEdge: t,
                  title: n,
                  disabled: i,
                  onClick: o
              }) => Object(r.c)("button", {
                  disabled: i,
                  onClick: o,
                  title: n,
                  css: i ? [u, b] : u
              }, Object(r.c)(a, {
                  name: e,
                  showEdge: t
              })),
              c = Object(r.b)({
                  fontSize: i.b
              }, ";label:iconStyle;"),
              l = Object(r.b)({
                  textShadow: "0 0 1px " + i.c.black
              }, ";label:edgedStyle;"),
              d = Object(r.b)({
                  height: i.b
              }, ";label:imgStyle;"),
              u = Object(r.b)({
                  padding: "0 1px",
                  height: i.b,
                  appearance: "none",
                  border: "none",
                  background: "none",
                  color: "inherit",
                  cursor: "pointer"
              }, ";label:buttonStyle;"),
              b = {
                  name: "1bk4rpo-disabledStyle",
                  styles: "opacity:0.6;cursor:not-allowed;;label:disabledStyle;"
              }
      }, function(e, t, n) {
          "use strict";
          n.d(t, "d", (function() {
              return r
          })), n.d(t, "a", (function() {
              return i
          })), n.d(t, "c", (function() {
              return a
          })), n.d(t, "b", (function() {
              return o
          }));
          const r = {
                  base: 10,
                  modal: 100,
                  notification: 1e3
              },
              i = window.innerWidth > 767 ? 600 : 300,
              a = 250,
              o = 32
      }, , function(e, t, n) {
          "use strict";
          n.d(t, "a", (function() {
              return g
          }));
          var r = n(1),
              i = n(2);
          class a {
              constructor() {
                  this.error = null, this.isSettingsOpen = !0, this.isChatOpen = !1, this.isReactionOpen = !1, this.isStatsOpen = !1, this.isReEntering = !1
              }
              showError(e) {
                  return this.error = e, e
              }
          }
          Object(i.e)(a, {
              error: i.g.ref,
              isSettingsOpen: i.g,
              isChatOpen: i.g,
              isReactionOpen: i.g,
              isStatsOpen: i.g,
              isReEntering: i.g,
              showError: i.b
          });
          var o = a,
              s = n(22);
          class c {
              constructor() {
                  this.hasGetDisplayMedia = !1, this.hasUserVideoDevice = !1, this.isReady = !1, this.displayName = "YOUR_NAME", this.parsedBrowser = null
              }
              get isDisplayNameValid() {
                  return "" !== this.displayName.trim()
              }
              get stat() {
                  return {
                      displayName: this.displayName,
                      browser: this.browser
                  }
              }
              get browser() {
                  const {
                      parsedBrowser: e
                  } = this;
                  return null === e ? {
                      name: "N/A",
                      version: "0.0.0"
                  } : {
                      name: e.browser.name || "unknown",
                      version: e.browser.version || "0.0.0"
                  }
              }
              load({
                  name: e,
                  ua: t,
                  hasGetDisplayMedia: n,
                  hasUserVideoDevice: r
              }) {
                  this.hasGetDisplayMedia = n, this.hasUserVideoDevice = r, this.isReady = !0, 0 !== e.length && (this.displayName = e), this.parsedBrowser = Object(s.parse)(t)
              }
          }
          Object(i.e)(c, {
              hasGetDisplayMedia: i.g,
              hasUserVideoDevice: i.g,
              isReady: i.g,
              displayName: i.g,
              parsedBrowser: i.g.ref,
              isDisplayNameValid: i.c,
              stat: i.c,
              browser: i.c,
              load: i.b
          });
          var l = c;
          class d {
              constructor() {
                  this.audioInDevices = [], this.videoInDevices = [], this.audioDeviceId = null, this.videoDeviceId = null, this.isVideoTrackMuted = !1, this.isAudioTrackMuted = !1, this.videoType = null, this.audioTrack = null, this.videoTrack = null
              }
              get isAudioEnabled() {
                  return 0 !== this.audioInDevices.length
              }
              get stream() {
                  const e = new MediaStream;
                  return this.audioTrack instanceof MediaStreamTrack && (e.addTrack(this.audioTrack), this.audioTrack.enabled = !this.isAudioTrackMuted), this.videoTrack instanceof MediaStreamTrack && (e.addTrack(this.videoTrack), this.videoTrack.enabled = !this.isVideoTrackMuted), e
              }
              get stat() {
                  return {
                      isVideoDisabled: null === this.videoType,
                      isAudioMuted: this.isAudioTrackMuted,
                      isVideoMuted: this.isVideoTrackMuted
                  }
              }
              setAudioTrack(e, t) {
                  this.audioTrack = e, this.audioDeviceId = t
              }
              setVideoTrack(e, t, n) {
                  this.videoTrack = e, this.videoType = t, this.videoDeviceId = n
              }
              releaseAudioDevice() {
                  this.audioTrack instanceof MediaStreamTrack && this.audioTrack.stop()
              }
              releaseVideoDevice() {
                  this.videoTrack instanceof MediaStreamTrack && this.videoTrack.stop()
              }
              deleteVideoTrack() {
                  this.videoTrack instanceof MediaStreamTrack && this.videoTrack.stop(), this.videoTrack = null, this.videoType = null, this.videoDeviceId = null
              }
              setAudioDevices({
                  audioInDevices: e
              }) {
                  null !== e && this.audioInDevices.replace(e)
              }
              setVideoDevices({
                  videoInDevices: e
              }) {
                  null !== e && this.videoInDevices.replace(e)
              }
              toggleMuted(e) {
                  "video" === e && (this.isVideoTrackMuted = !this.isVideoTrackMuted), "audio" === e && (this.isAudioTrackMuted = !this.isAudioTrackMuted)
              }
          }
          Object(i.e)(d, {
              audioInDevices: i.g.shallow,
              videoInDevices: i.g.shallow,
              audioDeviceId: i.g,
              videoDeviceId: i.g,
              isAudioTrackMuted: i.g,
              isVideoTrackMuted: i.g,
              videoType: i.g,
              audioTrack: i.g.ref,
              videoTrack: i.g.ref,
              stat: i.c,
              isAudioEnabled: i.c,
              stream: i.c,
              setAudioTrack: i.b,
              setVideoTrack: i.b,
              releaseAudioDevice: i.b,
              releaseVideoDevice: i.b,
              deleteVideoTrack: i.b,
              setAudioDevices: i.b,
              setVideoDevices: i.b,
              toggleMuted: i.b
          });
          var u = d,
              b = n(15);
          class h {
              constructor() {
                  this.peer = null, this.isReady = !1, this.room = null, this.mode = null, this.id = null, this.useH264 = !1, this.streams = new Map, this.stats = new Map, this.chats = [], this.myLastChat = null, this.myLastReaction = null, this.pinnedId = null, this.castRequestCount = 0, this.rtcStats = null
              }
              get name() {
                  return `${this.mode}/${this.id}`
              }
              get isJoined() {
                  return null !== this.room
              }
              get pinnedStream() {
                  return null === this.pinnedId ? null : this.streams.get(this.pinnedId) || null
              }
              load({
                  mode: e,
                  id: t,
                  useH264: n
              }, r) {
                  this.mode = e, this.id = t, this.useH264 = n, this.peer = r, this.isReady = !0
              }
              addLocalChat(e, t) {
                  const n = {
                      id: Math.random(),
                      time: Date.now(),
                      isMine: !0,
                      from: e,
                      text: t
                  };
                  this.chats.push(n), this.myLastChat = n
              }
              addRemoteChat(e) {
                  e.isMine = !1, this.chats.push(e)
              }
              addReaction(e, t) {
                  this.myLastReaction = {
                      from: e,
                      reaction: t
                  }
              }
              removeStream(e) {
                  this.streams.delete(e), this.stats.delete(e), this.pinnedId === e && (this.pinnedId = null)
              }
              getPeerConnection() {
                  return "sfu" !== this.mode || null === this.room ? null : Object(b.a)(this.room)
              }
              cleanUp() {
                  if (null === this.room) throw new Error("Room is null!");
                  [...this.streams.values()].forEach(e => e.getTracks().forEach(e => e.stop())), this.streams.clear(), this.stats.clear(), this.chats.length = 0, this.myLastChat = null, this.room = null
              }
          }
          Object(i.e)(h, {
              peer: i.g.ref,
              isReady: i.g,
              room: i.g.ref,
              mode: i.g,
              id: i.g,
              streams: i.g.shallow,
              stats: i.g.shallow,
              chats: i.g.shallow,
              myLastChat: i.g.ref,
              myLastReaction: i.g.ref,
              pinnedId: i.g,
              castRequestCount: i.g,
              rtcStats: i.g.ref,
              name: i.c,
              isJoined: i.c,
              pinnedStream: i.c,
              load: i.b,
              addLocalChat: i.b,
              addRemoteChat: i.b,
              removeStream: i.b,
              getPeerConnection: i.b,
              cleanUp: i.b
          });
          var p = h;
          class f {
              constructor() {
                  this.items = []
              }
              showInfo(e) {
                  this.show("info", e, 1e3)
              }
              showChat(e, t) {
                  this.show("chat", `${e}: ${t}`, 6e3)
              }
              showReaction(e, t) {
                  this.show("insert_emoticon", `${e}: ${t}`, 3e3)
              }
              showJoin(e) {
                  this.show("person", e + " joined", 2e3)
              }
              showLeave(e) {
                  this.show("person", e + " left", 2e3)
              }
              show(e, t, n) {
                  const r = {
                      id: Math.random(),
                      type: e,
                      text: t
                  };
                  this.items.push(r), setTimeout(() => this.items.remove(r), n)
              }
          }
          Object(i.e)(f, {
              items: i.g.shallow,
              showInfo: i.b,
              showChat: i.b,
              showReaction: i.b,
              showJoin: i.b,
              showLeave: i.b,
              show: i.b
          });
          var m = f;
          const v = new class {
              constructor() {
                  this.ui = new o, this.client = new l, this.media = new u, this.room = new p, this.notification = new m
              }
          };
          window.store = v;
          const g = Object(r.createContext)(v)
      }, function(e, t, n) {
          "use strict";
          var r = n(9);
          t.a = function() {
              for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
              return Object(r.a)(t)
          }
      }, function(e, t, n) {
          "use strict";
          n.d(t, "a", (function() {
              return p
          }));
          var r = function(e) {
                  for (var t, n = e.length, r = n ^ n, i = 0; n >= 4;) t = 1540483477 * (65535 & (t = 255 & e.charCodeAt(i) | (255 & e.charCodeAt(++i)) << 8 | (255 & e.charCodeAt(++i)) << 16 | (255 & e.charCodeAt(++i)) << 24)) + ((1540483477 * (t >>> 16) & 65535) << 16), r = 1540483477 * (65535 & r) + ((1540483477 * (r >>> 16) & 65535) << 16) ^ (t = 1540483477 * (65535 & (t ^= t >>> 24)) + ((1540483477 * (t >>> 16) & 65535) << 16)), n -= 4, ++i;
                  switch (n) {
                      case 3:
                          r ^= (255 & e.charCodeAt(i + 2)) << 16;
                      case 2:
                          r ^= (255 & e.charCodeAt(i + 1)) << 8;
                      case 1:
                          r = 1540483477 * (65535 & (r ^= 255 & e.charCodeAt(i))) + ((1540483477 * (r >>> 16) & 65535) << 16)
                  }
                  return r = 1540483477 * (65535 & (r ^= r >>> 13)) + ((1540483477 * (r >>> 16) & 65535) << 16), ((r ^= r >>> 15) >>> 0).toString(36)
              },
              i = {
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
          var a = /[A-Z]|^ms/g,
              o = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
              s = function(e) {
                  return 45 === e.charCodeAt(1)
              },
              c = function(e) {
                  return null != e && "boolean" != typeof e
              },
              l = function(e) {
                  var t = {};
                  return function(n) {
                      return void 0 === t[n] && (t[n] = e(n)), t[n]
                  }
              }((function(e) {
                  return s(e) ? e : e.replace(a, "-$&").toLowerCase()
              })),
              d = function(e, t) {
                  switch (e) {
                      case "animation":
                      case "animationName":
                          if ("string" == typeof t) return t.replace(o, (function(e, t, n) {
                              return b = {
                                  name: t,
                                  styles: n,
                                  next: b
                              }, t
                          }))
                  }
                  return 1 === i[e] || s(e) || "number" != typeof t || 0 === t ? t : t + "px"
              };

          function u(e, t, n, r) {
              if (null == n) return "";
              if (void 0 !== n.__emotion_styles) return n;
              switch (typeof n) {
                  case "boolean":
                      return "";
                  case "object":
                      if (1 === n.anim) return b = {
                          name: n.name,
                          styles: n.styles,
                          next: b
                      }, n.name;
                      if (void 0 !== n.styles) {
                          var i = n.next;
                          if (void 0 !== i)
                              for (; void 0 !== i;) b = {
                                  name: i.name,
                                  styles: i.styles,
                                  next: b
                              }, i = i.next;
                          return n.styles + ";"
                      }
                      return function(e, t, n) {
                          var r = "";
                          if (Array.isArray(n))
                              for (var i = 0; i < n.length; i++) r += u(e, t, n[i], !1);
                          else
                              for (var a in n) {
                                  var o = n[a];
                                  if ("object" != typeof o) null != t && void 0 !== t[o] ? r += a + "{" + t[o] + "}" : c(o) && (r += l(a) + ":" + d(a, o) + ";");
                                  else if (!Array.isArray(o) || "string" != typeof o[0] || null != t && void 0 !== t[o[0]]) {
                                      var s = u(e, t, o, !1);
                                      switch (a) {
                                          case "animation":
                                          case "animationName":
                                              r += l(a) + ":" + s + ";";
                                              break;
                                          default:
                                              r += a + "{" + s + "}"
                                      }
                                  } else
                                      for (var b = 0; b < o.length; b++) c(o[b]) && (r += l(a) + ":" + d(a, o[b]) + ";")
                              }
                          return r
                      }(e, t, n);
                  case "function":
                      if (void 0 !== e) {
                          var a = b,
                              o = n(e);
                          return b = a, u(e, t, o, r)
                      }
                      break;
                  case "string":
              }
              if (null == t) return n;
              var s = t[n];
              return void 0 === s || r ? n : s
          }
          var b, h = /label:\s*([^\s;\n{]+)\s*;/g;
          var p = function(e, t, n) {
              if (1 === e.length && "object" == typeof e[0] && null !== e[0] && void 0 !== e[0].styles) return e[0];
              var i = !0,
                  a = "";
              b = void 0;
              var o = e[0];
              null == o || void 0 === o.raw ? (i = !1, a += u(n, t, o, !1)) : a += o[0];
              for (var s = 1; s < e.length; s++) a += u(n, t, e[s], 46 === a.charCodeAt(a.length - 1)), i && (a += o[s]);
              h.lastIndex = 0;
              for (var c, l = ""; null !== (c = h.exec(a));) l += "-" + c[1];
              return {
                  name: r(a) + l,
                  styles: a,
                  next: b
              }
          }
      }, function(e, t, n) {
          "use strict";
          n.d(t, "b", (function() {
              return r
          })), n.d(t, "c", (function() {
              return i
          })), n.d(t, "d", (function() {
              return a
          })), n.d(t, "a", (function() {
              return o
          }));
          const r = e => "sfu" === e || "mesh" === e,
              i = 16,
              a = "^[0-9a-z_-]{4,16}$",
              o = e => new RegExp(a).test(e)
      }, , function(e) {
          e.exports = JSON.parse('{"a":"skyway-conference-dev","b":"3.0.1"}')
      }, function(e, t) {
          e.exports = function(e, t) {
              e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
          }
      }, , function(e, t, n) {
          "use strict";
          n.d(t, "b", (function() {
              return a
          })), n.d(t, "a", (function() {
              return o
          }));
          var r = n(23),
              i = n.n(r);
          const a = e => new Promise((t, n) => {
                  const r = new i.a({
                      key: "dd1e175f-f8be-4b57-b871-6c445220011c",
                      debug: 2,
                      config: {
                          iceTransportPolicy: e ? "relay" : "all"
                      }
                  });
                  r.once("open", () => {
                      r.removeListener("error", n), t(r)
                  }), r.once("error", n)
              }),
              o = e => e._negotiator._pc
      }, function(e, t, n) {
          "use strict";
          /*
          object-assign
          (c) Sindre Sorhus
          @license MIT
          */
          var r = Object.getOwnPropertySymbols,
              i = Object.prototype.hasOwnProperty,
              a = Object.prototype.propertyIsEnumerable;

          function o(e) {
              if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
              return Object(e)
          }
          e.exports = function() {
              try {
                  if (!Object.assign) return !1;
                  var e = new String("abc");
                  if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                  for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
                  if ("0123456789" !== Object.getOwnPropertyNames(t).map((function(e) {
                          return t[e]
                      })).join("")) return !1;
                  var r = {};
                  return "abcdefghijklmnopqrst".split("").forEach((function(e) {
                      r[e] = e
                  })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
              } catch (e) {
                  return !1
              }
          }() ? Object.assign : function(e, t) {
              for (var n, s, c = o(e), l = 1; l < arguments.length; l++) {
                  for (var d in n = Object(arguments[l])) i.call(n, d) && (c[d] = n[d]);
                  if (r) {
                      s = r(n);
                      for (var u = 0; u < s.length; u++) a.call(n, s[u]) && (c[s[u]] = n[s[u]])
                  }
              }
              return c
          }
      }, function(e, t, n) {
          "use strict";
          /** @license React v0.19.1
           * scheduler.production.min.js
           *
           * Copyright (c) Facebook, Inc. and its affiliates.
           *
           * This source code is licensed under the MIT license found in the
           * LICENSE file in the root directory of this source tree.
           */
          var r, i, a, o, s;
          if ("undefined" == typeof window || "function" != typeof MessageChannel) {
              var c = null,
                  l = null,
                  d = function() {
                      if (null !== c) try {
                          var e = t.unstable_now();
                          c(!0, e), c = null
                      } catch (e) {
                          throw setTimeout(d, 0), e
                      }
                  },
                  u = Date.now();
              t.unstable_now = function() {
                  return Date.now() - u
              }, r = function(e) {
                  null !== c ? setTimeout(r, 0, e) : (c = e, setTimeout(d, 0))
              }, i = function(e, t) {
                  l = setTimeout(e, t)
              }, a = function() {
                  clearTimeout(l)
              }, o = function() {
                  return !1
              }, s = t.unstable_forceFrameRate = function() {}
          } else {
              var b = window.performance,
                  h = window.Date,
                  p = window.setTimeout,
                  f = window.clearTimeout;
              if ("undefined" != typeof console) {
                  var m = window.cancelAnimationFrame;
                  "function" != typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"), "function" != typeof m && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")
              }
              if ("object" == typeof b && "function" == typeof b.now) t.unstable_now = function() {
                  return b.now()
              };
              else {
                  var v = h.now();
                  t.unstable_now = function() {
                      return h.now() - v
                  }
              }
              var g = !1,
                  y = null,
                  w = -1,
                  k = 5,
                  O = 0;
              o = function() {
                  return t.unstable_now() >= O
              }, s = function() {}, t.unstable_forceFrameRate = function(e) {
                  0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported") : k = 0 < e ? Math.floor(1e3 / e) : 5
              };
              var j = new MessageChannel,
                  C = j.port2;
              j.port1.onmessage = function() {
                  if (null !== y) {
                      var e = t.unstable_now();
                      O = e + k;
                      try {
                          y(!0, e) ? C.postMessage(null) : (g = !1, y = null)
                      } catch (e) {
                          throw C.postMessage(null), e
                      }
                  } else g = !1
              }, r = function(e) {
                  y = e, g || (g = !0, C.postMessage(null))
              }, i = function(e, n) {
                  w = p((function() {
                      e(t.unstable_now())
                  }), n)
              }, a = function() {
                  f(w), w = -1
              }
          }

          function S(e, t) {
              var n = e.length;
              e.push(t);
              e: for (;;) {
                  var r = n - 1 >>> 1,
                      i = e[r];
                  if (!(void 0 !== i && 0 < I(i, t))) break e;
                  e[r] = t, e[n] = i, n = r
              }
          }

          function x(e) {
              return void 0 === (e = e[0]) ? null : e
          }

          function T(e) {
              var t = e[0];
              if (void 0 !== t) {
                  var n = e.pop();
                  if (n !== t) {
                      e[0] = n;
                      e: for (var r = 0, i = e.length; r < i;) {
                          var a = 2 * (r + 1) - 1,
                              o = e[a],
                              s = a + 1,
                              c = e[s];
                          if (void 0 !== o && 0 > I(o, n)) void 0 !== c && 0 > I(c, o) ? (e[r] = c, e[s] = n, r = s) : (e[r] = o, e[a] = n, r = a);
                          else {
                              if (!(void 0 !== c && 0 > I(c, n))) break e;
                              e[r] = c, e[s] = n, r = s
                          }
                      }
                  }
                  return t
              }
              return null
          }

          function I(e, t) {
              var n = e.sortIndex - t.sortIndex;
              return 0 !== n ? n : e.id - t.id
          }
          var A = [],
              D = [],
              E = 1,
              M = null,
              R = 3,
              V = !1,
              _ = !1,
              $ = !1;

          function N(e) {
              for (var t = x(D); null !== t;) {
                  if (null === t.callback) T(D);
                  else {
                      if (!(t.startTime <= e)) break;
                      T(D), t.sortIndex = t.expirationTime, S(A, t)
                  }
                  t = x(D)
              }
          }

          function z(e) {
              if ($ = !1, N(e), !_)
                  if (null !== x(A)) _ = !0, r(L);
                  else {
                      var t = x(D);
                      null !== t && i(z, t.startTime - e)
                  }
          }

          function L(e, n) {
              _ = !1, $ && ($ = !1, a()), V = !0;
              var r = R;
              try {
                  for (N(n), M = x(A); null !== M && (!(M.expirationTime > n) || e && !o());) {
                      var s = M.callback;
                      if (null !== s) {
                          M.callback = null, R = M.priorityLevel;
                          var c = s(M.expirationTime <= n);
                          n = t.unstable_now(), "function" == typeof c ? M.callback = c : M === x(A) && T(A), N(n)
                      } else T(A);
                      M = x(A)
                  }
                  if (null !== M) var l = !0;
                  else {
                      var d = x(D);
                      null !== d && i(z, d.startTime - n), l = !1
                  }
                  return l
              } finally {
                  M = null, R = r, V = !1
              }
          }

          function P(e) {
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
          var F = s;
          t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(e) {
              e.callback = null
          }, t.unstable_continueExecution = function() {
              _ || V || (_ = !0, r(L))
          }, t.unstable_getCurrentPriorityLevel = function() {
              return R
          }, t.unstable_getFirstCallbackNode = function() {
              return x(A)
          }, t.unstable_next = function(e) {
              switch (R) {
                  case 1:
                  case 2:
                  case 3:
                      var t = 3;
                      break;
                  default:
                      t = R
              }
              var n = R;
              R = t;
              try {
                  return e()
              } finally {
                  R = n
              }
          }, t.unstable_pauseExecution = function() {}, t.unstable_requestPaint = F, t.unstable_runWithPriority = function(e, t) {
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
              var n = R;
              R = e;
              try {
                  return t()
              } finally {
                  R = n
              }
          }, t.unstable_scheduleCallback = function(e, n, o) {
              var s = t.unstable_now();
              if ("object" == typeof o && null !== o) {
                  var c = o.delay;
                  c = "number" == typeof c && 0 < c ? s + c : s, o = "number" == typeof o.timeout ? o.timeout : P(e)
              } else o = P(e), c = s;
              return e = {
                  id: E++,
                  callback: n,
                  priorityLevel: e,
                  startTime: c,
                  expirationTime: o = c + o,
                  sortIndex: -1
              }, c > s ? (e.sortIndex = c, S(D, e), null === x(A) && e === x(D) && ($ ? a() : $ = !0, i(z, c - s))) : (e.sortIndex = o, S(A, e), _ || V || (_ = !0, r(L))), e
          }, t.unstable_shouldYield = function() {
              var e = t.unstable_now();
              N(e);
              var n = x(A);
              return n !== M && null !== M && null !== n && null !== n.callback && n.startTime <= e && n.expirationTime < M.expirationTime || o()
          }, t.unstable_wrapCallback = function(e) {
              var t = R;
              return function() {
                  var n = R;
                  R = t;
                  try {
                      return e.apply(this, arguments)
                  } finally {
                      R = n
                  }
              }
          }
      }, function(e, t) {
          var n, r, i = e.exports = {};

          function a() {
              throw new Error("setTimeout has not been defined")
          }

          function o() {
              throw new Error("clearTimeout has not been defined")
          }

          function s(e) {
              if (n === setTimeout) return setTimeout(e, 0);
              if ((n === a || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
              try {
                  return n(e, 0)
              } catch (t) {
                  try {
                      return n.call(null, e, 0)
                  } catch (t) {
                      return n.call(this, e, 0)
                  }
              }
          }! function() {
              try {
                  n = "function" == typeof setTimeout ? setTimeout : a
              } catch (e) {
                  n = a
              }
              try {
                  r = "function" == typeof clearTimeout ? clearTimeout : o
              } catch (e) {
                  r = o
              }
          }();
          var c, l = [],
              d = !1,
              u = -1;

          function b() {
              d && c && (d = !1, c.length ? l = c.concat(l) : u = -1, l.length && h())
          }

          function h() {
              if (!d) {
                  var e = s(b);
                  d = !0;
                  for (var t = l.length; t;) {
                      for (c = l, l = []; ++u < t;) c && c[u].run();
                      u = -1, t = l.length
                  }
                  c = null, d = !1,
                      function(e) {
                          if (r === clearTimeout) return clearTimeout(e);
                          if ((r === o || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                          try {
                              r(e)
                          } catch (t) {
                              try {
                                  return r.call(null, e)
                              } catch (t) {
                                  return r.call(this, e)
                              }
                          }
                      }(e)
              }
          }

          function p(e, t) {
              this.fun = e, this.array = t
          }

          function f() {}
          i.nextTick = function(e) {
              var t = new Array(arguments.length - 1);
              if (arguments.length > 1)
                  for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
              l.push(new p(e, t)), 1 !== l.length || d || s(h)
          }, p.prototype.run = function() {
              this.fun.apply(null, this.array)
          }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = f, i.addListener = f, i.once = f, i.off = f, i.removeListener = f, i.removeAllListeners = f, i.emit = f, i.prependListener = f, i.prependOnceListener = f, i.listeners = function(e) {
              return []
          }, i.binding = function(e) {
              throw new Error("process.binding is not supported")
          }, i.cwd = function() {
              return "/"
          }, i.chdir = function(e) {
              throw new Error("process.chdir is not supported")
          }, i.umask = function() {
              return 0
          }
      }, function(e, t, n) {
          "use strict";
          e.exports = n(17)
      }, function(e, t) {
          var n = 1e3,
              r = 6e4,
              i = 60 * r,
              a = 24 * i;

          function o(e, t, n, r) {
              var i = t >= 1.5 * n;
              return Math.round(e / n) + " " + r + (i ? "s" : "")
          }
          e.exports = function(e, t) {
              t = t || {};
              var s = typeof e;
              if ("string" === s && e.length > 0) return function(e) {
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
                          return o * a;
                      case "hours":
                      case "hour":
                      case "hrs":
                      case "hr":
                      case "h":
                          return o * i;
                      case "minutes":
                      case "minute":
                      case "mins":
                      case "min":
                      case "m":
                          return o * r;
                      case "seconds":
                      case "second":
                      case "secs":
                      case "sec":
                      case "s":
                          return o * n;
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
              if ("number" === s && !1 === isNaN(e)) return t.long ? function(e) {
                  var t = Math.abs(e);
                  if (t >= a) return o(e, t, a, "day");
                  if (t >= i) return o(e, t, i, "hour");
                  if (t >= r) return o(e, t, r, "minute");
                  if (t >= n) return o(e, t, n, "second");
                  return e + " ms"
              }(e) : function(e) {
                  var t = Math.abs(e);
                  if (t >= a) return Math.round(e / a) + "d";
                  if (t >= i) return Math.round(e / i) + "h";
                  if (t >= r) return Math.round(e / r) + "m";
                  if (t >= n) return Math.round(e / n) + "s";
                  return e + "ms"
              }(e);
              throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
          }
      }, function(e, t) {
          var n;
          n = function() {
              return this
          }();
          try {
              n = n || new Function("return this")()
          } catch (e) {
              "object" == typeof window && (n = window)
          }
          e.exports = n
      }, , , , , , , , function(e, t) {
          function n() {}
          e.exports = n, n.mixin = function(e) {
              var t = e.prototype || e;
              t.isWildEmitter = !0, t.on = function(e, t, n) {
                  this.callbacks = this.callbacks || {};
                  var r = 3 === arguments.length,
                      i = r ? arguments[1] : void 0,
                      a = r ? arguments[2] : arguments[1];
                  return a._groupName = i, (this.callbacks[e] = this.callbacks[e] || []).push(a), this
              }, t.once = function(e, t, n) {
                  var r = this,
                      i = 3 === arguments.length,
                      a = i ? arguments[1] : void 0,
                      o = i ? arguments[2] : arguments[1];

                  function s() {
                      r.off(e, s), o.apply(this, arguments)
                  }
                  return this.on(e, a, s), this
              }, t.releaseGroup = function(e) {
                  var t, n, r, i;
                  for (t in this.callbacks = this.callbacks || {}, this.callbacks)
                      for (n = 0, r = (i = this.callbacks[t]).length; n < r; n++) i[n]._groupName === e && (i.splice(n, 1), n--, r--);
                  return this
              }, t.off = function(e, t) {
                  this.callbacks = this.callbacks || {};
                  var n, r = this.callbacks[e];
                  return r ? 1 === arguments.length ? (delete this.callbacks[e], this) : (n = r.indexOf(t), r.splice(n, 1), 0 === r.length && delete this.callbacks[e], this) : this
              }, t.emit = function(e) {
                  this.callbacks = this.callbacks || {};
                  var t, n, r, i = [].slice.call(arguments, 1),
                      a = this.callbacks[e],
                      o = this.getWildcardCallbacks(e);
                  if (a)
                      for (t = 0, n = (r = a.slice()).length; t < n && r[t]; ++t) r[t].apply(this, i);
                  if (o)
                      for (n = o.length, t = 0, n = (r = o.slice()).length; t < n && r[t]; ++t) r[t].apply(this, [e].concat(i));
                  return this
              }, t.getWildcardCallbacks = function(e) {
                  this.callbacks = this.callbacks || {};
                  var t, n, r = [];
                  for (t in this.callbacks) n = t.split("*"), ("*" === t || 2 === n.length && e.slice(0, n[0].length) === n[0]) && (r = r.concat(this.callbacks[t]));
                  return r
              }
          }, n.mixin(n)
      }, function(e, t, n) {
          "use strict";
          n.r(t);
          var r = n(1),
              i = n(14),
              a = n(0),
              o = n(6),
              s = n.n(o),
              c = n(12),
              l = n(3),
              d = n(32),
              u = n(7),
              b = n(2),
              h = n(10);
          const p = async e => {
              const t = await navigator.mediaDevices.enumerateDevices() || [],
                  n = [],
                  r = [];
              for (const e of t) "videoinput" === e.kind && n.push(e), "audioinput" === e.kind && r.push(e);
              const i = {
                  videoInDevices: null,
                  audioInDevices: null
              };
              return e.video && (i.videoInDevices = n), e.audio && (i.audioInDevices = r), i
          }, f = async e => {
              const t = "" === e || {
                  deviceId: {
                      exact: e
                  }
              };
              return navigator.mediaDevices.getUserMedia({
                  audio: t
              }).then(e => e.getAudioTracks()[0])
          }, m = async e => {
              const t = "" === e || {
                  deviceId: {
                      exact: e
                  }
              };
              return navigator.mediaDevices.getUserMedia({
                  video: t
              }).then(e => e.getVideoTracks()[0])
          };
          var v = n(15);
          const g = s()("effect:bootstrap");
          var y = ({
              error: e
          }) => Object(a.c)("div", {
              css: w
          }, Object(a.c)("h2", {
              css: k
          }, e.message || e.name), Object(a.c)("pre", {
              css: O
          }, e.stack || "Stack trace is not available."));
          const w = Object(a.b)({
                  color: l.c.white,
                  margin: 16
              }, ";label:wrapperStyle;"),
              k = {
                  name: "3qj1jp-headStyle",
                  styles: "font-weight:900;;label:headStyle;"
              },
              O = {
                  name: "2ay849-detailStyle",
                  styles: "white-space:pre-wrap;;label:detailStyle;"
              };
          var j = () => Object(a.c)("img", {
              css: C,
              src: "./images/conf/icon-loading.svg"
          });
          const C = {
              name: "y4qk87-wrapperStyle",
              styles: "position:absolute;top:0;left:0;right:0;bottom:0;margin:auto;width:160px;;label:wrapperStyle;"
          };
          var S = ({
                  children: e
              }) => {
                  const t = Object(r.useContext)(u.a);
                  Object(r.useEffect)((({
                      ui: e,
                      room: t
                  }) => () => {
                      g("checkRoomSetting()");
                      const [, n, r] = location.hash.split("/"), i = new URLSearchParams(location.search);
                      if (!Object(h.b)(n)) throw e.showError(new Error("Invalid room type! it should be `sfu` or `mesh`."));
                      if (!Object(h.a)(r)) throw e.showError(new Error(`Invalid room name! it should be match \`${h.d.toString()}\`.`));
                      (async () => {
                          const a = await Object(v.b)(i.has("turn")).catch(t => {
                              throw e.showError(t)
                          });
                          a.on("error", console.error), t.load({
                              mode: n,
                              id: r,
                              useH264: i.has("h264")
                          }, a), g(`room: ${n}/${r}`), g("peer instance created")
                      })()
                  })(t), [t]), Object(r.useEffect)((({
                      ui: e,
                      client: t,
                      media: n
                  }) => () => {
                      g("ensureAudioDevice()"), (async () => {
                          const {
                              videoInDevices: r,
                              audioInDevices: i
                          } = await p({
                              video: !0,
                              audio: !0
                          }).catch(t => {
                              throw e.showError(t)
                          });
                          if (null === r) throw e.showError(new Error("getUserDevices() returns null"));
                          if (null === i) throw e.showError(new Error("getUserDevices() returns null"));
                          if (0 === i.length) throw e.showError(new Error("At least one audio input device needed!"));
                          g("%s audio + %s video builtin devices are found", i.length, r.length);
                          const [{
                              deviceId: a
                          }] = i, o = await f(a).catch(t => {
                              throw e.showError(t)
                          });
                          n.setAudioTrack(o, a);
                          const s = await p({
                              audio: !0
                          }).catch(t => {
                              throw e.showError(t)
                          });
                          n.setAudioDevices(s), g("audio devices", s.audioInDevices), t.load({
                              ua: navigator.userAgent,
                              hasUserVideoDevice: 0 !== r.length,
                              hasGetDisplayMedia: "function" == typeof navigator.mediaDevices.getDisplayMedia,
                              name: (localStorage.getItem("SkyWayConf.dispName") || "").trim()
                          }), g("client loaded", Object(b.l)(t))
                      })()
                  })(t), [t]), Object(r.useEffect)((({
                      client: e,
                      media: t,
                      room: n,
                      notification: r
                  }) => () => {
                      g("listenStoreChanges()");
                      const i = [Object(b.i)(() => n.isJoined, e => e && r.showInfo("You joined the room " + n.name)), Object(b.i)(() => t.isAudioTrackMuted, e => r.showInfo("Mic input was " + (e ? "muted" : "unmuted"))), Object(b.i)(() => t.isVideoTrackMuted, e => r.showInfo("Video was " + (e ? "muted" : "unmuted"))), Object(b.h)(t, "audioDeviceId", e => {
                          null !== e.oldValue && r.showInfo("Mic input was changed")
                      }), Object(b.h)(t, "videoDeviceId", e => {
                          null !== e.oldValue ? null !== e.newValue ? r.showInfo("Video input was changed") : r.showInfo("Video input was disabled") : r.showInfo("Video input was enabled")
                      }), Object(b.i)(() => n.castRequestCount, () => r.showInfo("Your video was casted to everyone")), Object(b.i)(() => n.myLastReaction, e => e && r.showInfo("You reacted with " + e.reaction)), Object(b.i)(() => e.displayName, e => {
                          localStorage.setItem("SkyWayConf.dispName", e.trim()), r.showInfo("Display name saved")
                      }, {
                          delay: 2e3
                      })];
                      return () => i.forEach(e => e())
                  })(t), [t]), Object(r.useEffect)((({
                      media: e,
                      ui: t
                  }) => () => {
                      g("listenGlobalEvents()");
                      const n = () => location.reload(!0),
                          r = async () => {
                              g("devicechange event fired");
                              const {
                                  audioInDevices: n,
                                  videoInDevices: r
                              } = await p({
                                  video: !0,
                                  audio: !0
                              }).catch(e => {
                                  throw t.showError(e)
                              });
                              if (null === n || null === r) throw t.showError(new Error("getUserDevices() returns null"));
                              const i = e.audioInDevices,
                                  a = e.videoInDevices;
                              i.length && n.length !== i.length && location.reload(!0), a.length && r.length !== a.length && location.reload(!0)
                          };
                      return window.addEventListener("hashchange", n, !1), navigator.mediaDevices.addEventListener("devicechange", r, !1), () => {
                          g("listener removed"), window.removeEventListener("hashchange", n), navigator.mediaDevices.removeEventListener("devicechange", r)
                      }
                  })(t), [t]);
                  const {
                      ui: n,
                      client: i,
                      room: o,
                      media: s
                  } = t;
                  return Object(a.c)(d.a, null, () => null !== n.error ? Object(a.c)(y, {
                      error: n.error
                  }) : i.isReady && o.isReady && s.isAudioEnabled ? Object(a.c)(r.Fragment, null, e) : Object(a.c)(j, null))
              },
              x = n(5);
          const T = Object(a.b)({
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: x.d.modal,
              overflow: "auto",
              backgroundColor: "rgba(0, 0, 0, .8)",
              willChange: "opacity",
              animation: a.d `from { opacity: 0; } to { opacity: 1; }` + " .4s ease"
          }, ";label:wrapperStyle;");
          var I = ({
              children: e
          }) => Object(a.c)("div", {
              css: T
          }, e);
          const A = s()("component:video");
          var D = Object(r.memo)(({
              stream: e,
              isReverse: t = !1,
              isVideoOnly: n = !1
          }) => {
              const i = 0 === e.getAudioTracks().length,
                  o = 0 === e.getVideoTracks().length,
                  s = Object(r.useRef)(null),
                  c = Object(r.useRef)(null),
                  l = A.extend(e.id);
              return Object(r.useEffect)(() => {
                  const t = s.current;
                  o || null === t || (l("useEffect(): assign and play stream for video"), t.srcObject !== e && (t.srcObject = e), t.paused && t.play())
              }, [o, s, l, e]), Object(r.useEffect)(() => {
                  const t = c.current;
                  i || n || null === t || (l("useEffect(): assign and play stream for audio"), t.srcObject !== e && (t.srcObject = e), t.paused && t.play())
              }, [i, n, c, l, e]), l("render()", [...e.getTracks()]), Object(a.c)(r.Fragment, null, o ? null : Object(a.c)("video", {
                  css: t ? [M, R] : M,
                  ref: s,
                  playsInline: !0,
                  muted: !0
              }), n || i ? null : Object(a.c)("audio", {
                  css: E,
                  ref: c
              }))
          });
          const E = {
                  name: "irc9p9-audioStyle",
                  styles: "display:none;;label:audioStyle;"
              },
              M = {
                  name: "11u56sq-videoStyle",
                  styles: "width:100%;height:100%;max-width:100%;max-height:100%;pointer-events:none;;label:videoStyle;"
              },
              R = {
                  name: "wfqmvp-reverseVideoStyle",
                  styles: "transform:scaleX(-1);;label:reverseVideoStyle;"
              };
          var V = n(4),
              _ = n(8);
          const $ = ({
                  label: e,
                  children: t
              }) => Object(a.c)("div", {
                  css: Object(_.a)([z, L], ";label:SettingsItemDevice;")
              }, Object(a.c)("div", {
                  css: F
              }, e), t),
              N = ({
                  label: e,
                  children: t
              }) => Object(a.c)("div", {
                  css: Object(_.a)([z, P], ";label:SettingsItemName;")
              }, Object(a.c)("div", {
                  css: F
              }, e), Object(a.c)("div", null, t)),
              z = {
                  name: "b74hfd-wrapperStyle",
                  styles: "margin:8px auto;;label:wrapperStyle;"
              },
              L = {
                  name: "1thp49p-deviceStyle",
                  styles: "display:grid;grid-template-columns:80px 72px 1fr;grid-gap:8px;align-items:center;;label:deviceStyle;"
              },
              P = {
                  name: "a15aci-nameStyle",
                  styles: "display:grid;grid-template-columns:80px 1fr;grid-gap:8px;align-items:center;;label:nameStyle;"
              },
              F = {
                  name: "rb14u8-labelStyle",
                  styles: "text-align:center;;label:labelStyle;"
              };
          var U = ({
              defaultDispName: e,
              isInvalid: t,
              onChangeDispName: n
          }) => {
              const [i, o] = Object(r.useState)(e);
              return Object(a.c)("div", null, Object(a.c)("input", {
                  type: "text",
                  value: i,
                  maxLength: 10,
                  placeholder: "Enter your name",
                  onChange: e => {
                      if (e.target.value.length > 10) return;
                      const t = e.target.value;
                      o(t), n(t)
                  },
                  css: t ? [q, J] : q
              }))
          };
          const q = Object(a.b)({
                  boxSizing: "border-box",
                  width: "100%",
                  padding: "4px 8px",
                  appearance: "none",
                  border: 0,
                  borderBottom: "1px solid " + l.c.gray,
                  fontSize: "1.1rem",
                  "&:focus": {
                      borderColor: l.c.blue
                  }
              }, ";label:nameStyle;"),
              J = Object(a.b)({
                  borderColor: l.c.red
              }, ";label:invalidStyle;");
          const G = ({
                  deviceId: e,
                  inDevices: t,
                  onChangeDeviceId: n
              }) => Object(a.c)("select", {
                  value: e || "",
                  onChange: e => n(e.target.value),
                  css: B
              }, t.map(e => Object(a.c)("option", {
                  key: e.deviceId,
                  value: e.deviceId
              }, e.label))),
              W = ({
                  label: e,
                  disabled: t,
                  onClick: n
              }) => Object(a.c)("button", {
                  css: B,
                  disabled: !!t,
                  onClick: n
              }, e),
              B = {
                  name: "14nzfdt-formStyle",
                  styles: "box-sizing:border-box;width:100%;height:100%;;label:formStyle;"
              };
          var H = ({
              displayName: e,
              browser: t,
              controllers: n
          }) => Object(a.c)("div", {
              css: Y
          }, Object(a.c)("div", {
              css: X
          }, Object(a.c)(V.a, t), " ", e), Object(a.c)("div", {
              css: X
          }, n));
          const Y = Object(a.b)({
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  padding: 4,
                  color: l.c.white,
                  backgroundColor: "rgba(0, 0, 0, .5)",
                  fontSize: ".8rem"
              }, ";label:wrapperStyle;"),
              X = {
                  name: "1kxi40k-rowStyle",
                  styles: "display:inline-flex;align-items:center;;label:rowStyle;"
              };
          var K = ({
              stream: e,
              defaultDispName: t,
              browser: n,
              hasGetDisplayMedia: i,
              hasUserVideoDevice: o,
              videoType: s,
              isVideoTrackMuted: c,
              isAudioTrackMuted: l,
              videoDeviceId: d,
              audioDeviceId: u,
              videoInDevices: b,
              audioInDevices: h,
              isReEntering: p,
              isJoined: f,
              isDisplayNameValid: m,
              onChangeVideoDeviceId: v,
              onChangeAudioDeviceId: g,
              onClickToggleVideoMuted: y,
              onClickToggleAudioMuted: w,
              onClickEnableUserVideo: k,
              onClickDisableUserVideo: O,
              onClickEnableDisplayVideo: j,
              onClickDisableDisplayVideo: C,
              onChangeDispName: S,
              onClickCloseSettings: x,
              onClickJoinConference: T
          }) => Object(a.c)(I, null, Object(a.c)("div", {
              css: Z
          }, Object(a.c)("div", {
              css: Q
          }, Object(a.c)(D, {
              stream: e,
              isReverse: "camera" === s,
              isVideoOnly: !0
          }), Object(a.c)("div", {
              css: ee
          }, Object(a.c)(H, {
              displayName: "v" + n.version,
              browser: n,
              controllers: Object(a.c)(r.Fragment, null, null === s ? null : Object(a.c)(V.c, {
                  name: c ? "videocam_off" : "videocam",
                  title: c ? "Unmute video" : "Mute video",
                  onClick: y
              }), Object(a.c)(V.c, {
                  name: l ? "mic_off" : "mic",
                  title: l ? "Unmute audio" : "Mute audio",
                  onClick: w
              }))
          }))), Object(a.c)("div", {
              css: te
          }, Object(a.c)(N, {
              label: "NAME"
          }, Object(a.c)(U, {
              defaultDispName: t,
              isInvalid: !m,
              onChangeDispName: S
          })), Object(a.c)($, {
              label: "MIC."
          }, Object(a.c)(W, {
              label: "Disable",
              disabled: !0
          }), Object(a.c)(G, {
              deviceId: u || "",
              inDevices: h,
              onChangeDeviceId: g
          })), o ? Object(a.c)($, {
              label: "CAMERA"
          }, "camera" === s ? Object(a.c)(r.Fragment, null, Object(a.c)(W, {
              label: "Disable",
              onClick: O
          }), Object(a.c)(G, {
              deviceId: d || "",
              inDevices: b,
              onChangeDeviceId: v
          })) : Object(a.c)(W, {
              label: "Enable",
              onClick: k
          })) : null, i ? Object(a.c)($, {
              label: "DISPLAY"
          }, "display" === s ? Object(a.c)(r.Fragment, null, Object(a.c)(W, {
              label: "Disable",
              onClick: C
          }), Object(a.c)(W, {
              label: "Use another dispaly",
              onClick: j
          })) : Object(a.c)(W, {
              label: "Enable",
              onClick: j
          })) : null), Object(a.c)("div", {
              css: ne
          }, Object(a.c)("button", {
              css: re,
              onClick: f ? x : T,
              disabled: p || !m
          }, p ? "RE-ENTERING THE ROOM" : Object(a.c)(r.Fragment, null, Object(a.c)(V.b, {
              name: f ? "done" : "meeting_room"
          }), Object(a.c)("span", null, f ? "CLOSE SETTINGS" : "ENTER THIS ROOM"))))));
          const Z = Object(a.b)({
                  width: x.a,
                  margin: "32px auto 0",
                  boxSizing: "border-box",
                  backgroundColor: l.c.white
              }, ";label:wrapperStyle;"),
              Q = Object(a.b)({
                  position: "relative",
                  width: "100%",
                  height: x.a / 4 * 3,
                  backgroundColor: l.c.black
              }, ";label:videoStyle;"),
              ee = {
                  name: "1es7990-controllerStyle",
                  styles: "position:absolute;left:0;right:0;bottom:0;z-index:1;;label:controllerStyle;"
              },
              te = {
                  name: "1g9pnwq-settingsStyle",
                  styles: "margin:16px;;label:settingsStyle;"
              },
              ne = {
                  name: "16ed3g4-buttonWrapStyle",
                  styles: "padding:16px;text-align:center;;label:buttonWrapStyle;"
              },
              re = Object(a.b)({
                  display: "inline-flex",
                  alignItems: "center",
                  backgroundColor: l.c.blue,
                  color: l.c.white,
                  height: 40,
                  border: 0,
                  cursor: "pointer",
                  padding: "0 24px",
                  fontSize: "1.2rem",
                  borderRadius: 2,
                  "&:disabled": {
                      cursor: "not-allowed",
                      backgroundColor: l.c.gray
                  }
              }, ";label:doneButtonStyle;"),
              ie = s()("effect:room"),
              ae = e => {
                  ie("joinRoom()");
                  const {
                      room: t,
                      ui: n,
                      media: r,
                      client: i,
                      notification: a
                  } = e;
                  if (null === t.name || null === t.mode) throw n.showError(new Error("Room name or mode is undefined!"));
                  if (null === t.peer) throw n.showError(new Error("Peer is not created!"));
                  const o = {
                      mode: t.mode,
                      stream: r.stream,
                      videoReceiveEnabled: !0
                  };
                  t.useH264 && Object.assign(o, {
                      videoCodec: "H264"
                  }), ("mesh" === t.mode || "sfu" === t.mode) && (t.room = t.peer.joinRoom(t.name, o));
                  const s = t.room;
                  if (null === s) throw n.showError(new Error("Room is null!"));
                  ie("joined room", s), ie("w/ options:", o), n.isReEntering = !1;
                  const c = [Object(b.i)(() => ({
                      ...r.stat,
                      ...i.stat
                  }), e => {
                      ie("reaction:send(stat)"), s.send({
                          type: "stat",
                          payload: e
                      })
                  }), Object(b.i)(() => t.myLastChat, e => {
                      null !== e && (ie("reaction:send(chat)"), s.send({
                          type: "chat",
                          payload: e
                      }))
                  }), Object(b.i)(() => t.myLastReaction, e => {
                      null !== e && (ie("reaction:send(reaction)"), s.send({
                          type: "reaction",
                          payload: e
                      }))
                  }), Object(b.i)(() => t.castRequestCount, () => {
                      ie("reaction:send(cast)"), s.send({
                          type: "cast",
                          payload: {
                              from: i.displayName
                          }
                      })
                  }), Object(b.h)(r, "videoDeviceId", e => {
                      if (ie("observe(media.videoDeviceId)"), t.isJoined) {
                          if (null !== e.oldValue && null !== e.newValue) return ie("just change video by replaceStream(), no need to re-enter"), void s.replaceStream(r.stream);
                          if (ie("need to re-enter the room to add/remove video"), null === t.room) throw n.showError(new Error("Room is null!"));
                          n.isReEntering = !0, t.room.close(), a.showInfo("Re-enter the room to add/remove video")
                      } else ie("do nothing before room join")
                  })];
                  s.on("stream", e => {
                      ie("on('stream')", e), t.streams.set(e.peerId, e), s.send({
                          type: "stat",
                          payload: {
                              ...i.stat,
                              ...r.stat
                          }
                      })
                  }), s.on("peerLeave", e => {
                      ie("on('peerLeave')", e);
                      const n = t.stats.get(e);
                      n && a.showLeave(n.displayName), t.removeStream(e)
                  }), s.on("data", ({
                      src: e,
                      data: r
                  }) => {
                      const {
                          type: i,
                          payload: o
                      } = r;
                      switch (i) {
                          case "stat": {
                              const n = o;
                              ie("on('data/stat')", n), t.stats.get(e) || a.showJoin(n.displayName), t.stats.set(e, n);
                              break
                          }
                          case "chat": {
                              const e = o;
                              ie("on('data/chat')", e), n.isChatOpen || a.showChat(e.from, e.text), t.addRemoteChat(e);
                              break
                          }
                          case "reaction": {
                              const e = o;
                              a.showReaction(e.from, e.reaction);
                              break
                          }
                          case "cast": {
                              const n = o;
                              ie("on('data/cast')", n), t.pinnedId = e, a.showInfo("Video was casted by " + n.from);
                              break
                          }
                          default:
                              ie("on('data/unknown') discard...")
                      }
                  }), s.once("close", () => {
                      ie("on('close')"), a.showInfo("room closed! trying re-connect.."), c.forEach(e => e());
                      try {
                          s.removeAllListeners(), t.cleanUp()
                      } catch (e) {
                          throw n.showError(e)
                      }
                      setTimeout(() => ae(e), 500)
                  })
              },
              oe = s()("effect:settings"),
              se = e => async () => {
                  oe("enableDisplayVideo()");
                  const {
                      media: t,
                      ui: n,
                      notification: r
                  } = e, i = await (async () => navigator.mediaDevices.getDisplayMedia({
                      video: !0
                  }).then(e => e.getVideoTracks()[0]))().catch(e => {
                      if ("NotAllowedError" !== e.name) throw n.showError(e)
                  });
                  if (!(i instanceof MediaStreamTrack)) return r.showInfo("Display selection was cancelled"), r.showInfo("Or your device does not support display sharing"), void oe("selection was cancelled or not supported");
                  i.addEventListener("ended", ce(e), {
                      once: !0
                  }), t.releaseVideoDevice(), t.setVideoTrack(i, "display", i.label)
              }, ce = ({
                  media: e
              }) => () => {
                  oe("disableDisplayVideo()"), e.deleteVideoTrack()
              };
          var le = () => {
              const e = Object(r.useContext)(u.a),
                  t = Object(r.useCallback)((({
                      client: e
                  }) => t => {
                      oe("changeDispName()", `${e.displayName} => ${t}`), e.displayName = t
                  })(e), [e]),
                  n = Object(r.useCallback)((({
                      media: e,
                      ui: t
                  }) => async () => {
                      oe("enableUserVideo()");
                      const {
                          videoInDevices: n
                      } = await p({
                          video: !0
                      }).catch(e => {
                          throw t.showError(e)
                      });
                      if (null === n) throw t.showError(new Error("getUserDevices() returns null"));
                      if (0 === n.length) throw t.showError(new Error("At leaset one video input device needed!"));
                      const [{
                          deviceId: r
                      }] = n, i = await m(r).catch(e => {
                          throw t.showError(e)
                      });
                      e.releaseVideoDevice(), e.setVideoTrack(i, "camera", r);
                      const a = await p({
                          video: !0
                      }).catch(e => {
                          throw t.showError(e)
                      });
                      e.setVideoDevices(a), oe("video devices", a.videoInDevices)
                  })(e), [e]),
                  i = Object(r.useCallback)((({
                      media: e
                  }) => () => {
                      oe("disableUserVideo()"), e.deleteVideoTrack()
                  })(e), [e]),
                  o = Object(r.useCallback)(se(e), [e]),
                  s = Object(r.useCallback)(ce(e), [e]),
                  c = Object(r.useCallback)((({
                      media: e,
                      ui: t
                  }) => async n => {
                      oe("changeVideoDeviceId", n), e.releaseVideoDevice();
                      const r = await m(n).catch(e => {
                          throw t.showError(e)
                      });
                      e.setVideoTrack(r, "camera", n)
                  })(e), [e]),
                  l = Object(r.useCallback)((({
                      media: e,
                      ui: t
                  }) => async n => {
                      oe("changeAudioDeviceId", n), e.releaseAudioDevice();
                      const r = await f(n).catch(e => {
                          throw t.showError(e)
                      });
                      e.setAudioTrack(r, n)
                  })(e), [e]),
                  b = Object(r.useCallback)((e => () => {
                      oe("joinConference()");
                      const {
                          ui: t,
                          room: n
                      } = e;
                      if (n.isJoined) throw t.showError(new Error("Already in the room!"));
                      ae(e), t.isSettingsOpen = !1
                  })(e), [e]),
                  h = Object(r.useCallback)((({
                      ui: e
                  }) => () => {
                      oe("closeSettings()"), e.isSettingsOpen = !1
                  })(e), [e]),
                  v = Object(r.useCallback)((({
                      media: e
                  }) => () => {
                      oe("toggleAudioMuted()"), e.toggleMuted("audio")
                  })(e), [e]),
                  g = Object(r.useCallback)((({
                      media: e
                  }) => () => {
                      oe("toggleVideoMuted()"), e.toggleMuted("video")
                  })(e), [e]),
                  {
                      ui: y,
                      media: w,
                      room: k,
                      client: O
                  } = e;
              return Object(a.c)(d.a, null, () => y.isSettingsOpen ? Object(a.c)(K, {
                  stream: w.stream,
                  defaultDispName: O.displayName,
                  browser: O.browser,
                  hasGetDisplayMedia: O.hasGetDisplayMedia,
                  hasUserVideoDevice: O.hasUserVideoDevice,
                  onChangeDispName: t,
                  videoType: w.videoType,
                  onClickEnableUserVideo: n,
                  onClickDisableUserVideo: i,
                  onClickEnableDisplayVideo: o,
                  onClickDisableDisplayVideo: s,
                  videoDeviceId: w.videoDeviceId || "",
                  audioDeviceId: w.audioDeviceId || "",
                  videoInDevices: w.videoInDevices.slice(),
                  audioInDevices: w.audioInDevices.slice(),
                  onChangeVideoDeviceId: c,
                  onChangeAudioDeviceId: l,
                  isVideoTrackMuted: w.isVideoTrackMuted,
                  isAudioTrackMuted: w.isAudioTrackMuted,
                  onClickToggleVideoMuted: g,
                  onClickToggleAudioMuted: v,
                  isReEntering: y.isReEntering,
                  isJoined: k.isJoined,
                  isDisplayNameValid: O.isDisplayNameValid,
                  onClickCloseSettings: h,
                  onClickJoinConference: b
              }) : Object(a.c)(r.Fragment, null))
          };
          const de = Object(a.b)({
              position: "absolute",
              top: 8,
              left: 8,
              zIndex: x.d.notification
          }, ";label:wrapperStyle;");
          var ue = ({
              children: e
          }) => Object(a.c)("div", {
              css: de
          }, e);
          var be = ({
              type: e,
              text: t
          }) => Object(a.c)("div", {
              css: he
          }, Object(a.c)(V.b, {
              name: e
          }), Object(a.c)("span", {
              css: pe
          }, t));
          const he = Object(a.b)({
                  display: "flex",
                  alignItems: "center",
                  padding: "4px 8px",
                  marginBottom: 4,
                  fontSize: ".8rem",
                  borderRadius: 2,
                  backgroundColor: l.c.white,
                  willChange: "transform",
                  animation: a.d `from { transform: translateX(-200%); }` + " .2s ease"
              }, ";label:wrapperStyle;"),
              pe = {
                  name: "1h4ubut-textStyle",
                  styles: "text-indent:4px;width:200px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;;label:textStyle;"
              };

          function fe() {
              return (fe = Object.assign || function(e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                  }
                  return e
              }).apply(this, arguments)
          }
          var me = () => {
                  const e = Object(r.useContext)(u.a),
                      {
                          notification: t
                      } = e;
                  return Object(a.c)(d.a, null, () => Object(a.c)(ue, null, t.items.slice().map(e => Object(a.c)(be, fe({
                      key: e.id
                  }, e)))))
              },
              ve = n(24);
          var ge = ({
              chat: e
          }) => Object(a.c)("div", {
              css: e.isMine ? [ye, we] : ye
          }, Object(a.c)("div", {
              css: ke
          }, e.from, " at ", new Date(e.time).toLocaleTimeString()), e.text);
          const ye = Object(a.b)({
                  boxSizing: "border-box",
                  width: "85%",
                  padding: "4px 8px",
                  marginTop: 8,
                  marginBottom: 8,
                  wordBreak: "break-word",
                  borderRadius: 2,
                  border: "1px solid " + l.c.gray
              }, ";label:wrapperStyle;"),
              we = Object(a.b)({
                  marginLeft: "15%",
                  backgroundColor: l.c.gray
              }, ";label:mineStyle;"),
              ke = {
                  name: "lr7gfj-headStyle",
                  styles: "font-size:.8rem;;label:headStyle;"
              };
          var Oe = ({
              chats: e,
              onClickCloser: t,
              onClickSend: n
          }) => {
              const [i, o] = Object(r.useState)(""), s = Object(r.useCallback)(() => {
                  n(i), o("")
              }, [i, n]), c = Object(r.useRef)(null);
              return Object(r.useEffect)(() => {
                  if (null === c.current) return;
                  const e = c.current;
                  e.scrollTo({
                      top: e.scrollHeight,
                      behavior: "smooth"
                  })
              }, [e, c]), Object(a.c)(I, null, Object(a.c)("div", {
                  css: je
              }, Object(a.c)("div", {
                  css: Ce
              }, Object(a.c)(V.c, {
                  name: "close",
                  onClick: t
              })), Object(a.c)("div", {
                  css: Se,
                  ref: c
              }, e.map(e => Object(a.c)(ge, {
                  key: e.id,
                  chat: e
              }))), Object(a.c)("div", {
                  css: xe
              }, Object(a.c)("input", {
                  type: "text",
                  value: i,
                  onChange: e => o(e.target.value),
                  css: Te
              }), Object(a.c)(V.c, {
                  name: "send",
                  disabled: 0 === i.length,
                  onClick: s
              }))))
          };
          const je = Object(a.b)({
                  display: "grid",
                  gridTemplateRows: "20px 1fr 20px",
                  width: x.a,
                  height: "80%",
                  boxSizing: "border-box",
                  margin: "32px auto 0",
                  padding: 8,
                  backgroundColor: l.c.white
              }, ";label:wrapperStyle;"),
              Ce = {
                  name: "11prr2o-headStyle",
                  styles: "text-align:right;;label:headStyle;"
              },
              Se = {
                  name: "rxpk0m-scrollerStyle",
                  styles: "overflow-y:scroll;overflow-scrolling:touch;;label:scrollerStyle;"
              },
              xe = {
                  name: "d4s163-editorStyle",
                  styles: "display:flex;align-items:center;;label:editorStyle;"
              },
              Te = {
                  name: "19w3c9f-inputStyle",
                  styles: "flex:1 1 auto;margin-right:8px;;label:inputStyle;"
              },
              Ie = s()("effect:chat"),
              Ae = () => {
                  const e = Object(r.useContext)(u.a),
                      t = Object(r.useCallback)((({
                          ui: e
                      }) => () => {
                          Ie("openChat()"), e.isChatOpen = !0
                      })(e), [e]);
                  return Object(a.c)(d.a, null, () => Object(a.c)(V.c, {
                      name: "chat",
                      onClick: t
                  }))
              },
              De = () => {
                  const e = Object(r.useContext)(u.a),
                      t = Object(r.useCallback)((({
                          ui: e
                      }) => () => {
                          Ie("closeChat()"), e.isChatOpen = !1
                      })(e), [e]),
                      n = Object(r.useCallback)((({
                          room: e,
                          client: t
                      }) => n => {
                          Ie("sendChat()", n), e.addLocalChat(t.displayName, n)
                      })(e), [e]),
                      {
                          ui: i,
                          room: o
                      } = e;
                  return Object(a.c)(d.a, null, () => i.isChatOpen ? Object(a.c)(Oe, {
                      chats: [...o.chats],
                      onClickCloser: t,
                      onClickSend: n
                  }) : Object(a.c)(r.Fragment, null))
              };
          var Ee = ({
              rtcStats: e
          }) => {
              const t = null === e ? null : Me(e);
              return Object(a.c)("div", {
                  css: Re
              }, Object(a.c)("pre", {
                  css: Ve
              }, null === t ? "Loading..." : t))
          };
          const Me = e => {
                  const t = (e => [...e.values()].filter(e => "candidate-pair" === e.type).filter(e => "selected" in e ? e.selected && e.nominated : e.nominated).map(({
                          localCandidateId: t,
                          remoteCandidateId: n
                      }) => {
                          const r = e.get(t),
                              i = e.get(n);
                          return r || console.warn("localCandidate not found!"), i || console.warn("remoteCandidate not found!"), {
                              localCandidate: r ? {
                                  address: r.address || r.ip,
                                  port: r.port,
                                  protocol: r.protocol,
                                  type: r.candidateType
                              } : {},
                              remoteCandidate: i ? {
                                  address: i.address || i.ip,
                                  port: i.port,
                                  protocol: i.protocol,
                                  type: i.candidateType
                              } : {}
                          }
                      }))(e),
                      {
                          audioOutbounds: n,
                          videoOutbounds: r
                      } = (e => {
                          const t = [...e.values()].filter(e => "outbound-rtp" === e.type);
                          t.length > 2 && console.warn("outbound-rtp reports are found more than 2!");
                          const n = {
                              video: {
                                  bytesSent: 0,
                                  packetsSent: 0
                              },
                              audio: {
                                  bytesSent: 0,
                                  packetsSent: 0
                              }
                          };
                          for (const e of t) {
                              const t = e.kind || e.mediaType;
                              "audio" === t || "video" === t ? (n[t].bytesSent += e.bytesSent, n[t].packetsSent += e.packetsSent) : console.warn(`unknown outbound rtp kind: ${t} found!`)
                          }
                          return {
                              audioOutbounds: n.audio,
                              videoOutbounds: n.video
                          }
                      })(e),
                      {
                          audioInbounds: i,
                          videoInbounds: a
                      } = (e => {
                          const t = [...e.values()].filter(e => "inbound-rtp" === e.type),
                              n = {
                                  size: 0,
                                  bytesReceived: 0,
                                  packetsReceived: 0,
                                  packetsLost: 0,
                                  nackCount: 0,
                                  firCount: 0,
                                  pliCount: 0,
                                  items: []
                              },
                              r = {
                                  size: 0,
                                  bytesReceived: 0,
                                  packetsReceived: 0,
                                  packetsLost: 0,
                                  items: []
                              };
                          for (const e of t) {
                              const t = {
                                      bytesReceived: e.bytesReceived,
                                      packetsReceived: e.packetsReceived,
                                      packetsLost: e.packetsLost,
                                      ssrc: e.ssrc
                                  },
                                  i = e.kind || e.mediaType;
                              "audio" === i || "video" === i ? ("video" === i && (t.nackCount = e.nackCount || 0, t.firCount = e.firCount || 0, t.pliCount = e.pliCount || 0, n.items.push(t)), "audio" === i && r.items.push(t)) : console.warn(`unknown outbound rtp kind: ${i} found!`)
                          }
                          for (const e of n.items) n.size += 1, n.bytesReceived += e.bytesReceived, n.packetsReceived += e.packetsReceived, n.packetsLost += e.packetsLost, n.nackCount += e.nackCount, n.firCount += e.firCount, n.pliCount += e.pliCount;
                          for (const e of r.items) r.size += 1, r.bytesReceived += e.bytesReceived, r.packetsReceived += e.packetsReceived, r.packetsLost += e.packetsLost;
                          return {
                              videoInbounds: n,
                              audioInbounds: r
                          }
                      })(e);
                  return `\n# Active ICE candidate pairs\n${t.map(({localCandidate:e,remoteCandidate:t},n)=>`\
                  n # # Pair $ {
                      n + 1
                  }\
                  n - local: $ {
                      e.type
                  }
                  $ {
                      e.protocol
                  }: //${e.address}:${e.port}\n- remote: ${t.type} ${t.protocol}://
                  $ {
                    t.address
                }: $ {
                    t.port
                }\
                n `.trim()).join("\n").trim()}\n\n# Outbounds(sent)\n- Audio: ${n.bytesSent} bytes(${n.packetsSent} packets)\n- Video: ${r.bytesSent} bytes(${r.packetsSent} packets)\n\n# Inbounds(received)\n## Total\n- ${i.size} audio(s)\n  - ${i.bytesReceived} bytes(${i.packetsReceived} packets)\n  - PacketsLost: ${i.packetsLost}\n- ${a.size} video(s)\n  - ${a.bytesReceived} bytes(${a.packetsReceived} packets)\n  - PacketsLost: ${a.packetsLost} / NACK: ${a.nackCount} / FIR: ${a.firCount} / PLI: ${a.pliCount}\n\n## Details\n${i.items.map((e,t)=>`\n- Audio ${t+1}: ${e.ssrc}\n  - ${e.bytesReceived} bytes(${e.packetsReceived} packets)\n  - PacketsLost: ${e.packetsLost}\n`.trim()).join("\n").trim()}\n${a.items.map((e,t)=>`\n- Video ${t+1}: ${e.ssrc}\n  - ${e.bytesReceived} bytes(${e.packetsReceived} packets)\n  - PacketsLost: ${e.packetsLost} / NACK: ${e.nackCount} / FIR: ${e.firCount} / PLI: ${e.pliCount}\n`.trim()).join("\n").trim()}\n  `.trim()
                }, Re = {
                    name: "1wf9sje-wrapperStyle",
                    styles: "margin:0;padding:4px;font-size:.8rem;;label:wrapperStyle;"
                }, Ve = {
                    name: "1tmtdrc-statsStyle",
                    styles: "margin:0;white-space:pre-wrap;word-break:break-all;;label:statsStyle;"
                };
                var _e = ({
                    rtcStats: e
                }) => {
                    const [t, n] = Object(r.useState)(""), i = null === e ? null : $e(e, t.trim());
                    return Object(a.c)(r.Fragment, null, Object(a.c)("input", {
                        type: "text",
                        placeholder: "filter stat reports",
                        value: t,
                        onChange: e => n(e.target.value),
                        css: Ne
                    }), Object(a.c)("pre", {
                        css: ze
                    }, null === i ? "Loading..." : `${i.size} report(s) found.\n${JSON.stringify(i.reports,null,2)}`))
                };
                const $e = (e, t) => {
                        if (0 === e.size) return null;
                        let n = 0;
                        const r = {};
                        for (const [i, a] of e) {
                            JSON.stringify(a).includes(t) && (r[i] = a, n++)
                        }
                        return {
                            reports: r,
                            size: n
                        }
                    },
                    Ne = {
                        name: "1yn50m4-inputStyle",
                        styles: "box-sizing:border-box;width:100%;;label:inputStyle;"
                    },
                    ze = {
                        name: "1r75v0t-statsStyle",
                        styles: "margin:0;padding:4px;font-size:.8rem;white-space:pre-wrap;word-break:break-all;;label:statsStyle;"
                    };
                var Le = ({
                    isSfu: e,
                    rtcStats: t,
                    onClickCloser: n
                }) => Object(a.c)(I, null, Object(a.c)("div", {
                    css: Pe
                }, Object(a.c)("div", {
                    css: Fe
                }, Object(a.c)(V.c, {
                    name: "close",
                    onClick: n
                })), e ? Object(a.c)("div", {
                    css: Ue
                }, Object(a.c)("details", {
                    open: !0
                }, Object(a.c)("summary", null, "Stats summary"), Object(a.c)(Ee, {
                    rtcStats: t
                })), Object(a.c)("details", null, Object(a.c)("summary", null, "Stats dump"), Object(a.c)(_e, {
                    rtcStats: t
                }))) : Object(a.c)("div", {
                    css: qe
                }, "Stats view is not available in mesh room type.")));
                const Pe = Object(a.b)({
                        display: "grid",
                        gridTemplateRows: "20px 1fr",
                        width: x.a,
                        height: "80%",
                        boxSizing: "border-box",
                        margin: "32px auto 0",
                        padding: 8,
                        backgroundColor: l.c.white
                    }, ";label:wrapperStyle;"),
                    Fe = {
                        name: "11prr2o-headStyle",
                        styles: "text-align:right;;label:headStyle;"
                    },
                    Ue = {
                        name: "12hbg2b-scrollerStyle",
                        styles: "box-sizing:border-box;overflow:hidden;overflow-y:scroll;overflow-scrolling:touch;;label:scrollerStyle;"
                    },
                    qe = {
                        name: "l1ytd1-naStyle",
                        styles: "text-align:center;;label:naStyle;"
                    },
                    Je = s()("effect:stats"),
                    Ge = () => {
                        const e = Object(r.useContext)(u.a),
                            t = Object(r.useCallback)((({
                                ui: e,
                                room: t
                            }) => () => {
                                Je("openStats()"), e.isStatsOpen = !0;
                                const n = setInterval(async () => {
                                    const e = t.getPeerConnection();
                                    null !== e && e.getStats().then(e => t.rtcStats = e).catch(e => Je("getStats() error", e))
                                }, 1e3);
                                Object(b.n)(() => !e.isStatsOpen, () => {
                                    Je("stop stats collector"), clearInterval(n), t.rtcStats = null
                                })
                            })(e), [e]);
                        return Object(a.c)(d.a, null, () => Object(a.c)(V.c, {
                            name: "assessment",
                            onClick: t
                        }))
                    },
                    We = () => {
                        const e = Object(r.useContext)(u.a),
                            t = Object(r.useCallback)((({
                                ui: e
                            }) => () => {
                                Je("closeStats()"), e.isStatsOpen = !1
                            })(e), [e]),
                            {
                                ui: n,
                                room: i
                            } = e;
                        return Object(a.c)(d.a, null, () => n.isStatsOpen ? Object(a.c)(Le, {
                            isSfu: "sfu" === i.mode,
                            rtcStats: i.rtcStats,
                            onClickCloser: t
                        }) : Object(a.c)(r.Fragment, null))
                    },
                    Be = s()("effect:exit"),
                    He = () => {
                        const e = Object(r.useContext)(u.a),
                            t = Object(r.useCallback)(() => {
                                Be("exitRoom()"), confirm("Are you sure to exit?") ? location.href = "/index.html" : Be("canceled")
                            }, [e]);
                        return Object(a.c)(d.a, null, () => Object(a.c)(V.c, {
                            name: "exit_to_app",
                            onClick: t
                        }))
                    };
                var Ye = () => {
                    const e = Object(r.useContext)(u.a),
                        {
                            room: t
                        } = e;
                    return Object(a.c)(d.a, null, () => null === t.pinnedStream ? Object(a.c)(r.Fragment, null) : Object(a.c)(D, {
                        stream: t.pinnedStream,
                        isVideoOnly: !0
                    }))
                };
                var Xe = Object(r.memo)(({
                    stream: e,
                    browser: t
                }) => {
                    const [n, i] = Object(r.useState)({});
                    return Object(r.useEffect)(() => {
                        let n = 0;
                        const r = () => {
                            n = requestAnimationFrame(r);
                            const [a] = e.getVideoTracks(), [o] = e.getAudioTracks(), s = a ? a.getSettings() : {};
                            i({
                                timestamp: Date.now(),
                                browserName: t.name,
                                browserVersion: "v" + t.version,
                                streamId: e.id,
                                video: a ? {
                                    trackId: a.id,
                                    width: s.width,
                                    height: s.height,
                                    frameRate: s.frameRate
                                } : {},
                                audio: o ? {
                                    trackId: o.id
                                } : {}
                            })
                        };
                        return n = requestAnimationFrame(r), () => cancelAnimationFrame(n)
                    }, [e, t, i]), Object(a.c)("pre", {
                        css: Ke
                    }, JSON.stringify(n, null, 2))
                });
                const Ke = Object(a.b)({
                        margin: 0,
                        padding: 4,
                        width: "100%",
                        height: "100%",
                        boxSizing: "border-box",
                        overflow: "auto",
                        overflowScrolling: "touch",
                        fontSize: ".8rem",
                        backgroundColor: l.c.black,
                        color: l.c.white
                    }, ";label:wrapperStyle;"),
                    Ze = n(28);
                var Qe = Object(r.memo)(({
                    stream: e
                }) => {
                    const [t, n] = Object(r.useState)(-1 / 0);
                    return Object(r.useEffect)(() => {
                        if (0 === e.getAudioTracks().length) return;
                        const t = Ze(e, {
                            threshold: -75
                        });
                        return t.on("volume_change", e => e !== -1 / 0 && n(e)), () => t.stop()
                    }, [e]), Object(a.c)("div", {
                        style: et(t),
                        css: tt
                    })
                });
                const et = e => {
                        if (e === -1 / 0) return {};
                        const t = e + 100;
                        return {
                            height: .1 * t,
                            opacity: .01 * t
                        }
                    },
                    tt = Object(a.b)({
                        backgroundColor: l.c.blue,
                        willChange: ["height", "opacity"]
                    }, ";label:wrapperStyle;");
                var nt = ({
                    stream: e,
                    displayName: t,
                    browser: n,
                    videoType: i,
                    isVideoTrackMuted: o,
                    isAudioTrackMuted: s,
                    onClickToggleAudioMuted: c,
                    onClickToggleVideoMuted: l,
                    onClickCastVideo: d,
                    onClickOpenSettings: u
                }) => {
                    const [b, h] = Object(r.useState)(!1), [p, f] = Object(r.useState)(!1);
                    return Object(a.c)("div", {
                        css: b ? [rt, it] : rt
                    }, Object(a.c)("div", {
                        css: at
                    }, Object(a.c)(D, {
                        stream: e,
                        isReverse: "camera" === i,
                        isVideoOnly: !0
                    }), Object(a.c)("div", {
                        css: ct
                    }, null === i ? null : Object(a.c)(V.c, {
                        name: "cast",
                        showEdge: !0,
                        title: "Cast your video",
                        onClick: d
                    }), Object(a.c)(V.c, {
                        name: "info",
                        showEdge: !0,
                        title: "Toggle stream info",
                        onClick: () => f(!p)
                    }), Object(a.c)(V.c, {
                        name: "settings",
                        showEdge: !0,
                        title: "Open settings",
                        onClick: u
                    }), b ? Object(a.c)(V.c, {
                        name: "keyboard_arrow_right",
                        showEdge: !0,
                        title: "Maximize",
                        onClick: () => h(!1)
                    }) : Object(a.c)(V.c, {
                        name: "keyboard_arrow_left",
                        showEdge: !0,
                        title: "Minimize",
                        onClick: () => h(!0)
                    })), p ? Object(a.c)("div", {
                        css: ot
                    }, Object(a.c)(Xe, {
                        stream: e,
                        browser: n
                    })) : null, Object(a.c)("div", {
                        css: st
                    }, Object(a.c)(Qe, {
                        stream: e
                    }), Object(a.c)(H, {
                        displayName: t,
                        browser: n,
                        controllers: Object(a.c)(r.Fragment, null, null === i ? null : Object(a.c)(V.c, {
                            name: o ? "videocam_off" : "videocam",
                            title: o ? "Unmute video" : "Mute video",
                            onClick: l
                        }), Object(a.c)(V.c, {
                            name: s ? "mic_off" : "mic",
                            title: s ? "Unmute audio" : "Mute audio",
                            onClick: c
                        }))
                    }))))
                };
                const rt = Object(a.b)({
                        outline: "1px solid " + l.c.gray,
                        transition: "all .2s ease",
                        willChange: "transform"
                    }, ";label:wrapperStyle;"),
                    it = {
                        name: "u4pngj-minimizeStyle",
                        styles: "transform:translateX(-85%);;label:minimizeStyle;"
                    },
                    at = Object(a.b)({
                        position: "relative",
                        width: 400,
                        height: 300,
                        backgroundColor: l.c.black
                    }, ";label:videoStyle;"),
                    ot = {
                        name: "2ietqi-infoStyle",
                        styles: "position:absolute;left:0;right:0;top:0;bottom:0;z-index:10;;label:infoStyle;"
                    },
                    st = {
                        name: "1es7990-controllerStyle",
                        styles: "position:absolute;left:0;right:0;bottom:0;z-index:1;;label:controllerStyle;"
                    },
                    ct = Object(a.b)({
                        position: "absolute",
                        top: 4,
                        right: 4,
                        zIndex: 100,
                        display: "flex",
                        alignItems: "center",
                        color: l.c.white
                    }, ";label:actionStyle;"),
                    lt = s()("effect:local-stream");
                var dt = () => {
                    const e = Object(r.useContext)(u.a),
                        t = Object(r.useCallback)((({
                            room: e
                        }) => () => {
                            lt("castVideo()"), e.castRequestCount = e.castRequestCount + 1
                        })(e), [e]),
                        n = Object(r.useCallback)((({
                            ui: e
                        }) => () => {
                            lt("openSettings()"), e.isSettingsOpen = !0
                        })(e), [e]),
                        i = Object(r.useCallback)((({
                            media: e
                        }) => () => {
                            lt("toggleAudioMuted()"), e.toggleMuted("audio")
                        })(e), [e]),
                        o = Object(r.useCallback)((({
                            media: e
                        }) => () => {
                            lt("toggleVideoMuted()"), e.toggleMuted("video")
                        })(e), [e]),
                        {
                            media: s,
                            client: c,
                            ui: l
                        } = e;
                    return Object(a.c)(d.a, null, () => l.isSettingsOpen ? Object(a.c)(r.Fragment, null) : Object(a.c)(nt, {
                        stream: s.stream,
                        displayName: c.displayName,
                        browser: c.browser,
                        videoType: s.videoType,
                        isVideoTrackMuted: s.isVideoTrackMuted,
                        isAudioTrackMuted: s.isAudioTrackMuted,
                        onClickToggleAudioMuted: i,
                        onClickToggleVideoMuted: o,
                        onClickCastVideo: t,
                        onClickOpenSettings: n
                    }))
                };
                const ut = s()("effect:remote-streams");
                var bt = ({
                    stream: e,
                    stat: t,
                    isPinned: n,
                    onClickSetPinned: i
                }) => {
                    const o = !(!t || !t.isVideoDisabled),
                        [s, c] = Object(r.useState)(!1);
                    return Object(a.c)(r.Fragment, null, Object(a.c)("div", {
                        css: ht
                    }, Object(a.c)(D, {
                        stream: e
                    }), Object(a.c)("div", {
                        css: mt
                    }, o ? null : Object(a.c)(V.c, {
                        name: n ? "cancel_presentation" : "present_to_all",
                        showEdge: !0,
                        title: "Pin this video",
                        onClick: i
                    }), Object(a.c)(V.c, {
                        name: "info",
                        showEdge: !0,
                        title: "Toggle stream info",
                        onClick: () => c(!s)
                    })), s && null !== t ? Object(a.c)("div", {
                        css: pt
                    }, Object(a.c)(Xe, {
                        stream: e,
                        browser: t.browser
                    })) : null, Object(a.c)("div", {
                        css: ft
                    }, null !== t ? Object(a.c)(r.Fragment, null, Object(a.c)(Qe, {
                        stream: e
                    }), Object(a.c)(H, {
                        displayName: t.displayName,
                        browser: t.browser,
                        controllers: Object(a.c)(r.Fragment, null, t.isVideoDisabled ? null : Object(a.c)(V.b, {
                            name: t.isVideoMuted ? "videocam_off" : "videocam"
                        }), Object(a.c)(V.b, {
                            name: t.isAudioMuted ? "mic_off" : "mic"
                        }))
                    })) : null)))
                };
                const ht = Object(a.b)({
                        position: "relative",
                        height: x.c / 4 * 3,
                        backgroundColor: l.c.black
                    }, ";label:videoStyle;"),
                    pt = {
                        name: "2ietqi-infoStyle",
                        styles: "position:absolute;left:0;right:0;top:0;bottom:0;z-index:10;;label:infoStyle;"
                    },
                    ft = {
                        name: "1es7990-controllerStyle",
                        styles: "position:absolute;left:0;right:0;bottom:0;z-index:1;;label:controllerStyle;"
                    },
                    mt = Object(a.b)({
                        position: "absolute",
                        top: 4,
                        right: 4,
                        zIndex: 100,
                        display: "flex",
                        alignItems: "center",
                        color: l.c.white
                    }, ";label:actionStyle;");
                const vt = ([, e], [, t]) => e.getVideoTracks().length > t.getVideoTracks().length ? -1 : 1;
                var gt = ({
                    streams: e,
                    stats: t,
                    pinnedId: n,
                    onClickSetPinned: r
                }) => Object(a.c)("div", {
                    css: yt
                }, Object(a.c)("div", {
                    css: wt
                }, Object(a.c)("span", {
                    css: kt
                }, e.length), " participant(s)"), e.sort(vt).map(([e, i]) => {
                    const o = t.find(([t]) => t === e),
                        s = o ? o[1] : null,
                        c = e === n;
                    return Object(a.c)(bt, {
                        key: e,
                        stream: i,
                        stat: s,
                        isPinned: c,
                        onClickSetPinned: () => r(e)
                    })
                }));
                const yt = Object(a.b)({
                        width: x.c
                    }, ";label:wrapperStyle;"),
                    wt = Object(a.b)({
                        height: x.b,
                        padding: 4,
                        boxSizing: "border-box",
                        fontSize: ".8rem",
                        textAlign: "center"
                    }, ";label:headStyle;"),
                    kt = {
                        name: "17kikuq-numberStyle",
                        styles: "font-size:.9rem;font-weight:bold;;label:numberStyle;"
                    };
                var Ot = () => {
                    const e = Object(r.useContext)(u.a),
                        t = Object(r.useCallback)((({
                            room: e
                        }) => t => {
                            const n = e.pinnedId === t ? null : t;
                            ut("setPinned()", n), e.pinnedId = n
                        })(e), [e]),
                        {
                            room: n
                        } = e;
                    return Object(a.c)(d.a, null, () => Object(a.c)(gt, {
                        streams: [...n.streams.entries()],
                        stats: [...n.stats.entries()],
                        pinnedId: n.pinnedId || "",
                        onClickSetPinned: t
                    }))
                };
                var jt = ({
                    children: e
                }) => Object(a.c)("div", {
                    css: Ct
                }, e);
                const Ct = {
                    name: "11v4elu-wrapperStyle",
                    styles: "height:100vh;position:relative;;label:wrapperStyle;"
                };
                var St = ({
                    children: e
                }) => Object(a.c)("div", {
                    css: xt
                }, e);
                const xt = {
                    name: "1kg00pe-wrapperStyle",
                    styles: "position:relative;width:100%;height:100%;background-image:url(./images/ping.svg);background-repeat:no-repeat;background-position:center center;;label:wrapperStyle;"
                };
                var Tt = ({
                    children: e
                }) => Object(a.c)("div", {
                    css: It
                }, Object(a.c)("div", {
                    css: At
                }, e));
                const It = Object(a.b)({
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        zIndex: x.d.base
                    }, ";label:wrapperStyle;"),
                    At = {
                        name: "1uct5qs-bottomStyle",
                        styles: "position:absolute;left:8px;bottom:8px;;label:bottomStyle;"
                    };
                var Dt = ({
                    children: e,
                    openers: t
                }) => {
                    const [n, i] = Object(r.useState)(!0);
                    return Object(a.c)("div", {
                        css: Rt,
                        className: n ? Et : ""
                    }, Object(a.c)("div", {
                        css: Vt
                    }, e), Object(a.c)("div", {
                        css: Object(_.a)([_t, $t], ";label:RightMenu;")
                    }, Object(a.c)(V.c, {
                        name: n ? "chevron_right" : "chevron_left",
                        onClick: () => i(!n)
                    })), t.map((e, t) => Object(a.c)("div", {
                        key: t,
                        css: Object(_.a)([_t, Object(a.b)({
                            top: x.b * (t + 1)
                        }, ";label:RightMenu;")], ";label:RightMenu;")
                    }, e)))
                };
                const Et = "-visible",
                    Mt = x.c,
                    Rt = Object(a.b)({
                        position: "absolute",
                        top: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: x.d.base,
                        width: Mt,
                        backgroundColor: l.c.gray,
                        height: "100%",
                        transition: ".25s ease transform",
                        transform: `translateX(${Mt}px)`,
                        willChange: "transform",
                        ["&." + Et]: {
                            transform: "translateX(0)"
                        }
                    }, ";label:wrapperStyle;"),
                    Vt = {
                        name: "7jmvd7-scrollerStyle",
                        styles: "height:100%;overflow-y:scroll;overflow-scrolling:touch;;label:scrollerStyle;"
                    },
                    _t = Object(a.b)({
                        boxSizing: "border-box",
                        position: "absolute",
                        left: -x.b,
                        width: x.b,
                        height: x.b,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "inherit",
                        cursor: "pointer",
                        borderBottom: "1px solid " + l.c.white
                    }, ";label:knobStyle;"),
                    $t = Object(a.b)({
                        top: 0 * x.b
                    }, ";label:togglerStyle;");
                class Nt extends r.Component {
                    constructor(e, t) {
                        super(e, t), this.state = {
                            err: null
                        }
                    }
                    render() {
                        return null !== this.state.err ? Object(a.c)(jt, null, Object(a.c)(y, {
                            error: this.state.err
                        })) : Object(a.c)(jt, null, Object(a.c)(S, null, Object(a.c)(St, null, Object(a.c)(Ye, null)), Object(a.c)(Tt, null, Object(a.c)(dt, null)), Object(a.c)(Dt, {
                            openers: [Object(a.c)(Ae, {
                                key: "chat"
                            }), Object(a.c)(ve.a, {
                                key: "reaction"
                            }), Object(a.c)(Ge, {
                                key: "stats"
                            }), Object(a.c)(He, {
                                key: "exit"
                            })]
                        }, Object(a.c)(Ot, null)), Object(a.c)(le, null), Object(a.c)(De, null), Object(a.c)(We, null), Object(a.c)(me, null)))
                    }
                    componentDidCatch(e) {
                        this.setState({
                            err: e
                        })
                    }
                }
                var zt = Nt;
                const Lt = s()("main");
                (async () => {
                    Lt(`${c.a} v${c.b}`), document.title += " v" + c.b, Object(i.render)(Object(a.c)(r.StrictMode, null, Object(a.c)(a.a, {
                        styles: l.d
                    }), Object(a.c)(zt, null)), document.getElementById("app-root"))
                })().catch(e => console.error(e))
                }]);