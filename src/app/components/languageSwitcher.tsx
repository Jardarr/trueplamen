"use client";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const LanguageSwitcher = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [currentLocale, setCurrentLocale] = useState("en");

    useEffect(() => {
        const segments = pathname.split("/");
        if (segments[1]) {
            setCurrentLocale(segments[1]);
        }
    }, [pathname]);

    const switchLanguage = (locale: string) => {
        const segments = pathname.split("/");
        segments[1] = locale; // Assuming the locale is the first segment after the domain
        const newPathname = segments.join("/");
        router.push(newPathname);
    };

    const handleChange = (locale: string) => {
        switchLanguage(locale);
    };

    return (
        <div className="flex items-center mr-2 sm:mr-0">
            <Select onValueChange={handleChange}>
                <SelectTrigger>
                    <SelectValue placeholder={currentLocale === "en" ? "EN" : "RU"} />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="en">EN</SelectItem>
                    <SelectItem value="ru">RU</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
};

export default LanguageSwitcher;
