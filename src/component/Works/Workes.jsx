import padlock from "../../assets/padlock.png"
import seting from "../../assets/settings.png"
import waterdrop from "../../assets/water-drops.png"



const Workes = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-500 to-[#0A1830] ">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-semibold text-white">How It Works</h2>
        <p className="mt-4 text-white text-2xl"> <span className="text-gray-900 font-bold">RDNT Lockers</span>  Lenders & Borrowers</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10 border-b-2">
          <div className='border-r-2 '>
            <img src={padlock} alt="holder" className="mx-auto"/>
            <h4 className="mt-4 text-2xl text-black font-bold">Lock $RDNT</h4>
            <p className="text-xl pb-2">Receive high revenue from interest and <br /> revenue flash loan fees</p>
          </div>
          <div className='border-r-2 '>
            <img src={seting} alt="holder" className="mx-auto"/>
            <h4 className="mt-4 text-2xl text-black font-bold">Access Boosted Emissions</h4>
            <p className="text-xl pb-2">Locked liquidity activates lending and <br /> borrowing RNDT emissions</p>
          </div>
          <div>
            <img src={waterdrop} alt="holder" className="mx-auto"/>
            <h4 className="mt-4 text-2xl text-black font-bold">$RDNT Liquidity</h4>
            <p className="text-xl pb-2">Generate substantial income from interest <br /> and fees earned</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Workes
