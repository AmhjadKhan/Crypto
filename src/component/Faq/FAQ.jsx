// import { RiQuestionMark, RiArrowDownLine } from "react-icons/ri";

function FAQ() {
  
  return (
    <section className="faq py-12 bg-gray-800 text-white">
      <div className="section__container faq__container mx-auto px-4">
        <h2 className="section__header text-5xl font-bold text-center mb-6">
          Frequently Asked Questions
        </h2>
        <p className="section__subheader text-xl text-center mb-10">
          Questions and answers that are commonly asked in some context.
        </p>
        <div className="question__accordion space-y-4 text-black">
          <div className="collapse bg-gray-400">
            <input type="radio" name="my-accordion-1" defaultChecked />
            <div className="collapse-title text-xl font-bold">
            What is a crypto capital?
            </div>
            <div className="collapse-content font-bold">
              <p>In the past, there was a company called 'Crypto Capital' that claimed to be a payment processor for various cryptocurrency exchanges. However, this company was later involved in legal issues, and its operators were accused of money laundering and other financial crimes.</p>
            </div>
          </div>
          <div className="collapse bg-gray-400">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-bold">
            Where are the verified contracts?
            </div>
            <div className="collapse-content font-bold">
              <p>Verified contracts can often be found on blockchain explorers like Etherscan or Etherchain. These explorers provide tools to verify the source code of smart contracts deployed on the Ethereum network, allowing users to review the code and ensure its authenticity and safety.</p>
            </div>
          </div>
          <div className="collapse bg-gray-400">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-bold">
            How is daily revenue distributed?
            </div>
            <div className="collapse-content font-bold">
              <p>In the ever-evolving landscape of the crypto market, revenue distribution takes various forms, driven by the diversity of cryptocurrencies and blockchain-based projects. Daily revenue is primarily sourced from trading fees on cryptocurrency exchanges, and transactions as fees.</p>
            </div>
          </div>
          <div className="collapse bg-gray-400">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-bold">
            Why does the website occasionally not display certain data?
            </div>
            <div className="collapse-content font-bold">
              <p>In the dynamic world of cryptocurrencies, crypto websites occasionally face challenges in displaying certain data, resulting from various factors. Technical issues, such as server downtime or high traffic during periods of intense market activity, can lead to data unavailability.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
