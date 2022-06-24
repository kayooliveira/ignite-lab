import { gql, useMutation } from '@apollo/client'
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

import codeMockup from '../../assets/img/code-mockup.png'
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
  const alreadySubscribed = localStorage.getItem('subscribed')

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
      toast('Inscrição realizada!', { style: { backgroundColor: '#4caf50' } })
      localStorage.setItem('subscribed', 'true')
      navigate('/evento')
    }
  }, [data, loading, error])

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (alreadySubscribed) {
      navigate('/evento')
    }
    if (inputs.email.trim() !== '' && inputs.name.trim() !== '') {
      createNewSubscriber({
        variables: {
          name: inputs.name,
          email: inputs.email
        }
      }).finally(() => {
        setInputs({} as Inputs)
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
              {alreadySubscribed
                ? 'Você já está inscrito'
                : 'Inscreva-se gratuitamente'}
            </span>
            {!alreadySubscribed && (
              <>
                <input
                  name="name"
                  onChange={handleChange}
                  disabled={loading}
                  placeholder="Digite seu nome"
                  className="mb-2 h-14 w-full rounded bg-ignite-gray-1 px-6 placeholder-ignite-gray-4"
                />
                <input
                  type="email"
                  onChange={handleChange}
                  disabled={loading}
                  placeholder="digite seu email"
                  name="email"
                  className="h-14 w-full rounded bg-ignite-gray-1 px-6 placeholder-ignite-gray-4"
                />
              </>
            )}
            <button
              type="submit"
              disabled={loading}
              className="mt-6 block w-full rounded bg-ignite-primary py-4 px-6 text-sm font-bold leading-relaxed transition-colors hover:bg-ignite-primary-dark disabled:cursor-progress disabled:bg-ignite-primary-dark/50"
            >
              {alreadySubscribed ? 'IR PARA O EVENTO' : 'GARANTIR MINHA VAGA'}
            </button>
          </form>
        </div>

        <img src={codeMockup} alt="mockup de um código escrito" />
      </div>
      <Footer />
    </div>
  )
}
