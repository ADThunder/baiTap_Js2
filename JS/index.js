/** BÀI 1 VIẾT CHƯƠNG TRÌNH QUẢN LÝ TUYỂN SINH
 * 
 */
const KHUVUC_A = "A";
const KHUVUC_B = "B";
const KHUVUC_C = "C"
var diemCuaKhuVucUuTien = 0;
function diemKhuVucUuTien(chonKhuVuc) {
    if (chonKhuVuc === KHUVUC_A){
        diemCuaKhuVucUuTien = 2 ;
    } else if (chonKhuVuc === KHUVUC_B){
        diemCuaKhuVucUuTien = 1 ;
    } else {
        diemCuaKhuVucUuTien = 0.5;
    }
    return diemCuaKhuVucUuTien ;
    // switch (chonKhuVuc) {
    //     case KHUVUC_A: {
    //         return 2;
    //     }
    //     case KHUVUC_B: {
    //         return 1 ;
    //     }
    //     case KHUVUC_C: {
    //         return 0.5
    //     } 
    // }
};

document.getElementById("ketQuaBai1").onclick = function () {
    var diemChuan = document.getElementById("diemChuan").value * 1;
    var chonKhuVuc = document.getElementById("chonKhuVuc").value;
    var chonDoiTuong = document.getElementById("chonDoiTuong").value * 1;
    var diemMonThuNhat = document.getElementById("diemMonThuNhat").value * 1;
    var diemMonThuHai = document.getElementById("diemMonThuHai").value * 1;
    var diemMonThuBa = document.getElementById("diemMonThuBa").value * 1;
    var diemUuTienKhuVuc = 0;
    diemUuTienKhuVuc = diemKhuVucUuTien(chonKhuVuc);
    var tongDiem3Mon = diemMonThuNhat + diemMonThuHai + diemMonThuBa + diemUuTienKhuVuc + chonDoiTuong ;
    if (tongDiem3Mon >= diemChuan ) {
        document.getElementById("xuatKetQuaBai1").innerHTML = `Chúc mừng bạn đã đậu với tổng điểm là ${tongDiem3Mon}`;
    } else if (diemMonThuNhat == 0 || diemMonThuHai == 0 || diemMonThuBa == 0 ){
        document.getElementById("xuatKetQuaBai1").innerHTML = "bạn đã rớt vì có một môn bằng 0"
    } else {
        document.getElementById("xuatKetQuaBai1").innerHTML = `bạn đã rớt vì ${tongDiem3Mon} nhỏ hơn ${diemChuan}`
    }
};
/** BÀI 2 TÍNH TIỀN ĐIỆN 
 * input : biết giá tiền số kw tiêu thụ
 * progress : tạo 1 hàm tính giá tiền số kw tiêu thụ ở mỗi trường hợp ; dom tới thẻ input bên html lấy tên của người dùng và giá trị số kw tiêu thụ người dùng nhập vào; tính tiền điện tiêu thụ
 * output : xuất ra màn hình tiền điện tiêu thụ
*/
var giaTienKW = 0;
function giaTienKwTieuThu(soKwTieuThu) {
    if (soKwTieuThu <= 50) {
        var giaTienKW = 500;
    } else if (soKwTieuThu > 50 && soKwTieuThu <= 100) {
        var giaTienKW = 650;
    } else if (soKwTieuThu > 100 && soKwTieuThu <= 150) {
        var giaTienKW = 850;
    } else if (soKwTieuThu > 150 && soKwTieuThu <= 200) {
        var giaTienKW = 1100;
    } else {
        var giaTienKW = 1300
    }
    return giaTienKW
}
document.getElementById("ketQuaBai2").onclick = function () {
    var tenKhachHang = document.getElementById("tenKhachHang").value;
    var soKwTieuThu = document.getElementById("soKwTieuThu").value * 1;
    var tongTienDienTieuThu = 0;
    var tienKW = giaTienKwTieuThu(soKwTieuThu)
    tongTienDienTieuThu = soKwTieuThu * tienKW
    document.getElementById("xuatKetQuaBai2").innerHTML = `Tiền điện của khách hàng ${tenKhachHang} là ${tongTienDienTieuThu} vnđ`;
}
/** BÀI TẬP 3 : VIẾT CHƯƠNG TRÌNH TÍNH THUẾ THU NHẬP CÁ NHÂN 
 * input : nhập vào tên người dùng; tổng lương; và số người phụ thuộc 
 * progress : viết ra hàm xuất ra tiền thuế;dom tới các thẻ lấy giá trị người dùng nhập vào; tính ra số tiền chịu thuế ; tính số tiền cuối cùng sau khi đã trả thuế
 * output : xuất số tiền ra màn hình
 */
const soTienDau = 4000000;
const soTienCuoi = 1600000;
var soTienChiuThue = 0;
var tongThuNhapChuaThue = 0;
function tongThuNhapNam(tongThuNhapChuaThue) {
    if (tongThuNhapChuaThue <= 60000000) {
        return soTienChiuThue = 0.05
    } else if (tongThuNhapChuaThue > 60000000 && tongThuNhapChuaThue <= 120000000) {
        return soTienChiuThue = 0.1
    } else if (tongThuNhapChuaThue > 120000000 && tongThuNhapChuaThue <= 210000000) {
        return soTienChiuThue = 0.15
    } else if (tongThuNhapChuaThue > 210000000 && tongThuNhapChuaThue <= 384000000) {
        return soTienChiuThue = 0.2
    } else if (tongThuNhapChuaThue > 384000000 && tongThuNhapChuaThue <= 624000000) {
        return soTienChiuThue = 0.25
    } else if (tongThuNhapChuaThue > 624000000 && tongThuNhapChuaThue <= 960000000) {
        return soTienChiuThue = 0.3
    } else {
        return soTienChiuThue = 0.35
    }
};
document.getElementById("ketQuaBai3").onclick = function () {
    var hoTen = document.getElementById("hoTen").value;
    var tongThuNhapNamChuaThue = document.getElementById("tongThuNhapNam").value;
    var soNguoiPhuThuoc = document.getElementById("soNguoiPhuThuoc").value;
    var tienChiuThue = tongThuNhapNam(tongThuNhapChuaThue);
    var tongTienSauThue = 0;
    tongTienSauThue = (tongThuNhapNamChuaThue - soTienDau - soNguoiPhuThuoc * soTienCuoi) * tienChiuThue;
    var soTienCuoiCung = tongThuNhapNamChuaThue - tongTienSauThue;
    document.getElementById("xuatKetQuaBai3").innerHTML = `Số tiền sau khi chịu thuế là ${soTienCuoiCung} vnđ`
}
/** BÀI TẬP 4 
 * input : nhập vào mã khách hàng, loại khách hàng; số kênh cao cấp; số kết nối; biết các loại phí của 2 khách hàng là khác nhau
 * progress: tạo hàm để lấy ra các giá trị khác nhau của doanh nghiệp và khách hàng ; dom tới các thẻ input để lấy giá trị của input khi khách hàng nhập vào ; tính toán ra kết quả cuối cùng 
 * output : tính được tiền cáp của khách hàng 
 */

const KH_DOANHNGHIEP = "khDoanhNghiep";
const KH_HOGIADINH = "khHoGiaDinh";

function giaTienKetNoiCaoCap(loaiKH) {
    switch (loaiKH) {
        case KH_DOANHNGHIEP: {
            return 50;
        }
        case KH_HOGIADINH: {
            return 7.5;
        }
    }
};
function giaTienPhiCoBan(loaiKH) {
    switch (loaiKH) {
        case KH_DOANHNGHIEP: {
            return 75;
        }
        case KH_HOGIADINH: {
            return 20.5;
        }
    }
};
function giaTienXuLyHoaDon(loaiKH) {
    switch (loaiKH) {
        case KH_DOANHNGHIEP: {
            return 15;
        }
        case KH_HOGIADINH: {
            return 4.5;
        }
    }
};

document.getElementById("ketQuaBai4").onclick = function () {
    var maKH = document.getElementById("maKH").value;
    var loaiKH = document.querySelector("input[type= 'radio']:checked").value;
    var soKetNoi = document.getElementById("soKetNoi").value * 1;
    var soKenhCaoCap = document.getElementById("soKenhCaoCap").value * 1;
    var giaKetNoiCaoCap = giaTienKetNoiCaoCap(loaiKH);
    var giaPhiCoBan = giaTienPhiCoBan(loaiKH);
    var giaXuLyHoaDon = giaTienXuLyHoaDon(loaiKH);
    var tongTienCap = 0;
    if (loaiKH == KH_DOANHNGHIEP && soKetNoi <= 10) {
        // soKetNoi.style.display = "block";
        var tongTienKetNoiCaoCap = soKetNoi * giaKetNoiCaoCap;
        tongTienCap = tongTienKetNoiCaoCap + giaPhiCoBan + giaXuLyHoaDon;
    } else if (loaiKH == KH_DOANHNGHIEP && soKetNoi > 10) {
        // soKetNoi.style.display = "block" ;
        var tongTienKetNoiCaoCap = (10 * giaKetNoiCaoCap) + (soKetNoi - 10) * giaKetNoiCaoCap;
        tongTienCap = tongTienKetNoiCaoCap + giaPhiCoBan + giaXuLyHoaDon;
    } else {
        tongTienCap = giaPhiCoBan + giaXuLyHoaDon + giaKetNoiCaoCap;
    }
    document.getElementById("xuatKetQuaBai4").innerHTML = `tổng tiền cáp là ${tongTienCap} $`

}