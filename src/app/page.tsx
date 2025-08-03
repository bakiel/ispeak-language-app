export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            🎯 iSpeak Language App
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Master languages with AI-powered learning
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-2xl mb-4">🤖</div>
            <h3 className="text-xl font-semibold mb-2">AI Tutor</h3>
            <p className="text-gray-600">Personalized learning with advanced AI technology</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-2xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
            <p className="text-gray-600">Monitor your learning journey with detailed analytics</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-2xl mb-4">🎮</div>
            <h3 className="text-xl font-semibold mb-2">Interactive Games</h3>
            <p className="text-gray-600">Learn through fun and engaging activities</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-2xl mb-4">🗣️</div>
            <h3 className="text-xl font-semibold mb-2">Speech Practice</h3>
            <p className="text-gray-600">Improve pronunciation with voice recognition</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-2xl mb-4">📚</div>
            <h3 className="text-xl font-semibold mb-2">Rich Content</h3>
            <p className="text-gray-600">Access thousands of lessons and exercises</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-2xl mb-4">🏆</div>
            <h3 className="text-xl font-semibold mb-2">Achievements</h3>
            <p className="text-gray-600">Earn badges and compete with friends</p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all mr-4">
            Start Learning
          </button>
          <button className="bg-white hover:bg-gray-50 text-purple-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all border border-purple-200">
            View Demo
          </button>
        </div>
      </div>
    </main>
  )
}
