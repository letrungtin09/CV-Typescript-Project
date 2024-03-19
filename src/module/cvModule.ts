interface InfoCV {
  fullName: string;
  avatar: string;
  career: string;
  phoneNumber: string;
  email: string;
  website: string;
  address: string;
}

export class User implements InfoCV {
  public fullName: string;
  public avatar: string;
  public career: string;
  public phoneNumber: string;
  public email: string;
  public website: string;
  public address: string;
  public constructor(
    fullName: string,
    avatar: string,
    career: string,
    phoneNumber: string,
    email: string,
    website: string,
    address: string
  ) {
    this.fullName = fullName;
    this.avatar = avatar;
    this.career = career;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.website = website;
    this.address = address;
  }
}
