import { Fragment } from "react"

const FeaturedMatches = () => {
    return <Fragment><section className="matches">
    <h2>
      Matches<button className="btn btn--no-bg btn--icon btn--round-lg" type="button"><svg style={{width:'24px',height:'24px'}} viewBox="0 0 24 24"><path fill="currentColor" d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" /></svg></button>
    </h2>
    <div className="card">
      <div className="card__header matches__nav">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link active">All matches</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Live Play</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Completed</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Scheduled</a>
          </li>
        </ul>
        <a className="matches__agenda btn--icon"><span className="sr-only">Agenda</span><svg style={{width:"24px",height:"24px"}} viewBox="0 0 24 24"><path fill="currentColor" d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1" /></svg></a>
      </div>
      <div className="card__body matches__data">
        <table>
          <thead>
            <tr>
              <th>
                Date
              </th>
              <th>
                Match
              </th>
              <th>
                1x
              </th>
              <th>
                X
              </th>
              <th>
                2x
              </th>
              <th>
                <span className="sr-only">Stats</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span className="matches__time matches__time--live">8:00</span><span className="tag tag--red tag--icon"><svg width="6" height="6" viewBox="0 0 8 8"><circle fill="currentColor" cx="4" cy="4" r="4"/></svg>Live</span>
              </td>
              <td>
                <div className="score score--vertical">
                  <div className="score__team score__team--vertical">
                    <span>Real Valladolid</span><img alt="" src="https://ssl.gstatic.com/onebox/media/sports/logos/HlIrXZRP96tv0H1uiiN0Jg_48x48.png" />
                  </div>
                  <p className="score__result score__result--vertical">
                    <span className="score__goals">3</span><span className="score__separator">:</span><span className="score__goals">2</span>
                  </p>
                  <div className="score__team score__team--vertical">
                    <img alt="" src="https://ssl.gstatic.com/onebox/media/sports/logos/WKH7Ak5cYD6Qm1EEqXzmVw_48x48.png" /><span>Villareal</span>
                  </div>
                </div>
              </td>
              <td>
                <span className="tag tag--green rating rating--up">1.63</span>
              </td>
              <td>
                <span className="tag rating">2.13</span>
              </td>
              <td>
                <span className="tag rating">1.82</span>
              </td>
              <td>
                <a className="matches__stats btn btn--icon"><span className="sr-only">Stats</span><svg width="24" height="24" viewBox="0 0 24 24"> <path d="M22,21H2V3H4V19H6V10H10V19H12V6H16V19H18V14H22V21Z" /> </svg></a>
              </td>
            </tr>
            <tr>
              <td>
                <span className="matches__time matches__time--live">9:30</span><span className="tag tag--red tag--icon"><svg width="6" height="6" viewBox="0 0 8 8"><circle fill="currentColor" cx="4" cy="4" r="4"/></svg>Live</span>
              </td>
              <td>
                <div className="score score--vertical">
                  <div className="score__team score__team--vertical">
                    <span>Qarabag FK</span><img alt="" src="https://ssl.gstatic.com/onebox/media/sports/logos/k-Mu0SCwDQG4SFQBxmettA_48x48.png" />
                  </div>
                  <p className="score__result score__result--vertical">
                    <span className="score__goals">1</span><span className="score__separator">:</span><span className="score__goals">0</span>
                  </p>
                  <div className="score__team score__team--vertical">
                    <img alt="" src="https://ssl.gstatic.com/onebox/media/sports/logos/RnYaRw_k05CV-qhVouSEMA_48x48.png" /><span>NK Maribor</span>
                  </div>
                </div>
              </td>
              <td>
                <span className="tag tag--green rating rating--up">1.22</span>
              </td>
              <td>
                <span className="tag rating">1.74</span>
              </td>
              <td>
                <span className="tag tag--red rating rating--down">2.55</span>
              </td>
              <td>
                <a className="matches__stats btn btn--icon"><span className="sr-only">Stats</span><svg width="24" height="24" viewBox="0 0 24 24"> <path d="M22,21H2V3H4V19H6V10H10V19H12V6H16V19H18V14H22V21Z" /> </svg></a>
              </td>
            </tr>
            <tr>
              <td>
                <span className="matches__time">10:45</span><span className="tag tag--icon"><svg width="6" height="6" viewBox="0 0 8 8"><circle fill="#613cea" cx="4" cy="4" r="4"/></svg>Today</span>
              </td>
              <td>
                <div className="score score--vertical">
                  <div className="score__team score__team--vertical">
                    <span>Arsenal</span><img alt="" src="https://ssl.gstatic.com/onebox/media/sports/logos/4us2nCgl6kgZc0t3hpW75Q_48x48.png" />
                  </div>
                  <p className="score__result score__result--vertical score__result--not-started">
                    <span className="score__goals">-</span><span className="score__separator">:</span><span className="score__goals">-</span>
                  </p>
                  <div className="score__team score__team--vertical">
                    <img alt="" src="https://ssl.gstatic.com/onebox/media/sports/logos/fhBITrIlbQxhVB6IjxUO6Q_48x48.png" /><span>Chelsea</span>
                  </div>
                </div>
              </td>
              <td>
                <span className="tag rating">5.37</span>
              </td>
              <td>
                <span className="tag rating">1.10</span>
              </td>
              <td>
                <span className="tag rating">1.86</span>
              </td>
              <td>
                <a className="matches__stats btn btn--icon"><span className="sr-only">Stats</span><svg width="24" height="24" viewBox="0 0 24 24"> <path d="M22,21H2V3H4V19H6V10H10V19H12V6H16V19H18V14H22V21Z" /> </svg></a>
              </td>
            </tr>
            <tr>
              <td>
                <span className="matches__time">12:00</span><span className="tag tag--icon"><svg width="6" height="6" viewBox="0 0 8 8"><circle fill="#efefef" cx="4" cy="4" r="4"/></svg>Canceled</span>
              </td>
              <td>
                <div className="score score--vertical">
                  <div className="score__team score__team--vertical">
                    <span>Everton</span><img alt="" src="https://ssl.gstatic.com/onebox/media/sports/logos/C3J47ea36cMBc4XPbp9aaA_48x48.png" />
                  </div>
                  <p className="score__result score__result--vertical score__result--not-started">
                    <span className="score__goals">-</span><span className="score__separator">:</span><span className="score__goals">-</span>
                  </p>
                  <div className="score__team score__team--vertical">
                    <img alt="" src="https://ssl.gstatic.com/onebox/media/sports/logos/0iShHhASp5q1SL4JhtwJiw_48x48.png" /><span>Liverpool</span>
                  </div>
                </div>
              </td>
              <td>
                <span className="tag tag--green rating rating--up">1.63</span>
              </td>
              <td>
                <span className="tag rating">2.13</span>
              </td>
              <td>
                <span className="tag tag--red rating rating--down">1.82</span>
              </td>
              <td>
                <a className="matches__stats btn btn--icon"><span className="sr-only">Stats</span><svg width="24" height="24" viewBox="0 0 24 24"> <path d="M22,21H2V3H4V19H6V10H10V19H12V6H16V19H18V14H22V21Z" /> </svg></a>
              </td>
            </tr>
            <tr>
              <td>
                <span className="matches__time"> -- : -- </span><span className="tag tag--icon"><svg width="6" height="6" viewBox="0 0 8 8"><circle fill="orange" cx="4" cy="4" r="4"/></svg>Completed</span>
              </td>
              <td>
                <div className="score score--vertical">
                  <div className="score__team score__team--vertical">
                    <span>Villareal</span><img alt="" src="https://ssl.gstatic.com/onebox/media/sports/logos/WKH7Ak5cYD6Qm1EEqXzmVw_48x48.png" />
                  </div>
                  <p className="score__result score__result--vertical score__result--not-started">
                    <span className="score__goals">-</span><span className="score__separator">:</span><span className="score__goals">-</span>
                  </p>
                  <div className="score__team score__team--vertical">
                    <img alt="" src="https://ssl.gstatic.com/onebox/media/sports/logos/RnYaRw_k05CV-qhVouSEMA_48x48.png" /><span>NK Maribor</span>
                  </div>
                </div>
              </td>
              <td>
                <span className="tag tag--green rating rating--up">1.63</span>
              </td>
              <td>
                <span className="tag rating">2.13</span>
              </td>
              <td>
                <span className="tag tag--red rating rating--down">1.82</span>
              </td>
              <td>
                <a className="matches__stats btn btn--icon"><span className="sr-only">Stats</span><svg width="24" height="24" viewBox="0 0 24 24"> <path d="M22,21H2V3H4V19H6V10H10V19H12V6H16V19H18V14H22V21Z" /> </svg></a>
              </td>
            </tr>
            <tr>
              <td>
                <span className="matches__time">12:20</span><span className="tag tag--icon"><svg width="6" height="6" viewBox="0 0 8 8"><circle fill="#613cea" cx="4" cy="4" r="4"/></svg>Today</span>
              </td>
              <td>
                <div className="score score--vertical">
                  <div className="score__team score__team--vertical">
                    <span>Girona FC</span><img alt="" src="https://ssl.gstatic.com/onebox/media/sports/logos/Tyy5rCdiLCw2_8z04DM-GQ_48x48.png" />
                  </div>
                  <p className="score__result score__result--vertical score__result--not-started">
                    <span className="score__goals">-</span><span className="score__separator">:</span><span className="score__goals">-</span>
                  </p>
                  <div className="score__team score__team--vertical">
                    <img alt="" src="https://ssl.gstatic.com/onebox/media/sports/logos/Th4fAVAZeCJWRcKoLW7koA_48x48.png" /><span>Real Madrid</span>
                  </div>
                </div>
              </td>
              <td>
                <span className="tag tag--green rating rating--up">1.63</span>
              </td>
              <td>
                <span className="tag rating">2.13</span>
              </td>
              <td>
                <span className="tag tag--red rating rating--down">1.82</span>
              </td>
              <td>
                <a className="matches__stats btn btn--icon"><span className="sr-only">Stats</span><svg width="24" height="24" viewBox="0 0 24 24"> <path d="M22,21H2V3H4V19H6V10H10V19H12V6H16V19H18V14H22V21Z" /> </svg></a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section></Fragment>
}
export default FeaturedMatches