import React from "react";
import "./index.scss";

import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import {
    ToastContainer,
    // toast
} from "react-toastify";

// import { SMTPClient } from "emailjs";

// const client = new SMTPClient({
//     user: "user",
//     password: "password",
//     host: "smtp.your-email.com",
//     ssl: true,
// });
// gtm.ts

type WindowWithDataLayer = Window & {
    dataLayer: Record<string, any>[];
  };
  
  declare const window: WindowWithDataLayer;
const Form = (): JSX.Element => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    }: any = useForm();

    const onSubmit = (data: any) => {
        // client
        //     .send(
        //         "service_xppqhjd",
        //         "template_eyrpzyn",
        //         data,
        //         "_0RSmg5VJvbjNiPyf"
        //     )
        //     .then((response: any) => {
        //         console.log("SUCCESS!", response.status, response.text);
        //         formSuccess();
        //     })
        //     .catch((err: any) => {
        //         console.log("FAILED...", err);
        //     });
        window.dataLayer.push({
            'event': 'checkout',
            'price': 20,
            'title': "super-title",
            'ecommerce': {
                'currencyCode': 1123213,
                'checkout': {
                    'actionField': {
                        'step': '0'
                    },
                    'products': []
                }
            }
        });
    };

    // const formSuccess = () => {
    //     toast("Thanks for submitting your Query!");
    //     const item: any = document.getElementById("queryForm");
    //     item.reset();
    // };

    return (
        <div className="query-form">
            <ToastContainer />
            <form
                id="queryForm"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="input-field">
                    <input
                        type="text"
                        // name="from_name"
                        placeholder="Name"
                        {...register("from_name", {
                            required: "Name is required",
                        })}
                    />
                    {errors.from_name?.message && (
                        <p className="errors">{errors.from_name?.message}</p>
                    )}
                </div>

                <div className="input-field">
                    <input
                        type="text"
                        // name="reply_to"
                        placeholder="Email"
                        {...register("reply_to", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address",
                            },
                        })}
                    />
                    {errors.reply_to?.message && (
                        <p className="errors">{errors.reply_to?.message}</p>
                    )}
                </div>

                <div className="input-field">
                    <input
                        type="text"
                        name="phone_number"
                        placeholder="Phone"
                        {...register("phone_number", {
                            required: "Phone number is required",
                            minLength: {
                                value: 8,
                                message: "Phone number is not valid",
                            },
                        })}
                    />
                    {errors.phone_number?.message && (
                        <p className="errors">{errors.phone_number?.message}</p>
                    )}
                </div>

                <div className="input-field">
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        {...register("subject", {
                            required: "Subject is required",
                            minLength: {
                                value: 10,
                                message: "Minimum 10 characters required",
                            },
                        })}
                    />
                    {errors.subject?.message && (
                        <p className="errors">{errors.subject?.message}</p>
                    )}
                </div>

                <div className="input-field full-width">
                    <textarea
                        className="textarea"
                        name="message"
                        placeholder="Your message"
                        {...register("message", {
                            required: "Message is required",
                            minLength: {
                                value: 20,
                                message: "Minimum 20 characters required",
                            },
                            maxLength: {
                                value: 500,
                                message: "Maximum 500 characters allowed",
                            },
                        })}
                    />
                    {errors.message?.message && (
                        <p className="errors">{errors.message?.message}</p>
                    )}
                </div>

                <button className="submit-button" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;
