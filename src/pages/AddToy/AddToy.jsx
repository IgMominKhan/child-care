import { Button, Checkbox, Label, Textarea, TextInput } from "flowbite-react";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const AddToy = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const img = form.photo.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.email.value;
    const subCategory = form.category.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const qty = form.qty.value;
    const details = form.details.value;

    const data = {
      name,
      img,
      sellerName,
      sellerEmail,
      subCategory,
      price,
      rating,
      qty,
      details,
    };

    fetch("https://child-care-server.vercel.app/toy", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "New Toy Added",
          });
          console.log(result);
        }
      })
      .catch((err) => {
        Swal.fire({ icon: "error", title: "!Oops", text: "Failed to add" });
        console.error(err);
      });
  };
  
  return (
    <main>
      <div>
        <section className="bg-gray-100 mt-0">
          <div className="flex flex-col items-center justify-center px-6 py-8 md:py-32 mx-auto md:max-w-3xl">
            <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md md:max-w-none xl:p-0">
              <div className="space-y-4 md:space-y-6 p-8 md:p-12">
                <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                  Add A Toy
                </h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
                        placeholder="Enter Toy name"
                        required={true}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="mb-2 block">
                        <Label
                          htmlFor="photo"
                          value="Photo URL"
                        />
                      </div>
                      <TextInput
                        name="photo"
                        id="photo"
                        type="text"
                        placeholder="Your toy image URL"
                        required={true}
                      />
                    </div>
                  </div>

                  <div className="md:flex gap-5">
                    <div className="flex-1">
                      <div className="mb-2 block">
                        <Label
                          htmlFor=""
                          value="Seller Name"
                        />
                      </div>
                      <TextInput
                        name="sellerName"
                        id="sellerName"
                        type="text"
                        placeholder="Enter seller name"
                        defaultValue={user?.displayName}
                        required={true}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="mb-2 block">
                        <Label
                          htmlFor="email"
                          value="Seller Email"
                        />
                      </div>
                      <TextInput
                        name="email"
                        id="email"
                        defaultValue={user?.email}
                        type="text"
                        placeholder="Enter Seller email"
                        required={true}
                      />
                    </div>
                  </div>

                  <div className="md:flex gap-5">
                    <div className="flex-1">
                      <div className="mb-2 block">
                        <Label
                          htmlFor="category"
                          value="Sub-Category"
                        />
                      </div>
                      <TextInput
                        name="category"
                        id="category"
                        type="text"
                        placeholder="Confirm Password"
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
                        placeholder="Enter product price"
                        required={true}
                      />
                    </div>
                  </div>

                  <div className="md:flex gap-5">
                    <div className="flex-1">
                      <div className="mb-2 block">
                        <Label
                          htmlFor="grating"
                          value="Rating"
                        />
                      </div>
                      <TextInput
                        name="rating"
                        min={0}
                        max={5}
                        id="rating"
                        type="number"
                        placeholder="Enter toy rating"
                        required={true}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="mb-2 block">
                        <Label
                          htmlFor="qty"
                          value="Available Quantity"
                        />
                      </div>
                      <TextInput
                        name="qty"
                        id="qty"
                        type="number"
                        placeholder="Enter available quantity"
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
                      placeholder="Discribe about the toy"
                      required={true}
                      rows={4}
                    />
                  </div>

                  <Button type="submit">
                    Add New Toy
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AddToy;
