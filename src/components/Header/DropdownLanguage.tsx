import { useState } from "react";
import Link from "next/link";
import ClickOutside from "@/components/ClickOutside";

const languages = [
  { code: "en", name: "English", svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 411.132 411.132"><path d="M411.132 310.184c0 5.523-4.477 10-10 10H10c-5.523 0-10-4.477-10-10s4.477-10 10-10h391.132c5.523 0 10 4.477 10 10M0 263.783c0-5.523 4.477-10 10-10h5.835L91.86 135.817c1.847-2.867 4.981-4.58 8.437-4.583a10 10 0 0 1 8.408 4.635l21.494 33.81 67.94-75.424a10 10 0 0 1 14.86 0l67.43 74.861 22.1-33.4a10 10 0 0 1 8.339-4.482h.061a10 10 0 0 1 8.345 4.583l76.021 117.966h5.835c5.523 0 10 4.477 10 10s-4.477 10-10 10H10c-5.523 0-10-4.477-10-10m294.254-79.317 62.437 69.317h14.812l-60.745-94.26zM81.357 253.783h248.417l-55.419-61.527a9 9 0 0 1-.294-.327l-68.491-76.04zm-41.728 0H54.44l61.864-68.679-16.096-25.32z"/></svg> },
  { code: "uz", name: "Uzbek", svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 411.132 411.132"><path d="M411.132 310.184c0 5.523-4.477 10-10 10H10c-5.523 0-10-4.477-10-10s4.477-10 10-10h391.132c5.523 0 10 4.477 10 10M0 263.783c0-5.523 4.477-10 10-10h5.835L91.86 135.817c1.847-2.867 4.981-4.58 8.437-4.583a10 10 0 0 1 8.408 4.635l21.494 33.81 67.94-75.424a10 10 0 0 1 14.86 0l67.43 74.861 22.1-33.4a10 10 0 0 1 8.339-4.482h.061a10 10 0 0 1 8.345 4.583l76.021 117.966h5.835c5.523 0 10 4.477 10 10s-4.477 10-10 10H10c-5.523 0-10-4.477-10-10m294.254-79.317 62.437 69.317h14.812l-60.745-94.26zM81.357 253.783h248.417l-55.419-61.527a9 9 0 0 1-.294-.327l-68.491-76.04zm-41.728 0H54.44l61.864-68.679-16.096-25.32z"/></svg> },
];

const DropdownLanguage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0].code);

  const handleLanguageChange = (language: { code: string }) => {
    setSelectedLanguage(language.code);
    setDropdownOpen(false); // Close the dropdown after selection
  };

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
      <li>
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="relative flex h-12 w-12 items-center justify-center rounded-full border border-stroke bg-gray-2 text-dark hover:text-primary dark:border-dark-4 dark:bg-dark-3 dark:text-white dark:hover:text-white"
        >
          {languages.find(lang => lang.code === selectedLanguage)?.svg}
        </button>

        {dropdownOpen && (
          <div
            className="absolute mt-7.5 flex flex-col rounded-xl border-[0.5px] border-stroke bg-white px-5.5 pb-5.5 pt-5 shadow-default dark:border-dark-3 dark:bg-gray-dark sm:right-0 sm:w-[364px]"
          >
            <div className="mb-5 flex items-center justify-between">
              <h5 className="text-lg font-medium text-dark dark:text-white">
                Select Language
              </h5>
            </div>

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
