export default class UserInfo {
  constructor({ userNameSelector, userJobSelector }) {
    this.userNameNode = document.querySelector(userNameSelector);
    this.userJobNode = document.querySelector(userJobSelector);
  }

  getUserInfo() {
    const name = this.userNameNode.textContent;
    const job = this.userJobNode.textContent;
    const inputInfo = { name: name, job: job };
    return inputInfo;
  }

  setUserInfo(name, job) {
    this.userNameNode.textContent = name;
    this.userJobNode.textContent = job;
  }
}
