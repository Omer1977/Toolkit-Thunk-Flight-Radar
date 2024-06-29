import { useEffect, useState } from "react"
import Header from "./components/Header"
import ListView from "./pages/ListView"
import MapView from "./pages/MapView"
import { useDispatch } from "react-redux"
import { getFlights } from "./redux/actions/flightAction"
import Modal from "./components/Modal"

function App() {
  const [isMapView, setIsMapView] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [detailId, setDetailId] = useState(null)

  const dispatch = useDispatch()

  const openModal = (id) => {
    setDetailId(id)
    setIsOpen(true)
  }

  const closeModal = () => {
    setDetailId(null)
    setIsOpen(false)
  }

  useEffect(() => {
    dispatch(getFlights())
  }, [])
  
  return (
    <>
      <Header/>
      
      <div className="view-buttons">

        <button
         className={isMapView ? 'active' : ''}
         onClick={() => setIsMapView(true)}>
          Map View
        </button>

        <button
         className={!isMapView ? 'active' : ''}
         onClick={() => setIsMapView(false)}>
          List View

        </button>
      </div>
      
      {isMapView ? <MapView openModal={openModal} /> : <ListView openModal={openModal} />}

      {isOpen && <Modal detailId={detailId} closeModal={closeModal} />}
    </>
  )
}

export default App
