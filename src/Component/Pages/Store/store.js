import Seach from "../../Layout/Component/Search/search";
import "./Store.scss";
function Store() {
  return (
    <div className="store">
      <div className="store__des">
        <div className="des__search">
          <Seach></Seach>
        </div>
        <div className="des__review">
          <div className="review__img">
            <img
              className="img"
              src="https://file.hstatic.net/200000426225/file/20.3_297b0d135203412180888a80cebd634f_grande.png"
              alt="reviewImg"
            />
          </div>
        </div>
      </div>
      <div className="store__product"></div>
    </div>
  );
}

export default Store;
