const PartThree = ({data, updateObjTemplate}) => {
  return (
    <>
      <div className="form-control">
        <label htmlFor="experience">
          <span>Conte uma experiência</span>
          <textarea
            id="experience"
            placeholder="Algum momento inesquecível que viveram juntos"
            rows={4}
            value={data.experience || ""}
            onChange={(e) => updateObjTemplate("experience", e.target.value)}
            required
          ></textarea>
        </label>
      </div>
    </>
  );
};

export default PartThree;
