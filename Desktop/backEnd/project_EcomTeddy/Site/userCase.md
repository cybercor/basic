--CLIENT--
function search => {
case search product nhấn nút tìm
case search product+ajax
case search product theo name
}

function sort => {
case sort category
case sort product nổi bật
case sort product cũ
case sort price
case sort thương hiệu
}

function information homeProduct => {
-TITLE FEATURES PRODUCTS & TOP SALES
case product have sale price (done)
case product end_date sale price thì change to price (done)
case client buy product before bắt buộc jwt+login
case client like product thì save information client
case product cũ,không còn đủ số lượng & đã hết date thì auto delete.
-TITLE HOT DEAL TODAY
case find product sale khủng nhất thì show (done)
case end date thì sort to product other
}

function information products => {
case product have sale price (done)
case product end_date sale price thì change to price (done)
case all product thì pagination
case client buy product before bắt buộc jwt+login
case client like product thì save information client
case product cũ,không còn đủ số lượng & đã hết date thì auto delete.
}

function register => {
case trường nào null bất kỳ (done)
case name minLength >3 and trim (done)
case regex email (done)
case trùng lặp email (done)
case phone khác dataType and max number 10 (done)
case password minLength >6+bao gồm cả ký tự thường hoa (done)
case password mã hóa (done)
case rePassword confirm password (done)
}

function login => {
case auth jwt
case trường nào null bất kỳ (done)
case save information vào cookie (done)
case time living cookie (done)
case regex email (done)  
}

function logout => {
case client logout thì delete all information on cookie (done)
case time living cookie đã endDate thì auto logout (done)
}

function information client => {
case search and sort product url dài thì customise url
case config language
case theo dõi đơn hàng
case changePassword+jwt
case name minLength >3 and trim (done)
case regex email (done)
case phone khác dataType and max number 10 (done)
case newPassword minLength >=6,maxLength <= 20 bao gồm cả ký tự thường hoa (done)
case newPassword != oldPassword (done)
case newPassword phải đc mã hóa (done)
case confirmNewPassword === newPassword (done)
}

function NEWSLETTER => {
case send email spam
}

function detail product => {
case before buy tối thiếu ít nhất 1 product
case share product send friend
}

function cart => {
case product null send message to client
case delete quatity product & delete all quatity product
}

function review => {
case đánh giá trùng lặp
}

function payment => {
case payment tiền mặt
case payment card+atm
}

function delivery => {
case dưới bán kính 5km freeship
}
