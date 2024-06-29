import axios from "axios"
import { useEffect, useState } from "react"
import { options2 } from "../constant"
import { useDispatch } from "react-redux"
import { setTrail } from "../redux/slices/flightSlice"
import moment from "moment"

const Modal = ({detailId, closeModal}) => {
    const [d, setData] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
      setData(null)
      axios.get(`https://flight-radar1.p.rapidapi.com/flights/detail?flight=${detailId}`, options2)
      .then((res) => {dispatch(setTrail(res.data.trail)), setData(res.data)})
    }, [detailId])

    const formatDate = (unix_time) => {
      const date = new Date(unix_time * 1000)
      return moment(date).calendar()
    }

  return (
    <div className="detail-outer">
        <div className="detail-inner">
           <p className="close-area">
              <span onClick={closeModal}>X</span>
           </p>

           {!d ? (
            <div className="wrapper">
              <div className="loader">
                <span></span>
              </div>
            </div>
           ) : !d.airport.origin || !d.airport.destination? (
            <div>
              <p>{d.airline?.name}</p>
              <p>Data of this Flight is Confidential</p>
           </div>
           ) : (
            <>
              <h2>{d.aircraft.model.text}</h2>
              <h2>{d.aircraft.model.code}</h2>

              <p>{d.aircraft.registration}</p>

              <img src={d.aircraft.images.large[0].src} />

              <p>
                <span>Company: </span>
                <span>{d.airline.name}</span>
              </p>

              <p>
                <span>Origin: </span>
                <a target="_blank" href={d.airport.origin.website}>{d.airport.origin.name}</a>
              </p>

              <p>
                <span>Target: </span>
                <a target="_blank" href={d.airport.destination.website}>{d.airport.destination.name}</a>
              </p>

              <p>
                <span>Departure Time: </span>
                <span>{formatDate(d.time.scheduled.departure)}</span>
              </p>

              <p>
                <span>Arrival Time: </span>
                <span>{formatDate(d.time.scheduled.arrival)}</span>
              </p>

              <p className={d.status.icon}>
                <span>{d.status.text}</span>
              </p>

            </>
           )}
        </div>
    </div>
  )
}

export default Modal