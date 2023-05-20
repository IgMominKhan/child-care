import { Link, useLoaderData } from "react-router-dom";
import { Button } from "flowbite-react";

const Toys = () => {
  const toys = useLoaderData();
  return (
    <section className="mt-4">
      <h1 className="title lg:mb-12">Our Awesome products</h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Image</span>
              </th>
              <th scope="col" className="px-6 py-3">
                Product
              </th>
              <th scope="col" className="px-6 py-3">
                Sub-category
              </th>
              <th scope="col" className="px-6 py-3">
                Qty
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {/* all toys */}
            {toys.map((toy) => (
              <tr className="bg-white border-b hover:bg-gray-50 font-semibold text-gray-900">
                <td className="w-32 p-4">
                  <img
                    className="max-h-20 w-full"
                    src={toy?.img}
                  />
                </td>
                <td className="px-6 py-4">
                  {toy?.name}
                </td>
                <td className="px-6 py-4">
                  {toy?.subCategory}
                </td>
                <td className="px-6 py-4">
                  {toy?.qty || "not available"}
                </td>
                <td className="px-6 py-4">
                  ${toy?.price}
                </td>
                <td className="px-6 py-4">
                  <Link
                    to={`/toys/${toy._id}`}
                  >
                    <Button>
                      View Details
                    </Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Toys;
