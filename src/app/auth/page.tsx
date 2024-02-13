"use client";
import { FaReact } from "react-icons/fa";
import { TbMail } from "react-icons/tb";
import { AiOutlineUnlock, AiOutlineUser } from "react-icons/ai";
import { BsGithub, BsGoogle } from "react-icons/bs";
import Button from "@/components/Button";
import { z } from "zod";
import { useCallback, useState } from "react";
import { Input } from "@/components/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Divider from "@/components/Divider";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Logo from "@/components/Logo";

type VarientType = "LOGIN" | "REGISTER";

function Auth() {
  const [variant, setVariante] = useState<VarientType>("LOGIN");
  const router = useRouter();
  const schema = z
    .object({
      email: z.string().email({ message: "O email precisa ser valido" }),
      password: z
        .string()
        .min(5, { message: "A senha deve conter no minimo 5 caracters" }),
      name: z.string().refine(
        (value) => {
          if (variant === "REGISTER") {
            return value.length >= 5; // e obrigatorio
          } else {
            return true; // Não e obrigatorio
          }
        },
        { message: "O seu username deve conter no minimo 5 caracteres" }
      ),
    })
    .transform((fields) => {
      return {
        ...fields,
        name: variant === "REGISTER" ? fields.name : "",
      };
    });
  type formProps = z.infer<typeof schema>;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formProps>({
    criteriaMode: "all",
    reValidateMode: "onChange",
    mode: "onChange",
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const toogleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariante("REGISTER");
    } else {
      setVariante("LOGIN");
    }
  }, [variant]);

  const handleFormSubmit = async (dados: formProps) => {
    if (variant === "REGISTER") {
      const response = await fetch("api/users", {
        method: "POST",
        body: JSON.stringify(dados),
        headers: {
          "contente-type": "json",
        },
      });

      if (!response.ok) {
        alert(response);
        console.log(response.body);
      } else {
        setVariante("LOGIN");
      }
    } else if (variant === "LOGIN") {
      const res = await signIn("credentials", {
        ...dados,
        redirect: false,
      });

      if (res?.error) {
        console.log("erro ao fazer login,tente novamente mais tarde ");
      } else {
        router.push("/");
      }
    }
  };
  return (
    <>
      <section className="w-screen h-screen flex  flex-col items-center justify-center ">
        <div className=" md:w-96 w-4/5">
          <div className="text-7xl text-cian-800 w-full flex justify-center mb-4 text-cyan-400">
            <Logo/>
          </div>
          
          <p className="text-gray-400 text-sm text-center">
            {variant === "REGISTER"
              ? "Cadastre-se e comece a usar"
              : "Faça login e comece a usar"}
          </p>
          <form
            action=""
            className="mt-10 flex flex-col gap-3 "
            onSubmit={handleSubmit(handleFormSubmit)}
          >
            {variant === "REGISTER" && (
              <Input
                ico={<AiOutlineUser />}
                label="Nome de usuario"
                type="text"
                placeholder="Paulo"
                helperText={errors.name?.message}
                {...register("name")}
              />
            )}
            <Input
              ico={<TbMail />}
              label="Endereço de e-mail"
              type="text"
              placeholder="edvan@gmail.com"
              helperText={errors.email?.message}
              {...register("email")}
            />
            <Input
              ico={<AiOutlineUnlock />}
              label="Sua senha"
              type="password"
              placeholder="**********"
              helperText={errors.password?.message}
              {...register("password")}
            />

            {variant === "LOGIN" && (
              <div className="text-gray-200 flex gap-2 text-sm items-center">
                <input
                  title="Lembra de mim "
                  className="form-checkbox   cursor-pointer  bg-gray-800 w-4 h-4 text-white checked:hover:bg-gray-700 checked:bg-gray-800 border-none focus:outline-none checked:focus:bg-gray-800 focus:ring-0 focus:border-x-cian-500 focus:ring-offset-0"
                  type="checkbox"
                  id="remenbercheckbox"
                />
                <p>Lembra de mim por 30 dias</p>
              </div>
            )}

            <Button
              type="submit"
              buttonSize="full"
              
              rounded="rounded"
              text={`${
                variant === "REGISTER" ? "Cadastrar-se" : "Entrar na plataforma"
              }`}
            />
          </form>
        </div>

        <div className="space-y-4  flex flex-col justify-center items-center text-gray-500 md:w-96  w-4/5">
          {variant === "REGISTER" ? (
            <>
              <Divider />
              <Button
                text="Cadastro com o Github"
                type="submit"
                bg="bg-black"
                ico={<BsGithub />}
                buttonSize="full"
                rounded="rounded"
              />
            </>
          ) : (
            <>
             <Divider />
              <Button
                text="Entrar com o Github"
                type="submit"
                bg="bg-black"
                ico={<BsGithub />}
                buttonSize="full"
                rounded="rounded"
              />
            </>
          )}

          {variant != "REGISTER" && (
            <Link
              href={"/forgotpassword"}
              className="underline hover:text-gray-400"
            >
              Esqueceu sua senha?
            </Link>
          )}

          <a
            href="#"
            className="underline hover:text-gray-400"
            onClick={() => toogleVariant()}
          >
            {variant === "REGISTER"
              ? "Ja possuo uma conta"
              : "Não possui uma conta? Crie uma agora"}
          </a>
        </div>
      </section>
    </>
  );
}

export default Auth;
