exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          vin: `${Math.round(Math.random() * 1000)}`,
          make: "Nissan",
          model: "Sentra",
          milage: "185000",
          transmission: "Manual",
          status: "Clean"
        },
        {
          vin: `${Math.round(Math.random() * 1000)}`,
          make: "Hyundai",
          model: "Sante Fe",
          milage: "125000",
          transmission: "Automatic",
          status: "Clean"
        },
        {
          vin: `${Math.round(Math.random() * 1000)}`,
          make: "Chevrolet",
          model: "Silverado",
          milage: "25000",
          transmission: "Automatic",
          status: "Clean"
        },
        {
          vin: `${Math.round(Math.random() * 1000)}`,
          make: "Honda",
          model: "CR-V",
          milage: "137000",
          transmission: "Automatic",
          status: "Clean"
        },
        {
          vin: `${Math.round(Math.random() * 1000)}`,
          make: "Chevrolet",
          model: "Bel-air",
          milage: "Unknown",
          transmission: "Automatic"
        }
      ]);
    });
};
