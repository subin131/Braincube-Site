import { FaLongArrowAltRight } from "react-icons/fa";
const EventAndProgram = () => {
  return (
    <div id="about" className="mx-auto">
      <h1
        style={{ borderBottom: "2px solid #009970", color: "black" }}
        className="text-2xl font-bold text-center p-4"
      >
        Events and Services
      </h1>
      <div class="flex flex-wrap justify-center">
        {/* //card1 */}
        <div class="w-full sm:w-1/2 lg:w-1/4 p-4">
          <div class="p-4">
            <div class="flex items-center justify-center min-h-screen from-teal-100 via-teal-300 to-teal-500 ">
              <div class="overflow-hidden  aspect-video  cursor-pointer rounded-xl relative group">
                <div class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                  <div>
                    <div class="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                      <div style={{ textAlign: "center" }} class="font-bold">
                        <h2>"GWRRT"</h2>
                        <p>2014</p>
                        <a
                          style={{ background: "#009970" }}
                          href="#"
                          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg "
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  alt=""
                  class="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                  src="https://images.unsplash.com/photo-1650790362847-3c1dd609d0c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80
"
                />
              </div>
            </div>
          </div>
        </div>

        {/* card2 */}
        <div class="w-full sm:w-1/2 lg:w-1/4 p-4">
          <div class="bg-white shadow-md rounded-md overflow-hidden">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "30px",
              }}
              class="p-4"
            >
              <a href="/" class="text-lg font-semibold mb-2">
                {" "}
                Training and WorkshopsMakers
              </a>
              <p style={{ textAlign: "justify" }} class=" mb-2">
                Research article writing, Analytical software (R, Python),
                Proposal writing, Web-design and graphics, Ethical Hacking, DIY
                projects (for all age categories).
              </p>
            </div>
          </div>
        </div>
        {/* card3 */}
        <div class="w-full sm:w-1/2 lg:w-1/4 p-4">
          <div class="bg-white shadow-md rounded-md overflow-hidden">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "30px",
              }}
              class="p-4"
            >
              <a href="/" class="text-lg font-semibold mb-2">
                {" "}
                Makers Space
              </a>
              <p style={{ textAlign: "justify" }} class=" mb-2">
                Offers efficient resource utilization, mentorship, guidance, and
                project design and prototyping to empower our members to
                succeed.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* //second part of card */}
      <div class="flex flex-wrap justify-center">
        {/* second card1 */}
        <div class="w-full sm:w-1/2 lg:w-1/4 p-4">
          <div class="bg-white shadow-md rounded-md overflow-hidden">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "30px",
              }}
              class="p-4"
            >
              <a href="/" class="text-lg font-semibold mb-2">
                {" "}
                Scientific Event Management Support
              </a>
              <p style={{ textAlign: "justify" }} class=" mb-2">
                Facilitates participation in conferences, workshops, and
                scientific meetings,promoting innovation and collaboration to
                inspire and empower the next generation of scientists and
                researchers.
              </p>
            </div>
          </div>
        </div>
        {/* second card2 */}
        <div class="w-full sm:w-1/2 lg:w-1/4 p-4">
          <div class="bg-white shadow-md rounded-md overflow-hidden">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "30px",
              }}
              class="p-4"
            >
              <a href="/" class="text-lg font-semibold mb-2">
                {" "}
                Web Development
              </a>
              <p style={{ textAlign: "justify" }} class=" mb-2">
                We work on projects of all types and sizes.Unique Desing and
                fully Responsive Having a unique website design is an important
                part of the branding and marketing process of your business.
              </p>
            </div>
          </div>
        </div>
        {/* second card3 */}
        <div style={{ height: "20%" }} class="w-full sm:w-1/2 lg:w-1/4 p-4">
          <div class="bg-white shadow-md rounded-md overflow-hidden">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "30px",
              }}
              class="p-4"
            >
              <a href="/" class="text-lg font-semibold mb-2">
                {" "}
                Digital Marketing
              </a>
              <p style={{ textAlign: "justify" }} class=" mb-2">
                Digital marketing is any form of marketing that exists online
                Massive utilization of the internet, mobile devices, social
                media, search engines, and other channels to reach consumers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EventAndProgram;
