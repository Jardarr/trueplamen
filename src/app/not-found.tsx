import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Header from "./components/header";
import Footer from "./components/footer";

export default async function NotFound() {
    const messages = await getMessages();

    return (
        <NextIntlClientProvider messages={messages}>
            <div className="px-4 bg-black sticky top-0 z-50">
                <Header />
            </div>
            <div className="flex justify-center items-center bg-wasted bg-cover bg-fixed bg-center bg-no-repeat h-custom-height">
                <div className="flex w-full items-center justify-center text-center flex-col text-black text-6xl lg:text-9xl bg-gray-500/45 rounded-md">
                    <h1 className="wasted">Wasted...</h1>
                </div>
            </div>
            <div className="px-4 md:px-24 py-4">
                <Footer />
            </div>
        </NextIntlClientProvider>
    );
}
