import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Shared/Loader/Loader";
import { AuthContext } from "../../../Context/AuthProvider";
const { format } = require("date-fns");

const AddProducts = () => {
  const {user} = useContext(AuthContext)
  const date = format(new Date(), "PP");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const imageHostKey = process.env.REACT_APP_IMGBB_API_KEY;

  const navigate = useNavigate();

  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/categories`);
      const data = await res.json();

      return data;
    },
  });

  const handleAddProduct = (data) => {
    const image = data.image[0];
    // console.log(image);

    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const product = {
            name: data.name,
            location: data.location,
            categoryId: data.category,
            quality: data.quality,
            resalePrice: data.resalePrice,
            orginalPrice: data.orginalPrice,
            usagesYear: data.usagesYear,
            phone: data.phone,
            description: data.description,
            image: imgData.data.url,
            date,
            sellerName: user?.displayName,
            sellerEmail: user?.email,
            sellerImage: user?.photoURL
          };

          fetch(`${process.env.REACT_APP_API_URL}/products`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              // authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              if (result.acknowledged) {
                toast.success(`${data.name} is added successfull`);
                navigate("/dashboard/my-products");
              }
            });
        }
      })
      .catch((err) => console.error(err));
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="w-[600px] mx-auto my-20">
      <h2 className="text-3xl mb-5">Add A Product</h2>
      <form onSubmit={handleSubmit(handleAddProduct)}>
        <div className="space-y-3">
          <span className="text-lg block text-gray-600">Product Name</span>
          <input
            placeholder="product name"
            {...register("name", {
              required: "Product Name is required",
            })}
            type="text"
            className="w-full input input-bordered input-md block"
          />
          {errors.name && (
            <p className="text-red-600">{errors.name?.message}</p>
          )}
        </div>
        <div className="space-y-3">
          <span className="text-lg text-gray-600 block mt-3">Location</span>
          <input
            placeholder="location"
            {...register("location", {
              required: "Location is required",
            })}
            type="text"
            className="w-full input input-bordered input-md block"
          />
          {errors.location && (
            <p className="text-red-600">{errors.location?.message}</p>
          )}
        </div>
        <div className="space-y-3">
          <span className="text-lg block mt-3">Phone</span>
          <input
            placeholder="phone"
            {...register("phone", {
              required: "Phone Number is required",
            })}
            type="text"
            className="w-full input input-bordered input-md block"
          />
          {errors.phone && (
            <p className="text-red-600">{errors.phone?.message}</p>
          )}
        </div>
        <div className="flex justify-between gap-10">
          <div className="space-y-3 w-full">
            <span className="text-lg block text-gray-600 mt-3">
              Product Category
            </span>
            <select
              {...register("category")}
              className="select select-bordered w-full"
            >
              {categories.map((category) => (
                <option key={category._id}  value={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-3 w-full">
            <span className="text-lg block mt-3 text-gray-600">
              Product Quality
            </span>
            <select
              className="select select-bordered w-full"
              {...register("quality")}
            >
              <option select="true" value="exelent">
                Exelent
              </option>
              <option value="good">Good</option>
            </select>
            {errors.quality && (
              <p className="text-red-600">{errors.quality?.message}</p>
            )}
          </div>
        </div>
        <div className="flex justify-between gap-10">
          <div className="space-y-3">
            <span className="text-lg block text-gray-600 mt-3">
              Resale Price
            </span>
            <input
              placeholder="$00"
              {...register("resalePrice", {
                required: "Resale Price is required",
              })}
              type="text"
              className="w-full input input-bordered input-md block"
            />
            {errors.resalePrice && (
              <p className="text-red-600">{errors.resalePrice?.message}</p>
            )}
          </div>
          <div className="space-y-3">
            <span className="text-lg block text-gray-600 mt-3">
              Orginal Price
            </span>
            <input
              placeholder="$00"
              {...register("orginalPrice", {
                required: "Orginal Price is required",
              })}
              type="text"
              className="w-full input input-bordered input-md block"
            />
            {errors.orginalPrice && (
              <p className="text-red-600">{errors.orginalPrice?.message}</p>
            )}
          </div>
          <div className="space-y-3">
            <span className="text-lg block text-gray-600 mt-3">
              Year Of Usages
            </span>
            <input
              placeholder="year of usages"
              {...register("usagesYear", {
                required: "Year Of Usages is required",
              })}
              type="text"
              className="w-full input input-bordered input-md block"
            />
            {errors.usagesYear && (
              <p className="text-red-600">{errors.usagesYear?.message}</p>
            )}
          </div>
        </div>
        <div className="space-y-3">
          <span className="text-lg block mt-3 text-gray-600">
            Product Image
          </span>
          <input
            {...register("image", {
              required: "Product Image is required",
            })}
            type="file"
            className="w-full input input-bordered input-md block py-2"
          />
          {errors.image && (
            <p className="text-red-600">{errors.image?.message}</p>
          )}
        </div>
        <div className="space-y-3">
          <span className="text-lg block mt-3 text-gray-600">
            Product Description
          </span>
          <textarea
            {...register("description", {
              required: "Product Description is required",
            })}
            className="textarea textarea-bordered w-full h-40"
            placeholder="product details"
          ></textarea>
        </div>
        <input
          type="submit"
          value="Add Product"
          className="w-full btn bg-primary border border-primary hover:bg-secondary my-5 text-xl"
        />
      </form>
    </div>
  );
};

export default AddProducts;
