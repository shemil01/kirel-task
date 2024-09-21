import { IoMdClose } from "react-icons/io";

const ToggleMenu = ({ isMenuOpen, onToggleMenu }) => {
  return (
    isMenuOpen && (
      <div className="w-full h-screen flex flex-col space-y-6 justify-center items-center bg-[#292828] z-30 absolute top-0 left-0">
        <a href="#" className="text-white text-lg hover:underline">
          Menu item 1
        </a>
        <a href="#" className="text-white text-lg hover:underline">
          Menu item 2
        </a>
        <a href="#" className="text-white text-lg hover:underline">
          Menu item 3
        </a>

        <IoMdClose
          className="text-white text-2xl cursor-pointer"
          onClick={onToggleMenu}
        />
      </div>
    )
  );
};

export default ToggleMenu;
