
//module.exports = {
  //up: (queryInterface: QueryInterface) => {
  //  return queryInterface.addConstraint("Contacts", ["number", "companyId"], {
  //    type: "unique",
  //    name: "number_companyid_unique"
  //  });
  //},
  import { QueryInterface, DataTypes, Sequelize } from "sequelize";

  module.exports = {
    up: (queryInterface: QueryInterface) => {
      return queryInterface.addConstraint("Contacts", {
        type: 'UNIQUE',
        fields: ["number", "companyId"],
        name: 'number_companyid_unique',
      });
    },

    down: (queryInterface: QueryInterface) => {
      return queryInterface.removeConstraint(
        "Contacts",
        "number_companyid_unique"
      );
    }
  };

