'use client'

import Image from 'next/image';
import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import logo from '@/assets/images/Marca.svg';
import { useForm } from 'react-hook-form';
import api from '@/config/axios';
import { useRouter } from 'next/navigation';

// Defina o esquema de validação com Zod
const schema = z.object({
  email: z.string().email('Email inválido').nonempty('Email é obrigatório'),
  password: z.string().min(4, 'Senha deve ter pelo menos 4 caracteres'),
});

type FormData = z.infer<typeof schema>;

export default function Login() {
  const route = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    //TODO: função para fazer o login
    // const response = api.post('/auth', {
    //   username: data.email,
    //   password: data.password,
    // });

    route.push('/feed')
  };

  return (
    <>
      <main className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="flex flex-col items-center">
          <Image src={logo} alt="GodFy" width={184} height={100} />

          <form
            className="bg-white rounded-lg shadow-lg mt-7 min-w-[420px] p-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label htmlFor="email" className="mb-4 block">
              <span className="block text-black font-semibold mb-2">e-Mail</span>
              <input
                type="text"
                className="border border-gray-300 rounded-md text-gray-500 p-2 w-full"
                placeholder="usuario@mail.com"
                {...register('email')}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </label>
            <label htmlFor="password" className="block mb-5">
              <span className="block text-black font-semibold mb-2">Senha</span>
              <input
                type="password"
                className="border border-gray-300 rounded-md text-gray-500 p-2 w-full"
                placeholder="****"
                {...register('password')}
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
            </label>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white w-full p-2 rounded-md"
            >
              Entrar
            </button>
          </form>

          <div className="links flex items-center justify-center my-10 gap-5">
            <Link href="#"
              className="text-blue-500 font-semibold hover:text-blue-700">Criar Conta
            </Link>
            <Link href="#" className="text-blue-500 font-semibold hover:text-blue-700">Esqueceu a senha?
            </Link>
          </div>

          <p className="text-sm text-gray-400 font-semibold">
            Bora fazer negócios entre Irmãos em Cristo!
          </p>
        </div>
      </main>
    </>
  );
}
