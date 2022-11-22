// Data
import dataSixReasons from "./dataSixReasons.json";

const SixReasons = () => {
  return (
    <div className="learningcard mt-12 mx-6 xl:mx-16 2xl:mx-16 ">
      {/* Pha doa cung */}
      <div className="flex justify-center align-center items-center pb-2">
        <div className="flex flex-row justify-items-center items-center">
          {/* tên phim */}
          <div className="justify-center items-center">
            <span className="flex text-center text-2xl xl:text-3xl 2xl:text-4xl leading-8 font-bold text-[#06AFC3]">
              6 Lý Do Bạn Nên Lựa Chọn POPS Kids Learn
            </span>
          </div>
        </div>
      </div>

      {/*6lydo resources*/}
      <div className="flex flex-row justify-between sm:flex-col">
        <div className="w-40 flex sm:justify-center justify-start items-center pt-5 self-center">
          <div ref={dataSixReasons} className="flex flex-col sm:flex-row">
            {dataSixReasons.resources.map((resource, index) => {
              return (
                <div className="flex justify-center items-center ">
                  <div className="pl-0 sm:pl-10 pb-10 sm:pb-10 justify-center items-center">
                    <div className=" text-black bg-[#edfdfe] rounded-2xl">
                      <div className="rounded-2xl">
                        <div
                          key={index}
                          className="learningcard-item relative w-40 h-32 sm:w-80 sm:h-60 snap-start rounded-2xl"
                        >
                          <div className="flex justify-center items-center sm:pt-10 py-4 sm:pb-8 ">
                            {/* img */}
                            <a
                              href={resource.link}
                              className="w-[40px] h-[40px] sm:w-[80px] sm:h-[80px] aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0 rounded-xl"
                              style={{
                                backgroundImage: `url(${
                                  resource.imageUrl || ""
                                })`,
                              }}
                            >
                              <img
                                src={resource.imageUrl || ""}
                                alt={resource.title}
                                className="aspect-square hidden w-full rounded-md"
                              />
                            </a>
                          </div>

                          {/* title */}
                          <div className="flex justify-center items-center text-center ">
                            <h5 className="text-[12px] xl:text-[20px] 2xl:text-[20px]  font-bold text-[#374751] sm:px-[16px] px-2">
                              {resource.title}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* carousel 2 */}
        <div className="w-40 flex sm:justify-center justify-end items-center pt-5 self-center">
          <div ref={dataSixReasons} className="flex flex-col sm:flex-row">
            {dataSixReasons.resources2.map((resources2, index) => {
              return (
                <div className="flex justify-center items-center ">
                  <div className="pl-10 sm:pl-10 pb-10 sm:pb-10 justify-center items-center">
                    <div className=" text-black bg-[#edfdfe] rounded-2xl">
                      <div className="rounded-2xl">
                        <div
                          key={index}
                          className="learningcard-item relative w-40 h-32 sm:w-80 sm:h-60 snap-start rounded-2xl"
                        >
                          <div className="flex justify-center items-center sm:pt-10 py-4 sm:pb-8 ">
                            {/* img */}
                            <a
                              href={resources2.link}
                              className="w-[40px] h-[40px] sm:w-[80px] sm:h-[80px] aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0 rounded-xl"
                              style={{
                                backgroundImage: `url(${
                                  resources2.imageUrl || ""
                                })`,
                              }}
                            >
                              <img
                                src={resources2.imageUrl || ""}
                                alt={resources2.title}
                                className="aspect-square hidden w-full rounded-md"
                              />
                            </a>
                          </div>

                          {/* title */}
                          <div className="flex justify-center items-center text-center ">
                            <h5 className="text-[12px] xl:text-[20px] 2xl:text-[20px]  font-bold text-[#374751] sm:px-[16px] px-2">
                              {resources2.title}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SixReasons;
