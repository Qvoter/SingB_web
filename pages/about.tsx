import { NextPage } from 'next'
import Footer from '../components/Footer' // Импорт футера

const AboutPage: NextPage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">О проекте SignBridge</h1>
      
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">История создания</h2>
        <p className="text-lg text-gray-600 mb-4">
          SignBridge был основан в 2025 году с целью создания передовых решений для управления данными и
          улучшения взаимодействия с пользователями. Мы стремимся внедрять новые технологии, которые
          помогут сделать процессы более эффективными.
        </p>
        <p className="text-lg text-gray-600">
          С самого начала нашей работы мы поставили перед собой задачу создавать продукты, которые помогут
          бизнесам и частным пользователям решать их задачи с максимальной скоростью и минимальными
          затратами.
        </p>
      </section>
      
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Наша миссия</h2>
        <p className="text-lg text-gray-600 mb-4">
          Мы стремимся быть лидерами в области искусственного интеллекта, предлагая решения, которые
          позволяют автоматизировать процессы и создавать интеллектуальные системы для управления данными.
        </p>
        <p className="text-lg text-gray-600">
          Наша миссия — улучшать качество жизни пользователей и предприятий, делая их деятельность более
          эффективной и безопасной.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6">Наша команда</h2>
        <p className="text-lg text-gray-600 mb-4">
          Мы гордимся своей командой профессионалов, которые объединены общей целью — разрабатывать инновационные
          решения для бизнеса. Мы работаем в разных областях технологий, включая ИИ, машинное обучение и
          разработку программного обеспечения.
        </p>
      </section>

      <Footer />  {/* Добавляем футер с вашими данными */}
    </div>
  )
}

export default AboutPage
