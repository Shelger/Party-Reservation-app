import companyAPI from "../api/companyAPI";

export async function loginUser(credentials) {
  const user = await companyAPI.post("/login", JSON.stringify(credentials), {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return user.data.accessToken;
}

export async function signUp(credentials) {
  const company = await companyAPI.post("signup", JSON.stringify(credentials), {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return company;
}
