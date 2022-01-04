import { createContext, useState } from "react";

export const UserInfo = createContext({
  nombre: null,
  setNombre: () => {},
  setProfileP: () => {},
  profileP: null,
  login: null,
  setLogin: () => {},
});
