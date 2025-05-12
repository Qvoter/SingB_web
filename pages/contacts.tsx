import { NextPage } from 'next'
import Footer from '../components/Footer'  

const ContactsPage: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Контакты</h1>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Свяжитесь с нами</h2>
          <form className="bg-white p-6 rounded-lg shadow-lg">
            <label className="block text-lg font-medium mb-2">Ваше имя</label>
            <input
              type="text"
              className="p-2 mb-4 border rounded-lg w-full"
              placeholder="Введите ваше имя"
            />
            <label className="block text-lg font-medium mb-2">Ваш Email</label>
            <input
              type="email"
              className="p-2 mb-4 border rounded-lg w-full"
              placeholder="Введите ваш email"
            />
            <label className="block text-lg font-medium mb-2">Сообщение</label>
            <textarea
              className="p-2 mb-4 border rounded-lg w-full"
              placeholder="Введите ваше сообщение"
            />
            <button className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-500 transition">
              Отправить
            </button>
          </form>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6">Наш офис</h2>
          <p className="text-lg text-gray-600 mb-4">
            Адрес: ул. Примерная, 1, Москва, Россия
          </p>
          <div className="w-full h-64 bg-gray-200 mb-4 flex items-center justify-center text-gray-500">
            {/* Вставьте карту здесь */}
            Карта будет здесь
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default ContactsPage
