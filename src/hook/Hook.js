import Example from "./StateHook";
import FrientSratus from "./EffectHook";
import App from "./ContextHook";
import CallbackHook from "./CallbackHook";
import Counter from "./ReducerHook";
import ExampleTwo from "./EffectHookTwo";
import ContextHookTwo from "./ContextHookTwo";
import CounterTwo from "./ReducerHookTwo"
import UseRefExample from "./UseRefHook"

function Hook() {
  return (
    <div>
      <Example></Example>
      <FrientSratus></FrientSratus>
      <App></App>
      <CallbackHook></CallbackHook>
      <Counter></Counter>
      <ExampleTwo></ExampleTwo>
      <ContextHookTwo></ContextHookTwo>
      <CounterTwo></CounterTwo>
      <UseRefExample></UseRefExample>
    </div>
  )
}

export default Hook;