import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-gray-700 text-white py-6">
            <div className="container mx-auto px-6 text-center">
                <div className="flex justify-center space-x-6 mb-4 flex-wrap">
                    <Link href="#" className="text-white mb-2 md:mb-0">Home</Link>
                    <Link href="#" className="text-white mb-2 md:mb-0">Services</Link>
                    <Link href="#" className="text-white mb-2 md:mb-0">Privacy</Link>
                </div>

                <div className="flex justify-center space-x-6 mb-4 flex-wrap">
                    <Link href="#" className="text-white mb-2 md:mb-0">Facebook</Link>
                    <Link href="#" className="text-white mb-2 md:mb-0">Twitter</Link>
                    <Link href="#" className="text-white mb-2 md:mb-0">Instagram</Link>
                </div>

                <div className="text-sm text-gray-200">
                    <p>&copy; 2025 Linklead. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
