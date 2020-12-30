import Example from "./StateHook";
import FrientSratus from "./EffectHook";
import App from "./ContextHook";
import CallbackHook from "./CallbackHook";
import Counter from "./ReducerHook";

function Hook() {
  return (
    <div>
      <Example></Example>
      <FrientSratus></FrientSratus>
      <App></App>
      <CallbackHook></CallbackHook>
      <Counter></Counter>
    </div>
  )
}

export default Hook;