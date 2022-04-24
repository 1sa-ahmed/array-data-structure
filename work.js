//Not done - 1
const students = [
  //[0]name, [1]roll, [2]age, [3]class, [4]gender, [5]location, [6]Admission fees
  ['Alec Parisian', '20', 50, 'class3', 'Male', 'Maryland', '200'],
  ['Dillon Jerde', '40', 10, 'class5', 'Female', 'Montana', '130'],
  ['Foster Harvey', '20', 23, 'class3', 'Male', 'Montana', '520'],
  ['Ima Smitham', '20', 15, 'class4', 'Female', 'Virginia', '900'],
  ['Nona Okuneva', '20', 18, 'class5', 'Male', 'Iowa', '1500'],
  ['Henriette Padberg', '20', 20, 'class3', 'Female', 'Montana', '700'],
  ['Sienna Hermann', '20', 12, 'class5', 'Male', 'Maine', '400'],
  ['Muhammad Von', '20', 17, 'class4', 'Female', 'Virginia', '300'],
  ['Trisha Kerluke', '20', 17, 'class5', 'Male', 'Texas', '500'],
  ['Amber Runte', '20', 21, 'class4', 'Male', 'Virginia', '500'],
  ['Jarret Lindgren', '20', 23, 'class5', 'Male', 'Maine', '500'],
  ['Richie Swift', '20', 70, 'class3', 'Other', 'Texas', '500'],
  ['Rosalyn Volkman', '20', 50, 'class4', 'Male', 'Virginia', '500'],
  ['Mae Lang', '20', 23, 'class5', 'Male', 'Maine', '500'],
  ['Maxine Nicolas', '20', 21, 'class4', 'Other', 'Texas', '500'],
  ['Damon Hodkiewicz', '20', 21, 'class3', 'Male', 'Maine', '500'],
  ['Rylan Streich', '20', 21, 'class5', 'Other', 'Virginia', '500'],
  ['Sunny McGlynn', '20', 21, 'class5', 'Male', 'Maine', '500'],
  ['Lilian Kessler', '20', 17, 'class4', 'Male', 'Virginia', '500'],
  ['Pedro Windler', '20', 80, 'class3', 'Female', 'Texas', '500'],
  ['Sigmund Corwin', '20', 40, 'class3', 'Other', 'Montana', '500'],
  ['Stefanie McGlynn', '20', 10, 'class3', 'Female', 'Maine', '500'],
  ['Loy Eichmann', '20', 10, 'class4', 'Other', 'Texas', '500'],
  ['Eulah Sipes', '20', 17, 'class5', 'Male', 'Montana', '500'],
  ['Rory Gottlieb', '20', 20, 'class4', 'Female', 'Montana', '500'],
  ['Orpha Fadel', '20', 20, 'class3', 'Male', 'Texas', '500'],
  ['Michel McClure', '20', 20, 'class4', 'Male', 'Montana', '500'],
  ['Kay Rau', '20', 10, 'class5', 'Other', 'Texas', '500'],
  ['Elian Franecki', '20', 20, 'class5', 'Female', 'Texas', '500'],
  ['Maya Corkery', '20', 20, 'class4', 'Male', 'Montana', '500'],
];

// - Total Admnission fees
let total = 0;
students.sort().forEach((data, i) => {
  console.log(
    `${i + 1}. The Student name ${data[0]} and admission fee is ${data[6]}`
  );
  total += +data[6];
});
console.log(`Total admission fees: ${total}`);
students.sort().forEach((data, i) => {
  // - Find All Female Students
  // if (data[4] === 'Male') {
  //   console.log(
  //     `${
  //       i + 1
  //     }. The student name is ${data[0].toLowerCase()} and gender is ${data[4].toLowerCase()}.`
  //   );
  // }
  // - Find class wise student result
  // if (data[3] === 'class3') {
  //   console.log(
  //     `${
  //       i + 1
  //     }. The student name is ${data[0].toLowerCase()} and study in ${data[3].toLowerCase()}.`
  //   );
  // }
  // - Location wise student result
  // switch (data[5]) {
  //   case 'Texas':
  //     console.log(
  //       `${i + 1}. The student name is ${data[0].toLowerCase()} and lives in ${
  //         data[5]
  //       }.`
  //     );
  //     break;
  //   case 'Montana':
  //     console.log(
  //       `${i + 1}. The student name is ${data[0].toLowerCase()} and lives in ${
  //         data[5]
  //       }.`
  //     );
  //     break;
  // }
  // if (data[5] === 'Maine' || data[5] == 'Virginia') {
  //   console.log(
  //     `${i + 1}. The student name is ${data[0].toLowerCase()} and lives in ${
  //       data[5]
  //     }`
  //   );
  // }
  // find student between 10 - 25 age
  // if (data[2] >= 10 && data[2] <= 25) {
  //   console.log(
  //     `${i + 1}. The student name is ${data[0].toLowerCase()} and age is ${
  //       data[2]
  //     }`
  //   );
  // }
});
