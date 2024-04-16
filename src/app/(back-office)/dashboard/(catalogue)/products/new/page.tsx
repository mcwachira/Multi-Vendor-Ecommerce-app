"use client"
import React, {useState} from 'react';
import FormHeader from "@/components/backoffice/FormComponents/FormHeader";
import TextInput from "@/components/backoffice/FormComponents/TextInput";
import {useForm} from "react-hook-form";
import SubmitButton from "@/components/backoffice/FormComponents/SubmitButton";
import TextAreaInput from "@/components/backoffice/FormComponents/TextAreaInput";
import {generateSlug} from "@/lib/generateSlug";
import ImageInput from "@/components/backoffice/FormComponents/ImageInput";
import {UploadButton} from "@/utils/uploadthing";
import {makePostRequest} from "@/lib/apiRequest";
import SelectInput from "@/components/backoffice/FormComponents/SelectInput";

import ArrayItemsInput from "@/components/backoffice/FormComponents/ArrayItemsInput";
import ToggleInput from "@/components/backoffice/FormComponents/ToggleInput";


function NewProduct() {
    const {
        register,
        reset,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            isActive: true,
        },
    });

    const [imageUrl, setImageUrl] = useState("")
    const [loading, setLoading] = useState(false)
    const [tags, setTags] = useState([])

//Watch it to be change off and on
    const isActive = watch("isActive");
    console.log(isActive)

    const categories = [
        {
            id:1,
            title:" Category 1"
        },
        {
            id: 2,
            title: " Category 2"
        },
        {
            id: 3,
            title: " Category 3"
        },
        {
            id: 4,
            title: "Category 4"
        },

    ]

    const farmers = [
        {
            id:1,
            title:" Farmer 1"
        },
        {
            id: 2,
            title: " Farmer 2"
        },
        {
            id: 3,
            title: " Farmer 3"
        },
        {
            id: 4,
            title: "Farmer 4"
        },

    ]
    const onSubmit = async(data) => {

        setLoading(true)
        console.log(data.title)
        const slug = generateSlug(data?.title)
        data.slug= slug
        data.tags=tags
        data.imageUrl=imageUrl

        console.log(data)
        await makePostRequest(setLoading, "api/categories", data, "Product", reset);
        setImageUrl("")
    }
    return (
        <div>
         <FormHeader title="New Product"/>

            <form
                onSubmit={handleSubmit(onSubmit)}
                action="" className="w-full max-w-4xl p-4 bg-white border border-gray-200
            rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3
            ">

                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <TextInput
                        label='Product Title'
                        name="title"
                        register={register}
                        className="w-full"
                        errors={errors}/>

                    <TextInput
                        label='Product Sku'
                        name="sku"
                        register={register}
                        className="w-full"
                        errors={errors}/>
                    <TextInput
                        label='Product Barcode'
                        name="barcode"
                        register={register}
                        className="w-full"
                        errors={errors}/>
                    <TextInput
                        label='Product Price (Before Disdcount)'
                        name="productPrice"
                        register={register}
                        className="w-full"
                        type="number"
                        errors={errors}/>
                    <TextInput
                        label='Product Sales Price (Discounted)'
                        name="salesPrice"
                        register={register}
                        className="w-full"
                        type="number"
                        errors={errors}/>

                    <SelectInput
                        label="Select Category"
                        name="categoryIds"
                        register={register}
                        errors={errors}
                        className="w-full"
                        options={categories}
                        />

                    <SelectInput
                        label="Select Farmer"
                        name="farmerIds"
                        register={register}
                        errors={errors}
                        className="w-full"
                        options={farmers}
                    />
                    <TextAreaInput
                        label='Product Description'
                        name="description"
                        register={register}
                        errors={errors}/>

                    {/*Tag area */}


                    <ArrayItemsInput setItems={setTags} items={tags} itemTitle="Tag"/>

                    <ToggleInput
                        label="Publish your Product"
                        name={isActive}
                        trueTitle="Active"
                        falseTitle="Draft"
                        register={register}
                                            />

                <SubmitButton isLoading={loading} buttonTitle="Create Product"
                              loadingButtonTitle="Creating Product please wait..."/>
                </div>
            </form>
        </div>

    );
}

export default NewProduct;