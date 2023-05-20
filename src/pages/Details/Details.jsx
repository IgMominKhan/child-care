import { useLoaderData } from "react-router-dom";

const Details = () => {
  const toy = useLoaderData();

  console.log(toy);

  return (
    <main>
      <section className="min-w-screen mt-10 min-h-screen bg-yellow-300 flex items-center p-5 lg:p-24 overflow-hidden relative">
        <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
          <h1 className="title -mt-8">Toy Details</h1>
          <div className="md:flex items-center -mx-10">
            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
              <div className="relative">
                <img
                  src={toy?.img}
                  className="w-full relative z-10"
                  alt=""
                />
                <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0" />
              </div>
            </div>
            <div className="w-full md:w-1/2 px-10">
              <div className="mb-10">
                <h1 className="font-bold uppercase text-2xl mb-5">
                  {toy?.name}
                </h1>
                <p className="text-sm">
                  {toy?.details?.slice(200)}
                </p>
              </div>

              <div className="mb-3">
                <b>Sellar Name :</b>{" "}
                {toy.sellerName ? toy.sellerName : "Not Available"}
              </div>
              <div className="mb-3">
                <b>Sellar Email :</b>{" "}
                {toy.sellerEmail ? toy.sellerEmail : "Not Available"}
              </div>
              <div className="mb-3">
                <b>User Rating :</b> {toy.rating ? toy.rating : "Not Available"}
              </div>
              <div className="mb-10">
                <b>Available Quantity :</b>{" "}
                {toy.qty ? toy.qty : "Not Available"}
              </div>

              <div>
                <div className="inline-block align-bottom mr-5">
                  <span className="text-2xl leading-none align-baseline">
                    $
                  </span>
                  <span className="font-bold text-5xl leading-none align-baseline">
                    {toy?.price}
                  </span>
                </div>
                <div className="inline-block align-bottom">
                  <button className="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold">
                    <i className="mdi mdi-cart -ml-2 mr-2" /> BUY NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Details;
