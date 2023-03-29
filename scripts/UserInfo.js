export default class UserInfo {
  constructor({ userName, userJob }) {
    this.userName = userName;
    this.userJob = userJob;
    console.log(typeof this.userJob);
  }

  getUserInfo() {
    const inputInfo = { name: this.userName, job: this.userJob };
    return inputInfo;
    console.log(inputInfo);
  }

  setUserInfo() {
    // const profileName = document.querySelector(".profile__name");
    // const profileJob = document.querySelector("profile__profession");
    // profileName.textContent = this.userName;
    // profileJob.textContent = this.userJob;
    // console.log("setUser");
  }
}
