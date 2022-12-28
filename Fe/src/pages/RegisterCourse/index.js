function RegisterCourse() {
  return (
    <div className="mb-20 bg-[#f0f0f0]">
      <div className="m-auto max-w-[1200px] pt-[30px] pb-10">
        {/* Đăng ký khóa học */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center lg:text-3xl mb-2">
            {'Đăng ký khóa học'}
          </h2>
          <p className="text-center text-sm">
            {
              'Vui lòng chọn phương thức thanh toán và tiến hành giao dịch để hoàn tất đăng ký!'
            }
          </p>
        </div>

        {/* Form dang ky */}
        <div className="flex flex-wrap">
          <div className="w-full sm:w-2/3 bg-[#fff] rounded-xl">
            <div className="bg-[#fff] p-[20px] rounded-[15px] h-auto">
              <h1 className="border-b-2 border-[#e5e5e5] pb-[16px] text-[#4b4b4b] font-bold capitalize mb-6 text-xl sm:text-base">
                {'Thông tin của bạn'}
              </h1>
              <form className="relative flex flex-wrap">
                {/* Tên phụ huynh */}
                <div className="relative mb-0 flex flex-col pb-4 mr-10">
                  <label class="mr-10">{'Tên phụ huynh'}</label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Nhập tên phụ huynh"
                    className="bg-[#f0f0f0] rounded-md w-72"
                  ></input>
                </div>
                {/* Tên của bé */}
                <div className="relative mb-0 flex flex-col pb-4 mr-10">
                  <label class="mr-10">{'Tên của bé'}</label>
                  <input
                    type="text"
                    name="kidsName"
                    placeholder="Nhập tên của bé"
                    className="bg-[#f0f0f0] rounded-md w-72"
                  ></input>
                </div>
                {/* Email của bạn */}
                <div className="relative mb-0 flex flex-col pb-4 mr-10">
                  <label class="mr-10">{'Email của bạn'}</label>
                  <input
                    type="text"
                    name="email"
                    placeholder="Nhập email của bạn"
                    className="rounded-md bg-[#f0f0f0] w-72"
                  ></input>
                </div>
                {/* Sdt */}
                <div className="relative mb-0 flex flex-col mr-10">
                  <label class="mr-10">{'Số điện thoại'}</label>
                  <input
                    type="number"
                    name="phone"
                    placeholder="Nhập số điện thoại của bạn"
                    className="rounded-md bg-[#f0f0f0] w-72"
                  ></input>
                </div>
              </form>
            </div>
            {/* Phương thức thanh toán */}
            <div className="rounded-xl mt-4 sm:p-[20px] bg-[#fff] p-6">
              <h3
                tag="h3"
                className="mb-6 sm:text-base text-xl border-b border-dashed border-[#e5e5e5] pb-[16px] text-[#4b4b4b] font-bold text capitalize"
              >
                {'Chọn hình thức thanh toán'}
              </h3>
              <div clasName="">
                <div className="sm: mt-5">
                  {/* Momo */}
                  <div className="mb-5 py-2 text-center cursor-pointer border-[#06afc3] ">
                    <div className="flex flex-row items-center text-left">
                      <input
                        // checked
                        id="default-radio-1"
                        type="radio"
                        value=""
                        name="default-radio"
                        class="border-2 border-solid-2 border-[#c4c4c4] relative mr-4 rounded-full w-[24px] h-[24px] focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      ></input>
                      <picture>
                        <img
                          className="w-10 h-10"
                          alt="MOMO"
                          title="MOMO"
                          src="https://cdn.popsww.com/popsapp/static/momo.png"
                        ></img>
                      </picture>
                      <p className="sm:text-sm text-xl font-normal ml-2 text-black relative">
                        {'Momo E-Wallet'}
                      </p>
                    </div>
                  </div>

                  {/* Zalopay */}
                  <div className="mb-5 py-2 text-center cursor-pointer border-[#06afc3] ">
                    <div className="flex flex-row items-center text-left">
                      <input
                        id="default-radio-1"
                        type="radio"
                        value=""
                        name="default-radio"
                        class="border-2 border-solid-2 border-[#c4c4c4] relative mr-4 rounded-full w-[24px] h-[24px] focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      ></input>
                      <picture>
                        <img
                          className="w-10 h-10"
                          alt="Zalo"
                          title="Zalo"
                          src="https://cdn.popsww.com/popsapp/static/zalo.png"
                        ></img>
                      </picture>
                      <p className="sm:text-sm text-xl font-normal ml-2 text-black relative">
                        {'ZaloPay E-Wallet'}
                      </p>
                    </div>
                  </div>

                  {/* Shopee */}
                  <div className="mb-5 py-2 text-center cursor-pointer border-[#06afc3] ">
                    <div className="flex flex-row items-center text-left">
                      <input
                        id="default-radio-1"
                        type="radio"
                        value=""
                        name="default-radio"
                        class="border-2 border-solid-2 border-[#c4c4c4] relative mr-4 rounded-full w-[24px] h-[24px] focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      ></input>
                      <picture>
                        <img
                          className="w-12 h-12"
                          alt="AIRPAY"
                          title="AIRPAY"
                          src="https://cdn.popsww.com/popsapp/assets/images/payment/shopee-pay-v1.png"
                        ></img>
                      </picture>
                      <p className="sm:text-sm text-xl font-normal ml-2 text-black relative">
                        {'ShopeePay E-Wallet'}
                      </p>
                    </div>
                  </div>

                  {/* Chuyen khoan qua ngan hang */}
                  <div className="mb-5 py-2 text-center cursor-pointer border-[#06afc3] ">
                    <div className="flex flex-row items-center text-left">
                      <input
                        id="default-radio-1"
                        type="radio"
                        value=""
                        name="default-radio"
                        class="border-2 border-solid-2 border-[#c4c4c4] relative mr-4 rounded-full w-[24px] h-[24px] focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      ></input>
                      <picture>
                        <img
                          className="w-12 h-12"
                          alt="BANK"
                          title="BANK"
                          src="https://cdn.popsww.com/popsapp/assets/images/payment/bank.png"
                        ></img>
                      </picture>
                      <p className="sm:text-sm text-xl font-normal ml-2 text-black relative">
                        {'Chuyển khoản qua ngân hàng'}
                      </p>
                    </div>
                    
                  </div>

                  {/* 
                  <div className="mb-5 py-2 text-center cursor-pointer border-[#06afc3] ">
                    <div className="hidden text-left  ">
                    //   <p className="text-gray-900">
                    //     <b className="text-base">Chuyển khoản ngân hàng</b>
                    //     <small className="text-sm">
                    //       Bạn có thể thanh toán cho khóa học bằng hình thức
                    //       chuyển khoản online hoặc tại quầy giao dịch của ngân
                    //       hàng. Sau khi chuyển khoản thành công, vui lòng gửi
                    //       hình ảnh hóa đơn chuyển khoản đến POPS tại
                    //     </small>
                    //     <a className="text-[#06afc3]" href="...">
                    //       popskidslearn@popsww.com
                    //     </a>
                    //   </p>
                    //   <p className="text-base mt-5">
                    //     {'Số tài khoản'}
                    //     {':'}
                    //     <b>117002652492</b>
                    //     <br>
                    //       {'Tên chủ tài khoản'}
                    //       {':'}
                    //     </br>
                    //     <b>Công ty cổ phần Phong Phú Sắc Việt</b>
                    //     <br>
                    //       {'Ngân hàng'}
                    //       {':'}
                    //     </br>
                    //     <b>Vietinbank</b>
                    //     <br>
                    //       {'Chi nhánh'}
                    //       {':'}
                    //     </br>
                    //     <b>Thành phố Hồ Chí Minh</b>
                    //     <br>
                    //       {'Nội dung thanh toán'}
                    //       {':'}
                    //     </br>
                    //     <b>PKL - Số điện thoại của bạn</b>
                    //   </p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* Thông tin thêm */}
          <div className="sm:w-1/3 md:pl-4 w-full mt-4 sm:mt-0">
            <div className="relative w-full h-full">
              <div className="w-auto static top-[0px] bottom-auto">
                <div className="bg-[#fff] mb-4 p-4 rounded-2xl">
                  <h3
                    tag="h3"
                    className="mb-6 sm:text-base text-xl border-b border-dashed border-[#e5e5e5] pb-[16px] text-[#4b4b4b] font-bold capitalize"
                  >
                    {'POPS Khuyến Mãi Voucher'}
                  </h3>
                  <div className="mt-5 flex items-center cursor-pointer">
                    <picture>
                      <img
                        src="https://cdn.popsww.com/popsapp/assets/images/icons/icoCoupon.png"
                        alt="logo"
                        title="logo"
                        className="w-[#24px] h-[24px]"
                      />
                    </picture>
                    <span className="text-blue-400 text-base ml-2">
                      {'Chọn Mã Khuyến Mãi/ Nhập Voucher'}
                    </span>
                  </div>
                </div>

                <div className="bg-[#fff] p-[20px] rounded-xl">
                  <h3
                    tag="h3"
                    className="mb-6 sm:text-base text-xl border-b border-dashed border-[#e5e5e5] text-[#4b4b4b] font-bold capitalize  pb-[5px]"
                  >
                    {'Tóm tắt thông tin'}
                  </h3>

                  <div className="flex justify-between items-center py-4 border-[#ebebeb]">
                    <p className="text-base">{'Tên khóa học: '}</p>
                    <p className="text-base font-semibold text-right">
                      (20 Buoi) Thứ 3, 5 - 18:00 Ngữ Pháp Tiếng Anh Cơ Bản
                    </p>
                  </div>

                  <div className="flex justify-between items-center py-4 border-[#ebebeb] text-base">
                    <p className="text-black">{'Học phí: '}</p>
                    <p className="font-semibold">
                      <span>1.600.000{' đ'}</span>
                    </p>
                  </div>

                  <div clasName="flex justify-between items-center py-4 border-[#ebebeb] border-t border-solid text-2xl">
                    <p className="text-black">{'Tổng'}</p>
                    <p className="font-semibold">
                      <span>1.600.000{' đ'}</span>
                    </p>
                  </div>
                </div>

                <div className="mt-[30px] text-center">
                  <button className="rounded-3xl p-3 bg-[#02ccc5] hover:bg-opacity-80 text-white font-bold text-sm w-1/2">
                    {"Tiến hành giao dịch"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterCourse
