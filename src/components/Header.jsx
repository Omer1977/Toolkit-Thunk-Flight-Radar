import { useSelector } from "react-redux"

const Header = () => {

  const state = useSelector((store) => store)

  return (
    <header>
      <div>
        <img src="/airplane2.png" />
        <h3>Flight Radar</h3>
      </div>
      <p>
        {state.isLoading 
        ? 'Calculating Flights...' 
        : state.isError 
        ? 'Something Went Wrong' 
        : state.flights.length + ' Flights Found'}</p>
    </header>
  )
}

export default Header