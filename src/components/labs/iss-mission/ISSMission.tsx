import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TypographyH2, TypographyH3 } from "@/components/ui/typography";
import React from "react";
import { useForm } from "react-hook-form";

// https://en.wikipedia.org/wiki/Specific_impulse
// https://en.wikipedia.org/wiki/Liquid_rocket_propellant
const G0 = 9.80665;
// https://spaceimpulse.com/2023/06/13/how-much-does-rocket-fuel-cost/#NASA_Space_Shuttle
// https://www.reddit.com/r/RealSolarSystem/comments/1c4gqbe/hydrolox_vs_kerolox/
// KSP w/Real Solar System mod

// https://www.spacex.com/vehicles/falcon-9/
const massOfRocket = 549054; // kg, payloads are between 4,000 and 22,800 kg
const massOfSaturnV = 2.966 * Math.pow(10, 6);
// escape velocity
const escapeVelocity = 11180; // m/s

const models = [
  {
    name: "Paper Rocket With Combustable Engine",
    ve: 400,
    m_rocket: 23, // g
    m_engine: 17,
    m_initial: 40,
    m_fuel: 5,
  },
  {
    name: "2-Liter Soda Bottle Rocket",
    ve: 400,
    m_rocket: null,
    m_engine: null,
    m_initial: null,
    m_fuel: null,
  },
];

const engines = [
  {
    name: "Space Shuttle Solid Rocket Booster",
    ve: 2500,
    href: "https://en.wikipedia.org/wiki/Space_Shuttle_Solid_Rocket_Booster#Propellant",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/SpaceShuttIeSRBs.png/450px-SpaceShuttIeSRBs.png",
  },
  {
    name: "Liquid oxygen-liquid hydrogen",
    ve: 4400,
    href: "https://ntrs.nasa.gov/api/citations/20160008869/downloads/20160008869.pdf",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/SpaceShuttIeSRBs.png/450px-SpaceShuttIeSRBs.png",
  },
  {
    name: "NSTAR electrostatic xenon ion thruster",
    ve: 30000,
    href: "",
  },
];

const EngineForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [deltaV, setDeltaV] = React.useState<null | number>(null); // State to store delta-v

  const onSubmit = (data) => {
    const selectedModel = models.find((e) => e.name === data.model);
    if (selectedModel === undefined) {
      setDeltaV(null);
      return;
    }
    const payloadMass = parseFloat(data.payloadMass);
    const fuelMass = parseFloat(data.fuelMass);
    const ve = selectedModel.ve;

    if (payloadMass > 0 && fuelMass > 0) {
      const m_i = payloadMass + fuelMass + massOfRocket;
      const m_f = payloadMass + massOfRocket;
      // Tsiolkovsky rocket equation: Δv = ve * ln(m_i / m_f)
      const deltaV = ve * Math.log(m_i / m_f);
      setDeltaV(deltaV);
    } else {
      setDeltaV(null);
      alert(
        "Please ensure Payload mass is greater than Fuel mass, and both are positive."
      );
    }
  };

  const selectedModel = watch("model");

  return (
    <div className="flex gap-4 mt-16">
      <form onSubmit={handleSubmit(onSubmit)}>
        <TypographyH3 classes={["mt-8", "mb-8"]}>Model Rocket</TypographyH3>
        {models.map((model, index) => (
          <div key={index}>
            <input
              type="radio"
              id={model.name}
              value={model.name}
              {...register("model", {
                required: true,
                disabled: true,
                value: "Paper Rocket With Combustable Engine",
              })}
            />
            <label htmlFor={model.name}>{model.name}</label>
          </div>
        ))}

        {errors.model && <p>Please select a model rocket type.</p>}

        <div>
          <label>Payload Mass (kg)</label>
          <Input
            type="number"
            {...register("payloadMass", { required: true, min: 1 })}
            placeholder="Payload Mass"
          />
          {errors.payloadMass && (
            <p>Payload mass is required and must be positive.</p>
          )}
        </div>

        <div>
          <label>Fuel Mass (kg)</label>
          <Input
            type="number"
            {...register("fuelMass", { required: true, min: 1 })}
            placeholder="Fuel Mass"
          />
          {errors.fuelMass && (
            <p>Fuel mass is required and must be positive.</p>
          )}
        </div>

        <Button type="submit">Calculate Delta-v</Button>
      </form>
      <div>
        {/* {selectedEngine && (
          <div>
            <TypographyH3>Selected Engine Details</TypographyH3>
            <img
              src={engines.find((e) => e.name === selectedEngine)?.img}
              alt={selectedEngine}
              className="max-h-48"
            />
            <p>
              <a href={engines.find((e) => e.name === selectedEngine)?.href}>
                More Info
              </a>
            </p>
          </div>
        )} */}

        {deltaV !== null && (
          <div>
            <h3>Calculated Delta-v: {deltaV.toFixed(2)} m/s</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default function ISSMission() {
  return <EngineForm />;
}
