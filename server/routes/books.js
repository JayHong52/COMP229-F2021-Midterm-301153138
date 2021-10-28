"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const books_1 = require("../controllers/books");
const router = express_1.default.Router();
router.get('/', books_1.DisplayBookListPage);
router.get('/edit/:id', books_1.DisplayBookEditPage);
router.post('/edit/:id', books_1.ProcessBookEditPage);
router.get('/add', books_1.DisplayBookAddPage);
router.post('/add', books_1.ProcessBookAddPage);
router.get('/delete/:id', books_1.DisplayBookDeletePage);
exports.default = router;
//# sourceMappingURL=books.js.map