"use server";

export const addUser = async (formData) => {
  const {
    name,
    email,
    password,
    passwordConfirmation,
    phoneNumber,
    address,
    isAdmin,
  } = formData;
  try {
    const data = {
      name,
      email,
      password,
      passwordConfirmation,
      phoneNumber,
      address,
      role: isAdmin ? "admin" : "user",
    };
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDBkMTY5Y2RiZDVkY2RhOTJkYWUzYyIsImlhdCI6MTcxMTMyOTgxMSwiZXhwIjoxNzE2NTEzODExfQ.J6DGgLZY59R9ZDRrkepIQeE1P9gzMD8Ba2kNK6e2WbE`,
      },
      cache: "no-store",
      body: JSON.stringify(data),
    });
    const result = await res.json();
    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create user!");
  }
};
export const deleteUser = async (userId) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/user/${userId}`, {
    method: "DeLETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDBkMTY5Y2RiZDVkY2RhOTJkYWUzYyIsImlhdCI6MTcxMTMyOTgxMSwiZXhwIjoxNzE2NTEzODExfQ.J6DGgLZY59R9ZDRrkepIQeE1P9gzMD8Ba2kNK6e2WbE`,
    },
    cache: "no-store",
  });
  const result = res.status == 204 ? { status: "success" } : await res.json();
  return result;
};
export const updateUser = async (userId, formData) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/user/${userId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDBkMTY5Y2RiZDVkY2RhOTJkYWUzYyIsImlhdCI6MTcxMTMyOTgxMSwiZXhwIjoxNzE2NTEzODExfQ.J6DGgLZY59R9ZDRrkepIQeE1P9gzMD8Ba2kNK6e2WbE`,
    },
    body: JSON.stringify(formData),
    cache: "no-store",
  });
  const result = await res.json();
  return result;
};
