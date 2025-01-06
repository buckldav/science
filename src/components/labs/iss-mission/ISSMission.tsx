import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TypographyH2, TypographyH3 } from "@/components/ui/typography";
import React from "react";
import { useForm } from "react-hook-form";

// http://waterocket.explorer.free.fr/pdf/holland2005LU3.PDF
// P = Po + 1/2 rho v^2
// solve for v
// pressure in bars (metric) or PSI (imperial)
const ve = (p_bottle: number, imperial?: boolean) => {
  const PSI_TO_BAR = 14.50377;
  const BAR_TO_PA = 100000;
  const p_atm = 1.01325;
  if (!!imperial) {
    p_bottle /= PSI_TO_BAR;
  }
  const rho_water = 1000; // kg/m3
  const delta_p = Math.abs(p_bottle * BAR_TO_PA - p_atm * BAR_TO_PA);
  console.log("delta_p", delta_p);
  return Math.sqrt((2 * delta_p) / rho_water);
};

const deltaV = (
  volume_mL: number,
  massRocket_g: number,
  p_bottle: number,
  imperial?: boolean
) => {
  const rho_water = 1; // g / mL
  const massFuel_g = rho_water * volume_mL;
  const massInitial_g = massRocket_g + massFuel_g;
  const exhaustV = ve(p_bottle, imperial);
  console.log("exhaust", exhaustV);
  return exhaustV * Math.log(massInitial_g / massRocket_g);
};

const EngineForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fuelVolume: 0,
      massRocket: 0,
      pressureBottle: 0,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    console.log(errors);
    console.log(
      deltaV(
        parseFloat(data.fuelVolume),
        parseFloat(data.massRocket),
        parseFloat(data.pressureBottle),
        true
      )
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input type="number" {...register("fuelVolume")} />
        <Input type="number" {...register("massRocket")} />
        <Input type="number" {...register("pressureBottle")} />
        <Button type="submit">Calculate</Button>
      </form>
    </div>
  );
};

export default function ISSMission() {
  return <EngineForm />;
}
