"use client"
import React, {useState} from 'react';
import FormHeader from "@/components/backoffice/FormComponents/FormHeader";
import TextInput from "@/components/backoffice/FormComponents/TextInput";
import {useForm} from "react-hook-form";
import SubmitButton from "@/components/backoffice/FormComponents/SubmitButton";
import {generateCouponCode} from "@/lib/generateCouponCode";
import {makePostRequest} from "@/lib/apiRequest";


//work on the coupon code
function NewCoupon() {
    const {register,handleSubmit,reset ,formState:{errors}} = useForm()

    const [imageUrl, setImageUrl] = useState("")
    const [loading, setLoading] = useState(false)


    const onSubmit = async(data) => {
        console.log(data.expiryDate)

        // setLoading(true)
        // console.log(data.title)
        // const slug = generateSlug(data?.title)
        // data.slug= slug
        // data.imageUrl=imageUrl
        //
        // console.log(data)
        // await makePostRequest(setLoading, "api/categories", data, "Category", reset);
        // setImageUrl("")

        const couponCode = generateCouponCode(data.title, data.expiryDate)

        data.couponCode=couponCode
        console.log(couponCode)
        await makePostRequest(setLoading, "api/coupons", data, "Coupon", reset);
    }
    return (
        <div>
         <FormHeader title="New Coupon"/>

            <form
                onSubmit={handleSubmit(onSubmit)}
                action="" className="w-full max-w-4xl p-4 bg-white border border-gray-200
            rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3
            ">

                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <TextInput
                        label='Coupon Title'
                        name="title"
                        register={register}
                        errors={errors}

                    />

                    <TextInput
                        label='Coupon Expire Date'
                        name="expiryDate"
                        type="date"
                        register={register}
                        errors={errors}
                        className='w-full'

                    />

                    {/*<TextInput*/}
                    {/*    label='Coupon Code'*/}
                    {/*    name="code"*/}
                    {/*    register={register}*/}
                    {/*    errors={errors}*/}

                    {/*    className='w-full'/>*/}


                    {/*<TextAreaInput*/}
                    {/*    label='Coupon Description'*/}
                    {/*    name="description"*/}
                    {/*    register={register}*/}
                    {/*    errors={errors}/>*/}

                    {/*<ImageInput label="Coupon Image"*/}
                    {/*            endpoint="couponImageUploader"*/}
                    {/*            imageUrl={imageUrl} setImageUrl={setImageUrl}/>*/}


                </div>
                <SubmitButton isLoading={loading} buttonTitle="Create Coupon"
                              loadingButtonTitle="Creating Coupon please wait..."/>
            </form>
        </div>
    );
}

export default NewCoupon;