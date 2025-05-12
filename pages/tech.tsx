import { NextPage } from 'next'
import Footer from '../components/Footer'

const TechPage: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50 text-gray-900">
      <main className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-10 text-center text-blue-700">Технологии проекта SignBridge</h1>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">AI (Искусственный интеллект)</h2>
          <p className="text-lg leading-relaxed">
            Искусственный интеллект — это ядро платформы SignBridge. Мы используем передовые модели глубокого обучения для
            распознавания жестов, обработки естественного языка и адаптации системы под пользователя. Это позволяет нам создавать
            адаптивную и высокоточную систему для общения между слышащими и неслышащими людьми.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Компьютерное зрение</h2>
          <p className="text-lg leading-relaxed">
            С помощью технологий компьютерного зрения мы анализируем видео в реальном времени, распознаём руки, лица и выражения.
            Это обеспечивает точное и своевременное преобразование жестов в текст или речь, что делает систему удобной и надёжной.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">MediaPipe</h2>
          <p className="text-lg leading-relaxed">
            Мы используем MediaPipe — фреймворк от Google для обработки изображений и видео. Он позволяет точно отслеживать руки и
            движения в реальном времени, что критически важно для точного распознавания жестового языка.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Примеры использования</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-2xl font-semibold mb-2 text-purple-700">Анализ видео</h3>
              <p className="text-gray-700">Реализация потокового анализа видео для распознавания жестов в режиме реального времени.</p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-2xl font-semibold mb-2 text-purple-700">Распознавание лиц</h3>
              <p className="text-gray-700">Используем для авторизации пользователей и настройки адаптивного интерфейса.</p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-2xl font-semibold mb-2 text-purple-700">Интерактивная обратная связь</h3>
              <p className="text-gray-700">Интерфейс в режиме диалога с пользователем для уточнения распознанного смысла.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default TechPage
