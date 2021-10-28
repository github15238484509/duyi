(window.player || (window.player = {})).blurImg = function(t, e) { var r = document.createElement("canvas");
    e = e || document.body, r.width = 100, r.height = 100; var o = r.getContext("2d"),
        h = new Image;
    h.src = t, h.onload = function() { o.drawImage(h, 0, 0, h.width, h.height, 0, 0, r.width, r.height); var t = function(t) { var a, e, r, o, h, n, d, g, i, f, w = t.data,
                u = t.width,
                c = t.height,
                m = [],
                l = 0,
                I = 10; for (n = 1 / (5 * Math.sqrt(2 * Math.PI)), h = -.02, d = 0, a = -I; a <= I; a++, d++) o = n * Math.exp(h * a * a), l += m[d] = o; for (d = 0, f = m.length; d < f; d++) m[d] /= l; for (e = 0; e < c; e++)
                for (a = 0; a < u; a++) { for (r = o = h = n = 0, l = 0, g = -I; g <= I; g++) 0 <= (i = a + g) && i < u && (r += w[d = 4 * (e * u + i)] * m[g + I], o += w[d + 1] * m[g + I], h += w[d + 2] * m[g + I], l += m[g + I]);
                    w[d = 4 * (e * u + a)] = r / l, w[d + 1] = o / l, w[d + 2] = h / l }
            for (a = 0; a < u; a++)
                for (e = 0; e < c; e++) { for (r = o = h = n = 0, l = 0, g = -I; g <= I; g++) 0 <= (i = e + g) && i < c && (r += w[d = 4 * (i * u + a)] * m[g + I], o += w[d + 1] * m[g + I], h += w[d + 2] * m[g + I], l += m[g + I]);
                    w[d = 4 * (e * u + a)] = r / l, w[d + 1] = o / l, w[d + 2] = h / l }
            return t }(o.getImageData(0, 0, r.width, r.height));
        o.putImageData(t, 0, 0); var a = r.toDataURL();
        e.style.backgroundImage = "url(" + a + ")" } };