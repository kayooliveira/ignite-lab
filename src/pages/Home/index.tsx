import { gql, useMutation } from '@apollo/client'
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

import { Footer } from '../../components/Footer'
import { Logo } from '../../components/Logo'

const CREATE_NEW_SUBSCRIBER = gql`
  mutation MyMutation($name: String!, $email: String!) {
    createSubscriber(data: { name: $name, email: $email }) {
      id
    }
  }
`

type Inputs = {
  name: string
  email: string
}

export function Home() {
  const [inputs, setInputs] = useState<Inputs>({} as Inputs)
  const navigate = useNavigate()
  const [createNewSubscriber, { data, loading, error }] = useMutation(
    CREATE_NEW_SUBSCRIBER
  )

  useEffect(() => {
    if (error) {
      toast('Ocorreu um erro ao processar sua inscrição', {
        style: { backgroundColor: '#f44336' }
      })
    }
    if (loading) {
      toast('Processando sua inscrição', {
        style: { backgroundColor: '#ffaf50' }
      })
    }
    if (data) {
      toast(
        'Inscrição realizada com sucesso, você será redirecionado para a página do evento em 3 segundos',
        { style: { backgroundColor: '#4caf50' } }
      )

      setTimeout(() => {
        navigate('/evento')
      }, 3000)
    }
  }, [data, loading, error])

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (inputs.email.trim() !== '' && inputs.name.trim() !== '') {
      createNewSubscriber({
        variables: {
          name: inputs.name,
          email: inputs.email
        }
      })
    } else {
      toast('Por favor preencha os dados corretamente!')
    }
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }

  return (
    <div className="flex min-h-screen w-screen flex-col bg-blur bg-cover bg-bottom bg-no-repeat pt-16">
      <div className="mx-auto flex w-full max-w-[1100px] flex-col">
        <div className="mx-auto flex items-center justify-between gap-40">
          <div className="min-w-[39rem]">
            <Logo />
            <h1 className="mt-8 text-[40px] leading-tight">
              Construa uma{' '}
              <strong className="font-bold text-ignite-secondary">
                aplicação completa
              </strong>
              , do zero, com{' '}
              <strong className="font-bold text-ignite-secondary">React</strong>
            </h1>
            <span className="mt-6 text-base leading-relaxed">
              Em apenas uma semana você vai dominar na prática uma das
              tecnologias mais utilizadas e com alta demana para acessar as
              melhores oportunidades do mercado.
            </span>
          </div>
          <form
            onSubmit={handleSubmit}
            className="min-w-[24.75rem] rounded bg-ignite-gray-3 p-8"
          >
            <span className="mb-6 block text-2xl font-bold leading-snug">
              Inscreva-se gratuitamente
            </span>
            <input
              name="name"
              onChange={handleChange}
              placeholder="Digite seu nome"
              className="mb-2 h-14 w-full rounded bg-ignite-gray-1 px-6 placeholder-ignite-gray-4"
            />
            <input
              type="email"
              onChange={handleChange}
              placeholder="digite seu email"
              name="email"
              className="h-14 w-full rounded bg-ignite-gray-1 px-6 placeholder-ignite-gray-4"
            />
            <button
              type="submit"
              className="mt-6 block w-full rounded bg-ignite-primary py-4 px-6 text-sm font-bold leading-relaxed transition-colors hover:bg-ignite-primary-dark"
            >
              GARANTIR MINHA VAGA
            </button>
          </form>
        </div>

        <img
          src="/src/assets/img/code-mockup.png"
          alt="mockup de um código escrito"
        />
      </div>
      <Footer />
    </div>
  )
}
