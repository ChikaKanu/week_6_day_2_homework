const Park = function (name, ticket_price, dinosaurs) {
  this.name = name;
  this.ticket_price = ticket_price;
  this.dinosaurs = [];
}

Park.prototype.addToCollection = function (dinosaur) {
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeFromCollection = function (dinosaur) {
  this.dinosaurs.pop(dinosaur);
};


Park.prototype.maxGuestAttractedPerDay = function (dinosaur) {
  return this.dinosaurs.reduce((max, dinosaur) => max && max.guestsAttractedPerDay > dinosaur.guestsAttractedPerDay ? max : dinosaur, null);
};

Park.prototype.findParticularSpecie = function (specie) {
  const particular_specie = [];
  for(const dinosaur in this.dinosaurs){
    if (dinosaur.specie === specie);
    particular_specie.push(dinosaur);
  }
  return particular_specie;
}


Park.prototype.removeParticularSpecie = function (specie) {
  this.dinosaurs.pop(this.findParticularSpecie(specie));
};

module.exports = Park;
