// import Counter from "./component/class";
// import BasicFunction from "./component/function";

// export default function Index() {
//   return(
//   <BasicFunction name="Pakpoom"/>);
// }
// export default function Index() {
//   return(
//   <Counter />)
// }
// import UserInfo from "./component/props";

// export default function Index() {
//   return (
//     <UserInfo
//       name="Pakpoom"
//       age={21}
//       hobbies={["Reading", "Coding"]}
//       address={{ city: "Bangkok", country: "Thailand" }}
//     />
//   );
// }

// import Workshop2_1 from "./workshop/workshop2.1";

// export default function Index() {
//   return <Workshop2_1 num1={10} num2={0} operator="/" />;
// }

import Workshop2_2 from "./workshop/workshop2.2";

export default function Index() {
  const items = [
    { fruit: "Apple", quantity: 3 },
    { fruit: "Banana", quantity: 2 },
    { fruit: "Cherry", quantity: 5 },
  ];

  return <Workshop2_2 items={items} />;};