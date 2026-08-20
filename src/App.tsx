import { ResourceGrid } from './components/ResourceGrid'
import { resources } from './data/resources'

function App() {
  return (
    <div className="min-h-screen">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Resource Centre
          </h1>
          <p className="mt-1 text-slate-500">
            Podcasts, articles, and guides to support your wellbeing.
          </p>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-6 py-8">
        <ResourceGrid resources={resources} />
      </main>
    </div>
  )
}

export default App
