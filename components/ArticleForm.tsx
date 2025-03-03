"use client";

import React from "react";
import searchCategory from "@/actions/searchCategory";
import addCategory from "@/actions/addCategory";
import getCategory from "@/actions/getCategory";
import { CiImageOn } from "react-icons/ci";
import Image from "next/image";

interface Category {
  name: string;
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

const Page = () => {
  const [formData, setFormData] = React.useState({
    title: "",
    imageUrl: "",
    categoryId: "",
  });

  const [category, setCategory] = React.useState("");
  const [categories, setCategories] = React.useState<Category[]>([]);
  const [imagePreview, setImagePreview] = React.useState<any>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value);
    const { data, error } = await searchCategory(category);
    if (data) {
      setCategories(data);
      if (category === "") {
        setCategories([]);
      }
    } else {
      console.log(error);
    }
  };

  const handleClick = async () => {
    const { data, error } = await addCategory(category);
    if (data) {
      setFormData((prevState) => {
        return {
          ...prevState,
          categoryId: data?.id,
        };
      });
    } else {
      console.log(error);
    }
  };

  const handleSetCategory = async (categoryName: string) => {
    const { data, error } = await getCategory(categoryName);
    if (data) {
      setFormData((prevState) => {
        return {
          ...prevState,
          categoryId: data?.id,
        };
      });
      setCategory(data.name);
    } else {
      console.log(error);
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event?.target?.files?.[0]; // Get the selected file
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // Update state with base64 image
      };
      reader.readAsDataURL(file); // Convert to Data URL
      console.log(reader.result);
    }
  };

  console.log(formData);

  return (
    <main className="w-full flex justify-center items-center py-5">
      <form className="flex flex-col gap-3 w-7/12">
        <input
          type="text"
          name="title"
          placeholder="Your Article Title"
          required
          className="p-3 rounded-lg border-2 border-gray-200 outline-0"
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="A short description of your article"
          rows={10}
          required
          className="p-3 rounded-lg border-2 border-gray-200 outline-0"
        ></textarea>
        <div>
          <div>
            <input
              type="file"
              id="image"
              name="imageUrl"
              className="hidden"
              onChange={handleImageChange}
              accept="image/*"
            />
            <label
              htmlFor="image"
              className="font-medium cursor-pointer flex flex-col p-2 bg-gray-200 rounded-lg"
            >
              <CiImageOn size={30} />
              <p className="text-sm">Add Image</p>
            </label>
          </div>
          {/* {imagePreview && (
            <Image
              src={imagePreview}
              alt="The selected image"
              className="w-9 h-9 rounded-lg"
            />
          )} */}
        </div>
        <input
          type="text"
          name="category"
          value={category}
          placeholder="Your Article Category"
          required
          className="p-3 rounded-lg border-2 border-gray-200 outline-0"
          onChange={handleSearch}
        />
        {categories.length === 0 ? (
          <p>No categories found</p>
        ) : (
          <div className="flex items-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                className="p-2 border-2 border-red-400 rounded-lg text-red-400"
                onClick={() => handleSetCategory(category.name)}
              >
                {category.name}
              </button>
            ))}
          </div>
        )}
        {categories.length === 0 && (
          <button
            className="bg-red-400 rounded-lg p-3 text-[#FFFFFF]"
            onClick={handleClick}
          >
            Add Category
          </button>
        )}
      </form>
    </main>
  );
};
export default Page;
