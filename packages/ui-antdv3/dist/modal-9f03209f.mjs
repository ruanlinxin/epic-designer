import { defineComponent as ft, h as j, renderSlot as ne } from "vue";
import { _ as Be } from "./index-4ddd22ca.mjs";
import { a as ue, o as st, r as te, n as ce, e as fe, j as $e, w as dt, y as Fe, v as vt, f as De, k as Ie, i as K, g as G, u as pt, N as mt, V as Ct, W as yt, X as gt, Y as _t, c as ht, h as xt } from "./useConfigInject-f4796704.mjs";
import { a as kt } from "./index-78d56708.mjs";
import { a as bt } from "./Portal-6677def3.mjs";
import { r as Re, a as Ve } from "./index-d455f4a3.mjs";
import { a as Pt, r as Nt } from "./useFlexGapSupport-4e554c93.mjs";
import { r as Tt } from "./omit-567cf556.mjs";
import { B as ke } from "./index-43cd11f6.mjs";
import "./KeyCode-8a26b842.mjs";
import "./pickAttrs-0f2b7511.mjs";
import "./classCallCheck-781f96f0.mjs";
import "./raf-09a8b76f.mjs";
import "./wave-320c2dad.mjs";
var se = {}, B = {}, S = K;
Object.defineProperty(B, "__esModule", {
  value: !0
});
B.modalProps = B.destroyFns = B.default = void 0;
var R = G, be = S(ue()), Ot = S(st()), V = S(te()), wt = S(ce()), St = S(fe()), qt = S(kt()), U = S($e()), Bt = S(bt()), $t = S(dt()), Pe = S(Re()), Ft = Ve(), Dt = Fe(), It = S(vt()), Rt = Pt(), Vt = S(De()), Ne = Ie(), At = ["prefixCls", "visible", "wrapClassName", "centered", "getContainer", "closeIcon", "focusTriggerAfterClose"], le = null, Mt = function(e) {
  le = {
    x: e.pageX,
    y: e.pageY
  }, setTimeout(function() {
    return le = null;
  }, 100);
};
(0, Rt.canUseDocElement)() && (0, Bt.default)(document.documentElement, "click", Mt, !0);
var Ae = function() {
  return {
    prefixCls: String,
    visible: {
      type: Boolean,
      default: void 0
    },
    confirmLoading: {
      type: Boolean,
      default: void 0
    },
    title: U.default.any,
    closable: {
      type: Boolean,
      default: void 0
    },
    closeIcon: U.default.any,
    onOk: Function,
    onCancel: Function,
    "onUpdate:visible": Function,
    onChange: Function,
    afterClose: Function,
    centered: {
      type: Boolean,
      default: void 0
    },
    width: [String, Number],
    footer: U.default.any,
    okText: U.default.any,
    okType: String,
    cancelText: U.default.any,
    icon: U.default.any,
    maskClosable: {
      type: Boolean,
      default: void 0
    },
    forceRender: {
      type: Boolean,
      default: void 0
    },
    okButtonProps: Object,
    cancelButtonProps: Object,
    destroyOnClose: {
      type: Boolean,
      default: void 0
    },
    wrapClassName: String,
    maskTransitionName: String,
    transitionName: String,
    getContainer: {
      type: [String, Function, Boolean, Object],
      default: void 0
    },
    zIndex: Number,
    bodyStyle: {
      type: Object,
      default: void 0
    },
    maskStyle: {
      type: Object,
      default: void 0
    },
    mask: {
      type: Boolean,
      default: void 0
    },
    keyboard: {
      type: Boolean,
      default: void 0
    },
    wrapProps: Object,
    focusTriggerAfterClose: {
      type: Boolean,
      default: void 0
    },
    modalRender: Function
  };
};
B.modalProps = Ae;
var Wt = [];
B.destroyFns = Wt;
var zt = (0, R.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: "AModal",
  inheritAttrs: !1,
  props: (0, It.default)(Ae(), {
    width: 520,
    transitionName: "zoom",
    maskTransitionName: "fade",
    confirmLoading: !1,
    visible: !1,
    okType: "primary"
  }),
  setup: function(e, o) {
    var r = o.emit, n = o.slots, i = o.attrs, f = (0, Dt.useLocaleReceiver)("Modal"), P = (0, wt.default)(f, 1), x = P[0], s = (0, Vt.default)("modal", e), l = s.prefixCls, u = s.rootPrefixCls, a = s.direction, p = s.getPopupContainer, y = function(v) {
      r("update:visible", !1), r("cancel", v), r("change", !1);
    }, T = function(v) {
      r("ok", v);
    }, c = function() {
      var v, w, _ = e.okText, g = _ === void 0 ? (v = n.okText) === null || v === void 0 ? void 0 : v.call(n) : _, C = e.okType, k = e.cancelText, b = k === void 0 ? (w = n.cancelText) === null || w === void 0 ? void 0 : w.call(n) : k, h = e.confirmLoading;
      return (0, R.createVNode)(R.Fragment, null, [(0, R.createVNode)(Pe.default, (0, V.default)({
        onClick: y
      }, e.cancelButtonProps), {
        default: function() {
          return [b || x.value.cancelText];
        }
      }), (0, R.createVNode)(Pe.default, (0, V.default)((0, V.default)({}, (0, Ft.convertLegacyProps)(C)), {}, {
        loading: h,
        onClick: T
      }, e.okButtonProps), {
        default: function() {
          return [g || x.value.okText];
        }
      })]);
    };
    return function() {
      var d, v;
      e.prefixCls;
      var w = e.visible, _ = e.wrapClassName, g = e.centered, C = e.getContainer, k = e.closeIcon, b = k === void 0 ? (d = n.closeIcon) === null || d === void 0 ? void 0 : d.call(n) : k, h = e.focusTriggerAfterClose, I = h === void 0 ? !0 : h, M = (0, Ot.default)(e, At), W = (0, St.default)(_, (v = {}, (0, be.default)(v, "".concat(l.value, "-centered"), !!g), (0, be.default)(v, "".concat(l.value, "-wrap-rtl"), a.value === "rtl"), v));
      return (0, R.createVNode)(qt.default, (0, V.default)((0, V.default)((0, V.default)({}, M), i), {}, {
        getContainer: C || p.value,
        prefixCls: l.value,
        wrapClassName: W,
        visible: w,
        mousePosition: le,
        onClose: y,
        focusTriggerAfterClose: I,
        transitionName: (0, Ne.getTransitionName)(u.value, "zoom", e.transitionName),
        maskTransitionName: (0, Ne.getTransitionName)(u.value, "fade", e.maskTransitionName)
      }), (0, V.default)((0, V.default)({}, n), {}, {
        footer: n.footer || c,
        closeIcon: function() {
          return (0, R.createVNode)("span", {
            class: "".concat(l.value, "-close-x")
          }, [b || (0, R.createVNode)($t.default, {
            class: "".concat(l.value, "-close-icon")
          }, null)]);
        }
      }));
    };
  }
});
B.default = zt;
var D = {}, X = {}, Y = {}, H = {}, Te;
function Et() {
  if (Te)
    return H;
  Te = 1, Object.defineProperty(H, "__esModule", {
    value: !0
  }), H.default = void 0;
  var t = G, e = function() {
    var n = (0, t.ref)(!1);
    return (0, t.onBeforeUnmount)(function() {
      n.value = !0;
    }), n;
  }, o = e;
  return H.default = o, H;
}
var Oe;
function Lt() {
  if (Oe)
    return Y;
  Oe = 1;
  var t = K;
  Object.defineProperty(Y, "__esModule", {
    value: !0
  }), Y.default = void 0;
  var e = G, o = t(te()), r = t(Re()), n = Ve(), i = t(Et()), f = {
    type: {
      type: String
    },
    actionFn: Function,
    close: Function,
    autofocus: Boolean,
    prefixCls: String,
    buttonProps: Object,
    emitEvent: Boolean,
    quitOnNullishReturnValue: Boolean
  };
  function P(s) {
    return !!(s && s.then);
  }
  var x = (0, e.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "ActionButton",
    props: f,
    setup: function(l, u) {
      var a = u.slots, p = (0, e.ref)(!1), y = (0, e.ref)(), T = (0, e.ref)(!1), c, d = (0, i.default)();
      (0, e.onMounted)(function() {
        l.autofocus && (c = setTimeout(function() {
          var _;
          return (_ = y.value.$el) === null || _ === void 0 ? void 0 : _.focus();
        }));
      }), (0, e.onBeforeUnmount)(function() {
        clearTimeout(c);
      });
      var v = function(g) {
        var C = l.close;
        P(g) && (T.value = !0, g.then(function() {
          d.value || (T.value = !1), C.apply(void 0, arguments), p.value = !1;
        }, function(k) {
          console.error(k), d.value || (T.value = !1), p.value = !1;
        }));
      }, w = function(g) {
        var C = l.actionFn, k = l.close, b = k === void 0 ? function() {
        } : k;
        if (!p.value) {
          if (p.value = !0, !C) {
            b();
            return;
          }
          var h;
          if (l.emitEvent) {
            if (h = C(g), l.quitOnNullishReturnValue && !P(h)) {
              p.value = !1, b(g);
              return;
            }
          } else if (C.length)
            h = C(b), p.value = !1;
          else if (h = C(), !h) {
            b();
            return;
          }
          v(h);
        }
      };
      return function() {
        var _ = l.type, g = l.prefixCls, C = l.buttonProps;
        return (0, e.createVNode)(r.default, (0, o.default)((0, o.default)((0, o.default)({}, (0, n.convertLegacyProps)(_)), {}, {
          onClick: w,
          loading: T.value,
          prefixCls: g
        }, C), {}, {
          ref: y
        }), a);
      };
    }
  });
  return Y.default = x, Y;
}
var we;
function jt() {
  if (we)
    return X;
  we = 1;
  var t = K;
  Object.defineProperty(X, "__esModule", {
    value: !0
  }), X.default = void 0;
  var e = G, o = t(ue()), r = t(ce()), n = t(fe()), i = t(B), f = t(Lt()), P = Fe(), x = Ie();
  function s(u) {
    return typeof u == "function" ? u() : u;
  }
  var l = (0, e.defineComponent)({
    name: "ConfirmDialog",
    inheritAttrs: !1,
    props: ["icon", "onCancel", "onOk", "close", "closable", "zIndex", "afterClose", "visible", "keyboard", "centered", "getContainer", "maskStyle", "okButtonProps", "cancelButtonProps", "okType", "prefixCls", "okCancel", "width", "mask", "maskClosable", "okText", "cancelText", "autoFocusButton", "transitionName", "maskTransitionName", "type", "title", "content", "direction", "rootPrefixCls", "bodyStyle", "closeIcon", "modalRender", "focusTriggerAfterClose", "wrapClassName"],
    setup: function(a, p) {
      var y = p.attrs, T = (0, P.useLocaleReceiver)("Modal"), c = (0, r.default)(T, 1), d = c[0];
      return function() {
        var v = a.icon, w = a.onCancel, _ = a.onOk, g = a.close, C = a.closable, k = C === void 0 ? !1 : C, b = a.zIndex, h = a.afterClose, I = a.visible, M = a.keyboard, W = a.centered, E = a.getContainer, ae = a.maskStyle, L = a.okButtonProps, Xe = a.cancelButtonProps, de = a.okCancel, ve = de === void 0 ? !0 : de, pe = a.width, Ye = pe === void 0 ? 416 : pe, me = a.mask, He = me === void 0 ? !0 : me, Ce = a.maskClosable, Je = Ce === void 0 ? !1 : Ce, ye = a.type, ge = a.title, Ke = a.content, Qe = a.direction, Ze = a.closeIcon, et = a.modalRender, tt = a.focusTriggerAfterClose, Q = a.rootPrefixCls, at = a.bodyStyle, rt = a.wrapClassName, nt = a.okType || "primary", re = a.prefixCls || "ant-modal", F = "".concat(re, "-confirm"), ot = y.style || {}, lt = s(a.okText) || (ve ? d.value.okText : d.value.justOkText), it = s(a.cancelText) || d.value.cancelText, _e = a.autoFocusButton === null ? !1 : a.autoFocusButton || "ok", ut = (0, n.default)(F, "".concat(F, "-").concat(ye), "".concat(re, "-").concat(ye), (0, o.default)({}, "".concat(F, "-rtl"), Qe === "rtl"), y.class), ct = ve && (0, e.createVNode)(f.default, {
          actionFn: w,
          close: g,
          autofocus: _e === "cancel",
          buttonProps: Xe,
          prefixCls: "".concat(Q, "-btn")
        }, {
          default: function() {
            return [it];
          }
        });
        return (0, e.createVNode)(i.default, {
          prefixCls: re,
          class: ut,
          wrapClassName: (0, n.default)((0, o.default)({}, "".concat(F, "-centered"), !!W), rt),
          onCancel: function(xe) {
            return g({
              triggerCancel: !0
            }, xe);
          },
          visible: I,
          title: "",
          footer: "",
          transitionName: (0, x.getTransitionName)(Q, "zoom", a.transitionName),
          maskTransitionName: (0, x.getTransitionName)(Q, "fade", a.maskTransitionName),
          mask: He,
          maskClosable: Je,
          maskStyle: ae,
          style: ot,
          bodyStyle: at,
          width: Ye,
          zIndex: b,
          afterClose: h,
          keyboard: M,
          centered: W,
          getContainer: E,
          closable: k,
          closeIcon: Ze,
          modalRender: et,
          focusTriggerAfterClose: tt
        }, {
          default: function() {
            return [(0, e.createVNode)("div", {
              class: "".concat(F, "-body-wrapper")
            }, [(0, e.createVNode)("div", {
              class: "".concat(F, "-body")
            }, [s(v), ge === void 0 ? null : (0, e.createVNode)("span", {
              class: "".concat(F, "-title")
            }, [s(ge)]), (0, e.createVNode)("div", {
              class: "".concat(F, "-content")
            }, [s(Ke)])]), (0, e.createVNode)("div", {
              class: "".concat(F, "-btns")
            }, [ct, (0, e.createVNode)(f.default, {
              type: nt,
              actionFn: _,
              close: g,
              autofocus: _e === "ok",
              buttonProps: L,
              prefixCls: "".concat(Q, "-btn")
            }, {
              default: function() {
                return [lt];
              }
            })])])];
          }
        });
      };
    }
  });
  return X.default = l, X;
}
var A = K, Ut = Be;
Object.defineProperty(D, "__esModule", {
  value: !0
});
D.default = void 0;
D.withConfirm = oa;
D.withError = na;
D.withInfo = aa;
D.withSuccess = ra;
D.withWarn = ta;
var q = G, Gt = A(pt()), m = A(te()), Xt = A(jt()), Z = B, Se = Qt(mt()), Yt = A(Tt()), Ht = A(Ct()), Jt = A(yt()), Kt = A(gt()), Me = A(_t());
function We(t) {
  if (typeof WeakMap != "function")
    return null;
  var e = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap();
  return (We = function(n) {
    return n ? o : e;
  })(t);
}
function Qt(t, e) {
  if (!e && t && t.__esModule)
    return t;
  if (t === null || Ut(t) !== "object" && typeof t != "function")
    return { default: t };
  var o = We(e);
  if (o && o.has(t))
    return o.get(t);
  var r = {}, n = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in t)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(t, i)) {
      var f = n ? Object.getOwnPropertyDescriptor(t, i) : null;
      f && (f.get || f.set) ? Object.defineProperty(r, i, f) : r[i] = t[i];
    }
  return r.default = t, o && o.set(t, r), r;
}
var Zt = function(e) {
  var o = document.createDocumentFragment(), r = (0, m.default)((0, m.default)({}, (0, Yt.default)(e, ["parentContext", "appContext"])), {}, {
    close: f,
    visible: !0
  }), n = null;
  function i() {
    n && ((0, q.render)(null, o), n.component.update(), n = null);
    for (var l = arguments.length, u = new Array(l), a = 0; a < l; a++)
      u[a] = arguments[a];
    var p = u.some(function(c) {
      return c && c.triggerCancel;
    });
    e.onCancel && p && e.onCancel.apply(e, u);
    for (var y = 0; y < Z.destroyFns.length; y++) {
      var T = Z.destroyFns[y];
      if (T === f) {
        Z.destroyFns.splice(y, 1);
        break;
      }
    }
  }
  function f() {
    for (var l = this, u = arguments.length, a = new Array(u), p = 0; p < u; p++)
      a[p] = arguments[p];
    r = (0, m.default)((0, m.default)({}, r), {}, {
      visible: !1,
      afterClose: function() {
        typeof e.afterClose == "function" && e.afterClose(), i.apply(l, a);
      }
    }), P(r);
  }
  function P(l) {
    typeof l == "function" ? r = l(r) : r = (0, m.default)((0, m.default)({}, r), l), n && ((0, Gt.default)(n.component.props, r), n.component.update());
  }
  var x = function(u) {
    var a = Se.globalConfigForApi, p = a.prefixCls, y = u.prefixCls || "".concat(p, "-modal");
    return (0, q.createVNode)(Se.default, (0, m.default)((0, m.default)({}, a), {}, {
      notUpdateGlobalConfig: !0,
      prefixCls: p
    }), {
      default: function() {
        return [(0, q.createVNode)(Xt.default, (0, m.default)((0, m.default)({}, u), {}, {
          rootPrefixCls: p,
          prefixCls: y
        }), null)];
      }
    });
  };
  function s(l) {
    var u = (0, q.createVNode)(x, (0, m.default)({}, l));
    return u.appContext = e.parentContext || e.appContext || u.appContext, (0, q.render)(u, o), u;
  }
  return n = s(r), Z.destroyFns.push(f), {
    destroy: f,
    update: P
  };
}, ea = Zt;
D.default = ea;
function ta(t) {
  return (0, m.default)((0, m.default)({
    icon: function() {
      return (0, q.createVNode)(Me.default, null, null);
    },
    okCancel: !1
  }, t), {}, {
    type: "warning"
  });
}
function aa(t) {
  return (0, m.default)((0, m.default)({
    icon: function() {
      return (0, q.createVNode)(Ht.default, null, null);
    },
    okCancel: !1
  }, t), {}, {
    type: "info"
  });
}
function ra(t) {
  return (0, m.default)((0, m.default)({
    icon: function() {
      return (0, q.createVNode)(Jt.default, null, null);
    },
    okCancel: !1
  }, t), {}, {
    type: "success"
  });
}
function na(t) {
  return (0, m.default)((0, m.default)({
    icon: function() {
      return (0, q.createVNode)(Kt.default, null, null);
    },
    okCancel: !1
  }, t), {}, {
    type: "error"
  });
}
function oa(t) {
  return (0, m.default)((0, m.default)({
    icon: function() {
      return (0, q.createVNode)(Me.default, null, null);
    },
    okCancel: !0
  }, t), {}, {
    type: "confirm"
  });
}
var la = Be;
Object.defineProperty(se, "__esModule", {
  value: !0
});
var ze = se.default = void 0, O = Le(B), $ = Le(D);
function Ee(t) {
  if (typeof WeakMap != "function")
    return null;
  var e = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap();
  return (Ee = function(n) {
    return n ? o : e;
  })(t);
}
function Le(t, e) {
  if (!e && t && t.__esModule)
    return t;
  if (t === null || la(t) !== "object" && typeof t != "function")
    return { default: t };
  var o = Ee(e);
  if (o && o.has(t))
    return o.get(t);
  var r = {}, n = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in t)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(t, i)) {
      var f = n ? Object.getOwnPropertyDescriptor(t, i) : null;
      f && (f.get || f.set) ? Object.defineProperty(r, i, f) : r[i] = t[i];
    }
  return r.default = t, o && o.set(t, r), r;
}
function je(t) {
  return (0, $.default)((0, $.withWarn)(t));
}
O.default.info = function(e) {
  return (0, $.default)((0, $.withInfo)(e));
};
O.default.success = function(e) {
  return (0, $.default)((0, $.withSuccess)(e));
};
O.default.error = function(e) {
  return (0, $.default)((0, $.withError)(e));
};
O.default.warning = je;
O.default.warn = je;
O.default.confirm = function(e) {
  return (0, $.default)((0, $.withConfirm)(e));
};
O.default.destroyAll = function() {
  for (; O.destroyFns.length; ) {
    var e = O.destroyFns.pop();
    e && e();
  }
};
O.default.install = function(t) {
  return t.component(O.default.name, O.default), t;
};
var ia = O.default;
ze = se.default = ia;
var J = {}, z = K;
Object.defineProperty(J, "__esModule", {
  value: !0
});
J.spaceProps = Ge = J.default = void 0;
var N = G, ee = z(te()), oe = z(ue()), ua = z(ce()), qe = z($e()), ca = ht(), ie = xt(), fa = z(De()), sa = z(Nt()), da = z(fe()), va = {
  small: 8,
  middle: 16,
  large: 24
}, Ue = function() {
  return {
    prefixCls: String,
    size: {
      type: [String, Number, Array]
    },
    direction: qe.default.oneOf((0, ie.tuple)("horizontal", "vertical")).def("horizontal"),
    align: qe.default.oneOf((0, ie.tuple)("start", "end", "center", "baseline")),
    wrap: {
      type: Boolean,
      default: void 0
    }
  };
};
J.spaceProps = Ue;
function pa(t) {
  return typeof t == "string" ? va[t] : t || 0;
}
var ma = (0, N.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: "ASpace",
  props: Ue(),
  slots: ["split"],
  setup: function(e, o) {
    var r = o.slots, n = (0, fa.default)("space", e), i = n.prefixCls, f = n.space, P = n.direction, x = (0, sa.default)(), s = (0, N.computed)(function() {
      var c, d, v;
      return (c = (d = e.size) !== null && d !== void 0 ? d : (v = f.value) === null || v === void 0 ? void 0 : v.size) !== null && c !== void 0 ? c : "small";
    }), l = (0, N.ref)(), u = (0, N.ref)();
    (0, N.watch)(s, function() {
      var c = (Array.isArray(s.value) ? s.value : [s.value, s.value]).map(function(v) {
        return pa(v);
      }), d = (0, ua.default)(c, 2);
      l.value = d[0], u.value = d[1];
    }, {
      immediate: !0
    });
    var a = (0, N.computed)(function() {
      return e.align === void 0 && e.direction === "horizontal" ? "center" : e.align;
    }), p = (0, N.computed)(function() {
      var c;
      return (0, da.default)(i.value, "".concat(i.value, "-").concat(e.direction), (c = {}, (0, oe.default)(c, "".concat(i.value, "-rtl"), P.value === "rtl"), (0, oe.default)(c, "".concat(i.value, "-align-").concat(a.value), a.value), c));
    }), y = (0, N.computed)(function() {
      return P.value === "rtl" ? "marginLeft" : "marginRight";
    }), T = (0, N.computed)(function() {
      var c = {};
      return x.value && (c.columnGap = "".concat(l.value, "px"), c.rowGap = "".concat(u.value, "px")), (0, ee.default)((0, ee.default)({}, c), e.wrap && {
        flexWrap: "wrap",
        marginBottom: "".concat(-u.value, "px")
      });
    });
    return function() {
      var c, d, v = e.wrap, w = e.direction, _ = w === void 0 ? "horizontal" : w, g = (c = r.default) === null || c === void 0 ? void 0 : c.call(r), C = (0, ca.filterEmpty)(g), k = C.length;
      if (k === 0)
        return null;
      var b = (d = r.split) === null || d === void 0 ? void 0 : d.call(r), h = "".concat(i.value, "-item"), I = l.value, M = k - 1;
      return (0, N.createVNode)("div", {
        class: p.value,
        style: T.value
      }, [C.map(function(W, E) {
        var ae = g.indexOf(W), L = {};
        return x.value || (_ === "vertical" ? E < M && (L = {
          marginBottom: "".concat(I / (b ? 2 : 1), "px")
        }) : L = (0, ee.default)((0, ee.default)({}, E < M && (0, oe.default)({}, y.value, "".concat(I / (b ? 2 : 1), "px"))), v && {
          paddingBottom: "".concat(u.value, "px")
        })), (0, N.createVNode)(N.Fragment, {
          key: ae
        }, [(0, N.createVNode)("div", {
          class: h,
          style: L
        }, [W]), E < M && b && (0, N.createVNode)("span", {
          class: "".concat(h, "-split"),
          style: L
        }, [b])]);
      })]);
    };
  }
}), Ca = (0, ie.withInstall)(ma), Ge = J.default = Ca;
const ya = {
  position: "absolute",
  right: "150px",
  left: "150px",
  minWidth: "700px",
  width: "auto",
  top: "56px",
  bottom: "30px",
  minHeight: "500px"
}, ga = {
  height: "calc(100vh - 108px)",
  padding: 0
}, Fa = ft({
  props: {
    componentSchema: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["ok", "close", "update:modelValue"],
  setup(t, { attrs: e, slots: o, emit: r }) {
    return () => {
      var s;
      const n = {
        ...t.componentSchema,
        ...e,
        title: ((s = t.componentSchema) == null ? void 0 : s.label) ?? "",
        wrapClassName: "epic-modal-ant",
        visible: e.modelValue,
        "onUpdate:visible": x,
        style: "top:20px",
        bodyStyle: ga,
        dialogStyle: ya,
        footer: null
      }, i = n.children ?? [];
      delete n.children;
      let f = null;
      i.length ? f = () => i.map(
        (l) => ne(o, "node", { componentSchema: l })
      ) : f = () => [ne(o, "default")];
      function P() {
        r("ok");
      }
      function x() {
        r("update:modelValue", !1), r("close");
      }
      return j(ze, n, {
        default: () => [
          j(
            "div",
            { class: "epic-modal-main" },
            ne(o, "edit-node", {}, f)
          ),
          j(
            "div",
            { class: "epic-modal-footer" },
            j(
              Ge,
              { align: "end" },
              {
                default: () => [
                  j(
                    ke,
                    { onClick: x },
                    {
                      default: () => "关闭"
                    }
                  ),
                  j(
                    ke,
                    { type: "primary", onClick: P },
                    {
                      default: () => n.okText ?? "确定"
                    }
                  )
                ]
              }
            )
          )
        ]
      });
    };
  }
});
export {
  Fa as default
};
