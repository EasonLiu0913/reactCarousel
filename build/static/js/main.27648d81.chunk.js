(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
  [0],
  {
    21: function(t, a, e) {
      t.exports = e(35);
    },
    26: function(t, a, e) {},
    27: function(t, a, e) {},
    29: function(t, a, e) {},
    35: function(t, a, e) {
      "use strict";
      e.r(a);
      var i = e(0),
        n = e.n(i),
        r = e(15),
        l = e.n(r),
        s = (e(26), e(27), e(17)),
        o = e(7),
        c = e(20),
        d = (e(28), e(29), e(36));
      var m = function(t) {
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            "div",
            {
              className: "position-absolute",
              style: {
                right: t.data.divRight,
                maxHeight: t.data.divMaxHeight,
                maxWidth: t.data.divMaxWidth,
                zIndex: t.data.divZIndex,
                transition: t.data.divTransition
              }
            },
            n.a.createElement("img", {
              style: {
                filter: "grayscale(" + t.data.imgGrayScale + ")",
                transition: t.data.imgTransition
              },
              src: "/reactCarousel/build/images/activity/IMG_6108.jpg",
              alt: "hotactivity_sideKV"
            }),
            n.a.createElement(
              "div",
              {
                style: {
                  marginLeft: t.data.titleMarginLeft,
                  transition: t.data.titleTransition
                },
                className: "aSideCarouselInfo position-absolute"
              },
              n.a.createElement(d.a.Title, { className: "m-0" }, "Card Title")
            )
          )
        );
      };
      var v = function(t) {
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            "div",
            {
              className: "position-absolute",
              style: {
                right: t.data.divRight,
                maxHeight: t.data.divMaxHeight,
                maxWidth: t.data.divMaxWidth,
                zIndex: t.data.divZIndex,
                transition: t.data.divTransition
              }
            },
            n.a.createElement("img", {
              style: {
                filter: "grayscale(" + t.data.imgGrayScale + ")",
                transition: t.data.imgTransition
              },
              src: "/reactCarousel/build/images/activity/smile.jpg",
              alt: "hotactivity_sideKV"
            }),
            n.a.createElement(
              "div",
              {
                style: {
                  marginLeft: t.data.titleMarginLeft,
                  transition: t.data.titleTransition
                },
                className: "aSideCarouselInfo position-absolute"
              },
              n.a.createElement(d.a.Title, { className: "m-0" }, "Card Title")
            )
          )
        );
      };
      var g = function(t) {
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            "div",
            {
              className: "position-absolute",
              style: {
                right: t.data.divRight,
                maxHeight: t.data.divMaxHeight,
                maxWidth: t.data.divMaxWidth,
                zIndex: t.data.divZIndex,
                transition: t.data.divTransition
              }
            },
            n.a.createElement("img", {
              style: {
                filter: "grayscale(" + t.data.imgGrayScale + ")",
                transition: t.data.imgTransition
              },
              src: "/reactCarousel/build/images/activity/coding.png",
              alt: "hotactivity_MainKV"
            }),
            n.a.createElement(
              "div",
              {
                style: {
                  marginLeft: t.data.titleMarginLeft,
                  transition: t.data.titleTransition
                },
                className: "aSideCarouselInfo position-absolute"
              },
              n.a.createElement(d.a.Title, { className: "m-0" }, "Card Title")
            )
          )
        );
      };
      var u = function() {
        var t = Object(i.useState)(0),
          a = Object(c.a)(t, 2),
          e = a[0],
          r = a[1];
        !(function(t, a) {
          var e = Object(i.useRef)();
          Object(i.useEffect)(
            function() {
              e.current = t;
            },
            [t]
          ),
            Object(i.useEffect)(
              function() {
                if (null !== a) {
                  var t = setInterval(function() {
                    e.current();
                  }, a);
                  return function() {
                    return clearInterval(t);
                  };
                }
              },
              [a]
            );
        })(function() {
          r(e + 1);
        }, 3e3);
        var l = [
          {
            divRight: "calc(100vw - 600px - 60px)",
            divMaxHeight: "400px",
            divMaxWidth: "600px",
            divZIndex: "99",
            divTransition: "3s",
            imgGrayScale: "90%",
            imgTransition: "0s",
            titleMarginLeft: "60px",
            titleTransition: "2.3s"
          },
          {
            divRight: "60px",
            divMaxHeight: "400px",
            divMaxWidth: "600px",
            divZIndex: "100",
            divTransition: "3s",
            imgGrayScale: "90%",
            imgTransition: "0s",
            titleMarginLeft: "451px",
            titleTransition: "2.3s"
          },
          {
            divRight: "calc(50vw - 450px)",
            divMaxHeight: "600px",
            divMaxWidth: "900px",
            divZIndex: "101",
            divTransition: "3s",
            imgGrayScale: "0%",
            imgTransition: "0s",
            titleMarginLeft: "60px",
            titleTransition: "2.3s"
          }
        ];
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            "div",
            null,
            n.a.createElement(
              "div",
              {
                className:
                  "aKV d-flex justify-content-between position-relative"
              },
              n.a.createElement(m, { data: l[e % 3] }),
              n.a.createElement(v, {
                data: l[(e % 3) + 1 > 2 ? 0 : (e % 3) + 1]
              }),
              n.a.createElement(g, {
                data: l[(e % 3) - 1 < 0 ? 2 : (e % 3) - 1]
              })
            )
          )
        );
      };
      var x = function() {
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            s.a,
            null,
            n.a.createElement(o.a, { path: "/" }, n.a.createElement(u, null))
          )
        );
      };
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      l.a.render(
        n.a.createElement(n.a.StrictMode, null, n.a.createElement(x, null)),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function(t) {
              t.unregister();
            })
            .catch(function(t) {
              console.error(t.message);
            });
    }
  },
  [[21, 1, 2]]
]);
//# sourceMappingURL=main.27648d81.chunk.js.map
