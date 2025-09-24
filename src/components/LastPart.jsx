const LastPart = ({ data }) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl">Verifique as informações: </h2>

        <ul className="space-y-2">
          <li>
            <span className="font-bold">Seu nome:</span> {data.name}
          </li>
          <li>
            <span className="font-bold">Algo que gosta no Matheus: </span>
            {data.liked}
          </li>
          <li>
            <span className="font-bold">Um momento inesquecível:</span>{" "}
            {data.experience}
          </li>
          {data.comment && (
            <li>
              <span className="font-bold">Comentário adicional:</span>{" "}
              {data.comment}
            </li>
          )}
        </ul>

        <div className="flex flex-col gap-2 mt-4 shadow-3xl px-6 py-4 rounded-xl">
          <h2 className="text-xl text-center">Informações corretas?</h2>
          <p>
            Se sim, por favor clique "Avançar" logo abaixo. Caso contrário, volte
            e corriga as informações.
          </p>
        </div>
      </div>
    </>
  );
};

export default LastPart;
