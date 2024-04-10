const FeaturedMatch = () => {
    return <section className="featured-live">
    <h2 className="sr-only">
      Featured live match
    </h2>
    <div className="card">
      <div className="card__body">
        <div className="featured-live__title">
          <div className="featured-live__stage">
            <h3>
              UEFA Champions League
            </h3>
            <small>Groupe stage - Matchday 2 of 6</small>
          </div>
          <span className="tag tag--red tag--icon"><svg width="24" height="24" viewBox="0 0 24 24"> <path d="M17,10.5V7A1,1 0 0,0 16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5Z" /> </svg>Live</span>
        </div>
        <div className="featured-live__score score">
          <p className="score__team score__team--home">
            <img src="https://ssl.gstatic.com/onebox/media/sports/logos/paYnEE8hcrP96neHRNofhQ_96x96.png" /><span>Barcelona</span>
          </p>
          <div className="score__info">
            <p className="score__result">
              <span className="score__winner">2</span><span className="score__separator">:</span><span className="score__loser">0</span>
            </p>
            <p className="score__time">
              36
            </p>
          </div>
          <p className="score__team score__team--away">
            <img src="https://ssl.gstatic.com/onebox/media/sports/logos/fhBITrIlbQxhVB6IjxUO6Q_96x96.png" /><span>Chelsea</span>
          </p>
        </div>
        <div className="featured-live__actions">
          <button className="btn btn--icon"><span className="sr-only">Fave</span><svg width="24" height="24" viewBox="0 0 24 24"> <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /> </svg></button><button  className="btn btn--primary">Bet</button><a className="btn" href="#">Watch</a>
        </div>
      </div>
      <div className="card__footer card__footer--link">
        <a href="#">Match details</a>
      </div>
    </div>
  </section>
}
export default FeaturedMatch