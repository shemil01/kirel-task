import { IoMdClose } from "react-icons/io";


// isMenuopen, onToggleMenu passed from Mobile home component as props
const ToggleMenu = ({ isMenuOpen, onToggleMenu }) => {
  return (
    isMenuOpen && (
      <div className="w-full h-screen flex flex-col space-y-6 pt-32  items-center bg-[#292828] z-30 absolute top-0 left-0">
        <ul className="space-y-20">
          <li className="text-white text-lg hover:underline">Menu item 1</li>
          <li className="text-white text-lg hover:underline">Menu item 2</li>
          <li className="text-white text-lg hover:underline">Menu item 3</li>
        </ul>

        <IoMdClose
          className="text-white text-2xl cursor-pointer"
          onClick={onToggleMenu}
        />
      </div>
    )
  );
};

export default ToggleMenu;
