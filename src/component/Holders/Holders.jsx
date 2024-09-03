import blockchain from '../../assets/blockchain.png'
import security from '../../assets/security.png'
import time from '../../assets/time.png'

const Holders = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-500 to-[#0A1830]">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold text-white">Trusted by 32,000+ holders</h2>
        <p className="mt-4 text-white text-xl">Battle-tested and audited by multiple leading security firms. Radiant's <br /> security is of the highest priority.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
          <div className='border-r-2'>
            <img src={security} alt="holder" className="mx-auto"/>
            <h4 className="mt-4 text-xl">Better Security</h4>
          </div>
          <div className='border-r-2'>
            <img src={blockchain} alt="holder" className="mx-auto"/>
            <h4 className="mt-4 text-xl">BlockSec</h4>
          </div>
          <div>
            <img src={time} alt="holder" className="mx-auto"/>
            <h4 className="mt-4 text-xl">Better Uptime</h4>
          </div>
        </div>
        <div className="mt-8">
          BlockSec focuses on the security of the whole life cycle of smart contracts, specializing in rigorous testing of economic attacks.
        </div>
      </div>
    </section>
  );
}

export default Holders;
