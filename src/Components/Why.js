import React from "react";

const Why = () => {
    return (
        <div className="mt-28" id="why">
            <div className="bg-black py-10">
                <div className="text-center mb-10 mt-20">
                    <h2 className="text-4xl font-bold text-white">Why Choose WizBit?</h2>
                    <p className="mt-4 text-lg text-gray-400">
                        Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results.
                    </p>
                </div>
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-6 rounded-lg flex flex-col items-center text-center">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="bg-white p-2 rounded-md">
                            <path d="M20.3632 38.4339C26.0479 38.4339 30.6344 33.8474 30.6344 28.1788C30.6344 22.4941 26.0479 17.9076 20.3632 17.9076C14.6946 17.9076 10.1081 22.4941 10.1081 28.1788C10.1081 33.8474 14.6946 38.4339 20.3632 38.4339ZM17.4401 33.4597C16.8264 33.9119 16.1804 33.4436 16.4226 32.733L17.5854 29.2607L14.6139 27.1452C14.0486 26.7253 14.2263 25.934 15.0015 25.934L18.6513 25.9662L19.7657 22.4779C19.9917 21.7674 20.7669 21.7674 20.993 22.4779L22.1074 25.9662L25.7571 25.934C26.5323 25.934 26.6939 26.7414 26.1448 27.1291L23.1732 29.2607L24.336 32.733C24.5783 33.4436 23.9322 33.9119 23.3186 33.4597L20.3793 31.3118L17.4401 33.4597ZM10.528 20.4915C12.1107 18.4889 14.2909 16.9709 16.7941 16.2279L9.47824 3.08203L5.23085 9.5581C4.94015 9.97798 4.924 10.4463 5.1824 10.8662L10.528 20.4915ZM16.7456 10.7209H23.9969L28.9225 2H11.82L16.7456 10.7209ZM23.9484 16.2279C26.4678 16.9709 28.6319 18.4889 30.2145 20.4915L35.5762 10.8662C35.8185 10.4463 35.8024 9.97798 35.5117 9.5581L31.2642 3.08203L23.9484 16.2279Z" fill="url(#paint0_linear_1_10350)" />
                            <defs>
                                <linearGradient id="paint0_linear_1_10350" x1="5" y1="20.2169" x2="35.7449" y2="20.2169" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#652D90" />
                                    <stop offset="0.5" stop-color="#502B86" />
                                    <stop offset="1" stop-color="#3A297B" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <h3 className="text-2xl font-semibold text-white mb-2">Expertise</h3>
                        <p className="text-gray-400">
                            Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.
                        </p>
                    </div>

                    <div className="p-6 rounded-lg flex flex-col items-center text-center">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="bg-white rounded-md">
                            <path d="M15.7112 29.1936H29.9336C31.71 29.1936 32.3436 28.6926 32.3436 27.7127C32.3436 24.84 28.689 20.8761 22.8167 20.8761C16.9557 20.8761 13.3012 24.84 13.3012 27.7127C13.3012 28.6926 13.9347 29.1936 15.7112 29.1936ZM22.828 18.883C25.2607 18.883 27.3538 16.7452 27.3538 13.9616C27.3538 11.2114 25.2494 9.17383 22.828 9.17383C20.4067 9.17383 18.3022 11.256 18.3022 13.9839C18.3022 16.7452 20.3954 18.883 22.828 18.883ZM3.49137 29.1936H12.0905C10.9138 27.5123 12.3507 24.1274 14.7833 22.2791C13.5274 21.4552 11.9094 20.8427 9.7936 20.8427C4.69072 20.8427 1.5 24.5505 1.5 27.6348C1.5 28.6369 2.06573 29.1936 3.49137 29.1936ZM9.80492 19.1392C11.9094 19.1392 13.7424 17.2686 13.7424 14.8524C13.7424 12.4585 11.8981 10.6881 9.80492 10.6881C7.70041 10.6881 5.84481 12.503 5.85613 14.8747C5.85613 17.2686 7.68909 19.1392 9.80492 19.1392ZM31.2008 18.5491C31.5856 18.8051 32.1173 18.7272 32.4228 18.2929C33.2941 17.1683 33.8146 15.5094 33.8146 13.8058C33.8146 12.1022 33.2941 10.4543 32.4228 9.31858C32.1173 8.88433 31.5856 8.80639 31.2008 9.06248C30.7483 9.37425 30.669 9.93098 31.0311 10.3875C31.6873 11.2782 32.0607 12.5142 32.0607 13.8058C32.0607 15.0974 31.6761 16.3221 31.0311 17.224C30.6804 17.6917 30.7483 18.2261 31.2008 18.5491ZM35.3986 21.4552C35.8172 21.7335 36.3376 21.6333 36.6431 21.2102C38.0914 19.2506 38.94 16.556 38.94 13.8058C38.94 11.0556 38.1028 8.33875 36.6431 6.40135C36.3376 5.97824 35.8172 5.87803 35.3986 6.15639C34.9799 6.43475 34.9121 6.95807 35.2402 7.41459C36.4735 9.12929 37.1862 11.4341 37.1862 13.8058C37.1862 16.1774 36.4508 18.4711 35.2402 20.1969C34.9234 20.6534 34.9799 21.1768 35.3986 21.4552Z" fill="url(#paint0_linear_1_10361)" />
                            <defs>
                                <linearGradient id="paint0_linear_1_10361" x1="1.5" y1="17.5968" x2="38.94" y2="17.5968" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#652D90" />
                                    <stop offset="0.5" stop-color="#502B86" />
                                    <stop offset="1" stop-color="#3A297B" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <h3 className="text-2xl font-semibold text-white mb-2">Client-Centric Approach</h3>
                        <p className="text-gray-400">
                            We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success.
                        </p>
                    </div>

                    <div className="p-6 rounded-lg flex flex-col items-center text-center">
                        <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" className="bg-white p-2 rounded-md">
                            <g clip-path="url(#clip0_1_5146)">
                                <path d="M20.5 0C9.19561 0 0 9.19649 0 20.5C0 31.8035 9.19561 41 20.5 41C31.8044 41 41 31.8035 41 20.5C41 9.19649 31.8044 0 20.5 0ZM20.5 39.2917C10.1382 39.2917 1.70831 30.8618 1.70831 20.5C1.70831 10.1382 10.1382 1.70831 20.5 1.70831C30.8618 1.70831 39.2917 10.1382 39.2917 20.5C39.2917 30.8618 30.8618 39.2917 20.5 39.2917Z" fill="url(#paint0_linear_1_5146)" />
                                <path d="M16.2292 8.54163H11.1042C9.6911 8.54163 8.54166 9.69107 8.54166 11.1041V16.2291C8.54166 17.6422 9.6911 18.7916 11.1042 18.7916H16.2292C17.6422 18.7916 18.7916 17.6422 18.7916 16.2291V11.1041C18.7916 9.69107 17.6422 8.54163 16.2292 8.54163ZM17.0833 16.2291C17.0833 16.7004 16.6995 17.0833 16.2291 17.0833H11.1041C10.6336 17.0833 10.2499 16.7005 10.2499 16.2291V11.1041C10.2499 10.6329 10.6336 10.2499 11.1041 10.2499H16.2291C16.6995 10.2499 17.0833 10.6328 17.0833 11.1041V16.2291Z" fill="url(#paint1_linear_1_5146)" />
                                <path d="M29.8958 8.54163H24.7708C23.3578 8.54163 22.2083 9.69107 22.2083 11.1041V16.2291C22.2083 17.6422 23.3578 18.7916 24.7708 18.7916H29.8958C31.3089 18.7916 32.4583 17.6422 32.4583 16.2291V11.1041C32.4583 9.69107 31.3089 8.54163 29.8958 8.54163ZM30.75 16.2291C30.75 16.7004 30.3663 17.0833 29.8958 17.0833H24.7708C24.3004 17.0833 23.9166 16.7005 23.9166 16.2291V11.1041C23.9166 10.6329 24.3004 10.2499 24.7708 10.2499H29.8958C30.3663 10.2499 30.75 10.6328 30.75 11.1041V16.2291Z" fill="url(#paint2_linear_1_5146)" />
                                <path d="M16.2292 22.2083H11.1042C9.6911 22.2083 8.54166 23.3578 8.54166 24.7708V29.8958C8.54166 31.3089 9.6911 32.4583 11.1042 32.4583H16.2292C17.6422 32.4583 18.7916 31.3089 18.7916 29.8958V24.7708C18.7916 23.3578 17.6422 22.2083 16.2292 22.2083ZM17.0833 29.8958C17.0833 30.3671 16.6995 30.75 16.2291 30.75H11.1041C10.6336 30.75 10.2499 30.3672 10.2499 29.8958V24.7708C10.2499 24.2996 10.6336 23.9166 11.1041 23.9166H16.2291C16.6995 23.9166 17.0833 24.2995 17.0833 24.7708V29.8958Z" fill="url(#paint3_linear_1_5146)" />
                                <path d="M29.8958 22.2083H24.7708C23.3578 22.2083 22.2083 23.3578 22.2083 24.7708V29.8958C22.2083 31.3089 23.3578 32.4583 24.7708 32.4583H29.8958C31.3089 32.4583 32.4583 31.3089 32.4583 29.8958V24.7708C32.4583 23.3578 31.3089 22.2083 29.8958 22.2083ZM30.75 29.8958C30.75 30.3671 30.3663 30.75 29.8958 30.75H24.7708C24.3004 30.75 23.9166 30.3672 23.9166 29.8958V24.7708C23.9166 24.2996 24.3004 23.9166 24.7708 23.9166H29.8958C30.3663 23.9166 30.75 24.2995 30.75 24.7708V29.8958Z" fill="url(#paint4_linear_1_5146)" />
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_1_5146" x1="0" y1="20.5" x2="41" y2="20.5" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#652D90" />
                                    <stop offset="0.5" stop-color="#502B86" />
                                    <stop offset="1" stop-color="#3A297B" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_1_5146" x1="8.54166" y1="13.6666" x2="18.7916" y2="13.6666" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#652D90" />
                                    <stop offset="0.5" stop-color="#502B86" />
                                    <stop offset="1" stop-color="#3A297B" />
                                </linearGradient>
                                <linearGradient id="paint2_linear_1_5146" x1="22.2083" y1="13.6666" x2="32.4583" y2="13.6666" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#652D90" />
                                    <stop offset="0.5" stop-color="#502B86" />
                                    <stop offset="1" stop-color="#3A297B" />
                                </linearGradient>
                                <linearGradient id="paint3_linear_1_5146" x1="8.54166" y1="27.3333" x2="18.7916" y2="27.3333" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#652D90" />
                                    <stop offset="0.5" stop-color="#502B86" />
                                    <stop offset="1" stop-color="#3A297B" />
                                </linearGradient>
                                <linearGradient id="paint4_linear_1_5146" x1="22.2083" y1="27.3333" x2="32.4583" y2="27.3333" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#652D90" />
                                    <stop offset="0.5" stop-color="#502B86" />
                                    <stop offset="1" stop-color="#3A297B" />
                                </linearGradient>
                                <clipPath id="clip0_1_5146">
                                    <rect width="41" height="41" fill="white" />
                                </clipPath>
                            </defs>

                        </svg>


                        <h3 className="text-2xl font-semibold text-white mb-2">Results-Driven Solutions</h3>
                        <p className="text-gray-400">
                            Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.
                        </p>
                    </div>

                    <div className="p-6 rounded-lg flex flex-col items-center text-center">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="bg-white rounded-md">
                            <path d="M8.83747 27.8223L9.24664 29.4589C9.76492 31.5867 10.897 32.6778 13.1474 32.6778H27.8365C30.1007 32.6778 31.219 31.6139 31.7509 29.4589L32.1601 27.8223H8.83747ZM8.38739 25.9538H32.6238L35.1879 15.4518L34.0695 14.8108L27.782 19.3934C27.3182 19.7208 27.0046 19.598 26.7454 19.2298L20.8261 10.2826L20.1714 10.2554L14.1976 19.2707C13.9657 19.6253 13.6929 19.7345 13.2292 19.4071L7.06441 14.9062L5.75507 15.2472L8.38739 25.9538ZM6.25971 18.1795C8.06006 18.1795 9.50578 16.7202 9.50578 14.9062C9.50578 13.1332 8.06006 11.6602 6.25971 11.6602C4.45937 11.6602 3 13.1195 3 14.9062C3 16.7202 4.473 18.1795 6.25971 18.1795ZM20.4988 12.5058C22.2855 12.5058 23.7448 11.0464 23.7448 9.24607C23.7448 7.473 22.2855 6 20.4988 6C18.6848 6 17.2391 7.45937 17.2391 9.24607C17.2391 11.0464 18.6985 12.5058 20.4988 12.5058ZM34.7242 18.1795C36.511 18.1795 37.9839 16.7202 37.9839 14.9062C37.9839 13.1195 36.5246 11.6602 34.7242 11.6602C32.9376 11.6602 31.4782 13.1332 31.4782 14.9062C31.4782 16.7202 32.9376 18.1795 34.7242 18.1795Z" fill="url(#paint0_linear_1_10384)" />
                            <defs>
                                <linearGradient id="paint0_linear_1_10384" x1="3" y1="19.3389" x2="37.9839" y2="19.3389" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#652D90" />
                                    <stop offset="0.5" stop-color="#502B86" />
                                    <stop offset="1" stop-color="#3A297B" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <h3 className="text-2xl font-semibold text-white mb-2">Collaborative Partnership</h3>
                        <p className="text-gray-400">
                            We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Why;
