var s = document.createElement('style');
var q = String.fromCharCode(34);
s.innerHTML = 'html, body { background: transparent; margin: 0; padding: 0; overflow: hidden; -webkit-tap-highlight-color: transparent; } canvas { image-rendering: -webkit-optimize-contrast !important; image-rendering: high-quality !important; transform: translate3d(0,0,0); -webkit-transform: translate3d(0,0,0); backface-visibility: hidden; -webkit-backface-visibility: hidden; perspective: 1000; -webkit-perspective: 1000; filter: contrast(105%) saturate(110%) brightness(102%); } * { -webkit-font-smoothing: antialiased !important; -moz-osx-font-smoothing: grayscale !important; text-rendering: optimizeLegibility !important; }';
document.head.appendChild(s);

if (window.nw) {
    var win = nw.Window.get();
    win.setShadow(true);
    var screen = nw.Screen.Init();
    screen.on('displayBoundsChanged', function() {
        return;
    });
}

var canvases = document.getElementsByTagName('canvas');
for (var i = 0; i < canvases.length; i++) {
    var c = canvases[i];
    var ctx = c.getContext('2d', {
        alpha: true,
        desynchronized: true,
        preserveDrawingBuffer: true
    });
    if (ctx) {
        ctx.imageSmoothingEnabled = false;
        ctx.webkitImageSmoothingEnabled = false;
        ctx.imageSmoothingQuality = 'high';
    }
}

window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame;