interface SingletonConfigValues {
  name?: string;
  id?: string;
  email?: string;
  token?: string;
}

let loggedInUserStore: SingletonConfigValues | undefined = undefined;

const userActions = {
  initializeUser: (user: SingletonConfigValues) => {
    loggedInUserStore = user;
  },
  getUserInformation: () => {
    return loggedInUserStore;
  }
};

export default userActions;