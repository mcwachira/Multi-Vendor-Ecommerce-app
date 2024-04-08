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


function NewCategory() {
    const {register,handleSubmit,reset ,formState:{errors}} = useForm()

    const [imageUrl, setImageUrl] = useState("")
    const [loading, setLoading] = useState(false)

    const onSubmit = async(data) => {

        setLoading(true)
        console.log(data.title)
        const slug = generateSlug(data?.title)
        data.slug= slug
        data.imageUrl=imageUrl

        console.log(data)
        await makePostRequest(setLoading, "api/categories", data, "Category", reset);
        setImageUrl("")
    }
    return (
        <div>
         <FormHeader title="New Category"/>

            <form
                onSubmit={handleSubmit(onSubmit)}
                action="" className="w-full max-w-4xl p-4 bg-white border border-gray-200
            rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3
            ">

                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <TextInput
                        label='Category Title'
                        name="title"
                        register={register}
                        errors={errors}/>
                    <TextAreaInput
                        label='Category Description'
                        name="description"
                        register={register}
                        errors={errors}/>

                    <ImageInput label="Category Image"
                                endpoint="categoryImageUploader"
                                imageUrl={imageUrl} setImageUrl={setImageUrl}/>


                </div>
                <SubmitButton isLoading={loading} buttonTitle="Create Category"
                              loadingButtonTitle="Creating Category please wait..."/>
            </form>
        </div>
    );
}

export default NewCategory;