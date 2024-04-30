const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

// Đọc dữ liệu từ tệp db.json
const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
console.log(data);
// Xử lý yêu cầu đăng nhập
app.post('/users/login', (req: any, res: any) => {
    console.log(req.body);
    const { email, password } = req.body;
    const user = data.users.find((u: any) => u.email === email && u.password === password);

    if (user) {
        res.status(200).json({ message: 'Đăng nhập thành công' });

    } else {
        res.status(401).json({ message: 'Email hoặc mật khẩu không đúng' });
    }
});

// Xử lý yêu cầu đăng ký
app.post('/signup', (req: any, res: any) => {
    console.log("Đã nhận yêu cầu đăng nhập");
    const { email, lastName, firstName, phone, password } = req.body;
    const existingUser = data.users.find((u: any) => u.email === email);

    if (existingUser) {
        res.status(409).json({ message: 'Email đã tồn tại' });
    } else {
        const newUser = {
            //   id: Math.random().toString(36).substr(2, 4),
            email,
            lastName,
            firstName,
            phone,
            password
        };

        data.users.push(newUser);
        fs.writeFileSync('db.json', JSON.stringify(data, null, 2));
        res.status(201).json({ message: 'Đăng ký thành công', user: newUser });
    }
});

app.listen(port, () => {
    console.log(`Server đang chạy trên cổng ${port}`);
});