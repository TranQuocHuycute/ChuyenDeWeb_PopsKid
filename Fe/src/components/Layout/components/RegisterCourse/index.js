function RegisterCourse() {
  return (
    <div className='mb-20 bg-[#f0f0f0]'>
      <div className='m-auto max-w-[1200px] pt-[30px]'>
        {/* Đăng ký khóa học */}
        <div className='mb-12'>
          <h2 className='text-2xl font-bold text-center lg:text-3xl mb-2'>Đăng ký khóa học</h2>
          <p className='text-center text-sm'>Vui lòng chọn phương thức thanh toán và tiến hành giao dịch để hoàn tất đăng ký!</p>
        </div>

        <div className='flex flex-wrap bg-[#fff]'>
          <div className='w-[60%] sm:w-full'>
            <div className='bg-[#fff] p-[20px] rounded-[15px] h-auto'>
              <h1 className='border-b-2 border-[#e5e5e5] pb-[16px] text-[#4b4b4b] font-bold capitalize mb-6 text-xl sm:text-base'>Thông tin của bạn</h1>
              <form className='relative flex flex-wrap'>
                <div className='relative mb-0 '>
                  <label class='mr-10'>Tên phụ huynh</label>
                  <input type='text' name='fullName' placeholder="Nhập tên phụ huynh" className='bg-[#f0f0f0] rounded-md'></input>
                  <p className='min-h-[1.3rem] text-[#ea3c2a] m-0 text-left text-[1rem] leading-5'>Nhập thông tin ở đây</p>
                </div>

                {/* <div className='relative mb-0'>
                  <label class='mr-10'>Tên của bé</label>
                  <input type='text' name='kidsName' placeholder="Nhập tên của bé" className='rounded-md'></input>
                  <p className='min-h-[1.3rem] text-[#ea3c2a] m-0 text-left text-[1rem] leading-5'></p>
                </div>

                <div className='relative mb-0'>
                  <label class='mr-10'>Email của bạn</label>
                  <input type='text' name='email' placeholder="Nhập email của bạn" className='rounded-md'></input>
                  <p className='min-h-[1.3rem] text-[#ea3c2a] m-0 text-left text-[1rem] leading-5'></p>
                </div>

                <div className='relative mb-0'>
                  <label class='mr-10'>Số điện thoại của bạn</label>
                  <input type='number' name='phone' placeholder="Nhập số điện thoại của bạn" className='rounded-md'></input>
                  <p className='min-h-[1.3rem] text-[#ea3c2a] m-0 text-left text-[1rem] leading-5'></p>
                </div> */}
              </form>

            </div>
          </div>
          <div className='w-[40%] md:pl-4 sm:w-full sm:mt-8'>
                
          </div>
        </div>
      </div>

    </div>
  )
}

export default RegisterCourse
