"use strict";

const { reduce } = require("async");

class UserStorage {
  static #users = {
    id: ["seo", "백엔드", "서태규"],
    password: ["asd", "1234", "asd123"],
    name: ["asd", "asdasd", "asdq"],
  };
  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    console.log(newUsers);
    return newUsers;
  }
}
module.exports = UserStorage;
