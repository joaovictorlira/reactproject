// Components
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import UserForm from "./components/UserForm";
import { FiSend } from "react-icons/fi";
import ReviewForm from "./components/ReviewForm";
import Thanks from "./components/Thanks";

// hooks
import { useForm } from "./hooks/useForm";

import "./App.css";

function App() {
  const formComponents = [<UserForm />, <ReviewForm />, <Thanks />];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } =
    useForm(formComponents);

  return (
    <div className="app">
      <div className="header">
        <h2>Deixe sua avaliacao</h2>
        <p>
          Ficamos felizes com sua compra, utilize o formulário abaixo para
          avaliar o produto
        </p>
      </div>
      <div className="form-container">
        <p>Etapas</p>
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            {!isFirstStep && (
              <button type="button" onClick={() => changeStep(currentStep - 1)}>
              <GrFormPrevious />
              <span>Voltar</span>
            </button>
            )}
            {!isLastStep ? (
              <button type="submit">
                <span>Avancar</span>
                <GrFormNext />
              </button>
            ) : (
              <button type="button">
                <span>Enviar</span>
                <FiSend />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
