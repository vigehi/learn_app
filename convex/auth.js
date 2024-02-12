
import { auth } from '@convex/auth';

export async function signup(username, email, password) {
  const { user } = await auth.signup({
    username,
    email,
    password,
  });
  return user; 
}

export async function login(usernameOrEmail, password) {
  const { user } = await auth.login({
    usernameOrEmail,
    password,
  });
  return user; 
}
