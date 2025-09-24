const PartFour = ({ data, updateObjTemplate }) => {

  return (
    <>
      <div>
        <h2 className="text-xl my-4">Gostaria de adicionar mais alguma coisa?</h2>

        <div className="form-control">
          <label htmlFor="comment">
            <span>Comentário adicional: </span>
            <textarea
              id="comment"
              rows={4}
              placeholder="Digite aqui"
              value={data.comment}
              onChange={(e) => updateObjTemplate('comment', e.target.value) }
            ></textarea>
          </label>
        </div>
      </div>
    </>
  );
};

export default PartFour;
