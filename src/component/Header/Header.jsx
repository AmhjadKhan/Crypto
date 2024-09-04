import headerImage from '../../assets/header.png'


const Header = () => {
  return (
    <header id='header'
      className="bg-gradient-to-r from-purple-500 to-[#0A1830] text-white p-10 bg-cover bg-center"
      style={{ backgroundImage: `url(${headerImage})` }}
    >
      <div className="text-center">
        <h1 className="text-6xl font-bold pb-4">Multi-Blockchain DeFi Earn And <br /> Borrow Across Networks</h1>
        <p className="mt-4 text-xl pb-3">
          Whether it's earning interest on their digital assets or taking out loans, individuals can now explore <br /> opportunities beyond the limitations of a single blockchain.
        </p>
        <button className="btn btn-primary text-2xl text-black">Launch App</button>
      </div> 
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
        <div className="bg-gray-800 p-6 rounded border-2">
          <p className="text-center text-2xl font-semibold">Total Market Size</p>
          <h4 className="text-center text-2xl font-semibold">$605.04M</h4>
        </div>
        <div className="bg-gray-800 p-6 rounded border-2">
          <p className="text-center text-xl font-semibold">Platform fees paid to RDNT lockers</p>
          <h4 className="text-center text-2xl font-semibold">$11.91M</h4>
        </div>
        <div className="bg-gray-800 p-6 rounded border-2">
          <p className="text-center text-2xl font-semibold">Looping APR on BNB</p>
          <h4 className="text-center text-2xl font-semibold">~0%</h4>
        </div>
      </div>
    </header>
  );
}

export default Header;
