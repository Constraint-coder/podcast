import { defineMiddleware } from "astro:middleware";

const rutasProtegidas = [
  "/dashboard",
  "/editarperfil",
  "/usuario",
  "/index",
  "/publicaciones",

];

export const onRequest = defineMiddleware(async (context, next) => {

  const { pathname } = context.url;

  const requiereAuth = rutasProtegidas.some((ruta) =>
    pathname.startsWith(ruta)
  );

  if (!requiereAuth) {
    return next();
  }

  const token = context.cookies.get("token")?.value;

  if (!token) {
    return context.redirect("/login");
  }

  return next();
});