export function requestPermission(
  auth: { permissions: string[] },
  permission: string,
) {
  if (!auth?.permissions.includes(permission)) {
    throw createError({
      statusCode: 403,
      statusMessage: "Permission denied",
    });
  }
}
