import Header from "./components/header";
import iconLogo from '@/assets/images/logo.svg';
import Image from "next/image";
import avatarImg from '@/assets/images/avatar.jpeg';

export default function LayoutInternal({ children }: any) {
  return (
    <>
      <main className="min-h-screen bg-gray-100 flex flex-col">
        <Header />

        <div className="container max-w-screen-xl mx-auto p-1 flex-grow flex">
          <div className="flex flex-row justify-between items-start gap-4">
            {/* perfil profile  */}
            <aside className="p-4 bg-white shadow-sm rounded-lg min-w-[300px] sticky top-0 self-start">
              <div className="profile-info flex items-center gap-4 pb-4">
                <Image src={iconLogo} alt="Profile name" width={48} />

                <div>
                  <p className="text-gray-950 text-lg -my-2">Profile Name</p>
                  <span className="text-blue-600 text-xs">@profileName</span>
                </div>
              </div>

              <hr />
              <ul className="text-gray-600 py-4">
                <li className="p-1">Teste</li>
                <li className="p-1">Teste</li>
                <li className="p-1">Teste</li>
                <li className="p-1">Teste</li>
                <li className="p-1">Teste</li>
                <li className="p-1">Teste</li>
              </ul>
            </aside>
            {/* feed  */}
            <section className="flex-grow max-h-screen overflow-y-scroll">
              {children}
            </section>
            {/* Accept Account */}
            <aside className="p-4 bg-white shadow-sm rounded-md min-w-[300px]">
              <h3 className="text-gray-900 text-lg font-semibold">Solicitações</h3>
              <div className="userInfo flex justify-start items-center gap-2">
                <Image src={avatarImg} alt="GodFy" width={57} className="p-1 rounded-lg" />
                <div>
                  <p className="text-gray-950 text-lg -my-2">John Foe</p>
                  <span className="text-blue-600 text-xs">@johnfoe</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white w-full p-2 rounded-md mt-4">
                  Aceitar Conta
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white w-full p-2 rounded-md mt-4">
                  Rejeitar
                </button>
              </div>
            </aside>
          </div>
        </div>
      </main >
    </>
  )
}