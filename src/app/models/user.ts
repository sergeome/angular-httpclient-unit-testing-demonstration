export class User {
  private firstName;
  private lastName;

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public getFullName() {
    return this.firstName + ' ' + this.lastName;
  }
}
