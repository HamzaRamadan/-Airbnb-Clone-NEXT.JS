import { FaGlobe, FaBars, FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="flex space-x-4 items-center justify-end text-gray-500">
  {/* العنصر الأول يظهر فقط في الشاشات المتوسطة فما فوق */}
  <p className="hidden md:inline cursor-pointer">Become a host</p>

  {/* العنصر الثاني يظهر فقط في الشاشات المتوسطة فما فوق */}
  <FaGlobe className="hidden md:inline h-6 cursor-pointer" />

  {/* العنصر الثالث يظهر فقط في الشاشات المتوسطة فما فوق */}
  <div className="hidden md:flex space-x-2 border-2 p-2 rounded-full">
    <FaBars className="h-6" />
    <FaUserCircle className="h-6" />
  </div>
</div>
  );
};

export default Navbar;
