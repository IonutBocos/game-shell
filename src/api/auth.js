let initialized = false;

export const initializeGoogleAuth = async () => {
  return new Promise((resolve) => {
    if (initialized) {
      return;
    }

    window.addEventListener('load', () => {
      /*global google */
      google.accounts.id.initialize({
        client_id:
          '99668512952-2pb10fv0i8k8ae61o5bjedmiqbaf630t.apps.googleusercontent.com',
        callback: (response) => {
          console.log(response);
        },
      });
      resolve();
      initialized = true;
    });
  });
};
