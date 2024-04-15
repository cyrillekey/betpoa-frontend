"use client";
import { useGetFixturesQuery } from "@/hooks";
import { Image } from "@chakra-ui/next-js";
import { Fragment, useEffect, useRef } from "react";
import dayjs from "dayjs";
import calendar from "dayjs/plugin/calendar";
import { useBettingStore } from "@/state/betting.state";
import { v4, v5 } from "uuid";

dayjs.extend(calendar);
const BetLine = ({ a }: { a: any }) => {
  const { addOdd, odds } = useBettingStore();
  const homeOdd = a?.odds?.find((a: any) => (a?.name).toLowerCase() == "home");
  const drawOdd = a?.odds?.find((a: any) => (a?.name).toLowerCase() == "draw");
  const awayOdd = a?.odds?.find((a: any) => (a?.name).toLowerCase() == "away");
  return (
    <tr key={a?.id}>
      <td>
        <span className="matches__time matches__time--live">
          {dayjs().isAfter(dayjs(a?.date)) &&
          dayjs().isBefore(dayjs(a?.date).add(90, "minutes"))
            ? "LIVE"
            : dayjs(a?.date).format("HH:mm")}
        </span>
        {dayjs().isAfter(dayjs(a?.date)) &&
        dayjs().isBefore(dayjs(a?.date).add(90, "minutes")) ? (
          <span className="tag tag--red tag--icon">
            <svg width="6" height="6" viewBox="0 0 8 8">
              <circle fill="currentColor" cx="4" cy="4" r="4" />
            </svg>
            Live
          </span>
        ) : (
          <span className="tag tag--icon">
            <svg width="6" height="6" viewBox="0 0 8 8">
              <circle fill="#613cea" cx="4" cy="4" r="4" />
            </svg>
            {dayjs(a?.date).isSame(dayjs(), "day")
              ? "Today"
              : dayjs(a?.date).calendar(null, {
                  sameDay: "[Today]",
                  nextDay: "dddd",
                  nextWeek: "dddd",
                  sameElse: "dddd",
                })}
          </span>
        )}
      </td>
      <td>
        <div className="score score--vertical">
          <div className="score__team score__team--vertical">
            <span>{a?.homeTeam?.name}</span>
            <Image
              alt=""
              src={{
                width: 100,
                height: 100,
                src: a?.homeTeam?.logo,
              }}
            />
          </div>
          <p className="score__result score__result--vertical score__result--not-started">
            <span className="score__goals">              
              {a?.result?.htHomeGoals !=null && a?.result?.homeGoals == null ? a?.result?.htHomeGoals : a?.result?.homeGoals != null  ? a?.result?.homeGoals  : "-"}
            </span>
            <span className="score__separator">:</span>
            <span className="score__goals">
            {a?.result?.htAwayGoals != null && a?.result?.awayGoals == null ? a?.result?.htAwayGoals : a?.result?.awayGoals != null ? a?.result?.awayGoals  : "-"}
            </span>
          </p>
          <div className="score__team score__team--vertical">
            <Image
              alt=""
              src={{
                width: 48,
                height: 48,
                src: a?.awayTeam?.logo,
              }}
            />
            <span>{a?.awayTeam?.name}</span>
          </div>
        </div>
      </td>
      <td>
        <span
          className={`tag ${
            odds?.findIndex((b) => b?.oddId == homeOdd?.id) > -1 && "tag--green"
          } rating`}
          onClick={() =>
            addOdd({
              fixtureId: a?.id,
              oddId: homeOdd?.id,
              homeTeam: a?.homeTeam?.name,              
              awayTeam: a?.awayTeam?.name,
              market: 'WINNER',
              odd: homeOdd?.odd,
              pick: a?.homeTeam?.name
            })
          }
        >
          {Number(homeOdd?.odd).toFixed(2)}
        </span>
      </td>
      <td>
        <span
          className={`tag ${
            odds?.findIndex((b) => b?.oddId == drawOdd?.id) > -1 && "tag--green"
          } rating`}
          onClick={() =>
            addOdd({
              fixtureId: a?.id,
              oddId: drawOdd?.id,
              homeTeam: a?.homeTeam?.name,
              awayTeam: a?.awayTeam?.name,
              market: 'WINNER',
              odd: drawOdd?.odd,
              pick: 'DRAW',
            })
          }
        >
          {Number(drawOdd?.odd).toFixed(2)}
        </span>
      </td>
      <td>
        <span
          className={`tag ${
            odds?.findIndex((b) => b?.oddId == awayOdd?.id) > -1 && "tag--green"
          } rating`}
          onClick={() =>
            addOdd({
              fixtureId: a?.id,
              oddId: awayOdd?.id,
              homeTeam: a?.homeTeam?.name,
              awayTeam: a?.awayTeam?.name,
              market: 'WINNER',
              odd: awayOdd?.odd,
              pick: a?.awayTeam?.name,
            })
          }
        >
          {Number(awayOdd?.odd).toFixed(2)}
        </span>
      </td>
      <td>
        <a className="matches__stats btn btn--icon">
          <span className="sr-only">Stats</span>
          <svg width="24" height="24" viewBox="0 0 24 24">
            {" "}
            <path d="M22,21H2V3H4V19H6V10H10V19H12V6H16V19H18V14H22V21Z" />{" "}
          </svg>
        </a>
      </td>
    </tr>
  );
};
const BetLineLoading = () => {
  return (
    <tr className="shimmer-effect">
      <td>
        <span className="matches__time matches__time--live">--:--</span>

        <span className="tag tag--icon">
          <svg width="6" height="6" viewBox="0 0 8 8">
            <circle fill="#613cea" cx="4" cy="4" r="4" />
          </svg>
          --
        </span>
      </td>
      <td>
        <div className="score score--vertical">
          <div className="score__team score__team--vertical">
            <span>Home</span>
            <Image
              alt=""
              src={{
                width: 100,
                height: 100,
                src: "https://placehold.co/600x400.png",
              }}
            />
          </div>
          <p className="score__result score__result--vertical score__result--not-started">
            <span className="score__goals">-</span>
            <span className="score__separator">:</span>
            <span className="score__goals">-</span>
          </p>
          <div className="score__team score__team--vertical">
            <Image
              alt=""
              src={{
                width: 48,
                height: 48,
                src: "https://placehold.co/600x400.png",
              }}
            />
            <span>Away</span>
          </div>
        </div>
      </td>
      <td>
        <span className={`tag rating`}>-</span>
      </td>
      <td>
        <span className={`tag rating`}>-</span>
      </td>
      <td>
        <span className={`tag rating`}>-</span>
      </td>
      <td>
        <a className="matches__stats btn btn--icon">
          <span className="sr-only">Stats</span>
          <svg width="24" height="24" viewBox="0 0 24 24">
            {" "}
            <path d="M22,21H2V3H4V19H6V10H10V19H12V6H16V19H18V14H22V21Z" />{" "}
          </svg>
        </a>
      </td>
    </tr>
  );
};
const FeaturedMatches = () => {
  const {
    data: fixturesResponse,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
  } = useGetFixturesQuery({
    pageSize: 10,
  });
  const observerTarget = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      { threshold: 1 }
    );
    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }
    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [observerTarget]);

  const fixtures = fixturesResponse?.pages.flat() ?? [];
  return (
    <Fragment>
      <section className="matches">
        <h2>
          Matches
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
            <a className="matches__agenda btn--icon">
              <span className="sr-only">Agenda</span>
              <svg
                style={{ width: "24px", height: "24px" }}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1"
                />
              </svg>
            </a>
          </div>
          <div className="card__body matches__data">
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Match</th>
                  <th>1x</th>
                  <th>X</th>
                  <th>2x</th>
                  <th>
                    <span className="sr-only">Stats</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {isLoading
                  ? new Array(14)
                      .fill("")
                      .map((a) => <BetLineLoading key={v4()} />)
                  : fixtures.map((a: any) => <BetLine a={a} key={v4()} />)}
                {isLoading ? (
                  <Fragment></Fragment>
                ) : isFetchingNextPage ? (
                  new Array(2)
                    .fill("")
                    .map((a) => <BetLineLoading key={v4()} />)
                ) : (
                  <tr ref={observerTarget}>
                    <td colSpan={6} style={{ textAlign: "center" }} onClick={()=>fetchNextPage()}>
                      Fetch More
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default FeaturedMatches;
