import express from 'express';
const router = express.Router();

router.get('/', function (req, res) {
    res.send('Đây là màn hình danh sách bảng quảng cáo');
});

export default router;
