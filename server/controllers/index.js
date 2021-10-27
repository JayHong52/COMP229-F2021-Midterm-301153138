"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayHomePage = void 0;
function DisplayHomePage(req, res, next) {
    res.render('content/index', { title: 'Home', book: '' });
}
exports.DisplayHomePage = DisplayHomePage;
;
//# sourceMappingURL=index.js.map