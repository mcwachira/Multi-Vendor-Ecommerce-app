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


function NewFarmer() {
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

    const [couponCode, setCouponCode] = useState(false)
    const [loading, setLoading] = useState(false)


    const onSubmit = async(data) => {


        setLoading(true)
        console.log(data.title)
        const slug = generateSlug(data?.title)
        data.slug= slug


        console.log(data)
        await makePostRequest(setLoading, "api/farmer", data, "Farmer", reset);

    }
    return (
        <div>
         <FormHeader title="New Farmer"/>

            <form
                onSubmit={handleSubmit(onSubmit)}
                action="" className="w-full max-w-4xl p-4 bg-white border border-gray-200
            rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3
            ">

                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <TextInput
                        label='Farmer Full Name'
                        name="name"
                        register={register}
                        className="w-full"
                        errors={errors}/>

                    <TextInput
                        label="Farmer's Phone"
                        name="phone"
                        type="tel"
                        register={register}
                        className="w-full"
                        errors={errors}/>

                    <TextInput
                        label="Farmer's Email Address"
                        name="email"
                        type="email"
                        register={register}
                        className="w-full"
                        errors={errors}/>

                    <TextInput
                        label="Farmer's Physical Address"
                        name="Physical Address"

                        register={register}
                        errors={errors}
                        className="w-full"/>

                    <TextInput
                        label="Farmer's Contact Person"
                        name="Contact Person"
                        register={register}
                        errors={errors}
                        className="w-full"/>

                    <TextInput
                        label="Farmer's Contact Person Phone "
                        name="Contact Person Phone "
                        type="tel"
                        register={register}
                        errors={errors}
                        className="w-full"/>

                    <TextAreaInput
                        label="Farmer's Payment Terms "
                        name="Terms"
                        register={register}
                        errors={errors}
            />
                    <TextAreaInput
                        label="Notes"
                        name="notes"
                        register={register}
                        errors={errors}
                    />

                <ToggleInput
                    label="Farmer Status"
                    name="isActive"
                    trueTitle="Active"
                    falseTitle="Draft"
                    register={register}
                />
                </div>
                <SubmitButton isLoading={loading} buttonTitle="Create Farmer"
                              loadingButtonTitle="Creating Farmer please wait..."/>
            </form>
        </div>
    );
}

export default NewFarmer;