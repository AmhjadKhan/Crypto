import usdpic from '../../assets/usd.png'
import etarium from '../../assets/ethereum.png'
import usdt from '../../assets/usd-circle.png'
import token from '../../assets/token.png'

const Rewards = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-500 to-[#0A1830]">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold text-white">0% APR  <sup>Industry Leading Rewards</sup></h2>
        <p className="mt-4 text-2xl text-white">Dynamic liquidity providers share platform fees captured in blue-chip assets</p>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 mt-10 text-black font-medium text-3xl">
          <div className="bg-[#49618a]  p-6 rounded shadow-md">
            <img src={usdpic} alt="rewards" className="mx-auto"/>
            <div className="mt-4">
              <p>USDC</p>
              <h4 className="text-2xl">0%</h4>
            </div>
          </div>
          <div className="bg-[#49618a]   p-6 rounded shadow-md">
            <img src={etarium} alt="rewards" className="mx-auto"/>
            <div className="mt-4">
              <p>USDT</p>
              <h4 className="text-2xl">0%</h4>
            </div>
          </div>
          <div className="bg-[#49618a]   p-6 rounded shadow-md">
            <img src={usdt} alt="rewards" className="mx-auto"/>
            <div className="mt-4">
              <p>ETH</p>
              <h4 className="text-2xl">0%</h4>
            </div>
          </div>
          <div className="bg-[#49618a]   p-6 rounded shadow-md">
            <img src={token} alt="rewards" className="mx-auto"/>
            <div className="mt-4">
              <p>BNB</p>
              <h4 className="text-2xl">0%</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Rewards;
