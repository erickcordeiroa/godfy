import { ReactNode } from "react";
import Header from "./components/header";
import iconLogo from '@/assets/images/logo.svg';
import Image from "next/image";

export default function LayoutInternal({ children }: any) {
  return (
    <>
      <main className="min-h-screen bg-gray-100">
        <Header />

        <div className="container max-w-screen-xl mx-auto p-1">
          <div className="flex flex-row justify-between items-start gap-4">
            {/* perfil profile  */}
            <aside className="p-4 bg-white shadow-sm rounded-lg min-w-[300px]">
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
            <section className="p-4 bg-white shadow-sm rounded-md">
              {children}
            </section>
            {/* Accept Account */}
            <aside className="p-4 bg-white shadow-sm rounded-md">

            </aside>
          </div>
        </div>
      </main >
    </>
  )
}