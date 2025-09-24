import heart from "../assets/fazendo-coracao.png";

const Thanks = ({ data }) => {
  return (
    <>
      <div>
        {data.name == "Méllany" ||
        data.name == "méllany" ||
        data.name == "Mel" ||
        data.name == "mel" ? (
          <div className="flex flex-col gap-6 items-center mt-6">
            <h2 className="text-2xl text-center">love you {"<3"}</h2>
            <img
              src={heart}
              alt="homem fazendo um coração com a mão"
              className="h-100 rounded-2xl shadow-3xl shadow-red-600 border-2 border-black"
            />

            <p className="max-w-[420px] text-center">
              Espero que voce tenha dado um sorriso ao ver essa bela foto que eu
              acabei de tirar pra colocar aqui e ver voce sorrindo
            </p>

            <p>Obrigado, Melzinha ! ❤</p>
          </div>
        ) : (
          <div className="flex flex-col gap-6 items-center mt-6">
            <h2 className="text-2xl text-center">
              Obrigado por preencher o formulário, {data.name}.
            </h2>
          </div>
        )}
      </div>

      <div></div>
    </>
  );
};

export default Thanks;
