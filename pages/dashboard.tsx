import { NextPage } from 'next'
import Footer from '../components/Footer' 

const DashboardPage: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Личный кабинет</h1>

        <section className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Добро пожаловать, Маяцкий Никита Максимович</h2>
          <p className="text-lg text-gray-700">
            Вы являетесь владельцем проекта SignBridge. Здесь вы можете отслеживать ключевую статистику, управлять содержимым сайта
            и получать аналитику по инвесторам и технологиям.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Текущие инвесторы</h3>
            <p>3 активных инвестора, последний вклад — 10.05.2025</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Технологии</h3>
            <p>AI, MediaPipe и компьютерное зрение успешно внедрены</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default DashboardPage
