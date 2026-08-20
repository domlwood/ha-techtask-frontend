import { ResourceGrid } from './components/ResourceGrid'
import { resources } from './data/resources'

function App() {
  return (
    <div className="mx-auto max-w-6xl p-6">
      <ResourceGrid resources={resources} />
    </div>
  )
}

export default App
