import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

import codeMockup from '../../assets/img/code-mockup.png'
import { Footer } from '../../components/Footer'
import { Logo } from '../../components/Logo'
import { useCreateSubscriberMutation } from '../../graphql/graphqlCodegen'

type Inputs = {
  email: string
  name: string
}

export function Home() {
  const [inputs, setInputs] = useState<Inputs>({ email: '', name: '' })
  const navigate = useNavigate()
  const [createNewSubscriber, { loading, error, data }] =
    useCreateSubscriberMutation({})
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
      return navigate('/evento')
    }
    if (inputs.email.trim() !== '' && inputs.name.trim() !== '') {
      createNewSubscriber({
        variables: {
          name: inputs.name,
          email: inputs.email
        }
      }).finally(() => {
        setInputs({ email: '', name: '' })
      })
    } else {
      toast('Por favor preencha os dados corretamente!')
    }
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div className="flex min-h-screen flex-col items-center bg-blur bg-cover bg-no-repeat">
        <div className="mx-auto mt-10 flex w-full max-w-[1100px] flex-col items-center justify-between gap-8 lg:mt-20 lg:flex-row lg:items-center lg:gap-0">
          <div className="flex flex-col items-center p-4 lg:block lg:max-w-[40rem] lg:p-2 lg:text-left">
            <Logo />
            <h1 className="mt-8 text-center text-[2.5rem] leading-tight lg:text-left">
              Construa uma{' '}
              <strong className="font-bold text-ignite-secondary">
                aplicação completa
              </strong>
              , do zero, com{' '}
              <strong className="font-bold text-ignite-secondary">React</strong>
            </h1>
            <span className="mt-6 text-center text-base leading-relaxed lg:text-left">
              Em apenas uma semana você vai dominar na prática uma das
              tecnologias mais utilizadas e com alta demana para acessar as
              melhores oportunidades do mercado.
            </span>
          </div>
          <div className="w-full max-w-[40rem] rounded border border-ignite-gray-7 bg-ignite-gray-2 p-8 lg:w-auto lg:max-w-none">
            <strong className="mb-6 block text-2xl">
              {alreadySubscribed
                ? 'Você já está inscrito'
                : 'Inscreva-se gratuitamente'}
            </strong>
            <form
              onSubmit={handleSubmit}
              className="flex w-full flex-col gap-2"
            >
              {!alreadySubscribed && (
                <>
                  <input
                    name="name"
                    onChange={handleChange}
                    disabled={loading}
                    required
                    placeholder="Digite seu nome"
                    className="h-14 rounded bg-ignite-gray-1 px-5 placeholder-ignite-gray-4"
                  />
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    disabled={loading}
                    required
                    placeholder="digite seu email"
                    className="h-14 rounded bg-ignite-gray-1 px-5 placeholder-ignite-gray-4"
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
        </div>
        <img src={codeMockup} alt="mockup de um código escrito" />
      </div>
      <Footer />
    </>
  )
}
