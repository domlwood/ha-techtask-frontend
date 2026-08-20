import { ResourceGrid } from './components/ResourceGrid'
import { resources } from './data/resources'

function App() {
  return (
    <div className="p-6">
      <ResourceGrid resources={resources} />
    </div>
  )
}

export default App
