// eslint-disable-next-line no-unused-vars
import { RatingCard } from '../components/RatingCard'
// eslint-disable-next-line no-unused-vars
import { Carousel1 } from '../carousel1'

import avatar from '../../../assets/images/avatar.png'
import video from '../../../assets/videos/Ba_Hoang_Quan-A_Son.mp4'

export const ParentsComments = () => {
  const DATA = {
    video,
    avatar,
    title: 'Ba bé Hoàng Quân - Anh Sơn',
    rating: 4.5,
    description:
      'Bé Hoàng Quân rất thích học các môn tiếng anh và kể chuyện trên POPS Kids Learn. Sau mỗi khóa học mình thấy bé tự tin năng động hơn nhờ sự hướng dẫn của các thầy cô. Cảm ơn POPS Kids Learn.',
    data: [
      {
        avatar:
          'https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/ki_u_ph__ng_vy-4f4be9ecd875-1668486221437-KMF7vOgW.jpg?v=0&maxW=200',
        title: ' Mẹ Vy',
        rating: 5,
        description:
          'Trong quá trình học, có lúc con chưa hiểu bài nhưng cô trả lời\n' +
          'nhiệt tình làm con thấy tự tin, con không có cảm giác bị sợ\n' +
          'như học cô khác.',
      },
      {
        avatar:
          'https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/m__cao_y_n-080afadce87d-1668486284156-KjIhmaE7.png?v=0&maxW=200',
        title: 'Cao Yến',
        rating: 4.5,
        description:
          'Sau mỗi khoá học, bé có tiến bộ rõ, sự tương tác của cô giúp bé phản xạ nhanh hơn. Cách hướng dẫn của giáo viên dễ hiểu nên con tiếp thu bài nhanh và nhớ lâu hơn. Phụ huynh và bé luôn nhận được sự hỗ trợ kịp thời từ bộ phận hỗ trợ lớp học nên không bị trục trặc gì khi tham gia học online. ',
      },
      {
        avatar:
          'https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/hs_vi_n_ph_p-1d1efb41c413-1668486461923-1QudLjMy.jpg?v=0&maxW=200',
        title: 'Mỹ Thuỳ',
        rating: 5,
        description:
          'Mẹ thấy bé có tiến bộ, có khả năng viết code sau khoá học. Cách giáo viên giảng dạy và hướng dẫn bé dễ hiểu. Bộ phận hỗ trợ lớp học chăm sóc nhiệt tình và kịp thời để bé vào lớp học suôn sẻ.',
      },
    ],
  }
  return (
    <div>
      <h2 className="text-main text-center font-bold py-8">
        Cảm Nhận Của Phụ Huynh
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <RatingCard
          rating={DATA.rating}
          description={DATA.description}
          title={DATA.title}
          avatar={DATA.avatar}
        />
        <div className="flex justify-center items-center">
          <div className="relative w-[90vw] p-[3%] sm:w-[45vw] sm:p-[1%] lg:w-[40vw] lg:mx-[10px]">
            <div className="absolute w-[95%] top-[9%] left-[5%] sm:left-[6%] pt-[52%] border-[#FE7F56] border-2 rounded-[20px]"></div>
            <div className="relative">
              <video
                className="w-full max-w-full h-auto rounded-lg z-10"
                controls
              >
                <source src={DATA.video} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
      <Carousel1 data={DATA.data} />
    </div>
  )
}
