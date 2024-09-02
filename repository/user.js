module.exports = class UserRepo {
  constructor(userInstance, shoppingSessionInstance, userAddressInstance) {
    this.userInstance = userInstance;
    this.shoppingSessionInstance = shoppingSessionInstance;
    this.userAddressInstance = userAddressInstance;
  }

  getAllUser = async () => {
    try {
      return await this.userInstance.findAll();
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
      let user = await this.userInstance.findOne({ where: { email } });
      if (user) {
        return { err: "user not found" };
      }
      // Create new User
      user = await this.userInstance.create({
        username,
        password,
        firstName,
        lastName,
        email,
        mobileNo,
      });
      return user;
    } catch (err) {
      throw err;
    }
  };

  loginExistingUser = async ({ email, password }) => {
    try {
      let user = await this.userInstance.findOne({ where: { email } });
      if (!user) {
        return { message: "Invalid credentials" };
      }
      return user;
    } catch (err) {
      throw err;
    }
  };
  updateUserSession = async (id, createdAt) => {
    try {
      let user = await this.userInstance.findOne({ where: { id } });
      if (!user) {
        return { message: "Invalid credentials" };
      }
      let sessionUser = await this.shoppingSessionInstance.findOne({
        where: { user_id: id },
      });
      if (!sessionUser) {
        await this.shoppingSessionInstance.create({
          id: id,
          user_id: id,
          total: (new Date(Date.now()) - createdAt) / (1000 * 60),
          created_at: new Date(Date.now()),
          modified_at: new Date(Date.now()),
          createdAt: new Date(Date.now()),
          updatedAt: new Date(Date.now()),
        });
      } else {
        await this.shoppingSessionInstance.update(
          {
            total: (new Date(Date.now()) - createdAt) / (1000 * 60),
            created_at: new Date(Date.now()),
            modified_at: new Date(Date.now()),
            createdAt: new Date(Date.now()),
            updatedAt: new Date(Date.now()),
          },
          { where: { user_id: id } }
        );
      }
    } catch (err) {
      console.log("Repo layer", err);
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
      const data = await this.userAddressInstance.create({
        id: id,
        user_id: id,
        address_line1: addressLine1,
        address_line2: addressLine2,
        city: city,
        postal_code: postalCode,
        country: country,
        telephone: telephoneNo,
        mobile: mobileNo,
        created_at: new Date(Date.now()),
        modified_at: new Date(Date.now()),
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now()),
      });
      if (!data) {
        return "Address not saved";
      }
      return data;
    } catch (err) {
      throw err;
    }
  };
};
