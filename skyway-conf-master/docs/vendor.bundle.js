(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  [, function(e, t, n) {
      "use strict";
      e.exports = n(25)
  }, function(e, t, n) {
      "use strict";
      (function(e, r) {
          n.d(t, "a", (function() {
              return Le
          })), n.d(t, "b", (function() {
              return Ye
          })), n.d(t, "c", (function() {
              return te
          })), n.d(t, "d", (function() {
              return rt
          })), n.d(t, "e", (function() {
              return it
          })), n.d(t, "f", (function() {
              return ut
          })), n.d(t, "g", (function() {
              return K
          })), n.d(t, "h", (function() {
              return ht
          })), n.d(t, "i", (function() {
              return et
          })), n.d(t, "j", (function() {
              return Ke
          })), n.d(t, "k", (function() {
              return We
          })), n.d(t, "l", (function() {
              return yt
          })), n.d(t, "m", (function() {
              return bt
          })), n.d(t, "n", (function() {
              return wt
          }));
          /*! *****************************************************************************
          Copyright (c) Microsoft Corporation. All rights reserved.
          Licensed under the Apache License, Version 2.0 (the "License"); you may not use
          this file except in compliance with the License. You may obtain a copy of the
          License at http://www.apache.org/licenses/LICENSE-2.0

          THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
          KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
          WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
          MERCHANTABLITY OR NON-INFRINGEMENT.

          See the Apache Version 2.0 License for specific language governing permissions
          and limitations under the License.
          ***************************************************************************** */
          var i = function(e, t) {
              return (i = Object.setPrototypeOf || {
                      __proto__: []
                  }
                  instanceof Array && function(e, t) {
                      e.__proto__ = t
                  } || function(e, t) {
                      for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                  })(e, t)
          };
          var o = function() {
              return (o = Object.assign || function(e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                      for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                  return e
              }).apply(this, arguments)
          };

          function s(e) {
              var t = "function" == typeof Symbol && e[Symbol.iterator],
                  n = 0;
              return t ? t.call(e) : {
                  next: function() {
                      return e && n >= e.length && (e = void 0), {
                          value: e && e[n++],
                          done: !e
                      }
                  }
              }
          }

          function a(e, t) {
              var n = "function" == typeof Symbol && e[Symbol.iterator];
              if (!n) return e;
              var r, i, o = n.call(e),
                  s = [];
              try {
                  for (;
                      (void 0 === t || t-- > 0) && !(r = o.next()).done;) s.push(r.value)
              } catch (e) {
                  i = {
                      error: e
                  }
              } finally {
                  try {
                      r && !r.done && (n = o.return) && n.call(o)
                  } finally {
                      if (i) throw i.error
                  }
              }
              return s
          }

          function u() {
              for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(a(arguments[t]));
              return e
          }
          var c = [];
          Object.freeze(c);
          var l = {};

          function d() {
              return ++Pe.mobxGuid
          }

          function f(e) {
              throw p(!1, e), "X"
          }

          function p(e, t) {
              if (!e) throw new Error("[mobx] " + (t || "An invariant failed, however the error is obfuscated because this is a production build."))
          }
          Object.freeze(l);

          function h(e) {
              var t = !1;
              return function() {
                  if (!t) return t = !0, e.apply(this, arguments)
              }
          }
          var m = function() {};

          function g(e) {
              return null !== e && "object" == typeof e
          }

          function y(e) {
              if (null === e || "object" != typeof e) return !1;
              var t = Object.getPrototypeOf(e);
              return t === Object.prototype || null === t
          }

          function v(e, t, n) {
              Object.defineProperty(e, t, {
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                  value: n
              })
          }

          function b(e, t) {
              var n = "isMobX" + e;
              return t.prototype[n] = !0,
                  function(e) {
                      return g(e) && !0 === e[n]
                  }
          }

          function w(e) {
              return e instanceof Map
          }

          function _(e) {
              return e instanceof Set
          }

          function E(e) {
              var t = new Set;
              for (var n in e) t.add(n);
              return Object.getOwnPropertySymbols(e).forEach((function(n) {
                  Object.getOwnPropertyDescriptor(e, n).enumerable && t.add(n)
              })), Array.from(t)
          }

          function S(e) {
              return e && e.toString ? e.toString() : new String(e).toString()
          }

          function k(e) {
              return null === e ? null : "object" == typeof e ? "" + e : e
          }
          var C = Symbol("mobx administration"),
              x = function() {
                  function e(e) {
                      void 0 === e && (e = "Atom@" + d()), this.name = e, this.isPendingUnobservation = !1, this.isBeingObserved = !1, this.observers = new Set, this.diffValue = 0, this.lastAccessedBy = 0, this.lowestObserverState = J.NOT_TRACKING
                  }
                  return e.prototype.onBecomeObserved = function() {
                      this.onBecomeObservedListeners && this.onBecomeObservedListeners.forEach((function(e) {
                          return e()
                      }))
                  }, e.prototype.onBecomeUnobserved = function() {
                      this.onBecomeUnobservedListeners && this.onBecomeUnobservedListeners.forEach((function(e) {
                          return e()
                      }))
                  }, e.prototype.reportObserved = function() {
                      return Fe(this)
                  }, e.prototype.reportChanged = function() {
                      je(),
                          function(e) {
                              if (e.lowestObserverState === J.STALE) return;
                              e.lowestObserverState = J.STALE, e.observers.forEach((function(t) {
                                  t.dependenciesState === J.UP_TO_DATE && (t.isTracing !== X.NONE && Ie(t, e), t.onBecomeStale()), t.dependenciesState = J.STALE
                              }))
                          }(this), Be()
                  }, e.prototype.toString = function() {
                      return this.name
                  }, e
              }(),
              T = b("Atom", x);

          function A(e, t, n) {
              void 0 === t && (t = m), void 0 === n && (n = m);
              var r, i = new x(e);
              return t !== m && nt("onBecomeObserved", i, t, r), n !== m && tt(i, n), i
          }
          var O = {
                  identity: function(e, t) {
                      return e === t
                  },
                  structural: function(e, t) {
                      return rn(e, t)
                  },
                  default: function(e, t) {
                      return Object.is(e, t)
                  },
                  shallow: function(e, t) {
                      return rn(e, t, 1)
                  }
              },
              P = Symbol("mobx did run lazy initializers"),
              N = Symbol("mobx pending decorators"),
              M = {},
              R = {};

          function j(e, t) {
              var n = t ? M : R;
              return n[e] || (n[e] = {
                  configurable: !0,
                  enumerable: t,
                  get: function() {
                      return B(this), this[e]
                  },
                  set: function(t) {
                      B(this), this[e] = t
                  }
              })
          }

          function B(e) {
              var t, n;
              if (!0 !== e[P]) {
                  var r = e[N];
                  if (r) {
                      v(e, P, !0);
                      var i = u(Object.getOwnPropertySymbols(r), Object.keys(r));
                      try {
                          for (var o = s(i), a = o.next(); !a.done; a = o.next()) {
                              var c = r[a.value];
                              c.propertyCreator(e, c.prop, c.descriptor, c.decoratorTarget, c.decoratorArguments)
                          }
                      } catch (e) {
                          t = {
                              error: e
                          }
                      } finally {
                          try {
                              a && !a.done && (n = o.return) && n.call(o)
                          } finally {
                              if (t) throw t.error
                          }
                      }
                  }
              }
          }

          function F(e, t) {
              return function() {
                  var n, r = function(r, i, s, a) {
                      if (!0 === a) return t(r, i, s, r, n), null;
                      if (!Object.prototype.hasOwnProperty.call(r, N)) {
                          var u = r[N];
                          v(r, N, o({}, u))
                      }
                      return r[N][i] = {
                          prop: i,
                          propertyCreator: t,
                          descriptor: s,
                          decoratorTarget: r,
                          decoratorArguments: n
                      }, j(i, e)
                  };
                  return I(arguments) ? (n = c, r.apply(null, arguments)) : (n = Array.prototype.slice.call(arguments), r)
              }
          }

          function I(e) {
              return (2 === e.length || 3 === e.length) && ("string" == typeof e[1] || "symbol" == typeof e[1]) || 4 === e.length && !0 === e[3]
          }

          function L(e, t, n) {
              return ft(e) ? e : Array.isArray(e) ? K.array(e, {
                  name: n
              }) : y(e) ? K.object(e, void 0, {
                  name: n
              }) : w(e) ? K.map(e, {
                  name: n
              }) : _(e) ? K.set(e, {
                  name: n
              }) : e
          }

          function D(e) {
              return e
          }

          function V(t) {
              p(t);
              var n = F(!0, (function(e, n, r, i, o) {
                      var s = r ? r.initializer ? r.initializer.call(e) : r.value : void 0;
                      Yt(e).addObservableProp(n, s, t)
                  })),
                  r = (void 0 !== e && e.env, n);
              return r.enhancer = t, r
          }
          var U = {
              deep: !0,
              name: void 0,
              defaultDecorator: void 0,
              proxy: !0
          };

          function z(e) {
              return null == e ? U : "string" == typeof e ? {
                  name: e,
                  deep: !0,
                  proxy: !0
              } : e
          }
          Object.freeze(U);
          var q = V(L),
              W = V((function(e, t, n) {
                  return null == e || Zt(e) || Dt(e) || qt(e) || Ht(e) ? e : Array.isArray(e) ? K.array(e, {
                      name: n,
                      deep: !1
                  }) : y(e) ? K.object(e, void 0, {
                      name: n,
                      deep: !1
                  }) : w(e) ? K.map(e, {
                      name: n,
                      deep: !1
                  }) : _(e) ? K.set(e, {
                      name: n,
                      deep: !1
                  }) : f(!1)
              })),
              G = V(D),
              H = V((function(e, t, n) {
                  return rn(e, t) ? t : e
              }));

          function $(e) {
              return e.defaultDecorator ? e.defaultDecorator.enhancer : !1 === e.deep ? D : L
          }
          var Y = {
                  box: function(e, t) {
                      arguments.length > 2 && Q("box");
                      var n = z(t);
                      return new _e(e, $(n), n.name, !0, n.equals)
                  },
                  array: function(e, t) {
                      arguments.length > 2 && Q("array");
                      var n = z(t);
                      return jt(e, $(n), n.name)
                  },
                  map: function(e, t) {
                      arguments.length > 2 && Q("map");
                      var n = z(t);
                      return new zt(e, $(n), n.name)
                  },
                  set: function(e, t) {
                      arguments.length > 2 && Q("set");
                      var n = z(t);
                      return new Gt(e, $(n), n.name)
                  },
                  object: function(e, t, n) {
                      "string" == typeof arguments[1] && Q("object");
                      var r = z(n);
                      if (!1 === r.proxy) return ot({}, e, t, r);
                      var i = st(r),
                          o = ot({}, void 0, void 0, r),
                          s = xt(o);
                      return at(s, e, t, i), s
                  },
                  ref: G,
                  shallow: W,
                  deep: q,
                  struct: H
              },
              K = function(e, t, n) {
                  if ("string" == typeof arguments[1] || "symbol" == typeof arguments[1]) return q.apply(null, arguments);
                  if (ft(e)) return e;
                  var r = y(e) ? K.object(e, t, n) : Array.isArray(e) ? K.array(e, t) : w(e) ? K.map(e, t) : _(e) ? K.set(e, t) : e;
                  if (r !== e) return r;
                  f(!1)
              };

          function Q(e) {
              f("Expected one or two arguments to observable." + e + ". Did you accidentally try to use observable." + e + " as decorator?")
          }
          Object.keys(Y).forEach((function(e) {
              return K[e] = Y[e]
          }));
          var J, X, Z = F(!1, (function(e, t, n, r, i) {
                  var s = n.get,
                      a = n.set,
                      u = i[0] || {};
                  Yt(e).addComputedProp(e, t, o({
                      get: s,
                      set: a,
                      context: e
                  }, u))
              })),
              ee = Z({
                  equals: O.structural
              }),
              te = function(e, t, n) {
                  if ("string" == typeof t) return Z.apply(null, arguments);
                  if (null !== e && "object" == typeof e && 1 === arguments.length) return Z.apply(null, arguments);
                  var r = "object" == typeof t ? t : {};
                  return r.get = e, r.set = "function" == typeof t ? t : r.set, r.name = r.name || e.name || "", new Se(r)
              };
          te.struct = ee,
              function(e) {
                  e[e.NOT_TRACKING = -1] = "NOT_TRACKING", e[e.UP_TO_DATE = 0] = "UP_TO_DATE", e[e.POSSIBLY_STALE = 1] = "POSSIBLY_STALE", e[e.STALE = 2] = "STALE"
              }(J || (J = {})),
              function(e) {
                  e[e.NONE = 0] = "NONE", e[e.LOG = 1] = "LOG", e[e.BREAK = 2] = "BREAK"
              }(X || (X = {}));
          var ne = function(e) {
              this.cause = e
          };

          function re(e) {
              return e instanceof ne
          }

          function ie(e) {
              switch (e.dependenciesState) {
                  case J.UP_TO_DATE:
                      return !1;
                  case J.NOT_TRACKING:
                  case J.STALE:
                      return !0;
                  case J.POSSIBLY_STALE:
                      for (var t = de(!0), n = ce(), r = e.observing, i = r.length, o = 0; o < i; o++) {
                          var s = r[o];
                          if (ke(s)) {
                              if (Pe.disableErrorBoundaries) s.get();
                              else try {
                                  s.get()
                              } catch (e) {
                                  return le(n), fe(t), !0
                              }
                              if (e.dependenciesState === J.STALE) return le(n), fe(t), !0
                          }
                      }
                      return pe(e), le(n), fe(t), !1
              }
          }

          function oe(e) {
              var t = e.observers.size > 0;
              Pe.computationDepth > 0 && t && f(!1), Pe.allowStateChanges || !t && "strict" !== Pe.enforceActions || f(!1)
          }

          function se(e, t, n) {
              var r = de(!0);
              pe(e), e.newObserving = new Array(e.observing.length + 100), e.unboundDepsCount = 0, e.runId = ++Pe.runId;
              var i, o = Pe.trackingDerivation;
              if (Pe.trackingDerivation = e, !0 === Pe.disableErrorBoundaries) i = t.call(n);
              else try {
                  i = t.call(n)
              } catch (e) {
                  i = new ne(e)
              }
              return Pe.trackingDerivation = o,
                  function(e) {
                      for (var t = e.observing, n = e.observing = e.newObserving, r = J.UP_TO_DATE, i = 0, o = e.unboundDepsCount, s = 0; s < o; s++) {
                          0 === (a = n[s]).diffValue && (a.diffValue = 1, i !== s && (n[i] = a), i++), a.dependenciesState > r && (r = a.dependenciesState)
                      }
                      n.length = i, e.newObserving = null, o = t.length;
                      for (; o--;) {
                          0 === (a = t[o]).diffValue && Me(a, e), a.diffValue = 0
                      }
                      for (; i--;) {
                          var a;
                          1 === (a = n[i]).diffValue && (a.diffValue = 0, Ne(a, e))
                      }
                      r !== J.UP_TO_DATE && (e.dependenciesState = r, e.onBecomeStale())
                  }(e), fe(r), i
          }

          function ae(e) {
              var t = e.observing;
              e.observing = [];
              for (var n = t.length; n--;) Me(t[n], e);
              e.dependenciesState = J.NOT_TRACKING
          }

          function ue(e) {
              var t = ce();
              try {
                  return e()
              } finally {
                  le(t)
              }
          }

          function ce() {
              var e = Pe.trackingDerivation;
              return Pe.trackingDerivation = null, e
          }

          function le(e) {
              Pe.trackingDerivation = e
          }

          function de(e) {
              var t = Pe.allowStateReads;
              return Pe.allowStateReads = e, t
          }

          function fe(e) {
              Pe.allowStateReads = e
          }

          function pe(e) {
              if (e.dependenciesState !== J.UP_TO_DATE) {
                  e.dependenciesState = J.UP_TO_DATE;
                  for (var t = e.observing, n = t.length; n--;) t[n].lowestObserverState = J.UP_TO_DATE
              }
          }
          var he = 0,
              me = 1,
              ge = Object.getOwnPropertyDescriptor((function() {}), "name");
          ge && ge.configurable;

          function ye(e, t, n) {
              var r = function() {
                  return ve(e, t, n || this, arguments)
              };
              return r.isMobxAction = !0, r
          }

          function ve(e, t, n, r) {
              var i = function(e, t, n) {
                  var r = 0;
                  var i = ce();
                  je();
                  var o = be(!0),
                      s = de(!0),
                      a = {
                          prevDerivation: i,
                          prevAllowStateChanges: o,
                          prevAllowStateReads: s,
                          notifySpy: !1,
                          startTime: r,
                          actionId: me++,
                          parentActionId: he
                      };
                  return he = a.actionId, a
              }();
              try {
                  return t.apply(n, r)
              } catch (e) {
                  throw i.error = e, e
              } finally {
                  ! function(e) {
                      he !== e.actionId && f("invalid action stack. did you forget to finish an action?");
                      he = e.parentActionId, void 0 !== e.error && (Pe.suppressReactionErrors = !0);
                      we(e.prevAllowStateChanges), fe(e.prevAllowStateReads), Be(), le(e.prevDerivation), e.notifySpy && !1;
                      Pe.suppressReactionErrors = !1
                  }(i)
              }
          }

          function be(e) {
              var t = Pe.allowStateChanges;
              return Pe.allowStateChanges = e, t
          }

          function we(e) {
              Pe.allowStateChanges = e
          }
          var _e = function(e) {
                  function t(t, n, r, i, o) {
                      void 0 === r && (r = "ObservableValue@" + d()), void 0 === i && (i = !0), void 0 === o && (o = O.default);
                      var s = e.call(this, r) || this;
                      return s.enhancer = n, s.name = r, s.equals = o, s.hasUnreportedChange = !1, s.value = n(t, void 0, r), s
                  }
                  return function(e, t) {
                      function n() {
                          this.constructor = e
                      }
                      i(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                  }(t, e), t.prototype.dehanceValue = function(e) {
                      return void 0 !== this.dehancer ? this.dehancer(e) : e
                  }, t.prototype.set = function(e) {
                      this.value;
                      if ((e = this.prepareNewValue(e)) !== Pe.UNCHANGED) {
                          0,
                          this.setNewValue(e)
                      }
                  }, t.prototype.prepareNewValue = function(e) {
                      if (oe(this), Tt(this)) {
                          var t = Ot(this, {
                              object: this,
                              type: "update",
                              newValue: e
                          });
                          if (!t) return Pe.UNCHANGED;
                          e = t.newValue
                      }
                      return e = this.enhancer(e, this.value, this.name), this.equals(this.value, e) ? Pe.UNCHANGED : e
                  }, t.prototype.setNewValue = function(e) {
                      var t = this.value;
                      this.value = e, this.reportChanged(), Pt(this) && Mt(this, {
                          type: "update",
                          object: this,
                          newValue: e,
                          oldValue: t
                      })
                  }, t.prototype.get = function() {
                      return this.reportObserved(), this.dehanceValue(this.value)
                  }, t.prototype.intercept = function(e) {
                      return At(this, e)
                  }, t.prototype.observe = function(e, t) {
                      return t && e({
                          object: this,
                          type: "update",
                          newValue: this.value,
                          oldValue: void 0
                      }), Nt(this, e)
                  }, t.prototype.toJSON = function() {
                      return this.get()
                  }, t.prototype.toString = function() {
                      return this.name + "[" + this.value + "]"
                  }, t.prototype.valueOf = function() {
                      return k(this.get())
                  }, t.prototype[Symbol.toPrimitive] = function() {
                      return this.valueOf()
                  }, t
              }(x),
              Ee = b("ObservableValue", _e),
              Se = function() {
                  function e(e) {
                      this.dependenciesState = J.NOT_TRACKING, this.observing = [], this.newObserving = null, this.isBeingObserved = !1, this.isPendingUnobservation = !1, this.observers = new Set, this.diffValue = 0, this.runId = 0, this.lastAccessedBy = 0, this.lowestObserverState = J.UP_TO_DATE, this.unboundDepsCount = 0, this.__mapid = "#" + d(), this.value = new ne(null), this.isComputing = !1, this.isRunningSetter = !1, this.isTracing = X.NONE, p(e.get, "missing option for computed: get"), this.derivation = e.get, this.name = e.name || "ComputedValue@" + d(), e.set && (this.setter = ye(this.name + "-setter", e.set)), this.equals = e.equals || (e.compareStructural || e.struct ? O.structural : O.default), this.scope = e.context, this.requiresReaction = !!e.requiresReaction, this.keepAlive = !!e.keepAlive
                  }
                  return e.prototype.onBecomeStale = function() {
                      ! function(e) {
                          if (e.lowestObserverState !== J.UP_TO_DATE) return;
                          e.lowestObserverState = J.POSSIBLY_STALE, e.observers.forEach((function(t) {
                              t.dependenciesState === J.UP_TO_DATE && (t.dependenciesState = J.POSSIBLY_STALE, t.isTracing !== X.NONE && Ie(t, e), t.onBecomeStale())
                          }))
                      }(this)
                  }, e.prototype.onBecomeObserved = function() {
                      this.onBecomeObservedListeners && this.onBecomeObservedListeners.forEach((function(e) {
                          return e()
                      }))
                  }, e.prototype.onBecomeUnobserved = function() {
                      this.onBecomeUnobservedListeners && this.onBecomeUnobservedListeners.forEach((function(e) {
                          return e()
                      }))
                  }, e.prototype.get = function() {
                      this.isComputing && f("Cycle detected in computation " + this.name + ": " + this.derivation), 0 !== Pe.inBatch || 0 !== this.observers.size || this.keepAlive ? (Fe(this), ie(this) && this.trackAndCompute() && function(e) {
                          if (e.lowestObserverState === J.STALE) return;
                          e.lowestObserverState = J.STALE, e.observers.forEach((function(t) {
                              t.dependenciesState === J.POSSIBLY_STALE ? t.dependenciesState = J.STALE : t.dependenciesState === J.UP_TO_DATE && (e.lowestObserverState = J.UP_TO_DATE)
                          }))
                      }(this)) : ie(this) && (this.warnAboutUntrackedRead(), je(), this.value = this.computeValue(!1), Be());
                      var e = this.value;
                      if (re(e)) throw e.cause;
                      return e
                  }, e.prototype.peek = function() {
                      var e = this.computeValue(!1);
                      if (re(e)) throw e.cause;
                      return e
                  }, e.prototype.set = function(e) {
                      if (this.setter) {
                          p(!this.isRunningSetter, "The setter of computed value '" + this.name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?"), this.isRunningSetter = !0;
                          try {
                              this.setter.call(this.scope, e)
                          } finally {
                              this.isRunningSetter = !1
                          }
                      } else p(!1, !1)
                  }, e.prototype.trackAndCompute = function() {
                      var e = this.value,
                          t = this.dependenciesState === J.NOT_TRACKING,
                          n = this.computeValue(!0),
                          r = t || re(e) || re(n) || !this.equals(e, n);
                      return r && (this.value = n), r
                  }, e.prototype.computeValue = function(e) {
                      var t;
                      if (this.isComputing = !0, Pe.computationDepth++, e) t = se(this, this.derivation, this.scope);
                      else if (!0 === Pe.disableErrorBoundaries) t = this.derivation.call(this.scope);
                      else try {
                          t = this.derivation.call(this.scope)
                      } catch (e) {
                          t = new ne(e)
                      }
                      return Pe.computationDepth--, this.isComputing = !1, t
                  }, e.prototype.suspend = function() {
                      this.keepAlive || (ae(this), this.value = void 0)
                  }, e.prototype.observe = function(e, t) {
                      var n = this,
                          r = !0,
                          i = void 0;
                      return Je((function() {
                          var o = n.get();
                          if (!r || t) {
                              var s = ce();
                              e({
                                  type: "update",
                                  object: n,
                                  newValue: o,
                                  oldValue: i
                              }), le(s)
                          }
                          r = !1, i = o
                      }))
                  }, e.prototype.warnAboutUntrackedRead = function() {}, e.prototype.toJSON = function() {
                      return this.get()
                  }, e.prototype.toString = function() {
                      return this.name + "[" + this.derivation.toString() + "]"
                  }, e.prototype.valueOf = function() {
                      return k(this.get())
                  }, e.prototype[Symbol.toPrimitive] = function() {
                      return this.valueOf()
                  }, e
              }(),
              ke = b("ComputedValue", Se),
              Ce = function() {
                  this.version = 5, this.UNCHANGED = {}, this.trackingDerivation = null, this.computationDepth = 0, this.runId = 0, this.mobxGuid = 0, this.inBatch = 0, this.pendingUnobservations = [], this.pendingReactions = [], this.isRunningReactions = !1, this.allowStateChanges = !0, this.allowStateReads = !0, this.enforceActions = !1, this.spyListeners = [], this.globalReactionErrorHandlers = [], this.computedRequiresReaction = !1, this.reactionRequiresObservable = !1, this.observableRequiresReaction = !1, this.computedConfigurable = !1, this.disableErrorBoundaries = !1, this.suppressReactionErrors = !1
              },
              xe = {};

          function Te() {
              return "undefined" != typeof window ? window : void 0 !== r ? r : "undefined" != typeof self ? self : xe
          }
          var Ae = !0,
              Oe = !1,
              Pe = function() {
                  var e = Te();
                  return e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (Ae = !1), e.__mobxGlobals && e.__mobxGlobals.version !== (new Ce).version && (Ae = !1), Ae ? e.__mobxGlobals ? (e.__mobxInstanceCount += 1, e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}), e.__mobxGlobals) : (e.__mobxInstanceCount = 1, e.__mobxGlobals = new Ce) : (setTimeout((function() {
                      Oe || f("There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`")
                  }), 1), new Ce)
              }();

          function Ne(e, t) {
              e.observers.add(t), e.lowestObserverState > t.dependenciesState && (e.lowestObserverState = t.dependenciesState)
          }

          function Me(e, t) {
              e.observers.delete(t), 0 === e.observers.size && Re(e)
          }

          function Re(e) {
              !1 === e.isPendingUnobservation && (e.isPendingUnobservation = !0, Pe.pendingUnobservations.push(e))
          }

          function je() {
              Pe.inBatch++
          }

          function Be() {
              if (0 == --Pe.inBatch) {
                  Ve();
                  for (var e = Pe.pendingUnobservations, t = 0; t < e.length; t++) {
                      var n = e[t];
                      n.isPendingUnobservation = !1, 0 === n.observers.size && (n.isBeingObserved && (n.isBeingObserved = !1, n.onBecomeUnobserved()), n instanceof Se && n.suspend())
                  }
                  Pe.pendingUnobservations = []
              }
          }

          function Fe(e) {
              var t = Pe.trackingDerivation;
              return null !== t ? (t.runId !== e.lastAccessedBy && (e.lastAccessedBy = t.runId, t.newObserving[t.unboundDepsCount++] = e, e.isBeingObserved || (e.isBeingObserved = !0, e.onBecomeObserved())), !0) : (0 === e.observers.size && Pe.inBatch > 0 && Re(e), !1)
          }

          function Ie(e, t) {
              if (console.log("[mobx.trace] '" + e.name + "' is invalidated due to a change in: '" + t.name + "'"), e.isTracing === X.BREAK) {
                  var n = [];
                  ! function e(t, n, r) {
                      if (n.length >= 1e3) return void n.push("(and many more)");
                      n.push("" + new Array(r).join("\t") + t.name), t.dependencies && t.dependencies.forEach((function(t) {
                          return e(t, n, r + 1)
                      }))
                  }(ut(e), n, 1), new Function("debugger;\n/*\nTracing '" + e.name + "'\n\nYou are entering this break point because derivation '" + e.name + "' is being traced and '" + t.name + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (e instanceof Se ? e.derivation.toString().replace(/[*]\//g, "/") : "") + "\n\nThe dependencies for this derivation are:\n\n" + n.join("\n") + "\n*/\n    ")()
              }
          }
          var Le = function() {
              function e(e, t, n, r) {
                  void 0 === e && (e = "Reaction@" + d()), void 0 === r && (r = !1), this.name = e, this.onInvalidate = t, this.errorHandler = n, this.requiresObservable = r, this.observing = [], this.newObserving = [], this.dependenciesState = J.NOT_TRACKING, this.diffValue = 0, this.runId = 0, this.unboundDepsCount = 0, this.__mapid = "#" + d(), this.isDisposed = !1, this._isScheduled = !1, this._isTrackPending = !1, this._isRunning = !1, this.isTracing = X.NONE
              }
              return e.prototype.onBecomeStale = function() {
                  this.schedule()
              }, e.prototype.schedule = function() {
                  this._isScheduled || (this._isScheduled = !0, Pe.pendingReactions.push(this), Ve())
              }, e.prototype.isScheduled = function() {
                  return this._isScheduled
              }, e.prototype.runReaction = function() {
                  if (!this.isDisposed) {
                      if (je(), this._isScheduled = !1, ie(this)) {
                          this._isTrackPending = !0;
                          try {
                              this.onInvalidate(), this._isTrackPending
                          } catch (e) {
                              this.reportExceptionInDerivation(e)
                          }
                      }
                      Be()
                  }
              }, e.prototype.track = function(e) {
                  if (!this.isDisposed) {
                      je();
                      0, this._isRunning = !0;
                      var t = se(this, e, void 0);
                      this._isRunning = !1, this._isTrackPending = !1, this.isDisposed && ae(this), re(t) && this.reportExceptionInDerivation(t.cause), Be()
                  }
              }, e.prototype.reportExceptionInDerivation = function(e) {
                  var t = this;
                  if (this.errorHandler) this.errorHandler(e, this);
                  else {
                      if (Pe.disableErrorBoundaries) throw e;
                      var n = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'";
                      Pe.suppressReactionErrors ? console.warn("[mobx] (error in reaction '" + this.name + "' suppressed, fix error of causing action below)") : console.error(n, e), Pe.globalReactionErrorHandlers.forEach((function(n) {
                          return n(e, t)
                      }))
                  }
              }, e.prototype.dispose = function() {
                  this.isDisposed || (this.isDisposed = !0, this._isRunning || (je(), ae(this), Be()))
              }, e.prototype.getDisposer = function() {
                  var e = this.dispose.bind(this);
                  return e[C] = this, e
              }, e.prototype.toString = function() {
                  return "Reaction[" + this.name + "]"
              }, e.prototype.trace = function(e) {
                  void 0 === e && (e = !1),
                      function() {
                          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                          var n = !1;
                          "boolean" == typeof e[e.length - 1] && (n = e.pop());
                          var r = vt(e);
                          if (!r) return f(!1);
                          r.isTracing === X.NONE && console.log("[mobx.trace] '" + r.name + "' tracing enabled");
                          r.isTracing = n ? X.BREAK : X.LOG
                      }(this, e)
              }, e
          }();
          var De = function(e) {
              return e()
          };

          function Ve() {
              Pe.inBatch > 0 || Pe.isRunningReactions || De(Ue)
          }

          function Ue() {
              Pe.isRunningReactions = !0;
              for (var e = Pe.pendingReactions, t = 0; e.length > 0;) {
                  100 == ++t && (console.error("Reaction doesn't converge to a stable state after 100 iterations. Probably there is a cycle in the reactive function: " + e[0]), e.splice(0));
                  for (var n = e.splice(0), r = 0, i = n.length; r < i; r++) n[r].runReaction()
              }
              Pe.isRunningReactions = !1
          }
          var ze = b("Reaction", Le);

          function qe(e) {
              var t = De;
              De = function(n) {
                  return e((function() {
                      return t(n)
                  }))
              }
          }

          function We(e) {
              return console.warn("[mobx.spy] Is a no-op in production builds"),
                  function() {}
          }

          function Ge() {
              f(!1)
          }

          function He(e) {
              return function(t, n, r) {
                  if (r) {
                      if (r.value) return {
                          value: ye(e, r.value),
                          enumerable: !1,
                          configurable: !0,
                          writable: !0
                      };
                      var i = r.initializer;
                      return {
                          enumerable: !1,
                          configurable: !0,
                          writable: !0,
                          initializer: function() {
                              return ye(e, i.call(this))
                          }
                      }
                  }
                  return $e(e).apply(this, arguments)
              }
          }

          function $e(e) {
              return function(t, n, r) {
                  Object.defineProperty(t, n, {
                      configurable: !0,
                      enumerable: !1,
                      get: function() {},
                      set: function(t) {
                          v(this, n, Ye(e, t))
                      }
                  })
              }
          }
          var Ye = function(e, t, n, r) {
              return 1 === arguments.length && "function" == typeof e ? ye(e.name || "<unnamed action>", e) : 2 === arguments.length && "function" == typeof t ? ye(e, t) : 1 === arguments.length && "string" == typeof e ? He(e) : !0 !== r ? He(t).apply(null, arguments) : void v(e, t, ye(e.name || t, n.value, this))
          };

          function Ke(e, t) {
              "string" == typeof e || e.name;
              return ve(0, "function" == typeof e ? e : t, this, void 0)
          }

          function Qe(e, t, n) {
              v(e, t, ye(t, n.bind(e)))
          }

          function Je(e, t) {
              void 0 === t && (t = l);
              var n, r = t && t.name || e.name || "Autorun@" + d();
              if (!t.scheduler && !t.delay) n = new Le(r, (function() {
                  this.track(s)
              }), t.onError, t.requiresObservable);
              else {
                  var i = Ze(t),
                      o = !1;
                  n = new Le(r, (function() {
                      o || (o = !0, i((function() {
                          o = !1, n.isDisposed || n.track(s)
                      })))
                  }), t.onError, t.requiresObservable)
              }

              function s() {
                  e(n)
              }
              return n.schedule(), n.getDisposer()
          }
          Ye.bound = function(e, t, n, r) {
              return !0 === r ? (Qe(e, t, n.value), null) : n ? {
                  configurable: !0,
                  enumerable: !1,
                  get: function() {
                      return Qe(this, t, n.value || n.initializer.call(this)), this[t]
                  },
                  set: Ge
              } : {
                  enumerable: !1,
                  configurable: !0,
                  set: function(e) {
                      Qe(this, t, e)
                  },
                  get: function() {}
              }
          };
          var Xe = function(e) {
              return e()
          };

          function Ze(e) {
              return e.scheduler ? e.scheduler : e.delay ? function(t) {
                  return setTimeout(t, e.delay)
              } : Xe
          }

          function et(e, t, n) {
              void 0 === n && (n = l);
              var r, i, o, s = n.name || "Reaction@" + d(),
                  a = Ye(s, n.onError ? (r = n.onError, i = t, function() {
                      try {
                          return i.apply(this, arguments)
                      } catch (e) {
                          r.call(this, e)
                      }
                  }) : t),
                  u = !n.scheduler && !n.delay,
                  c = Ze(n),
                  f = !0,
                  p = !1,
                  h = n.compareStructural ? O.structural : n.equals || O.default,
                  m = new Le(s, (function() {
                      f || u ? g() : p || (p = !0, c(g))
                  }), n.onError, n.requiresObservable);

              function g() {
                  if (p = !1, !m.isDisposed) {
                      var t = !1;
                      m.track((function() {
                          var n = e(m);
                          t = f || !h(o, n), o = n
                      })), f && n.fireImmediately && a(o, m), f || !0 !== t || a(o, m), f && (f = !1)
                  }
              }
              return m.schedule(), m.getDisposer()
          }

          function tt(e, t, n) {
              return nt("onBecomeUnobserved", e, t, n)
          }

          function nt(e, t, n, r) {
              var i = "function" == typeof r ? en(t, n) : en(t),
                  o = "function" == typeof r ? r : n,
                  s = e + "Listeners";
              return i[s] ? i[s].add(o) : i[s] = new Set([o]), "function" != typeof i[e] ? f(!1) : function() {
                  var e = i[s];
                  e && (e.delete(o), 0 === e.size && delete i[s])
              }
          }

          function rt(e) {
              var t = e.enforceActions,
                  n = e.computedRequiresReaction,
                  r = e.computedConfigurable,
                  i = e.disableErrorBoundaries,
                  o = e.reactionScheduler,
                  s = e.reactionRequiresObservable,
                  a = e.observableRequiresReaction;
              if (!0 === e.isolateGlobalState && ((Pe.pendingReactions.length || Pe.inBatch || Pe.isRunningReactions) && f("isolateGlobalState should be called before MobX is running any reactions"), Oe = !0, Ae && (0 == --Te().__mobxInstanceCount && (Te().__mobxGlobals = void 0), Pe = new Ce)), void 0 !== t) {
                  var u = void 0;
                  switch (t) {
                      case !0:
                      case "observed":
                          u = !0;
                          break;
                      case !1:
                      case "never":
                          u = !1;
                          break;
                      case "strict":
                      case "always":
                          u = "strict";
                          break;
                      default:
                          f("Invalid value for 'enforceActions': '" + t + "', expected 'never', 'always' or 'observed'")
                  }
                  Pe.enforceActions = u, Pe.allowStateChanges = !0 !== u && "strict" !== u
              }
              void 0 !== n && (Pe.computedRequiresReaction = !!n), void 0 !== s && (Pe.reactionRequiresObservable = !!s), void 0 !== a && (Pe.observableRequiresReaction = !!a, Pe.allowStateReads = !Pe.observableRequiresReaction), void 0 !== r && (Pe.computedConfigurable = !!r), void 0 !== i && (!0 === i && console.warn("WARNING: Debug feature only. MobX will NOT recover from errors when `disableErrorBoundaries` is enabled."), Pe.disableErrorBoundaries = !!i), o && qe(o)
          }

          function it(e, t) {
              var n = "function" == typeof e ? e.prototype : e,
                  r = function(e) {
                      var r = t[e];
                      Array.isArray(r) || (r = [r]);
                      var i = Object.getOwnPropertyDescriptor(n, e),
                          o = r.reduce((function(t, r) {
                              return r(n, e, t)
                          }), i);
                      o && Object.defineProperty(n, e, o)
                  };
              for (var i in t) r(i);
              return e
          }

          function ot(e, t, n, r) {
              var i = st(r = z(r));
              return B(e), Yt(e, r.name, i.enhancer), t && at(e, t, n, i), e
          }

          function st(e) {
              return e.defaultDecorator || (!1 === e.deep ? G : q)
          }

          function at(e, t, n, r) {
              var i, o;
              je();
              try {
                  var a = E(t);
                  try {
                      for (var u = s(a), c = u.next(); !c.done; c = u.next()) {
                          var l = c.value,
                              d = Object.getOwnPropertyDescriptor(t, l);
                          0;
                          var f = (n && l in n ? n[l] : d.get ? Z : r)(e, l, d, !0);
                          f && Object.defineProperty(e, l, f)
                      }
                  } catch (e) {
                      i = {
                          error: e
                      }
                  } finally {
                      try {
                          c && !c.done && (o = u.return) && o.call(u)
                      } finally {
                          if (i) throw i.error
                      }
                  }
              } finally {
                  Be()
              }
          }

          function ut(e, t) {
              return ct(en(e, t))
          }

          function ct(e) {
              var t, n, r = {
                  name: e.name
              };
              return e.observing && e.observing.length > 0 && (r.dependencies = (t = e.observing, n = [], t.forEach((function(e) {
                  -1 === n.indexOf(e) && n.push(e)
              })), n).map(ct)), r
          }

          function lt() {
              this.message = "FLOW_CANCELLED"
          }

          function dt(e, t) {
              return null != e && (void 0 !== t ? !!Zt(e) && e[C].values.has(t) : Zt(e) || !!e[C] || T(e) || ze(e) || ke(e))
          }

          function ft(e) {
              return 1 !== arguments.length && f(!1), dt(e)
          }

          function pt(e) {
              return Zt(e) ? e[C].getKeys() : qt(e) || Ht(e) ? Array.from(e.keys()) : Dt(e) ? e.map((function(e, t) {
                  return t
              })) : f(!1)
          }

          function ht(e, t, n, r) {
              return "function" == typeof n ? function(e, t, n, r) {
                  return tn(e, t).observe(n, r)
              }(e, t, n, r) : function(e, t, n) {
                  return tn(e).observe(t, n)
              }(e, t, n)
          }
          lt.prototype = Object.create(Error.prototype);
          var mt = {
              detectCycles: !0,
              exportMapsAsObjects: !0,
              recurseEverything: !1
          };

          function gt(e, t, n, r) {
              return r.detectCycles && e.set(t, n), n
          }

          function yt(e, t) {
              var n;
              return "boolean" == typeof t && (t = {
                      detectCycles: t
                  }), t || (t = mt), t.detectCycles = void 0 === t.detectCycles ? !0 === t.recurseEverything : !0 === t.detectCycles, t.detectCycles && (n = new Map),
                  function e(t, n, r) {
                      if (!n.recurseEverything && !ft(t)) return t;
                      if ("object" != typeof t) return t;
                      if (null === t) return null;
                      if (t instanceof Date) return t;
                      if (Ee(t)) return e(t.get(), n, r);
                      if (ft(t) && pt(t), !0 === n.detectCycles && null !== t && r.has(t)) return r.get(t);
                      if (Dt(t) || Array.isArray(t)) {
                          var i = gt(r, t, [], n),
                              o = t.map((function(t) {
                                  return e(t, n, r)
                              }));
                          i.length = o.length;
                          for (var s = 0, a = o.length; s < a; s++) i[s] = o[s];
                          return i
                      }
                      if (Ht(t) || Object.getPrototypeOf(t) === Set.prototype) {
                          if (!1 === n.exportMapsAsObjects) {
                              var u = gt(r, t, new Set, n);
                              return t.forEach((function(t) {
                                  u.add(e(t, n, r))
                              })), u
                          }
                          var c = gt(r, t, [], n);
                          return t.forEach((function(t) {
                              c.push(e(t, n, r))
                          })), c
                      }
                      if (qt(t) || Object.getPrototypeOf(t) === Map.prototype) {
                          if (!1 === n.exportMapsAsObjects) {
                              var l = gt(r, t, new Map, n);
                              return t.forEach((function(t, i) {
                                  l.set(i, e(t, n, r))
                              })), l
                          }
                          var d = gt(r, t, {}, n);
                          return t.forEach((function(t, i) {
                              d[i] = e(t, n, r)
                          })), d
                      }
                      var f = gt(r, t, {}, n);
                      return E(t).forEach((function(i) {
                          f[i] = e(t[i], n, r)
                      })), f
                  }(e, t, n)
          }

          function vt(e) {
              switch (e.length) {
                  case 0:
                      return Pe.trackingDerivation;
                  case 1:
                      return en(e[0]);
                  case 2:
                      return en(e[0], e[1])
              }
          }

          function bt(e, t) {
              void 0 === t && (t = void 0), je();
              try {
                  return e.apply(t)
              } finally {
                  Be()
              }
          }

          function wt(e, t, n) {
              return 1 === arguments.length || t && "object" == typeof t ? Et(e, t) : _t(e, t, n || {})
          }

          function _t(e, t, n) {
              var r;
              "number" == typeof n.timeout && (r = setTimeout((function() {
                  if (!o[C].isDisposed) {
                      o();
                      var e = new Error("WHEN_TIMEOUT");
                      if (!n.onError) throw e;
                      n.onError(e)
                  }
              }), n.timeout)), n.name = n.name || "When@" + d();
              var i = ye(n.name + "-effect", t),
                  o = Je((function(t) {
                      e() && (t.dispose(), r && clearTimeout(r), i())
                  }), n);
              return o
          }

          function Et(e, t) {
              var n;
              var r = new Promise((function(r, i) {
                  var s = _t(e, r, o(o({}, t), {
                      onError: i
                  }));
                  n = function() {
                      s(), i("WHEN_CANCELLED")
                  }
              }));
              return r.cancel = n, r
          }

          function St(e) {
              return e[C]
          }

          function kt(e) {
              return "string" == typeof e || "number" == typeof e || "symbol" == typeof e
          }
          var Ct = {
              has: function(e, t) {
                  if (t === C || "constructor" === t || t === P) return !0;
                  var n = St(e);
                  return kt(t) ? n.has(t) : t in e
              },
              get: function(e, t) {
                  if (t === C || "constructor" === t || t === P) return e[t];
                  var n = St(e),
                      r = n.values.get(t);
                  if (r instanceof x) {
                      var i = r.get();
                      return void 0 === i && n.has(t), i
                  }
                  return kt(t) && n.has(t), e[t]
              },
              set: function(e, t, n) {
                  return !!kt(t) && (function e(t, n, r) {
                      if (2 !== arguments.length || Ht(t))
                          if (Zt(t)) {
                              var i = t[C],
                                  o = i.values.get(n);
                              o ? i.write(n, r) : i.addObservableProp(n, r, i.defaultEnhancer)
                          } else if (qt(t)) t.set(n, r);
                      else if (Ht(t)) t.add(n);
                      else {
                          if (!Dt(t)) return f(!1);
                          "number" != typeof n && (n = parseInt(n, 10)), p(n >= 0, "Not a valid index: '" + n + "'"), je(), n >= t.length && (t.length = n + 1), t[n] = r, Be()
                      } else {
                          je();
                          var s = n;
                          try {
                              for (var a in s) e(t, a, s[a])
                          } finally {
                              Be()
                          }
                      }
                  }(e, t, n), !0)
              },
              deleteProperty: function(e, t) {
                  return !!kt(t) && (St(e).remove(t), !0)
              },
              ownKeys: function(e) {
                  return St(e).keysAtom.reportObserved(), Reflect.ownKeys(e)
              },
              preventExtensions: function(e) {
                  return f("Dynamic observable objects cannot be frozen"), !1
              }
          };

          function xt(e) {
              var t = new Proxy(e, Ct);
              return e[C].proxy = t, t
          }

          function Tt(e) {
              return void 0 !== e.interceptors && e.interceptors.length > 0
          }

          function At(e, t) {
              var n = e.interceptors || (e.interceptors = []);
              return n.push(t), h((function() {
                  var e = n.indexOf(t); - 1 !== e && n.splice(e, 1)
              }))
          }

          function Ot(e, t) {
              var n = ce();
              try {
                  for (var r = u(e.interceptors || []), i = 0, o = r.length; i < o && (p(!(t = r[i](t)) || t.type, "Intercept handlers should return nothing or a change object"), t); i++);
                  return t
              } finally {
                  le(n)
              }
          }

          function Pt(e) {
              return void 0 !== e.changeListeners && e.changeListeners.length > 0
          }

          function Nt(e, t) {
              var n = e.changeListeners || (e.changeListeners = []);
              return n.push(t), h((function() {
                  var e = n.indexOf(t); - 1 !== e && n.splice(e, 1)
              }))
          }

          function Mt(e, t) {
              var n = ce(),
                  r = e.changeListeners;
              if (r) {
                  for (var i = 0, o = (r = r.slice()).length; i < o; i++) r[i](t);
                  le(n)
              }
          }
          var Rt = {
              get: function(e, t) {
                  return t === C ? e[C] : "length" === t ? e[C].getArrayLength() : "number" == typeof t ? Ft.get.call(e, t) : "string" != typeof t || isNaN(t) ? Ft.hasOwnProperty(t) ? Ft[t] : e[t] : Ft.get.call(e, parseInt(t))
              },
              set: function(e, t, n) {
                  return "length" === t && e[C].setArrayLength(n), "number" == typeof t && Ft.set.call(e, t, n), "symbol" == typeof t || isNaN(t) ? e[t] = n : Ft.set.call(e, parseInt(t), n), !0
              },
              preventExtensions: function(e) {
                  return f("Observable arrays cannot be frozen"), !1
              }
          };

          function jt(e, t, n, r) {
              void 0 === n && (n = "ObservableArray@" + d()), void 0 === r && (r = !1);
              var i, o, s, a = new Bt(n, t, r);
              i = a.values, o = C, s = a, Object.defineProperty(i, o, {
                  enumerable: !1,
                  writable: !1,
                  configurable: !0,
                  value: s
              });
              var u = new Proxy(a.values, Rt);
              if (a.proxy = u, e && e.length) {
                  var c = be(!0);
                  a.spliceWithArray(0, 0, e), we(c)
              }
              return u
          }
          var Bt = function() {
                  function e(e, t, n) {
                      this.owned = n, this.values = [], this.proxy = void 0, this.lastKnownLength = 0, this.atom = new x(e || "ObservableArray@" + d()), this.enhancer = function(n, r) {
                          return t(n, r, e + "[..]")
                      }
                  }
                  return e.prototype.dehanceValue = function(e) {
                      return void 0 !== this.dehancer ? this.dehancer(e) : e
                  }, e.prototype.dehanceValues = function(e) {
                      return void 0 !== this.dehancer && e.length > 0 ? e.map(this.dehancer) : e
                  }, e.prototype.intercept = function(e) {
                      return At(this, e)
                  }, e.prototype.observe = function(e, t) {
                      return void 0 === t && (t = !1), t && e({
                          object: this.proxy,
                          type: "splice",
                          index: 0,
                          added: this.values.slice(),
                          addedCount: this.values.length,
                          removed: [],
                          removedCount: 0
                      }), Nt(this, e)
                  }, e.prototype.getArrayLength = function() {
                      return this.atom.reportObserved(), this.values.length
                  }, e.prototype.setArrayLength = function(e) {
                      if ("number" != typeof e || e < 0) throw new Error("[mobx.array] Out of range: " + e);
                      var t = this.values.length;
                      if (e !== t)
                          if (e > t) {
                              for (var n = new Array(e - t), r = 0; r < e - t; r++) n[r] = void 0;
                              this.spliceWithArray(t, 0, n)
                          } else this.spliceWithArray(e, t - e)
                  }, e.prototype.updateArrayLength = function(e, t) {
                      if (e !== this.lastKnownLength) throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed.");
                      this.lastKnownLength += t
                  }, e.prototype.spliceWithArray = function(e, t, n) {
                      var r = this;
                      oe(this.atom);
                      var i = this.values.length;
                      if (void 0 === e ? e = 0 : e > i ? e = i : e < 0 && (e = Math.max(0, i + e)), t = 1 === arguments.length ? i - e : null == t ? 0 : Math.max(0, Math.min(t, i - e)), void 0 === n && (n = c), Tt(this)) {
                          var o = Ot(this, {
                              object: this.proxy,
                              type: "splice",
                              index: e,
                              removedCount: t,
                              added: n
                          });
                          if (!o) return c;
                          t = o.removedCount, n = o.added
                      }
                      n = 0 === n.length ? n : n.map((function(e) {
                          return r.enhancer(e, void 0)
                      }));
                      var s = this.spliceItemsIntoValues(e, t, n);
                      return 0 === t && 0 === n.length || this.notifyArraySplice(e, n, s), this.dehanceValues(s)
                  }, e.prototype.spliceItemsIntoValues = function(e, t, n) {
                      var r;
                      if (n.length < 1e4) return (r = this.values).splice.apply(r, u([e, t], n));
                      var i = this.values.slice(e, e + t);
                      return this.values = this.values.slice(0, e).concat(n, this.values.slice(e + t)), i
                  }, e.prototype.notifyArrayChildUpdate = function(e, t, n) {
                      var r = !this.owned && !1,
                          i = Pt(this),
                          o = i || r ? {
                              object: this.proxy,
                              type: "update",
                              index: e,
                              newValue: t,
                              oldValue: n
                          } : null;
                      this.atom.reportChanged(), i && Mt(this, o)
                  }, e.prototype.notifyArraySplice = function(e, t, n) {
                      var r = !this.owned && !1,
                          i = Pt(this),
                          o = i || r ? {
                              object: this.proxy,
                              type: "splice",
                              index: e,
                              removed: n,
                              added: t,
                              removedCount: n.length,
                              addedCount: t.length
                          } : null;
                      this.atom.reportChanged(), i && Mt(this, o)
                  }, e
              }(),
              Ft = {
                  intercept: function(e) {
                      return this[C].intercept(e)
                  },
                  observe: function(e, t) {
                      return void 0 === t && (t = !1), this[C].observe(e, t)
                  },
                  clear: function() {
                      return this.splice(0)
                  },
                  replace: function(e) {
                      var t = this[C];
                      return t.spliceWithArray(0, t.values.length, e)
                  },
                  toJS: function() {
                      return this.slice()
                  },
                  toJSON: function() {
                      return this.toJS()
                  },
                  splice: function(e, t) {
                      for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
                      var i = this[C];
                      switch (arguments.length) {
                          case 0:
                              return [];
                          case 1:
                              return i.spliceWithArray(e);
                          case 2:
                              return i.spliceWithArray(e, t)
                      }
                      return i.spliceWithArray(e, t, n)
                  },
                  spliceWithArray: function(e, t, n) {
                      return this[C].spliceWithArray(e, t, n)
                  },
                  push: function() {
                      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                      var n = this[C];
                      return n.spliceWithArray(n.values.length, 0, e), n.values.length
                  },
                  pop: function() {
                      return this.splice(Math.max(this[C].values.length - 1, 0), 1)[0]
                  },
                  shift: function() {
                      return this.splice(0, 1)[0]
                  },
                  unshift: function() {
                      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                      var n = this[C];
                      return n.spliceWithArray(0, 0, e), n.values.length
                  },
                  reverse: function() {
                      var e = this.slice();
                      return e.reverse.apply(e, arguments)
                  },
                  sort: function(e) {
                      var t = this.slice();
                      return t.sort.apply(t, arguments)
                  },
                  remove: function(e) {
                      var t = this[C],
                          n = t.dehanceValues(t.values).indexOf(e);
                      return n > -1 && (this.splice(n, 1), !0)
                  },
                  get: function(e) {
                      var t = this[C];
                      if (t) {
                          if (e < t.values.length) return t.atom.reportObserved(), t.dehanceValue(t.values[e]);
                          console.warn("[mobx.array] Attempt to read an array index (" + e + ") that is out of bounds (" + t.values.length + "). Please check length first. Out of bound indices will not be tracked by MobX")
                      }
                  },
                  set: function(e, t) {
                      var n = this[C],
                          r = n.values;
                      if (e < r.length) {
                          oe(n.atom);
                          var i = r[e];
                          if (Tt(n)) {
                              var o = Ot(n, {
                                  type: "update",
                                  object: n.proxy,
                                  index: e,
                                  newValue: t
                              });
                              if (!o) return;
                              t = o.newValue
                          }(t = n.enhancer(t, i)) !== i && (r[e] = t, n.notifyArrayChildUpdate(e, t, i))
                      } else {
                          if (e !== r.length) throw new Error("[mobx.array] Index out of bounds, " + e + " is larger than " + r.length);
                          n.spliceWithArray(e, 0, [t])
                      }
                  }
              };
          ["concat", "every", "filter", "forEach", "indexOf", "join", "lastIndexOf", "map", "reduce", "reduceRight", "slice", "some", "toString", "toLocaleString"].forEach((function(e) {
              Ft[e] = function() {
                  var t = this[C];
                  t.atom.reportObserved();
                  var n = t.dehanceValues(t.values);
                  return n[e].apply(n, arguments)
              }
          }));
          var It, Lt = b("ObservableArrayAdministration", Bt);

          function Dt(e) {
              return g(e) && Lt(e[C])
          }
          var Vt, Ut = {},
              zt = function() {
                  function e(e, t, n) {
                      if (void 0 === t && (t = L), void 0 === n && (n = "ObservableMap@" + d()), this.enhancer = t, this.name = n, this[It] = Ut, this._keysAtom = A(this.name + ".keys()"), this[Symbol.toStringTag] = "Map", "function" != typeof Map) throw new Error("mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js");
                      this._data = new Map, this._hasMap = new Map, this.merge(e)
                  }
                  return e.prototype._has = function(e) {
                      return this._data.has(e)
                  }, e.prototype.has = function(e) {
                      var t = this;
                      if (!Pe.trackingDerivation) return this._has(e);
                      var n = this._hasMap.get(e);
                      if (!n) {
                          var r = n = new _e(this._has(e), D, this.name + "." + S(e) + "?", !1);
                          this._hasMap.set(e, r), tt(r, (function() {
                              return t._hasMap.delete(e)
                          }))
                      }
                      return n.get()
                  }, e.prototype.set = function(e, t) {
                      var n = this._has(e);
                      if (Tt(this)) {
                          var r = Ot(this, {
                              type: n ? "update" : "add",
                              object: this,
                              newValue: t,
                              name: e
                          });
                          if (!r) return this;
                          t = r.newValue
                      }
                      return n ? this._updateValue(e, t) : this._addValue(e, t), this
                  }, e.prototype.delete = function(e) {
                      var t = this;
                      if (Tt(this) && !(r = Ot(this, {
                              type: "delete",
                              object: this,
                              name: e
                          }))) return !1;
                      if (this._has(e)) {
                          var n = Pt(this),
                              r = n ? {
                                  type: "delete",
                                  object: this,
                                  oldValue: this._data.get(e).value,
                                  name: e
                              } : null;
                          return bt((function() {
                              t._keysAtom.reportChanged(), t._updateHasMapEntry(e, !1), t._data.get(e).setNewValue(void 0), t._data.delete(e)
                          })), n && Mt(this, r), !0
                      }
                      return !1
                  }, e.prototype._updateHasMapEntry = function(e, t) {
                      var n = this._hasMap.get(e);
                      n && n.setNewValue(t)
                  }, e.prototype._updateValue = function(e, t) {
                      var n = this._data.get(e);
                      if ((t = n.prepareNewValue(t)) !== Pe.UNCHANGED) {
                          var r = Pt(this),
                              i = r ? {
                                  type: "update",
                                  object: this,
                                  oldValue: n.value,
                                  name: e,
                                  newValue: t
                              } : null;
                          0, n.setNewValue(t), r && Mt(this, i)
                      }
                  }, e.prototype._addValue = function(e, t) {
                      var n = this;
                      oe(this._keysAtom), bt((function() {
                          var r = new _e(t, n.enhancer, n.name + "." + S(e), !1);
                          n._data.set(e, r), t = r.value, n._updateHasMapEntry(e, !0), n._keysAtom.reportChanged()
                      }));
                      var r = Pt(this),
                          i = r ? {
                              type: "add",
                              object: this,
                              name: e,
                              newValue: t
                          } : null;
                      r && Mt(this, i)
                  }, e.prototype.get = function(e) {
                      return this.has(e) ? this.dehanceValue(this._data.get(e).get()) : this.dehanceValue(void 0)
                  }, e.prototype.dehanceValue = function(e) {
                      return void 0 !== this.dehancer ? this.dehancer(e) : e
                  }, e.prototype.keys = function() {
                      return this._keysAtom.reportObserved(), this._data.keys()
                  }, e.prototype.values = function() {
                      var e = this,
                          t = 0,
                          n = Array.from(this.keys());
                      return an({
                          next: function() {
                              return t < n.length ? {
                                  value: e.get(n[t++]),
                                  done: !1
                              } : {
                                  done: !0
                              }
                          }
                      })
                  }, e.prototype.entries = function() {
                      var e = this,
                          t = 0,
                          n = Array.from(this.keys());
                      return an({
                          next: function() {
                              if (t < n.length) {
                                  var r = n[t++];
                                  return {
                                      value: [r, e.get(r)],
                                      done: !1
                                  }
                              }
                              return {
                                  done: !0
                              }
                          }
                      })
                  }, e.prototype[(It = C, Symbol.iterator)] = function() {
                      return this.entries()
                  }, e.prototype.forEach = function(e, t) {
                      var n, r;
                      try {
                          for (var i = s(this), o = i.next(); !o.done; o = i.next()) {
                              var u = a(o.value, 2),
                                  c = u[0],
                                  l = u[1];
                              e.call(t, l, c, this)
                          }
                      } catch (e) {
                          n = {
                              error: e
                          }
                      } finally {
                          try {
                              o && !o.done && (r = i.return) && r.call(i)
                          } finally {
                              if (n) throw n.error
                          }
                      }
                  }, e.prototype.merge = function(e) {
                      var t = this;
                      return qt(e) && (e = e.toJS()), bt((function() {
                          y(e) ? E(e).forEach((function(n) {
                              return t.set(n, e[n])
                          })) : Array.isArray(e) ? e.forEach((function(e) {
                              var n = a(e, 2),
                                  r = n[0],
                                  i = n[1];
                              return t.set(r, i)
                          })) : w(e) ? (e.constructor !== Map && f("Cannot initialize from classes that inherit from Map: " + e.constructor.name), e.forEach((function(e, n) {
                              return t.set(n, e)
                          }))) : null != e && f("Cannot initialize map from " + e)
                      })), this
                  }, e.prototype.clear = function() {
                      var e = this;
                      bt((function() {
                          ue((function() {
                              var t, n;
                              try {
                                  for (var r = s(e.keys()), i = r.next(); !i.done; i = r.next()) {
                                      var o = i.value;
                                      e.delete(o)
                                  }
                              } catch (e) {
                                  t = {
                                      error: e
                                  }
                              } finally {
                                  try {
                                      i && !i.done && (n = r.return) && n.call(r)
                                  } finally {
                                      if (t) throw t.error
                                  }
                              }
                          }))
                      }))
                  }, e.prototype.replace = function(e) {
                      var t = this;
                      return bt((function() {
                          var n, r = y(n = e) ? Object.keys(n) : Array.isArray(n) ? n.map((function(e) {
                              return a(e, 1)[0]
                          })) : w(n) || qt(n) ? Array.from(n.keys()) : f("Cannot get keys from '" + n + "'");
                          Array.from(t.keys()).filter((function(e) {
                              return -1 === r.indexOf(e)
                          })).forEach((function(e) {
                              return t.delete(e)
                          })), t.merge(e)
                      })), this
                  }, Object.defineProperty(e.prototype, "size", {
                      get: function() {
                          return this._keysAtom.reportObserved(), this._data.size
                      },
                      enumerable: !0,
                      configurable: !0
                  }), e.prototype.toPOJO = function() {
                      var e, t, n = {};
                      try {
                          for (var r = s(this), i = r.next(); !i.done; i = r.next()) {
                              var o = a(i.value, 2),
                                  u = o[0],
                                  c = o[1];
                              n["symbol" == typeof u ? u : S(u)] = c
                          }
                      } catch (t) {
                          e = {
                              error: t
                          }
                      } finally {
                          try {
                              i && !i.done && (t = r.return) && t.call(r)
                          } finally {
                              if (e) throw e.error
                          }
                      }
                      return n
                  }, e.prototype.toJS = function() {
                      return new Map(this)
                  }, e.prototype.toJSON = function() {
                      return this.toPOJO()
                  }, e.prototype.toString = function() {
                      var e = this;
                      return this.name + "[{ " + Array.from(this.keys()).map((function(t) {
                          return S(t) + ": " + e.get(t)
                      })).join(", ") + " }]"
                  }, e.prototype.observe = function(e, t) {
                      return Nt(this, e)
                  }, e.prototype.intercept = function(e) {
                      return At(this, e)
                  }, e
              }(),
              qt = b("ObservableMap", zt),
              Wt = {},
              Gt = function() {
                  function e(e, t, n) {
                      if (void 0 === t && (t = L), void 0 === n && (n = "ObservableSet@" + d()), this.name = n, this[Vt] = Wt, this._data = new Set, this._atom = A(this.name), this[Symbol.toStringTag] = "Set", "function" != typeof Set) throw new Error("mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js");
                      this.enhancer = function(e, r) {
                          return t(e, r, n)
                      }, e && this.replace(e)
                  }
                  return e.prototype.dehanceValue = function(e) {
                      return void 0 !== this.dehancer ? this.dehancer(e) : e
                  }, e.prototype.clear = function() {
                      var e = this;
                      bt((function() {
                          ue((function() {
                              var t, n;
                              try {
                                  for (var r = s(e._data.values()), i = r.next(); !i.done; i = r.next()) {
                                      var o = i.value;
                                      e.delete(o)
                                  }
                              } catch (e) {
                                  t = {
                                      error: e
                                  }
                              } finally {
                                  try {
                                      i && !i.done && (n = r.return) && n.call(r)
                                  } finally {
                                      if (t) throw t.error
                                  }
                              }
                          }))
                      }))
                  }, e.prototype.forEach = function(e, t) {
                      var n, r;
                      try {
                          for (var i = s(this), o = i.next(); !o.done; o = i.next()) {
                              var a = o.value;
                              e.call(t, a, a, this)
                          }
                      } catch (e) {
                          n = {
                              error: e
                          }
                      } finally {
                          try {
                              o && !o.done && (r = i.return) && r.call(i)
                          } finally {
                              if (n) throw n.error
                          }
                      }
                  }, Object.defineProperty(e.prototype, "size", {
                      get: function() {
                          return this._atom.reportObserved(), this._data.size
                      },
                      enumerable: !0,
                      configurable: !0
                  }), e.prototype.add = function(e) {
                      var t = this;
                      if ((oe(this._atom), Tt(this)) && !(r = Ot(this, {
                              type: "add",
                              object: this,
                              newValue: e
                          }))) return this;
                      if (!this.has(e)) {
                          bt((function() {
                              t._data.add(t.enhancer(e, void 0)), t._atom.reportChanged()
                          }));
                          var n = Pt(this),
                              r = n ? {
                                  type: "add",
                                  object: this,
                                  newValue: e
                              } : null;
                          0, n && Mt(this, r)
                      }
                      return this
                  }, e.prototype.delete = function(e) {
                      var t = this;
                      if (Tt(this) && !(r = Ot(this, {
                              type: "delete",
                              object: this,
                              oldValue: e
                          }))) return !1;
                      if (this.has(e)) {
                          var n = Pt(this),
                              r = n ? {
                                  type: "delete",
                                  object: this,
                                  oldValue: e
                              } : null;
                          return bt((function() {
                              t._atom.reportChanged(), t._data.delete(e)
                          })), n && Mt(this, r), !0
                      }
                      return !1
                  }, e.prototype.has = function(e) {
                      return this._atom.reportObserved(), this._data.has(this.dehanceValue(e))
                  }, e.prototype.entries = function() {
                      var e = 0,
                          t = Array.from(this.keys()),
                          n = Array.from(this.values());
                      return an({
                          next: function() {
                              var r = e;
                              return e += 1, r < n.length ? {
                                  value: [t[r], n[r]],
                                  done: !1
                              } : {
                                  done: !0
                              }
                          }
                      })
                  }, e.prototype.keys = function() {
                      return this.values()
                  }, e.prototype.values = function() {
                      this._atom.reportObserved();
                      var e = this,
                          t = 0,
                          n = Array.from(this._data.values());
                      return an({
                          next: function() {
                              return t < n.length ? {
                                  value: e.dehanceValue(n[t++]),
                                  done: !1
                              } : {
                                  done: !0
                              }
                          }
                      })
                  }, e.prototype.replace = function(e) {
                      var t = this;
                      return Ht(e) && (e = e.toJS()), bt((function() {
                          Array.isArray(e) || _(e) ? (t.clear(), e.forEach((function(e) {
                              return t.add(e)
                          }))) : null != e && f("Cannot initialize set from " + e)
                      })), this
                  }, e.prototype.observe = function(e, t) {
                      return Nt(this, e)
                  }, e.prototype.intercept = function(e) {
                      return At(this, e)
                  }, e.prototype.toJS = function() {
                      return new Set(this)
                  }, e.prototype.toString = function() {
                      return this.name + "[ " + Array.from(this).join(", ") + " ]"
                  }, e.prototype[(Vt = C, Symbol.iterator)] = function() {
                      return this.values()
                  }, e
              }(),
              Ht = b("ObservableSet", Gt),
              $t = function() {
                  function e(e, t, n, r) {
                      void 0 === t && (t = new Map), this.target = e, this.values = t, this.name = n, this.defaultEnhancer = r, this.keysAtom = new x(n + ".keys")
                  }
                  return e.prototype.read = function(e) {
                      return this.values.get(e).get()
                  }, e.prototype.write = function(e, t) {
                      var n = this.target,
                          r = this.values.get(e);
                      if (r instanceof Se) r.set(t);
                      else {
                          if (Tt(this)) {
                              if (!(o = Ot(this, {
                                      type: "update",
                                      object: this.proxy || n,
                                      name: e,
                                      newValue: t
                                  }))) return;
                              t = o.newValue
                          }
                          if ((t = r.prepareNewValue(t)) !== Pe.UNCHANGED) {
                              var i = Pt(this),
                                  o = i ? {
                                      type: "update",
                                      object: this.proxy || n,
                                      oldValue: r.value,
                                      name: e,
                                      newValue: t
                                  } : null;
                              0, r.setNewValue(t), i && Mt(this, o)
                          }
                      }
                  }, e.prototype.has = function(e) {
                      var t = this.pendingKeys || (this.pendingKeys = new Map),
                          n = t.get(e);
                      if (n) return n.get();
                      var r = !!this.values.get(e);
                      return n = new _e(r, D, this.name + "." + S(e) + "?", !1), t.set(e, n), n.get()
                  }, e.prototype.addObservableProp = function(e, t, n) {
                      void 0 === n && (n = this.defaultEnhancer);
                      var r = this.target;
                      if (Tt(this)) {
                          var i = Ot(this, {
                              object: this.proxy || r,
                              name: e,
                              type: "add",
                              newValue: t
                          });
                          if (!i) return;
                          t = i.newValue
                      }
                      var o = new _e(t, n, this.name + "." + S(e), !1);
                      this.values.set(e, o), t = o.value, Object.defineProperty(r, e, function(e) {
                          return Kt[e] || (Kt[e] = {
                              configurable: !0,
                              enumerable: !0,
                              get: function() {
                                  return this[C].read(e)
                              },
                              set: function(t) {
                                  this[C].write(e, t)
                              }
                          })
                      }(e)), this.notifyPropertyAddition(e, t)
                  }, e.prototype.addComputedProp = function(e, t, n) {
                      var r, i, o, s = this.target;
                      n.name = n.name || this.name + "." + S(t), this.values.set(t, new Se(n)), (e === s || (r = e, i = t, !(o = Object.getOwnPropertyDescriptor(r, i)) || !1 !== o.configurable && !1 !== o.writable)) && Object.defineProperty(e, t, function(e) {
                          return Qt[e] || (Qt[e] = {
                              configurable: Pe.computedConfigurable,
                              enumerable: !1,
                              get: function() {
                                  return Jt(this).read(e)
                              },
                              set: function(t) {
                                  Jt(this).write(e, t)
                              }
                          })
                      }(t))
                  }, e.prototype.remove = function(e) {
                      if (this.values.has(e)) {
                          var t = this.target;
                          if (Tt(this))
                              if (!(s = Ot(this, {
                                      object: this.proxy || t,
                                      name: e,
                                      type: "remove"
                                  }))) return;
                          try {
                              je();
                              var n = Pt(this),
                                  r = this.values.get(e),
                                  i = r && r.get();
                              if (r && r.set(void 0), this.keysAtom.reportChanged(), this.values.delete(e), this.pendingKeys) {
                                  var o = this.pendingKeys.get(e);
                                  o && o.set(!1)
                              }
                              delete this.target[e];
                              var s = n ? {
                                  type: "remove",
                                  object: this.proxy || t,
                                  oldValue: i,
                                  name: e
                              } : null;
                              0, n && Mt(this, s)
                          } finally {
                              Be()
                          }
                      }
                  }, e.prototype.illegalAccess = function(e, t) {
                      console.warn("Property '" + t + "' of '" + e + "' was accessed through the prototype chain. Use 'decorate' instead to declare the prop or access it statically through it's owner")
                  }, e.prototype.observe = function(e, t) {
                      return Nt(this, e)
                  }, e.prototype.intercept = function(e) {
                      return At(this, e)
                  }, e.prototype.notifyPropertyAddition = function(e, t) {
                      var n = Pt(this),
                          r = n ? {
                              type: "add",
                              object: this.proxy || this.target,
                              name: e,
                              newValue: t
                          } : null;
                      if (n && Mt(this, r), this.pendingKeys) {
                          var i = this.pendingKeys.get(e);
                          i && i.set(!0)
                      }
                      this.keysAtom.reportChanged()
                  }, e.prototype.getKeys = function() {
                      var e, t;
                      this.keysAtom.reportObserved();
                      var n = [];
                      try {
                          for (var r = s(this.values), i = r.next(); !i.done; i = r.next()) {
                              var o = a(i.value, 2),
                                  u = o[0];
                              o[1] instanceof _e && n.push(u)
                          }
                      } catch (t) {
                          e = {
                              error: t
                          }
                      } finally {
                          try {
                              i && !i.done && (t = r.return) && t.call(r)
                          } finally {
                              if (e) throw e.error
                          }
                      }
                      return n
                  }, e
              }();

          function Yt(e, t, n) {
              if (void 0 === t && (t = ""), void 0 === n && (n = L), Object.prototype.hasOwnProperty.call(e, C)) return e[C];
              y(e) || (t = (e.constructor.name || "ObservableObject") + "@" + d()), t || (t = "ObservableObject@" + d());
              var r = new $t(e, new Map, S(t), n);
              return v(e, C, r), r
          }
          var Kt = Object.create(null),
              Qt = Object.create(null);

          function Jt(e) {
              var t = e[C];
              return t || (B(e), e[C])
          }
          var Xt = b("ObservableObjectAdministration", $t);

          function Zt(e) {
              return !!g(e) && (B(e), Xt(e[C]))
          }

          function en(e, t) {
              if ("object" == typeof e && null !== e) {
                  if (Dt(e)) return void 0 !== t && f(!1), e[C].atom;
                  if (Ht(e)) return e[C];
                  if (qt(e)) {
                      var n = e;
                      return void 0 === t ? n._keysAtom : ((r = n._data.get(t) || n._hasMap.get(t)) || f(!1), r)
                  }
                  var r;
                  if (B(e), t && !e[C] && e[t], Zt(e)) return t ? ((r = e[C].values.get(t)) || f(!1), r) : f(!1);
                  if (T(e) || ke(e) || ze(e)) return e
              } else if ("function" == typeof e && ze(e[C])) return e[C];
              return f(!1)
          }

          function tn(e, t) {
              return e || f("Expecting some object"), void 0 !== t ? tn(en(e, t)) : T(e) || ke(e) || ze(e) || qt(e) || Ht(e) ? e : (B(e), e[C] ? e[C] : void f(!1))
          }
          var nn = Object.prototype.toString;

          function rn(e, t, n) {
              return void 0 === n && (n = -1),
                  function e(t, n, r, i, o) {
                      if (t === n) return 0 !== t || 1 / t == 1 / n;
                      if (null == t || null == n) return !1;
                      if (t != t) return n != n;
                      var s = typeof t;
                      if ("function" !== s && "object" !== s && "object" != typeof n) return !1;
                      var a = nn.call(t);
                      if (a !== nn.call(n)) return !1;
                      switch (a) {
                          case "[object RegExp]":
                          case "[object String]":
                              return "" + t == "" + n;
                          case "[object Number]":
                              return +t != +t ? +n != +n : 0 == +t ? 1 / +t == 1 / n : +t == +n;
                          case "[object Date]":
                          case "[object Boolean]":
                              return +t == +n;
                          case "[object Symbol]":
                              return "undefined" != typeof Symbol && Symbol.valueOf.call(t) === Symbol.valueOf.call(n);
                          case "[object Map]":
                          case "[object Set]":
                              r >= 0 && r++
                      }
                      t = on(t), n = on(n);
                      var u = "[object Array]" === a;
                      if (!u) {
                          if ("object" != typeof t || "object" != typeof n) return !1;
                          var c = t.constructor,
                              l = n.constructor;
                          if (c !== l && !("function" == typeof c && c instanceof c && "function" == typeof l && l instanceof l) && "constructor" in t && "constructor" in n) return !1
                      }
                      if (0 === r) return !1;
                      r < 0 && (r = -1);
                      o = o || [];
                      var d = (i = i || []).length;
                      for (; d--;)
                          if (i[d] === t) return o[d] === n;
                      if (i.push(t), o.push(n), u) {
                          if ((d = t.length) !== n.length) return !1;
                          for (; d--;)
                              if (!e(t[d], n[d], r - 1, i, o)) return !1
                      } else {
                          var f = Object.keys(t),
                              p = void 0;
                          if (d = f.length, Object.keys(n).length !== d) return !1;
                          for (; d--;)
                              if (p = f[d], !sn(n, p) || !e(t[p], n[p], r - 1, i, o)) return !1
                      }
                      return i.pop(), o.pop(), !0
                  }(e, t, n)
          }

          function on(e) {
              return Dt(e) ? e.slice() : w(e) || qt(e) || _(e) || Ht(e) ? Array.from(e.entries()) : e
          }

          function sn(e, t) {
              return Object.prototype.hasOwnProperty.call(e, t)
          }

          function an(e) {
              return e[Symbol.iterator] = un, e
          }

          function un() {
              return this
          }
          if ("undefined" == typeof Proxy || "undefined" == typeof Symbol) throw new Error("[mobx] MobX 5+ requires Proxy and Symbol objects. If your environment doesn't support Symbol or Proxy objects, please downgrade to MobX 4. For React Native Android, consider upgrading JSCore.");
          "object" == typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ && __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
              spy: We,
              extras: {
                  getDebugName: function(e, t) {
                      return (void 0 !== t ? en(e, t) : Zt(e) || qt(e) || Ht(e) ? tn(e) : en(e)).name
                  }
              },
              $mobx: C
          })
      }).call(this, n(18), n(21))
  }, , , , function(e, t, n) {
      (function(r) {
          t.log = function(...e) {
              return "object" == typeof console && console.log && console.log(...e)
          }, t.formatArgs = function(t) {
              if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors) return;
              const n = "color: " + this.color;
              t.splice(1, 0, n, "color: inherit");
              let r = 0,
                  i = 0;
              t[0].replace(/%[a-zA-Z%]/g, e => {
                  "%%" !== e && (r++, "%c" === e && (i = r))
              }), t.splice(i, 0, n)
          }, t.save = function(e) {
              try {
                  e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug")
              } catch (e) {}
          }, t.load = function() {
              let e;
              try {
                  e = t.storage.getItem("debug")
              } catch (e) {}!e && void 0 !== r && "env" in r && (e = r.env.DEBUG);
              return e
          }, t.useColors = function() {
              if ("undefined" != typeof window && window.process && ("renderer" === window.process.type || window.process.__nwjs)) return !0;
              if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
              return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
          }, t.storage = function() {
              try {
                  return localStorage
              } catch (e) {}
          }(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], e.exports = n(27)(t);
          const {
              formatters: i
          } = e.exports;
          i.j = function(e) {
              try {
                  return JSON.stringify(e)
              } catch (e) {
                  return "[UnexpectedJSONParseError]: " + e.message
              }
          }
      }).call(this, n(18))
  }, , , , , , , , function(e, t, n) {
      "use strict";
      ! function e() {
          if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) {
              0;
              try {
                  __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
              } catch (e) {
                  console.error(e)
              }
          }
      }(), e.exports = n(26)
  }, , , , , , , , function(e, t, n) {
      e.exports = function(e) {
          var t = {};

          function n(r) {
              if (t[r]) return t[r].exports;
              var i = t[r] = {
                  i: r,
                  l: !1,
                  exports: {}
              };
              return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
          }
          return n.m = e, n.c = t, n.d = function(e, t, r) {
              n.o(e, t) || Object.defineProperty(e, t, {
                  enumerable: !0,
                  get: r
              })
          }, n.r = function(e) {
              "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                  value: "Module"
              }), Object.defineProperty(e, "__esModule", {
                  value: !0
              })
          }, n.t = function(e, t) {
              if (1 & t && (e = n(e)), 8 & t) return e;
              if (4 & t && "object" == typeof e && e && e.__esModule) return e;
              var r = Object.create(null);
              if (n.r(r), Object.defineProperty(r, "default", {
                      enumerable: !0,
                      value: e
                  }), 2 & t && "string" != typeof e)
                  for (var i in e) n.d(r, i, function(t) {
                      return e[t]
                  }.bind(null, i));
              return r
          }, n.n = function(e) {
              var t = e && e.__esModule ? function() {
                  return e.default
              } : function() {
                  return e
              };
              return n.d(t, "a", t), t
          }, n.o = function(e, t) {
              return Object.prototype.hasOwnProperty.call(e, t)
          }, n.p = "", n(n.s = 90)
      }({
          17: function(e, t, n) {
              "use strict";
              t.__esModule = !0, t.default = void 0;
              var r = n(18),
                  i = function() {
                      function e() {}
                      return e.getFirstMatch = function(e, t) {
                          var n = t.match(e);
                          return n && n.length > 0 && n[1] || ""
                      }, e.getSecondMatch = function(e, t) {
                          var n = t.match(e);
                          return n && n.length > 1 && n[2] || ""
                      }, e.matchAndReturnConst = function(e, t, n) {
                          if (e.test(t)) return n
                      }, e.getWindowsVersionName = function(e) {
                          switch (e) {
                              case "NT":
                                  return "NT";
                              case "XP":
                                  return "XP";
                              case "NT 5.0":
                                  return "2000";
                              case "NT 5.1":
                                  return "XP";
                              case "NT 5.2":
                                  return "2003";
                              case "NT 6.0":
                                  return "Vista";
                              case "NT 6.1":
                                  return "7";
                              case "NT 6.2":
                                  return "8";
                              case "NT 6.3":
                                  return "8.1";
                              case "NT 10.0":
                                  return "10";
                              default:
                                  return
                          }
                      }, e.getMacOSVersionName = function(e) {
                          var t = e.split(".").splice(0, 2).map((function(e) {
                              return parseInt(e, 10) || 0
                          }));
                          if (t.push(0), 10 === t[0]) switch (t[1]) {
                              case 5:
                                  return "Leopard";
                              case 6:
                                  return "Snow Leopard";
                              case 7:
                                  return "Lion";
                              case 8:
                                  return "Mountain Lion";
                              case 9:
                                  return "Mavericks";
                              case 10:
                                  return "Yosemite";
                              case 11:
                                  return "El Capitan";
                              case 12:
                                  return "Sierra";
                              case 13:
                                  return "High Sierra";
                              case 14:
                                  return "Mojave";
                              case 15:
                                  return "Catalina";
                              default:
                                  return
                          }
                      }, e.getAndroidVersionName = function(e) {
                          var t = e.split(".").splice(0, 2).map((function(e) {
                              return parseInt(e, 10) || 0
                          }));
                          if (t.push(0), !(1 === t[0] && t[1] < 5)) return 1 === t[0] && t[1] < 6 ? "Cupcake" : 1 === t[0] && t[1] >= 6 ? "Donut" : 2 === t[0] && t[1] < 2 ? "Eclair" : 2 === t[0] && 2 === t[1] ? "Froyo" : 2 === t[0] && t[1] > 2 ? "Gingerbread" : 3 === t[0] ? "Honeycomb" : 4 === t[0] && t[1] < 1 ? "Ice Cream Sandwich" : 4 === t[0] && t[1] < 4 ? "Jelly Bean" : 4 === t[0] && t[1] >= 4 ? "KitKat" : 5 === t[0] ? "Lollipop" : 6 === t[0] ? "Marshmallow" : 7 === t[0] ? "Nougat" : 8 === t[0] ? "Oreo" : 9 === t[0] ? "Pie" : void 0
                      }, e.getVersionPrecision = function(e) {
                          return e.split(".").length
                      }, e.compareVersions = function(t, n, r) {
                          void 0 === r && (r = !1);
                          var i = e.getVersionPrecision(t),
                              o = e.getVersionPrecision(n),
                              s = Math.max(i, o),
                              a = 0,
                              u = e.map([t, n], (function(t) {
                                  var n = s - e.getVersionPrecision(t),
                                      r = t + new Array(n + 1).join(".0");
                                  return e.map(r.split("."), (function(e) {
                                      return new Array(20 - e.length).join("0") + e
                                  })).reverse()
                              }));
                          for (r && (a = s - Math.min(i, o)), s -= 1; s >= a;) {
                              if (u[0][s] > u[1][s]) return 1;
                              if (u[0][s] === u[1][s]) {
                                  if (s === a) return 0;
                                  s -= 1
                              } else if (u[0][s] < u[1][s]) return -1
                          }
                      }, e.map = function(e, t) {
                          var n, r = [];
                          if (Array.prototype.map) return Array.prototype.map.call(e, t);
                          for (n = 0; n < e.length; n += 1) r.push(t(e[n]));
                          return r
                      }, e.find = function(e, t) {
                          var n, r;
                          if (Array.prototype.find) return Array.prototype.find.call(e, t);
                          for (n = 0, r = e.length; n < r; n += 1) {
                              var i = e[n];
                              if (t(i, n)) return i
                          }
                      }, e.assign = function(e) {
                          for (var t, n, r = e, i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++) o[s - 1] = arguments[s];
                          if (Object.assign) return Object.assign.apply(Object, [e].concat(o));
                          var a = function() {
                              var e = o[t];
                              "object" == typeof e && null !== e && Object.keys(e).forEach((function(t) {
                                  r[t] = e[t]
                              }))
                          };
                          for (t = 0, n = o.length; t < n; t += 1) a();
                          return e
                      }, e.getBrowserAlias = function(e) {
                          return r.BROWSER_ALIASES_MAP[e]
                      }, e.getBrowserTypeByAlias = function(e) {
                          return r.BROWSER_MAP[e] || ""
                      }, e
                  }();
              t.default = i, e.exports = t.default
          },
          18: function(e, t, n) {
              "use strict";
              t.__esModule = !0, t.ENGINE_MAP = t.OS_MAP = t.PLATFORMS_MAP = t.BROWSER_MAP = t.BROWSER_ALIASES_MAP = void 0, t.BROWSER_ALIASES_MAP = {
                  "Amazon Silk": "amazon_silk",
                  "Android Browser": "android",
                  Bada: "bada",
                  BlackBerry: "blackberry",
                  Chrome: "chrome",
                  Chromium: "chromium",
                  Electron: "electron",
                  Epiphany: "epiphany",
                  Firefox: "firefox",
                  Focus: "focus",
                  Generic: "generic",
                  "Google Search": "google_search",
                  Googlebot: "googlebot",
                  "Internet Explorer": "ie",
                  "K-Meleon": "k_meleon",
                  Maxthon: "maxthon",
                  "Microsoft Edge": "edge",
                  "MZ Browser": "mz",
                  "NAVER Whale Browser": "naver",
                  Opera: "opera",
                  "Opera Coast": "opera_coast",
                  PhantomJS: "phantomjs",
                  Puffin: "puffin",
                  QupZilla: "qupzilla",
                  QQ: "qq",
                  QQLite: "qqlite",
                  Safari: "safari",
                  Sailfish: "sailfish",
                  "Samsung Internet for Android": "samsung_internet",
                  SeaMonkey: "seamonkey",
                  Sleipnir: "sleipnir",
                  Swing: "swing",
                  Tizen: "tizen",
                  "UC Browser": "uc",
                  Vivaldi: "vivaldi",
                  "WebOS Browser": "webos",
                  WeChat: "wechat",
                  "Yandex Browser": "yandex",
                  Roku: "roku"
              }, t.BROWSER_MAP = {
                  amazon_silk: "Amazon Silk",
                  android: "Android Browser",
                  bada: "Bada",
                  blackberry: "BlackBerry",
                  chrome: "Chrome",
                  chromium: "Chromium",
                  electron: "Electron",
                  epiphany: "Epiphany",
                  firefox: "Firefox",
                  focus: "Focus",
                  generic: "Generic",
                  googlebot: "Googlebot",
                  google_search: "Google Search",
                  ie: "Internet Explorer",
                  k_meleon: "K-Meleon",
                  maxthon: "Maxthon",
                  edge: "Microsoft Edge",
                  mz: "MZ Browser",
                  naver: "NAVER Whale Browser",
                  opera: "Opera",
                  opera_coast: "Opera Coast",
                  phantomjs: "PhantomJS",
                  puffin: "Puffin",
                  qupzilla: "QupZilla",
                  qq: "QQ Browser",
                  qqlite: "QQ Browser Lite",
                  safari: "Safari",
                  sailfish: "Sailfish",
                  samsung_internet: "Samsung Internet for Android",
                  seamonkey: "SeaMonkey",
                  sleipnir: "Sleipnir",
                  swing: "Swing",
                  tizen: "Tizen",
                  uc: "UC Browser",
                  vivaldi: "Vivaldi",
                  webos: "WebOS Browser",
                  wechat: "WeChat",
                  yandex: "Yandex Browser"
              }, t.PLATFORMS_MAP = {
                  tablet: "tablet",
                  mobile: "mobile",
                  desktop: "desktop",
                  tv: "tv"
              }, t.OS_MAP = {
                  WindowsPhone: "Windows Phone",
                  Windows: "Windows",
                  MacOS: "macOS",
                  iOS: "iOS",
                  Android: "Android",
                  WebOS: "WebOS",
                  BlackBerry: "BlackBerry",
                  Bada: "Bada",
                  Tizen: "Tizen",
                  Linux: "Linux",
                  ChromeOS: "Chrome OS",
                  PlayStation4: "PlayStation 4",
                  Roku: "Roku"
              }, t.ENGINE_MAP = {
                  EdgeHTML: "EdgeHTML",
                  Blink: "Blink",
                  Trident: "Trident",
                  Presto: "Presto",
                  Gecko: "Gecko",
                  WebKit: "WebKit"
              }
          },
          90: function(e, t, n) {
              "use strict";
              t.__esModule = !0, t.default = void 0;
              var r, i = (r = n(91)) && r.__esModule ? r : {
                      default: r
                  },
                  o = n(18);

              function s(e, t) {
                  for (var n = 0; n < t.length; n++) {
                      var r = t[n];
                      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                  }
              }
              var a = function() {
                  function e() {}
                  var t, n;
                  return e.getParser = function(e, t) {
                      if (void 0 === t && (t = !1), "string" != typeof e) throw new Error("UserAgent should be a string");
                      return new i.default(e, t)
                  }, e.parse = function(e) {
                      return new i.default(e).getResult()
                  }, t = e, (n = [{
                      key: "BROWSER_MAP",
                      get: function() {
                          return o.BROWSER_MAP
                      }
                  }, {
                      key: "ENGINE_MAP",
                      get: function() {
                          return o.ENGINE_MAP
                      }
                  }, {
                      key: "OS_MAP",
                      get: function() {
                          return o.OS_MAP
                      }
                  }, {
                      key: "PLATFORMS_MAP",
                      get: function() {
                          return o.PLATFORMS_MAP
                      }
                  }]) && s(t, n), e
              }();
              t.default = a, e.exports = t.default
          },
          91: function(e, t, n) {
              "use strict";
              t.__esModule = !0, t.default = void 0;
              var r = u(n(92)),
                  i = u(n(93)),
                  o = u(n(94)),
                  s = u(n(95)),
                  a = u(n(17));

              function u(e) {
                  return e && e.__esModule ? e : {
                      default: e
                  }
              }
              var c = function() {
                  function e(e, t) {
                      if (void 0 === t && (t = !1), null == e || "" === e) throw new Error("UserAgent parameter can't be empty");
                      this._ua = e, this.parsedResult = {}, !0 !== t && this.parse()
                  }
                  var t = e.prototype;
                  return t.getUA = function() {
                      return this._ua
                  }, t.test = function(e) {
                      return e.test(this._ua)
                  }, t.parseBrowser = function() {
                      var e = this;
                      this.parsedResult.browser = {};
                      var t = a.default.find(r.default, (function(t) {
                          if ("function" == typeof t.test) return t.test(e);
                          if (t.test instanceof Array) return t.test.some((function(t) {
                              return e.test(t)
                          }));
                          throw new Error("Browser's test function is not valid")
                      }));
                      return t && (this.parsedResult.browser = t.describe(this.getUA())), this.parsedResult.browser
                  }, t.getBrowser = function() {
                      return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser()
                  }, t.getBrowserName = function(e) {
                      return e ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || ""
                  }, t.getBrowserVersion = function() {
                      return this.getBrowser().version
                  }, t.getOS = function() {
                      return this.parsedResult.os ? this.parsedResult.os : this.parseOS()
                  }, t.parseOS = function() {
                      var e = this;
                      this.parsedResult.os = {};
                      var t = a.default.find(i.default, (function(t) {
                          if ("function" == typeof t.test) return t.test(e);
                          if (t.test instanceof Array) return t.test.some((function(t) {
                              return e.test(t)
                          }));
                          throw new Error("Browser's test function is not valid")
                      }));
                      return t && (this.parsedResult.os = t.describe(this.getUA())), this.parsedResult.os
                  }, t.getOSName = function(e) {
                      var t = this.getOS().name;
                      return e ? String(t).toLowerCase() || "" : t || ""
                  }, t.getOSVersion = function() {
                      return this.getOS().version
                  }, t.getPlatform = function() {
                      return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform()
                  }, t.getPlatformType = function(e) {
                      void 0 === e && (e = !1);
                      var t = this.getPlatform().type;
                      return e ? String(t).toLowerCase() || "" : t || ""
                  }, t.parsePlatform = function() {
                      var e = this;
                      this.parsedResult.platform = {};
                      var t = a.default.find(o.default, (function(t) {
                          if ("function" == typeof t.test) return t.test(e);
                          if (t.test instanceof Array) return t.test.some((function(t) {
                              return e.test(t)
                          }));
                          throw new Error("Browser's test function is not valid")
                      }));
                      return t && (this.parsedResult.platform = t.describe(this.getUA())), this.parsedResult.platform
                  }, t.getEngine = function() {
                      return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine()
                  }, t.getEngineName = function(e) {
                      return e ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || ""
                  }, t.parseEngine = function() {
                      var e = this;
                      this.parsedResult.engine = {};
                      var t = a.default.find(s.default, (function(t) {
                          if ("function" == typeof t.test) return t.test(e);
                          if (t.test instanceof Array) return t.test.some((function(t) {
                              return e.test(t)
                          }));
                          throw new Error("Browser's test function is not valid")
                      }));
                      return t && (this.parsedResult.engine = t.describe(this.getUA())), this.parsedResult.engine
                  }, t.parse = function() {
                      return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this
                  }, t.getResult = function() {
                      return a.default.assign({}, this.parsedResult)
                  }, t.satisfies = function(e) {
                      var t = this,
                          n = {},
                          r = 0,
                          i = {},
                          o = 0;
                      if (Object.keys(e).forEach((function(t) {
                              var s = e[t];
                              "string" == typeof s ? (i[t] = s, o += 1) : "object" == typeof s && (n[t] = s, r += 1)
                          })), r > 0) {
                          var s = Object.keys(n),
                              u = a.default.find(s, (function(e) {
                                  return t.isOS(e)
                              }));
                          if (u) {
                              var c = this.satisfies(n[u]);
                              if (void 0 !== c) return c
                          }
                          var l = a.default.find(s, (function(e) {
                              return t.isPlatform(e)
                          }));
                          if (l) {
                              var d = this.satisfies(n[l]);
                              if (void 0 !== d) return d
                          }
                      }
                      if (o > 0) {
                          var f = Object.keys(i),
                              p = a.default.find(f, (function(e) {
                                  return t.isBrowser(e, !0)
                              }));
                          if (void 0 !== p) return this.compareVersion(i[p])
                      }
                  }, t.isBrowser = function(e, t) {
                      void 0 === t && (t = !1);
                      var n = this.getBrowserName().toLowerCase(),
                          r = e.toLowerCase(),
                          i = a.default.getBrowserTypeByAlias(r);
                      return t && i && (r = i.toLowerCase()), r === n
                  }, t.compareVersion = function(e) {
                      var t = [0],
                          n = e,
                          r = !1,
                          i = this.getBrowserVersion();
                      if ("string" == typeof i) return ">" === e[0] || "<" === e[0] ? (n = e.substr(1), "=" === e[1] ? (r = !0, n = e.substr(2)) : t = [], ">" === e[0] ? t.push(1) : t.push(-1)) : "=" === e[0] ? n = e.substr(1) : "~" === e[0] && (r = !0, n = e.substr(1)), t.indexOf(a.default.compareVersions(i, n, r)) > -1
                  }, t.isOS = function(e) {
                      return this.getOSName(!0) === String(e).toLowerCase()
                  }, t.isPlatform = function(e) {
                      return this.getPlatformType(!0) === String(e).toLowerCase()
                  }, t.isEngine = function(e) {
                      return this.getEngineName(!0) === String(e).toLowerCase()
                  }, t.is = function(e) {
                      return this.isBrowser(e) || this.isOS(e) || this.isPlatform(e)
                  }, t.some = function(e) {
                      var t = this;
                      return void 0 === e && (e = []), e.some((function(e) {
                          return t.is(e)
                      }))
                  }, e
              }();
              t.default = c, e.exports = t.default
          },
          92: function(e, t, n) {
              "use strict";
              t.__esModule = !0, t.default = void 0;
              var r, i = (r = n(17)) && r.__esModule ? r : {
                      default: r
                  },
                  o = /version\/(\d+(\.?_?\d+)+)/i,
                  s = [{
                      test: [/googlebot/i],
                      describe: function(e) {
                          var t = {
                                  name: "Googlebot"
                              },
                              n = i.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e) || i.default.getFirstMatch(o, e);
                          return n && (t.version = n), t
                      }
                  }, {
                      test: [/opera/i],
                      describe: function(e) {
                          var t = {
                                  name: "Opera"
                              },
                              n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e);
                          return n && (t.version = n), t
                      }
                  }, {
                      test: [/opr\/|opios/i],
                      describe: function(e) {
                          var t = {
                                  name: "Opera"
                              },
                              n = i.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e) || i.default.getFirstMatch(o, e);
                          return n && (t.version = n), t
                      }
                  }, {
                      test: [/SamsungBrowser/i],
                      describe: function(e) {
                          var t = {
                                  name: "Samsung Internet for Android"
                              },
                              n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                          return n && (t.version = n), t
                      }
                  }, {
                      test: [/Whale/i],
                      describe: function(e) {
                          var t = {
                                  name: "NAVER Whale Browser"
                              },
                              n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e);
                          return n && (t.version = n), t
                      }
                  }, {
                      test: [/MZBrowser/i],
                      describe: function(e) {
                          var t = {
                                  name: "MZ Browser"
                              },
                              n = i.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                          return n && (t.version = n), t
                      }
                  }, {
                      test: [/focus/i],
                      describe: function(e) {
                          var t = {
                                  name: "Focus"
                              },
                              n = i.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                          return n && (t.version = n), t
                      }
                  }, {
                      test: [/swing/i],
                      describe: function(e) {
                          var t = {
                                  name: "Swing"
                              },
                              n = i.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                          return n && (t.version = n), t
                      }
                  }, {
                      test: [/coast/i],
                      describe: function(e) {
                          var t = {
                                  name: "Opera Coast"
                              },
                              n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e);
                          return n && (t.version = n), t
                      }
                  }, {
                      test: [/yabrowser/i],
                      describe: function(e) {
                          var t = {
                                  name: "Yandex Browser"
                              },
                              n = i.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                          return n && (t.version = n), t
                      }
                  }, {
                      test: [/ucbrowser/i],
                      describe: function(e) {
                          var t = {
                                  name: "UC Browser"
                              },
                              n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                          return n && (t.version = n), t
                      }
                  }, {
                      test: [/Maxthon|mxios/i],
                      describe: function(e) {
                          var t = {
                                  name: "Maxthon"
                              },
                              n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e);
                          return n && (t.version = n), t
                      }
                  }, {
                      test: [/epiphany/i],
                      describe: function(e) {
                          var t = {
                                  name: "Epiphany"
                              },
                              n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e);
                          return n && (t.version = n), t
                      }
                  }, {
                      test: [/puffin/i],
                      describe: function(e) {
                          var t = {
                                  name: "Puffin"
                              },
                              n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e);
                          return n && (t.version = n), t
                      }
                  }, {
                      test: [/sleipnir/i],
                      describe: function(e) {
                          var t = {
                                  name: "Sleipnir"
                              },
                              n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e);
                          return n && (t.version = n), t
                      }
                  }, {
                      test: [/k-meleon/i],
                      describe: function(e) {
                          var t = {
                                  name: "K-Meleon"
                              },
                              n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e);
                          return n && (t.version = n), t
                      }
                  }, {
                      test: [/micromessenger/i],
                      describe: function(e) {
                          var t = {
                                  name: "WeChat"
                              },
                              n = i.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                          return n && (t.version = n), t
                      }
                  }, {
                      test: [/qqbrowser/i],
                      describe: function(e) {
                          var t = {
                                  name: /qqbrowserlite/i.test(e) ? "QQ Browser Lite" : "QQ Browser"
                              },
                              n = i.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                          return n && (t.version = n), t
                      }
                  }, {
                      test: [/msie|trident/i],
                      describe: function(e) {
                          var t = {
                                  name: "Internet Explorer"
                              },
                              n = i.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e);
                          return n && (t.version = n), t
                      }
                  }, {
                      test: [/\sedg\//i],
                      describe: function(e) {
                          var t = {
                                  name: "Microsoft Edge"
                              },
                              n = i.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e);
                          return n && (t.version = n), t
                      }
                  }, {
                      test: [/edg([ea]|ios)/i],
                      describe: function(e) {
                          var t = {
                                  name: "Microsoft Edge"
                              },
                              n = i.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e);
                          return n && (t.version = n), t
                      }
                  }, {
                      test: [/vivaldi/i],
                      describe: function(e) {
                          var t = {
                                  name: "Vivaldi"
                              },
                              n = i.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e);
                          return n && (t.version = n), t
                      }
                  }, {
                      test: [/seamonkey/i],
                      describe: function(e) {
                          var t = {
                                  name: "SeaMonkey"
                              },
                              n = i.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e);
                          return n && (t.version = n), t
                      }
                  }, {
                      test: [/sailfish/i],
                      describe: function(e) {
                          var t = {
                                  name: "Sailfish"
                              },
                              n = i.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e);
                          return n && (t.version = n), t
                      }
                  }, {
                      test: [/silk/i],
                      describe: function(e) {
                          var t = {
                                  name: "Amazon Silk"
                              },
                              n = i.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e);
                          return n && (t.version = n), t
                      }
                  }, {
                      test: [/phantom/i],
                      describe: function(e) {
                          var t = {
                                  name: "PhantomJS"
                              },
                              n = i.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e);
                          return n && (t.version = n), t
                      }
                  }, {
                      test: [/slimerjs/i],
                      describe: function(e) {
                          var t = {
                                  name: "SlimerJS"
                              },
                              n = i.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e);
                          return n && (t.version = n), t
                      }
                  }, {
                      test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                      describe: function(e) {
                          var t = {
                                  name: "BlackBerry"
                              },
                              n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e);
                          return n && (t.version = n), t
                      }
                  }, {
                      test: [/(web|hpw)[o0]s/i],
                      describe: function(e) {
                          var t = {
                                  name: "WebOS Browser"
                              },
                              n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e);
                          return n && (t.version = n), t
                      }
                  }, {
                      test: [/bada/i],
                      describe: function(e) {
                          var t = {
                                  name: "Bada"
                              },
                              n = i.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e);
                          return n && (t.version = n), t
                      }
                  }, {
                      test: [/tizen/i],
                      describe: function(e) {
                          var t = {
                                  name: "Tizen"
                              },
                              n = i.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                          return n && (t.version = n), t
                      }
                  }, {
                      test: [/qupzilla/i],
                      describe: function(e) {
                          var t = {
                                  name: "QupZilla"
                              },
                              n = i.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                          return n && (t.version = n), t
                      }
                  }, {
                      test: [/firefox|iceweasel|fxios/i],
                      describe: function(e) {
                          var t = {
                                  name: "Firefox"
                              },
                              n = i.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e);
                          return n && (t.version = n), t
                      }
                  }, {
                      test: [/electron/i],
                      describe: function(e) {
                          var t = {
                                  name: "Electron"
                              },
                              n = i.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e);
                          return n && (t.version = n), t
                      }
                  }, {
                      test: [/chromium/i],
                      describe: function(e) {
                          var t = {
                                  name: "Chromium"
                              },
                              n = i.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                          return n && (t.version = n), t
                      }
                  }, {
                      test: [/chrome|crios|crmo/i],
                      describe: function(e) {
                          var t = {
                                  name: "Chrome"
                              },
                              n = i.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e);
                          return n && (t.version = n), t
                      }
                  }, {
                      test: [/GSA/i],
                      describe: function(e) {
                          var t = {
                                  name: "Google Search"
                              },
                              n = i.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e);
                          return n && (t.version = n), t
                      }
                  }, {
                      test: function(e) {
                          var t = !e.test(/like android/i),
                              n = e.test(/android/i);
                          return t && n
                      },
                      describe: function(e) {
                          var t = {
                                  name: "Android Browser"
                              },
                              n = i.default.getFirstMatch(o, e);
                          return n && (t.version = n), t
                      }
                  }, {
                      test: [/playstation 4/i],
                      describe: function(e) {
                          var t = {
                                  name: "PlayStation 4"
                              },
                              n = i.default.getFirstMatch(o, e);
                          return n && (t.version = n), t
                      }
                  }, {
                      test: [/safari|applewebkit/i],
                      describe: function(e) {
                          var t = {
                                  name: "Safari"
                              },
                              n = i.default.getFirstMatch(o, e);
                          return n && (t.version = n), t
                      }
                  }, {
                      test: [/.*/i],
                      describe: function(e) {
                          var t = -1 !== e.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
                          return {
                              name: i.default.getFirstMatch(t, e),
                              version: i.default.getSecondMatch(t, e)
                          }
                      }
                  }];
              t.default = s, e.exports = t.default
          },
          93: function(e, t, n) {
              "use strict";
              t.__esModule = !0, t.default = void 0;
              var r, i = (r = n(17)) && r.__esModule ? r : {
                      default: r
                  },
                  o = n(18),
                  s = [{
                      test: [/Roku\/DVP/],
                      describe: function(e) {
                          var t = i.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e);
                          return {
                              name: o.OS_MAP.Roku,
                              version: t
                          }
                      }
                  }, {
                      test: [/windows phone/i],
                      describe: function(e) {
                          var t = i.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e);
                          return {
                              name: o.OS_MAP.WindowsPhone,
                              version: t
                          }
                      }
                  }, {
                      test: [/windows /i],
                      describe: function(e) {
                          var t = i.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e),
                              n = i.default.getWindowsVersionName(t);
                          return {
                              name: o.OS_MAP.Windows,
                              version: t,
                              versionName: n
                          }
                      }
                  }, {
                      test: [/Macintosh(.*?) FxiOS(.*?) Version\//],
                      describe: function(e) {
                          var t = i.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, e);
                          return {
                              name: o.OS_MAP.iOS,
                              version: t
                          }
                      }
                  }, {
                      test: [/macintosh/i],
                      describe: function(e) {
                          var t = i.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e).replace(/[_\s]/g, "."),
                              n = i.default.getMacOSVersionName(t),
                              r = {
                                  name: o.OS_MAP.MacOS,
                                  version: t
                              };
                          return n && (r.versionName = n), r
                      }
                  }, {
                      test: [/(ipod|iphone|ipad)/i],
                      describe: function(e) {
                          var t = i.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e).replace(/[_\s]/g, ".");
                          return {
                              name: o.OS_MAP.iOS,
                              version: t
                          }
                      }
                  }, {
                      test: function(e) {
                          var t = !e.test(/like android/i),
                              n = e.test(/android/i);
                          return t && n
                      },
                      describe: function(e) {
                          var t = i.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e),
                              n = i.default.getAndroidVersionName(t),
                              r = {
                                  name: o.OS_MAP.Android,
                                  version: t
                              };
                          return n && (r.versionName = n), r
                      }
                  }, {
                      test: [/(web|hpw)[o0]s/i],
                      describe: function(e) {
                          var t = i.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e),
                              n = {
                                  name: o.OS_MAP.WebOS
                              };
                          return t && t.length && (n.version = t), n
                      }
                  }, {
                      test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                      describe: function(e) {
                          var t = i.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e) || i.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e) || i.default.getFirstMatch(/\bbb(\d+)/i, e);
                          return {
                              name: o.OS_MAP.BlackBerry,
                              version: t
                          }
                      }
                  }, {
                      test: [/bada/i],
                      describe: function(e) {
                          var t = i.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e);
                          return {
                              name: o.OS_MAP.Bada,
                              version: t
                          }
                      }
                  }, {
                      test: [/tizen/i],
                      describe: function(e) {
                          var t = i.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e);
                          return {
                              name: o.OS_MAP.Tizen,
                              version: t
                          }
                      }
                  }, {
                      test: [/linux/i],
                      describe: function() {
                          return {
                              name: o.OS_MAP.Linux
                          }
                      }
                  }, {
                      test: [/CrOS/],
                      describe: function() {
                          return {
                              name: o.OS_MAP.ChromeOS
                          }
                      }
                  }, {
                      test: [/PlayStation 4/],
                      describe: function(e) {
                          var t = i.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e);
                          return {
                              name: o.OS_MAP.PlayStation4,
                              version: t
                          }
                      }
                  }];
              t.default = s, e.exports = t.default
          },
          94: function(e, t, n) {
              "use strict";
              t.__esModule = !0, t.default = void 0;
              var r, i = (r = n(17)) && r.__esModule ? r : {
                      default: r
                  },
                  o = n(18),
                  s = [{
                      test: [/googlebot/i],
                      describe: function() {
                          return {
                              type: "bot",
                              vendor: "Google"
                          }
                      }
                  }, {
                      test: [/huawei/i],
                      describe: function(e) {
                          var t = i.default.getFirstMatch(/(can-l01)/i, e) && "Nova",
                              n = {
                                  type: o.PLATFORMS_MAP.mobile,
                                  vendor: "Huawei"
                              };
                          return t && (n.model = t), n
                      }
                  }, {
                      test: [/nexus\s*(?:7|8|9|10).*/i],
                      describe: function() {
                          return {
                              type: o.PLATFORMS_MAP.tablet,
                              vendor: "Nexus"
                          }
                      }
                  }, {
                      test: [/ipad/i],
                      describe: function() {
                          return {
                              type: o.PLATFORMS_MAP.tablet,
                              vendor: "Apple",
                              model: "iPad"
                          }
                      }
                  }, {
                      test: [/Macintosh(.*?) FxiOS(.*?) Version\//],
                      describe: function() {
                          return {
                              type: o.PLATFORMS_MAP.tablet,
                              vendor: "Apple",
                              model: "iPad"
                          }
                      }
                  }, {
                      test: [/kftt build/i],
                      describe: function() {
                          return {
                              type: o.PLATFORMS_MAP.tablet,
                              vendor: "Amazon",
                              model: "Kindle Fire HD 7"
                          }
                      }
                  }, {
                      test: [/silk/i],
                      describe: function() {
                          return {
                              type: o.PLATFORMS_MAP.tablet,
                              vendor: "Amazon"
                          }
                      }
                  }, {
                      test: [/tablet(?! pc)/i],
                      describe: function() {
                          return {
                              type: o.PLATFORMS_MAP.tablet
                          }
                      }
                  }, {
                      test: function(e) {
                          var t = e.test(/ipod|iphone/i),
                              n = e.test(/like (ipod|iphone)/i);
                          return t && !n
                      },
                      describe: function(e) {
                          var t = i.default.getFirstMatch(/(ipod|iphone)/i, e);
                          return {
                              type: o.PLATFORMS_MAP.mobile,
                              vendor: "Apple",
                              model: t
                          }
                      }
                  }, {
                      test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
                      describe: function() {
                          return {
                              type: o.PLATFORMS_MAP.mobile,
                              vendor: "Nexus"
                          }
                      }
                  }, {
                      test: [/[^-]mobi/i],
                      describe: function() {
                          return {
                              type: o.PLATFORMS_MAP.mobile
                          }
                      }
                  }, {
                      test: function(e) {
                          return "blackberry" === e.getBrowserName(!0)
                      },
                      describe: function() {
                          return {
                              type: o.PLATFORMS_MAP.mobile,
                              vendor: "BlackBerry"
                          }
                      }
                  }, {
                      test: function(e) {
                          return "bada" === e.getBrowserName(!0)
                      },
                      describe: function() {
                          return {
                              type: o.PLATFORMS_MAP.mobile
                          }
                      }
                  }, {
                      test: function(e) {
                          return "windows phone" === e.getBrowserName()
                      },
                      describe: function() {
                          return {
                              type: o.PLATFORMS_MAP.mobile,
                              vendor: "Microsoft"
                          }
                      }
                  }, {
                      test: function(e) {
                          var t = Number(String(e.getOSVersion()).split(".")[0]);
                          return "android" === e.getOSName(!0) && t >= 3
                      },
                      describe: function() {
                          return {
                              type: o.PLATFORMS_MAP.tablet
                          }
                      }
                  }, {
                      test: function(e) {
                          return "android" === e.getOSName(!0)
                      },
                      describe: function() {
                          return {
                              type: o.PLATFORMS_MAP.mobile
                          }
                      }
                  }, {
                      test: function(e) {
                          return "macos" === e.getOSName(!0)
                      },
                      describe: function() {
                          return {
                              type: o.PLATFORMS_MAP.desktop,
                              vendor: "Apple"
                          }
                      }
                  }, {
                      test: function(e) {
                          return "windows" === e.getOSName(!0)
                      },
                      describe: function() {
                          return {
                              type: o.PLATFORMS_MAP.desktop
                          }
                      }
                  }, {
                      test: function(e) {
                          return "linux" === e.getOSName(!0)
                      },
                      describe: function() {
                          return {
                              type: o.PLATFORMS_MAP.desktop
                          }
                      }
                  }, {
                      test: function(e) {
                          return "playstation 4" === e.getOSName(!0)
                      },
                      describe: function() {
                          return {
                              type: o.PLATFORMS_MAP.tv
                          }
                      }
                  }, {
                      test: function(e) {
                          return "roku" === e.getOSName(!0)
                      },
                      describe: function() {
                          return {
                              type: o.PLATFORMS_MAP.tv
                          }
                      }
                  }];
              t.default = s, e.exports = t.default
          },
          95: function(e, t, n) {
              "use strict";
              t.__esModule = !0, t.default = void 0;
              var r, i = (r = n(17)) && r.__esModule ? r : {
                      default: r
                  },
                  o = n(18),
                  s = [{
                      test: function(e) {
                          return "microsoft edge" === e.getBrowserName(!0)
                      },
                      describe: function(e) {
                          if (/\sedg\//i.test(e)) return {
                              name: o.ENGINE_MAP.Blink
                          };
                          var t = i.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e);
                          return {
                              name: o.ENGINE_MAP.EdgeHTML,
                              version: t
                          }
                      }
                  }, {
                      test: [/trident/i],
                      describe: function(e) {
                          var t = {
                                  name: o.ENGINE_MAP.Trident
                              },
                              n = i.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e);
                          return n && (t.version = n), t
                      }
                  }, {
                      test: function(e) {
                          return e.test(/presto/i)
                      },
                      describe: function(e) {
                          var t = {
                                  name: o.ENGINE_MAP.Presto
                              },
                              n = i.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e);
                          return n && (t.version = n), t
                      }
                  }, {
                      test: function(e) {
                          var t = e.test(/gecko/i),
                              n = e.test(/like gecko/i);
                          return t && !n
                      },
                      describe: function(e) {
                          var t = {
                                  name: o.ENGINE_MAP.Gecko
                              },
                              n = i.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e);
                          return n && (t.version = n), t
                      }
                  }, {
                      test: [/(apple)?webkit\/537\.36/i],
                      describe: function() {
                          return {
                              name: o.ENGINE_MAP.Blink
                          }
                      }
                  }, {
                      test: [/(apple)?webkit/i],
                      describe: function(e) {
                          var t = {
                                  name: o.ENGINE_MAP.WebKit
                              },
                              n = i.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e);
                          return n && (t.version = n), t
                      }
                  }];
              t.default = s, e.exports = t.default
          }
      })
  }, function(e, t, n) {
      /*!
       * SkyWay Copyright(c) 2020 NTT Communications Corporation
       * peerjs Copyright(c) 2013 Michelle Bu <michelle@michellebu.com>
       */
      var r;
      window, r = function() {
          return function(e) {
              var t = {};

              function n(r) {
                  if (t[r]) return t[r].exports;
                  var i = t[r] = {
                      i: r,
                      l: !1,
                      exports: {}
                  };
                  return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
              }
              return n.m = e, n.c = t, n.d = function(e, t, r) {
                  n.o(e, t) || Object.defineProperty(e, t, {
                      enumerable: !0,
                      get: r
                  })
              }, n.r = function(e) {
                  "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                      value: "Module"
                  }), Object.defineProperty(e, "__esModule", {
                      value: !0
                  })
              }, n.t = function(e, t) {
                  if (1 & t && (e = n(e)), 8 & t) return e;
                  if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                  var r = Object.create(null);
                  if (n.r(r), Object.defineProperty(r, "default", {
                          enumerable: !0,
                          value: e
                      }), 2 & t && "string" != typeof e)
                      for (var i in e) n.d(r, i, function(t) {
                          return e[t]
                      }.bind(null, i));
                  return r
              }, n.n = function(e) {
                  var t = e && e.__esModule ? function() {
                      return e.default
                  } : function() {
                      return e
                  };
                  return n.d(t, "a", t), t
              }, n.o = function(e, t) {
                  return Object.prototype.hasOwnProperty.call(e, t)
              }, n.p = "", n(n.s = "./src/peer.js")
          }({
              "./node_modules/after/index.js":
                  /*!*************************************!*\
                    !*** ./node_modules/after/index.js ***!
                    \*************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t) {
                      function n() {}
                      e.exports = function(e, t, r) {
                          var i = !1;
                          return r = r || n, o.count = e, 0 === e ? t() : o;

                          function o(e, n) {
                              if (o.count <= 0) throw new Error("after called too many times");
                              --o.count, e ? (i = !0, t(e), t = r) : 0 !== o.count || i || t(null, n)
                          }
                      }
                  },
              "./node_modules/arraybuffer.slice/index.js":
                  /*!*************************************************!*\
                    !*** ./node_modules/arraybuffer.slice/index.js ***!
                    \*************************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t) {
                      e.exports = function(e, t, n) {
                          var r = e.byteLength;
                          if (t = t || 0, n = n || r, e.slice) return e.slice(t, n);
                          if (t < 0 && (t += r), n < 0 && (n += r), n > r && (n = r), t >= r || t >= n || 0 === r) return new ArrayBuffer(0);
                          for (var i = new Uint8Array(e), o = new Uint8Array(n - t), s = t, a = 0; s < n; s++, a++) o[a] = i[s];
                          return o.buffer
                      }
                  },
              "./node_modules/backo2/index.js":
                  /*!**************************************!*\
                    !*** ./node_modules/backo2/index.js ***!
                    \**************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t) {
                      function n(e) {
                          e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0
                      }
                      e.exports = n, n.prototype.duration = function() {
                          var e = this.ms * Math.pow(this.factor, this.attempts++);
                          if (this.jitter) {
                              var t = Math.random(),
                                  n = Math.floor(t * this.jitter * e);
                              e = 0 == (1 & Math.floor(10 * t)) ? e - n : e + n
                          }
                          return 0 | Math.min(e, this.max)
                      }, n.prototype.reset = function() {
                          this.attempts = 0
                      }, n.prototype.setMin = function(e) {
                          this.ms = e
                      }, n.prototype.setMax = function(e) {
                          this.max = e
                      }, n.prototype.setJitter = function(e) {
                          this.jitter = e
                      }
                  },
              "./node_modules/base64-arraybuffer/lib/base64-arraybuffer.js":
                  /*!*******************************************************************!*\
                    !*** ./node_modules/base64-arraybuffer/lib/base64-arraybuffer.js ***!
                    \*******************************************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t) {
                      ! function() {
                          "use strict";
                          for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = new Uint8Array(256), r = 0; r < e.length; r++) n[e.charCodeAt(r)] = r;
                          t.encode = function(t) {
                              var n, r = new Uint8Array(t),
                                  i = r.length,
                                  o = "";
                              for (n = 0; n < i; n += 3) o += e[r[n] >> 2], o += e[(3 & r[n]) << 4 | r[n + 1] >> 4], o += e[(15 & r[n + 1]) << 2 | r[n + 2] >> 6], o += e[63 & r[n + 2]];
                              return i % 3 == 2 ? o = o.substring(0, o.length - 1) + "=" : i % 3 == 1 && (o = o.substring(0, o.length - 2) + "=="), o
                          }, t.decode = function(e) {
                              var t, r, i, o, s, a = .75 * e.length,
                                  u = e.length,
                                  c = 0;
                              "=" === e[e.length - 1] && (a--, "=" === e[e.length - 2] && a--);
                              var l = new ArrayBuffer(a),
                                  d = new Uint8Array(l);
                              for (t = 0; t < u; t += 4) r = n[e.charCodeAt(t)], i = n[e.charCodeAt(t + 1)], o = n[e.charCodeAt(t + 2)], s = n[e.charCodeAt(t + 3)], d[c++] = r << 2 | i >> 4, d[c++] = (15 & i) << 4 | o >> 2, d[c++] = (3 & o) << 6 | 63 & s;
                              return l
                          }
                      }()
                  },
              "./node_modules/base64-js/index.js":
                  /*!*****************************************!*\
                    !*** ./node_modules/base64-js/index.js ***!
                    \*****************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t, n) {
                      "use strict";
                      t.byteLength = function(e) {
                          var t = c(e),
                              n = t[0],
                              r = t[1];
                          return 3 * (n + r) / 4 - r
                      }, t.toByteArray = function(e) {
                          var t, n, r = c(e),
                              s = r[0],
                              a = r[1],
                              u = new o(function(e, t, n) {
                                  return 3 * (t + n) / 4 - n
                              }(0, s, a)),
                              l = 0,
                              d = a > 0 ? s - 4 : s;
                          for (n = 0; n < d; n += 4) t = i[e.charCodeAt(n)] << 18 | i[e.charCodeAt(n + 1)] << 12 | i[e.charCodeAt(n + 2)] << 6 | i[e.charCodeAt(n + 3)], u[l++] = t >> 16 & 255, u[l++] = t >> 8 & 255, u[l++] = 255 & t;
                          return 2 === a && (t = i[e.charCodeAt(n)] << 2 | i[e.charCodeAt(n + 1)] >> 4, u[l++] = 255 & t), 1 === a && (t = i[e.charCodeAt(n)] << 10 | i[e.charCodeAt(n + 1)] << 4 | i[e.charCodeAt(n + 2)] >> 2, u[l++] = t >> 8 & 255, u[l++] = 255 & t), u
                      }, t.fromByteArray = function(e) {
                          for (var t, n = e.length, i = n % 3, o = [], s = 0, a = n - i; s < a; s += 16383) o.push(l(e, s, s + 16383 > a ? a : s + 16383));
                          return 1 === i ? (t = e[n - 1], o.push(r[t >> 2] + r[t << 4 & 63] + "==")) : 2 === i && (t = (e[n - 2] << 8) + e[n - 1], o.push(r[t >> 10] + r[t >> 4 & 63] + r[t << 2 & 63] + "=")), o.join("")
                      };
                      for (var r = [], i = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, u = s.length; a < u; ++a) r[a] = s[a], i[s.charCodeAt(a)] = a;

                      function c(e) {
                          var t = e.length;
                          if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                          var n = e.indexOf("=");
                          return -1 === n && (n = t), [n, n === t ? 0 : 4 - n % 4]
                      }

                      function l(e, t, n) {
                          for (var i, o, s = [], a = t; a < n; a += 3) i = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (255 & e[a + 2]), s.push(r[(o = i) >> 18 & 63] + r[o >> 12 & 63] + r[o >> 6 & 63] + r[63 & o]);
                          return s.join("")
                      }
                      i["-".charCodeAt(0)] = 62, i["_".charCodeAt(0)] = 63
                  },
              "./node_modules/blob/index.js":
                  /*!************************************!*\
                    !*** ./node_modules/blob/index.js ***!
                    \************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t) {
                      var n = void 0 !== n ? n : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : "undefined" != typeof MSBlobBuilder ? MSBlobBuilder : "undefined" != typeof MozBlobBuilder && MozBlobBuilder,
                          r = function() {
                              try {
                                  return 2 === new Blob(["hi"]).size
                              } catch (e) {
                                  return !1
                              }
                          }(),
                          i = r && function() {
                              try {
                                  return 2 === new Blob([new Uint8Array([1, 2])]).size
                              } catch (e) {
                                  return !1
                              }
                          }(),
                          o = n && n.prototype.append && n.prototype.getBlob;

                      function s(e) {
                          return e.map((function(e) {
                              if (e.buffer instanceof ArrayBuffer) {
                                  var t = e.buffer;
                                  if (e.byteLength !== t.byteLength) {
                                      var n = new Uint8Array(e.byteLength);
                                      n.set(new Uint8Array(t, e.byteOffset, e.byteLength)), t = n.buffer
                                  }
                                  return t
                              }
                              return e
                          }))
                      }

                      function a(e, t) {
                          t = t || {};
                          var r = new n;
                          return s(e).forEach((function(e) {
                              r.append(e)
                          })), t.type ? r.getBlob(t.type) : r.getBlob()
                      }

                      function u(e, t) {
                          return new Blob(s(e), t || {})
                      }
                      "undefined" != typeof Blob && (a.prototype = Blob.prototype, u.prototype = Blob.prototype), e.exports = r ? i ? Blob : u : o ? a : void 0
                  },
              "./node_modules/component-bind/index.js":
                  /*!**********************************************!*\
                    !*** ./node_modules/component-bind/index.js ***!
                    \**********************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t) {
                      var n = [].slice;
                      e.exports = function(e, t) {
                          if ("string" == typeof t && (t = e[t]), "function" != typeof t) throw new Error("bind() requires a function");
                          var r = n.call(arguments, 2);
                          return function() {
                              return t.apply(e, r.concat(n.call(arguments)))
                          }
                      }
                  },
              "./node_modules/component-emitter/index.js":
                  /*!*************************************************!*\
                    !*** ./node_modules/component-emitter/index.js ***!
                    \*************************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t, n) {
                      function r(e) {
                          if (e) return function(e) {
                              for (var t in r.prototype) e[t] = r.prototype[t];
                              return e
                          }(e)
                      }
                      e.exports = r, r.prototype.on = r.prototype.addEventListener = function(e, t) {
                          return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this
                      }, r.prototype.once = function(e, t) {
                          function n() {
                              this.off(e, n), t.apply(this, arguments)
                          }
                          return n.fn = t, this.on(e, n), this
                      }, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function(e, t) {
                          if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
                          var n, r = this._callbacks["$" + e];
                          if (!r) return this;
                          if (1 == arguments.length) return delete this._callbacks["$" + e], this;
                          for (var i = 0; i < r.length; i++)
                              if ((n = r[i]) === t || n.fn === t) {
                                  r.splice(i, 1);
                                  break
                              } return this
                      }, r.prototype.emit = function(e) {
                          this._callbacks = this._callbacks || {};
                          var t = [].slice.call(arguments, 1),
                              n = this._callbacks["$" + e];
                          if (n)
                              for (var r = 0, i = (n = n.slice(0)).length; r < i; ++r) n[r].apply(this, t);
                          return this
                      }, r.prototype.listeners = function(e) {
                          return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || []
                      }, r.prototype.hasListeners = function(e) {
                          return !!this.listeners(e).length
                      }
                  },
              "./node_modules/component-inherit/index.js":
                  /*!*************************************************!*\
                    !*** ./node_modules/component-inherit/index.js ***!
                    \*************************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t) {
                      e.exports = function(e, t) {
                          var n = function() {};
                          n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
                      }
                  },
              "./node_modules/debug/src/browser.js":
                  /*!*******************************************!*\
                    !*** ./node_modules/debug/src/browser.js ***!
                    \*******************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t, n) {
                      (function(r) {
                          t.log = function(...e) {
                              return "object" == typeof console && console.log && console.log(...e)
                          }, t.formatArgs = function(t) {
                              if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors) return;
                              const n = "color: " + this.color;
                              t.splice(1, 0, n, "color: inherit");
                              let r = 0,
                                  i = 0;
                              t[0].replace(/%[a-zA-Z%]/g, e => {
                                  "%%" !== e && (r++, "%c" === e && (i = r))
                              }), t.splice(i, 0, n)
                          }, t.save = function(e) {
                              try {
                                  e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug")
                              } catch (e) {}
                          }, t.load = function() {
                              let e;
                              try {
                                  e = t.storage.getItem("debug")
                              } catch (e) {}
                              return !e && void 0 !== r && "env" in r && (e = r.env.DEBUG), e
                          }, t.useColors = function() {
                              return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type && !window.process.__nwjs) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
                          }, t.storage = function() {
                              try {
                                  return localStorage
                              } catch (e) {}
                          }(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], e.exports = n( /*! ./common */ "./node_modules/debug/src/common.js")(t);
                          const {
                              formatters: i
                          } = e.exports;
                          i.j = function(e) {
                              try {
                                  return JSON.stringify(e)
                              } catch (e) {
                                  return "[UnexpectedJSONParseError]: " + e.message
                              }
                          }
                      }).call(this, n( /*! ./../../process/browser.js */ "./node_modules/process/browser.js"))
                  },
              "./node_modules/debug/src/common.js":
                  /*!******************************************!*\
                    !*** ./node_modules/debug/src/common.js ***!
                    \******************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t, n) {
                      e.exports = function(e) {
                          function t(e) {
                              let t = 0;
                              for (let n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n), t |= 0;
                              return r.colors[Math.abs(t) % r.colors.length]
                          }

                          function r(e) {
                              let n;

                              function s(...e) {
                                  if (!s.enabled) return;
                                  const t = s,
                                      i = Number(new Date),
                                      o = i - (n || i);
                                  t.diff = o, t.prev = n, t.curr = i, n = i, e[0] = r.coerce(e[0]), "string" != typeof e[0] && e.unshift("%O");
                                  let a = 0;
                                  e[0] = e[0].replace(/%([a-zA-Z%])/g, (n, i) => {
                                      if ("%%" === n) return n;
                                      a++;
                                      const o = r.formatters[i];
                                      if ("function" == typeof o) {
                                          const r = e[a];
                                          n = o.call(t, r), e.splice(a, 1), a--
                                      }
                                      return n
                                  }), r.formatArgs.call(t, e), (t.log || r.log).apply(t, e)
                              }
                              return s.namespace = e, s.enabled = r.enabled(e), s.useColors = r.useColors(), s.color = t(e), s.destroy = i, s.extend = o, "function" == typeof r.init && r.init(s), r.instances.push(s), s
                          }

                          function i() {
                              const e = r.instances.indexOf(this);
                              return -1 !== e && (r.instances.splice(e, 1), !0)
                          }

                          function o(e, t) {
                              const n = r(this.namespace + (void 0 === t ? ":" : t) + e);
                              return n.log = this.log, n
                          }

                          function s(e) {
                              return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*")
                          }
                          return r.debug = r, r.default = r, r.coerce = function(e) {
                              return e instanceof Error ? e.stack || e.message : e
                          }, r.disable = function() {
                              const e = [...r.names.map(s), ...r.skips.map(s).map(e => "-" + e)].join(",");
                              return r.enable(""), e
                          }, r.enable = function(e) {
                              let t;
                              r.save(e), r.names = [], r.skips = [];
                              const n = ("string" == typeof e ? e : "").split(/[\s,]+/),
                                  i = n.length;
                              for (t = 0; t < i; t++) n[t] && ("-" === (e = n[t].replace(/\*/g, ".*?"))[0] ? r.skips.push(new RegExp("^" + e.substr(1) + "$")) : r.names.push(new RegExp("^" + e + "$")));
                              for (t = 0; t < r.instances.length; t++) {
                                  const e = r.instances[t];
                                  e.enabled = r.enabled(e.namespace)
                              }
                          }, r.enabled = function(e) {
                              if ("*" === e[e.length - 1]) return !0;
                              let t, n;
                              for (t = 0, n = r.skips.length; t < n; t++)
                                  if (r.skips[t].test(e)) return !1;
                              for (t = 0, n = r.names.length; t < n; t++)
                                  if (r.names[t].test(e)) return !0;
                              return !1
                          }, r.humanize = n( /*! ms */ "./node_modules/ms/index.js"), Object.keys(e).forEach(t => {
                              r[t] = e[t]
                          }), r.instances = [], r.names = [], r.skips = [], r.formatters = {}, r.selectColor = t, r.enable(r.load()), r
                      }
                  },
              "./node_modules/decode-uri-component/index.js":
                  /*!****************************************************!*\
                    !*** ./node_modules/decode-uri-component/index.js ***!
                    \****************************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t, n) {
                      "use strict";
                      var r = new RegExp("%[a-f0-9]{2}", "gi"),
                          i = new RegExp("(%[a-f0-9]{2})+", "gi");

                      function o(e, t) {
                          try {
                              return decodeURIComponent(e.join(""))
                          } catch (e) {}
                          if (1 === e.length) return e;
                          t = t || 1;
                          var n = e.slice(0, t),
                              r = e.slice(t);
                          return Array.prototype.concat.call([], o(n), o(r))
                      }

                      function s(e) {
                          try {
                              return decodeURIComponent(e)
                          } catch (i) {
                              for (var t = e.match(r), n = 1; n < t.length; n++) t = (e = o(t, n).join("")).match(r);
                              return e
                          }
                      }
                      e.exports = function(e) {
                          if ("string" != typeof e) throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
                          try {
                              return e = e.replace(/\+/g, " "), decodeURIComponent(e)
                          } catch (t) {
                              return function(e) {
                                  for (var t = {
                                          "%FE%FF": "��",
                                          "%FF%FE": "��"
                                      }, n = i.exec(e); n;) {
                                      try {
                                          t[n[0]] = decodeURIComponent(n[0])
                                      } catch (e) {
                                          var r = s(n[0]);
                                          r !== n[0] && (t[n[0]] = r)
                                      }
                                      n = i.exec(e)
                                  }
                                  t["%C2"] = "�";
                                  for (var o = Object.keys(t), a = 0; a < o.length; a++) {
                                      var u = o[a];
                                      e = e.replace(new RegExp(u, "g"), t[u])
                                  }
                                  return e
                              }(e)
                          }
                      }
                  },
              "./node_modules/detect-browser/index.js":
                  /*!**********************************************!*\
                    !*** ./node_modules/detect-browser/index.js ***!
                    \**********************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t, n) {
                      "use strict";
                      (function(e) {
                          var n = this && this.__spreadArrays || function() {
                              for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                              var r = Array(e),
                                  i = 0;
                              for (t = 0; t < n; t++)
                                  for (var o = arguments[t], s = 0, a = o.length; s < a; s++, i++) r[i] = o[s];
                              return r
                          };
                          Object.defineProperty(t, "__esModule", {
                              value: !0
                          });
                          var r = function(e, t, n) {
                              this.name = e, this.version = t, this.os = n
                          };
                          t.BrowserInfo = r;
                          var i = function(t) {
                              this.version = t, this.name = "node", this.os = e.platform
                          };
                          t.NodeInfo = i;
                          var o = function() {
                              this.bot = !0, this.name = "bot", this.version = null, this.os = null
                          };
                          t.BotInfo = o;
                          var s = [
                                  ["aol", /AOLShield\/([0-9\._]+)/],
                                  ["edge", /Edge\/([0-9\._]+)/],
                                  ["edge-ios", /EdgiOS\/([0-9\._]+)/],
                                  ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
                                  ["vivaldi", /Vivaldi\/([0-9\.]+)/],
                                  ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
                                  ["samsung", /SamsungBrowser\/([0-9\.]+)/],
                                  ["silk", /\bSilk\/([0-9._-]+)\b/],
                                  ["miui", /MiuiBrowser\/([0-9\.]+)$/],
                                  ["beaker", /BeakerBrowser\/([0-9\.]+)/],
                                  ["edge-chromium", /Edg\/([0-9\.]+)/],
                                  ["chromium-webview", /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
                                  ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
                                  ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
                                  ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
                                  ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
                                  ["fxios", /FxiOS\/([0-9\.]+)/],
                                  ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
                                  ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
                                  ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
                                  ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
                                  ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
                                  ["ie", /MSIE\s(7\.0)/],
                                  ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
                                  ["android", /Android\s([0-9\.]+)/],
                                  ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
                                  ["safari", /Version\/([0-9\._]+).*Safari/],
                                  ["facebook", /FBAV\/([0-9\.]+)/],
                                  ["instagram", /Instagram\s([0-9\.]+)/],
                                  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
                                  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
                                  ["searchbot", /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]
                              ],
                              a = [
                                  ["iOS", /iP(hone|od|ad)/],
                                  ["Android OS", /Android/],
                                  ["BlackBerry OS", /BlackBerry|BB10/],
                                  ["Windows Mobile", /IEMobile/],
                                  ["Amazon OS", /Kindle/],
                                  ["Windows 3.11", /Win16/],
                                  ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
                                  ["Windows 98", /(Windows 98)|(Win98)/],
                                  ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
                                  ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
                                  ["Windows Server 2003", /(Windows NT 5.2)/],
                                  ["Windows Vista", /(Windows NT 6.0)/],
                                  ["Windows 7", /(Windows NT 6.1)/],
                                  ["Windows 8", /(Windows NT 6.2)/],
                                  ["Windows 8.1", /(Windows NT 6.3)/],
                                  ["Windows 10", /(Windows NT 10.0)/],
                                  ["Windows ME", /Windows ME/],
                                  ["Open BSD", /OpenBSD/],
                                  ["Sun OS", /SunOS/],
                                  ["Chrome OS", /CrOS/],
                                  ["Linux", /(Linux)|(X11)/],
                                  ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
                                  ["QNX", /QNX/],
                                  ["BeOS", /BeOS/],
                                  ["OS/2", /OS\/2/],
                                  ["Search Bot", /(nuhk)|(Googlebot)|(Yammybot)|(Openbot)|(Slurp)|(MSNBot)|(Ask Jeeves\/Teoma)|(ia_archiver)/]
                              ];

                          function u(e) {
                              var t = "" !== e && s.reduce((function(t, n) {
                                  var r = n[0],
                                      i = n[1];
                                  if (t) return t;
                                  var o = i.exec(e);
                                  return !!o && [r, o]
                              }), !1);
                              if (!t) return null;
                              var i = t[0],
                                  a = t[1];
                              if ("searchbot" === i) return new o;
                              var u = a[1] && a[1].split(/[._]/).slice(0, 3);
                              return u ? u.length < 3 && (u = n(u, function(e) {
                                  for (var t = [], n = 0; n < e; n++) t.push("0");
                                  return t
                              }(3 - u.length))) : u = [], new r(i, u.join("."), c(e))
                          }

                          function c(e) {
                              for (var t = 0, n = a.length; t < n; t++) {
                                  var r = a[t],
                                      i = r[0];
                                  if (r[1].test(e)) return i
                              }
                              return null
                          }

                          function l() {
                              return void 0 !== e && e.version ? new i(e.version.slice(1)) : null
                          }
                          t.detect = function(e) {
                              return e ? u(e) : "undefined" != typeof navigator ? u(navigator.userAgent) : l()
                          }, t.parseUserAgent = u, t.detectOS = c, t.getNodeVersion = l
                      }).call(this, n( /*! ./../process/browser.js */ "./node_modules/process/browser.js"))
                  },
              "./node_modules/engine.io-client/lib/globalThis.browser.js":
                  /*!*****************************************************************!*\
                    !*** ./node_modules/engine.io-client/lib/globalThis.browser.js ***!
                    \*****************************************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t) {
                      e.exports = "undefined" != typeof self ? self : "undefined" != typeof window ? window : Function("return this")()
                  },
              "./node_modules/engine.io-client/lib/index.js":
                  /*!****************************************************!*\
                    !*** ./node_modules/engine.io-client/lib/index.js ***!
                    \****************************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t, n) {
                      e.exports = n( /*! ./socket */ "./node_modules/engine.io-client/lib/socket.js"), e.exports.parser = n( /*! engine.io-parser */ "./node_modules/engine.io-parser/lib/browser.js")
                  },
              "./node_modules/engine.io-client/lib/socket.js":
                  /*!*****************************************************!*\
                    !*** ./node_modules/engine.io-client/lib/socket.js ***!
                    \*****************************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t, n) {
                      var r = n( /*! ./transports/index */ "./node_modules/engine.io-client/lib/transports/index.js"),
                          i = n( /*! component-emitter */ "./node_modules/engine.io-client/node_modules/component-emitter/index.js"),
                          o = n( /*! debug */ "./node_modules/debug/src/browser.js")("engine.io-client:socket"),
                          s = n( /*! indexof */ "./node_modules/indexof/index.js"),
                          a = n( /*! engine.io-parser */ "./node_modules/engine.io-parser/lib/browser.js"),
                          u = n( /*! parseuri */ "./node_modules/parseuri/index.js"),
                          c = n( /*! parseqs */ "./node_modules/parseqs/index.js");

                      function l(e, t) {
                          if (!(this instanceof l)) return new l(e, t);
                          t = t || {}, e && "object" == typeof e && (t = e, e = null), e ? (e = u(e), t.hostname = e.host, t.secure = "https" === e.protocol || "wss" === e.protocol, t.port = e.port, e.query && (t.query = e.query)) : t.host && (t.hostname = u(t.host).host), this.secure = null != t.secure ? t.secure : "undefined" != typeof location && "https:" === location.protocol, t.hostname && !t.port && (t.port = this.secure ? "443" : "80"), this.agent = t.agent || !1, this.hostname = t.hostname || ("undefined" != typeof location ? location.hostname : "localhost"), this.port = t.port || ("undefined" != typeof location && location.port ? location.port : this.secure ? 443 : 80), this.query = t.query || {}, "string" == typeof this.query && (this.query = c.decode(this.query)), this.upgrade = !1 !== t.upgrade, this.path = (t.path || "/engine.io").replace(/\/$/, "") + "/", this.forceJSONP = !!t.forceJSONP, this.jsonp = !1 !== t.jsonp, this.forceBase64 = !!t.forceBase64, this.enablesXDR = !!t.enablesXDR, this.withCredentials = !1 !== t.withCredentials, this.timestampParam = t.timestampParam || "t", this.timestampRequests = t.timestampRequests, this.transports = t.transports || ["polling", "websocket"], this.transportOptions = t.transportOptions || {}, this.readyState = "", this.writeBuffer = [], this.prevBufferLen = 0, this.policyPort = t.policyPort || 843, this.rememberUpgrade = t.rememberUpgrade || !1, this.binaryType = null, this.onlyBinaryUpgrades = t.onlyBinaryUpgrades, this.perMessageDeflate = !1 !== t.perMessageDeflate && (t.perMessageDeflate || {}), !0 === this.perMessageDeflate && (this.perMessageDeflate = {}), this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024), this.pfx = t.pfx || null, this.key = t.key || null, this.passphrase = t.passphrase || null, this.cert = t.cert || null, this.ca = t.ca || null, this.ciphers = t.ciphers || null, this.rejectUnauthorized = void 0 === t.rejectUnauthorized || t.rejectUnauthorized, this.forceNode = !!t.forceNode, this.isReactNative = "undefined" != typeof navigator && "string" == typeof navigator.product && "reactnative" === navigator.product.toLowerCase(), ("undefined" == typeof self || this.isReactNative) && (t.extraHeaders && Object.keys(t.extraHeaders).length > 0 && (this.extraHeaders = t.extraHeaders), t.localAddress && (this.localAddress = t.localAddress)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingIntervalTimer = null, this.pingTimeoutTimer = null, this.open()
                      }
                      e.exports = l, l.priorWebsocketSuccess = !1, i(l.prototype), l.protocol = a.protocol, l.Socket = l, l.Transport = n( /*! ./transport */ "./node_modules/engine.io-client/lib/transport.js"), l.transports = n( /*! ./transports/index */ "./node_modules/engine.io-client/lib/transports/index.js"), l.parser = n( /*! engine.io-parser */ "./node_modules/engine.io-parser/lib/browser.js"), l.prototype.createTransport = function(e) {
                          o('creating transport "%s"', e);
                          var t = function(e) {
                              var t = {};
                              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                              return t
                          }(this.query);
                          t.EIO = a.protocol, t.transport = e;
                          var n = this.transportOptions[e] || {};
                          return this.id && (t.sid = this.id), new r[e]({
                              query: t,
                              socket: this,
                              agent: n.agent || this.agent,
                              hostname: n.hostname || this.hostname,
                              port: n.port || this.port,
                              secure: n.secure || this.secure,
                              path: n.path || this.path,
                              forceJSONP: n.forceJSONP || this.forceJSONP,
                              jsonp: n.jsonp || this.jsonp,
                              forceBase64: n.forceBase64 || this.forceBase64,
                              enablesXDR: n.enablesXDR || this.enablesXDR,
                              withCredentials: n.withCredentials || this.withCredentials,
                              timestampRequests: n.timestampRequests || this.timestampRequests,
                              timestampParam: n.timestampParam || this.timestampParam,
                              policyPort: n.policyPort || this.policyPort,
                              pfx: n.pfx || this.pfx,
                              key: n.key || this.key,
                              passphrase: n.passphrase || this.passphrase,
                              cert: n.cert || this.cert,
                              ca: n.ca || this.ca,
                              ciphers: n.ciphers || this.ciphers,
                              rejectUnauthorized: n.rejectUnauthorized || this.rejectUnauthorized,
                              perMessageDeflate: n.perMessageDeflate || this.perMessageDeflate,
                              extraHeaders: n.extraHeaders || this.extraHeaders,
                              forceNode: n.forceNode || this.forceNode,
                              localAddress: n.localAddress || this.localAddress,
                              requestTimeout: n.requestTimeout || this.requestTimeout,
                              protocols: n.protocols || void 0,
                              isReactNative: this.isReactNative
                          })
                      }, l.prototype.open = function() {
                          var e;
                          if (this.rememberUpgrade && l.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket")) e = "websocket";
                          else {
                              if (0 === this.transports.length) {
                                  var t = this;
                                  return void setTimeout((function() {
                                      t.emit("error", "No transports available")
                                  }), 0)
                              }
                              e = this.transports[0]
                          }
                          this.readyState = "opening";
                          try {
                              e = this.createTransport(e)
                          } catch (e) {
                              return this.transports.shift(), void this.open()
                          }
                          e.open(), this.setTransport(e)
                      }, l.prototype.setTransport = function(e) {
                          o("setting transport %s", e.name);
                          var t = this;
                          this.transport && (o("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()), this.transport = e, e.on("drain", (function() {
                              t.onDrain()
                          })).on("packet", (function(e) {
                              t.onPacket(e)
                          })).on("error", (function(e) {
                              t.onError(e)
                          })).on("close", (function() {
                              t.onClose("transport close")
                          }))
                      }, l.prototype.probe = function(e) {
                          o('probing transport "%s"', e);
                          var t = this.createTransport(e, {
                                  probe: 1
                              }),
                              n = !1,
                              r = this;

                          function i() {
                              if (r.onlyBinaryUpgrades) {
                                  var i = !this.supportsBinary && r.transport.supportsBinary;
                                  n = n || i
                              }
                              n || (o('probe transport "%s" opened', e), t.send([{
                                  type: "ping",
                                  data: "probe"
                              }]), t.once("packet", (function(i) {
                                  if (!n)
                                      if ("pong" === i.type && "probe" === i.data) {
                                          if (o('probe transport "%s" pong', e), r.upgrading = !0, r.emit("upgrading", t), !t) return;
                                          l.priorWebsocketSuccess = "websocket" === t.name, o('pausing current transport "%s"', r.transport.name), r.transport.pause((function() {
                                              n || "closed" !== r.readyState && (o("changing transport and sending upgrade packet"), f(), r.setTransport(t), t.send([{
                                                  type: "upgrade"
                                              }]), r.emit("upgrade", t), t = null, r.upgrading = !1, r.flush())
                                          }))
                                      } else {
                                          o('probe transport "%s" failed', e);
                                          var s = new Error("probe error");
                                          s.transport = t.name, r.emit("upgradeError", s)
                                      }
                              })))
                          }

                          function s() {
                              n || (n = !0, f(), t.close(), t = null)
                          }

                          function a(n) {
                              var i = new Error("probe error: " + n);
                              i.transport = t.name, s(), o('probe transport "%s" failed because of error: %s', e, n), r.emit("upgradeError", i)
                          }

                          function u() {
                              a("transport closed")
                          }

                          function c() {
                              a("socket closed")
                          }

                          function d(e) {
                              t && e.name !== t.name && (o('"%s" works - aborting "%s"', e.name, t.name), s())
                          }

                          function f() {
                              t.removeListener("open", i), t.removeListener("error", a), t.removeListener("close", u), r.removeListener("close", c), r.removeListener("upgrading", d)
                          }
                          l.priorWebsocketSuccess = !1, t.once("open", i), t.once("error", a), t.once("close", u), this.once("close", c), this.once("upgrading", d), t.open()
                      }, l.prototype.onOpen = function() {
                          if (o("socket open"), this.readyState = "open", l.priorWebsocketSuccess = "websocket" === this.transport.name, this.emit("open"), this.flush(), "open" === this.readyState && this.upgrade && this.transport.pause) {
                              o("starting upgrade probes");
                              for (var e = 0, t = this.upgrades.length; e < t; e++) this.probe(this.upgrades[e])
                          }
                      }, l.prototype.onPacket = function(e) {
                          if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) switch (o('socket receive: type "%s", data "%s"', e.type, e.data), this.emit("packet", e), this.emit("heartbeat"), e.type) {
                              case "open":
                                  this.onHandshake(JSON.parse(e.data));
                                  break;
                              case "pong":
                                  this.setPing(), this.emit("pong");
                                  break;
                              case "error":
                                  var t = new Error("server error");
                                  t.code = e.data, this.onError(t);
                                  break;
                              case "message":
                                  this.emit("data", e.data), this.emit("message", e.data)
                          } else o('packet received with socket readyState "%s"', this.readyState)
                      }, l.prototype.onHandshake = function(e) {
                          this.emit("handshake", e), this.id = e.sid, this.transport.query.sid = e.sid, this.upgrades = this.filterUpgrades(e.upgrades), this.pingInterval = e.pingInterval, this.pingTimeout = e.pingTimeout, this.onOpen(), "closed" !== this.readyState && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat))
                      }, l.prototype.onHeartbeat = function(e) {
                          clearTimeout(this.pingTimeoutTimer);
                          var t = this;
                          t.pingTimeoutTimer = setTimeout((function() {
                              "closed" !== t.readyState && t.onClose("ping timeout")
                          }), e || t.pingInterval + t.pingTimeout)
                      }, l.prototype.setPing = function() {
                          var e = this;
                          clearTimeout(e.pingIntervalTimer), e.pingIntervalTimer = setTimeout((function() {
                              o("writing ping packet - expecting pong within %sms", e.pingTimeout), e.ping(), e.onHeartbeat(e.pingTimeout)
                          }), e.pingInterval)
                      }, l.prototype.ping = function() {
                          var e = this;
                          this.sendPacket("ping", (function() {
                              e.emit("ping")
                          }))
                      }, l.prototype.onDrain = function() {
                          this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emit("drain") : this.flush()
                      }, l.prototype.flush = function() {
                          "closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (o("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"))
                      }, l.prototype.write = l.prototype.send = function(e, t, n) {
                          return this.sendPacket("message", e, t, n), this
                      }, l.prototype.sendPacket = function(e, t, n, r) {
                          if ("function" == typeof t && (r = t, t = void 0), "function" == typeof n && (r = n, n = null), "closing" !== this.readyState && "closed" !== this.readyState) {
                              (n = n || {}).compress = !1 !== n.compress;
                              var i = {
                                  type: e,
                                  data: t,
                                  options: n
                              };
                              this.emit("packetCreate", i), this.writeBuffer.push(i), r && this.once("flush", r), this.flush()
                          }
                      }, l.prototype.close = function() {
                          if ("opening" === this.readyState || "open" === this.readyState) {
                              this.readyState = "closing";
                              var e = this;
                              this.writeBuffer.length ? this.once("drain", (function() {
                                  this.upgrading ? r() : t()
                              })) : this.upgrading ? r() : t()
                          }

                          function t() {
                              e.onClose("forced close"), o("socket closing - telling transport to close"), e.transport.close()
                          }

                          function n() {
                              e.removeListener("upgrade", n), e.removeListener("upgradeError", n), t()
                          }

                          function r() {
                              e.once("upgrade", n), e.once("upgradeError", n)
                          }
                          return this
                      }, l.prototype.onError = function(e) {
                          o("socket error %j", e), l.priorWebsocketSuccess = !1, this.emit("error", e), this.onClose("transport error", e)
                      }, l.prototype.onClose = function(e, t) {
                          "opening" !== this.readyState && "open" !== this.readyState && "closing" !== this.readyState || (o('socket close with reason: "%s"', e), clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", this.id = null, this.emit("close", e, t), this.writeBuffer = [], this.prevBufferLen = 0)
                      }, l.prototype.filterUpgrades = function(e) {
                          for (var t = [], n = 0, r = e.length; n < r; n++) ~s(this.transports, e[n]) && t.push(e[n]);
                          return t
                      }
                  },
              "./node_modules/engine.io-client/lib/transport.js":
                  /*!********************************************************!*\
                    !*** ./node_modules/engine.io-client/lib/transport.js ***!
                    \********************************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t, n) {
                      var r = n( /*! engine.io-parser */ "./node_modules/engine.io-parser/lib/browser.js"),
                          i = n( /*! component-emitter */ "./node_modules/engine.io-client/node_modules/component-emitter/index.js");

                      function o(e) {
                          this.path = e.path, this.hostname = e.hostname, this.port = e.port, this.secure = e.secure, this.query = e.query, this.timestampParam = e.timestampParam, this.timestampRequests = e.timestampRequests, this.readyState = "", this.agent = e.agent || !1, this.socket = e.socket, this.enablesXDR = e.enablesXDR, this.withCredentials = e.withCredentials, this.pfx = e.pfx, this.key = e.key, this.passphrase = e.passphrase, this.cert = e.cert, this.ca = e.ca, this.ciphers = e.ciphers, this.rejectUnauthorized = e.rejectUnauthorized, this.forceNode = e.forceNode, this.isReactNative = e.isReactNative, this.extraHeaders = e.extraHeaders, this.localAddress = e.localAddress
                      }
                      e.exports = o, i(o.prototype), o.prototype.onError = function(e, t) {
                          var n = new Error(e);
                          return n.type = "TransportError", n.description = t, this.emit("error", n), this
                      }, o.prototype.open = function() {
                          return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening", this.doOpen()), this
                      }, o.prototype.close = function() {
                          return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), this.onClose()), this
                      }, o.prototype.send = function(e) {
                          if ("open" !== this.readyState) throw new Error("Transport not open");
                          this.write(e)
                      }, o.prototype.onOpen = function() {
                          this.readyState = "open", this.writable = !0, this.emit("open")
                      }, o.prototype.onData = function(e) {
                          var t = r.decodePacket(e, this.socket.binaryType);
                          this.onPacket(t)
                      }, o.prototype.onPacket = function(e) {
                          this.emit("packet", e)
                      }, o.prototype.onClose = function() {
                          this.readyState = "closed", this.emit("close")
                      }
                  },
              "./node_modules/engine.io-client/lib/transports/index.js":
                  /*!***************************************************************!*\
                    !*** ./node_modules/engine.io-client/lib/transports/index.js ***!
                    \***************************************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t, n) {
                      var r = n( /*! xmlhttprequest-ssl */ "./node_modules/engine.io-client/lib/xmlhttprequest.js"),
                          i = n( /*! ./polling-xhr */ "./node_modules/engine.io-client/lib/transports/polling-xhr.js"),
                          o = n( /*! ./polling-jsonp */ "./node_modules/engine.io-client/lib/transports/polling-jsonp.js"),
                          s = n( /*! ./websocket */ "./node_modules/engine.io-client/lib/transports/websocket.js");
                      t.polling = function(e) {
                          var t = !1,
                              n = !1,
                              s = !1 !== e.jsonp;
                          if ("undefined" != typeof location) {
                              var a = "https:" === location.protocol,
                                  u = location.port;
                              u || (u = a ? 443 : 80), t = e.hostname !== location.hostname || u !== e.port, n = e.secure !== a
                          }
                          if (e.xdomain = t, e.xscheme = n, "open" in new r(e) && !e.forceJSONP) return new i(e);
                          if (!s) throw new Error("JSONP disabled");
                          return new o(e)
                      }, t.websocket = s
                  },
              "./node_modules/engine.io-client/lib/transports/polling-jsonp.js":
                  /*!***********************************************************************!*\
                    !*** ./node_modules/engine.io-client/lib/transports/polling-jsonp.js ***!
                    \***********************************************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t, n) {
                      var r = n( /*! ./polling */ "./node_modules/engine.io-client/lib/transports/polling.js"),
                          i = n( /*! component-inherit */ "./node_modules/component-inherit/index.js"),
                          o = n( /*! ../globalThis */ "./node_modules/engine.io-client/lib/globalThis.browser.js");
                      e.exports = l;
                      var s, a = /\n/g,
                          u = /\\n/g;

                      function c() {}

                      function l(e) {
                          r.call(this, e), this.query = this.query || {}, s || (s = o.___eio = o.___eio || []), this.index = s.length;
                          var t = this;
                          s.push((function(e) {
                              t.onData(e)
                          })), this.query.j = this.index, "function" == typeof addEventListener && addEventListener("beforeunload", (function() {
                              t.script && (t.script.onerror = c)
                          }), !1)
                      }
                      i(l, r), l.prototype.supportsBinary = !1, l.prototype.doClose = function() {
                          this.script && (this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), r.prototype.doClose.call(this)
                      }, l.prototype.doPoll = function() {
                          var e = this,
                              t = document.createElement("script");
                          this.script && (this.script.parentNode.removeChild(this.script), this.script = null), t.async = !0, t.src = this.uri(), t.onerror = function(t) {
                              e.onError("jsonp poll error", t)
                          };
                          var n = document.getElementsByTagName("script")[0];
                          n ? n.parentNode.insertBefore(t, n) : (document.head || document.body).appendChild(t), this.script = t, "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent) && setTimeout((function() {
                              var e = document.createElement("iframe");
                              document.body.appendChild(e), document.body.removeChild(e)
                          }), 100)
                      }, l.prototype.doWrite = function(e, t) {
                          var n = this;
                          if (!this.form) {
                              var r, i = document.createElement("form"),
                                  o = document.createElement("textarea"),
                                  s = this.iframeId = "eio_iframe_" + this.index;
                              i.className = "socketio", i.style.position = "absolute", i.style.top = "-1000px", i.style.left = "-1000px", i.target = s, i.method = "POST", i.setAttribute("accept-charset", "utf-8"), o.name = "d", i.appendChild(o), document.body.appendChild(i), this.form = i, this.area = o
                          }

                          function c() {
                              l(), t()
                          }

                          function l() {
                              if (n.iframe) try {
                                  n.form.removeChild(n.iframe)
                              } catch (e) {
                                  n.onError("jsonp polling iframe removal error", e)
                              }
                              try {
                                  var e = '<iframe src="javascript:0" name="' + n.iframeId + '">';
                                  r = document.createElement(e)
                              } catch (e) {
                                  (r = document.createElement("iframe")).name = n.iframeId, r.src = "javascript:0"
                              }
                              r.id = n.iframeId, n.form.appendChild(r), n.iframe = r
                          }
                          this.form.action = this.uri(), l(), e = e.replace(u, "\\\n"), this.area.value = e.replace(a, "\\n");
                          try {
                              this.form.submit()
                          } catch (e) {}
                          this.iframe.attachEvent ? this.iframe.onreadystatechange = function() {
                              "complete" === n.iframe.readyState && c()
                          } : this.iframe.onload = c
                      }
                  },
              "./node_modules/engine.io-client/lib/transports/polling-xhr.js":
                  /*!*********************************************************************!*\
                    !*** ./node_modules/engine.io-client/lib/transports/polling-xhr.js ***!
                    \*********************************************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t, n) {
                      var r = n( /*! xmlhttprequest-ssl */ "./node_modules/engine.io-client/lib/xmlhttprequest.js"),
                          i = n( /*! ./polling */ "./node_modules/engine.io-client/lib/transports/polling.js"),
                          o = n( /*! component-emitter */ "./node_modules/engine.io-client/node_modules/component-emitter/index.js"),
                          s = n( /*! component-inherit */ "./node_modules/component-inherit/index.js"),
                          a = n( /*! debug */ "./node_modules/debug/src/browser.js")("engine.io-client:polling-xhr"),
                          u = n( /*! ../globalThis */ "./node_modules/engine.io-client/lib/globalThis.browser.js");

                      function c() {}

                      function l(e) {
                          if (i.call(this, e), this.requestTimeout = e.requestTimeout, this.extraHeaders = e.extraHeaders, "undefined" != typeof location) {
                              var t = "https:" === location.protocol,
                                  n = location.port;
                              n || (n = t ? 443 : 80), this.xd = "undefined" != typeof location && e.hostname !== location.hostname || n !== e.port, this.xs = e.secure !== t
                          }
                      }

                      function d(e) {
                          this.method = e.method || "GET", this.uri = e.uri, this.xd = !!e.xd, this.xs = !!e.xs, this.async = !1 !== e.async, this.data = void 0 !== e.data ? e.data : null, this.agent = e.agent, this.isBinary = e.isBinary, this.supportsBinary = e.supportsBinary, this.enablesXDR = e.enablesXDR, this.withCredentials = e.withCredentials, this.requestTimeout = e.requestTimeout, this.pfx = e.pfx, this.key = e.key, this.passphrase = e.passphrase, this.cert = e.cert, this.ca = e.ca, this.ciphers = e.ciphers, this.rejectUnauthorized = e.rejectUnauthorized, this.extraHeaders = e.extraHeaders, this.create()
                      }

                      function f() {
                          for (var e in d.requests) d.requests.hasOwnProperty(e) && d.requests[e].abort()
                      }
                      e.exports = l, e.exports.Request = d, s(l, i), l.prototype.supportsBinary = !0, l.prototype.request = function(e) {
                          return (e = e || {}).uri = this.uri(), e.xd = this.xd, e.xs = this.xs, e.agent = this.agent || !1, e.supportsBinary = this.supportsBinary, e.enablesXDR = this.enablesXDR, e.withCredentials = this.withCredentials, e.pfx = this.pfx, e.key = this.key, e.passphrase = this.passphrase, e.cert = this.cert, e.ca = this.ca, e.ciphers = this.ciphers, e.rejectUnauthorized = this.rejectUnauthorized, e.requestTimeout = this.requestTimeout, e.extraHeaders = this.extraHeaders, new d(e)
                      }, l.prototype.doWrite = function(e, t) {
                          var n = "string" != typeof e && void 0 !== e,
                              r = this.request({
                                  method: "POST",
                                  data: e,
                                  isBinary: n
                              }),
                              i = this;
                          r.on("success", t), r.on("error", (function(e) {
                              i.onError("xhr post error", e)
                          })), this.sendXhr = r
                      }, l.prototype.doPoll = function() {
                          a("xhr poll");
                          var e = this.request(),
                              t = this;
                          e.on("data", (function(e) {
                              t.onData(e)
                          })), e.on("error", (function(e) {
                              t.onError("xhr poll error", e)
                          })), this.pollXhr = e
                      }, o(d.prototype), d.prototype.create = function() {
                          var e = {
                              agent: this.agent,
                              xdomain: this.xd,
                              xscheme: this.xs,
                              enablesXDR: this.enablesXDR
                          };
                          e.pfx = this.pfx, e.key = this.key, e.passphrase = this.passphrase, e.cert = this.cert, e.ca = this.ca, e.ciphers = this.ciphers, e.rejectUnauthorized = this.rejectUnauthorized;
                          var t = this.xhr = new r(e),
                              n = this;
                          try {
                              a("xhr open %s: %s", this.method, this.uri), t.open(this.method, this.uri, this.async);
                              try {
                                  if (this.extraHeaders)
                                      for (var i in t.setDisableHeaderCheck && t.setDisableHeaderCheck(!0), this.extraHeaders) this.extraHeaders.hasOwnProperty(i) && t.setRequestHeader(i, this.extraHeaders[i])
                              } catch (e) {}
                              if ("POST" === this.method) try {
                                  this.isBinary ? t.setRequestHeader("Content-type", "application/octet-stream") : t.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                              } catch (e) {}
                              try {
                                  t.setRequestHeader("Accept", "*/*")
                              } catch (e) {}
                              "withCredentials" in t && (t.withCredentials = this.withCredentials), this.requestTimeout && (t.timeout = this.requestTimeout), this.hasXDR() ? (t.onload = function() {
                                  n.onLoad()
                              }, t.onerror = function() {
                                  n.onError(t.responseText)
                              }) : t.onreadystatechange = function() {
                                  if (2 === t.readyState) try {
                                      var e = t.getResponseHeader("Content-Type");
                                      (n.supportsBinary && "application/octet-stream" === e || "application/octet-stream; charset=UTF-8" === e) && (t.responseType = "arraybuffer")
                                  } catch (e) {}
                                  4 === t.readyState && (200 === t.status || 1223 === t.status ? n.onLoad() : setTimeout((function() {
                                      n.onError("number" == typeof t.status ? t.status : 0)
                                  }), 0))
                              }, a("xhr data %s", this.data), t.send(this.data)
                          } catch (e) {
                              return void setTimeout((function() {
                                  n.onError(e)
                              }), 0)
                          }
                          "undefined" != typeof document && (this.index = d.requestsCount++, d.requests[this.index] = this)
                      }, d.prototype.onSuccess = function() {
                          this.emit("success"), this.cleanup()
                      }, d.prototype.onData = function(e) {
                          this.emit("data", e), this.onSuccess()
                      }, d.prototype.onError = function(e) {
                          this.emit("error", e), this.cleanup(!0)
                      }, d.prototype.cleanup = function(e) {
                          if (void 0 !== this.xhr && null !== this.xhr) {
                              if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = c : this.xhr.onreadystatechange = c, e) try {
                                  this.xhr.abort()
                              } catch (e) {}
                              "undefined" != typeof document && delete d.requests[this.index], this.xhr = null
                          }
                      }, d.prototype.onLoad = function() {
                          var e;
                          try {
                              var t;
                              try {
                                  t = this.xhr.getResponseHeader("Content-Type")
                              } catch (e) {}
                              e = ("application/octet-stream" === t || "application/octet-stream; charset=UTF-8" === t) && this.xhr.response || this.xhr.responseText
                          } catch (e) {
                              this.onError(e)
                          }
                          null != e && this.onData(e)
                      }, d.prototype.hasXDR = function() {
                          return "undefined" != typeof XDomainRequest && !this.xs && this.enablesXDR
                      }, d.prototype.abort = function() {
                          this.cleanup()
                      }, d.requestsCount = 0, d.requests = {}, "undefined" != typeof document && ("function" == typeof attachEvent ? attachEvent("onunload", f) : "function" == typeof addEventListener && addEventListener("onpagehide" in u ? "pagehide" : "unload", f, !1))
                  },
              "./node_modules/engine.io-client/lib/transports/polling.js":
                  /*!*****************************************************************!*\
                    !*** ./node_modules/engine.io-client/lib/transports/polling.js ***!
                    \*****************************************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t, n) {
                      var r = n( /*! ../transport */ "./node_modules/engine.io-client/lib/transport.js"),
                          i = n( /*! parseqs */ "./node_modules/parseqs/index.js"),
                          o = n( /*! engine.io-parser */ "./node_modules/engine.io-parser/lib/browser.js"),
                          s = n( /*! component-inherit */ "./node_modules/component-inherit/index.js"),
                          a = n( /*! yeast */ "./node_modules/yeast/index.js"),
                          u = n( /*! debug */ "./node_modules/debug/src/browser.js")("engine.io-client:polling");
                      e.exports = l;
                      var c = null != new(n( /*! xmlhttprequest-ssl */ "./node_modules/engine.io-client/lib/xmlhttprequest.js"))({
                          xdomain: !1
                      }).responseType;

                      function l(e) {
                          var t = e && e.forceBase64;
                          c && !t || (this.supportsBinary = !1), r.call(this, e)
                      }
                      s(l, r), l.prototype.name = "polling", l.prototype.doOpen = function() {
                          this.poll()
                      }, l.prototype.pause = function(e) {
                          var t = this;

                          function n() {
                              u("paused"), t.readyState = "paused", e()
                          }
                          if (this.readyState = "pausing", this.polling || !this.writable) {
                              var r = 0;
                              this.polling && (u("we are currently polling - waiting to pause"), r++, this.once("pollComplete", (function() {
                                  u("pre-pause polling complete"), --r || n()
                              }))), this.writable || (u("we are currently writing - waiting to pause"), r++, this.once("drain", (function() {
                                  u("pre-pause writing complete"), --r || n()
                              })))
                          } else n()
                      }, l.prototype.poll = function() {
                          u("polling"), this.polling = !0, this.doPoll(), this.emit("poll")
                      }, l.prototype.onData = function(e) {
                          var t = this;
                          u("polling got data %s", e), o.decodePayload(e, this.socket.binaryType, (function(e, n, r) {
                              if ("opening" === t.readyState && t.onOpen(), "close" === e.type) return t.onClose(), !1;
                              t.onPacket(e)
                          })), "closed" !== this.readyState && (this.polling = !1, this.emit("pollComplete"), "open" === this.readyState ? this.poll() : u('ignoring poll - transport state "%s"', this.readyState))
                      }, l.prototype.doClose = function() {
                          var e = this;

                          function t() {
                              u("writing close packet"), e.write([{
                                  type: "close"
                              }])
                          }
                          "open" === this.readyState ? (u("transport open - closing"), t()) : (u("transport not open - deferring close"), this.once("open", t))
                      }, l.prototype.write = function(e) {
                          var t = this;
                          this.writable = !1;
                          var n = function() {
                              t.writable = !0, t.emit("drain")
                          };
                          o.encodePayload(e, this.supportsBinary, (function(e) {
                              t.doWrite(e, n)
                          }))
                      }, l.prototype.uri = function() {
                          var e = this.query || {},
                              t = this.secure ? "https" : "http",
                              n = "";
                          return !1 !== this.timestampRequests && (e[this.timestampParam] = a()), this.supportsBinary || e.sid || (e.b64 = 1), e = i.encode(e), this.port && ("https" === t && 443 !== Number(this.port) || "http" === t && 80 !== Number(this.port)) && (n = ":" + this.port), e.length && (e = "?" + e), t + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + n + this.path + e
                      }
                  },
              "./node_modules/engine.io-client/lib/transports/websocket.js":
                  /*!*******************************************************************!*\
                    !*** ./node_modules/engine.io-client/lib/transports/websocket.js ***!
                    \*******************************************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t, n) {
                      (function(t) {
                          var r, i, o = n( /*! ../transport */ "./node_modules/engine.io-client/lib/transport.js"),
                              s = n( /*! engine.io-parser */ "./node_modules/engine.io-parser/lib/browser.js"),
                              a = n( /*! parseqs */ "./node_modules/parseqs/index.js"),
                              u = n( /*! component-inherit */ "./node_modules/component-inherit/index.js"),
                              c = n( /*! yeast */ "./node_modules/yeast/index.js"),
                              l = n( /*! debug */ "./node_modules/debug/src/browser.js")("engine.io-client:websocket");
                          if ("undefined" != typeof WebSocket ? r = WebSocket : "undefined" != typeof self && (r = self.WebSocket || self.MozWebSocket), "undefined" == typeof window) try {
                              i = n( /*! ws */ 0)
                          } catch (e) {}
                          var d = r || i;

                          function f(e) {
                              e && e.forceBase64 && (this.supportsBinary = !1), this.perMessageDeflate = e.perMessageDeflate, this.usingBrowserWebSocket = r && !e.forceNode, this.protocols = e.protocols, this.usingBrowserWebSocket || (d = i), o.call(this, e)
                          }
                          e.exports = f, u(f, o), f.prototype.name = "websocket", f.prototype.supportsBinary = !0, f.prototype.doOpen = function() {
                              if (this.check()) {
                                  var e = this.uri(),
                                      t = this.protocols,
                                      n = {
                                          agent: this.agent,
                                          perMessageDeflate: this.perMessageDeflate
                                      };
                                  n.pfx = this.pfx, n.key = this.key, n.passphrase = this.passphrase, n.cert = this.cert, n.ca = this.ca, n.ciphers = this.ciphers, n.rejectUnauthorized = this.rejectUnauthorized, this.extraHeaders && (n.headers = this.extraHeaders), this.localAddress && (n.localAddress = this.localAddress);
                                  try {
                                      this.ws = this.usingBrowserWebSocket && !this.isReactNative ? t ? new d(e, t) : new d(e) : new d(e, t, n)
                                  } catch (e) {
                                      return this.emit("error", e)
                                  }
                                  void 0 === this.ws.binaryType && (this.supportsBinary = !1), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, this.ws.binaryType = "nodebuffer") : this.ws.binaryType = "arraybuffer", this.addEventListeners()
                              }
                          }, f.prototype.addEventListeners = function() {
                              var e = this;
                              this.ws.onopen = function() {
                                  e.onOpen()
                              }, this.ws.onclose = function() {
                                  e.onClose()
                              }, this.ws.onmessage = function(t) {
                                  e.onData(t.data)
                              }, this.ws.onerror = function(t) {
                                  e.onError("websocket error", t)
                              }
                          }, f.prototype.write = function(e) {
                              var n = this;
                              this.writable = !1;
                              for (var r = e.length, i = 0, o = r; i < o; i++) ! function(e) {
                                  s.encodePacket(e, n.supportsBinary, (function(i) {
                                      if (!n.usingBrowserWebSocket) {
                                          var o = {};
                                          e.options && (o.compress = e.options.compress), n.perMessageDeflate && ("string" == typeof i ? t.byteLength(i) : i.length) < n.perMessageDeflate.threshold && (o.compress = !1)
                                      }
                                      try {
                                          n.usingBrowserWebSocket ? n.ws.send(i) : n.ws.send(i, o)
                                      } catch (e) {
                                          l("websocket closed before onclose event")
                                      }--r || (n.emit("flush"), setTimeout((function() {
                                          n.writable = !0, n.emit("drain")
                                      }), 0))
                                  }))
                              }(e[i])
                          }, f.prototype.onClose = function() {
                              o.prototype.onClose.call(this)
                          }, f.prototype.doClose = function() {
                              void 0 !== this.ws && this.ws.close()
                          }, f.prototype.uri = function() {
                              var e = this.query || {},
                                  t = this.secure ? "wss" : "ws",
                                  n = "";
                              return this.port && ("wss" === t && 443 !== Number(this.port) || "ws" === t && 80 !== Number(this.port)) && (n = ":" + this.port), this.timestampRequests && (e[this.timestampParam] = c()), this.supportsBinary || (e.b64 = 1), (e = a.encode(e)).length && (e = "?" + e), t + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + n + this.path + e
                          }, f.prototype.check = function() {
                              return !(!d || "__initialize" in d && this.name === f.prototype.name)
                          }
                      }).call(this, n( /*! ./../../../node-libs-browser/node_modules/buffer/index.js */ "./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer)
                  },
              "./node_modules/engine.io-client/lib/xmlhttprequest.js":
                  /*!*************************************************************!*\
                    !*** ./node_modules/engine.io-client/lib/xmlhttprequest.js ***!
                    \*************************************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t, n) {
                      var r = n( /*! has-cors */ "./node_modules/has-cors/index.js"),
                          i = n( /*! ./globalThis */ "./node_modules/engine.io-client/lib/globalThis.browser.js");
                      e.exports = function(e) {
                          var t = e.xdomain,
                              n = e.xscheme,
                              o = e.enablesXDR;
                          try {
                              if ("undefined" != typeof XMLHttpRequest && (!t || r)) return new XMLHttpRequest
                          } catch (e) {}
                          try {
                              if ("undefined" != typeof XDomainRequest && !n && o) return new XDomainRequest
                          } catch (e) {}
                          if (!t) try {
                              return new(i[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
                          } catch (e) {}
                      }
                  },
              "./node_modules/engine.io-client/node_modules/component-emitter/index.js":
                  /*!*******************************************************************************!*\
                    !*** ./node_modules/engine.io-client/node_modules/component-emitter/index.js ***!
                    \*******************************************************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t, n) {
                      function r(e) {
                          if (e) return function(e) {
                              for (var t in r.prototype) e[t] = r.prototype[t];
                              return e
                          }(e)
                      }
                      e.exports = r, r.prototype.on = r.prototype.addEventListener = function(e, t) {
                          return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this
                      }, r.prototype.once = function(e, t) {
                          function n() {
                              this.off(e, n), t.apply(this, arguments)
                          }
                          return n.fn = t, this.on(e, n), this
                      }, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function(e, t) {
                          if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
                          var n, r = this._callbacks["$" + e];
                          if (!r) return this;
                          if (1 == arguments.length) return delete this._callbacks["$" + e], this;
                          for (var i = 0; i < r.length; i++)
                              if ((n = r[i]) === t || n.fn === t) {
                                  r.splice(i, 1);
                                  break
                              } return 0 === r.length && delete this._callbacks["$" + e], this
                      }, r.prototype.emit = function(e) {
                          this._callbacks = this._callbacks || {};
                          for (var t = new Array(arguments.length - 1), n = this._callbacks["$" + e], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                          if (n) {
                              r = 0;
                              for (var i = (n = n.slice(0)).length; r < i; ++r) n[r].apply(this, t)
                          }
                          return this
                      }, r.prototype.listeners = function(e) {
                          return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || []
                      }, r.prototype.hasListeners = function(e) {
                          return !!this.listeners(e).length
                      }
                  },
              "./node_modules/engine.io-parser/lib/browser.js":
                  /*!******************************************************!*\
                    !*** ./node_modules/engine.io-parser/lib/browser.js ***!
                    \******************************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t, n) {
                      var r, i = n( /*! ./keys */ "./node_modules/engine.io-parser/lib/keys.js"),
                          o = n( /*! has-binary2 */ "./node_modules/has-binary2/index.js"),
                          s = n( /*! arraybuffer.slice */ "./node_modules/arraybuffer.slice/index.js"),
                          a = n( /*! after */ "./node_modules/after/index.js"),
                          u = n( /*! ./utf8 */ "./node_modules/engine.io-parser/lib/utf8.js");
                      "undefined" != typeof ArrayBuffer && (r = n( /*! base64-arraybuffer */ "./node_modules/base64-arraybuffer/lib/base64-arraybuffer.js"));
                      var c = "undefined" != typeof navigator && /Android/i.test(navigator.userAgent),
                          l = "undefined" != typeof navigator && /PhantomJS/i.test(navigator.userAgent),
                          d = c || l;
                      t.protocol = 3;
                      var f = t.packets = {
                              open: 0,
                              close: 1,
                              ping: 2,
                              pong: 3,
                              message: 4,
                              upgrade: 5,
                              noop: 6
                          },
                          p = i(f),
                          h = {
                              type: "error",
                              data: "parser error"
                          },
                          m = n( /*! blob */ "./node_modules/blob/index.js");

                      function g(e, t, n) {
                          for (var r = new Array(e.length), i = a(e.length, n), o = function(e, n, i) {
                                  t(n, (function(t, n) {
                                      r[e] = n, i(t, r)
                                  }))
                              }, s = 0; s < e.length; s++) o(s, e[s], i)
                      }
                      t.encodePacket = function(e, n, r, i) {
                          "function" == typeof n && (i = n, n = !1), "function" == typeof r && (i = r, r = null);
                          var o = void 0 === e.data ? void 0 : e.data.buffer || e.data;
                          if ("undefined" != typeof ArrayBuffer && o instanceof ArrayBuffer) return function(e, n, r) {
                              if (!n) return t.encodeBase64Packet(e, r);
                              var i = e.data,
                                  o = new Uint8Array(i),
                                  s = new Uint8Array(1 + i.byteLength);
                              s[0] = f[e.type];
                              for (var a = 0; a < o.length; a++) s[a + 1] = o[a];
                              return r(s.buffer)
                          }(e, n, i);
                          if (void 0 !== m && o instanceof m) return function(e, n, r) {
                              if (!n) return t.encodeBase64Packet(e, r);
                              if (d) return function(e, n, r) {
                                  if (!n) return t.encodeBase64Packet(e, r);
                                  var i = new FileReader;
                                  return i.onload = function() {
                                      t.encodePacket({
                                          type: e.type,
                                          data: i.result
                                      }, n, !0, r)
                                  }, i.readAsArrayBuffer(e.data)
                              }(e, n, r);
                              var i = new Uint8Array(1);
                              i[0] = f[e.type];
                              var o = new m([i.buffer, e.data]);
                              return r(o)
                          }(e, n, i);
                          if (o && o.base64) return function(e, n) {
                              var r = "b" + t.packets[e.type] + e.data.data;
                              return n(r)
                          }(e, i);
                          var s = f[e.type];
                          return void 0 !== e.data && (s += r ? u.encode(String(e.data), {
                              strict: !1
                          }) : String(e.data)), i("" + s)
                      }, t.encodeBase64Packet = function(e, n) {
                          var r, i = "b" + t.packets[e.type];
                          if (void 0 !== m && e.data instanceof m) {
                              var o = new FileReader;
                              return o.onload = function() {
                                  var e = o.result.split(",")[1];
                                  n(i + e)
                              }, o.readAsDataURL(e.data)
                          }
                          try {
                              r = String.fromCharCode.apply(null, new Uint8Array(e.data))
                          } catch (t) {
                              for (var s = new Uint8Array(e.data), a = new Array(s.length), u = 0; u < s.length; u++) a[u] = s[u];
                              r = String.fromCharCode.apply(null, a)
                          }
                          return i += btoa(r), n(i)
                      }, t.decodePacket = function(e, n, r) {
                          if (void 0 === e) return h;
                          if ("string" == typeof e) {
                              if ("b" === e.charAt(0)) return t.decodeBase64Packet(e.substr(1), n);
                              if (r && !1 === (e = function(e) {
                                      try {
                                          e = u.decode(e, {
                                              strict: !1
                                          })
                                      } catch (e) {
                                          return !1
                                      }
                                      return e
                                  }(e))) return h;
                              var i = e.charAt(0);
                              return Number(i) == i && p[i] ? e.length > 1 ? {
                                  type: p[i],
                                  data: e.substring(1)
                              } : {
                                  type: p[i]
                              } : h
                          }
                          i = new Uint8Array(e)[0];
                          var o = s(e, 1);
                          return m && "blob" === n && (o = new m([o])), {
                              type: p[i],
                              data: o
                          }
                      }, t.decodeBase64Packet = function(e, t) {
                          var n = p[e.charAt(0)];
                          if (!r) return {
                              type: n,
                              data: {
                                  base64: !0,
                                  data: e.substr(1)
                              }
                          };
                          var i = r.decode(e.substr(1));
                          return "blob" === t && m && (i = new m([i])), {
                              type: n,
                              data: i
                          }
                      }, t.encodePayload = function(e, n, r) {
                          "function" == typeof n && (r = n, n = null);
                          var i = o(e);
                          return n && i ? m && !d ? t.encodePayloadAsBlob(e, r) : t.encodePayloadAsArrayBuffer(e, r) : e.length ? void g(e, (function(e, r) {
                              t.encodePacket(e, !!i && n, !1, (function(e) {
                                  r(null, function(e) {
                                      return e.length + ":" + e
                                  }(e))
                              }))
                          }), (function(e, t) {
                              return r(t.join(""))
                          })) : r("0:")
                      }, t.decodePayload = function(e, n, r) {
                          if ("string" != typeof e) return t.decodePayloadAsBinary(e, n, r);
                          var i;
                          if ("function" == typeof n && (r = n, n = null), "" === e) return r(h, 0, 1);
                          for (var o, s, a = "", u = 0, c = e.length; u < c; u++) {
                              var l = e.charAt(u);
                              if (":" === l) {
                                  if ("" === a || a != (o = Number(a))) return r(h, 0, 1);
                                  if (a != (s = e.substr(u + 1, o)).length) return r(h, 0, 1);
                                  if (s.length) {
                                      if (i = t.decodePacket(s, n, !1), h.type === i.type && h.data === i.data) return r(h, 0, 1);
                                      if (!1 === r(i, u + o, c)) return
                                  }
                                  u += o, a = ""
                              } else a += l
                          }
                          return "" !== a ? r(h, 0, 1) : void 0
                      }, t.encodePayloadAsArrayBuffer = function(e, n) {
                          if (!e.length) return n(new ArrayBuffer(0));
                          g(e, (function(e, n) {
                              t.encodePacket(e, !0, !0, (function(e) {
                                  return n(null, e)
                              }))
                          }), (function(e, t) {
                              var r = t.reduce((function(e, t) {
                                      var n;
                                      return e + (n = "string" == typeof t ? t.length : t.byteLength).toString().length + n + 2
                                  }), 0),
                                  i = new Uint8Array(r),
                                  o = 0;
                              return t.forEach((function(e) {
                                  var t = "string" == typeof e,
                                      n = e;
                                  if (t) {
                                      for (var r = new Uint8Array(e.length), s = 0; s < e.length; s++) r[s] = e.charCodeAt(s);
                                      n = r.buffer
                                  }
                                  i[o++] = t ? 0 : 1;
                                  var a = n.byteLength.toString();
                                  for (s = 0; s < a.length; s++) i[o++] = parseInt(a[s]);
                                  for (i[o++] = 255, r = new Uint8Array(n), s = 0; s < r.length; s++) i[o++] = r[s]
                              })), n(i.buffer)
                          }))
                      }, t.encodePayloadAsBlob = function(e, n) {
                          g(e, (function(e, n) {
                              t.encodePacket(e, !0, !0, (function(e) {
                                  var t = new Uint8Array(1);
                                  if (t[0] = 1, "string" == typeof e) {
                                      for (var r = new Uint8Array(e.length), i = 0; i < e.length; i++) r[i] = e.charCodeAt(i);
                                      e = r.buffer, t[0] = 0
                                  }
                                  var o = (e instanceof ArrayBuffer ? e.byteLength : e.size).toString(),
                                      s = new Uint8Array(o.length + 1);
                                  for (i = 0; i < o.length; i++) s[i] = parseInt(o[i]);
                                  if (s[o.length] = 255, m) {
                                      var a = new m([t.buffer, s.buffer, e]);
                                      n(null, a)
                                  }
                              }))
                          }), (function(e, t) {
                              return n(new m(t))
                          }))
                      }, t.decodePayloadAsBinary = function(e, n, r) {
                          "function" == typeof n && (r = n, n = null);
                          for (var i = e, o = []; i.byteLength > 0;) {
                              for (var a = new Uint8Array(i), u = 0 === a[0], c = "", l = 1; 255 !== a[l]; l++) {
                                  if (c.length > 310) return r(h, 0, 1);
                                  c += a[l]
                              }
                              i = s(i, 2 + c.length), c = parseInt(c);
                              var d = s(i, 0, c);
                              if (u) try {
                                  d = String.fromCharCode.apply(null, new Uint8Array(d))
                              } catch (e) {
                                  var f = new Uint8Array(d);
                                  for (d = "", l = 0; l < f.length; l++) d += String.fromCharCode(f[l])
                              }
                              o.push(d), i = s(i, c)
                          }
                          var p = o.length;
                          o.forEach((function(e, i) {
                              r(t.decodePacket(e, n, !0), i, p)
                          }))
                      }
                  },
              "./node_modules/engine.io-parser/lib/keys.js":
                  /*!***************************************************!*\
                    !*** ./node_modules/engine.io-parser/lib/keys.js ***!
                    \***************************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t) {
                      e.exports = Object.keys || function(e) {
                          var t = [],
                              n = Object.prototype.hasOwnProperty;
                          for (var r in e) n.call(e, r) && t.push(r);
                          return t
                      }
                  },
              "./node_modules/engine.io-parser/lib/utf8.js":
                  /*!***************************************************!*\
                    !*** ./node_modules/engine.io-parser/lib/utf8.js ***!
                    \***************************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t) {
                      /*! https://mths.be/utf8js v2.1.2 by @mathias */
                      var n, r, i, o = String.fromCharCode;

                      function s(e) {
                          for (var t, n, r = [], i = 0, o = e.length; i < o;)(t = e.charCodeAt(i++)) >= 55296 && t <= 56319 && i < o ? 56320 == (64512 & (n = e.charCodeAt(i++))) ? r.push(((1023 & t) << 10) + (1023 & n) + 65536) : (r.push(t), i--) : r.push(t);
                          return r
                      }

                      function a(e, t) {
                          if (e >= 55296 && e <= 57343) {
                              if (t) throw Error("Lone surrogate U+" + e.toString(16).toUpperCase() + " is not a scalar value");
                              return !1
                          }
                          return !0
                      }

                      function u(e, t) {
                          return o(e >> t & 63 | 128)
                      }

                      function c(e, t) {
                          if (0 == (4294967168 & e)) return o(e);
                          var n = "";
                          return 0 == (4294965248 & e) ? n = o(e >> 6 & 31 | 192) : 0 == (4294901760 & e) ? (a(e, t) || (e = 65533), n = o(e >> 12 & 15 | 224), n += u(e, 6)) : 0 == (4292870144 & e) && (n = o(e >> 18 & 7 | 240), n += u(e, 12), n += u(e, 6)), n += o(63 & e | 128)
                      }

                      function l() {
                          if (i >= r) throw Error("Invalid byte index");
                          var e = 255 & n[i];
                          if (i++, 128 == (192 & e)) return 63 & e;
                          throw Error("Invalid continuation byte")
                      }

                      function d(e) {
                          var t, o;
                          if (i > r) throw Error("Invalid byte index");
                          if (i == r) return !1;
                          if (t = 255 & n[i], i++, 0 == (128 & t)) return t;
                          if (192 == (224 & t)) {
                              if ((o = (31 & t) << 6 | l()) >= 128) return o;
                              throw Error("Invalid continuation byte")
                          }
                          if (224 == (240 & t)) {
                              if ((o = (15 & t) << 12 | l() << 6 | l()) >= 2048) return a(o, e) ? o : 65533;
                              throw Error("Invalid continuation byte")
                          }
                          if (240 == (248 & t) && (o = (7 & t) << 18 | l() << 12 | l() << 6 | l()) >= 65536 && o <= 1114111) return o;
                          throw Error("Invalid UTF-8 detected")
                      }
                      e.exports = {
                          version: "2.1.2",
                          encode: function(e, t) {
                              for (var n = !1 !== (t = t || {}).strict, r = s(e), i = r.length, o = -1, a = ""; ++o < i;) a += c(r[o], n);
                              return a
                          },
                          decode: function(e, t) {
                              var a = !1 !== (t = t || {}).strict;
                              n = s(e), r = n.length, i = 0;
                              for (var u, c = []; !1 !== (u = d(a));) c.push(u);
                              return function(e) {
                                  for (var t, n = e.length, r = -1, i = ""; ++r < n;)(t = e[r]) > 65535 && (i += o((t -= 65536) >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), i += o(t);
                                  return i
                              }(c)
                          }
                      }
                  },
              "./node_modules/enum/dist/enum.js":
                  /*!****************************************!*\
                    !*** ./node_modules/enum/dist/enum.js ***!
                    \****************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t, n) {
                      "use strict";
                      (function(t) {
                          var r = function(e) {
                                  return e && e.__esModule ? e.default : e
                              },
                              i = r(n( /*! ./enumItem */ "./node_modules/enum/dist/enumItem.js")),
                              o = n( /*! ./isType */ "./node_modules/enum/dist/isType.js").isString,
                              s = n( /*! ./indexOf */ "./node_modules/enum/dist/indexOf.js").indexOf,
                              a = r(n( /*! is-buffer */ "./node_modules/is-buffer/index.js")),
                              u = function() {
                                  function e(t, n) {
                                      var r = this;
                                      if (function(e, t) {
                                              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                                          }(this, e), this.size = 4, this.indirection = 1, n && o(n) && (n = {
                                              name: n
                                          }), this._options = n || {}, this._options.separator = this._options.separator || " | ", this._options.endianness = this._options.endianness || "LE", this._options.ignoreCase = this._options.ignoreCase || !1, this._options.freez = this._options.freez || !1, this.enums = [], t.length) {
                                          this._enumLastIndex = t.length;
                                          var s = t;
                                          t = {};
                                          for (var a = 0; a < s.length; a++) t[s[a]] = Math.pow(2, a)
                                      }
                                      for (var u in t) l(this._options.name, u), this[u] = new i(u, t[u], {
                                          ignoreCase: this._options.ignoreCase
                                      }), this.enums.push(this[u]);
                                      this._enumMap = t, this._options.ignoreCase && (this.getLowerCaseEnums = function() {
                                          for (var e = {}, t = 0, n = this.enums.length; t < n; t++) e[this.enums[t].key.toLowerCase()] = this.enums[t];
                                          return e
                                      }), this._options.name && (this.name = this._options.name), this.isFlaggable = function() {
                                          for (var e = 0, t = r.enums.length; e < t; e++) {
                                              var n = r.enums[e];
                                              if (0 === n.value || n.value & n.value - 1) return !1
                                          }
                                          return !0
                                      }(), this._options.freez && this.freezeEnums()
                                  }
                                  return e.prototype.getKey = function(e) {
                                      var t = this.get(e);
                                      if (t) return t.key
                                  }, e.prototype.getValue = function(e) {
                                      var t = this.get(e);
                                      if (t) return t.value
                                  }, e.prototype.get = function(e, t) {
                                      if (null != e) {
                                          if (a(e) && (e = e["readUInt32" + this._options.endianness](t || 0)), i.isEnumItem(e)) {
                                              if (s.call(this.enums, e) >= 0) return e;
                                              if (!this.isFlaggable || this.isFlaggable && e.key.indexOf(this._options.separator) < 0) return;
                                              return this.get(e.key)
                                          }
                                          if (o(e)) {
                                              var n = this;
                                              if (this._options.ignoreCase && (n = this.getLowerCaseEnums(), e = e.toLowerCase()), e.indexOf(this._options.separator) > 0) {
                                                  for (var r = e.split(this._options.separator), u = 0, c = 0; c < r.length; c++) u |= n[r[c]].value;
                                                  return new i(e, u)
                                              }
                                              return n[e]
                                          }
                                          for (var l in this)
                                              if (this.hasOwnProperty(l) && this[l].value === e) return this[l];
                                          var d = null;
                                          if (this.isFlaggable)
                                              for (var f in this) this.hasOwnProperty(f) && 0 != (e & this[f].value) && (d ? d += this._options.separator : d = "", d += f);
                                          return this.get(d || null)
                                      }
                                  }, e.prototype.set = function(e, t, n) {
                                      var r = this.get(n);
                                      if (r) return e["writeUInt32" + this._options.endianness](r.value, t || 0)
                                  }, e.prototype.freezeEnums = function() {
                                      function e(e) {
                                          return e
                                      }
                                      return Object.isFrozen && Object.isSealed && Object.getOwnPropertyNames && Object.getOwnPropertyDescriptor && Object.defineProperties && Object.__defineGetter__ && Object.__defineSetter__ && function t(n) {
                                          if ("object" == typeof n && null !== n && !Object.isFrozen(n) && !Object.isSealed(n)) {
                                              for (var r in n) n.hasOwnProperty(r) && (n.__defineGetter__(r, e.bind(null, n[r])), n.__defineSetter__(r, (function(e) {
                                                  throw TypeError("Cannot redefine property; Enum Type is not extensible.")
                                              })), t(n[r]));
                                              Object.freeze ? Object.freeze(n) : function(e) {
                                                  Object.getOwnPropertyNames(e).forEach((function(t) {
                                                      Object.getOwnPropertyDescriptor(e, t).configurable && Object.defineProperties(e, t, {
                                                          writable: !1,
                                                          configurable: !1
                                                      })
                                                  }))
                                              }(n)
                                          }
                                      }(this), this
                                  }, e.prototype.toJSON = function() {
                                      return this._enumMap
                                  }, e.prototype.extend = function(e) {
                                      if (e.length) {
                                          var t = e;
                                          e = {};
                                          for (var n = 0; n < t.length; n++) {
                                              var r = this._enumLastIndex + n;
                                              e[t[n]] = Math.pow(2, r)
                                          }
                                          for (var o in e) l(this._options.name, o), this[o] = new i(o, e[o], {
                                              ignoreCase: this._options.ignoreCase
                                          }), this.enums.push(this[o]);
                                          for (var s in this._enumMap) e[s] = this._enumMap[s];
                                          this._enumLastIndex += e.length, this._enumMap = e, this._options.freez && this.freezeEnums()
                                      }
                                  }, e.register = function() {
                                      var n = void 0 === arguments[0] ? "Enum" : arguments[0];
                                      t[n] || (t[n] = e)
                                  }, e
                              }();
                          e.exports = u;
                          var c = ["_options", "get", "getKey", "getValue", "enums", "isFlaggable", "_enumMap", "toJSON", "_enumLastIndex"];

                          function l(e, t) {
                              if (e && "name" === t || s.call(c, t) >= 0) throw new Error("Enum key " + t + " is a reserved word!")
                          }
                      }).call(this, n( /*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"))
                  },
              "./node_modules/enum/dist/enumItem.js":
                  /*!********************************************!*\
                    !*** ./node_modules/enum/dist/enumItem.js ***!
                    \********************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t, n) {
                      "use strict";
                      var r = function(e, t) {
                              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                          },
                          i = n( /*! ./isType */ "./node_modules/enum/dist/isType.js"),
                          o = i.isObject,
                          s = i.isString,
                          a = function() {
                              function e(t, n) {
                                  var i = void 0 === arguments[2] ? {} : arguments[2];
                                  r(this, e), this.key = t, this.value = n, this._options = i, this._options.ignoreCase = this._options.ignoreCase || !1
                              }
                              return e.prototype.has = function(t) {
                                  return e.isEnumItem(t) ? 0 != (this.value & t.value) : s(t) ? this._options.ignoreCase ? this.key.toLowerCase().indexOf(t.toLowerCase()) >= 0 : this.key.indexOf(t) >= 0 : 0 != (this.value & t)
                              }, e.prototype.is = function(t) {
                                  return e.isEnumItem(t) ? this.key === t.key : s(t) ? this._options.ignoreCase ? this.key.toLowerCase() === t.toLowerCase() : this.key === t : this.value === t
                              }, e.prototype.toString = function() {
                                  return this.key
                              }, e.prototype.toJSON = function() {
                                  return this.key
                              }, e.prototype.valueOf = function() {
                                  return this.value
                              }, e.isEnumItem = function(t) {
                                  return t instanceof e || o(t) && void 0 !== t.key && void 0 !== t.value
                              }, e
                          }();
                      e.exports = a
                  },
              "./node_modules/enum/dist/indexOf.js":
                  /*!*******************************************!*\
                    !*** ./node_modules/enum/dist/indexOf.js ***!
                    \*******************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t, n) {
                      "use strict";
                      t.__esModule = !0;
                      var r = Array.prototype.indexOf || function(e, t) {
                          void 0 === t && (t = 0), t < 0 && (t += this.length), t < 0 && (t = 0);
                          for (var n = this.length; t < n; t++)
                              if (t in this && this[t] === e) return t;
                          return -1
                      };
                      t.indexOf = r
                  },
              "./node_modules/enum/dist/isType.js":
                  /*!******************************************!*\
                    !*** ./node_modules/enum/dist/isType.js ***!
                    \******************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t, n) {
                      "use strict";
                      t.__esModule = !0;
                      var r = function(e, t) {
                          return typeof t === e
                      };
                      t.isType = r, t.isObject = function(e) {
                          return r("object", e)
                      }, t.isString = function(e) {
                          return r("string", e)
                      }
                  },
              "./node_modules/enum/index.js":
                  /*!************************************!*\
                    !*** ./node_modules/enum/index.js ***!
                    \************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t, n) {
                      e.exports = n( /*! ./dist/enum */ "./node_modules/enum/dist/enum.js")
                  },
              "./node_modules/events/events.js":
                  /*!***************************************!*\
                    !*** ./node_modules/events/events.js ***!
                    \***************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t, n) {
                      "use strict";
                      var r, i = "object" == typeof Reflect ? Reflect : null,
                          o = i && "function" == typeof i.apply ? i.apply : function(e, t, n) {
                              return Function.prototype.apply.call(e, t, n)
                          };
                      r = i && "function" == typeof i.ownKeys ? i.ownKeys : Object.getOwnPropertySymbols ? function(e) {
                          return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
                      } : function(e) {
                          return Object.getOwnPropertyNames(e)
                      };
                      var s = Number.isNaN || function(e) {
                          return e != e
                      };

                      function a() {
                          a.init.call(this)
                      }
                      e.exports = a, a.EventEmitter = a, a.prototype._events = void 0, a.prototype._eventsCount = 0, a.prototype._maxListeners = void 0;
                      var u = 10;

                      function c(e) {
                          if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
                      }

                      function l(e) {
                          return void 0 === e._maxListeners ? a.defaultMaxListeners : e._maxListeners
                      }

                      function d(e, t, n, r) {
                          var i, o, s, a;
                          if (c(n), void 0 === (o = e._events) ? (o = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== o.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), o = e._events), s = o[t]), void 0 === s) s = o[t] = n, ++e._eventsCount;
                          else if ("function" == typeof s ? s = o[t] = r ? [n, s] : [s, n] : r ? s.unshift(n) : s.push(n), (i = l(e)) > 0 && s.length > i && !s.warned) {
                              s.warned = !0;
                              var u = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                              u.name = "MaxListenersExceededWarning", u.emitter = e, u.type = t, u.count = s.length, a = u, console && console.warn && console.warn(a)
                          }
                          return e
                      }

                      function f() {
                          if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
                      }

                      function p(e, t, n) {
                          var r = {
                                  fired: !1,
                                  wrapFn: void 0,
                                  target: e,
                                  type: t,
                                  listener: n
                              },
                              i = f.bind(r);
                          return i.listener = n, r.wrapFn = i, i
                      }

                      function h(e, t, n) {
                          var r = e._events;
                          if (void 0 === r) return [];
                          var i = r[t];
                          return void 0 === i ? [] : "function" == typeof i ? n ? [i.listener || i] : [i] : n ? function(e) {
                              for (var t = new Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
                              return t
                          }(i) : g(i, i.length)
                      }

                      function m(e) {
                          var t = this._events;
                          if (void 0 !== t) {
                              var n = t[e];
                              if ("function" == typeof n) return 1;
                              if (void 0 !== n) return n.length
                          }
                          return 0
                      }

                      function g(e, t) {
                          for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r];
                          return n
                      }
                      Object.defineProperty(a, "defaultMaxListeners", {
                          enumerable: !0,
                          get: function() {
                              return u
                          },
                          set: function(e) {
                              if ("number" != typeof e || e < 0 || s(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
                              u = e
                          }
                      }), a.init = function() {
                          void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
                      }, a.prototype.setMaxListeners = function(e) {
                          if ("number" != typeof e || e < 0 || s(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
                          return this._maxListeners = e, this
                      }, a.prototype.getMaxListeners = function() {
                          return l(this)
                      }, a.prototype.emit = function(e) {
                          for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
                          var r = "error" === e,
                              i = this._events;
                          if (void 0 !== i) r = r && void 0 === i.error;
                          else if (!r) return !1;
                          if (r) {
                              var s;
                              if (t.length > 0 && (s = t[0]), s instanceof Error) throw s;
                              var a = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
                              throw a.context = s, a
                          }
                          var u = i[e];
                          if (void 0 === u) return !1;
                          if ("function" == typeof u) o(u, this, t);
                          else {
                              var c = u.length,
                                  l = g(u, c);
                              for (n = 0; n < c; ++n) o(l[n], this, t)
                          }
                          return !0
                      }, a.prototype.addListener = function(e, t) {
                          return d(this, e, t, !1)
                      }, a.prototype.on = a.prototype.addListener, a.prototype.prependListener = function(e, t) {
                          return d(this, e, t, !0)
                      }, a.prototype.once = function(e, t) {
                          return c(t), this.on(e, p(this, e, t)), this
                      }, a.prototype.prependOnceListener = function(e, t) {
                          return c(t), this.prependListener(e, p(this, e, t)), this
                      }, a.prototype.removeListener = function(e, t) {
                          var n, r, i, o, s;
                          if (c(t), void 0 === (r = this._events)) return this;
                          if (void 0 === (n = r[e])) return this;
                          if (n === t || n.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete r[e], r.removeListener && this.emit("removeListener", e, n.listener || t));
                          else if ("function" != typeof n) {
                              for (i = -1, o = n.length - 1; o >= 0; o--)
                                  if (n[o] === t || n[o].listener === t) {
                                      s = n[o].listener, i = o;
                                      break
                                  } if (i < 0) return this;
                              0 === i ? n.shift() : function(e, t) {
                                  for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                                  e.pop()
                              }(n, i), 1 === n.length && (r[e] = n[0]), void 0 !== r.removeListener && this.emit("removeListener", e, s || t)
                          }
                          return this
                      }, a.prototype.off = a.prototype.removeListener, a.prototype.removeAllListeners = function(e) {
                          var t, n, r;
                          if (void 0 === (n = this._events)) return this;
                          if (void 0 === n.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== n[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[e]), this;
                          if (0 === arguments.length) {
                              var i, o = Object.keys(n);
                              for (r = 0; r < o.length; ++r) "removeListener" !== (i = o[r]) && this.removeAllListeners(i);
                              return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
                          }
                          if ("function" == typeof(t = n[e])) this.removeListener(e, t);
                          else if (void 0 !== t)
                              for (r = t.length - 1; r >= 0; r--) this.removeListener(e, t[r]);
                          return this
                      }, a.prototype.listeners = function(e) {
                          return h(this, e, !0)
                      }, a.prototype.rawListeners = function(e) {
                          return h(this, e, !1)
                      }, a.listenerCount = function(e, t) {
                          return "function" == typeof e.listenerCount ? e.listenerCount(t) : m.call(e, t)
                      }, a.prototype.listenerCount = m, a.prototype.eventNames = function() {
                          return this._eventsCount > 0 ? r(this._events) : []
                      }
                  },
              "./node_modules/has-binary2/index.js":
                  /*!*******************************************!*\
                    !*** ./node_modules/has-binary2/index.js ***!
                    \*******************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t, n) {
                      (function(t) {
                          var r = n( /*! isarray */ "./node_modules/isarray/index.js"),
                              i = Object.prototype.toString,
                              o = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === i.call(Blob),
                              s = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === i.call(File);
                          e.exports = function e(n) {
                              if (!n || "object" != typeof n) return !1;
                              if (r(n)) {
                                  for (var i = 0, a = n.length; i < a; i++)
                                      if (e(n[i])) return !0;
                                  return !1
                              }
                              if ("function" == typeof t && t.isBuffer && t.isBuffer(n) || "function" == typeof ArrayBuffer && n instanceof ArrayBuffer || o && n instanceof Blob || s && n instanceof File) return !0;
                              if (n.toJSON && "function" == typeof n.toJSON && 1 === arguments.length) return e(n.toJSON(), !0);
                              for (var u in n)
                                  if (Object.prototype.hasOwnProperty.call(n, u) && e(n[u])) return !0;
                              return !1
                          }
                      }).call(this, n( /*! ./../node-libs-browser/node_modules/buffer/index.js */ "./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer)
                  },
              "./node_modules/has-cors/index.js":
                  /*!****************************************!*\
                    !*** ./node_modules/has-cors/index.js ***!
                    \****************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t) {
                      try {
                          e.exports = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest
                      } catch (t) {
                          e.exports = !1
                      }
                  },
              "./node_modules/ieee754/index.js":
                  /*!***************************************!*\
                    !*** ./node_modules/ieee754/index.js ***!
                    \***************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t) {
                      t.read = function(e, t, n, r, i) {
                          var o, s, a = 8 * i - r - 1,
                              u = (1 << a) - 1,
                              c = u >> 1,
                              l = -7,
                              d = n ? i - 1 : 0,
                              f = n ? -1 : 1,
                              p = e[t + d];
                          for (d += f, o = p & (1 << -l) - 1, p >>= -l, l += a; l > 0; o = 256 * o + e[t + d], d += f, l -= 8);
                          for (s = o & (1 << -l) - 1, o >>= -l, l += r; l > 0; s = 256 * s + e[t + d], d += f, l -= 8);
                          if (0 === o) o = 1 - c;
                          else {
                              if (o === u) return s ? NaN : 1 / 0 * (p ? -1 : 1);
                              s += Math.pow(2, r), o -= c
                          }
                          return (p ? -1 : 1) * s * Math.pow(2, o - r)
                      }, t.write = function(e, t, n, r, i, o) {
                          var s, a, u, c = 8 * o - i - 1,
                              l = (1 << c) - 1,
                              d = l >> 1,
                              f = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                              p = r ? 0 : o - 1,
                              h = r ? 1 : -1,
                              m = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                          for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, s = l) : (s = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), (t += s + d >= 1 ? f / u : f * Math.pow(2, 1 - d)) * u >= 2 && (s++, u /= 2), s + d >= l ? (a = 0, s = l) : s + d >= 1 ? (a = (t * u - 1) * Math.pow(2, i), s += d) : (a = t * Math.pow(2, d - 1) * Math.pow(2, i), s = 0)); i >= 8; e[n + p] = 255 & a, p += h, a /= 256, i -= 8);
                          for (s = s << i | a, c += i; c > 0; e[n + p] = 255 & s, p += h, s /= 256, c -= 8);
                          e[n + p - h] |= 128 * m
                      }
                  },
              "./node_modules/indexof/index.js":
                  /*!***************************************!*\
                    !*** ./node_modules/indexof/index.js ***!
                    \***************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t) {
                      var n = [].indexOf;
                      e.exports = function(e, t) {
                          if (n) return e.indexOf(t);
                          for (var r = 0; r < e.length; ++r)
                              if (e[r] === t) return r;
                          return -1
                      }
                  },
              "./node_modules/is-buffer/index.js":
                  /*!*****************************************!*\
                    !*** ./node_modules/is-buffer/index.js ***!
                    \*****************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t) {
                      function n(e) {
                          return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
                      }
                      /*!
                       * Determine if an object is a Buffer
                       *
                       * @author   Feross Aboukhadijeh <https://feross.org>
                       * @license  MIT
                       */
                      e.exports = function(e) {
                          return null != e && (n(e) || function(e) {
                              return "function" == typeof e.readFloatLE && "function" == typeof e.slice && n(e.slice(0, 0))
                          }(e) || !!e._isBuffer)
                      }
                  },
              "./node_modules/isarray/index.js":
                  /*!***************************************!*\
                    !*** ./node_modules/isarray/index.js ***!
                    \***************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t) {
                      var n = {}.toString;
                      e.exports = Array.isArray || function(e) {
                          return "[object Array]" == n.call(e)
                      }
                  },
              "./node_modules/js-binarypack/lib/binarypack.js":
                  /*!******************************************************!*\
                    !*** ./node_modules/js-binarypack/lib/binarypack.js ***!
                    \******************************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t, n) {
                      var r = n( /*! ./bufferbuilder */ "./node_modules/js-binarypack/lib/bufferbuilder.js").BufferBuilder,
                          i = n( /*! ./bufferbuilder */ "./node_modules/js-binarypack/lib/bufferbuilder.js").binaryFeatures,
                          o = {
                              unpack: function(e) {
                                  return new s(e).unpack()
                              },
                              pack: function(e) {
                                  var t = new a;
                                  return t.pack(e), t.getBuffer()
                              }
                          };

                      function s(e) {
                          this.index = 0, this.dataBuffer = e, this.dataView = new Uint8Array(this.dataBuffer), this.length = this.dataBuffer.byteLength
                      }

                      function a() {
                          this.bufferBuilder = new r
                      }

                      function u(e) {
                          var t = e.charCodeAt(0);
                          return t <= 2047 ? "00" : t <= 65535 ? "000" : t <= 2097151 ? "0000" : t <= 67108863 ? "00000" : "000000"
                      }
                      e.exports = o, s.prototype.unpack = function() {
                          var e, t = this.unpack_uint8();
                          if (t < 128) return t;
                          if ((224 ^ t) < 32) return (224 ^ t) - 32;
                          if ((e = 160 ^ t) <= 15) return this.unpack_raw(e);
                          if ((e = 176 ^ t) <= 15) return this.unpack_string(e);
                          if ((e = 144 ^ t) <= 15) return this.unpack_array(e);
                          if ((e = 128 ^ t) <= 15) return this.unpack_map(e);
                          switch (t) {
                              case 192:
                                  return null;
                              case 193:
                                  return;
                              case 194:
                                  return !1;
                              case 195:
                                  return !0;
                              case 202:
                                  return this.unpack_float();
                              case 203:
                                  return this.unpack_double();
                              case 204:
                                  return this.unpack_uint8();
                              case 205:
                                  return this.unpack_uint16();
                              case 206:
                                  return this.unpack_uint32();
                              case 207:
                                  return this.unpack_uint64();
                              case 208:
                                  return this.unpack_int8();
                              case 209:
                                  return this.unpack_int16();
                              case 210:
                                  return this.unpack_int32();
                              case 211:
                                  return this.unpack_int64();
                              case 212:
                              case 213:
                              case 214:
                              case 215:
                                  return;
                              case 216:
                                  return e = this.unpack_uint16(), this.unpack_string(e);
                              case 217:
                                  return e = this.unpack_uint32(), this.unpack_string(e);
                              case 218:
                                  return e = this.unpack_uint16(), this.unpack_raw(e);
                              case 219:
                                  return e = this.unpack_uint32(), this.unpack_raw(e);
                              case 220:
                                  return e = this.unpack_uint16(), this.unpack_array(e);
                              case 221:
                                  return e = this.unpack_uint32(), this.unpack_array(e);
                              case 222:
                                  return e = this.unpack_uint16(), this.unpack_map(e);
                              case 223:
                                  return e = this.unpack_uint32(), this.unpack_map(e)
                          }
                      }, s.prototype.unpack_uint8 = function() {
                          var e = 255 & this.dataView[this.index];
                          return this.index++, e
                      }, s.prototype.unpack_uint16 = function() {
                          var e = this.read(2),
                              t = 256 * (255 & e[0]) + (255 & e[1]);
                          return this.index += 2, t
                      }, s.prototype.unpack_uint32 = function() {
                          var e = this.read(4),
                              t = 256 * (256 * (256 * e[0] + e[1]) + e[2]) + e[3];
                          return this.index += 4, t
                      }, s.prototype.unpack_uint64 = function() {
                          var e = this.read(8),
                              t = 256 * (256 * (256 * (256 * (256 * (256 * (256 * e[0] + e[1]) + e[2]) + e[3]) + e[4]) + e[5]) + e[6]) + e[7];
                          return this.index += 8, t
                      }, s.prototype.unpack_int8 = function() {
                          var e = this.unpack_uint8();
                          return e < 128 ? e : e - 256
                      }, s.prototype.unpack_int16 = function() {
                          var e = this.unpack_uint16();
                          return e < 32768 ? e : e - 65536
                      }, s.prototype.unpack_int32 = function() {
                          var e = this.unpack_uint32();
                          return e < Math.pow(2, 31) ? e : e - Math.pow(2, 32)
                      }, s.prototype.unpack_int64 = function() {
                          var e = this.unpack_uint64();
                          return e < Math.pow(2, 63) ? e : e - Math.pow(2, 64)
                      }, s.prototype.unpack_raw = function(e) {
                          if (this.length < this.index + e) throw new Error("BinaryPackFailure: index is out of range " + this.index + " " + e + " " + this.length);
                          var t = this.dataBuffer.slice(this.index, this.index + e);
                          return this.index += e, t
                      }, s.prototype.unpack_string = function(e) {
                          for (var t, n, r = this.read(e), i = 0, o = ""; i < e;)(t = r[i]) < 128 ? (o += String.fromCharCode(t), i++) : (192 ^ t) < 32 ? (n = (192 ^ t) << 6 | 63 & r[i + 1], o += String.fromCharCode(n), i += 2) : (n = (15 & t) << 12 | (63 & r[i + 1]) << 6 | 63 & r[i + 2], o += String.fromCharCode(n), i += 3);
                          return this.index += e, o
                      }, s.prototype.unpack_array = function(e) {
                          for (var t = new Array(e), n = 0; n < e; n++) t[n] = this.unpack();
                          return t
                      }, s.prototype.unpack_map = function(e) {
                          for (var t = {}, n = 0; n < e; n++) {
                              var r = this.unpack(),
                                  i = this.unpack();
                              t[r] = i
                          }
                          return t
                      }, s.prototype.unpack_float = function() {
                          var e = this.unpack_uint32(),
                              t = (e >> 23 & 255) - 127;
                          return (0 == e >> 31 ? 1 : -1) * (8388607 & e | 8388608) * Math.pow(2, t - 23)
                      }, s.prototype.unpack_double = function() {
                          var e = this.unpack_uint32(),
                              t = this.unpack_uint32(),
                              n = (e >> 20 & 2047) - 1023;
                          return (0 == e >> 31 ? 1 : -1) * ((1048575 & e | 1048576) * Math.pow(2, n - 20) + t * Math.pow(2, n - 52))
                      }, s.prototype.read = function(e) {
                          var t = this.index;
                          if (t + e <= this.length) return this.dataView.subarray(t, t + e);
                          throw new Error("BinaryPackFailure: read index out of range")
                      }, a.prototype.getBuffer = function() {
                          return this.bufferBuilder.getBuffer()
                      }, a.prototype.pack = function(e) {
                          var t = typeof e;
                          if ("string" == t) this.pack_string(e);
                          else if ("number" == t) Math.floor(e) === e ? this.pack_integer(e) : this.pack_double(e);
                          else if ("boolean" == t) !0 === e ? this.bufferBuilder.append(195) : !1 === e && this.bufferBuilder.append(194);
                          else if ("undefined" == t) this.bufferBuilder.append(192);
                          else {
                              if ("object" != t) throw new Error('Type "' + t + '" not yet supported');
                              if (null === e) this.bufferBuilder.append(192);
                              else {
                                  var n = e.constructor;
                                  if (n == Array) this.pack_array(e);
                                  else if (n == Blob || n == File) this.pack_bin(e);
                                  else if (n == ArrayBuffer) i.useArrayBufferView ? this.pack_bin(new Uint8Array(e)) : this.pack_bin(e);
                                  else if ("BYTES_PER_ELEMENT" in e) i.useArrayBufferView ? this.pack_bin(new Uint8Array(e.buffer)) : this.pack_bin(e.buffer);
                                  else if (n == Object) this.pack_object(e);
                                  else if (n == Date) this.pack_string(e.toString());
                                  else {
                                      if ("function" != typeof e.toBinaryPack) throw new Error('Type "' + n.toString() + '" not yet supported');
                                      this.bufferBuilder.append(e.toBinaryPack())
                                  }
                              }
                          }
                          this.bufferBuilder.flush()
                      }, a.prototype.pack_bin = function(e) {
                          var t = e.length || e.byteLength || e.size;
                          if (t <= 15) this.pack_uint8(160 + t);
                          else if (t <= 65535) this.bufferBuilder.append(218), this.pack_uint16(t);
                          else {
                              if (!(t <= 4294967295)) throw new Error("Invalid length");
                              this.bufferBuilder.append(219), this.pack_uint32(t)
                          }
                          this.bufferBuilder.append(e)
                      }, a.prototype.pack_string = function(e) {
                          var t = function(e) {
                              return e.length > 600 ? new Blob([e]).size : e.replace(/[^\u0000-\u007F]/g, u).length
                          }(e);
                          if (t <= 15) this.pack_uint8(176 + t);
                          else if (t <= 65535) this.bufferBuilder.append(216), this.pack_uint16(t);
                          else {
                              if (!(t <= 4294967295)) throw new Error("Invalid length");
                              this.bufferBuilder.append(217), this.pack_uint32(t)
                          }
                          this.bufferBuilder.append(e)
                      }, a.prototype.pack_array = function(e) {
                          var t = e.length;
                          if (t <= 15) this.pack_uint8(144 + t);
                          else if (t <= 65535) this.bufferBuilder.append(220), this.pack_uint16(t);
                          else {
                              if (!(t <= 4294967295)) throw new Error("Invalid length");
                              this.bufferBuilder.append(221), this.pack_uint32(t)
                          }
                          for (var n = 0; n < t; n++) this.pack(e[n])
                      }, a.prototype.pack_integer = function(e) {
                          if (-32 <= e && e <= 127) this.bufferBuilder.append(255 & e);
                          else if (0 <= e && e <= 255) this.bufferBuilder.append(204), this.pack_uint8(e);
                          else if (-128 <= e && e <= 127) this.bufferBuilder.append(208), this.pack_int8(e);
                          else if (0 <= e && e <= 65535) this.bufferBuilder.append(205), this.pack_uint16(e);
                          else if (-32768 <= e && e <= 32767) this.bufferBuilder.append(209), this.pack_int16(e);
                          else if (0 <= e && e <= 4294967295) this.bufferBuilder.append(206), this.pack_uint32(e);
                          else if (-2147483648 <= e && e <= 2147483647) this.bufferBuilder.append(210), this.pack_int32(e);
                          else if (-0x8000000000000000 <= e && e <= 0x8000000000000000) this.bufferBuilder.append(211), this.pack_int64(e);
                          else {
                              if (!(0 <= e && e <= 0x10000000000000000)) throw new Error("Invalid integer");
                              this.bufferBuilder.append(207), this.pack_uint64(e)
                          }
                      }, a.prototype.pack_double = function(e) {
                          var t = 0;
                          e < 0 && (t = 1, e = -e);
                          var n = Math.floor(Math.log(e) / Math.LN2),
                              r = e / Math.pow(2, n) - 1,
                              i = Math.floor(r * Math.pow(2, 52)),
                              o = Math.pow(2, 32),
                              s = t << 31 | n + 1023 << 20 | i / o & 1048575,
                              a = i % o;
                          this.bufferBuilder.append(203), this.pack_int32(s), this.pack_int32(a)
                      }, a.prototype.pack_object = function(e) {
                          var t = Object.keys(e).length;
                          if (t <= 15) this.pack_uint8(128 + t);
                          else if (t <= 65535) this.bufferBuilder.append(222), this.pack_uint16(t);
                          else {
                              if (!(t <= 4294967295)) throw new Error("Invalid length");
                              this.bufferBuilder.append(223), this.pack_uint32(t)
                          }
                          for (var n in e) e.hasOwnProperty(n) && (this.pack(n), this.pack(e[n]))
                      }, a.prototype.pack_uint8 = function(e) {
                          this.bufferBuilder.append(e)
                      }, a.prototype.pack_uint16 = function(e) {
                          this.bufferBuilder.append(e >> 8), this.bufferBuilder.append(255 & e)
                      }, a.prototype.pack_uint32 = function(e) {
                          var t = 4294967295 & e;
                          this.bufferBuilder.append((4278190080 & t) >>> 24), this.bufferBuilder.append((16711680 & t) >>> 16), this.bufferBuilder.append((65280 & t) >>> 8), this.bufferBuilder.append(255 & t)
                      }, a.prototype.pack_uint64 = function(e) {
                          var t = e / Math.pow(2, 32),
                              n = e % Math.pow(2, 32);
                          this.bufferBuilder.append((4278190080 & t) >>> 24), this.bufferBuilder.append((16711680 & t) >>> 16), this.bufferBuilder.append((65280 & t) >>> 8), this.bufferBuilder.append(255 & t), this.bufferBuilder.append((4278190080 & n) >>> 24), this.bufferBuilder.append((16711680 & n) >>> 16), this.bufferBuilder.append((65280 & n) >>> 8), this.bufferBuilder.append(255 & n)
                      }, a.prototype.pack_int8 = function(e) {
                          this.bufferBuilder.append(255 & e)
                      }, a.prototype.pack_int16 = function(e) {
                          this.bufferBuilder.append((65280 & e) >> 8), this.bufferBuilder.append(255 & e)
                      }, a.prototype.pack_int32 = function(e) {
                          this.bufferBuilder.append(e >>> 24 & 255), this.bufferBuilder.append((16711680 & e) >>> 16), this.bufferBuilder.append((65280 & e) >>> 8), this.bufferBuilder.append(255 & e)
                      }, a.prototype.pack_int64 = function(e) {
                          var t = Math.floor(e / Math.pow(2, 32)),
                              n = e % Math.pow(2, 32);
                          this.bufferBuilder.append((4278190080 & t) >>> 24), this.bufferBuilder.append((16711680 & t) >>> 16), this.bufferBuilder.append((65280 & t) >>> 8), this.bufferBuilder.append(255 & t), this.bufferBuilder.append((4278190080 & n) >>> 24), this.bufferBuilder.append((16711680 & n) >>> 16), this.bufferBuilder.append((65280 & n) >>> 8), this.bufferBuilder.append(255 & n)
                      }
                  },
              "./node_modules/js-binarypack/lib/bufferbuilder.js":
                  /*!*********************************************************!*\
                    !*** ./node_modules/js-binarypack/lib/bufferbuilder.js ***!
                    \*********************************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t) {
                      var n = {};
                      n.useBlobBuilder = function() {
                          try {
                              return new Blob([]), !1
                          } catch (e) {
                              return !0
                          }
                      }(), n.useArrayBufferView = !n.useBlobBuilder && function() {
                          try {
                              return 0 === new Blob([new Uint8Array([])]).size
                          } catch (e) {
                              return !0
                          }
                      }(), e.exports.binaryFeatures = n;
                      var r = e.exports.BlobBuilder;

                      function i() {
                          this._pieces = [], this._parts = []
                      }
                      "undefined" != typeof window && (r = e.exports.BlobBuilder = window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder || window.BlobBuilder), i.prototype.append = function(e) {
                          "number" == typeof e ? this._pieces.push(e) : (this.flush(), this._parts.push(e))
                      }, i.prototype.flush = function() {
                          if (this._pieces.length > 0) {
                              var e = new Uint8Array(this._pieces);
                              n.useArrayBufferView || (e = e.buffer), this._parts.push(e), this._pieces = []
                          }
                      }, i.prototype.getBuffer = function() {
                          if (this.flush(), n.useBlobBuilder) {
                              for (var e = new r, t = 0, i = this._parts.length; t < i; t++) e.append(this._parts[t]);
                              return e.getBlob()
                          }
                          return new Blob(this._parts)
                      }, e.exports.BufferBuilder = i
                  },
              "./node_modules/ms/index.js":
                  /*!**********************************!*\
                    !*** ./node_modules/ms/index.js ***!
                    \**********************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t) {
                      var n = 1e3,
                          r = 6e4,
                          i = 60 * r,
                          o = 24 * i;

                      function s(e, t, n, r) {
                          var i = t >= 1.5 * n;
                          return Math.round(e / n) + " " + r + (i ? "s" : "")
                      }
                      e.exports = function(e, t) {
                          t = t || {};
                          var a, u, c = typeof e;
                          if ("string" === c && e.length > 0) return function(e) {
                              if (!((e = String(e)).length > 100)) {
                                  var t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
                                  if (t) {
                                      var s = parseFloat(t[1]);
                                      switch ((t[2] || "ms").toLowerCase()) {
                                          case "years":
                                          case "year":
                                          case "yrs":
                                          case "yr":
                                          case "y":
                                              return 315576e5 * s;
                                          case "weeks":
                                          case "week":
                                          case "w":
                                              return 6048e5 * s;
                                          case "days":
                                          case "day":
                                          case "d":
                                              return s * o;
                                          case "hours":
                                          case "hour":
                                          case "hrs":
                                          case "hr":
                                          case "h":
                                              return s * i;
                                          case "minutes":
                                          case "minute":
                                          case "mins":
                                          case "min":
                                          case "m":
                                              return s * r;
                                          case "seconds":
                                          case "second":
                                          case "secs":
                                          case "sec":
                                          case "s":
                                              return s * n;
                                          case "milliseconds":
                                          case "millisecond":
                                          case "msecs":
                                          case "msec":
                                          case "ms":
                                              return s;
                                          default:
                                              return
                                      }
                                  }
                              }
                          }(e);
                          if ("number" === c && isFinite(e)) return t.long ? (a = e, (u = Math.abs(a)) >= o ? s(a, u, o, "day") : u >= i ? s(a, u, i, "hour") : u >= r ? s(a, u, r, "minute") : u >= n ? s(a, u, n, "second") : a + " ms") : function(e) {
                              var t = Math.abs(e);
                              return t >= o ? Math.round(e / o) + "d" : t >= i ? Math.round(e / i) + "h" : t >= r ? Math.round(e / r) + "m" : t >= n ? Math.round(e / n) + "s" : e + "ms"
                          }(e);
                          throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
                      }
                  },
              "./node_modules/node-libs-browser/node_modules/buffer/index.js":
                  /*!*********************************************************************!*\
                    !*** ./node_modules/node-libs-browser/node_modules/buffer/index.js ***!
                    \*********************************************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t, n) {
                      "use strict";
                      (function(e) {
                          /*!
                           * The buffer module from node.js, for the browser.
                           *
                           * @author   Feross Aboukhadijeh <http://feross.org>
                           * @license  MIT
                           */
                          var r = n( /*! base64-js */ "./node_modules/base64-js/index.js"),
                              i = n( /*! ieee754 */ "./node_modules/ieee754/index.js"),
                              o = n( /*! isarray */ "./node_modules/node-libs-browser/node_modules/isarray/index.js");

                          function s() {
                              return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
                          }

                          function a(e, t) {
                              if (s() < t) throw new RangeError("Invalid typed array length");
                              return u.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = u.prototype : (null === e && (e = new u(t)), e.length = t), e
                          }

                          function u(e, t, n) {
                              if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u)) return new u(e, t, n);
                              if ("number" == typeof e) {
                                  if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
                                  return d(this, e)
                              }
                              return c(this, e, t, n)
                          }

                          function c(e, t, n, r) {
                              if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
                              return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function(e, t, n, r) {
                                  if (t.byteLength, n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
                                  if (t.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
                                  return t = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r), u.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = u.prototype : e = f(e, t), e
                              }(e, t, n, r) : "string" == typeof t ? function(e, t, n) {
                                  if ("string" == typeof n && "" !== n || (n = "utf8"), !u.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
                                  var r = 0 | h(t, n),
                                      i = (e = a(e, r)).write(t, n);
                                  return i !== r && (e = e.slice(0, i)), e
                              }(e, t, n) : function(e, t) {
                                  if (u.isBuffer(t)) {
                                      var n = 0 | p(t.length);
                                      return 0 === (e = a(e, n)).length || t.copy(e, 0, 0, n), e
                                  }
                                  if (t) {
                                      if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (r = t.length) != r ? a(e, 0) : f(e, t);
                                      if ("Buffer" === t.type && o(t.data)) return f(e, t.data)
                                  }
                                  var r;
                                  throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                              }(e, t)
                          }

                          function l(e) {
                              if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
                              if (e < 0) throw new RangeError('"size" argument must not be negative')
                          }

                          function d(e, t) {
                              if (l(t), e = a(e, t < 0 ? 0 : 0 | p(t)), !u.TYPED_ARRAY_SUPPORT)
                                  for (var n = 0; n < t; ++n) e[n] = 0;
                              return e
                          }

                          function f(e, t) {
                              var n = t.length < 0 ? 0 : 0 | p(t.length);
                              e = a(e, n);
                              for (var r = 0; r < n; r += 1) e[r] = 255 & t[r];
                              return e
                          }

                          function p(e) {
                              if (e >= s()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes");
                              return 0 | e
                          }

                          function h(e, t) {
                              if (u.isBuffer(e)) return e.length;
                              if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
                              "string" != typeof e && (e = "" + e);
                              var n = e.length;
                              if (0 === n) return 0;
                              for (var r = !1;;) switch (t) {
                                  case "ascii":
                                  case "latin1":
                                  case "binary":
                                      return n;
                                  case "utf8":
                                  case "utf-8":
                                  case void 0:
                                      return D(e).length;
                                  case "ucs2":
                                  case "ucs-2":
                                  case "utf16le":
                                  case "utf-16le":
                                      return 2 * n;
                                  case "hex":
                                      return n >>> 1;
                                  case "base64":
                                      return V(e).length;
                                  default:
                                      if (r) return D(e).length;
                                      t = ("" + t).toLowerCase(), r = !0
                              }
                          }

                          function m(e, t, n) {
                              var r = !1;
                              if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
                              if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
                              if ((n >>>= 0) <= (t >>>= 0)) return "";
                              for (e || (e = "utf8");;) switch (e) {
                                  case "hex":
                                      return O(this, t, n);
                                  case "utf8":
                                  case "utf-8":
                                      return x(this, t, n);
                                  case "ascii":
                                      return T(this, t, n);
                                  case "latin1":
                                  case "binary":
                                      return A(this, t, n);
                                  case "base64":
                                      return C(this, t, n);
                                  case "ucs2":
                                  case "ucs-2":
                                  case "utf16le":
                                  case "utf-16le":
                                      return P(this, t, n);
                                  default:
                                      if (r) throw new TypeError("Unknown encoding: " + e);
                                      e = (e + "").toLowerCase(), r = !0
                              }
                          }

                          function g(e, t, n) {
                              var r = e[t];
                              e[t] = e[n], e[n] = r
                          }

                          function y(e, t, n, r, i) {
                              if (0 === e.length) return -1;
                              if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
                                  if (i) return -1;
                                  n = e.length - 1
                              } else if (n < 0) {
                                  if (!i) return -1;
                                  n = 0
                              }
                              if ("string" == typeof t && (t = u.from(t, r)), u.isBuffer(t)) return 0 === t.length ? -1 : v(e, t, n, r, i);
                              if ("number" == typeof t) return t &= 255, u.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : v(e, [t], n, r, i);
                              throw new TypeError("val must be string, number or Buffer")
                          }

                          function v(e, t, n, r, i) {
                              var o, s = 1,
                                  a = e.length,
                                  u = t.length;
                              if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                                  if (e.length < 2 || t.length < 2) return -1;
                                  s = 2, a /= 2, u /= 2, n /= 2
                              }

                              function c(e, t) {
                                  return 1 === s ? e[t] : e.readUInt16BE(t * s)
                              }
                              if (i) {
                                  var l = -1;
                                  for (o = n; o < a; o++)
                                      if (c(e, o) === c(t, -1 === l ? 0 : o - l)) {
                                          if (-1 === l && (l = o), o - l + 1 === u) return l * s
                                      } else -1 !== l && (o -= o - l), l = -1
                              } else
                                  for (n + u > a && (n = a - u), o = n; o >= 0; o--) {
                                      for (var d = !0, f = 0; f < u; f++)
                                          if (c(e, o + f) !== c(t, f)) {
                                              d = !1;
                                              break
                                          } if (d) return o
                                  }
                              return -1
                          }

                          function b(e, t, n, r) {
                              n = Number(n) || 0;
                              var i = e.length - n;
                              r ? (r = Number(r)) > i && (r = i) : r = i;
                              var o = t.length;
                              if (o % 2 != 0) throw new TypeError("Invalid hex string");
                              r > o / 2 && (r = o / 2);
                              for (var s = 0; s < r; ++s) {
                                  var a = parseInt(t.substr(2 * s, 2), 16);
                                  if (isNaN(a)) return s;
                                  e[n + s] = a
                              }
                              return s
                          }

                          function w(e, t, n, r) {
                              return U(D(t, e.length - n), e, n, r)
                          }

                          function _(e, t, n, r) {
                              return U(function(e) {
                                  for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
                                  return t
                              }(t), e, n, r)
                          }

                          function E(e, t, n, r) {
                              return _(e, t, n, r)
                          }

                          function S(e, t, n, r) {
                              return U(V(t), e, n, r)
                          }

                          function k(e, t, n, r) {
                              return U(function(e, t) {
                                  for (var n, r, i, o = [], s = 0; s < e.length && !((t -= 2) < 0); ++s) n = e.charCodeAt(s), r = n >> 8, i = n % 256, o.push(i), o.push(r);
                                  return o
                              }(t, e.length - n), e, n, r)
                          }

                          function C(e, t, n) {
                              return 0 === t && n === e.length ? r.fromByteArray(e) : r.fromByteArray(e.slice(t, n))
                          }

                          function x(e, t, n) {
                              n = Math.min(e.length, n);
                              for (var r = [], i = t; i < n;) {
                                  var o, s, a, u, c = e[i],
                                      l = null,
                                      d = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
                                  if (i + d <= n) switch (d) {
                                      case 1:
                                          c < 128 && (l = c);
                                          break;
                                      case 2:
                                          128 == (192 & (o = e[i + 1])) && (u = (31 & c) << 6 | 63 & o) > 127 && (l = u);
                                          break;
                                      case 3:
                                          o = e[i + 1], s = e[i + 2], 128 == (192 & o) && 128 == (192 & s) && (u = (15 & c) << 12 | (63 & o) << 6 | 63 & s) > 2047 && (u < 55296 || u > 57343) && (l = u);
                                          break;
                                      case 4:
                                          o = e[i + 1], s = e[i + 2], a = e[i + 3], 128 == (192 & o) && 128 == (192 & s) && 128 == (192 & a) && (u = (15 & c) << 18 | (63 & o) << 12 | (63 & s) << 6 | 63 & a) > 65535 && u < 1114112 && (l = u)
                                  }
                                  null === l ? (l = 65533, d = 1) : l > 65535 && (l -= 65536, r.push(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), r.push(l), i += d
                              }
                              return function(e) {
                                  var t = e.length;
                                  if (t <= 4096) return String.fromCharCode.apply(String, e);
                                  for (var n = "", r = 0; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += 4096));
                                  return n
                              }(r)
                          }

                          function T(e, t, n) {
                              var r = "";
                              n = Math.min(e.length, n);
                              for (var i = t; i < n; ++i) r += String.fromCharCode(127 & e[i]);
                              return r
                          }

                          function A(e, t, n) {
                              var r = "";
                              n = Math.min(e.length, n);
                              for (var i = t; i < n; ++i) r += String.fromCharCode(e[i]);
                              return r
                          }

                          function O(e, t, n) {
                              var r, i = e.length;
                              (!t || t < 0) && (t = 0), (!n || n < 0 || n > i) && (n = i);
                              for (var o = "", s = t; s < n; ++s) o += (r = e[s]) < 16 ? "0" + r.toString(16) : r.toString(16);
                              return o
                          }

                          function P(e, t, n) {
                              for (var r = e.slice(t, n), i = "", o = 0; o < r.length; o += 2) i += String.fromCharCode(r[o] + 256 * r[o + 1]);
                              return i
                          }

                          function N(e, t, n) {
                              if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
                              if (e + t > n) throw new RangeError("Trying to access beyond buffer length")
                          }

                          function M(e, t, n, r, i, o) {
                              if (!u.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                              if (t > i || t < o) throw new RangeError('"value" argument is out of bounds');
                              if (n + r > e.length) throw new RangeError("Index out of range")
                          }

                          function R(e, t, n, r) {
                              t < 0 && (t = 65535 + t + 1);
                              for (var i = 0, o = Math.min(e.length - n, 2); i < o; ++i) e[n + i] = (t & 255 << 8 * (r ? i : 1 - i)) >>> 8 * (r ? i : 1 - i)
                          }

                          function j(e, t, n, r) {
                              t < 0 && (t = 4294967295 + t + 1);
                              for (var i = 0, o = Math.min(e.length - n, 4); i < o; ++i) e[n + i] = t >>> 8 * (r ? i : 3 - i) & 255
                          }

                          function B(e, t, n, r, i, o) {
                              if (n + r > e.length) throw new RangeError("Index out of range");
                              if (n < 0) throw new RangeError("Index out of range")
                          }

                          function F(e, t, n, r, o) {
                              return o || B(e, 0, n, 4), i.write(e, t, n, r, 23, 4), n + 4
                          }

                          function I(e, t, n, r, o) {
                              return o || B(e, 0, n, 8), i.write(e, t, n, r, 52, 8), n + 8
                          }
                          t.Buffer = u, t.SlowBuffer = function(e) {
                              return +e != e && (e = 0), u.alloc(+e)
                          }, t.INSPECT_MAX_BYTES = 50, u.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function() {
                              try {
                                  var e = new Uint8Array(1);
                                  return e.__proto__ = {
                                      __proto__: Uint8Array.prototype,
                                      foo: function() {
                                          return 42
                                      }
                                  }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
                              } catch (e) {
                                  return !1
                              }
                          }(), t.kMaxLength = s(), u.poolSize = 8192, u._augment = function(e) {
                              return e.__proto__ = u.prototype, e
                          }, u.from = function(e, t, n) {
                              return c(null, e, t, n)
                          }, u.TYPED_ARRAY_SUPPORT && (u.prototype.__proto__ = Uint8Array.prototype, u.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && u[Symbol.species] === u && Object.defineProperty(u, Symbol.species, {
                              value: null,
                              configurable: !0
                          })), u.alloc = function(e, t, n) {
                              return function(e, t, n, r) {
                                  return l(t), t <= 0 ? a(e, t) : void 0 !== n ? "string" == typeof r ? a(e, t).fill(n, r) : a(e, t).fill(n) : a(e, t)
                              }(null, e, t, n)
                          }, u.allocUnsafe = function(e) {
                              return d(null, e)
                          }, u.allocUnsafeSlow = function(e) {
                              return d(null, e)
                          }, u.isBuffer = function(e) {
                              return !(null == e || !e._isBuffer)
                          }, u.compare = function(e, t) {
                              if (!u.isBuffer(e) || !u.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
                              if (e === t) return 0;
                              for (var n = e.length, r = t.length, i = 0, o = Math.min(n, r); i < o; ++i)
                                  if (e[i] !== t[i]) {
                                      n = e[i], r = t[i];
                                      break
                                  } return n < r ? -1 : r < n ? 1 : 0
                          }, u.isEncoding = function(e) {
                              switch (String(e).toLowerCase()) {
                                  case "hex":
                                  case "utf8":
                                  case "utf-8":
                                  case "ascii":
                                  case "latin1":
                                  case "binary":
                                  case "base64":
                                  case "ucs2":
                                  case "ucs-2":
                                  case "utf16le":
                                  case "utf-16le":
                                      return !0;
                                  default:
                                      return !1
                              }
                          }, u.concat = function(e, t) {
                              if (!o(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                              if (0 === e.length) return u.alloc(0);
                              var n;
                              if (void 0 === t)
                                  for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
                              var r = u.allocUnsafe(t),
                                  i = 0;
                              for (n = 0; n < e.length; ++n) {
                                  var s = e[n];
                                  if (!u.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
                                  s.copy(r, i), i += s.length
                              }
                              return r
                          }, u.byteLength = h, u.prototype._isBuffer = !0, u.prototype.swap16 = function() {
                              var e = this.length;
                              if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                              for (var t = 0; t < e; t += 2) g(this, t, t + 1);
                              return this
                          }, u.prototype.swap32 = function() {
                              var e = this.length;
                              if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                              for (var t = 0; t < e; t += 4) g(this, t, t + 3), g(this, t + 1, t + 2);
                              return this
                          }, u.prototype.swap64 = function() {
                              var e = this.length;
                              if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                              for (var t = 0; t < e; t += 8) g(this, t, t + 7), g(this, t + 1, t + 6), g(this, t + 2, t + 5), g(this, t + 3, t + 4);
                              return this
                          }, u.prototype.toString = function() {
                              var e = 0 | this.length;
                              return 0 === e ? "" : 0 === arguments.length ? x(this, 0, e) : m.apply(this, arguments)
                          }, u.prototype.equals = function(e) {
                              if (!u.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                              return this === e || 0 === u.compare(this, e)
                          }, u.prototype.inspect = function() {
                              var e = "",
                                  n = t.INSPECT_MAX_BYTES;
                              return this.length > 0 && (e = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (e += " ... ")), "<Buffer " + e + ">"
                          }, u.prototype.compare = function(e, t, n, r, i) {
                              if (!u.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                              if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), t < 0 || n > e.length || r < 0 || i > this.length) throw new RangeError("out of range index");
                              if (r >= i && t >= n) return 0;
                              if (r >= i) return -1;
                              if (t >= n) return 1;
                              if (this === e) return 0;
                              for (var o = (i >>>= 0) - (r >>>= 0), s = (n >>>= 0) - (t >>>= 0), a = Math.min(o, s), c = this.slice(r, i), l = e.slice(t, n), d = 0; d < a; ++d)
                                  if (c[d] !== l[d]) {
                                      o = c[d], s = l[d];
                                      break
                                  } return o < s ? -1 : s < o ? 1 : 0
                          }, u.prototype.includes = function(e, t, n) {
                              return -1 !== this.indexOf(e, t, n)
                          }, u.prototype.indexOf = function(e, t, n) {
                              return y(this, e, t, n, !0)
                          }, u.prototype.lastIndexOf = function(e, t, n) {
                              return y(this, e, t, n, !1)
                          }, u.prototype.write = function(e, t, n, r) {
                              if (void 0 === t) r = "utf8", n = this.length, t = 0;
                              else if (void 0 === n && "string" == typeof t) r = t, n = this.length, t = 0;
                              else {
                                  if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                                  t |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
                              }
                              var i = this.length - t;
                              if ((void 0 === n || n > i) && (n = i), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                              r || (r = "utf8");
                              for (var o = !1;;) switch (r) {
                                  case "hex":
                                      return b(this, e, t, n);
                                  case "utf8":
                                  case "utf-8":
                                      return w(this, e, t, n);
                                  case "ascii":
                                      return _(this, e, t, n);
                                  case "latin1":
                                  case "binary":
                                      return E(this, e, t, n);
                                  case "base64":
                                      return S(this, e, t, n);
                                  case "ucs2":
                                  case "ucs-2":
                                  case "utf16le":
                                  case "utf-16le":
                                      return k(this, e, t, n);
                                  default:
                                      if (o) throw new TypeError("Unknown encoding: " + r);
                                      r = ("" + r).toLowerCase(), o = !0
                              }
                          }, u.prototype.toJSON = function() {
                              return {
                                  type: "Buffer",
                                  data: Array.prototype.slice.call(this._arr || this, 0)
                              }
                          }, u.prototype.slice = function(e, t) {
                              var n, r = this.length;
                              if ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e), u.TYPED_ARRAY_SUPPORT)(n = this.subarray(e, t)).__proto__ = u.prototype;
                              else {
                                  var i = t - e;
                                  n = new u(i, void 0);
                                  for (var o = 0; o < i; ++o) n[o] = this[o + e]
                              }
                              return n
                          }, u.prototype.readUIntLE = function(e, t, n) {
                              e |= 0, t |= 0, n || N(e, t, this.length);
                              for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256);) r += this[e + o] * i;
                              return r
                          }, u.prototype.readUIntBE = function(e, t, n) {
                              e |= 0, t |= 0, n || N(e, t, this.length);
                              for (var r = this[e + --t], i = 1; t > 0 && (i *= 256);) r += this[e + --t] * i;
                              return r
                          }, u.prototype.readUInt8 = function(e, t) {
                              return t || N(e, 1, this.length), this[e]
                          }, u.prototype.readUInt16LE = function(e, t) {
                              return t || N(e, 2, this.length), this[e] | this[e + 1] << 8
                          }, u.prototype.readUInt16BE = function(e, t) {
                              return t || N(e, 2, this.length), this[e] << 8 | this[e + 1]
                          }, u.prototype.readUInt32LE = function(e, t) {
                              return t || N(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
                          }, u.prototype.readUInt32BE = function(e, t) {
                              return t || N(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
                          }, u.prototype.readIntLE = function(e, t, n) {
                              e |= 0, t |= 0, n || N(e, t, this.length);
                              for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256);) r += this[e + o] * i;
                              return r >= (i *= 128) && (r -= Math.pow(2, 8 * t)), r
                          }, u.prototype.readIntBE = function(e, t, n) {
                              e |= 0, t |= 0, n || N(e, t, this.length);
                              for (var r = t, i = 1, o = this[e + --r]; r > 0 && (i *= 256);) o += this[e + --r] * i;
                              return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o
                          }, u.prototype.readInt8 = function(e, t) {
                              return t || N(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
                          }, u.prototype.readInt16LE = function(e, t) {
                              t || N(e, 2, this.length);
                              var n = this[e] | this[e + 1] << 8;
                              return 32768 & n ? 4294901760 | n : n
                          }, u.prototype.readInt16BE = function(e, t) {
                              t || N(e, 2, this.length);
                              var n = this[e + 1] | this[e] << 8;
                              return 32768 & n ? 4294901760 | n : n
                          }, u.prototype.readInt32LE = function(e, t) {
                              return t || N(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
                          }, u.prototype.readInt32BE = function(e, t) {
                              return t || N(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
                          }, u.prototype.readFloatLE = function(e, t) {
                              return t || N(e, 4, this.length), i.read(this, e, !0, 23, 4)
                          }, u.prototype.readFloatBE = function(e, t) {
                              return t || N(e, 4, this.length), i.read(this, e, !1, 23, 4)
                          }, u.prototype.readDoubleLE = function(e, t) {
                              return t || N(e, 8, this.length), i.read(this, e, !0, 52, 8)
                          }, u.prototype.readDoubleBE = function(e, t) {
                              return t || N(e, 8, this.length), i.read(this, e, !1, 52, 8)
                          }, u.prototype.writeUIntLE = function(e, t, n, r) {
                              e = +e, t |= 0, n |= 0, r || M(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                              var i = 1,
                                  o = 0;
                              for (this[t] = 255 & e; ++o < n && (i *= 256);) this[t + o] = e / i & 255;
                              return t + n
                          }, u.prototype.writeUIntBE = function(e, t, n, r) {
                              e = +e, t |= 0, n |= 0, r || M(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                              var i = n - 1,
                                  o = 1;
                              for (this[t + i] = 255 & e; --i >= 0 && (o *= 256);) this[t + i] = e / o & 255;
                              return t + n
                          }, u.prototype.writeUInt8 = function(e, t, n) {
                              return e = +e, t |= 0, n || M(this, e, t, 1, 255, 0), u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
                          }, u.prototype.writeUInt16LE = function(e, t, n) {
                              return e = +e, t |= 0, n || M(this, e, t, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : R(this, e, t, !0), t + 2
                          }, u.prototype.writeUInt16BE = function(e, t, n) {
                              return e = +e, t |= 0, n || M(this, e, t, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : R(this, e, t, !1), t + 2
                          }, u.prototype.writeUInt32LE = function(e, t, n) {
                              return e = +e, t |= 0, n || M(this, e, t, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : j(this, e, t, !0), t + 4
                          }, u.prototype.writeUInt32BE = function(e, t, n) {
                              return e = +e, t |= 0, n || M(this, e, t, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : j(this, e, t, !1), t + 4
                          }, u.prototype.writeIntLE = function(e, t, n, r) {
                              if (e = +e, t |= 0, !r) {
                                  var i = Math.pow(2, 8 * n - 1);
                                  M(this, e, t, n, i - 1, -i)
                              }
                              var o = 0,
                                  s = 1,
                                  a = 0;
                              for (this[t] = 255 & e; ++o < n && (s *= 256);) e < 0 && 0 === a && 0 !== this[t + o - 1] && (a = 1), this[t + o] = (e / s >> 0) - a & 255;
                              return t + n
                          }, u.prototype.writeIntBE = function(e, t, n, r) {
                              if (e = +e, t |= 0, !r) {
                                  var i = Math.pow(2, 8 * n - 1);
                                  M(this, e, t, n, i - 1, -i)
                              }
                              var o = n - 1,
                                  s = 1,
                                  a = 0;
                              for (this[t + o] = 255 & e; --o >= 0 && (s *= 256);) e < 0 && 0 === a && 0 !== this[t + o + 1] && (a = 1), this[t + o] = (e / s >> 0) - a & 255;
                              return t + n
                          }, u.prototype.writeInt8 = function(e, t, n) {
                              return e = +e, t |= 0, n || M(this, e, t, 1, 127, -128), u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
                          }, u.prototype.writeInt16LE = function(e, t, n) {
                              return e = +e, t |= 0, n || M(this, e, t, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : R(this, e, t, !0), t + 2
                          }, u.prototype.writeInt16BE = function(e, t, n) {
                              return e = +e, t |= 0, n || M(this, e, t, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : R(this, e, t, !1), t + 2
                          }, u.prototype.writeInt32LE = function(e, t, n) {
                              return e = +e, t |= 0, n || M(this, e, t, 4, 2147483647, -2147483648), u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : j(this, e, t, !0), t + 4
                          }, u.prototype.writeInt32BE = function(e, t, n) {
                              return e = +e, t |= 0, n || M(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : j(this, e, t, !1), t + 4
                          }, u.prototype.writeFloatLE = function(e, t, n) {
                              return F(this, e, t, !0, n)
                          }, u.prototype.writeFloatBE = function(e, t, n) {
                              return F(this, e, t, !1, n)
                          }, u.prototype.writeDoubleLE = function(e, t, n) {
                              return I(this, e, t, !0, n)
                          }, u.prototype.writeDoubleBE = function(e, t, n) {
                              return I(this, e, t, !1, n)
                          }, u.prototype.copy = function(e, t, n, r) {
                              if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n) return 0;
                              if (0 === e.length || 0 === this.length) return 0;
                              if (t < 0) throw new RangeError("targetStart out of bounds");
                              if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
                              if (r < 0) throw new RangeError("sourceEnd out of bounds");
                              r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
                              var i, o = r - n;
                              if (this === e && n < t && t < r)
                                  for (i = o - 1; i >= 0; --i) e[i + t] = this[i + n];
                              else if (o < 1e3 || !u.TYPED_ARRAY_SUPPORT)
                                  for (i = 0; i < o; ++i) e[i + t] = this[i + n];
                              else Uint8Array.prototype.set.call(e, this.subarray(n, n + o), t);
                              return o
                          }, u.prototype.fill = function(e, t, n, r) {
                              if ("string" == typeof e) {
                                  if ("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === e.length) {
                                      var i = e.charCodeAt(0);
                                      i < 256 && (e = i)
                                  }
                                  if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
                                  if ("string" == typeof r && !u.isEncoding(r)) throw new TypeError("Unknown encoding: " + r)
                              } else "number" == typeof e && (e &= 255);
                              if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
                              if (n <= t) return this;
                              var o;
                              if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e)
                                  for (o = t; o < n; ++o) this[o] = e;
                              else {
                                  var s = u.isBuffer(e) ? e : D(new u(e, r).toString()),
                                      a = s.length;
                                  for (o = 0; o < n - t; ++o) this[o + t] = s[o % a]
                              }
                              return this
                          };
                          var L = /[^+\/0-9A-Za-z-_]/g;

                          function D(e, t) {
                              var n;
                              t = t || 1 / 0;
                              for (var r = e.length, i = null, o = [], s = 0; s < r; ++s) {
                                  if ((n = e.charCodeAt(s)) > 55295 && n < 57344) {
                                      if (!i) {
                                          if (n > 56319) {
                                              (t -= 3) > -1 && o.push(239, 191, 189);
                                              continue
                                          }
                                          if (s + 1 === r) {
                                              (t -= 3) > -1 && o.push(239, 191, 189);
                                              continue
                                          }
                                          i = n;
                                          continue
                                      }
                                      if (n < 56320) {
                                          (t -= 3) > -1 && o.push(239, 191, 189), i = n;
                                          continue
                                      }
                                      n = 65536 + (i - 55296 << 10 | n - 56320)
                                  } else i && (t -= 3) > -1 && o.push(239, 191, 189);
                                  if (i = null, n < 128) {
                                      if ((t -= 1) < 0) break;
                                      o.push(n)
                                  } else if (n < 2048) {
                                      if ((t -= 2) < 0) break;
                                      o.push(n >> 6 | 192, 63 & n | 128)
                                  } else if (n < 65536) {
                                      if ((t -= 3) < 0) break;
                                      o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                                  } else {
                                      if (!(n < 1114112)) throw new Error("Invalid code point");
                                      if ((t -= 4) < 0) break;
                                      o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                                  }
                              }
                              return o
                          }

                          function V(e) {
                              return r.toByteArray(function(e) {
                                  if ((e = function(e) {
                                          return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                                      }(e).replace(L, "")).length < 2) return "";
                                  for (; e.length % 4 != 0;) e += "=";
                                  return e
                              }(e))
                          }

                          function U(e, t, n, r) {
                              for (var i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
                              return i
                          }
                      }).call(this, n( /*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"))
                  },
              "./node_modules/node-libs-browser/node_modules/isarray/index.js":
                  /*!**********************************************************************!*\
                    !*** ./node_modules/node-libs-browser/node_modules/isarray/index.js ***!
                    \**********************************************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t) {
                      var n = {}.toString;
                      e.exports = Array.isArray || function(e) {
                          return "[object Array]" == n.call(e)
                      }
                  },
              "./node_modules/object-sizeof/byte_size.js":
                  /*!*************************************************!*\
                    !*** ./node_modules/object-sizeof/byte_size.js ***!
                    \*************************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t) {
                      e.exports = {
                          STRING: 2,
                          BOOLEAN: 4,
                          NUMBER: 8
                      }
                  },
              "./node_modules/object-sizeof/index.js":
                  /*!*********************************************!*\
                    !*** ./node_modules/object-sizeof/index.js ***!
                    \*********************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t, n) {
                      "use strict";
                      var r = n( /*! ./byte_size */ "./node_modules/object-sizeof/byte_size.js"),
                          i = n( /*! buffer */ "./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer;

                      function o(e, t) {
                          if (null == t) return 0;
                          for (var n = 0, r = function(e) {
                                  const t = [];
                                  for (var n in e) t.push(n);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      Array.prototype.push.apply(t, r)
                                  }
                                  return t
                              }(t), i = 0; i < r.length; i++) {
                              var o = r[i];
                              if ("object" == typeof t[o] && null !== t[o]) {
                                  if (e.has(t[o])) continue;
                                  e.add(t[o])
                              }
                              n += s(e)(o);
                              try {
                                  n += s(e)(t[o])
                              } catch (e) {
                                  e instanceof RangeError && (n = 0)
                              }
                          }
                          return n
                      }

                      function s(e) {
                          return function(t) {
                              if (i.isBuffer(t)) return t.length;
                              switch (typeof t) {
                                  case "string":
                                      return t.length * r.STRING;
                                  case "boolean":
                                      return r.BOOLEAN;
                                  case "number":
                                      return r.NUMBER;
                                  case "symbol":
                                      return Symbol.keyFor && Symbol.keyFor(t) ? Symbol.keyFor(t).length * r.STRING : (t.toString().length - 8) * r.STRING;
                                  case "object":
                                      return Array.isArray(t) ? t.map(s(e)).reduce((function(e, t) {
                                          return e + t
                                      }), 0) : o(e, t);
                                  default:
                                      return 0
                              }
                          }
                      }
                      e.exports = function(e) {
                          return s(new WeakSet)(e)
                      }
                  },
              "./node_modules/parseqs/index.js":
                  /*!***************************************!*\
                    !*** ./node_modules/parseqs/index.js ***!
                    \***************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t) {
                      t.encode = function(e) {
                          var t = "";
                          for (var n in e) e.hasOwnProperty(n) && (t.length && (t += "&"), t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
                          return t
                      }, t.decode = function(e) {
                          for (var t = {}, n = e.split("&"), r = 0, i = n.length; r < i; r++) {
                              var o = n[r].split("=");
                              t[decodeURIComponent(o[0])] = decodeURIComponent(o[1])
                          }
                          return t
                      }
                  },
              "./node_modules/parseuri/index.js":
                  /*!****************************************!*\
                    !*** ./node_modules/parseuri/index.js ***!
                    \****************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t) {
                      var n = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
                          r = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
                      e.exports = function(e) {
                          var t = e,
                              i = e.indexOf("["),
                              o = e.indexOf("]"); - 1 != i && -1 != o && (e = e.substring(0, i) + e.substring(i, o).replace(/:/g, ";") + e.substring(o, e.length));
                          for (var s = n.exec(e || ""), a = {}, u = 14; u--;) a[r[u]] = s[u] || "";
                          return -1 != i && -1 != o && (a.source = t, a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":"), a.authority = a.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), a.ipv6uri = !0), a
                      }
                  },
              "./node_modules/process/browser.js":
                  /*!*****************************************!*\
                    !*** ./node_modules/process/browser.js ***!
                    \*****************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t) {
                      var n, r, i = e.exports = {};

                      function o() {
                          throw new Error("setTimeout has not been defined")
                      }

                      function s() {
                          throw new Error("clearTimeout has not been defined")
                      }

                      function a(e) {
                          if (n === setTimeout) return setTimeout(e, 0);
                          if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
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
                              n = "function" == typeof setTimeout ? setTimeout : o
                          } catch (e) {
                              n = o
                          }
                          try {
                              r = "function" == typeof clearTimeout ? clearTimeout : s
                          } catch (e) {
                              r = s
                          }
                      }();
                      var u, c = [],
                          l = !1,
                          d = -1;

                      function f() {
                          l && u && (l = !1, u.length ? c = u.concat(c) : d = -1, c.length && p())
                      }

                      function p() {
                          if (!l) {
                              var e = a(f);
                              l = !0;
                              for (var t = c.length; t;) {
                                  for (u = c, c = []; ++d < t;) u && u[d].run();
                                  d = -1, t = c.length
                              }
                              u = null, l = !1,
                                  function(e) {
                                      if (r === clearTimeout) return clearTimeout(e);
                                      if ((r === s || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
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

                      function h(e, t) {
                          this.fun = e, this.array = t
                      }

                      function m() {}
                      i.nextTick = function(e) {
                          var t = new Array(arguments.length - 1);
                          if (arguments.length > 1)
                              for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                          c.push(new h(e, t)), 1 !== c.length || l || a(p)
                      }, h.prototype.run = function() {
                          this.fun.apply(null, this.array)
                      }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = m, i.addListener = m, i.once = m, i.off = m, i.removeListener = m, i.removeAllListeners = m, i.emit = m, i.prependListener = m, i.prependOnceListener = m, i.listeners = function(e) {
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
                  },
              "./node_modules/query-string/index.js":
                  /*!********************************************!*\
                    !*** ./node_modules/query-string/index.js ***!
                    \********************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t, n) {
                      "use strict";
                      const r = n( /*! strict-uri-encode */ "./node_modules/strict-uri-encode/index.js"),
                          i = n( /*! decode-uri-component */ "./node_modules/decode-uri-component/index.js"),
                          o = n( /*! split-on-first */ "./node_modules/split-on-first/index.js");

                      function s(e) {
                          if ("string" != typeof e || 1 !== e.length) throw new TypeError("arrayFormatSeparator must be single character string")
                      }

                      function a(e, t) {
                          return t.encode ? t.strict ? r(e) : encodeURIComponent(e) : e
                      }

                      function u(e, t) {
                          return t.decode ? i(e) : e
                      }

                      function c(e) {
                          const t = e.indexOf("#");
                          return -1 !== t && (e = e.slice(0, t)), e
                      }

                      function l(e) {
                          const t = (e = c(e)).indexOf("?");
                          return -1 === t ? "" : e.slice(t + 1)
                      }

                      function d(e, t) {
                          return t.parseNumbers && !Number.isNaN(Number(e)) && "string" == typeof e && "" !== e.trim() ? e = Number(e) : !t.parseBooleans || null === e || "true" !== e.toLowerCase() && "false" !== e.toLowerCase() || (e = "true" === e.toLowerCase()), e
                      }

                      function f(e, t) {
                          s((t = Object.assign({
                              decode: !0,
                              sort: !0,
                              arrayFormat: "none",
                              arrayFormatSeparator: ",",
                              parseNumbers: !1,
                              parseBooleans: !1
                          }, t)).arrayFormatSeparator);
                          const n = function(e) {
                                  let t;
                                  switch (e.arrayFormat) {
                                      case "index":
                                          return (e, n, r) => {
                                              t = /\[(\d*)\]$/.exec(e), e = e.replace(/\[\d*\]$/, ""), t ? (void 0 === r[e] && (r[e] = {}), r[e][t[1]] = n) : r[e] = n
                                          };
                                      case "bracket":
                                          return (e, n, r) => {
                                              t = /(\[\])$/.exec(e), e = e.replace(/\[\]$/, ""), t ? void 0 !== r[e] ? r[e] = [].concat(r[e], n) : r[e] = [n] : r[e] = n
                                          };
                                      case "comma":
                                      case "separator":
                                          return (t, n, r) => {
                                              const i = "string" == typeof n && n.split("").indexOf(e.arrayFormatSeparator) > -1 ? n.split(e.arrayFormatSeparator).map(t => u(t, e)) : null === n ? n : u(n, e);
                                              r[t] = i
                                          };
                                      default:
                                          return (e, t, n) => {
                                              void 0 !== n[e] ? n[e] = [].concat(n[e], t) : n[e] = t
                                          }
                                  }
                              }(t),
                              r = Object.create(null);
                          if ("string" != typeof e) return r;
                          if (!(e = e.trim().replace(/^[?#&]/, ""))) return r;
                          for (const i of e.split("&")) {
                              let [e, s] = o(t.decode ? i.replace(/\+/g, " ") : i, "=");
                              s = void 0 === s ? null : ["comma", "separator"].includes(t.arrayFormat) ? s : u(s, t), n(u(e, t), s, r)
                          }
                          for (const e of Object.keys(r)) {
                              const n = r[e];
                              if ("object" == typeof n && null !== n)
                                  for (const e of Object.keys(n)) n[e] = d(n[e], t);
                              else r[e] = d(n, t)
                          }
                          return !1 === t.sort ? r : (!0 === t.sort ? Object.keys(r).sort() : Object.keys(r).sort(t.sort)).reduce((e, t) => {
                              const n = r[t];
                              return Boolean(n) && "object" == typeof n && !Array.isArray(n) ? e[t] = function e(t) {
                                  return Array.isArray(t) ? t.sort() : "object" == typeof t ? e(Object.keys(t)).sort((e, t) => Number(e) - Number(t)).map(e => t[e]) : t
                              }(n) : e[t] = n, e
                          }, Object.create(null))
                      }
                      t.extract = l, t.parse = f, t.stringify = (e, t) => {
                          if (!e) return "";
                          s((t = Object.assign({
                              encode: !0,
                              strict: !0,
                              arrayFormat: "none",
                              arrayFormatSeparator: ","
                          }, t)).arrayFormatSeparator);
                          const n = n => t.skipNull && null == e[n] || t.skipEmptyString && "" === e[n],
                              r = function(e) {
                                  switch (e.arrayFormat) {
                                      case "index":
                                          return t => (n, r) => {
                                              const i = n.length;
                                              return void 0 === r || e.skipNull && null === r || e.skipEmptyString && "" === r ? n : null === r ? [...n, [a(t, e), "[", i, "]"].join("")] : [...n, [a(t, e), "[", a(i, e), "]=", a(r, e)].join("")]
                                          };
                                      case "bracket":
                                          return t => (n, r) => void 0 === r || e.skipNull && null === r || e.skipEmptyString && "" === r ? n : null === r ? [...n, [a(t, e), "[]"].join("")] : [...n, [a(t, e), "[]=", a(r, e)].join("")];
                                      case "comma":
                                      case "separator":
                                          return t => (n, r) => null == r || 0 === r.length ? n : 0 === n.length ? [
                                              [a(t, e), "=", a(r, e)].join("")
                                          ] : [
                                              [n, a(r, e)].join(e.arrayFormatSeparator)
                                          ];
                                      default:
                                          return t => (n, r) => void 0 === r || e.skipNull && null === r || e.skipEmptyString && "" === r ? n : null === r ? [...n, a(t, e)] : [...n, [a(t, e), "=", a(r, e)].join("")]
                                  }
                              }(t),
                              i = {};
                          for (const t of Object.keys(e)) n(t) || (i[t] = e[t]);
                          const o = Object.keys(i);
                          return !1 !== t.sort && o.sort(t.sort), o.map(n => {
                              const i = e[n];
                              return void 0 === i ? "" : null === i ? a(n, t) : Array.isArray(i) ? i.reduce(r(n), []).join("&") : a(n, t) + "=" + a(i, t)
                          }).filter(e => e.length > 0).join("&")
                      }, t.parseUrl = (e, t) => ({
                          url: c(e).split("?")[0] || "",
                          query: f(l(e), t)
                      }), t.stringifyUrl = (e, n) => {
                          const r = c(e.url).split("?")[0] || "",
                              i = t.extract(e.url),
                              o = t.parse(i),
                              s = function(e) {
                                  let t = "";
                                  const n = e.indexOf("#");
                                  return -1 !== n && (t = e.slice(n)), t
                              }(e.url),
                              a = Object.assign(o, e.query);
                          let u = t.stringify(a, n);
                          return u && (u = "?" + u), `${r}${u}${s}`
                      }
                  },
              "./node_modules/sdp-interop/lib/array-equals.js":
                  /*!******************************************************!*\
                    !*** ./node_modules/sdp-interop/lib/array-equals.js ***!
                    \******************************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t) {
                      e.exports = function e(t) {
                          if (!t) return !1;
                          if (this.length != t.length) return !1;
                          for (var n = 0, r = this.length; n < r; n++)
                              if (this[n] instanceof Array && t[n] instanceof Array) {
                                  if (!e.apply(this[n], [t[n]])) return !1
                              } else if (this[n] != t[n]) return !1;
                          return !0
                      }
                  },
              "./node_modules/sdp-interop/lib/index.js":
                  /*!***********************************************!*\
                    !*** ./node_modules/sdp-interop/lib/index.js ***!
                    \***********************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t, n) {
                      t.Interop = n( /*! ./interop */ "./node_modules/sdp-interop/lib/interop.js")
                  },
              "./node_modules/sdp-interop/lib/interop.js":
                  /*!*************************************************!*\
                    !*** ./node_modules/sdp-interop/lib/interop.js ***!
                    \*************************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t, n) {
                      "use strict";
                      var r = n( /*! ./transform */ "./node_modules/sdp-interop/lib/transform.js"),
                          i = n( /*! ./array-equals */ "./node_modules/sdp-interop/lib/array-equals.js");

                      function o() {
                          this.cache = {
                              mlB2UMap: {},
                              mlU2BMap: {}
                          }
                      }
                      e.exports = o, o.prototype.candidateToUnifiedPlan = function(e) {
                          var t = new RTCIceCandidate(e);
                          return t.sdpMLineIndex = this.cache.mlB2UMap[t.sdpMLineIndex], t
                      }, o.prototype.candidateToPlanB = function(e) {
                          var t = new RTCIceCandidate(e);
                          if (0 === t.sdpMid.indexOf("audio")) t.sdpMid = "audio";
                          else {
                              if (0 !== t.sdpMid.indexOf("video")) throw new Error("candidate with " + t.sdpMid + " not allowed");
                              t.sdpMid = "video"
                          }
                          return t.sdpMLineIndex = this.cache.mlU2BMap[t.sdpMLineIndex], t
                      }, o.prototype.getFirstSendingIndexFromAnswer = function(e) {
                          if (!this.cache.answer) return null;
                          var t = r.parse(this.cache.answer);
                          if (t && t.media && Array.isArray(t.media))
                              for (var n = 0; n < t.media.length; n++)
                                  if (t.media[n].type == e && (!t.media[n].direction || "sendrecv" === t.media[n].direction || "sendonly" === t.media[n].direction)) return n;
                          return null
                      }, o.prototype.toPlanB = function(e) {
                          var t = this;
                          if ("object" != typeof e || null === e || "string" != typeof e.sdp) return console.warn("An empty description was passed as an argument."), e;
                          var n = r.parse(e.sdp);
                          if (void 0 === n.media || !Array.isArray(n.media) || 0 === n.media.length) return console.warn("The description has no media."), e;
                          if (n.media.length <= 3 && n.media.every((function(e) {
                                  return -1 !== ["video", "audio", "data"].indexOf(e.mid)
                              }))) return console.warn("This description does not look like Unified Plan."), e;
                          for (var i = e.sdp, o = !1, a = 0; a < n.media.length; a++) n.media[a].rtp.forEach((function(e) {
                              if ("NULL" === e.codec) {
                                  o = !0;
                                  var n = r.parse(t.cache.offer);
                                  e.codec = n.media[a].rtp[0].codec
                              }
                          }));
                          o && (i = r.write(n)), this.cache[e.type] = i;
                          var u = n.media;
                          n.media = [];
                          var c = {},
                              l = [],
                              d = {};
                          u.forEach((function(e) {
                              if (("string" != typeof e.rtcpMux || "rtcp-mux" !== e.rtcpMux) && "inactive" !== e.direction) throw new Error("Cannot convert to Plan B because m-lines without the rtcp-mux attribute were found.");
                              void 0 !== c[e.type] && "inactive" !== c[e.type].direction || (c[e.type] = e)
                          })), u.forEach((function(e) {
                              var t = e.type;
                              if ("application" === t) return n.media.push(e), void l.push(e.mid);
                              "object" == typeof e.sources && Object.keys(e.sources).forEach((function(n) {
                                  "object" != typeof c[t].sources && (c[t].sources = {}), c[t].sources[n] = e.sources[n], void 0 !== e.msid && (c[t].sources[n].msid = e.msid)
                              })), void 0 !== e.ssrcGroups && Array.isArray(e.ssrcGroups) && (void 0 !== c[t].ssrcGroups && Array.isArray(c[t].ssrcGroups) || (c[t].ssrcGroups = []), c[t].ssrcGroups = c[t].ssrcGroups.concat(e.ssrcGroups));
                              var r = e.direction;
                              d[t] = (d[t] || 0) | s[r || "inactive"], c[t] === e && (e.mid = t, delete e.bundleOnly, delete e.msid, "inactive" !== r && l.push(t), n.media.push(e))
                          })), n.groups.some((function(e) {
                              if ("BUNDLE" === e.type) return e.mids = l.join(" "), !0
                          })), n.msidSemantic = {
                              semantic: "WMS",
                              token: "*"
                          };
                          var f = r.write(n);
                          return new RTCSessionDescription({
                              type: e.type,
                              sdp: f
                          })
                      }, o.prototype.toUnifiedPlan = function(e) {
                          var t = this;
                          if ("object" != typeof e || null === e || "string" != typeof e.sdp) return console.warn("An empty description was passed as an argument."), e;
                          var n = r.parse(e.sdp);
                          if (void 0 === n.media || !Array.isArray(n.media) || 0 === n.media.length) return console.warn("The description has no media."), e;
                          if (n.media.length > 3 || !n.media.every((function(e) {
                                  return -1 !== ["video", "audio", "data"].indexOf(e.mid)
                              }))) return console.warn("This description does not look like Plan B."), e;
                          var o = [];
                          n.media.forEach((function(e) {
                              o.push(e.mid)
                          }));
                          var s, a = !1;
                          if (void 0 !== n.groups && Array.isArray(n.groups) && (a = n.groups.every((function(e) {
                                  return "BUNDLE" !== e.type || i.apply(e.mids.sort(), [o.sort()])
                              }))), !a) throw new Error("Cannot convert to Unified Plan because m-lines that are not bundled were found.");
                          void 0 !== this.cache[e.type] && (s = r.parse(this.cache[e.type]));
                          var u = {
                                  audio: {},
                                  video: {}
                              },
                              c = {},
                              l = 0,
                              d = 0;
                          if (n.media.forEach((function(n) {
                                  if (("string" != typeof n.rtcpMux || "rtcp-mux" !== n.rtcpMux) && "inactive" !== n.direction) throw new Error("Cannot convert to Unified Plan because m-lines without the rtcp-mux attribute were found.");
                                  if ("application" !== n.type) {
                                      var r = n.sources,
                                          i = n.ssrcGroups,
                                          o = n.candidates,
                                          a = n.iceUfrag,
                                          f = n.icePwd,
                                          p = n.fingerprint,
                                          h = n.port;
                                      delete n.sources, delete n.ssrcGroups, delete n.candidates, delete n.iceUfrag, delete n.icePwd, delete n.fingerprint, delete n.port, delete n.mid;
                                      var m = {};
                                      void 0 !== i && Array.isArray(i) && i.forEach((function(e) {
                                          "SIM" !== e.semantics && void 0 !== e.ssrcs && Array.isArray(e.ssrcs) && e.ssrcs.forEach((function(t) {
                                              void 0 === m[t] && (m[t] = []), m[t].push(e)
                                          }))
                                      }));
                                      var g = {};
                                      "object" == typeof r && Object.keys(r).forEach((function(i) {
                                          var y;
                                          if ("offer" !== e.type || r[i].msid)
                                              if (void 0 !== m[i] && Array.isArray(m[i]) && m[i].some((function(e) {
                                                      return e.ssrcs.some((function(e) {
                                                          if ("object" == typeof g[e]) return y = g[e], !0
                                                      }))
                                                  })), "object" == typeof y) y.sources[i] = r[i], delete r[i].msid;
                                              else {
                                                  if (y = Object.create(n), g[i] = y, void 0 !== r[i].msid && (y.msid = r[i].msid, delete r[i].msid), y.sources = {}, y.sources[i] = r[i], y.ssrcGroups = m[i], void 0 !== s && void 0 !== s.media && Array.isArray(s.media) && s.media.forEach((function(e) {
                                                          "object" == typeof e.sources && Object.keys(e.sources).forEach((function(t) {
                                                              t === i && (y.mid = e.mid)
                                                          }))
                                                      })), void 0 === y.mid) {
                                                      if ("answer" === e.type) throw new Error("An unmapped SSRC was found.");
                                                      y.mid = [n.type, "-", i].join("")
                                                  }
                                                  y.candidates = o, y.iceUfrag = a, y.icePwd = f, y.fingerprint = p, y.port = h, c[y.mid] = y, t.cache.mlU2BMap[d] = l, void 0 === t.cache.mlB2UMap[l] && (t.cache.mlB2UMap[l] = d), d++
                                              }
                                          else u[n.type][i] = r[i]
                                      })), l++
                                  } else c[n.mid] = n
                              })), n.media = [], o = [], "answer" === e.type)
                              for (var f = 0; f < s.media.length; f++) {
                                  var p = s.media[f];
                                  void 0 === c[p.mid] && (delete p.msid, delete p.sources, delete p.ssrcGroups, p.direction && "sendrecv" !== p.direction ? "sendonly" === p.direction && (p.direction = "inactive") : p.direction = "recvonly"), n.media.push(p), "string" == typeof p.mid && o.push(p.mid)
                              } else void 0 !== s && void 0 !== s.media && Array.isArray(s.media) && s.media.forEach((function(e) {
                                  o.push(e.mid), void 0 !== c[e.mid] ? n.media.push(c[e.mid]) : (delete e.msid, delete e.sources, delete e.ssrcGroups, e.direction && "sendrecv" !== e.direction || (e.direction = "recvonly"), e.direction && "sendonly" !== e.direction || (e.direction = "inactive"), n.media.push(e))
                              })), Object.keys(c).forEach((function(e) {
                                  -1 === o.indexOf(e) && (o.push(e), "recvonly" === c[e].direction ? n.media.some((function(t) {
                                      if (("sendrecv" === t.direction || "sendonly" === t.direction) && t.type === c[e].type) return Object.keys(c[e].sources).forEach((function(n) {
                                          t.sources[n] = c[e].sources[n]
                                      })), !0
                                  })) : n.media.push(c[e]))
                              }));
                          ["audio", "video"].forEach((function(e) {
                              if (n && n.media && Array.isArray(n.media)) {
                                  var r = null;
                                  if (Object.keys(u[e]).length > 0 && null === (r = t.getFirstSendingIndexFromAnswer(e)))
                                      for (var i = 0; i < n.media.length; i++)
                                          if (n.media[i].type === e) {
                                              r = i;
                                              break
                                          } if (r && n.media.length > r) {
                                      var o = n.media[r];
                                      Object.keys(u[e]).forEach((function(t) {
                                          o.sources && o.sources[t] && console.warn("Replacing an existing SSRC."), o.sources || (o.sources = {}), o.sources[t] = u[e][t]
                                      }))
                                  }
                              }
                          })), n.groups.some((function(e) {
                              if ("BUNDLE" === e.type) return e.mids = o.join(" "), !0
                          })), n.msidSemantic = {
                              semantic: "WMS",
                              token: "*"
                          };
                          var h = r.write(n);
                          return this.cache[e.type] = h, new RTCSessionDescription({
                              type: e.type,
                              sdp: h
                          })
                      };
                      var s = {
                          inactive: 0,
                          recvonly: 1,
                          sendonly: 2,
                          sendrecv: 3
                      }
                  },
              "./node_modules/sdp-interop/lib/transform.js":
                  /*!***************************************************!*\
                    !*** ./node_modules/sdp-interop/lib/transform.js ***!
                    \***************************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t, n) {
                      var r = n( /*! sdp-transform */ "./node_modules/sdp-interop/node_modules/sdp-transform/lib/index.js");
                      t.write = function(e, t) {
                          return void 0 !== e && void 0 !== e.media && Array.isArray(e.media) && e.media.forEach((function(e) {
                              void 0 !== e.sources && 0 !== Object.keys(e.sources).length && (e.ssrcs = [], Object.keys(e.sources).forEach((function(t) {
                                  var n = e.sources[t];
                                  Object.keys(n).forEach((function(r) {
                                      e.ssrcs.push({
                                          id: t,
                                          attribute: r,
                                          value: n[r]
                                      })
                                  }))
                              })), delete e.sources), void 0 !== e.ssrcGroups && Array.isArray(e.ssrcGroups) && e.ssrcGroups.forEach((function(e) {
                                  void 0 !== e.ssrcs && Array.isArray(e.ssrcs) && (e.ssrcs = e.ssrcs.join(" "))
                              }))
                          })), void 0 !== e && void 0 !== e.groups && Array.isArray(e.groups) && e.groups.forEach((function(e) {
                              void 0 !== e.mids && Array.isArray(e.mids) && (e.mids = e.mids.join(" "))
                          })), r.write(e, t)
                      }, t.parse = function(e) {
                          var t = r.parse(e);
                          return void 0 !== t && void 0 !== t.media && Array.isArray(t.media) && t.media.forEach((function(e) {
                              void 0 !== e.ssrcs && Array.isArray(e.ssrcs) && (e.sources = {}, e.ssrcs.forEach((function(t) {
                                  e.sources[t.id] || (e.sources[t.id] = {}), e.sources[t.id][t.attribute] = t.value
                              })), delete e.ssrcs), void 0 !== e.ssrcGroups && Array.isArray(e.ssrcGroups) && e.ssrcGroups.forEach((function(e) {
                                  "string" == typeof e.ssrcs && (e.ssrcs = e.ssrcs.split(" "))
                              }))
                          })), void 0 !== t && void 0 !== t.groups && Array.isArray(t.groups) && t.groups.forEach((function(e) {
                              "string" == typeof e.mids && (e.mids = e.mids.split(" "))
                          })), t
                      }
                  },
              "./node_modules/sdp-interop/node_modules/sdp-transform/lib/grammar.js":
                  /*!****************************************************************************!*\
                    !*** ./node_modules/sdp-interop/node_modules/sdp-transform/lib/grammar.js ***!
                    \****************************************************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t) {
                      var n = e.exports = {
                          v: [{
                              name: "version",
                              reg: /^(\d*)$/
                          }],
                          o: [{
                              name: "origin",
                              reg: /^(\S*) (\d*) (\d*) (\S*) IP(\d) (\S*)/,
                              names: ["username", "sessionId", "sessionVersion", "netType", "ipVer", "address"],
                              format: "%s %s %d %s IP%d %s"
                          }],
                          s: [{
                              name: "name"
                          }],
                          i: [{
                              name: "description"
                          }],
                          u: [{
                              name: "uri"
                          }],
                          e: [{
                              name: "email"
                          }],
                          p: [{
                              name: "phone"
                          }],
                          z: [{
                              name: "timezones"
                          }],
                          r: [{
                              name: "repeats"
                          }],
                          t: [{
                              name: "timing",
                              reg: /^(\d*) (\d*)/,
                              names: ["start", "stop"],
                              format: "%d %d"
                          }],
                          c: [{
                              name: "connection",
                              reg: /^IN IP(\d) (\S*)/,
                              names: ["version", "ip"],
                              format: "IN IP%d %s"
                          }],
                          b: [{
                              push: "bandwidth",
                              reg: /^(TIAS|AS|CT|RR|RS):(\d*)/,
                              names: ["type", "limit"],
                              format: "%s:%s"
                          }],
                          m: [{
                              reg: /^(\w*) (\d*) ([\w\/]*)(?: (.*))?/,
                              names: ["type", "port", "protocol", "payloads"],
                              format: "%s %d %s %s"
                          }],
                          a: [{
                              push: "rtp",
                              reg: /^rtpmap:(\d*) ([\w\-\.]*)(?:\s*\/(\d*)(?:\s*\/(\S*))?)?/,
                              names: ["payload", "codec", "rate", "encoding"],
                              format: function(e) {
                                  return e.encoding ? "rtpmap:%d %s/%s/%s" : e.rate ? "rtpmap:%d %s/%s" : "rtpmap:%d %s"
                              }
                          }, {
                              push: "fmtp",
                              reg: /^fmtp:(\d*) ([\S| ]*)/,
                              names: ["payload", "config"],
                              format: "fmtp:%d %s"
                          }, {
                              name: "control",
                              reg: /^control:(.*)/,
                              format: "control:%s"
                          }, {
                              name: "rtcp",
                              reg: /^rtcp:(\d*)(?: (\S*) IP(\d) (\S*))?/,
                              names: ["port", "netType", "ipVer", "address"],
                              format: function(e) {
                                  return null != e.address ? "rtcp:%d %s IP%d %s" : "rtcp:%d"
                              }
                          }, {
                              push: "rtcpFbTrrInt",
                              reg: /^rtcp-fb:(\*|\d*) trr-int (\d*)/,
                              names: ["payload", "value"],
                              format: "rtcp-fb:%d trr-int %d"
                          }, {
                              push: "rtcpFb",
                              reg: /^rtcp-fb:(\*|\d*) ([\w-_]*)(?: ([\w-_]*))?/,
                              names: ["payload", "type", "subtype"],
                              format: function(e) {
                                  return null != e.subtype ? "rtcp-fb:%s %s %s" : "rtcp-fb:%s %s"
                              }
                          }, {
                              push: "ext",
                              reg: /^extmap:(\d+)(?:\/(\w+))? (\S*)(?: (\S*))?/,
                              names: ["value", "direction", "uri", "config"],
                              format: function(e) {
                                  return "extmap:%d" + (e.direction ? "/%s" : "%v") + " %s" + (e.config ? " %s" : "")
                              }
                          }, {
                              push: "crypto",
                              reg: /^crypto:(\d*) ([\w_]*) (\S*)(?: (\S*))?/,
                              names: ["id", "suite", "config", "sessionConfig"],
                              format: function(e) {
                                  return null != e.sessionConfig ? "crypto:%d %s %s %s" : "crypto:%d %s %s"
                              }
                          }, {
                              name: "setup",
                              reg: /^setup:(\w*)/,
                              format: "setup:%s"
                          }, {
                              name: "mid",
                              reg: /^mid:([^\s]*)/,
                              format: "mid:%s"
                          }, {
                              name: "msid",
                              reg: /^msid:(.*)/,
                              format: "msid:%s"
                          }, {
                              name: "ptime",
                              reg: /^ptime:(\d*)/,
                              format: "ptime:%d"
                          }, {
                              name: "maxptime",
                              reg: /^maxptime:(\d*)/,
                              format: "maxptime:%d"
                          }, {
                              name: "direction",
                              reg: /^(sendrecv|recvonly|sendonly|inactive)/
                          }, {
                              name: "icelite",
                              reg: /^(ice-lite)/
                          }, {
                              name: "iceUfrag",
                              reg: /^ice-ufrag:(\S*)/,
                              format: "ice-ufrag:%s"
                          }, {
                              name: "icePwd",
                              reg: /^ice-pwd:(\S*)/,
                              format: "ice-pwd:%s"
                          }, {
                              name: "fingerprint",
                              reg: /^fingerprint:(\S*) (\S*)/,
                              names: ["type", "hash"],
                              format: "fingerprint:%s %s"
                          }, {
                              push: "candidates",
                              reg: /^candidate:(\S*) (\d*) (\S*) (\d*) (\S*) (\d*) typ (\S*)(?: raddr (\S*) rport (\d*))?(?: tcptype (\S*))?(?: generation (\d*))?(?: network-id (\d*))?(?: network-cost (\d*))?/,
                              names: ["foundation", "component", "transport", "priority", "ip", "port", "type", "raddr", "rport", "tcptype", "generation", "network-id", "network-cost"],
                              format: function(e) {
                                  var t = "candidate:%s %d %s %d %s %d typ %s";
                                  return t += null != e.raddr ? " raddr %s rport %d" : "%v%v", t += null != e.tcptype ? " tcptype %s" : "%v", null != e.generation && (t += " generation %d"), t += null != e["network-id"] ? " network-id %d" : "%v", t += null != e["network-cost"] ? " network-cost %d" : "%v"
                              }
                          }, {
                              name: "endOfCandidates",
                              reg: /^(end-of-candidates)/
                          }, {
                              name: "remoteCandidates",
                              reg: /^remote-candidates:(.*)/,
                              format: "remote-candidates:%s"
                          }, {
                              name: "iceOptions",
                              reg: /^ice-options:(\S*)/,
                              format: "ice-options:%s"
                          }, {
                              push: "ssrcs",
                              reg: /^ssrc:(\d*) ([\w_]*)(?::(.*))?/,
                              names: ["id", "attribute", "value"],
                              format: function(e) {
                                  var t = "ssrc:%d";
                                  return null != e.attribute && (t += " %s", null != e.value && (t += ":%s")), t
                              }
                          }, {
                              push: "ssrcGroups",
                              reg: /^ssrc-group:([\x21\x23\x24\x25\x26\x27\x2A\x2B\x2D\x2E\w]*) (.*)/,
                              names: ["semantics", "ssrcs"],
                              format: "ssrc-group:%s %s"
                          }, {
                              name: "msidSemantic",
                              reg: /^msid-semantic:\s?(\w*) (\S*)/,
                              names: ["semantic", "token"],
                              format: "msid-semantic: %s %s"
                          }, {
                              push: "groups",
                              reg: /^group:(\w*) (.*)/,
                              names: ["type", "mids"],
                              format: "group:%s %s"
                          }, {
                              name: "rtcpMux",
                              reg: /^(rtcp-mux)/
                          }, {
                              name: "rtcpRsize",
                              reg: /^(rtcp-rsize)/
                          }, {
                              name: "sctpmap",
                              reg: /^sctpmap:([\w_\/]*) (\S*)(?: (\S*))?/,
                              names: ["sctpmapNumber", "app", "maxMessageSize"],
                              format: function(e) {
                                  return null != e.maxMessageSize ? "sctpmap:%s %s %s" : "sctpmap:%s %s"
                              }
                          }, {
                              name: "xGoogleFlag",
                              reg: /^x-google-flag:([^\s]*)/,
                              format: "x-google-flag:%s"
                          }, {
                              push: "rids",
                              reg: /^rid:([\d\w]+) (\w+)(?: ([\S| ]*))?/,
                              names: ["id", "direction", "params"],
                              format: function(e) {
                                  return e.params ? "rid:%s %s %s" : "rid:%s %s"
                              }
                          }, {
                              push: "imageattrs",
                              reg: new RegExp("^imageattr:(\\d+|\\*)[\\s\\t]+(send|recv)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*)(?:[\\s\\t]+(recv|send)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*))?"),
                              names: ["pt", "dir1", "attrs1", "dir2", "attrs2"],
                              format: function(e) {
                                  return "imageattr:%s %s %s" + (e.dir2 ? " %s %s" : "")
                              }
                          }, {
                              name: "simulcast",
                              reg: new RegExp("^simulcast:(send|recv) ([a-zA-Z0-9\\-_~;,]+)(?:\\s?(send|recv) ([a-zA-Z0-9\\-_~;,]+))?$"),
                              names: ["dir1", "list1", "dir2", "list2"],
                              format: function(e) {
                                  return "simulcast:%s %s" + (e.dir2 ? " %s %s" : "")
                              }
                          }, {
                              name: "simulcast_03",
                              reg: /^simulcast:[\s\t]+([\S+\s\t]+)$/,
                              names: ["value"],
                              format: "simulcast: %s"
                          }, {
                              name: "framerate",
                              reg: /^framerate:(\d+(?:$|\.\d+))/,
                              format: "framerate:%s"
                          }, {
                              push: "invalid",
                              names: ["value"]
                          }]
                      };
                      Object.keys(n).forEach((function(e) {
                          n[e].forEach((function(e) {
                              e.reg || (e.reg = /(.*)/), e.format || (e.format = "%s")
                          }))
                      }))
                  },
              "./node_modules/sdp-interop/node_modules/sdp-transform/lib/index.js":
                  /*!**************************************************************************!*\
                    !*** ./node_modules/sdp-interop/node_modules/sdp-transform/lib/index.js ***!
                    \**************************************************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t, n) {
                      var r = n( /*! ./parser */ "./node_modules/sdp-interop/node_modules/sdp-transform/lib/parser.js"),
                          i = n( /*! ./writer */ "./node_modules/sdp-interop/node_modules/sdp-transform/lib/writer.js");
                      t.write = i, t.parse = r.parse, t.parseFmtpConfig = r.parseFmtpConfig, t.parseParams = r.parseParams, t.parsePayloads = r.parsePayloads, t.parseRemoteCandidates = r.parseRemoteCandidates, t.parseImageAttributes = r.parseImageAttributes, t.parseSimulcastStreamList = r.parseSimulcastStreamList
                  },
              "./node_modules/sdp-interop/node_modules/sdp-transform/lib/parser.js":
                  /*!***************************************************************************!*\
                    !*** ./node_modules/sdp-interop/node_modules/sdp-transform/lib/parser.js ***!
                    \***************************************************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t, n) {
                      var r = function(e) {
                              return String(Number(e)) === e ? Number(e) : e
                          },
                          i = function(e, t, n) {
                              var i = e.name && e.names;
                              e.push && !t[e.push] ? t[e.push] = [] : i && !t[e.name] && (t[e.name] = {});
                              var o = e.push ? {} : i ? t[e.name] : t;
                              ! function(e, t, n, i) {
                                  if (i && !n) t[i] = r(e[1]);
                                  else
                                      for (var o = 0; o < n.length; o += 1) null != e[o + 1] && (t[n[o]] = r(e[o + 1]))
                              }(n.match(e.reg), o, e.names, e.name), e.push && t[e.push].push(o)
                          },
                          o = n( /*! ./grammar */ "./node_modules/sdp-interop/node_modules/sdp-transform/lib/grammar.js"),
                          s = RegExp.prototype.test.bind(/^([a-z])=(.*)/);
                      t.parse = function(e) {
                          var t = {},
                              n = [],
                              r = t;
                          return e.split(/(\r\n|\r|\n)/).filter(s).forEach((function(e) {
                              var t = e[0],
                                  s = e.slice(2);
                              "m" === t && (n.push({
                                  rtp: [],
                                  fmtp: []
                              }), r = n[n.length - 1]);
                              for (var a = 0; a < (o[t] || []).length; a += 1) {
                                  var u = o[t][a];
                                  if (u.reg.test(s)) return i(u, r, s)
                              }
                          })), t.media = n, t
                      };
                      var a = function(e, t) {
                          var n = t.split(/=(.+)/, 2);
                          return 2 === n.length && (e[n[0]] = r(n[1])), e
                      };
                      t.parseParams = function(e) {
                          return e.split(/\;\s?/).reduce(a, {})
                      }, t.parseFmtpConfig = t.parseParams, t.parsePayloads = function(e) {
                          return e.split(" ").map(Number)
                      }, t.parseRemoteCandidates = function(e) {
                          for (var t = [], n = e.split(" ").map(r), i = 0; i < n.length; i += 3) t.push({
                              component: n[i],
                              ip: n[i + 1],
                              port: n[i + 2]
                          });
                          return t
                      }, t.parseImageAttributes = function(e) {
                          return e.split(" ").map((function(e) {
                              return e.substring(1, e.length - 1).split(",").reduce(a, {})
                          }))
                      }, t.parseSimulcastStreamList = function(e) {
                          return e.split(";").map((function(e) {
                              return e.split(",").map((function(e) {
                                  var t, n = !1;
                                  return "~" !== e[0] ? t = r(e) : (t = r(e.substring(1, e.length)), n = !0), {
                                      scid: t,
                                      paused: n
                                  }
                              }))
                          }))
                      }
                  },
              "./node_modules/sdp-interop/node_modules/sdp-transform/lib/writer.js":
                  /*!***************************************************************************!*\
                    !*** ./node_modules/sdp-interop/node_modules/sdp-transform/lib/writer.js ***!
                    \***************************************************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t, n) {
                      var r = n( /*! ./grammar */ "./node_modules/sdp-interop/node_modules/sdp-transform/lib/grammar.js"),
                          i = /%[sdv%]/g,
                          o = function(e) {
                              var t = 1,
                                  n = arguments,
                                  r = n.length;
                              return e.replace(i, (function(e) {
                                  if (t >= r) return e;
                                  var i = n[t];
                                  switch (t += 1, e) {
                                      case "%%":
                                          return "%";
                                      case "%s":
                                          return String(i);
                                      case "%d":
                                          return Number(i);
                                      case "%v":
                                          return ""
                                  }
                              }))
                          },
                          s = function(e, t, n) {
                              var r = [e + "=" + (t.format instanceof Function ? t.format(t.push ? n : n[t.name]) : t.format)];
                              if (t.names)
                                  for (var i = 0; i < t.names.length; i += 1) {
                                      var s = t.names[i];
                                      t.name ? r.push(n[t.name][s]) : r.push(n[t.names[i]])
                                  } else r.push(n[t.name]);
                              return o.apply(null, r)
                          },
                          a = ["v", "o", "s", "i", "u", "e", "p", "c", "b", "t", "r", "z", "a"],
                          u = ["i", "c", "b", "a"];
                      e.exports = function(e, t) {
                          t = t || {}, null == e.version && (e.version = 0), null == e.name && (e.name = " "), e.media.forEach((function(e) {
                              null == e.payloads && (e.payloads = "")
                          }));
                          var n = t.outerOrder || a,
                              i = t.innerOrder || u,
                              o = [];
                          return n.forEach((function(t) {
                              r[t].forEach((function(n) {
                                  n.name in e && null != e[n.name] ? o.push(s(t, n, e)) : n.push in e && null != e[n.push] && e[n.push].forEach((function(e) {
                                      o.push(s(t, n, e))
                                  }))
                              }))
                          })), e.media.forEach((function(e) {
                              o.push(s("m", r.m[0], e)), i.forEach((function(t) {
                                  r[t].forEach((function(n) {
                                      n.name in e && null != e[n.name] ? o.push(s(t, n, e)) : n.push in e && null != e[n.push] && e[n.push].forEach((function(e) {
                                          o.push(s(t, n, e))
                                      }))
                                  }))
                              }))
                          })), o.join("\r\n") + "\r\n"
                      }
                  },
              "./node_modules/sdp-transform/lib/grammar.js":
                  /*!***************************************************!*\
                    !*** ./node_modules/sdp-transform/lib/grammar.js ***!
                    \***************************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t) {
                      var n = e.exports = {
                          v: [{
                              name: "version",
                              reg: /^(\d*)$/
                          }],
                          o: [{
                              name: "origin",
                              reg: /^(\S*) (\d*) (\d*) (\S*) IP(\d) (\S*)/,
                              names: ["username", "sessionId", "sessionVersion", "netType", "ipVer", "address"],
                              format: "%s %s %d %s IP%d %s"
                          }],
                          s: [{
                              name: "name"
                          }],
                          i: [{
                              name: "description"
                          }],
                          u: [{
                              name: "uri"
                          }],
                          e: [{
                              name: "email"
                          }],
                          p: [{
                              name: "phone"
                          }],
                          z: [{
                              name: "timezones"
                          }],
                          r: [{
                              name: "repeats"
                          }],
                          t: [{
                              name: "timing",
                              reg: /^(\d*) (\d*)/,
                              names: ["start", "stop"],
                              format: "%d %d"
                          }],
                          c: [{
                              name: "connection",
                              reg: /^IN IP(\d) (\S*)/,
                              names: ["version", "ip"],
                              format: "IN IP%d %s"
                          }],
                          b: [{
                              push: "bandwidth",
                              reg: /^(TIAS|AS|CT|RR|RS):(\d*)/,
                              names: ["type", "limit"],
                              format: "%s:%s"
                          }],
                          m: [{
                              reg: /^(\w*) (\d*) ([\w/]*)(?: (.*))?/,
                              names: ["type", "port", "protocol", "payloads"],
                              format: "%s %d %s %s"
                          }],
                          a: [{
                              push: "rtp",
                              reg: /^rtpmap:(\d*) ([\w\-.]*)(?:\s*\/(\d*)(?:\s*\/(\S*))?)?/,
                              names: ["payload", "codec", "rate", "encoding"],
                              format: function(e) {
                                  return e.encoding ? "rtpmap:%d %s/%s/%s" : e.rate ? "rtpmap:%d %s/%s" : "rtpmap:%d %s"
                              }
                          }, {
                              push: "fmtp",
                              reg: /^fmtp:(\d*) ([\S| ]*)/,
                              names: ["payload", "config"],
                              format: "fmtp:%d %s"
                          }, {
                              name: "control",
                              reg: /^control:(.*)/,
                              format: "control:%s"
                          }, {
                              name: "rtcp",
                              reg: /^rtcp:(\d*)(?: (\S*) IP(\d) (\S*))?/,
                              names: ["port", "netType", "ipVer", "address"],
                              format: function(e) {
                                  return null != e.address ? "rtcp:%d %s IP%d %s" : "rtcp:%d"
                              }
                          }, {
                              push: "rtcpFbTrrInt",
                              reg: /^rtcp-fb:(\*|\d*) trr-int (\d*)/,
                              names: ["payload", "value"],
                              format: "rtcp-fb:%d trr-int %d"
                          }, {
                              push: "rtcpFb",
                              reg: /^rtcp-fb:(\*|\d*) ([\w-_]*)(?: ([\w-_]*))?/,
                              names: ["payload", "type", "subtype"],
                              format: function(e) {
                                  return null != e.subtype ? "rtcp-fb:%s %s %s" : "rtcp-fb:%s %s"
                              }
                          }, {
                              push: "ext",
                              reg: /^extmap:(\d+)(?:\/(\w+))?(?: (urn:ietf:params:rtp-hdrext:encrypt))? (\S*)(?: (\S*))?/,
                              names: ["value", "direction", "encrypt-uri", "uri", "config"],
                              format: function(e) {
                                  return "extmap:%d" + (e.direction ? "/%s" : "%v") + (e["encrypt-uri"] ? " %s" : "%v") + " %s" + (e.config ? " %s" : "")
                              }
                          }, {
                              name: "extmapAllowMixed",
                              reg: /^(extmap-allow-mixed)/
                          }, {
                              push: "crypto",
                              reg: /^crypto:(\d*) ([\w_]*) (\S*)(?: (\S*))?/,
                              names: ["id", "suite", "config", "sessionConfig"],
                              format: function(e) {
                                  return null != e.sessionConfig ? "crypto:%d %s %s %s" : "crypto:%d %s %s"
                              }
                          }, {
                              name: "setup",
                              reg: /^setup:(\w*)/,
                              format: "setup:%s"
                          }, {
                              name: "connectionType",
                              reg: /^connection:(new|existing)/,
                              format: "connection:%s"
                          }, {
                              name: "mid",
                              reg: /^mid:([^\s]*)/,
                              format: "mid:%s"
                          }, {
                              name: "msid",
                              reg: /^msid:(.*)/,
                              format: "msid:%s"
                          }, {
                              name: "ptime",
                              reg: /^ptime:(\d*(?:\.\d*)*)/,
                              format: "ptime:%d"
                          }, {
                              name: "maxptime",
                              reg: /^maxptime:(\d*(?:\.\d*)*)/,
                              format: "maxptime:%d"
                          }, {
                              name: "direction",
                              reg: /^(sendrecv|recvonly|sendonly|inactive)/
                          }, {
                              name: "icelite",
                              reg: /^(ice-lite)/
                          }, {
                              name: "iceUfrag",
                              reg: /^ice-ufrag:(\S*)/,
                              format: "ice-ufrag:%s"
                          }, {
                              name: "icePwd",
                              reg: /^ice-pwd:(\S*)/,
                              format: "ice-pwd:%s"
                          }, {
                              name: "fingerprint",
                              reg: /^fingerprint:(\S*) (\S*)/,
                              names: ["type", "hash"],
                              format: "fingerprint:%s %s"
                          }, {
                              push: "candidates",
                              reg: /^candidate:(\S*) (\d*) (\S*) (\d*) (\S*) (\d*) typ (\S*)(?: raddr (\S*) rport (\d*))?(?: tcptype (\S*))?(?: generation (\d*))?(?: network-id (\d*))?(?: network-cost (\d*))?/,
                              names: ["foundation", "component", "transport", "priority", "ip", "port", "type", "raddr", "rport", "tcptype", "generation", "network-id", "network-cost"],
                              format: function(e) {
                                  var t = "candidate:%s %d %s %d %s %d typ %s";
                                  return t += null != e.raddr ? " raddr %s rport %d" : "%v%v", t += null != e.tcptype ? " tcptype %s" : "%v", null != e.generation && (t += " generation %d"), t += null != e["network-id"] ? " network-id %d" : "%v", t += null != e["network-cost"] ? " network-cost %d" : "%v"
                              }
                          }, {
                              name: "endOfCandidates",
                              reg: /^(end-of-candidates)/
                          }, {
                              name: "remoteCandidates",
                              reg: /^remote-candidates:(.*)/,
                              format: "remote-candidates:%s"
                          }, {
                              name: "iceOptions",
                              reg: /^ice-options:(\S*)/,
                              format: "ice-options:%s"
                          }, {
                              push: "ssrcs",
                              reg: /^ssrc:(\d*) ([\w_-]*)(?::(.*))?/,
                              names: ["id", "attribute", "value"],
                              format: function(e) {
                                  var t = "ssrc:%d";
                                  return null != e.attribute && (t += " %s", null != e.value && (t += ":%s")), t
                              }
                          }, {
                              push: "ssrcGroups",
                              reg: /^ssrc-group:([\x21\x23\x24\x25\x26\x27\x2A\x2B\x2D\x2E\w]*) (.*)/,
                              names: ["semantics", "ssrcs"],
                              format: "ssrc-group:%s %s"
                          }, {
                              name: "msidSemantic",
                              reg: /^msid-semantic:\s?(\w*) (\S*)/,
                              names: ["semantic", "token"],
                              format: "msid-semantic: %s %s"
                          }, {
                              push: "groups",
                              reg: /^group:(\w*) (.*)/,
                              names: ["type", "mids"],
                              format: "group:%s %s"
                          }, {
                              name: "rtcpMux",
                              reg: /^(rtcp-mux)/
                          }, {
                              name: "rtcpRsize",
                              reg: /^(rtcp-rsize)/
                          }, {
                              name: "sctpmap",
                              reg: /^sctpmap:([\w_/]*) (\S*)(?: (\S*))?/,
                              names: ["sctpmapNumber", "app", "maxMessageSize"],
                              format: function(e) {
                                  return null != e.maxMessageSize ? "sctpmap:%s %s %s" : "sctpmap:%s %s"
                              }
                          }, {
                              name: "xGoogleFlag",
                              reg: /^x-google-flag:([^\s]*)/,
                              format: "x-google-flag:%s"
                          }, {
                              push: "rids",
                              reg: /^rid:([\d\w]+) (\w+)(?: ([\S| ]*))?/,
                              names: ["id", "direction", "params"],
                              format: function(e) {
                                  return e.params ? "rid:%s %s %s" : "rid:%s %s"
                              }
                          }, {
                              push: "imageattrs",
                              reg: new RegExp("^imageattr:(\\d+|\\*)[\\s\\t]+(send|recv)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*)(?:[\\s\\t]+(recv|send)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*))?"),
                              names: ["pt", "dir1", "attrs1", "dir2", "attrs2"],
                              format: function(e) {
                                  return "imageattr:%s %s %s" + (e.dir2 ? " %s %s" : "")
                              }
                          }, {
                              name: "simulcast",
                              reg: new RegExp("^simulcast:(send|recv) ([a-zA-Z0-9\\-_~;,]+)(?:\\s?(send|recv) ([a-zA-Z0-9\\-_~;,]+))?$"),
                              names: ["dir1", "list1", "dir2", "list2"],
                              format: function(e) {
                                  return "simulcast:%s %s" + (e.dir2 ? " %s %s" : "")
                              }
                          }, {
                              name: "simulcast_03",
                              reg: /^simulcast:[\s\t]+([\S+\s\t]+)$/,
                              names: ["value"],
                              format: "simulcast: %s"
                          }, {
                              name: "framerate",
                              reg: /^framerate:(\d+(?:$|\.\d+))/,
                              format: "framerate:%s"
                          }, {
                              name: "sourceFilter",
                              reg: /^source-filter: *(excl|incl) (\S*) (IP4|IP6|\*) (\S*) (.*)/,
                              names: ["filterMode", "netType", "addressTypes", "destAddress", "srcList"],
                              format: "source-filter: %s %s %s %s %s"
                          }, {
                              name: "bundleOnly",
                              reg: /^(bundle-only)/
                          }, {
                              name: "label",
                              reg: /^label:(.+)/,
                              format: "label:%s"
                          }, {
                              name: "sctpPort",
                              reg: /^sctp-port:(\d+)$/,
                              format: "sctp-port:%s"
                          }, {
                              name: "maxMessageSize",
                              reg: /^max-message-size:(\d+)$/,
                              format: "max-message-size:%s"
                          }, {
                              push: "tsRefClocks",
                              reg: /^ts-refclk:([^\s=]*)(?:=(\S*))?/,
                              names: ["clksrc", "clksrcExt"],
                              format: function(e) {
                                  return "ts-refclk:%s" + (null != e.clksrcExt ? "=%s" : "")
                              }
                          }, {
                              name: "mediaClk",
                              reg: /^mediaclk:(?:id=(\S*))? *([^\s=]*)(?:=(\S*))?(?: *rate=(\d+)\/(\d+))?/,
                              names: ["id", "mediaClockName", "mediaClockValue", "rateNumerator", "rateDenominator"],
                              format: function(e) {
                                  var t = "mediaclk:";
                                  return t += null != e.id ? "id=%s %s" : "%v%s", t += null != e.mediaClockValue ? "=%s" : "", t += null != e.rateNumerator ? " rate=%s" : "", t += null != e.rateDenominator ? "/%s" : ""
                              }
                          }, {
                              name: "keywords",
                              reg: /^keywds:(.+)$/,
                              format: "keywds:%s"
                          }, {
                              name: "content",
                              reg: /^content:(.+)/,
                              format: "content:%s"
                          }, {
                              name: "bfcpFloorCtrl",
                              reg: /^floorctrl:(c-only|s-only|c-s)/,
                              format: "floorctrl:%s"
                          }, {
                              name: "bfcpConfId",
                              reg: /^confid:(\d+)/,
                              format: "confid:%s"
                          }, {
                              name: "bfcpUserId",
                              reg: /^userid:(\d+)/,
                              format: "userid:%s"
                          }, {
                              name: "bfcpFloorId",
                              reg: /^floorid:(.+) (?:m-stream|mstrm):(.+)/,
                              names: ["id", "mStream"],
                              format: "floorid:%s mstrm:%s"
                          }, {
                              push: "invalid",
                              names: ["value"]
                          }]
                      };
                      Object.keys(n).forEach((function(e) {
                          n[e].forEach((function(e) {
                              e.reg || (e.reg = /(.*)/), e.format || (e.format = "%s")
                          }))
                      }))
                  },
              "./node_modules/sdp-transform/lib/index.js":
                  /*!*************************************************!*\
                    !*** ./node_modules/sdp-transform/lib/index.js ***!
                    \*************************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t, n) {
                      var r = n( /*! ./parser */ "./node_modules/sdp-transform/lib/parser.js"),
                          i = n( /*! ./writer */ "./node_modules/sdp-transform/lib/writer.js");
                      t.write = i, t.parse = r.parse, t.parseParams = r.parseParams, t.parseFmtpConfig = r.parseFmtpConfig, t.parsePayloads = r.parsePayloads, t.parseRemoteCandidates = r.parseRemoteCandidates, t.parseImageAttributes = r.parseImageAttributes, t.parseSimulcastStreamList = r.parseSimulcastStreamList
                  },
              "./node_modules/sdp-transform/lib/parser.js":
                  /*!**************************************************!*\
                    !*** ./node_modules/sdp-transform/lib/parser.js ***!
                    \**************************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t, n) {
                      var r = function(e) {
                              return String(Number(e)) === e ? Number(e) : e
                          },
                          i = function(e, t, n) {
                              var i = e.name && e.names;
                              e.push && !t[e.push] ? t[e.push] = [] : i && !t[e.name] && (t[e.name] = {});
                              var o = e.push ? {} : i ? t[e.name] : t;
                              ! function(e, t, n, i) {
                                  if (i && !n) t[i] = r(e[1]);
                                  else
                                      for (var o = 0; o < n.length; o += 1) null != e[o + 1] && (t[n[o]] = r(e[o + 1]))
                              }(n.match(e.reg), o, e.names, e.name), e.push && t[e.push].push(o)
                          },
                          o = n( /*! ./grammar */ "./node_modules/sdp-transform/lib/grammar.js"),
                          s = RegExp.prototype.test.bind(/^([a-z])=(.*)/);
                      t.parse = function(e) {
                          var t = {},
                              n = [],
                              r = t;
                          return e.split(/(\r\n|\r|\n)/).filter(s).forEach((function(e) {
                              var t = e[0],
                                  s = e.slice(2);
                              "m" === t && (n.push({
                                  rtp: [],
                                  fmtp: []
                              }), r = n[n.length - 1]);
                              for (var a = 0; a < (o[t] || []).length; a += 1) {
                                  var u = o[t][a];
                                  if (u.reg.test(s)) return i(u, r, s)
                              }
                          })), t.media = n, t
                      };
                      var a = function(e, t) {
                          var n = t.split(/=(.+)/, 2);
                          return 2 === n.length ? e[n[0]] = r(n[1]) : 1 === n.length && t.length > 1 && (e[n[0]] = void 0), e
                      };
                      t.parseParams = function(e) {
                          return e.split(/;\s?/).reduce(a, {})
                      }, t.parseFmtpConfig = t.parseParams, t.parsePayloads = function(e) {
                          return e.toString().split(" ").map(Number)
                      }, t.parseRemoteCandidates = function(e) {
                          for (var t = [], n = e.split(" ").map(r), i = 0; i < n.length; i += 3) t.push({
                              component: n[i],
                              ip: n[i + 1],
                              port: n[i + 2]
                          });
                          return t
                      }, t.parseImageAttributes = function(e) {
                          return e.split(" ").map((function(e) {
                              return e.substring(1, e.length - 1).split(",").reduce(a, {})
                          }))
                      }, t.parseSimulcastStreamList = function(e) {
                          return e.split(";").map((function(e) {
                              return e.split(",").map((function(e) {
                                  var t, n = !1;
                                  return "~" !== e[0] ? t = r(e) : (t = r(e.substring(1, e.length)), n = !0), {
                                      scid: t,
                                      paused: n
                                  }
                              }))
                          }))
                      }
                  },
              "./node_modules/sdp-transform/lib/writer.js":
                  /*!**************************************************!*\
                    !*** ./node_modules/sdp-transform/lib/writer.js ***!
                    \**************************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t, n) {
                      var r = n( /*! ./grammar */ "./node_modules/sdp-transform/lib/grammar.js"),
                          i = /%[sdv%]/g,
                          o = function(e) {
                              var t = 1,
                                  n = arguments,
                                  r = n.length;
                              return e.replace(i, (function(e) {
                                  if (t >= r) return e;
                                  var i = n[t];
                                  switch (t += 1, e) {
                                      case "%%":
                                          return "%";
                                      case "%s":
                                          return String(i);
                                      case "%d":
                                          return Number(i);
                                      case "%v":
                                          return ""
                                  }
                              }))
                          },
                          s = function(e, t, n) {
                              var r = [e + "=" + (t.format instanceof Function ? t.format(t.push ? n : n[t.name]) : t.format)];
                              if (t.names)
                                  for (var i = 0; i < t.names.length; i += 1) {
                                      var s = t.names[i];
                                      t.name ? r.push(n[t.name][s]) : r.push(n[t.names[i]])
                                  } else r.push(n[t.name]);
                              return o.apply(null, r)
                          },
                          a = ["v", "o", "s", "i", "u", "e", "p", "c", "b", "t", "r", "z", "a"],
                          u = ["i", "c", "b", "a"];
                      e.exports = function(e, t) {
                          t = t || {}, null == e.version && (e.version = 0), null == e.name && (e.name = " "), e.media.forEach((function(e) {
                              null == e.payloads && (e.payloads = "")
                          }));
                          var n = t.outerOrder || a,
                              i = t.innerOrder || u,
                              o = [];
                          return n.forEach((function(t) {
                              r[t].forEach((function(n) {
                                  n.name in e && null != e[n.name] ? o.push(s(t, n, e)) : n.push in e && null != e[n.push] && e[n.push].forEach((function(e) {
                                      o.push(s(t, n, e))
                                  }))
                              }))
                          })), e.media.forEach((function(e) {
                              o.push(s("m", r.m[0], e)), i.forEach((function(t) {
                                  r[t].forEach((function(n) {
                                      n.name in e && null != e[n.name] ? o.push(s(t, n, e)) : n.push in e && null != e[n.push] && e[n.push].forEach((function(e) {
                                          o.push(s(t, n, e))
                                      }))
                                  }))
                              }))
                          })), o.join("\r\n") + "\r\n"
                      }
                  },
              "./node_modules/socket.io-client/lib/index.js":
                  /*!****************************************************!*\
                    !*** ./node_modules/socket.io-client/lib/index.js ***!
                    \****************************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t, n) {
                      var r = n( /*! ./url */ "./node_modules/socket.io-client/lib/url.js"),
                          i = n( /*! socket.io-parser */ "./node_modules/socket.io-parser/index.js"),
                          o = n( /*! ./manager */ "./node_modules/socket.io-client/lib/manager.js"),
                          s = n( /*! debug */ "./node_modules/debug/src/browser.js")("socket.io-client");
                      e.exports = t = u;
                      var a = t.managers = {};

                      function u(e, t) {
                          "object" == typeof e && (t = e, e = void 0), t = t || {};
                          var n, i = r(e),
                              u = i.source,
                              c = i.id,
                              l = i.path,
                              d = a[c] && l in a[c].nsps;
                          return t.forceNew || t["force new connection"] || !1 === t.multiplex || d ? (s("ignoring socket cache for %s", u), n = o(u, t)) : (a[c] || (s("new io instance for %s", u), a[c] = o(u, t)), n = a[c]), i.query && !t.query && (t.query = i.query), n.socket(i.path, t)
                      }
                      t.protocol = i.protocol, t.connect = u, t.Manager = n( /*! ./manager */ "./node_modules/socket.io-client/lib/manager.js"), t.Socket = n( /*! ./socket */ "./node_modules/socket.io-client/lib/socket.js")
                  },
              "./node_modules/socket.io-client/lib/manager.js":
                  /*!******************************************************!*\
                    !*** ./node_modules/socket.io-client/lib/manager.js ***!
                    \******************************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t, n) {
                      var r = n( /*! engine.io-client */ "./node_modules/engine.io-client/lib/index.js"),
                          i = n( /*! ./socket */ "./node_modules/socket.io-client/lib/socket.js"),
                          o = n( /*! component-emitter */ "./node_modules/component-emitter/index.js"),
                          s = n( /*! socket.io-parser */ "./node_modules/socket.io-parser/index.js"),
                          a = n( /*! ./on */ "./node_modules/socket.io-client/lib/on.js"),
                          u = n( /*! component-bind */ "./node_modules/component-bind/index.js"),
                          c = n( /*! debug */ "./node_modules/debug/src/browser.js")("socket.io-client:manager"),
                          l = n( /*! indexof */ "./node_modules/indexof/index.js"),
                          d = n( /*! backo2 */ "./node_modules/backo2/index.js"),
                          f = Object.prototype.hasOwnProperty;

                      function p(e, t) {
                          if (!(this instanceof p)) return new p(e, t);
                          e && "object" == typeof e && (t = e, e = void 0), (t = t || {}).path = t.path || "/socket.io", this.nsps = {}, this.subs = [], this.opts = t, this.reconnection(!1 !== t.reconnection), this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0), this.reconnectionDelay(t.reconnectionDelay || 1e3), this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3), this.randomizationFactor(t.randomizationFactor || .5), this.backoff = new d({
                              min: this.reconnectionDelay(),
                              max: this.reconnectionDelayMax(),
                              jitter: this.randomizationFactor()
                          }), this.timeout(null == t.timeout ? 2e4 : t.timeout), this.readyState = "closed", this.uri = e, this.connecting = [], this.lastPing = null, this.encoding = !1, this.packetBuffer = [];
                          var n = t.parser || s;
                          this.encoder = new n.Encoder, this.decoder = new n.Decoder, this.autoConnect = !1 !== t.autoConnect, this.autoConnect && this.open()
                      }
                      e.exports = p, p.prototype.emitAll = function() {
                          for (var e in this.emit.apply(this, arguments), this.nsps) f.call(this.nsps, e) && this.nsps[e].emit.apply(this.nsps[e], arguments)
                      }, p.prototype.updateSocketIds = function() {
                          for (var e in this.nsps) f.call(this.nsps, e) && (this.nsps[e].id = this.generateId(e))
                      }, p.prototype.generateId = function(e) {
                          return ("/" === e ? "" : e + "#") + this.engine.id
                      }, o(p.prototype), p.prototype.reconnection = function(e) {
                          return arguments.length ? (this._reconnection = !!e, this) : this._reconnection
                      }, p.prototype.reconnectionAttempts = function(e) {
                          return arguments.length ? (this._reconnectionAttempts = e, this) : this._reconnectionAttempts
                      }, p.prototype.reconnectionDelay = function(e) {
                          return arguments.length ? (this._reconnectionDelay = e, this.backoff && this.backoff.setMin(e), this) : this._reconnectionDelay
                      }, p.prototype.randomizationFactor = function(e) {
                          return arguments.length ? (this._randomizationFactor = e, this.backoff && this.backoff.setJitter(e), this) : this._randomizationFactor
                      }, p.prototype.reconnectionDelayMax = function(e) {
                          return arguments.length ? (this._reconnectionDelayMax = e, this.backoff && this.backoff.setMax(e), this) : this._reconnectionDelayMax
                      }, p.prototype.timeout = function(e) {
                          return arguments.length ? (this._timeout = e, this) : this._timeout
                      }, p.prototype.maybeReconnectOnOpen = function() {
                          !this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect()
                      }, p.prototype.open = p.prototype.connect = function(e, t) {
                          if (c("readyState %s", this.readyState), ~this.readyState.indexOf("open")) return this;
                          c("opening %s", this.uri), this.engine = r(this.uri, this.opts);
                          var n = this.engine,
                              i = this;
                          this.readyState = "opening", this.skipReconnect = !1;
                          var o = a(n, "open", (function() {
                                  i.onopen(), e && e()
                              })),
                              s = a(n, "error", (function(t) {
                                  if (c("connect_error"), i.cleanup(), i.readyState = "closed", i.emitAll("connect_error", t), e) {
                                      var n = new Error("Connection error");
                                      n.data = t, e(n)
                                  } else i.maybeReconnectOnOpen()
                              }));
                          if (!1 !== this._timeout) {
                              var u = this._timeout;
                              c("connect attempt will timeout after %d", u);
                              var l = setTimeout((function() {
                                  c("connect attempt timed out after %d", u), o.destroy(), n.close(), n.emit("error", "timeout"), i.emitAll("connect_timeout", u)
                              }), u);
                              this.subs.push({
                                  destroy: function() {
                                      clearTimeout(l)
                                  }
                              })
                          }
                          return this.subs.push(o), this.subs.push(s), this
                      }, p.prototype.onopen = function() {
                          c("open"), this.cleanup(), this.readyState = "open", this.emit("open");
                          var e = this.engine;
                          this.subs.push(a(e, "data", u(this, "ondata"))), this.subs.push(a(e, "ping", u(this, "onping"))), this.subs.push(a(e, "pong", u(this, "onpong"))), this.subs.push(a(e, "error", u(this, "onerror"))), this.subs.push(a(e, "close", u(this, "onclose"))), this.subs.push(a(this.decoder, "decoded", u(this, "ondecoded")))
                      }, p.prototype.onping = function() {
                          this.lastPing = new Date, this.emitAll("ping")
                      }, p.prototype.onpong = function() {
                          this.emitAll("pong", new Date - this.lastPing)
                      }, p.prototype.ondata = function(e) {
                          this.decoder.add(e)
                      }, p.prototype.ondecoded = function(e) {
                          this.emit("packet", e)
                      }, p.prototype.onerror = function(e) {
                          c("error", e), this.emitAll("error", e)
                      }, p.prototype.socket = function(e, t) {
                          var n = this.nsps[e];
                          if (!n) {
                              n = new i(this, e, t), this.nsps[e] = n;
                              var r = this;
                              n.on("connecting", o), n.on("connect", (function() {
                                  n.id = r.generateId(e)
                              })), this.autoConnect && o()
                          }

                          function o() {
                              ~l(r.connecting, n) || r.connecting.push(n)
                          }
                          return n
                      }, p.prototype.destroy = function(e) {
                          var t = l(this.connecting, e);
                          ~t && this.connecting.splice(t, 1), this.connecting.length || this.close()
                      }, p.prototype.packet = function(e) {
                          c("writing packet %j", e);
                          var t = this;
                          e.query && 0 === e.type && (e.nsp += "?" + e.query), t.encoding ? t.packetBuffer.push(e) : (t.encoding = !0, this.encoder.encode(e, (function(n) {
                              for (var r = 0; r < n.length; r++) t.engine.write(n[r], e.options);
                              t.encoding = !1, t.processPacketQueue()
                          })))
                      }, p.prototype.processPacketQueue = function() {
                          if (this.packetBuffer.length > 0 && !this.encoding) {
                              var e = this.packetBuffer.shift();
                              this.packet(e)
                          }
                      }, p.prototype.cleanup = function() {
                          c("cleanup");
                          for (var e = this.subs.length, t = 0; t < e; t++) this.subs.shift().destroy();
                          this.packetBuffer = [], this.encoding = !1, this.lastPing = null, this.decoder.destroy()
                      }, p.prototype.close = p.prototype.disconnect = function() {
                          c("disconnect"), this.skipReconnect = !0, this.reconnecting = !1, "opening" === this.readyState && this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.engine && this.engine.close()
                      }, p.prototype.onclose = function(e) {
                          c("onclose"), this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.emit("close", e), this._reconnection && !this.skipReconnect && this.reconnect()
                      }, p.prototype.reconnect = function() {
                          if (this.reconnecting || this.skipReconnect) return this;
                          var e = this;
                          if (this.backoff.attempts >= this._reconnectionAttempts) c("reconnect failed"), this.backoff.reset(), this.emitAll("reconnect_failed"), this.reconnecting = !1;
                          else {
                              var t = this.backoff.duration();
                              c("will wait %dms before reconnect attempt", t), this.reconnecting = !0;
                              var n = setTimeout((function() {
                                  e.skipReconnect || (c("attempting reconnect"), e.emitAll("reconnect_attempt", e.backoff.attempts), e.emitAll("reconnecting", e.backoff.attempts), e.skipReconnect || e.open((function(t) {
                                      t ? (c("reconnect attempt error"), e.reconnecting = !1, e.reconnect(), e.emitAll("reconnect_error", t.data)) : (c("reconnect success"), e.onreconnect())
                                  })))
                              }), t);
                              this.subs.push({
                                  destroy: function() {
                                      clearTimeout(n)
                                  }
                              })
                          }
                      }, p.prototype.onreconnect = function() {
                          var e = this.backoff.attempts;
                          this.reconnecting = !1, this.backoff.reset(), this.updateSocketIds(), this.emitAll("reconnect", e)
                      }
                  },
              "./node_modules/socket.io-client/lib/on.js":
                  /*!*************************************************!*\
                    !*** ./node_modules/socket.io-client/lib/on.js ***!
                    \*************************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t) {
                      e.exports = function(e, t, n) {
                          return e.on(t, n), {
                              destroy: function() {
                                  e.removeListener(t, n)
                              }
                          }
                      }
                  },
              "./node_modules/socket.io-client/lib/socket.js":
                  /*!*****************************************************!*\
                    !*** ./node_modules/socket.io-client/lib/socket.js ***!
                    \*****************************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t, n) {
                      var r = n( /*! socket.io-parser */ "./node_modules/socket.io-parser/index.js"),
                          i = n( /*! component-emitter */ "./node_modules/component-emitter/index.js"),
                          o = n( /*! to-array */ "./node_modules/to-array/index.js"),
                          s = n( /*! ./on */ "./node_modules/socket.io-client/lib/on.js"),
                          a = n( /*! component-bind */ "./node_modules/component-bind/index.js"),
                          u = n( /*! debug */ "./node_modules/debug/src/browser.js")("socket.io-client:socket"),
                          c = n( /*! parseqs */ "./node_modules/parseqs/index.js"),
                          l = n( /*! has-binary2 */ "./node_modules/has-binary2/index.js");
                      e.exports = p;
                      var d = {
                              connect: 1,
                              connect_error: 1,
                              connect_timeout: 1,
                              connecting: 1,
                              disconnect: 1,
                              error: 1,
                              reconnect: 1,
                              reconnect_attempt: 1,
                              reconnect_failed: 1,
                              reconnect_error: 1,
                              reconnecting: 1,
                              ping: 1,
                              pong: 1
                          },
                          f = i.prototype.emit;

                      function p(e, t, n) {
                          this.io = e, this.nsp = t, this.json = this, this.ids = 0, this.acks = {}, this.receiveBuffer = [], this.sendBuffer = [], this.connected = !1, this.disconnected = !0, this.flags = {}, n && n.query && (this.query = n.query), this.io.autoConnect && this.open()
                      }
                      i(p.prototype), p.prototype.subEvents = function() {
                          if (!this.subs) {
                              var e = this.io;
                              this.subs = [s(e, "open", a(this, "onopen")), s(e, "packet", a(this, "onpacket")), s(e, "close", a(this, "onclose"))]
                          }
                      }, p.prototype.open = p.prototype.connect = function() {
                          return this.connected || (this.subEvents(), this.io.open(), "open" === this.io.readyState && this.onopen(), this.emit("connecting")), this
                      }, p.prototype.send = function() {
                          var e = o(arguments);
                          return e.unshift("message"), this.emit.apply(this, e), this
                      }, p.prototype.emit = function(e) {
                          if (d.hasOwnProperty(e)) return f.apply(this, arguments), this;
                          var t = o(arguments),
                              n = {
                                  type: (void 0 !== this.flags.binary ? this.flags.binary : l(t)) ? r.BINARY_EVENT : r.EVENT,
                                  data: t,
                                  options: {}
                              };
                          return n.options.compress = !this.flags || !1 !== this.flags.compress, "function" == typeof t[t.length - 1] && (u("emitting packet with ack id %d", this.ids), this.acks[this.ids] = t.pop(), n.id = this.ids++), this.connected ? this.packet(n) : this.sendBuffer.push(n), this.flags = {}, this
                      }, p.prototype.packet = function(e) {
                          e.nsp = this.nsp, this.io.packet(e)
                      }, p.prototype.onopen = function() {
                          if (u("transport is open - connecting"), "/" !== this.nsp)
                              if (this.query) {
                                  var e = "object" == typeof this.query ? c.encode(this.query) : this.query;
                                  u("sending connect packet with query %s", e), this.packet({
                                      type: r.CONNECT,
                                      query: e
                                  })
                              } else this.packet({
                                  type: r.CONNECT
                              })
                      }, p.prototype.onclose = function(e) {
                          u("close (%s)", e), this.connected = !1, this.disconnected = !0, delete this.id, this.emit("disconnect", e)
                      }, p.prototype.onpacket = function(e) {
                          var t = e.nsp === this.nsp,
                              n = e.type === r.ERROR && "/" === e.nsp;
                          if (t || n) switch (e.type) {
                              case r.CONNECT:
                                  this.onconnect();
                                  break;
                              case r.EVENT:
                              case r.BINARY_EVENT:
                                  this.onevent(e);
                                  break;
                              case r.ACK:
                              case r.BINARY_ACK:
                                  this.onack(e);
                                  break;
                              case r.DISCONNECT:
                                  this.ondisconnect();
                                  break;
                              case r.ERROR:
                                  this.emit("error", e.data)
                          }
                      }, p.prototype.onevent = function(e) {
                          var t = e.data || [];
                          u("emitting event %j", t), null != e.id && (u("attaching ack callback to event"), t.push(this.ack(e.id))), this.connected ? f.apply(this, t) : this.receiveBuffer.push(t)
                      }, p.prototype.ack = function(e) {
                          var t = this,
                              n = !1;
                          return function() {
                              if (!n) {
                                  n = !0;
                                  var i = o(arguments);
                                  u("sending ack %j", i), t.packet({
                                      type: l(i) ? r.BINARY_ACK : r.ACK,
                                      id: e,
                                      data: i
                                  })
                              }
                          }
                      }, p.prototype.onack = function(e) {
                          var t = this.acks[e.id];
                          "function" == typeof t ? (u("calling ack %s with %j", e.id, e.data), t.apply(this, e.data), delete this.acks[e.id]) : u("bad ack %s", e.id)
                      }, p.prototype.onconnect = function() {
                          this.connected = !0, this.disconnected = !1, this.emit("connect"), this.emitBuffered()
                      }, p.prototype.emitBuffered = function() {
                          var e;
                          for (e = 0; e < this.receiveBuffer.length; e++) f.apply(this, this.receiveBuffer[e]);
                          for (this.receiveBuffer = [], e = 0; e < this.sendBuffer.length; e++) this.packet(this.sendBuffer[e]);
                          this.sendBuffer = []
                      }, p.prototype.ondisconnect = function() {
                          u("server disconnect (%s)", this.nsp), this.destroy(), this.onclose("io server disconnect")
                      }, p.prototype.destroy = function() {
                          if (this.subs) {
                              for (var e = 0; e < this.subs.length; e++) this.subs[e].destroy();
                              this.subs = null
                          }
                          this.io.destroy(this)
                      }, p.prototype.close = p.prototype.disconnect = function() {
                          return this.connected && (u("performing disconnect (%s)", this.nsp), this.packet({
                              type: r.DISCONNECT
                          })), this.destroy(), this.connected && this.onclose("io client disconnect"), this
                      }, p.prototype.compress = function(e) {
                          return this.flags.compress = e, this
                      }, p.prototype.binary = function(e) {
                          return this.flags.binary = e, this
                      }
                  },
              "./node_modules/socket.io-client/lib/url.js":
                  /*!**************************************************!*\
                    !*** ./node_modules/socket.io-client/lib/url.js ***!
                    \**************************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t, n) {
                      var r = n( /*! parseuri */ "./node_modules/parseuri/index.js"),
                          i = n( /*! debug */ "./node_modules/debug/src/browser.js")("socket.io-client:url");
                      e.exports = function(e, t) {
                          var n = e;
                          t = t || "undefined" != typeof location && location, null == e && (e = t.protocol + "//" + t.host), "string" == typeof e && ("/" === e.charAt(0) && (e = "/" === e.charAt(1) ? t.protocol + e : t.host + e), /^(https?|wss?):\/\//.test(e) || (i("protocol-less url %s", e), e = void 0 !== t ? t.protocol + "//" + e : "https://" + e), i("parse %s", e), n = r(e)), n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")), n.path = n.path || "/";
                          var o = -1 !== n.host.indexOf(":") ? "[" + n.host + "]" : n.host;
                          return n.id = n.protocol + "://" + o + ":" + n.port, n.href = n.protocol + "://" + o + (t && t.port === n.port ? "" : ":" + n.port), n
                      }
                  },
              "./node_modules/socket.io-parser/binary.js":
                  /*!*************************************************!*\
                    !*** ./node_modules/socket.io-parser/binary.js ***!
                    \*************************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t, n) {
                      var r = n( /*! isarray */ "./node_modules/isarray/index.js"),
                          i = n( /*! ./is-buffer */ "./node_modules/socket.io-parser/is-buffer.js"),
                          o = Object.prototype.toString,
                          s = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === o.call(Blob),
                          a = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === o.call(File);
                      t.deconstructPacket = function(e) {
                          var t = [],
                              n = e.data,
                              o = e;
                          return o.data = function e(t, n) {
                              if (!t) return t;
                              if (i(t)) {
                                  var o = {
                                      _placeholder: !0,
                                      num: n.length
                                  };
                                  return n.push(t), o
                              }
                              if (r(t)) {
                                  for (var s = new Array(t.length), a = 0; a < t.length; a++) s[a] = e(t[a], n);
                                  return s
                              }
                              if ("object" == typeof t && !(t instanceof Date)) {
                                  for (var u in s = {}, t) s[u] = e(t[u], n);
                                  return s
                              }
                              return t
                          }(n, t), o.attachments = t.length, {
                              packet: o,
                              buffers: t
                          }
                      }, t.reconstructPacket = function(e, t) {
                          return e.data = function e(t, n) {
                              if (!t) return t;
                              if (t && t._placeholder) return n[t.num];
                              if (r(t))
                                  for (var i = 0; i < t.length; i++) t[i] = e(t[i], n);
                              else if ("object" == typeof t)
                                  for (var o in t) t[o] = e(t[o], n);
                              return t
                          }(e.data, t), e.attachments = void 0, e
                      }, t.removeBlobs = function(e, t) {
                          var n = 0,
                              o = e;
                          ! function e(u, c, l) {
                              if (!u) return u;
                              if (s && u instanceof Blob || a && u instanceof File) {
                                  n++;
                                  var d = new FileReader;
                                  d.onload = function() {
                                      l ? l[c] = this.result : o = this.result, --n || t(o)
                                  }, d.readAsArrayBuffer(u)
                              } else if (r(u))
                                  for (var f = 0; f < u.length; f++) e(u[f], f, u);
                              else if ("object" == typeof u && !i(u))
                                  for (var p in u) e(u[p], p, u)
                          }(o), n || t(o)
                      }
                  },
              "./node_modules/socket.io-parser/index.js":
                  /*!************************************************!*\
                    !*** ./node_modules/socket.io-parser/index.js ***!
                    \************************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t, n) {
                      var r = n( /*! debug */ "./node_modules/socket.io-parser/node_modules/debug/src/browser.js")("socket.io-parser"),
                          i = n( /*! component-emitter */ "./node_modules/component-emitter/index.js"),
                          o = n( /*! ./binary */ "./node_modules/socket.io-parser/binary.js"),
                          s = n( /*! isarray */ "./node_modules/isarray/index.js"),
                          a = n( /*! ./is-buffer */ "./node_modules/socket.io-parser/is-buffer.js");

                      function u() {}
                      t.protocol = 4, t.types = ["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"], t.CONNECT = 0, t.DISCONNECT = 1, t.EVENT = 2, t.ACK = 3, t.ERROR = 4, t.BINARY_EVENT = 5, t.BINARY_ACK = 6, t.Encoder = u, t.Decoder = d;
                      var c = t.ERROR + '"encode error"';

                      function l(e) {
                          var n = "" + e.type;
                          if (t.BINARY_EVENT !== e.type && t.BINARY_ACK !== e.type || (n += e.attachments + "-"), e.nsp && "/" !== e.nsp && (n += e.nsp + ","), null != e.id && (n += e.id), null != e.data) {
                              var i = function(e) {
                                  try {
                                      return JSON.stringify(e)
                                  } catch (e) {
                                      return !1
                                  }
                              }(e.data);
                              if (!1 === i) return c;
                              n += i
                          }
                          return r("encoded %j as %s", e, n), n
                      }

                      function d() {
                          this.reconstructor = null
                      }

                      function f(e) {
                          this.reconPack = e, this.buffers = []
                      }

                      function p(e) {
                          return {
                              type: t.ERROR,
                              data: "parser error: " + e
                          }
                      }
                      u.prototype.encode = function(e, n) {
                          r("encoding packet %j", e), t.BINARY_EVENT === e.type || t.BINARY_ACK === e.type ? function(e, t) {
                              o.removeBlobs(e, (function(e) {
                                  var n = o.deconstructPacket(e),
                                      r = l(n.packet),
                                      i = n.buffers;
                                  i.unshift(r), t(i)
                              }))
                          }(e, n) : n([l(e)])
                      }, i(d.prototype), d.prototype.add = function(e) {
                          var n;
                          if ("string" == typeof e) n = function(e) {
                              var n = 0,
                                  i = {
                                      type: Number(e.charAt(0))
                                  };
                              if (null == t.types[i.type]) return p("unknown packet type " + i.type);
                              if (t.BINARY_EVENT === i.type || t.BINARY_ACK === i.type) {
                                  for (var o = "";
                                      "-" !== e.charAt(++n) && (o += e.charAt(n), n != e.length););
                                  if (o != Number(o) || "-" !== e.charAt(n)) throw new Error("Illegal attachments");
                                  i.attachments = Number(o)
                              }
                              if ("/" === e.charAt(n + 1))
                                  for (i.nsp = ""; ++n && "," !== (u = e.charAt(n)) && (i.nsp += u, n !== e.length););
                              else i.nsp = "/";
                              var a = e.charAt(n + 1);
                              if ("" !== a && Number(a) == a) {
                                  for (i.id = ""; ++n;) {
                                      var u;
                                      if (null == (u = e.charAt(n)) || Number(u) != u) {
                                          --n;
                                          break
                                      }
                                      if (i.id += e.charAt(n), n === e.length) break
                                  }
                                  i.id = Number(i.id)
                              }
                              if (e.charAt(++n)) {
                                  var c = function(e) {
                                      try {
                                          return JSON.parse(e)
                                      } catch (e) {
                                          return !1
                                      }
                                  }(e.substr(n));
                                  if (!1 === c || i.type !== t.ERROR && !s(c)) return p("invalid payload");
                                  i.data = c
                              }
                              return r("decoded %s as %j", e, i), i
                          }(e), t.BINARY_EVENT === n.type || t.BINARY_ACK === n.type ? (this.reconstructor = new f(n), 0 === this.reconstructor.reconPack.attachments && this.emit("decoded", n)) : this.emit("decoded", n);
                          else {
                              if (!a(e) && !e.base64) throw new Error("Unknown type: " + e);
                              if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
                              (n = this.reconstructor.takeBinaryData(e)) && (this.reconstructor = null, this.emit("decoded", n))
                          }
                      }, d.prototype.destroy = function() {
                          this.reconstructor && this.reconstructor.finishedReconstruction()
                      }, f.prototype.takeBinaryData = function(e) {
                          if (this.buffers.push(e), this.buffers.length === this.reconPack.attachments) {
                              var t = o.reconstructPacket(this.reconPack, this.buffers);
                              return this.finishedReconstruction(), t
                          }
                          return null
                      }, f.prototype.finishedReconstruction = function() {
                          this.reconPack = null, this.buffers = []
                      }
                  },
              "./node_modules/socket.io-parser/is-buffer.js":
                  /*!****************************************************!*\
                    !*** ./node_modules/socket.io-parser/is-buffer.js ***!
                    \****************************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t, n) {
                      (function(t) {
                          e.exports = function(e) {
                              return n && t.isBuffer(e) || r && (e instanceof ArrayBuffer || function(e) {
                                  return "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer
                              }(e))
                          };
                          var n = "function" == typeof t && "function" == typeof t.isBuffer,
                              r = "function" == typeof ArrayBuffer
                      }).call(this, n( /*! ./../node-libs-browser/node_modules/buffer/index.js */ "./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer)
                  },
              "./node_modules/socket.io-parser/node_modules/debug/src/browser.js":
                  /*!*************************************************************************!*\
                    !*** ./node_modules/socket.io-parser/node_modules/debug/src/browser.js ***!
                    \*************************************************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t, n) {
                      (function(r) {
                          function i() {
                              var e;
                              try {
                                  e = t.storage.debug
                              } catch (e) {}
                              return !e && void 0 !== r && "env" in r && (e = r.env.DEBUG), e
                          }(t = e.exports = n( /*! ./debug */ "./node_modules/socket.io-parser/node_modules/debug/src/debug.js")).log = function() {
                              return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
                          }, t.formatArgs = function(e) {
                              var n = this.useColors;
                              if (e[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + e[0] + (n ? "%c " : " ") + "+" + t.humanize(this.diff), n) {
                                  var r = "color: " + this.color;
                                  e.splice(1, 0, r, "color: inherit");
                                  var i = 0,
                                      o = 0;
                                  e[0].replace(/%[a-zA-Z%]/g, (function(e) {
                                      "%%" !== e && (i++, "%c" === e && (o = i))
                                  })), e.splice(o, 0, r)
                              }
                          }, t.save = function(e) {
                              try {
                                  null == e ? t.storage.removeItem("debug") : t.storage.debug = e
                              } catch (e) {}
                          }, t.load = i, t.useColors = function() {
                              return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
                          }, t.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() {
                              try {
                                  return window.localStorage
                              } catch (e) {}
                          }(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t.formatters.j = function(e) {
                              try {
                                  return JSON.stringify(e)
                              } catch (e) {
                                  return "[UnexpectedJSONParseError]: " + e.message
                              }
                          }, t.enable(i())
                      }).call(this, n( /*! ./../../../../process/browser.js */ "./node_modules/process/browser.js"))
                  },
              "./node_modules/socket.io-parser/node_modules/debug/src/debug.js":
                  /*!***********************************************************************!*\
                    !*** ./node_modules/socket.io-parser/node_modules/debug/src/debug.js ***!
                    \***********************************************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t, n) {
                      function r(e) {
                          var n;

                          function r() {
                              if (r.enabled) {
                                  var e = r,
                                      i = +new Date,
                                      o = i - (n || i);
                                  e.diff = o, e.prev = n, e.curr = i, n = i;
                                  for (var s = new Array(arguments.length), a = 0; a < s.length; a++) s[a] = arguments[a];
                                  s[0] = t.coerce(s[0]), "string" != typeof s[0] && s.unshift("%O");
                                  var u = 0;
                                  s[0] = s[0].replace(/%([a-zA-Z%])/g, (function(n, r) {
                                      if ("%%" === n) return n;
                                      u++;
                                      var i = t.formatters[r];
                                      if ("function" == typeof i) {
                                          var o = s[u];
                                          n = i.call(e, o), s.splice(u, 1), u--
                                      }
                                      return n
                                  })), t.formatArgs.call(e, s);
                                  var c = r.log || t.log || console.log.bind(console);
                                  c.apply(e, s)
                              }
                          }
                          return r.namespace = e, r.enabled = t.enabled(e), r.useColors = t.useColors(), r.color = function(e) {
                              var n, r = 0;
                              for (n in e) r = (r << 5) - r + e.charCodeAt(n), r |= 0;
                              return t.colors[Math.abs(r) % t.colors.length]
                          }(e), r.destroy = i, "function" == typeof t.init && t.init(r), t.instances.push(r), r
                      }

                      function i() {
                          var e = t.instances.indexOf(this);
                          return -1 !== e && (t.instances.splice(e, 1), !0)
                      }(t = e.exports = r.debug = r.default = r).coerce = function(e) {
                          return e instanceof Error ? e.stack || e.message : e
                      }, t.disable = function() {
                          t.enable("")
                      }, t.enable = function(e) {
                          var n;
                          t.save(e), t.names = [], t.skips = [];
                          var r = ("string" == typeof e ? e : "").split(/[\s,]+/),
                              i = r.length;
                          for (n = 0; n < i; n++) r[n] && ("-" === (e = r[n].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")));
                          for (n = 0; n < t.instances.length; n++) {
                              var o = t.instances[n];
                              o.enabled = t.enabled(o.namespace)
                          }
                      }, t.enabled = function(e) {
                          if ("*" === e[e.length - 1]) return !0;
                          var n, r;
                          for (n = 0, r = t.skips.length; n < r; n++)
                              if (t.skips[n].test(e)) return !1;
                          for (n = 0, r = t.names.length; n < r; n++)
                              if (t.names[n].test(e)) return !0;
                          return !1
                      }, t.humanize = n( /*! ms */ "./node_modules/socket.io-parser/node_modules/ms/index.js"), t.instances = [], t.names = [], t.skips = [], t.formatters = {}
                  },
              "./node_modules/socket.io-parser/node_modules/ms/index.js":
                  /*!****************************************************************!*\
                    !*** ./node_modules/socket.io-parser/node_modules/ms/index.js ***!
                    \****************************************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t) {
                      var n = 1e3,
                          r = 6e4,
                          i = 60 * r,
                          o = 24 * i;

                      function s(e, t, n) {
                          if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s"
                      }
                      e.exports = function(e, t) {
                          t = t || {};
                          var a, u = typeof e;
                          if ("string" === u && e.length > 0) return function(e) {
                              if (!((e = String(e)).length > 100)) {
                                  var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
                                  if (t) {
                                      var s = parseFloat(t[1]);
                                      switch ((t[2] || "ms").toLowerCase()) {
                                          case "years":
                                          case "year":
                                          case "yrs":
                                          case "yr":
                                          case "y":
                                              return 315576e5 * s;
                                          case "days":
                                          case "day":
                                          case "d":
                                              return s * o;
                                          case "hours":
                                          case "hour":
                                          case "hrs":
                                          case "hr":
                                          case "h":
                                              return s * i;
                                          case "minutes":
                                          case "minute":
                                          case "mins":
                                          case "min":
                                          case "m":
                                              return s * r;
                                          case "seconds":
                                          case "second":
                                          case "secs":
                                          case "sec":
                                          case "s":
                                              return s * n;
                                          case "milliseconds":
                                          case "millisecond":
                                          case "msecs":
                                          case "msec":
                                          case "ms":
                                              return s;
                                          default:
                                              return
                                      }
                                  }
                              }
                          }(e);
                          if ("number" === u && !1 === isNaN(e)) return t.long ? s(a = e, o, "day") || s(a, i, "hour") || s(a, r, "minute") || s(a, n, "second") || a + " ms" : function(e) {
                              return e >= o ? Math.round(e / o) + "d" : e >= i ? Math.round(e / i) + "h" : e >= r ? Math.round(e / r) + "m" : e >= n ? Math.round(e / n) + "s" : e + "ms"
                          }(e);
                          throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
                      }
                  },
              "./node_modules/split-on-first/index.js":
                  /*!**********************************************!*\
                    !*** ./node_modules/split-on-first/index.js ***!
                    \**********************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t, n) {
                      "use strict";
                      e.exports = (e, t) => {
                          if ("string" != typeof e || "string" != typeof t) throw new TypeError("Expected the arguments to be of type `string`");
                          if ("" === t) return [e];
                          const n = e.indexOf(t);
                          return -1 === n ? [e] : [e.slice(0, n), e.slice(n + t.length)]
                      }
                  },
              "./node_modules/strict-uri-encode/index.js":
                  /*!*************************************************!*\
                    !*** ./node_modules/strict-uri-encode/index.js ***!
                    \*************************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t, n) {
                      "use strict";
                      e.exports = e => encodeURIComponent(e).replace(/[!'()*]/g, e => "%" + e.charCodeAt(0).toString(16).toUpperCase())
                  },
              "./node_modules/to-array/index.js":
                  /*!****************************************!*\
                    !*** ./node_modules/to-array/index.js ***!
                    \****************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t) {
                      e.exports = function(e, t) {
                          for (var n = [], r = (t = t || 0) || 0; r < e.length; r++) n[r - t] = e[r];
                          return n
                      }
                  },
              "./node_modules/webpack/buildin/global.js":
                  /*!***********************************!*\
                    !*** (webpack)/buildin/global.js ***!
                    \***********************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t) {
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
                  },
              "./node_modules/yeast/index.js":
                  /*!*************************************!*\
                    !*** ./node_modules/yeast/index.js ***!
                    \*************************************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t, n) {
                      "use strict";
                      var r, i = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),
                          o = {},
                          s = 0,
                          a = 0;

                      function u(e) {
                          var t = "";
                          do {
                              t = i[e % 64] + t, e = Math.floor(e / 64)
                          } while (e > 0);
                          return t
                      }

                      function c() {
                          var e = u(+new Date);
                          return e !== r ? (s = 0, r = e) : e + "." + u(s++)
                      }
                      for (; a < 64; a++) o[i[a]] = a;
                      c.encode = u, c.decode = function(e) {
                          var t = 0;
                          for (a = 0; a < e.length; a++) t = 64 * t + o[e.charAt(a)];
                          return t
                      }, e.exports = c
                  },
              "./package.json":
                  /*!**********************!*\
                    !*** ./package.json ***!
                    \**********************/
                  /*! exports provided: name, version, description, main, module, types, scripts, repository, files, author, license, devDependencies, dependencies, default */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e) {
                      e.exports = JSON.parse('{"name":"skyway-js","version":"3.0.1","description":"The official JavaScript SDK for SkyWay","main":"dist/skyway.js","module":"src/peer.js","types":"skyway-js.d.ts","scripts":{"test":"karma start ./karma.conf.js","clean":"del ./dist","lint":"eslint .","build":"NODE_ENV=production webpack","dev":"webpack -w"},"repository":{"type":"git","url":"git+https://github.com/skyway/skyway-js-sdk"},"files":["dist/skyway.js","skyway-js.d.ts","LICENSE","CHANGELOG.md","README.md"],"author":"NTT Communications Corp.","license":"Apache-2.0","devDependencies":{"babel-loader":"7.1.5","babel-plugin-espower":"2.4.0","babel-plugin-istanbul":"4.1.6","babel-preset-es2015":"^6.24.1","del-cli":"^2.0.0","eslint":"^6.1.0","eslint-config-prettier":"^6.0.0","eslint-plugin-prettier":"^3.1.0","inject-loader":"^4.0.1","karma":"^4.2.0","karma-chrome-launcher":"^3.0.0","karma-coverage":"^1.1.2","karma-mocha":"^1.3.0","karma-mocha-reporter":"^2.2.5","karma-sourcemap-loader":"^0.3.7","karma-webpack":"^4.0.2","mocha":"^6.2.0","power-assert":"^1.6.1","prettier":"^1.18.2","sinon":"^7.3.2","webpack":"^4.38.0","webpack-cli":"^3.3.6"},"dependencies":{"@types/node":"^12.6.8","detect-browser":"^4.6.0","enum":"git+https://github.com/eastandwest/enum.git#react-native","events":"^3.0.0","js-binarypack":"0.0.9","object-sizeof":"^1.4.0","query-string":"^6.8.2","sdp-interop":"^0.1.13","sdp-transform":"^2.11.0","socket.io-client":"^2.2.0","socket.io-parser":"~3.3.0"}}')
                  },
              "./src/peer.js":
                  /*!**********************************!*\
                    !*** ./src/peer.js + 12 modules ***!
                    \**********************************/
                  /*! exports provided: default */
                  /*! ModuleConcatenation bailout: Cannot concat with ./node_modules/detect-browser/index.js (<- Module is not an ECMAScript module) */
                  /*! ModuleConcatenation bailout: Cannot concat with ./node_modules/enum/index.js (<- Module is not an ECMAScript module) */
                  /*! ModuleConcatenation bailout: Cannot concat with ./node_modules/events/events.js (<- Module is not an ECMAScript module) */
                  /*! ModuleConcatenation bailout: Cannot concat with ./node_modules/has-binary2/index.js (<- Module is not an ECMAScript module) */
                  /*! ModuleConcatenation bailout: Cannot concat with ./node_modules/js-binarypack/lib/binarypack.js (<- Module is not an ECMAScript module) */
                  /*! ModuleConcatenation bailout: Cannot concat with ./node_modules/object-sizeof/index.js (<- Module is not an ECMAScript module) */
                  /*! ModuleConcatenation bailout: Cannot concat with ./node_modules/query-string/index.js (<- Module is not an ECMAScript module) */
                  /*! ModuleConcatenation bailout: Cannot concat with ./node_modules/sdp-interop/lib/index.js (<- Module is not an ECMAScript module) */
                  /*! ModuleConcatenation bailout: Cannot concat with ./node_modules/sdp-transform/lib/index.js (<- Module is not an ECMAScript module) */
                  /*! ModuleConcatenation bailout: Cannot concat with ./node_modules/socket.io-client/lib/index.js (<- Module is not an ECMAScript module) */
                  /*! ModuleConcatenation bailout: Cannot concat with ./node_modules/socket.io-parser/index.js (<- Module is not an ECMAScript module) */
                  /*! ModuleConcatenation bailout: Cannot concat with ./package.json (<- Module is not an ECMAScript module) */
                  function(e, t, n) {
                      "use strict";
                      n.r(t);
                      var r = n("./node_modules/events/events.js"),
                          i = n.n(r),
                          o = n("./node_modules/enum/index.js"),
                          s = n.n(o),
                          a = n("./node_modules/socket.io-client/lib/index.js"),
                          u = n.n(a),
                          c = n("./node_modules/query-string/index.js"),
                          l = n.n(c),
                          d = {
                              DISPATCHER_HOST: "dispatcher.webrtc.ecl.ntt.com",
                              DISPATCHER_PORT: 443,
                              DISPATCHER_SECURE: !0,
                              DISPATCHER_TIMEOUT: 1e4,
                              TURN_HOST: "turn.webrtc.ecl.ntt.com",
                              TURN_PORT: 443,
                              MESSAGE_TYPES: {
                                  CLIENT: new s.a(["SEND_OFFER", "SEND_ANSWER", "SEND_CANDIDATE", "SEND_LEAVE", "ROOM_JOIN", "ROOM_LEAVE", "ROOM_GET_LOGS", "ROOM_GET_USERS", "ROOM_SEND_DATA", "SFU_GET_OFFER", "SFU_ANSWER", "SFU_CANDIDATE", "PING", "UPDATE_CREDENTIAL", "SEND_FORCE_CLOSE"]),
                                  SERVER: new s.a(["OPEN", "ERROR", "OFFER", "ANSWER", "CANDIDATE", "LEAVE", "AUTH_EXPIRES_IN", "ROOM_LOGS", "ROOM_USERS", "ROOM_DATA", "ROOM_USER_JOIN", "ROOM_USER_LEAVE", "SFU_OFFER", "FORCE_CLOSE"])
                              },
                              maxChunkSize: 16300,
                              maxDataSize: 20971520,
                              minBroadcastIntervalMs: 100,
                              reconnectionAttempts: 2,
                              numberServersToTry: 3,
                              sendInterval: 1,
                              pingInterval: 25e3,
                              defaultConfig: {
                                  iceServers: [{
                                      urls: "stun:stun.webrtc.ecl.ntt.com:3478",
                                      url: "stun:stun.webrtc.ecl.ntt.com:3478"
                                  }],
                                  iceTransportPolicy: "all"
                              }
                          };
                      const f = new s.a({
                          NONE: 0,
                          ERROR: 1,
                          WARN: 2,
                          FULL: 3
                      });
                      var p = new class {
                              constructor() {
                                  this._logLevel = f.NONE.value, this.LOG_LEVELS = f
                              }
                              setLogLevel(e) {
                                  switch (e.value && (e = e.value), parseInt(e, 10)) {
                                      case 0:
                                          this._logLevel = f.NONE.value;
                                          break;
                                      case 1:
                                          this._logLevel = f.ERROR.value;
                                          break;
                                      case 2:
                                          this._logLevel = f.WARN.value;
                                          break;
                                      case 3:
                                          this._logLevel = f.FULL.value;
                                          break;
                                      default:
                                          this._logLevel = f.NONE.value
                                  }
                              }
                              warn(...e) {
                                  this._logLevel >= f.WARN.value && console.warn("SkyWay: ", ...e)
                              }
                              error(...e) {
                                  this._logLevel >= f.ERROR.value && console.error("SkyWay: ", ...e)
                              }
                              log(...e) {
                                  this._logLevel >= f.FULL.value && console.log("SkyWay: ", ...e)
                              }
                          },
                          h = n("./package.json");
                      class m extends i.a {
                          constructor(e, t) {
                              if (super(), this._isOpen = !1, this._isPeerIdSet = !1, this._queue = [], this._io = null, this._key = e, this._reconnectAttempts = 0, t.host && t.port) {
                                  const e = t.secure ? "https://" : "http://";
                                  this.signalingServerUrl = `${e}${t.host}:${t.port}`
                              } else {
                                  const e = t.dispatcherHost || d.DISPATCHER_HOST,
                                      n = t.dispatcherPort || d.DISPATCHER_PORT,
                                      r = t.dispatcherSecure || d.DISPATCHER_SECURE ? "https://" : "http://";
                                  this._dispatcherUrl = `${r}${e}:${n}/signaling`
                              }
                          }
                          get isOpen() {
                              return Boolean(this._io && this._io.connected && this._isOpen)
                          }
                          async start(e, t, n) {
                              let r = `apiKey=${this._key}&token=${t}&platform=javascript&sdk_version=` + h.version;
                              if (e && (r += "&peerId=" + e, this._isPeerIdSet = !0), n && (r += "&credential=" + encodeURIComponent(JSON.stringify(n))), this._dispatcherUrl) {
                                  let e;
                                  try {
                                      e = await this._getSignalingServer()
                                  } catch (e) {
                                      return void this.emit("error", e)
                                  }
                                  const t = e.secure ? "https://" : "http://";
                                  this.signalingServerUrl = `${t}${e.host}:${e.port}`
                              }
                              this._io = u()(this.signalingServerUrl, {
                                  "force new connection": !0,
                                  query: r,
                                  reconnectionAttempts: d.reconnectionAttempts
                              }), this._io.on("reconnect_failed", () => {
                                  this._stopPings(), this._connectToNewServer()
                              }), this._io.on("error", e => {
                                  p.error(e)
                              }), this._setupMessageHandlers()
                          }
                          async _connectToNewServer(e = 0) {
                              if (e >= 10 || this._reconnectAttempts >= d.numberServersToTry) return void this.emit("error", "Could not connect to server.");
                              let t;
                              try {
                                  t = await this._getSignalingServer()
                              } catch (e) {
                                  return void this.emit("error", e)
                              }
                              if (-1 === this.signalingServerUrl.indexOf(t.host)) {
                                  const e = t.secure ? "https://" : "http://";
                                  this.signalingServerUrl = `${e}${t.host}:${t.port}`, this._io.io.uri = this.signalingServerUrl, this._io.connect(), this._reconnectAttempts++
                              } else this._connectToNewServer(++e)
                          }
                          _getSignalingServer() {
                              return new Promise((e, t) => {
                                  const n = new XMLHttpRequest;
                                  n.timeout = d.DISPATCHER_TIMEOUT, n.open("GET", this._dispatcherUrl, !0), n.onerror = () => {
                                      t(new Error("There was a problem with the request for the dispatcher. Check your peer options and network connections."))
                                  }, n.onabort = () => {
                                      t(new Error("The request for the dispatcher was aborted."))
                                  }, n.ontimeout = () => {
                                      t(new Error("The request for the dispatcher timed out. Check your firewall, network speed, SkyWay failure information"))
                                  }, n.onload = () => {
                                      if (200 === n.status) try {
                                          const r = JSON.parse(n.responseText);
                                          if (r && r.domain) return void e({
                                              host: r.domain,
                                              port: 443,
                                              secure: !0
                                          });
                                          t(new Error("The dispatcher server returned an invalid JSON response. have no signaling server domain in JSON."))
                                      } catch (e) {
                                          t(new Error("The dispatcher server returned an invalid JSON response."))
                                      } else t(new Error("Connection failed. Unexpected response: " + n.status))
                                  }, n.send(null)
                              })
                          }
                          send(e, t) {
                              e ? this.isOpen ? !0 === this._io.connected && this._io.emit(e, t) : this._queue.push({
                                  type: e,
                                  message: t
                              }) : this._io.emit("error", "Invalid message")
                          }
                          close() {
                              this.isOpen && (this._stopPings(), this._io.disconnect(), this._isOpen = !1)
                          }
                          reconnect() {
                              this._io.connect()
                          }
                          updateCredential(e) {
                              const t = l.a.parse(this._io.io.opts.query);
                              t.credential ? t.credential = encodeURIComponent(JSON.stringify(e)) : p.warn("Adding a credential when one wasn't specified before."), this._io.io.opts.query = l.a.stringify(t), this.send(d.MESSAGE_TYPES.CLIENT.UPDATE_CREDENTIAL.key, e)
                          }
                          _setupMessageHandlers() {
                              d.MESSAGE_TYPES.SERVER.enums.forEach(e => {
                                  e.key === d.MESSAGE_TYPES.SERVER.OPEN.key ? this._io.on(e.key, t => {
                                      t && t.peerId && (this._isPeerIdSet || (this._io.io.opts.query += "&peerId=" + t.peerId, this._isPeerIdSet = !0), this._reconnectAttempts = 0, this._startPings(), this._sendQueuedMessages(), this._isOpen || (this._isOpen = !0, this.emit(e.key, t)))
                                  }) : this._io.on(e.key, t => {
                                      this.emit(e.key, t)
                                  })
                              })
                          }
                          _sendQueuedMessages() {
                              for (const e of this._queue) this.send(e.type, e.message);
                              this._queue = []
                          }
                          _startPings() {
                              this._pingIntervalId || (this._pingIntervalId = setInterval(() => {
                                  this.send(d.MESSAGE_TYPES.CLIENT.PING.key)
                              }, d.pingInterval))
                          }
                          _stopPings() {
                              clearInterval(this._pingIntervalId), this._pingIntervalId = void 0
                          }
                      }
                      var g = m,
                          y = n("./node_modules/sdp-transform/lib/index.js"),
                          v = n.n(y),
                          b = n("./node_modules/sdp-interop/lib/index.js"),
                          w = new class {
                              unifiedToPlanB(e) {
                                  const t = (new b.Interop).toPlanB(e).sdp,
                                      n = new Set,
                                      r = /a=ssrc:\d+ msid:(\w+)/g;
                                  let i;
                                  for (; i = r.exec(t);) n.add(i[1]);
                                  const o = t.replace("a=msid-semantic:WMS *", "a=msid-semantic:WMS " + Array.from(n).join(" "));
                                  return new RTCSessionDescription({
                                      type: "offer",
                                      sdp: o
                                  })
                              }
                              addVideoBandwidth(e, t) {
                                  return this._validateBandwidth(t), this._addBandwidth(e, t, "video")
                              }
                              addAudioBandwidth(e, t) {
                                  return this._validateBandwidth(t), this._addBandwidth(e, t, "audio")
                              }
                              filterVideoCodec(e, t) {
                                  return this._filterCodec(e, t, "video")
                              }
                              filterAudioCodec(e, t) {
                                  return this._filterCodec(e, t, "audio")
                              }
                              ensureUnifiedPlan(e) {
                                  return e.split("\r\n").map(e => e.startsWith("a=msid-semantic") ? "a=msid-semantic:WMS *" : e).join("\r\n")
                              }
                              _filterCodec(e, t, n) {
                                  if (void 0 === t) throw new Error("codec is not passed");
                                  const r = v.a.parse(e);
                                  return r.media = r.media.map(e => {
                                      if (e.type === n) {
                                          e.rtp = e.rtp.filter(e => e.codec === t);
                                          const n = e.rtp.reduce((e, t) => [...e, t.payload], []);
                                          if (0 === e.rtp.length) throw new Error(t + " does not exist");
                                          e.fmtp && (e.fmtp = e.fmtp.filter(e => n.includes(e.payload))), e.rtcpFb && (e.rtcpFb = e.rtcpFb.filter(e => n.includes(e.payload))), e.payloads = n.join(" ")
                                      }
                                      return e
                                  }), v.a.write(r)
                              }
                              _addBandwidth(e, t, n) {
                                  const r = v.a.parse(e);
                                  return r.media = r.media.map(e => (e.type === n && (e.bandwidth = [{
                                      type: "AS",
                                      limit: t.toString()
                                  }, {
                                      type: "TIAS",
                                      limit: (1e3 * t).toString()
                                  }]), e)), v.a.write(r)
                              }
                              _validateBandwidth(e) {
                                  if (void 0 === e) throw new Error("bandwidth is not passed");
                                  if (!/^\d+$/.test(e)) throw new Error(e + " is not a number")
                              }
                          };
                      const _ = new s.a(["addStream", "dcCreated", "offerCreated", "answerCreated", "iceCandidate", "iceConnectionFailed", "negotiationNeeded", "error"]);
                      class E extends i.a {
                          constructor() {
                              super(), this._offerQueue = [], this._isExpectingAnswer = !1, this._replaceStreamCalled = !1, this._isNegotiationAllowed = !0, this.hasRemoteDescription = !1
                          }
                          async startConnection(e = {}) {
                              if (this._pc = this._createPeerConnection(e.pcConfig), this._setupPCListeners(), this.originator = e.originator, this._audioBandwidth = e.audioBandwidth, this._videoBandwidth = e.videoBandwidth, this._audioCodec = e.audioCodec, this._videoCodec = e.videoCodec, this._type = e.type, "media" === this._type)
                                  if (e.stream) {
                                      const t = e.stream.getVideoTracks(),
                                          n = e.stream.getAudioTracks(),
                                          r = this._getReceiveOnlyState(e);
                                      t.length > 0 ? t.forEach(t => this._pc.addTrack(t, e.stream)) : r.video && this._pc.addTransceiver("video", {
                                          direction: "recvonly"
                                      }), n.length > 0 ? n.forEach(t => this._pc.addTrack(t, e.stream)) : r.audio && this._pc.addTransceiver("audio", {
                                          direction: "recvonly"
                                      })
                                  } else this.originator && (this._pc.addTransceiver("audio", {
                                      direction: "recvonly"
                                  }), this._pc.addTransceiver("video", {
                                      direction: "recvonly"
                                  }));
                              if (this.originator) {
                                  if ("data" === this._type) {
                                      const t = e.label || "",
                                          n = e.dcInit || {},
                                          r = this._pc.createDataChannel(t, n);
                                      this.emit(E.EVENTS.dcCreated.key, r)
                                  }
                              } else await this.handleOffer(e.offer)
                          }
                          replaceStream(e) {
                              if (!this._pc) return;
                              this._isNegotiationAllowed = !0;
                              const t = this,
                                  n = e.getVideoTracks(),
                                  r = e.getAudioTracks(),
                                  i = this._pc.getSenders(),
                                  o = i.find(e => e.track && "video" === e.track.kind),
                                  s = i.find(e => e.track && "audio" === e.track.kind);

                              function a(e, n, r) {
                                  void 0 === n && void 0 === e || (void 0 !== n ? void 0 !== e ? e.track.id !== n.id && e.replaceTrack(n) : t._pc.addTrack(n, r) : t._pc.removeTrack(e))
                              }
                              a(o, n[0], e), a(s, r[0], e)
                          }
                          async handleOffer(e) {
                              if (this._lastOffer && e && this._lastOffer.sdp === e.sdp) return;
                              if (this._isNegotiationAllowed = !0, e || (e = this._lastOffer), this._lastOffer = e, "have-remote-offer" === this._pc.signalingState) return void this._offerQueue.push(e);
                              await this._setRemoteDescription(e);
                              const t = await this._makeAnswerSdp().catch(e => p.error(e));
                              this.emit(E.EVENTS.answerCreated.key, t)
                          }
                          async handleAnswer(e) {
                              this._isNegotiationAllowed = !0, this._isExpectingAnswer ? (await this._setRemoteDescription(e), this._isExpectingAnswer = !1) : this._pc.onnegotiationneeded && this._pc.onnegotiationneeded()
                          }
                          async handleCandidate(e) {
                              await this._pc.addIceCandidate(new RTCIceCandidate(e)).then(() => p.log("Successfully added ICE candidate")).catch(e => p.error("Failed to add ICE candidate", e))
                          }
                          cleanup() {
                              p.log("Cleaning up PeerConnection"), !this._pc || "closed" === this._pc.readyState && "closed" === this._pc.signalingState || this._pc.close(), this._pc = null
                          }
                          _createPeerConnection(e = {}) {
                              return p.log("Creating RTCPeerConnection"), e.sdpSemantics = "unified-plan", new RTCPeerConnection(e)
                          }
                          _setupPCListeners() {
                              const e = this._pc;
                              e.ontrack = e => {
                                  p.log("Received remote media stream track"), e.streams.forEach(e => {
                                      this.emit(E.EVENTS.addStream.key, e)
                                  })
                              }, e.ondatachannel = e => {
                                  p.log("Received data channel");
                                  const t = e.channel;
                                  this.emit(E.EVENTS.dcCreated.key, t)
                              }, e.onicecandidate = e => {
                                  e.candidate && "" !== e.candidate.candidate ? (p.log("Generated ICE candidate for:", e.candidate), this.emit(E.EVENTS.iceCandidate.key, e.candidate)) : p.log("ICE candidates gathering complete")
                              }, e.oniceconnectionstatechange = () => {
                                  switch (e.iceConnectionState) {
                                      case "completed":
                                          p.log("iceConnectionState is completed"), e.onicecandidate = () => {};
                                          break;
                                      case "disconnected":
                                          p.log("iceConnectionState is disconnected, trying reconnect by browser");
                                          break;
                                      case "failed":
                                          p.log("iceConnectionState is failed, closing connection"), this.emit(E.EVENTS.iceConnectionFailed.key);
                                          break;
                                      default:
                                          p.log("iceConnectionState is " + e.iceConnectionState)
                                  }
                              }, e.onconnectionstatechange = () => {
                                  p.log("connectionState is " + e.connectionState), "failed" === e.connectionState && "disconnected" === e.iceConnectionState && (p.log("connectionState is failed, closing connection"), this.emit(E.EVENTS.iceConnectionFailed.key))
                              }, e.onnegotiationneeded = async () => {
                                  if (p.log("`negotiationneeded` triggered"), "stable" === e.signalingState && this._isNegotiationAllowed) {
                                      if (this._isNegotiationAllowed = !1, this.originator) {
                                          const e = await this._makeOfferSdp();
                                          this._setLocalDescription(e), this.emit(E.EVENTS.negotiationNeeded.key)
                                      } else this._replaceStreamCalled && this.handleOffer();
                                      this._replaceStreamCalled = !1
                                  }
                              }, e.onsignalingstatechange = () => {
                                  if (p.log("signalingState is " + e.signalingState), "stable" === e.signalingState) {
                                      const e = this._offerQueue.shift();
                                      e && this.handleOffer(e)
                                  }
                              }
                          }
                          async _makeOfferSdp() {
                              let e;
                              try {
                                  e = await this._pc.createOffer()
                              } catch (e) {
                                  throw e.type = "webrtc", p.error(e), this.emit(E.EVENTS.error.key, e), p.log("Failed to createOffer, ", e), e
                              }
                              return p.log("Created offer."), this._audioBandwidth && (e.sdp = w.addAudioBandwidth(e.sdp, this._audioBandwidth)), this._videoBandwidth && (e.sdp = w.addVideoBandwidth(e.sdp, this._videoBandwidth)), this._audioCodec && (e.sdp = w.filterAudioCodec(e.sdp, this._audioCodec)), this._videoCodec && (e.sdp = w.filterVideoCodec(e.sdp, this._videoCodec)), e
                          }
                          async _makeAnswerSdp() {
                              let e;
                              try {
                                  e = await this._pc.createAnswer()
                              } catch (e) {
                                  throw e.type = "webrtc", p.error(e), this.emit(E.EVENTS.error.key, e), p.log("Failed to createAnswer, ", e), e
                              }
                              p.log("Created answer."), this._audioBandwidth && (e.sdp = w.addAudioBandwidth(e.sdp, this._audioBandwidth)), this._videoBandwidth && (e.sdp = w.addVideoBandwidth(e.sdp, this._videoBandwidth)), this._audioCodec && (e.sdp = w.filterAudioCodec(e.sdp, this._audioCodec)), this._videoCodec && (e.sdp = w.filterVideoCodec(e.sdp, this._videoCodec));
                              try {
                                  await this._pc.setLocalDescription(e)
                              } catch (e) {
                                  throw e.type = "webrtc", p.error(e), this.emit(E.EVENTS.error.key, e), p.log("Failed to setLocalDescription, ", e), e
                              }
                              return p.log("Set localDescription: answer"), p.log("Setting local description " + JSON.stringify(e.sdp)), e
                          }
                          async _setLocalDescription(e) {
                              p.log("Setting local description " + JSON.stringify(e.sdp));
                              try {
                                  await this._pc.setLocalDescription(e)
                              } catch (e) {
                                  throw e.type = "webrtc", p.error(e), this.emit(E.EVENTS.error.key, e), p.log("Failed to setLocalDescription, ", e), e
                              }
                              p.log("Set localDescription: offer"), this._isExpectingAnswer = !0, this.emit(E.EVENTS.offerCreated.key, e)
                          }
                          async _setRemoteDescription(e) {
                              p.log("Setting remote description " + JSON.stringify(e));
                              try {
                                  await this._pc.setRemoteDescription(new RTCSessionDescription(e)), this.hasRemoteDescription = !0
                              } catch (e) {
                                  throw e.type = "webrtc", p.error(e), this.emit(E.EVENTS.error.key, e), p.log("Failed to setRemoteDescription: ", e), e
                              }
                              p.log("Set remoteDescription:", e.type)
                          }
                          _getReceiveOnlyState(e = {}) {
                              const t = {
                                      audio: !1,
                                      video: !1
                                  },
                                  n = e.stream instanceof MediaStream,
                                  r = !!n && 0 !== e.stream.getAudioTracks().length,
                                  i = !!n && 0 !== e.stream.getVideoTracks().length;
                              return !1 === n && void 0 === e.audioReceiveEnabled && void 0 === e.videoReceiveEnabled ? (t.audio = !0, t.video = !0, t) : (e.audioReceiveEnabled && !1 === r && (t.audio = !0), e.videoReceiveEnabled && !1 === i && (t.video = !0), !1 === e.audioReceiveEnabled && r && p.warn("Option audioReceiveEnabled will be treated as true, because passed stream has MediaStreamTrack(kind = audio)"), !1 === e.videoReceiveEnabled && i && p.warn("Option videoReceiveEnabled will be treated as true, because passed stream has MediaStreamTrack(kind = video)"), t)
                          }
                          static get EVENTS() {
                              return _
                          }
                      }
                      var S = E,
                          k = n("./node_modules/detect-browser/index.js"),
                          C = {
                              validateId: function(e) {
                                  return !e || /^[A-Za-z0-9_-]+(?:[ _-][A-Za-z0-9]+)*$/.exec(e)
                              },
                              validateKey: function(e) {
                                  return !e || /^[a-z0-9]{8}(-[a-z0-9]{4}){3}-[a-z0-9]{12}$/.exec(e)
                              },
                              randomId: function() {
                                  return (Math.random().toString(36) + "0000000000000000000").substr(2, 16)
                              },
                              randomToken: function() {
                                  return Math.random().toString(36).substr(2)
                              },
                              joinArrayBuffers: function(e) {
                                  const t = e.reduce((e, t) => e + t.byteLength, 0),
                                      n = new Uint8Array(t);
                                  let r = 0;
                                  for (const t of e) n.set(new Uint8Array(t), r), r += t.byteLength;
                                  return n.buffer
                              },
                              blobToArrayBuffer: function(e, t) {
                                  const n = new FileReader;
                                  n.onload = e => {
                                      t(e.target.result)
                                  }, n.readAsArrayBuffer(e)
                              },
                              isSecure: function() {
                                  return "https:" === location.protocol
                              },
                              detectBrowser: function() {
                                  const {
                                      name: e,
                                      version: t
                                  } = Object(k.detect)(), [n, r, i] = t.split(".").map(e => parseInt(e));
                                  return {
                                      name: e,
                                      major: n,
                                      minor: r,
                                      patch: i
                                  }
                              },
                              isPlanBSafari: function() {
                                  const {
                                      name: e
                                  } = Object(k.detect)();
                                  return ("safari" === e || "ios" === e) && !RTCRtpTransceiver.prototype.hasOwnProperty("currentDirection")
                              }
                          };
                      const x = new s.a(["candidate", "offer", "answer", "close", "forceClose"]);
                      class T extends i.a {
                          constructor(e, t) {
                              if (super(), t = t || {}, this.constructor === T) throw new TypeError("Cannot construct Connection instances directly");
                              this._options = t, this.open = !1, this.type = void 0, this.metadata = this._options.metadata, this.remoteId = e, this._negotiator = new S, this._idPrefix = "c_", this._randomIdSuffix = C.randomToken(), this._setupNegotiatorMessageHandlers()
                          }
                          get id() {
                              return this._options.connectionId || this._idPrefix + this._randomIdSuffix
                          }
                          async handleAnswer(e) {
                              this._pcAvailable ? (await this._negotiator.handleAnswer(e.answer), this.open = !0, this._handleQueuedMessages()) : (p.log(`Queuing ANSWER message in ${this.id} from ${this.remoteId}`), this._queuedMessages.push({
                                  type: d.MESSAGE_TYPES.SERVER.ANSWER.key,
                                  payload: e
                              }))
                          }
                          handleCandidate(e) {
                              !this._negotiator.originator || this._negotiator.hasRemoteDescription ? this._pcAvailable ? this._negotiator.handleCandidate(e.candidate) : (p.log(`Queuing CANDIDATE message in ${this.id} from ${this.remoteId}`), this._queuedMessages.push({
                                  type: d.MESSAGE_TYPES.SERVER.CANDIDATE.key,
                                  payload: e
                              })) : this._queuedMessages.push({
                                  type: d.MESSAGE_TYPES.SERVER.CANDIDATE.key,
                                  payload: e
                              })
                          }
                          updateOffer(e) {
                              this.open ? this._negotiator.handleOffer(e.offer) : this._options.payload = e
                          }
                          getPeerConnection() {
                              return this.open ? this._negotiator._pc : null
                          }
                          _handleQueuedMessages() {
                              for (const e of this._queuedMessages) switch (e.type) {
                                  case d.MESSAGE_TYPES.SERVER.ANSWER.key:
                                      this.handleAnswer(e.payload);
                                      break;
                                  case d.MESSAGE_TYPES.SERVER.CANDIDATE.key:
                                      this.handleCandidate(e.payload);
                                      break;
                                  default:
                                      p.warn("Unrecognized message type:", e.type, "from peer:", this.remoteId)
                              }
                              this._queuedMessages = []
                          }
                          close(e = !1) {
                              this.open && (this.open = !1, this._negotiator.cleanup(), this.emit(T.EVENTS.close.key), e && this.emit(T.EVENTS.forceClose.key))
                          }
                          _setupNegotiatorMessageHandlers() {
                              this._negotiator.on(S.EVENTS.answerCreated.key, e => {
                                  const t = {
                                      answer: e,
                                      dst: this.remoteId,
                                      connectionId: this.id,
                                      connectionType: this.type
                                  };
                                  this.emit(T.EVENTS.answer.key, t)
                              }), this._negotiator.on(S.EVENTS.offerCreated.key, e => {
                                  const t = {
                                      offer: e,
                                      dst: this.remoteId,
                                      connectionId: this.id,
                                      connectionType: this.type,
                                      metadata: this.metadata
                                  };
                                  this.serialization && (t.serialization = this.serialization), this.label && (t.label = this.label), this.dcInit && (t.dcInit = this.dcInit), this.emit(T.EVENTS.offer.key, t)
                              }), this._negotiator.on(S.EVENTS.iceCandidate.key, e => {
                                  const t = {
                                      candidate: e,
                                      dst: this.remoteId,
                                      connectionId: this.id,
                                      connectionType: this.type
                                  };
                                  this.emit(T.EVENTS.candidate.key, t)
                              }), this._negotiator.on(S.EVENTS.iceConnectionFailed.key, () => {
                                  this.close()
                              })
                          }
                          get peer() {
                              return p.warn(this.constructor.name + ".peer is deprecated and may be removed from a future version." + ` Please use ${this.constructor.name}.remoteId instead.`), this.remoteId
                          }
                          static get EVENTS() {
                              return x
                          }
                      }
                      var A = T,
                          O = n("./node_modules/js-binarypack/lib/binarypack.js"),
                          P = n.n(O),
                          N = n("./node_modules/object-sizeof/index.js"),
                          M = n.n(N);
                      const R = new s.a(["open", "data", "error"]);
                      R.extend(A.EVENTS.enums);
                      const j = new s.a(["binary", "binary-utf8", "json", "none"]);
                      class B extends A {
                          constructor(e, t) {
                              if (super(e, t), this._idPrefix = "dc_", this.type = "data", this._isOnOpenCalled = !1, this.label = this._options.label || this.id, this.dcInit = this._options.dcInit || {}, this.serialization = B.SERIALIZATIONS.binary.key, this._options.serialization) {
                                  if (!B.SERIALIZATIONS.get(this._options.serialization)) throw new Error("Invalid serialization");
                                  this.serialization = this._options.serialization, this._isUnreliableDCInit(this.dcInit) && (p.warn("You can not specify serialization with unreliable mode enabled."), this.serialization = B.SERIALIZATIONS.binary.key)
                              }
                              this._sendBuffer = [], this._receivedData = {}, this._queuedMessages = this._options.queuedMessages || [], this._negotiator.on(S.EVENTS.dcCreated.key, e => {
                                  this._dc = e, this._dc.binaryType = "arraybuffer", this._setupMessageHandlers(), this._isOnOpenCalled || "open" !== this._dc.readyState || this._dc.onopen()
                              }), this._options.payload && (this._options.payload.pcConfig = this._options.pcConfig)
                          }
                          async startConnection() {
                              await this._negotiator.startConnection(this._options.payload || {
                                  originator: !0,
                                  type: "data",
                                  label: this.label,
                                  dcInit: this.dcInit,
                                  pcConfig: this._options.pcConfig
                              }), this._pcAvailable = !0, this._handleQueuedMessages()
                          }
                          _setupMessageHandlers() {
                              this._dc.onopen = () => {
                                  this._isOnOpenCalled || (p.log("Data channel connection success"), this.open = !0, this._isOnOpenCalled = !0, this.emit(B.EVENTS.open.key))
                              }, this._dc.onmessage = e => {
                                  this._handleDataMessage(e)
                              }, this._dc.onclose = () => {
                                  p.log("DataChannel closed for:", this.id), this.close()
                              }, this._dc.onerror = e => {
                                  p.error(e)
                              }
                          }
                          _handleDataMessage(e) {
                              if (this.serialization === B.SERIALIZATIONS.none.key) return void this.emit(B.EVENTS.data.key, e.data);
                              if (this.serialization === B.SERIALIZATIONS.json.key) return void this.emit(B.EVENTS.data.key, JSON.parse(e.data));
                              const t = P.a.unpack(e.data);
                              let n = this._receivedData[t.id];
                              if (n || (n = this._receivedData[t.id] = {
                                      size: t.size,
                                      type: t.type,
                                      name: t.name,
                                      mimeType: t.mimeType,
                                      totalParts: t.totalParts,
                                      parts: new Array(t.totalParts),
                                      receivedParts: 0
                                  }), n.receivedParts++, n.parts[t.index] = t.data, n.receivedParts === n.totalParts) {
                                  delete this._receivedData[t.id];
                                  const e = C.joinArrayBuffers(n.parts),
                                      r = P.a.unpack(e);
                                  let i;
                                  switch (n.type) {
                                      case "Blob":
                                          i = new Blob([new Uint8Array(r)], {
                                              type: n.mimeType
                                          });
                                          break;
                                      case "File":
                                          i = new File([new Uint8Array(r)], n.name, {
                                              type: n.mimeType
                                          });
                                          break;
                                      default:
                                          i = r
                                  }
                                  this.emit(B.EVENTS.data.key, i)
                              }
                          }
                          send(e) {
                              if (!this.open) return void this.emit(B.EVENTS.error.key, new Error("Connection is not open. You should listen for the `open` event before sending messages."));
                              if (null == e) return;
                              if (this.serialization === B.SERIALIZATIONS.none.key) return this._sendBuffer.push(e), void this._startSendLoop();
                              if (this.serialization === B.SERIALIZATIONS.json.key) return this._sendBuffer.push(JSON.stringify(e)), void this._startSendLoop();
                              const t = P.a.pack(e),
                                  n = t.size,
                                  r = e.constructor.name,
                                  i = {
                                      id: C.randomId(),
                                      type: r,
                                      size: n,
                                      totalParts: 0
                                  };
                              "File" === r && (i.name = e.name), e instanceof Blob && (i.mimeType = e.type);
                              const o = d.maxChunkSize - M()(i),
                                  s = Math.ceil(n / o);
                              i.totalParts = s;
                              for (let e = 0; e < s; e++) {
                                  const n = t.slice(e * o, (e + 1) * o);
                                  i.index = e, i.data = n, C.blobToArrayBuffer(P.a.pack(i), e => {
                                      this._sendBuffer.push(e), this._startSendLoop()
                                  })
                              }
                          }
                          close(e) {
                              super.close(e), this._isOnOpenCalled = !1
                          }
                          _startSendLoop() {
                              this.sendInterval || (this.sendInterval = setInterval(() => {
                                  const e = this._sendBuffer.shift();
                                  try {
                                      this._dc.send(e)
                                  } catch (t) {
                                      this._sendBuffer.push(e)
                                  }
                                  0 === this._sendBuffer.length && (clearInterval(this.sendInterval), this.sendInterval = void 0)
                              }, d.sendInterval))
                          }
                          _isUnreliableDCInit(e) {
                              return !!e && ("maxRetransmits" in e || "maxPacketLifeTime" in e)
                          }
                          static get SERIALIZATIONS() {
                              return j
                          }
                          static get EVENTS() {
                              return R
                          }
                      }
                      var F = B;
                      const I = new s.a(["stream"]);
                      I.extend(A.EVENTS.enums);
                      class L extends A {
                          constructor(e, t) {
                              super(e, t), this._idPrefix = "mc_", this.type = "media", this.localStream = this._options.stream, this._queuedMessages = this._options.queuedMessages || [], this._pcAvailable = !1
                          }
                          async startConnection() {
                              this._options.originator && (await this._negotiator.startConnection({
                                  type: "media",
                                  stream: this.localStream,
                                  originator: this._options.originator,
                                  pcConfig: this._options.pcConfig,
                                  videoBandwidth: this._options.videoBandwidth,
                                  audioBandwidth: this._options.audioBandwidth,
                                  videoCodec: this._options.videoCodec,
                                  audioCodec: this._options.audioCodec,
                                  videoReceiveEnabled: this._options.videoReceiveEnabled,
                                  audioReceiveEnabled: this._options.audioReceiveEnabled
                              }), this._pcAvailable = !0, this._handleQueuedMessages())
                          }
                          answer(e, t = {}) {
                              this.localStream ? p.warn("localStream already exists on this MediaConnection. Are you answering a call twice?") : (this._options.payload.stream = e, this.localStream = e, this._negotiator.startConnection({
                                  type: "media",
                                  stream: this.localStream,
                                  originator: !1,
                                  offer: this._options.payload.offer,
                                  pcConfig: this._options.pcConfig,
                                  audioBandwidth: t.audioBandwidth,
                                  videoBandwidth: t.videoBandwidth,
                                  videoCodec: t.videoCodec,
                                  audioCodec: t.audioCodec
                              }), this._pcAvailable = !0, this._handleQueuedMessages(), this.open = !0)
                          }
                          replaceStream(e) {
                              this._negotiator.replaceStream(e), this.localStream = e
                          }
                          _setupNegotiatorMessageHandlers() {
                              super._setupNegotiatorMessageHandlers(), this._negotiator.on(S.EVENTS.addStream.key, e => {
                                  p.log("Receiving stream", e), this.remoteStream && this.remoteStream.id === e.id || (this.remoteStream = e, this.emit(L.EVENTS.stream.key, e))
                              })
                          }
                          static get EVENTS() {
                              return I
                          }
                      }
                      var D = L,
                          V = n("./node_modules/socket.io-parser/index.js"),
                          U = n.n(V),
                          z = n("./node_modules/has-binary2/index.js"),
                          q = n.n(z);
                      const W = new s.a(["stream", "open", "close", "peerJoin", "peerLeave", "error", "data", "log"]),
                          G = new s.a(["offer", "answer", "candidate", "leave", "close", "getLog", "broadcast"]);
                      class H extends i.a {
                          constructor(e, t, n = {}) {
                              if (super(), this.constructor === H) throw new TypeError("Cannot construct Room instances directly");
                              this.name = e, this._options = n, this._peerId = t, this._localStream = this._options.stream, this._pcConfig = this._options.pcConfig, this.lastSent = 0, this.messageQueue = [], this.sendIntervalID = null
                          }
                          validateSendDataSize(e) {
                              const t = q()([e]),
                                  n = {
                                      type: t ? U.a.BINARY_EVENT : U.a.EVENT,
                                      data: [e]
                                  };
                              let r;
                              (new U.a.Encoder).encode(n, e => {
                                  r = t ? e[1].byteLength : e[0].length
                              });
                              const i = d.maxDataSize;
                              if (r > i) throw new Error("The size of data to send must be less than 20 MB");
                              return !0
                          }
                          _sendData(e, t) {
                              const n = d.minBroadcastIntervalMs,
                                  r = Date.now(),
                                  i = r - this.lastsend;
                              if (0 == this.messageQueue.length && i >= n) return this.lastsend = r, void this.emit(t, e);
                              this.messageQueue.push({
                                  msg: e,
                                  key: t
                              }), null === this.sendIntervalID && (this.sendIntervalID = setInterval(() => {
                                  if (0 === this.messageQueue.length) return clearInterval(this.sendIntervalID), void(this.sendIntervalID = null);
                                  const e = this.messageQueue.shift();
                                  this.lastsend = Date.now(), this.emit(e.key, e.msg)
                              }, n))
                          }
                          handleData(e) {
                              const t = {
                                  data: e.data,
                                  src: e.src
                              };
                              this.emit(H.EVENTS.data.key, t)
                          }
                          handleLog(e) {
                              this.emit(H.EVENTS.log.key, e)
                          }
                          getLog() {
                              const e = {
                                  roomName: this.name
                              };
                              this.emit(H.MESSAGE_EVENTS.getLog.key, e)
                          }
                          static get EVENTS() {
                              return W
                          }
                          static get MESSAGE_EVENTS() {
                              return G
                          }
                      }
                      var $ = H;
                      const Y = new s.a([]);
                      Y.extend($.EVENTS.enums);
                      const K = new s.a(["offerRequest", "candidate"]);
                      K.extend($.MESSAGE_EVENTS.enums);
                      class Q extends $ {
                          constructor(e, t, n) {
                              super(e, t, n), this.remoteStreams = {}, this.members = [], this._open = !1, this._msidMap = {}, this._unknownStreams = {}, this._negotiator = new S
                          }
                          call(e) {
                              e && (this._localStream = e);
                              const t = {
                                  roomName: this.name
                              };
                              this.emit(Q.MESSAGE_EVENTS.offerRequest.key, t)
                          }
                          handleOffer(e) {
                              let t = e.offer;
                              C.isPlanBSafari() && (t = w.unifiedToPlanB(t)), this._connectionStarted ? this._negotiator.handleOffer(t) : (this._negotiator.startConnection({
                                  type: "media",
                                  stream: this._localStream,
                                  pcConfig: this._options.pcConfig,
                                  offer: t
                              }), this._setupNegotiatorMessageHandlers(), this._connectionStarted = !0)
                          }
                          _setupNegotiatorMessageHandlers() {
                              this._negotiator.on(S.EVENTS.addStream.key, e => {
                                  const t = e;
                                  if (this._msidMap[t.id]) {
                                      if (t.peerId = this._msidMap[t.id], t.peerId === this._peerId) return;
                                      const e = this.remoteStreams[t.id];
                                      if (e && e.id === t.id) return;
                                      this.remoteStreams[t.id] = t, this.emit(Q.EVENTS.stream.key, t), p.log(`Received remote media stream for ${t.peerId} in ${this.name}`)
                                  } else this._unknownStreams[t.id] = t
                              }), this._negotiator.on(S.EVENTS.negotiationNeeded.key, () => {
                                  const e = {
                                      roomName: this.name
                                  };
                                  this.emit(Q.MESSAGE_EVENTS.offerRequest.key, e)
                              }), this._negotiator.on(S.EVENTS.answerCreated.key, e => {
                                  C.isPlanBSafari() || (e.sdp = w.ensureUnifiedPlan(e.sdp));
                                  const t = {
                                      roomName: this.name,
                                      answer: e
                                  };
                                  this.emit(Q.MESSAGE_EVENTS.answer.key, t)
                              }), this._negotiator.on(S.EVENTS.iceConnectionFailed.key, () => {
                                  this.close()
                              }), this._negotiator.on(S.EVENTS.iceCandidate.key, e => {
                                  const t = {
                                      roomName: this.name,
                                      candidate: e
                                  };
                                  this.emit(Q.MESSAGE_EVENTS.candidate.key, t)
                              })
                          }
                          handleJoin(e) {
                              const {
                                  src: t,
                                  roomMembers: n
                              } = e;
                              if (t === this._peerId) return this._open = !0, this.members = n.filter(e => e !== t), this.call(this._localStream), void this.emit(Q.EVENTS.open.key);
                              this.members.push(t), this.emit(Q.EVENTS.peerJoin.key, t)
                          }
                          handleLeave(e) {
                              if (!this._open) return;
                              const t = e.src,
                                  n = this.members.indexOf(t);
                              n >= 0 && this.members.splice(n, 1);
                              for (const e in this.remoteStreams) this.remoteStreams[e].peerId === t && (delete this.remoteStreams[e], delete this._msidMap[e], delete this._unknownStreams[e]);
                              this.emit(Q.EVENTS.peerLeave.key, t)
                          }
                          send(e) {
                              if (!this._open) return;
                              if (!this.validateSendDataSize(e)) return;
                              const t = {
                                  roomName: this.name,
                                  data: e
                              };
                              this._sendData(t, Q.MESSAGE_EVENTS.broadcast.key)
                          }
                          close() {
                              if (!this._open) return;
                              this._negotiator && this._negotiator.cleanup(), this._open = !1;
                              const e = {
                                  roomName: this.name
                              };
                              this.emit(Q.MESSAGE_EVENTS.leave.key, e), this.emit(Q.EVENTS.close.key)
                          }
                          replaceStream(e) {
                              this._localStream = e, this._negotiator.replaceStream(e)
                          }
                          updateMsidMap(e = {}) {
                              this._msidMap = e;
                              for (const e of Object.keys(this._unknownStreams))
                                  if (this._msidMap[e]) {
                                      const t = this._unknownStreams[e];
                                      if (t.peerId = this._msidMap[t.id], delete this._unknownStreams[e], t.peerId === this._peerId) return;
                                      this.remoteStreams[t.id] = t, this.emit(Q.EVENTS.stream.key, t)
                                  }
                          }
                          static get EVENTS() {
                              return Y
                          }
                          static get MESSAGE_EVENTS() {
                              return K
                          }
                      }
                      var J = Q;
                      const X = new s.a([]);
                      X.extend($.EVENTS.enums);
                      const Z = new s.a(["broadcastByDC", "getPeers"]);
                      Z.extend($.MESSAGE_EVENTS.enums);
                      class ee extends $ {
                          constructor(e, t, n) {
                              super(e, t, n), this.connections = {}, this._queuedMessages = {}
                          }
                          call(e) {
                              e && (this._localStream = e);
                              const t = {
                                  roomName: this.name,
                                  type: "media"
                              };
                              this.emit(ee.MESSAGE_EVENTS.getPeers.key, t)
                          }
                          connect() {
                              const e = {
                                  roomName: this.name,
                                  type: "data"
                              };
                              this.emit(ee.MESSAGE_EVENTS.getPeers.key, e)
                          }
                          makeMediaConnections(e) {
                              const t = {
                                  stream: this._localStream,
                                  pcConfig: this._pcConfig,
                                  originator: !0,
                                  videoBandwidth: this._options.videoBandwidth,
                                  audioBandwidth: this._options.audioBandwidth,
                                  videoCodec: this._options.videoCodec,
                                  audioCodec: this._options.audioCodec,
                                  videoReceiveEnabled: this._options.videoReceiveEnabled,
                                  audioReceiveEnabled: this._options.audioReceiveEnabled
                              };
                              this._makeConnections(e, "media", t)
                          }
                          makeDataConnections(e) {
                              const t = {
                                  pcConfig: this._pcConfig
                              };
                              this._makeConnections(e, "data", t)
                          }
                          handleJoin(e) {
                              const t = e.src;
                              if (t === this._peerId) return this.call(this._localStream), void this.emit(ee.EVENTS.open.key);
                              this.emit(ee.EVENTS.peerJoin.key, t)
                          }
                          handleLeave(e) {
                              const t = e.src;
                              this._deleteConnections(t), this.emit(ee.EVENTS.peerLeave.key, t)
                          }
                          handleOffer(e) {
                              const t = e.connectionId;
                              let n = this._getConnection(e.src, t);
                              if (n) n.updateOffer(e);
                              else if ("media" === e.connectionType) {
                                  if (this._hasConnection(e.src) && this._peerId > e.src) return;
                                  n = new D(e.src, {
                                      connectionId: t,
                                      payload: e,
                                      metadata: e.metadata,
                                      queuedMessages: this._queuedMessages[t],
                                      pcConfig: this._pcConfig
                                  }), n.startConnection(), p.log("MediaConnection created in OFFER"), this._addConnection(e.src, n), this._setupMessageHandlers(n), n.answer(this._localStream, {
                                      videoBandwidth: this._options.videoBandwidth,
                                      audioBandwidth: this._options.audioBandwidth,
                                      videoCodec: this._options.videoCodec,
                                      audioCodec: this._options.audioCodec,
                                      videoReceiveEnabled: this._options.videoReceiveEnabled,
                                      audioReceiveEnabled: this._options.audioReceiveEnabled
                                  })
                              } else p.warn("Received malformed connection type: " + e.connectionType)
                          }
                          handleAnswer(e) {
                              const t = this._getConnection(e.src, e.connectionId);
                              t && t.handleAnswer(e)
                          }
                          handleCandidate(e) {
                              const t = this._getConnection(e.src, e.connectionId);
                              t ? t.handleCandidate(e) : (void 0 === this._queuedMessages[e.connectionId] && (this._queuedMessages[e.connectionId] = []), this._queuedMessages[e.connectionId].push({
                                  type: d.MESSAGE_TYPES.SERVER.CANDIDATE.key,
                                  payload: e
                              }))
                          }
                          send(e) {
                              if (!this.validateSendDataSize(e)) return;
                              const t = {
                                  roomName: this.name,
                                  data: e
                              };
                              this._sendData(t, ee.MESSAGE_EVENTS.broadcast.key)
                          }
                          close() {
                              for (const e in this.connections) this.connections.hasOwnProperty(e) && this.connections[e].forEach(e => {
                                  e.close()
                              });
                              const e = {
                                  roomName: this.name
                              };
                              this.emit(ee.MESSAGE_EVENTS.leave.key, e), this.emit(ee.EVENTS.close.key)
                          }
                          replaceStream(e) {
                              this._localStream = e;
                              for (const t in this.connections) this.connections.hasOwnProperty(t) && this.connections[t].forEach(t => {
                                  "media" === t.type && t.replaceStream(e)
                              })
                          }
                          _addConnection(e, t) {
                              this.connections[e] || (this.connections[e] = []), this.connections[e].push(t)
                          }
                          _makeConnections(e, t, n) {
                              e.filter(e => e !== this._peerId).filter(e => !this._hasConnection(e)).forEach(e => {
                                  let r;
                                  switch (t) {
                                      case "data":
                                          r = new F(e, n);
                                          break;
                                      case "media":
                                          r = new D(e, n);
                                          break;
                                      default:
                                          return
                                  }
                                  r.startConnection(), this._addConnection(e, r), this._setupMessageHandlers(r), p.log(`${t} connection to ${e} created in ${this.name}`)
                              })
                          }
                          _deleteConnections(e) {
                              this.connections[e] && delete this.connections[e]
                          }
                          _getConnection(e, t) {
                              return this.connections && this.connections[e] ? this.connections[e].filter(e => e.id === t)[0] : null
                          }
                          _hasConnection(e) {
                              return this.connections[e] && this.connections[e].length > 0
                          }
                          _setupMessageHandlers(e) {
                              e.on(A.EVENTS.offer.key, e => {
                                  e.roomName = this.name, this.emit(ee.MESSAGE_EVENTS.offer.key, e)
                              }), e.on(A.EVENTS.answer.key, e => {
                                  e.roomName = this.name, this.emit(ee.MESSAGE_EVENTS.answer.key, e)
                              }), e.on(A.EVENTS.candidate.key, e => {
                                  e.roomName = this.name, this.emit(ee.MESSAGE_EVENTS.candidate.key, e)
                              }), "media" === e.type && e.on(D.EVENTS.stream.key, t => {
                                  t.peerId = e.remoteId, this.emit(ee.EVENTS.stream.key, t)
                              })
                          }
                          static get EVENTS() {
                              return X
                          }
                          static get MESSAGE_EVENTS() {
                              return Z
                          }
                      }
                      var te = ee;
                      const ne = new s.a(["open", "error", "call", "connection", "expiresin", "close", "disconnected"]);
                      class re extends i.a {
                          constructor(e, t) {
                              super(), this.connections = {}, this.rooms = {}, this._queuedMessages = {}, e && e.constructor === Object ? (t = e, e = void 0) : e && (e = e.toString());
                              const n = {
                                  debug: p.LOG_LEVELS.NONE,
                                  secure: !0,
                                  config: d.defaultConfig,
                                  turn: !0,
                                  dispatcherSecure: d.DISPATCHER_SECURE,
                                  dispatcherHost: d.DISPATCHER_HOST,
                                  dispatcherPort: d.DISPATCHER_PORT
                              };
                              this.options = Object.assign({}, n, t), this.options.token = C.randomToken(), p.setLogLevel(this.options.debug), C.validateId(e) ? C.validateKey(t.key) ? ("/" === this.options.host && (this.options.host = window.location.hostname), void 0 === t.secure && 443 !== this.options.port && (this.options.secure = void 0), this._initializeServerConnection(e)) : this._abort("invalid-key", `API KEY "${this.options.key}" is invalid`) : this._abort("invalid-id", `ID "${e}" is invalid`)
                          }
                          call(e, t, n = {}) {
                              if (!this._checkOpenStatus()) return;
                              n.originator = !0, n.stream = t, n.pcConfig = this._pcConfig;
                              const r = new D(e, n);
                              return r.startConnection(), p.log("MediaConnection created in call method"), this._addConnection(e, r), r
                          }
                          connect(e, t = {}) {
                              if (!this._checkOpenStatus()) return;
                              t.pcConfig = this._pcConfig;
                              const n = new F(e, t);
                              return n.startConnection(), p.log("DataConnection created in connect method"), this._addConnection(e, n), n
                          }
                          joinRoom(e, t = {}) {
                              if (this._checkOpenStatus()) {
                                  if (!e) {
                                      const e = new Error("Room name must be defined.");
                                      return e.type = "room-error", p.error(e), this.emit(re.EVENTS.error.key, e), null
                                  }
                                  return t.pcConfig = this._pcConfig, t.peerId = this.id, "sfu" === t.mode ? this._initializeSfuRoom(e, t) : this._initializeFullMeshRoom(e, t)
                              }
                          }
                          getConnection(e, t) {
                              if (this._checkOpenStatus()) {
                                  if (this.connections[e])
                                      for (const n of this.connections[e])
                                          if (n.id === t) return n;
                                  return null
                              }
                          }
                          get open() {
                              return this.socket && this.socket.isOpen
                          }
                          destroy() {
                              this._cleanup(), this.disconnect()
                          }
                          disconnect() {
                              this.open && (this.socket.close(), this.emit(re.EVENTS.disconnected.key, this.id))
                          }
                          reconnect() {
                              this.open || this.socket.reconnect()
                          }
                          updateCredential(e) {
                              this.socket.updateCredential(e)
                          }
                          listAllPeers(e) {
                              if (!this._checkOpenStatus()) return;
                              e = e || function() {};
                              const t = this,
                                  n = new XMLHttpRequest,
                                  r = `${this.socket.signalingServerUrl}/api/apikeys/${this.options.key}/clients/`;
                              n.open("get", r, !0), n.onerror = function() {
                                  t._abort("server-error", "Could not get peers from the server."), e([])
                              }, n.onreadystatechange = function() {
                                  if (4 === n.readyState)
                                      if (401 === n.status) {
                                          e([]);
                                          const n = new Error("It doesn't look like you have permission to list peers IDs. Please enable the SkyWay REST API on dashboard");
                                          n.type = "list-error", p.error(n), t.emit(re.EVENTS.error.key, n)
                                      } else 200 === n.status ? e(JSON.parse(n.responseText)) : e([])
                              }, n.send(null)
                          }
                          _checkOpenStatus() {
                              return this.open || this._emitNotConnectedError(), this.open
                          }
                          _emitNotConnectedError() {
                              p.warn("You cannot connect to a new Peer because you are not connecting to SkyWay server now.You can create a new Peer to reconnect, or call reconnect() on this peer if you believe its ID to still be available.");
                              const e = new Error("Cannot connect to new Peer before connecting to SkyWay server or after disconnecting from the server.");
                              e.type = "disconnected", p.error(e), this.emit(re.EVENTS.error.key, e)
                          }
                          _initializeServerConnection(e) {
                              this.socket = new g(this.options.key, {
                                  secure: this.options.secure,
                                  host: this.options.host,
                                  port: this.options.port,
                                  dispatcherSecure: this.options.dispatcherSecure,
                                  dispatcherHost: this.options.dispatcherHost,
                                  dispatcherPort: this.options.dispatcherPort
                              }), this._setupMessageHandlers(), this.socket.on("error", e => {
                                  this._abort("socket-error", e)
                              }), this.socket.on("disconnect", () => {
                                  this.disconnect();
                                  const e = new Error("Lost connection to server.");
                                  e.type = "socket-error", p.error(e), this.emit(re.EVENTS.error.key, e)
                              }), this.socket.start(e, this.options.token, this.options.credential)
                          }
                          _initializeSfuRoom(e, t = {}) {
                              if (this.rooms[e]) return this.rooms[e];
                              const n = new J(e, this.id, t);
                              this.rooms[e] = n, this._setupSFURoomMessageHandlers(n);
                              const r = {
                                  roomName: e,
                                  roomType: "sfu"
                              };
                              return this.socket.send(d.MESSAGE_TYPES.CLIENT.ROOM_JOIN.key, r), n
                          }
                          _initializeFullMeshRoom(e, t = {}) {
                              if (this.rooms[e]) return this.rooms[e];
                              const n = new te(e, this.id, t);
                              this.rooms[e] = n, this._setupMeshRoomMessageHandlers(n);
                              const r = {
                                  roomName: e,
                                  roomType: "mesh"
                              };
                              return this.socket.send(d.MESSAGE_TYPES.CLIENT.ROOM_JOIN.key, r), n
                          }
                          _setupMessageHandlers() {
                              this.socket.on(d.MESSAGE_TYPES.SERVER.OPEN.key, e => {
                                  this.id = e.peerId, this._pcConfig = Object.assign({}, this.options.config);
                                  const t = this._pcConfig.iceServers;
                                  this._pcConfig.iceServers = t ? t.slice() : [];
                                  const n = e.turnCredential;
                                  let r, i;
                                  if ("object" == typeof n ? (r = n.username, i = n.credential) : "string" == typeof n && (r = `${this.options.key}$${this.id}`, i = n), !0 === this.options.turn && r && i) {
                                      const e = [{
                                          protocol: "turn",
                                          transport: "tcp"
                                      }, {
                                          protocol: "turn",
                                          transport: "udp"
                                      }];
                                      "edge" !== C.detectBrowser().name && e.push({
                                          protocol: "turns",
                                          transport: "tcp"
                                      });
                                      for (const t of e) {
                                          const e = t.protocol,
                                              n = t.transport,
                                              o = {
                                                  urls: `${e}:${d.TURN_HOST}:${d.TURN_PORT}?transport=${n}`,
                                                  url: `${e}:${d.TURN_HOST}:${d.TURN_PORT}?transport=${n}`,
                                                  username: r,
                                                  credential: i
                                              };
                                          this._pcConfig.iceServers.push(o)
                                      }
                                      p.log("SkyWay TURN Server is available")
                                  } else p.log("SkyWay TURN Server is unavailable");
                                  this.emit(re.EVENTS.open.key, this.id)
                              }), this.socket.on(d.MESSAGE_TYPES.SERVER.ERROR.key, e => {
                                  const t = new Error(e.message);
                                  t.type = e.type, p.error(t), this.emit(re.EVENTS.error.key, t)
                              }), this.socket.on(d.MESSAGE_TYPES.SERVER.LEAVE.key, e => {
                                  p.log("Received leave message from " + e), this._cleanupPeer(e)
                              }), this.socket.on(d.MESSAGE_TYPES.SERVER.FORCE_CLOSE.key, ({
                                  src: e,
                                  connectionId: t
                              }) => {
                                  const n = this.getConnection(e, t);
                                  n && n.close(!1)
                              }), this.socket.on(d.MESSAGE_TYPES.SERVER.AUTH_EXPIRES_IN.key, e => {
                                  p.log("Credential expires in " + e), this.emit(re.EVENTS.expiresin.key, e)
                              }), this.socket.on(d.MESSAGE_TYPES.SERVER.OFFER.key, e => {
                                  const t = e.roomName;
                                  if (t) {
                                      const n = this.rooms[t];
                                      return void(n && n.handleOffer(e))
                                  }
                                  const n = e.connectionId;
                                  let r = this.getConnection(e.src, n);
                                  r ? r.updateOffer(e) : ("media" === e.connectionType ? (r = new D(e.src, {
                                      connectionId: n,
                                      payload: e,
                                      metadata: e.metadata,
                                      originator: !1,
                                      queuedMessages: this._queuedMessages[n],
                                      pcConfig: this._pcConfig
                                  }), r.startConnection(), p.log("MediaConnection created in OFFER"), this._addConnection(e.src, r), this.emit(re.EVENTS.call.key, r)) : "data" === e.connectionType ? (r = new F(e.src, {
                                      connectionId: n,
                                      payload: e,
                                      metadata: e.metadata,
                                      label: e.label,
                                      dcInit: e.dcInit,
                                      serialization: e.serialization,
                                      queuedMessages: this._queuedMessages[n],
                                      pcConfig: this._pcConfig
                                  }), r.startConnection(), p.log("DataConnection created in OFFER"), this._addConnection(e.src, r), this.emit(re.EVENTS.connection.key, r)) : p.warn("Received malformed connection type: ", e.connectionType), delete this._queuedMessages[n])
                              }), this.socket.on(d.MESSAGE_TYPES.SERVER.ANSWER.key, e => {
                                  const t = e.roomName;
                                  if (t) {
                                      const n = this.rooms[t];
                                      return void(n && n.handleAnswer(e))
                                  }
                                  const n = this.getConnection(e.src, e.connectionId);
                                  n ? n.handleAnswer(e) : this._storeMessage(d.MESSAGE_TYPES.SERVER.ANSWER.key, e)
                              }), this.socket.on(d.MESSAGE_TYPES.SERVER.CANDIDATE.key, e => {
                                  const t = e.roomName;
                                  if (t) {
                                      const n = this.rooms[t];
                                      return void(n && n.handleCandidate(e))
                                  }
                                  const n = this.getConnection(e.src, e.connectionId);
                                  n ? n.handleCandidate(e) : this._storeMessage(d.MESSAGE_TYPES.SERVER.CANDIDATE.key, e)
                              }), this.socket.on(d.MESSAGE_TYPES.SERVER.ROOM_USER_JOIN.key, e => {
                                  const t = this.rooms[e.roomName];
                                  t && t.handleJoin(e)
                              }), this.socket.on(d.MESSAGE_TYPES.SERVER.ROOM_USER_LEAVE.key, e => {
                                  const t = this.rooms[e.roomName];
                                  t && t.handleLeave(e)
                              }), this.socket.on(d.MESSAGE_TYPES.SERVER.ROOM_DATA.key, e => {
                                  const t = this.rooms[e.roomName];
                                  t && t.handleData(e)
                              }), this.socket.on(d.MESSAGE_TYPES.SERVER.ROOM_LOGS.key, e => {
                                  const t = this.rooms[e.roomName];
                                  t && t.handleLog(e.log)
                              }), this.socket.on(d.MESSAGE_TYPES.SERVER.ROOM_USERS.key, e => {
                                  const t = this.rooms[e.roomName];
                                  t && ("media" === e.type ? t.makeMediaConnections(e.userList) : t.makeDataConnections(e.userList))
                              }), this.socket.on(d.MESSAGE_TYPES.SERVER.SFU_OFFER.key, e => {
                                  const t = this.rooms[e.roomName];
                                  t && (t.updateMsidMap(e.msids), t.handleOffer(e))
                              })
                          }
                          _setupConnectionMessageHandlers(e) {
                              e.on(A.EVENTS.candidate.key, e => {
                                  this.socket.send(d.MESSAGE_TYPES.CLIENT.SEND_CANDIDATE.key, e)
                              }), e.on(A.EVENTS.answer.key, e => {
                                  this.socket.send(d.MESSAGE_TYPES.CLIENT.SEND_ANSWER.key, e)
                              }), e.on(A.EVENTS.offer.key, e => {
                                  this.socket.send(d.MESSAGE_TYPES.CLIENT.SEND_OFFER.key, e)
                              }), e.on(A.EVENTS.forceClose.key, () => {
                                  const t = {
                                      dst: e.remoteId,
                                      connectionId: e.id
                                  };
                                  this.socket.send(d.MESSAGE_TYPES.CLIENT.SEND_FORCE_CLOSE.key, t)
                              })
                          }
                          _setupRoomMessageHandlers(e) {
                              e.on(J.MESSAGE_EVENTS.broadcast.key, e => {
                                  this.socket.send(d.MESSAGE_TYPES.CLIENT.ROOM_SEND_DATA.key, e)
                              }), e.on(J.MESSAGE_EVENTS.getLog.key, e => {
                                  this.socket.send(d.MESSAGE_TYPES.CLIENT.ROOM_GET_LOGS.key, e)
                              }), e.on(J.MESSAGE_EVENTS.leave.key, t => {
                                  delete this.rooms[e.name], this.socket.send(d.MESSAGE_TYPES.CLIENT.ROOM_LEAVE.key, t)
                              })
                          }
                          _setupSFURoomMessageHandlers(e) {
                              this._setupRoomMessageHandlers(e), e.on(J.MESSAGE_EVENTS.offerRequest.key, e => {
                                  this.socket.send(d.MESSAGE_TYPES.CLIENT.SFU_GET_OFFER.key, e)
                              }), e.on(J.MESSAGE_EVENTS.answer.key, e => {
                                  this.socket.send(d.MESSAGE_TYPES.CLIENT.SFU_ANSWER.key, e)
                              }), e.on(J.MESSAGE_EVENTS.candidate.key, e => {
                                  this.socket.send(d.MESSAGE_TYPES.CLIENT.SFU_CANDIDATE.key, e)
                              })
                          }
                          _setupMeshRoomMessageHandlers(e) {
                              this._setupRoomMessageHandlers(e), e.on(te.MESSAGE_EVENTS.offer.key, e => {
                                  this.socket.send(d.MESSAGE_TYPES.CLIENT.SEND_OFFER.key, e)
                              }), e.on(te.MESSAGE_EVENTS.answer.key, e => {
                                  this.socket.send(d.MESSAGE_TYPES.CLIENT.SEND_ANSWER.key, e)
                              }), e.on(te.MESSAGE_EVENTS.candidate.key, e => {
                                  this.socket.send(d.MESSAGE_TYPES.CLIENT.SEND_CANDIDATE.key, e)
                              }), e.on(te.MESSAGE_EVENTS.getPeers.key, e => {
                                  this.socket.send(d.MESSAGE_TYPES.CLIENT.ROOM_GET_USERS.key, e)
                              })
                          }
                          _abort(e, t) {
                              p.error("Aborting!"), this.disconnect();
                              const n = new Error(t);
                              n.type = e, p.error(n), this.emit(re.EVENTS.error.key, n)
                          }
                          _addConnection(e, t) {
                              this.connections[e] || (this.connections[e] = []), this.connections[e].push(t), this._setupConnectionMessageHandlers(t)
                          }
                          _storeMessage(e, t) {
                              this._queuedMessages[t.connectionId] || (this._queuedMessages[t.connectionId] = []), this._queuedMessages[t.connectionId].push({
                                  type: e,
                                  payload: t
                              })
                          }
                          _cleanup() {
                              if (this.connections)
                                  for (const e of Object.keys(this.connections)) this._cleanupPeer(e);
                              this.emit(re.EVENTS.close.key)
                          }
                          _cleanupPeer(e) {
                              if (this.connections[e])
                                  for (const t of this.connections[e]) t.close()
                          }
                          static get EVENTS() {
                              return ne
                          }
                      }
                      t.default = re
                  },
              0:
                  /*!********************!*\
                    !*** ws (ignored) ***!
                    \********************/
                  /*! no static exports found */
                  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                  function(e, t) {}
          }).default
      }, e.exports = r()
  }, function(e, t, n) {
      "use strict";
      n.d(t, "a", (function() {
          return v
      }));
      var r = n(1),
          i = n(32),
          o = n(7),
          s = n(4),
          a = n(0),
          u = n(3),
          c = n(5);
      const l = ["👍", "👎", "👏", "✋", "🆗", "🆖", "🆒", "💯", "💩", "😭"];
      var d = ({
          onClickSend: e
      }) => Object(a.c)("div", {
          css: f
      }, l.map(t => Object(a.c)("div", {
          key: t,
          css: p
      }, Object(a.c)("button", {
          css: h,
          onClick: () => e(t)
      }, Object(a.c)("i", {
          css: m
      }, t)))));
      const f = Object(a.b)({
              position: "absolute",
              top: 0,
              right: c.b,
              zIndex: c.d.modal
          }, ";label:wrapperStyle;"),
          p = Object(a.b)({
              height: c.b,
              width: c.b,
              boxSizing: "border-box",
              backgroundColor: u.c.gray,
              borderBottom: "1px solid " + u.c.white
          }, ";label:boxStyle;"),
          h = {
              name: "1vomiw9-reactionStyle",
              styles: "width:100%;height:100%;padding:0 1;appearance:none;border:none;background:none;color:inherit;cursor:pointer;;label:reactionStyle;"
          },
          m = {
              name: "112esbq-emojiStyle",
              styles: "font-size:1.0rem;font-style:normal;;label:emojiStyle;"
          };
      var g = n(6);
      const y = n.n(g)()("effect:reaction"),
          v = () => {
              const e = Object(r.useContext)(o.a),
                  t = Object(r.useCallback)((({
                      ui: e
                  }) => () => {
                      y("toggleReaction() -> " + !e.isReactionOpen), e.isReactionOpen = !e.isReactionOpen
                  })(e), [e]),
                  n = Object(r.useCallback)((({
                      room: e,
                      client: t
                  }) => n => {
                      y("sendReaction()", n), e.addReaction(t.displayName, n)
                  })(e), [e]),
                  {
                      ui: u
                  } = e;
              return Object(a.c)(i.a, null, () => Object(a.c)(r.Fragment, null, Object(a.c)(s.c, {
                  name: "insert_emoticon",
                  onClick: t
              }), u.isReactionOpen ? Object(a.c)(d, {
                  onClickSend: n
              }) : null))
          }
  }, function(e, t, n) {
      "use strict";
      /** @license React v16.13.1
       * react.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */
      var r = n(16),
          i = "function" == typeof Symbol && Symbol.for,
          o = i ? Symbol.for("react.element") : 60103,
          s = i ? Symbol.for("react.portal") : 60106,
          a = i ? Symbol.for("react.fragment") : 60107,
          u = i ? Symbol.for("react.strict_mode") : 60108,
          c = i ? Symbol.for("react.profiler") : 60114,
          l = i ? Symbol.for("react.provider") : 60109,
          d = i ? Symbol.for("react.context") : 60110,
          f = i ? Symbol.for("react.forward_ref") : 60112,
          p = i ? Symbol.for("react.suspense") : 60113,
          h = i ? Symbol.for("react.memo") : 60115,
          m = i ? Symbol.for("react.lazy") : 60116,
          g = "function" == typeof Symbol && Symbol.iterator;

      function y(e) {
          for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
          return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      }
      var v = {
              isMounted: function() {
                  return !1
              },
              enqueueForceUpdate: function() {},
              enqueueReplaceState: function() {},
              enqueueSetState: function() {}
          },
          b = {};

      function w(e, t, n) {
          this.props = e, this.context = t, this.refs = b, this.updater = n || v
      }

      function _() {}

      function E(e, t, n) {
          this.props = e, this.context = t, this.refs = b, this.updater = n || v
      }
      w.prototype.isReactComponent = {}, w.prototype.setState = function(e, t) {
          if ("object" != typeof e && "function" != typeof e && null != e) throw Error(y(85));
          this.updater.enqueueSetState(this, e, t, "setState")
      }, w.prototype.forceUpdate = function(e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate")
      }, _.prototype = w.prototype;
      var S = E.prototype = new _;
      S.constructor = E, r(S, w.prototype), S.isPureReactComponent = !0;
      var k = {
              current: null
          },
          C = Object.prototype.hasOwnProperty,
          x = {
              key: !0,
              ref: !0,
              __self: !0,
              __source: !0
          };

      function T(e, t, n) {
          var r, i = {},
              s = null,
              a = null;
          if (null != t)
              for (r in void 0 !== t.ref && (a = t.ref), void 0 !== t.key && (s = "" + t.key), t) C.call(t, r) && !x.hasOwnProperty(r) && (i[r] = t[r]);
          var u = arguments.length - 2;
          if (1 === u) i.children = n;
          else if (1 < u) {
              for (var c = Array(u), l = 0; l < u; l++) c[l] = arguments[l + 2];
              i.children = c
          }
          if (e && e.defaultProps)
              for (r in u = e.defaultProps) void 0 === i[r] && (i[r] = u[r]);
          return {
              $$typeof: o,
              type: e,
              key: s,
              ref: a,
              props: i,
              _owner: k.current
          }
      }

      function A(e) {
          return "object" == typeof e && null !== e && e.$$typeof === o
      }
      var O = /\/+/g,
          P = [];

      function N(e, t, n, r) {
          if (P.length) {
              var i = P.pop();
              return i.result = e, i.keyPrefix = t, i.func = n, i.context = r, i.count = 0, i
          }
          return {
              result: e,
              keyPrefix: t,
              func: n,
              context: r,
              count: 0
          }
      }

      function M(e) {
          e.result = null, e.keyPrefix = null, e.func = null, e.context = null, e.count = 0, 10 > P.length && P.push(e)
      }

      function R(e, t, n) {
          return null == e ? 0 : function e(t, n, r, i) {
              var a = typeof t;
              "undefined" !== a && "boolean" !== a || (t = null);
              var u = !1;
              if (null === t) u = !0;
              else switch (a) {
                  case "string":
                  case "number":
                      u = !0;
                      break;
                  case "object":
                      switch (t.$$typeof) {
                          case o:
                          case s:
                              u = !0
                      }
              }
              if (u) return r(i, t, "" === n ? "." + j(t, 0) : n), 1;
              if (u = 0, n = "" === n ? "." : n + ":", Array.isArray(t))
                  for (var c = 0; c < t.length; c++) {
                      var l = n + j(a = t[c], c);
                      u += e(a, l, r, i)
                  } else if (null === t || "object" != typeof t ? l = null : l = "function" == typeof(l = g && t[g] || t["@@iterator"]) ? l : null, "function" == typeof l)
                      for (t = l.call(t), c = 0; !(a = t.next()).done;) u += e(a = a.value, l = n + j(a, c++), r, i);
                  else if ("object" === a) throw r = "" + t, Error(y(31, "[object Object]" === r ? "object with keys {" + Object.keys(t).join(", ") + "}" : r, ""));
              return u
          }(e, "", t, n)
      }

      function j(e, t) {
          return "object" == typeof e && null !== e && null != e.key ? function(e) {
              var t = {
                  "=": "=0",
                  ":": "=2"
              };
              return "$" + ("" + e).replace(/[=:]/g, (function(e) {
                  return t[e]
              }))
          }(e.key) : t.toString(36)
      }

      function B(e, t) {
          e.func.call(e.context, t, e.count++)
      }

      function F(e, t, n) {
          var r = e.result,
              i = e.keyPrefix;
          e = e.func.call(e.context, t, e.count++), Array.isArray(e) ? I(e, r, n, (function(e) {
              return e
          })) : null != e && (A(e) && (e = function(e, t) {
              return {
                  $$typeof: o,
                  type: e.type,
                  key: t,
                  ref: e.ref,
                  props: e.props,
                  _owner: e._owner
              }
          }(e, i + (!e.key || t && t.key === e.key ? "" : ("" + e.key).replace(O, "$&/") + "/") + n)), r.push(e))
      }

      function I(e, t, n, r, i) {
          var o = "";
          null != n && (o = ("" + n).replace(O, "$&/") + "/"), R(e, F, t = N(t, o, r, i)), M(t)
      }
      var L = {
          current: null
      };

      function D() {
          var e = L.current;
          if (null === e) throw Error(y(321));
          return e
      }
      var V = {
          ReactCurrentDispatcher: L,
          ReactCurrentBatchConfig: {
              suspense: null
          },
          ReactCurrentOwner: k,
          IsSomeRendererActing: {
              current: !1
          },
          assign: r
      };
      t.Children = {
          map: function(e, t, n) {
              if (null == e) return e;
              var r = [];
              return I(e, r, null, t, n), r
          },
          forEach: function(e, t, n) {
              if (null == e) return e;
              R(e, B, t = N(null, null, t, n)), M(t)
          },
          count: function(e) {
              return R(e, (function() {
                  return null
              }), null)
          },
          toArray: function(e) {
              var t = [];
              return I(e, t, null, (function(e) {
                  return e
              })), t
          },
          only: function(e) {
              if (!A(e)) throw Error(y(143));
              return e
          }
      }, t.Component = w, t.Fragment = a, t.Profiler = c, t.PureComponent = E, t.StrictMode = u, t.Suspense = p, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = V, t.cloneElement = function(e, t, n) {
          if (null == e) throw Error(y(267, e));
          var i = r({}, e.props),
              s = e.key,
              a = e.ref,
              u = e._owner;
          if (null != t) {
              if (void 0 !== t.ref && (a = t.ref, u = k.current), void 0 !== t.key && (s = "" + t.key), e.type && e.type.defaultProps) var c = e.type.defaultProps;
              for (l in t) C.call(t, l) && !x.hasOwnProperty(l) && (i[l] = void 0 === t[l] && void 0 !== c ? c[l] : t[l])
          }
          var l = arguments.length - 2;
          if (1 === l) i.children = n;
          else if (1 < l) {
              c = Array(l);
              for (var d = 0; d < l; d++) c[d] = arguments[d + 2];
              i.children = c
          }
          return {
              $$typeof: o,
              type: e.type,
              key: s,
              ref: a,
              props: i,
              _owner: u
          }
      }, t.createContext = function(e, t) {
          return void 0 === t && (t = null), (e = {
              $$typeof: d,
              _calculateChangedBits: t,
              _currentValue: e,
              _currentValue2: e,
              _threadCount: 0,
              Provider: null,
              Consumer: null
          }).Provider = {
              $$typeof: l,
              _context: e
          }, e.Consumer = e
      }, t.createElement = T, t.createFactory = function(e) {
          var t = T.bind(null, e);
          return t.type = e, t
      }, t.createRef = function() {
          return {
              current: null
          }
      }, t.forwardRef = function(e) {
          return {
              $$typeof: f,
              render: e
          }
      }, t.isValidElement = A, t.lazy = function(e) {
          return {
              $$typeof: m,
              _ctor: e,
              _status: -1,
              _result: null
          }
      }, t.memo = function(e, t) {
          return {
              $$typeof: h,
              type: e,
              compare: void 0 === t ? null : t
          }
      }, t.useCallback = function(e, t) {
          return D().useCallback(e, t)
      }, t.useContext = function(e, t) {
          return D().useContext(e, t)
      }, t.useDebugValue = function() {}, t.useEffect = function(e, t) {
          return D().useEffect(e, t)
      }, t.useImperativeHandle = function(e, t, n) {
          return D().useImperativeHandle(e, t, n)
      }, t.useLayoutEffect = function(e, t) {
          return D().useLayoutEffect(e, t)
      }, t.useMemo = function(e, t) {
          return D().useMemo(e, t)
      }, t.useReducer = function(e, t, n) {
          return D().useReducer(e, t, n)
      }, t.useRef = function(e) {
          return D().useRef(e)
      }, t.useState = function(e) {
          return D().useState(e)
      }, t.version = "16.13.1"
  }, function(e, t, n) {
      "use strict";
      /** @license React v16.13.1
       * react-dom.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */
      var r = n(1),
          i = n(16),
          o = n(19);

      function s(e) {
          for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
          return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      }
      if (!r) throw Error(s(227));

      function a(e, t, n, r, i, o, s, a, u) {
          var c = Array.prototype.slice.call(arguments, 3);
          try {
              t.apply(n, c)
          } catch (e) {
              this.onError(e)
          }
      }
      var u = !1,
          c = null,
          l = !1,
          d = null,
          f = {
              onError: function(e) {
                  u = !0, c = e
              }
          };

      function p(e, t, n, r, i, o, s, l, d) {
          u = !1, c = null, a.apply(f, arguments)
      }
      var h = null,
          m = null,
          g = null;

      function y(e, t, n) {
          var r = e.type || "unknown-event";
          e.currentTarget = g(n),
              function(e, t, n, r, i, o, a, f, h) {
                  if (p.apply(this, arguments), u) {
                      if (!u) throw Error(s(198));
                      var m = c;
                      u = !1, c = null, l || (l = !0, d = m)
                  }
              }(r, t, void 0, e), e.currentTarget = null
      }
      var v = null,
          b = {};

      function w() {
          if (v)
              for (var e in b) {
                  var t = b[e],
                      n = v.indexOf(e);
                  if (!(-1 < n)) throw Error(s(96, e));
                  if (!E[n]) {
                      if (!t.extractEvents) throw Error(s(97, e));
                      for (var r in E[n] = t, n = t.eventTypes) {
                          var i = void 0,
                              o = n[r],
                              a = t,
                              u = r;
                          if (S.hasOwnProperty(u)) throw Error(s(99, u));
                          S[u] = o;
                          var c = o.phasedRegistrationNames;
                          if (c) {
                              for (i in c) c.hasOwnProperty(i) && _(c[i], a, u);
                              i = !0
                          } else o.registrationName ? (_(o.registrationName, a, u), i = !0) : i = !1;
                          if (!i) throw Error(s(98, r, e))
                      }
                  }
              }
      }

      function _(e, t, n) {
          if (k[e]) throw Error(s(100, e));
          k[e] = t, C[e] = t.eventTypes[n].dependencies
      }
      var E = [],
          S = {},
          k = {},
          C = {};

      function x(e) {
          var t, n = !1;
          for (t in e)
              if (e.hasOwnProperty(t)) {
                  var r = e[t];
                  if (!b.hasOwnProperty(t) || b[t] !== r) {
                      if (b[t]) throw Error(s(102, t));
                      b[t] = r, n = !0
                  }
              } n && w()
      }
      var T = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement),
          A = null,
          O = null,
          P = null;

      function N(e) {
          if (e = m(e)) {
              if ("function" != typeof A) throw Error(s(280));
              var t = e.stateNode;
              t && (t = h(t), A(e.stateNode, e.type, t))
          }
      }

      function M(e) {
          O ? P ? P.push(e) : P = [e] : O = e
      }

      function R() {
          if (O) {
              var e = O,
                  t = P;
              if (P = O = null, N(e), t)
                  for (e = 0; e < t.length; e++) N(t[e])
          }
      }

      function j(e, t) {
          return e(t)
      }

      function B(e, t, n, r, i) {
          return e(t, n, r, i)
      }

      function F() {}
      var I = j,
          L = !1,
          D = !1;

      function V() {
          null === O && null === P || (F(), R())
      }

      function U(e, t, n) {
          if (D) return e(t, n);
          D = !0;
          try {
              return I(e, t, n)
          } finally {
              D = !1, V()
          }
      }
      var z = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          q = Object.prototype.hasOwnProperty,
          W = {},
          G = {};

      function H(e, t, n, r, i, o) {
          this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o
      }
      var $ = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e) {
          $[e] = new H(e, 0, !1, e, null, !1)
      })), [
          ["acceptCharset", "accept-charset"],
          ["className", "class"],
          ["htmlFor", "for"],
          ["httpEquiv", "http-equiv"]
      ].forEach((function(e) {
          var t = e[0];
          $[t] = new H(t, 1, !1, e[1], null, !1)
      })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) {
          $[e] = new H(e, 2, !1, e.toLowerCase(), null, !1)
      })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) {
          $[e] = new H(e, 2, !1, e, null, !1)
      })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e) {
          $[e] = new H(e, 3, !1, e.toLowerCase(), null, !1)
      })), ["checked", "multiple", "muted", "selected"].forEach((function(e) {
          $[e] = new H(e, 3, !0, e, null, !1)
      })), ["capture", "download"].forEach((function(e) {
          $[e] = new H(e, 4, !1, e, null, !1)
      })), ["cols", "rows", "size", "span"].forEach((function(e) {
          $[e] = new H(e, 6, !1, e, null, !1)
      })), ["rowSpan", "start"].forEach((function(e) {
          $[e] = new H(e, 5, !1, e.toLowerCase(), null, !1)
      }));
      var Y = /[\-:]([a-z])/g;

      function K(e) {
          return e[1].toUpperCase()
      }
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e) {
          var t = e.replace(Y, K);
          $[t] = new H(t, 1, !1, e, null, !1)
      })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e) {
          var t = e.replace(Y, K);
          $[t] = new H(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1)
      })), ["xml:base", "xml:lang", "xml:space"].forEach((function(e) {
          var t = e.replace(Y, K);
          $[t] = new H(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1)
      })), ["tabIndex", "crossOrigin"].forEach((function(e) {
          $[e] = new H(e, 1, !1, e.toLowerCase(), null, !1)
      })), $.xlinkHref = new H("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0), ["src", "href", "action", "formAction"].forEach((function(e) {
          $[e] = new H(e, 1, !1, e.toLowerCase(), null, !0)
      }));
      var Q = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

      function J(e, t, n, r) {
          var i = $.hasOwnProperty(t) ? $[t] : null;
          (null !== i ? 0 === i.type : !r && (2 < t.length && ("o" === t[0] || "O" === t[0]) && ("n" === t[1] || "N" === t[1]))) || (function(e, t, n, r) {
              if (null == t || function(e, t, n, r) {
                      if (null !== n && 0 === n.type) return !1;
                      switch (typeof t) {
                          case "function":
                          case "symbol":
                              return !0;
                          case "boolean":
                              return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                          default:
                              return !1
                      }
                  }(e, t, n, r)) return !0;
              if (r) return !1;
              if (null !== n) switch (n.type) {
                  case 3:
                      return !t;
                  case 4:
                      return !1 === t;
                  case 5:
                      return isNaN(t);
                  case 6:
                      return isNaN(t) || 1 > t
              }
              return !1
          }(t, n, i, r) && (n = null), r || null === i ? function(e) {
              return !!q.call(G, e) || !q.call(W, e) && (z.test(e) ? G[e] = !0 : (W[e] = !0, !1))
          }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = null === n ? 3 !== i.type && "" : n : (t = i.attributeName, r = i.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (i = i.type) || 4 === i && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
      }
      Q.hasOwnProperty("ReactCurrentDispatcher") || (Q.ReactCurrentDispatcher = {
          current: null
      }), Q.hasOwnProperty("ReactCurrentBatchConfig") || (Q.ReactCurrentBatchConfig = {
          suspense: null
      });
      var X = /^(.*)[\\\/]/,
          Z = "function" == typeof Symbol && Symbol.for,
          ee = Z ? Symbol.for("react.element") : 60103,
          te = Z ? Symbol.for("react.portal") : 60106,
          ne = Z ? Symbol.for("react.fragment") : 60107,
          re = Z ? Symbol.for("react.strict_mode") : 60108,
          ie = Z ? Symbol.for("react.profiler") : 60114,
          oe = Z ? Symbol.for("react.provider") : 60109,
          se = Z ? Symbol.for("react.context") : 60110,
          ae = Z ? Symbol.for("react.concurrent_mode") : 60111,
          ue = Z ? Symbol.for("react.forward_ref") : 60112,
          ce = Z ? Symbol.for("react.suspense") : 60113,
          le = Z ? Symbol.for("react.suspense_list") : 60120,
          de = Z ? Symbol.for("react.memo") : 60115,
          fe = Z ? Symbol.for("react.lazy") : 60116,
          pe = Z ? Symbol.for("react.block") : 60121,
          he = "function" == typeof Symbol && Symbol.iterator;

      function me(e) {
          return null === e || "object" != typeof e ? null : "function" == typeof(e = he && e[he] || e["@@iterator"]) ? e : null
      }

      function ge(e) {
          if (null == e) return null;
          if ("function" == typeof e) return e.displayName || e.name || null;
          if ("string" == typeof e) return e;
          switch (e) {
              case ne:
                  return "Fragment";
              case te:
                  return "Portal";
              case ie:
                  return "Profiler";
              case re:
                  return "StrictMode";
              case ce:
                  return "Suspense";
              case le:
                  return "SuspenseList"
          }
          if ("object" == typeof e) switch (e.$$typeof) {
              case se:
                  return "Context.Consumer";
              case oe:
                  return "Context.Provider";
              case ue:
                  var t = e.render;
                  return t = t.displayName || t.name || "", e.displayName || ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef");
              case de:
                  return ge(e.type);
              case pe:
                  return ge(e.render);
              case fe:
                  if (e = 1 === e._status ? e._result : null) return ge(e)
          }
          return null
      }

      function ye(e) {
          var t = "";
          do {
              e: switch (e.tag) {
                  case 3:
                  case 4:
                  case 6:
                  case 7:
                  case 10:
                  case 9:
                      var n = "";
                      break e;
                  default:
                      var r = e._debugOwner,
                          i = e._debugSource,
                          o = ge(e.type);
                      n = null, r && (n = ge(r.type)), r = o, o = "", i ? o = " (at " + i.fileName.replace(X, "") + ":" + i.lineNumber + ")" : n && (o = " (created by " + n + ")"), n = "\n    in " + (r || "Unknown") + o
              }
              t += n,
              e = e.return
          } while (e);
          return t
      }

      function ve(e) {
          switch (typeof e) {
              case "boolean":
              case "number":
              case "object":
              case "string":
              case "undefined":
                  return e;
              default:
                  return ""
          }
      }

      function be(e) {
          var t = e.type;
          return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
      }

      function we(e) {
          e._valueTracker || (e._valueTracker = function(e) {
              var t = be(e) ? "checked" : "value",
                  n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                  r = "" + e[t];
              if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
                  var i = n.get,
                      o = n.set;
                  return Object.defineProperty(e, t, {
                      configurable: !0,
                      get: function() {
                          return i.call(this)
                      },
                      set: function(e) {
                          r = "" + e, o.call(this, e)
                      }
                  }), Object.defineProperty(e, t, {
                      enumerable: n.enumerable
                  }), {
                      getValue: function() {
                          return r
                      },
                      setValue: function(e) {
                          r = "" + e
                      },
                      stopTracking: function() {
                          e._valueTracker = null, delete e[t]
                      }
                  }
              }
          }(e))
      }

      function _e(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
              r = "";
          return e && (r = be(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
      }

      function Ee(e, t) {
          var n = t.checked;
          return i({}, t, {
              defaultChecked: void 0,
              defaultValue: void 0,
              value: void 0,
              checked: null != n ? n : e._wrapperState.initialChecked
          })
      }

      function Se(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
              r = null != t.checked ? t.checked : t.defaultChecked;
          n = ve(null != t.value ? t.value : n), e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
          }
      }

      function ke(e, t) {
          null != (t = t.checked) && J(e, "checked", t, !1)
      }

      function Ce(e, t) {
          ke(e, t);
          var n = ve(t.value),
              r = t.type;
          if (null != n) "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
          t.hasOwnProperty("value") ? Te(e, t.type, n) : t.hasOwnProperty("defaultValue") && Te(e, t.type, ve(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
      }

      function xe(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
              var r = t.type;
              if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value)) return;
              t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
          }
          "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n)
      }

      function Te(e, t, n) {
          "number" === t && e.ownerDocument.activeElement === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
      }

      function Ae(e, t) {
          return e = i({
              children: void 0
          }, t), (t = function(e) {
              var t = "";
              return r.Children.forEach(e, (function(e) {
                  null != e && (t += e)
              })), t
          }(t.children)) && (e.children = t), e
      }

      function Oe(e, t, n, r) {
          if (e = e.options, t) {
              t = {};
              for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
              for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0)
          } else {
              for (n = "" + ve(n), t = null, i = 0; i < e.length; i++) {
                  if (e[i].value === n) return e[i].selected = !0, void(r && (e[i].defaultSelected = !0));
                  null !== t || e[i].disabled || (t = e[i])
              }
              null !== t && (t.selected = !0)
          }
      }

      function Pe(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(s(91));
          return i({}, t, {
              value: void 0,
              defaultValue: void 0,
              children: "" + e._wrapperState.initialValue
          })
      }

      function Ne(e, t) {
          var n = t.value;
          if (null == n) {
              if (n = t.children, t = t.defaultValue, null != n) {
                  if (null != t) throw Error(s(92));
                  if (Array.isArray(n)) {
                      if (!(1 >= n.length)) throw Error(s(93));
                      n = n[0]
                  }
                  t = n
              }
              null == t && (t = ""), n = t
          }
          e._wrapperState = {
              initialValue: ve(n)
          }
      }

      function Me(e, t) {
          var n = ve(t.value),
              r = ve(t.defaultValue);
          null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r)
      }

      function Re(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
      }
      var je = "http://www.w3.org/1999/xhtml",
          Be = "http://www.w3.org/2000/svg";

      function Fe(e) {
          switch (e) {
              case "svg":
                  return "http://www.w3.org/2000/svg";
              case "math":
                  return "http://www.w3.org/1998/Math/MathML";
              default:
                  return "http://www.w3.org/1999/xhtml"
          }
      }

      function Ie(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e ? Fe(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
      }
      var Le, De = function(e) {
          return "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
              MSApp.execUnsafeLocalFunction((function() {
                  return e(t, n)
              }))
          } : e
      }((function(e, t) {
          if (e.namespaceURI !== Be || "innerHTML" in e) e.innerHTML = t;
          else {
              for ((Le = Le || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Le.firstChild; e.firstChild;) e.removeChild(e.firstChild);
              for (; t.firstChild;) e.appendChild(t.firstChild)
          }
      }));

      function Ve(e, t) {
          if (t) {
              var n = e.firstChild;
              if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t)
          }
          e.textContent = t
      }

      function Ue(e, t) {
          var n = {};
          return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
      }
      var ze = {
              animationend: Ue("Animation", "AnimationEnd"),
              animationiteration: Ue("Animation", "AnimationIteration"),
              animationstart: Ue("Animation", "AnimationStart"),
              transitionend: Ue("Transition", "TransitionEnd")
          },
          qe = {},
          We = {};

      function Ge(e) {
          if (qe[e]) return qe[e];
          if (!ze[e]) return e;
          var t, n = ze[e];
          for (t in n)
              if (n.hasOwnProperty(t) && t in We) return qe[e] = n[t];
          return e
      }
      T && (We = document.createElement("div").style, "AnimationEvent" in window || (delete ze.animationend.animation, delete ze.animationiteration.animation, delete ze.animationstart.animation), "TransitionEvent" in window || delete ze.transitionend.transition);
      var He = Ge("animationend"),
          $e = Ge("animationiteration"),
          Ye = Ge("animationstart"),
          Ke = Ge("transitionend"),
          Qe = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
          Je = new("function" == typeof WeakMap ? WeakMap : Map);

      function Xe(e) {
          var t = Je.get(e);
          return void 0 === t && (t = new Map, Je.set(e, t)), t
      }

      function Ze(e) {
          var t = e,
              n = e;
          if (e.alternate)
              for (; t.return;) t = t.return;
          else {
              e = t;
              do {
                  0 != (1026 & (t = e).effectTag) && (n = t.return), e = t.return
              } while (e)
          }
          return 3 === t.tag ? n : null
      }

      function et(e) {
          if (13 === e.tag) {
              var t = e.memoizedState;
              if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)), null !== t) return t.dehydrated
          }
          return null
      }

      function tt(e) {
          if (Ze(e) !== e) throw Error(s(188))
      }

      function nt(e) {
          if (!(e = function(e) {
                  var t = e.alternate;
                  if (!t) {
                      if (null === (t = Ze(e))) throw Error(s(188));
                      return t !== e ? null : e
                  }
                  for (var n = e, r = t;;) {
                      var i = n.return;
                      if (null === i) break;
                      var o = i.alternate;
                      if (null === o) {
                          if (null !== (r = i.return)) {
                              n = r;
                              continue
                          }
                          break
                      }
                      if (i.child === o.child) {
                          for (o = i.child; o;) {
                              if (o === n) return tt(i), e;
                              if (o === r) return tt(i), t;
                              o = o.sibling
                          }
                          throw Error(s(188))
                      }
                      if (n.return !== r.return) n = i, r = o;
                      else {
                          for (var a = !1, u = i.child; u;) {
                              if (u === n) {
                                  a = !0, n = i, r = o;
                                  break
                              }
                              if (u === r) {
                                  a = !0, r = i, n = o;
                                  break
                              }
                              u = u.sibling
                          }
                          if (!a) {
                              for (u = o.child; u;) {
                                  if (u === n) {
                                      a = !0, n = o, r = i;
                                      break
                                  }
                                  if (u === r) {
                                      a = !0, r = o, n = i;
                                      break
                                  }
                                  u = u.sibling
                              }
                              if (!a) throw Error(s(189))
                          }
                      }
                      if (n.alternate !== r) throw Error(s(190))
                  }
                  if (3 !== n.tag) throw Error(s(188));
                  return n.stateNode.current === n ? e : t
              }(e))) return null;
          for (var t = e;;) {
              if (5 === t.tag || 6 === t.tag) return t;
              if (t.child) t.child.return = t, t = t.child;
              else {
                  if (t === e) break;
                  for (; !t.sibling;) {
                      if (!t.return || t.return === e) return null;
                      t = t.return
                  }
                  t.sibling.return = t.return, t = t.sibling
              }
          }
          return null
      }

      function rt(e, t) {
          if (null == t) throw Error(s(30));
          return null == e ? t : Array.isArray(e) ? Array.isArray(t) ? (e.push.apply(e, t), e) : (e.push(t), e) : Array.isArray(t) ? [e].concat(t) : [e, t]
      }

      function it(e, t, n) {
          Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e)
      }
      var ot = null;

      function st(e) {
          if (e) {
              var t = e._dispatchListeners,
                  n = e._dispatchInstances;
              if (Array.isArray(t))
                  for (var r = 0; r < t.length && !e.isPropagationStopped(); r++) y(e, t[r], n[r]);
              else t && y(e, t, n);
              e._dispatchListeners = null, e._dispatchInstances = null, e.isPersistent() || e.constructor.release(e)
          }
      }

      function at(e) {
          if (null !== e && (ot = rt(ot, e)), e = ot, ot = null, e) {
              if (it(e, st), ot) throw Error(s(95));
              if (l) throw e = d, l = !1, d = null, e
          }
      }

      function ut(e) {
          return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
      }

      function ct(e) {
          if (!T) return !1;
          var t = (e = "on" + e) in document;
          return t || ((t = document.createElement("div")).setAttribute(e, "return;"), t = "function" == typeof t[e]), t
      }
      var lt = [];

      function dt(e) {
          e.topLevelType = null, e.nativeEvent = null, e.targetInst = null, e.ancestors.length = 0, 10 > lt.length && lt.push(e)
      }

      function ft(e, t, n, r) {
          if (lt.length) {
              var i = lt.pop();
              return i.topLevelType = e, i.eventSystemFlags = r, i.nativeEvent = t, i.targetInst = n, i
          }
          return {
              topLevelType: e,
              eventSystemFlags: r,
              nativeEvent: t,
              targetInst: n,
              ancestors: []
          }
      }

      function pt(e) {
          var t = e.targetInst,
              n = t;
          do {
              if (!n) {
                  e.ancestors.push(n);
                  break
              }
              var r = n;
              if (3 === r.tag) r = r.stateNode.containerInfo;
              else {
                  for (; r.return;) r = r.return;
                  r = 3 !== r.tag ? null : r.stateNode.containerInfo
              }
              if (!r) break;
              5 !== (t = n.tag) && 6 !== t || e.ancestors.push(n), n = Tn(r)
          } while (n);
          for (n = 0; n < e.ancestors.length; n++) {
              t = e.ancestors[n];
              var i = ut(e.nativeEvent);
              r = e.topLevelType;
              var o = e.nativeEvent,
                  s = e.eventSystemFlags;
              0 === n && (s |= 64);
              for (var a = null, u = 0; u < E.length; u++) {
                  var c = E[u];
                  c && (c = c.extractEvents(r, t, o, i, s)) && (a = rt(a, c))
              }
              at(a)
          }
      }

      function ht(e, t, n) {
          if (!n.has(e)) {
              switch (e) {
                  case "scroll":
                      Yt(t, "scroll", !0);
                      break;
                  case "focus":
                  case "blur":
                      Yt(t, "focus", !0), Yt(t, "blur", !0), n.set("blur", null), n.set("focus", null);
                      break;
                  case "cancel":
                  case "close":
                      ct(e) && Yt(t, e, !0);
                      break;
                  case "invalid":
                  case "submit":
                  case "reset":
                      break;
                  default:
                      -1 === Qe.indexOf(e) && $t(e, t)
              }
              n.set(e, null)
          }
      }
      var mt, gt, yt, vt = !1,
          bt = [],
          wt = null,
          _t = null,
          Et = null,
          St = new Map,
          kt = new Map,
          Ct = [],
          xt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),
          Tt = "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");

      function At(e, t, n, r, i) {
          return {
              blockedOn: e,
              topLevelType: t,
              eventSystemFlags: 32 | n,
              nativeEvent: i,
              container: r
          }
      }

      function Ot(e, t) {
          switch (e) {
              case "focus":
              case "blur":
                  wt = null;
                  break;
              case "dragenter":
              case "dragleave":
                  _t = null;
                  break;
              case "mouseover":
              case "mouseout":
                  Et = null;
                  break;
              case "pointerover":
              case "pointerout":
                  St.delete(t.pointerId);
                  break;
              case "gotpointercapture":
              case "lostpointercapture":
                  kt.delete(t.pointerId)
          }
      }

      function Pt(e, t, n, r, i, o) {
          return null === e || e.nativeEvent !== o ? (e = At(t, n, r, i, o), null !== t && (null !== (t = An(t)) && gt(t)), e) : (e.eventSystemFlags |= r, e)
      }

      function Nt(e) {
          var t = Tn(e.target);
          if (null !== t) {
              var n = Ze(t);
              if (null !== n)
                  if (13 === (t = n.tag)) {
                      if (null !== (t = et(n))) return e.blockedOn = t, void o.unstable_runWithPriority(e.priority, (function() {
                          yt(n)
                      }))
                  } else if (3 === t && n.stateNode.hydrate) return void(e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
          }
          e.blockedOn = null
      }

      function Mt(e) {
          if (null !== e.blockedOn) return !1;
          var t = Xt(e.topLevelType, e.eventSystemFlags, e.container, e.nativeEvent);
          if (null !== t) {
              var n = An(t);
              return null !== n && gt(n), e.blockedOn = t, !1
          }
          return !0
      }

      function Rt(e, t, n) {
          Mt(e) && n.delete(t)
      }

      function jt() {
          for (vt = !1; 0 < bt.length;) {
              var e = bt[0];
              if (null !== e.blockedOn) {
                  null !== (e = An(e.blockedOn)) && mt(e);
                  break
              }
              var t = Xt(e.topLevelType, e.eventSystemFlags, e.container, e.nativeEvent);
              null !== t ? e.blockedOn = t : bt.shift()
          }
          null !== wt && Mt(wt) && (wt = null), null !== _t && Mt(_t) && (_t = null), null !== Et && Mt(Et) && (Et = null), St.forEach(Rt), kt.forEach(Rt)
      }

      function Bt(e, t) {
          e.blockedOn === t && (e.blockedOn = null, vt || (vt = !0, o.unstable_scheduleCallback(o.unstable_NormalPriority, jt)))
      }

      function Ft(e) {
          function t(t) {
              return Bt(t, e)
          }
          if (0 < bt.length) {
              Bt(bt[0], e);
              for (var n = 1; n < bt.length; n++) {
                  var r = bt[n];
                  r.blockedOn === e && (r.blockedOn = null)
              }
          }
          for (null !== wt && Bt(wt, e), null !== _t && Bt(_t, e), null !== Et && Bt(Et, e), St.forEach(t), kt.forEach(t), n = 0; n < Ct.length; n++)(r = Ct[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Ct.length && null === (n = Ct[0]).blockedOn;) Nt(n), null === n.blockedOn && Ct.shift()
      }
      var It = {},
          Lt = new Map,
          Dt = new Map,
          Vt = ["abort", "abort", He, "animationEnd", $e, "animationIteration", Ye, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", Ke, "transitionEnd", "waiting", "waiting"];

      function Ut(e, t) {
          for (var n = 0; n < e.length; n += 2) {
              var r = e[n],
                  i = e[n + 1],
                  o = "on" + (i[0].toUpperCase() + i.slice(1));
              o = {
                  phasedRegistrationNames: {
                      bubbled: o,
                      captured: o + "Capture"
                  },
                  dependencies: [r],
                  eventPriority: t
              }, Dt.set(r, t), Lt.set(r, o), It[i] = o
          }
      }
      Ut("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0), Ut("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1), Ut(Vt, 2);
      for (var zt = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), qt = 0; qt < zt.length; qt++) Dt.set(zt[qt], 0);
      var Wt = o.unstable_UserBlockingPriority,
          Gt = o.unstable_runWithPriority,
          Ht = !0;

      function $t(e, t) {
          Yt(t, e, !1)
      }

      function Yt(e, t, n) {
          var r = Dt.get(t);
          switch (void 0 === r ? 2 : r) {
              case 0:
                  r = Kt.bind(null, t, 1, e);
                  break;
              case 1:
                  r = Qt.bind(null, t, 1, e);
                  break;
              default:
                  r = Jt.bind(null, t, 1, e)
          }
          n ? e.addEventListener(t, r, !0) : e.addEventListener(t, r, !1)
      }

      function Kt(e, t, n, r) {
          L || F();
          var i = Jt,
              o = L;
          L = !0;
          try {
              B(i, e, t, n, r)
          } finally {
              (L = o) || V()
          }
      }

      function Qt(e, t, n, r) {
          Gt(Wt, Jt.bind(null, e, t, n, r))
      }

      function Jt(e, t, n, r) {
          if (Ht)
              if (0 < bt.length && -1 < xt.indexOf(e)) e = At(null, e, t, n, r), bt.push(e);
              else {
                  var i = Xt(e, t, n, r);
                  if (null === i) Ot(e, r);
                  else if (-1 < xt.indexOf(e)) e = At(i, e, t, n, r), bt.push(e);
                  else if (! function(e, t, n, r, i) {
                          switch (t) {
                              case "focus":
                                  return wt = Pt(wt, e, t, n, r, i), !0;
                              case "dragenter":
                                  return _t = Pt(_t, e, t, n, r, i), !0;
                              case "mouseover":
                                  return Et = Pt(Et, e, t, n, r, i), !0;
                              case "pointerover":
                                  var o = i.pointerId;
                                  return St.set(o, Pt(St.get(o) || null, e, t, n, r, i)), !0;
                              case "gotpointercapture":
                                  return o = i.pointerId, kt.set(o, Pt(kt.get(o) || null, e, t, n, r, i)), !0
                          }
                          return !1
                      }(i, e, t, n, r)) {
                      Ot(e, r), e = ft(e, r, null, t);
                      try {
                          U(pt, e)
                      } finally {
                          dt(e)
                      }
                  }
              }
      }

      function Xt(e, t, n, r) {
          if (null !== (n = Tn(n = ut(r)))) {
              var i = Ze(n);
              if (null === i) n = null;
              else {
                  var o = i.tag;
                  if (13 === o) {
                      if (null !== (n = et(i))) return n;
                      n = null
                  } else if (3 === o) {
                      if (i.stateNode.hydrate) return 3 === i.tag ? i.stateNode.containerInfo : null;
                      n = null
                  } else i !== n && (n = null)
              }
          }
          e = ft(e, r, n, t);
          try {
              U(pt, e)
          } finally {
              dt(e)
          }
          return null
      }
      var Zt = {
              animationIterationCount: !0,
              borderImageOutset: !0,
              borderImageSlice: !0,
              borderImageWidth: !0,
              boxFlex: !0,
              boxFlexGroup: !0,
              boxOrdinalGroup: !0,
              columnCount: !0,
              columns: !0,
              flex: !0,
              flexGrow: !0,
              flexPositive: !0,
              flexShrink: !0,
              flexNegative: !0,
              flexOrder: !0,
              gridArea: !0,
              gridRow: !0,
              gridRowEnd: !0,
              gridRowSpan: !0,
              gridRowStart: !0,
              gridColumn: !0,
              gridColumnEnd: !0,
              gridColumnSpan: !0,
              gridColumnStart: !0,
              fontWeight: !0,
              lineClamp: !0,
              lineHeight: !0,
              opacity: !0,
              order: !0,
              orphans: !0,
              tabSize: !0,
              widows: !0,
              zIndex: !0,
              zoom: !0,
              fillOpacity: !0,
              floodOpacity: !0,
              stopOpacity: !0,
              strokeDasharray: !0,
              strokeDashoffset: !0,
              strokeMiterlimit: !0,
              strokeOpacity: !0,
              strokeWidth: !0
          },
          en = ["Webkit", "ms", "Moz", "O"];

      function tn(e, t, n) {
          return null == t || "boolean" == typeof t || "" === t ? "" : n || "number" != typeof t || 0 === t || Zt.hasOwnProperty(e) && Zt[e] ? ("" + t).trim() : t + "px"
      }

      function nn(e, t) {
          for (var n in e = e.style, t)
              if (t.hasOwnProperty(n)) {
                  var r = 0 === n.indexOf("--"),
                      i = tn(n, t[n], r);
                  "float" === n && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i
              }
      }
      Object.keys(Zt).forEach((function(e) {
          en.forEach((function(t) {
              t = t + e.charAt(0).toUpperCase() + e.substring(1), Zt[t] = Zt[e]
          }))
      }));
      var rn = i({
          menuitem: !0
      }, {
          area: !0,
          base: !0,
          br: !0,
          col: !0,
          embed: !0,
          hr: !0,
          img: !0,
          input: !0,
          keygen: !0,
          link: !0,
          meta: !0,
          param: !0,
          source: !0,
          track: !0,
          wbr: !0
      });

      function on(e, t) {
          if (t) {
              if (rn[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(s(137, e, ""));
              if (null != t.dangerouslySetInnerHTML) {
                  if (null != t.children) throw Error(s(60));
                  if ("object" != typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(s(61))
              }
              if (null != t.style && "object" != typeof t.style) throw Error(s(62, ""))
          }
      }

      function sn(e, t) {
          if (-1 === e.indexOf("-")) return "string" == typeof t.is;
          switch (e) {
              case "annotation-xml":
              case "color-profile":
              case "font-face":
              case "font-face-src":
              case "font-face-uri":
              case "font-face-format":
              case "font-face-name":
              case "missing-glyph":
                  return !1;
              default:
                  return !0
          }
      }
      var an = je;

      function un(e, t) {
          var n = Xe(e = 9 === e.nodeType || 11 === e.nodeType ? e : e.ownerDocument);
          t = C[t];
          for (var r = 0; r < t.length; r++) ht(t[r], e, n)
      }

      function cn() {}

      function ln(e) {
          if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
          try {
              return e.activeElement || e.body
          } catch (t) {
              return e.body
          }
      }

      function dn(e) {
          for (; e && e.firstChild;) e = e.firstChild;
          return e
      }

      function fn(e, t) {
          var n, r = dn(e);
          for (e = 0; r;) {
              if (3 === r.nodeType) {
                  if (n = e + r.textContent.length, e <= t && n >= t) return {
                      node: r,
                      offset: t - e
                  };
                  e = n
              }
              e: {
                  for (; r;) {
                      if (r.nextSibling) {
                          r = r.nextSibling;
                          break e
                      }
                      r = r.parentNode
                  }
                  r = void 0
              }
              r = dn(r)
          }
      }

      function pn() {
          for (var e = window, t = ln(); t instanceof e.HTMLIFrameElement;) {
              try {
                  var n = "string" == typeof t.contentWindow.location.href
              } catch (e) {
                  n = !1
              }
              if (!n) break;
              t = ln((e = t.contentWindow).document)
          }
          return t
      }

      function hn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
      }
      var mn = null,
          gn = null;

      function yn(e, t) {
          switch (e) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                  return !!t.autoFocus
          }
          return !1
      }

      function vn(e, t) {
          return "textarea" === e || "option" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
      }
      var bn = "function" == typeof setTimeout ? setTimeout : void 0,
          wn = "function" == typeof clearTimeout ? clearTimeout : void 0;

      function _n(e) {
          for (; null != e; e = e.nextSibling) {
              var t = e.nodeType;
              if (1 === t || 3 === t) break
          }
          return e
      }

      function En(e) {
          e = e.previousSibling;
          for (var t = 0; e;) {
              if (8 === e.nodeType) {
                  var n = e.data;
                  if ("$" === n || "$!" === n || "$?" === n) {
                      if (0 === t) return e;
                      t--
                  } else "/$" === n && t++
              }
              e = e.previousSibling
          }
          return null
      }
      var Sn = Math.random().toString(36).slice(2),
          kn = "__reactInternalInstance$" + Sn,
          Cn = "__reactEventHandlers$" + Sn,
          xn = "__reactContainere$" + Sn;

      function Tn(e) {
          var t = e[kn];
          if (t) return t;
          for (var n = e.parentNode; n;) {
              if (t = n[xn] || n[kn]) {
                  if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
                      for (e = En(e); null !== e;) {
                          if (n = e[kn]) return n;
                          e = En(e)
                      }
                  return t
              }
              n = (e = n).parentNode
          }
          return null
      }

      function An(e) {
          return !(e = e[kn] || e[xn]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
      }

      function On(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(s(33))
      }

      function Pn(e) {
          return e[Cn] || null
      }

      function Nn(e) {
          do {
              e = e.return
          } while (e && 5 !== e.tag);
          return e || null
      }

      function Mn(e, t) {
          var n = e.stateNode;
          if (!n) return null;
          var r = h(n);
          if (!r) return null;
          n = r[t];
          e: switch (t) {
              case "onClick":
              case "onClickCapture":
              case "onDoubleClick":
              case "onDoubleClickCapture":
              case "onMouseDown":
              case "onMouseDownCapture":
              case "onMouseMove":
              case "onMouseMoveCapture":
              case "onMouseUp":
              case "onMouseUpCapture":
              case "onMouseEnter":
                  (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
                  break e;
              default:
                  e = !1
          }
          if (e) return null;
          if (n && "function" != typeof n) throw Error(s(231, t, typeof n));
          return n
      }

      function Rn(e, t, n) {
          (t = Mn(e, n.dispatchConfig.phasedRegistrationNames[t])) && (n._dispatchListeners = rt(n._dispatchListeners, t), n._dispatchInstances = rt(n._dispatchInstances, e))
      }

      function jn(e) {
          if (e && e.dispatchConfig.phasedRegistrationNames) {
              for (var t = e._targetInst, n = []; t;) n.push(t), t = Nn(t);
              for (t = n.length; 0 < t--;) Rn(n[t], "captured", e);
              for (t = 0; t < n.length; t++) Rn(n[t], "bubbled", e)
          }
      }

      function Bn(e, t, n) {
          e && n && n.dispatchConfig.registrationName && (t = Mn(e, n.dispatchConfig.registrationName)) && (n._dispatchListeners = rt(n._dispatchListeners, t), n._dispatchInstances = rt(n._dispatchInstances, e))
      }

      function Fn(e) {
          e && e.dispatchConfig.registrationName && Bn(e._targetInst, null, e)
      }

      function In(e) {
          it(e, jn)
      }
      var Ln = null,
          Dn = null,
          Vn = null;

      function Un() {
          if (Vn) return Vn;
          var e, t, n = Dn,
              r = n.length,
              i = "value" in Ln ? Ln.value : Ln.textContent,
              o = i.length;
          for (e = 0; e < r && n[e] === i[e]; e++);
          var s = r - e;
          for (t = 1; t <= s && n[r - t] === i[o - t]; t++);
          return Vn = i.slice(e, 1 < t ? 1 - t : void 0)
      }

      function zn() {
          return !0
      }

      function qn() {
          return !1
      }

      function Wn(e, t, n, r) {
          for (var i in this.dispatchConfig = e, this._targetInst = t, this.nativeEvent = n, e = this.constructor.Interface) e.hasOwnProperty(i) && ((t = e[i]) ? this[i] = t(n) : "target" === i ? this.target = r : this[i] = n[i]);
          return this.isDefaultPrevented = (null != n.defaultPrevented ? n.defaultPrevented : !1 === n.returnValue) ? zn : qn, this.isPropagationStopped = qn, this
      }

      function Gn(e, t, n, r) {
          if (this.eventPool.length) {
              var i = this.eventPool.pop();
              return this.call(i, e, t, n, r), i
          }
          return new this(e, t, n, r)
      }

      function Hn(e) {
          if (!(e instanceof this)) throw Error(s(279));
          e.destructor(), 10 > this.eventPool.length && this.eventPool.push(e)
      }

      function $n(e) {
          e.eventPool = [], e.getPooled = Gn, e.release = Hn
      }
      i(Wn.prototype, {
          preventDefault: function() {
              this.defaultPrevented = !0;
              var e = this.nativeEvent;
              e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = zn)
          },
          stopPropagation: function() {
              var e = this.nativeEvent;
              e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = zn)
          },
          persist: function() {
              this.isPersistent = zn
          },
          isPersistent: qn,
          destructor: function() {
              var e, t = this.constructor.Interface;
              for (e in t) this[e] = null;
              this.nativeEvent = this._targetInst = this.dispatchConfig = null, this.isPropagationStopped = this.isDefaultPrevented = qn, this._dispatchInstances = this._dispatchListeners = null
          }
      }), Wn.Interface = {
          type: null,
          target: null,
          currentTarget: function() {
              return null
          },
          eventPhase: null,
          bubbles: null,
          cancelable: null,
          timeStamp: function(e) {
              return e.timeStamp || Date.now()
          },
          defaultPrevented: null,
          isTrusted: null
      }, Wn.extend = function(e) {
          function t() {}

          function n() {
              return r.apply(this, arguments)
          }
          var r = this;
          t.prototype = r.prototype;
          var o = new t;
          return i(o, n.prototype), n.prototype = o, n.prototype.constructor = n, n.Interface = i({}, r.Interface, e), n.extend = r.extend, $n(n), n
      }, $n(Wn);
      var Yn = Wn.extend({
              data: null
          }),
          Kn = Wn.extend({
              data: null
          }),
          Qn = [9, 13, 27, 32],
          Jn = T && "CompositionEvent" in window,
          Xn = null;
      T && "documentMode" in document && (Xn = document.documentMode);
      var Zn = T && "TextEvent" in window && !Xn,
          er = T && (!Jn || Xn && 8 < Xn && 11 >= Xn),
          tr = String.fromCharCode(32),
          nr = {
              beforeInput: {
                  phasedRegistrationNames: {
                      bubbled: "onBeforeInput",
                      captured: "onBeforeInputCapture"
                  },
                  dependencies: ["compositionend", "keypress", "textInput", "paste"]
              },
              compositionEnd: {
                  phasedRegistrationNames: {
                      bubbled: "onCompositionEnd",
                      captured: "onCompositionEndCapture"
                  },
                  dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ")
              },
              compositionStart: {
                  phasedRegistrationNames: {
                      bubbled: "onCompositionStart",
                      captured: "onCompositionStartCapture"
                  },
                  dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ")
              },
              compositionUpdate: {
                  phasedRegistrationNames: {
                      bubbled: "onCompositionUpdate",
                      captured: "onCompositionUpdateCapture"
                  },
                  dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ")
              }
          },
          rr = !1;

      function ir(e, t) {
          switch (e) {
              case "keyup":
                  return -1 !== Qn.indexOf(t.keyCode);
              case "keydown":
                  return 229 !== t.keyCode;
              case "keypress":
              case "mousedown":
              case "blur":
                  return !0;
              default:
                  return !1
          }
      }

      function or(e) {
          return "object" == typeof(e = e.detail) && "data" in e ? e.data : null
      }
      var sr = !1;
      var ar = {
              eventTypes: nr,
              extractEvents: function(e, t, n, r) {
                  var i;
                  if (Jn) e: {
                      switch (e) {
                          case "compositionstart":
                              var o = nr.compositionStart;
                              break e;
                          case "compositionend":
                              o = nr.compositionEnd;
                              break e;
                          case "compositionupdate":
                              o = nr.compositionUpdate;
                              break e
                      }
                      o = void 0
                  }
                  else sr ? ir(e, n) && (o = nr.compositionEnd) : "keydown" === e && 229 === n.keyCode && (o = nr.compositionStart);
                  return o ? (er && "ko" !== n.locale && (sr || o !== nr.compositionStart ? o === nr.compositionEnd && sr && (i = Un()) : (Dn = "value" in (Ln = r) ? Ln.value : Ln.textContent, sr = !0)), o = Yn.getPooled(o, t, n, r), i ? o.data = i : null !== (i = or(n)) && (o.data = i), In(o), i = o) : i = null, (e = Zn ? function(e, t) {
                      switch (e) {
                          case "compositionend":
                              return or(t);
                          case "keypress":
                              return 32 !== t.which ? null : (rr = !0, tr);
                          case "textInput":
                              return (e = t.data) === tr && rr ? null : e;
                          default:
                              return null
                      }
                  }(e, n) : function(e, t) {
                      if (sr) return "compositionend" === e || !Jn && ir(e, t) ? (e = Un(), Vn = Dn = Ln = null, sr = !1, e) : null;
                      switch (e) {
                          case "paste":
                              return null;
                          case "keypress":
                              if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                                  if (t.char && 1 < t.char.length) return t.char;
                                  if (t.which) return String.fromCharCode(t.which)
                              }
                              return null;
                          case "compositionend":
                              return er && "ko" !== t.locale ? null : t.data;
                          default:
                              return null
                      }
                  }(e, n)) ? ((t = Kn.getPooled(nr.beforeInput, t, n, r)).data = e, In(t)) : t = null, null === i ? t : null === t ? i : [i, t]
              }
          },
          ur = {
              color: !0,
              date: !0,
              datetime: !0,
              "datetime-local": !0,
              email: !0,
              month: !0,
              number: !0,
              password: !0,
              range: !0,
              search: !0,
              tel: !0,
              text: !0,
              time: !0,
              url: !0,
              week: !0
          };

      function cr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!ur[e.type] : "textarea" === t
      }
      var lr = {
          change: {
              phasedRegistrationNames: {
                  bubbled: "onChange",
                  captured: "onChangeCapture"
              },
              dependencies: "blur change click focus input keydown keyup selectionchange".split(" ")
          }
      };

      function dr(e, t, n) {
          return (e = Wn.getPooled(lr.change, e, t, n)).type = "change", M(n), In(e), e
      }
      var fr = null,
          pr = null;

      function hr(e) {
          at(e)
      }

      function mr(e) {
          if (_e(On(e))) return e
      }

      function gr(e, t) {
          if ("change" === e) return t
      }
      var yr = !1;

      function vr() {
          fr && (fr.detachEvent("onpropertychange", br), pr = fr = null)
      }

      function br(e) {
          if ("value" === e.propertyName && mr(pr))
              if (e = dr(pr, e, ut(e)), L) at(e);
              else {
                  L = !0;
                  try {
                      j(hr, e)
                  } finally {
                      L = !1, V()
                  }
              }
      }

      function wr(e, t, n) {
          "focus" === e ? (vr(), pr = n, (fr = t).attachEvent("onpropertychange", br)) : "blur" === e && vr()
      }

      function _r(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e) return mr(pr)
      }

      function Er(e, t) {
          if ("click" === e) return mr(t)
      }

      function Sr(e, t) {
          if ("input" === e || "change" === e) return mr(t)
      }
      T && (yr = ct("input") && (!document.documentMode || 9 < document.documentMode));
      var kr = {
              eventTypes: lr,
              _isInputEventSupported: yr,
              extractEvents: function(e, t, n, r) {
                  var i = t ? On(t) : window,
                      o = i.nodeName && i.nodeName.toLowerCase();
                  if ("select" === o || "input" === o && "file" === i.type) var s = gr;
                  else if (cr(i))
                      if (yr) s = Sr;
                      else {
                          s = _r;
                          var a = wr
                      }
                  else(o = i.nodeName) && "input" === o.toLowerCase() && ("checkbox" === i.type || "radio" === i.type) && (s = Er);
                  if (s && (s = s(e, t))) return dr(s, n, r);
                  a && a(e, i, t), "blur" === e && (e = i._wrapperState) && e.controlled && "number" === i.type && Te(i, "number", i.value)
              }
          },
          Cr = Wn.extend({
              view: null,
              detail: null
          }),
          xr = {
              Alt: "altKey",
              Control: "ctrlKey",
              Meta: "metaKey",
              Shift: "shiftKey"
          };

      function Tr(e) {
          var t = this.nativeEvent;
          return t.getModifierState ? t.getModifierState(e) : !!(e = xr[e]) && !!t[e]
      }

      function Ar() {
          return Tr
      }
      var Or = 0,
          Pr = 0,
          Nr = !1,
          Mr = !1,
          Rr = Cr.extend({
              screenX: null,
              screenY: null,
              clientX: null,
              clientY: null,
              pageX: null,
              pageY: null,
              ctrlKey: null,
              shiftKey: null,
              altKey: null,
              metaKey: null,
              getModifierState: Ar,
              button: null,
              buttons: null,
              relatedTarget: function(e) {
                  return e.relatedTarget || (e.fromElement === e.srcElement ? e.toElement : e.fromElement)
              },
              movementX: function(e) {
                  if ("movementX" in e) return e.movementX;
                  var t = Or;
                  return Or = e.screenX, Nr ? "mousemove" === e.type ? e.screenX - t : 0 : (Nr = !0, 0)
              },
              movementY: function(e) {
                  if ("movementY" in e) return e.movementY;
                  var t = Pr;
                  return Pr = e.screenY, Mr ? "mousemove" === e.type ? e.screenY - t : 0 : (Mr = !0, 0)
              }
          }),
          jr = Rr.extend({
              pointerId: null,
              width: null,
              height: null,
              pressure: null,
              tangentialPressure: null,
              tiltX: null,
              tiltY: null,
              twist: null,
              pointerType: null,
              isPrimary: null
          }),
          Br = {
              mouseEnter: {
                  registrationName: "onMouseEnter",
                  dependencies: ["mouseout", "mouseover"]
              },
              mouseLeave: {
                  registrationName: "onMouseLeave",
                  dependencies: ["mouseout", "mouseover"]
              },
              pointerEnter: {
                  registrationName: "onPointerEnter",
                  dependencies: ["pointerout", "pointerover"]
              },
              pointerLeave: {
                  registrationName: "onPointerLeave",
                  dependencies: ["pointerout", "pointerover"]
              }
          },
          Fr = {
              eventTypes: Br,
              extractEvents: function(e, t, n, r, i) {
                  var o = "mouseover" === e || "pointerover" === e,
                      s = "mouseout" === e || "pointerout" === e;
                  if (o && 0 == (32 & i) && (n.relatedTarget || n.fromElement) || !s && !o) return null;
                  (o = r.window === r ? r : (o = r.ownerDocument) ? o.defaultView || o.parentWindow : window, s) ? (s = t, null !== (t = (t = n.relatedTarget || n.toElement) ? Tn(t) : null) && (t !== Ze(t) || 5 !== t.tag && 6 !== t.tag) && (t = null)) : s = null;
                  if (s === t) return null;
                  if ("mouseout" === e || "mouseover" === e) var a = Rr,
                      u = Br.mouseLeave,
                      c = Br.mouseEnter,
                      l = "mouse";
                  else "pointerout" !== e && "pointerover" !== e || (a = jr, u = Br.pointerLeave, c = Br.pointerEnter, l = "pointer");
                  if (e = null == s ? o : On(s), o = null == t ? o : On(t), (u = a.getPooled(u, s, n, r)).type = l + "leave", u.target = e, u.relatedTarget = o, (n = a.getPooled(c, t, n, r)).type = l + "enter", n.target = o, n.relatedTarget = e, l = t, (r = s) && l) e: {
                      for (c = l, s = 0, e = a = r; e; e = Nn(e)) s++;
                      for (e = 0, t = c; t; t = Nn(t)) e++;
                      for (; 0 < s - e;) a = Nn(a),
                      s--;
                      for (; 0 < e - s;) c = Nn(c),
                      e--;
                      for (; s--;) {
                          if (a === c || a === c.alternate) break e;
                          a = Nn(a), c = Nn(c)
                      }
                      a = null
                  }
                  else a = null;
                  for (c = a, a = []; r && r !== c && (null === (s = r.alternate) || s !== c);) a.push(r), r = Nn(r);
                  for (r = []; l && l !== c && (null === (s = l.alternate) || s !== c);) r.push(l), l = Nn(l);
                  for (l = 0; l < a.length; l++) Bn(a[l], "bubbled", u);
                  for (l = r.length; 0 < l--;) Bn(r[l], "captured", n);
                  return 0 == (64 & i) ? [u] : [u, n]
              }
          };
      var Ir = "function" == typeof Object.is ? Object.is : function(e, t) {
              return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
          },
          Lr = Object.prototype.hasOwnProperty;

      function Dr(e, t) {
          if (Ir(e, t)) return !0;
          if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
          var n = Object.keys(e),
              r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++)
              if (!Lr.call(t, n[r]) || !Ir(e[n[r]], t[n[r]])) return !1;
          return !0
      }
      var Vr = T && "documentMode" in document && 11 >= document.documentMode,
          Ur = {
              select: {
                  phasedRegistrationNames: {
                      bubbled: "onSelect",
                      captured: "onSelectCapture"
                  },
                  dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")
              }
          },
          zr = null,
          qr = null,
          Wr = null,
          Gr = !1;

      function Hr(e, t) {
          var n = t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
          return Gr || null == zr || zr !== ln(n) ? null : ("selectionStart" in (n = zr) && hn(n) ? n = {
              start: n.selectionStart,
              end: n.selectionEnd
          } : n = {
              anchorNode: (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection()).anchorNode,
              anchorOffset: n.anchorOffset,
              focusNode: n.focusNode,
              focusOffset: n.focusOffset
          }, Wr && Dr(Wr, n) ? null : (Wr = n, (e = Wn.getPooled(Ur.select, qr, e, t)).type = "select", e.target = zr, In(e), e))
      }
      var $r = {
              eventTypes: Ur,
              extractEvents: function(e, t, n, r, i, o) {
                  if (!(o = !(i = o || (r.window === r ? r.document : 9 === r.nodeType ? r : r.ownerDocument)))) {
                      e: {
                          i = Xe(i),
                          o = C.onSelect;
                          for (var s = 0; s < o.length; s++)
                              if (!i.has(o[s])) {
                                  i = !1;
                                  break e
                              } i = !0
                      }
                      o = !i
                  }
                  if (o) return null;
                  switch (i = t ? On(t) : window, e) {
                      case "focus":
                          (cr(i) || "true" === i.contentEditable) && (zr = i, qr = t, Wr = null);
                          break;
                      case "blur":
                          Wr = qr = zr = null;
                          break;
                      case "mousedown":
                          Gr = !0;
                          break;
                      case "contextmenu":
                      case "mouseup":
                      case "dragend":
                          return Gr = !1, Hr(n, r);
                      case "selectionchange":
                          if (Vr) break;
                      case "keydown":
                      case "keyup":
                          return Hr(n, r)
                  }
                  return null
              }
          },
          Yr = Wn.extend({
              animationName: null,
              elapsedTime: null,
              pseudoElement: null
          }),
          Kr = Wn.extend({
              clipboardData: function(e) {
                  return "clipboardData" in e ? e.clipboardData : window.clipboardData
              }
          }),
          Qr = Cr.extend({
              relatedTarget: null
          });

      function Jr(e) {
          var t = e.keyCode;
          return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
      }
      var Xr = {
              Esc: "Escape",
              Spacebar: " ",
              Left: "ArrowLeft",
              Up: "ArrowUp",
              Right: "ArrowRight",
              Down: "ArrowDown",
              Del: "Delete",
              Win: "OS",
              Menu: "ContextMenu",
              Apps: "ContextMenu",
              Scroll: "ScrollLock",
              MozPrintableKey: "Unidentified"
          },
          Zr = {
              8: "Backspace",
              9: "Tab",
              12: "Clear",
              13: "Enter",
              16: "Shift",
              17: "Control",
              18: "Alt",
              19: "Pause",
              20: "CapsLock",
              27: "Escape",
              32: " ",
              33: "PageUp",
              34: "PageDown",
              35: "End",
              36: "Home",
              37: "ArrowLeft",
              38: "ArrowUp",
              39: "ArrowRight",
              40: "ArrowDown",
              45: "Insert",
              46: "Delete",
              112: "F1",
              113: "F2",
              114: "F3",
              115: "F4",
              116: "F5",
              117: "F6",
              118: "F7",
              119: "F8",
              120: "F9",
              121: "F10",
              122: "F11",
              123: "F12",
              144: "NumLock",
              145: "ScrollLock",
              224: "Meta"
          },
          ei = Cr.extend({
              key: function(e) {
                  if (e.key) {
                      var t = Xr[e.key] || e.key;
                      if ("Unidentified" !== t) return t
                  }
                  return "keypress" === e.type ? 13 === (e = Jr(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? Zr[e.keyCode] || "Unidentified" : ""
              },
              location: null,
              ctrlKey: null,
              shiftKey: null,
              altKey: null,
              metaKey: null,
              repeat: null,
              locale: null,
              getModifierState: Ar,
              charCode: function(e) {
                  return "keypress" === e.type ? Jr(e) : 0
              },
              keyCode: function(e) {
                  return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
              },
              which: function(e) {
                  return "keypress" === e.type ? Jr(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
              }
          }),
          ti = Rr.extend({
              dataTransfer: null
          }),
          ni = Cr.extend({
              touches: null,
              targetTouches: null,
              changedTouches: null,
              altKey: null,
              metaKey: null,
              ctrlKey: null,
              shiftKey: null,
              getModifierState: Ar
          }),
          ri = Wn.extend({
              propertyName: null,
              elapsedTime: null,
              pseudoElement: null
          }),
          ii = Rr.extend({
              deltaX: function(e) {
                  return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
              },
              deltaY: function(e) {
                  return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
              },
              deltaZ: null,
              deltaMode: null
          }),
          oi = {
              eventTypes: It,
              extractEvents: function(e, t, n, r) {
                  var i = Lt.get(e);
                  if (!i) return null;
                  switch (e) {
                      case "keypress":
                          if (0 === Jr(n)) return null;
                      case "keydown":
                      case "keyup":
                          e = ei;
                          break;
                      case "blur":
                      case "focus":
                          e = Qr;
                          break;
                      case "click":
                          if (2 === n.button) return null;
                      case "auxclick":
                      case "dblclick":
                      case "mousedown":
                      case "mousemove":
                      case "mouseup":
                      case "mouseout":
                      case "mouseover":
                      case "contextmenu":
                          e = Rr;
                          break;
                      case "drag":
                      case "dragend":
                      case "dragenter":
                      case "dragexit":
                      case "dragleave":
                      case "dragover":
                      case "dragstart":
                      case "drop":
                          e = ti;
                          break;
                      case "touchcancel":
                      case "touchend":
                      case "touchmove":
                      case "touchstart":
                          e = ni;
                          break;
                      case He:
                      case $e:
                      case Ye:
                          e = Yr;
                          break;
                      case Ke:
                          e = ri;
                          break;
                      case "scroll":
                          e = Cr;
                          break;
                      case "wheel":
                          e = ii;
                          break;
                      case "copy":
                      case "cut":
                      case "paste":
                          e = Kr;
                          break;
                      case "gotpointercapture":
                      case "lostpointercapture":
                      case "pointercancel":
                      case "pointerdown":
                      case "pointermove":
                      case "pointerout":
                      case "pointerover":
                      case "pointerup":
                          e = jr;
                          break;
                      default:
                          e = Wn
                  }
                  return In(t = e.getPooled(i, t, n, r)), t
              }
          };
      if (v) throw Error(s(101));
      v = Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")), w(), h = Pn, m = An, g = On, x({
          SimpleEventPlugin: oi,
          EnterLeaveEventPlugin: Fr,
          ChangeEventPlugin: kr,
          SelectEventPlugin: $r,
          BeforeInputEventPlugin: ar
      });
      var si = [],
          ai = -1;

      function ui(e) {
          0 > ai || (e.current = si[ai], si[ai] = null, ai--)
      }

      function ci(e, t) {
          ai++, si[ai] = e.current, e.current = t
      }
      var li = {},
          di = {
              current: li
          },
          fi = {
              current: !1
          },
          pi = li;

      function hi(e, t) {
          var n = e.type.contextTypes;
          if (!n) return li;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
          var i, o = {};
          for (i in n) o[i] = t[i];
          return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o
      }

      function mi(e) {
          return null != (e = e.childContextTypes)
      }

      function gi() {
          ui(fi), ui(di)
      }

      function yi(e, t, n) {
          if (di.current !== li) throw Error(s(168));
          ci(di, t), ci(fi, n)
      }

      function vi(e, t, n) {
          var r = e.stateNode;
          if (e = t.childContextTypes, "function" != typeof r.getChildContext) return n;
          for (var o in r = r.getChildContext())
              if (!(o in e)) throw Error(s(108, ge(t) || "Unknown", o));
          return i({}, n, {}, r)
      }

      function bi(e) {
          return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || li, pi = di.current, ci(di, e), ci(fi, fi.current), !0
      }

      function wi(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(s(169));
          n ? (e = vi(e, t, pi), r.__reactInternalMemoizedMergedChildContext = e, ui(fi), ui(di), ci(di, e)) : ui(fi), ci(fi, n)
      }
      var _i = o.unstable_runWithPriority,
          Ei = o.unstable_scheduleCallback,
          Si = o.unstable_cancelCallback,
          ki = o.unstable_requestPaint,
          Ci = o.unstable_now,
          xi = o.unstable_getCurrentPriorityLevel,
          Ti = o.unstable_ImmediatePriority,
          Ai = o.unstable_UserBlockingPriority,
          Oi = o.unstable_NormalPriority,
          Pi = o.unstable_LowPriority,
          Ni = o.unstable_IdlePriority,
          Mi = {},
          Ri = o.unstable_shouldYield,
          ji = void 0 !== ki ? ki : function() {},
          Bi = null,
          Fi = null,
          Ii = !1,
          Li = Ci(),
          Di = 1e4 > Li ? Ci : function() {
              return Ci() - Li
          };

      function Vi() {
          switch (xi()) {
              case Ti:
                  return 99;
              case Ai:
                  return 98;
              case Oi:
                  return 97;
              case Pi:
                  return 96;
              case Ni:
                  return 95;
              default:
                  throw Error(s(332))
          }
      }

      function Ui(e) {
          switch (e) {
              case 99:
                  return Ti;
              case 98:
                  return Ai;
              case 97:
                  return Oi;
              case 96:
                  return Pi;
              case 95:
                  return Ni;
              default:
                  throw Error(s(332))
          }
      }

      function zi(e, t) {
          return e = Ui(e), _i(e, t)
      }

      function qi(e, t, n) {
          return e = Ui(e), Ei(e, t, n)
      }

      function Wi(e) {
          return null === Bi ? (Bi = [e], Fi = Ei(Ti, Hi)) : Bi.push(e), Mi
      }

      function Gi() {
          if (null !== Fi) {
              var e = Fi;
              Fi = null, Si(e)
          }
          Hi()
      }

      function Hi() {
          if (!Ii && null !== Bi) {
              Ii = !0;
              var e = 0;
              try {
                  var t = Bi;
                  zi(99, (function() {
                      for (; e < t.length; e++) {
                          var n = t[e];
                          do {
                              n = n(!0)
                          } while (null !== n)
                      }
                  })), Bi = null
              } catch (t) {
                  throw null !== Bi && (Bi = Bi.slice(e + 1)), Ei(Ti, Gi), t
              } finally {
                  Ii = !1
              }
          }
      }

      function $i(e, t, n) {
          return 1073741821 - (1 + ((1073741821 - e + t / 10) / (n /= 10) | 0)) * n
      }

      function Yi(e, t) {
          if (e && e.defaultProps)
              for (var n in t = i({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
          return t
      }
      var Ki = {
              current: null
          },
          Qi = null,
          Ji = null,
          Xi = null;

      function Zi() {
          Xi = Ji = Qi = null
      }

      function eo(e) {
          var t = Ki.current;
          ui(Ki), e.type._context._currentValue = t
      }

      function to(e, t) {
          for (; null !== e;) {
              var n = e.alternate;
              if (e.childExpirationTime < t) e.childExpirationTime = t, null !== n && n.childExpirationTime < t && (n.childExpirationTime = t);
              else {
                  if (!(null !== n && n.childExpirationTime < t)) break;
                  n.childExpirationTime = t
              }
              e = e.return
          }
      }

      function no(e, t) {
          Qi = e, Xi = Ji = null, null !== (e = e.dependencies) && null !== e.firstContext && (e.expirationTime >= t && (Ps = !0), e.firstContext = null)
      }

      function ro(e, t) {
          if (Xi !== e && !1 !== t && 0 !== t)
              if ("number" == typeof t && 1073741823 !== t || (Xi = e, t = 1073741823), t = {
                      context: e,
                      observedBits: t,
                      next: null
                  }, null === Ji) {
                  if (null === Qi) throw Error(s(308));
                  Ji = t, Qi.dependencies = {
                      expirationTime: 0,
                      firstContext: t,
                      responders: null
                  }
              } else Ji = Ji.next = t;
          return e._currentValue
      }
      var io = !1;

      function oo(e) {
          e.updateQueue = {
              baseState: e.memoizedState,
              baseQueue: null,
              shared: {
                  pending: null
              },
              effects: null
          }
      }

      function so(e, t) {
          e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
              baseState: e.baseState,
              baseQueue: e.baseQueue,
              shared: e.shared,
              effects: e.effects
          })
      }

      function ao(e, t) {
          return (e = {
              expirationTime: e,
              suspenseConfig: t,
              tag: 0,
              payload: null,
              callback: null,
              next: null
          }).next = e
      }

      function uo(e, t) {
          if (null !== (e = e.updateQueue)) {
              var n = (e = e.shared).pending;
              null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
          }
      }

      function co(e, t) {
          var n = e.alternate;
          null !== n && so(n, e), null === (n = (e = e.updateQueue).baseQueue) ? (e.baseQueue = t.next = t, t.next = t) : (t.next = n.next, n.next = t)
      }

      function lo(e, t, n, r) {
          var o = e.updateQueue;
          io = !1;
          var s = o.baseQueue,
              a = o.shared.pending;
          if (null !== a) {
              if (null !== s) {
                  var u = s.next;
                  s.next = a.next, a.next = u
              }
              s = a, o.shared.pending = null, null !== (u = e.alternate) && (null !== (u = u.updateQueue) && (u.baseQueue = a))
          }
          if (null !== s) {
              u = s.next;
              var c = o.baseState,
                  l = 0,
                  d = null,
                  f = null,
                  p = null;
              if (null !== u)
                  for (var h = u;;) {
                      if ((a = h.expirationTime) < r) {
                          var m = {
                              expirationTime: h.expirationTime,
                              suspenseConfig: h.suspenseConfig,
                              tag: h.tag,
                              payload: h.payload,
                              callback: h.callback,
                              next: null
                          };
                          null === p ? (f = p = m, d = c) : p = p.next = m, a > l && (l = a)
                      } else {
                          null !== p && (p = p.next = {
                              expirationTime: 1073741823,
                              suspenseConfig: h.suspenseConfig,
                              tag: h.tag,
                              payload: h.payload,
                              callback: h.callback,
                              next: null
                          }), ou(a, h.suspenseConfig);
                          e: {
                              var g = e,
                                  y = h;
                              switch (a = t, m = n, y.tag) {
                                  case 1:
                                      if ("function" == typeof(g = y.payload)) {
                                          c = g.call(m, c, a);
                                          break e
                                      }
                                      c = g;
                                      break e;
                                  case 3:
                                      g.effectTag = -4097 & g.effectTag | 64;
                                  case 0:
                                      if (null == (a = "function" == typeof(g = y.payload) ? g.call(m, c, a) : g)) break e;
                                      c = i({}, c, a);
                                      break e;
                                  case 2:
                                      io = !0
                              }
                          }
                          null !== h.callback && (e.effectTag |= 32, null === (a = o.effects) ? o.effects = [h] : a.push(h))
                      }
                      if (null === (h = h.next) || h === u) {
                          if (null === (a = o.shared.pending)) break;
                          h = s.next = a.next, a.next = u, o.baseQueue = s = a, o.shared.pending = null
                      }
                  }
              null === p ? d = c : p.next = f, o.baseState = d, o.baseQueue = p, su(l), e.expirationTime = l, e.memoizedState = c
          }
      }

      function fo(e, t, n) {
          if (e = t.effects, t.effects = null, null !== e)
              for (t = 0; t < e.length; t++) {
                  var r = e[t],
                      i = r.callback;
                  if (null !== i) {
                      if (r.callback = null, r = i, i = n, "function" != typeof r) throw Error(s(191, r));
                      r.call(i)
                  }
              }
      }
      var po = Q.ReactCurrentBatchConfig,
          ho = (new r.Component).refs;

      function mo(e, t, n, r) {
          n = null == (n = n(r, t = e.memoizedState)) ? t : i({}, t, n), e.memoizedState = n, 0 === e.expirationTime && (e.updateQueue.baseState = n)
      }
      var go = {
          isMounted: function(e) {
              return !!(e = e._reactInternalFiber) && Ze(e) === e
          },
          enqueueSetState: function(e, t, n) {
              e = e._reactInternalFiber;
              var r = Ha(),
                  i = po.suspense;
              (i = ao(r = $a(r, e, i), i)).payload = t, null != n && (i.callback = n), uo(e, i), Ya(e, r)
          },
          enqueueReplaceState: function(e, t, n) {
              e = e._reactInternalFiber;
              var r = Ha(),
                  i = po.suspense;
              (i = ao(r = $a(r, e, i), i)).tag = 1, i.payload = t, null != n && (i.callback = n), uo(e, i), Ya(e, r)
          },
          enqueueForceUpdate: function(e, t) {
              e = e._reactInternalFiber;
              var n = Ha(),
                  r = po.suspense;
              (r = ao(n = $a(n, e, r), r)).tag = 2, null != t && (r.callback = t), uo(e, r), Ya(e, n)
          }
      };

      function yo(e, t, n, r, i, o, s) {
          return "function" == typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, o, s) : !t.prototype || !t.prototype.isPureReactComponent || (!Dr(n, r) || !Dr(i, o))
      }

      function vo(e, t, n) {
          var r = !1,
              i = li,
              o = t.contextType;
          return "object" == typeof o && null !== o ? o = ro(o) : (i = mi(t) ? pi : di.current, o = (r = null != (r = t.contextTypes)) ? hi(e, i) : li), t = new t(n, o), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = go, e.stateNode = t, t._reactInternalFiber = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t
      }

      function bo(e, t, n, r) {
          e = t.state, "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && go.enqueueReplaceState(t, t.state, null)
      }

      function wo(e, t, n, r) {
          var i = e.stateNode;
          i.props = n, i.state = e.memoizedState, i.refs = ho, oo(e);
          var o = t.contextType;
          "object" == typeof o && null !== o ? i.context = ro(o) : (o = mi(t) ? pi : di.current, i.context = hi(e, o)), lo(e, n, i, r), i.state = e.memoizedState, "function" == typeof(o = t.getDerivedStateFromProps) && (mo(e, t, o, n), i.state = e.memoizedState), "function" == typeof t.getDerivedStateFromProps || "function" == typeof i.getSnapshotBeforeUpdate || "function" != typeof i.UNSAFE_componentWillMount && "function" != typeof i.componentWillMount || (t = i.state, "function" == typeof i.componentWillMount && i.componentWillMount(), "function" == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount(), t !== i.state && go.enqueueReplaceState(i, i.state, null), lo(e, n, i, r), i.state = e.memoizedState), "function" == typeof i.componentDidMount && (e.effectTag |= 4)
      }
      var _o = Array.isArray;

      function Eo(e, t, n) {
          if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
              if (n._owner) {
                  if (n = n._owner) {
                      if (1 !== n.tag) throw Error(s(309));
                      var r = n.stateNode
                  }
                  if (!r) throw Error(s(147, e));
                  var i = "" + e;
                  return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === i ? t.ref : ((t = function(e) {
                      var t = r.refs;
                      t === ho && (t = r.refs = {}), null === e ? delete t[i] : t[i] = e
                  })._stringRef = i, t)
              }
              if ("string" != typeof e) throw Error(s(284));
              if (!n._owner) throw Error(s(290, e))
          }
          return e
      }

      function So(e, t) {
          if ("textarea" !== e.type) throw Error(s(31, "[object Object]" === Object.prototype.toString.call(t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : t, ""))
      }

      function ko(e) {
          function t(t, n) {
              if (e) {
                  var r = t.lastEffect;
                  null !== r ? (r.nextEffect = n, t.lastEffect = n) : t.firstEffect = t.lastEffect = n, n.nextEffect = null, n.effectTag = 8
              }
          }

          function n(n, r) {
              if (!e) return null;
              for (; null !== r;) t(n, r), r = r.sibling;
              return null
          }

          function r(e, t) {
              for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
              return e
          }

          function i(e, t) {
              return (e = xu(e, t)).index = 0, e.sibling = null, e
          }

          function o(t, n, r) {
              return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.effectTag = 2, n) : r : (t.effectTag = 2, n) : n
          }

          function a(t) {
              return e && null === t.alternate && (t.effectTag = 2), t
          }

          function u(e, t, n, r) {
              return null === t || 6 !== t.tag ? ((t = Ou(n, e.mode, r)).return = e, t) : ((t = i(t, n)).return = e, t)
          }

          function c(e, t, n, r) {
              return null !== t && t.elementType === n.type ? ((r = i(t, n.props)).ref = Eo(e, t, n), r.return = e, r) : ((r = Tu(n.type, n.key, n.props, null, e.mode, r)).ref = Eo(e, t, n), r.return = e, r)
          }

          function l(e, t, n, r) {
              return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Pu(n, e.mode, r)).return = e, t) : ((t = i(t, n.children || [])).return = e, t)
          }

          function d(e, t, n, r, o) {
              return null === t || 7 !== t.tag ? ((t = Au(n, e.mode, r, o)).return = e, t) : ((t = i(t, n)).return = e, t)
          }

          function f(e, t, n) {
              if ("string" == typeof t || "number" == typeof t) return (t = Ou("" + t, e.mode, n)).return = e, t;
              if ("object" == typeof t && null !== t) {
                  switch (t.$$typeof) {
                      case ee:
                          return (n = Tu(t.type, t.key, t.props, null, e.mode, n)).ref = Eo(e, null, t), n.return = e, n;
                      case te:
                          return (t = Pu(t, e.mode, n)).return = e, t
                  }
                  if (_o(t) || me(t)) return (t = Au(t, e.mode, n, null)).return = e, t;
                  So(e, t)
              }
              return null
          }

          function p(e, t, n, r) {
              var i = null !== t ? t.key : null;
              if ("string" == typeof n || "number" == typeof n) return null !== i ? null : u(e, t, "" + n, r);
              if ("object" == typeof n && null !== n) {
                  switch (n.$$typeof) {
                      case ee:
                          return n.key === i ? n.type === ne ? d(e, t, n.props.children, r, i) : c(e, t, n, r) : null;
                      case te:
                          return n.key === i ? l(e, t, n, r) : null
                  }
                  if (_o(n) || me(n)) return null !== i ? null : d(e, t, n, r, null);
                  So(e, n)
              }
              return null
          }

          function h(e, t, n, r, i) {
              if ("string" == typeof r || "number" == typeof r) return u(t, e = e.get(n) || null, "" + r, i);
              if ("object" == typeof r && null !== r) {
                  switch (r.$$typeof) {
                      case ee:
                          return e = e.get(null === r.key ? n : r.key) || null, r.type === ne ? d(t, e, r.props.children, i, r.key) : c(t, e, r, i);
                      case te:
                          return l(t, e = e.get(null === r.key ? n : r.key) || null, r, i)
                  }
                  if (_o(r) || me(r)) return d(t, e = e.get(n) || null, r, i, null);
                  So(t, r)
              }
              return null
          }

          function m(i, s, a, u) {
              for (var c = null, l = null, d = s, m = s = 0, g = null; null !== d && m < a.length; m++) {
                  d.index > m ? (g = d, d = null) : g = d.sibling;
                  var y = p(i, d, a[m], u);
                  if (null === y) {
                      null === d && (d = g);
                      break
                  }
                  e && d && null === y.alternate && t(i, d), s = o(y, s, m), null === l ? c = y : l.sibling = y, l = y, d = g
              }
              if (m === a.length) return n(i, d), c;
              if (null === d) {
                  for (; m < a.length; m++) null !== (d = f(i, a[m], u)) && (s = o(d, s, m), null === l ? c = d : l.sibling = d, l = d);
                  return c
              }
              for (d = r(i, d); m < a.length; m++) null !== (g = h(d, i, m, a[m], u)) && (e && null !== g.alternate && d.delete(null === g.key ? m : g.key), s = o(g, s, m), null === l ? c = g : l.sibling = g, l = g);
              return e && d.forEach((function(e) {
                  return t(i, e)
              })), c
          }

          function g(i, a, u, c) {
              var l = me(u);
              if ("function" != typeof l) throw Error(s(150));
              if (null == (u = l.call(u))) throw Error(s(151));
              for (var d = l = null, m = a, g = a = 0, y = null, v = u.next(); null !== m && !v.done; g++, v = u.next()) {
                  m.index > g ? (y = m, m = null) : y = m.sibling;
                  var b = p(i, m, v.value, c);
                  if (null === b) {
                      null === m && (m = y);
                      break
                  }
                  e && m && null === b.alternate && t(i, m), a = o(b, a, g), null === d ? l = b : d.sibling = b, d = b, m = y
              }
              if (v.done) return n(i, m), l;
              if (null === m) {
                  for (; !v.done; g++, v = u.next()) null !== (v = f(i, v.value, c)) && (a = o(v, a, g), null === d ? l = v : d.sibling = v, d = v);
                  return l
              }
              for (m = r(i, m); !v.done; g++, v = u.next()) null !== (v = h(m, i, g, v.value, c)) && (e && null !== v.alternate && m.delete(null === v.key ? g : v.key), a = o(v, a, g), null === d ? l = v : d.sibling = v, d = v);
              return e && m.forEach((function(e) {
                  return t(i, e)
              })), l
          }
          return function(e, r, o, u) {
              var c = "object" == typeof o && null !== o && o.type === ne && null === o.key;
              c && (o = o.props.children);
              var l = "object" == typeof o && null !== o;
              if (l) switch (o.$$typeof) {
                  case ee:
                      e: {
                          for (l = o.key, c = r; null !== c;) {
                              if (c.key === l) {
                                  switch (c.tag) {
                                      case 7:
                                          if (o.type === ne) {
                                              n(e, c.sibling), (r = i(c, o.props.children)).return = e, e = r;
                                              break e
                                          }
                                          break;
                                      default:
                                          if (c.elementType === o.type) {
                                              n(e, c.sibling), (r = i(c, o.props)).ref = Eo(e, c, o), r.return = e, e = r;
                                              break e
                                          }
                                  }
                                  n(e, c);
                                  break
                              }
                              t(e, c), c = c.sibling
                          }
                          o.type === ne ? ((r = Au(o.props.children, e.mode, u, o.key)).return = e, e = r) : ((u = Tu(o.type, o.key, o.props, null, e.mode, u)).ref = Eo(e, r, o), u.return = e, e = u)
                      }
                      return a(e);
                  case te:
                      e: {
                          for (c = o.key; null !== r;) {
                              if (r.key === c) {
                                  if (4 === r.tag && r.stateNode.containerInfo === o.containerInfo && r.stateNode.implementation === o.implementation) {
                                      n(e, r.sibling), (r = i(r, o.children || [])).return = e, e = r;
                                      break e
                                  }
                                  n(e, r);
                                  break
                              }
                              t(e, r), r = r.sibling
                          }(r = Pu(o, e.mode, u)).return = e,
                          e = r
                      }
                      return a(e)
              }
              if ("string" == typeof o || "number" == typeof o) return o = "" + o, null !== r && 6 === r.tag ? (n(e, r.sibling), (r = i(r, o)).return = e, e = r) : (n(e, r), (r = Ou(o, e.mode, u)).return = e, e = r), a(e);
              if (_o(o)) return m(e, r, o, u);
              if (me(o)) return g(e, r, o, u);
              if (l && So(e, o), void 0 === o && !c) switch (e.tag) {
                  case 1:
                  case 0:
                      throw e = e.type, Error(s(152, e.displayName || e.name || "Component"))
              }
              return n(e, r)
          }
      }
      var Co = ko(!0),
          xo = ko(!1),
          To = {},
          Ao = {
              current: To
          },
          Oo = {
              current: To
          },
          Po = {
              current: To
          };

      function No(e) {
          if (e === To) throw Error(s(174));
          return e
      }

      function Mo(e, t) {
          switch (ci(Po, t), ci(Oo, e), ci(Ao, To), e = t.nodeType) {
              case 9:
              case 11:
                  t = (t = t.documentElement) ? t.namespaceURI : Ie(null, "");
                  break;
              default:
                  t = Ie(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
          }
          ui(Ao), ci(Ao, t)
      }

      function Ro() {
          ui(Ao), ui(Oo), ui(Po)
      }

      function jo(e) {
          No(Po.current);
          var t = No(Ao.current),
              n = Ie(t, e.type);
          t !== n && (ci(Oo, e), ci(Ao, n))
      }

      function Bo(e) {
          Oo.current === e && (ui(Ao), ui(Oo))
      }
      var Fo = {
          current: 0
      };

      function Io(e) {
          for (var t = e; null !== t;) {
              if (13 === t.tag) {
                  var n = t.memoizedState;
                  if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t
              } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                  if (0 != (64 & t.effectTag)) return t
              } else if (null !== t.child) {
                  t.child.return = t, t = t.child;
                  continue
              }
              if (t === e) break;
              for (; null === t.sibling;) {
                  if (null === t.return || t.return === e) return null;
                  t = t.return
              }
              t.sibling.return = t.return, t = t.sibling
          }
          return null
      }

      function Lo(e, t) {
          return {
              responder: e,
              props: t
          }
      }
      var Do = Q.ReactCurrentDispatcher,
          Vo = Q.ReactCurrentBatchConfig,
          Uo = 0,
          zo = null,
          qo = null,
          Wo = null,
          Go = !1;

      function Ho() {
          throw Error(s(321))
      }

      function $o(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
              if (!Ir(e[n], t[n])) return !1;
          return !0
      }

      function Yo(e, t, n, r, i, o) {
          if (Uo = o, zo = t, t.memoizedState = null, t.updateQueue = null, t.expirationTime = 0, Do.current = null === e || null === e.memoizedState ? ys : vs, e = n(r, i), t.expirationTime === Uo) {
              o = 0;
              do {
                  if (t.expirationTime = 0, !(25 > o)) throw Error(s(301));
                  o += 1, Wo = qo = null, t.updateQueue = null, Do.current = bs, e = n(r, i)
              } while (t.expirationTime === Uo)
          }
          if (Do.current = gs, t = null !== qo && null !== qo.next, Uo = 0, Wo = qo = zo = null, Go = !1, t) throw Error(s(300));
          return e
      }

      function Ko() {
          var e = {
              memoizedState: null,
              baseState: null,
              baseQueue: null,
              queue: null,
              next: null
          };
          return null === Wo ? zo.memoizedState = Wo = e : Wo = Wo.next = e, Wo
      }

      function Qo() {
          if (null === qo) {
              var e = zo.alternate;
              e = null !== e ? e.memoizedState : null
          } else e = qo.next;
          var t = null === Wo ? zo.memoizedState : Wo.next;
          if (null !== t) Wo = t, qo = e;
          else {
              if (null === e) throw Error(s(310));
              e = {
                  memoizedState: (qo = e).memoizedState,
                  baseState: qo.baseState,
                  baseQueue: qo.baseQueue,
                  queue: qo.queue,
                  next: null
              }, null === Wo ? zo.memoizedState = Wo = e : Wo = Wo.next = e
          }
          return Wo
      }

      function Jo(e, t) {
          return "function" == typeof t ? t(e) : t
      }

      function Xo(e) {
          var t = Qo(),
              n = t.queue;
          if (null === n) throw Error(s(311));
          n.lastRenderedReducer = e;
          var r = qo,
              i = r.baseQueue,
              o = n.pending;
          if (null !== o) {
              if (null !== i) {
                  var a = i.next;
                  i.next = o.next, o.next = a
              }
              r.baseQueue = i = o, n.pending = null
          }
          if (null !== i) {
              i = i.next, r = r.baseState;
              var u = a = o = null,
                  c = i;
              do {
                  var l = c.expirationTime;
                  if (l < Uo) {
                      var d = {
                          expirationTime: c.expirationTime,
                          suspenseConfig: c.suspenseConfig,
                          action: c.action,
                          eagerReducer: c.eagerReducer,
                          eagerState: c.eagerState,
                          next: null
                      };
                      null === u ? (a = u = d, o = r) : u = u.next = d, l > zo.expirationTime && (zo.expirationTime = l, su(l))
                  } else null !== u && (u = u.next = {
                      expirationTime: 1073741823,
                      suspenseConfig: c.suspenseConfig,
                      action: c.action,
                      eagerReducer: c.eagerReducer,
                      eagerState: c.eagerState,
                      next: null
                  }), ou(l, c.suspenseConfig), r = c.eagerReducer === e ? c.eagerState : e(r, c.action);
                  c = c.next
              } while (null !== c && c !== i);
              null === u ? o = r : u.next = a, Ir(r, t.memoizedState) || (Ps = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = u, n.lastRenderedState = r
          }
          return [t.memoizedState, n.dispatch]
      }

      function Zo(e) {
          var t = Qo(),
              n = t.queue;
          if (null === n) throw Error(s(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
              i = n.pending,
              o = t.memoizedState;
          if (null !== i) {
              n.pending = null;
              var a = i = i.next;
              do {
                  o = e(o, a.action), a = a.next
              } while (a !== i);
              Ir(o, t.memoizedState) || (Ps = !0), t.memoizedState = o, null === t.baseQueue && (t.baseState = o), n.lastRenderedState = o
          }
          return [o, r]
      }

      function es(e) {
          var t = Ko();
          return "function" == typeof e && (e = e()), t.memoizedState = t.baseState = e, e = (e = t.queue = {
              pending: null,
              dispatch: null,
              lastRenderedReducer: Jo,
              lastRenderedState: e
          }).dispatch = ms.bind(null, zo, e), [t.memoizedState, e]
      }

      function ts(e, t, n, r) {
          return e = {
              tag: e,
              create: t,
              destroy: n,
              deps: r,
              next: null
          }, null === (t = zo.updateQueue) ? (t = {
              lastEffect: null
          }, zo.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e
      }

      function ns() {
          return Qo().memoizedState
      }

      function rs(e, t, n, r) {
          var i = Ko();
          zo.effectTag |= e, i.memoizedState = ts(1 | t, n, void 0, void 0 === r ? null : r)
      }

      function is(e, t, n, r) {
          var i = Qo();
          r = void 0 === r ? null : r;
          var o = void 0;
          if (null !== qo) {
              var s = qo.memoizedState;
              if (o = s.destroy, null !== r && $o(r, s.deps)) return void ts(t, n, o, r)
          }
          zo.effectTag |= e, i.memoizedState = ts(1 | t, n, o, r)
      }

      function os(e, t) {
          return rs(516, 4, e, t)
      }

      function ss(e, t) {
          return is(516, 4, e, t)
      }

      function as(e, t) {
          return is(4, 2, e, t)
      }

      function us(e, t) {
          return "function" == typeof t ? (e = e(), t(e), function() {
              t(null)
          }) : null != t ? (e = e(), t.current = e, function() {
              t.current = null
          }) : void 0
      }

      function cs(e, t, n) {
          return n = null != n ? n.concat([e]) : null, is(4, 2, us.bind(null, t, e), n)
      }

      function ls() {}

      function ds(e, t) {
          return Ko().memoizedState = [e, void 0 === t ? null : t], e
      }

      function fs(e, t) {
          var n = Qo();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && $o(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
      }

      function ps(e, t) {
          var n = Qo();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && $o(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
      }

      function hs(e, t, n) {
          var r = Vi();
          zi(98 > r ? 98 : r, (function() {
              e(!0)
          })), zi(97 < r ? 97 : r, (function() {
              var r = Vo.suspense;
              Vo.suspense = void 0 === t ? null : t;
              try {
                  e(!1), n()
              } finally {
                  Vo.suspense = r
              }
          }))
      }

      function ms(e, t, n) {
          var r = Ha(),
              i = po.suspense;
          i = {
              expirationTime: r = $a(r, e, i),
              suspenseConfig: i,
              action: n,
              eagerReducer: null,
              eagerState: null,
              next: null
          };
          var o = t.pending;
          if (null === o ? i.next = i : (i.next = o.next, o.next = i), t.pending = i, o = e.alternate, e === zo || null !== o && o === zo) Go = !0, i.expirationTime = Uo, zo.expirationTime = Uo;
          else {
              if (0 === e.expirationTime && (null === o || 0 === o.expirationTime) && null !== (o = t.lastRenderedReducer)) try {
                  var s = t.lastRenderedState,
                      a = o(s, n);
                  if (i.eagerReducer = o, i.eagerState = a, Ir(a, s)) return
              } catch (e) {}
              Ya(e, r)
          }
      }
      var gs = {
              readContext: ro,
              useCallback: Ho,
              useContext: Ho,
              useEffect: Ho,
              useImperativeHandle: Ho,
              useLayoutEffect: Ho,
              useMemo: Ho,
              useReducer: Ho,
              useRef: Ho,
              useState: Ho,
              useDebugValue: Ho,
              useResponder: Ho,
              useDeferredValue: Ho,
              useTransition: Ho
          },
          ys = {
              readContext: ro,
              useCallback: ds,
              useContext: ro,
              useEffect: os,
              useImperativeHandle: function(e, t, n) {
                  return n = null != n ? n.concat([e]) : null, rs(4, 2, us.bind(null, t, e), n)
              },
              useLayoutEffect: function(e, t) {
                  return rs(4, 2, e, t)
              },
              useMemo: function(e, t) {
                  var n = Ko();
                  return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e
              },
              useReducer: function(e, t, n) {
                  var r = Ko();
                  return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = (e = r.queue = {
                      pending: null,
                      dispatch: null,
                      lastRenderedReducer: e,
                      lastRenderedState: t
                  }).dispatch = ms.bind(null, zo, e), [r.memoizedState, e]
              },
              useRef: function(e) {
                  return e = {
                      current: e
                  }, Ko().memoizedState = e
              },
              useState: es,
              useDebugValue: ls,
              useResponder: Lo,
              useDeferredValue: function(e, t) {
                  var n = es(e),
                      r = n[0],
                      i = n[1];
                  return os((function() {
                      var n = Vo.suspense;
                      Vo.suspense = void 0 === t ? null : t;
                      try {
                          i(e)
                      } finally {
                          Vo.suspense = n
                      }
                  }), [e, t]), r
              },
              useTransition: function(e) {
                  var t = es(!1),
                      n = t[0];
                  return t = t[1], [ds(hs.bind(null, t, e), [t, e]), n]
              }
          },
          vs = {
              readContext: ro,
              useCallback: fs,
              useContext: ro,
              useEffect: ss,
              useImperativeHandle: cs,
              useLayoutEffect: as,
              useMemo: ps,
              useReducer: Xo,
              useRef: ns,
              useState: function() {
                  return Xo(Jo)
              },
              useDebugValue: ls,
              useResponder: Lo,
              useDeferredValue: function(e, t) {
                  var n = Xo(Jo),
                      r = n[0],
                      i = n[1];
                  return ss((function() {
                      var n = Vo.suspense;
                      Vo.suspense = void 0 === t ? null : t;
                      try {
                          i(e)
                      } finally {
                          Vo.suspense = n
                      }
                  }), [e, t]), r
              },
              useTransition: function(e) {
                  var t = Xo(Jo),
                      n = t[0];
                  return t = t[1], [fs(hs.bind(null, t, e), [t, e]), n]
              }
          },
          bs = {
              readContext: ro,
              useCallback: fs,
              useContext: ro,
              useEffect: ss,
              useImperativeHandle: cs,
              useLayoutEffect: as,
              useMemo: ps,
              useReducer: Zo,
              useRef: ns,
              useState: function() {
                  return Zo(Jo)
              },
              useDebugValue: ls,
              useResponder: Lo,
              useDeferredValue: function(e, t) {
                  var n = Zo(Jo),
                      r = n[0],
                      i = n[1];
                  return ss((function() {
                      var n = Vo.suspense;
                      Vo.suspense = void 0 === t ? null : t;
                      try {
                          i(e)
                      } finally {
                          Vo.suspense = n
                      }
                  }), [e, t]), r
              },
              useTransition: function(e) {
                  var t = Zo(Jo),
                      n = t[0];
                  return t = t[1], [fs(hs.bind(null, t, e), [t, e]), n]
              }
          },
          ws = null,
          _s = null,
          Es = !1;

      function Ss(e, t) {
          var n = ku(5, null, null, 0);
          n.elementType = "DELETED", n.type = "DELETED", n.stateNode = t, n.return = e, n.effectTag = 8, null !== e.lastEffect ? (e.lastEffect.nextEffect = n, e.lastEffect = n) : e.firstEffect = e.lastEffect = n
      }

      function ks(e, t) {
          switch (e.tag) {
              case 5:
                  var n = e.type;
                  return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, !0);
              case 6:
                  return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, !0);
              case 13:
              default:
                  return !1
          }
      }

      function Cs(e) {
          if (Es) {
              var t = _s;
              if (t) {
                  var n = t;
                  if (!ks(e, t)) {
                      if (!(t = _n(n.nextSibling)) || !ks(e, t)) return e.effectTag = -1025 & e.effectTag | 2, Es = !1, void(ws = e);
                      Ss(ws, n)
                  }
                  ws = e, _s = _n(t.firstChild)
              } else e.effectTag = -1025 & e.effectTag | 2, Es = !1, ws = e
          }
      }

      function xs(e) {
          for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
          ws = e
      }

      function Ts(e) {
          if (e !== ws) return !1;
          if (!Es) return xs(e), Es = !0, !1;
          var t = e.type;
          if (5 !== e.tag || "head" !== t && "body" !== t && !vn(t, e.memoizedProps))
              for (t = _s; t;) Ss(e, t), t = _n(t.nextSibling);
          if (xs(e), 13 === e.tag) {
              if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(s(317));
              e: {
                  for (e = e.nextSibling, t = 0; e;) {
                      if (8 === e.nodeType) {
                          var n = e.data;
                          if ("/$" === n) {
                              if (0 === t) {
                                  _s = _n(e.nextSibling);
                                  break e
                              }
                              t--
                          } else "$" !== n && "$!" !== n && "$?" !== n || t++
                      }
                      e = e.nextSibling
                  }
                  _s = null
              }
          } else _s = ws ? _n(e.stateNode.nextSibling) : null;
          return !0
      }

      function As() {
          _s = ws = null, Es = !1
      }
      var Os = Q.ReactCurrentOwner,
          Ps = !1;

      function Ns(e, t, n, r) {
          t.child = null === e ? xo(t, null, n, r) : Co(t, e.child, n, r)
      }

      function Ms(e, t, n, r, i) {
          n = n.render;
          var o = t.ref;
          return no(t, i), r = Yo(e, t, n, r, o, i), null === e || Ps ? (t.effectTag |= 1, Ns(e, t, r, i), t.child) : (t.updateQueue = e.updateQueue, t.effectTag &= -517, e.expirationTime <= i && (e.expirationTime = 0), Ys(e, t, i))
      }

      function Rs(e, t, n, r, i, o) {
          if (null === e) {
              var s = n.type;
              return "function" != typeof s || Cu(s) || void 0 !== s.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Tu(n.type, null, r, null, t.mode, o)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = s, js(e, t, s, r, i, o))
          }
          return s = e.child, i < o && (i = s.memoizedProps, (n = null !== (n = n.compare) ? n : Dr)(i, r) && e.ref === t.ref) ? Ys(e, t, o) : (t.effectTag |= 1, (e = xu(s, r)).ref = t.ref, e.return = t, t.child = e)
      }

      function js(e, t, n, r, i, o) {
          return null !== e && Dr(e.memoizedProps, r) && e.ref === t.ref && (Ps = !1, i < o) ? (t.expirationTime = e.expirationTime, Ys(e, t, o)) : Fs(e, t, n, r, o)
      }

      function Bs(e, t) {
          var n = t.ref;
          (null === e && null !== n || null !== e && e.ref !== n) && (t.effectTag |= 128)
      }

      function Fs(e, t, n, r, i) {
          var o = mi(n) ? pi : di.current;
          return o = hi(t, o), no(t, i), n = Yo(e, t, n, r, o, i), null === e || Ps ? (t.effectTag |= 1, Ns(e, t, n, i), t.child) : (t.updateQueue = e.updateQueue, t.effectTag &= -517, e.expirationTime <= i && (e.expirationTime = 0), Ys(e, t, i))
      }

      function Is(e, t, n, r, i) {
          if (mi(n)) {
              var o = !0;
              bi(t)
          } else o = !1;
          if (no(t, i), null === t.stateNode) null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), vo(t, n, r), wo(t, n, r, i), r = !0;
          else if (null === e) {
              var s = t.stateNode,
                  a = t.memoizedProps;
              s.props = a;
              var u = s.context,
                  c = n.contextType;
              "object" == typeof c && null !== c ? c = ro(c) : c = hi(t, c = mi(n) ? pi : di.current);
              var l = n.getDerivedStateFromProps,
                  d = "function" == typeof l || "function" == typeof s.getSnapshotBeforeUpdate;
              d || "function" != typeof s.UNSAFE_componentWillReceiveProps && "function" != typeof s.componentWillReceiveProps || (a !== r || u !== c) && bo(t, s, r, c), io = !1;
              var f = t.memoizedState;
              s.state = f, lo(t, r, s, i), u = t.memoizedState, a !== r || f !== u || fi.current || io ? ("function" == typeof l && (mo(t, n, l, r), u = t.memoizedState), (a = io || yo(t, n, a, r, f, u, c)) ? (d || "function" != typeof s.UNSAFE_componentWillMount && "function" != typeof s.componentWillMount || ("function" == typeof s.componentWillMount && s.componentWillMount(), "function" == typeof s.UNSAFE_componentWillMount && s.UNSAFE_componentWillMount()), "function" == typeof s.componentDidMount && (t.effectTag |= 4)) : ("function" == typeof s.componentDidMount && (t.effectTag |= 4), t.memoizedProps = r, t.memoizedState = u), s.props = r, s.state = u, s.context = c, r = a) : ("function" == typeof s.componentDidMount && (t.effectTag |= 4), r = !1)
          } else s = t.stateNode, so(e, t), a = t.memoizedProps, s.props = t.type === t.elementType ? a : Yi(t.type, a), u = s.context, "object" == typeof(c = n.contextType) && null !== c ? c = ro(c) : c = hi(t, c = mi(n) ? pi : di.current), (d = "function" == typeof(l = n.getDerivedStateFromProps) || "function" == typeof s.getSnapshotBeforeUpdate) || "function" != typeof s.UNSAFE_componentWillReceiveProps && "function" != typeof s.componentWillReceiveProps || (a !== r || u !== c) && bo(t, s, r, c), io = !1, u = t.memoizedState, s.state = u, lo(t, r, s, i), f = t.memoizedState, a !== r || u !== f || fi.current || io ? ("function" == typeof l && (mo(t, n, l, r), f = t.memoizedState), (l = io || yo(t, n, a, r, u, f, c)) ? (d || "function" != typeof s.UNSAFE_componentWillUpdate && "function" != typeof s.componentWillUpdate || ("function" == typeof s.componentWillUpdate && s.componentWillUpdate(r, f, c), "function" == typeof s.UNSAFE_componentWillUpdate && s.UNSAFE_componentWillUpdate(r, f, c)), "function" == typeof s.componentDidUpdate && (t.effectTag |= 4), "function" == typeof s.getSnapshotBeforeUpdate && (t.effectTag |= 256)) : ("function" != typeof s.componentDidUpdate || a === e.memoizedProps && u === e.memoizedState || (t.effectTag |= 4), "function" != typeof s.getSnapshotBeforeUpdate || a === e.memoizedProps && u === e.memoizedState || (t.effectTag |= 256), t.memoizedProps = r, t.memoizedState = f), s.props = r, s.state = f, s.context = c, r = l) : ("function" != typeof s.componentDidUpdate || a === e.memoizedProps && u === e.memoizedState || (t.effectTag |= 4), "function" != typeof s.getSnapshotBeforeUpdate || a === e.memoizedProps && u === e.memoizedState || (t.effectTag |= 256), r = !1);
          return Ls(e, t, n, r, o, i)
      }

      function Ls(e, t, n, r, i, o) {
          Bs(e, t);
          var s = 0 != (64 & t.effectTag);
          if (!r && !s) return i && wi(t, n, !1), Ys(e, t, o);
          r = t.stateNode, Os.current = t;
          var a = s && "function" != typeof n.getDerivedStateFromError ? null : r.render();
          return t.effectTag |= 1, null !== e && s ? (t.child = Co(t, e.child, null, o), t.child = Co(t, null, a, o)) : Ns(e, t, a, o), t.memoizedState = r.state, i && wi(t, n, !0), t.child
      }

      function Ds(e) {
          var t = e.stateNode;
          t.pendingContext ? yi(0, t.pendingContext, t.pendingContext !== t.context) : t.context && yi(0, t.context, !1), Mo(e, t.containerInfo)
      }
      var Vs, Us, zs, qs = {
          dehydrated: null,
          retryTime: 0
      };

      function Ws(e, t, n) {
          var r, i = t.mode,
              o = t.pendingProps,
              s = Fo.current,
              a = !1;
          if ((r = 0 != (64 & t.effectTag)) || (r = 0 != (2 & s) && (null === e || null !== e.memoizedState)), r ? (a = !0, t.effectTag &= -65) : null !== e && null === e.memoizedState || void 0 === o.fallback || !0 === o.unstable_avoidThisFallback || (s |= 1), ci(Fo, 1 & s), null === e) {
              if (void 0 !== o.fallback && Cs(t), a) {
                  if (a = o.fallback, (o = Au(null, i, 0, null)).return = t, 0 == (2 & t.mode))
                      for (e = null !== t.memoizedState ? t.child.child : t.child, o.child = e; null !== e;) e.return = o, e = e.sibling;
                  return (n = Au(a, i, n, null)).return = t, o.sibling = n, t.memoizedState = qs, t.child = o, n
              }
              return i = o.children, t.memoizedState = null, t.child = xo(t, null, i, n)
          }
          if (null !== e.memoizedState) {
              if (i = (e = e.child).sibling, a) {
                  if (o = o.fallback, (n = xu(e, e.pendingProps)).return = t, 0 == (2 & t.mode) && (a = null !== t.memoizedState ? t.child.child : t.child) !== e.child)
                      for (n.child = a; null !== a;) a.return = n, a = a.sibling;
                  return (i = xu(i, o)).return = t, n.sibling = i, n.childExpirationTime = 0, t.memoizedState = qs, t.child = n, i
              }
              return n = Co(t, e.child, o.children, n), t.memoizedState = null, t.child = n
          }
          if (e = e.child, a) {
              if (a = o.fallback, (o = Au(null, i, 0, null)).return = t, o.child = e, null !== e && (e.return = o), 0 == (2 & t.mode))
                  for (e = null !== t.memoizedState ? t.child.child : t.child, o.child = e; null !== e;) e.return = o, e = e.sibling;
              return (n = Au(a, i, n, null)).return = t, o.sibling = n, n.effectTag |= 2, o.childExpirationTime = 0, t.memoizedState = qs, t.child = o, n
          }
          return t.memoizedState = null, t.child = Co(t, e, o.children, n)
      }

      function Gs(e, t) {
          e.expirationTime < t && (e.expirationTime = t);
          var n = e.alternate;
          null !== n && n.expirationTime < t && (n.expirationTime = t), to(e.return, t)
      }

      function Hs(e, t, n, r, i, o) {
          var s = e.memoizedState;
          null === s ? e.memoizedState = {
              isBackwards: t,
              rendering: null,
              renderingStartTime: 0,
              last: r,
              tail: n,
              tailExpiration: 0,
              tailMode: i,
              lastEffect: o
          } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailExpiration = 0, s.tailMode = i, s.lastEffect = o)
      }

      function $s(e, t, n) {
          var r = t.pendingProps,
              i = r.revealOrder,
              o = r.tail;
          if (Ns(e, t, r.children, n), 0 != (2 & (r = Fo.current))) r = 1 & r | 2, t.effectTag |= 64;
          else {
              if (null !== e && 0 != (64 & e.effectTag)) e: for (e = t.child; null !== e;) {
                  if (13 === e.tag) null !== e.memoizedState && Gs(e, n);
                  else if (19 === e.tag) Gs(e, n);
                  else if (null !== e.child) {
                      e.child.return = e, e = e.child;
                      continue
                  }
                  if (e === t) break e;
                  for (; null === e.sibling;) {
                      if (null === e.return || e.return === t) break e;
                      e = e.return
                  }
                  e.sibling.return = e.return, e = e.sibling
              }
              r &= 1
          }
          if (ci(Fo, r), 0 == (2 & t.mode)) t.memoizedState = null;
          else switch (i) {
              case "forwards":
                  for (n = t.child, i = null; null !== n;) null !== (e = n.alternate) && null === Io(e) && (i = n), n = n.sibling;
                  null === (n = i) ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Hs(t, !1, i, n, o, t.lastEffect);
                  break;
              case "backwards":
                  for (n = null, i = t.child, t.child = null; null !== i;) {
                      if (null !== (e = i.alternate) && null === Io(e)) {
                          t.child = i;
                          break
                      }
                      e = i.sibling, i.sibling = n, n = i, i = e
                  }
                  Hs(t, !0, n, null, o, t.lastEffect);
                  break;
              case "together":
                  Hs(t, !1, null, null, void 0, t.lastEffect);
                  break;
              default:
                  t.memoizedState = null
          }
          return t.child
      }

      function Ys(e, t, n) {
          null !== e && (t.dependencies = e.dependencies);
          var r = t.expirationTime;
          if (0 !== r && su(r), t.childExpirationTime < n) return null;
          if (null !== e && t.child !== e.child) throw Error(s(153));
          if (null !== t.child) {
              for (n = xu(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = xu(e, e.pendingProps)).return = t;
              n.sibling = null
          }
          return t.child
      }

      function Ks(e, t) {
          switch (e.tailMode) {
              case "hidden":
                  t = e.tail;
                  for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
                  null === n ? e.tail = null : n.sibling = null;
                  break;
              case "collapsed":
                  n = e.tail;
                  for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
                  null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
          }
      }

      function Qs(e, t, n) {
          var r = t.pendingProps;
          switch (t.tag) {
              case 2:
              case 16:
              case 15:
              case 0:
              case 11:
              case 7:
              case 8:
              case 12:
              case 9:
              case 14:
                  return null;
              case 1:
                  return mi(t.type) && gi(), null;
              case 3:
                  return Ro(), ui(fi), ui(di), (n = t.stateNode).pendingContext && (n.context = n.pendingContext, n.pendingContext = null), null !== e && null !== e.child || !Ts(t) || (t.effectTag |= 4), null;
              case 5:
                  Bo(t), n = No(Po.current);
                  var o = t.type;
                  if (null !== e && null != t.stateNode) Us(e, t, o, r, n), e.ref !== t.ref && (t.effectTag |= 128);
                  else {
                      if (!r) {
                          if (null === t.stateNode) throw Error(s(166));
                          return null
                      }
                      if (e = No(Ao.current), Ts(t)) {
                          r = t.stateNode, o = t.type;
                          var a = t.memoizedProps;
                          switch (r[kn] = t, r[Cn] = a, o) {
                              case "iframe":
                              case "object":
                              case "embed":
                                  $t("load", r);
                                  break;
                              case "video":
                              case "audio":
                                  for (e = 0; e < Qe.length; e++) $t(Qe[e], r);
                                  break;
                              case "source":
                                  $t("error", r);
                                  break;
                              case "img":
                              case "image":
                              case "link":
                                  $t("error", r), $t("load", r);
                                  break;
                              case "form":
                                  $t("reset", r), $t("submit", r);
                                  break;
                              case "details":
                                  $t("toggle", r);
                                  break;
                              case "input":
                                  Se(r, a), $t("invalid", r), un(n, "onChange");
                                  break;
                              case "select":
                                  r._wrapperState = {
                                      wasMultiple: !!a.multiple
                                  }, $t("invalid", r), un(n, "onChange");
                                  break;
                              case "textarea":
                                  Ne(r, a), $t("invalid", r), un(n, "onChange")
                          }
                          for (var u in on(o, a), e = null, a)
                              if (a.hasOwnProperty(u)) {
                                  var c = a[u];
                                  "children" === u ? "string" == typeof c ? r.textContent !== c && (e = ["children", c]) : "number" == typeof c && r.textContent !== "" + c && (e = ["children", "" + c]) : k.hasOwnProperty(u) && null != c && un(n, u)
                              } switch (o) {
                              case "input":
                                  we(r), xe(r, a, !0);
                                  break;
                              case "textarea":
                                  we(r), Re(r);
                                  break;
                              case "select":
                              case "option":
                                  break;
                              default:
                                  "function" == typeof a.onClick && (r.onclick = cn)
                          }
                          n = e, t.updateQueue = n, null !== n && (t.effectTag |= 4)
                      } else {
                          switch (u = 9 === n.nodeType ? n : n.ownerDocument, e === an && (e = Fe(o)), e === an ? "script" === o ? ((e = u.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" == typeof r.is ? e = u.createElement(o, {
                              is: r.is
                          }) : (e = u.createElement(o), "select" === o && (u = e, r.multiple ? u.multiple = !0 : r.size && (u.size = r.size))) : e = u.createElementNS(e, o), e[kn] = t, e[Cn] = r, Vs(e, t), t.stateNode = e, u = sn(o, r), o) {
                              case "iframe":
                              case "object":
                              case "embed":
                                  $t("load", e), c = r;
                                  break;
                              case "video":
                              case "audio":
                                  for (c = 0; c < Qe.length; c++) $t(Qe[c], e);
                                  c = r;
                                  break;
                              case "source":
                                  $t("error", e), c = r;
                                  break;
                              case "img":
                              case "image":
                              case "link":
                                  $t("error", e), $t("load", e), c = r;
                                  break;
                              case "form":
                                  $t("reset", e), $t("submit", e), c = r;
                                  break;
                              case "details":
                                  $t("toggle", e), c = r;
                                  break;
                              case "input":
                                  Se(e, r), c = Ee(e, r), $t("invalid", e), un(n, "onChange");
                                  break;
                              case "option":
                                  c = Ae(e, r);
                                  break;
                              case "select":
                                  e._wrapperState = {
                                      wasMultiple: !!r.multiple
                                  }, c = i({}, r, {
                                      value: void 0
                                  }), $t("invalid", e), un(n, "onChange");
                                  break;
                              case "textarea":
                                  Ne(e, r), c = Pe(e, r), $t("invalid", e), un(n, "onChange");
                                  break;
                              default:
                                  c = r
                          }
                          on(o, c);
                          var l = c;
                          for (a in l)
                              if (l.hasOwnProperty(a)) {
                                  var d = l[a];
                                  "style" === a ? nn(e, d) : "dangerouslySetInnerHTML" === a ? null != (d = d ? d.__html : void 0) && De(e, d) : "children" === a ? "string" == typeof d ? ("textarea" !== o || "" !== d) && Ve(e, d) : "number" == typeof d && Ve(e, "" + d) : "suppressContentEditableWarning" !== a && "suppressHydrationWarning" !== a && "autoFocus" !== a && (k.hasOwnProperty(a) ? null != d && un(n, a) : null != d && J(e, a, d, u))
                              } switch (o) {
                              case "input":
                                  we(e), xe(e, r, !1);
                                  break;
                              case "textarea":
                                  we(e), Re(e);
                                  break;
                              case "option":
                                  null != r.value && e.setAttribute("value", "" + ve(r.value));
                                  break;
                              case "select":
                                  e.multiple = !!r.multiple, null != (n = r.value) ? Oe(e, !!r.multiple, n, !1) : null != r.defaultValue && Oe(e, !!r.multiple, r.defaultValue, !0);
                                  break;
                              default:
                                  "function" == typeof c.onClick && (e.onclick = cn)
                          }
                          yn(o, r) && (t.effectTag |= 4)
                      }
                      null !== t.ref && (t.effectTag |= 128)
                  }
                  return null;
              case 6:
                  if (e && null != t.stateNode) zs(0, t, e.memoizedProps, r);
                  else {
                      if ("string" != typeof r && null === t.stateNode) throw Error(s(166));
                      n = No(Po.current), No(Ao.current), Ts(t) ? (n = t.stateNode, r = t.memoizedProps, n[kn] = t, n.nodeValue !== r && (t.effectTag |= 4)) : ((n = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[kn] = t, t.stateNode = n)
                  }
                  return null;
              case 13:
                  return ui(Fo), r = t.memoizedState, 0 != (64 & t.effectTag) ? (t.expirationTime = n, t) : (n = null !== r, r = !1, null === e ? void 0 !== t.memoizedProps.fallback && Ts(t) : (r = null !== (o = e.memoizedState), n || null === o || null !== (o = e.child.sibling) && (null !== (a = t.firstEffect) ? (t.firstEffect = o, o.nextEffect = a) : (t.firstEffect = t.lastEffect = o, o.nextEffect = null), o.effectTag = 8)), n && !r && 0 != (2 & t.mode) && (null === e && !0 !== t.memoizedProps.unstable_avoidThisFallback || 0 != (1 & Fo.current) ? Ta === wa && (Ta = _a) : (Ta !== wa && Ta !== _a || (Ta = Ea), 0 !== Ma && null !== ka && (Ru(ka, xa), ju(ka, Ma)))), (n || r) && (t.effectTag |= 4), null);
              case 4:
                  return Ro(), null;
              case 10:
                  return eo(t), null;
              case 17:
                  return mi(t.type) && gi(), null;
              case 19:
                  if (ui(Fo), null === (r = t.memoizedState)) return null;
                  if (o = 0 != (64 & t.effectTag), null === (a = r.rendering)) {
                      if (o) Ks(r, !1);
                      else if (Ta !== wa || null !== e && 0 != (64 & e.effectTag))
                          for (a = t.child; null !== a;) {
                              if (null !== (e = Io(a))) {
                                  for (t.effectTag |= 64, Ks(r, !1), null !== (o = e.updateQueue) && (t.updateQueue = o, t.effectTag |= 4), null === r.lastEffect && (t.firstEffect = null), t.lastEffect = r.lastEffect, r = t.child; null !== r;) a = n, (o = r).effectTag &= 2, o.nextEffect = null, o.firstEffect = null, o.lastEffect = null, null === (e = o.alternate) ? (o.childExpirationTime = 0, o.expirationTime = a, o.child = null, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null) : (o.childExpirationTime = e.childExpirationTime, o.expirationTime = e.expirationTime, o.child = e.child, o.memoizedProps = e.memoizedProps, o.memoizedState = e.memoizedState, o.updateQueue = e.updateQueue, a = e.dependencies, o.dependencies = null === a ? null : {
                                      expirationTime: a.expirationTime,
                                      firstContext: a.firstContext,
                                      responders: a.responders
                                  }), r = r.sibling;
                                  return ci(Fo, 1 & Fo.current | 2), t.child
                              }
                              a = a.sibling
                          }
                  } else {
                      if (!o)
                          if (null !== (e = Io(a))) {
                              if (t.effectTag |= 64, o = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.effectTag |= 4), Ks(r, !0), null === r.tail && "hidden" === r.tailMode && !a.alternate) return null !== (t = t.lastEffect = r.lastEffect) && (t.nextEffect = null), null
                          } else 2 * Di() - r.renderingStartTime > r.tailExpiration && 1 < n && (t.effectTag |= 64, o = !0, Ks(r, !1), t.expirationTime = t.childExpirationTime = n - 1);
                      r.isBackwards ? (a.sibling = t.child, t.child = a) : (null !== (n = r.last) ? n.sibling = a : t.child = a, r.last = a)
                  }
                  return null !== r.tail ? (0 === r.tailExpiration && (r.tailExpiration = Di() + 500), n = r.tail, r.rendering = n, r.tail = n.sibling, r.lastEffect = t.lastEffect, r.renderingStartTime = Di(), n.sibling = null, t = Fo.current, ci(Fo, o ? 1 & t | 2 : 1 & t), n) : null
          }
          throw Error(s(156, t.tag))
      }

      function Js(e) {
          switch (e.tag) {
              case 1:
                  mi(e.type) && gi();
                  var t = e.effectTag;
                  return 4096 & t ? (e.effectTag = -4097 & t | 64, e) : null;
              case 3:
                  if (Ro(), ui(fi), ui(di), 0 != (64 & (t = e.effectTag))) throw Error(s(285));
                  return e.effectTag = -4097 & t | 64, e;
              case 5:
                  return Bo(e), null;
              case 13:
                  return ui(Fo), 4096 & (t = e.effectTag) ? (e.effectTag = -4097 & t | 64, e) : null;
              case 19:
                  return ui(Fo), null;
              case 4:
                  return Ro(), null;
              case 10:
                  return eo(e), null;
              default:
                  return null
          }
      }

      function Xs(e, t) {
          return {
              value: e,
              source: t,
              stack: ye(t)
          }
      }
      Vs = function(e, t) {
          for (var n = t.child; null !== n;) {
              if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
              else if (4 !== n.tag && null !== n.child) {
                  n.child.return = n, n = n.child;
                  continue
              }
              if (n === t) break;
              for (; null === n.sibling;) {
                  if (null === n.return || n.return === t) return;
                  n = n.return
              }
              n.sibling.return = n.return, n = n.sibling
          }
      }, Us = function(e, t, n, r, o) {
          var s = e.memoizedProps;
          if (s !== r) {
              var a, u, c = t.stateNode;
              switch (No(Ao.current), e = null, n) {
                  case "input":
                      s = Ee(c, s), r = Ee(c, r), e = [];
                      break;
                  case "option":
                      s = Ae(c, s), r = Ae(c, r), e = [];
                      break;
                  case "select":
                      s = i({}, s, {
                          value: void 0
                      }), r = i({}, r, {
                          value: void 0
                      }), e = [];
                      break;
                  case "textarea":
                      s = Pe(c, s), r = Pe(c, r), e = [];
                      break;
                  default:
                      "function" != typeof s.onClick && "function" == typeof r.onClick && (c.onclick = cn)
              }
              for (a in on(n, r), n = null, s)
                  if (!r.hasOwnProperty(a) && s.hasOwnProperty(a) && null != s[a])
                      if ("style" === a)
                          for (u in c = s[a]) c.hasOwnProperty(u) && (n || (n = {}), n[u] = "");
                      else "dangerouslySetInnerHTML" !== a && "children" !== a && "suppressContentEditableWarning" !== a && "suppressHydrationWarning" !== a && "autoFocus" !== a && (k.hasOwnProperty(a) ? e || (e = []) : (e = e || []).push(a, null));
              for (a in r) {
                  var l = r[a];
                  if (c = null != s ? s[a] : void 0, r.hasOwnProperty(a) && l !== c && (null != l || null != c))
                      if ("style" === a)
                          if (c) {
                              for (u in c) !c.hasOwnProperty(u) || l && l.hasOwnProperty(u) || (n || (n = {}), n[u] = "");
                              for (u in l) l.hasOwnProperty(u) && c[u] !== l[u] && (n || (n = {}), n[u] = l[u])
                          } else n || (e || (e = []), e.push(a, n)), n = l;
                  else "dangerouslySetInnerHTML" === a ? (l = l ? l.__html : void 0, c = c ? c.__html : void 0, null != l && c !== l && (e = e || []).push(a, l)) : "children" === a ? c === l || "string" != typeof l && "number" != typeof l || (e = e || []).push(a, "" + l) : "suppressContentEditableWarning" !== a && "suppressHydrationWarning" !== a && (k.hasOwnProperty(a) ? (null != l && un(o, a), e || c === l || (e = [])) : (e = e || []).push(a, l))
              }
              n && (e = e || []).push("style", n), o = e, (t.updateQueue = o) && (t.effectTag |= 4)
          }
      }, zs = function(e, t, n, r) {
          n !== r && (t.effectTag |= 4)
      };
      var Zs = "function" == typeof WeakSet ? WeakSet : Set;

      function ea(e, t) {
          var n = t.source,
              r = t.stack;
          null === r && null !== n && (r = ye(n)), null !== n && ge(n.type), t = t.value, null !== e && 1 === e.tag && ge(e.type);
          try {
              console.error(t)
          } catch (e) {
              setTimeout((function() {
                  throw e
              }))
          }
      }

      function ta(e) {
          var t = e.ref;
          if (null !== t)
              if ("function" == typeof t) try {
                  t(null)
              } catch (t) {
                  vu(e, t)
              } else t.current = null
      }

      function na(e, t) {
          switch (t.tag) {
              case 0:
              case 11:
              case 15:
              case 22:
                  return;
              case 1:
                  if (256 & t.effectTag && null !== e) {
                      var n = e.memoizedProps,
                          r = e.memoizedState;
                      t = (e = t.stateNode).getSnapshotBeforeUpdate(t.elementType === t.type ? n : Yi(t.type, n), r), e.__reactInternalSnapshotBeforeUpdate = t
                  }
                  return;
              case 3:
              case 5:
              case 6:
              case 4:
              case 17:
                  return
          }
          throw Error(s(163))
      }

      function ra(e, t) {
          if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
              var n = t = t.next;
              do {
                  if ((n.tag & e) === e) {
                      var r = n.destroy;
                      n.destroy = void 0, void 0 !== r && r()
                  }
                  n = n.next
              } while (n !== t)
          }
      }

      function ia(e, t) {
          if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
              var n = t = t.next;
              do {
                  if ((n.tag & e) === e) {
                      var r = n.create;
                      n.destroy = r()
                  }
                  n = n.next
              } while (n !== t)
          }
      }

      function oa(e, t, n) {
          switch (n.tag) {
              case 0:
              case 11:
              case 15:
              case 22:
                  return void ia(3, n);
              case 1:
                  if (e = n.stateNode, 4 & n.effectTag)
                      if (null === t) e.componentDidMount();
                      else {
                          var r = n.elementType === n.type ? t.memoizedProps : Yi(n.type, t.memoizedProps);
                          e.componentDidUpdate(r, t.memoizedState, e.__reactInternalSnapshotBeforeUpdate)
                      } return void(null !== (t = n.updateQueue) && fo(n, t, e));
              case 3:
                  if (null !== (t = n.updateQueue)) {
                      if (e = null, null !== n.child) switch (n.child.tag) {
                          case 5:
                              e = n.child.stateNode;
                              break;
                          case 1:
                              e = n.child.stateNode
                      }
                      fo(n, t, e)
                  }
                  return;
              case 5:
                  return e = n.stateNode, void(null === t && 4 & n.effectTag && yn(n.type, n.memoizedProps) && e.focus());
              case 6:
              case 4:
              case 12:
                  return;
              case 13:
                  return void(null === n.memoizedState && (n = n.alternate, null !== n && (n = n.memoizedState, null !== n && (n = n.dehydrated, null !== n && Ft(n)))));
              case 19:
              case 17:
              case 20:
              case 21:
                  return
          }
          throw Error(s(163))
      }

      function sa(e, t, n) {
          switch ("function" == typeof Eu && Eu(t), t.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
              case 22:
                  if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                      var r = e.next;
                      zi(97 < n ? 97 : n, (function() {
                          var e = r;
                          do {
                              var n = e.destroy;
                              if (void 0 !== n) {
                                  var i = t;
                                  try {
                                      n()
                                  } catch (e) {
                                      vu(i, e)
                                  }
                              }
                              e = e.next
                          } while (e !== r)
                      }))
                  }
                  break;
              case 1:
                  ta(t), "function" == typeof(n = t.stateNode).componentWillUnmount && function(e, t) {
                      try {
                          t.props = e.memoizedProps, t.state = e.memoizedState, t.componentWillUnmount()
                      } catch (t) {
                          vu(e, t)
                      }
                  }(t, n);
                  break;
              case 5:
                  ta(t);
                  break;
              case 4:
                  la(e, t, n)
          }
      }

      function aa(e) {
          var t = e.alternate;
          e.return = null, e.child = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.alternate = null, e.firstEffect = null, e.lastEffect = null, e.pendingProps = null, e.memoizedProps = null, e.stateNode = null, null !== t && aa(t)
      }

      function ua(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag
      }

      function ca(e) {
          e: {
              for (var t = e.return; null !== t;) {
                  if (ua(t)) {
                      var n = t;
                      break e
                  }
                  t = t.return
              }
              throw Error(s(160))
          }
          switch (t = n.stateNode, n.tag) {
              case 5:
                  var r = !1;
                  break;
              case 3:
              case 4:
                  t = t.containerInfo, r = !0;
                  break;
              default:
                  throw Error(s(161))
          }
          16 & n.effectTag && (Ve(t, ""), n.effectTag &= -17);e: t: for (n = e;;) {
              for (; null === n.sibling;) {
                  if (null === n.return || ua(n.return)) {
                      n = null;
                      break e
                  }
                  n = n.return
              }
              for (n.sibling.return = n.return, n = n.sibling; 5 !== n.tag && 6 !== n.tag && 18 !== n.tag;) {
                  if (2 & n.effectTag) continue t;
                  if (null === n.child || 4 === n.tag) continue t;
                  n.child.return = n, n = n.child
              }
              if (!(2 & n.effectTag)) {
                  n = n.stateNode;
                  break e
              }
          }
          r ? function e(t, n, r) {
              var i = t.tag,
                  o = 5 === i || 6 === i;
              if (o) t = o ? t.stateNode : t.stateNode.instance, n ? 8 === r.nodeType ? r.parentNode.insertBefore(t, n) : r.insertBefore(t, n) : (8 === r.nodeType ? (n = r.parentNode).insertBefore(t, r) : (n = r).appendChild(t), null !== (r = r._reactRootContainer) && void 0 !== r || null !== n.onclick || (n.onclick = cn));
              else if (4 !== i && null !== (t = t.child))
                  for (e(t, n, r), t = t.sibling; null !== t;) e(t, n, r), t = t.sibling
          }(e, n, t) : function e(t, n, r) {
              var i = t.tag,
                  o = 5 === i || 6 === i;
              if (o) t = o ? t.stateNode : t.stateNode.instance, n ? r.insertBefore(t, n) : r.appendChild(t);
              else if (4 !== i && null !== (t = t.child))
                  for (e(t, n, r), t = t.sibling; null !== t;) e(t, n, r), t = t.sibling
          }(e, n, t)
      }

      function la(e, t, n) {
          for (var r, i, o = t, a = !1;;) {
              if (!a) {
                  a = o.return;
                  e: for (;;) {
                      if (null === a) throw Error(s(160));
                      switch (r = a.stateNode, a.tag) {
                          case 5:
                              i = !1;
                              break e;
                          case 3:
                          case 4:
                              r = r.containerInfo, i = !0;
                              break e
                      }
                      a = a.return
                  }
                  a = !0
              }
              if (5 === o.tag || 6 === o.tag) {
                  e: for (var u = e, c = o, l = n, d = c;;)
                      if (sa(u, d, l), null !== d.child && 4 !== d.tag) d.child.return = d, d = d.child;
                      else {
                          if (d === c) break e;
                          for (; null === d.sibling;) {
                              if (null === d.return || d.return === c) break e;
                              d = d.return
                          }
                          d.sibling.return = d.return, d = d.sibling
                      }i ? (u = r, c = o.stateNode, 8 === u.nodeType ? u.parentNode.removeChild(c) : u.removeChild(c)) : r.removeChild(o.stateNode)
              }
              else if (4 === o.tag) {
                  if (null !== o.child) {
                      r = o.stateNode.containerInfo, i = !0, o.child.return = o, o = o.child;
                      continue
                  }
              } else if (sa(e, o, n), null !== o.child) {
                  o.child.return = o, o = o.child;
                  continue
              }
              if (o === t) break;
              for (; null === o.sibling;) {
                  if (null === o.return || o.return === t) return;
                  4 === (o = o.return).tag && (a = !1)
              }
              o.sibling.return = o.return, o = o.sibling
          }
      }

      function da(e, t) {
          switch (t.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
              case 22:
                  return void ra(3, t);
              case 1:
                  return;
              case 5:
                  var n = t.stateNode;
                  if (null != n) {
                      var r = t.memoizedProps,
                          i = null !== e ? e.memoizedProps : r;
                      e = t.type;
                      var o = t.updateQueue;
                      if (t.updateQueue = null, null !== o) {
                          for (n[Cn] = r, "input" === e && "radio" === r.type && null != r.name && ke(n, r), sn(e, i), t = sn(e, r), i = 0; i < o.length; i += 2) {
                              var a = o[i],
                                  u = o[i + 1];
                              "style" === a ? nn(n, u) : "dangerouslySetInnerHTML" === a ? De(n, u) : "children" === a ? Ve(n, u) : J(n, a, u, t)
                          }
                          switch (e) {
                              case "input":
                                  Ce(n, r);
                                  break;
                              case "textarea":
                                  Me(n, r);
                                  break;
                              case "select":
                                  t = n._wrapperState.wasMultiple, n._wrapperState.wasMultiple = !!r.multiple, null != (e = r.value) ? Oe(n, !!r.multiple, e, !1) : t !== !!r.multiple && (null != r.defaultValue ? Oe(n, !!r.multiple, r.defaultValue, !0) : Oe(n, !!r.multiple, r.multiple ? [] : "", !1))
                          }
                      }
                  }
                  return;
              case 6:
                  if (null === t.stateNode) throw Error(s(162));
                  return void(t.stateNode.nodeValue = t.memoizedProps);
              case 3:
                  return void((t = t.stateNode).hydrate && (t.hydrate = !1, Ft(t.containerInfo)));
              case 12:
                  return;
              case 13:
                  if (n = t, null === t.memoizedState ? r = !1 : (r = !0, n = t.child, ja = Di()), null !== n) e: for (e = n;;) {
                      if (5 === e.tag) o = e.stateNode, r ? "function" == typeof(o = o.style).setProperty ? o.setProperty("display", "none", "important") : o.display = "none" : (o = e.stateNode, i = null != (i = e.memoizedProps.style) && i.hasOwnProperty("display") ? i.display : null, o.style.display = tn("display", i));
                      else if (6 === e.tag) e.stateNode.nodeValue = r ? "" : e.memoizedProps;
                      else {
                          if (13 === e.tag && null !== e.memoizedState && null === e.memoizedState.dehydrated) {
                              (o = e.child.sibling).return = e, e = o;
                              continue
                          }
                          if (null !== e.child) {
                              e.child.return = e, e = e.child;
                              continue
                          }
                      }
                      if (e === n) break;
                      for (; null === e.sibling;) {
                          if (null === e.return || e.return === n) break e;
                          e = e.return
                      }
                      e.sibling.return = e.return, e = e.sibling
                  }
                  return void fa(t);
              case 19:
                  return void fa(t);
              case 17:
                  return
          }
          throw Error(s(163))
      }

      function fa(e) {
          var t = e.updateQueue;
          if (null !== t) {
              e.updateQueue = null;
              var n = e.stateNode;
              null === n && (n = e.stateNode = new Zs), t.forEach((function(t) {
                  var r = wu.bind(null, e, t);
                  n.has(t) || (n.add(t), t.then(r, r))
              }))
          }
      }
      var pa = "function" == typeof WeakMap ? WeakMap : Map;

      function ha(e, t, n) {
          (n = ao(n, null)).tag = 3, n.payload = {
              element: null
          };
          var r = t.value;
          return n.callback = function() {
              Fa || (Fa = !0, Ia = r), ea(e, t)
          }, n
      }

      function ma(e, t, n) {
          (n = ao(n, null)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" == typeof r) {
              var i = t.value;
              n.payload = function() {
                  return ea(e, t), r(i)
              }
          }
          var o = e.stateNode;
          return null !== o && "function" == typeof o.componentDidCatch && (n.callback = function() {
              "function" != typeof r && (null === La ? La = new Set([this]) : La.add(this), ea(e, t));
              var n = t.stack;
              this.componentDidCatch(t.value, {
                  componentStack: null !== n ? n : ""
              })
          }), n
      }
      var ga, ya = Math.ceil,
          va = Q.ReactCurrentDispatcher,
          ba = Q.ReactCurrentOwner,
          wa = 0,
          _a = 3,
          Ea = 4,
          Sa = 0,
          ka = null,
          Ca = null,
          xa = 0,
          Ta = wa,
          Aa = null,
          Oa = 1073741823,
          Pa = 1073741823,
          Na = null,
          Ma = 0,
          Ra = !1,
          ja = 0,
          Ba = null,
          Fa = !1,
          Ia = null,
          La = null,
          Da = !1,
          Va = null,
          Ua = 90,
          za = null,
          qa = 0,
          Wa = null,
          Ga = 0;

      function Ha() {
          return 0 != (48 & Sa) ? 1073741821 - (Di() / 10 | 0) : 0 !== Ga ? Ga : Ga = 1073741821 - (Di() / 10 | 0)
      }

      function $a(e, t, n) {
          if (0 == (2 & (t = t.mode))) return 1073741823;
          var r = Vi();
          if (0 == (4 & t)) return 99 === r ? 1073741823 : 1073741822;
          if (0 != (16 & Sa)) return xa;
          if (null !== n) e = $i(e, 0 | n.timeoutMs || 5e3, 250);
          else switch (r) {
              case 99:
                  e = 1073741823;
                  break;
              case 98:
                  e = $i(e, 150, 100);
                  break;
              case 97:
              case 96:
                  e = $i(e, 5e3, 250);
                  break;
              case 95:
                  e = 2;
                  break;
              default:
                  throw Error(s(326))
          }
          return null !== ka && e === xa && --e, e
      }

      function Ya(e, t) {
          if (50 < qa) throw qa = 0, Wa = null, Error(s(185));
          if (null !== (e = Ka(e, t))) {
              var n = Vi();
              1073741823 === t ? 0 != (8 & Sa) && 0 == (48 & Sa) ? Za(e) : (Ja(e), 0 === Sa && Gi()) : Ja(e), 0 == (4 & Sa) || 98 !== n && 99 !== n || (null === za ? za = new Map([
                  [e, t]
              ]) : (void 0 === (n = za.get(e)) || n > t) && za.set(e, t))
          }
      }

      function Ka(e, t) {
          e.expirationTime < t && (e.expirationTime = t);
          var n = e.alternate;
          null !== n && n.expirationTime < t && (n.expirationTime = t);
          var r = e.return,
              i = null;
          if (null === r && 3 === e.tag) i = e.stateNode;
          else
              for (; null !== r;) {
                  if (n = r.alternate, r.childExpirationTime < t && (r.childExpirationTime = t), null !== n && n.childExpirationTime < t && (n.childExpirationTime = t), null === r.return && 3 === r.tag) {
                      i = r.stateNode;
                      break
                  }
                  r = r.return
              }
          return null !== i && (ka === i && (su(t), Ta === Ea && Ru(i, xa)), ju(i, t)), i
      }

      function Qa(e) {
          var t = e.lastExpiredTime;
          if (0 !== t) return t;
          if (!Mu(e, t = e.firstPendingTime)) return t;
          var n = e.lastPingedTime;
          return 2 >= (e = n > (e = e.nextKnownPendingLevel) ? n : e) && t !== e ? 0 : e
      }

      function Ja(e) {
          if (0 !== e.lastExpiredTime) e.callbackExpirationTime = 1073741823, e.callbackPriority = 99, e.callbackNode = Wi(Za.bind(null, e));
          else {
              var t = Qa(e),
                  n = e.callbackNode;
              if (0 === t) null !== n && (e.callbackNode = null, e.callbackExpirationTime = 0, e.callbackPriority = 90);
              else {
                  var r = Ha();
                  if (1073741823 === t ? r = 99 : 1 === t || 2 === t ? r = 95 : r = 0 >= (r = 10 * (1073741821 - t) - 10 * (1073741821 - r)) ? 99 : 250 >= r ? 98 : 5250 >= r ? 97 : 95, null !== n) {
                      var i = e.callbackPriority;
                      if (e.callbackExpirationTime === t && i >= r) return;
                      n !== Mi && Si(n)
                  }
                  e.callbackExpirationTime = t, e.callbackPriority = r, t = 1073741823 === t ? Wi(Za.bind(null, e)) : qi(r, Xa.bind(null, e), {
                      timeout: 10 * (1073741821 - t) - Di()
                  }), e.callbackNode = t
              }
          }
      }

      function Xa(e, t) {
          if (Ga = 0, t) return Bu(e, t = Ha()), Ja(e), null;
          var n = Qa(e);
          if (0 !== n) {
              if (t = e.callbackNode, 0 != (48 & Sa)) throw Error(s(327));
              if (mu(), e === ka && n === xa || nu(e, n), null !== Ca) {
                  var r = Sa;
                  Sa |= 16;
                  for (var i = iu();;) try {
                      uu();
                      break
                  } catch (t) {
                      ru(e, t)
                  }
                  if (Zi(), Sa = r, va.current = i, 1 === Ta) throw t = Aa, nu(e, n), Ru(e, n), Ja(e), t;
                  if (null === Ca) switch (i = e.finishedWork = e.current.alternate, e.finishedExpirationTime = n, r = Ta, ka = null, r) {
                      case wa:
                      case 1:
                          throw Error(s(345));
                      case 2:
                          Bu(e, 2 < n ? 2 : n);
                          break;
                      case _a:
                          if (Ru(e, n), n === (r = e.lastSuspendedTime) && (e.nextKnownPendingLevel = du(i)), 1073741823 === Oa && 10 < (i = ja + 500 - Di())) {
                              if (Ra) {
                                  var o = e.lastPingedTime;
                                  if (0 === o || o >= n) {
                                      e.lastPingedTime = n, nu(e, n);
                                      break
                                  }
                              }
                              if (0 !== (o = Qa(e)) && o !== n) break;
                              if (0 !== r && r !== n) {
                                  e.lastPingedTime = r;
                                  break
                              }
                              e.timeoutHandle = bn(fu.bind(null, e), i);
                              break
                          }
                          fu(e);
                          break;
                      case Ea:
                          if (Ru(e, n), n === (r = e.lastSuspendedTime) && (e.nextKnownPendingLevel = du(i)), Ra && (0 === (i = e.lastPingedTime) || i >= n)) {
                              e.lastPingedTime = n, nu(e, n);
                              break
                          }
                          if (0 !== (i = Qa(e)) && i !== n) break;
                          if (0 !== r && r !== n) {
                              e.lastPingedTime = r;
                              break
                          }
                          if (1073741823 !== Pa ? r = 10 * (1073741821 - Pa) - Di() : 1073741823 === Oa ? r = 0 : (r = 10 * (1073741821 - Oa) - 5e3, 0 > (r = (i = Di()) - r) && (r = 0), (n = 10 * (1073741821 - n) - i) < (r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * ya(r / 1960)) - r) && (r = n)), 10 < r) {
                              e.timeoutHandle = bn(fu.bind(null, e), r);
                              break
                          }
                          fu(e);
                          break;
                      case 5:
                          if (1073741823 !== Oa && null !== Na) {
                              o = Oa;
                              var a = Na;
                              if (0 >= (r = 0 | a.busyMinDurationMs) ? r = 0 : (i = 0 | a.busyDelayMs, r = (o = Di() - (10 * (1073741821 - o) - (0 | a.timeoutMs || 5e3))) <= i ? 0 : i + r - o), 10 < r) {
                                  Ru(e, n), e.timeoutHandle = bn(fu.bind(null, e), r);
                                  break
                              }
                          }
                          fu(e);
                          break;
                      default:
                          throw Error(s(329))
                  }
                  if (Ja(e), e.callbackNode === t) return Xa.bind(null, e)
              }
          }
          return null
      }

      function Za(e) {
          var t = e.lastExpiredTime;
          if (t = 0 !== t ? t : 1073741823, 0 != (48 & Sa)) throw Error(s(327));
          if (mu(), e === ka && t === xa || nu(e, t), null !== Ca) {
              var n = Sa;
              Sa |= 16;
              for (var r = iu();;) try {
                  au();
                  break
              } catch (t) {
                  ru(e, t)
              }
              if (Zi(), Sa = n, va.current = r, 1 === Ta) throw n = Aa, nu(e, t), Ru(e, t), Ja(e), n;
              if (null !== Ca) throw Error(s(261));
              e.finishedWork = e.current.alternate, e.finishedExpirationTime = t, ka = null, fu(e), Ja(e)
          }
          return null
      }

      function eu(e, t) {
          var n = Sa;
          Sa |= 1;
          try {
              return e(t)
          } finally {
              0 === (Sa = n) && Gi()
          }
      }

      function tu(e, t) {
          var n = Sa;
          Sa &= -2, Sa |= 8;
          try {
              return e(t)
          } finally {
              0 === (Sa = n) && Gi()
          }
      }

      function nu(e, t) {
          e.finishedWork = null, e.finishedExpirationTime = 0;
          var n = e.timeoutHandle;
          if (-1 !== n && (e.timeoutHandle = -1, wn(n)), null !== Ca)
              for (n = Ca.return; null !== n;) {
                  var r = n;
                  switch (r.tag) {
                      case 1:
                          null != (r = r.type.childContextTypes) && gi();
                          break;
                      case 3:
                          Ro(), ui(fi), ui(di);
                          break;
                      case 5:
                          Bo(r);
                          break;
                      case 4:
                          Ro();
                          break;
                      case 13:
                      case 19:
                          ui(Fo);
                          break;
                      case 10:
                          eo(r)
                  }
                  n = n.return
              }
          ka = e, Ca = xu(e.current, null), xa = t, Ta = wa, Aa = null, Pa = Oa = 1073741823, Na = null, Ma = 0, Ra = !1
      }

      function ru(e, t) {
          for (;;) {
              try {
                  if (Zi(), Do.current = gs, Go)
                      for (var n = zo.memoizedState; null !== n;) {
                          var r = n.queue;
                          null !== r && (r.pending = null), n = n.next
                      }
                  if (Uo = 0, Wo = qo = zo = null, Go = !1, null === Ca || null === Ca.return) return Ta = 1, Aa = t, Ca = null;
                  e: {
                      var i = e,
                          o = Ca.return,
                          s = Ca,
                          a = t;
                      if (t = xa, s.effectTag |= 2048, s.firstEffect = s.lastEffect = null, null !== a && "object" == typeof a && "function" == typeof a.then) {
                          var u = a;
                          if (0 == (2 & s.mode)) {
                              var c = s.alternate;
                              c ? (s.updateQueue = c.updateQueue, s.memoizedState = c.memoizedState, s.expirationTime = c.expirationTime) : (s.updateQueue = null, s.memoizedState = null)
                          }
                          var l = 0 != (1 & Fo.current),
                              d = o;
                          do {
                              var f;
                              if (f = 13 === d.tag) {
                                  var p = d.memoizedState;
                                  if (null !== p) f = null !== p.dehydrated;
                                  else {
                                      var h = d.memoizedProps;
                                      f = void 0 !== h.fallback && (!0 !== h.unstable_avoidThisFallback || !l)
                                  }
                              }
                              if (f) {
                                  var m = d.updateQueue;
                                  if (null === m) {
                                      var g = new Set;
                                      g.add(u), d.updateQueue = g
                                  } else m.add(u);
                                  if (0 == (2 & d.mode)) {
                                      if (d.effectTag |= 64, s.effectTag &= -2981, 1 === s.tag)
                                          if (null === s.alternate) s.tag = 17;
                                          else {
                                              var y = ao(1073741823, null);
                                              y.tag = 2, uo(s, y)
                                          } s.expirationTime = 1073741823;
                                      break e
                                  }
                                  a = void 0, s = t;
                                  var v = i.pingCache;
                                  if (null === v ? (v = i.pingCache = new pa, a = new Set, v.set(u, a)) : void 0 === (a = v.get(u)) && (a = new Set, v.set(u, a)), !a.has(s)) {
                                      a.add(s);
                                      var b = bu.bind(null, i, u, s);
                                      u.then(b, b)
                                  }
                                  d.effectTag |= 4096, d.expirationTime = t;
                                  break e
                              }
                              d = d.return
                          } while (null !== d);
                          a = Error((ge(s.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." + ye(s))
                      }
                      5 !== Ta && (Ta = 2),
                      a = Xs(a, s),
                      d = o;do {
                          switch (d.tag) {
                              case 3:
                                  u = a, d.effectTag |= 4096, d.expirationTime = t, co(d, ha(d, u, t));
                                  break e;
                              case 1:
                                  u = a;
                                  var w = d.type,
                                      _ = d.stateNode;
                                  if (0 == (64 & d.effectTag) && ("function" == typeof w.getDerivedStateFromError || null !== _ && "function" == typeof _.componentDidCatch && (null === La || !La.has(_)))) {
                                      d.effectTag |= 4096, d.expirationTime = t, co(d, ma(d, u, t));
                                      break e
                                  }
                          }
                          d = d.return
                      } while (null !== d)
                  }
                  Ca = lu(Ca)
              } catch (e) {
                  t = e;
                  continue
              }
              break
          }
      }

      function iu() {
          var e = va.current;
          return va.current = gs, null === e ? gs : e
      }

      function ou(e, t) {
          e < Oa && 2 < e && (Oa = e), null !== t && e < Pa && 2 < e && (Pa = e, Na = t)
      }

      function su(e) {
          e > Ma && (Ma = e)
      }

      function au() {
          for (; null !== Ca;) Ca = cu(Ca)
      }

      function uu() {
          for (; null !== Ca && !Ri();) Ca = cu(Ca)
      }

      function cu(e) {
          var t = ga(e.alternate, e, xa);
          return e.memoizedProps = e.pendingProps, null === t && (t = lu(e)), ba.current = null, t
      }

      function lu(e) {
          Ca = e;
          do {
              var t = Ca.alternate;
              if (e = Ca.return, 0 == (2048 & Ca.effectTag)) {
                  if (t = Qs(t, Ca, xa), 1 === xa || 1 !== Ca.childExpirationTime) {
                      for (var n = 0, r = Ca.child; null !== r;) {
                          var i = r.expirationTime,
                              o = r.childExpirationTime;
                          i > n && (n = i), o > n && (n = o), r = r.sibling
                      }
                      Ca.childExpirationTime = n
                  }
                  if (null !== t) return t;
                  null !== e && 0 == (2048 & e.effectTag) && (null === e.firstEffect && (e.firstEffect = Ca.firstEffect), null !== Ca.lastEffect && (null !== e.lastEffect && (e.lastEffect.nextEffect = Ca.firstEffect), e.lastEffect = Ca.lastEffect), 1 < Ca.effectTag && (null !== e.lastEffect ? e.lastEffect.nextEffect = Ca : e.firstEffect = Ca, e.lastEffect = Ca))
              } else {
                  if (null !== (t = Js(Ca))) return t.effectTag &= 2047, t;
                  null !== e && (e.firstEffect = e.lastEffect = null, e.effectTag |= 2048)
              }
              if (null !== (t = Ca.sibling)) return t;
              Ca = e
          } while (null !== Ca);
          return Ta === wa && (Ta = 5), null
      }

      function du(e) {
          var t = e.expirationTime;
          return t > (e = e.childExpirationTime) ? t : e
      }

      function fu(e) {
          var t = Vi();
          return zi(99, pu.bind(null, e, t)), null
      }

      function pu(e, t) {
          do {
              mu()
          } while (null !== Va);
          if (0 != (48 & Sa)) throw Error(s(327));
          var n = e.finishedWork,
              r = e.finishedExpirationTime;
          if (null === n) return null;
          if (e.finishedWork = null, e.finishedExpirationTime = 0, n === e.current) throw Error(s(177));
          e.callbackNode = null, e.callbackExpirationTime = 0, e.callbackPriority = 90, e.nextKnownPendingLevel = 0;
          var i = du(n);
          if (e.firstPendingTime = i, r <= e.lastSuspendedTime ? e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0 : r <= e.firstSuspendedTime && (e.firstSuspendedTime = r - 1), r <= e.lastPingedTime && (e.lastPingedTime = 0), r <= e.lastExpiredTime && (e.lastExpiredTime = 0), e === ka && (Ca = ka = null, xa = 0), 1 < n.effectTag ? null !== n.lastEffect ? (n.lastEffect.nextEffect = n, i = n.firstEffect) : i = n : i = n.firstEffect, null !== i) {
              var o = Sa;
              Sa |= 32, ba.current = null, mn = Ht;
              var a = pn();
              if (hn(a)) {
                  if ("selectionStart" in a) var u = {
                      start: a.selectionStart,
                      end: a.selectionEnd
                  };
                  else e: {
                      var c = (u = (u = a.ownerDocument) && u.defaultView || window).getSelection && u.getSelection();
                      if (c && 0 !== c.rangeCount) {
                          u = c.anchorNode;
                          var l = c.anchorOffset,
                              d = c.focusNode;
                          c = c.focusOffset;
                          try {
                              u.nodeType, d.nodeType
                          } catch (e) {
                              u = null;
                              break e
                          }
                          var f = 0,
                              p = -1,
                              h = -1,
                              m = 0,
                              g = 0,
                              y = a,
                              v = null;
                          t: for (;;) {
                              for (var b; y !== u || 0 !== l && 3 !== y.nodeType || (p = f + l), y !== d || 0 !== c && 3 !== y.nodeType || (h = f + c), 3 === y.nodeType && (f += y.nodeValue.length), null !== (b = y.firstChild);) v = y, y = b;
                              for (;;) {
                                  if (y === a) break t;
                                  if (v === u && ++m === l && (p = f), v === d && ++g === c && (h = f), null !== (b = y.nextSibling)) break;
                                  v = (y = v).parentNode
                              }
                              y = b
                          }
                          u = -1 === p || -1 === h ? null : {
                              start: p,
                              end: h
                          }
                      } else u = null
                  }
                  u = u || {
                      start: 0,
                      end: 0
                  }
              } else u = null;
              gn = {
                  activeElementDetached: null,
                  focusedElem: a,
                  selectionRange: u
              }, Ht = !1, Ba = i;
              do {
                  try {
                      hu()
                  } catch (e) {
                      if (null === Ba) throw Error(s(330));
                      vu(Ba, e), Ba = Ba.nextEffect
                  }
              } while (null !== Ba);
              Ba = i;
              do {
                  try {
                      for (a = e, u = t; null !== Ba;) {
                          var w = Ba.effectTag;
                          if (16 & w && Ve(Ba.stateNode, ""), 128 & w) {
                              var _ = Ba.alternate;
                              if (null !== _) {
                                  var E = _.ref;
                                  null !== E && ("function" == typeof E ? E(null) : E.current = null)
                              }
                          }
                          switch (1038 & w) {
                              case 2:
                                  ca(Ba), Ba.effectTag &= -3;
                                  break;
                              case 6:
                                  ca(Ba), Ba.effectTag &= -3, da(Ba.alternate, Ba);
                                  break;
                              case 1024:
                                  Ba.effectTag &= -1025;
                                  break;
                              case 1028:
                                  Ba.effectTag &= -1025, da(Ba.alternate, Ba);
                                  break;
                              case 4:
                                  da(Ba.alternate, Ba);
                                  break;
                              case 8:
                                  la(a, l = Ba, u), aa(l)
                          }
                          Ba = Ba.nextEffect
                      }
                  } catch (e) {
                      if (null === Ba) throw Error(s(330));
                      vu(Ba, e), Ba = Ba.nextEffect
                  }
              } while (null !== Ba);
              if (E = gn, _ = pn(), w = E.focusedElem, u = E.selectionRange, _ !== w && w && w.ownerDocument && function e(t, n) {
                      return !(!t || !n) && (t === n || (!t || 3 !== t.nodeType) && (n && 3 === n.nodeType ? e(t, n.parentNode) : "contains" in t ? t.contains(n) : !!t.compareDocumentPosition && !!(16 & t.compareDocumentPosition(n))))
                  }(w.ownerDocument.documentElement, w)) {
                  null !== u && hn(w) && (_ = u.start, void 0 === (E = u.end) && (E = _), "selectionStart" in w ? (w.selectionStart = _, w.selectionEnd = Math.min(E, w.value.length)) : (E = (_ = w.ownerDocument || document) && _.defaultView || window).getSelection && (E = E.getSelection(), l = w.textContent.length, a = Math.min(u.start, l), u = void 0 === u.end ? a : Math.min(u.end, l), !E.extend && a > u && (l = u, u = a, a = l), l = fn(w, a), d = fn(w, u), l && d && (1 !== E.rangeCount || E.anchorNode !== l.node || E.anchorOffset !== l.offset || E.focusNode !== d.node || E.focusOffset !== d.offset) && ((_ = _.createRange()).setStart(l.node, l.offset), E.removeAllRanges(), a > u ? (E.addRange(_), E.extend(d.node, d.offset)) : (_.setEnd(d.node, d.offset), E.addRange(_))))), _ = [];
                  for (E = w; E = E.parentNode;) 1 === E.nodeType && _.push({
                      element: E,
                      left: E.scrollLeft,
                      top: E.scrollTop
                  });
                  for ("function" == typeof w.focus && w.focus(), w = 0; w < _.length; w++)(E = _[w]).element.scrollLeft = E.left, E.element.scrollTop = E.top
              }
              Ht = !!mn, gn = mn = null, e.current = n, Ba = i;
              do {
                  try {
                      for (w = e; null !== Ba;) {
                          var S = Ba.effectTag;
                          if (36 & S && oa(w, Ba.alternate, Ba), 128 & S) {
                              _ = void 0;
                              var k = Ba.ref;
                              if (null !== k) {
                                  var C = Ba.stateNode;
                                  switch (Ba.tag) {
                                      case 5:
                                          _ = C;
                                          break;
                                      default:
                                          _ = C
                                  }
                                  "function" == typeof k ? k(_) : k.current = _
                              }
                          }
                          Ba = Ba.nextEffect
                      }
                  } catch (e) {
                      if (null === Ba) throw Error(s(330));
                      vu(Ba, e), Ba = Ba.nextEffect
                  }
              } while (null !== Ba);
              Ba = null, ji(), Sa = o
          } else e.current = n;
          if (Da) Da = !1, Va = e, Ua = t;
          else
              for (Ba = i; null !== Ba;) t = Ba.nextEffect, Ba.nextEffect = null, Ba = t;
          if (0 === (t = e.firstPendingTime) && (La = null), 1073741823 === t ? e === Wa ? qa++ : (qa = 0, Wa = e) : qa = 0, "function" == typeof _u && _u(n.stateNode, r), Ja(e), Fa) throw Fa = !1, e = Ia, Ia = null, e;
          return 0 != (8 & Sa) || Gi(), null
      }

      function hu() {
          for (; null !== Ba;) {
              var e = Ba.effectTag;
              0 != (256 & e) && na(Ba.alternate, Ba), 0 == (512 & e) || Da || (Da = !0, qi(97, (function() {
                  return mu(), null
              }))), Ba = Ba.nextEffect
          }
      }

      function mu() {
          if (90 !== Ua) {
              var e = 97 < Ua ? 97 : Ua;
              return Ua = 90, zi(e, gu)
          }
      }

      function gu() {
          if (null === Va) return !1;
          var e = Va;
          if (Va = null, 0 != (48 & Sa)) throw Error(s(331));
          var t = Sa;
          for (Sa |= 32, e = e.current.firstEffect; null !== e;) {
              try {
                  var n = e;
                  if (0 != (512 & n.effectTag)) switch (n.tag) {
                      case 0:
                      case 11:
                      case 15:
                      case 22:
                          ra(5, n), ia(5, n)
                  }
              } catch (t) {
                  if (null === e) throw Error(s(330));
                  vu(e, t)
              }
              n = e.nextEffect, e.nextEffect = null, e = n
          }
          return Sa = t, Gi(), !0
      }

      function yu(e, t, n) {
          uo(e, t = ha(e, t = Xs(n, t), 1073741823)), null !== (e = Ka(e, 1073741823)) && Ja(e)
      }

      function vu(e, t) {
          if (3 === e.tag) yu(e, e, t);
          else
              for (var n = e.return; null !== n;) {
                  if (3 === n.tag) {
                      yu(n, e, t);
                      break
                  }
                  if (1 === n.tag) {
                      var r = n.stateNode;
                      if ("function" == typeof n.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === La || !La.has(r))) {
                          uo(n, e = ma(n, e = Xs(t, e), 1073741823)), null !== (n = Ka(n, 1073741823)) && Ja(n);
                          break
                      }
                  }
                  n = n.return
              }
      }

      function bu(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t), ka === e && xa === n ? Ta === Ea || Ta === _a && 1073741823 === Oa && Di() - ja < 500 ? nu(e, xa) : Ra = !0 : Mu(e, n) && (0 !== (t = e.lastPingedTime) && t < n || (e.lastPingedTime = n, Ja(e)))
      }

      function wu(e, t) {
          var n = e.stateNode;
          null !== n && n.delete(t), 0 === (t = 0) && (t = $a(t = Ha(), e, null)), null !== (e = Ka(e, t)) && Ja(e)
      }
      ga = function(e, t, n) {
          var r = t.expirationTime;
          if (null !== e) {
              var i = t.pendingProps;
              if (e.memoizedProps !== i || fi.current) Ps = !0;
              else {
                  if (r < n) {
                      switch (Ps = !1, t.tag) {
                          case 3:
                              Ds(t), As();
                              break;
                          case 5:
                              if (jo(t), 4 & t.mode && 1 !== n && i.hidden) return t.expirationTime = t.childExpirationTime = 1, null;
                              break;
                          case 1:
                              mi(t.type) && bi(t);
                              break;
                          case 4:
                              Mo(t, t.stateNode.containerInfo);
                              break;
                          case 10:
                              r = t.memoizedProps.value, i = t.type._context, ci(Ki, i._currentValue), i._currentValue = r;
                              break;
                          case 13:
                              if (null !== t.memoizedState) return 0 !== (r = t.child.childExpirationTime) && r >= n ? Ws(e, t, n) : (ci(Fo, 1 & Fo.current), null !== (t = Ys(e, t, n)) ? t.sibling : null);
                              ci(Fo, 1 & Fo.current);
                              break;
                          case 19:
                              if (r = t.childExpirationTime >= n, 0 != (64 & e.effectTag)) {
                                  if (r) return $s(e, t, n);
                                  t.effectTag |= 64
                              }
                              if (null !== (i = t.memoizedState) && (i.rendering = null, i.tail = null), ci(Fo, Fo.current), !r) return null
                      }
                      return Ys(e, t, n)
                  }
                  Ps = !1
              }
          } else Ps = !1;
          switch (t.expirationTime = 0, t.tag) {
              case 2:
                  if (r = t.type, null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), e = t.pendingProps, i = hi(t, di.current), no(t, n), i = Yo(null, t, r, e, i, n), t.effectTag |= 1, "object" == typeof i && null !== i && "function" == typeof i.render && void 0 === i.$$typeof) {
                      if (t.tag = 1, t.memoizedState = null, t.updateQueue = null, mi(r)) {
                          var o = !0;
                          bi(t)
                      } else o = !1;
                      t.memoizedState = null !== i.state && void 0 !== i.state ? i.state : null, oo(t);
                      var a = r.getDerivedStateFromProps;
                      "function" == typeof a && mo(t, r, a, e), i.updater = go, t.stateNode = i, i._reactInternalFiber = t, wo(t, r, e, n), t = Ls(null, t, r, !0, o, n)
                  } else t.tag = 0, Ns(null, t, i, n), t = t.child;
                  return t;
              case 16:
                  e: {
                      if (i = t.elementType, null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), e = t.pendingProps, function(e) {
                              if (-1 === e._status) {
                                  e._status = 0;
                                  var t = e._ctor;
                                  t = t(), e._result = t, t.then((function(t) {
                                      0 === e._status && (t = t.default, e._status = 1, e._result = t)
                                  }), (function(t) {
                                      0 === e._status && (e._status = 2, e._result = t)
                                  }))
                              }
                          }(i), 1 !== i._status) throw i._result;
                      switch (i = i._result, t.type = i, o = t.tag = function(e) {
                          if ("function" == typeof e) return Cu(e) ? 1 : 0;
                          if (null != e) {
                              if ((e = e.$$typeof) === ue) return 11;
                              if (e === de) return 14
                          }
                          return 2
                      }(i), e = Yi(i, e), o) {
                          case 0:
                              t = Fs(null, t, i, e, n);
                              break e;
                          case 1:
                              t = Is(null, t, i, e, n);
                              break e;
                          case 11:
                              t = Ms(null, t, i, e, n);
                              break e;
                          case 14:
                              t = Rs(null, t, i, Yi(i.type, e), r, n);
                              break e
                      }
                      throw Error(s(306, i, ""))
                  }
                  return t;
              case 0:
                  return r = t.type, i = t.pendingProps, Fs(e, t, r, i = t.elementType === r ? i : Yi(r, i), n);
              case 1:
                  return r = t.type, i = t.pendingProps, Is(e, t, r, i = t.elementType === r ? i : Yi(r, i), n);
              case 3:
                  if (Ds(t), r = t.updateQueue, null === e || null === r) throw Error(s(282));
                  if (r = t.pendingProps, i = null !== (i = t.memoizedState) ? i.element : null, so(e, t), lo(t, r, null, n), (r = t.memoizedState.element) === i) As(), t = Ys(e, t, n);
                  else {
                      if ((i = t.stateNode.hydrate) && (_s = _n(t.stateNode.containerInfo.firstChild), ws = t, i = Es = !0), i)
                          for (n = xo(t, null, r, n), t.child = n; n;) n.effectTag = -3 & n.effectTag | 1024, n = n.sibling;
                      else Ns(e, t, r, n), As();
                      t = t.child
                  }
                  return t;
              case 5:
                  return jo(t), null === e && Cs(t), r = t.type, i = t.pendingProps, o = null !== e ? e.memoizedProps : null, a = i.children, vn(r, i) ? a = null : null !== o && vn(r, o) && (t.effectTag |= 16), Bs(e, t), 4 & t.mode && 1 !== n && i.hidden ? (t.expirationTime = t.childExpirationTime = 1, t = null) : (Ns(e, t, a, n), t = t.child), t;
              case 6:
                  return null === e && Cs(t), null;
              case 13:
                  return Ws(e, t, n);
              case 4:
                  return Mo(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = Co(t, null, r, n) : Ns(e, t, r, n), t.child;
              case 11:
                  return r = t.type, i = t.pendingProps, Ms(e, t, r, i = t.elementType === r ? i : Yi(r, i), n);
              case 7:
                  return Ns(e, t, t.pendingProps, n), t.child;
              case 8:
              case 12:
                  return Ns(e, t, t.pendingProps.children, n), t.child;
              case 10:
                  e: {
                      r = t.type._context,
                      i = t.pendingProps,
                      a = t.memoizedProps,
                      o = i.value;
                      var u = t.type._context;
                      if (ci(Ki, u._currentValue), u._currentValue = o, null !== a)
                          if (u = a.value, 0 === (o = Ir(u, o) ? 0 : 0 | ("function" == typeof r._calculateChangedBits ? r._calculateChangedBits(u, o) : 1073741823))) {
                              if (a.children === i.children && !fi.current) {
                                  t = Ys(e, t, n);
                                  break e
                              }
                          } else
                              for (null !== (u = t.child) && (u.return = t); null !== u;) {
                                  var c = u.dependencies;
                                  if (null !== c) {
                                      a = u.child;
                                      for (var l = c.firstContext; null !== l;) {
                                          if (l.context === r && 0 != (l.observedBits & o)) {
                                              1 === u.tag && ((l = ao(n, null)).tag = 2, uo(u, l)), u.expirationTime < n && (u.expirationTime = n), null !== (l = u.alternate) && l.expirationTime < n && (l.expirationTime = n), to(u.return, n), c.expirationTime < n && (c.expirationTime = n);
                                              break
                                          }
                                          l = l.next
                                      }
                                  } else a = 10 === u.tag && u.type === t.type ? null : u.child;
                                  if (null !== a) a.return = u;
                                  else
                                      for (a = u; null !== a;) {
                                          if (a === t) {
                                              a = null;
                                              break
                                          }
                                          if (null !== (u = a.sibling)) {
                                              u.return = a.return, a = u;
                                              break
                                          }
                                          a = a.return
                                      }
                                  u = a
                              }
                      Ns(e, t, i.children, n),
                      t = t.child
                  }
                  return t;
              case 9:
                  return i = t.type, r = (o = t.pendingProps).children, no(t, n), r = r(i = ro(i, o.unstable_observedBits)), t.effectTag |= 1, Ns(e, t, r, n), t.child;
              case 14:
                  return o = Yi(i = t.type, t.pendingProps), Rs(e, t, i, o = Yi(i.type, o), r, n);
              case 15:
                  return js(e, t, t.type, t.pendingProps, r, n);
              case 17:
                  return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Yi(r, i), null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), t.tag = 1, mi(r) ? (e = !0, bi(t)) : e = !1, no(t, n), vo(t, r, i), wo(t, r, i, n), Ls(null, t, r, !0, e, n);
              case 19:
                  return $s(e, t, n)
          }
          throw Error(s(156, t.tag))
      };
      var _u = null,
          Eu = null;

      function Su(e, t, n, r) {
          this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.effectTag = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childExpirationTime = this.expirationTime = 0, this.alternate = null
      }

      function ku(e, t, n, r) {
          return new Su(e, t, n, r)
      }

      function Cu(e) {
          return !(!(e = e.prototype) || !e.isReactComponent)
      }

      function xu(e, t) {
          var n = e.alternate;
          return null === n ? ((n = ku(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.effectTag = 0, n.nextEffect = null, n.firstEffect = null, n.lastEffect = null), n.childExpirationTime = e.childExpirationTime, n.expirationTime = e.expirationTime, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
              expirationTime: t.expirationTime,
              firstContext: t.firstContext,
              responders: t.responders
          }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
      }

      function Tu(e, t, n, r, i, o) {
          var a = 2;
          if (r = e, "function" == typeof e) Cu(e) && (a = 1);
          else if ("string" == typeof e) a = 5;
          else e: switch (e) {
              case ne:
                  return Au(n.children, i, o, t);
              case ae:
                  a = 8, i |= 7;
                  break;
              case re:
                  a = 8, i |= 1;
                  break;
              case ie:
                  return (e = ku(12, n, t, 8 | i)).elementType = ie, e.type = ie, e.expirationTime = o, e;
              case ce:
                  return (e = ku(13, n, t, i)).type = ce, e.elementType = ce, e.expirationTime = o, e;
              case le:
                  return (e = ku(19, n, t, i)).elementType = le, e.expirationTime = o, e;
              default:
                  if ("object" == typeof e && null !== e) switch (e.$$typeof) {
                      case oe:
                          a = 10;
                          break e;
                      case se:
                          a = 9;
                          break e;
                      case ue:
                          a = 11;
                          break e;
                      case de:
                          a = 14;
                          break e;
                      case fe:
                          a = 16, r = null;
                          break e;
                      case pe:
                          a = 22;
                          break e
                  }
                  throw Error(s(130, null == e ? e : typeof e, ""))
          }
          return (t = ku(a, n, t, i)).elementType = e, t.type = r, t.expirationTime = o, t
      }

      function Au(e, t, n, r) {
          return (e = ku(7, e, r, t)).expirationTime = n, e
      }

      function Ou(e, t, n) {
          return (e = ku(6, e, null, t)).expirationTime = n, e
      }

      function Pu(e, t, n) {
          return (t = ku(4, null !== e.children ? e.children : [], e.key, t)).expirationTime = n, t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation
          }, t
      }

      function Nu(e, t, n) {
          this.tag = t, this.current = null, this.containerInfo = e, this.pingCache = this.pendingChildren = null, this.finishedExpirationTime = 0, this.finishedWork = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = n, this.callbackNode = null, this.callbackPriority = 90, this.lastExpiredTime = this.lastPingedTime = this.nextKnownPendingLevel = this.lastSuspendedTime = this.firstSuspendedTime = this.firstPendingTime = 0
      }

      function Mu(e, t) {
          var n = e.firstSuspendedTime;
          return e = e.lastSuspendedTime, 0 !== n && n >= t && e <= t
      }

      function Ru(e, t) {
          var n = e.firstSuspendedTime,
              r = e.lastSuspendedTime;
          n < t && (e.firstSuspendedTime = t), (r > t || 0 === n) && (e.lastSuspendedTime = t), t <= e.lastPingedTime && (e.lastPingedTime = 0), t <= e.lastExpiredTime && (e.lastExpiredTime = 0)
      }

      function ju(e, t) {
          t > e.firstPendingTime && (e.firstPendingTime = t);
          var n = e.firstSuspendedTime;
          0 !== n && (t >= n ? e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0 : t >= e.lastSuspendedTime && (e.lastSuspendedTime = t + 1), t > e.nextKnownPendingLevel && (e.nextKnownPendingLevel = t))
      }

      function Bu(e, t) {
          var n = e.lastExpiredTime;
          (0 === n || n > t) && (e.lastExpiredTime = t)
      }

      function Fu(e, t, n, r) {
          var i = t.current,
              o = Ha(),
              a = po.suspense;
          o = $a(o, i, a);
          e: if (n) {
              t: {
                  if (Ze(n = n._reactInternalFiber) !== n || 1 !== n.tag) throw Error(s(170));
                  var u = n;do {
                      switch (u.tag) {
                          case 3:
                              u = u.stateNode.context;
                              break t;
                          case 1:
                              if (mi(u.type)) {
                                  u = u.stateNode.__reactInternalMemoizedMergedChildContext;
                                  break t
                              }
                      }
                      u = u.return
                  } while (null !== u);
                  throw Error(s(171))
              }
              if (1 === n.tag) {
                  var c = n.type;
                  if (mi(c)) {
                      n = vi(n, c, u);
                      break e
                  }
              }
              n = u
          }
          else n = li;
          return null === t.context ? t.context = n : t.pendingContext = n, (t = ao(o, a)).payload = {
              element: e
          }, null !== (r = void 0 === r ? null : r) && (t.callback = r), uo(i, t), Ya(i, o), o
      }

      function Iu(e) {
          if (!(e = e.current).child) return null;
          switch (e.child.tag) {
              case 5:
              default:
                  return e.child.stateNode
          }
      }

      function Lu(e, t) {
          null !== (e = e.memoizedState) && null !== e.dehydrated && e.retryTime < t && (e.retryTime = t)
      }

      function Du(e, t) {
          Lu(e, t), (e = e.alternate) && Lu(e, t)
      }

      function Vu(e, t, n) {
          var r = new Nu(e, t, n = null != n && !0 === n.hydrate),
              i = ku(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0);
          r.current = i, i.stateNode = r, oo(i), e[xn] = r.current, n && 0 !== t && function(e, t) {
              var n = Xe(t);
              xt.forEach((function(e) {
                  ht(e, t, n)
              })), Tt.forEach((function(e) {
                  ht(e, t, n)
              }))
          }(0, 9 === e.nodeType ? e : e.ownerDocument), this._internalRoot = r
      }

      function Uu(e) {
          return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
      }

      function zu(e, t, n, r, i) {
          var o = n._reactRootContainer;
          if (o) {
              var s = o._internalRoot;
              if ("function" == typeof i) {
                  var a = i;
                  i = function() {
                      var e = Iu(s);
                      a.call(e)
                  }
              }
              Fu(t, s, e, i)
          } else {
              if (o = n._reactRootContainer = function(e, t) {
                      if (t || (t = !(!(t = e ? 9 === e.nodeType ? e.documentElement : e.firstChild : null) || 1 !== t.nodeType || !t.hasAttribute("data-reactroot"))), !t)
                          for (var n; n = e.lastChild;) e.removeChild(n);
                      return new Vu(e, 0, t ? {
                          hydrate: !0
                      } : void 0)
                  }(n, r), s = o._internalRoot, "function" == typeof i) {
                  var u = i;
                  i = function() {
                      var e = Iu(s);
                      u.call(e)
                  }
              }
              tu((function() {
                  Fu(t, s, e, i)
              }))
          }
          return Iu(s)
      }

      function qu(e, t, n) {
          var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
          return {
              $$typeof: te,
              key: null == r ? null : "" + r,
              children: e,
              containerInfo: t,
              implementation: n
          }
      }

      function Wu(e, t) {
          var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
          if (!Uu(t)) throw Error(s(200));
          return qu(e, t, null, n)
      }
      Vu.prototype.render = function(e) {
          Fu(e, this._internalRoot, null, null)
      }, Vu.prototype.unmount = function() {
          var e = this._internalRoot,
              t = e.containerInfo;
          Fu(null, e, null, (function() {
              t[xn] = null
          }))
      }, mt = function(e) {
          if (13 === e.tag) {
              var t = $i(Ha(), 150, 100);
              Ya(e, t), Du(e, t)
          }
      }, gt = function(e) {
          13 === e.tag && (Ya(e, 3), Du(e, 3))
      }, yt = function(e) {
          if (13 === e.tag) {
              var t = Ha();
              Ya(e, t = $a(t, e, null)), Du(e, t)
          }
      }, A = function(e, t, n) {
          switch (t) {
              case "input":
                  if (Ce(e, n), t = n.name, "radio" === n.type && null != t) {
                      for (n = e; n.parentNode;) n = n.parentNode;
                      for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                          var r = n[t];
                          if (r !== e && r.form === e.form) {
                              var i = Pn(r);
                              if (!i) throw Error(s(90));
                              _e(r), Ce(r, i)
                          }
                      }
                  }
                  break;
              case "textarea":
                  Me(e, n);
                  break;
              case "select":
                  null != (t = n.value) && Oe(e, !!n.multiple, t, !1)
          }
      }, j = eu, B = function(e, t, n, r, i) {
          var o = Sa;
          Sa |= 4;
          try {
              return zi(98, e.bind(null, t, n, r, i))
          } finally {
              0 === (Sa = o) && Gi()
          }
      }, F = function() {
          0 == (49 & Sa) && (function() {
              if (null !== za) {
                  var e = za;
                  za = null, e.forEach((function(e, t) {
                      Bu(t, e), Ja(t)
                  })), Gi()
              }
          }(), mu())
      }, I = function(e, t) {
          var n = Sa;
          Sa |= 2;
          try {
              return e(t)
          } finally {
              0 === (Sa = n) && Gi()
          }
      };
      var Gu, Hu, $u = {
          Events: [An, On, Pn, x, S, In, function(e) {
              it(e, Fn)
          }, M, R, Jt, at, mu, {
              current: !1
          }]
      };
      Hu = (Gu = {
              findFiberByHostInstance: Tn,
              bundleType: 0,
              version: "16.13.1",
              rendererPackageName: "react-dom"
          }).findFiberByHostInstance,
          function(e) {
              if ("undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
              var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
              if (t.isDisabled || !t.supportsFiber) return !0;
              try {
                  var n = t.inject(e);
                  _u = function(e) {
                      try {
                          t.onCommitFiberRoot(n, e, void 0, 64 == (64 & e.current.effectTag))
                      } catch (e) {}
                  }, Eu = function(e) {
                      try {
                          t.onCommitFiberUnmount(n, e)
                      } catch (e) {}
                  }
              } catch (e) {}
          }(i({}, Gu, {
              overrideHookState: null,
              overrideProps: null,
              setSuspenseHandler: null,
              scheduleUpdate: null,
              currentDispatcherRef: Q.ReactCurrentDispatcher,
              findHostInstanceByFiber: function(e) {
                  return null === (e = nt(e)) ? null : e.stateNode
              },
              findFiberByHostInstance: function(e) {
                  return Hu ? Hu(e) : null
              },
              findHostInstancesForRefresh: null,
              scheduleRefresh: null,
              scheduleRoot: null,
              setRefreshHandler: null,
              getCurrentFiber: null
          })), t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $u, t.createPortal = Wu, t.findDOMNode = function(e) {
              if (null == e) return null;
              if (1 === e.nodeType) return e;
              var t = e._reactInternalFiber;
              if (void 0 === t) {
                  if ("function" == typeof e.render) throw Error(s(188));
                  throw Error(s(268, Object.keys(e)))
              }
              return e = null === (e = nt(t)) ? null : e.stateNode
          }, t.flushSync = function(e, t) {
              if (0 != (48 & Sa)) throw Error(s(187));
              var n = Sa;
              Sa |= 1;
              try {
                  return zi(99, e.bind(null, t))
              } finally {
                  Sa = n, Gi()
              }
          }, t.hydrate = function(e, t, n) {
              if (!Uu(t)) throw Error(s(200));
              return zu(null, e, t, !0, n)
          }, t.render = function(e, t, n) {
              if (!Uu(t)) throw Error(s(200));
              return zu(null, e, t, !1, n)
          }, t.unmountComponentAtNode = function(e) {
              if (!Uu(e)) throw Error(s(40));
              return !!e._reactRootContainer && (tu((function() {
                  zu(null, null, e, !1, (function() {
                      e._reactRootContainer = null, e[xn] = null
                  }))
              })), !0)
          }, t.unstable_batchedUpdates = eu, t.unstable_createPortal = function(e, t) {
              return Wu(e, t, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null)
          }, t.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
              if (!Uu(n)) throw Error(s(200));
              if (null == e || void 0 === e._reactInternalFiber) throw Error(s(38));
              return zu(e, t, n, !1, r)
          }, t.version = "16.13.1"
  }, function(e, t, n) {
      e.exports = function(e) {
          function t(e) {
              let t = 0;
              for (let n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n), t |= 0;
              return r.colors[Math.abs(t) % r.colors.length]
          }

          function r(e) {
              let n;

              function s(...e) {
                  if (!s.enabled) return;
                  const t = s,
                      i = Number(new Date),
                      o = i - (n || i);
                  t.diff = o, t.prev = n, t.curr = i, n = i, e[0] = r.coerce(e[0]), "string" != typeof e[0] && e.unshift("%O");
                  let a = 0;
                  e[0] = e[0].replace(/%([a-zA-Z%])/g, (n, i) => {
                      if ("%%" === n) return n;
                      a++;
                      const o = r.formatters[i];
                      if ("function" == typeof o) {
                          const r = e[a];
                          n = o.call(t, r), e.splice(a, 1), a--
                      }
                      return n
                  }), r.formatArgs.call(t, e), (t.log || r.log).apply(t, e)
              }
              return s.namespace = e, s.enabled = r.enabled(e), s.useColors = r.useColors(), s.color = t(e), s.destroy = i, s.extend = o, "function" == typeof r.init && r.init(s), r.instances.push(s), s
          }

          function i() {
              const e = r.instances.indexOf(this);
              return -1 !== e && (r.instances.splice(e, 1), !0)
          }

          function o(e, t) {
              const n = r(this.namespace + (void 0 === t ? ":" : t) + e);
              return n.log = this.log, n
          }

          function s(e) {
              return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*")
          }
          return r.debug = r, r.default = r, r.coerce = function(e) {
              if (e instanceof Error) return e.stack || e.message;
              return e
          }, r.disable = function() {
              const e = [...r.names.map(s), ...r.skips.map(s).map(e => "-" + e)].join(",");
              return r.enable(""), e
          }, r.enable = function(e) {
              let t;
              r.save(e), r.names = [], r.skips = [];
              const n = ("string" == typeof e ? e : "").split(/[\s,]+/),
                  i = n.length;
              for (t = 0; t < i; t++) n[t] && ("-" === (e = n[t].replace(/\*/g, ".*?"))[0] ? r.skips.push(new RegExp("^" + e.substr(1) + "$")) : r.names.push(new RegExp("^" + e + "$")));
              for (t = 0; t < r.instances.length; t++) {
                  const e = r.instances[t];
                  e.enabled = r.enabled(e.namespace)
              }
          }, r.enabled = function(e) {
              if ("*" === e[e.length - 1]) return !0;
              let t, n;
              for (t = 0, n = r.skips.length; t < n; t++)
                  if (r.skips[t].test(e)) return !1;
              for (t = 0, n = r.names.length; t < n; t++)
                  if (r.names[t].test(e)) return !0;
              return !1
          }, r.humanize = n(20), Object.keys(e).forEach(t => {
              r[t] = e[t]
          }), r.instances = [], r.names = [], r.skips = [], r.formatters = {}, r.selectColor = t, r.enable(r.load()), r
      }
  }, function(e, t, n) {
      var r, i = n(29);
      "undefined" != typeof window && (r = window.AudioContext || window.webkitAudioContext);
      var o = null;
      e.exports = function(e, t) {
          var n = new i;
          if (!r) return n;
          var s, a, u, c = (t = t || {}).smoothing || .1,
              l = t.interval || 50,
              d = t.threshold,
              f = t.play,
              p = t.history || 10,
              h = !0;
          o = t.audioContext || o || new r, (u = o.createAnalyser()).fftSize = 512, u.smoothingTimeConstant = c, a = new Float32Array(u.frequencyBinCount), e.jquery && (e = e[0]), e instanceof HTMLAudioElement || e instanceof HTMLVideoElement ? (s = o.createMediaElementSource(e), void 0 === f && (f = !0), d = d || -50) : (s = o.createMediaStreamSource(e), d = d || -50), s.connect(u), f && u.connect(o.destination), n.speaking = !1, n.suspend = function() {
              return o.suspend()
          }, n.resume = function() {
              return o.resume()
          }, Object.defineProperty(n, "state", {
              get: function() {
                  return o.state
              }
          }), o.onstatechange = function() {
              n.emit("state_change", o.state)
          }, n.setThreshold = function(e) {
              d = e
          }, n.setInterval = function(e) {
              l = e
          }, n.stop = function() {
              h = !1, n.emit("volume_change", -100, d), n.speaking && (n.speaking = !1, n.emit("stopped_speaking")), u.disconnect(), s.disconnect()
          }, n.speakingHistory = [];
          for (var m = 0; m < p; m++) n.speakingHistory.push(0);
          var g = function() {
              setTimeout((function() {
                  if (h) {
                      var e = function(e, t) {
                          var n = -1 / 0;
                          e.getFloatFrequencyData(t);
                          for (var r = 4, i = t.length; r < i; r++) t[r] > n && t[r] < 0 && (n = t[r]);
                          return n
                      }(u, a);
                      n.emit("volume_change", e, d);
                      var t = 0;
                      if (e > d && !n.speaking) {
                          for (var r = n.speakingHistory.length - 3; r < n.speakingHistory.length; r++) t += n.speakingHistory[r];
                          t >= 2 && (n.speaking = !0, n.emit("speaking"))
                      } else if (e < d && n.speaking) {
                          for (r = 0; r < n.speakingHistory.length; r++) t += n.speakingHistory[r];
                          0 == t && (n.speaking = !1, n.emit("stopped_speaking"))
                      }
                      n.speakingHistory.shift(), n.speakingHistory.push(0 + (e > d)), g()
                  }
              }), l)
          };
          return g(), n
      }
  }, , , , function(e, t, n) {
      "use strict";
      (function(e) {
          n.d(t, "a", (function() {
              return v
          }));
          var r = n(2),
              i = n(1),
              o = n.n(i);
          if (!i.useState) throw new Error("mobx-react-lite requires React with Hooks support");
          if (!r.k) throw new Error("mobx-react-lite requires mobx at least version 4 to be available");
          var s = !1;

          function a() {
              return s
          }

          function u() {
              var e = Object(i.useState)(0)[1];
              return Object(i.useCallback)((function() {
                  e((function(e) {
                      return e + 1
                  }))
              }), [])
          }

          function c(e) {
              return Object(r.f)(e)
          }
          var l, d = 1e4,
              f = new Set;

          function p() {
              void 0 === l && (l = setTimeout(h, 1e4))
          }

          function h() {
              l = void 0;
              var e = Date.now(),
                  t = f,
                  n = Array.isArray(t),
                  r = 0;
              for (t = n ? t : t[Symbol.iterator]();;) {
                  var i;
                  if (n) {
                      if (r >= t.length) break;
                      i = t[r++]
                  } else {
                      if ((r = t.next()).done) break;
                      i = r.value
                  }
                  var o = i,
                      s = o.current;
                  s && e >= s.cleanAt && (s.reaction.dispose(), o.current = null, f.delete(o))
              }
              f.size > 0 && p()
          }
          var m = {};

          function g(e) {
              return "observer" + e
          }

          function y(e, t, n) {
              if (void 0 === t && (t = "observed"), void 0 === n && (n = m), a()) return e();
              var i, s = (n.useForceUpdate || u)(),
                  l = o.a.useRef(null);
              if (!l.current) {
                  var h = new r.a(g(t), (function() {
                          y.mounted ? s() : (h.dispose(), l.current = null)
                      })),
                      y = function(e) {
                          return {
                              cleanAt: Date.now() + d,
                              reaction: e
                          }
                      }(h);
                  l.current = y, i = l, f.add(i), p()
              }
              var v, b, w = l.current.reaction;
              if (o.a.useDebugValue(w, c), o.a.useEffect((function() {
                      var e;
                      return e = l, f.delete(e), l.current ? l.current.mounted = !0 : (l.current = {
                              reaction: new r.a(g(t), (function() {
                                  s()
                              })),
                              cleanAt: 1 / 0
                          }, s()),
                          function() {
                              l.current.reaction.dispose(), l.current = null
                          }
                  }), []), w.track((function() {
                      try {
                          v = e()
                      } catch (e) {
                          b = e
                      }
                  })), b) throw b;
              return v
          }

          function v(e) {
              var t = e.children,
                  n = e.render,
                  r = t || n;
              return "function" != typeof r ? null : y(r)
          }

          function b(e, t, n, r, i) {
              var o = "children" === t ? "render" : "children",
                  s = "function" == typeof e[t],
                  a = "function" == typeof e[o];
              return s && a ? new Error("MobX Observer: Do not use children and render in the same time in`" + n) : s || a ? null : new Error("Invalid prop `" + i + "` of type `" + typeof e[t] + "` supplied to `" + n + "`, expected `function`.")
          }
          v.propTypes = {
              children: b,
              render: b
          }, v.displayName = "Observer"
      }).call(this, n(21))
  }]
]);