"use client";
import { useRouter, usePathname } from "../../i18n/routing";
import { useLocale } from "next-intl";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const LanguageSwitcher = () => {
    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale();

    const handleChange = (nextLocale: string) => {
        const safePathname = pathname ?? "/";
        router.push(safePathname, { locale: nextLocale, scroll: false });
    };

    return (
        <div className="flex items-center mr-2 sm:mr-0">
            <Select onValueChange={handleChange} value={locale}>
                <SelectTrigger>
                    <SelectValue placeholder={locale === "en" ? "EN" : "RU"} />
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
