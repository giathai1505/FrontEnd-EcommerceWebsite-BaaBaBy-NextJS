import { renderPrice } from "@common/functions";
import { setMax, setMin } from "@redux/slides/searchProduct";
import * as React from "react";
import { Range, getTrackBackground } from "react-range";
import { useDispatch } from "react-redux";

interface IRangePriceProps {
  min: number;
  max: number;
  step: number;
}

const RangePrice: React.FC<IRangePriceProps> = ({ min, max, step }) => {
  const [values, setValues] = React.useState([min, max]);
  const dispatch = useDispatch();

  const handleFinalChange = (values: number[]) => {
    dispatch(setMin(values[0]));
    dispatch(setMax(values[1]));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <Range
        values={values}
        step={step}
        min={min}
        max={max}
        rtl={false}
        onChange={values => setValues(values)}
        onFinalChange={handleFinalChange}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "36px",
              display: "flex",
              width: "100%",
              margin: "0 11px",
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: "2px",
                width: "100%",
                borderRadius: "4px",
                background: getTrackBackground({
                  values,
                  colors: ["#d1d1d1", "#1b1b1a", "#d1d1d1"],
                  min: min,
                  max: max,
                }),
                alignSelf: "center",
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ index, props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "20px",
              width: "20px",
              borderRadius: "9999px",
              backgroundColor: "#FFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #000",
              outline: "none",
            }}
          ></div>
        )}
      />
      <div className="w-full flex justify-between">
        <span>{renderPrice(values[0])}</span>
        <span>{renderPrice(values[1])}</span>
      </div>
    </div>
  );
};

export default RangePrice;
