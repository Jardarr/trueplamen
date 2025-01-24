export default function CopyrightInfo() {
    const currentYear = new Date().getFullYear();
    return (
        <div className="w-full flex flex-col items-center sm:items-start px-2">
            <span translate="no">&copy; {currentYear} Designed by Jardarr</span>
            <span translate="no">&copy; {currentYear} All Rights Reserved</span>
        </div>
    );
}
