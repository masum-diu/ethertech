const Contact = () => {
  return (
    <div className="bg-[#181B20] py-20">
      <div className="container mx-auto flex flex-col md:flex-row gap-10 px-4">
        {/* LEFT SIDE */}
        <div className="md:w-1/2">
          <p className="text-white text-sm font-extrabold">GET TOUCH</p>

          <p className="text-white text-[40px] font-bold max-w-[500px] leading-snug mt-4">
            <span className="text-[#FCB813]">
              Get in touch to discuss your
              <br />
            </span>
            software vision with industry experts
          </p>

          <p className="text-white text-[16px] max-w-[630px] font-manrope mt-6">
            See how we can help you reach your goals. Answer three questions to
            help us match our expertise and software solutions to your needs.
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="md:w-1/2">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm mb-2 text-white">
                Full name *
              </label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-gray-600 text-white focus:outline-none pb-2"
              />
            </div>
            <div>
              <label className="block text-sm mb-2 text-white">Email *</label>
              <input
                type="email"
                className="w-full bg-transparent border-b border-gray-600 text-white focus:outline-none pb-2"
              />
            </div>
            <div>
              <label className="block text-sm mb-2 text-white">
                Phone number *
              </label>
              <input
                type="tel"
                className="w-full bg-transparent border-b border-gray-600 text-white focus:outline-none pb-2"
              />
            </div>
            <div>
              <label className="block text-sm mb-2 text-white">Country *</label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-gray-600 text-white focus:outline-none pb-2"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm mb-2 text-white">Company *</label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-gray-600 text-white focus:outline-none pb-2"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm mb-2 text-white">Message *</label>
              <textarea
                rows="3"
                className="w-full bg-transparent border-b border-gray-600 text-white focus:outline-none pb-2 resize-none"
              ></textarea>
            </div>
            <div className="md:col-span-2 flex items-start">
              <input
                type="checkbox"
                id="updates"
                className="mt-1 mr-2 accent-white"
              />
              <label htmlFor="updates" className="text-sm text-white">
                I want to receive news and updates once in a while
              </label>
            </div>
            <div className="md:col-span-2">
              <p className="text-xs text-gray-400">
                We will add your info to our CRM for contacting you regarding
                your request. For more info please consult our{" "}
                <a href="#" className="underline">
                  privacy policy
                </a>
              </p>
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="flex justify-center items-center font-semibold w-[143px] h-[56px] rounded-[24px] bg-[#FFFFFF] text-[181B20] text-[15px] font-medium rounded-3xl hover:bg-[#919191] transition"
              >
                Contact us →
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
