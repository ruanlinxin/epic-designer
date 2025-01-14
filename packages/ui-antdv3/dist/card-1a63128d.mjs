import { defineComponent as Ae, h as Oe, renderSlot as pe } from "vue";
import { g as Be } from "./index-4ddd22ca.mjs";
import { a as z, j as ye, c as ge, p as Re, f as F, l as Ie, i as B, g as H } from "./useConfigInject-f4796704.mjs";
import { t as Ke } from "./index-e18cb4bd.mjs";
import { r as Ue } from "./index-38aed28d.mjs";
import { c as ke } from "./index-154025de.mjs";
import "./raf-09a8b76f.mjs";
import "./KeyCode-8a26b842.mjs";
import "./shallowequal-18fb70ac.mjs";
import "./index-34e90455.mjs";
import "./Portal-6677def3.mjs";
import "./vnode-35592114.mjs";
import "./ResizeObserver.es-8567d31b.mjs";
import "./_flatRest-805d9865.mjs";
import "./index-21522992.mjs";
import "./index-d3a13e82.mjs";
import "./index-82313b29.mjs";
import "./colors-e1c01837.mjs";
import "./firstNotUndefined-ac7713f5.mjs";
import "./collapseMotion-f404b746.mjs";
import "./useState-08f41f35.mjs";
import "./useRefs-3af9dee9.mjs";
import "./isMobile-1112823b.mjs";
import "./useMergedState-d616d3f0.mjs";
import "./omit-567cf556.mjs";
import "./index-27942d25.mjs";
import "./Col-790da5bd.mjs";
import "./useFlexGapSupport-4e554c93.mjs";
var Ce = {}, C = {}, me;
function We() {
  if (me)
    return C;
  me = 1;
  var a = B;
  Object.defineProperty(C, "__esModule", {
    value: !0
  }), C.default = C.cardProps = void 0;
  var e = H, t = a(z()), u = a(Ke), n = a(Ue), o = a(ke), d = a(ye()), s = ge(), x = a(Re()), y = a(F()), T = a(Ie()), g = u.default.TabPane, V = function() {
    return {
      prefixCls: String,
      title: d.default.any,
      extra: d.default.any,
      bordered: {
        type: Boolean,
        default: !0
      },
      bodyStyle: {
        type: Object,
        default: void 0
      },
      headStyle: {
        type: Object,
        default: void 0
      },
      loading: {
        type: Boolean,
        default: !1
      },
      hoverable: {
        type: Boolean,
        default: !1
      },
      type: {
        type: String
      },
      size: {
        type: String
      },
      actions: d.default.any,
      tabList: {
        type: Array
      },
      tabBarExtraContent: d.default.any,
      activeTabKey: String,
      defaultActiveTabKey: String,
      cover: d.default.any,
      onTabChange: {
        type: Function
      }
    };
  };
  C.cardProps = V;
  var c = (0, e.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "ACard",
    props: V(),
    slots: ["title", "extra", "tabBarExtraContent", "actions", "cover", "customTab"],
    setup: function(r, M) {
      var i = M.slots, P = (0, y.default)("card", r), G = P.prefixCls, I = P.direction, J = P.size, he = function(_) {
        var v = _.map(function(p, j) {
          return (0, e.isVNode)(p) && !(0, s.isEmptyElement)(p) || !(0, e.isVNode)(p) ? (0, e.createVNode)("li", {
            style: {
              width: "".concat(100 / _.length, "%")
            },
            key: "action-".concat(j)
          }, [(0, e.createVNode)("span", null, [p])]) : null;
        });
        return v;
      }, Ne = function(_) {
        var v;
        (v = r.onTabChange) === null || v === void 0 || v.call(r, _);
      }, Ve = function() {
        var _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], v;
        return _.forEach(function(p) {
          p && (0, x.default)(p.type) && p.type.__ANT_CARD_GRID && (v = !0);
        }), v;
      };
      return function() {
        var S, _, v, p, j, K, m, D, Q = r.headStyle, Pe = Q === void 0 ? {} : Q, X = r.bodyStyle, U = X === void 0 ? {} : X, Y = r.loading, Z = r.bordered, Se = Z === void 0 ? !0 : Z, ee = r.type, E = r.tabList, xe = r.hoverable, te = r.activeTabKey, Te = r.defaultActiveTabKey, ae = r.tabBarExtraContent, re = ae === void 0 ? (0, s.filterEmptyWithUndefined)((S = i.tabBarExtraContent) === null || S === void 0 ? void 0 : S.call(i)) : ae, ne = r.title, k = ne === void 0 ? (0, s.filterEmptyWithUndefined)((_ = i.title) === null || _ === void 0 ? void 0 : _.call(i)) : ne, oe = r.extra, W = oe === void 0 ? (0, s.filterEmptyWithUndefined)((v = i.extra) === null || v === void 0 ? void 0 : v.call(i)) : oe, de = r.actions, L = de === void 0 ? (0, s.filterEmptyWithUndefined)((p = i.actions) === null || p === void 0 ? void 0 : p.call(i)) : de, le = r.cover, ue = le === void 0 ? (0, s.filterEmptyWithUndefined)((j = i.cover) === null || j === void 0 ? void 0 : j.call(i)) : le, A = (0, s.flattenChildren)((K = i.default) === null || K === void 0 ? void 0 : K.call(i)), l = G.value, je = (m = {}, (0, t.default)(m, "".concat(l), !0), (0, t.default)(m, "".concat(l, "-loading"), Y), (0, t.default)(m, "".concat(l, "-bordered"), Se), (0, t.default)(m, "".concat(l, "-hoverable"), !!xe), (0, t.default)(m, "".concat(l, "-contain-grid"), Ve(A)), (0, t.default)(m, "".concat(l, "-contain-tabs"), E && E.length), (0, t.default)(m, "".concat(l, "-").concat(J.value), J.value), (0, t.default)(m, "".concat(l, "-type-").concat(ee), !!ee), (0, t.default)(m, "".concat(l, "-rtl"), I.value === "rtl"), m), De = U.padding === 0 || U.padding === "0px" ? {
          padding: "24px"
        } : void 0, b = (0, e.createVNode)("div", {
          class: "".concat(l, "-loading-block")
        }, null), Ee = (0, e.createVNode)("div", {
          class: "".concat(l, "-loading-content"),
          style: De
        }, [(0, e.createVNode)(n.default, {
          gutter: 8
        }, {
          default: function() {
            return [(0, e.createVNode)(o.default, {
              span: 22
            }, {
              default: function() {
                return [b];
              }
            })];
          }
        }), (0, e.createVNode)(n.default, {
          gutter: 8
        }, {
          default: function() {
            return [(0, e.createVNode)(o.default, {
              span: 8
            }, {
              default: function() {
                return [b];
              }
            }), (0, e.createVNode)(o.default, {
              span: 15
            }, {
              default: function() {
                return [b];
              }
            })];
          }
        }), (0, e.createVNode)(n.default, {
          gutter: 8
        }, {
          default: function() {
            return [(0, e.createVNode)(o.default, {
              span: 6
            }, {
              default: function() {
                return [b];
              }
            }), (0, e.createVNode)(o.default, {
              span: 18
            }, {
              default: function() {
                return [b];
              }
            })];
          }
        }), (0, e.createVNode)(n.default, {
          gutter: 8
        }, {
          default: function() {
            return [(0, e.createVNode)(o.default, {
              span: 13
            }, {
              default: function() {
                return [b];
              }
            }), (0, e.createVNode)(o.default, {
              span: 9
            }, {
              default: function() {
                return [b];
              }
            })];
          }
        }), (0, e.createVNode)(n.default, {
          gutter: 8
        }, {
          default: function() {
            return [(0, e.createVNode)(o.default, {
              span: 4
            }, {
              default: function() {
                return [b];
              }
            }), (0, e.createVNode)(o.default, {
              span: 3
            }, {
              default: function() {
                return [b];
              }
            }), (0, e.createVNode)(o.default, {
              span: 16
            }, {
              default: function() {
                return [b];
              }
            })];
          }
        })]), ie = te !== void 0, $e = (D = {
          size: "large"
        }, (0, t.default)(D, ie ? "activeKey" : "defaultActiveKey", ie ? te : Te), (0, t.default)(D, "onChange", Ne), (0, t.default)(D, "class", "".concat(l, "-head-tabs")), D), ce, fe = E && E.length ? (0, e.createVNode)(u.default, $e, {
          default: function() {
            return [E.map(function(f) {
              var se = f.tab, O = f.slots, ve = O == null ? void 0 : O.tab;
              (0, T.default)(!O, "Card", "tabList slots is deprecated, Please use `customTab` instead.");
              var w = se !== void 0 ? se : i[ve] ? i[ve](f) : null;
              return w = (0, e.renderSlot)(i, "customTab", f, function() {
                return [w];
              }), (0, e.createVNode)(g, {
                tab: w,
                key: f.key,
                disabled: f.disabled
              }, null);
            })];
          },
          rightExtra: re ? function() {
            return re;
          } : null
        }) : null;
        (k || W || fe) && (ce = (0, e.createVNode)("div", {
          class: "".concat(l, "-head"),
          style: Pe
        }, [(0, e.createVNode)("div", {
          class: "".concat(l, "-head-wrapper")
        }, [k && (0, e.createVNode)("div", {
          class: "".concat(l, "-head-title")
        }, [k]), W && (0, e.createVNode)("div", {
          class: "".concat(l, "-extra")
        }, [W])]), fe]));
        var qe = ue ? (0, e.createVNode)("div", {
          class: "".concat(l, "-cover")
        }, [ue]) : null, Me = (0, e.createVNode)("div", {
          class: "".concat(l, "-body"),
          style: U
        }, [Y ? Ee : A]), Ge = L && L.length ? (0, e.createVNode)("ul", {
          class: "".concat(l, "-actions")
        }, [he(L)]) : null;
        return (0, e.createVNode)("div", {
          class: je,
          ref: "cardContainerRef"
        }, [ce, qe, A && A.length ? Me : null, Ge]);
      };
    }
  }), R = c;
  return C.default = R, C;
}
var h = {}, _e;
function Le() {
  if (_e)
    return h;
  _e = 1;
  var a = B;
  Object.defineProperty(h, "__esModule", {
    value: !0
  }), h.default = h.cardMetaProps = void 0;
  var e = H, t = a(z()), u = a(ye()), n = ge(), o = a(F()), d = function() {
    return {
      prefixCls: String,
      title: u.default.any,
      description: u.default.any,
      avatar: u.default.any
    };
  };
  h.cardMetaProps = d;
  var s = (0, e.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "ACardMeta",
    props: d(),
    slots: ["title", "description", "avatar"],
    setup: function(y, T) {
      var g = T.slots, V = (0, o.default)("card", y), c = V.prefixCls;
      return function() {
        var R = (0, t.default)({}, "".concat(c.value, "-meta"), !0), q = (0, n.getPropsSlot)(g, y, "avatar"), r = (0, n.getPropsSlot)(g, y, "title"), M = (0, n.getPropsSlot)(g, y, "description"), i = q ? (0, e.createVNode)("div", {
          class: "".concat(c.value, "-meta-avatar")
        }, [q]) : null, P = r ? (0, e.createVNode)("div", {
          class: "".concat(c.value, "-meta-title")
        }, [r]) : null, G = M ? (0, e.createVNode)("div", {
          class: "".concat(c.value, "-meta-description")
        }, [M]) : null, I = P || G ? (0, e.createVNode)("div", {
          class: "".concat(c.value, "-meta-detail")
        }, [P, G]) : null;
        return (0, e.createVNode)("div", {
          class: R
        }, [i, I]);
      };
    }
  });
  return h.default = s, h;
}
var N = {}, be;
function we() {
  if (be)
    return N;
  be = 1;
  var a = B;
  Object.defineProperty(N, "__esModule", {
    value: !0
  }), N.default = N.cardGridProps = void 0;
  var e = H, t = a(z()), u = a(F()), n = function() {
    return {
      prefixCls: String,
      hoverable: {
        type: Boolean,
        default: !0
      }
    };
  };
  N.cardGridProps = n;
  var o = (0, e.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: "ACardGrid",
    __ANT_CARD_GRID: !0,
    props: n(),
    setup: function(s, x) {
      var y = x.slots, T = (0, u.default)("card", s), g = T.prefixCls, V = (0, e.computed)(function() {
        var c;
        return c = {}, (0, t.default)(c, "".concat(g.value, "-grid"), !0), (0, t.default)(c, "".concat(g.value, "-grid-hoverable"), s.hoverable), c;
      });
      return function() {
        var c;
        return (0, e.createVNode)("div", {
          class: V.value
        }, [(c = y.default) === null || c === void 0 ? void 0 : c.call(y)]);
      };
    }
  });
  return N.default = o, N;
}
(function(a) {
  var e = B;
  Object.defineProperty(a, "__esModule", {
    value: !0
  }), Object.defineProperty(a, "CardGrid", {
    enumerable: !0,
    get: function() {
      return n.default;
    }
  }), Object.defineProperty(a, "CardMeta", {
    enumerable: !0,
    get: function() {
      return u.default;
    }
  }), a.default = void 0;
  var t = e(We()), u = e(Le()), n = e(we());
  t.default.Meta = u.default, t.default.Grid = n.default, t.default.install = function(d) {
    return d.component(t.default.name, t.default), d.component(u.default.name, u.default), d.component(n.default.name, n.default), d;
  };
  var o = t.default;
  a.default = o;
})(Ce);
const ze = /* @__PURE__ */ Be(Ce), ht = Ae({
  props: {
    componentSchema: {
      type: Object,
      require: !0,
      default: () => ({})
    }
  },
  setup(a, { attrs: e, slots: t }) {
    return () => {
      var o;
      const u = {
        ...a.componentSchema,
        title: ((o = a.componentSchema) == null ? void 0 : o.label) ?? ""
      }, n = u.children ?? [];
      return delete u.children, Oe(ze, u, {
        default: () => pe(
          t,
          "edit-node",
          {},
          () => n.map(
            (d) => pe(t, "node", { componentSchema: d })
          )
        )
      });
    };
  }
});
export {
  ht as default
};
