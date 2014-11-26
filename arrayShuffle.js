Array.prototype.shuffle = function () {
  var rand, value, i;

  if (!this || this.length === 0) { return this; }

  for (i = 0; i < this.length; i++) {
    rand        = Math.floor(Math.random() * i);
    value       = this[i];
    this[i]     = this[rand];
    this[rand]  = value;
  }

  return this;
};

