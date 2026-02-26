import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

function Contact() {
    const form = useRef();
    const [loading, setLoading] = useState(false);

    const sendEmail = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_MAIL_SERVICE,
                import.meta.env.VITE_MAIL_TEMPLATE,
                form.current,
                import.meta.env.VITE_PUBLIC_KEY
            );

            toast.dismiss()
            toast.success("Message Sent Successfully")
            form.current.reset();
        } catch (error) {
            console.error(error);
            toast.dismiss()
            toast.error("Failed to send message ")
        }

        setLoading(false);
    };

    return (
        <div className="flex items-center justify-center px-4 py-10 md:py-0 md:pb-20">
            <div className="w-full max-w-2xl shadow-lg rounded-2xl border border-white/10 px-10 bg-blue-950/25">

                <h1 className="text-center text-3xl font-bold pt-6 uppercase">
                    Let's Connect
                </h1>

                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="flex flex-col space-y-5 py-10"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5">
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="Your Name"
                            className="p-3 border  border-white/10 rounded-lg bg-gray-950 font-medium outline-none "
                        />

                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="Your Email"
                            className="p-3 border border-white/10 rounded-lg bg-gray-950 font-medium outline-none "
                        />

                        <input
                            type="text"
                            name="phone"
                            required
                            placeholder="Your Phone"
                            className="p-3 border border-white/10 rounded-lg bg-gray-950 font-medium outline-none  "
                        />

                        <select name="role"
                            required
                            className="p-3 border border-white/10 rounded-lg appearance-none bg-gray-950 font-medium outline-none  "
                        >
                            <option value="">Select Role</option>
                            <option value="Full-Stack Developer">Full-Stack Developer</option>
                            <option value="Backend Developer">Backend Developer</option>
                            <option value="Front-End Developer">Front-End Developer</option>
                        </select>
                    </div>

                    <textarea
                        placeholder="Your Message"
                        name="message"
                        required
                        rows="4"
                        className="p-3 border border-white/10 rounded-lg  bg-gray-950 font-medium outline-none "
                    ></textarea>

                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-700 transition font-semibold disabled:opacity-50"
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </form>

            </div>
        </div>
    );
}

export default Contact;
