import Rating from "../components/Rating"

const Footer = () => {
    return (
        <footer className="" id="Footer">
            <div className="mx-auto w-full max-w-screen-xl px-8 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="#" className="flex items-center">
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
                        </a>
                    </div>
                <div>
                    <div className="grid grid-cols-2 sm:grid-cols-3">
                        <div className="">
                            <h2 className="mb-4 text-sm font-semibold uppercase text-white">Edited by</h2>
                            <ul className="text-gray-400 dark:text-gray-400 font-medium">
                                <li className="mb-2">
                                    <a href="https://www.instagram.com/madewijaya072" className="hover:underline">
                                        Ducky
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="">
                            <h2 className="mb-4 text-sm font-semibold uppercase text-white">Follow us</h2>
                            <ul className="text-gray-400 dark:text-gray-400 font-medium">
                                <li className="mb-2">
                                    <a href="https://www.instagram.com/dkv.officiall" className="hover:underline ">
                                        Instagram
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="hidden md:block">
                            <Rating />
                        </div>
                    </div>
                    <div className="">
                    <h2 className="mb-4 text-sm font-semibold uppercase text-white">Sources Code</h2>
                            <ul className="text-gray-400 dark:text-gray-400 font-medium">
                                <li className="mb-2">
                                    <a href="https://github.com/widev71" className="hover:underline">
                                        Vist
                                    </a>
                                </li>
                          </ul>
                    </div>
                </div>

                    <div className="flex items-center justify-center mt-8 md:hidden">
                        {/* RATING */}
                        <Rating />
                    </div>
                </div>
                <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="flex mt-4 justify-center sm:mt-0">
                        <p className="text-[0.7rem] text-white opacity-70">
                            © {new Date().getFullYear()} Kelas XI DKV | Di Kelola Oleh Siswa DKV
                        </p>
                    </div>
                    <div className="flex mt-4 justify-center sm:mt-0">
                        <p className="text-[0.7rem] text-white opacity-70">
                            Thiss Template
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer