import { ResourceCard } from './components/ResourceCard'
import { resources } from './data/resources'

function App() {
  return (
    <div className="mx-auto max-w-sm p-6">
      {resources.map((r) => (
        <ResourceCard key={r.id} resource={r} />
      ))}
    </div>
  )
}

export default App
