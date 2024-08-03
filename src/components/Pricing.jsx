import NavBar from "./NavBar"

function Pricing() {
    return (
      <div>
        <NavBar />
        <div className="flex flex-col font-bold mt-20 justify-center items-center gap-5">
          <div className="text-[80px]">Pricing</div>
          <div className="playwrite text-[30px]">No confusing scheme with a gazillion options. We like to keep it simple.</div>
        </div>
      </div>
    )
  }
  
  export default Pricing