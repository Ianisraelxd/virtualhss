/*! For license information please see main.e51b5644.js.LICENSE.txt */
(() => {
  "use strict";
  var e = {
      730: (e, t, n) => {
        var r = n(43),
          a = n(853);
        function o(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var i = new Set(),
          l = {};
        function s(e, t) {
          u(e, t), u(e + "Capture", t);
        }
        function u(e, t) {
          for (l[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          h =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          f = {},
          p = {};
        function m(e, t, n, r, a, o, i) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = o),
            (this.removeEmptyString = i);
        }
        var g = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            g[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            g[t] = new m(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              g[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            g[e] = new m(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              g[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            g[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            g[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            g[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            g[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var y = /[\-:]([a-z])/g;
        function v(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var a = g.hasOwnProperty(t) ? g[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!d.call(p, e) ||
                    (!d.call(f, e) &&
                      (h.test(e) ? (p[e] = !0) : ((f[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (a = a.type) || (4 === a && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(y, v);
            g[t] = new m(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(y, v);
              g[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(y, v);
            g[t] = new m(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (g.xlinkHref = new m(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          x = Symbol.for("react.element"),
          k = Symbol.for("react.portal"),
          S = Symbol.for("react.fragment"),
          j = Symbol.for("react.strict_mode"),
          C = Symbol.for("react.profiler"),
          E = Symbol.for("react.provider"),
          N = Symbol.for("react.context"),
          T = Symbol.for("react.forward_ref"),
          I = Symbol.for("react.suspense"),
          z = Symbol.for("react.suspense_list"),
          _ = Symbol.for("react.memo"),
          P = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var L = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var R = Symbol.iterator;
        function F(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (R && e[R]) || e["@@iterator"])
            ? e
            : null;
        }
        var D,
          A = Object.assign;
        function M(e) {
          if (void 0 === D)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              D = (t && t[1]) || "";
            }
          return "\n" + D + e;
        }
        var O = !1;
        function B(e, t) {
          if (!e || O) return "";
          O = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (u) {
                  var r = u;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (u) {
                  r = u;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (u) {
                r = u;
              }
              e();
            }
          } catch (u) {
            if (u && r && "string" === typeof u.stack) {
              for (
                var a = u.stack.split("\n"),
                  o = r.stack.split("\n"),
                  i = a.length - 1,
                  l = o.length - 1;
                1 <= i && 0 <= l && a[i] !== o[l];

              )
                l--;
              for (; 1 <= i && 0 <= l; i--, l--)
                if (a[i] !== o[l]) {
                  if (1 !== i || 1 !== l)
                    do {
                      if ((i--, 0 > --l || a[i] !== o[l])) {
                        var s = "\n" + a[i].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            s.includes("<anonymous>") &&
                            (s = s.replace("<anonymous>", e.displayName)),
                          s
                        );
                      }
                    } while (1 <= i && 0 <= l);
                  break;
                }
            }
          } finally {
            (O = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? M(e) : "";
        }
        function W(e) {
          switch (e.tag) {
            case 5:
              return M(e.type);
            case 16:
              return M("Lazy");
            case 13:
              return M("Suspense");
            case 19:
              return M("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = B(e.type, !1));
            case 11:
              return (e = B(e.type.render, !1));
            case 1:
              return (e = B(e.type, !0));
            default:
              return "";
          }
        }
        function H(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case S:
              return "Fragment";
            case k:
              return "Portal";
            case C:
              return "Profiler";
            case j:
              return "StrictMode";
            case I:
              return "Suspense";
            case z:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case N:
                return (e.displayName || "Context") + ".Consumer";
              case E:
                return (e._context.displayName || "Context") + ".Provider";
              case T:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case _:
                return null !== (t = e.displayName || null)
                  ? t
                  : H(e.type) || "Memo";
              case P:
                (t = e._payload), (e = e._init);
                try {
                  return H(e(t));
                } catch (n) {}
            }
          return null;
        }
        function q(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return H(t);
            case 8:
              return t === j ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function U(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function $(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function V(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = $(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  o = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), o.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function Q(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = $(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function G(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function Y(e, t) {
          var n = t.checked;
          return A({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function J(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = U(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function K(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function X(e, t) {
          K(e, t);
          var n = U(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, U(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function Z(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && G(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + U(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
          return A({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(o(92));
              if (te(n)) {
                if (1 < n.length) throw Error(o(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: U(n) };
        }
        function oe(e, t) {
          var n = U(t.value),
            r = U(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function ie(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function le(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function se(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? le(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ue,
          ce,
          de =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ue = ue || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ue.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function he(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var fe = {
            animationIterationCount: !0,
            aspectRatio: !0,
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
            strokeWidth: !0,
          },
          pe = ["Webkit", "ms", "Moz", "O"];
        function me(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (fe.hasOwnProperty(e) && fe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function ge(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = me(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(fe).forEach(function (e) {
          pe.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (fe[t] = fe[e]);
          });
        });
        var ye = A(
          { menuitem: !0 },
          {
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
            wbr: !0,
          }
        );
        function ve(e, t) {
          if (t) {
            if (
              ye[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(o(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(o(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(o(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(o(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
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
              return !0;
          }
        }
        var we = null;
        function xe(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var ke = null,
          Se = null,
          je = null;
        function Ce(e) {
          if ((e = ba(e))) {
            if ("function" !== typeof ke) throw Error(o(280));
            var t = e.stateNode;
            t && ((t = xa(t)), ke(e.stateNode, e.type, t));
          }
        }
        function Ee(e) {
          Se ? (je ? je.push(e) : (je = [e])) : (Se = e);
        }
        function Ne() {
          if (Se) {
            var e = Se,
              t = je;
            if (((je = Se = null), Ce(e), t))
              for (e = 0; e < t.length; e++) Ce(t[e]);
          }
        }
        function Te(e, t) {
          return e(t);
        }
        function Ie() {}
        var ze = !1;
        function _e(e, t, n) {
          if (ze) return e(t, n);
          ze = !0;
          try {
            return Te(e, t, n);
          } finally {
            (ze = !1), (null !== Se || null !== je) && (Ie(), Ne());
          }
        }
        function Pe(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = xa(n);
          if (null === r) return null;
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
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
          return n;
        }
        var Le = !1;
        if (c)
          try {
            var Re = {};
            Object.defineProperty(Re, "passive", {
              get: function () {
                Le = !0;
              },
            }),
              window.addEventListener("test", Re, Re),
              window.removeEventListener("test", Re, Re);
          } catch (ce) {
            Le = !1;
          }
        function Fe(e, t, n, r, a, o, i, l, s) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, u);
          } catch (c) {
            this.onError(c);
          }
        }
        var De = !1,
          Ae = null,
          Me = !1,
          Oe = null,
          Be = {
            onError: function (e) {
              (De = !0), (Ae = e);
            },
          };
        function We(e, t, n, r, a, o, i, l, s) {
          (De = !1), (Ae = null), Fe.apply(Be, arguments);
        }
        function He(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function qe(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function Ue(e) {
          if (He(e) !== e) throw Error(o(188));
        }
        function $e(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = He(e))) throw Error(o(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var i = a.alternate;
                if (null === i) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === i.child) {
                  for (i = a.child; i; ) {
                    if (i === n) return Ue(a), e;
                    if (i === r) return Ue(a), t;
                    i = i.sibling;
                  }
                  throw Error(o(188));
                }
                if (n.return !== r.return) (n = a), (r = i);
                else {
                  for (var l = !1, s = a.child; s; ) {
                    if (s === n) {
                      (l = !0), (n = a), (r = i);
                      break;
                    }
                    if (s === r) {
                      (l = !0), (r = a), (n = i);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!l) {
                    for (s = i.child; s; ) {
                      if (s === n) {
                        (l = !0), (n = i), (r = a);
                        break;
                      }
                      if (s === r) {
                        (l = !0), (r = i), (n = a);
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!l) throw Error(o(189));
                  }
                }
                if (n.alternate !== r) throw Error(o(190));
              }
              if (3 !== n.tag) throw Error(o(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Ve(e)
            : null;
        }
        function Ve(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Ve(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Qe = a.unstable_scheduleCallback,
          Ge = a.unstable_cancelCallback,
          Ye = a.unstable_shouldYield,
          Je = a.unstable_requestPaint,
          Ke = a.unstable_now,
          Xe = a.unstable_getCurrentPriorityLevel,
          Ze = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          ot = null;
        var it = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((lt(e) / st) | 0)) | 0;
              },
          lt = Math.log,
          st = Math.LN2;
        var ut = 64,
          ct = 4194304;
        function dt(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function ht(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            o = e.pingedLanes,
            i = 268435455 & n;
          if (0 !== i) {
            var l = i & ~a;
            0 !== l ? (r = dt(l)) : 0 !== (o &= i) && (r = dt(o));
          } else 0 !== (i = n & ~a) ? (r = dt(i)) : 0 !== o && (r = dt(o));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (o = t & -t) || (16 === a && 0 !== (4194240 & o)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - it(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function ft(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function pt(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function mt() {
          var e = ut;
          return 0 === (4194240 & (ut <<= 1)) && (ut = 64), e;
        }
        function gt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function yt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - it(t))] = n);
        }
        function vt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - it(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var bt = 0;
        function wt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var xt,
          kt,
          St,
          jt,
          Ct,
          Et = !1,
          Nt = [],
          Tt = null,
          It = null,
          zt = null,
          _t = new Map(),
          Pt = new Map(),
          Lt = [],
          Rt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function Ft(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Tt = null;
              break;
            case "dragenter":
            case "dragleave":
              It = null;
              break;
            case "mouseover":
            case "mouseout":
              zt = null;
              break;
            case "pointerover":
            case "pointerout":
              _t.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Pt.delete(t.pointerId);
          }
        }
        function Dt(e, t, n, r, a, o) {
          return null === e || e.nativeEvent !== o
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: o,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ba(t)) && kt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function At(e) {
          var t = va(e.target);
          if (null !== t) {
            var n = He(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = qe(n)))
                  return (
                    (e.blockedOn = t),
                    void Ct(e.priority, function () {
                      St(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Mt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Yt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ba(n)) && kt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (we = r), n.target.dispatchEvent(r), (we = null), t.shift();
          }
          return !0;
        }
        function Ot(e, t, n) {
          Mt(e) && n.delete(t);
        }
        function Bt() {
          (Et = !1),
            null !== Tt && Mt(Tt) && (Tt = null),
            null !== It && Mt(It) && (It = null),
            null !== zt && Mt(zt) && (zt = null),
            _t.forEach(Ot),
            Pt.forEach(Ot);
        }
        function Wt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Et ||
              ((Et = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, Bt)));
        }
        function Ht(e) {
          function t(t) {
            return Wt(t, e);
          }
          if (0 < Nt.length) {
            Wt(Nt[0], e);
            for (var n = 1; n < Nt.length; n++) {
              var r = Nt[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Tt && Wt(Tt, e),
              null !== It && Wt(It, e),
              null !== zt && Wt(zt, e),
              _t.forEach(t),
              Pt.forEach(t),
              n = 0;
            n < Lt.length;
            n++
          )
            (r = Lt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Lt.length && null === (n = Lt[0]).blockedOn; )
            At(n), null === n.blockedOn && Lt.shift();
        }
        var qt = w.ReactCurrentBatchConfig,
          Ut = !0;
        function $t(e, t, n, r) {
          var a = bt,
            o = qt.transition;
          qt.transition = null;
          try {
            (bt = 1), Qt(e, t, n, r);
          } finally {
            (bt = a), (qt.transition = o);
          }
        }
        function Vt(e, t, n, r) {
          var a = bt,
            o = qt.transition;
          qt.transition = null;
          try {
            (bt = 4), Qt(e, t, n, r);
          } finally {
            (bt = a), (qt.transition = o);
          }
        }
        function Qt(e, t, n, r) {
          if (Ut) {
            var a = Yt(e, t, n, r);
            if (null === a) Ur(e, t, r, Gt, n), Ft(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (Tt = Dt(Tt, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (It = Dt(It, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (zt = Dt(zt, e, t, n, r, a)), !0;
                  case "pointerover":
                    var o = a.pointerId;
                    return _t.set(o, Dt(_t.get(o) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (o = a.pointerId),
                      Pt.set(o, Dt(Pt.get(o) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((Ft(e, r), 4 & t && -1 < Rt.indexOf(e))) {
              for (; null !== a; ) {
                var o = ba(a);
                if (
                  (null !== o && xt(o),
                  null === (o = Yt(e, t, n, r)) && Ur(e, t, r, Gt, n),
                  o === a)
                )
                  break;
                a = o;
              }
              null !== a && r.stopPropagation();
            } else Ur(e, t, r, null, n);
          }
        }
        var Gt = null;
        function Yt(e, t, n, r) {
          if (((Gt = null), null !== (e = va((e = xe(r))))))
            if (null === (t = He(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = qe(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Gt = e), null;
        }
        function Jt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Xe()) {
                case Ze:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Kt = null,
          Xt = null,
          Zt = null;
        function en() {
          if (Zt) return Zt;
          var e,
            t,
            n = Xt,
            r = n.length,
            a = "value" in Kt ? Kt.value : Kt.textContent,
            o = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var i = r - e;
          for (t = 1; t <= i && n[r - t] === a[o - t]; t++);
          return (Zt = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, o) {
            for (var i in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = o),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(a) : a[i]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            A(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var on,
          ln,
          sn,
          un = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = an(un),
          dn = A({}, un, { view: 0, detail: 0 }),
          hn = an(dn),
          fn = A({}, dn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Cn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== sn &&
                    (sn && "mousemove" === e.type
                      ? ((on = e.screenX - sn.screenX),
                        (ln = e.screenY - sn.screenY))
                      : (ln = on = 0),
                    (sn = e)),
                  on);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : ln;
            },
          }),
          pn = an(fn),
          mn = an(A({}, fn, { dataTransfer: 0 })),
          gn = an(A({}, dn, { relatedTarget: 0 })),
          yn = an(
            A({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          vn = A({}, un, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = an(vn),
          wn = an(A({}, un, { data: 0 })),
          xn = {
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
            MozPrintableKey: "Unidentified",
          },
          kn = {
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
            224: "Meta",
          },
          Sn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function jn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = Sn[e]) && !!t[e];
        }
        function Cn() {
          return jn;
        }
        var En = A({}, dn, {
            key: function (e) {
              if (e.key) {
                var t = xn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? kn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Cn,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Nn = an(En),
          Tn = an(
            A({}, fn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          In = an(
            A({}, dn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Cn,
            })
          ),
          zn = an(
            A({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          _n = A({}, fn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Pn = an(_n),
          Ln = [9, 13, 27, 32],
          Rn = c && "CompositionEvent" in window,
          Fn = null;
        c && "documentMode" in document && (Fn = document.documentMode);
        var Dn = c && "TextEvent" in window && !Fn,
          An = c && (!Rn || (Fn && 8 < Fn && 11 >= Fn)),
          Mn = String.fromCharCode(32),
          On = !1;
        function Bn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Ln.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Wn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Hn = !1;
        var qn = {
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
          week: !0,
        };
        function Un(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!qn[e.type] : "textarea" === t;
        }
        function $n(e, t, n, r) {
          Ee(r),
            0 < (t = Vr(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Vn = null,
          Qn = null;
        function Gn(e) {
          Mr(e, 0);
        }
        function Yn(e) {
          if (Q(wa(e))) return e;
        }
        function Jn(e, t) {
          if ("change" === e) return t;
        }
        var Kn = !1;
        if (c) {
          var Xn;
          if (c) {
            var Zn = "oninput" in document;
            if (!Zn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Zn = "function" === typeof er.oninput);
            }
            Xn = Zn;
          } else Xn = !1;
          Kn = Xn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Vn && (Vn.detachEvent("onpropertychange", nr), (Qn = Vn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Yn(Qn)) {
            var t = [];
            $n(t, Qn, e, xe(e)), _e(Gn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (Qn = n), (Vn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Yn(Qn);
        }
        function or(e, t) {
          if ("click" === e) return Yn(t);
        }
        function ir(e, t) {
          if ("input" === e || "change" === e) return Yn(t);
        }
        var lr =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function sr(e, t) {
          if (lr(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!d.call(t, a) || !lr(e[a], t[a])) return !1;
          }
          return !0;
        }
        function ur(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = ur(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = ur(r);
          }
        }
        function dr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? dr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function hr() {
          for (var e = window, t = G(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = G((e = t.contentWindow).document);
          }
          return t;
        }
        function fr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function pr(e) {
          var t = hr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            dr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && fr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  o = Math.min(r.start, a);
                (r = void 0 === r.end ? o : Math.min(r.end, a)),
                  !e.extend && o > r && ((a = r), (r = o), (o = a)),
                  (a = cr(n, o));
                var i = cr(n, r);
                a &&
                  i &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== i.node ||
                    e.focusOffset !== i.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  o > r
                    ? (e.addRange(t), e.extend(i.node, i.offset))
                    : (t.setEnd(i.node, i.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var mr = c && "documentMode" in document && 11 >= document.documentMode,
          gr = null,
          yr = null,
          vr = null,
          br = !1;
        function wr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == gr ||
            gr !== G(r) ||
            ("selectionStart" in (r = gr) && fr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (vr && sr(vr, r)) ||
              ((vr = r),
              0 < (r = Vr(yr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = gr))));
        }
        function xr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var kr = {
            animationend: xr("Animation", "AnimationEnd"),
            animationiteration: xr("Animation", "AnimationIteration"),
            animationstart: xr("Animation", "AnimationStart"),
            transitionend: xr("Transition", "TransitionEnd"),
          },
          Sr = {},
          jr = {};
        function Cr(e) {
          if (Sr[e]) return Sr[e];
          if (!kr[e]) return e;
          var t,
            n = kr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in jr) return (Sr[e] = n[t]);
          return e;
        }
        c &&
          ((jr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete kr.animationend.animation,
            delete kr.animationiteration.animation,
            delete kr.animationstart.animation),
          "TransitionEvent" in window || delete kr.transitionend.transition);
        var Er = Cr("animationend"),
          Nr = Cr("animationiteration"),
          Tr = Cr("animationstart"),
          Ir = Cr("transitionend"),
          zr = new Map(),
          _r =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Pr(e, t) {
          zr.set(e, t), s(t, [e]);
        }
        for (var Lr = 0; Lr < _r.length; Lr++) {
          var Rr = _r[Lr];
          Pr(Rr.toLowerCase(), "on" + (Rr[0].toUpperCase() + Rr.slice(1)));
        }
        Pr(Er, "onAnimationEnd"),
          Pr(Nr, "onAnimationIteration"),
          Pr(Tr, "onAnimationStart"),
          Pr("dblclick", "onDoubleClick"),
          Pr("focusin", "onFocus"),
          Pr("focusout", "onBlur"),
          Pr(Ir, "onTransitionEnd"),
          u("onMouseEnter", ["mouseout", "mouseover"]),
          u("onMouseLeave", ["mouseout", "mouseover"]),
          u("onPointerEnter", ["pointerout", "pointerover"]),
          u("onPointerLeave", ["pointerout", "pointerover"]),
          s(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          s(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          s("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          s(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Fr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Dr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Fr)
          );
        function Ar(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, i, l, s, u) {
              if ((We.apply(this, arguments), De)) {
                if (!De) throw Error(o(198));
                var c = Ae;
                (De = !1), (Ae = null), Me || ((Me = !0), (Oe = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Mr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var o = void 0;
              if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                  var l = r[i],
                    s = l.instance,
                    u = l.currentTarget;
                  if (((l = l.listener), s !== o && a.isPropagationStopped()))
                    break e;
                  Ar(a, l, u), (o = s);
                }
              else
                for (i = 0; i < r.length; i++) {
                  if (
                    ((s = (l = r[i]).instance),
                    (u = l.currentTarget),
                    (l = l.listener),
                    s !== o && a.isPropagationStopped())
                  )
                    break e;
                  Ar(a, l, u), (o = s);
                }
            }
          }
          if (Me) throw ((e = Oe), (Me = !1), (Oe = null), e);
        }
        function Or(e, t) {
          var n = t[ma];
          void 0 === n && (n = t[ma] = new Set());
          var r = e + "__bubble";
          n.has(r) || (qr(t, e, 2, !1), n.add(r));
        }
        function Br(e, t, n) {
          var r = 0;
          t && (r |= 4), qr(n, e, r, t);
        }
        var Wr = "_reactListening" + Math.random().toString(36).slice(2);
        function Hr(e) {
          if (!e[Wr]) {
            (e[Wr] = !0),
              i.forEach(function (t) {
                "selectionchange" !== t &&
                  (Dr.has(t) || Br(t, !1, e), Br(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Wr] || ((t[Wr] = !0), Br("selectionchange", !1, t));
          }
        }
        function qr(e, t, n, r) {
          switch (Jt(t)) {
            case 1:
              var a = $t;
              break;
            case 4:
              a = Vt;
              break;
            default:
              a = Qt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !Le ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function Ur(e, t, n, r, a) {
          var o = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var i = r.tag;
              if (3 === i || 4 === i) {
                var l = r.stateNode.containerInfo;
                if (l === a || (8 === l.nodeType && l.parentNode === a)) break;
                if (4 === i)
                  for (i = r.return; null !== i; ) {
                    var s = i.tag;
                    if (
                      (3 === s || 4 === s) &&
                      ((s = i.stateNode.containerInfo) === a ||
                        (8 === s.nodeType && s.parentNode === a))
                    )
                      return;
                    i = i.return;
                  }
                for (; null !== l; ) {
                  if (null === (i = va(l))) return;
                  if (5 === (s = i.tag) || 6 === s) {
                    r = o = i;
                    continue e;
                  }
                  l = l.parentNode;
                }
              }
              r = r.return;
            }
          _e(function () {
            var r = o,
              a = xe(n),
              i = [];
            e: {
              var l = zr.get(e);
              if (void 0 !== l) {
                var s = cn,
                  u = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    s = Nn;
                    break;
                  case "focusin":
                    (u = "focus"), (s = gn);
                    break;
                  case "focusout":
                    (u = "blur"), (s = gn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    s = gn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    s = pn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    s = mn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    s = In;
                    break;
                  case Er:
                  case Nr:
                  case Tr:
                    s = yn;
                    break;
                  case Ir:
                    s = zn;
                    break;
                  case "scroll":
                    s = hn;
                    break;
                  case "wheel":
                    s = Pn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    s = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    s = Tn;
                }
                var c = 0 !== (4 & t),
                  d = !c && "scroll" === e,
                  h = c ? (null !== l ? l + "Capture" : null) : l;
                c = [];
                for (var f, p = r; null !== p; ) {
                  var m = (f = p).stateNode;
                  if (
                    (5 === f.tag &&
                      null !== m &&
                      ((f = m),
                      null !== h &&
                        null != (m = Pe(p, h)) &&
                        c.push($r(p, m, f))),
                    d)
                  )
                    break;
                  p = p.return;
                }
                0 < c.length &&
                  ((l = new s(l, u, null, n, a)),
                  i.push({ event: l, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((s = "mouseout" === e || "pointerout" === e),
                (!(l = "mouseover" === e || "pointerover" === e) ||
                  n === we ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!va(u) && !u[pa])) &&
                  (s || l) &&
                  ((l =
                    a.window === a
                      ? a
                      : (l = a.ownerDocument)
                      ? l.defaultView || l.parentWindow
                      : window),
                  s
                    ? ((s = r),
                      null !==
                        (u = (u = n.relatedTarget || n.toElement)
                          ? va(u)
                          : null) &&
                        (u !== (d = He(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((s = null), (u = r)),
                  s !== u))
              ) {
                if (
                  ((c = pn),
                  (m = "onMouseLeave"),
                  (h = "onMouseEnter"),
                  (p = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = Tn),
                    (m = "onPointerLeave"),
                    (h = "onPointerEnter"),
                    (p = "pointer")),
                  (d = null == s ? l : wa(s)),
                  (f = null == u ? l : wa(u)),
                  ((l = new c(m, p + "leave", s, n, a)).target = d),
                  (l.relatedTarget = f),
                  (m = null),
                  va(a) === r &&
                    (((c = new c(h, p + "enter", u, n, a)).target = f),
                    (c.relatedTarget = d),
                    (m = c)),
                  (d = m),
                  s && u)
                )
                  e: {
                    for (h = u, p = 0, f = c = s; f; f = Qr(f)) p++;
                    for (f = 0, m = h; m; m = Qr(m)) f++;
                    for (; 0 < p - f; ) (c = Qr(c)), p--;
                    for (; 0 < f - p; ) (h = Qr(h)), f--;
                    for (; p--; ) {
                      if (c === h || (null !== h && c === h.alternate)) break e;
                      (c = Qr(c)), (h = Qr(h));
                    }
                    c = null;
                  }
                else c = null;
                null !== s && Gr(i, l, s, c, !1),
                  null !== u && null !== d && Gr(i, d, u, c, !0);
              }
              if (
                "select" ===
                  (s =
                    (l = r ? wa(r) : window).nodeName &&
                    l.nodeName.toLowerCase()) ||
                ("input" === s && "file" === l.type)
              )
                var g = Jn;
              else if (Un(l))
                if (Kn) g = ir;
                else {
                  g = ar;
                  var y = rr;
                }
              else
                (s = l.nodeName) &&
                  "input" === s.toLowerCase() &&
                  ("checkbox" === l.type || "radio" === l.type) &&
                  (g = or);
              switch (
                (g && (g = g(e, r))
                  ? $n(i, g, n, a)
                  : (y && y(e, l, r),
                    "focusout" === e &&
                      (y = l._wrapperState) &&
                      y.controlled &&
                      "number" === l.type &&
                      ee(l, "number", l.value)),
                (y = r ? wa(r) : window),
                e)
              ) {
                case "focusin":
                  (Un(y) || "true" === y.contentEditable) &&
                    ((gr = y), (yr = r), (vr = null));
                  break;
                case "focusout":
                  vr = yr = gr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), wr(i, n, a);
                  break;
                case "selectionchange":
                  if (mr) break;
                case "keydown":
                case "keyup":
                  wr(i, n, a);
              }
              var v;
              if (Rn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Hn
                  ? Bn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (An &&
                  "ko" !== n.locale &&
                  (Hn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Hn && (v = en())
                    : ((Xt = "value" in (Kt = a) ? Kt.value : Kt.textContent),
                      (Hn = !0))),
                0 < (y = Vr(r, b)).length &&
                  ((b = new wn(b, e, null, n, a)),
                  i.push({ event: b, listeners: y }),
                  v ? (b.data = v) : null !== (v = Wn(n)) && (b.data = v))),
                (v = Dn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Wn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((On = !0), Mn);
                        case "textInput":
                          return (e = t.data) === Mn && On ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Hn)
                        return "compositionend" === e || (!Rn && Bn(e, t))
                          ? ((e = en()), (Zt = Xt = Kt = null), (Hn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return An && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Vr(r, "onBeforeInput")).length &&
                  ((a = new wn("onBeforeInput", "beforeinput", null, n, a)),
                  i.push({ event: a, listeners: r }),
                  (a.data = v));
            }
            Mr(i, t);
          });
        }
        function $r(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Vr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              o = a.stateNode;
            5 === a.tag &&
              null !== o &&
              ((a = o),
              null != (o = Pe(e, n)) && r.unshift($r(e, o, a)),
              null != (o = Pe(e, t)) && r.push($r(e, o, a))),
              (e = e.return);
          }
          return r;
        }
        function Qr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Gr(e, t, n, r, a) {
          for (var o = t._reactName, i = []; null !== n && n !== r; ) {
            var l = n,
              s = l.alternate,
              u = l.stateNode;
            if (null !== s && s === r) break;
            5 === l.tag &&
              null !== u &&
              ((l = u),
              a
                ? null != (s = Pe(n, o)) && i.unshift($r(n, s, l))
                : a || (null != (s = Pe(n, o)) && i.push($r(n, s, l)))),
              (n = n.return);
          }
          0 !== i.length && e.push({ event: t, listeners: i });
        }
        var Yr = /\r\n?/g,
          Jr = /\u0000|\uFFFD/g;
        function Kr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Yr, "\n")
            .replace(Jr, "");
        }
        function Xr(e, t, n) {
          if (((t = Kr(t)), Kr(e) !== t && n)) throw Error(o(425));
        }
        function Zr() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          oa = "function" === typeof Promise ? Promise : void 0,
          ia =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof oa
              ? function (e) {
                  return oa.resolve(null).then(e).catch(la);
                }
              : ra;
        function la(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function sa(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Ht(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          Ht(t);
        }
        function ua(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ca(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var da = Math.random().toString(36).slice(2),
          ha = "__reactFiber$" + da,
          fa = "__reactProps$" + da,
          pa = "__reactContainer$" + da,
          ma = "__reactEvents$" + da,
          ga = "__reactListeners$" + da,
          ya = "__reactHandles$" + da;
        function va(e) {
          var t = e[ha];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[pa] || n[ha])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ca(e); null !== e; ) {
                  if ((n = e[ha])) return n;
                  e = ca(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ba(e) {
          return !(e = e[ha] || e[pa]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function wa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(o(33));
        }
        function xa(e) {
          return e[fa] || null;
        }
        var ka = [],
          Sa = -1;
        function ja(e) {
          return { current: e };
        }
        function Ca(e) {
          0 > Sa || ((e.current = ka[Sa]), (ka[Sa] = null), Sa--);
        }
        function Ea(e, t) {
          Sa++, (ka[Sa] = e.current), (e.current = t);
        }
        var Na = {},
          Ta = ja(Na),
          Ia = ja(!1),
          za = Na;
        function _a(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Na;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            o = {};
          for (a in n) o[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            o
          );
        }
        function Pa(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function La() {
          Ca(Ia), Ca(Ta);
        }
        function Ra(e, t, n) {
          if (Ta.current !== Na) throw Error(o(168));
          Ea(Ta, t), Ea(Ia, n);
        }
        function Fa(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(o(108, q(e) || "Unknown", a));
          return A({}, n, r);
        }
        function Da(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Na),
            (za = Ta.current),
            Ea(Ta, e),
            Ea(Ia, Ia.current),
            !0
          );
        }
        function Aa(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(o(169));
          n
            ? ((e = Fa(e, t, za)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ca(Ia),
              Ca(Ta),
              Ea(Ta, e))
            : Ca(Ia),
            Ea(Ia, n);
        }
        var Ma = null,
          Oa = !1,
          Ba = !1;
        function Wa(e) {
          null === Ma ? (Ma = [e]) : Ma.push(e);
        }
        function Ha() {
          if (!Ba && null !== Ma) {
            Ba = !0;
            var e = 0,
              t = bt;
            try {
              var n = Ma;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Ma = null), (Oa = !1);
            } catch (a) {
              throw (null !== Ma && (Ma = Ma.slice(e + 1)), Qe(Ze, Ha), a);
            } finally {
              (bt = t), (Ba = !1);
            }
          }
          return null;
        }
        var qa = [],
          Ua = 0,
          $a = null,
          Va = 0,
          Qa = [],
          Ga = 0,
          Ya = null,
          Ja = 1,
          Ka = "";
        function Xa(e, t) {
          (qa[Ua++] = Va), (qa[Ua++] = $a), ($a = e), (Va = t);
        }
        function Za(e, t, n) {
          (Qa[Ga++] = Ja), (Qa[Ga++] = Ka), (Qa[Ga++] = Ya), (Ya = e);
          var r = Ja;
          e = Ka;
          var a = 32 - it(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var o = 32 - it(t) + a;
          if (30 < o) {
            var i = a - (a % 5);
            (o = (r & ((1 << i) - 1)).toString(32)),
              (r >>= i),
              (a -= i),
              (Ja = (1 << (32 - it(t) + a)) | (n << a) | r),
              (Ka = o + e);
          } else (Ja = (1 << o) | (n << a) | r), (Ka = e);
        }
        function eo(e) {
          null !== e.return && (Xa(e, 1), Za(e, 1, 0));
        }
        function to(e) {
          for (; e === $a; )
            ($a = qa[--Ua]), (qa[Ua] = null), (Va = qa[--Ua]), (qa[Ua] = null);
          for (; e === Ya; )
            (Ya = Qa[--Ga]),
              (Qa[Ga] = null),
              (Ka = Qa[--Ga]),
              (Qa[Ga] = null),
              (Ja = Qa[--Ga]),
              (Qa[Ga] = null);
        }
        var no = null,
          ro = null,
          ao = !1,
          oo = null;
        function io(e, t) {
          var n = Pu(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function lo(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (no = e), (ro = ua(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (no = e), (ro = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Ya ? { id: Ja, overflow: Ka } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Pu(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (no = e),
                (ro = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function so(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function uo(e) {
          if (ao) {
            var t = ro;
            if (t) {
              var n = t;
              if (!lo(e, t)) {
                if (so(e)) throw Error(o(418));
                t = ua(n.nextSibling);
                var r = no;
                t && lo(e, t)
                  ? io(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e));
              }
            } else {
              if (so(e)) throw Error(o(418));
              (e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e);
            }
          }
        }
        function co(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          no = e;
        }
        function ho(e) {
          if (e !== no) return !1;
          if (!ao) return co(e), (ao = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = ro))
          ) {
            if (so(e)) throw (fo(), Error(o(418)));
            for (; t; ) io(e, t), (t = ua(t.nextSibling));
          }
          if ((co(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(o(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      ro = ua(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              ro = null;
            }
          } else ro = no ? ua(e.stateNode.nextSibling) : null;
          return !0;
        }
        function fo() {
          for (var e = ro; e; ) e = ua(e.nextSibling);
        }
        function po() {
          (ro = no = null), (ao = !1);
        }
        function mo(e) {
          null === oo ? (oo = [e]) : oo.push(e);
        }
        var go = w.ReactCurrentBatchConfig;
        function yo(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = A({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var vo = ja(null),
          bo = null,
          wo = null,
          xo = null;
        function ko() {
          xo = wo = bo = null;
        }
        function So(e) {
          var t = vo.current;
          Ca(vo), (e._currentValue = t);
        }
        function jo(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Co(e, t) {
          (bo = e),
            (xo = wo = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (wl = !0), (e.firstContext = null));
        }
        function Eo(e) {
          var t = e._currentValue;
          if (xo !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === wo)
            ) {
              if (null === bo) throw Error(o(308));
              (wo = e), (bo.dependencies = { lanes: 0, firstContext: e });
            } else wo = wo.next = e;
          return t;
        }
        var No = null;
        function To(e) {
          null === No ? (No = [e]) : No.push(e);
        }
        function Io(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), To(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            zo(e, r)
          );
        }
        function zo(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var _o = !1;
        function Po(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Lo(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Ro(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Fo(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Is))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              zo(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), To(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            zo(e, n)
          );
        }
        function Do(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), vt(e, n);
          }
        }
        function Ao(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              o = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var i = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === o ? (a = o = i) : (o = o.next = i), (n = n.next);
              } while (null !== n);
              null === o ? (a = o = t) : (o = o.next = t);
            } else a = o = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: o,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Mo(e, t, n, r) {
          var a = e.updateQueue;
          _o = !1;
          var o = a.firstBaseUpdate,
            i = a.lastBaseUpdate,
            l = a.shared.pending;
          if (null !== l) {
            a.shared.pending = null;
            var s = l,
              u = s.next;
            (s.next = null), null === i ? (o = u) : (i.next = u), (i = s);
            var c = e.alternate;
            null !== c &&
              (l = (c = c.updateQueue).lastBaseUpdate) !== i &&
              (null === l ? (c.firstBaseUpdate = u) : (l.next = u),
              (c.lastBaseUpdate = s));
          }
          if (null !== o) {
            var d = a.baseState;
            for (i = 0, c = u = s = null, l = o; ; ) {
              var h = l.lane,
                f = l.eventTime;
              if ((r & h) === h) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: f,
                      lane: 0,
                      tag: l.tag,
                      payload: l.payload,
                      callback: l.callback,
                      next: null,
                    });
                e: {
                  var p = e,
                    m = l;
                  switch (((h = t), (f = n), m.tag)) {
                    case 1:
                      if ("function" === typeof (p = m.payload)) {
                        d = p.call(f, d, h);
                        break e;
                      }
                      d = p;
                      break e;
                    case 3:
                      p.flags = (-65537 & p.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (h =
                            "function" === typeof (p = m.payload)
                              ? p.call(f, d, h)
                              : p) ||
                        void 0 === h
                      )
                        break e;
                      d = A({}, d, h);
                      break e;
                    case 2:
                      _o = !0;
                  }
                }
                null !== l.callback &&
                  0 !== l.lane &&
                  ((e.flags |= 64),
                  null === (h = a.effects) ? (a.effects = [l]) : h.push(l));
              } else
                (f = {
                  eventTime: f,
                  lane: h,
                  tag: l.tag,
                  payload: l.payload,
                  callback: l.callback,
                  next: null,
                }),
                  null === c ? ((u = c = f), (s = d)) : (c = c.next = f),
                  (i |= h);
              if (null === (l = l.next)) {
                if (null === (l = a.shared.pending)) break;
                (l = (h = l).next),
                  (h.next = null),
                  (a.lastBaseUpdate = h),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === c && (s = d),
              (a.baseState = s),
              (a.firstBaseUpdate = u),
              (a.lastBaseUpdate = c),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (i |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === o && (a.shared.lanes = 0);
            (As |= i), (e.lanes = i), (e.memoizedState = d);
          }
        }
        function Oo(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a))
                  throw Error(o(191, a));
                a.call(r);
              }
            }
        }
        var Bo = new r.Component().refs;
        function Wo(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : A({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var Ho = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && He(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = tu(),
              a = nu(e),
              o = Ro(r, a);
            (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = Fo(e, o, a)) && (ru(t, e, a, r), Do(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = tu(),
              a = nu(e),
              o = Ro(r, a);
            (o.tag = 1),
              (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = Fo(e, o, a)) && (ru(t, e, a, r), Do(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = tu(),
              r = nu(e),
              a = Ro(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = Fo(e, a, r)) && (ru(t, e, r, n), Do(t, e, r));
          },
        };
        function qo(e, t, n, r, a, o, i) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, o, i)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !sr(n, r) ||
                !sr(a, o);
        }
        function Uo(e, t, n) {
          var r = !1,
            a = Na,
            o = t.contextType;
          return (
            "object" === typeof o && null !== o
              ? (o = Eo(o))
              : ((a = Pa(t) ? za : Ta.current),
                (o = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? _a(e, a)
                  : Na)),
            (t = new t(n, o)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Ho),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            t
          );
        }
        function $o(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Ho.enqueueReplaceState(t, t.state, null);
        }
        function Vo(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = Bo), Po(e);
          var o = t.contextType;
          "object" === typeof o && null !== o
            ? (a.context = Eo(o))
            : ((o = Pa(t) ? za : Ta.current), (a.context = _a(e, o))),
            (a.state = e.memoizedState),
            "function" === typeof (o = t.getDerivedStateFromProps) &&
              (Wo(e, t, o, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && Ho.enqueueReplaceState(a, a.state, null),
              Mo(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function Qo(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(o(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(o(147, e));
              var a = r,
                i = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    t === Bo && (t = a.refs = {}),
                      null === e ? delete t[i] : (t[i] = e);
                  }),
                  (t._stringRef = i),
                  t);
            }
            if ("string" !== typeof e) throw Error(o(284));
            if (!n._owner) throw Error(o(290, e));
          }
          return e;
        }
        function Go(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              o(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function Yo(e) {
          return (0, e._init)(e._payload);
        }
        function Jo(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = Ru(e, t)).index = 0), (e.sibling = null), e;
          }
          function i(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function l(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function s(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Mu(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function u(e, t, n, r) {
            var o = n.type;
            return o === S
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === o ||
                  ("object" === typeof o &&
                    null !== o &&
                    o.$$typeof === P &&
                    Yo(o) === t.type))
              ? (((r = a(t, n.props)).ref = Qo(e, t, n)), (r.return = e), r)
              : (((r = Fu(n.type, n.key, n.props, null, e.mode, r)).ref = Qo(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Ou(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, o) {
            return null === t || 7 !== t.tag
              ? (((t = Du(n, e.mode, r, o)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function h(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Mu("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case x:
                  return (
                    ((n = Fu(t.type, t.key, t.props, null, e.mode, n)).ref = Qo(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case k:
                  return ((t = Ou(t, e.mode, n)).return = e), t;
                case P:
                  return h(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || F(t))
                return ((t = Du(t, e.mode, n, null)).return = e), t;
              Go(e, t);
            }
            return null;
          }
          function f(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== a ? null : s(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case x:
                  return n.key === a ? u(e, t, n, r) : null;
                case k:
                  return n.key === a ? c(e, t, n, r) : null;
                case P:
                  return f(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || F(n)) return null !== a ? null : d(e, t, n, r, null);
              Go(e, n);
            }
            return null;
          }
          function p(e, t, n, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return s(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case x:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case k:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case P:
                  return p(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || F(r))
                return d(t, (e = e.get(n) || null), r, a, null);
              Go(t, r);
            }
            return null;
          }
          function m(a, o, l, s) {
            for (
              var u = null, c = null, d = o, m = (o = 0), g = null;
              null !== d && m < l.length;
              m++
            ) {
              d.index > m ? ((g = d), (d = null)) : (g = d.sibling);
              var y = f(a, d, l[m], s);
              if (null === y) {
                null === d && (d = g);
                break;
              }
              e && d && null === y.alternate && t(a, d),
                (o = i(y, o, m)),
                null === c ? (u = y) : (c.sibling = y),
                (c = y),
                (d = g);
            }
            if (m === l.length) return n(a, d), ao && Xa(a, m), u;
            if (null === d) {
              for (; m < l.length; m++)
                null !== (d = h(a, l[m], s)) &&
                  ((o = i(d, o, m)),
                  null === c ? (u = d) : (c.sibling = d),
                  (c = d));
              return ao && Xa(a, m), u;
            }
            for (d = r(a, d); m < l.length; m++)
              null !== (g = p(d, a, m, l[m], s)) &&
                (e &&
                  null !== g.alternate &&
                  d.delete(null === g.key ? m : g.key),
                (o = i(g, o, m)),
                null === c ? (u = g) : (c.sibling = g),
                (c = g));
            return (
              e &&
                d.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Xa(a, m),
              u
            );
          }
          function g(a, l, s, u) {
            var c = F(s);
            if ("function" !== typeof c) throw Error(o(150));
            if (null == (s = c.call(s))) throw Error(o(151));
            for (
              var d = (c = null), m = l, g = (l = 0), y = null, v = s.next();
              null !== m && !v.done;
              g++, v = s.next()
            ) {
              m.index > g ? ((y = m), (m = null)) : (y = m.sibling);
              var b = f(a, m, v.value, u);
              if (null === b) {
                null === m && (m = y);
                break;
              }
              e && m && null === b.alternate && t(a, m),
                (l = i(b, l, g)),
                null === d ? (c = b) : (d.sibling = b),
                (d = b),
                (m = y);
            }
            if (v.done) return n(a, m), ao && Xa(a, g), c;
            if (null === m) {
              for (; !v.done; g++, v = s.next())
                null !== (v = h(a, v.value, u)) &&
                  ((l = i(v, l, g)),
                  null === d ? (c = v) : (d.sibling = v),
                  (d = v));
              return ao && Xa(a, g), c;
            }
            for (m = r(a, m); !v.done; g++, v = s.next())
              null !== (v = p(m, a, g, v.value, u)) &&
                (e &&
                  null !== v.alternate &&
                  m.delete(null === v.key ? g : v.key),
                (l = i(v, l, g)),
                null === d ? (c = v) : (d.sibling = v),
                (d = v));
            return (
              e &&
                m.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Xa(a, g),
              c
            );
          }
          return function e(r, o, i, s) {
            if (
              ("object" === typeof i &&
                null !== i &&
                i.type === S &&
                null === i.key &&
                (i = i.props.children),
              "object" === typeof i && null !== i)
            ) {
              switch (i.$$typeof) {
                case x:
                  e: {
                    for (var u = i.key, c = o; null !== c; ) {
                      if (c.key === u) {
                        if ((u = i.type) === S) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((o = a(c, i.props.children)).return = r),
                              (r = o);
                            break e;
                          }
                        } else if (
                          c.elementType === u ||
                          ("object" === typeof u &&
                            null !== u &&
                            u.$$typeof === P &&
                            Yo(u) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((o = a(c, i.props)).ref = Qo(r, c, i)),
                            (o.return = r),
                            (r = o);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    i.type === S
                      ? (((o = Du(i.props.children, r.mode, s, i.key)).return =
                          r),
                        (r = o))
                      : (((s = Fu(
                          i.type,
                          i.key,
                          i.props,
                          null,
                          r.mode,
                          s
                        )).ref = Qo(r, o, i)),
                        (s.return = r),
                        (r = s));
                  }
                  return l(r);
                case k:
                  e: {
                    for (c = i.key; null !== o; ) {
                      if (o.key === c) {
                        if (
                          4 === o.tag &&
                          o.stateNode.containerInfo === i.containerInfo &&
                          o.stateNode.implementation === i.implementation
                        ) {
                          n(r, o.sibling),
                            ((o = a(o, i.children || [])).return = r),
                            (r = o);
                          break e;
                        }
                        n(r, o);
                        break;
                      }
                      t(r, o), (o = o.sibling);
                    }
                    ((o = Ou(i, r.mode, s)).return = r), (r = o);
                  }
                  return l(r);
                case P:
                  return e(r, o, (c = i._init)(i._payload), s);
              }
              if (te(i)) return m(r, o, i, s);
              if (F(i)) return g(r, o, i, s);
              Go(r, i);
            }
            return ("string" === typeof i && "" !== i) || "number" === typeof i
              ? ((i = "" + i),
                null !== o && 6 === o.tag
                  ? (n(r, o.sibling), ((o = a(o, i)).return = r), (r = o))
                  : (n(r, o), ((o = Mu(i, r.mode, s)).return = r), (r = o)),
                l(r))
              : n(r, o);
          };
        }
        var Ko = Jo(!0),
          Xo = Jo(!1),
          Zo = {},
          ei = ja(Zo),
          ti = ja(Zo),
          ni = ja(Zo);
        function ri(e) {
          if (e === Zo) throw Error(o(174));
          return e;
        }
        function ai(e, t) {
          switch ((Ea(ni, t), Ea(ti, e), Ea(ei, Zo), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : se(null, "");
              break;
            default:
              t = se(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Ca(ei), Ea(ei, t);
        }
        function oi() {
          Ca(ei), Ca(ti), Ca(ni);
        }
        function ii(e) {
          ri(ni.current);
          var t = ri(ei.current),
            n = se(t, e.type);
          t !== n && (Ea(ti, e), Ea(ei, n));
        }
        function li(e) {
          ti.current === e && (Ca(ei), Ca(ti));
        }
        var si = ja(0);
        function ui(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var ci = [];
        function di() {
          for (var e = 0; e < ci.length; e++)
            ci[e]._workInProgressVersionPrimary = null;
          ci.length = 0;
        }
        var hi = w.ReactCurrentDispatcher,
          fi = w.ReactCurrentBatchConfig,
          pi = 0,
          mi = null,
          gi = null,
          yi = null,
          vi = !1,
          bi = !1,
          wi = 0,
          xi = 0;
        function ki() {
          throw Error(o(321));
        }
        function Si(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!lr(e[n], t[n])) return !1;
          return !0;
        }
        function ji(e, t, n, r, a, i) {
          if (
            ((pi = i),
            (mi = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (hi.current = null === e || null === e.memoizedState ? ll : sl),
            (e = n(r, a)),
            bi)
          ) {
            i = 0;
            do {
              if (((bi = !1), (wi = 0), 25 <= i)) throw Error(o(301));
              (i += 1),
                (yi = gi = null),
                (t.updateQueue = null),
                (hi.current = ul),
                (e = n(r, a));
            } while (bi);
          }
          if (
            ((hi.current = il),
            (t = null !== gi && null !== gi.next),
            (pi = 0),
            (yi = gi = mi = null),
            (vi = !1),
            t)
          )
            throw Error(o(300));
          return e;
        }
        function Ci() {
          var e = 0 !== wi;
          return (wi = 0), e;
        }
        function Ei() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === yi ? (mi.memoizedState = yi = e) : (yi = yi.next = e), yi
          );
        }
        function Ni() {
          if (null === gi) {
            var e = mi.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = gi.next;
          var t = null === yi ? mi.memoizedState : yi.next;
          if (null !== t) (yi = t), (gi = e);
          else {
            if (null === e) throw Error(o(310));
            (e = {
              memoizedState: (gi = e).memoizedState,
              baseState: gi.baseState,
              baseQueue: gi.baseQueue,
              queue: gi.queue,
              next: null,
            }),
              null === yi ? (mi.memoizedState = yi = e) : (yi = yi.next = e);
          }
          return yi;
        }
        function Ti(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function Ii(e) {
          var t = Ni(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = gi,
            a = r.baseQueue,
            i = n.pending;
          if (null !== i) {
            if (null !== a) {
              var l = a.next;
              (a.next = i.next), (i.next = l);
            }
            (r.baseQueue = a = i), (n.pending = null);
          }
          if (null !== a) {
            (i = a.next), (r = r.baseState);
            var s = (l = null),
              u = null,
              c = i;
            do {
              var d = c.lane;
              if ((pi & d) === d)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var h = {
                  lane: d,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === u ? ((s = u = h), (l = r)) : (u = u.next = h),
                  (mi.lanes |= d),
                  (As |= d);
              }
              c = c.next;
            } while (null !== c && c !== i);
            null === u ? (l = r) : (u.next = s),
              lr(r, t.memoizedState) || (wl = !0),
              (t.memoizedState = r),
              (t.baseState = l),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (i = a.lane), (mi.lanes |= i), (As |= i), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function zi(e) {
          var t = Ni(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            i = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var l = (a = a.next);
            do {
              (i = e(i, l.action)), (l = l.next);
            } while (l !== a);
            lr(i, t.memoizedState) || (wl = !0),
              (t.memoizedState = i),
              null === t.baseQueue && (t.baseState = i),
              (n.lastRenderedState = i);
          }
          return [i, r];
        }
        function _i() {}
        function Pi(e, t) {
          var n = mi,
            r = Ni(),
            a = t(),
            i = !lr(r.memoizedState, a);
          if (
            (i && ((r.memoizedState = a), (wl = !0)),
            (r = r.queue),
            Ui(Fi.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              i ||
              (null !== yi && 1 & yi.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Oi(9, Ri.bind(null, n, r, a, t), void 0, null),
              null === zs)
            )
              throw Error(o(349));
            0 !== (30 & pi) || Li(n, t, a);
          }
          return a;
        }
        function Li(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = mi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (mi.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Ri(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Di(t) && Ai(e);
        }
        function Fi(e, t, n) {
          return n(function () {
            Di(t) && Ai(e);
          });
        }
        function Di(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !lr(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Ai(e) {
          var t = zo(e, 1);
          null !== t && ru(t, e, 1, -1);
        }
        function Mi(e) {
          var t = Ei();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Ti,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = nl.bind(null, mi, e)),
            [t.memoizedState, e]
          );
        }
        function Oi(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = mi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (mi.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Bi() {
          return Ni().memoizedState;
        }
        function Wi(e, t, n, r) {
          var a = Ei();
          (mi.flags |= e),
            (a.memoizedState = Oi(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Hi(e, t, n, r) {
          var a = Ni();
          r = void 0 === r ? null : r;
          var o = void 0;
          if (null !== gi) {
            var i = gi.memoizedState;
            if (((o = i.destroy), null !== r && Si(r, i.deps)))
              return void (a.memoizedState = Oi(t, n, o, r));
          }
          (mi.flags |= e), (a.memoizedState = Oi(1 | t, n, o, r));
        }
        function qi(e, t) {
          return Wi(8390656, 8, e, t);
        }
        function Ui(e, t) {
          return Hi(2048, 8, e, t);
        }
        function $i(e, t) {
          return Hi(4, 2, e, t);
        }
        function Vi(e, t) {
          return Hi(4, 4, e, t);
        }
        function Qi(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Gi(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Hi(4, 4, Qi.bind(null, t, e), n)
          );
        }
        function Yi() {}
        function Ji(e, t) {
          var n = Ni();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Si(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Ki(e, t) {
          var n = Ni();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Si(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Xi(e, t, n) {
          return 0 === (21 & pi)
            ? (e.baseState && ((e.baseState = !1), (wl = !0)),
              (e.memoizedState = n))
            : (lr(n, t) ||
                ((n = mt()), (mi.lanes |= n), (As |= n), (e.baseState = !0)),
              t);
        }
        function Zi(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = fi.transition;
          fi.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (fi.transition = r);
          }
        }
        function el() {
          return Ni().memoizedState;
        }
        function tl(e, t, n) {
          var r = nu(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            rl(e))
          )
            al(t, n);
          else if (null !== (n = Io(e, t, n, r))) {
            ru(n, e, r, tu()), ol(n, t, r);
          }
        }
        function nl(e, t, n) {
          var r = nu(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (rl(e)) al(t, a);
          else {
            var o = e.alternate;
            if (
              0 === e.lanes &&
              (null === o || 0 === o.lanes) &&
              null !== (o = t.lastRenderedReducer)
            )
              try {
                var i = t.lastRenderedState,
                  l = o(i, n);
                if (((a.hasEagerState = !0), (a.eagerState = l), lr(l, i))) {
                  var s = t.interleaved;
                  return (
                    null === s
                      ? ((a.next = a), To(t))
                      : ((a.next = s.next), (s.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (u) {}
            null !== (n = Io(e, t, a, r)) &&
              (ru(n, e, r, (a = tu())), ol(n, t, r));
          }
        }
        function rl(e) {
          var t = e.alternate;
          return e === mi || (null !== t && t === mi);
        }
        function al(e, t) {
          bi = vi = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function ol(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), vt(e, n);
          }
        }
        var il = {
            readContext: Eo,
            useCallback: ki,
            useContext: ki,
            useEffect: ki,
            useImperativeHandle: ki,
            useInsertionEffect: ki,
            useLayoutEffect: ki,
            useMemo: ki,
            useReducer: ki,
            useRef: ki,
            useState: ki,
            useDebugValue: ki,
            useDeferredValue: ki,
            useTransition: ki,
            useMutableSource: ki,
            useSyncExternalStore: ki,
            useId: ki,
            unstable_isNewReconciler: !1,
          },
          ll = {
            readContext: Eo,
            useCallback: function (e, t) {
              return (Ei().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Eo,
            useEffect: qi,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Wi(4194308, 4, Qi.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Wi(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Wi(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Ei();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = Ei();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = tl.bind(null, mi, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Ei().memoizedState = e);
            },
            useState: Mi,
            useDebugValue: Yi,
            useDeferredValue: function (e) {
              return (Ei().memoizedState = e);
            },
            useTransition: function () {
              var e = Mi(!1),
                t = e[0];
              return (
                (e = Zi.bind(null, e[1])), (Ei().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = mi,
                a = Ei();
              if (ao) {
                if (void 0 === n) throw Error(o(407));
                n = n();
              } else {
                if (((n = t()), null === zs)) throw Error(o(349));
                0 !== (30 & pi) || Li(r, t, n);
              }
              a.memoizedState = n;
              var i = { value: n, getSnapshot: t };
              return (
                (a.queue = i),
                qi(Fi.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                Oi(9, Ri.bind(null, r, i, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Ei(),
                t = zs.identifierPrefix;
              if (ao) {
                var n = Ka;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Ja & ~(1 << (32 - it(Ja) - 1))).toString(32) + n)),
                  0 < (n = wi++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = xi++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          sl = {
            readContext: Eo,
            useCallback: Ji,
            useContext: Eo,
            useEffect: Ui,
            useImperativeHandle: Gi,
            useInsertionEffect: $i,
            useLayoutEffect: Vi,
            useMemo: Ki,
            useReducer: Ii,
            useRef: Bi,
            useState: function () {
              return Ii(Ti);
            },
            useDebugValue: Yi,
            useDeferredValue: function (e) {
              return Xi(Ni(), gi.memoizedState, e);
            },
            useTransition: function () {
              return [Ii(Ti)[0], Ni().memoizedState];
            },
            useMutableSource: _i,
            useSyncExternalStore: Pi,
            useId: el,
            unstable_isNewReconciler: !1,
          },
          ul = {
            readContext: Eo,
            useCallback: Ji,
            useContext: Eo,
            useEffect: Ui,
            useImperativeHandle: Gi,
            useInsertionEffect: $i,
            useLayoutEffect: Vi,
            useMemo: Ki,
            useReducer: zi,
            useRef: Bi,
            useState: function () {
              return zi(Ti);
            },
            useDebugValue: Yi,
            useDeferredValue: function (e) {
              var t = Ni();
              return null === gi
                ? (t.memoizedState = e)
                : Xi(t, gi.memoizedState, e);
            },
            useTransition: function () {
              return [zi(Ti)[0], Ni().memoizedState];
            },
            useMutableSource: _i,
            useSyncExternalStore: Pi,
            useId: el,
            unstable_isNewReconciler: !1,
          };
        function cl(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += W(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (o) {
            a = "\nError generating stack: " + o.message + "\n" + o.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function dl(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function hl(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var fl = "function" === typeof WeakMap ? WeakMap : Map;
        function pl(e, t, n) {
          ((n = Ro(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              $s || (($s = !0), (Vs = r)), hl(0, t);
            }),
            n
          );
        }
        function ml(e, t, n) {
          (n = Ro(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                hl(0, t);
              });
          }
          var o = e.stateNode;
          return (
            null !== o &&
              "function" === typeof o.componentDidCatch &&
              (n.callback = function () {
                hl(0, t),
                  "function" !== typeof r &&
                    (null === Qs ? (Qs = new Set([this])) : Qs.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function gl(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new fl();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = Eu.bind(null, e, t, n)), t.then(e, e));
        }
        function yl(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function vl(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Ro(-1, 1)).tag = 2), Fo(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var bl = w.ReactCurrentOwner,
          wl = !1;
        function xl(e, t, n, r) {
          t.child = null === e ? Xo(t, null, n, r) : Ko(t, e.child, n, r);
        }
        function kl(e, t, n, r, a) {
          n = n.render;
          var o = t.ref;
          return (
            Co(t, a),
            (r = ji(e, t, n, r, o, a)),
            (n = Ci()),
            null === e || wl
              ? (ao && n && eo(t), (t.flags |= 1), xl(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                $l(e, t, a))
          );
        }
        function Sl(e, t, n, r, a) {
          if (null === e) {
            var o = n.type;
            return "function" !== typeof o ||
              Lu(o) ||
              void 0 !== o.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Fu(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = o), jl(e, t, o, r, a));
          }
          if (((o = e.child), 0 === (e.lanes & a))) {
            var i = o.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : sr)(i, r) &&
              e.ref === t.ref
            )
              return $l(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Ru(o, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function jl(e, t, n, r, a) {
          if (null !== e) {
            var o = e.memoizedProps;
            if (sr(o, r) && e.ref === t.ref) {
              if (((wl = !1), (t.pendingProps = r = o), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), $l(e, t, a);
              0 !== (131072 & e.flags) && (wl = !0);
            }
          }
          return Nl(e, t, n, r, a);
        }
        function Cl(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            o = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Ea(Rs, Ls),
                (Ls |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== o ? o.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Ea(Rs, Ls),
                  (Ls |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== o ? o.baseLanes : n),
                Ea(Rs, Ls),
                (Ls |= r);
            }
          else
            null !== o
              ? ((r = o.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Ea(Rs, Ls),
              (Ls |= r);
          return xl(e, t, a, n), t.child;
        }
        function El(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Nl(e, t, n, r, a) {
          var o = Pa(n) ? za : Ta.current;
          return (
            (o = _a(t, o)),
            Co(t, a),
            (n = ji(e, t, n, r, o, a)),
            (r = Ci()),
            null === e || wl
              ? (ao && r && eo(t), (t.flags |= 1), xl(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                $l(e, t, a))
          );
        }
        function Tl(e, t, n, r, a) {
          if (Pa(n)) {
            var o = !0;
            Da(t);
          } else o = !1;
          if ((Co(t, a), null === t.stateNode))
            Ul(e, t), Uo(t, n, r), Vo(t, n, r, a), (r = !0);
          else if (null === e) {
            var i = t.stateNode,
              l = t.memoizedProps;
            i.props = l;
            var s = i.context,
              u = n.contextType;
            "object" === typeof u && null !== u
              ? (u = Eo(u))
              : (u = _a(t, (u = Pa(n) ? za : Ta.current)));
            var c = n.getDerivedStateFromProps,
              d =
                "function" === typeof c ||
                "function" === typeof i.getSnapshotBeforeUpdate;
            d ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((l !== r || s !== u) && $o(t, i, r, u)),
              (_o = !1);
            var h = t.memoizedState;
            (i.state = h),
              Mo(t, r, i, a),
              (s = t.memoizedState),
              l !== r || h !== s || Ia.current || _o
                ? ("function" === typeof c &&
                    (Wo(t, n, c, r), (s = t.memoizedState)),
                  (l = _o || qo(t, n, l, r, h, s, u))
                    ? (d ||
                        ("function" !== typeof i.UNSAFE_componentWillMount &&
                          "function" !== typeof i.componentWillMount) ||
                        ("function" === typeof i.componentWillMount &&
                          i.componentWillMount(),
                        "function" === typeof i.UNSAFE_componentWillMount &&
                          i.UNSAFE_componentWillMount()),
                      "function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = s)),
                  (i.props = r),
                  (i.state = s),
                  (i.context = u),
                  (r = l))
                : ("function" === typeof i.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (i = t.stateNode),
              Lo(e, t),
              (l = t.memoizedProps),
              (u = t.type === t.elementType ? l : yo(t.type, l)),
              (i.props = u),
              (d = t.pendingProps),
              (h = i.context),
              "object" === typeof (s = n.contextType) && null !== s
                ? (s = Eo(s))
                : (s = _a(t, (s = Pa(n) ? za : Ta.current)));
            var f = n.getDerivedStateFromProps;
            (c =
              "function" === typeof f ||
              "function" === typeof i.getSnapshotBeforeUpdate) ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((l !== d || h !== s) && $o(t, i, r, s)),
              (_o = !1),
              (h = t.memoizedState),
              (i.state = h),
              Mo(t, r, i, a);
            var p = t.memoizedState;
            l !== d || h !== p || Ia.current || _o
              ? ("function" === typeof f &&
                  (Wo(t, n, f, r), (p = t.memoizedState)),
                (u = _o || qo(t, n, u, r, h, p, s) || !1)
                  ? (c ||
                      ("function" !== typeof i.UNSAFE_componentWillUpdate &&
                        "function" !== typeof i.componentWillUpdate) ||
                      ("function" === typeof i.componentWillUpdate &&
                        i.componentWillUpdate(r, p, s),
                      "function" === typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(r, p, s)),
                    "function" === typeof i.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof i.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof i.componentDidUpdate ||
                      (l === e.memoizedProps && h === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof i.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && h === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = p)),
                (i.props = r),
                (i.state = p),
                (i.context = s),
                (r = u))
              : ("function" !== typeof i.componentDidUpdate ||
                  (l === e.memoizedProps && h === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof i.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && h === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Il(e, t, n, r, o, a);
        }
        function Il(e, t, n, r, a, o) {
          El(e, t);
          var i = 0 !== (128 & t.flags);
          if (!r && !i) return a && Aa(t, n, !1), $l(e, t, o);
          (r = t.stateNode), (bl.current = t);
          var l =
            i && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && i
              ? ((t.child = Ko(t, e.child, null, o)),
                (t.child = Ko(t, null, l, o)))
              : xl(e, t, l, o),
            (t.memoizedState = r.state),
            a && Aa(t, n, !0),
            t.child
          );
        }
        function zl(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Ra(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Ra(0, t.context, !1),
            ai(e, t.containerInfo);
        }
        function _l(e, t, n, r, a) {
          return po(), mo(a), (t.flags |= 256), xl(e, t, n, r), t.child;
        }
        var Pl,
          Ll,
          Rl,
          Fl,
          Dl = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Al(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Ml(e, t, n) {
          var r,
            a = t.pendingProps,
            i = si.current,
            l = !1,
            s = 0 !== (128 & t.flags);
          if (
            ((r = s) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
            r
              ? ((l = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (i |= 1),
            Ea(si, 1 & i),
            null === e)
          )
            return (
              uo(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((s = a.children),
                  (e = a.fallback),
                  l
                    ? ((a = t.mode),
                      (l = t.child),
                      (s = { mode: "hidden", children: s }),
                      0 === (1 & a) && null !== l
                        ? ((l.childLanes = 0), (l.pendingProps = s))
                        : (l = Au(s, a, 0, null)),
                      (e = Du(e, a, n, null)),
                      (l.return = t),
                      (e.return = t),
                      (l.sibling = e),
                      (t.child = l),
                      (t.child.memoizedState = Al(n)),
                      (t.memoizedState = Dl),
                      e)
                    : Ol(t, s))
            );
          if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
            return (function (e, t, n, r, a, i, l) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Bl(e, t, l, (r = dl(Error(o(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((i = r.fallback),
                    (a = t.mode),
                    (r = Au(
                      { mode: "visible", children: r.children },
                      a,
                      0,
                      null
                    )),
                    ((i = Du(i, a, l, null)).flags |= 2),
                    (r.return = t),
                    (i.return = t),
                    (r.sibling = i),
                    (t.child = r),
                    0 !== (1 & t.mode) && Ko(t, e.child, null, l),
                    (t.child.memoizedState = Al(l)),
                    (t.memoizedState = Dl),
                    i);
              if (0 === (1 & t.mode)) return Bl(e, t, l, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var s = r.dgst;
                return (
                  (r = s), Bl(e, t, l, (r = dl((i = Error(o(419))), r, void 0)))
                );
              }
              if (((s = 0 !== (l & e.childLanes)), wl || s)) {
                if (null !== (r = zs)) {
                  switch (l & -l) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | l)) ? 0 : a) &&
                    a !== i.retryLane &&
                    ((i.retryLane = a), zo(e, a), ru(r, e, a, -1));
                }
                return gu(), Bl(e, t, l, (r = dl(Error(o(421)))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Tu.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = i.treeContext),
                  (ro = ua(a.nextSibling)),
                  (no = t),
                  (ao = !0),
                  (oo = null),
                  null !== e &&
                    ((Qa[Ga++] = Ja),
                    (Qa[Ga++] = Ka),
                    (Qa[Ga++] = Ya),
                    (Ja = e.id),
                    (Ka = e.overflow),
                    (Ya = t)),
                  (t = Ol(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, s, a, r, i, n);
          if (l) {
            (l = a.fallback), (s = t.mode), (r = (i = e.child).sibling);
            var u = { mode: "hidden", children: a.children };
            return (
              0 === (1 & s) && t.child !== i
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = u),
                  (t.deletions = null))
                : ((a = Ru(i, u)).subtreeFlags = 14680064 & i.subtreeFlags),
              null !== r
                ? (l = Ru(r, l))
                : ((l = Du(l, s, n, null)).flags |= 2),
              (l.return = t),
              (a.return = t),
              (a.sibling = l),
              (t.child = a),
              (a = l),
              (l = t.child),
              (s =
                null === (s = e.child.memoizedState)
                  ? Al(n)
                  : {
                      baseLanes: s.baseLanes | n,
                      cachePool: null,
                      transitions: s.transitions,
                    }),
              (l.memoizedState = s),
              (l.childLanes = e.childLanes & ~n),
              (t.memoizedState = Dl),
              a
            );
          }
          return (
            (e = (l = e.child).sibling),
            (a = Ru(l, { mode: "visible", children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function Ol(e, t) {
          return (
            ((t = Au(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Bl(e, t, n, r) {
          return (
            null !== r && mo(r),
            Ko(t, e.child, null, n),
            ((e = Ol(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Wl(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), jo(e.return, t, n);
        }
        function Hl(e, t, n, r, a) {
          var o = e.memoizedState;
          null === o
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((o.isBackwards = t),
              (o.rendering = null),
              (o.renderingStartTime = 0),
              (o.last = r),
              (o.tail = n),
              (o.tailMode = a));
        }
        function ql(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            o = r.tail;
          if ((xl(e, t, r.children, n), 0 !== (2 & (r = si.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Wl(e, n, t);
                else if (19 === e.tag) Wl(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Ea(si, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === ui(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Hl(t, !1, a, n, o);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === ui(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Hl(t, !0, n, null, o);
                break;
              case "together":
                Hl(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Ul(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function $l(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (As |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(o(153));
          if (null !== t.child) {
            for (
              n = Ru((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Ru(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Vl(e, t) {
          if (!ao)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Ql(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Gl(e, t, n) {
          var r = t.pendingProps;
          switch ((to(t), t.tag)) {
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
              return Ql(t), null;
            case 1:
            case 17:
              return Pa(t.type) && La(), Ql(t), null;
            case 3:
              return (
                (r = t.stateNode),
                oi(),
                Ca(Ia),
                Ca(Ta),
                di(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (ho(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== oo && (lu(oo), (oo = null)))),
                Ll(e, t),
                Ql(t),
                null
              );
            case 5:
              li(t);
              var a = ri(ni.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Rl(e, t, n, r, a),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(o(166));
                  return Ql(t), null;
                }
                if (((e = ri(ei.current)), ho(t))) {
                  (r = t.stateNode), (n = t.type);
                  var i = t.memoizedProps;
                  switch (
                    ((r[ha] = t), (r[fa] = i), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Or("cancel", r), Or("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Or("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Fr.length; a++) Or(Fr[a], r);
                      break;
                    case "source":
                      Or("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Or("error", r), Or("load", r);
                      break;
                    case "details":
                      Or("toggle", r);
                      break;
                    case "input":
                      J(r, i), Or("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!i.multiple }),
                        Or("invalid", r);
                      break;
                    case "textarea":
                      ae(r, i), Or("invalid", r);
                  }
                  for (var s in (ve(n, i), (a = null), i))
                    if (i.hasOwnProperty(s)) {
                      var u = i[s];
                      "children" === s
                        ? "string" === typeof u
                          ? r.textContent !== u &&
                            (!0 !== i.suppressHydrationWarning &&
                              Xr(r.textContent, u, e),
                            (a = ["children", u]))
                          : "number" === typeof u &&
                            r.textContent !== "" + u &&
                            (!0 !== i.suppressHydrationWarning &&
                              Xr(r.textContent, u, e),
                            (a = ["children", "" + u]))
                        : l.hasOwnProperty(s) &&
                          null != u &&
                          "onScroll" === s &&
                          Or("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      V(r), Z(r, i, !0);
                      break;
                    case "textarea":
                      V(r), ie(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof i.onClick && (r.onclick = Zr);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (s = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = le(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = s.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = s.createElement(n, { is: r.is }))
                        : ((e = s.createElement(n)),
                          "select" === n &&
                            ((s = e),
                            r.multiple
                              ? (s.multiple = !0)
                              : r.size && (s.size = r.size)))
                      : (e = s.createElementNS(e, n)),
                    (e[ha] = t),
                    (e[fa] = r),
                    Pl(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((s = be(n, r)), n)) {
                      case "dialog":
                        Or("cancel", e), Or("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Or("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < Fr.length; a++) Or(Fr[a], e);
                        a = r;
                        break;
                      case "source":
                        Or("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Or("error", e), Or("load", e), (a = r);
                        break;
                      case "details":
                        Or("toggle", e), (a = r);
                        break;
                      case "input":
                        J(e, r), (a = Y(e, r)), Or("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = A({}, r, { value: void 0 })),
                          Or("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), Or("invalid", e);
                    }
                    for (i in (ve(n, a), (u = a)))
                      if (u.hasOwnProperty(i)) {
                        var c = u[i];
                        "style" === i
                          ? ge(e, c)
                          : "dangerouslySetInnerHTML" === i
                          ? null != (c = c ? c.__html : void 0) && de(e, c)
                          : "children" === i
                          ? "string" === typeof c
                            ? ("textarea" !== n || "" !== c) && he(e, c)
                            : "number" === typeof c && he(e, "" + c)
                          : "suppressContentEditableWarning" !== i &&
                            "suppressHydrationWarning" !== i &&
                            "autoFocus" !== i &&
                            (l.hasOwnProperty(i)
                              ? null != c && "onScroll" === i && Or("scroll", e)
                              : null != c && b(e, i, c, s));
                      }
                    switch (n) {
                      case "input":
                        V(e), Z(e, r, !1);
                        break;
                      case "textarea":
                        V(e), ie(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + U(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (i = r.value)
                            ? ne(e, !!r.multiple, i, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = Zr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Ql(t), null;
            case 6:
              if (e && null != t.stateNode) Fl(e, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(o(166));
                if (((n = ri(ni.current)), ri(ei.current), ho(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[ha] = t),
                    (i = r.nodeValue !== n) && null !== (e = no))
                  )
                    switch (e.tag) {
                      case 3:
                        Xr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Xr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  i && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[ha] = t),
                    (t.stateNode = r);
              }
              return Ql(t), null;
            case 13:
              if (
                (Ca(si),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  ao &&
                  null !== ro &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  fo(), po(), (t.flags |= 98560), (i = !1);
                else if (((i = ho(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!i) throw Error(o(318));
                    if (
                      !(i =
                        null !== (i = t.memoizedState) ? i.dehydrated : null)
                    )
                      throw Error(o(317));
                    i[ha] = t;
                  } else
                    po(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Ql(t), (i = !1);
                } else null !== oo && (lu(oo), (oo = null)), (i = !0);
                if (!i) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & si.current)
                        ? 0 === Fs && (Fs = 3)
                        : gu())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Ql(t),
                  null);
            case 4:
              return (
                oi(),
                Ll(e, t),
                null === e && Hr(t.stateNode.containerInfo),
                Ql(t),
                null
              );
            case 10:
              return So(t.type._context), Ql(t), null;
            case 19:
              if ((Ca(si), null === (i = t.memoizedState))) return Ql(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (s = i.rendering)))
                if (r) Vl(i, !1);
                else {
                  if (0 !== Fs || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (s = ui(e))) {
                        for (
                          t.flags |= 128,
                            Vl(i, !1),
                            null !== (r = s.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((i = n).flags &= 14680066),
                            null === (s = i.alternate)
                              ? ((i.childLanes = 0),
                                (i.lanes = e),
                                (i.child = null),
                                (i.subtreeFlags = 0),
                                (i.memoizedProps = null),
                                (i.memoizedState = null),
                                (i.updateQueue = null),
                                (i.dependencies = null),
                                (i.stateNode = null))
                              : ((i.childLanes = s.childLanes),
                                (i.lanes = s.lanes),
                                (i.child = s.child),
                                (i.subtreeFlags = 0),
                                (i.deletions = null),
                                (i.memoizedProps = s.memoizedProps),
                                (i.memoizedState = s.memoizedState),
                                (i.updateQueue = s.updateQueue),
                                (i.type = s.type),
                                (e = s.dependencies),
                                (i.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Ea(si, (1 & si.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== i.tail &&
                    Ke() > qs &&
                    ((t.flags |= 128),
                    (r = !0),
                    Vl(i, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = ui(s))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Vl(i, !0),
                      null === i.tail &&
                        "hidden" === i.tailMode &&
                        !s.alternate &&
                        !ao)
                    )
                      return Ql(t), null;
                  } else
                    2 * Ke() - i.renderingStartTime > qs &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Vl(i, !1),
                      (t.lanes = 4194304));
                i.isBackwards
                  ? ((s.sibling = t.child), (t.child = s))
                  : (null !== (n = i.last) ? (n.sibling = s) : (t.child = s),
                    (i.last = s));
              }
              return null !== i.tail
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = Ke()),
                  (t.sibling = null),
                  (n = si.current),
                  Ea(si, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Ql(t), null);
            case 22:
            case 23:
              return (
                hu(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Ls) &&
                    (Ql(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Ql(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(o(156, t.tag));
        }
        function Yl(e, t) {
          switch ((to(t), t.tag)) {
            case 1:
              return (
                Pa(t.type) && La(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                oi(),
                Ca(Ia),
                Ca(Ta),
                di(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return li(t), null;
            case 13:
              if (
                (Ca(si),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(o(340));
                po();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Ca(si), null;
            case 4:
              return oi(), null;
            case 10:
              return So(t.type._context), null;
            case 22:
            case 23:
              return hu(), null;
            default:
              return null;
          }
        }
        (Pl = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Ll = function () {}),
          (Rl = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), ri(ei.current);
              var o,
                i = null;
              switch (n) {
                case "input":
                  (a = Y(e, a)), (r = Y(e, r)), (i = []);
                  break;
                case "select":
                  (a = A({}, a, { value: void 0 })),
                    (r = A({}, r, { value: void 0 })),
                    (i = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (i = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Zr);
              }
              for (c in (ve(n, r), (n = null), a))
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                  if ("style" === c) {
                    var s = a[c];
                    for (o in s)
                      s.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (l.hasOwnProperty(c)
                        ? i || (i = [])
                        : (i = i || []).push(c, null));
              for (c in r) {
                var u = r[c];
                if (
                  ((s = null != a ? a[c] : void 0),
                  r.hasOwnProperty(c) && u !== s && (null != u || null != s))
                )
                  if ("style" === c)
                    if (s) {
                      for (o in s)
                        !s.hasOwnProperty(o) ||
                          (u && u.hasOwnProperty(o)) ||
                          (n || (n = {}), (n[o] = ""));
                      for (o in u)
                        u.hasOwnProperty(o) &&
                          s[o] !== u[o] &&
                          (n || (n = {}), (n[o] = u[o]));
                    } else n || (i || (i = []), i.push(c, n)), (n = u);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((u = u ? u.__html : void 0),
                        (s = s ? s.__html : void 0),
                        null != u && s !== u && (i = i || []).push(c, u))
                      : "children" === c
                      ? ("string" !== typeof u && "number" !== typeof u) ||
                        (i = i || []).push(c, "" + u)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (l.hasOwnProperty(c)
                          ? (null != u && "onScroll" === c && Or("scroll", e),
                            i || s === u || (i = []))
                          : (i = i || []).push(c, u));
              }
              n && (i = i || []).push("style", n);
              var c = i;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Fl = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Jl = !1,
          Kl = !1,
          Xl = "function" === typeof WeakSet ? WeakSet : Set,
          Zl = null;
        function es(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                Cu(e, t, r);
              }
            else n.current = null;
        }
        function ts(e, t, n) {
          try {
            n();
          } catch (r) {
            Cu(e, t, r);
          }
        }
        var ns = !1;
        function rs(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var o = a.destroy;
                (a.destroy = void 0), void 0 !== o && ts(t, n, o);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function as(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function os(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function is(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), is(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[ha],
              delete t[fa],
              delete t[ma],
              delete t[ga],
              delete t[ya]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function ls(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function ss(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || ls(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function us(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Zr));
          else if (4 !== r && null !== (e = e.child))
            for (us(e, t, n), e = e.sibling; null !== e; )
              us(e, t, n), (e = e.sibling);
        }
        function cs(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (cs(e, t, n), e = e.sibling; null !== e; )
              cs(e, t, n), (e = e.sibling);
        }
        var ds = null,
          hs = !1;
        function fs(e, t, n) {
          for (n = n.child; null !== n; ) ps(e, t, n), (n = n.sibling);
        }
        function ps(e, t, n) {
          if (ot && "function" === typeof ot.onCommitFiberUnmount)
            try {
              ot.onCommitFiberUnmount(at, n);
            } catch (l) {}
          switch (n.tag) {
            case 5:
              Kl || es(n, t);
            case 6:
              var r = ds,
                a = hs;
              (ds = null),
                fs(e, t, n),
                (hs = a),
                null !== (ds = r) &&
                  (hs
                    ? ((e = ds),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : ds.removeChild(n.stateNode));
              break;
            case 18:
              null !== ds &&
                (hs
                  ? ((e = ds),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? sa(e.parentNode, n)
                      : 1 === e.nodeType && sa(e, n),
                    Ht(e))
                  : sa(ds, n.stateNode));
              break;
            case 4:
              (r = ds),
                (a = hs),
                (ds = n.stateNode.containerInfo),
                (hs = !0),
                fs(e, t, n),
                (ds = r),
                (hs = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Kl &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var o = a,
                    i = o.destroy;
                  (o = o.tag),
                    void 0 !== i &&
                      (0 !== (2 & o) || 0 !== (4 & o)) &&
                      ts(n, t, i),
                    (a = a.next);
                } while (a !== r);
              }
              fs(e, t, n);
              break;
            case 1:
              if (
                !Kl &&
                (es(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (l) {
                  Cu(n, t, l);
                }
              fs(e, t, n);
              break;
            case 21:
              fs(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Kl = (r = Kl) || null !== n.memoizedState),
                  fs(e, t, n),
                  (Kl = r))
                : fs(e, t, n);
              break;
            default:
              fs(e, t, n);
          }
        }
        function ms(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Xl()),
              t.forEach(function (t) {
                var r = Iu.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function gs(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var i = e,
                  l = t,
                  s = l;
                e: for (; null !== s; ) {
                  switch (s.tag) {
                    case 5:
                      (ds = s.stateNode), (hs = !1);
                      break e;
                    case 3:
                    case 4:
                      (ds = s.stateNode.containerInfo), (hs = !0);
                      break e;
                  }
                  s = s.return;
                }
                if (null === ds) throw Error(o(160));
                ps(i, l, a), (ds = null), (hs = !1);
                var u = a.alternate;
                null !== u && (u.return = null), (a.return = null);
              } catch (c) {
                Cu(a, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) ys(t, e), (t = t.sibling);
        }
        function ys(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((gs(t, e), vs(e), 4 & r)) {
                try {
                  rs(3, e, e.return), as(3, e);
                } catch (g) {
                  Cu(e, e.return, g);
                }
                try {
                  rs(5, e, e.return);
                } catch (g) {
                  Cu(e, e.return, g);
                }
              }
              break;
            case 1:
              gs(t, e), vs(e), 512 & r && null !== n && es(n, n.return);
              break;
            case 5:
              if (
                (gs(t, e),
                vs(e),
                512 & r && null !== n && es(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  he(a, "");
                } catch (g) {
                  Cu(e, e.return, g);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var i = e.memoizedProps,
                  l = null !== n ? n.memoizedProps : i,
                  s = e.type,
                  u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                  try {
                    "input" === s &&
                      "radio" === i.type &&
                      null != i.name &&
                      K(a, i),
                      be(s, l);
                    var c = be(s, i);
                    for (l = 0; l < u.length; l += 2) {
                      var d = u[l],
                        h = u[l + 1];
                      "style" === d
                        ? ge(a, h)
                        : "dangerouslySetInnerHTML" === d
                        ? de(a, h)
                        : "children" === d
                        ? he(a, h)
                        : b(a, d, h, c);
                    }
                    switch (s) {
                      case "input":
                        X(a, i);
                        break;
                      case "textarea":
                        oe(a, i);
                        break;
                      case "select":
                        var f = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!i.multiple;
                        var p = i.value;
                        null != p
                          ? ne(a, !!i.multiple, p, !1)
                          : f !== !!i.multiple &&
                            (null != i.defaultValue
                              ? ne(a, !!i.multiple, i.defaultValue, !0)
                              : ne(a, !!i.multiple, i.multiple ? [] : "", !1));
                    }
                    a[fa] = i;
                  } catch (g) {
                    Cu(e, e.return, g);
                  }
              }
              break;
            case 6:
              if ((gs(t, e), vs(e), 4 & r)) {
                if (null === e.stateNode) throw Error(o(162));
                (a = e.stateNode), (i = e.memoizedProps);
                try {
                  a.nodeValue = i;
                } catch (g) {
                  Cu(e, e.return, g);
                }
              }
              break;
            case 3:
              if (
                (gs(t, e),
                vs(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Ht(t.containerInfo);
                } catch (g) {
                  Cu(e, e.return, g);
                }
              break;
            case 4:
            default:
              gs(t, e), vs(e);
              break;
            case 13:
              gs(t, e),
                vs(e),
                8192 & (a = e.child).flags &&
                  ((i = null !== a.memoizedState),
                  (a.stateNode.isHidden = i),
                  !i ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Hs = Ke())),
                4 & r && ms(e);
              break;
            case 22:
              if (
                ((d = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Kl = (c = Kl) || d), gs(t, e), (Kl = c))
                  : gs(t, e),
                vs(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !d && 0 !== (1 & e.mode))
                )
                  for (Zl = e, d = e.child; null !== d; ) {
                    for (h = Zl = d; null !== Zl; ) {
                      switch (((p = (f = Zl).child), f.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          rs(4, f, f.return);
                          break;
                        case 1:
                          es(f, f.return);
                          var m = f.stateNode;
                          if ("function" === typeof m.componentWillUnmount) {
                            (r = f), (n = f.return);
                            try {
                              (t = r),
                                (m.props = t.memoizedProps),
                                (m.state = t.memoizedState),
                                m.componentWillUnmount();
                            } catch (g) {
                              Cu(r, n, g);
                            }
                          }
                          break;
                        case 5:
                          es(f, f.return);
                          break;
                        case 22:
                          if (null !== f.memoizedState) {
                            ks(h);
                            continue;
                          }
                      }
                      null !== p ? ((p.return = f), (Zl = p)) : ks(h);
                    }
                    d = d.sibling;
                  }
                e: for (d = null, h = e; ; ) {
                  if (5 === h.tag) {
                    if (null === d) {
                      d = h;
                      try {
                        (a = h.stateNode),
                          c
                            ? "function" === typeof (i = a.style).setProperty
                              ? i.setProperty("display", "none", "important")
                              : (i.display = "none")
                            : ((s = h.stateNode),
                              (l =
                                void 0 !== (u = h.memoizedProps.style) &&
                                null !== u &&
                                u.hasOwnProperty("display")
                                  ? u.display
                                  : null),
                              (s.style.display = me("display", l)));
                      } catch (g) {
                        Cu(e, e.return, g);
                      }
                    }
                  } else if (6 === h.tag) {
                    if (null === d)
                      try {
                        h.stateNode.nodeValue = c ? "" : h.memoizedProps;
                      } catch (g) {
                        Cu(e, e.return, g);
                      }
                  } else if (
                    ((22 !== h.tag && 23 !== h.tag) ||
                      null === h.memoizedState ||
                      h === e) &&
                    null !== h.child
                  ) {
                    (h.child.return = h), (h = h.child);
                    continue;
                  }
                  if (h === e) break e;
                  for (; null === h.sibling; ) {
                    if (null === h.return || h.return === e) break e;
                    d === h && (d = null), (h = h.return);
                  }
                  d === h && (d = null),
                    (h.sibling.return = h.return),
                    (h = h.sibling);
                }
              }
              break;
            case 19:
              gs(t, e), vs(e), 4 & r && ms(e);
            case 21:
          }
        }
        function vs(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (ls(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(o(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (he(a, ""), (r.flags &= -33)),
                    cs(e, ss(e), a);
                  break;
                case 3:
                case 4:
                  var i = r.stateNode.containerInfo;
                  us(e, ss(e), i);
                  break;
                default:
                  throw Error(o(161));
              }
            } catch (l) {
              Cu(e, e.return, l);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function bs(e, t, n) {
          (Zl = e), ws(e, t, n);
        }
        function ws(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Zl; ) {
            var a = Zl,
              o = a.child;
            if (22 === a.tag && r) {
              var i = null !== a.memoizedState || Jl;
              if (!i) {
                var l = a.alternate,
                  s = (null !== l && null !== l.memoizedState) || Kl;
                l = Jl;
                var u = Kl;
                if (((Jl = i), (Kl = s) && !u))
                  for (Zl = a; null !== Zl; )
                    (s = (i = Zl).child),
                      22 === i.tag && null !== i.memoizedState
                        ? Ss(a)
                        : null !== s
                        ? ((s.return = i), (Zl = s))
                        : Ss(a);
                for (; null !== o; ) (Zl = o), ws(o, t, n), (o = o.sibling);
                (Zl = a), (Jl = l), (Kl = u);
              }
              xs(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== o
                ? ((o.return = a), (Zl = o))
                : xs(e);
          }
        }
        function xs(e) {
          for (; null !== Zl; ) {
            var t = Zl;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Kl || as(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Kl)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : yo(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var i = t.updateQueue;
                      null !== i && Oo(t, i, r);
                      break;
                    case 3:
                      var l = t.updateQueue;
                      if (null !== l) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Oo(t, l, n);
                      }
                      break;
                    case 5:
                      var s = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = s;
                        var u = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            u.autoFocus && n.focus();
                            break;
                          case "img":
                            u.src && (n.src = u.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var d = c.memoizedState;
                          if (null !== d) {
                            var h = d.dehydrated;
                            null !== h && Ht(h);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(o(163));
                  }
                Kl || (512 & t.flags && os(t));
              } catch (f) {
                Cu(t, t.return, f);
              }
            }
            if (t === e) {
              Zl = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Zl = n);
              break;
            }
            Zl = t.return;
          }
        }
        function ks(e) {
          for (; null !== Zl; ) {
            var t = Zl;
            if (t === e) {
              Zl = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Zl = n);
              break;
            }
            Zl = t.return;
          }
        }
        function Ss(e) {
          for (; null !== Zl; ) {
            var t = Zl;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    as(4, t);
                  } catch (s) {
                    Cu(t, n, s);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (s) {
                      Cu(t, a, s);
                    }
                  }
                  var o = t.return;
                  try {
                    os(t);
                  } catch (s) {
                    Cu(t, o, s);
                  }
                  break;
                case 5:
                  var i = t.return;
                  try {
                    os(t);
                  } catch (s) {
                    Cu(t, i, s);
                  }
              }
            } catch (s) {
              Cu(t, t.return, s);
            }
            if (t === e) {
              Zl = null;
              break;
            }
            var l = t.sibling;
            if (null !== l) {
              (l.return = t.return), (Zl = l);
              break;
            }
            Zl = t.return;
          }
        }
        var js,
          Cs = Math.ceil,
          Es = w.ReactCurrentDispatcher,
          Ns = w.ReactCurrentOwner,
          Ts = w.ReactCurrentBatchConfig,
          Is = 0,
          zs = null,
          _s = null,
          Ps = 0,
          Ls = 0,
          Rs = ja(0),
          Fs = 0,
          Ds = null,
          As = 0,
          Ms = 0,
          Os = 0,
          Bs = null,
          Ws = null,
          Hs = 0,
          qs = 1 / 0,
          Us = null,
          $s = !1,
          Vs = null,
          Qs = null,
          Gs = !1,
          Ys = null,
          Js = 0,
          Ks = 0,
          Xs = null,
          Zs = -1,
          eu = 0;
        function tu() {
          return 0 !== (6 & Is) ? Ke() : -1 !== Zs ? Zs : (Zs = Ke());
        }
        function nu(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Is) && 0 !== Ps
            ? Ps & -Ps
            : null !== go.transition
            ? (0 === eu && (eu = mt()), eu)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Jt(e.type));
        }
        function ru(e, t, n, r) {
          if (50 < Ks) throw ((Ks = 0), (Xs = null), Error(o(185)));
          yt(e, n, r),
            (0 !== (2 & Is) && e === zs) ||
              (e === zs && (0 === (2 & Is) && (Ms |= n), 4 === Fs && su(e, Ps)),
              au(e, r),
              1 === n &&
                0 === Is &&
                0 === (1 & t.mode) &&
                ((qs = Ke() + 500), Oa && Ha()));
        }
        function au(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                o = e.pendingLanes;
              0 < o;

            ) {
              var i = 31 - it(o),
                l = 1 << i,
                s = a[i];
              -1 === s
                ? (0 !== (l & n) && 0 === (l & r)) || (a[i] = ft(l, t))
                : s <= t && (e.expiredLanes |= l),
                (o &= ~l);
            }
          })(e, t);
          var r = ht(e, e === zs ? Ps : 0);
          if (0 === r)
            null !== n && Ge(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Ge(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Oa = !0), Wa(e);
                  })(uu.bind(null, e))
                : Wa(uu.bind(null, e)),
                ia(function () {
                  0 === (6 & Is) && Ha();
                }),
                (n = null);
            else {
              switch (wt(r)) {
                case 1:
                  n = Ze;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = zu(n, ou.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function ou(e, t) {
          if (((Zs = -1), (eu = 0), 0 !== (6 & Is))) throw Error(o(327));
          var n = e.callbackNode;
          if (Su() && e.callbackNode !== n) return null;
          var r = ht(e, e === zs ? Ps : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = yu(e, r);
          else {
            t = r;
            var a = Is;
            Is |= 2;
            var i = mu();
            for (
              (zs === e && Ps === t) ||
              ((Us = null), (qs = Ke() + 500), fu(e, t));
              ;

            )
              try {
                bu();
                break;
              } catch (s) {
                pu(e, s);
              }
            ko(),
              (Es.current = i),
              (Is = a),
              null !== _s ? (t = 0) : ((zs = null), (Ps = 0), (t = Fs));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = pt(e)) && ((r = a), (t = iu(e, a))),
              1 === t)
            )
              throw ((n = Ds), fu(e, 0), su(e, r), au(e, Ke()), n);
            if (6 === t) su(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              o = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!lr(o(), a)) return !1;
                            } catch (l) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = yu(e, r)) &&
                    0 !== (i = pt(e)) &&
                    ((r = i), (t = iu(e, i))),
                  1 === t))
              )
                throw ((n = Ds), fu(e, 0), su(e, r), au(e, Ke()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(o(345));
                case 2:
                case 5:
                  ku(e, Ws, Us);
                  break;
                case 3:
                  if (
                    (su(e, r),
                    (130023424 & r) === r && 10 < (t = Hs + 500 - Ke()))
                  ) {
                    if (0 !== ht(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      tu(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(ku.bind(null, e, Ws, Us), t);
                    break;
                  }
                  ku(e, Ws, Us);
                  break;
                case 4:
                  if ((su(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var l = 31 - it(r);
                    (i = 1 << l), (l = t[l]) > a && (a = l), (r &= ~i);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Ke() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * Cs(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(ku.bind(null, e, Ws, Us), r);
                    break;
                  }
                  ku(e, Ws, Us);
                  break;
                default:
                  throw Error(o(329));
              }
            }
          }
          return au(e, Ke()), e.callbackNode === n ? ou.bind(null, e) : null;
        }
        function iu(e, t) {
          var n = Bs;
          return (
            e.current.memoizedState.isDehydrated && (fu(e, t).flags |= 256),
            2 !== (e = yu(e, t)) && ((t = Ws), (Ws = n), null !== t && lu(t)),
            e
          );
        }
        function lu(e) {
          null === Ws ? (Ws = e) : Ws.push.apply(Ws, e);
        }
        function su(e, t) {
          for (
            t &= ~Os,
              t &= ~Ms,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - it(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function uu(e) {
          if (0 !== (6 & Is)) throw Error(o(327));
          Su();
          var t = ht(e, 0);
          if (0 === (1 & t)) return au(e, Ke()), null;
          var n = yu(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = pt(e);
            0 !== r && ((t = r), (n = iu(e, r)));
          }
          if (1 === n) throw ((n = Ds), fu(e, 0), su(e, t), au(e, Ke()), n);
          if (6 === n) throw Error(o(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            ku(e, Ws, Us),
            au(e, Ke()),
            null
          );
        }
        function cu(e, t) {
          var n = Is;
          Is |= 1;
          try {
            return e(t);
          } finally {
            0 === (Is = n) && ((qs = Ke() + 500), Oa && Ha());
          }
        }
        function du(e) {
          null !== Ys && 0 === Ys.tag && 0 === (6 & Is) && Su();
          var t = Is;
          Is |= 1;
          var n = Ts.transition,
            r = bt;
          try {
            if (((Ts.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (Ts.transition = n), 0 === (6 & (Is = t)) && Ha();
          }
        }
        function hu() {
          (Ls = Rs.current), Ca(Rs);
        }
        function fu(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== _s))
            for (n = _s.return; null !== n; ) {
              var r = n;
              switch ((to(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    La();
                  break;
                case 3:
                  oi(), Ca(Ia), Ca(Ta), di();
                  break;
                case 5:
                  li(r);
                  break;
                case 4:
                  oi();
                  break;
                case 13:
                case 19:
                  Ca(si);
                  break;
                case 10:
                  So(r.type._context);
                  break;
                case 22:
                case 23:
                  hu();
              }
              n = n.return;
            }
          if (
            ((zs = e),
            (_s = e = Ru(e.current, null)),
            (Ps = Ls = t),
            (Fs = 0),
            (Ds = null),
            (Os = Ms = As = 0),
            (Ws = Bs = null),
            null !== No)
          ) {
            for (t = 0; t < No.length; t++)
              if (null !== (r = (n = No[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  o = n.pending;
                if (null !== o) {
                  var i = o.next;
                  (o.next = a), (r.next = i);
                }
                n.pending = r;
              }
            No = null;
          }
          return e;
        }
        function pu(e, t) {
          for (;;) {
            var n = _s;
            try {
              if ((ko(), (hi.current = il), vi)) {
                for (var r = mi.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                vi = !1;
              }
              if (
                ((pi = 0),
                (yi = gi = mi = null),
                (bi = !1),
                (wi = 0),
                (Ns.current = null),
                null === n || null === n.return)
              ) {
                (Fs = 1), (Ds = t), (_s = null);
                break;
              }
              e: {
                var i = e,
                  l = n.return,
                  s = n,
                  u = t;
                if (
                  ((t = Ps),
                  (s.flags |= 32768),
                  null !== u &&
                    "object" === typeof u &&
                    "function" === typeof u.then)
                ) {
                  var c = u,
                    d = s,
                    h = d.tag;
                  if (0 === (1 & d.mode) && (0 === h || 11 === h || 15 === h)) {
                    var f = d.alternate;
                    f
                      ? ((d.updateQueue = f.updateQueue),
                        (d.memoizedState = f.memoizedState),
                        (d.lanes = f.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null));
                  }
                  var p = yl(l);
                  if (null !== p) {
                    (p.flags &= -257),
                      vl(p, l, s, 0, t),
                      1 & p.mode && gl(i, c, t),
                      (u = c);
                    var m = (t = p).updateQueue;
                    if (null === m) {
                      var g = new Set();
                      g.add(u), (t.updateQueue = g);
                    } else m.add(u);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    gl(i, c, t), gu();
                    break e;
                  }
                  u = Error(o(426));
                } else if (ao && 1 & s.mode) {
                  var y = yl(l);
                  if (null !== y) {
                    0 === (65536 & y.flags) && (y.flags |= 256),
                      vl(y, l, s, 0, t),
                      mo(cl(u, s));
                    break e;
                  }
                }
                (i = u = cl(u, s)),
                  4 !== Fs && (Fs = 2),
                  null === Bs ? (Bs = [i]) : Bs.push(i),
                  (i = l);
                do {
                  switch (i.tag) {
                    case 3:
                      (i.flags |= 65536),
                        (t &= -t),
                        (i.lanes |= t),
                        Ao(i, pl(0, u, t));
                      break e;
                    case 1:
                      s = u;
                      var v = i.type,
                        b = i.stateNode;
                      if (
                        0 === (128 & i.flags) &&
                        ("function" === typeof v.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === Qs || !Qs.has(b))))
                      ) {
                        (i.flags |= 65536),
                          (t &= -t),
                          (i.lanes |= t),
                          Ao(i, ml(i, s, t));
                        break e;
                      }
                  }
                  i = i.return;
                } while (null !== i);
              }
              xu(n);
            } catch (w) {
              (t = w), _s === n && null !== n && (_s = n = n.return);
              continue;
            }
            break;
          }
        }
        function mu() {
          var e = Es.current;
          return (Es.current = il), null === e ? il : e;
        }
        function gu() {
          (0 !== Fs && 3 !== Fs && 2 !== Fs) || (Fs = 4),
            null === zs ||
              (0 === (268435455 & As) && 0 === (268435455 & Ms)) ||
              su(zs, Ps);
        }
        function yu(e, t) {
          var n = Is;
          Is |= 2;
          var r = mu();
          for ((zs === e && Ps === t) || ((Us = null), fu(e, t)); ; )
            try {
              vu();
              break;
            } catch (a) {
              pu(e, a);
            }
          if ((ko(), (Is = n), (Es.current = r), null !== _s))
            throw Error(o(261));
          return (zs = null), (Ps = 0), Fs;
        }
        function vu() {
          for (; null !== _s; ) wu(_s);
        }
        function bu() {
          for (; null !== _s && !Ye(); ) wu(_s);
        }
        function wu(e) {
          var t = js(e.alternate, e, Ls);
          (e.memoizedProps = e.pendingProps),
            null === t ? xu(e) : (_s = t),
            (Ns.current = null);
        }
        function xu(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Gl(n, t, Ls))) return void (_s = n);
            } else {
              if (null !== (n = Yl(n, t)))
                return (n.flags &= 32767), void (_s = n);
              if (null === e) return (Fs = 6), void (_s = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (_s = t);
            _s = t = e;
          } while (null !== t);
          0 === Fs && (Fs = 5);
        }
        function ku(e, t, n) {
          var r = bt,
            a = Ts.transition;
          try {
            (Ts.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  Su();
                } while (null !== Ys);
                if (0 !== (6 & Is)) throw Error(o(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(o(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var i = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - it(n),
                        o = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~o);
                    }
                  })(e, i),
                  e === zs && ((_s = zs = null), (Ps = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Gs ||
                    ((Gs = !0),
                    zu(tt, function () {
                      return Su(), null;
                    })),
                  (i = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || i)
                ) {
                  (i = Ts.transition), (Ts.transition = null);
                  var l = bt;
                  bt = 1;
                  var s = Is;
                  (Is |= 4),
                    (Ns.current = null),
                    (function (e, t) {
                      if (((ea = Ut), fr((e = hr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                i = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, i.nodeType;
                              } catch (x) {
                                n = null;
                                break e;
                              }
                              var l = 0,
                                s = -1,
                                u = -1,
                                c = 0,
                                d = 0,
                                h = e,
                                f = null;
                              t: for (;;) {
                                for (
                                  var p;
                                  h !== n ||
                                    (0 !== a && 3 !== h.nodeType) ||
                                    (s = l + a),
                                    h !== i ||
                                      (0 !== r && 3 !== h.nodeType) ||
                                      (u = l + r),
                                    3 === h.nodeType &&
                                      (l += h.nodeValue.length),
                                    null !== (p = h.firstChild);

                                )
                                  (f = h), (h = p);
                                for (;;) {
                                  if (h === e) break t;
                                  if (
                                    (f === n && ++c === a && (s = l),
                                    f === i && ++d === r && (u = l),
                                    null !== (p = h.nextSibling))
                                  )
                                    break;
                                  f = (h = f).parentNode;
                                }
                                h = p;
                              }
                              n =
                                -1 === s || -1 === u
                                  ? null
                                  : { start: s, end: u };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          Ut = !1,
                          Zl = t;
                        null !== Zl;

                      )
                        if (
                          ((e = (t = Zl).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Zl = e);
                        else
                          for (; null !== Zl; ) {
                            t = Zl;
                            try {
                              var m = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== m) {
                                      var g = m.memoizedProps,
                                        y = m.memoizedState,
                                        v = t.stateNode,
                                        b = v.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? g
                                            : yo(t.type, g),
                                          y
                                        );
                                      v.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var w = t.stateNode.containerInfo;
                                    1 === w.nodeType
                                      ? (w.textContent = "")
                                      : 9 === w.nodeType &&
                                        w.documentElement &&
                                        w.removeChild(w.documentElement);
                                    break;
                                  default:
                                    throw Error(o(163));
                                }
                            } catch (x) {
                              Cu(t, t.return, x);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Zl = e);
                              break;
                            }
                            Zl = t.return;
                          }
                      (m = ns), (ns = !1);
                    })(e, n),
                    ys(n, e),
                    pr(ta),
                    (Ut = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    bs(n, e, a),
                    Je(),
                    (Is = s),
                    (bt = l),
                    (Ts.transition = i);
                } else e.current = n;
                if (
                  (Gs && ((Gs = !1), (Ys = e), (Js = a)),
                  (i = e.pendingLanes),
                  0 === i && (Qs = null),
                  (function (e) {
                    if (ot && "function" === typeof ot.onCommitFiberRoot)
                      try {
                        ot.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  au(e, Ke()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (a = t[n]),
                      r(a.value, { componentStack: a.stack, digest: a.digest });
                if ($s) throw (($s = !1), (e = Vs), (Vs = null), e);
                0 !== (1 & Js) && 0 !== e.tag && Su(),
                  (i = e.pendingLanes),
                  0 !== (1 & i)
                    ? e === Xs
                      ? Ks++
                      : ((Ks = 0), (Xs = e))
                    : (Ks = 0),
                  Ha();
              })(e, t, n, r);
          } finally {
            (Ts.transition = a), (bt = r);
          }
          return null;
        }
        function Su() {
          if (null !== Ys) {
            var e = wt(Js),
              t = Ts.transition,
              n = bt;
            try {
              if (((Ts.transition = null), (bt = 16 > e ? 16 : e), null === Ys))
                var r = !1;
              else {
                if (((e = Ys), (Ys = null), (Js = 0), 0 !== (6 & Is)))
                  throw Error(o(331));
                var a = Is;
                for (Is |= 4, Zl = e.current; null !== Zl; ) {
                  var i = Zl,
                    l = i.child;
                  if (0 !== (16 & Zl.flags)) {
                    var s = i.deletions;
                    if (null !== s) {
                      for (var u = 0; u < s.length; u++) {
                        var c = s[u];
                        for (Zl = c; null !== Zl; ) {
                          var d = Zl;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rs(8, d, i);
                          }
                          var h = d.child;
                          if (null !== h) (h.return = d), (Zl = h);
                          else
                            for (; null !== Zl; ) {
                              var f = (d = Zl).sibling,
                                p = d.return;
                              if ((is(d), d === c)) {
                                Zl = null;
                                break;
                              }
                              if (null !== f) {
                                (f.return = p), (Zl = f);
                                break;
                              }
                              Zl = p;
                            }
                        }
                      }
                      var m = i.alternate;
                      if (null !== m) {
                        var g = m.child;
                        if (null !== g) {
                          m.child = null;
                          do {
                            var y = g.sibling;
                            (g.sibling = null), (g = y);
                          } while (null !== g);
                        }
                      }
                      Zl = i;
                    }
                  }
                  if (0 !== (2064 & i.subtreeFlags) && null !== l)
                    (l.return = i), (Zl = l);
                  else
                    e: for (; null !== Zl; ) {
                      if (0 !== (2048 & (i = Zl).flags))
                        switch (i.tag) {
                          case 0:
                          case 11:
                          case 15:
                            rs(9, i, i.return);
                        }
                      var v = i.sibling;
                      if (null !== v) {
                        (v.return = i.return), (Zl = v);
                        break e;
                      }
                      Zl = i.return;
                    }
                }
                var b = e.current;
                for (Zl = b; null !== Zl; ) {
                  var w = (l = Zl).child;
                  if (0 !== (2064 & l.subtreeFlags) && null !== w)
                    (w.return = l), (Zl = w);
                  else
                    e: for (l = b; null !== Zl; ) {
                      if (0 !== (2048 & (s = Zl).flags))
                        try {
                          switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                              as(9, s);
                          }
                        } catch (k) {
                          Cu(s, s.return, k);
                        }
                      if (s === l) {
                        Zl = null;
                        break e;
                      }
                      var x = s.sibling;
                      if (null !== x) {
                        (x.return = s.return), (Zl = x);
                        break e;
                      }
                      Zl = s.return;
                    }
                }
                if (
                  ((Is = a),
                  Ha(),
                  ot && "function" === typeof ot.onPostCommitFiberRoot)
                )
                  try {
                    ot.onPostCommitFiberRoot(at, e);
                  } catch (k) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (Ts.transition = t);
            }
          }
          return !1;
        }
        function ju(e, t, n) {
          (e = Fo(e, (t = pl(0, (t = cl(n, t)), 1)), 1)),
            (t = tu()),
            null !== e && (yt(e, 1, t), au(e, t));
        }
        function Cu(e, t, n) {
          if (3 === e.tag) ju(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                ju(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Qs || !Qs.has(r)))
                ) {
                  (t = Fo(t, (e = ml(t, (e = cl(n, e)), 1)), 1)),
                    (e = tu()),
                    null !== t && (yt(t, 1, e), au(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Eu(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = tu()),
            (e.pingedLanes |= e.suspendedLanes & n),
            zs === e &&
              (Ps & n) === n &&
              (4 === Fs ||
              (3 === Fs && (130023424 & Ps) === Ps && 500 > Ke() - Hs)
                ? fu(e, 0)
                : (Os |= n)),
            au(e, t);
        }
        function Nu(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = tu();
          null !== (e = zo(e, t)) && (yt(e, t, n), au(e, n));
        }
        function Tu(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Nu(e, n);
        }
        function Iu(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(o(314));
          }
          null !== r && r.delete(t), Nu(e, n);
        }
        function zu(e, t) {
          return Qe(e, t);
        }
        function _u(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Pu(e, t, n, r) {
          return new _u(e, t, n, r);
        }
        function Lu(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Ru(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Pu(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Fu(e, t, n, r, a, i) {
          var l = 2;
          if (((r = e), "function" === typeof e)) Lu(e) && (l = 1);
          else if ("string" === typeof e) l = 5;
          else
            e: switch (e) {
              case S:
                return Du(n.children, a, i, t);
              case j:
                (l = 8), (a |= 8);
                break;
              case C:
                return (
                  ((e = Pu(12, n, t, 2 | a)).elementType = C), (e.lanes = i), e
                );
              case I:
                return (
                  ((e = Pu(13, n, t, a)).elementType = I), (e.lanes = i), e
                );
              case z:
                return (
                  ((e = Pu(19, n, t, a)).elementType = z), (e.lanes = i), e
                );
              case L:
                return Au(n, a, i, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case E:
                      l = 10;
                      break e;
                    case N:
                      l = 9;
                      break e;
                    case T:
                      l = 11;
                      break e;
                    case _:
                      l = 14;
                      break e;
                    case P:
                      (l = 16), (r = null);
                      break e;
                  }
                throw Error(o(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Pu(l, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = i),
            t
          );
        }
        function Du(e, t, n, r) {
          return ((e = Pu(7, e, r, t)).lanes = n), e;
        }
        function Au(e, t, n, r) {
          return (
            ((e = Pu(22, e, r, t)).elementType = L),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Mu(e, t, n) {
          return ((e = Pu(6, e, null, t)).lanes = n), e;
        }
        function Ou(e, t, n) {
          return (
            ((t = Pu(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Bu(e, t, n, r, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = gt(0)),
            (this.expirationTimes = gt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = gt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Wu(e, t, n, r, a, o, i, l, s) {
          return (
            (e = new Bu(e, t, n, l, s)),
            1 === t ? ((t = 1), !0 === o && (t |= 8)) : (t = 0),
            (o = Pu(3, null, null, t)),
            (e.current = o),
            (o.stateNode = e),
            (o.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Po(o),
            e
          );
        }
        function Hu(e) {
          if (!e) return Na;
          e: {
            if (He((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(o(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Pa(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(o(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Pa(n)) return Fa(e, n, t);
          }
          return t;
        }
        function qu(e, t, n, r, a, o, i, l, s) {
          return (
            ((e = Wu(n, r, !0, e, 0, o, 0, l, s)).context = Hu(null)),
            (n = e.current),
            ((o = Ro((r = tu()), (a = nu(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Fo(n, o, a),
            (e.current.lanes = a),
            yt(e, a, r),
            au(e, r),
            e
          );
        }
        function Uu(e, t, n, r) {
          var a = t.current,
            o = tu(),
            i = nu(a);
          return (
            (n = Hu(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Ro(o, i)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Fo(a, t, i)) && (ru(e, a, i, o), Do(e, a, i)),
            i
          );
        }
        function $u(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Vu(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Qu(e, t) {
          Vu(e, t), (e = e.alternate) && Vu(e, t);
        }
        js = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Ia.current) wl = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (wl = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        zl(t), po();
                        break;
                      case 5:
                        ii(t);
                        break;
                      case 1:
                        Pa(t.type) && Da(t);
                        break;
                      case 4:
                        ai(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        Ea(vo, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Ea(si, 1 & si.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Ml(e, t, n)
                            : (Ea(si, 1 & si.current),
                              null !== (e = $l(e, t, n)) ? e.sibling : null);
                        Ea(si, 1 & si.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return ql(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Ea(si, si.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Cl(e, t, n);
                    }
                    return $l(e, t, n);
                  })(e, t, n)
                );
              wl = 0 !== (131072 & e.flags);
            }
          else (wl = !1), ao && 0 !== (1048576 & t.flags) && Za(t, Va, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Ul(e, t), (e = t.pendingProps);
              var a = _a(t, Ta.current);
              Co(t, n), (a = ji(null, t, r, e, a, n));
              var i = Ci();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Pa(r) ? ((i = !0), Da(t)) : (i = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Po(t),
                    (a.updater = Ho),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    Vo(t, r, e, n),
                    (t = Il(null, t, r, !0, i, n)))
                  : ((t.tag = 0),
                    ao && i && eo(t),
                    xl(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Ul(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Lu(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === T) return 11;
                        if (e === _) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = yo(r, e)),
                  a)
                ) {
                  case 0:
                    t = Nl(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Tl(null, t, r, e, n);
                    break e;
                  case 11:
                    t = kl(null, t, r, e, n);
                    break e;
                  case 14:
                    t = Sl(null, t, r, yo(r.type, e), n);
                    break e;
                }
                throw Error(o(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Nl(e, t, r, (a = t.elementType === r ? a : yo(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Tl(e, t, r, (a = t.elementType === r ? a : yo(r, a)), n)
              );
            case 3:
              e: {
                if ((zl(t), null === e)) throw Error(o(387));
                (r = t.pendingProps),
                  (a = (i = t.memoizedState).element),
                  Lo(e, t),
                  Mo(t, r, null, n);
                var l = t.memoizedState;
                if (((r = l.element), i.isDehydrated)) {
                  if (
                    ((i = {
                      element: r,
                      isDehydrated: !1,
                      cache: l.cache,
                      pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                      transitions: l.transitions,
                    }),
                    (t.updateQueue.baseState = i),
                    (t.memoizedState = i),
                    256 & t.flags)
                  ) {
                    t = _l(e, t, r, n, (a = cl(Error(o(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = _l(e, t, r, n, (a = cl(Error(o(424)), t)));
                    break e;
                  }
                  for (
                    ro = ua(t.stateNode.containerInfo.firstChild),
                      no = t,
                      ao = !0,
                      oo = null,
                      n = Xo(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((po(), r === a)) {
                    t = $l(e, t, n);
                    break e;
                  }
                  xl(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                ii(t),
                null === e && uo(t),
                (r = t.type),
                (a = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (l = a.children),
                na(r, a)
                  ? (l = null)
                  : null !== i && na(r, i) && (t.flags |= 32),
                El(e, t),
                xl(e, t, l, n),
                t.child
              );
            case 6:
              return null === e && uo(t), null;
            case 13:
              return Ml(e, t, n);
            case 4:
              return (
                ai(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Ko(t, null, r, n)) : xl(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                kl(e, t, r, (a = t.elementType === r ? a : yo(r, a)), n)
              );
            case 7:
              return xl(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return xl(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (i = t.memoizedProps),
                  (l = a.value),
                  Ea(vo, r._currentValue),
                  (r._currentValue = l),
                  null !== i)
                )
                  if (lr(i.value, l)) {
                    if (i.children === a.children && !Ia.current) {
                      t = $l(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (i = t.child) && (i.return = t);
                      null !== i;

                    ) {
                      var s = i.dependencies;
                      if (null !== s) {
                        l = i.child;
                        for (var u = s.firstContext; null !== u; ) {
                          if (u.context === r) {
                            if (1 === i.tag) {
                              (u = Ro(-1, n & -n)).tag = 2;
                              var c = i.updateQueue;
                              if (null !== c) {
                                var d = (c = c.shared).pending;
                                null === d
                                  ? (u.next = u)
                                  : ((u.next = d.next), (d.next = u)),
                                  (c.pending = u);
                              }
                            }
                            (i.lanes |= n),
                              null !== (u = i.alternate) && (u.lanes |= n),
                              jo(i.return, n, t),
                              (s.lanes |= n);
                            break;
                          }
                          u = u.next;
                        }
                      } else if (10 === i.tag)
                        l = i.type === t.type ? null : i.child;
                      else if (18 === i.tag) {
                        if (null === (l = i.return)) throw Error(o(341));
                        (l.lanes |= n),
                          null !== (s = l.alternate) && (s.lanes |= n),
                          jo(l, n, t),
                          (l = i.sibling);
                      } else l = i.child;
                      if (null !== l) l.return = i;
                      else
                        for (l = i; null !== l; ) {
                          if (l === t) {
                            l = null;
                            break;
                          }
                          if (null !== (i = l.sibling)) {
                            (i.return = l.return), (l = i);
                            break;
                          }
                          l = l.return;
                        }
                      i = l;
                    }
                xl(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                Co(t, n),
                (r = r((a = Eo(a)))),
                (t.flags |= 1),
                xl(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = yo((r = t.type), t.pendingProps)),
                Sl(e, t, r, (a = yo(r.type, a)), n)
              );
            case 15:
              return jl(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : yo(r, a)),
                Ul(e, t),
                (t.tag = 1),
                Pa(r) ? ((e = !0), Da(t)) : (e = !1),
                Co(t, n),
                Uo(t, r, a),
                Vo(t, r, a, n),
                Il(null, t, r, !0, e, n)
              );
            case 19:
              return ql(e, t, n);
            case 22:
              return Cl(e, t, n);
          }
          throw Error(o(156, t.tag));
        };
        var Gu =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Yu(e) {
          this._internalRoot = e;
        }
        function Ju(e) {
          this._internalRoot = e;
        }
        function Ku(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Xu(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Zu() {}
        function ec(e, t, n, r, a) {
          var o = n._reactRootContainer;
          if (o) {
            var i = o;
            if ("function" === typeof a) {
              var l = a;
              a = function () {
                var e = $u(i);
                l.call(e);
              };
            }
            Uu(t, i, e, a);
          } else
            i = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var o = r;
                  r = function () {
                    var e = $u(i);
                    o.call(e);
                  };
                }
                var i = qu(t, r, e, 0, null, !1, 0, "", Zu);
                return (
                  (e._reactRootContainer = i),
                  (e[pa] = i.current),
                  Hr(8 === e.nodeType ? e.parentNode : e),
                  du(),
                  i
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var l = r;
                r = function () {
                  var e = $u(s);
                  l.call(e);
                };
              }
              var s = Wu(e, 0, !1, null, 0, !1, 0, "", Zu);
              return (
                (e._reactRootContainer = s),
                (e[pa] = s.current),
                Hr(8 === e.nodeType ? e.parentNode : e),
                du(function () {
                  Uu(t, s, n, r);
                }),
                s
              );
            })(n, t, e, a, r);
          return $u(i);
        }
        (Ju.prototype.render = Yu.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(o(409));
            Uu(e, t, null, null);
          }),
          (Ju.prototype.unmount = Yu.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                du(function () {
                  Uu(null, e, null, null);
                }),
                  (t[pa] = null);
              }
            }),
          (Ju.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = jt();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Lt.length && 0 !== t && t < Lt[n].priority;
                n++
              );
              Lt.splice(n, 0, e), 0 === n && At(e);
            }
          }),
          (xt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = dt(t.pendingLanes);
                  0 !== n &&
                    (vt(t, 1 | n),
                    au(t, Ke()),
                    0 === (6 & Is) && ((qs = Ke() + 500), Ha()));
                }
                break;
              case 13:
                du(function () {
                  var t = zo(e, 1);
                  if (null !== t) {
                    var n = tu();
                    ru(t, e, 1, n);
                  }
                }),
                  Qu(e, 1);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = zo(e, 134217728);
              if (null !== t) ru(t, e, 134217728, tu());
              Qu(e, 134217728);
            }
          }),
          (St = function (e) {
            if (13 === e.tag) {
              var t = nu(e),
                n = zo(e, t);
              if (null !== n) ru(n, e, t, tu());
              Qu(e, t);
            }
          }),
          (jt = function () {
            return bt;
          }),
          (Ct = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (ke = function (e, t, n) {
            switch (t) {
              case "input":
                if ((X(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = xa(r);
                      if (!a) throw Error(o(90));
                      Q(r), X(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                oe(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Te = cu),
          (Ie = du);
        var tc = {
            usingClientEntryPoint: !1,
            Events: [ba, wa, xa, Ee, Ne, cu],
          },
          nc = {
            findFiberByHostInstance: va,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          rc = {
            bundleType: nc.bundleType,
            version: nc.version,
            rendererPackageName: nc.rendererPackageName,
            rendererConfig: nc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = $e(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              nc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ac.isDisabled && ac.supportsFiber)
            try {
              (at = ac.inject(rc)), (ot = ac);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Ku(t)) throw Error(o(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: k,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Ku(e)) throw Error(o(299));
            var n = !1,
              r = "",
              a = Gu;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Wu(e, 1, !1, null, 0, n, 0, r, a)),
              (e[pa] = t.current),
              Hr(8 === e.nodeType ? e.parentNode : e),
              new Yu(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(o(188));
              throw ((e = Object.keys(e).join(",")), Error(o(268, e)));
            }
            return (e = null === (e = $e(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return du(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Xu(t)) throw Error(o(200));
            return ec(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Ku(e)) throw Error(o(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              i = "",
              l = Gu;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (l = n.onRecoverableError)),
              (t = qu(t, null, e, 1, null != n ? n : null, a, 0, i, l)),
              (e[pa] = t.current),
              Hr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Ju(t);
          }),
          (t.render = function (e, t, n) {
            if (!Xu(t)) throw Error(o(200));
            return ec(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Xu(e)) throw Error(o(40));
            return (
              !!e._reactRootContainer &&
              (du(function () {
                ec(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[pa] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = cu),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Xu(n)) throw Error(o(200));
            if (null == e || void 0 === e._reactInternals) throw Error(o(38));
            return ec(e, t, n, !1, r);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      391: (e, t, n) => {
        var r = n(950);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      950: (e, t, n) => {
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(730));
      },
      153: (e, t, n) => {
        var r = n(43),
          a = Symbol.for("react.element"),
          o = Symbol.for("react.fragment"),
          i = Object.prototype.hasOwnProperty,
          l =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          s = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(e, t, n) {
          var r,
            o = {},
            u = null,
            c = null;
          for (r in (void 0 !== n && (u = "" + n),
          void 0 !== t.key && (u = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            i.call(t, r) && !s.hasOwnProperty(r) && (o[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === o[r] && (o[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: u,
            ref: c,
            props: o,
            _owner: l.current,
          };
        }
        (t.Fragment = o), (t.jsx = u), (t.jsxs = u);
      },
      202: (e, t) => {
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          o = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler"),
          l = Symbol.for("react.provider"),
          s = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          h = Symbol.for("react.lazy"),
          f = Symbol.iterator;
        var p = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          g = {};
        function y(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || p);
        }
        function v() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || p);
        }
        (y.prototype.isReactComponent = {}),
          (y.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (y.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (v.prototype = y.prototype);
        var w = (b.prototype = new v());
        (w.constructor = b), m(w, y.prototype), (w.isPureReactComponent = !0);
        var x = Array.isArray,
          k = Object.prototype.hasOwnProperty,
          S = { current: null },
          j = { key: !0, ref: !0, __self: !0, __source: !0 };
        function C(e, t, r) {
          var a,
            o = {},
            i = null,
            l = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (l = t.ref),
            void 0 !== t.key && (i = "" + t.key),
            t))
              k.call(t, a) && !j.hasOwnProperty(a) && (o[a] = t[a]);
          var s = arguments.length - 2;
          if (1 === s) o.children = r;
          else if (1 < s) {
            for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
            o.children = u;
          }
          if (e && e.defaultProps)
            for (a in (s = e.defaultProps)) void 0 === o[a] && (o[a] = s[a]);
          return {
            $$typeof: n,
            type: e,
            key: i,
            ref: l,
            props: o,
            _owner: S.current,
          };
        }
        function E(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var N = /\/+/g;
        function T(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function I(e, t, a, o, i) {
          var l = typeof e;
          ("undefined" !== l && "boolean" !== l) || (e = null);
          var s = !1;
          if (null === e) s = !0;
          else
            switch (l) {
              case "string":
              case "number":
                s = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    s = !0;
                }
            }
          if (s)
            return (
              (i = i((s = e))),
              (e = "" === o ? "." + T(s, 0) : o),
              x(i)
                ? ((a = ""),
                  null != e && (a = e.replace(N, "$&/") + "/"),
                  I(i, t, a, "", function (e) {
                    return e;
                  }))
                : null != i &&
                  (E(i) &&
                    (i = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      i,
                      a +
                        (!i.key || (s && s.key === i.key)
                          ? ""
                          : ("" + i.key).replace(N, "$&/") + "/") +
                        e
                    )),
                  t.push(i)),
              1
            );
          if (((s = 0), (o = "" === o ? "." : o + ":"), x(e)))
            for (var u = 0; u < e.length; u++) {
              var c = o + T((l = e[u]), u);
              s += I(l, t, a, c, i);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (f && e[f]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), u = 0; !(l = e.next()).done; )
              s += I((l = l.value), t, a, (c = o + T(l, u++)), i);
          else if ("object" === l)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return s;
        }
        function z(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            I(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function _(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var P = { current: null },
          L = { transition: null },
          R = {
            ReactCurrentDispatcher: P,
            ReactCurrentBatchConfig: L,
            ReactCurrentOwner: S,
          };
        (t.Children = {
          map: z,
          forEach: function (e, t, n) {
            z(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              z(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              z(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!E(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = y),
          (t.Fragment = a),
          (t.Profiler = i),
          (t.PureComponent = b),
          (t.StrictMode = o),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var a = m({}, e.props),
              o = e.key,
              i = e.ref,
              l = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((i = t.ref), (l = S.current)),
                void 0 !== t.key && (o = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps;
              for (u in t)
                k.call(t, u) &&
                  !j.hasOwnProperty(u) &&
                  (a[u] = void 0 === t[u] && void 0 !== s ? s[u] : t[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) a.children = r;
            else if (1 < u) {
              s = Array(u);
              for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
              a.children = s;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: o,
              ref: i,
              props: a,
              _owner: l,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: s,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: l, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = C),
          (t.createFactory = function (e) {
            var t = C.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = E),
          (t.lazy = function (e) {
            return {
              $$typeof: h,
              _payload: { _status: -1, _result: e },
              _init: _,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = L.transition;
            L.transition = {};
            try {
              e();
            } finally {
              L.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return P.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return P.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return P.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return P.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return P.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return P.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return P.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return P.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return P.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return P.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return P.current.useRef(e);
          }),
          (t.useState = function (e) {
            return P.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return P.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return P.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      43: (e, t, n) => {
        e.exports = n(202);
      },
      579: (e, t, n) => {
        e.exports = n(153);
      },
      234: (e, t) => {
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < o(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, i = a >>> 1; r < i; ) {
              var l = 2 * (r + 1) - 1,
                s = e[l],
                u = l + 1,
                c = e[u];
              if (0 > o(s, n))
                u < a && 0 > o(c, s)
                  ? ((e[r] = c), (e[u] = n), (r = u))
                  : ((e[r] = s), (e[l] = n), (r = l));
              else {
                if (!(u < a && 0 > o(c, n))) break e;
                (e[r] = c), (e[u] = n), (r = u);
              }
            }
          }
          return t;
        }
        function o(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var i = performance;
          t.unstable_now = function () {
            return i.now();
          };
        } else {
          var l = Date,
            s = l.now();
          t.unstable_now = function () {
            return l.now() - s;
          };
        }
        var u = [],
          c = [],
          d = 1,
          h = null,
          f = 3,
          p = !1,
          m = !1,
          g = !1,
          y = "function" === typeof setTimeout ? setTimeout : null,
          v = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c);
            else {
              if (!(t.startTime <= e)) break;
              a(c), (t.sortIndex = t.expirationTime), n(u, t);
            }
            t = r(c);
          }
        }
        function x(e) {
          if (((g = !1), w(e), !m))
            if (null !== r(u)) (m = !0), L(k);
            else {
              var t = r(c);
              null !== t && R(x, t.startTime - e);
            }
        }
        function k(e, n) {
          (m = !1), g && ((g = !1), v(E), (E = -1)), (p = !0);
          var o = f;
          try {
            for (
              w(n), h = r(u);
              null !== h && (!(h.expirationTime > n) || (e && !I()));

            ) {
              var i = h.callback;
              if ("function" === typeof i) {
                (h.callback = null), (f = h.priorityLevel);
                var l = i(h.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof l
                    ? (h.callback = l)
                    : h === r(u) && a(u),
                  w(n);
              } else a(u);
              h = r(u);
            }
            if (null !== h) var s = !0;
            else {
              var d = r(c);
              null !== d && R(x, d.startTime - n), (s = !1);
            }
            return s;
          } finally {
            (h = null), (f = o), (p = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var S,
          j = !1,
          C = null,
          E = -1,
          N = 5,
          T = -1;
        function I() {
          return !(t.unstable_now() - T < N);
        }
        function z() {
          if (null !== C) {
            var e = t.unstable_now();
            T = e;
            var n = !0;
            try {
              n = C(!0, e);
            } finally {
              n ? S() : ((j = !1), (C = null));
            }
          } else j = !1;
        }
        if ("function" === typeof b)
          S = function () {
            b(z);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var _ = new MessageChannel(),
            P = _.port2;
          (_.port1.onmessage = z),
            (S = function () {
              P.postMessage(null);
            });
        } else
          S = function () {
            y(z, 0);
          };
        function L(e) {
          (C = e), j || ((j = !0), S());
        }
        function R(e, n) {
          E = y(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            m || p || ((m = !0), L(k));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (N = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return f;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(u);
          }),
          (t.unstable_next = function (e) {
            switch (f) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = f;
            }
            var n = f;
            f = t;
            try {
              return e();
            } finally {
              f = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = f;
            f = e;
            try {
              return t();
            } finally {
              f = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, o) {
            var i = t.unstable_now();
            switch (
              ("object" === typeof o && null !== o
                ? (o = "number" === typeof (o = o.delay) && 0 < o ? i + o : i)
                : (o = i),
              e)
            ) {
              case 1:
                var l = -1;
                break;
              case 2:
                l = 250;
                break;
              case 5:
                l = 1073741823;
                break;
              case 4:
                l = 1e4;
                break;
              default:
                l = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: a,
                priorityLevel: e,
                startTime: o,
                expirationTime: (l = o + l),
                sortIndex: -1,
              }),
              o > i
                ? ((e.sortIndex = o),
                  n(c, e),
                  null === r(u) &&
                    e === r(c) &&
                    (g ? (v(E), (E = -1)) : (g = !0), R(x, o - i)))
                : ((e.sortIndex = l), n(u, e), m || p || ((m = !0), L(k))),
              e
            );
          }),
          (t.unstable_shouldYield = I),
          (t.unstable_wrapCallback = function (e) {
            var t = f;
            return function () {
              var n = f;
              f = t;
              try {
                return e.apply(this, arguments);
              } finally {
                f = n;
              }
            };
          });
      },
      853: (e, t, n) => {
        e.exports = n(234);
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var o = (t[r] = { exports: {} });
    return e[r](o, o.exports, n), o.exports;
  }
  (n.m = e),
    (() => {
      var e,
        t = Object.getPrototypeOf
          ? (e) => Object.getPrototypeOf(e)
          : (e) => e.__proto__;
      n.t = function (r, a) {
        if ((1 & a && (r = this(r)), 8 & a)) return r;
        if ("object" === typeof r && r) {
          if (4 & a && r.__esModule) return r;
          if (16 & a && "function" === typeof r.then) return r;
        }
        var o = Object.create(null);
        n.r(o);
        var i = {};
        e = e || [null, t({}), t([]), t(t)];
        for (
          var l = 2 & a && r;
          "object" == typeof l && !~e.indexOf(l);
          l = t(l)
        )
          Object.getOwnPropertyNames(l).forEach((e) => (i[e] = () => r[e]));
        return (i.default = () => r), n.d(o, i), o;
      };
    })(),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.f = {}),
    (n.e = (e) =>
      Promise.all(Object.keys(n.f).reduce((t, r) => (n.f[r](e, t), t), []))),
    (n.u = (e) => "static/js/" + e + ".8ab44547.chunk.js"),
    (n.miniCssF = (e) => {}),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = {},
        t = "frontend:";
      n.l = (r, a, o, i) => {
        if (e[r]) e[r].push(a);
        else {
          var l, s;
          if (void 0 !== o)
            for (
              var u = document.getElementsByTagName("script"), c = 0;
              c < u.length;
              c++
            ) {
              var d = u[c];
              if (
                d.getAttribute("src") == r ||
                d.getAttribute("data-webpack") == t + o
              ) {
                l = d;
                break;
              }
            }
          l ||
            ((s = !0),
            ((l = document.createElement("script")).charset = "utf-8"),
            (l.timeout = 120),
            n.nc && l.setAttribute("nonce", n.nc),
            l.setAttribute("data-webpack", t + o),
            (l.src = r)),
            (e[r] = [a]);
          var h = (t, n) => {
              (l.onerror = l.onload = null), clearTimeout(f);
              var a = e[r];
              if (
                (delete e[r],
                l.parentNode && l.parentNode.removeChild(l),
                a && a.forEach((e) => e(n)),
                t)
              )
                return t(n);
            },
            f = setTimeout(
              h.bind(null, void 0, { type: "timeout", target: l }),
              12e4
            );
          (l.onerror = h.bind(null, l.onerror)),
            (l.onload = h.bind(null, l.onload)),
            s && document.head.appendChild(l);
        }
      };
    })(),
    (n.r = (e) => {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = ""),
    (() => {
      var e = { 792: 0 };
      n.f.j = (t, r) => {
        var a = n.o(e, t) ? e[t] : void 0;
        if (0 !== a)
          if (a) r.push(a[2]);
          else {
            var o = new Promise((n, r) => (a = e[t] = [n, r]));
            r.push((a[2] = o));
            var i = n.p + n.u(t),
              l = new Error();
            n.l(
              i,
              (r) => {
                if (n.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var o = r && ("load" === r.type ? "missing" : r.type),
                    i = r && r.target && r.target.src;
                  (l.message =
                    "Loading chunk " + t + " failed.\n(" + o + ": " + i + ")"),
                    (l.name = "ChunkLoadError"),
                    (l.type = o),
                    (l.request = i),
                    a[1](l);
                }
              },
              "chunk-" + t,
              t
            );
          }
      };
      var t = (t, r) => {
          var a,
            o,
            i = r[0],
            l = r[1],
            s = r[2],
            u = 0;
          if (i.some((t) => 0 !== e[t])) {
            for (a in l) n.o(l, a) && (n.m[a] = l[a]);
            if (s) s(n);
          }
          for (t && t(r); u < i.length; u++)
            (o = i[u]), n.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
        },
        r = (self.webpackChunkfrontend = self.webpackChunkfrontend || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })(),
    (() => {
      var e,
        t = n(43),
        r = n.t(t, 2),
        a = n(391),
        o = n(950),
        i = n.t(o, 2);
      function l() {
        return (
          (l = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          l.apply(this, arguments)
        );
      }
      !(function (e) {
        (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
      })(e || (e = {}));
      const s = "popstate";
      function u(e, t) {
        if (!1 === e || null === e || "undefined" === typeof e)
          throw new Error(t);
      }
      function c(e, t) {
        if (!e) {
          "undefined" !== typeof console && console.warn(t);
          try {
            throw new Error(t);
          } catch (n) {}
        }
      }
      function d(e, t) {
        return { usr: e.state, key: e.key, idx: t };
      }
      function h(e, t, n, r) {
        return (
          void 0 === n && (n = null),
          l(
            {
              pathname: "string" === typeof e ? e : e.pathname,
              search: "",
              hash: "",
            },
            "string" === typeof t ? p(t) : t,
            {
              state: n,
              key: (t && t.key) || r || Math.random().toString(36).substr(2, 8),
            }
          )
        );
      }
      function f(e) {
        let { pathname: t = "/", search: n = "", hash: r = "" } = e;
        return (
          n && "?" !== n && (t += "?" === n.charAt(0) ? n : "?" + n),
          r && "#" !== r && (t += "#" === r.charAt(0) ? r : "#" + r),
          t
        );
      }
      function p(e) {
        let t = {};
        if (e) {
          let n = e.indexOf("#");
          n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
          let r = e.indexOf("?");
          r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e);
        }
        return t;
      }
      function m(t, n, r, a) {
        void 0 === a && (a = {});
        let { window: o = document.defaultView, v5Compat: i = !1 } = a,
          c = o.history,
          p = e.Pop,
          m = null,
          g = y();
        function y() {
          return (c.state || { idx: null }).idx;
        }
        function v() {
          p = e.Pop;
          let t = y(),
            n = null == t ? null : t - g;
          (g = t), m && m({ action: p, location: w.location, delta: n });
        }
        function b(e) {
          let t =
              "null" !== o.location.origin
                ? o.location.origin
                : o.location.href,
            n = "string" === typeof e ? e : f(e);
          return (
            (n = n.replace(/ $/, "%20")),
            u(
              t,
              "No window.location.(origin|href) available to create URL for href: " +
                n
            ),
            new URL(n, t)
          );
        }
        null == g && ((g = 0), c.replaceState(l({}, c.state, { idx: g }), ""));
        let w = {
          get action() {
            return p;
          },
          get location() {
            return t(o, c);
          },
          listen(e) {
            if (m)
              throw new Error("A history only accepts one active listener");
            return (
              o.addEventListener(s, v),
              (m = e),
              () => {
                o.removeEventListener(s, v), (m = null);
              }
            );
          },
          createHref: (e) => n(o, e),
          createURL: b,
          encodeLocation(e) {
            let t = b(e);
            return { pathname: t.pathname, search: t.search, hash: t.hash };
          },
          push: function (t, n) {
            p = e.Push;
            let a = h(w.location, t, n);
            r && r(a, t), (g = y() + 1);
            let l = d(a, g),
              s = w.createHref(a);
            try {
              c.pushState(l, "", s);
            } catch (u) {
              if (u instanceof DOMException && "DataCloneError" === u.name)
                throw u;
              o.location.assign(s);
            }
            i && m && m({ action: p, location: w.location, delta: 1 });
          },
          replace: function (t, n) {
            p = e.Replace;
            let a = h(w.location, t, n);
            r && r(a, t), (g = y());
            let o = d(a, g),
              l = w.createHref(a);
            c.replaceState(o, "", l),
              i && m && m({ action: p, location: w.location, delta: 0 });
          },
          go: (e) => c.go(e),
        };
        return w;
      }
      var g;
      !(function (e) {
        (e.data = "data"),
          (e.deferred = "deferred"),
          (e.redirect = "redirect"),
          (e.error = "error");
      })(g || (g = {}));
      new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
      function y(e, t, n) {
        void 0 === n && (n = "/");
        let r = _(("string" === typeof t ? p(t) : t).pathname || "/", n);
        if (null == r) return null;
        let a = v(e);
        !(function (e) {
          e.sort((e, t) =>
            e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                  let n =
                    e.length === t.length &&
                    e.slice(0, -1).every((e, n) => e === t[n]);
                  return n ? e[e.length - 1] - t[t.length - 1] : 0;
                })(
                  e.routesMeta.map((e) => e.childrenIndex),
                  t.routesMeta.map((e) => e.childrenIndex)
                )
          );
        })(a);
        let o = null;
        for (let i = 0; null == o && i < a.length; ++i) {
          let e = z(r);
          o = T(a[i], e);
        }
        return o;
      }
      function v(e, t, n, r) {
        void 0 === t && (t = []),
          void 0 === n && (n = []),
          void 0 === r && (r = "");
        let a = (e, a, o) => {
          let i = {
            relativePath: void 0 === o ? e.path || "" : o,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: a,
            route: e,
          };
          i.relativePath.startsWith("/") &&
            (u(
              i.relativePath.startsWith(r),
              'Absolute route path "' +
                i.relativePath +
                '" nested under path "' +
                r +
                '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'
            ),
            (i.relativePath = i.relativePath.slice(r.length)));
          let l = D([r, i.relativePath]),
            s = n.concat(i);
          e.children &&
            e.children.length > 0 &&
            (u(
              !0 !== e.index,
              'Index routes must not have child routes. Please remove all child routes from route path "' +
                l +
                '".'
            ),
            v(e.children, t, s, l)),
            (null != e.path || e.index) &&
              t.push({ path: l, score: N(l, e.index), routesMeta: s });
        };
        return (
          e.forEach((e, t) => {
            var n;
            if ("" !== e.path && null != (n = e.path) && n.includes("?"))
              for (let r of b(e.path)) a(e, t, r);
            else a(e, t);
          }),
          t
        );
      }
      function b(e) {
        let t = e.split("/");
        if (0 === t.length) return [];
        let [n, ...r] = t,
          a = n.endsWith("?"),
          o = n.replace(/\?$/, "");
        if (0 === r.length) return a ? [o, ""] : [o];
        let i = b(r.join("/")),
          l = [];
        return (
          l.push(...i.map((e) => ("" === e ? o : [o, e].join("/")))),
          a && l.push(...i),
          l.map((t) => (e.startsWith("/") && "" === t ? "/" : t))
        );
      }
      const w = /^:[\w-]+$/,
        x = 3,
        k = 2,
        S = 1,
        j = 10,
        C = -2,
        E = (e) => "*" === e;
      function N(e, t) {
        let n = e.split("/"),
          r = n.length;
        return (
          n.some(E) && (r += C),
          t && (r += k),
          n
            .filter((e) => !E(e))
            .reduce((e, t) => e + (w.test(t) ? x : "" === t ? S : j), r)
        );
      }
      function T(e, t) {
        let { routesMeta: n } = e,
          r = {},
          a = "/",
          o = [];
        for (let i = 0; i < n.length; ++i) {
          let e = n[i],
            l = i === n.length - 1,
            s = "/" === a ? t : t.slice(a.length) || "/",
            u = I(
              { path: e.relativePath, caseSensitive: e.caseSensitive, end: l },
              s
            );
          if (!u) return null;
          Object.assign(r, u.params);
          let c = e.route;
          o.push({
            params: r,
            pathname: D([a, u.pathname]),
            pathnameBase: A(D([a, u.pathnameBase])),
            route: c,
          }),
            "/" !== u.pathnameBase && (a = D([a, u.pathnameBase]));
        }
        return o;
      }
      function I(e, t) {
        "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        let [n, r] = (function (e, t, n) {
            void 0 === t && (t = !1);
            void 0 === n && (n = !0);
            c(
              "*" === e || !e.endsWith("*") || e.endsWith("/*"),
              'Route path "' +
                e +
                '" will be treated as if it were "' +
                e.replace(/\*$/, "/*") +
                '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                e.replace(/\*$/, "/*") +
                '".'
            );
            let r = [],
              a =
                "^" +
                e
                  .replace(/\/*\*?$/, "")
                  .replace(/^\/*/, "/")
                  .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
                  .replace(
                    /\/:([\w-]+)(\?)?/g,
                    (e, t, n) => (
                      r.push({ paramName: t, isOptional: null != n }),
                      n ? "/?([^\\/]+)?" : "/([^\\/]+)"
                    )
                  );
            e.endsWith("*")
              ? (r.push({ paramName: "*" }),
                (a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
              : n
              ? (a += "\\/*$")
              : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))");
            let o = new RegExp(a, t ? void 0 : "i");
            return [o, r];
          })(e.path, e.caseSensitive, e.end),
          a = t.match(n);
        if (!a) return null;
        let o = a[0],
          i = o.replace(/(.)\/+$/, "$1"),
          l = a.slice(1);
        return {
          params: r.reduce((e, t, n) => {
            let { paramName: r, isOptional: a } = t;
            if ("*" === r) {
              let e = l[n] || "";
              i = o.slice(0, o.length - e.length).replace(/(.)\/+$/, "$1");
            }
            const s = l[n];
            return (
              (e[r] = a && !s ? void 0 : (s || "").replace(/%2F/g, "/")), e
            );
          }, {}),
          pathname: o,
          pathnameBase: i,
          pattern: e,
        };
      }
      function z(e) {
        try {
          return e
            .split("/")
            .map((e) => decodeURIComponent(e).replace(/\//g, "%2F"))
            .join("/");
        } catch (t) {
          return (
            c(
              !1,
              'The URL path "' +
                e +
                '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
                t +
                ")."
            ),
            e
          );
        }
      }
      function _(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        let n = t.endsWith("/") ? t.length - 1 : t.length,
          r = e.charAt(n);
        return r && "/" !== r ? null : e.slice(n) || "/";
      }
      function P(e, t, n, r) {
        return (
          "Cannot include a '" +
          e +
          "' character in a manually specified `to." +
          t +
          "` field [" +
          JSON.stringify(r) +
          "].  Please separate it out to the `to." +
          n +
          '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
        );
      }
      function L(e) {
        return e.filter(
          (e, t) => 0 === t || (e.route.path && e.route.path.length > 0)
        );
      }
      function R(e, t) {
        let n = L(e);
        return t
          ? n.map((t, n) => (n === e.length - 1 ? t.pathname : t.pathnameBase))
          : n.map((e) => e.pathnameBase);
      }
      function F(e, t, n, r) {
        let a;
        void 0 === r && (r = !1),
          "string" === typeof e
            ? (a = p(e))
            : ((a = l({}, e)),
              u(
                !a.pathname || !a.pathname.includes("?"),
                P("?", "pathname", "search", a)
              ),
              u(
                !a.pathname || !a.pathname.includes("#"),
                P("#", "pathname", "hash", a)
              ),
              u(
                !a.search || !a.search.includes("#"),
                P("#", "search", "hash", a)
              ));
        let o,
          i = "" === e || "" === a.pathname,
          s = i ? "/" : a.pathname;
        if (null == s) o = n;
        else {
          let e = t.length - 1;
          if (!r && s.startsWith("..")) {
            let t = s.split("/");
            for (; ".." === t[0]; ) t.shift(), (e -= 1);
            a.pathname = t.join("/");
          }
          o = e >= 0 ? t[e] : "/";
        }
        let c = (function (e, t) {
            void 0 === t && (t = "/");
            let {
                pathname: n,
                search: r = "",
                hash: a = "",
              } = "string" === typeof e ? p(e) : e,
              o = n
                ? n.startsWith("/")
                  ? n
                  : (function (e, t) {
                      let n = t.replace(/\/+$/, "").split("/");
                      return (
                        e.split("/").forEach((e) => {
                          ".." === e
                            ? n.length > 1 && n.pop()
                            : "." !== e && n.push(e);
                        }),
                        n.length > 1 ? n.join("/") : "/"
                      );
                    })(n, t)
                : t;
            return { pathname: o, search: M(r), hash: O(a) };
          })(a, o),
          d = s && "/" !== s && s.endsWith("/"),
          h = (i || "." === s) && n.endsWith("/");
        return c.pathname.endsWith("/") || (!d && !h) || (c.pathname += "/"), c;
      }
      const D = (e) => e.join("/").replace(/\/\/+/g, "/"),
        A = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
        M = (e) => (e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : ""),
        O = (e) => (e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "");
      Error;
      function B(e) {
        return (
          null != e &&
          "number" === typeof e.status &&
          "string" === typeof e.statusText &&
          "boolean" === typeof e.internal &&
          "data" in e
        );
      }
      const W = ["post", "put", "patch", "delete"],
        H = (new Set(W), ["get", ...W]);
      new Set(H), new Set([301, 302, 303, 307, 308]), new Set([307, 308]);
      Symbol("deferred");
      function q() {
        return (
          (q = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          q.apply(this, arguments)
        );
      }
      const U = t.createContext(null);
      const $ = t.createContext(null);
      const V = t.createContext(null);
      const Q = t.createContext(null);
      const G = t.createContext({ outlet: null, matches: [], isDataRoute: !1 });
      const Y = t.createContext(null);
      function J() {
        return null != t.useContext(Q);
      }
      function K() {
        return J() || u(!1), t.useContext(Q).location;
      }
      function X(e) {
        t.useContext(V).static || t.useLayoutEffect(e);
      }
      function Z() {
        let { isDataRoute: e } = t.useContext(G);
        return e
          ? (function () {
              let { router: e } = ue(le.UseNavigateStable),
                n = de(se.UseNavigateStable),
                r = t.useRef(!1);
              return (
                X(() => {
                  r.current = !0;
                }),
                t.useCallback(
                  function (t, a) {
                    void 0 === a && (a = {}),
                      r.current &&
                        ("number" === typeof t
                          ? e.navigate(t)
                          : e.navigate(t, q({ fromRouteId: n }, a)));
                  },
                  [e, n]
                )
              );
            })()
          : (function () {
              J() || u(!1);
              let e = t.useContext(U),
                { basename: n, future: r, navigator: a } = t.useContext(V),
                { matches: o } = t.useContext(G),
                { pathname: i } = K(),
                l = JSON.stringify(R(o, r.v7_relativeSplatPath)),
                s = t.useRef(!1);
              return (
                X(() => {
                  s.current = !0;
                }),
                t.useCallback(
                  function (t, r) {
                    if ((void 0 === r && (r = {}), !s.current)) return;
                    if ("number" === typeof t) return void a.go(t);
                    let o = F(t, JSON.parse(l), i, "path" === r.relative);
                    null == e &&
                      "/" !== n &&
                      (o.pathname =
                        "/" === o.pathname ? n : D([n, o.pathname])),
                      (r.replace ? a.replace : a.push)(o, r.state, r);
                  },
                  [n, a, l, i, e]
                )
              );
            })();
      }
      function ee(e, n) {
        let { relative: r } = void 0 === n ? {} : n,
          { future: a } = t.useContext(V),
          { matches: o } = t.useContext(G),
          { pathname: i } = K(),
          l = JSON.stringify(R(o, a.v7_relativeSplatPath));
        return t.useMemo(
          () => F(e, JSON.parse(l), i, "path" === r),
          [e, l, i, r]
        );
      }
      function te(n, r, a, o) {
        J() || u(!1);
        let { navigator: i } = t.useContext(V),
          { matches: l } = t.useContext(G),
          s = l[l.length - 1],
          c = s ? s.params : {},
          d = (s && s.pathname, s ? s.pathnameBase : "/");
        s && s.route;
        let h,
          f = K();
        if (r) {
          var m;
          let e = "string" === typeof r ? p(r) : r;
          "/" === d ||
            (null == (m = e.pathname) ? void 0 : m.startsWith(d)) ||
            u(!1),
            (h = e);
        } else h = f;
        let g = h.pathname || "/",
          v = g;
        if ("/" !== d) {
          let e = d.replace(/^\//, "").split("/");
          v = "/" + g.replace(/^\//, "").split("/").slice(e.length).join("/");
        }
        let b = y(n, { pathname: v });
        let w = ie(
          b &&
            b.map((e) =>
              Object.assign({}, e, {
                params: Object.assign({}, c, e.params),
                pathname: D([
                  d,
                  i.encodeLocation
                    ? i.encodeLocation(e.pathname).pathname
                    : e.pathname,
                ]),
                pathnameBase:
                  "/" === e.pathnameBase
                    ? d
                    : D([
                        d,
                        i.encodeLocation
                          ? i.encodeLocation(e.pathnameBase).pathname
                          : e.pathnameBase,
                      ]),
              })
            ),
          l,
          a,
          o
        );
        return r && w
          ? t.createElement(
              Q.Provider,
              {
                value: {
                  location: q(
                    {
                      pathname: "/",
                      search: "",
                      hash: "",
                      state: null,
                      key: "default",
                    },
                    h
                  ),
                  navigationType: e.Pop,
                },
              },
              w
            )
          : w;
      }
      function ne() {
        let e = (function () {
            var e;
            let n = t.useContext(Y),
              r = ce(se.UseRouteError),
              a = de(se.UseRouteError);
            if (void 0 !== n) return n;
            return null == (e = r.errors) ? void 0 : e[a];
          })(),
          n = B(e)
            ? e.status + " " + e.statusText
            : e instanceof Error
            ? e.message
            : JSON.stringify(e),
          r = e instanceof Error ? e.stack : null,
          a = "rgba(200,200,200, 0.5)",
          o = { padding: "0.5rem", backgroundColor: a };
        return t.createElement(
          t.Fragment,
          null,
          t.createElement("h2", null, "Unexpected Application Error!"),
          t.createElement("h3", { style: { fontStyle: "italic" } }, n),
          r ? t.createElement("pre", { style: o }, r) : null,
          null
        );
      }
      const re = t.createElement(ne, null);
      class ae extends t.Component {
        constructor(e) {
          super(e),
            (this.state = {
              location: e.location,
              revalidation: e.revalidation,
              error: e.error,
            });
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        static getDerivedStateFromProps(e, t) {
          return t.location !== e.location ||
            ("idle" !== t.revalidation && "idle" === e.revalidation)
            ? {
                error: e.error,
                location: e.location,
                revalidation: e.revalidation,
              }
            : {
                error: void 0 !== e.error ? e.error : t.error,
                location: t.location,
                revalidation: e.revalidation || t.revalidation,
              };
        }
        componentDidCatch(e, t) {
          console.error(
            "React Router caught the following error during render",
            e,
            t
          );
        }
        render() {
          return void 0 !== this.state.error
            ? t.createElement(
                G.Provider,
                { value: this.props.routeContext },
                t.createElement(Y.Provider, {
                  value: this.state.error,
                  children: this.props.component,
                })
              )
            : this.props.children;
        }
      }
      function oe(e) {
        let { routeContext: n, match: r, children: a } = e,
          o = t.useContext(U);
        return (
          o &&
            o.static &&
            o.staticContext &&
            (r.route.errorElement || r.route.ErrorBoundary) &&
            (o.staticContext._deepestRenderedBoundaryId = r.route.id),
          t.createElement(G.Provider, { value: n }, a)
        );
      }
      function ie(e, n, r, a) {
        var o;
        if (
          (void 0 === n && (n = []),
          void 0 === r && (r = null),
          void 0 === a && (a = null),
          null == e)
        ) {
          var i;
          if (null == (i = r) || !i.errors) return null;
          e = r.matches;
        }
        let l = e,
          s = null == (o = r) ? void 0 : o.errors;
        if (null != s) {
          let e = l.findIndex(
            (e) => e.route.id && (null == s ? void 0 : s[e.route.id])
          );
          e >= 0 || u(!1), (l = l.slice(0, Math.min(l.length, e + 1)));
        }
        let c = !1,
          d = -1;
        if (r && a && a.v7_partialHydration)
          for (let t = 0; t < l.length; t++) {
            let e = l[t];
            if (
              ((e.route.HydrateFallback || e.route.hydrateFallbackElement) &&
                (d = t),
              e.route.id)
            ) {
              let { loaderData: t, errors: n } = r,
                a =
                  e.route.loader &&
                  void 0 === t[e.route.id] &&
                  (!n || void 0 === n[e.route.id]);
              if (e.route.lazy || a) {
                (c = !0), (l = d >= 0 ? l.slice(0, d + 1) : [l[0]]);
                break;
              }
            }
          }
        return l.reduceRight((e, a, o) => {
          let i,
            u = !1,
            h = null,
            f = null;
          var p;
          r &&
            ((i = s && a.route.id ? s[a.route.id] : void 0),
            (h = a.route.errorElement || re),
            c &&
              (d < 0 && 0 === o
                ? ((p = "route-fallback"),
                  !1 || he[p] || (he[p] = !0),
                  (u = !0),
                  (f = null))
                : d === o &&
                  ((u = !0), (f = a.route.hydrateFallbackElement || null))));
          let m = n.concat(l.slice(0, o + 1)),
            g = () => {
              let n;
              return (
                (n = i
                  ? h
                  : u
                  ? f
                  : a.route.Component
                  ? t.createElement(a.route.Component, null)
                  : a.route.element
                  ? a.route.element
                  : e),
                t.createElement(oe, {
                  match: a,
                  routeContext: {
                    outlet: e,
                    matches: m,
                    isDataRoute: null != r,
                  },
                  children: n,
                })
              );
            };
          return r && (a.route.ErrorBoundary || a.route.errorElement || 0 === o)
            ? t.createElement(ae, {
                location: r.location,
                revalidation: r.revalidation,
                component: h,
                error: i,
                children: g(),
                routeContext: { outlet: null, matches: m, isDataRoute: !0 },
              })
            : g();
        }, null);
      }
      var le = (function (e) {
          return (
            (e.UseBlocker = "useBlocker"),
            (e.UseRevalidator = "useRevalidator"),
            (e.UseNavigateStable = "useNavigate"),
            e
          );
        })(le || {}),
        se = (function (e) {
          return (
            (e.UseBlocker = "useBlocker"),
            (e.UseLoaderData = "useLoaderData"),
            (e.UseActionData = "useActionData"),
            (e.UseRouteError = "useRouteError"),
            (e.UseNavigation = "useNavigation"),
            (e.UseRouteLoaderData = "useRouteLoaderData"),
            (e.UseMatches = "useMatches"),
            (e.UseRevalidator = "useRevalidator"),
            (e.UseNavigateStable = "useNavigate"),
            (e.UseRouteId = "useRouteId"),
            e
          );
        })(se || {});
      function ue(e) {
        let n = t.useContext(U);
        return n || u(!1), n;
      }
      function ce(e) {
        let n = t.useContext($);
        return n || u(!1), n;
      }
      function de(e) {
        let n = (function (e) {
            let n = t.useContext(G);
            return n || u(!1), n;
          })(),
          r = n.matches[n.matches.length - 1];
        return r.route.id || u(!1), r.route.id;
      }
      const he = {};
      r.startTransition;
      function fe(e) {
        u(!1);
      }
      function pe(n) {
        let {
          basename: r = "/",
          children: a = null,
          location: o,
          navigationType: i = e.Pop,
          navigator: l,
          static: s = !1,
          future: c,
        } = n;
        J() && u(!1);
        let d = r.replace(/^\/*/, "/"),
          h = t.useMemo(
            () => ({
              basename: d,
              navigator: l,
              static: s,
              future: q({ v7_relativeSplatPath: !1 }, c),
            }),
            [d, c, l, s]
          );
        "string" === typeof o && (o = p(o));
        let {
            pathname: f = "/",
            search: m = "",
            hash: g = "",
            state: y = null,
            key: v = "default",
          } = o,
          b = t.useMemo(() => {
            let e = _(f, d);
            return null == e
              ? null
              : {
                  location: {
                    pathname: e,
                    search: m,
                    hash: g,
                    state: y,
                    key: v,
                  },
                  navigationType: i,
                };
          }, [d, f, m, g, y, v, i]);
        return null == b
          ? null
          : t.createElement(
              V.Provider,
              { value: h },
              t.createElement(Q.Provider, { children: a, value: b })
            );
      }
      function me(e) {
        let { children: t, location: n } = e;
        return te(ge(t), n);
      }
      new Promise(() => {});
      t.Component;
      function ge(e, n) {
        void 0 === n && (n = []);
        let r = [];
        return (
          t.Children.forEach(e, (e, a) => {
            if (!t.isValidElement(e)) return;
            let o = [...n, a];
            if (e.type === t.Fragment)
              return void r.push.apply(r, ge(e.props.children, o));
            e.type !== fe && u(!1), e.props.index && e.props.children && u(!1);
            let i = {
              id: e.props.id || o.join("-"),
              caseSensitive: e.props.caseSensitive,
              element: e.props.element,
              Component: e.props.Component,
              index: e.props.index,
              path: e.props.path,
              loader: e.props.loader,
              action: e.props.action,
              errorElement: e.props.errorElement,
              ErrorBoundary: e.props.ErrorBoundary,
              hasErrorBoundary:
                null != e.props.ErrorBoundary || null != e.props.errorElement,
              shouldRevalidate: e.props.shouldRevalidate,
              handle: e.props.handle,
              lazy: e.props.lazy,
            };
            e.props.children && (i.children = ge(e.props.children, o)),
              r.push(i);
          }),
          r
        );
      }
      function ye() {
        return (
          (ye = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          ye.apply(this, arguments)
        );
      }
      function ve(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++)
          (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      new Set([
        "application/x-www-form-urlencoded",
        "multipart/form-data",
        "text/plain",
      ]);
      const be = [
        "onClick",
        "relative",
        "reloadDocument",
        "replace",
        "state",
        "target",
        "to",
        "preventScrollReset",
        "unstable_viewTransition",
      ];
      try {
        window.__reactRouterVersion = "6";
      } catch (dt) {}
      new Map();
      const we = r.startTransition;
      i.flushSync, r.useId;
      function xe(e) {
        let { basename: n, children: r, future: a, window: o } = e,
          i = t.useRef();
        var l;
        null == i.current &&
          (i.current =
            (void 0 === (l = { window: o, v5Compat: !0 }) && (l = {}),
            m(
              function (e, t) {
                let { pathname: n, search: r, hash: a } = e.location;
                return h(
                  "",
                  { pathname: n, search: r, hash: a },
                  (t.state && t.state.usr) || null,
                  (t.state && t.state.key) || "default"
                );
              },
              function (e, t) {
                return "string" === typeof t ? t : f(t);
              },
              null,
              l
            )));
        let s = i.current,
          [u, c] = t.useState({ action: s.action, location: s.location }),
          { v7_startTransition: d } = a || {},
          p = t.useCallback(
            (e) => {
              d && we ? we(() => c(e)) : c(e);
            },
            [c, d]
          );
        return (
          t.useLayoutEffect(() => s.listen(p), [s, p]),
          t.createElement(pe, {
            basename: n,
            children: r,
            location: u.location,
            navigationType: u.action,
            navigator: s,
            future: a,
          })
        );
      }
      const ke =
          "undefined" !== typeof window &&
          "undefined" !== typeof window.document &&
          "undefined" !== typeof window.document.createElement,
        Se = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        je = t.forwardRef(function (e, n) {
          let r,
            {
              onClick: a,
              relative: o,
              reloadDocument: i,
              replace: l,
              state: s,
              target: c,
              to: d,
              preventScrollReset: h,
              unstable_viewTransition: p,
            } = e,
            m = ve(e, be),
            { basename: g } = t.useContext(V),
            y = !1;
          if ("string" === typeof d && Se.test(d) && ((r = d), ke))
            try {
              let e = new URL(window.location.href),
                t = d.startsWith("//") ? new URL(e.protocol + d) : new URL(d),
                n = _(t.pathname, g);
              t.origin === e.origin && null != n
                ? (d = n + t.search + t.hash)
                : (y = !0);
            } catch (dt) {}
          let v = (function (e, n) {
              let { relative: r } = void 0 === n ? {} : n;
              J() || u(!1);
              let { basename: a, navigator: o } = t.useContext(V),
                { hash: i, pathname: l, search: s } = ee(e, { relative: r }),
                c = l;
              return (
                "/" !== a && (c = "/" === l ? a : D([a, l])),
                o.createHref({ pathname: c, search: s, hash: i })
              );
            })(d, { relative: o }),
            b = (function (e, n) {
              let {
                  target: r,
                  replace: a,
                  state: o,
                  preventScrollReset: i,
                  relative: l,
                  unstable_viewTransition: s,
                } = void 0 === n ? {} : n,
                u = Z(),
                c = K(),
                d = ee(e, { relative: l });
              return t.useCallback(
                (t) => {
                  if (
                    (function (e, t) {
                      return (
                        0 === e.button &&
                        (!t || "_self" === t) &&
                        !(function (e) {
                          return !!(
                            e.metaKey ||
                            e.altKey ||
                            e.ctrlKey ||
                            e.shiftKey
                          );
                        })(e)
                      );
                    })(t, r)
                  ) {
                    t.preventDefault();
                    let n = void 0 !== a ? a : f(c) === f(d);
                    u(e, {
                      replace: n,
                      state: o,
                      preventScrollReset: i,
                      relative: l,
                      unstable_viewTransition: s,
                    });
                  }
                },
                [c, u, d, a, o, r, e, i, l, s]
              );
            })(d, {
              replace: l,
              state: s,
              target: c,
              preventScrollReset: h,
              relative: o,
              unstable_viewTransition: p,
            });
          return t.createElement(
            "a",
            ye({}, m, {
              href: r || v,
              onClick:
                y || i
                  ? a
                  : function (e) {
                      a && a(e), e.defaultPrevented || b(e);
                    },
              ref: n,
              target: c,
            })
          );
        });
      var Ce, Ee;
      (function (e) {
        (e.UseScrollRestoration = "useScrollRestoration"),
          (e.UseSubmit = "useSubmit"),
          (e.UseSubmitFetcher = "useSubmitFetcher"),
          (e.UseFetcher = "useFetcher"),
          (e.useViewTransitionState = "useViewTransitionState");
      })(Ce || (Ce = {})),
        (function (e) {
          (e.UseFetcher = "useFetcher"),
            (e.UseFetchers = "useFetchers"),
            (e.UseScrollRestoration = "useScrollRestoration");
        })(Ee || (Ee = {}));
      var Ne = n(579);
      const Te = () => {
          const [e, n] = (0, t.useState)(window.innerWidth),
            r = () => {
              n(window.innerWidth);
            };
          return (
            t.useEffect(
              () => (
                window.addEventListener("resize", r),
                () => {
                  window.removeEventListener("resize", r);
                }
              ),
              []
            ),
            (0, Ne.jsx)("div", {
              className: "main-container ".concat(e < 600 ? "mobile" : ""),
              children: (0, Ne.jsxs)("div", {
                className: "main-content",
                children: [
                  (0, Ne.jsxs)("div", {
                    className: "content-image ".concat(
                      e < 600 ? "mobile-content" : ""
                    ),
                    children: [
                      (0, Ne.jsx)("h1", {
                        children: "Welcome To Virtualingua",
                      }),
                      (0, Ne.jsx)("p", {
                        children:
                          "Virtualingua is an innovative online platform dedicated to enhancing language proficiency and refining English grammar skills. Through a curated collection of short stories and interactive quizzes, Virtualingua offers users an engaging environment to challenge themselves and elevate their linguistic capabilities.",
                      }),
                    ],
                  }),
                  (0, Ne.jsx)("div", {
                    className: "button",
                    children: (0, Ne.jsx)(je, {
                      to: "/menu",
                      children: (0, Ne.jsx)("button", {
                        className: "cta-button",
                        children: "Get Started",
                      }),
                    }),
                  }),
                ],
              }),
            })
          );
        },
        Ie = n.p + "static/media/vrta.23b323fba09ef4663c8c.png",
        ze = () => {
          const [e, n] = (0, t.useState)("home"),
            [r, a] = (0, t.useState)(window.innerWidth);
          return (
            (0, t.useEffect)(() => {
              const e = () => {
                a(window.innerWidth);
              };
              return (
                window.addEventListener("resize", e),
                () => {
                  window.removeEventListener("resize", e);
                }
              );
            }, []),
            (0, Ne.jsxs)("div", {
              className: "navbar ".concat(r < 600 ? "mobile" : ""),
              children: [
                (0, Ne.jsx)("div", {
                  className: "navlogo",
                  children: (0, Ne.jsx)("img", {
                    src: Ie,
                    alt: "",
                    style: { width: 130, marginTop: 13 },
                  }),
                }),
                (0, Ne.jsxs)("ul", {
                  className: "navmenu ".concat(r < 600 ? "mobile-navmenu" : ""),
                  children: [
                    (0, Ne.jsx)("li", {
                      onClick: () => {
                        n("home");
                      },
                      children: (0, Ne.jsx)(je, {
                        style: { textDecoration: "none", color: "white" },
                        to: "/",
                        children: "Home",
                      }),
                    }),
                    (0, Ne.jsx)("li", {
                      onClick: () => {
                        n("menu");
                      },
                      children: (0, Ne.jsx)(je, {
                        style: { textDecoration: "none", color: "white" },
                        to: "/menu",
                        children: "Quiz",
                      }),
                    }),
                    (0, Ne.jsx)("li", {
                      onClick: () => {
                        n("about");
                      },
                    }),
                  ],
                }),
              ],
            })
          );
        },
        _e = () =>
          (0, Ne.jsxs)("div", {
            className: "menu",
            children: [
              (0, Ne.jsxs)("div", {
                className: "menu-container",
                children: [
                  (0, Ne.jsx)("div", {
                    className: "genre-title",
                    children: (0, Ne.jsx)("h1", {
                      children: "Adventure Stories",
                    }),
                  }),
                  (0, Ne.jsx)("div", {
                    className: "buttons-container",
                    children: [1, 2, 3, 4, 5].map((e) =>
                      (0, Ne.jsx)(
                        "div",
                        {
                          className: "button",
                          children: (0, Ne.jsx)(je, {
                            to: "/story".concat(e),
                            className: "button-link",
                            children: (0, Ne.jsxs)("h1", {
                              children: ["Story ", e],
                            }),
                          }),
                        },
                        e
                      )
                    ),
                  }),
                ],
              }),
              (0, Ne.jsxs)("div", {
                className: "menu-container",
                children: [
                  (0, Ne.jsx)("div", {
                    className: "genre-title",
                    children: (0, Ne.jsx)("h1", {
                      children: "Thriller Stories",
                    }),
                  }),
                  (0, Ne.jsx)("div", {
                    className: "buttons-container",
                    children: [6, 7, 8, 9, 10].map((e) =>
                      (0, Ne.jsx)(
                        "div",
                        {
                          className: "button",
                          children: (0, Ne.jsx)(je, {
                            to: "/story".concat(e),
                            className: "button-link",
                            children: (0, Ne.jsxs)("h1", {
                              children: ["Story ", e],
                            }),
                          }),
                        },
                        e
                      )
                    ),
                  }),
                ],
              }),
            ],
          }),
        Pe = () =>
          (0, Ne.jsx)("div", {
            className: "page-container",
            children: (0, Ne.jsxs)("div", {
              className: "story-container",
              children: [
                (0, Ne.jsxs)("div", {
                  className: "box-story",
                  children: [
                    (0, Ne.jsx)("h1", {
                      className: "title",
                      children: "The Sea Raiders",
                    }),
                    (0, Ne.jsx)("div", {
                      className: "content-container",
                      children: (0, Ne.jsxs)("p", {
                        className: "author-info",
                        children: [
                          "By H. G. Wells ",
                          (0, Ne.jsx)("br", {}),
                          "Written by Missyshears, February 13, 2018",
                        ],
                      }),
                    }),
                    (0, Ne.jsxs)("div", {
                      className: "centered-content",
                      children: [
                        (0, Ne.jsx)("p", {
                          className: "story-text",
                          children:
                            "Until the extraordinary affair at Sidmouth, the peculiar species Haploteuthis ferox was known to science only generically, on the strength of a half-digested tentacle obtained near the Azores, and a decaying body pecked by birds and nibbled by fish, found early in 1896 by Mr. Jennings, near Land\u2019s End. In no department of zoological science, indeed, are we quite so in the dark as with regard to the deep-sea cephalopods. A mere accident, for instance, it was that led to the Prince of Monaco\u2019s discovery of nearly a dozen new forms in the summer of 1895, a discovery in which the before-mentioned tentacle was included. It chanced that a cachalot was killed off Terceira by some sperm whalers, and in its last struggles charged almost to the Prince\u2019s yacht, missed it, rolled under, and died within twenty yards of his rudder.",
                        }),
                        (0, Ne.jsx)(je, {
                          style: { textDecoration: "none" },
                          to: "/quiz1",
                          children: (0, Ne.jsx)("div", {
                            className: "button-container",
                            children: (0, Ne.jsx)("button", {
                              className: "start-quiz-button",
                              children: "Start Quiz",
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, Ne.jsx)("div", { className: "bot" }),
              ],
            }),
          }),
        Le = () =>
          (0, Ne.jsx)("div", {
            className: "page-container",
            children: (0, Ne.jsxs)("div", {
              className: "story-container",
              children: [
                (0, Ne.jsxs)("div", {
                  className: "box-story",
                  children: [
                    (0, Ne.jsx)("h1", {
                      className: "title",
                      children: "To build a fire",
                    }),
                    (0, Ne.jsx)("div", {
                      className: "content-container",
                      children: (0, Ne.jsxs)("p", {
                        className: "author-info",
                        children: [
                          "By Jack London ",
                          (0, Ne.jsx)("br", {}),
                          "Written by Jack London May 28, 1902",
                        ],
                      }),
                    }),
                    (0, Ne.jsxs)("div", {
                      className: "centered-content",
                      children: [
                        (0, Ne.jsx)("p", {
                          className: "story-text",
                          children:
                            "The man walked down the trail on a cold, gray day in Alaska, his first winter there. Dressed in heavy clothes and fur boots, he trudged through the pure white snow and ice that covered the Earth as far as he could see. His destination was a camp near Henderson Creek, where his friends awaited him with a fire and hot food. Behind him, a big gray dog, part dog and part wolf, followed, uneasy with the extreme cold. As he journeyed, he encountered hazards, like a frozen stream where an underground spring threatened to weaken the ice. Despite his precautions, he suffered an accident, his feet sinking into icy water. Frustrated but determined, he built a fire to dry his clothes and boots, battling against the numbing cold and the challenges of starting a fire in such extreme conditions. Yet, as he sat by the flames, thawing his frozen limbs, he reflected on the wisdom of the old men who warned against traveling alone in the Yukon's brutal cold. Despite his survival, he acknowledged the importance of preparation and respect for the wilderness, recognizing both its beauty and its unforgiving nature.",
                        }),
                        (0, Ne.jsx)(je, {
                          style: { textDecoration: "none" },
                          to: "/quiz2",
                          children: (0, Ne.jsx)("div", {
                            className: "button-container",
                            children: (0, Ne.jsx)("button", {
                              className: "start-quiz-button",
                              children: "Start Quiz",
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, Ne.jsx)("div", { className: "bot" }),
              ],
            }),
          }),
        Re = () =>
          (0, Ne.jsx)("div", {
            className: "page-container",
            children: (0, Ne.jsxs)("div", {
              className: "story-container",
              children: [
                (0, Ne.jsxs)("div", {
                  className: "box-story",
                  children: [
                    (0, Ne.jsx)("h1", {
                      className: "title",
                      children: "SHIFT OF FATE",
                    }),
                    (0, Ne.jsx)("div", {
                      className: "content-container",
                      children: (0, Ne.jsx)("p", {
                        className: "author-info",
                        children: "by Kelly Grabovac",
                      }),
                    }),
                    (0, Ne.jsxs)("div", {
                      className: "centered-content",
                      children: [
                        (0, Ne.jsxs)("p", {
                          className: "story-text",
                          children: [
                            "The crisp autumn breeze caressed her cheeks. The hair that had fallen over her eyes swept back, along with the loose leaves of the tree in which she was residing. The lit torches on the stone wall flickered at the sudden gust. She felt her heart stop, her stomach drop to her aching feet.",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "\u201cNo,\u201d she whispered, horror crashing through her.",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "The wind gusted again, harder, the scant clouds above beginning to move faster across the night sky. Panic crashing into her, she watched the guards on the wall. They did not seem to notice the shift in the wind. Did not seem to realize how it changed their fates.",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "She clambered down the tree, skin scratching against the tough bark. Her bare feet hit the grass seconds later. In the next moment, she was sprinting through the forest, flying silently through the trees as she retraced the path she had traveled earlier in the evening.",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "The camp came into view thanks to the ample starlight\u2014there were no torches lit, despite the commotion that reached her ears.",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "Fire would give away their position, a position they had worked for years to secure. She pushed her way through the first ring of tents, some alarmed comrades starting at her sudden appearance, and ran straight to the center of their base.",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "\u201cCommander!\u201d she gasped, skidding to a halt beside him. He turned from the comrades before him, face stern, no emotions playing in the dark irises. \u201cWhy have you abandoned your post?\u201d he hissed.",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "\u201cThe wind,\u201d she explained through her gasps. \u201cThe wind shifted, Commander. It is against us now. We must call off the attack.\u201d The camp around them grew quiet at her words.",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "\u201cWe cannot call off the attack,\u201d the Commander said slowly, hand drifting to the hilt of the sword on his hip. \u201cWe have worked too long to get to this point.\u201d",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "\u201cWe are already at a disadvantage, being downhill of the wall,\u201d she snapped back, anger replacing the panic. \u201cWith the wind against us now, we will not be able to breach it.\u201d",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "\u201cThe guard is reduced tonight, and reinforcements will return tomorrow. Our window will close then. It must be tonight.\u201d He turned away from her. A dismissal.",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "\u201cCommander!\u201d she yelled, grabbing his armored shoulder. The crowd around her murmured at the bold move. \u201cWe may still have a chance tomorrow. But if we attack with the wind against us, many will die. We will not be successful!\u201d",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "\u201cYou have forgotten your place!\u201d he yelled, swiveling back to face her. \u201cReturn to your post. Wait for our signal. If you abandon it again, you abandon your right to live.\u201d",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "He stormed off, into the largest tent of the camp. Her comrades dissipated, not one of them daring to approach her. She stood, trembling slightly, as they all resumed their duties. The wind pulled at her hair again. She did not bother hurrying as she made her way back to her post. The rough bark did not bother her as much as she pulled herself up each branch, body as numb as her mind. She silently rested on the thin branch, tree swaying in the wind, and stared unseeingly at the fort before her. Rebelling against tyranny had seemed noble. Four years ago, the decision had been easy for her. The Commander and his party had arrived too late, the town already reduced to cinders, but they had waded through every corpse until they found her. Barely breathing, they had carried her to safety, while the wind had carried the ashes of her family in the opposite direction. Now, things were not so black and white.",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "After years, with only small victories fueling them forward, she realized there would be no vengeance for her fallen family. There would be no dismantling the rulers that stole without reason, that killed without hesitation. If they found her alive after this failed siege...her fate would be worse than death. The sound of a bird call echoed from below. Her body went ridged at the signal, heart racing ahead. The soft sound of leaves crunching alerted her to the presence of the Commander and his company. Below her, shadows moved through the trees, weapons drawn. All that was left of their host stood below her. They stopped their forward motion, waiting for her. She reached for the bow strapped to her back. The weapon was a familiar weight in her hand. The quiver at her hip was full of arrows, but one was longer than the others. Heavier. She reached for that one. She only had one shot.",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "One chance to make this count. The fort before them was still unaware of their presence in the trees. The late hour of the night had the small array of guards gazing at the stars above their heads, rather than the forest at the bottom of the hill. She didn\u2019t blame them. No one in their right mind would dare dream of sacking this fort, not when its rulers had held it for a thousand years. But no one in this company was in their right mind. Misfits, held together underneath a banner of grief. A party that knew loss enough to not fear death. Free people with nothing left to lose.",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "She took a deep, steadying breath. Her feet scrapped on the bark as she slid herself into a more balanced position. The arrow she nocked into place was one of a kind, specially crafted by her over the last week. The smell of gasoline made her nauseous. The Commander had given her reign over their scant supplies in order to do so. The last of their supplies. The last of their hope. She pulled back the nocked arrow, bringing it to her shoulder. Another steadying breath, and she leaned back, tilting the arrow towards the sky. The fort was uphill, upwind. The shot was impossible. She kept her eyes on the mounted torch.",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "Her arrow would have to pass through the flame, would have to light, before it sailed into the interior and lit the arsenal of ammo that waited within the stone walls. Light guards, a heavy amount of explosive material horded within...the Commander had waited years for this opportunity. She would try for him. She would most likely die for him. Just then, the wind shifted.",
                          ],
                        }),
                        (0, Ne.jsx)(je, {
                          style: { textDecoration: "none" },
                          to: "/quiz3",
                          children: (0, Ne.jsx)("div", {
                            className: "button-container",
                            children: (0, Ne.jsx)("button", {
                              className: "start-quiz-button",
                              children: "Start Quiz",
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, Ne.jsx)("div", { className: "bot" }),
              ],
            }),
          }),
        Fe = () =>
          (0, Ne.jsx)("div", {
            className: "page-container",
            children: (0, Ne.jsxs)("div", {
              className: "story-container",
              children: [
                (0, Ne.jsxs)("div", {
                  className: "box-story",
                  children: [
                    (0, Ne.jsx)("h1", {
                      className: "title",
                      children: "Curious George Adventure Story",
                    }),
                    (0, Ne.jsx)("div", {
                      className: "content-container",
                      children: (0, Ne.jsxs)("p", {
                        className: "author-info",
                        children: [
                          "by Mukesh Joshi ",
                          (0, Ne.jsx)("br", {}),
                          "August 20, 2023 in Adventure Stories",
                        ],
                      }),
                    }),
                    (0, Ne.jsxs)("div", {
                      className: "centered-content",
                      children: [
                        (0, Ne.jsxs)("p", {
                          className: "story-text",
                          children: [
                            "Once upon a time in a bustling little town, lived a curious and lively monkey named George. George wasn\u2019t your everyday monkey; he was brimming with curiosity and had an insatiable spirit of adventure. His sparkling eyes and mischievous grin were a clear indication that something exciting was always on his mind.",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "One bright morning, George woke up to the cheerful chirping of birds and the gentle rustling of leaves outside his window. With a big stretch and a big yawn, he was ready to embark on another day filled with fun and exploration. He shared his home with the Man with the Yellow Hat, a good friend who always encouraged George\u2019s inquisitive nature.",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "As George hopped and bounded around the cozy house, his gaze landed upon a shiny red balloon resting by the window. Oh, what a sight to behold! The balloon seemed to call out to George, its vibrant color and buoyant form practically begging for attention. Without a moment\u2019s hesitation, George snatched the balloon and dashed outside. The balloon tugged playfully at his little hand as a gentle breeze swept by. George\u2019s heart raced with excitement as he watched the balloon ascend higher and higher into the endless sky. He couldn\u2019t help but wonder where it might be off to.",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "With determination burning in his heart, George decided to follow the whimsical balloon. He scurried through the lively town, his nimble feet carrying him with fervor. People smiled and waved at him, but George had his sights set solely on that red balloon. Through lively streets and vibrant markets, George pursued the balloon, his enthusiasm growing with each step. He found himself in unfamiliar places \u2013 a park brimming with giggling children, a fragrant bakery wafting the scent of freshly baked bread, and a bustling train station where commuters hurriedly hopped on and off trains.",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "As the sun gradually set, casting a warm and golden hue over the town, George\u2019s balloon became a mere dot in the expansive sky. Yet, it seemed to wink at George, urging him to press on. As darkness descended, George realized he had ventured far from home and felt a touch of loneliness. Just when a tinge of melancholy crept in, George heard a familiar voice in the distance. It was the Man with the Yellow Hat, calling out his name with concern. Relief and joy surged within George as he saw his friend rushing toward him. The Man lifted George into a warm embrace, relieved to have found his adventurous companion.",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "Together, they made their way back home, the balloon having long drifted away. However, the memory of their incredible journey remained etched in George\u2019s heart. Settling down for the night, George nestled beneath his cozy blanket, feeling thankful for his curiosity and the true friend who always watched over him. And so, as the stars adorned the night sky, George drifted into sleep, dreaming of the next wonderful escapade that awaited him \u2013 an adventure characterized by curiosity, camaraderie, and endless potential.",
                          ],
                        }),
                        (0, Ne.jsx)(je, {
                          style: { textDecoration: "none" },
                          to: "/quiz4",
                          children: (0, Ne.jsx)("div", {
                            className: "button-container",
                            children: (0, Ne.jsx)("button", {
                              className: "start-quiz-button",
                              children: "Start Quiz",
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, Ne.jsx)("div", { className: "bot" }),
              ],
            }),
          }),
        De = () =>
          (0, Ne.jsx)("div", {
            className: "page-container",
            children: (0, Ne.jsxs)("div", {
              className: "story-container",
              children: [
                (0, Ne.jsxs)("div", {
                  className: "box-story",
                  children: [
                    (0, Ne.jsx)("h1", {
                      className: "title",
                      children: "The Adventures Of Florian",
                    }),
                    (0, Ne.jsx)("div", {
                      className: "content-container",
                      children: (0, Ne.jsxs)("p", {
                        className: "author-info",
                        children: [
                          "By: Henry Beston ",
                          (0, Ne.jsx)("br", {}),
                          "Ririro. (2023, December 10). The Adventures of Florian.",
                        ],
                      }),
                    }),
                    (0, Ne.jsxs)("div", {
                      className: "centered-content",
                      children: [
                        (0, Ne.jsxs)("p", {
                          className: "story-text",
                          children: [
                            "Once upon a time there was a widow who had one daughter, named Isabella. They were of noble birth but lived in poverty. The father taught his daughter everything a father would teach his son. He taught her horseback riding, swimming, and fencing. He taught her so much that she was more like a boy than a girl.",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "One fall evening the father passed away. Isabella was left with only the old house, there was no money. Isabella decided to go to the city and look for work. She would have more chances as a boy, so she cut her hair and put on men\u2019s clothing.",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "In the city, she saw a couple of esquires and introduced herself as Florian. Suddenly a black knight on a black horse came galloping towards them. He called the esquires to him, but they all ignored him. Florian got curious and asked: \u2018Why do you act as if you don\u2019t hear this knight?\u2019 \u2018He is the wizard of the Black Rock. Nobody wants to work for him because his castle is inhabited by demons,\u2019 they answered.",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "Florian knew that he had little choice. So he walked up to the wizard and offered to come along. After a long journey, they arrived at the castle. Before they entered the castle the wizard said: \u2018Boy, don\u2019t let anything you hear or see scare you. Be confident that no spirit or power can hurt you. Be loyal and you shall never have a reason to regret coming here.\u2019 Florian, who had always been brave, decided to never let his courage be shaken, and it didn\u2019t.",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "And so it happened, that Florian worked in loyal service of the wizard for several years. One day Florian decided that he wanted to see more of the world and told the wizard that he had to leave. \u2018Alright,\u2019 said the wizard, who had grown to respect Florian. \u2018I shall give you three parting gifts. The first is a necklace with a golden charm in the shape of a bird. This will keep you safe from magic and will sing when you come close to danger. The second gift is a key with which you can open any door in the world. The third gift is a sphere. Put it on the ground and it will help you when you lose your way. Above all you can call me when you are in deadly danger. I shall come help you.\u2019",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "Florian had to look for a new job and he found it at the royal couple of the Twelve Towers. They had a gorgeous and brave son, prince Florizel. The parents send their son Florizel to a king in hopes that he would fall in love with his daughter, princess Rosamond. Florizel asked Florian to join him and his company. In the meantime, Florian had fallen head over heels in love with Florizel.",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "One morning, when the prince wanted to pick a beautiful flower, the little gold bird started to sing. Florian grabbed the flower and threw it away. \u2018How rude!\u2019, the company said. Shortly after the prince found a dagger on the road. Again the bird started singing. Before the prince could pick up the dagger, Florian snatched it from the ground and threw it in a ditch. Florian tried to explain that the flower and dagger were enchanted, but the prince was distracted by a beautiful garden with birds, butterflies, and flowers. At that moment, the golden bird started singing louder than it ever had. \u2018Please, don\u2019t go there,\u2019 Florian begged. But the prince and his company were already near the garden. At that moment, everybody turned into stone, except for Florian and Florizel. It was the wicked witch who was behind this. She wanted to kidnap the prince and couple him with her ugly daughter. The witch immediately saw that it was Florian\u2019s little gold bird that was protecting them from her magic. So she decided to get rid of Florian by conjuring her castle and garden to the other side of the world. She spoke a spell and everything disappeared. Florian used the sphere to find his way to the castle. But it took one year before he reached the gate of the witches\u2019 garden.",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "During that year the witch had done everything she could to make prince Florizel marry her ugly daughter. But the prince persistently refused. That evening Florian was standing in front of the garden. Florizel was locked in the top of the highest tower under lock and key of twenty different doors. Florian took the key the wizard had given him and opened all the doors until he found Florizel. The prince was so relieved to see Florian! He had already managed to free himself from the chains he was bound with. It didn\u2019t take long before the witch discovered the escape. She found the boys quickly. She was about to change them both into hares, but Florian quickly put the necklace with the bird around Florizel\u2019s neck. He was protected from the spell, but Florian transformed into a hare. The witch then sent hound dogs after him. The prince did what he could to protect the hare. Isabella called for the wizard to help her. The wizard came and defeated the witch. Isabella was changed back into her human form. The company came to live too. The witch had already decorated the castle for the wedding. \u2018Too bad that princess Rosamond isn\u2019t here,\u2019 said the company, \u2018then there would maybe be a wedding.\u2019 \u2018A wedding? No,\u2019 said Florizel, \u2018not until I find a woman who is as loyal as Florian.\u2019 \u2018There already is,\u2019 said the wizard and he touched Florian with his wand. There was Isabella in a beautiful dress. She was so beautiful that Florizel didn\u2019t hesitate one second to ask her to marry him. Florizel\u2019s parents were quickly fetched and so it happened that a wedding took place. Florizel and Isabella lived happily ever after.",
                          ],
                        }),
                        (0, Ne.jsx)(je, {
                          style: { textDecoration: "none" },
                          to: "/quiz5",
                          children: (0, Ne.jsx)("div", {
                            className: "button-container",
                            children: (0, Ne.jsx)("button", {
                              className: "start-quiz-button",
                              children: "Start Quiz",
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, Ne.jsx)("div", { className: "bot" }),
              ],
            }),
          }),
        Ae = () =>
          (0, Ne.jsx)("div", {
            className: "page-container",
            children: (0, Ne.jsxs)("div", {
              className: "story-container",
              children: [
                (0, Ne.jsxs)("div", {
                  className: "box-story",
                  children: [
                    (0, Ne.jsx)("h1", {
                      className: "title",
                      children: "SIR,I AM THE MURDERER\u2026",
                    }),
                    (0, Ne.jsx)("div", {
                      className: "content-container",
                      children: (0, Ne.jsxs)("p", {
                        className: "author-info",
                        children: [
                          "PUBLISHED BY SANDEEP SHARMA ",
                          (0, Ne.jsx)("br", {}),
                        ],
                      }),
                    }),
                    (0, Ne.jsxs)("div", {
                      className: "centered-content",
                      children: [
                        (0, Ne.jsxs)("p", {
                          className: "story-text",
                          children: [
                            "\u201cSir, I am a murderer.\u201d She was trembling while saying this. She was sitting in our police station, opposite to my table. She was there to surrender herself. I was in charge of the police station. She was a beautiful lady of about 22 or 23 years, had long hair which was maintained really nicely, wearing a pink shirt and dark blue jeans, and had sunglasses on her eyes. She was from a nice and rich family.",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "\u201cWho did you kill?\u201d Well I asked her after taking a long pause because her first sentence was not really expected or if I talk frankly, I was lost in her beauty.",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "\u201cI have killed 3 people.\u201d I was really surprised to hear that. A girl, so pretty, can kill 3 people and also commit it in front of police. The whole thing was a bit unusual for me.",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "\u201cI have killed my gardener, my driver and \u2026\u2026..\u201d She paused a bit and started to sob. \u201cAnd my mother.\u201d She started crying hard. I gave her water and she started to take a sip from that glass. When she controlled her emotions, she continued to talk.",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "\u201cPlease I beg of you, please arrest me otherwise I will kill someone else also.\u201d",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "\u201cWhy did you kill them and why will you kill others? Mam\u2026\u2026\u2026. What\u2019s your name?\u201d",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "\u201cShilpa.\u201d She was still sobbing.",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "\u201cShilpa, why did you kill them?\u201d",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "\u201cI don\u2019t know. It just happened automatically.\u201d",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "\u201cShilpa, I am not getting it. And I cannot arrest you without any complaint and without seeing the body of the dead people you are talking about.\u201d She was looking very tense to me. So I continued, \u201cShilpa, where are the bodies?\u201d",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "\u201cI dug them in my garden.\u201d She was not looking fake but what she was saying did not even look to be believed. I decided to go to her house. I took two constables also with me. When we reached her house she took us to her garden and told us the places where the bodies of the gardener and driver were dug. I commanded the constables to take the bodies out.",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "\u201cWhere\u2019s the body of your mother?\u201d I asked Shilpa.",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "\u201cInside the home.\u201d I started to follow Shilpa. She took me inside the house and then stopped in front of a dark room. \u201cInside. My mother is lying inside.\u201d She started to cry again. I slowly started to move inside the room. The room was so dark that it was difficult to see anything. I had one torch with me so I decided to turn that on. I searched the whole room but the room was empty. Then I saw one room which was closed. I opened that room. And got shocked to see that there were three bodies lying inside the room. Two men may be Shilpa\u2019s gardener and driver and one old lady may be her mother. I was wondering why Shilpa told me that bodies are out there in the garden.",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "\u201cAhhhhhh\u2026\u2026\u2026\u201d Someone stabbed me from behind. I turned around. I was shocked to see Shilpa standing with a knife in her right hand covered with blood of mine. \u201cWhy?\u201d I asked her in a trembling voice. She came closer to me and stabbed me in my stomach and said, \u201cBecause, it\u2019s fun.\u201d I fell to the ground and she took my gun and rushed outside. I heard two fires. She killed my constables. I saw her last image standing in front of the mirror, combing her hair and singing songs\u2026\u2026\u2026\u2026.",
                          ],
                        }),
                        (0, Ne.jsx)(je, {
                          style: { textDecoration: "none" },
                          to: "/quiz6",
                          children: (0, Ne.jsx)("div", {
                            className: "button-container",
                            children: (0, Ne.jsx)("button", {
                              className: "start-quiz-button",
                              children: "Start Quiz",
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, Ne.jsx)("div", { className: "bot" }),
              ],
            }),
          }),
        Me = () =>
          (0, Ne.jsx)("div", {
            className: "page-container",
            children: (0, Ne.jsxs)("div", {
              className: "story-container",
              children: [
                (0, Ne.jsxs)("div", {
                  className: "box-story",
                  children: [
                    (0, Ne.jsx)("h1", {
                      className: "title",
                      children: "A Jury of Her Peers",
                    }),
                    (0, Ne.jsx)("div", {
                      className: "content-container",
                      children: (0, Ne.jsxs)("p", {
                        className: "author-info",
                        children: ["By Susan Glaspell ", (0, Ne.jsx)("br", {})],
                      }),
                    }),
                    (0, Ne.jsxs)("div", {
                      className: "centered-content",
                      children: [
                        (0, Ne.jsxs)("p", {
                          className: "story-text",
                          children: [
                            "This detective short story was adapted from Glaspell\u2019s one-act play Trifles (1916). It is based on a murder story Susan Glaspell covered as a reporter. When Martha Hale opened the storm-door and got a cut of the north wind, she ran back for her big woolen scarf. As she hurriedly wound that round her head her eye made a scandalized sweep of her kitchen. It was no ordinary thing that called her away\u2013it was probably further from ordinary than anything that had ever happened in Dickson County. But what her eye took in was that her kitchen was in no shape for leaving: her bread all ready for mixing, half the flour sifted and half unsifted.",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "She hated to see things half done; but she had been at that when the team from town stopped to get Mr. Hale, and then the sheriff came running in to say his wife wished Mrs. Hale would come too\u2013adding, with a grin, that he guessed she was getting scary and wanted another woman along. So she had dropped everything right where it was.",
                          ],
                        }),
                        (0, Ne.jsx)(je, {
                          style: { textDecoration: "none" },
                          to: "/quiz7",
                          children: (0, Ne.jsx)("div", {
                            className: "button-container",
                            children: (0, Ne.jsx)("button", {
                              className: "start-quiz-button",
                              children: "Start Quiz",
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, Ne.jsx)("div", { className: "bot" }),
              ],
            }),
          }),
        Oe = () =>
          (0, Ne.jsx)("div", {
            className: "page-container",
            children: (0, Ne.jsxs)("div", {
              className: "story-container",
              children: [
                (0, Ne.jsxs)("div", {
                  className: "box-story",
                  children: [
                    (0, Ne.jsx)("h1", {
                      className: "title",
                      children: "NOT YET ACTIVATED",
                    }),
                    (0, Ne.jsx)("div", {
                      className: "content-container",
                      children: (0, Ne.jsxs)("p", {
                        className: "author-info",
                        children: ["By Aaron Morgans ", (0, Ne.jsx)("br", {})],
                      }),
                    }),
                    (0, Ne.jsxs)("div", {
                      className: "centered-content",
                      children: [
                        (0, Ne.jsxs)("p", {
                          className: "story-text",
                          children: [
                            "I move through the forest, gliding through the trees and shrubs like a ghost. It is effortless to move this way, but it hasn\u2019t always been. In a ravine ahead I see bushes weighed down with gooseberries. I spend a few minutes picking each bush clean and place the berries in a small leather bag. The shadows are growing longer. It\u2019s time to go back.",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "The barely noticeable deer trail will lead back to the camp. I begin to glide again, moving quickly but making no sound. The sun peeks through the foliage, disappearing and reappearing as I weave through the trees. The stillness of the forest is broken. A metallic clang on the path ahead echoes through the woods like a gunshot. Creaking and groaning noises fill the forest as bushes snap and small trees fall. The noise grows louder. I haven\u2019t made a sound. How could it have found me? I scamper to the right side of the small path and find a huge stone lying there. I duck behind it and peer out of a small crack in the rock.",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "The creaking and groaning grows louder still. I can see it now. I have seen it a few times before. It is jet black, about the size of a small bus. It moves along the deer trail in the same direction I had originally come. Its long legs snap through small trees and undergrowth as easily as if they were toothpicks. The metallic frame is mostly closed in, but on the sides there are two openings which are covered in a metal screen. These \u201cears\u201d of the machine are known to be a marvel of technology, even in this world where technology rules all. It has been said that the ears can hear a whisper 20 miles away. While some still scoff at this idea, I don\u2019t doubt it. At my last camp there were some who were careless. Because of them we were discovered. Everyone was sent fleeing in every direction like insects when a rock gets turned over. I haven\u2019t seen anyone from my old camp since that day.",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "On the day my old camp was destroyed, I followed the stream into the canyon walls until stumbling upon the small settlement where I now live. Eric greeted me soundlessly. We spoke that night, whispering as the wind rustled in the treetops. He told me that we may be the last group of natural humans on planet earth. Outside the camp, the few remaining in our species have their hardware implanted and activated. They move as one with the machines, thinking as they do. Their wills are intertwined with circuits and wires. I feel the scar on the back of my skull sometimes, an ugly reminder that I wasn\u2019t always on the run fleeing to the remote areas of what used to be known as the western United States. The hardware was implanted when I was a child, but I don\u2019t remember it being put in. In those early days I do remember hearing a child screaming in the night, my parent\u2019s faces covered with worry and fear. A baby born in this time of war between man and machine. He also had a scar on the back of his skull. I was no longer only a child, I was also a sister.",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "The terrible night came soon after that. We woke up to explosions rocking our apartment. Glass was shattering, distant screams and sirens could be heard in the streets down below. My parents gathered us up and brought us out of the building just before it collapsed. We ran along the street with hordes of screaming people. My mother had a tight grip on my hand, but then she was ripped away from me. I was lost in the swirling crowd. I have been on my own as I have grown older, traveling from camp to camp and moving further into the wilderness and away from the terrors of the city. My name is Miriam. I am a vagrant with no home, no family. A part of a remnant of humanity which is free to use their own minds, hardware intact but not yet activated.",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "\u2013 The gleaner is gone now. I haven\u2019t heard the tell-tale snapping and cracking for several minutes. My noiseless glide through the forest begins again. I don\u2019t go straight back to the camp, but instead take a winding route, crossing over the stream several times. Descending from rock to rock on the steep, narrow path on the canyon wall, I can see the top of the cottonwood tree which is at the center of the small settlement. It stands alone in the clearing, surrounded by a grassy expanse which leads to the stream which cuts through the canyon on the other side. Though it is growing dark I can also see the cabins that are positioned around the tree. The walls are made of pine logs, covered at the top with a tangled mess of dead juniper branches. The cabins must not look unnatural to the eyes overhead.",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "Eva greets me at the entrance to our little village, her gray hair rustles in the breeze as she signs her thanks for the provisions in my little bag. She is the oldest in the camp, but she is also the strongest in her own way, unyielding to the changing times around her. Eric stands beside her, I can tell that he is worried that I was out so late. Eric has always been like a father to me. Ever since the day that I first found my way into the canyon he has been willing to accept me and to teach me about how to survive. I was only a scared little girl then, but now as I have become older I have grown in my confidence. Of course, I\u2019m careful. But not afraid, at least, not most of the time. As I have grown older Eric often asks for my opinion when he makes decisions for the good of the camp, but he does not always take me into his confidence. About a week ago he left the camp for three entire days. Where did he go? Where did he sleep? I could see these questions written on the faces of everyone. But we did not speak of it. Not even in a whisper.",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "Eric has been a good leader. I go to my little cabin and I lie down on a mat as the canyon darkens. The evening meal is brought to me in a small wooden dish. It contains berries, nuts, roots and a small portion of dried meat. It is enough. In the night I hear the wind rustling in the leaves of the cottonwood tree. I find Eric sitting alone by the stream. I sit beside him and wait. As the wind picks up I begin to whisper. \u201cI saw a gleaner today. It must have been following me while I gathered in the forest. Eric, it was almost inside the walls of the canyon. I\u2019ve never seen one this close to camp before.\u201d Eric listens as he looks out at the stream. When the wind begins again he leans toward me and whispers his response. \u201cI\u2019ve been traveling for miles, searching for a place to relocate. Strongholds are all around us. We are probably in the last place that is undetectable, and it will soon be discovered by them.\u201d",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "\u201cSo what do we do?\u201d I ask. I don\u2019t like his tone. It seems resigned. He is our leader. If he doesn\u2019t have a plan we have no hope. He sighs. \u201cIt\u2019s time that we consider speaking with them. We can\u2019t live like this forever. \u201c \u201cGiving ourselves up? Are you crazy?\u201d My voice is now slightly more than a whisper. \u201cWhat happened to surviving? You said we could make a stand if we wait longer.\u201d Eric says nothing in response, he stares out at the water. I go on. \u201cWe need to have a meeting. Everyone needs to know what we are up against. We need to decide what we will do. Together.\u201d The wind has died down again. We sit in silence for a few minutes. I can\u2019t believe I am speaking to him like this, but what is he thinking? We are quite possibly the last unactivated humans on the planet. We must survive. We must resist at all costs. Eric finally looks at me. \u201cYou\u2019re right. We will have a meeting tomorrow night if the conditions are good.\u201d",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "The hours creep by in the quiet stillness of the night. I think about waking Eva. Maybe she could speak with Eric. In the morning the camp is already bustling. Some have already left to hunt while others are washing clothes in the stream. Eva is working in the storehouse, preparing food for the day ahead. Where is Eric? I check his cabin and find that the door is open. Maybe he left earlier to hunt. I join Eva in the storehouse to help her with her work. She pauses as I enter the doorway but then continues, laying out small strips of meat on a screen as she cuts them. Her wrinkled face is furrowed as she concentrates. My hands become slimy and red, covered with blood. We place the frames in a sunny spot at the edge of the camp, propping them up on rocks.",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "She gestures for me to follow her as we walk along the edge of the stream, farther away from the camp. We cross the stream on a fallen log and she leads me to a place where the water runs straight toward the canyon wall leaving a small peninsula. A bush is at the furthest point of this area and its branches hover above the water. Behind the bush there is a huge crack in the canyon wall a little less than two feet wide. Water runs out of the bottom of the crack over the roots of the bush and into the stream, making a trickling sound as it drips over the edge. Eva crouches down beside the stream in a place where we are out of view of the camp. She leans towards me and whispers. \u201cEric has been acting strange lately. I\u2019m worried that he \u2013\u201d Her voice trails off as the trickling waterfall covers it. \u201cWe may need to make other plans.\u201d",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "\u201cI spoke with Eric last night. He wants to hold a meeting after the evening meal. We could wait until after then.\u201d Eva replies, \u201cYes, we will give him a chance to speak for himself. But if he doesn\u2019t answer well then we need to come up with a solution on our own.\u201d She turns and looks at me with an intense gaze. \u201c You need to be brave, Miriam. It will be hard to confront him.\u201d She doesn\u2019t know that I have already confronted him. His answer to me last night definitely wasn\u2019t what she would want to hear. But if I reveal this it may tear the camp apart. We would lose the trust that we have worked so hard to build in the last several years. No one is willing to give themselves up willingly. Stubbornness and rebellion course through our veins. It unites us and links us together.",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "Eric will have to answer tonight, but I will not speak for him. If he had turned me away on that day that I came wandering into camp I would surely be caught by now. I would be activated. The day creeps by slower than the night. It is evening now. Most have returned from hunting and foraging, Eva receives their findings with enthusiasm no matter how meager they are. But where is Eric? I bring the knives from the storehouse to the stream and kneel down to wash them. I hear a sharp crack at the edge of the forest. I stand, straining my eyes to see into the shadows of the trees.",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "Then I see them. Three, maybe four gleaners are crawling at the edge of the forest, heading towards me, toward the camp. I quickly turn back to the camp and something immediately catches my eye beyond it on the other side of the clearing. A large tree is falling. In the distance I can see more shadows emerging from the forest on the other side of the clearing. We are surrounded. The only way out is the path up the rock wall, but surely we cannot all make it up in time. I begin to run back toward the camp. I haven\u2019t spoken one word above a whisper in years. Now that it is time to warn the others my throat feels dry and constricted. My feet begin to move faster, pounding the sandy soil beneath me. I see the gleaners beyond continue their movement out of the forest, they are almost in the clearing now.",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "A strength fills me as I continue to gain speed. \u201cRUN!\u201d My voice is unrecognizable to me as it pours out of my mouth and seems to shake the camp with its power. Eva comes out of the storehouse and begins running towards me. Some of the others come rushing out of their cabins and I see their eyes grow wide as the gleaners move in on both sides. They have emerged fully from the woods beyond. There are eight in total, their jet black frames moving at a steady pace, each with one red eye focused toward us as they close the gap in the clearing. Everyone is frozen for a moment. Some remember the little path up the canyon wall and begin to run toward it. Over the top of the canyon I see something flying low with lights shining underneath. It moves with great speed as it lowers itself into the walls. There is a streak of light and a deafening roar makes us all fall to the ground.",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "The cottonwood tree explodes. Several of the cabins instantly catch fire with flames licking up the sides. The helicopter hovers over us as we scatter. Those that were headed toward the path on the canyon wall are cut off by a gleaner. Eva and I are running toward the little peninsula where we spoke yesterday. We scramble over the fallen log and Eva points to the crack in the canyon wall. \u201cGO!\u201d she shrieks. I make a quick glance around us. A gleaner moves toward our location, its red eye pointing at us. A light from the helicopter shines down, spotlighting our location as if we are on stage. I squeeze myself into the crack in the canyon wall, straining as I move forward. The walls press against me so tightly that I cannot take a full breath. I can hear Eva scrambling in behind me. A blinding red light beams into the crevice, illuminating our bodies as we push further into the space ahead. Eva screams. I look back and see her convulsing figure, her eyes looking at me in desperation.",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "Then she stops struggling. A white light shines from behind her eyes as she looks toward me with a blank expression. She begins to move out in the same direction we came. I grab her arm but she pushes me away with seemingly supernatural strength. I try again to pull her deeper into the cavern but this time her hand reaches for my throat. She tightens her grip as I try to peel her fingers off of my neck. She pulls me closer to her, closer to the opening. The blank expression still covers her face. The white light from behind her eyes illuminates the walls. \u201cEva!\u201d I croak. \u201cDon\u2019t do this!\u201d The light shining from behind her eyes seems to flicker. A hint of recognition washes over her face. Her grip loosens just enough for me to pull her hand away. I begin to push my way deeper, still looking back. The light behind her eyes intensifies and she screams again.",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "I keep straining, pushing my way deeper into the crevice. The floor begins to rise higher. Sharp rocks cut into my legs. I feel warm blood running down to my feet which slip on the wet, cutting edges of the uneven surface below. Every once in a while I smell smoke from the burning camp which wafts its way into the walls. After almost an hour of struggling forward, the crevice opens up a bit. Cold water continually runs over my feet as I move up a small, trickling stream toward its source. I see a faint illumination of the darkening sky above as I make my way further upwards, moving from rock to rock in the blackness below. I can see the sky not only above me, but also ahead. Soon I am in the open air, lying face down on the ground panting for breath.",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "The helicopter is still hovering in the distance. Tears stream down my face as I breathe with sharp, uneven breaths, my body shaking from shock and exhaustion. After a few minutes I struggle to my feet. Pain shoots through my legs as I put weight through them, moving toward a stretch of forest ahead of me. I begin to walk, limping at first but then gaining speed. The branches of the trees hang over me like a thick blanket. The night breeze pushes me onwards as I begin to glide through the forest, making my way over logs and through bushes. Confidence begins to flow through me as my legs grow stronger with each quiet stride. There must be others out in this wilderness. There must be more who will stand up to the machines instead of cowering and betraying as Eric did. I am a survivor. My hardware is intact but I am not yet activated. I will resist. I won\u2019t give in without a fight.",
                          ],
                        }),
                        (0, Ne.jsx)(je, {
                          style: { textDecoration: "none" },
                          to: "/quiz8",
                          children: (0, Ne.jsx)("div", {
                            className: "button-container",
                            children: (0, Ne.jsx)("button", {
                              className: "start-quiz-button",
                              children: "Start Quiz",
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, Ne.jsx)("div", { className: "bot" }),
              ],
            }),
          }),
        Be = () =>
          (0, Ne.jsx)("div", {
            className: "page-container",
            children: (0, Ne.jsxs)("div", {
              className: "story-container",
              children: [
                (0, Ne.jsxs)("div", {
                  className: "box-story",
                  children: [
                    (0, Ne.jsx)("h1", {
                      className: "title",
                      children: "The Tell-Tale Heart",
                    }),
                    (0, Ne.jsx)("div", {
                      className: "content-container",
                      children: (0, Ne.jsxs)("p", {
                        className: "author-info",
                        children: [
                          "By Edgar Allan Poe ",
                          (0, Ne.jsx)("br", {}),
                          "Written by Edgar Allan Poe January,1843",
                        ],
                      }),
                    }),
                    (0, Ne.jsxs)("div", {
                      className: "centered-content",
                      children: [
                        (0, Ne.jsxs)("p", {
                          className: "story-text",
                          children: [
                            "It is a psychological thriller that delves into themes of guilt, paranoia, and the complexities of the human mind. ",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "TRUE! --nervous --very, very dreadfully nervous I had been and am; but why will you say that I am mad? The disease had sharpened my senses --not destroyed --not dulled them. Above all was the sense of hearing acute. I heard all things in the heaven and in the earth. I heard many things in hell. How, then, am I mad? Hearken! and observe how healthily --how calmly I can tell you the whole story. Object there was none. Passion there was none. I loved the old man. He had never wronged me. He had never given me insult. It was his eye! yes, it was this! I made up my mind to take his life to rid myself of the eye forever. Every night, about midnight, I opened his door, slowly. I moved my head in, shining a lantern on his eye. For seven nights, I did this. On the eighth, he heard me. His fears grew. I opened the lantern, the light fell upon his eye. I heard the beating of his heart, louder and louder. I killed him and hid the body beneath the floorboards. The police came, I welcomed them. They chatted, but the beating of the heart grew louder. I confessed, revealing the corpse's location. They tore up the planks, revealing the beating of the hideous heart.",
                          ],
                        }),
                        (0, Ne.jsx)(je, {
                          style: { textDecoration: "none" },
                          to: "/quiz9",
                          children: (0, Ne.jsx)("div", {
                            className: "button-container",
                            children: (0, Ne.jsx)("button", {
                              className: "start-quiz-button",
                              children: "Start Quiz",
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, Ne.jsx)("div", { className: "bot" }),
              ],
            }),
          }),
        We = () =>
          (0, Ne.jsx)("div", {
            className: "page-container",
            children: (0, Ne.jsxs)("div", {
              className: "story-container",
              children: [
                (0, Ne.jsxs)("div", {
                  className: "box-story",
                  children: [
                    (0, Ne.jsx)("h1", {
                      className: "title",
                      children: "Within a blink on an eye",
                    }),
                    (0, Ne.jsx)("div", {
                      className: "content-container",
                      children: (0, Ne.jsxs)("p", {
                        className: "author-info",
                        children: [
                          "by Bhoomi Khanvilkar. ",
                          (0, Ne.jsx)("br", {}),
                          "Written by Missyshears, February 13, 2018",
                        ],
                      }),
                    }),
                    (0, Ne.jsxs)("div", {
                      className: "centered-content",
                      children: [
                        (0, Ne.jsxs)("p", {
                          className: "story-text",
                          children: [
                            "As Jack was walking down the halls of his new office he was getting tons of mixed feelings. He was confident yet nervous maybe because of it his third transfer in the last two years. Everything he was transferred he regretted taking the job of being a detective. It caused him many difficulties like put his life in jeopardy. He was just weary of doing it. Until his seniors handed him a case that was almost impossible to solve, he was in a dilemma as he was going to his office to tell his office that he was going to quit his job but instead it backfired. He was perplexed about the decision, however, later a thought appeared in his mind that his boss must have handed him the case maybe because he thinks superior of him. He accepted the case but he wasn\u2019t ready to face its consequences. ",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "The case was about a thief who became famous over a period of five days. He would steal extraordinary things like popular painting and valuable jewelry and replace them with artificial ones and while leaving the thief always left a note saying, \u201cThanks for the valuables, too bad you won\u2019t see them again.\u201d Considering his attitude and his way of stealing things people began to call him \u2018The Jackal\u2019. Police had tried for months to catch but all their attempts were a failure. So the case was handed over to Jack\u2019s agency. ",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "Jack spent hours and hours on the case. His days were busy, his nights ruined and after a tremendous amount of diligence, he found a clue that would bring him one step closer to catching the Jackal. While he was researching through the case and going through the files and photos of the sites where the theft had taken place, he found out that the Jackal didn\u2019t realize there was a hidden camera at one of the houses and it caught the tattoo the shape of a bird on his left wrist. \u201cJackpot!!\u201d exclaimed Jack.",
                            " ",
                            (0, Ne.jsx)("br", {}),
                            (0, Ne.jsx)("br", {}),
                            "Eventually, though one of his informers Jack discovered Jackal\u2019s address and left straight for his home before he escaped. Fortunately, Jackal was still present before Jack and his team had arrived. They arrested him but Jack knew Jackal wasn\u2019t the kind of guy or thief who would just live quietly in jail for the rest of their lives. After a few weeks, as Jack feared Jackal had escaped and he left a message for Jack written on the rusty walls of the prison cell. It said, \u201cGood luck finding me Detective Jack.\u201d It left everyone bewildered and everyone had finally established that Jackal was a dangerous guy and can\u2019t be found easily. They were disheartened as they had to carry out a whole new investigation to find him again. Everything ended within a blink of an eye.",
                          ],
                        }),
                        (0, Ne.jsx)(je, {
                          style: { textDecoration: "none" },
                          to: "/quiz10",
                          children: (0, Ne.jsx)("div", {
                            className: "button-container",
                            children: (0, Ne.jsx)("button", {
                              className: "start-quiz-button",
                              children: "Start Quiz",
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, Ne.jsx)("div", { className: "bot" }),
              ],
            }),
          }),
        He = [
          {
            question:
              "Describe the circumstances that initially brought the peculiar species Haploteuthis ferox to the attention of scientists.",
            option1: "A) A research expedition led by marine biologists",
            option2: "B) A half-digested tentacle obtained near the Azores",
            option3: "C) A chance encounter during a documentary filming",
            option4: "D) A specimen found in a laboratory aquarium",
            ans: 2,
          },
          {
            question:
              "How did the Prince of Monaco make a significant contribution to the understanding of deep-sea cephalopods in 1895?",
            option1: "A) Through a series of fictional writings",
            option2: "B) By funding a deep-sea photography project",
            option3: "C) Via a chance discovery during a whaling expedition",
            option4: "D) By organizing a scientific expedition",
            ans: 3,
          },
          {
            question:
              "What role did a cachalot play in the events leading to the discovery of new forms of cephalopods in the Prince of Monaco's expedition?",
            option1: "A) It acted as a guide for the expedition team",
            option2: "B) It attacked the expedition's ship",
            option3: "C) Its death led to the discovery of new cephalopods",
            option4: "D) It swallowed a valuable scientific instrument",
            ans: 3,
          },
          {
            question:
              "What challenges and uncertainties are highlighted in the story regarding the study of deep-sea cephalopods?",
            option1: "A) The abundance of available data",
            option2: "B) The ease of access to deep-sea environments",
            option3:
              "C) The complexity and lack of knowledge about cephalopods",
            option4:
              "D) The straightforward and predictable nature of cephalopod behaviors",
            ans: 3,
          },
          {
            question:
              "Explain the significance of Mr. Jennings' discovery near Land\u2019s End in 1896 and its contribution to the understanding of Haploteuthis ferox.",
            option1: "A) It disproved the existence of Haploteuthis ferox",
            option2:
              "B) It provided a detailed description of the species' behavior",
            option3: "C) It led to the formation of a new scientific theory",
            option4:
              "D) It contributed to the initial generic classification of Haploteuthis ferox",
            ans: 4,
          },
        ],
        qe = () => {
          const [e, n] = (0, t.useState)(0),
            [r, a] = (0, t.useState)(He[e]),
            [o, i] = (0, t.useState)(!1),
            [l, s] = (0, t.useState)(0),
            [u, c] = (0, t.useState)(!1),
            [d, h] = (0, t.useState)(10),
            [f, p] = (0, t.useState)(null),
            m = (0, t.useRef)(null),
            g = (0, t.useRef)(null),
            y = (0, t.useRef)(null),
            v = (0, t.useRef)(null),
            b = [m, g, y, v];
          (0, t.useEffect)(() => {
            h(10),
              e > 0 &&
                e < He.length &&
                (a(He[e]),
                i(!1),
                b.forEach((e) => {
                  e.current.classList.remove("incorrect"),
                    e.current.classList.remove("correct");
                }));
          }, [e]),
            (0, t.useEffect)(() => {
              const e = setInterval(() => {
                d > 0 && !o ? h((e) => e - 1) : 0 !== d || o || x();
              }, 1e3);
              return () => clearInterval(e);
            }, [d, o]);
          const w = (e, t) => {
              o ||
                (r.ans === t
                  ? (e.target.classList.add("correct"),
                    i(!0),
                    s((e) => e + 1),
                    p("Correct!"))
                  : (e.target.classList.add("incorrect"),
                    b[r.ans - 1].current.classList.add("correct"),
                    i(!0),
                    p("Incorrect!")));
            },
            x = () => {
              i(!0),
                b[r.ans - 1].current.classList.add("correct"),
                p("Time's up! The correct answer is:");
            };
          return (0, Ne.jsxs)("div", {
            className: "container",
            children: [
              (0, Ne.jsx)("h1", { children: "The Sea Raiders" }),
              (0, Ne.jsx)("hr", {}),
              u
                ? (0, Ne.jsxs)(Ne.Fragment, {
                    children: [
                      (0, Ne.jsxs)("h2", {
                        children: ["You Scored ", l, " out of ", He.length],
                      }),
                      (0, Ne.jsx)("button", {
                        onClick: () => {
                          n(0), a(He[0]), s(0), i(!1), c(!1), p(null);
                        },
                        children: "Reset",
                      }),
                    ],
                  })
                : (0, Ne.jsxs)(Ne.Fragment, {
                    children: [
                      (0, Ne.jsxs)("h2", {
                        children: [e + 1, ". ", r.question],
                      }),
                      (0, Ne.jsx)("div", {
                        className: "anscover",
                        children: (0, Ne.jsxs)("ul", {
                          children: [
                            (0, Ne.jsx)("li", {
                              ref: m,
                              onClick: (e) => w(e, 1),
                              children: r.option1,
                            }),
                            (0, Ne.jsx)("li", {
                              ref: g,
                              onClick: (e) => w(e, 2),
                              children: r.option2,
                            }),
                            (0, Ne.jsx)("li", {
                              ref: y,
                              onClick: (e) => w(e, 3),
                              children: r.option3,
                            }),
                            (0, Ne.jsx)("li", {
                              ref: v,
                              onClick: (e) => w(e, 4),
                              children: r.option4,
                            }),
                          ],
                        }),
                      }),
                      (0, Ne.jsx)("div", {
                        className: "selected-option",
                        children: f,
                      }),
                      (0, Ne.jsx)("button", {
                        onClick: () => {
                          o &&
                            (e === He.length - 1
                              ? c(!0)
                              : (n((e) => e + 1), p(null)));
                        },
                        disabled: !o,
                        children: "Next",
                      }),
                      (0, Ne.jsxs)("div", {
                        className: "index",
                        children: [e + 1, " of ", He.length, " questions"],
                      }),
                      (0, Ne.jsxs)("div", {
                        className: "timer",
                        children: ["Time Left: ", d],
                      }),
                    ],
                  }),
            ],
          });
        },
        Ue = [
          {
            question:
              "What does the word 'trudged' mean in the context of the passage?",
            option1: "A) Walked quickly and lightly",
            option2: "B) Walked slowly and heavily",
            option3: "C) Ran with urgency",
            option4: "D) Stumbled over obstacles",
            ans: 2,
          },
          {
            question:
              "How would you describe the man's feelings towards the extreme cold weather?",
            option1: "A) Comfortable",
            option2: "B) Excited",
            option3: "C) Uneasy",
            option4: "D) Indifferent",
            ans: 3,
          },
          {
            question:
              "What does the word 'brutal' suggest about the environment the man is in?",
            option1: "A) Pleasant",
            option2: "B) Severe and harsh",
            option3: "C) Inviting",
            option4: "D) Welcoming",
            ans: 2,
          },
          {
            question: "What does the man do to thaw his frozen limbs?",
            option1: "A) Rubs them vigorously with snow",
            option2: "B) Hits his hands against his legs",
            option3: "C) Ignores the cold and continues walking",
            option4: "D) Takes off his boots and socks",
            ans: 2,
          },
          {
            question:
              "Which word best describes the man's attitude towards the old men's advice about traveling alone in the Yukon?",
            option1: "A) Dismissive",
            option2: "B) Respectful",
            option3: "C) Arrogant",
            option4: "D) Ambivalent",
            ans: 1,
          },
        ],
        $e = () => {
          const [e, n] = (0, t.useState)(0),
            [r, a] = (0, t.useState)(Ue[e]),
            [o, i] = (0, t.useState)(!1),
            [l, s] = (0, t.useState)(0),
            [u, c] = (0, t.useState)(!1),
            [d, h] = (0, t.useState)(10),
            [f, p] = (0, t.useState)(null),
            m = (0, t.useRef)(null),
            g = (0, t.useRef)(null),
            y = (0, t.useRef)(null),
            v = (0, t.useRef)(null),
            b = [m, g, y, v];
          (0, t.useEffect)(() => {
            h(10),
              e > 0 &&
                e < Ue.length &&
                (a(Ue[e]),
                i(!1),
                b.forEach((e) => {
                  e.current.classList.remove("incorrect"),
                    e.current.classList.remove("correct");
                }));
          }, [e]),
            (0, t.useEffect)(() => {
              const e = setInterval(() => {
                d > 0 && !o ? h((e) => e - 1) : 0 !== d || o || x();
              }, 1e3);
              return () => clearInterval(e);
            }, [d, o]);
          const w = (e, t) => {
              o ||
                (r.ans === t
                  ? (e.target.classList.add("correct"),
                    i(!0),
                    s((e) => e + 1),
                    p("Correct!"))
                  : (e.target.classList.add("incorrect"),
                    b[r.ans - 1].current.classList.add("correct"),
                    i(!0),
                    p("Incorrect!")));
            },
            x = () => {
              i(!0),
                b[r.ans - 1].current.classList.add("correct"),
                p("Time's up! The correct answer is:");
            };
          return (0, Ne.jsxs)("div", {
            className: "container",
            children: [
              (0, Ne.jsx)("h1", { children: "To build a fire" }),
              (0, Ne.jsx)("hr", {}),
              u
                ? (0, Ne.jsxs)(Ne.Fragment, {
                    children: [
                      (0, Ne.jsxs)("h2", {
                        children: ["You Scored ", l, " out of ", Ue.length],
                      }),
                      (0, Ne.jsx)("button", {
                        onClick: () => {
                          n(0), a(Ue[0]), s(0), i(!1), c(!1), p(null);
                        },
                        children: "Reset",
                      }),
                    ],
                  })
                : (0, Ne.jsxs)(Ne.Fragment, {
                    children: [
                      (0, Ne.jsxs)("h2", {
                        children: [e + 1, ". ", r.question],
                      }),
                      (0, Ne.jsx)("div", {
                        className: "anscover",
                        children: (0, Ne.jsxs)("ul", {
                          children: [
                            (0, Ne.jsx)("li", {
                              ref: m,
                              onClick: (e) => w(e, 1),
                              children: r.option1,
                            }),
                            (0, Ne.jsx)("li", {
                              ref: g,
                              onClick: (e) => w(e, 2),
                              children: r.option2,
                            }),
                            (0, Ne.jsx)("li", {
                              ref: y,
                              onClick: (e) => w(e, 3),
                              children: r.option3,
                            }),
                            (0, Ne.jsx)("li", {
                              ref: v,
                              onClick: (e) => w(e, 4),
                              children: r.option4,
                            }),
                          ],
                        }),
                      }),
                      (0, Ne.jsx)("div", {
                        className: "selected-option",
                        children: f,
                      }),
                      (0, Ne.jsx)("button", {
                        onClick: () => {
                          o &&
                            (e === Ue.length - 1
                              ? c(!0)
                              : (n((e) => e + 1), p(null)));
                        },
                        disabled: !o,
                        children: "Next",
                      }),
                      (0, Ne.jsxs)("div", {
                        className: "index",
                        children: [e + 1, " of ", Ue.length, " questions"],
                      }),
                      (0, Ne.jsxs)("div", {
                        className: "timer",
                        children: ["Time Left: ", d],
                      }),
                    ],
                  }),
            ],
          });
        },
        Ve = [
          {
            question:
              "How does the protagonist's decision to inform the Commander about the change in wind direction impact the story?",
            option1: "A) It leads to the success of their mission.",
            option2: "B) It results in the destruction of their camp.",
            option3: "C) It causes tension among the rebels.",
            option4: "D) It highlights the protagonist's loyalty to the cause.",
            ans: 3,
          },
          {
            question:
              "How does the protagonist's past experiences influence her decision-making in the story?",
            option1: "A) She is driven by a desire for vengeance.",
            option2: "B) She is guided by a sense of duty to her comrades.",
            option3: "C) She is haunted by memories of loss and betrayal.",
            option4:
              "D) She is determined to prove her worth to the Commander.",
            ans: 3,
          },
          {
            question:
              "Describe the protagonist's emotional state when she realizes the wind has shifted against them.",
            option1: "A) Fearful and panicked.",
            option2: "B) Confident and determined.",
            option3: "C) Angry and defiant.",
            option4: "D) Resigned and apathetic.",
            ans: 1,
          },
          {
            question:
              "In what way does the protagonist's perspective on rebellion change throughout the story?",
            option1: "A) She becomes more disillusioned with the cause.",
            option2: "B) She grows more determined to overthrow the rulers.",
            option3:
              "C) She becomes conflicted about the morality of their actions.",
            option4: "D) She grows indifferent to the outcome of the conflict.",
            ans: 3,
          },
          {
            question:
              "Discuss the significance of the final sentence, 'Just then, the wind shifted.'",
            option1:
              "A) It suggests a turning point in the protagonist's fate.",
            option2: "B) It foreshadows further conflict and uncertainty.",
            option3:
              "C) It symbolizes the cyclical nature of rebellion and oppression.",
            option4:
              "D) It represents the protagonist's renewed sense of hope.",
            ans: 2,
          },
        ],
        Qe = () => {
          const [e, n] = (0, t.useState)(0),
            [r, a] = (0, t.useState)(Ve[e]),
            [o, i] = (0, t.useState)(!1),
            [l, s] = (0, t.useState)(0),
            [u, c] = (0, t.useState)(!1),
            [d, h] = (0, t.useState)(10),
            [f, p] = (0, t.useState)(null),
            m = (0, t.useRef)(null),
            g = (0, t.useRef)(null),
            y = (0, t.useRef)(null),
            v = (0, t.useRef)(null),
            b = [m, g, y, v];
          (0, t.useEffect)(() => {
            h(10),
              e > 0 &&
                e < Ve.length &&
                (a(Ve[e]),
                i(!1),
                b.forEach((e) => {
                  e.current.classList.remove("incorrect"),
                    e.current.classList.remove("correct");
                }));
          }, [e]),
            (0, t.useEffect)(() => {
              const e = setInterval(() => {
                d > 0 && !o ? h((e) => e - 1) : 0 !== d || o || x();
              }, 1e3);
              return () => clearInterval(e);
            }, [d, o]);
          const w = (e, t) => {
              o ||
                (r.ans === t
                  ? (e.target.classList.add("correct"),
                    i(!0),
                    s((e) => e + 1),
                    p("Correct!"))
                  : (e.target.classList.add("incorrect"),
                    b[r.ans - 1].current.classList.add("correct"),
                    i(!0),
                    p("Incorrect!")));
            },
            x = () => {
              i(!0),
                b[r.ans - 1].current.classList.add("correct"),
                p("Time's up! The correct answer is:");
            };
          return (0, Ne.jsxs)("div", {
            className: "container",
            children: [
              (0, Ne.jsx)("h1", { children: "SHIFT OF FATE" }),
              (0, Ne.jsx)("hr", {}),
              u
                ? (0, Ne.jsxs)(Ne.Fragment, {
                    children: [
                      (0, Ne.jsxs)("h2", {
                        children: ["You Scored ", l, " out of ", Ve.length],
                      }),
                      (0, Ne.jsx)("button", {
                        onClick: () => {
                          n(0), a(Ve[0]), s(0), i(!1), c(!1), p(null);
                        },
                        children: "Reset",
                      }),
                    ],
                  })
                : (0, Ne.jsxs)(Ne.Fragment, {
                    children: [
                      (0, Ne.jsxs)("h2", {
                        children: [e + 1, ". ", r.question],
                      }),
                      (0, Ne.jsx)("div", {
                        className: "anscover",
                        children: (0, Ne.jsxs)("ul", {
                          children: [
                            (0, Ne.jsx)("li", {
                              ref: m,
                              onClick: (e) => w(e, 1),
                              children: r.option1,
                            }),
                            (0, Ne.jsx)("li", {
                              ref: g,
                              onClick: (e) => w(e, 2),
                              children: r.option2,
                            }),
                            (0, Ne.jsx)("li", {
                              ref: y,
                              onClick: (e) => w(e, 3),
                              children: r.option3,
                            }),
                            (0, Ne.jsx)("li", {
                              ref: v,
                              onClick: (e) => w(e, 4),
                              children: r.option4,
                            }),
                          ],
                        }),
                      }),
                      (0, Ne.jsx)("div", {
                        className: "selected-option",
                        children: f,
                      }),
                      (0, Ne.jsx)("button", {
                        onClick: () => {
                          o &&
                            (e === Ve.length - 1
                              ? c(!0)
                              : (n((e) => e + 1), p(null)));
                        },
                        disabled: !o,
                        children: "Next",
                      }),
                      (0, Ne.jsxs)("div", {
                        className: "index",
                        children: [e + 1, " of ", Ve.length, " questions"],
                      }),
                      (0, Ne.jsxs)("div", {
                        className: "timer",
                        children: ["Time Left: ", d],
                      }),
                    ],
                  }),
            ],
          });
        },
        Ge = [
          {
            question: "What character trait is most prominent in George?",
            option1: "A) Laziness",
            option2: "B) Anger",
            option3: "C) Curiosity",
            option4: "D) Fear",
            ans: 3,
          },
          {
            question:
              "What caught George's attention in the house on the morning of the adventure?",
            option1: "A) A shiny red balloon",
            option2: "B) A yellow hat",
            option3: "C) A chirping bird",
            option4: "D) A fresh loaf of bread",
            ans: 1,
          },
          {
            question:
              "Where did George find himself while chasing the balloon?",
            option1: "A) A park with giggling children",
            option2: "B) A fragrant bakery",
            option3: "C) A bustling train station",
            option4: "D) All of the above",
            ans: 4,
          },
          {
            question:
              "How did George feel when he realized he had ventured far from home?",
            option1: "A) Excited",
            option2: "B) Scared",
            option3: "C) Lonely",
            option4: "D) Angry",
            ans: 3,
          },
          {
            question: "Who found George when he was feeling lonely?",
            option1: "A) The Man with the Yellow Hat",
            option2: "B) A friendly bird",
            option3: "C) Another monkey",
            option4: "D) The balloon itself",
            ans: 1,
          },
        ],
        Ye = () => {
          const [e, n] = (0, t.useState)(0),
            [r, a] = (0, t.useState)(Ge[e]),
            [o, i] = (0, t.useState)(!1),
            [l, s] = (0, t.useState)(0),
            [u, c] = (0, t.useState)(!1),
            [d, h] = (0, t.useState)(10),
            [f, p] = (0, t.useState)(null),
            m = (0, t.useRef)(null),
            g = (0, t.useRef)(null),
            y = (0, t.useRef)(null),
            v = (0, t.useRef)(null),
            b = [m, g, y, v];
          (0, t.useEffect)(() => {
            h(10),
              e > 0 &&
                e < Ge.length &&
                (a(Ge[e]),
                i(!1),
                b.forEach((e) => {
                  e.current.classList.remove("incorrect"),
                    e.current.classList.remove("correct");
                }));
          }, [e]),
            (0, t.useEffect)(() => {
              const e = setInterval(() => {
                d > 0 && !o ? h((e) => e - 1) : 0 !== d || o || x();
              }, 1e3);
              return () => clearInterval(e);
            }, [d, o]);
          const w = (e, t) => {
              o ||
                (r.ans === t
                  ? (e.target.classList.add("correct"),
                    i(!0),
                    s((e) => e + 1),
                    p("Correct!"))
                  : (e.target.classList.add("incorrect"),
                    b[r.ans - 1].current.classList.add("correct"),
                    i(!0),
                    p("Incorrect!")));
            },
            x = () => {
              i(!0),
                b[r.ans - 1].current.classList.add("correct"),
                p("Time's up! The correct answer is:");
            };
          return (0, Ne.jsxs)("div", {
            className: "container",
            children: [
              (0, Ne.jsx)("h1", { children: "Curious George Adventure Story" }),
              (0, Ne.jsx)("hr", {}),
              u
                ? (0, Ne.jsxs)(Ne.Fragment, {
                    children: [
                      (0, Ne.jsxs)("h2", {
                        children: ["You Scored ", l, " out of ", Ge.length],
                      }),
                      (0, Ne.jsx)("button", {
                        onClick: () => {
                          n(0), a(Ge[0]), s(0), i(!1), c(!1), p(null);
                        },
                        children: "Reset",
                      }),
                    ],
                  })
                : (0, Ne.jsxs)(Ne.Fragment, {
                    children: [
                      (0, Ne.jsxs)("h2", {
                        children: [e + 1, ". ", r.question],
                      }),
                      (0, Ne.jsx)("div", {
                        className: "anscover",
                        children: (0, Ne.jsxs)("ul", {
                          children: [
                            (0, Ne.jsx)("li", {
                              ref: m,
                              onClick: (e) => w(e, 1),
                              children: r.option1,
                            }),
                            (0, Ne.jsx)("li", {
                              ref: g,
                              onClick: (e) => w(e, 2),
                              children: r.option2,
                            }),
                            (0, Ne.jsx)("li", {
                              ref: y,
                              onClick: (e) => w(e, 3),
                              children: r.option3,
                            }),
                            (0, Ne.jsx)("li", {
                              ref: v,
                              onClick: (e) => w(e, 4),
                              children: r.option4,
                            }),
                          ],
                        }),
                      }),
                      (0, Ne.jsx)("div", {
                        className: "selected-option",
                        children: f,
                      }),
                      (0, Ne.jsx)("button", {
                        onClick: () => {
                          o &&
                            (e === Ge.length - 1
                              ? c(!0)
                              : (n((e) => e + 1), p(null)));
                        },
                        disabled: !o,
                        children: "Next",
                      }),
                      (0, Ne.jsxs)("div", {
                        className: "index",
                        children: [e + 1, " of ", Ge.length, " questions"],
                      }),
                      (0, Ne.jsxs)("div", {
                        className: "timer",
                        children: ["Time Left: ", d],
                      }),
                    ],
                  }),
            ],
          });
        },
        Je = [
          {
            question: "What are 3 gifts that the wizard gave to Florian?",
            option1: "A) Gold, necklace, diamond",
            option2: "B) Golden charm in the shape of bird, key, sphere",
            option3: "C) Golden armor, sword, money",
            option4: "D) Horse, sphere, key",
            ans: 2,
          },
          {
            question:
              "What is the name of the king's son that has been trying to fall in love with Florizel?",
            option1: "A) Princess Rosamond",
            option2: "B) Princess Florian",
            option3: "C) Princess florizel",
            option4: "D) Princess Rose",
            ans: 1,
          },
          {
            question: "At that moment, everybody turned into stone, except?",
            option1: "A) The Guard",
            option2: "B) The Witch",
            option3: "C) Florian and florizel",
            option4: "D) The king",
            ans: 3,
          },
          {
            question:
              "How many years did Florian take to reach the gate of the witches' garden?",
            option1: "A) Three years",
            option2: "B) One year",
            option3: "C) Two years",
            option4: "D) Four years",
            ans: 2,
          },
          {
            question: "Who will be marrying Florizel?",
            option1: "A) Princess Rosamond",
            option2: "B) Princess ugly witch",
            option3: "C) Wizard",
            option4: "D) Isabella",
            ans: 4,
          },
        ],
        Ke = () => {
          const [e, n] = (0, t.useState)(0),
            [r, a] = (0, t.useState)(Je[e]),
            [o, i] = (0, t.useState)(!1),
            [l, s] = (0, t.useState)(0),
            [u, c] = (0, t.useState)(!1),
            [d, h] = (0, t.useState)(10),
            [f, p] = (0, t.useState)(null),
            m = (0, t.useRef)(null),
            g = (0, t.useRef)(null),
            y = (0, t.useRef)(null),
            v = (0, t.useRef)(null),
            b = [m, g, y, v];
          (0, t.useEffect)(() => {
            h(10),
              e > 0 &&
                e < Je.length &&
                (a(Je[e]),
                i(!1),
                b.forEach((e) => {
                  e.current.classList.remove("incorrect"),
                    e.current.classList.remove("correct");
                }));
          }, [e]),
            (0, t.useEffect)(() => {
              const e = setInterval(() => {
                d > 0 && !o ? h((e) => e - 1) : 0 !== d || o || x();
              }, 1e3);
              return () => clearInterval(e);
            }, [d, o]);
          const w = (e, t) => {
              o ||
                (r.ans === t
                  ? (e.target.classList.add("correct"),
                    i(!0),
                    s((e) => e + 1),
                    p("Correct!"))
                  : (e.target.classList.add("incorrect"),
                    b[r.ans - 1].current.classList.add("correct"),
                    i(!0),
                    p("Incorrect!")));
            },
            x = () => {
              i(!0),
                b[r.ans - 1].current.classList.add("correct"),
                p("Time's up! The correct answer is:");
            };
          return (0, Ne.jsxs)("div", {
            className: "container",
            children: [
              (0, Ne.jsx)("h1", { children: "The Adventures Of Florian" }),
              (0, Ne.jsx)("hr", {}),
              u
                ? (0, Ne.jsxs)(Ne.Fragment, {
                    children: [
                      (0, Ne.jsxs)("h2", {
                        children: ["You Scored ", l, " out of ", Je.length],
                      }),
                      (0, Ne.jsx)("button", {
                        onClick: () => {
                          n(0), a(Je[0]), s(0), i(!1), c(!1), p(null);
                        },
                        children: "Reset",
                      }),
                    ],
                  })
                : (0, Ne.jsxs)(Ne.Fragment, {
                    children: [
                      (0, Ne.jsxs)("h2", {
                        children: [e + 1, ". ", r.question],
                      }),
                      (0, Ne.jsx)("div", {
                        className: "anscover",
                        children: (0, Ne.jsxs)("ul", {
                          children: [
                            (0, Ne.jsx)("li", {
                              ref: m,
                              onClick: (e) => w(e, 1),
                              children: r.option1,
                            }),
                            (0, Ne.jsx)("li", {
                              ref: g,
                              onClick: (e) => w(e, 2),
                              children: r.option2,
                            }),
                            (0, Ne.jsx)("li", {
                              ref: y,
                              onClick: (e) => w(e, 3),
                              children: r.option3,
                            }),
                            (0, Ne.jsx)("li", {
                              ref: v,
                              onClick: (e) => w(e, 4),
                              children: r.option4,
                            }),
                          ],
                        }),
                      }),
                      (0, Ne.jsx)("div", {
                        className: "selected-option",
                        children: f,
                      }),
                      (0, Ne.jsx)("button", {
                        onClick: () => {
                          o &&
                            (e === Je.length - 1
                              ? c(!0)
                              : (n((e) => e + 1), p(null)));
                        },
                        disabled: !o,
                        children: "Next",
                      }),
                      (0, Ne.jsxs)("div", {
                        className: "index",
                        children: [e + 1, " of ", Je.length, " questions"],
                      }),
                      (0, Ne.jsxs)("div", {
                        className: "timer",
                        children: ["Time Left: ", d],
                      }),
                    ],
                  }),
            ],
          });
        },
        Xe = [
          {
            question:
              "What was the officer's initial reaction to the woman's confession?",
            option1: "A) Disbelief",
            option2: "B) Fear",
            option3: "C) Anger",
            option4: "D) Sympathy",
            ans: 1,
          },
          {
            question: "Who did the woman claim to have killed?",
            option1: "A) Her gardener, her driver, and her mother",
            option2: "B) Her father, her brother, and her sister",
            option3: "C) Her teacher, her neighbor, and her friend",
            option4: "D) Her boss, her coworker, and her client",
            ans: 1,
          },
          {
            question:
              "Where did the woman claim to have buried the bodies of the gardener and the driver?",
            option1: "A) In the basement",
            option2: "B) In her garden",
            option3: "C) In the forest",
            option4: "D) In the local graveyard",
            ans: 2,
          },
          {
            question:
              "What happened when the officer followed the woman into the house?",
            option1: "A) He found the bodies in the garden",
            option2: "B) He was stabbed by the woman",
            option3: "C) He found the woman's mother alive",
            option4: "D) He arrested the woman",
            ans: 2,
          },
          {
            question: "What was the woman doing when the officer saw her last?",
            option1: "A) Singing songs and combing her hair",
            option2: "B) Crying and apologizing for her actions",
            option3: "C) Talking to herself in a mirror",
            option4: "D) Laughing uncontrollably",
            ans: 1,
          },
        ],
        Ze = () => {
          const [e, n] = (0, t.useState)(0),
            [r, a] = (0, t.useState)(Xe[e]),
            [o, i] = (0, t.useState)(!1),
            [l, s] = (0, t.useState)(0),
            [u, c] = (0, t.useState)(!1),
            [d, h] = (0, t.useState)(10),
            [f, p] = (0, t.useState)(null),
            m = (0, t.useRef)(null),
            g = (0, t.useRef)(null),
            y = (0, t.useRef)(null),
            v = (0, t.useRef)(null),
            b = [m, g, y, v];
          (0, t.useEffect)(() => {
            h(10),
              e > 0 &&
                e < Xe.length &&
                (a(Xe[e]),
                i(!1),
                b.forEach((e) => {
                  e.current.classList.remove("incorrect"),
                    e.current.classList.remove("correct");
                }));
          }, [e]),
            (0, t.useEffect)(() => {
              const e = setInterval(() => {
                d > 0 && !o ? h((e) => e - 1) : 0 !== d || o || x();
              }, 1e3);
              return () => clearInterval(e);
            }, [d, o]);
          const w = (e, t) => {
              o ||
                (r.ans === t
                  ? (e.target.classList.add("correct"),
                    i(!0),
                    s((e) => e + 1),
                    p("Correct!"))
                  : (e.target.classList.add("incorrect"),
                    b[r.ans - 1].current.classList.add("correct"),
                    i(!0),
                    p("Incorrect!")));
            },
            x = () => {
              i(!0),
                b[r.ans - 1].current.classList.add("correct"),
                p("Time's up! The correct answer is:");
            };
          return (0, Ne.jsxs)("div", {
            className: "container",
            children: [
              (0, Ne.jsx)("h1", { children: "SIR,I AM THE MURDERER\u2026" }),
              (0, Ne.jsx)("hr", {}),
              u
                ? (0, Ne.jsxs)(Ne.Fragment, {
                    children: [
                      (0, Ne.jsxs)("h2", {
                        children: ["You Scored ", l, " out of ", Xe.length],
                      }),
                      (0, Ne.jsx)("button", {
                        onClick: () => {
                          n(0), a(Xe[0]), s(0), i(!1), c(!1), p(null);
                        },
                        children: "Reset",
                      }),
                    ],
                  })
                : (0, Ne.jsxs)(Ne.Fragment, {
                    children: [
                      (0, Ne.jsxs)("h2", {
                        children: [e + 1, ". ", r.question],
                      }),
                      (0, Ne.jsx)("div", {
                        className: "anscover",
                        children: (0, Ne.jsxs)("ul", {
                          children: [
                            (0, Ne.jsx)("li", {
                              ref: m,
                              onClick: (e) => w(e, 1),
                              children: r.option1,
                            }),
                            (0, Ne.jsx)("li", {
                              ref: g,
                              onClick: (e) => w(e, 2),
                              children: r.option2,
                            }),
                            (0, Ne.jsx)("li", {
                              ref: y,
                              onClick: (e) => w(e, 3),
                              children: r.option3,
                            }),
                            (0, Ne.jsx)("li", {
                              ref: v,
                              onClick: (e) => w(e, 4),
                              children: r.option4,
                            }),
                          ],
                        }),
                      }),
                      (0, Ne.jsx)("div", {
                        className: "selected-option",
                        children: f,
                      }),
                      (0, Ne.jsx)("button", {
                        onClick: () => {
                          o &&
                            (e === Xe.length - 1
                              ? c(!0)
                              : (n((e) => e + 1), p(null)));
                        },
                        disabled: !o,
                        children: "Next",
                      }),
                      (0, Ne.jsxs)("div", {
                        className: "index",
                        children: [e + 1, " of ", Xe.length, " questions"],
                      }),
                      (0, Ne.jsxs)("div", {
                        className: "timer",
                        children: ["Time Left: ", d],
                      }),
                    ],
                  }),
            ],
          });
        },
        et = [
          {
            question:
              "In what way does the opening of the story convey the urgency and unexpected nature of Martha Hale's departure from her kitchen?",
            option1: "A) Through a calm and deliberate description",
            option2: "B) By emphasizing the routine and mundane activities",
            option3: "C) By highlighting the chaotic state of the kitchen",
            option4: "D) Through a detailed account of Martha's emotions",
            ans: 3,
          },
          {
            question:
              "How does the author use language to highlight the significance of Martha Hale's kitchen and the unfinished tasks within it?",
            option1: "A) By downplaying the importance of the kitchen",
            option2: "B) Through vivid imagery and sensory details",
            option3: "C) By omitting details about the kitchen",
            option4: "D) Through abstract and ambiguous language",
            ans: 2,
          },
          {
            question:
              "What role does Martha Hale's reaction to her kitchen's state play in revealing her character and priorities?",
            option1: "A) It suggests she is indifferent to her surroundings",
            option2: "B) It portrays her as meticulous and detail-oriented",
            option3: "C) It implies she is easily distracted and disorganized",
            option4: "D) It signifies her disregard for household chores",
            ans: 4,
          },
          {
            question:
              "Analyze the sheriff's comment about Mrs. Hale being 'scary' and wanting another woman along. How does this language contribute to the overall tone of the narrative?",
            option1: "A) It adds humor and lightens the tone",
            option2: "B) It creates a tense and suspenseful atmosphere",
            option3: "C) It suggests a lack of seriousness in the situation",
            option4: "D) It establishes a somber and melancholic mood",
            ans: 2,
          },
          {
            question:
              "Considering that the story was adapted from Glaspell's play 'Trifles' and is based on a murder case she covered as a reporter, discuss how the language proficiency in the text sets the scene for a detective story and the unfolding events.",
            option1: "A) By using straightforward and simple language",
            option2: "B) Through complex and convoluted language",
            option3: "C) By employing vivid and descriptive language",
            option4: "D) Through minimalistic and sparse language",
            ans: 1,
          },
        ],
        tt = () => {
          const [e, n] = (0, t.useState)(0),
            [r, a] = (0, t.useState)(et[e]),
            [o, i] = (0, t.useState)(!1),
            [l, s] = (0, t.useState)(0),
            [u, c] = (0, t.useState)(!1),
            [d, h] = (0, t.useState)(10),
            [f, p] = (0, t.useState)(null),
            m = (0, t.useRef)(null),
            g = (0, t.useRef)(null),
            y = (0, t.useRef)(null),
            v = (0, t.useRef)(null),
            b = [m, g, y, v];
          (0, t.useEffect)(() => {
            h(10),
              e > 0 &&
                e < et.length &&
                (a(et[e]),
                i(!1),
                b.forEach((e) => {
                  e.current.classList.remove("incorrect"),
                    e.current.classList.remove("correct");
                }));
          }, [e]),
            (0, t.useEffect)(() => {
              const e = setInterval(() => {
                d > 0 && !o ? h((e) => e - 1) : 0 !== d || o || x();
              }, 1e3);
              return () => clearInterval(e);
            }, [d, o]);
          const w = (e, t) => {
              o ||
                (r.ans === t
                  ? (e.target.classList.add("correct"),
                    i(!0),
                    s((e) => e + 1),
                    p("Correct!"))
                  : (e.target.classList.add("incorrect"),
                    b[r.ans - 1].current.classList.add("correct"),
                    i(!0),
                    p("Incorrect!")));
            },
            x = () => {
              i(!0),
                b[r.ans - 1].current.classList.add("correct"),
                p("Time's up! The correct answer is:");
            };
          return (0, Ne.jsxs)("div", {
            className: "container",
            children: [
              (0, Ne.jsx)("h1", { children: "A Jury of Her Peers" }),
              (0, Ne.jsx)("hr", {}),
              u
                ? (0, Ne.jsxs)(Ne.Fragment, {
                    children: [
                      (0, Ne.jsxs)("h2", {
                        children: ["You Scored ", l, " out of ", et.length],
                      }),
                      (0, Ne.jsx)("button", {
                        onClick: () => {
                          n(0), a(et[0]), s(0), i(!1), c(!1), p(null);
                        },
                        children: "Reset",
                      }),
                    ],
                  })
                : (0, Ne.jsxs)(Ne.Fragment, {
                    children: [
                      (0, Ne.jsxs)("h2", {
                        children: [e + 1, ". ", r.question],
                      }),
                      (0, Ne.jsx)("div", {
                        className: "anscover",
                        children: (0, Ne.jsxs)("ul", {
                          children: [
                            (0, Ne.jsx)("li", {
                              ref: m,
                              onClick: (e) => w(e, 1),
                              children: r.option1,
                            }),
                            (0, Ne.jsx)("li", {
                              ref: g,
                              onClick: (e) => w(e, 2),
                              children: r.option2,
                            }),
                            (0, Ne.jsx)("li", {
                              ref: y,
                              onClick: (e) => w(e, 3),
                              children: r.option3,
                            }),
                            (0, Ne.jsx)("li", {
                              ref: v,
                              onClick: (e) => w(e, 4),
                              children: r.option4,
                            }),
                          ],
                        }),
                      }),
                      (0, Ne.jsx)("div", {
                        className: "selected-option",
                        children: f,
                      }),
                      (0, Ne.jsx)("button", {
                        onClick: () => {
                          o &&
                            (e === et.length - 1
                              ? c(!0)
                              : (n((e) => e + 1), p(null)));
                        },
                        disabled: !o,
                        children: "Next",
                      }),
                      (0, Ne.jsxs)("div", {
                        className: "index",
                        children: [e + 1, " of ", et.length, " questions"],
                      }),
                      (0, Ne.jsxs)("div", {
                        className: "timer",
                        children: ["Time Left: ", d],
                      }),
                    ],
                  }),
            ],
          });
        },
        nt = [
          {
            question:
              "1. What does Miriam gather from the forest at the beginning of the story?",
            option1: "A) Mushrooms",
            option2: "B) Berries",
            option3: "C) Leaves",
            option4: "D) Flowers",
            ans: 2,
          },
          {
            question:
              "2. How does Miriam react when she sees the gleaners approaching the camp?",
            option1: "A) She confronts them head-on",
            option2: "B) She hides and tries to warn the others",
            option3: "C) She surrenders to them willingly",
            option4: "D) She flees into the forest",
            ans: 2,
          },
          {
            question:
              "3. What does the helicopter do when it arrives at the camp?",
            option1: "A) It drops supplies for the survivors",
            option2: "B) It destroys the camp with a missile",
            option3: "C) It scans the area with its lights",
            option4: "D) It lands to pick up the survivors",
            ans: 3,
          },
          {
            question:
              "4. How does Miriam's past experiences influence her actions in the story?",
            option1: "A) They make her fearful and hesitant",
            option2: "B) They make her determined and resilient",
            option3: "C) They make her distrustful of others",
            option4: "D) They make her reckless and impulsive",
            ans: 2,
          },
          {
            question:
              "5. How does Miriam's internal conflict drive the narrative?",
            option1: "A) It motivates her to surrender to the machines",
            option2: "B) It pushes her to confront Eric and the camp community",
            option3: "C) It leads her to question her loyalty and beliefs",
            option4: "D) It compels her to seek revenge against the gleaners",
            ans: 3,
          },
        ],
        rt = () => {
          const [e, n] = (0, t.useState)(0),
            [r, a] = (0, t.useState)(nt[e]),
            [o, i] = (0, t.useState)(!1),
            [l, s] = (0, t.useState)(0),
            [u, c] = (0, t.useState)(!1),
            [d, h] = (0, t.useState)(10),
            [f, p] = (0, t.useState)(null),
            m = (0, t.useRef)(null),
            g = (0, t.useRef)(null),
            y = (0, t.useRef)(null),
            v = (0, t.useRef)(null),
            b = [m, g, y, v];
          (0, t.useEffect)(() => {
            h(10),
              e > 0 &&
                e < nt.length &&
                (a(nt[e]),
                i(!1),
                b.forEach((e) => {
                  e.current.classList.remove("incorrect"),
                    e.current.classList.remove("correct");
                }));
          }, [e]),
            (0, t.useEffect)(() => {
              const e = setInterval(() => {
                d > 0 && !o ? h((e) => e - 1) : 0 !== d || o || x();
              }, 1e3);
              return () => clearInterval(e);
            }, [d, o]);
          const w = (e, t) => {
              o ||
                (r.ans === t
                  ? (e.target.classList.add("correct"),
                    i(!0),
                    s((e) => e + 1),
                    p("Correct!"))
                  : (e.target.classList.add("incorrect"),
                    b[r.ans - 1].current.classList.add("correct"),
                    i(!0),
                    p("Incorrect!")));
            },
            x = () => {
              i(!0),
                b[r.ans - 1].current.classList.add("correct"),
                p("Time's up! The correct answer is:");
            };
          return (0, Ne.jsxs)("div", {
            className: "container",
            children: [
              (0, Ne.jsx)("h1", { children: "NOT YET ACTIVATED" }),
              (0, Ne.jsx)("hr", {}),
              u
                ? (0, Ne.jsxs)(Ne.Fragment, {
                    children: [
                      (0, Ne.jsxs)("h2", {
                        children: ["You Scored ", l, " out of ", nt.length],
                      }),
                      (0, Ne.jsx)("button", {
                        onClick: () => {
                          n(0), a(nt[0]), s(0), i(!1), c(!1), p(null);
                        },
                        children: "Reset",
                      }),
                    ],
                  })
                : (0, Ne.jsxs)(Ne.Fragment, {
                    children: [
                      (0, Ne.jsxs)("h2", {
                        children: [e + 1, ". ", r.question],
                      }),
                      (0, Ne.jsx)("div", {
                        className: "anscover",
                        children: (0, Ne.jsxs)("ul", {
                          children: [
                            (0, Ne.jsx)("li", {
                              ref: m,
                              onClick: (e) => w(e, 1),
                              children: r.option1,
                            }),
                            (0, Ne.jsx)("li", {
                              ref: g,
                              onClick: (e) => w(e, 2),
                              children: r.option2,
                            }),
                            (0, Ne.jsx)("li", {
                              ref: y,
                              onClick: (e) => w(e, 3),
                              children: r.option3,
                            }),
                            (0, Ne.jsx)("li", {
                              ref: v,
                              onClick: (e) => w(e, 4),
                              children: r.option4,
                            }),
                          ],
                        }),
                      }),
                      (0, Ne.jsx)("div", {
                        className: "selected-option",
                        children: f,
                      }),
                      (0, Ne.jsx)("button", {
                        onClick: () => {
                          o &&
                            (e === nt.length - 1
                              ? c(!0)
                              : (n((e) => e + 1), p(null)));
                        },
                        disabled: !o,
                        children: "Next",
                      }),
                      (0, Ne.jsxs)("div", {
                        className: "index",
                        children: [e + 1, " of ", nt.length, " questions"],
                      }),
                      (0, Ne.jsxs)("div", {
                        className: "timer",
                        children: ["Time Left: ", d],
                      }),
                    ],
                  }),
            ],
          });
        },
        at = [
          {
            question:
              "1. What is the primary reason the protagonist gives for wanting to kill the old man?",
            option1: "A) The old man wronged the protagonist in the past",
            option2: "B) The old man possesses great wealth",
            option3:
              "C) The protagonist is driven by a passionate desire for revenge",
            option4:
              "D) The protagonist is troubled by the old man's 'vulture eye'",
            ans: 4,
          },
          {
            question:
              "2. How does the protagonist feel about the old man, aside from the eye?",
            option1: "A) The protagonist deeply loves and respects the old man",
            option2:
              "B) The protagonist holds a neutral opinion of the old man",
            option3: "C) The protagonist fears and despises the old man",
            option4:
              "D) The protagonist admires the old man's wealth and success",
            ans: 3,
          },
          {
            question:
              "3. What time does the protagonist typically visit the old man's room?",
            option1: "A) Just before dawn",
            option2: "B) At noon",
            option3: "C) Around midnight",
            option4: "D) In the early evening",
            ans: 3,
          },
          {
            question:
              "4. What ultimately leads to the protagonist's confession to the police?",
            option1:
              "A) The police discover the old man's body hidden in the house",
            option2:
              "B) The protagonist feels guilty about the murder and decides to confess",
            option3:
              "C) The protagonist's fear of the old man's eye drives them to madness",
            option4:
              "D) The police hear the sound of the old man's heart beating under the floorboards",
            ans: 4,
          },
          {
            question:
              "5. How does the protagonist react to the sound of the old man's heart?",
            option1: "A) They are unaffected by it",
            option2: "B) They find it soothing and comforting",
            option3: "C) They become increasingly agitated and disturbed by it",
            option4:
              "D) They believe it is a figment of their imagination and ignore it",
            ans: 3,
          },
        ],
        ot = () => {
          const [e, n] = (0, t.useState)(0),
            [r, a] = (0, t.useState)(at[e]),
            [o, i] = (0, t.useState)(!1),
            [l, s] = (0, t.useState)(0),
            [u, c] = (0, t.useState)(!1),
            [d, h] = (0, t.useState)(10),
            [f, p] = (0, t.useState)(null),
            m = (0, t.useRef)(null),
            g = (0, t.useRef)(null),
            y = (0, t.useRef)(null),
            v = (0, t.useRef)(null),
            b = [m, g, y, v];
          (0, t.useEffect)(() => {
            h(10),
              e > 0 &&
                e < at.length &&
                (a(at[e]),
                i(!1),
                b.forEach((e) => {
                  e.current.classList.remove("incorrect"),
                    e.current.classList.remove("correct");
                }));
          }, [e]),
            (0, t.useEffect)(() => {
              const e = setInterval(() => {
                d > 0 && !o ? h((e) => e - 1) : 0 !== d || o || x();
              }, 1e3);
              return () => clearInterval(e);
            }, [d, o]);
          const w = (e, t) => {
              o ||
                (r.ans === t
                  ? (e.target.classList.add("correct"),
                    i(!0),
                    s((e) => e + 1),
                    p("Correct!"))
                  : (e.target.classList.add("incorrect"),
                    b[r.ans - 1].current.classList.add("correct"),
                    i(!0),
                    p("Incorrect!")));
            },
            x = () => {
              i(!0),
                b[r.ans - 1].current.classList.add("correct"),
                p("Time's up! The correct answer is:");
            };
          return (0, Ne.jsxs)("div", {
            className: "container",
            children: [
              (0, Ne.jsx)("h1", { children: "The Tell-Tale Heart" }),
              (0, Ne.jsx)("hr", {}),
              u
                ? (0, Ne.jsxs)(Ne.Fragment, {
                    children: [
                      (0, Ne.jsxs)("h2", {
                        children: ["You Scored ", l, " out of ", at.length],
                      }),
                      (0, Ne.jsx)("button", {
                        onClick: () => {
                          n(0), a(at[0]), s(0), i(!1), c(!1), p(null);
                        },
                        children: "Reset",
                      }),
                    ],
                  })
                : (0, Ne.jsxs)(Ne.Fragment, {
                    children: [
                      (0, Ne.jsxs)("h2", {
                        children: [e + 1, ". ", r.question],
                      }),
                      (0, Ne.jsx)("div", {
                        className: "anscover",
                        children: (0, Ne.jsxs)("ul", {
                          children: [
                            (0, Ne.jsx)("li", {
                              ref: m,
                              onClick: (e) => w(e, 1),
                              children: r.option1,
                            }),
                            (0, Ne.jsx)("li", {
                              ref: g,
                              onClick: (e) => w(e, 2),
                              children: r.option2,
                            }),
                            (0, Ne.jsx)("li", {
                              ref: y,
                              onClick: (e) => w(e, 3),
                              children: r.option3,
                            }),
                            (0, Ne.jsx)("li", {
                              ref: v,
                              onClick: (e) => w(e, 4),
                              children: r.option4,
                            }),
                          ],
                        }),
                      }),
                      (0, Ne.jsx)("div", {
                        className: "selected-option",
                        children: f,
                      }),
                      (0, Ne.jsx)("button", {
                        onClick: () => {
                          o &&
                            (e === at.length - 1
                              ? c(!0)
                              : (n((e) => e + 1), p(null)));
                        },
                        disabled: !o,
                        children: "Next",
                      }),
                      (0, Ne.jsxs)("div", {
                        className: "index",
                        children: [e + 1, " of ", at.length, " questions"],
                      }),
                      (0, Ne.jsxs)("div", {
                        className: "timer",
                        children: ["Time Left: ", d],
                      }),
                    ],
                  }),
            ],
          });
        },
        it = [
          {
            question: "1). What is Jack's job?",
            option1: "A) Detective",
            option2: "B) Police",
            option3: "C) Doctor",
            option4: "D) Attorney",
            ans: 1,
          },
          {
            question: "2). What kind of case does the boss give to Jack?",
            option1: "A) Illegal grumbling",
            option2: "B) Killing",
            option3: "C) Robbing",
            option4: "D) Accident",
            ans: 3,
          },
          {
            question: "3). How many days does the thief become famous?",
            option1: "A) Three days",
            option2: "B) Five days",
            option3: "C) Four days",
            option4: "D) Two days",
            ans: 2,
          },
          {
            question:
              "4). What is the shape of the tattoo on the thief's left wrist?",
            option1: "A) Heart",
            option2: "B) Snake",
            option3: "C) Fire",
            option4: "D) Bird",
            ans: 4,
          },
          {
            question:
              "5). After getting caught, does the thief escape from his cell?",
            option1: "A) Yes, because he is good at escaping",
            option2: "B) No, because he doesn't know how to escape",
            option3: "C) Maybe, because the thief has supernatural strength",
            option4: "D) Yes, because the cell is unlocked",
            ans: 1,
          },
        ],
        lt = () => {
          const [e, n] = (0, t.useState)(0),
            [r, a] = (0, t.useState)(it[e]),
            [o, i] = (0, t.useState)(!1),
            [l, s] = (0, t.useState)(0),
            [u, c] = (0, t.useState)(!1),
            [d, h] = (0, t.useState)(10),
            [f, p] = (0, t.useState)(null),
            m = (0, t.useRef)(null),
            g = (0, t.useRef)(null),
            y = (0, t.useRef)(null),
            v = (0, t.useRef)(null),
            b = [m, g, y, v];
          (0, t.useEffect)(() => {
            h(10),
              e > 0 &&
                e < it.length &&
                (a(it[e]),
                i(!1),
                b.forEach((e) => {
                  e.current.classList.remove("incorrect"),
                    e.current.classList.remove("correct");
                }));
          }, [e]),
            (0, t.useEffect)(() => {
              const e = setInterval(() => {
                d > 0 && !o ? h((e) => e - 1) : 0 !== d || o || x();
              }, 1e3);
              return () => clearInterval(e);
            }, [d, o]);
          const w = (e, t) => {
              o ||
                (r.ans === t
                  ? (e.target.classList.add("correct"),
                    i(!0),
                    s((e) => e + 1),
                    p("Correct!"))
                  : (e.target.classList.add("incorrect"),
                    b[r.ans - 1].current.classList.add("correct"),
                    i(!0),
                    p("Incorrect!")));
            },
            x = () => {
              i(!0),
                b[r.ans - 1].current.classList.add("correct"),
                p("Time's up! The correct answer is:");
            };
          return (0, Ne.jsxs)("div", {
            className: "container",
            children: [
              (0, Ne.jsx)("h1", { children: "Within a blink on an eye" }),
              (0, Ne.jsx)("hr", {}),
              u
                ? (0, Ne.jsxs)(Ne.Fragment, {
                    children: [
                      (0, Ne.jsxs)("h2", {
                        children: ["You Scored ", l, " out of ", it.length],
                      }),
                      (0, Ne.jsx)("button", {
                        onClick: () => {
                          n(0), a(it[0]), s(0), i(!1), c(!1), p(null);
                        },
                        children: "Reset",
                      }),
                    ],
                  })
                : (0, Ne.jsxs)(Ne.Fragment, {
                    children: [
                      (0, Ne.jsxs)("h2", {
                        children: [e + 1, ". ", r.question],
                      }),
                      (0, Ne.jsx)("div", {
                        className: "anscover",
                        children: (0, Ne.jsxs)("ul", {
                          children: [
                            (0, Ne.jsx)("li", {
                              ref: m,
                              onClick: (e) => w(e, 1),
                              children: r.option1,
                            }),
                            (0, Ne.jsx)("li", {
                              ref: g,
                              onClick: (e) => w(e, 2),
                              children: r.option2,
                            }),
                            (0, Ne.jsx)("li", {
                              ref: y,
                              onClick: (e) => w(e, 3),
                              children: r.option3,
                            }),
                            (0, Ne.jsx)("li", {
                              ref: v,
                              onClick: (e) => w(e, 4),
                              children: r.option4,
                            }),
                          ],
                        }),
                      }),
                      (0, Ne.jsx)("div", {
                        className: "selected-option",
                        children: f,
                      }),
                      (0, Ne.jsx)("button", {
                        onClick: () => {
                          o &&
                            (e === it.length - 1
                              ? c(!0)
                              : (n((e) => e + 1), p(null)));
                        },
                        disabled: !o,
                        children: "Next",
                      }),
                      (0, Ne.jsxs)("div", {
                        className: "index",
                        children: [e + 1, " of ", it.length, " questions"],
                      }),
                      (0, Ne.jsxs)("div", {
                        className: "timer",
                        children: ["Time Left: ", d],
                      }),
                    ],
                  }),
            ],
          });
        },
        st = () =>
          (0, Ne.jsx)("div", {
            children: (0, Ne.jsx)("h1", {
              children: "This Page is Currently under Maintenance",
            }),
          });
      const ut = function () {
          return (0, Ne.jsxs)(xe, {
            children: [
              (0, Ne.jsx)(ze, {}),
              (0, Ne.jsxs)(me, {
                children: [
                  (0, Ne.jsx)(fe, { path: "/", element: (0, Ne.jsx)(Te, {}) }),
                  (0, Ne.jsx)(fe, {
                    path: "/menu",
                    element: (0, Ne.jsx)(_e, {}),
                  }),
                  (0, Ne.jsx)(fe, {
                    path: "/story1",
                    element: (0, Ne.jsx)(Pe, {}),
                  }),
                  (0, Ne.jsx)(fe, {
                    path: "/story2",
                    element: (0, Ne.jsx)(Le, {}),
                  }),
                  (0, Ne.jsx)(fe, {
                    path: "/story3",
                    element: (0, Ne.jsx)(Re, {}),
                  }),
                  (0, Ne.jsx)(fe, {
                    path: "/story4",
                    element: (0, Ne.jsx)(Fe, {}),
                  }),
                  (0, Ne.jsx)(fe, {
                    path: "/story5",
                    element: (0, Ne.jsx)(De, {}),
                  }),
                  (0, Ne.jsx)(fe, {
                    path: "/story6",
                    element: (0, Ne.jsx)(Ae, {}),
                  }),
                  (0, Ne.jsx)(fe, {
                    path: "/story7",
                    element: (0, Ne.jsx)(Me, {}),
                  }),
                  (0, Ne.jsx)(fe, {
                    path: "/story8",
                    element: (0, Ne.jsx)(Oe, {}),
                  }),
                  (0, Ne.jsx)(fe, {
                    path: "/story9",
                    element: (0, Ne.jsx)(Be, {}),
                  }),
                  (0, Ne.jsx)(fe, {
                    path: "/story10",
                    element: (0, Ne.jsx)(We, {}),
                  }),
                  (0, Ne.jsx)(fe, {
                    path: "/quiz1",
                    element: (0, Ne.jsx)(qe, {}),
                  }),
                  (0, Ne.jsx)(fe, {
                    path: "/quiz2",
                    element: (0, Ne.jsx)($e, {}),
                  }),
                  (0, Ne.jsx)(fe, {
                    path: "/quiz3",
                    element: (0, Ne.jsx)(Qe, {}),
                  }),
                  (0, Ne.jsx)(fe, {
                    path: "/quiz4",
                    element: (0, Ne.jsx)(Ye, {}),
                  }),
                  (0, Ne.jsx)(fe, {
                    path: "/quiz5",
                    element: (0, Ne.jsx)(Ke, {}),
                  }),
                  (0, Ne.jsx)(fe, {
                    path: "/quiz6",
                    element: (0, Ne.jsx)(Ze, {}),
                  }),
                  (0, Ne.jsx)(fe, {
                    path: "/quiz7",
                    element: (0, Ne.jsx)(tt, {}),
                  }),
                  (0, Ne.jsx)(fe, {
                    path: "/quiz8",
                    element: (0, Ne.jsx)(rt, {}),
                  }),
                  (0, Ne.jsx)(fe, {
                    path: "/quiz9",
                    element: (0, Ne.jsx)(ot, {}),
                  }),
                  (0, Ne.jsx)(fe, {
                    path: "/quiz10",
                    element: (0, Ne.jsx)(lt, {}),
                  }),
                  (0, Ne.jsx)(fe, {
                    path: "/about",
                    element: (0, Ne.jsx)(st, {}),
                  }),
                ],
              }),
            ],
          });
        },
        ct = (e) => {
          e &&
            e instanceof Function &&
            n
              .e(453)
              .then(n.bind(n, 453))
              .then((t) => {
                let {
                  getCLS: n,
                  getFID: r,
                  getFCP: a,
                  getLCP: o,
                  getTTFB: i,
                } = t;
                n(e), r(e), a(e), o(e), i(e);
              });
        };
      a
        .createRoot(document.getElementById("root"))
        .render((0, Ne.jsx)(t.StrictMode, { children: (0, Ne.jsx)(ut, {}) })),
        ct();
    })();
})();
//# sourceMappingURL=main.e51b5644.js.map
