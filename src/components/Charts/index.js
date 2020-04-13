import "react-dates/initialize";
import React, { Component } from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, Legend } from "recharts";
import api from "../../services/pythonApi";
import { numberWithDots } from "../../utils/datatransformers";
import moment from "moment";
import "react-dates/lib/css/_datepicker.css";
import "./react_dates_overrides.css";
import { DateRangePicker } from "react-dates";

import { MyTooltip, ChartContainer, ClearButton } from "./styles";

export default class Charts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      startDate: null,
      endDate: null,
      focusedInput: null,
    };
  }

  handleDatesChange = ({ startDate, endDate }) => {
    this.setState({ startDate, endDate });
  };

  handleFocusChange = (focusedInput) => {
    this.setState({ focusedInput });
  };

  handleClean = () => {
    this.setState({ startDate: null, endDate: null });
  };

  renderColorfulLegendText(value, entry) {
    const { color } = entry;

    return <span style={{ color, fontSize: 18 }}>{value}</span>;
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.country !== this.props.country ||
      prevState.startDate !== this.state.startDate ||
      prevState.endDate !== this.state.endDate
    ) {
      this.getData();
    }
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const start = this.state.startDate
      ? this.state.startDate.format("MM/DD/YYYY").replace(/[/]/g, "-")
      : null;
    const end = this.state.endDate
      ? this.state.endDate.format("MM/DD/YYYY").replace(/[/]/g, "-")
      : null;
    const response = await api.post("/total-daily", {
      start: start ? start : "01-22-2020",
      end: end
        ? end
        : moment(new Date()).format("MM/DD/YYYY").replace(/[/]/g, "-"),
      country: this.props.country === "all" ? "World" : this.props.country,
    });
    this.setState({ data: response.data });
  }

  render() {
    function CustomTooltip({ payload, label, active }) {
      if (active) {
        return (
          <MyTooltip>
            <p>{`Dia: ${label ? label.split("-")[1] : null}-${
              label ? label.split("-")[0] : null
            }-${label ? label.split("-")[2] : null}`}</p>
            <span>{`Confirmados: ${numberWithDots(
              payload ? payload[0].payload.confirmed : ""
            )}`}</span>
            <span>{`Recuperados: ${numberWithDots(
              payload ? payload[0].payload.recovered : ""
            )}`}</span>
            <span>{`Mortes: ${numberWithDots(
              payload ? payload[0].payload.deaths : ""
            )}`}</span>
          </MyTooltip>
        );
      }
      return null;
    }

    return (
      <ChartContainer>
        <div
          style={{
            alignSelf: "flex-start",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <DateRangePicker
            startDatePlaceholderText="Inicio"
            endDatePlaceholderText="Fim"
            isOutsideRange={(day) =>
              !moment(day).isBetween("2020-01-22", moment(new Date()))
            }
            dateFormat="DD/MM/YYYY"
            startDate={this.state.startDate} // momentPropTypes.momentObj or null,
            startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
            endDate={this.state.endDate} // momentPropTypes.momentObj or null,
            endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
            onDatesChange={this.handleDatesChange} // PropTypes.func.isRequired,
            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={this.handleFocusChange} // PropTypes.func.isRequired,
          />
          <ClearButton type="button" onClick={this.handleClean}>
            Limpar
          </ClearButton>
        </div>

        <AreaChart width={900} height={500} data={this.state.data}>
          <Area
            type="monotone"
            dataKey="confirmed"
            stroke="#0e1232"
            fill="#0e1232"
            name="Confirmados"
            dot={false}
          />
          <Area
            type="monotone"
            dataKey="deaths"
            name="Mortes"
            stroke="#73070c"
            fill="#73070c"
            dot={false}
          />
          <Legend iconSize={20} formatter={this.renderColorfulLegendText} />
          <XAxis dataKey="data" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip content={<CustomTooltip />} />
        </AreaChart>
      </ChartContainer>
    );
  }
}
