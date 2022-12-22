import dataLearningCard from './dataLearningCardDetail.json'

function LearningCartDetail() {
  return (
    <div className="bg-[#fff] sm:m-10 m-5">
      {/* Thong tin khoa hoc */}
      <div className="">
        {/* Thông tin khóa học */}
        <div className="flex sm:flex-row justify-between">
          <div className="sm:w-2/3 w-full">
            {/* tag */}
            <div className="flex flex-row">
              <div>
                <h5 className="flex items-center text-[12px] xl:text-[20px] 2xl:text-[20px] font-black dark:text-white">
                  <span class="bg-pink-100 text-orange-800 text-sm font-black mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 orange:text-orange-800">
                    7-12 {'tuổi'}
                  </span>
                </h5>
              </div>
              <div className="flex items-center">
                <a className="text-[#0079FF] text-[12px] xl:text-[20px] 2xl:text-[20px] font-bold">
                  HỌC THỬ
                </a>
              </div>
            </div>
            <div>
              <p className="sm:text-[32px] text-[12px] xl:text-[24px] 2xl:text-[24px] font-bold pb-2">
                Ngôi Nhà Mộng Mơ
              </p>
            </div>
            <div>
              <a className="text-[#06AFC3] sm:text-[20px] text-[12px] xl:text-[24px] 2xl:text-[24px]">
                Ảo Thuật gia Nguyễn Phương
              </a>
            </div>

            {/* rating */}
            <div className="flex sm:flex-row flex-col sm:items-start items-start sm:my-4 sm:mb-5">
              <div class="flex items-center">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>First star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Second star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Third star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fourth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-300 dark:text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fifth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
              <div className="sm:mx-2 ">
                <p className="sm:text-[20px] text-[12px] xl:text-[24px] 2xl:text-[24px]">
                  (425 {' đánh giá'})
                </p>
              </div>
              <div className="sm: border-l-2 border-r-2">
                <a className="text-[#06AFC3] sm:text-[20px] text-[12px] xl:text-[24px] 2xl:text-[24px] mx-2">
                  Xem đánh giá
                </a>{' '}
              </div>
            </div>
          </div>
          {/*hinh giời thiệu */}
          <div className="sm:w-1/3 w-full flex items-center">
            <div className="bg-auto">
              <div ref={dataLearningCard}>
                {dataLearningCard.resources3.map((resource, index) => {
                  return (
                    <div className="pl-4">
                      <div className=" text-black rounded-md">
                        <div className="rounded-md">
                          <div
                            key={index}
                            className="learningcard-item relative sm:w-64 sm:h-32 w-32 h-16 snap-start rounded-md"
                          >
                            {/* img */}
                            <a
                              href={resource.link}
                              className="sm:h-32 sm:w-64 h-16 w-32 aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0 rounded-md"
                              style={{
                                backgroundImage: `url(${
                                  resource.imageUrl || ''
                                })`,
                              }}
                            >
                              <img
                                src={resource.imageUrl || ''}
                                alt={resource.title}
                                className="aspect-square hidden w-full rounded-md"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="sm:max-w-[66%]">
          {/* Giá khóa học */}
          <div className="w-full flex sm:justify-start justify-center">
            <p className="font-bold sm:text-[20px] text-[12px] xl:text-[24px] 2xl:text-[24px]">
              150.000 {' đ /Buổi'}
            </p>
          </div>
          {/* mô tả */}
          <div className="sm:py-4">
            <p className="sm:text-[20px] text-[12px] xl:text-[24px] 2xl:text-[24px]">
              Đăng ký học lớp học ảo thuật gia tài năng cùng thầy Nguyễn Phương
              để học cách vận dụng các kiến thức khoa học một cách sáng tạo, tự
              tin hơn trước đám đông.
            </p>
          </div>
        </div>
      </div>
      {/*6*/}
      <div className="flex justify-center items-center sm:flex-col bg-[#edfdfe] rounded-md">
        {/* 1 */}
        <div className="flex sm:justify-center justify-start items-center p-5 self-center">
          <div ref={dataLearningCard} className="flex flex-col sm:flex-row">
            {dataLearningCard.resources.map((resource, index) => {
              return (
                <div className="flex justify-center items-center ">
                  <div className=" justify-center items-center">
                    <div className=" text-black rounded-2xl">
                      <div className="rounded-2xl ">
                        <div
                          key={index}
                          className="learningcard-item relative w-40 sm:w-80 snap-start rounded-2xl"
                        >
                          {/* title */}
                          <div className="flex flex-row sm:justify-center justify-start items-center text-center ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="w-6 h-6"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                              />
                            </svg>

                            <h5 className="text-[12px] xl:text-[20px] 2xl:text-[20px]  font-bold text-[#374751] sm:px-[16px] px-2">
                              {resource.title}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* 2 */}
        <div className="flex w-40 sm:justify-center justify-end items-center p-5 self-center">
          <div ref={dataLearningCard} className="flex flex-col sm:flex-row">
            {dataLearningCard.resources2.map((resources2, index) => {
              return (
                <div className="flex justify-center items-center ">
                  <div className=" justify-center items-center">
                    <div className=" text-black  rounded-2xl">
                      <div className="rounded-2xl">
                        <div
                          key={index}
                          className="learningcard-item relative w-40 sm:w-80 snap-start rounded-2xl"
                        >
                          {/* title */}
                          <div className="flex flex-row sm:justify-center justify-start items-center text-center ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="w-6 h-6"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                              />
                            </svg>

                            <h5 className="text-[12px] xl:text-[20px] 2xl:text-[20px]  font-bold text-[#374751] sm:px-[16px] px-2">
                              {resources2.title}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/*lich hoc*/}
      <div className="flex justify-center align-center items-center sm:mt-10 mt-5">
        <span className="sm:text-[20px] text-[20px] xl:text-[24px] 2xl:text-[24px] font-bold leading-8 mr-2">
          Lịch học
        </span>
      </div>
      <div className="flex justify-center align-center items-center">
        <div className="flex flex-row justify-items-center items-center">
          <span className="flex" href="...">
            <div className="mr-2 justify-center sm:flex-row flex-col items-center">
              <span className="sm:text-[20px] text-[12px] xl:text-[24px] 2xl:text-[24px] mr-2">
                Ba Mẹ không tìm thấy thời gian phù hợp, liên hệ{''}
              </span>
              <a
                href="..."
                className="sm:text-[20px] text-[12px] xl:text-[24px] 2xl:text-[24px] font-bold  text-[#06AFC3]"
              >
                090.181.6890{' '}
              </a>
              <span className="sm:text-[20px] text-[12px] xl:text-[24px] 2xl:text-[24px]  mr-2">
                để được tư vấn!
              </span>
            </div>
          </span>
        </div>
      </div>
      {/* Thời gian học */}
      <div className="flex justify-center align-center items-center pb-2">
        <div ref={dataLearningCard} className="flex flex-col sm:flex-row">
          {dataLearningCard.resources4.map((resource, index) => {
            return (
              <div className="">
                <div className="pb-16 text-black bg-[#f9f9f9] rounded-md">
                  <div className="rounded-md">
                    <div
                      key={index}
                      className="learningcard-item relative w-72 h-72 snap-start rounded-md"
                    >
                      <div className="m-10">
                        {/* Buổi */}
                        <div className="flex items-start justify-start pt-10">
                          <h5 className="text-sm font-black dark:text-white">
                            <span class="bg-[#ff5c5c29] text-[#ff5c5c] text-[12px]  mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 orange:text-orange-800">
                              {resource.buoi}
                            </span>
                          </h5>
                        </div>
                        {/* Thời gian học */}
                        <div>
                          <a href={resource.link} className="">
                            <h3 className="pt-2 font-bold text-[#20px] text-black">
                              {resource.time}
                            </h3>
                          </a>
                        </div>
                        {/* thời gian bắt đầu */}
                        <div className="flex flex-row items-center mt-2 mb-10">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-5 h-5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                            />
                          </svg>

                          <a href={resource.link} className="pl-1">
                            <h3 className="sm:text-[16px] text-[12px] font-bold text-[#707070]">
                              {resource.start}
                            </h3>
                          </a>
                        </div>

                        {/* tối đa học viên */}
                        <div className="border-t border-[#fff] py-4">
                          <a href={resource.link} className="">
                            <h3 className="text-[18px] font-bold text-red-500">
                              {resource.list}
                            </h3>
                          </a>
                        </div>
                        {/* giá khóa học */}
                        <div>
                          <a href={resource.link} className="py-4">
                            <h3 className="pt-2 font-bold text-[20px]">
                              {resource.price}
                              {' đ'}
                            </h3>
                          </a>
                        </div>

                        {/* đăng ký */}
                        <div className="w-full flex justify-center align-center items-center px-2 py-4">
                          <button class="bg-[#fff] text-[#06afc3] border border-[#06afc3]  font-bold py-2 px-3 rounded-full">
                            <p className="mx-4">Đăng ký</p>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* collapse_root__L5u__edittor */}
      <div>
        {/* Hoc vien se nhan dc gi */}
        <div className="border-b border-[#f9f9f9] border-current pb:-[20px] sm:w-10/12 2xl:w-4/5 py-5 sm:m-auto">
          <div className="flex justify-start items-center font-bold cusror-pointer  md:font-medium leading-7">
            <p className="mr-4">Học Viên Sẽ Học Được Gì?</p>
            <span className="cursor-pointer inline-block sm:mt-1 w-[10px] h-[10px] border-b-2 border-[#06afc3] border-r-2 rotate-45 md:rotate-[-135deg]"></span>
          </div>
          <div className="bg-[f9f9f9] text-[16px] leading-6 pt-[20px] none md:text-[20px] block">
            <ul>
              <li>
                <span className="font-normal text-[14pt]">
                  Học và thực hành các kỹ thuật biểu diễn cơ bản trong ảo thuật.
                </span>
              </li>
              <li>
                <span className="font-normal text-[14pt]">
                  Tự tin cà chủ động xử lý huống trước đám đông
                </span>
              </li>
              <li>
                <span className="font-normal text-[14pt]">
                  Hiểu và ghi nhớ các kiến thức khoa học - xã hội liên quan đến
                  các màn trình diễn
                </span>
              </li>
              <li>
                <span className="font-normal text-[14pt]">
                  Tăng cường sự linh hoạt trong vận động và óc quan sát
                </span>
              </li>
              <p>
                <span className="font-normal text-[14pt]">
                  <span className="text-[14pt]">
                    <strong>
                      ☎ Hotline tư vấn khóa học và đăng ký học thử miễn phí:
                    </strong>
                  </span>
                  <strong>
                    <span className="text-[18pt]">
                      <a className="text-[#4dbdc8]" href="tel:09018168">
                        {' '}
                        090.181.6890
                      </a>
                    </span>
                  </strong>
                </span>
              </p>
            </ul>
          </div>
        </div>
        {/* Noi dung va giao trinh */}
        <div className="border-b border-[#f9f9f9] border-current pb:-[20px] sm:w-10/12 2xl:w-4/5 py-5 sm:m-auto">
          <div className="flex justify-start items-center font-bold cusror-pointer  md:font-medium leading-7">
            <p className="mr-4">Nội dung và giáo trình</p>
            <span className="cursor-pointer sm:mt-1 inline-block w-[10px] h-[10px] border-b-2 border-[#06afc3] border-r-2 rotate-45 md:rotate-[-135deg]"></span>
          </div>
          <div className="bg-[f9f9f9] text-[16px] leading-6 pt-[20px] none md:text-[20px] block">
            <ul>
              <li>
                <span className="font-normal text-[14pt]">
                  Tập nhảy TikTok Dance trên nền nhạc 2002
                </span>
              </li>{' '}
            </ul>
          </div>
        </div>
        {/* Tài liệu và công cụ học tập */}
        <div className="border-b border-[#f9f9f9] border-current pb:-[20px] sm:w-10/12 2xl:w-4/5 py-5 sm:m-auto">
          <div className="flex justify-start items-center font-bold cusror-pointer  md:font-medium leading-7">
            <p className="mr-4">Tài liệu và công cụ học tập</p>
            <span className="cursor-pointer inline-block sm:mt-1 w-[10px] h-[10px] border-b-2 border-[#06afc3] border-r-2 rotate-45 md:rotate-[-135deg]"></span>
          </div>
          <div className="bg-[f9f9f9] text-[16px] leading-6 pt-[20px] none md:text-[20px] block">
            <ul>
              <li>
                <span className="font-normal text-[14pt]">
                  Máy tính hoặc máy tính bảng có kết nối internet chất lượng tốt
                </span>
              </li>
              <li>
                <span className="font-normal text-[14pt]">
                  Trang phục thể thao thoải mái
                </span>
              </li>
              <li>
                <span className="font-normal text-[14pt]">Giày bata</span>
              </li>
            </ul>
          </div>
        </div>
        {/* Lưu ý */}
        <div className="border-b border-[#f9f9f9] border-current pb:-[20px] sm:w-10/12 2xl:w-4/5 py-5 sm:m-auto">
          <div className="flex justify-start items-center font-bold cusror-pointer  md:font-medium leading-7">
            <p className="mr-4">Lưu ý</p>
            <span className="cursor-pointer inline-block sm:mt-1 w-[10px] h-[10px] border-b-2 border-[#06afc3] border-r-2 rotate-45 md:rotate-[-135deg]"></span>
          </div>
          <div className="bg-[f9f9f9] text-[16px] leading-6 pt-[20px] none md:text-[20px] block">
            <ul>
              <li>
                <span className="font-normal text-[14pt]">
                  Học và thực hành các kỹ thuật biểu diễn cơ bản trong ảo thuật.
                </span>
              </li>
              <li>
                <span className="font-normal text-[14pt]">
                  Sắp xếp thời gian hợp lý để trẻ đảm bảo tham gia đủ thời lượng
                  của 01 buổi học.
                </span>
              </li>
              <li>
                <span className="font-normal text-[14pt]">
                  Quý Phụ huynh bố trí chỗ ngồi học thoáng, yên tĩnh và đủ ánh
                  sáng cho trẻ.
                </span>
              </li>
              <li>
                <span className="font-normal text-[14pt]">
                  Với các trẻ dưới 6 tuổi, quý phụ huynh hỗ trợ đăng nhập trước
                  giờ học.
                </span>
              </li>

              <li>
                <span className="font-normal text-[14pt]">
                  Lớp học điệu nhảy hot trên Tiktok sẽ được diễn ra khi đủ sĩ số
                  tối thiểu.
                </span>
              </li>
            </ul>
          </div>
        </div>
        {/* Thông tin về giáo viên */}
        <div className="border-b border-[#f9f9f9] border-current pb:-[20px] sm:w-10/12 2xl:w-4/5 py-5 sm:m-auto">
          <div className="flex justify-start items-center font-bold cusror-pointer  md:font-medium leading-7">
            <p className="mr-4">Thông tin về giáo viên/Học viện</p>
            <span className="cursor-pointer inline-block sm:mt-1 w-[10px] h-[10px] border-b-2 border-[#06afc3] border-r-2 rotate-45 md:rotate-[-135deg]"></span>
          </div>
          <div className="bg-[f9f9f9] text-[16px] leading-6 pt-[20px] none md:text-[20px] block">
            <img
              className="block ml-auto mr-auto"
              src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/co_trang_kk-8d701e2d4592-1653896198872-lFiFhXZf.png?v=0"
              alt width='200' height='243'
            />

            <ul>
              <li>
                <span className="font-normal text-[14pt]">
                  Cô Trang KK là dancer với 13 năm kinh nghiệm. Hiện nay cô đang
                  là giáo viên dạy Dance, K-Pop, US-UK, Zumba FITNESS và biên
                  đạo cho các vũ đoàn tại Thành phố Hồ Chí Minh.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default LearningCartDetail
