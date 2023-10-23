let person1 = {

  firstName: "Yadigar",

  lastName: "Yusifov",

  dateOfBirth: new Date(2002, 6, 14),



  age: function (){

    return new Date().getYear() - this.dateOfBirth.getYear();

  },

   

  fullName: () => {return this.firstName + ' ' + this.lastName;}

}



let person2 = {

  firstName: "Narmin",

  lastName: "Musrhudova",

  dateOfBirth: new Date(2001, 10, 27),



  age: function (){

    return new Date().getYear() - this.dateOfBirth.getYear();

  },



  fullName: function () { return this.firstName + ' ' + this.lastName }

}



console.log(JSON.stringify(person1));

console.log(person2.fullName());