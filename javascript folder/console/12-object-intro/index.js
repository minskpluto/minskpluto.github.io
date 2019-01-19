var stu1 = ["Petra Kvitova", 28, "Tennis Player", "Czech Republic"]

var stu1 = {
    name: "Petra Kvitova",
    age: 28,
    nicknames: ["Petra Goatova","Petra Shitova"],
    job: "Tennis Player",
    country: "Czech Republic"
}

//access the value of the field

console.log(stu1[name]);
console.log(stu1.name);
stu1.name = "Petra Goatova"

console.log(stu1.name);

stu1.name = "Petra Shitova"

console.log(stu1.name);