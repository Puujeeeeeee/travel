const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-700 via-yellow-600 to-blue-800 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-5xl font-bold text-yellow-100 mb-4 animate-fade-in">
            Холбоо барих
          </h1>
          <p className="text-xl text-yellow-100/90 max-w-2xl mx-auto animate-slide-up">
            Та бидэнтэй холбоо барихыг хүсвэл доорх мэдээллийг ашиглана уу
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="backdrop-blur-lg bg-blue-900/30 rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-500 border border-yellow-500/20">
            <div className="space-y-12">
              <div className="flex items-center space-x-6 group">
                <div className="flex-shrink-0">
                  <div className="bg-red-700/40 group-hover:bg-red-700/60 rounded-2xl p-4 transition-all duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-100">Утас</h3>
                  <p className="mt-2 text-yellow-100/80 text-lg hover:text-yellow-100 transition-colors">
                    +976 99999999
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="flex-shrink-0">
                  <div className="bg-white/20 group-hover:bg-white/30 rounded-2xl p-4 transition-all duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Имэйл</h3>
                  <p className="mt-2 text-white/80 text-lg hover:text-white transition-colors">
                    info@example.mn
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="flex-shrink-0">
                  <div className="bg-white/20 group-hover:bg-white/30 rounded-2xl p-4 transition-all duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Хаяг</h3>
                  <p className="mt-2 text-white/80 text-lg hover:text-white transition-colors">
                    Улаанбаатар хот, Монгол улс
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="backdrop-blur-lg bg-blue-900/30 rounded-3xl shadow-2xl p-8 border border-yellow-500/20">
            <form className="space-y-8">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div className="relative group">
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-white/5 border-2 border-yellow-500/30 rounded-xl px-6 py-4 text-yellow-100 placeholder-yellow-100/50 focus:border-yellow-500/50 focus:outline-none backdrop-blur-sm transition-all"
                    placeholder="Таны нэр"
                    required
                  />
                  <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent w-0 group-hover:w-full transition-all duration-500"></div>
                </div>
                <div className="relative group">
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-white/5 border-2 border-white/10 rounded-xl px-6 py-4 text-white placeholder-white/50 focus:border-white/30 focus:outline-none backdrop-blur-sm transition-all"
                    placeholder="Таны имэйл"
                    required
                  />
                  <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent w-0 group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>

              <div className="relative group">
                <input
                  type="text"
                  id="subject"
                  className="w-full bg-white/5 border-2 border-white/10 rounded-xl px-6 py-4 text-white placeholder-white/50 focus:border-white/30 focus:outline-none backdrop-blur-sm transition-all"
                  placeholder="Гарчиг"
                  required
                />
                <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent w-0 group-hover:w-full transition-all duration-500"></div>
              </div>

              <div className="relative group">
                <textarea
                  id="message"
                  rows={6}
                  className="w-full bg-white/5 border-2 border-white/10 rounded-xl px-6 py-4 text-white placeholder-white/50 focus:border-white/30 focus:outline-none backdrop-blur-sm transition-all resize-none"
                  placeholder="Таны мессэж"
                  required
                ></textarea>
                <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent w-0 group-hover:w-full transition-all duration-500"></div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-700 via-yellow-600 to-blue-800 text-yellow-100 py-4 px-8 rounded-xl font-semibold text-lg hover:opacity-90 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:ring-offset-2 focus:ring-offset-transparent border border-yellow-500/30"
              >
                Илгээх
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

