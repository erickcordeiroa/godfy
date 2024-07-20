import iconLogo from '@/assets/images/logo.svg';
import Image from "next/image";
import Link from 'next/link';

export default function Header() {
  return (
    <div className="bg-white shadow-sm py-2 mb-4 sticky top-0 z-50">
      <div className="container max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo à esquerda */}
        <div className="flex items-center">
          <Image src={iconLogo} alt="GodFy" width={57} className="p-1" />

          {/* Campo de busca */}
          <input
            type="text"
            className="bg-gray-300/50 border-gray-500 p-3 rounded-md ml-4"
            placeholder="Buscar"
          />
        </div>

        {/* Navegação à direita */}
        <nav>
          <Image src={iconLogo} alt="GodFy" width={57} className="p-2" />
        </nav>
      </div>
    </div>

  );
}