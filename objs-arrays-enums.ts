// const persona: {
//   name: string;
//   age: number;
// } = {
// const persona: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // Tuples type
// } = {
//   name: "Malek",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}
const persona = {
  name: "Malek",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

// persona.role.push("admin"); // This is allowed !!! And you should be aware of it !!
// persona.role[1] = 3;
// persona.role = [0, "teacher", "professor"];    // This is not allowed!!!
let favoriteActivities: string[];
favoriteActivities = ["Swim"];
console.log(persona.name);

for (const hobby of persona.hobbies) {
  console.log(hobby);
}

if (persona.role === Role.AUTHOR) {
  console.log("is author");
}
