"use client";

import React from "react";
import searchCategory from "@/actions/searchCategory";
import addCategory from "@/actions/addCategory";
import getCategory from "@/actions/getCategory";
import { CiImageOn } from "react-icons/ci";

import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

interface Category {
  name: string;
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

const Page = () => {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

  const [value, setValue] = React.useState();
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
      setCategories([]);
    } else {
      console.log(error);
    }
  };

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }

    try {
      const formData = new FormData();
      formData.append("image", file);
      formData.append("uploadPreset", uploadPreset);
      const response = await fetch(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          {
            method: 'POST',
            body: formData,
          }
      );
      if (!response.ok) {
        throw new Error('Failed to upload image to Cloudinary');
      }
      const data = await response.json();
      console.log(data);
    } catch(error) {
      console.log(error);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = {
      title: formData.title,
      imageUrl: formData.imageUrl,
      categoryId: formData.categoryId,
      content: value,
    };
    const response = await fetch("/api/article/create", {
      method: "POST",
      body: JSON.stringify({ data }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      console.error("Error creating article:");
    } else {
      console.log("Article created successfully!");
      const editorForm = document.getElementById(
        "editor-form"
      ) as HTMLFormElement;
      editorForm?.reset();
    }
  };

  console.log(formData);

  return (
    <main className="w-full flex justify-center items-center py-5">
      <form className="flex flex-col gap-5 w-7/12">
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
        <div className="flex items-center justify-between w-full">
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
          {imagePreview && (
            <img
              src={imagePreview}
              alt="The selected image"
              className="rounded-lg"
              style={{ maxWidth: "300px", maxHeight: "300px" }}
            />
          )}
        </div>
        <div className="flex items-center gap-3">
          <input
            type="text"
            name="category"
            value={category}
            placeholder="Your Article Category"
            required
            className="p-3 rounded-lg border-2 border-gray-200 outline-0 w-full"
            onChange={handleSearch}
          />
          {category != "" && categories.length === 0 && (
            <button
              className="bg-red-400 rounded-lg p-3 text-[#FFFFFF] text-sm"
              onClick={handleClick}
            >
              Add
            </button>
          )}
        </div>
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
        <MDEditor value={value} onChange={setValue} name="content" />
        <button
          type="submit"
          className="p-2 bg-red-400 rounded-lg text-[#FFFFFF]"
        >
          Submit
        </button>
      </form>
    </main>
  );
};
export default Page;
