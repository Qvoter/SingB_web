import { NextPage } from 'next'
import Footer from '../components/Footer'


const InvestorsPage: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">Для инвесторов</h1>
        <p className="text-xl text-gray-700 mb-6">
          Мы предлагаем инвесторам уникальные возможности для вложений в перспективные технологии, которые
          будут менять индустрию.
        </p>

        <h2 className="text-3xl font-semibold mb-4">Возможности для инвесторов</h2>
        <p className="text-lg text-gray-700 mb-6">
          Мы открыты для инвестиций и ищем стратегических партнеров, которые помогут нам расширить наш
          бизнес и реализовать амбициозные планы на будущее.
        </p>

        <h2 className="text-3xl font-semibold mb-4">Статистика рынка</h2>
        <p className="text-lg text-gray-700 mb-6">
          Рынок AI и компьютерного зрения продолжает расти. Мы видим огромный потенциал для внедрения
          наших решений в различные отрасли, включая безопасность, здравоохранение и производство.
        </p>

        <form className="bg-white p-6 shadow-lg rounded-lg">
          <label className="block mb-2 font-medium">Ваш email</label>
          <input type="email" className="w-full p-2 mb-4 border border-gray-300 rounded-lg" placeholder="Введите ваш email" />
          <label className="block mb-2 font-medium">Телефон</label>
          <input type="tel" className="w-full p-2 mb-4 border border-gray-300 rounded-lg" placeholder="Введите ваш телефон" />
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 transition-colors text-white p-2 rounded-lg">Отправить</button>
        </form>
      </main>
      <Footer />
    </div>
  )
}

export default InvestorsPage
