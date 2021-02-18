// import Example from "./StateHook";
// import FrientSratus from "./EffectHook";
// import App from "./ContextHook";
import CallbackHook from "./CallbackHook";
// import Counter from "./ReducerHook";
// import ExampleTwo from "./EffectHookTwo";
// import ContextHookTwo from "./ContextHookTwo";
// import CounterTwo from "./ReducerHookTwo"
import UseRefExample from "./UseRefHook"
// import DefineHook from "./defineHook"
import StateHookThree from "./StateHookThree"
import ParentCompent from "./ParentMemo"

function Hook() {
  return (
    <div>
      {/* <Example></Example>
      <FrientSratus></FrientSratus>
      <App></App>
      <Counter></Counter>
      <ContextHookTwo></ContextHookTwo>
      <CounterTwo></CounterTwo> */}
      <UseRefExample></UseRefExample>
      {/* <DefineHook></DefineHook> */}
      <StateHookThree></StateHookThree>
      <ParentCompent></ParentCompent>
      {/* <ExampleTwo></ExampleTwo> */}
      <CallbackHook></CallbackHook>
    </div>
  )
}

export default Hook;