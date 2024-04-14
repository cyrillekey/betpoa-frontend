"use client";
import { useAppStateStore } from "@/state/app.state";
import { useBettingStore } from "@/state/betting.state";
import { Fragment } from "react";
import { Formik, Form, Field } from "formik";
import { FormControl, FormErrorMessage, Input } from "@chakra-ui/react";
import * as Yup from "yup";
import { currencyFormat } from "@/utils";
export const SideBarBetSlip = () => {
  const { toggleBetSlip, betSlipColapsed } = useAppStateStore();
  const { odds, resetStore, removeOdd } = useBettingStore();
    const totalOdds = odds
        .reduce((total, current) => total * current?.odd, 1);
  return (
    <Fragment>
      <div
        className={`invoice`}
        style={{ display: betSlipColapsed ? "block" : "none" }}
      >
        <div className="invoice__wrapper">
          <h2 className="invoice__title">
            Invoice for payment
            <a
              className="close"
              onClick={toggleBetSlip}
              style={{ cursor: "pointer" }}
            >
              <span className="sr-only">Close</span>
              <svg
                style={{ width: "24px", height: "24px" }}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                />
              </svg>
            </a>
          </h2>
          <Formik
            initialValues={{ amount: 1 }}
            onSubmit={() => {}}
            validationSchema={Yup.object().shape({
              amount: Yup.number()
                .required("Enter Amount")
                .min(10, "Amount should be greate than one"),
            })}
          >
            {({ values, touched, errors }) => (
              <Form noValidate={true}>
                <article>
                  <section className="invoice__section invoice__type">
                    <label className="switch__label">
                      <input
                        className="switch__input sr-only"
                        name="simple"
                        type="checkbox"
                      />
                      <span className="switch__option">Simple</span>
                      <div className="switch"></div>
                      <span className="switch__option">Combo</span>
                    </label>
                  </section>
                  {odds?.map((a) => (
                    <section
                      className="invoice__section invoice__bet bet"
                      key={a?.fixtureId}
                    >
                      <p className="bet__match">
                        <span className="bet__team">{a?.homeTeam}</span>
                        <span className="bet__team__separator">vs</span>
                        <span className="bet__team bet__team--loser">
                          {a?.awayTeam}
                        </span>
                        <button
                          className="btn btn--round"
                          onClick={() =>
                            removeOdd({
                              fixtureId: a?.fixtureId,
                              oddId: a?.oddId,
                            })
                          }
                        >
                          <span
                            className="sr-only"
                            onClick={() =>
                              removeOdd({
                                fixtureId: a?.fixtureId,
                                oddId: a?.oddId,
                              })
                            }
                          >
                            Delete
                          </span>
                          <svg
                            style={{ width: "24px", height: "24px" }}
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                            />
                          </svg>
                        </button>
                      </p>
                      <div className="bet__outcome">
                        <small className="bet__outcome__state">
                          {a?.market}
                        </small>
                        <p className="bet__outcome__rating">
                          <span>{a?.pick}</span>
                          <span className="tag rating rating--primary">
                            {a?.odd}
                          </span>
                        </p>
                      </div>
                    </section>
                  ))}
                  <section className="invoice__section invoice__payment payment">
                    <div className="invoice__payment__amount toggle-buttons">
                      <input
                        className="toggle toggle--button sr-only"
                        id="toggle-1"
                        name="amount"
                        type="radio"
                        value="1"
                      />
                      <label className="btn btn--toggle" htmlFor="toggle-1">
                        1$
                      </label>
                      <input
                        className="toggle toggle--button sr-only"
                        id="toggle-2"
                        name="amount"
                        type="radio"
                        value="2"
                      />
                      <label className="btn btn--toggle" htmlFor="toggle-2">
                        2$
                      </label>
                      <input
                        className="toggle toggle--button sr-only"
                        id="toggle-5"
                        name="amount"
                        type="radio"
                        value="5"
                      />
                      <label className="btn btn--toggle" htmlFor="toggle-5">
                        5$
                      </label>
                      <label className="sr-only">Any amount</label>
                      <FormControl
                        isRequired
                        isInvalid={touched?.amount && !!errors?.amount}
                      >
                        <Field
                          as={Input}
                          placeholder="20$"
                          type="number"
                          name="amount"
                        />
                        <FormErrorMessage>{errors?.amount}</FormErrorMessage>
                      </FormControl>
                    </div>
                    <div className="invoice__payment__options">
                      <h4 className="invoice__payment__options__title">
                        More options
                        <button className="btn btn--round">
                          <span className="sr-only">More information</span>
                          <svg
                            style={{ width: "24px", height: "24px" }}
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M13.5,4A1.5,1.5 0 0,0 12,5.5A1.5,1.5 0 0,0 13.5,7A1.5,1.5 0 0,0 15,5.5A1.5,1.5 0 0,0 13.5,4M13.14,8.77C11.95,8.87 8.7,11.46 8.7,11.46C8.5,11.61 8.56,11.6 8.72,11.88C8.88,12.15 8.86,12.17 9.05,12.04C9.25,11.91 9.58,11.7 10.13,11.36C12.25,10 10.47,13.14 9.56,18.43C9.2,21.05 11.56,19.7 12.17,19.3C12.77,18.91 14.38,17.8 14.54,17.69C14.76,17.54 14.6,17.42 14.43,17.17C14.31,17 14.19,17.12 14.19,17.12C13.54,17.55 12.35,18.45 12.19,17.88C12,17.31 13.22,13.4 13.89,10.71C14,10.07 14.3,8.67 13.14,8.77Z"
                            />
                          </svg>
                        </button>
                      </h4>
                      <input
                        className="sr-only"
                        id="rules-agreement"
                        type="checkbox"
                      />
                      <label className="checkbox" htmlFor="rules-agreement">
                        Accept rules of the agreement
                      </label>
                      <input
                        className="sr-only"
                        id="odds-agreement"
                        type="checkbox"
                      />
                      <label className="checkbox" htmlFor="odds-agreement">
                        {" "}
                        Accept any odds changes
                      </label>
                    </div>
                    <div className="invoice__payment__recap">
                      <div className="invoice__payment__recap__rating">
                        <h4 className="invoice__payment__recap__title">
                          Total Rate
                        </h4>
                        <span className="tag rating rating--primary">
                          {totalOdds
                            .toFixed(2)}
                        </span>
                      </div>
                      <div className="invoice__payment__recap__winnings">
                        <h4 className="invoice__payment__recap__title">
                          Possible winnings
                        </h4>
                        <p className="invoice__payment__recap__winnings__amount">
                          {currencyFormat({amount:totalOdds * (isNaN(values?.amount) || values.amount < 1 ? 0 : values.amount),currency:'KES'}) }
                        </p>
                      </div>
                    </div>
                  </section>
                  <section className="invoice__section invoice__submit">
                    <button className="btn btn--primary" type="submit">
                      Place a bet
                    </button>
                  </section>
                </article>
              </Form>
            )}
          </Formik>
        </div>
        <div className="invoice__assistance">
          <button
            className="invoice__assistance__button btn btn--secondary btn--icon"
            type="button"
          >
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12,1C7,1 3,5 3,10V17A3,3 0 0,0 6,20H9V12H5V10A7,7 0 0,1 12,3A7,7 0 0,1 19,10V12H15V20H19V21H12V23H18A3,3 0 0,0 21,20V10C21,5 16.97,1 12,1Z"
              />
            </svg>
            Technical Support 24/7
          </button>
        </div>
      </div>
    </Fragment>
  );
};
