import Image from "next/image";

export default function Home() {
  return (
    <>

      <div className="text-white flex flex-col justify-center items-center h-[60vh]">

        <div className="text-4xl font-bold flex justify-center items-center">BeTheOne ~ Do The Fund <span><Image className="mx-2" width={60} height={60} src="/coinRotate.gif" alt="" /></span></div>
        <p className="text-sm text-gray-500 my-2">BeTheOne who brings hope. Your donation helps provide food, shelter, and education to those in need. Together, we can make a real difference.</p>

        <div className="space-x-4 my-3">

          <button type="button" className="text-white rounded-xl bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Learn More...</button>

          <button type="button" className="text-white rounded-xl bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Start Here...</button>

        </div>

      </div>

      <section className="text-gray-500 body-font">
        <div className="container px-5 mb-30 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4">Fund For Need One !</h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Millions of people struggle every day without access to basic needs like food, clean water, shelter, healthcare, and education. These challenges keep families trapped in cycles of poverty and hardship.</p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 shrink-0">
                <Image width={60} height={60} src="/person.gif" alt="" />
              </div>
              <div className="grow">
                <h2 className="text-gray-300 text-lg title-font font-medium mb-3">BeTheOne to Give Hope</h2>
                <p className="leading-relaxed text-base">highlight the emotional impact of donations.</p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 shrink-0">
                <Image width={80} height={80} className="rounded-full" src="/moneySpin.gif" alt="" />
              </div>
              <div className="grow">
                <h2 className="text-gray-300 text-lg title-font font-medium mb-3">Every Rupee Counts, Every Life Matters</h2>
                <p className="leading-relaxed text-base">show that even small contributions make a big difference..</p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 shrink-0">
                <Image width={80} height={80} className="rounded-full" src="/piggy.gif" alt="" />
              </div>
              <div className="grow">
                <h2 className="text-gray-300 text-lg title-font font-medium mb-3">Save Today, Fund Tomorrow</h2>
                <p className="leading-relaxed text-base">highlight the importance of smart saving that fuels sustainable funding.</p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="text-white my-20 flex flex-col justify-center items-center gap-4">

        <h2 className="text-center text-2xl mb-10 font-bold">Learn More About Us :</h2>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/FACXykea1BE?si=vqoPwJLA0yLrOtjv" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>


      </div>

    </>
  );
}
