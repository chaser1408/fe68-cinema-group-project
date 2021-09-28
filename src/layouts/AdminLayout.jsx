import withLayout from "hocs/withLayout";
import Admin from "../container/admin/AdminLayout/Admin";
import React from "react";

function AdminLayout(props) {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 mt-10">
            {""}
            <Admin />
          </div>
          <div className="col-9 mt-10">{props.children}</div>
        </div>
      </div>
    </>
  );
}

export default withLayout(AdminLayout);

// cái này là nguyên cái khung, nếu chỉnh ở đây nguyên cái khung nó xuống
// chỉnh cái nhỏ là ok rồi
// cũng có thể ngay từ đầu nó bị lỗi, ko có hình, nên giờ update ko đc
// có thể thôi, tại theo tui thấy là dispatch ko đc cái phim đó .
// ok, mà giơ còn cai gi để tui làm lun, tui đang lú, chắc chỉ còn layout và cái guard, cái api thì thôi,
// tại về cơ bản mình ko tác động đc bên backend, để xong ok hết cả, mình thử làm 1 cái github riêng
// test api mới, ok thì push lên (nếu chưa chấm :v) tại bây giờ tụi mình đang làm chui
// dat ve thanh toan chua, de tui lam lun, chưa, nhưng mà
// cái đó tui xem qua là mình kiểu nhấn nút thanh toán là xong á, hiện thông báo
// còn có đụng tới api hay ko, thì ko thấy
// tại cái api, nó nhìn kì lắm

// theo tui nhìn, là kiểu mình sẽ update lại cái lịch chiếu
// thêm 1 cái object vào cái object con của cái mảng lichChieuPhim
// rồi phải cập nhật ngược lại xuống đây để hiển thị là ghế đã mất chỗ
// nghĩa là call 1 lượt sương sương tầm 4 => 5 api, chứ ko phải là
// 1 - 3 api rồi, tại. tụi mình có state nên nó tự call thôi, 
// chứ thật ra cái nào cũng 1 => 3 api hết á
// còn cai bảo vê route
// khi mà login, sẽ có 1 cái storage dưới chrome, mỗi lần nhấn nút đặt vé,
// hoặc nhấn vào suất chiếu, mình sẽ check xem có 1 cái key loginUser ko
// ko thì bắt đăng nhập.

// cái storage đó chỉ tồn tại khi đang dùng, tắt chrome là nó đi
// nên khi dispatch nhấn vào suất chiếu, mình check if
// ko có thì thông báo kêu đăng nhập
// cai ql user can phu k, ko bà, cái đó tui sửa lại đc, có gì tui hỏi bà
// đang bị ngu ở cái form và token, tại ko biết là do code, hay do api, h
// hay token hay là do nghiệp, để tui coi lại.ok, co gi push code len tui xem thu
// ok, tu tạm out nha. ok ok