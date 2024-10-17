import React from 'react'

const data = {
    title: [
        {number:1, title:'EMAIL CREDIT'},
        {number:2, title:'PRICE PER EMAIL'},
        {number:3, title:'PREPAY AMOUNT'},
    ],

    plans: [
        {
           number:1, credit: "10.000", price: "0.02", amount: "$200"
        },
        {
            number:2,  credit: "20.000", price: "0.01", amount: "$250"
        },
        {
            number:3, credit: "50.000", price: "0.01", amount: "$500"
        },
        {
            number:4,  credit: "75.000", price: "0.01", amount: "$250"
        },
        {
            number:5, credit: "200.000", price: "5 / thousand", amount: "$500"
        },

    ]
}

const PaymentPlanPanel = () => {
  return (
    <section className="max-w-7xl mx-auto lg:px-16 md:px-12 sm:10 px-4">
      <h1 className="text-[2.625rem] text-[#1e0e62] leading-[3.25rem] font-bold mt-20">
        Pay as you go
      </h1>
      <div className="flex lg:w-full flex-col lg:flex-row justify-between mb-28 mt-10">
        <div className="lg:w-[35.625rem]">
          <div className="w-full flex justify-between sm:px-0 px-4">
            {data.title.map((item) => (
              <span
                key={item.number}
                className="text-sm leading-[1.625rem] text-[#151439] opacity-60 font-bold text-center"
              >
                {item.title}
              </span>
            ))}
          </div>
          <div className="w-full flex flex-col">
            {data.plans.map((item) => (
              <div
                className=" w-full flex justify-between pt-6 border-t-2 pb-4 text-[#1e0e62] font-bold px-4"
                key={item.number}
              >
                <span>{item.credit}</span>
                <span>{item.price}</span>
                <span>{item.amount}</span>
              </div>
            ))}
          </div>
          
        </div>
        <div className="max-w-[16.875rem] bg-[#ebeaeb] mt-5 p-8">
            <h5 className="text-[#1e0e62] text-[1.4rem] font-bold mb-3">
              Easy Start
            </h5>
            <p className="text-[#151439] opacity-60 w-52 mb-8  text-lg">
              To get you started, you select the desired sample and base the
              entire website on it. It's that simple!
            </p>
            <button className="bg-[#25dac5] px-4 py-2 rounded-full text-white hover:bg-[#168376]">
              Learn More
            </button>
          </div>
      </div>
    </section>
  );
}

export default PaymentPlanPanel

