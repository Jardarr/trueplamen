"use client";

import { useRef } from "react";
import { postEntry } from "../action";
import { useFormStatus } from "react-dom";

export default function Form() {
    const formRef = useRef<HTMLFormElement>(null);
    const { pending } = useFormStatus();
    return (
        <form
            action={async (formData) => {
                await postEntry(formData);
                formRef.current?.reset();
            }}
            ref={formRef}
            className="relative flex items-center text-sm mb-5"
            style={{ opacity: pending ? 0.7 : 1 }}
        >
            <input
                type="text"
                placeholder="Your message..."
                name="entry"
                required
                disabled={pending}
                className="pl-4 pr-32 py-2 mt-1 focus:ring-neutral-500 focus:border-neutral-500 block w-full border-neutral-300 rounded-md bg-stone-600 text-gray-100"
            />

            <button
                type="submit"
                disabled={pending}
                className="flex items-center justify-center absolute right-2 mt-1 font-medium h-7 bg-neutral-800 text-gray-200 rounded w-16"
            >
                Send
            </button>
        </form>
    );
}