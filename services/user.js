module.exports = class UserService {
  constructor(userRepoInstance) {
    this.userRepo = userRepoInstance;
  }
  getUserData = async () => {
    try {
      const allUser = this.userRepo.getAllUser();
      return allUser;
    } catch (err) {
      throw err;
    }
  };

  registerNewUser = async ({
    email,
    firstName,
    lastName,
    password,
    mobileNo,
    username,
  }) => {
    try {
      const registerNewUserData = await this.userRepo.registerNewUser({
        email,
        firstName,
        lastName,
        password,
        mobileNo,
        username,
      });
      const userId = registerNewUserData.id;
      await this.userRepo.updateUserSession(userId);
      return registerNewUserData;
    } catch (err) {
      console.log("Service layer");
      console.error(err.message);
      // res.status(500).send("Server error");
    }
  };

  loginExistingUser = async ({ email, password }) => {
    try {
      const loginUser = await this.userRepo.loginExistingUser({
        email,
        password,
      });
      const userId = loginUser.id;
      const createdAt = loginUser.createdAt;
      await this.userRepo.updateUserSession(userId, createdAt);
      return loginUser;
    } catch (err) {
      throw err;
    }
  };

  saveUserAddress = async ({
    id,
    addressLine1,
    addressLine2,
    city,
    postalCode,
    country,
    telephoneNo,
    mobileNo,
  }) => {
    try {
      const user = await this.userRepo.saveUserAddress({
        id,
        addressLine1,
        addressLine2,
        city,
        postalCode,
        country,
        telephoneNo,
        mobileNo,
      });

      return user;
    } catch (err) {
      throw err;
    }
  };
};
