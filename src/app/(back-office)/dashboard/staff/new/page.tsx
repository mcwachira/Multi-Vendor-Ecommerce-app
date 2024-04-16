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
import ToggleInput from "@/components/backoffice/FormComponents/ToggleInput";


function NewStaff() {
    const {register,handleSubmit,  reset,     watch,

        formState: { errors },
    } = useForm({
        defaultValues: {
            isActive: true,
        },
    });

    //Watch it to be change off and on
    const isActive = watch("isActive");
    console.log(isActive)

    const [imageUrl, setImageUrl] = useState("")
    const [loading, setLoading] = useState(false)

    const markets = [
        {
            id:1,
            title:"Sprouts Farmers Market"
        },
        {
            id: 2,
            title: "Cabbage Farmers Market"
        },
        {
            id: 3,
            title: "Carrot Farmers Market"
        },
        {
            id: 4,
            title: "Spinach Farmers Market"
        },
        {
            id: 5,
            title: "Kale Farmers Market"
        },
    ]

    const onSubmit = async(data) => {

        setLoading(true)
        console.log(data.title)
        const slug = generateSlug(data?.title)
        data.slug= slug
        data.imageUrl=imageUrl

        console.log(data)
        await makePostRequest(setLoading, "api/staff", data, "Staff", reset);
        setImageUrl("")
    }
    return (
        <div>
            <FormHeader title="New Staff"/>

            <form
                onSubmit={handleSubmit(onSubmit)}
                action="" className="w-full max-w-4xl p-4 bg-white border border-gray-200
            rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3
            ">

                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <TextInput
                        label=' Full Name'
                        name="name"
                        register={register}

                        errors={errors}/>

                    <TextInput
                        label='Password'
                        name="password"
                        type="password"
                        register={register}
                        className="w-full"
                        errors={errors}/>

                    <TextInput
                        label="Staff's Email Address"
                        name="email"
                        type="email"
                        register={register}
                        className="w-full"
                        errors={errors}/>

                    <TextInput
                        label="Staff's Phone"
                        name="phone"
                        type="tel"
                        register={register}
                        className="w-full"
                        errors={errors}/>



                    <TextInput
                        label="Staff's Physical Address"
                        name="Physical Address"

                        register={register}
                        errors={errors}
                        className="w-full"/>


                    <TextAreaInput
                        label="Notes"
                        name="notes"
                        register={register}
                        errors={errors}
                    />

                    {/*<ToggleInput*/}
                    {/*    label="Staff Status"*/}
                    {/*    name="isActive"*/}
                    {/*    trueTitle="Active"*/}
                    {/*    falseTitle="Draft"*/}
                    {/*    register={register}*/}
                    {/*/>*/}
                </div>
                <SubmitButton isLoading={loading} buttonTitle="Create Staff"
                              loadingButtonTitle="Creating Staff please wait..."/>
            </form>
        </div>
    );
}
export default NewStaff;