const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="text-4xl md:text-7xl text-center md:text-left">Said's Daily Blog</h1>
        <h2 className="mt-5 md:mt-1 text-center md:text-left">
          Welcome to{" "}
          <span className="underline decoration-4 decoration-[#F7AB0A]">
            Every Developers
          </span>
          favourite blog in the Devosphere
        </h2>
      </div>

      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm text-center md:text-left">
        New posts features | The latest in technology | The weekly debugging nightmares & More!
      </p>
    </div>
  )
}

export default Banner