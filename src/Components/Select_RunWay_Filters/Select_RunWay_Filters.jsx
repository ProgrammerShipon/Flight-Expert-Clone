import { useState } from "react";
import BookingClass from "../BookingClass/BookingClass";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import DepartureReturn from "../DepartureReturn/DepartureReturn";
import Distance from "../Distance/Distance";
import InputRadio from "../Inputs/InputRadio";
import InputRadioThik from "../Inputs/InputRadioThik";
import PageSection from "../PageSection";

const Select_RunWay_Filters = () => {
  const [tabs, setTabs] = useState("oneWayFilter");
  const [fareType, setFareType] = useState("fareTypeRegular");

  console.log("radioValue ", tabs);

  return (
    <PageSection>
      <div className="rounded-primary shadow-secondary p-4 pb-6 relative">
        {/* Tabs */}
        <div className="flex items-center justify-start gap-3 mb-4">
          <InputRadio
            labelText="One Way"
            name="flightRadioFilter"
            id="oneWayFilter"
            setHandle={setTabs}
            radioValue={tabs}
          />
          <InputRadio
            labelText="Round trip"
            name="flightRadioFilter"
            id="roundTripFilter"
            radioValue={tabs}
            setHandle={setTabs}
          />
          <InputRadio
            labelText="Multi City"
            name="flightRadioFilter"
            id="multiCityFilter"
            radioValue={tabs}
            setHandle={setTabs}
          />
        </div>

        {/* From distance and date & Class */}
        <div className="grid grid-cols-12 gap-3">
          {/* Distance */}
          <div className="col-span-5">
            <Distance />
          </div>

          {/* Time Range */}
          <div className="col-span-4">
            <div>
              <DepartureReturn />
            </div>
          </div>
          <div className="col-span-3">
            <BookingClass />
          </div>
        </div>

        {/* fare type */}
        <div className="flex items-center justify-start gap-3 mt-3">
          <span>Fare Type: </span>
          <div className="flex items-center justify-start gap-3">
            <InputRadioThik
              labelText="Regular Fares"
              name="fareTypeRadioFilter"
              id="fareTypeRegular"
              setHandle={setFareType}
              radioValue={fareType}
            />
            <div className="relative">
              <div className="relative peer">
                <InputRadioThik
                  labelText="Seaman Fares"
                  name="fareTypeRadioFilter"
                  id="fareTypeSeaman"
                  setHandle={setFareType}
                  radioValue={fareType}
                />
              </div>

              <div className="peer-hover:block hidden absolute top-[102%] left-1/2 -translate-x-1/2 max-w-[600px] w-[200%] bg-white p-3 shadow-md">
                <h4 className="text-lg font-semibold mb-3">Seaman Fares</h4>
                <p className="text-sm">
                  Individuals employed aboard vessels such as tankers, cruise
                  ships and in onshore or offshore oil or energy production
                  zones fall under the category of seafarers. These can include
                  administrators, engineers, captains, technicians, workers, or
                  support staff certified by authorized organizations as
                  licensed personnel. It is crucial for them to carry a valid
                  identification and letters, as failure to do so could result
                  in denial of boarding.
                </p>
              </div>
            </div>
          </div>
        </div>

        <ButtonPrimary style="absolute -button-[calc(1.8rem-50%)] -translate-y-[calc(1.8rem-50%)] left-1/2 -translate-x-1/2">
          <span className="font-bold"> Modify Search </span>
        </ButtonPrimary>
      </div>
    </PageSection>
  );
};

export default Select_RunWay_Filters;
