import datavideo from "./datavideo.json";

function Videos(params) {
  return (
    <div className=" bg-[#fafafa]">
      {/* video */}
      <div className="pt-5">
        <div className="mx-16 bg-[#000] ">
          <div className="justify-self-center align-self-center">
            <video
              src="video.mp4"
              preload="auto"
              width="720"
              height="480"
              controls
            ></video>
          </div>
        </div>
      </div>
      <div className="pt-10">
        <div>
          {/* Hiển thị hot seriesseries hashcode */}
          <div>
            <a className="flex" href="..">
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
                  d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                />
              </svg>
              <h5 className="text-red-600 font-bold pl-2">Doraemon</h5>
            </a>

            {/* Tên tập phim đc chuyền qua từ carousel hashcode */}
            <h1>Doraemon S10 - Tập 469: Kỳ nghỉ hè với mấy con ma</h1>
          </div>
          
          
        </div>
      </div>
    </div>
  );
}
export default Videos;
