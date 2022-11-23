import agesImg from '../../../assets/images/ages.png'
import siunhanImg from '../../../assets/images/siunhan.png'

export const CourseSelection = () => {
  const DATA = {
    title: 'Lựa Chọn Khoá Học Theo Độ Tuổi',
    description:
      'POPS Kids Learn cung cấp đa dạng các khoá học cho mọi độ tuổi, Phụ\n' +
      '          huynh có thể lựa chọn khoá học phù hợp nhất cho trẻ',
    listAge: [
      '2-3 Tuổi',
      '4-5 Tuổi',
      '6-7 Tuổi',
      '8-9 Tuổi',
      '10-11 Tuổi',
      '12-13 Tuổi',
      '14-15 Tuổi',
    ],
  }

  return (
    <div className="flex flex-col sm:flex-row my-12">
      {/*left*/}
      <div className="relative h-fit">
        <img src={agesImg} alt="ages" />
        <div className="absolute right-0 bottom-0 w-24 sm:w-26 md:w-32 lg:w-48">
          <img className="object-scale-down" src={siunhanImg} alt="siunhan" />
        </div>
      </div>
      {/*right*/}
      <div>
        <h3 className="text-main font-semibold text-2xl">{DATA.title}</h3>
        <p className="text-main1 mb-12">{DATA.description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {DATA.listAge.map((item, index) => (
            <a
              className="basis-1/2 flex items-center justify-between h-10 px-4 py-6 font-semibold border-2 no-underline drop-shadow-xl rounded-full"
              key={index}
              href="src/components/Layout/Organisms/CourseSelection#!"
            >
              <span className="text-main2">{item}</span>
              <span className="text-white bg-main p-0.5 drop-shadow-lg rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
