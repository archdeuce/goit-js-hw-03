const user = {
  age: 20,
  hobby: "html",
  name: "Mango",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

const keys = Object.keys(user);

for (let key of keys) {
  console.log(`${key}:${user[key]}\n`);
}
