import { Map } from "./map"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"
import directionGuideImage from "../../images/map.jpg"

export const Location = () => {
  return (
    <>
      <LazyDiv className="card location">
        <h2 className="english">Location</h2>
        <div className="addr">
          {LOCATION}
          <div className="detail">{LOCATION_ADDRESS}</div>
        </div>
        <Map />
      </LazyDiv>
      <LazyDiv className="card location">
        <img
          className="direction-guide"
          src={directionGuideImage}
          alt="테라리움서울 오시는 길 안내"
          loading="lazy"
        />
      </LazyDiv>
    </>
  )
}
