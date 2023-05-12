export default class UserInfo {
  constructor({ userNameSelector, userJobSelector, userImgSelector }) {
    this.userNameNode = document.querySelector(userNameSelector);
    this.userJobNode = document.querySelector(userJobSelector);
    this.userImgNode = document.querySelector(userImgSelector);
    this.userId = "";
  }

  getUserInfo() {
    const name = this.userNameNode.textContent;
    const job = this.userJobNode.textContent;
    const url = this.userImgNode.src;
    const inputInfo = { name: name, job: job, url: url };
    return inputInfo;
  }

  setUserInfo(name, job) {
    this.userNameNode.textContent = name;
    this.userJobNode.textContent = job;
  }
  setUserImg(url) {
    this.userImgNode.src = url;
  }

  setUserId(id) {
    this.userId = id;
  }
}
