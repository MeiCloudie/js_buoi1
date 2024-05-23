console.log("Hello World")

// -------------------- Biến (Variable) --------------------

// Tên biến không:
// - Bắt đầu bằng số
// - Không có khoảng cách hoặc ký tự đặc biệt
console.log("Biến (Variable)")
// Ít sử dụng từ khoá var
// var monAn = "Mì hoành thánh"

let hoTen = "Trương Thục Vân"
console.log(hoTen)

// -------------------- Kiểu dữ liệu (Type) --------------------
console.log("Kiểu dữ liệu (Type)")
let tenSinhVien = "Vân Trương" // Kiểu dữ liệu chuỗi
let namSinh = 2000 // Kiểu dữ liệu số
namSinh = 2002 // Gán lại giá trị cho biến
console.log(namSinh)

// -------------------- Toán tử (Operator) --------------------
console.log("Toán tử (Operator)")
let diemTrungBinh = (9 + 8) / 2
console.log(typeof diemTrungBinh)

let tienTietKiem = 30 + "40" // "3040"
console.log(typeof diemTrungBinh)

let bienSoA = 15 % 2 // 1
console.log(bienSoA)

let diemToan = 2
// Phép tăng (++)
diemToan++
console.log(diemToan)
// Phép giảm (--)
diemToan--
console.log(diemToan)

let diemVan = 8
let diemSu = 5

let tong1 = ++diemVan + diemSu++ // 9 + 5 = 14
let tong2 = ++diemVan + diemSu++ + diemSu // 9 + 5 + 6 = 20

console.log(tong1)
console.log(tong2)

// Phép gán
let tongTienMonAn = 50000
tongTienMonAn = tongTienMonAn + 10000

// Phép gán +=
tongTienMonAn += 10000

// Tương tự với các phép gán khác

console.log(tongTienMonAn)
