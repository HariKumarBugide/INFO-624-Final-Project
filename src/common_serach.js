// return the user data from the session storage
export const getres = () => {
  const ser_res = sessionStorage.getItem('data');
  console.log("Response Object is:"+JSON.parse(ser_res));
  if (ser_res) return JSON.parse(ser_res );
  else return null;
}


// set the token and user from the session storage
export const setSession = (response) => {

  sessionStorage.setItem('data', JSON.stringify(response));

}