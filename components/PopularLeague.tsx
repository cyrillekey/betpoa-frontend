"use client";
import { useGetLeaguesQuery } from "@/hooks";
import Image from "next/image";
import { Fragment } from "react";
import { v4 } from "uuid";
const FixtureLoading = () => (
  <div className="card__item league shimmer-effect" key={v4()}>
    <Image
      alt="https://placehold.co/600x400/png"
      className="league__logo"
      src={{ width: 50, height: 50, src:"https://placehold.co/600x400/png" }}
    />
    <div className="league__title">
      <h3>-</h3>
      <small>-</small>
    </div>
    <span className="league__number">-</span>
  </div>
);
const PopularLeagues = () => {
  const { data: leaguesResponse, isLoading } = useGetLeaguesQuery({
    pageSize: 6,
    country: "England",
  });
  const leagues = leaguesResponse ?? [];

  return (
    <Fragment>
      <section className="leagues">
        <h2>
          Football leagues
          <button
            className="btn btn--no-bg btn--icon btn--round-lg"
            type="button"
          >
            <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"
              />
            </svg>
          </button>
        </h2>
        <div className="card">
          {isLoading == true
            ? new Array(6).fill("").map((a) => <FixtureLoading key={v4()} />)
            : leagues.map((a: any) => (
                <div className="card__item league" key={a?.id}>
                  <Image
                    alt=""
                    className="league__logo"
                    src={{ width: 50, height: 50, src: a?.logo }}
                  />
                  <div className="league__title">
                    <h3>{a?.name}</h3>
                    <small>{a?.country}</small>
                  </div>
                  <span className="league__number">{a?.matches ?? 0}</span>
                </div>
              ))}
        </div>
      </section>
    </Fragment>
  );
};
export default PopularLeagues;
