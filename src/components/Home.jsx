import NavBar from './NavBar.jsx'

function Home() {
  return (
    <div>
      <NavBar />
        <div className="flex mt-32 justify-center items-center font-bold text-[110px] text-[#000000dc]">
            <div className="flex flex-col justify-center items-center leading-9 gap-16">
            <h2>This is <span className="text-[#ff1f1f] playwrite text-[120px]">Your</span></h2>
            <h2 className="tracking-wide">World Wide Web</h2>
            <h2>profile.</h2>
            </div>
        </div>
    </div>
  )
}

export default Home
