import { Col, Slider, InputNumberProps, SliderSingleProps } from "antd";
import { useState } from 'react';
import { withTranslation } from "react-i18next";
import { PriceCalculatorPriceValue } from "./styles";

const formatter: NonNullable<SliderSingleProps['tooltip']>['formatter'] = (value) => `${value} ${value === 1 ? "settimana" : "settimane"}`;


const PriceCalculator = () => {
  const [inputValue, setInputValue] = useState(1);

  const onChange: InputNumberProps['onChange'] = (newValue) => {
    setInputValue(newValue as number);
  };

  return (
    <Col style={{alignItems: "center"}}>
      <Slider
        min={1}
        max={7}
        onChange={onChange}
        value={typeof inputValue === 'number' ? inputValue : 0}
        tooltip={{ formatter }}
      />
      <PriceCalculatorPriceValue>
        <h6 style={{textDecoration : inputValue > 3 ? "line-through" : "none", textAlign: "center"}}>{inputValue * 130 + " €"}</h6>
        {inputValue > 3 && <h6 style={{textAlign: "center"}}>{inputValue > 6 ?  inputValue * 110 : inputValue * 120 }{" €"}</h6>}
      </PriceCalculatorPriceValue>
    </Col>
  );
};

export default withTranslation()(PriceCalculator);
