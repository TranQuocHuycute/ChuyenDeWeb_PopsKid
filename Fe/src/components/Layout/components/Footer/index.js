import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="md:flex h-full hidden">
      <div className="w-full h-full bg-[#edfdfe] flex flex-col ">
        <div className="flex justify-center mx-4">
          {/* logo */}
          <div className="sm:w-96 w-32 py-5">
            <img
              src={require("../../../../assets/images/logolearn.png")}
              alt="Logo"
            />
          </div>
        </div>

        <div className="flex sm:flex-row flex-col sm:items-center">
          <div className="sm:w-1/3 w-full flex justify-center pb-2">
            <span className="flex flex-row sm:flex-col justify-center items-center sm:items-start">
              <div>
                <p className="w-32 sm:w-full font-bold text-lg pb-2 text-[12px] xl:text-[20px] 2xl:text-[20px]">
                  POPS KIDS LEARN
                </p>
              </div>

              <div className="">
                {/* Khám phá */}
                <Link href="..." className="">
                  <p className="text-[#4b4b4b] text-lg font-semibold text-[12px] xl:text-[20px] 2xl:text-[20px] hover:text-[#000] sm:pb-2">
                    Khám Phá
                  </p>
                </Link>
                {/* Khóa Học */}
                <Link href="..." className="">
                  <p className="text-[#4b4b4b] text-lg font-semibold text-[12px] xl:text-[20px] 2xl:text-[20px] hover:text-[#000] sm:pb-2">
                    Khóa Học
                  </p>
                </Link>
                {/* Chia sẻ */}
                <Link href="..." className="">
                  <p className="text-[#4b4b4b] text-lg font-semibold text-[12px] xl:text-[20px] 2xl:text-[20px] hover:text-[#000] sm:pb-2">
                    Chia sẻ
                  </p>
                </Link>
                {/* Giáo Viên */}
                <Link href="..." className="">
                  <p className="text-[#4b4b4b] text-lg font-semibold text-[12px] xl:text-[20px] 2xl:text-[20px] hover:text-[#000] sm:pb-2">
                    Trung Tâm
                  </p>
                </Link>
                {/* Về POP Kids Learn */}
                <Link href="..." className="">
                  <p className="text-[#4b4b4b] text-lg font-semibold text-[12px] xl:text-[20px] 2xl:text-[20px] hover:text-[#000] sm:pb-2">
                    Về POP Kids Learn
                  </p>
                </Link>
                {/* Khóa học đã đăng ký */}
                <Link href="..." className="">
                  <p className="text-[#4b4b4b] text-lg font-semibold text-[12px] xl:text-[20px] 2xl:text-[20px] hover:text-[#000] sm:pb-2">
                    Khóa học đã đăng ký
                  </p>
                </Link>
                {/* Trở Thành Giáo viên */}
                <Link href="..." className="">
                  <p className="text-[#4b4b4b] text-lg font-semibold text-[12px] xl:text-[20px] 2xl:text-[20px] hover:text-[#000] sm:pb-2">
                    Trở Thành Giáo Viên
                  </p>
                </Link>
                {/* popskids Learn blog */}
                <Link href="..." className="">
                  <p className="text-[#4b4b4b] text-lg font-semibold text-[12px] xl:text-[20px] 2xl:text-[20px] hover:text-[#000] sm:pb-2">
                    POPS Kids Learn Blog
                  </p>
                </Link>
              </div>
            </span>
          </div>

          <div className="sm:w-1/3 w-full flex justify-center pb-2 sm:pb-14">
            <span className="flex flex-row-reverse sm:flex-col justify-center items-center sm:items-start">
              <div>
                <p className="w-32 font-bold text-lg pb-2 text-[12px] xl:text-[20px] 2xl:text-[20px]">
                  HỖ TRỢ
                </p>
              </div>

              <div>
                {/*FAQs*/}
                <Link href="..." className="">
                  <p className="text-[#4b4b4b] text-lg font-semibold text-[12px] xl:text-[20px] 2xl:text-[20px] hover:text-[#000] sm:pb-2">
                    FAQs
                  </p>
                </Link>
                {/* Chính sách bảo mật */}
                <Link href="..." className="">
                  <p className="text-[#4b4b4b] text-lg font-semibold text-[12px] xl:text-[20px] 2xl:text-[20px] hover:text-[#000] sm:pb-2">
                    Chính Sách Bảo Mật
                  </p>
                </Link>
                {/* Điều Khoản và Điều kiện sử dunh */}
                <Link href="..." className="">
                  <p className="text-[#4b4b4b] text-lg font-semibold text-[12px] xl:text-[20px] 2xl:text-[20px] hover:text-[#000] sm:pb-2">
                    Điều Khoản và Điều Kiện Sử Dụng
                  </p>
                </Link>
                {/* Điều khoản Thanh Toán */}
                <Link href="..." className="">
                  <p className="text-[#4b4b4b] text-lg font-semibold text-[12px] xl:text-[20px] 2xl:text-[20px] hover:text-[#000] sm:pb-2">
                    Điều Khoản Thanh Toán
                  </p>
                </Link>
                {/* Về POP Kids Learn */}
                <Link href="..." className="">
                  <p className="text-[#4b4b4b] text-lg font-semibold text-[12px] xl:text-[20px] 2xl:text-[20px] hover:text-[#000] sm:pb-2">
                    Chính sách và quy trình sử lý khiếu nại
                  </p>
                </Link>
              </div>
            </span>
          </div>

          <div className="w-full justify-center sm:pb-36 pb-6">
            <div className="flex flex-col">
              <span className="flex justify-center items-center">
                <div>
                  <p className="w-full font-bold text-lg pb-2 text-[12px] xl:text-[20px] 2xl:text-[20px]">
                    CÔNG TY CỔ PHẦN PHONG PHÚ
                  </p>
                </div>
              </span>
              <div className="flex justify-center items-center mx-6">
                <div>
                  {" "}
                  {/* dia chi */}
                  <Link href="..." className="flex flex-row">
                    <span className="w-40 sm:pr-6 text-[#4b4b4b] text-lg font-semibold text-[12px] xl:text-[20px] 2xl:text-[20px] hover:text-[#000] sm:pb-2">
                      Địa chỉ:
                    </span>
                    <span className="flex flex-row justify-center items-center pt-1 text-[12px] xl:text-[20px] 2xl:text-[20px]">
                      Tầng 4, Block A, Viettel Complex Tower, 285 Cách Mạng
                      Tháng Tám, Phường 12, Quận 10, Thành phố Hồ Chí Minh
                    </span>
                  </Link>
                  {/* sdt */}
                  <Link href="..." className="flex flex-row">
                    <span className="pr-2 text-[#4b4b4b] text-lg font-semibold text-[12px] xl:text-[20px] 2xl:text-[20px] hover:text-[#000] sm:pb-2">
                      Điện Thoại:
                    </span>
                    <span className="pt-1 sm:pt-0 text-[12px] xl:text-[20px] 2xl:text-[20px]">
                      {" "}
                      090 181 6890
                    </span>
                  </Link>
                  {/* mail */}
                  <Link href="..." className="flex flex-row">
                    <span className="pr-10 sm:pr-14 text-[#4b4b4b] text-lg font-semibold text-[12px] xl:text-[20px] 2xl:text-[20px] hover:text-[#000] sm:pb-2">
                      Email:
                    </span>
                    <span className="text-[12px] xl:text-[20px] 2xl:text-[20px]">
                      {" "}
                      popskidslearn@popsww.com
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:border-t-2 border-black flex sm:flex-row flex-col justify-start items-center sm:pb-10 pb:20">
          <div className="px-6 sm:pt-10 ">
            <div>
              <span className="text-[#4b4b4b] text-lg font-semibold text-[12px] xl:text-[20px] 2xl:text-[20px]">
                Người chịu trách nhiệm nội dung: Đinh Thị Hồng Hoa
              </span>
            </div>
            <div>
              <span className="text-[#4b4b4b] text-lg font-semibold text-[12px] xl:text-[20px] 2xl:text-[20px]">
                Giấy chứng nhận đăng ký kinh doanh số 0305709591 do Sở Kế hoạch
                và Đầu tư TP. Hồ Chí Minh cấp ngày 21/05/2008
              </span>
            </div>
            <div>
              <span className="text-[#4b4b4b] text-lg font-semibold text-[12px] xl:text-[20px] 2xl:text-[20px]">
                Giấy phép thiết lập mạng xã hội số 63/GP-BTTTT cấp bởi Bộ Thông
                tin & Truyền thông cấp ngày 22/02/2019
              </span>
            </div>
            <div>
              <span className="text-[#4b4b4b] text-lg font-semibold text-[12px] xl:text-[20px] 2xl:text-[20px]">
                © 2018 POPS Worldwide. Mọi bản quyền thuộc về POPS Worldwide.
              </span>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex flex-row justify-center  self-center">
              <div className="flex justify-center pr-2 items-center">
                <a
                  href="https://cdn.popsww.com/popsapp/assets/images/icons/logo-top-100.png"
                  className="sm:h-24 w-10 sm:w-24 h-10 aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0 rounded-md"
                  style={{
                    backgroundImage: `url(${
                      "https://cdn.popsww.com/popsapp/assets/images/icons/logo-top-100.png" ||
                      ""
                    })`,
                  }}
                >
                  <img
                    src={
                      "https://cdn.popsww.com/popsapp/assets/images/icons/logo-top-100.png" ||
                      ""
                    }
                    alt="a"
                    className="aspect-square hidden w-full rounded-md"
                  />
                </a>
              </div>
              <div className="flex justify-center items-center sm:pt-10">
                <a
                  href="https://images.dmca.com/Badges/dmca_protected_16_120.png?ID=ebcff76c-1a5d-4c3a-a772-f97f545fe76c"
                  className="sm:h-20 sm:w-32 h-10 w-32 pl-10  aspect-square block bg-origin-padding bg-left-top bg-auto bg-no-repeat z-0 rounded-md"
                  style={{
                    backgroundImage: `url(${
                      "https://images.dmca.com/Badges/dmca_protected_16_120.png?ID=ebcff76c-1a5d-4c3a-a772-f97f545fe76c" ||
                      ""
                    })`,
                  }}
                >
                  <img
                    src={
                      "https://images.dmca.com/Badges/dmca_protected_16_120.png?ID=ebcff76c-1a5d-4c3a-a772-f97f545fe76c" ||
                      ""
                    }
                    alt="a"
                    className="aspect-square hidden w-full rounded-md"
                  />
                </a>
              </div>
              <div className="flex justify-center items-center sm:pt-10">
                <a
                  href="https://cdn.popsww.com/popsapp/assets/images/icons/icon-verify.png?v=3"
                  className="bg-auto sm:h-24 sm:w-64 w-36 h-12 aspect-square block bg-origin-padding bg-left-top bg-no-repeat z-0 rounded-md"
                  style={{
                    backgroundImage: `url(${
                      "https://cdn.popsww.com/popsapp/assets/images/icons/icon-verify.png?v=3" ||
                      ""
                    })`,
                  }}
                >
                  <img
                    src={
                      "https://cdn.popsww.com/popsapp/assets/images/icons/icon-verify.png?v=3" ||
                      ""
                    }
                    alt="a"
                    className="aspect-square hidden w-full rounded-md"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
