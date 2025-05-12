import { NextPage } from 'next'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'

const HomePage: NextPage = () => {
  const router = useRouter()

  // Функции для обработки кликов по кнопкам
  const handleLearnMoreClick = () => {
    router.push('/tech')
  }

  const handleJoinClick = () => {
    router.push('/signup')
  }

  return (
    <div className="min-h-screen">
      {/* Главная секция с ярким разноцветным фоном */}
        <div className="bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-600 min-h-screen text-white flex flex-col justify-center items-center px-6 py-16">
        <h1 className="text-5xl font-extrabold mb-6 text-shadow-lg">Добро пожаловать в SignBridge</h1>
        <p className="text-lg max-w-3xl text-center mb-6">
          SignBridge — это инновационная платформа, которая помогает вам эффективно управлять и анализировать данные
          с помощью передовых технологий в области ИИ и машинного обучения.
        </p>
        <button
          onClick={handleLearnMoreClick}
          className="bg-gradient-to-r from-orange-400 to-pink-500 px-8 py-4 rounded-lg text-lg shadow-lg hover:bg-gradient-to-r hover:from-yellow-300 hover:to-pink-400 transition-all duration-300 ease-in-out"
        >
          Узнать больше
        </button>
      </div>

      {/* Преимущества с разноцветными карточками */}
      <div className="container mx-auto text-center py-16 px-4 bg-gradient-to-r from-green-400 to-teal-500 text-white">
        <h2 className="text-4xl font-semibold mb-6">Наши Преимущества</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold mb-4">Инновационные решения</h3>
            <p>
              Мы разрабатываем передовые технологии, которые помогут вам значительно улучшить процессы обработки данных
              и взаимодействия с пользователями.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold mb-4">Высокая безопасность</h3>
            <p>
              Все наши решения соответствуют самым строгим стандартам безопасности, чтобы ваши данные были в полной
              безопасности.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-700 text-white shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold mb-4">Легкость в использовании</h3>
            <p>
              Мы стремимся создавать интерфейсы, которые легко понять и использовать, даже если вы не являетесь
              техническим специалистом.
            </p>
          </div>
        </div>
      </div>

      {/* Как это работает */}
      <div className="container mx-auto text-center py-16 px-4 bg-gradient-to-r from-yellow-500 to-red-600 text-white">
        <h2 className="text-4xl font-semibold mb-6">Как это работает?</h2>
        <p className="text-lg mb-8">
          Наша платформа использует новейшие достижения в области ИИ и машинного обучения, чтобы обеспечить
          максимальную точность в обработке данных и анализе.
        </p>
        <button
          onClick={handleJoinClick}
          className="bg-gradient-to-r from-teal-400 to-green-500 px-8 py-4 rounded-lg text-lg shadow-lg hover:bg-gradient-to-r hover:from-teal-300 hover:to-green-400 transition-all duration-300 ease-in-out"
        >
          Присоединиться
        </button>
      </div>

      {/* Футер */}
      <Footer />
    </div>
  )
}

export default HomePage
