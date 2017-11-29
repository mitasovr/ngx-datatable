"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prefixes_1 = require("./prefixes");
// browser detection and prefixing tools
var transform = typeof window !== 'undefined' ? prefixes_1.getVendorPrefixedName('transform') : undefined;
var backfaceVisibility = typeof window !== 'undefined' ? prefixes_1.getVendorPrefixedName('backfaceVisibility') : undefined;
var hasCSSTransforms = typeof window !== 'undefined' ? !!prefixes_1.getVendorPrefixedName('transform') : undefined;
var hasCSS3DTransforms = typeof window !== 'undefined' ? !!prefixes_1.getVendorPrefixedName('perspective') : undefined;
var ua = typeof window !== 'undefined' ? window.navigator.userAgent : 'Chrome';
var isSafari = (/Safari\//).test(ua) && !(/Chrome\//).test(ua);
function translateXY(styles, x, y) {
    styles.top = y + "px";
    styles.left = x + "px";
}
exports.translateXY = translateXY;
//# sourceMappingURL=translate.js.map