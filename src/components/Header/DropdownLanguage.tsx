"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ClickOutside from "@/components/ClickOutside";

const languages = [
  {
    code: "uz",
    name: "Uzbek",
    svg: (
      <svg
        width="49px"
        height="49px"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        className="iconify iconify--emojione"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M32 2C19.3 2 8.5 9.9 4.1 21h55.8C55.5 9.9 44.7 2 32 2z"
          fill="#42ade2"
        />
        <path
          d="M32 62c12.7 0 23.5-7.9 27.9-19H4.1C8.5 54.1 19.3 62 32 62z"
          fill="#83bf4f"
        />
        <path
          d="M62 32c0-3.1-.5-6.2-1.4-9H3.4C2.5 25.8 2 28.9 2 32s.5 6.2 1.4 9h57.2c.9-2.8 1.4-5.9 1.4-9"
          fill="#ffffff"
        />
        <g fill="#c94747">
          <path d="M59.9 21c.1.3.3.7.4 1c.1.3.2.7.3 1" />
          <path d="M60.3 22c-.1-.3-.3-.7-.4-1H4.1c-.1.3-.3.7-.4 1c-.1.3-.2.7-.3 1h57.2c-.1-.3-.2-.7-.3-1" />
          <path d="M3.7 42c.1.3.3.7.4 1h55.8c.1-.3.3-.7.4-1c.1-.3.2-.7.3-1H3.4c.1.3.2.7.3 1" />
        </g>
        <g fill="#ffffff">
          <path d="M20.4 17.3c-2.4 0-4.3-1.9-4.3-4.3s1.9-4.3 4.3-4.3c.6 0 1.1.1 1.6.3c-.8-.6-1.9-1-3-1c-2.8 0-5 2.2-5 5s2.2 5 5 5c1.1 0 2.2-.4 3-1c-.5.2-1 .3-1.6.3" />
          <path d="M24.7 15.2l.4 1.1h1.1l-.9.6l.3 1.1l-.9-.7l-.9.7l.4-1.1l-.9-.6h1.1z" />
          <path d="M29 15.2l.3 1.1h1.2l-.9.6l.3 1.1l-.9-.7l-.9.7l.3-1.1l-.9-.6h1.1z" />
          <path d="M33.3 15.2l.3 1.1h1.1l-.9.6l.4 1.1l-.9-.7l-1 .7l.4-1.1l-.9-.6h1.1z" />
          <path d="M37.5 15.2l.4 1.1H39l-.9.6l.3 1.1l-.9-.7l-.9.7l.3-1.1l-.9-.6h1.2z" />
          <path d="M41.8 15.2l.3 1.1h1.2l-1 .6l.4 1.1l-.9-.7l-.9.7l.3-1.1l-.9-.6h1.1z" />
          <path d="M29 11.6l.3 1.1h1.2l-.9.6l.3 1.1l-.9-.7l-.9.7l.3-1.1l-.9-.6h1.1z" />
          <path d="M33.3 11.6l.3 1.1h1.1l-.9.6l.4 1.1l-.9-.7l-1 .7l.4-1.1l-.9-.6h1.1z" />
          <path d="M37.5 11.6l.4 1.1H39l-.9.6l.3 1.1l-.9-.7l-.9.7l.3-1.1l-.9-.6h1.2z" />
          <path d="M41.8 11.6l.3 1.1h1.2l-1 .6l.4 1.1l-.9-.7l-.9.7l.3-1.1l-.9-.6h1.1z" />
          <path d="M33.3 8l.3 1.1h1.1l-.9.6l.4 1.1l-.9-.7l-1 .7l.4-1.1l-.9-.6h1.1z" />
          <path d="M37.5 8l.4 1.1H39l-.9.6l.3 1.1l-.9-.7l-.9.7l.3-1.1l-.9-.6h1.2z" />
          <path d="M41.8 8l.3 1.1h1.2l-1 .6l.4 1.1l-.9-.7l-.9.7l.3-1.1l-.9-.6h1.1z" />
        </g>
      </svg>
    ),
  },
  {
    code: "en",
    name: "English",
    svg: (
      <svg
        width="46px"
        height="46px"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 473.68 473.68"
        xmlSpace="preserve"
      >
        <path
          style={{
            fill: "#29337a",
          }}
          d="M41.712 102.641c-15.273 22.168-26.88 47.059-33.918 73.812h107.734zM170.511 9.48a236 236 0 0 0-74.814 37.168l74.814 74.814zm-69.25 421.502a235.6 235.6 0 0 0 69.25 33.211v-102.45zM10.512 306.771c7.831 25.366 19.831 48.899 35.167 69.833l69.833-69.833z"
        />
        <path
          style={{
            fill: "#fff",
          }}
          d="M45.619 97.144a242 242 0 0 0-3.908 5.501l73.816 73.812H7.793c-1.746 6.645-3.171 13.418-4.345 20.284h141.776zm50.148 329.93c1.802 1.343 3.654 2.621 5.493 3.908l69.25-69.242v102.45c6.653 1.945 13.41 3.624 20.284 4.974V332.05zM5.25 286.487c1.47 6.873 3.205 13.642 5.258 20.284h105.001l-69.833 69.833a238.4 238.4 0 0 0 25.168 29.12L190.08 286.487zM170.511 9.48v111.982l-74.815-74.81c-10.314 7.67-19.955 16.185-28.888 25.403l123.983 123.983V4.506c-6.87 1.358-13.627 3.041-20.28 4.974"
        />
        <path
          style={{
            fill: "#d32030",
          }}
          d="m170.511 306.056-.711.715h.711zm19.573-19.569h.71v-.714zm91.145-89.75h-.684v.688zm-110.019-20.28-.699-.703v.703zm19.584 19.58v.7h.7z"
        />
        <path
          style={{
            fill: "#252f6c",
          }}
          d="M300.825 411.764v53.091a235.5 235.5 0 0 0 70.211-32.897l-57.526-57.526c-4.597 16.151-6.279 24.501-12.685 37.332m12.987-303.293 62.799-62.799a235.9 235.9 0 0 0-75.787-36.854v54.538c7.386 14.79 8.007 26.028 12.988 45.115m113.217 269.513c15.815-21.275 28.141-45.29 36.147-71.213h-107.36zm38.858-201.527c-7.188-27.318-19.143-52.676-34.898-75.192l-75.2 75.192z"
        />
        <path
          style={{
            fill: "#e7e7e7",
          }}
          d="m327.638 290.5 16.275 16.275 77.903 77.903c1.769-2.214 3.526-4.42 5.217-6.69l-71.213-71.213h107.36c2.046-6.638 3.784-13.41 5.25-20.284H329.16c-.228 2.876-1.249 1.152-1.522 4.009m-16.286-170.152 70.607-70.615a246 246 0 0 0-5.348-4.061l-62.799 62.799c.651 2.483-3.066 9.334-2.46 11.877m-10.527-61.356V8.814a236 236 0 0 0-20.284-4.727v24.476c7.547 8.182 14.312 18.459 20.284 30.429m25.216 137.745h144.195c-1.171-6.866-2.599-13.635-4.345-20.284H355.793l75.2-75.192a238 238 0 0 0-24.584-29.696l-84.702 84.694c2.281 15.363 3.302 24.285 4.334 40.478m-15.953 174.265 60.952 60.959c10.138-6.982 19.685-14.753 28.593-23.189l-80.173-80.177c-2.559 14.828-5.595 29.15-9.372 42.407m-29.543 71.299v27.28a234 234 0 0 0 20.284-4.727v-53.091c-5.976 11.975-12.741 22.367-20.284 30.538"
        />
        <path
          style={{
            fill: "#d71f28",
          }}
          d="m321.707 156.259 84.694-84.694a237 237 0 0 0-24.446-21.832l-66.55 66.561c2.958 12.363 4.301 26.514 6.302 39.965"
        />
        <path
          style={{
            fill: "#d32030",
          }}
          d="M236.836 473.68c-3.938 0-7.872-.108-11.81-.299q5.872.298 11.81.299m0 0c14.943 0 29.535-1.447 43.708-4.099v-27.28c-12.441 13.485-26.995 31.379-43.708 31.379"
        />
        <path
          style={{
            fill: "#d71f28",
          }}
          d="M470.232 196.737H327.911c1.885 29.704 1.657 60.249-.681 89.75h141.2a237.6 237.6 0 0 0 5.25-49.643c0-13.68-1.219-27.06-3.448-40.107M327.638 290.5c-1.316 13.994-5.901 24.898-8.182 38.099l80.173 80.173a239 239 0 0 0 22.183-24.094l-77.9-77.907z"
        />
        <path
          style={{
            fill: "#d32030",
          }}
          d="M280.545 30.324V4.091C266.376 1.447 251.784 0 236.836 0c16.713 0 31.267 16.843 43.709 30.324"
        />
        <path
          style={{
            fill: "#29337a",
          }}
          d="M300.825 422.007c6.406-12.834 11.899-27.609 16.499-43.757l-16.499-16.499zm18.552-319.101c-4.989-19.087-11.166-36.439-18.552-51.229v69.773z"
        />
        <path
          style={{
            fill: "#fff",
          }}
          d="M332.234 295.092c.269-2.857.512-5.725.744-8.605h-9.349zm-31.409-173.641V51.674c-5.976-11.97-12.737-22.254-20.284-30.429v129.906l40.735-40.735a458 458 0 0 0-1.9-7.517zm-19.596 75.286h52.429c-1.028-16.192-2.666-32.123-4.944-47.482zm-.684 255.695c7.547-8.182 14.308-18.459 20.284-30.429v-60.256l16.499 16.499c3.784-13.264 6.959-27.434 9.525-42.261l-46.307-46.304z"
        />
        <path
          style={{
            fill: "#e51d35",
          }}
          d="M280.545 452.432V289.681l46.304 46.307c2.277-13.205 4.069-26.899 5.381-40.896l-8.605-8.605h9.349c2.337-29.502 2.565-60.047.681-89.75h-52.429l47.482-47.482c-2.001-13.455-4.476-26.469-7.434-38.836l-40.728 40.735V21.248C268.103 7.763 253.549 0 236.836 0c-3.938 0-7.872.101-11.817.292a238.4 238.4 0 0 0-34.225 4.215v191.531L66.808 72.055a239 239 0 0 0-21.189 25.089l79.313 79.313 20.291 20.284H3.448C1.227 209.784 0 223.164 0 236.844c0 17.034 1.84 33.626 5.25 49.643h184.834L70.847 405.724a238.5 238.5 0 0 0 24.921 21.349l95.023-95.023v137.116a239 239 0 0 0 34.232 4.215c3.938.191 7.872.299 11.81.299 16.716 0 31.27-7.763 43.712-21.248"
        />
      </svg>
    ),
  },
];

const DropdownLanguage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("uz");

  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const pathLanguage = window.location.pathname.split("/")[1];
      if (["uz", "en"].includes(pathLanguage)) {
        setCurrentLanguage(pathLanguage);
      }
    }
  }, [isMounted, window.location.pathname]);

  const handleLanguageChange = (language: { code: string }) => {
    if (!isMounted) return;

    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/^\/(en|uz)/, `/${language.code}`);

    router.push(newPath);
    setDropdownOpen(false);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
      <li>
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="relative flex h-12 w-12 items-center justify-center rounded-full border border-stroke bg-gray-2 text-dark hover:text-primary dark:border-dark-4 dark:bg-dark-3 dark:text-white dark:hover:text-white"
        >
          {languages.find((lang) => lang.code === currentLanguage)?.svg}
        </button>

        {dropdownOpen && (
          <div className="absolute mt-7.5 flex flex-col rounded-xl border-[0.5px] border-stroke bg-white px-4 pb-0 pt-4 shadow-default dark:border-dark-3 dark:bg-gray-dark sm:right-0">
            <ul className="no-scrollbar mb-5 flex flex-col gap-1 overflow-y-auto">
              {languages.map((language) => (
                <li key={language.code}>
                  <button
                    onClick={() => handleLanguageChange(language)}
                    className="flex items-center gap-4 rounded-[10px] p-2.5 hover:bg-gray-2 dark:hover:bg-dark-3"
                  >
                    {language.svg}
                    <span className="block">{language.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </li>
    </ClickOutside>
  );
};

export default DropdownLanguage;
