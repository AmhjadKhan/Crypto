import goal from '../../assets/goal.png'
function Mission() {
  return (
    <section className="py-12 bg-gray-900 text-white bg-gradient-to-r from-purple-500 to-[#0A1830]">
      <div className="section__container mission__container mx-auto px-4">
        <h2 className="section__header text-5xl font-bold text-center mb-6">Our Mission</h2>
        <p className="section__subheader font-semibold text-xl text-center mb-10">
          Multi-Blockchain DeFi allows users to seamlessly earn and borrow across<br />
          different blockchain networks. With the rise of decentralized finance.
        </p>
        <div className="mission__grid grid grid-cols-2 md:grid-cols-2">
          <div className="mission__list space-y-2 text-2xl  font-semibold border-l-2 border-b-2 border-r-2">
            <h4 className='border-b-2 border-t-2 pl-44 pb-4 text-black font-bold'>Unify</h4>
            <h4 className='border-b-2 pl-44 pb-4 text-black font-bold'>Simplify</h4>
            <h4 className='pl-44 text-black font-bold'>Innovate</h4>
          </div>
          <div className="mission__content flex bg-[#27354c]">
            <p className="mb-6 text-xl pl-3 pt-4">
              The Radiant DAO's mission is to unify the billions in fragmented
              liquidity across bitcoin money markets under one safe,
              user-friendly, capital-efficient omnichain protocol.
            </p>
            <img src={goal} alt="mission" className="w-36 h-auto"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;
