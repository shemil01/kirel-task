import React from "react";
import { MdArrowOutward } from "react-icons/md";

const Home = () => {
  return (
    <div className="relative bg-gradient-to-b from-black via-purple-900 to-black text-white overflow-hidden">
      {/* Navbar */}
      <nav className="flex justify-around items-center px-8 py-4 z-10 relative">
        <div className="text-3xl font-bold">Wefo</div>
        <div className="space-x-4 bg-transparent border-2 border-[#848487] px-5 py-3 rounded-full space-x-10">
          <a href="#" className="hover:underline">
            Menu item
          </a>
          <a href="#" className="hover:underline">
            Menu item
          </a>
          <a href="#" className="hover:underline">
            Menu item
          </a>
        </div>
        <span className="bg-[#4034EB] text-white px-6 py-2 rounded-full hover:bg-indigo-600 flex justify-between">
          <p>Start a project</p> <MdArrowOutward className="mr-2" />
        </span>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-start px-8 py-24 relative z-10">
        <h1 className="text-6xl font-bold leading-tight">
          We create award
          <br />
          winning websites
        </h1>
        <p className="mt-6 text-lg max-w-md">
          Based in San Francisco, we’re a digital products design & development
          studio passionate about creating highly applicable digital
          experiences.
        </p>
        <span className="mt-8 bg-transparent border-2 border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition flex justify-between">
          <p>Explore</p>
          <MdArrowOutward className="mr-2" />
        </span>
      </section>

      {/* SVG Background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1888 1862"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <mask
            id="mask0_2801_102"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="-106"
            y="157"
            width="1806"
            height="770"
          >
            <rect
              x="-106"
              y="157.905"
              width="1806"
              height="768.358"
              fill="url(#paint0_radial_2801_102)"
            />
          </mask>
          <g mask="url(#mask0_2801_102)">
            <g opacity="0.3">
              <mask id="path-2-inside-1_2801_102" fill="white">
                <path d="M345.2 157.905H533.1V926.262H345.2V157.905Z" />
              </mask>
              <path
                d="M345.2 157.905H533.1V926.262H345.2V157.905Z"
                fill="white"
                fillOpacity="0.2"
              />
              <path
                d="M531.889 157.905V926.262H534.312V157.905H531.889ZM346.411 926.262V157.905H343.988V926.262H346.411Z"
                fill="white"
                mask="url(#path-2-inside-1_2801_102)"
              />
            </g>
            <g opacity="0.3">
              <mask id="path-4-inside-2_2801_102" fill="white">
                <path d="M583.368 157.905H771.268V926.262H583.368V157.905Z" />
              </mask>
              <path
                d="M583.368 157.905H771.268V926.262H583.368V157.905Z"
                fill="white"
                fillOpacity="0.2"
              />
              <path
                d="M770.057 157.905V926.262H772.48V157.905H770.057ZM584.579 926.262V157.905H582.156V926.262H584.579Z"
                fill="white"
                mask="url(#path-4-inside-2_2801_102)"
              />
            </g>
            <g opacity="0.3">
              <mask id="path-6-inside-3_2801_102" fill="white">
                <path d="M821.534 157.905H1009.43V926.262H821.534V157.905Z" />
              </mask>
              <path
                d="M821.534 157.905H1009.43V926.262H821.534V157.905Z"
                fill="white"
                fillOpacity="0.2"
              />
              <path
                d="M1008.22 157.905V926.262H1010.65V157.905H1008.22ZM822.745 926.262V157.905H820.323V926.262H822.745Z"
                fill="white"
                mask="url(#path-6-inside-3_2801_102)"
              />
            </g>
            <g opacity="0.3">
              <mask id="path-8-inside-4_2801_102" fill="white">
                <path d="M1059.7 157.905H1247.6V926.262H1059.7V157.905Z" />
              </mask>
              <path
                d="M1059.7 157.905H1247.6V926.262H1059.7V157.905Z"
                fill="white"
                fillOpacity="0.2"
              />
              <path
                d="M1246.39 157.905V926.262H1248.81V157.905H1246.39ZM1060.91 926.262V157.905H1058.49V926.262H1060.91Z"
                fill="white"
                mask="url(#path-8-inside-4_2801_102)"
              />
            </g>
          </g>
          <g style={{ mixBlendMode: "screen" }} filter="url(#filter0_ddf_2801_102)">
            <rect
              x="562.084"
              y="502.745"
              width="1189.46"
              height="654.085"
              rx="75.0986"
              fill="white"
              shapeRendering="crispEdges"
            />
            <rect
              x="562.084"
              y="502.745"
              width="1189.46"
              height="654.085"
              rx="75.0986"
              stroke="url(#paint1_radial_2801_102)"
              strokeWidth="1.21127"
              shapeRendering="crispEdges"
            />
          </g>
          <g filter="url(#filter1_f_2801_102)">
            <ellipse
              cx="1086.97"
              cy="853.897"
              rx="652.195"
              ry="479.242"
              transform="rotate(28.2568 1086.97 853.897)"
              fill="#4034EB"
            />
          </g>
          <defs>
            <filter
              id="filter0_ddf_2801_102"
              x="456.825"
              y="397.486"
              width="1399.98"
              height="864.603"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="52.3268" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.25098 0 0 0 0 0.203922 0 0 0 0 0.921569 0 0 0 1 0"
              />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2801_102" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="12.1127" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.917647 0 0 0 0 0.203922 0 0 0 0 0.92549 0 0 0 1 0"
              />
              <feBlend mode="normal" in2="effect1_dropShadow_2801_102" result="effect2_dropShadow_2801_102" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_2801_102" result="shape" />
            </filter>
            <filter
              id="filter1_f_2801_102"
              x="148.636"
              y="113.179"
              width="1877.08"
              height="1481.44"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="143.8" result="effect1_foregroundBlur_2801_102" />
            </filter>
            <radialGradient
              id="paint0_radial_2801_102"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(796 579.084) rotate(90) scale(579.084 796)"
            >
              <stop offset="0.276042" stopColor="white" stopOpacity="0.5" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <radialGradient
              id="paint1_radial_2801_102"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(1166.81 1025.79) rotate(90) scale(327.042 595.81)"
            >
              <stop stopColor="white" stopOpacity="0.1" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Home;
