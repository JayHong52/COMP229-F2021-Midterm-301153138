"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const books_1 = require("../controllers/books");
router.get('/list', books_1.DisplayBookListPage);
router.get('/add', books_1.DisplayBookAddPage);
router.post('/add', books_1.ProcessBookAddPage);
router.get('/edit/:id', books_1.DisplayBookEditPage);
router.post('edit/:id', books_1.ProcessBookEditPage);
router.get('/delete/:id', books_1.DisplayBookDeletePage);
exports.default = router;
//# sourceMappingURL=books.js.map