import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-col items-center text-white h-[44vh]">
        <div className="font-bold items-center flex gap-2 text-5xl">Buy Me A Chai<Image src="/wired-lineal-571-black-tea-hover-pinch.gif" alt="Coder" width={70} height={70} />
        </div>
        <p>
          A Crowdfunding platfrom for creators. Get Funded by your fans and followers. Starts Now !
        </p>
        <div>
          <button className="relative inline-flex items-center justify-center p-0.5 my-6 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
            <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              Start Here !
            </span>
          </button>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
            <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              Read More
            </span>
          </button>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto py-10">
        <h1 className="text-2xl font-bold text-center my-10">Your fans can buy a Chai for You !</h1>
        <div className="flex gap-5 justify-around">
          <div className=" item space-y-3 flex flex-col items-center justify-center">
            <Image src="/coder.gif" alt="Coder" width={70} height={30} />
            <p className="font-bold">Your Fans Wants to help</p>
            <p className="text-center">Your Fans are available for you to help you</p>
          </div>
          <div className=" item space-y-3 flex flex-col items-center justify-center">
            <Image src="/wired-lineal-290-coin-hover-pinch.gif" alt="Coder" width={70} height={30} />
            <p className="font-bold">Your Fans Wants to help</p>
            <p className="text-center">Your Fans are available for you to help you</p>
          </div>
          <div className=" item space-y-3 flex flex-col items-center justify-center">
            <Image src="/wired-lineal-955-demand-hover-click.gif" alt="Coder" width={70} height={30} />
            <p className="font-bold">Your Fans Wants to help</p>
            <p className="text-center">Your Fans are available for you to help you</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto py-10 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-center my-10">Learn More About Us</h1>
        <iframe className="rounded-3xl" width="560" height="315" src="https://www.youtube.com/embed/QoaDkejcHSc?si=UHEDsmhxemhlag4b" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      </div>
    </>
  );
}
