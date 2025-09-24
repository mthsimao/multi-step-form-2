import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import "./App.css";
import { Hook } from "./hooks/hook";
import PartTwo from "./components/PartTwo";
import PartThree from "./components/PartThree";
import PartFour from "./components/PartFour";
import { useState } from "react";
import LastPart from "./components/LastPart";
import Thanks from "./components/Thanks";

const objTemplate = {
  name: "",
  liked: "",
  experience: "",
  comment: "",
};

function App() {
  const [data, setData] = useState(objTemplate);

  const updateObjTemplate = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const formComponents = [
    <PartTwo data={data} updateObjTemplate={updateObjTemplate} />,
    <PartThree data={data} updateObjTemplate={updateObjTemplate} />,
    <PartFour data={data} updateObjTemplate={updateObjTemplate} />,
    <LastPart data={data} />,
    <Thanks data={data} />,
  ];

  const { currentStep, currentComponent, changeStep, isFirstStep, isLastStep } =
    Hook(formComponents);

  return (
    <div className="min-h-screen place-items-center bg-zinc-900 p-4">
      <div className="bg-zinc-800 text-white px-6 py-10 rounded-xl mt-4 max-w-[700px] shadow-3xl ">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-2xl">Preencha o formulário por favor.</h1>
          <p>
            Apenas uma brincadeirinha que eu fiz só para colocar em <br />{" "}
            prática o que eu estudei 😀😁
          </p>
        </div>

        <div>
          <form
            onSubmit={(e) => changeStep(currentStep + 1, e)}
            className="flex flex-col gap-12"
          >
            <div className="inputs-container space-y-2.5 mt-4">
              {currentComponent}
            </div>

            <div className="flex flex-row gap-4 items-center justify-center">
              {!isFirstStep && (
                <button
                  type="button"
                  className="btn back bg-neutral-950"
                  onClick={() => changeStep(currentStep - 1)}
                >
                  {" "}
                  <ChevronLeft /> Voltar
                </button>
              )}
              {!isLastStep && (
                <button type="submit" className="btn next bg-neutral-950">
                  Avançar <ChevronRight />{" "}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
