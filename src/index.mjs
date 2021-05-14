import { authenticateUser, authorizeUser } from "./modules/auth/index.mjs";

try {
  authorizeUser();
} catch (e) {
  console.error(e);
}
