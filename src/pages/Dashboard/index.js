import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ParcialNumbers from "../../components/ParcialNumbers";
import TotalsCard from "../../components/TotalsCard";
import {
  getTotalCasesRequest,
  getCountriesRequest
} from "../../store/modules/cases/actions";

import { Container, ChartContainer, InfectedCases, Scroll } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import LoadingProgress from "../../components/LoadingProgress";
import { numberWithDots } from "../../utils/datatransformers";

export default function Dashboard() {
  const dispatch = useDispatch();
  // Estado do redux
  const totalNumbers = useSelector(state => state.cases.totalNumbers);
  const loadingNumbers = useSelector(state => state.cases.loadingNumbers);
  const loadingCountries = useSelector(state => state.cases.loadingCountries);
  const countriesNumbers = useSelector(state => state.cases.countriesNumbers);
  // Estado local
  const [confirmed, setConfirmed] = useState(0);
  const [recovered, setRecovered] = useState(0);
  const [deaths, setDeaths] = useState(0);
  const [countrySelected, setCountry] = useState("all");

  useEffect(() => {
    dispatch(getTotalCasesRequest());
    dispatch(getCountriesRequest());
  }, [dispatch]);

  useEffect(() => {
    setConfirmed(
      totalNumbers.confirmed ? numberWithDots(totalNumbers.confirmed.value) : 0
    );
    setRecovered(
      totalNumbers.recovered ? numberWithDots(totalNumbers.recovered.value) : 0
    );
    setDeaths(
      totalNumbers.deaths ? numberWithDots(totalNumbers.deaths.value) : 0
    );
  }, [totalNumbers]);

  function onClickCard(country) {
    if (country === "all") {
      setCountry(country);
      setConfirmed(numberWithDots(totalNumbers.confirmed.value));
      setRecovered(numberWithDots(totalNumbers.recovered.value));
      setDeaths(numberWithDots(totalNumbers.deaths.value));
    } else {
      setCountry(country.name);
      setConfirmed(numberWithDots(country.confirmed));
      setRecovered(numberWithDots(country.recovered));
      setDeaths(numberWithDots(country.deaths));
    }
  }

  return (
    <Container>
      <Grid container>
        <Grid item xs={3}>
          {loadingCountries ? (
            <LoadingProgress />
          ) : (
            <InfectedCases>
              <strong>Número de casos confirmados</strong>
              <li>
                <ParcialNumbers
                  country={"Total"}
                  numbers={
                    totalNumbers.confirmed
                      ? numberWithDots(totalNumbers.confirmed.value)
                      : 0
                  }
                  selected={countrySelected === "all"}
                  onClick={() => onClickCard("all")}
                />
              </li>

              <Scroll>
                <ul>
                  {countriesNumbers.map(country => {
                    return (
                      <li key={country.iso}>
                        <ParcialNumbers
                          onClick={() => onClickCard(country)}
                          selected={countrySelected === country.name}
                          country={country.name}
                          numbers={numberWithDots(country.confirmed)}
                        />
                      </li>
                    );
                  })}
                </ul>
              </Scroll>
            </InfectedCases>
          )}
        </Grid>
        <Grid item xs={9}>
          {loadingNumbers ? (
            <LoadingProgress />
          ) : (
            <Grid
              container
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gridGap: 15
              }}
            >
              <TotalsCard title={"Total confirmado"} numbers={confirmed} />
              <TotalsCard title={"Total de mortes"} numbers={deaths} />
              <TotalsCard title={"Total recuperados"} numbers={recovered} />
            </Grid>
          )}
          <ChartContainer container sytle={{ paddinBottom: 15 }}>
            {loadingNumbers ? <LoadingProgress /> : <p>Em construção...</p>}
          </ChartContainer>
        </Grid>
      </Grid>
    </Container>
  );
}
