import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import Swal from "sweetalert2";

const MyToy = () => {
  const { user } = useContext(AuthContext);

  const [myToys, setMyToys] = useState([]);

  useEffect(() => {
    fetch(`https://child-care-server.vercel.app/toys?email=${user.email}`)
      .then((res) => res.json())
      .then((toys) => setMyToys(toys))
      .catch((err) => console.error(err));
  }, [user]);

  // handle delete
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Do you want to delete the item?",
      showDenyButton: true,
      confirmButtonText: `Yes`,
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "", "success");
      }
    });
  };

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
              <th scope="col" className="px-6 py-3">
                Action
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {/* all toys */}
            {myToys.map((toy) => (
              <tr className="bg-white border-b hover:bg-gray-50 font-semibold text-gray-900">
                <td className="w-32 p-4 !min-w-28 min-w-[5rem]">
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
                  <Button gradientDuoTone="cyanToBlue">
                    Update
                  </Button>
                </td>
                <td className="px-6 py-4">
                  <Link
                    to={`/toys/${toy._id}`}
                  >
                    <Button gradientDuoTone="cyanToBlue">
                      View Details
                    </Button>
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <Button
                    onClick={() => handleDelete(toy?._id)}
                    gradientDuoTone="pinkToOrange"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MyToy;
