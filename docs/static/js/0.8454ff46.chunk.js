;(this.webpackJsonpexample = this.webpackJsonpexample || []).push([
  [0],
  {
    138: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'createSwipeBackGesture', function () {
          return i
        })
      var r = n(12),
        a = n(37),
        i =
          (n(27),
          function (e, t, n, i, c) {
            var o = e.ownerDocument.defaultView
            return Object(a.createGesture)({
              el: e,
              gestureName: 'goback-swipe',
              gesturePriority: 40,
              threshold: 10,
              canStart: function (e) {
                return e.startX <= 50 && t()
              },
              onStart: n,
              onMove: function (e) {
                var t = e.deltaX / o.innerWidth
                i(t)
              },
              onEnd: function (e) {
                var t = e.deltaX,
                  n = o.innerWidth,
                  a = t / n,
                  i = e.velocityX,
                  u = n / 2,
                  s = i >= 0 && (i > 0.2 || e.deltaX > u),
                  d = (s ? 1 - a : a) * n,
                  h = 0
                if (d > 5) {
                  var l = d / Math.abs(i)
                  h = Math.min(l, 540)
                }
                c(s, a <= 0 ? 0.01 : Object(r.j)(0, a, 0.9999), h)
              },
            })
          })
    },
  },
])
//# sourceMappingURL=0.8454ff46.chunk.js.map
