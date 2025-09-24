const PartTwo = ({ data, updateObjTemplate }) => {
  return (
    <>
      <div className="form-control">
        <label htmlFor="nome">
          <span>Qual seu nome?</span>
          <input
            type="text"
            id="nome"
            className="border border-white p-2 rounded "
            placeholder="Digite seu nome"
            value={data.name || ""}
            onChange={(e) =>  updateObjTemplate("name", e.target.value) }
            required
          />
        </label>
      </div>

      <div className="form-control">
        <label htmlFor="caracteristica">
          <span>O que você mais gosta no Matheus?</span>
          <input
            type="text"
            id="caracteristica"
            className="border border-white p-2 rounded "
            placeholder="Digite aqui"
            value={data.liked || ""}
            onChange={(e) =>  updateObjTemplate("liked", e.target.value) }
            required
          />
        </label>
      </div>
    </>
  );
};

export default PartTwo;
