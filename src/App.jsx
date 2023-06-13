
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import MyRoutes from './routers/routes'

function App() {
  return (
    <>
      <main className='w-full h-screen bg-slate-300'>
        <NavBar/>
        <MyRoutes/>
      </main>
    </>
  )
}

export default App
