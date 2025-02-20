export default class Character {
	constructor(name, type) {
		this.name = name;
		this.type = type;
		this.distance = 100;
		this.attack = null;
		this.stoned = false;

	}
	set stoned(value) {
		this._stoned = value;
	}
	get stoned() {
		return this._stoned;
	}

	set attack(value) {
		this._attack = value;
	}
	get attack() {
		const attack = this._attack * (1 - (this.distance - 1) / 10);
		if (this._stoned) {
			return attack - Math.log2(this.distance) * 5;
		}
		return attack;
	}
}