import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import { Button, Label, Textarea, TextInput } from "flowbite-react";
import Swal from "sweetalert2";
import Modal from "react-modal";
import { RxCross2 } from "react-icons/rx";

Modal.setAppElement("#root");

const MyToy = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [toy, setToy] = useState({});

  function openModal(_id) {
    setIsOpen(true);
    fetch(`https://child-care-server.vercel.app/toys/${_id}`)
      .then((res) => res.json())
      .then((result) => setToy(result))
      .catch((err) => console.error(err));
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const price = form.price.value;
    const details = form.details.value;

    const newToyData = { name, price, details };

    fetch(`https://child-care-server.vercel.app/toys/${toy?._id}`, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToyData),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount) {
          Swal.fire("Success", "Toy information updated", "success");
          form.reset();
        }
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({ title: "Oops!", icon: "error", text: "Failed to update" });
      });

  };

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
        fetch(`https://child-care-server.vercel.app/toys/${_id}`, {
          method: "delete",
          headers: {
            "content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            if (result.deletedCount) {
              Swal.fire("Deleted!", "", "success");
            }
          })
          .catch((err) => console.error(err));
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
              <tr
                key={toy._id}
                className="bg-white border-b hover:bg-gray-50 font-semibold text-gray-900"
              >
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
                  <Button
                    gradientDuoTone="cyanToBlue"
                    onClick={() => openModal(toy._id)}
                  >
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

      {/* update modal*/}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 md:p-16 relative"
        >
          <div className="absolute right-5 top-5">
            <Button
              onClick={closeModal}
              outline={true}
              gradientDuoTone="pinkToOrange"
            >
              <RxCross2 className="h-6 w-6" />
            </Button>
          </div>
          <h1 className="title">Update Info</h1>
          <div className="md:flex gap-5">
            <div className="flex-1">
              <div className="mb-2 block">
                <Label
                  htmlFor="name"
                  value="Product Name"
                />
              </div>
              <TextInput
                name="name"
                id="name"
                type="text"
                defaultValue={toy?.name}
                placeholder="Enter Toy name"
                required={true}
              />
            </div>
            <div className="flex-1">
              <div className="mb-2 block">
                <Label
                  htmlFor="price"
                  value="Price"
                />
              </div>
              <TextInput
                name="price"
                id="price"
                type="number"
                defaultValue={toy?.price}
                placeholder="Enter product price"
                required={true}
              />
            </div>
          </div>
          <div id="textarea">
            <div className="mb-2 block">
              <Label
                htmlFor="details"
                value="Toy Details"
              />
            </div>
            <Textarea
              id="details"
              defaultValue={toy?.details}
              placeholder="Discribe about the toy"
              required={true}
              rows={4}
            />
          </div>

          <Button type="submit" gradientDuoTone="cyanToBlue">
            Update
          </Button>
        </form>
      </Modal>
    </section>
  );
};

export default MyToy;
